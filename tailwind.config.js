/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"
  ],
  mode: "jit",
  theme: {
    extend: {
      backgroundSize: {
        'size-200': '200% 200%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
      },
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        background: "#f5f8f3",
        black: "#1d1d1f",
        greyDarker: "#5e615c",
        green: "#0e902e",
        darkGreen: "#08561b",
        white: "#f5f5f7",
        greyLighter: "#c7c7c7",
        red: "#d74b4b",
        lightRed: "#db5d5d",
        lightGreen: '#56b16c',
        mediumGreen: '#397748',
        salem: {
          '50': '#effef2',
          '100': '#dafee1',
          '200': '#b7fbc6',
          '300': '#7ef79b',
          '400': '#3fe967',
          '500': '#16d143',
          '600': '#0cad32',
          '700': '#0e902e',
          '800': '#106b27',
          '900': '#0f5823',
          '950': '#02310f',
        },
        shark: {
          '50': '#f4f7fa',
          '100': '#e7ebf2',
          '200': '#d4dbe9',
          '300': '#b8c6db',
          '400': '#93a6c7',
          '500': '#798cb8',
          '600': '#6676aa',
          '700': '#5b669a',
          '800': '#4e557f',
          '900': '#424866',
          '950': '#2b2e40',
        },
        white1: {
          '50': '#ffffff',
          '100': '#efefef',
          '200': '#dcdcdc',
          '300': '#bdbdbd',
          '400': '#989898',
          '500': '#7c7c7c',
          '600': '#656565',
          '700': '#525252',
          '800': '#464646',
          '900': '#3d3d3d',
          '950': '#292929',
        },
        blue1: {
          '50': '#f1f3ff',
          '100': '#e6ebff',
          '200': '#d0d9ff',
          '300': '#abb8ff',
          '400': '#7b8aff',
          '500': '#4651ff',
          '600': '#2021ff',
          '700': '#0d0ce2',
          '800': '#0c0ccb',
          '900': '#0d0ca6',
          '950': '#040871',
        },
        jaffa: {
          '50': '#fef3ee',
          '100': '#fde4d7',
          '200': '#fbc5ad',
          '300': '#f89c79',
          '400': '#f46b45',
          '500': '#f1441e',
          '600': '#e22b14',
          '700': '#bb1d13',
          '800': '#951a17',
          '900': '#781816',
          '950': '#41090a',
        },
        tulip: {
          '50': '#fef7ec',
          '100': '#fae8cb',
          '200': '#f5ce92',
          '300': '#eea849',
          '400': '#ec9533',
          '500': '#e4741c',
          '600': '#ca5415',
          '700': '#a83915',
          '800': '#892c17',
          '900': '#712616',
          '950': '#401008',
        },
        westar: {
          '50': '#f7f6f5',
          '100': '#e3e2df',
          '200': '#d7d5d1',
          '300': '#bdbbb4',
          '400': '#a29d95',
          '500': '#8f8980',
          '600': '#827b74',
          '700': '#6d6661',
          '800': '#5b5651',
          '900': '#4b4643',
          '950': '#272523',
      },
      valencia: {
        '50': '#fdf3f3',
        '100': '#fbe5e5',
        '200': '#f8d0d0',
        '300': '#f1b0b0',
        '400': '#e78282',
        '500': '#d74b4b',
        '600': '#c63c3c',
        '700': '#a62f2f',
        '800': '#8a2a2a',
        '900': '#732929',
        '950': '#3e1111',
    },
    


      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [
    require("daisyui"),
  ],
};