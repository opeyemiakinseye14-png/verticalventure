import FadeIn from "@/components/FadeIn";

export default function Advocacy() {
    return (
        <section className="relative w-full py-24 px-8 bg-black overflow-hidden border-b border-white/5">
            <div className="absolute inset-0 z-0 opacity-[0.03]">
                <img
                    src="images/geometric_bg.png"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>
            <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">

                {/* Left Content */}
                <div className="w-full lg:w-3/5">
                    <FadeIn>
                        <span className="text-gold-600 font-rajdhani tracking-[0.2em] text-xs uppercase mb-4 block font-bold">
                            MEDIA & LEADERSHIP
                        </span>
                        <h2 className="font-cinzel text-3xl md:text-5xl text-white mb-20 leading-tight">
                            <span className="font-bold normal-case block">Slave to Freedom:</span>
                            <span className="media-title text-gold-500 font-bold normal-case mt-4 block">
                                <span className="block md:inline">A Global Advocacy</span>
                                <span className="block md:inline"> Platform</span>
                            </span>
                        </h2>

                        <div className="space-y-8 font-inter text-gray-400 text-sm leading-relaxed max-w-2xl">
                            <p>
                                Vertical Venture Consulting, LLC proudly presents a major cinematic work documenting the life of Bol Gai Deng, from surviving genocide and enslavement to emerging as a voice of continental leadership and human resilience.
                            </p>
                            <p>
                                More than a film—this is a global advocacy platform for Africa's renaissance, reclaiming a narrative of rebirth and sovereignty.
                            </p>
                        </div>
                        <FadeIn delay={0.6}>
                            <div className="mt-12">
                                <button className="px-10 py-4 bg-[#B8860B]/80 text-black font-rajdhani font-bold text-xs tracking-[0.2em] uppercase hover:bg-[#B8860B] transition-all">
                                    COMING SOON
                                </button>
                            </div>
                        </FadeIn>
                    </FadeIn>
                </div>

                {/* Right Content - Credits */}
                <div className="w-full lg:w-2/5 pl-4 md:pl-12 flex flex-col justify-center space-y-10 py-4">
                    <FadeIn delay={0.2}>
                        <div className="border-l border-gold-900/40 pl-6">
                            <span className="text-gold-600 font-rajdhani tracking-[0.2em] text-[10px] uppercase mb-2 block font-bold">
                                EXECUTIVE PRODUCER
                            </span>
                            <h3 className="font-cinzel text-xl text-white font-bold tracking-wide">
                                DARNELL E. COLLINS
                            </h3>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.3}>
                        <div className="border-l border-gold-900/40 pl-6">
                            <span className="text-gold-600 font-rajdhani tracking-[0.2em] text-[10px] uppercase mb-2 block font-bold">
                                LEAD PRODUCER
                            </span>
                            <h3 className="font-cinzel text-xl text-white font-bold tracking-wide">
                                LENNIE MITCHELL
                            </h3>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.4}>
                        <div className="border-l border-gold-900/40 pl-6">
                            <span className="text-gold-600 font-rajdhani tracking-[0.2em] text-[10px] uppercase mb-2 block font-bold">
                                SCREENWRITER & PRODUCER
                            </span>
                            <h3 className="font-cinzel text-xl text-white font-bold tracking-wide">
                                CHLOE NICOLE COLLINS
                            </h3>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.5}>
                        <div className="border-l border-gold-900/40 pl-6">
                            <span className="text-gold-600 font-rajdhani tracking-[0.2em] text-[10px] uppercase mb-2 block font-bold">
                                DIRECTOR, HOLLYWOOD EAST ST STUDIO
                            </span>
                            <h3 className="font-cinzel text-xl text-white font-bold tracking-wide">
                                GREG AMIKER
                            </h3>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
