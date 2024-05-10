/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customPink: "#FDCFD4",
        'Primary-red': '#F31D32', 
        'Primary-gray': '#5E5E5E',
  },
  backgroundImage: {
    'bgImg': "url('../src/assets/Bg.png')",
    'mapBgImg': "url('../src/assets/Home/bg-2.png')"
  },
  fontFamily: {
    SofiaSans: ["Sofia Sans Semi Condensed", "sans-serif"]
   }
},
  },
plugins: [],
}

