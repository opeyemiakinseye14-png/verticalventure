import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import WealthCreation from "@/components/sections/WealthCreation";
import EightPillars from "@/components/sections/EightPillars";
import Hipterra from "@/components/sections/Hipterra";
import Consultancy from "@/components/sections/Consultancy";
import AgriManufacturing from "@/components/sections/AgriManufacturing";
import Advocacy from "@/components/sections/Advocacy";
import Blueprint from "@/components/sections/Blueprint";
import Tokenization from "@/components/sections/Tokenization";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-gold-500/30">
            <Navbar />
            <Hero />
            <WealthCreation />
            <div id="pillars"><EightPillars /></div>
            <div id="geospatial"><Hipterra /></div>
            <Consultancy />
            <AgriManufacturing />
            <div id="advocacy"><Advocacy /></div>
            <div id="infrastructure"><Blueprint /></div>
            <div id="tokenization"><Tokenization /></div>
            <Footer />
        </main>
    );
}
