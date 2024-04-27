/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'Roboto': ['Roboto'],
      'Akshar':['Akshar'],
    },

    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      'extra-bold': '800',
      black: '900',
    }, 

    //  fontSize: {
    //   mobile: '16px',
    //   '1md': '20px',
    //   '2md': '24px',
    //   '3md': '32px',

    //   pc: '16px',
    //   '1xl': '20px',
    //   '2xl': '24px',
    //   '3xl': '32px',
    //   '4xl': '36px',
    //   '5xl': '40px',
    // },

    lineHeight: {
      'default': '1.5'
    },
    
    screens: {
      sm: '640px',

      md: '768px',
 

      lg: '1024px',
    },

    colors: {
      transparent: 'transparent',
      'white': '#ffffff',
      'yellow': '#FFD600',
      'black': '#2A2A2A',
    },

    // height: {
    //   '8': '8px',
    //   '16': '16px',
    //   '24': '24px',
    //   '32': '32px',
    //   '48': '48px',
    //   '64': '64px',
    //   '82': '82px'

    // },

    extend: {},
  },
  plugins: [],
}

