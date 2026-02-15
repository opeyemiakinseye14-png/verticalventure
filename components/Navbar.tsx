"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Close menu on resize to desktop view
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Prevent background scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isMenuOpen]);

    // Close menu on Escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setIsMenuOpen(false);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    const navLinks = [
        { href: "#", label: "ABOUT" },
        { href: "#", label: "PILLARS" },
        { href: "#", label: "CONTACT" },
    ];

    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-6 bg-black/20 backdrop-blur-sm border-b border-white/5">
                {/* Brand */}
                <div className="font-cinzel font-bold text-sm md:text-xl tracking-widest text-gold-500 leading-tight z-50">
                    VERTICAL VENTURE<br className="md:hidden" /> CONSULTING, LLC
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex gap-8 text-[10px] tracking-[0.3em] font-rajdhani font-bold text-white/80">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="hover:text-gold-400 transition-colors uppercase"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gold-500 hover:text-gold-400 transition-colors z-50 p-2"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
                            onClick={closeMenu} // Close on click outside (background)
                        >
                            <div className="flex flex-col items-center gap-8 text-center" onClick={(e) => e.stopPropagation()}>
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        className="text-gold-500 font-rajdhani font-bold text-xl tracking-[0.3em] uppercase hover:text-white transition-colors"
                                        onClick={closeMenu}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </>
    );
}
