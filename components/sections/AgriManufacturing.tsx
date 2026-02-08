import FadeIn from "@/components/FadeIn";

export default function AgriManufacturing() {
    return (
        <section className="relative w-full py-24 px-8 bg-black border-y border-white/5 font-inter">
            <div className="max-w-[1400px] mx-auto">
                <FadeIn>
                    <span className="text-gold-600 font-rajdhani tracking-[0.2em] text-xs uppercase mb-4 block font-bold">
                        Client Business Blueprint Case Study
                    </span>
                    <h2 className="font-cinzel text-3xl md:text-5xl text-white mb-12 uppercase leading-tight">
                        Big Harvest Agri-Manufacturing, LLC ™
                    </h2>

                    <p className="font-cinzel text-xl text-white mb-6 font-bold tracking-wide uppercase">
                        Boutique Manufacturer of Rugged Farm Equipment & Modular Agri-Infrastructure
                    </p>

                    <p className="text-gray-400 text-sm md:text-base max-w-4xl leading-relaxed mb-12">
                        Ultra-Practical, Agriculture Equipment & Business Solutions for US Domestic Markets and Africa’s Underserved Agricultural Economies
                    </p>

                    <div className="mb-12">
                        <h3 className="text-gold-500 font-cinzel text-2xl mb-6 tracking-widest uppercase font-bold">VISION</h3>
                        <p className="text-gray-300 text-base leading-relaxed max-w-4xl">
                            Mr. Rod Bradshaw of Kansas is a 3rd generation corporate farmer and rancher, that's a client & partner of Vertical Venture Consulting, LLC.
                        </p>
                    </div>

                    <div className="space-y-8 max-w-4xl text-gray-400">
                        <p>His vision is to establish a design-led, small-batch agricultural manufacturer that:</p>
                        <p>Produces IP-owned, locally-adapted farm tools, equipment and modular infrastructure</p>
                        <p>Prioritizes rugged, simple, and easily repairable equipment over high-tech, complex farming machinery</p>
                        <p>Enables franchise and licensing models for scalable multi-continental distribution</p>
                        <p>Partners with governments, NGOs, and entrepreneurs to democratize as a corporate agri suppliership</p>
                        <p>Fosters a new agricultural economy in South Sudan, and throughout the African continent built on self-reliant production and 1st world farming industrialization</p>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
