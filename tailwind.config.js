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
          50: '#9F836C',
          100: '#7E624B'
        }
      },
      backgroundImage: {
        'homeheadline': "url('../images/headline.png')",
        'services': "url('../images/services.png')",
        'values': "url('../images/values.png')",
        'team': "url('../images/team.png')",
        'contact': "url('../images/contact.png')",
        'contactmd': "url('../images/contactmd.svg')",
        'back': "url('../images/brown.svg')"
      },
      fontFamily: {
        "pop": ["Poppins", "sans-serif"]
      },
      cursor: {
        'close': "url('../images/cursor.png'), pointer"
      }
    },
  },
  plugins: [],
}

