"use client";

import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-6 bg-black/20 backdrop-blur-sm border-b border-white/5">
            <div className="font-cinzel font-bold text-sm md:text-xl tracking-widest text-gold-500 leading-tight">
                VERTICAL VENTURE<br className="md:hidden" /> CONSULTING, LLC
            </div>
            <div className="flex-1 md:flex-initial" />
            <div className="hidden md:flex gap-8 text-[10px] tracking-[0.3em] font-rajdhani font-bold text-white/80">
                <Link href="#" className="hover:text-gold-400 transition-colors uppercase">ABOUT</Link>
                <Link href="#" className="hover:text-gold-400 transition-colors uppercase">PILLARS</Link>
                <Link href="#" className="hover:text-gold-400 transition-colors uppercase">CONTACT</Link>
            </div>
            {/* Mobile Menu Icon Placeholder */}
            <div
                className="md:hidden text-gold-500 font-rajdhani font-bold text-[10px] tracking-widest cursor-pointer hover:text-gold-400 transition-colors"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                MENU
            </div>
        </nav>
    );
}
