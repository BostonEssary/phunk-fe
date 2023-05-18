/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "purple-abyss" : "#302442"
      },
      backgroundImage: {
        'home-hero': "url('./images/home-hero.jpg')",
        'bud': "url('./images/bud.jpg')",
        
      },
      backgroundSize: {
        '100%': '100%',
        '50%': '50%',
      },
      dropShadow: {
        'green': '-35px 0px 0px rgba(74, 222, 128, 1)',
        '4xl': [
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      },
      height: {
        '128': '32rem',
      }

    },
  },
  plugins: [],
}
