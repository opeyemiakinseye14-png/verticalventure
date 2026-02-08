import type { Metadata } from "next";
import { Cinzel, Inter, Rajdhani } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const cinzel = Cinzel({
    subsets: ["latin"],
    variable: "--font-cinzel",
    display: "swap",
});

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const rajdhani = Rajdhani({
    weight: ["300", "400", "500", "600", "700"],
    subsets: ["latin"],
    variable: "--font-rajdhani",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Vertical Venture Consulting | Defining a New Era",
    description: "From extractive dependency to resource-driven wealth creation.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={clsx(
                cinzel.variable,
                inter.variable,
                rajdhani.variable,
                "bg-background text-foreground font-inter antialiased"
            )}>
                {children}
            </body>
        </html>
    );
}
