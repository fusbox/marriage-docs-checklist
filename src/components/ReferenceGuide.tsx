"use client";

import { MapPin, Clock, BookOpen, Image as ImageIcon } from "lucide-react";

export function ReferenceGuide() {
    return (
        <div className="space-y-6">

            {/* Locations & Timing Grid */}
            <div className="grid md:grid-cols-2 gap-4">
                <div className="glass-card p-5 rounded-2xl border-l-4 border-l-teal-light">
                    <div className="flex items-center gap-2 mb-2">
                        <MapPin className="w-5 h-5 text-teal-100" />
                        <h3 className="font-semibold text-gold-light">Clark County Locations</h3>
                    </div>
                    <div className="space-y-4 text-sm text-warm-gray leading-relaxed mt-4">
                        <a href="https://maps.google.com/?q=201+E+Clark+Ave,+Las+Vegas,+NV" target="_blank" rel="noopener noreferrer" className="block group">
                            <strong className="text-warm-white group-hover:text-gold-light transition-colors">Marriage License Bureau</strong><br />
                            <span className="underline decoration-teal-light/30 underline-offset-2 group-hover:decoration-gold-main/50 transition-colors">201 E Clark Ave, Las Vegas</span><br />
                            <span className="text-xs opacity-80">(8am - midnight, daily)</span>
                        </a>
                        <a href="https://maps.google.com/?q=240+S+Water+St,+Henderson,+NV" target="_blank" rel="noopener noreferrer" className="block group">
                            <strong className="text-warm-white group-hover:text-gold-light transition-colors">Henderson Office</strong><br />
                            <span className="underline decoration-teal-light/30 underline-offset-2 group-hover:decoration-gold-main/50 transition-colors">240 S Water St, Henderson</span><br />
                            <span className="text-xs opacity-80">(Mon-Thu 8am-5pm. Closed noon-1pm)</span>
                        </a>
                    </div>
                </div>

                <div className="glass-card p-5 rounded-2xl border-l-4 border-l-gold-main">
                    <div className="flex items-center gap-2 mb-2">
                        <Clock className="w-5 h-5 text-gold-main" />
                        <h3 className="font-semibold text-gold-light">Critical Filing Timelines</h3>
                    </div>
                    <div className="space-y-3 text-sm text-warm-gray leading-relaxed">
                        <p><strong className="text-warm-white">Pre-Ceremony:</strong> Application packet must be received <strong className="text-gold-main">no less than 30 days</strong> prior to April 25.</p>
                        <p><strong className="text-warm-white">Post-Ceremony:</strong> The official Certificate must be filed within <strong className="text-gold-main">10 calendar days</strong>. In-person delivery is highly recommended.</p>
                    </div>
                </div>
            </div>

            {/* Ceremony Rules Card */}
            <div className="glass-card p-6 rounded-2xl bg-linear-to-br from-teal-surface/60 to-teal-bg/40">
                <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="w-5 h-5 text-gold-main" />
                    <h3 className="font-serif text-lg text-gold-light">Ceremony & Document Rules</h3>
                </div>

                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 text-sm text-warm-gray">
                    <li className="flex gap-2">
                        <div className="mt-0.5 text-teal-light">•</div>
                        <span><strong className="text-warm-white">Location Binding:</strong> Single ceremony permission is strictly bound to Clark County borders.</span>
                    </li>
                    <li className="flex gap-2">
                        <div className="mt-0.5 text-teal-light">•</div>
                        <span><strong className="text-warm-white">Witness Requirement:</strong> At least one witness MUST be present in the same room.</span>
                    </li>
                    <li className="flex gap-2">
                        <div className="mt-0.5 text-teal-light">•</div>
                        <span><strong className="text-warm-white">Black Ink Only:</strong> The Marriage Certificate must be filled out completely and legibly in black ink.</span>
                    </li>
                    <li className="flex gap-2">
                        <div className="mt-0.5 text-teal-light">•</div>
                        <span><strong className="text-warm-white">No Margins/Corrections:</strong> No writing may extend into document margins. Mistakes require official correction queues.</span>
                    </li>
                    <li className="flex gap-2">
                        <div className="mt-0.5 text-teal-light">•</div>
                        <span><strong className="text-warm-white">License Custody:</strong> Officiant MUST have the valid license in hand before performing ceremony.</span>
                    </li>
                </ul>
            </div>

            {/* Keepsake Visualizer */}
            <div className="glass-card p-2 rounded-2xl overflow-hidden group">
                <div className="bg-teal-surface/50 rounded-xl p-6 flex flex-col items-center justify-center min-h-[200px] border border-teal-light/20">
                    <ImageIcon className="w-8 h-8 text-teal-light mb-3" />
                    <h4 className="font-medium text-gold-light">Marriage Certificate Keepsake</h4>
                    <p className="text-xs text-warm-gray text-center max-w-sm mt-2">
                        The keepsake is a souvenir document given to the couple immediately. It is NOT legal proof of marriage.
                    </p>
                    <a
                        href="https://media.easygenerator.com/api/media/image/f285a46d-9b1e-43a4-ade1-fcaf93522df3.jpg?courseId=c970c6f7-bff3-4a94-bda5-bc4b92aa7d80&publishMode=Publish"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 px-4 py-2 bg-gold-main text-teal-bg text-xs font-semibold rounded-full hover:bg-gold-light transition-colors"
                    >
                        View Official Keepsake Image
                    </a>
                </div>
            </div>

        </div>
    );
}
