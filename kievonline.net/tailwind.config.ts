import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Editorial luxury palette inspired by Ukrainian heritage
      colors: {
        // Primary: Deep Ukrainian blues and golds
        ukraine: {
          navy: '#0a1428', // Deep navy like ancient manuscripts
          blue: '#1e3a5f', // Dnipro blue
          gold: '#d4a574', // Warm heritage gold
          cream: '#faf8f3', // Parchment cream
        },
        // Accent: Rich terracotta and bronze
        heritage: {
          terracotta: '#a85d4f',
          bronze: '#8b7355',
          stone: '#c9bfb0',
          cream: '#f5f0e6',
        },
        // Neutral palette
        slate: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d3d3d1',
          400: '#a8a8a5',
          500: '#78756f',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
        },
      },
      fontFamily: {
        // Editorial display: Playfair Display for luxury heritage feel
        display: ['Playfair Display', 'Georgia', 'serif'],
        // Serif body: Crimson Pro for elegant readability
        serif: ['Crimson Pro', 'Georgia', 'serif'],
        // Sans-serif: Source Sans 3 for modern clarity
        sans: ['Source Sans 3', 'system-ui', 'sans-serif'],
        // Mono: IBM Plex Mono for technical elements
        mono: ['IBM Plex Mono', 'monospace'],
      },
      fontSize: {
        // Extreme sizing for impact
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['2rem', { lineHeight: '2.5rem' }],
        '4xl': ['2.5rem', { lineHeight: '3rem' }],
        '5xl': ['3rem', { lineHeight: '1.1' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
        '7xl': ['4.5rem', { lineHeight: '1.1' }],
      },
      backgroundImage: {
        // Gradient: Editorial luxury aesthetic
        'gradient-hero': 'linear-gradient(135deg, rgba(10, 20, 40, 0.7) 0%, rgba(30, 58, 95, 0.7) 50%, rgba(168, 93, 79, 0.6) 100%), url(/images/hero-bg.webp)',
        'gradient-subtle': 'linear-gradient(to bottom, rgba(250, 248, 243, 0.95), rgba(245, 240, 230, 1))',
        'gradient-gold': 'linear-gradient(135deg, #d4a574 0%, #a85d4f 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0a1428 0%, #1a2332 100%)',
      },
      borderRadius: {
        'sm': '0.25rem',
        'base': '0.5rem',
        'md': '0.75rem',
        'lg': '1rem',
        'xl': '1.5rem',
        '2xl': '2rem',
      },
      spacing: {
        'xs': '0.25rem',
        'sm': '0.5rem',
        'md': '1rem',
        'lg': '1.5rem',
        'xl': '2rem',
        '2xl': '3rem',
        '3xl': '4rem',
        '4xl': '6rem',
      },
      boxShadow: {
        // Subtle, sophisticated shadows
        'sm': '0 1px 2px 0 rgba(10, 20, 40, 0.05)',
        'base': '0 1px 3px 0 rgba(10, 20, 40, 0.1), 0 1px 2px 0 rgba(10, 20, 40, 0.06)',
        'md': '0 4px 6px -1px rgba(10, 20, 40, 0.1), 0 2px 4px -1px rgba(10, 20, 40, 0.06)',
        'lg': '0 10px 15px -3px rgba(10, 20, 40, 0.1), 0 4px 6px -2px rgba(10, 20, 40, 0.05)',
        'xl': '0 20px 25px -5px rgba(10, 20, 40, 0.1), 0 10px 10px -5px rgba(10, 20, 40, 0.04)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212, 165, 116, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(212, 165, 116, 0.6)' },
        },
      },
      transitionTimingFunction: {
        'in-out-expo': 'cubic-bezier(0.87, 0, 0.13, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
