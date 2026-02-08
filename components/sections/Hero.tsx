import FadeIn from "@/components/FadeIn";

export default function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
            {/* Background Image / Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="images/hero_map_new.png"
                    alt="African Sovereignty Map"
                    className="w-full h-full object-cover opacity-50 scale-110 animate-pulse-slow"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black z-10" />
            </div>

            <div className="relative z-20 text-center px-8 max-w-7xl mx-auto">
                <FadeIn>
                    <h1 className="font-cinzel font-bold text-4xl md:text-8xl leading-tight tracking-wider drop-shadow-2xl text-white mb-6">
                        <span className="block mb-3 uppercase">DEFINING A NEW ERA</span>
                        <span className="block text-3xl md:text-6xl my-2 uppercase">OF</span>
                        <span className="text-gold-500 block uppercase">AFRICAN SOVEREIGNTY</span>
                    </h1>

                    <div className="w-24 h-px bg-gold-500 mx-auto mb-8" />

                    <p className="font-rajdhani text-lg md:text-2xl text-white/80 tracking-[0.2em] font-light max-w-4xl mx-auto leading-relaxed uppercase">
                        Vertical Venture Consulting, LLC: From Extractive Dependency to Resource-Driven Wealth Creation
                    </p>
                </FadeIn>
            </div>

            {/* Down Arrow / Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
                <div className="w-px h-16 bg-gradient-to-b from-gold-500 to-transparent" />
            </div>
        </section>
    );
}
