"use client";

import { useState, useEffect, startTransition } from "react";
import { INITIAL_TASKS, Task } from "@/data/tasks";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Circle, AlertCircle, Calendar, X, Download } from "lucide-react";

export function TaskList() {
    const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);
    const [mounted, setMounted] = useState(false);

    // Form / Modal State
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [certDetails, setCertDetails] = useState({
        philEnglish: "",
        janeEnglish: "",
        philNative: "",
        janeNative: "",
        witness1: "",
        witness2: ""
    });

    useEffect(() => {
        const saved = localStorage.getItem("wedding-tasks");
        if (saved) {
            try {
                const parsed = JSON.parse(saved) as Task[];

                // Migration: Ensure state is in sync with INITIAL_TASKS (add new, remove obsolete)
                const initialIds = new Set(INITIAL_TASKS.map(t => t.id));

                // 1. Remove tasks from parsed state that no longer exist in INITIAL_TASKS
                const filteredTasks = parsed.filter(t => initialIds.has(t.id));

                // 2. Add tasks from INITIAL_TASKS that aren't in state
                const currentIds = new Set(filteredTasks.map(t => t.id));
                const tasksToAdd = INITIAL_TASKS.filter(t => !currentIds.has(t.id));

                const finalTasks = [...filteredTasks, ...tasksToAdd];
                const hasChanges = parsed.length !== finalTasks.length || tasksToAdd.length > 0;

                startTransition(() => {
                    setTasks(hasChanges ? finalTasks : parsed);
                });
            } catch (e) {
                console.error("Failed to parse saved tasks", e);
            }
        }

        const savedDetails = localStorage.getItem("wedding-cert-details");
        if (savedDetails) {
            try {
                const parsed = JSON.parse(savedDetails);
                startTransition(() => {
                    setCertDetails(parsed);
                });
            } catch (e) {
                console.error("Failed to parse cert details", e);
            }
        }

        startTransition(() => {
            setMounted(true);
        });
    }, []);

    useEffect(() => {
        if (mounted) {
            localStorage.setItem("wedding-tasks", JSON.stringify(tasks));
            localStorage.setItem("wedding-cert-details", JSON.stringify(certDetails));
        }
    }, [tasks, certDetails, mounted]);

    const toggleTask = (id: string) => {
        setTasks(tasks.map(t =>
            t.id === id
                ? { ...t, status: t.status === 'Completed' ? 'Pending' : 'Completed' }
                : t
        ));
    };

    const isDetailsComplete = (
        !!certDetails.philEnglish &&
        !!certDetails.janeEnglish &&
        !!certDetails.philNative &&
        !!certDetails.janeNative &&
        (!!certDetails.witness1 || !!certDetails.witness2)
    );

    if (!mounted) return <div className="min-h-[400px] animate-pulse bg-teal-surface rounded-2xl" />;

    const categories = ['Certificate Details', 'Application Prep', 'Pre-Ceremony', 'Ceremony', 'Post-Ceremony'] as const;

    return (
        <div className="w-full space-y-12">
            {categories.map((category) => {
                const categoryTasks = tasks.filter(t => t.category === category);
                const completedCount = categoryTasks.filter(t => t.id === 't-details' ? isDetailsComplete : (t.status === 'Completed')).length;
                const progress = categoryTasks.length === 0 ? 0 : Math.round((completedCount / categoryTasks.length) * 100);

                return (
                    <div key={category} className="space-y-4">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-xl md:text-2xl font-serif text-warm-white tracking-tight">{category}</h3>
                            <span className="text-sm font-medium text-gold-main bg-gold-main/10 px-3 py-1 rounded-full">{progress}% Done</span>
                        </div>

                        <div className="grid gap-3">
                            <AnimatePresence>
                                {categoryTasks.map((task) => {
                                    const isCompleted = task.id === 't-details' ? isDetailsComplete : task.status === 'Completed';

                                    return (
                                        <motion.div
                                            layout
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            key={task.id}
                                            onClick={() => task.id === 't-details' ? setIsModalOpen(true) : toggleTask(task.id)}
                                            className={`
                        group relative overflow-hidden rounded-xl md:rounded-2xl border transition-all duration-300 cursor-pointer
                        hover:border-gold-main/60
                        ${isCompleted
                                                    ? 'bg-sage-muted/70 border-sage-muted opacity-80 shadow-inner'
                                                    : 'glass-card'}
                      `}
                                        >
                                            <div className="p-4 md:p-5 flex items-start gap-4">
                                                <button className="mt-0.5 shrink-0 transition-transform duration-200 group-hover:scale-110">
                                                    {isCompleted ? (
                                                        <CheckCircle2 className="w-6 h-6 text-warm-gray/50" />
                                                    ) : (
                                                        <Circle className="w-6 h-6 text-teal-light group-hover:text-gold-light" />
                                                    )}
                                                </button>

                                                <div className="flex-1 min-w-0">
                                                    <h4 className={`text-base md:text-lg tracking-tight mb-1 transition-colors ${isCompleted ? 'text-warm-gray/60 line-through' : 'text-warm-white'}`}>
                                                        {task.title}
                                                    </h4>

                                                    <div className={`flex flex-wrap items-center gap-x-3 gap-y-2 mt-2 transition-opacity duration-300 ${isCompleted ? 'opacity-40' : 'opacity-100'}`}>
                                                        <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium 
                              ${task.assignee === 'Fu' ? 'bg-teal-light/30 text-teal-100' : 'bg-rose-dark/20 text-rose-light'}
                            `}>
                                                            {task.assignee}
                                                        </span>

                                                        <div className="flex items-center text-xs text-warm-gray">
                                                            <Calendar className="w-3.5 h-3.5 mr-1.5 opacity-70" />
                                                            <span>Due: {task.internalDeadline}</span>
                                                        </div>

                                                        {task.statutoryDeadline && (
                                                            <div className="flex items-center text-xs text-gold-main bg-gold-main/10 px-1.5 py-0.5 rounded border border-gold-main/20">
                                                                <AlertCircle className="w-3.5 h-3.5 mr-1" />
                                                                <span>Statutory: {task.statutoryDeadline}</span>
                                                            </div>
                                                        )}
                                                    </div>

                                                    {/* Task Specific Actions */}
                                                    {task.id === 't1' && (
                                                        <div className="mt-3">
                                                            <a
                                                                href="/MO-Application-Single-Ceremony.pdf"
                                                                download="MO-Application-Single-Ceremony.pdf"
                                                                onClick={(e) => e.stopPropagation()}
                                                                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-teal-light/20 text-teal-100 border border-teal-light/30 hover:bg-teal-light/30 transition-colors"
                                                            >
                                                                <Download className="w-3.5 h-3.5" />
                                                                Download Application PDF
                                                            </a>
                                                        </div>
                                                    )}


                                                </div>
                                            </div>

                                            <div className={`absolute inset-0 bg-linear-to-r from-gold-main/0 via-gold-main/0 to-gold-main/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${isCompleted ? 'hidden' : 'block'}`} />
                                        </motion.div>
                                    );
                                })}
                            </AnimatePresence>
                        </div>
                    </div>
                );
            })}

            {/* Certificate Details Modal Popup */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-teal-bg/80 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            className="bg-teal-surface border border-rose-main/20 rounded-2xl shadow-2xl w-full max-w-xl max-h-[90vh] overflow-y-auto"
                        >
                            <div className="p-6 md:p-8 space-y-8">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h2 className="text-2xl font-serif text-rose-light">Certificate Details</h2>
                                        <p className="text-sm text-warm-gray mt-1">Please provide names exactly as they should appear on the documents.</p>
                                    </div>
                                    <button onClick={() => setIsModalOpen(false)} className="text-warm-gray hover:text-warm-white p-2 shrink-0">
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>

                                <div className="space-y-6">
                                    {/* Official Certificate Section */}
                                    <section className="space-y-4">
                                        <h3 className="text-lg font-medium text-warm-white border-b border-teal-light/30 pb-2">Official Certificate</h3>
                                        <p className="text-xs text-warm-gray/80 -mt-2">Input English names exactly as they appear on your government IDs.</p>

                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-xs font-medium text-rose-light mb-1.5 opacity-90">Phil (English)</label>
                                                <input
                                                    type="text"
                                                    value={certDetails.philEnglish}
                                                    onChange={e => setCertDetails({ ...certDetails, philEnglish: e.target.value })}
                                                    className="w-full bg-teal-surface/70 border border-teal-light/30 rounded-lg px-3 py-2 text-sm text-warm-white focus:outline-none focus:border-rose-main/70 focus:ring-1 focus:ring-rose-main/50 transition-all font-sans"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-medium text-rose-light mb-1.5 opacity-90">Jane (English)</label>
                                                <input
                                                    type="text"
                                                    value={certDetails.janeEnglish}
                                                    onChange={e => setCertDetails({ ...certDetails, janeEnglish: e.target.value })}
                                                    className="w-full bg-teal-surface/70 border border-teal-light/30 rounded-lg px-3 py-2 text-sm text-warm-white focus:outline-none focus:border-rose-main/70 focus:ring-1 focus:ring-rose-main/50 transition-all font-sans"
                                                />
                                            </div>
                                        </div>

                                        <p className="text-xs text-warm-gray/80 mt-4">Provide names of up to two witnesses (one required).</p>
                                        <div className="grid md:grid-cols-2 gap-4 mt-2">
                                            <div>
                                                <label className="block text-xs font-medium text-teal-100 mb-1.5 opacity-90">Witness 1</label>
                                                <input
                                                    type="text"
                                                    value={certDetails.witness1}
                                                    onChange={e => setCertDetails({ ...certDetails, witness1: e.target.value })}
                                                    className="w-full bg-teal-surface/70 border border-teal-light/30 rounded-lg px-3 py-2 text-sm text-warm-white focus:outline-none focus:border-teal-100 focus:ring-1 transition-all font-sans"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-medium text-teal-100 mb-1.5 opacity-90">Witness 2</label>
                                                <input
                                                    type="text"
                                                    value={certDetails.witness2}
                                                    onChange={e => setCertDetails({ ...certDetails, witness2: e.target.value })}
                                                    className="w-full bg-teal-surface/70 border border-teal-light/30 rounded-lg px-3 py-2 text-sm text-warm-white focus:outline-none focus:border-teal-100 focus:ring-1 transition-all font-sans"
                                                />
                                            </div>
                                        </div>
                                    </section>

                                    {/* Keepsake Section */}
                                    <section className="space-y-4 pt-2">
                                        <h3 className="text-lg font-medium text-warm-white border-b border-teal-light/30 pb-2">Bespoke Keepsake</h3>
                                        <p className="text-xs text-warm-gray/80 -mt-2">For the custom ceremonial certificate, please type or draw your native names.</p>

                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-xs font-medium text-rose-light mb-1.5 opacity-90">Phil (Chinese/Hanzi)</label>
                                                <input
                                                    type="text"
                                                    lang="zh-CN"
                                                    spellCheck={false}
                                                    value={certDetails.philNative}
                                                    onChange={e => setCertDetails({ ...certDetails, philNative: e.target.value })}
                                                    className="w-full bg-teal-surface/70 border border-rose-main/20 rounded-lg px-3 py-2 text-base text-warm-white focus:outline-none focus:border-rose-main/70 focus:ring-1 focus:ring-rose-main/50 transition-all font-noto-sc"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-medium text-rose-light mb-1.5 opacity-90">Jane (Korean/Hangul)</label>
                                                <input
                                                    type="text"
                                                    lang="ko"
                                                    spellCheck={false}
                                                    value={certDetails.janeNative}
                                                    onChange={e => setCertDetails({ ...certDetails, janeNative: e.target.value })}
                                                    className="w-full bg-teal-surface/70 border border-rose-main/20 rounded-lg px-3 py-2 text-base text-warm-white focus:outline-none focus:border-rose-main/70 focus:ring-1 focus:ring-rose-main/50 transition-all font-noto-kr"
                                                />
                                            </div>
                                        </div>
                                    </section>
                                </div>

                                <div className="pt-6 border-t border-teal-light/30 flex justify-end gap-3">
                                    <button onClick={() => setIsModalOpen(false)} className="px-5 py-2.5 rounded-lg text-sm font-medium text-warm-gray hover:text-warm-white transition-colors">Cancel</button>
                                    <button onClick={() => setIsModalOpen(false)} className="px-5 py-2.5 rounded-lg text-sm font-medium bg-rose-main/20 text-rose-light border border-rose-main/30 hover:bg-rose-main/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] transition-colors">Save Details</button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
