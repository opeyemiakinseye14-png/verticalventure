import FadeIn from "@/components/FadeIn";

export default function Tokenization() {
    return (
        <section className="relative w-full py-32 px-8 bg-black overflow-hidden border-b border-white/5">
            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="order-2 lg:order-1">
                        <FadeIn>
                            <div className="flex border-l-2 border-gold-500 pl-6 mb-24 max-w-3xl">
                                <div className="font-rajdhani font-medium tracking-wide">
                                    <p className="text-white text-xs md:text-sm uppercase mb-3 text-gold-500">
                                        VERTICAL VENTURE CONSULTING, LLC IS NOT SIMPLY ADVISING NATIONS —
                                    </p>
                                    <p className="text-gold-500 text-lg md:text-xl font-serif italic leading-relaxed">
                                        WE ARE ACCELERATING THE RISE OF A SOVEREIGN, TECHNOLOGICALLY
                                        EMPOWERED, ECONOMICALLY UNSTOPPABLE AFRICA.
                                    </p>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <h2 className="font-cinzel text-3xl md:text-7xl text-white mb-8 drop-shadow-2xl">
                                <span className="font-normal normal-case block">The Blockchain of</span>
                                <span className="text-gold-500 font-bold normal-case mt-2 block">African Tokenization ™</span>
                            </h2>
                            <p className="font-inter text-gray-400 text-sm md:text-base max-w-xl leading-relaxed uppercase tracking-widest font-medium mb-8">
                                A unified digital economic ecosystem that connects resource discovery, infrastructural finance, and sovereign wealth design into a transparent, AI-guided financial architecture.
                            </p>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-gold-500 font-cinzel text-lg mb-2 uppercase">ASSET TOKENIZATION</h4>
                                    <p className="text-gray-500 text-xs leading-relaxed">Converting natural resources and national assets into blockchain-based tokens for transparent ownership and trading.</p>
                                </div>
                                <div>
                                    <h4 className="text-gold-500 font-cinzel text-lg mb-2 uppercase">SOVEREIGN CUSTODY</h4>
                                    <p className="text-gray-500 text-xs leading-relaxed">Self-custodial solutions ensuring African nations maintain full control over their digital assets.</p>
                                </div>
                                <div>
                                    <h4 className="text-gold-500 font-cinzel text-lg mb-2 uppercase">RESOURCE-BACKED CURRENCY</h4>
                                    <p className="text-gray-500 text-xs leading-relaxed">Creating stable currencies backed by tangible African resources rather than external debt.</p>
                                </div>
                                <div>
                                    <h4 className="text-gold-500 font-cinzel text-lg mb-2 uppercase">PAN-AFRICAN EXCHANGE</h4>
                                    <p className="text-gray-500 text-xs leading-relaxed">Decentralized trading platforms enabling direct trade between African nations without intermediaries.</p>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    <div className="order-1 lg:order-2">
                        <FadeIn direction="left">
                            <div className="relative aspect-square max-w-[500px] mx-auto opacity-30">
                                <img
                                    src="images/network_bg.png"
                                    alt="Blockchain Network"
                                    className="w-full h-full object-contain animate-spin-slow"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
}
