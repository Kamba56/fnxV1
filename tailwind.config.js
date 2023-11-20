/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          10: '#F4F4F4',
          50: '#002D3C'
        },
        brown: {
          50: '#9F836C'
        }
      },
      backgroundImage: {
        'homeheadline': "url('../images/headline.png')",
        'services': "url('../images/services.png')",
        'values': "url('../images/values.png')",
        'team': "url('../images/team.png')",
        'contact': "url('../images/contact.png')",
        'back': "url('../images/back.svg')"
      },
      fontFamily: {
        "poppins": "'Poppins', sans-serif"
      }
    },
  },
  plugins: [],
}

