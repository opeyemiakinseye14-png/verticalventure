import { LucideIcon, Shield, Scale, Database, Globe, Building2, Ticket, Factory, Stethoscope } from "lucide-react";
import FadeIn from "@/components/FadeIn";

interface Pillar {
    id: string;
    title: string;
    icon: LucideIcon;
    desc: string;
}

const pillars: Pillar[] = [
    {
        id: "01",
        title: "POLITICAL STRATEGY & CAMPAIGN DEVELOPMENT",
        icon: Globe,
        desc: "Comprehensive strategy and campaign development for visionary leadership"
    },
    {
        id: "02",
        title: "POLICY FRAMEWORK DESIGN",
        icon: Scale,
        desc: "Stakeholder engagement and policy framework design for governance"
    },
    {
        id: "03",
        title: "GOVERNANCE MODELS",
        icon: Building2,
        desc: "Governance models for stability, transparency, and regional cooperation"
    },
];

export default function EightPillars() {
    return (
        <section className="relative w-full py-24 px-8 bg-black overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-[0.05]">
                <img
                    src="images/geometric_bg.png"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>
            <div className="relative z-10 max-w-[1400px] mx-auto">
                <div className="text-center mb-20">
                    <FadeIn>
                        <span className="font-rajdhani text-gold-700 tracking-[0.3em] text-xs uppercase block mb-3">
                            STRATEGIC ADVISORY
                        </span>
                        <h2 className="font-cinzel text-3xl md:text-5xl text-white uppercase leading-tight">
                            EIGHT PILLARS OF <br /><span className="text-gold-gradient">SOVEREIGNTY</span>
                        </h2>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-gold-900/20 border border-gold-900/20">
                    {pillars.map((pillar, idx) => (
                        <FadeIn key={pillar.id} delay={idx * 0.05} className="h-full">
                            <div
                                className="relative h-full p-10 bg-[#050505] hover:bg-[#080808] transition-colors group flex flex-col"
                            >
                                <span className="absolute top-6 right-8 font-rajdhani text-4xl text-white/5 font-bold group-hover:text-gold-500/10 transition-colors">
                                    {pillar.id}
                                </span>
                                <div className="mb-8 text-gold-600 group-hover:text-gold-400 transition-colors">
                                    <pillar.icon size={32} strokeWidth={1} />
                                </div>
                                <h3 className="font-cinzel text-sm text-white mb-4 leading-relaxed font-bold tracking-wide">
                                    {pillar.title}
                                </h3>
                                <p className="font-inter text-[11px] text-gray-500 uppercase tracking-widest leading-relaxed group-hover:text-gold-500/60 transition-colors mt-auto">
                                    {pillar.desc}
                                </p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
