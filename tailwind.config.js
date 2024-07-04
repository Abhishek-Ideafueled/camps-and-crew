/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    fontFamily: {
      gilroy: ["Gilroy", "sans-serif"],
      circularStdMedium:["circular-std-medium","sans-serif"],
      gilroyBlack:["gilroy-black","sans-serif"],
      gilroyBlackItalic:["Gilroy-BlackItalic","sans-serif"],
      gilroyBold:["Gilroy-Bold","sans-serif"],
      gilroyBoldItalic:["Gilroy-BoldItalic","sans-serif"],
      giloryExtraBold:["Gilroy-ExtraBold","sans-serif"],
      giloryExtraBoldItalic:["Gilroy-ExtraBoldItalic","sans-serif"],
      gilroyHeavy: ["Gilroy-Heavy","sans-serif"],
      giloryHeavyItalic:["Gilroy-HeavyItalic","sans-serif"],
      giloryLight:["Gilroy-Light","sans-serif"],
      giloryLightItalic:["Gilroy-LightItalic","sans-serif"],
      giloryMedium:["Gilroy-Medium","sans-serif"],
      giloryMediumItalic:["Gilroy-MediumItalic","sans-serif"],
      giloryRegular:["Gilroy-Regular","sans-serif"],
      giloryRegularItalic:["Gilroy-RegularItalic","sans-serif"],
      gilorySemiBold:["Gilroy-SemiBold","sans-serif"],
      gilorySemiBoldItalic:["Gilroy-SemiBoldItalic","sans-serif"],
      giloryThin:["Gilroy-Thin","sans-serif"],
      giloryThinItalic:["Gilroy-ThinItalic","sans-serif"],
      giloryUltraLight:["Gilroy-UltraLight","sans-serif"],
      giloryUltraLightItalic:["Gilroy-UltraLightItalic","sans-serif"],
      testCalibreMedium:["TestCalibre-Medium","sans-serif"],
      testCalibreRegular:["TestCalibre-Regular","sans-serif"],
      ttCommonProMedium:["tt_common_pro_medium","sans-serif"],
      ttCommonProNormal:["tt_common_pro_normal","sans-serif"],
      ttCommonProRegular:["tt_common_pro_regular","sans-serif"],
    },
    extend: {
      colors: { 
        'custom-heading': '#08425D',
    }, 
    fontSize:{
      h1: '48px',
      h2:'40px'
    }
    },
  },
  plugins: [],
}

