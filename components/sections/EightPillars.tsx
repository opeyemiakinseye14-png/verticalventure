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
        title: "SOVEREIGN WEALTH FUND DESIGN",
        icon: Database,
        desc: "Engineering architectures that pre-monetize verified national resources into fiscal reserves."
    },
    {
        id: "02",
        title: "GEOSPATIAL RESOURCE INTELLIGENCE",
        icon: Globe,
        desc: "Deploying AI/ML-driven 3D/4D mapping to identify reserves with 90% accuracy."
    },
    {
        id: "03",
        title: "INFRASTRUCTURE STRATEGY",
        icon: Building2,
        desc: "Resource-Backed Infrastructure Bonds (RBIBs) to attract global investment without debt exposure."
    },
    {
        id: "04",
        title: "REGULATORY & FISCAL ADVISORY",
        icon: Scale,
        desc: "Designing robust legal and institutional frameworks for transparent, investable ecosystems."
    },
    {
        id: "05",
        title: "NATIONAL COMMODITY EXCHANGE",
        icon: Ticket,
        desc: "Creating vertically integrated industrial zones for in-country refining and value addition."
    },
    {
        id: "06",
        title: "BORDER SECURITY (RFID TECH)",
        icon: Shield,
        desc: "Next-gen border management integrating RFID monitoring and AI threat analytics."
    },
    {
        id: "07",
        title: "INDUSTRIALIZATION INFRASTRUCTURE",
        icon: Factory,
        desc: "A vertically integrated production ecosystem to catalyze local manufacturing and exports."
    },
    {
        id: "08",
        title: "FINANCIAL DIVERSIFICATION & MONETIZATION STRATEGIES FOR HEALTHCARE TOURISM",
        icon: Stethoscope,
        desc: "Healthcare tourism leverages diversified revenue through integrated medical care, wellness experiences, hospitality, and global patient services."
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
