import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#000000",
                foreground: "#ffffff",
                gold: {
                    400: "#D4AF37",
                    500: "#B8860B",
                    600: "#996515",
                    700: "#7A5210",
                    900: "#3D2908",
                },
            },
            fontFamily: {
                cinzel: ["var(--font-cinzel)"],
                inter: ["var(--font-inter)"],
                rajdhani: ["var(--font-rajdhani)"],
            },
            backgroundImage: {
                "gold-gradient": "linear-gradient(135deg, #FFD700 0%, #B8860B 50%, #7A5210 100%)",
            },
        },
    },
    plugins: [],
};
export default config;
