import FadeIn from "@/components/FadeIn";

export default function Blueprint() {
    return (
        <section className="relative w-full py-24 px-8 bg-black overflow-hidden border-b border-white/5">
            <div className="absolute inset-0 z-0 opacity-[0.03]">
                <img
                    src="images/geometric_bg.png"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>
            <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
                <div className="w-full md:w-1/2">
                    <FadeIn>
                        <span className="text-gold-500 font-rajdhani tracking-[0.2em] text-xs uppercase mb-4 block font-bold">
                            THE MASTER PLAN
                        </span>
                        <h2 className="font-cinzel text-3xl md:text-5xl text-white mb-12 leading-tight uppercase">
                            AFRICA'S <span className="text-gold-500">SOVEREIGN MODERNIZATION</span> <br />
                            BLUEPRINT
                        </h2>
                        <p className="font-inter text-gray-400 text-sm md:text-base leading-relaxed mb-8">
                            We aren't just advising; we are co-creating the blueprint for the next century of
                            African growth.
                        </p>
                    </FadeIn>
                </div>

                <div className="w-full md:w-1/2">
                    <FadeIn delay={0.3}>
                        <div className="relative p-12 border border-gold-500/20 bg-gradient-to-br from-gold-500/5 to-transparent">
                            <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-gold-500/40" />
                            <div className="absolute bottom-0 left-0 w-24 h-24 border-b border-l border-gold-500/40" />

                            <h4 className="font-cinzel text-gold-500 text-xl font-bold mb-6 tracking-widest uppercase">
                                Juba Modernization Protocol
                            </h4>
                            <p className="text-white/60 text-[10px] md:text-xs uppercase tracking-widest leading-loose font-medium">
                                Phase 1: Resource Auditing & Digitization<br />
                                Phase 2: Sovereign Wealth Architecture<br />
                                Phase 3: Vertical Industrial Zones<br />
                                Phase 4: National Tech Infrastructure
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
