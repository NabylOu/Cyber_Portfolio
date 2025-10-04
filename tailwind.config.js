/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyber-dark': '#0a0e27',
        'cyber-blue': '#1a1f3a',
        'neon-teal': '#00d4ff',
        'neon-orange': '#ff6b35',
        'ocean-blue': '#0077b6',
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
        'heading': ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'cyber-gradient': 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%)',
        'wave-pattern': "url('/wave-pattern.svg')",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { textShadow: '0 0 10px #00d4ff, 0 0 20px #00d4ff' },
          '100%': { textShadow: '0 0 20px #00d4ff, 0 0 40px #00d4ff, 0 0 60px #00d4ff' },
        },
      },
    },
  },
  plugins: [],
}
