import { CircleDot } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const features = [
    "Zero false positives across 260+ dry-zone tests",
    "Dual-platform AI modeling (Geological, Magnetic, Thermal)",
    "Non-invasive exploration minimizing environmental impact",
    "Accelerated discovery cycles for faster monetization"
];

export default function Hipterra() {
    return (
        <section className="relative w-full py-24 px-8 bg-black overflow-hidden border-y border-white/5">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                <div className="w-full lg:w-1/2 relative">
                    <FadeIn direction="right">
                        {/* Decorative Corner Bracket Top-Left */}
                        <div className="absolute -top-6 -left-6 w-16 h-16 border-t border-l border-gold-900/50"></div>

                        <div className="relative h-[250px] md:h-[400px] border border-white/5 bg-black/50 overflow-hidden">
                            <img
                                src="images/hero_map_new.png"
                                alt="Hipterra AI Mapping"
                                className="absolute inset-0 w-full h-full object-cover opacity-80"
                            />
                            {/* HUD Overlays */}
                            <div className="absolute inset-0 bg-gold-500/5 mix-blend-overlay"></div>
                        </div>

                        {/* Decorative Corner Bracket Bottom-Right */}
                        <div className="absolute -bottom-6 -right-6 w-16 h-16 border-b border-r border-gold-900/50"></div>
                    </FadeIn>
                </div>

                <div className="w-full lg:w-1/2">
                    <FadeIn direction="left">
                        <span className="text-gold-500 font-rajdhani tracking-[0.2em] text-xs uppercase mb-2 block font-bold">
                            MEET OUR EXCLUSIVE PARTNER
                        </span>
                        <h2 className="font-cinzel text-3xl md:text-5xl text-white mb-2">
                            <span className="text-gold-500">HIP</span>TERRA, LLC
                        </h2>
                        <p className="font-serif italic text-gold-200/60 mb-8 text-lg">
                            Sovereign Discovery Technology
                        </p>

                        <p className="font-inter text-gray-400 mb-10 leading-relaxed text-sm">
                            As the exclusive consultancy gateway partnership with HIPTerra, LLC, we deploy cutting-edge AI/ML-driven 3D/4D geospatial hydrocarbon mapping technology. This proprietary platform allows African nations to digitize their subsurface wealth, transforming raw potential into measurable, actionable economic capital.
                        </p>

                        <div className="space-y-4 mb-12">
                            {features.map((item, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <CircleDot className="text-gold-500 w-4 h-4 flex-shrink-0 mt-0.5" />
                                    <span className="font-inter text-gold-500 text-sm">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div>
                            <span className="font-cinzel text-5xl text-gold-500 block mb-1">90%+</span>
                            <span className="font-rajdhani text-gray-500 uppercase tracking-widest text-xs">
                                Accuracy in Resource Discovery
                            </span>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
