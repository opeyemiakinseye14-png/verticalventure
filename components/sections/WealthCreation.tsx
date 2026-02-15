import FadeIn from "@/components/FadeIn";

export default function WealthCreation() {
    return (
        <section id="about" className="relative w-full py-32 px-8 bg-black overflow-hidden border-b border-white/5">
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
                        OUR MISSION
                    </span>
                    <h3 className="font-cinzel text-3xl md:text-5xl text-white max-w-5xl mx-auto leading-tight mb-8 uppercase">
                        FROM EXTRACTIVE DEPENDENCY TO <br />
                        <span className="text-gold-gradient">RESOURCE-DRIVEN WEALTH</span> <br />
                        <span className="text-gold-gradient">CREATION</span> <br />
                    </h3>
                    <div className="w-16 h-px bg-gold-500 mx-auto mb-12" />
                    <p className="font-inter text-gray-400 text-sm md:text-base mb-8 leading-relaxed max-w-4xl mx-auto">
                        Vertical Venture Consulting, LLC partners with visionary African nations to design and implement frameworks that will drive first-world industrialization. Our work is guided by a singular vision: to enable African nations to rise to a new paradigm of resource-driven wealth creation, powered by African ingenuity and technological sovereignty.
                    </p>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
                    <FadeIn delay={0.1}>
                        <div className="p-8 border border-white/5 bg-white/5 backdrop-blur-sm hover:border-gold-500/30 transition-colors h-full">
                            <h4 className="font-cinzel font-bold text-lg text-white mb-3 tracking-wide leading-tight uppercase">
                                First World <br /> Industrialization
                            </h4>
                            <p className="text-gray-500 text-xs leading-relaxed font-inter uppercase tracking-wider">
                                Transforming dormant potential into enduring national prosperity through advanced infrastructure.
                            </p>
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <div className="p-8 border border-white/5 bg-white/5 backdrop-blur-sm hover:border-gold-500/30 transition-colors h-full">
                            <h4 className="font-cinzel font-bold text-lg text-white mb-3 tracking-wide leading-tight uppercase">
                                ENERGY <br /> INDEPENDENCE
                            </h4>
                            <p className="text-gray-500 text-xs leading-relaxed font-inter uppercase tracking-wider">
                                Designing frameworks for secure, sustainable, and sovereign energy ecosystems.
                            </p>
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.3}>
                        <div className="p-8 border border-white/5 bg-white/5 backdrop-blur-sm hover:border-gold-500/30 transition-colors h-full">
                            <h4 className="font-cinzel font-bold text-lg text-white mb-3 tracking-wide leading-tight uppercase">
                                SOVEREIGN <br /> WEALTH DESIGN
                            </h4>
                            <p className="text-gray-500 text-xs leading-relaxed font-inter uppercase tracking-wider">
                                Creating fiscal reserves that stabilize economies and safeguard long-term prosperity.
                            </p>
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.4}>
                        <div className="p-8 border border-white/5 bg-white/5 backdrop-blur-sm hover:border-gold-500/30 transition-colors h-full">
                            <h4 className="font-cinzel font-bold text-lg text-white mb-3 tracking-wide leading-tight uppercase">
                                POLITICAL <br /> INTEGRITY
                            </h4>
                            <p className="text-gray-500 text-xs leading-relaxed font-inter uppercase tracking-wider">
                                Fostering governance that drives stability, growth, and continental unity.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
