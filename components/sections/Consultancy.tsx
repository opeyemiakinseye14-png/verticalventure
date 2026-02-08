import FadeIn from "@/components/FadeIn";

export default function Consultancy() {
    return (
        <section className="relative w-full py-24 px-8 bg-black overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-10">
                <img
                    src="images/network_bg.png"
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row gap-20 items-center">
                    <div className="w-full md:w-1/2">
                        <FadeIn>
                            <span className="text-gold-600 font-rajdhani tracking-[0.2em] text-xs uppercase mb-4 block font-bold">
                                OUR EXPERTISE
                            </span>
                            <h2 className="font-cinzel text-3xl md:text-4xl text-white uppercase leading-tight font-bold">
                                POLITICAL CONSULTANCY & <br />
                                <span className="text-gold-gradient">STRATEGIC ADVISORY</span>
                            </h2>
                            <div className="w-12 h-px bg-gold-500 my-8"></div>
                            <p className="font-inter text-gray-400 text-sm md:text-base mb-8 leading-relaxed">
                                Vertical Venture Consulting, LLC serves as the strategic architect for nations undergoing
                                structural transformation. We provide elite-level advisory services that bridge the
                                gap between political vision and economic reality.
                            </p>
                        </FadeIn>
                    </div>

                    <div className="w-full md:w-1/2 grid grid-cols-1 gap-6">
                        <FadeIn delay={0.2}>
                            <div className="p-8 border border-white/5 bg-white/5 backdrop-blur-md">
                                <h4 className="text-gold-500 font-cinzel text-lg mb-4 uppercase">Direct State Advisory</h4>
                                <p className="text-gray-500 text-xs leading-relaxed uppercase tracking-widest font-medium">
                                    Advising heads of state on sovereign resource management and national modernization protocols.
                                </p>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.4}>
                            <div className="p-8 border border-white/5 bg-white/5 backdrop-blur-md">
                                <h4 className="text-gold-500 font-cinzel text-lg mb-4 uppercase">Structural Reform</h4>
                                <p className="text-gray-500 text-xs leading-relaxed uppercase tracking-widest font-medium">
                                    Designing institutional frameworks that eliminate extractive dependencies and foster local wealth.
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
}
