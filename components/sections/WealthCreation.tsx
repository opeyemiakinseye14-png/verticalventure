import FadeIn from "@/components/FadeIn";

export default function WealthCreation() {
    return (
        <section className="relative w-full py-32 px-8 bg-black overflow-hidden border-b border-white/5">
            <div className="absolute inset-0 z-0 opacity-10">
                <img
                    src="images/geometric_bg.png"
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto text-center">
                <FadeIn>
                    <span className="text-gold-600 font-rajdhani tracking-[0.3em] text-xs uppercase mb-6 block font-bold">
                        OUR CORE MISSION
                    </span>
                    <h3 className="font-cinzel text-3xl md:text-5xl text-white max-w-5xl mx-auto leading-tight mb-8 uppercase">
                        FROM EXTRACTIVE <br />
                        <span className="text-gold-gradient">DEPENDENCY TO</span> <br />
                        <span className="text-gold-gradient">RESOURCE-DRIVEN WEALTH</span> <br />
                        CREATION
                    </h3>
                    <div className="w-16 h-px bg-gold-500 mx-auto mb-12" />
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
                    <FadeIn delay={0.1}>
                        <div className="p-8 border border-white/5 bg-white/5 backdrop-blur-sm hover:border-gold-500/30 transition-colors h-full">
                            <h4 className="font-cinzel font-bold text-lg text-white mb-3 tracking-wide leading-tight uppercase">
                                FIRST WORLD <br /> INDUSTRIALIZATION
                            </h4>
                            <p className="text-gray-500 text-xs leading-relaxed font-inter uppercase tracking-wider">
                                Catalyzing value-added production within African borders to reclaim the global export narrative.
                            </p>
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <div className="p-8 border border-white/5 bg-white/5 backdrop-blur-sm hover:border-gold-500/30 transition-colors h-full">
                            <h4 className="font-cinzel font-bold text-lg text-white mb-3 tracking-wide leading-tight uppercase">
                                ECONOMIC <br /> SELF-RELIANCE
                            </h4>
                            <p className="text-gray-500 text-xs leading-relaxed font-inter uppercase tracking-wider">
                                Transitioning from foreign aid paradigms to sovereign-led development and financial independence.
                            </p>
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.3}>
                        <div className="p-8 border border-white/5 bg-white/5 backdrop-blur-sm hover:border-gold-500/30 transition-colors h-full">
                            <h4 className="font-cinzel font-bold text-lg text-white mb-3 tracking-wide leading-tight uppercase">
                                STRATEGIC <br /> PARTNERSHIPS
                            </h4>
                            <p className="text-gray-500 text-xs leading-relaxed font-inter uppercase tracking-wider">
                                Orchestrating high-level alliances between nations and global venture capital.
                            </p>
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.4}>
                        <div className="p-8 border border-white/5 bg-white/5 backdrop-blur-sm hover:border-gold-500/30 transition-colors h-full">
                            <h4 className="font-cinzel font-bold text-lg text-white mb-3 tracking-wide leading-tight uppercase">
                                LEGACY <br /> ARCHITECTURE
                            </h4>
                            <p className="text-gray-500 text-xs leading-relaxed font-inter uppercase tracking-wider">
                                Building institutional frameworks that secure generational wealth for African citizenry.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
