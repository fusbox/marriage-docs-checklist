import { TaskList } from "@/components/TaskList";
import { ReferenceGuide } from "@/components/ReferenceGuide";
import { Countdown } from "@/components/Countdown";
import Image from "next/image";
import { GoldFlower, TealLeaf, OutlineTwig, FloatingDots } from "@/components/FloralDecorations";

export default function Home() {
  return (
    <main className="pb-24 selection:bg-gold-light selection:text-teal-bg relative overflow-hidden">

      {/* Decorative Floral background hints */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-main opacity-[0.03] blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-light opacity-[0.1] blur-[120px] rounded-full pointer-events-none" />

      {/* Hero Section */}
      <section className="relative pt-12 pb-16 md:pt-24 md:pb-24">

        {/* Muted Panorama Scene Background - Spans the entire hero width, fades at the bottom */}
        <div
          className="absolute inset-0 w-full h-full opacity-60 z-0 pointer-events-none mix-blend-overlay"
          style={{
            WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
            maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)'
          }}
        >
          <Image src="/scene.webp" alt="Desert Panorama Background" fill className="object-cover object-center" priority />
        </div>

        {/* Base Layer Overlay - Transparent at top, grading to full teal-bg opacity at the bottom of the hero */}
        <div className="absolute inset-x-0 bottom-0 top-1/3 bg-linear-to-b from-transparent to-teal-bg to-95% z-10 pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center relative z-20">
          <div className="text-left md:col-span-5 lg:col-span-6 z-20">
            <Countdown />
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-gold-main mb-6 tracking-tight leading-snug">
              Park-Meng Wedding<br />
              <span className="text-warm-white text-3xl md:text-5xl lg:text-6xl">Guide & Checklist</span>
            </h1>
          </div>

          <div className="relative w-full max-w-sm lg:max-w-md mx-auto aspect-3/4 flex items-center justify-center md:col-span-7 lg:col-span-6 z-20">

            {/* Proper Wrapping Frame with Uniform Padding & Gradient Border */}
            {/* 1. Outer Gradient Border Ring */}
            <div className="relative w-full h-full rounded-t-full p-[3px] md:p-1 bg-linear-to-br from-amber-400 via-rose-400 to-amber-500 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)] z-10">

              {/* 2. Middle Spacer (creates the uniform gap) */}
              <div className="relative w-full h-full rounded-t-full bg-teal-surface p-3 md:p-4 lg:p-5 flex flex-col">

                {/* 3. Inner Image Container */}
                <div className="relative w-full h-full rounded-t-full overflow-hidden flex items-center justify-center flex-1">
                  <Image
                    src="/couple-desert.webp"
                    alt="Jane and Phil Spotlight"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-2000"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Overlapping Floral Layers */}
            {/* Top Left Cluster */}
            <div className="absolute top-0 -left-6 lg:-left-12 z-20 pointer-events-none">
              <GoldFlower className="w-32 h-32 lg:w-48 lg:h-48 -rotate-15 drop-shadow-2xl" />
            </div>
            <div className="absolute top-20 -left-12 lg:-left-20 z-0 pointer-events-none">
              <TealLeaf className="w-20 h-40 lg:w-32 lg:h-[280px] -rotate-35 drop-shadow-xl" />
            </div>
            <div className="absolute top-[40%] -left-16 lg:-left-24 z-0 pointer-events-none">
              <TealLeaf className="w-16 h-32 lg:w-24 lg:h-[200px] -rotate-65 drop-shadow-xl opacity-80" />
            </div>

            {/* Bottom Right Cluster */}
            <div className="absolute bottom-4 -right-8 lg:bottom-0 lg:-right-16 z-20 pointer-events-none flex items-center justify-center">
              <TealLeaf className="w-24 h-[200px] lg:w-36 lg:h-[280px] rotate-105 absolute bottom-12 right-12 z-10 drop-shadow-2xl opacity-90" />
              <GoldFlower className="w-28 h-28 lg:w-40 lg:h-40 rotate-25 absolute -bottom-4 right-0 z-20 drop-shadow-2xl" />
              <OutlineTwig className="w-24 h-40 lg:w-36 lg:h-52 -rotate-25 absolute bottom-12 -right-8 z-30" />
            </div>

            {/* Subtle accents */}
            <div className="absolute -bottom-4 -left-6 z-20 pointer-events-none">
              <TealLeaf className="w-16 h-32 lg:w-24 lg:h-48 rotate-55 drop-shadow-xl opacity-90" />
            </div>
            <FloatingDots className="w-full h-full absolute inset-0 z-30 pointer-events-none" />

          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-4 md:px-6 space-y-24 mt-8 relative z-40">

        {/* The Checklist */}
        <div className="scroll-mt-12">
          <div className="mb-8 text-center md:text-left border-b border-gold-main/20 pb-4">
            <h2 className="text-2xl md:text-3xl font-serif text-gold-light mb-2">Timeline & Tasks</h2>
            <p className="text-warm-gray">Track deadlines leading up to and following the ceremony.</p>
          </div>
          <TaskList />
        </div>

        {/* The Reference Center */}
        <div>
          <div className="mb-8 text-center md:text-left border-b border-gold-main/20 pb-4">
            <h2 className="text-2xl md:text-3xl font-serif text-gold-light mb-2">Reference Guide</h2>
            <p className="text-warm-gray">Essential rules and locations for a valid Clark County marriage.</p>
          </div>
          <ReferenceGuide />
        </div>

      </section>

    </main>
  );
}
