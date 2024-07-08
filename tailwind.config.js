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
        'custom-body':'#344054',
        'custom-button':'#EFBC43',
        'btn-hover':'#D7A93C',
        'btn-text':'#060F1F',
        'custom-blue':'#63C1EC',
        'industryGradient':'#04253400',

    }, 
    fontSize:{
      h1: '48px',
      h2:'40px',
      h3:'24px'
    },
    backgroundImage: 
    {'home': "linear-gradient(90deg, rgba(4, 37, 52, 0.56) 0%, rgba(4, 37, 52, 0) 101.02%), url('/home.jpg')",
      'demo':"linear-gradient(90deg, rgba(5, 51, 71, 0.6) 0%, rgba(5, 51, 71, 0) 100%), url('/formbg.jpg')",
      'integrated-img' :"linear-gradient(180deg, rgba(4, 37, 52, 0) 0%, rgba(4, 37, 52, 0.5) 100%),url(/integrated.jpg)",
      'oil-gas':"linear-gradient(180deg, rgba(4, 37, 52, 0) 0%, rgba(4, 37, 52, 0.5) 100%),url(/oil-gas.jpg)",
      'mining':"linear-gradient(180deg, rgba(4, 37, 52, 0) 0%, rgba(4, 37, 52, 0.5) 100%),url(mining.jpg)",
      'construction':"linear-gradient(180deg, rgba(4, 37, 52, 0) 0%, rgba(4, 37, 52, 0.5) 100%),url(construction.jpg)",
       'smart-lodge' : "linear-gradient(90deg, rgba(4, 37, 52, 0.56) 0%, rgba(4, 37, 52, 0) 101.02%)"

    },
    screens:{
      'xs': {'min':'320px','max':'640px'},
    },
    gradientColorStops:{
      'industryGradient':'#04253400',
      'smart-lodge' : "linear-gradient(90deg, rgba(4, 37, 52, 0.56) 0%, rgba(4, 37, 52, 0) 101.02%)",
    }
    },
   
  },
  plugins: [],
}

