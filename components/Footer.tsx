import Link from "next/link";

export default function Footer() {
    return (
        <footer id="footer" className="w-full bg-black pt-24 pb-8 px-8 border-t border-white/5 font-inter">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-12 mb-20">

                {/* Column 1: Brand & Leadership */}
                <div className="md:col-span-5 space-y-12">
                    {/* Brand */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 border border-gold-500 flex items-center justify-center text-gold-500 font-cinzel font-bold text-xl">
                                V
                            </div>
                            <h2 className="font-cinzel text-xl text-white font-bold tracking-wide">
                                VERTICAL VENTURE<br />CONSULTING, LLC
                            </h2>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                            A global advisory consultancy at the nexus of strategy, technology, and
                            transformation. We partner with visionary African nations to design frameworks for
                            first-world industrialization and independent economic sovereignty.
                        </p>
                    </div>

                    {/* Leadership */}
                    <div>
                        <h3 className="text-gold-600 font-cinzel text-xs tracking-[0.2em] uppercase mb-6 font-bold">
                            LEADERSHIP
                        </h3>
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-white font-cinzel font-bold text-lg mb-1">Darnell E. Collins</h4>
                                <p className="text-gray-500 text-xs">Co-Principal & Managing Partner</p>
                            </div>
                            <div>
                                <h4 className="text-white font-cinzel font-bold text-lg mb-1">Lennie Mitchell</h4>
                                <p className="text-gray-500 text-xs">Co-Principal & Managing Partner</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Column 2: Divisions */}
                <div className="md:col-span-3 md:col-start-7">
                    <h3 className="text-gold-600 font-cinzel text-xs tracking-[0.2em] uppercase mb-8 font-bold">
                        DIVISIONS
                    </h3>
                    <ul className="space-y-6 text-gray-400 text-sm font-medium">
                        <li><Link href="#pillars" className="hover:text-gold-500 transition-colors">Sovereign Wealth</Link></li>
                        <li><Link href="#geospatial" className="hover:text-gold-500 transition-colors">Geospatial Intelligence</Link></li>
                        <li><Link href="#infrastructure" className="hover:text-gold-500 transition-colors">Infrastructure Finance</Link></li>
                        <li><Link href="#tokenization" className="hover:text-gold-500 transition-colors">Commodity Exchange</Link></li>
                    </ul>
                </div>

                {/* Column 3: Contact */}
                <div className="md:col-span-3">
                    <h3 className="text-gold-600 font-cinzel text-xs tracking-[0.2em] uppercase mb-8 font-bold">
                        CONTACT
                    </h3>
                    <ul className="space-y-6 text-gray-400 text-sm font-medium">
                        <li>Washington, D.C.</li>
                        <li>West Chester, Ohio</li>
                        <li>Juba, South Sudan, Africa</li>
                        <li>
                            <a href="mailto:contactus@verticalventure.co" className="text-white/80 hover:text-gold-500 transition-colors">
                                contactus@verticalventure.co
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-600 font-medium uppercase tracking-wider gap-4">
                <span>&copy; 2025 Vertical Venture Consulting, LLC. All Rights Reserved.</span>
                <div className="flex gap-8">
                    <Link href="#footer" className="hover:text-white transition-colors">Privacy Policy</Link>
                    <Link href="#footer" className="hover:text-white transition-colors">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}
