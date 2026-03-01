"use client";

import { useEffect, useState } from "react";

export function Countdown() {
    // April 25, 2026, targeting midnight or assume noon. Let's use 00:00:00 for the day of.
    const targetDate = new Date("2026-04-25T00:00:00").getTime();
    const [timeLeft, setTimeLeft] = useState<{ days: number, hours: number, minutes: number, seconds: number } | null>(null);

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((difference % (1000 * 60)) / 1000)
                });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        // Calculate immediately so it doesn't stay null longer than needed after hydration
        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    // Render a skeleton of the exact same size to prevent awkward layout shift during SSR hydration
    if (!timeLeft) {
        return (
            <div className="inline-flex items-center gap-4 mb-6 h-[44px] md:h-[52px] w-[240px] md:w-[280px] animate-pulse bg-gold-main/10 rounded-lg" />
        );
    }

    return (
        <div className="inline-flex items-center gap-3 md:gap-4 mb-6 text-gold-main font-serif uppercase tracking-widest">
            <div className="flex flex-col items-center">
                <span className="text-3xl md:text-4xl font-normal leading-none tabular-nums">{timeLeft.days}</span>
                <span className="text-[9px] md:text-[10px] opacity-80 mt-1 tracking-[0.2em]">Days</span>
            </div>
            <span className="text-xl md:text-2xl opacity-40 -mt-4">:</span>
            <div className="flex flex-col items-center w-8 md:w-10">
                <span className="text-3xl md:text-4xl font-normal leading-none tabular-nums">{timeLeft.hours.toString().padStart(2, '0')}</span>
                <span className="text-[9px] md:text-[10px] opacity-80 mt-1 tracking-[0.2em]">Hrs</span>
            </div>
            <span className="text-xl md:text-2xl opacity-40 -mt-4">:</span>
            <div className="flex flex-col items-center w-8 md:w-10">
                <span className="text-3xl md:text-4xl font-normal leading-none tabular-nums">{timeLeft.minutes.toString().padStart(2, '0')}</span>
                <span className="text-[9px] md:text-[10px] opacity-80 mt-1 tracking-[0.2em]">Min</span>
            </div>
            <span className="text-xl md:text-2xl opacity-40 -mt-4">:</span>
            <div className="flex flex-col items-center w-8 md:w-10">
                <span className="text-3xl md:text-4xl font-normal leading-none tabular-nums">{timeLeft.seconds.toString().padStart(2, '0')}</span>
                <span className="text-[9px] md:text-[10px] opacity-80 mt-1 tracking-[0.2em]">Sec</span>
            </div>
        </div>
    );
}
