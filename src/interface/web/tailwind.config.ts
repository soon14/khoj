import type { Config } from "tailwindcss";

const config = {
    safelist: [
        {
            pattern:
                /to-(blue|yellow|green|pink|purple|orange|red|slate|gray|zinc|neutral|stone|amber|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|fuchsia|rose)-(50|100|200|950)/,
            variants: ["dark"],
        },
        {
            pattern:
                /text-(blue|yellow|green|pink|purple|orange|red|slate|gray|zinc|neutral|stone|amber|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|fuchsia|rose)-(50|100|200|950)/,
            variants: ["dark"],
        },
        {
            pattern:
                /border-(blue|yellow|green|pink|purple|orange|red|slate|gray|zinc|neutral|stone|amber|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|fuchsia|rose)-(50|100|200|950)/,
            variants: ["dark"],
        },
        {
            pattern:
                /border-l-(blue|yellow|green|pink|purple|orange|red|slate|gray|zinc|neutral|stone|amber|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|fuchsia|rose)-(50|100|200|400|500|950)/,
            variants: ["dark"],
        },
        {
            pattern:
                /bg-(blue|yellow|green|pink|purple|orange|red|slate|gray|zinc|neutral|stone|amber|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|fuchsia|rose)-(50|100|200|400|500|950)/,
            variants: ["dark"],
        },
        {
            pattern:
                /ring-(blue|yellow|green|pink|purple|orange|red|slate|gray|zinc|neutral|stone|amber|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|fuchsia|rose)-(50|100|200|400|500|950)/,
            variants: ["focus-visible", "dark"],
        },
    ],
    darkMode: ["class"],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
                "caret-blink": {
                    "0%,70%,100%": { opacity: "1" },
                    "20%,50%": { opacity: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                "caret-blink": "caret-blink 1.25s ease-out infinite",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
