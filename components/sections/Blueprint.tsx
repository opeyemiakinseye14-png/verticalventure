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
                            Vertical Venture Consulting, LLC is constructing the strategic, financial, technological, and cultural architecture for Africa's transformation into a global powerhouse.
                        </p>
                        <p className="font-inter text-gray-400 text-sm md:text-base leading-relaxed mb-8">
                            We envision an Africa where resources are leveraged for lasting prosperity, citizens share in national wealth, infrastructure is financed through innovation, and AI-guided decisions drive continental excellence.
                        </p>
                        <p className="font-inter text-gray-400 text-sm md:text-base leading-relaxed mb-8">
                            Vertical Venture Consulting, LLC's ultimate strategic vision for its African clients is to forge a strong, sustainable, resilient, and prosperous middle class that empowers every citizen and community across the continent. This drives inclusive growth through industrialization, digital innovation, energy independence, and financial sovereignty, building robust tax bases and economic stability amid rapid urbanization and consumer expansion.
                        </p>
                    </FadeIn>
                </div>

                <div className="w-full md:w-1/2">
                    <FadeIn delay={0.3}>
                        <div className="relative p-12 border border-gold-500/20 bg-gradient-to-br from-gold-500/5 to-transparent">
                            <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-gold-500/40" />
                            <div className="absolute bottom-0 left-0 w-24 h-24 border-b border-l border-gold-500/40" />

                            <h4 className="font-cinzel text-gold-500 text-xl font-bold mb-6 tracking-widest uppercase">
                                Vision Pillars
                            </h4>
                            <div className="space-y-4">
                                <div>
                                    <h5 className="text-gold-500 text-[10px] md:text-xs uppercase tracking-widest font-bold">TOKENIZED RESOURCES</h5>
                                    <p className="text-white/60 text-[10px] md:text-xs leading-relaxed">Resources are tokenized, not extracted prematurely</p>
                                </div>
                                <div>
                                    <h5 className="text-gold-500 text-[10px] md:text-xs uppercase tracking-widest font-bold">SHARED PROSPERITY</h5>
                                    <p className="text-white/60 text-[10px] md:text-xs leading-relaxed">Citizens share in national prosperity</p>
                                </div>
                                <div>
                                    <h5 className="text-gold-500 text-[10px] md:text-xs uppercase tracking-widest font-bold">INNOVATION-BACKED INFRASTRUCTURE</h5>
                                    <p className="text-white/60 text-[10px] md:text-xs leading-relaxed">Infrastructure financed by innovation—not debt</p>
                                </div>
                                <div>
                                    <h5 className="text-gold-500 text-[10px] md:text-xs uppercase tracking-widest font-bold">AI-DRIVEN INTELLIGENCE</h5>
                                    <p className="text-white/60 text-[10px] md:text-xs leading-relaxed">AI and geospatial intelligence guide every decision</p>
                                </div>
                                <div>
                                    <h5 className="text-gold-500 text-[10px] md:text-xs uppercase tracking-widest font-bold">INDUSTRIAL LEADERSHIP</h5>
                                    <p className="text-white/60 text-[10px] md:text-xs leading-relaxed">Industrial ecosystems rival global leaders</p>
                                </div>
                                <div>
                                    <h5 className="text-gold-500 text-[10px] md:text-xs uppercase tracking-widest font-bold">CULTURAL ADVANTAGE</h5>
                                    <p className="text-white/60 text-[10px] md:text-xs leading-relaxed">Cultural identity is a competitive advantage</p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
