
import type { Config } from "tailwindcss";

export default {
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
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				vampire: {
					primary: '#8B0000',     // Deep blood red
					secondary: '#1A1F2C',   // Dark background
					accent: '#7E69AB',      // Purple accent
					text: '#C8C8C9',        // Light gray text
					dark: '#0F0F0F',        // Very dark background
					blood: '#5B0000',       // Darker blood red
					pale: '#E5DEFF',        // Soft purple/lavender
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'blood-pulse': {
					'0%, 100%': { boxShadow: '0 0 5px 0 rgba(139, 0, 0, 0.3)' },
					'50%': { boxShadow: '0 0 15px 5px rgba(139, 0, 0, 0.5)' }
				},
				'subtle-float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-5px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'blood-pulse': 'blood-pulse 4s ease-in-out infinite',
				'subtle-float': 'subtle-float 6s ease-in-out infinite'
			},
			fontFamily: {
				gothic: ['Gothic', 'serif'],
			},
			backgroundImage: {
				'vampire-texture': "url('/bg-texture.png')",
				'blood-gradient': "linear-gradient(to right, #8B0000, #5B0000)",
				'dark-gradient': "linear-gradient(to bottom, #1A1F2C, #0F0F0F)"
			},
			boxShadow: {
				'blood': '0 4px 14px -2px rgba(139, 0, 0, 0.4)',
				'inner-blood': 'inset 0 2px 6px -1px rgba(139, 0, 0, 0.3)'
			},
			typography: {
				DEFAULT: {
					css: {
						color: '#C8C8C9',
						a: {
							color: '#E5DEFF',
							'&:hover': {
								color: '#8B0000',
							},
						},
						h1: {
							color: '#8B0000',
						},
						h2: {
							color: '#8B0000',
						},
						h3: {
							color: '#8B0000',
						},
						h4: {
							color: '#8B0000',
						},
					},
				},
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
