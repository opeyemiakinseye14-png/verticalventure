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
                                Vertical Venture Consulting, LLC operates as a strategic political consultancy supporting visionary governance across Africa. We partner with leaders and nations to design frameworks that drive sustainable development, democratic excellence, and continental unity.
                            </p>
                            <div className="mt-8 border-t border-white/10 pt-8">
                                <h4 className="text-gold-500 font-cinzel text-lg mb-4 uppercase">CURRENT ENGAGEMENT</h4>
                                <h5 className="text-white font-cinzel text-md mb-2">Presidential Candidacy Management: Mr. Bol Gai Deng</h5>
                                <p className="font-inter text-gray-400 text-xs md:text-sm leading-relaxed mb-4">
                                    Vertical Venture Consulting, LLC acts as the executive management and official overseer responsible for running and managing the candidacy campaign of Mr. Bol Gai Deng, a trusted leader and presidential candidate for the Republic of South Sudan (Presidential Election, December 2026).
                                </p>
                                <p className="font-inter text-gray-400 text-xs md:text-sm leading-relaxed">
                                    Our mission is to shape a campaign and governance framework reflecting both the aspirations of the South Sudanese people and the broader vision for African unity, democracy, national prosperity, and sustainable 1st world industrialization..
                                </p>
                            </div>
                        </FadeIn>
                    </div>

                    <div className="w-full md:w-1/2 grid grid-cols-1 gap-6">
                        <FadeIn delay={0.2}>
                            <div className="p-8 border border-white/5 bg-white/5 backdrop-blur-md">
                                <h4 className="text-gold-500 font-cinzel text-lg mb-4 uppercase">POLITICAL STRATEGY & CAMPAIGN DEVELOPMENT</h4>
                                <p className="text-gray-500 text-xs leading-relaxed uppercase tracking-widest font-medium">
                                    Comprehensive strategy and campaign development for visionary leadership
                                </p>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.4}>
                            <div className="p-8 border border-white/5 bg-white/5 backdrop-blur-md">
                                <h4 className="text-gold-500 font-cinzel text-lg mb-4 uppercase">POLICY FRAMEWORK DESIGN</h4>
                                <p className="text-gray-500 text-xs leading-relaxed uppercase tracking-widest font-medium">
                                    Stakeholder engagement and policy framework design for governance
                                </p>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.6}>
                            <div className="p-8 border border-white/5 bg-white/5 backdrop-blur-md">
                                <h4 className="text-gold-500 font-cinzel text-lg mb-4 uppercase">GOVERNANCE MODELS</h4>
                                <p className="text-gray-500 text-xs leading-relaxed uppercase tracking-widest font-medium">
                                    Governance models for stability, transparency, and regional cooperation
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
}
