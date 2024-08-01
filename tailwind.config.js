/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   
    extend: {
     
      colors: { 
        'custom-heading': '#08425D',
        'custom-body':'#344054',
        'custom-button':'#EFBC43',
        'btn-hover':'#D7A93C',
        'btn-text':'#060F1F',
        'custom-blue':'#63C1EC',
        'industryGradient':'#04253400',
        'custom-gray':'#CAD5DE',
        'custom-back':'#053347',

    }, 
    fontSize:{
      h1: '48px',
      h2:'40px',
      h3:'24px'
    },
    backgroundImage: 
    {'home': "linear-gradient(90deg, rgba(4, 37, 52, 0.56) 0%, rgba(4, 37, 52, 0) 101.02%), url('/remote-camp-modular-buildings-exterior.jpg')",
      'demo':"linear-gradient(90deg, rgba(5, 51, 71, 0.6) 0%, rgba(5, 51, 71, 0) 100%), url('/formbg.jpg')",
      'integrated-img' :"linear-gradient(180deg, rgba(4, 37, 52, 0) 0%, rgba(4, 37, 52, 0.5) 100%),url(/integrated.jpg)",
      'oil-gas':"linear-gradient(180deg, rgba(4, 37, 52, 0) 0%, rgba(4, 37, 52, 0.5) 100%),url(/oil-gas.jpg)",
      'mining':"linear-gradient(180deg, rgba(4, 37, 52, 0) 0%, rgba(4, 37, 52, 0.5) 100%),url(/mining.jpg)",
      'construction':"linear-gradient(180deg, rgba(4, 37, 52, 0) 0%, rgba(4, 37, 52, 0.5) 100%),url(/construction.jpg)",
       'smart-lodge' : "linear-gradient(90deg, rgba(4, 37, 52, 0.56) 0%, rgba(4, 37, 52, 0) 101.02%)",
      'remote-camp':"url(/Hero-Content.png)",
      'smartlodge-2':"linear-gradient(90deg, rgba(4, 37, 52, 0.56) 0%, rgba(4, 37, 52, 0) 101.02%), url('/aerial-large-remote-lodge-civeo-oil-sands.jpg')",
      'smartlodge-3':"linear-gradient(90deg, rgba(4, 37, 52, 0.56) 0%, rgba(4, 37, 52, 0) 101.02%), url('/camp-room-bed-side-table-chair.jpg')",
      'smartlodge-4':"linear-gradient(90deg, rgba(4, 37, 52, 0.56) 0%, rgba(4, 37, 52, 0) 101.02%), url('/camp-attendant-with-towels-in-hallway.jpg')",
      'smartlodge-5':"linear-gradient(90deg, rgba(4, 37, 52, 0.56) 0%, rgba(4, 37, 52, 0) 101.02%), url('/men-walking-alongside-modular-camp-buildings.jpg')",
      'enroute-1':"linear-gradient(90deg, rgba(4, 37, 52, 0.56) 0%, rgba(4, 37, 52, 0) 101.02%), url('/fifo-workers-boarding-charter-plane-tarmac.jpg')",
      'enroute-2':"linear-gradient(90deg, rgba(4, 37, 52, 0.56) 0%, rgba(4, 37, 52, 0) 101.02%), url('/charter-bus-fifo-workers-passengers.jpg')",
      'enroute-3':"linear-gradient(90deg, rgba(4, 37, 52, 0.56) 0%, rgba(4, 37, 52, 0) 101.02%), url('/man-camp-plane-parked-fbo.jpg')",
      'enroute-4':"linear-gradient(90deg, rgba(4, 37, 52, 0.56) 0%, rgba(4, 37, 52, 0) 101.02%), url('/aisle-commercial-full-plane.jpg')",
      'case-1':"linear-gradient(90deg, rgba(4, 37, 52, 0.56) 0%, rgba(4, 37, 52, 0) 101.02%), url('/case1.jpg')",
      'case-2':"linear-gradient(90deg, rgba(4, 37, 52, 0.56) 0%, rgba(4, 37, 52, 0) 101.02%), url('/case2.jpg')",
      'case-3':"linear-gradient(90deg, rgba(4, 37, 52, 0.56) 0%, rgba(4, 37, 52, 0) 101.02%), url('/case3.jpg')",
      'bus-image': "url(/charter-bus-fifo-workers-passengers.jpg)",
      'video-image': "url(/smart-video-player.jpg)",
      'history-1':"linear-gradient(90deg, rgba(5, 51, 71, 0.6) 0%, rgba(5, 51, 71, 0) 100%),url('/fifo-workers-board-chartered-bus.jpg')",
      'history-2':"linear-gradient(90deg, rgba(5, 51, 71, 0.6) 0%, rgba(5, 51, 71, 0) 100%),url('/fifo-travelers-wait-to-board-charter-plane.jpg')",
      'history-3':"linear-gradient(90deg, rgba(5, 51, 71, 0.6) 0%, rgba(5, 51, 71, 0) 100%),url('/fifo-mining-worker-rides-bus-western-africa.jpg')",
      'history-4':"linear-gradient(90deg, rgba(5, 51, 71, 0.6) 0%, rgba(5, 51, 71, 0) 100%),url('/fifo-workers-mess-hall-mining-project-indonesia.jpg')",
      'history-5':"linear-gradient(90deg, rgba(5, 51, 71, 0.6) 0%, rgba(5, 51, 71, 0) 100%),url('/commercial-plane-lands-busy-tarmac.jpg')",
      'history-6':"linear-gradient(90deg, rgba(5, 51, 71, 0.6) 0%, rgba(5, 51, 71, 0) 100%),url('/fifo-workers-board-charter-plane.jpg')",
      'history-7':"linear-gradient(90deg, rgba(5, 51, 71, 0.6) 0%, rgba(5, 51, 71, 0) 100%),url('/housekeeper-changes-sheets-camp-room.jpg')",
      'history-8':"linear-gradient(90deg, rgba(5, 51, 71, 0.6) 0%, rgba(5, 51, 71, 0) 100%),url('/canadian-hydroelectric-construction-project-aerial-perspective.jpg')",
      'history-9':"linear-gradient(90deg, rgba(5, 51, 71, 0.6) 0%, rgba(5, 51, 71, 0) 100%),url('/canadian-oil-sands-remote-camp.jpg')",
      'history-10':"linear-gradient(90deg, rgba(5, 51, 71, 0.6) 0%, rgba(5, 51, 71, 0) 100%),url('/hotel-bed-with-pillows-and-sheets.jpg')",

    },
    screens:{
      'xs': {'min':'320px','max':'640px'},
      'smalls':'540px',
      'superxl':'1400px'
    },
    gradientColorStops:{
      'industryGradient':'#04253400',
      'smart-lodge' : "linear-gradient(90deg, rgba(4, 37, 52, 0.56) 0%, rgba(4, 37, 52, 0) 101.02%)",
    },
    fontFamily: {
      gilroy: ["Gilroy-Regular",],
      circularStdMedium:["circular-std-medium"],
      gilroyBlack:["Gilroy-Black"],
      gilroyBlackItalic:["Gilroy-BlackItalic"],
      gilroyBold:["Gilroy-Bold"],
      gilroyBoldItalic:["Gilroy-BoldItalic"],
      gilroyExtraBold:["Gilroy-ExtraBold"],
      gilroyExtraBoldItalic:["Gilroy-ExtraBoldItalic"],
      gilroyHeavy: ["Gilroy-Heavy"],
      gilroyHeavyItalic:["Gilroy-HeavyItalic"],
      gilroyLight:["Gilroy-Light"],
      gilroyLightItalic:["Gilroy-LightItalic"],
      gilroyMedium:["Gilroy-Medium"],
      gilroyMediumItalic:["Gilroy-MediumItalic"],
      // gilroyRegular:["Gilroy-Regular"],
      gilroyRegularItalic:["Gilroy-RegularItalic"],
      gilroySemiBold:["Gilroy-SemiBold"],
      gilroySemiBoldItalic:["Gilroy-SemiBoldItalic"],
      gilroyThin:["Gilroy-Thin"],
      gilroyThinItalic:["Gilroy-ThinItalic"],
      gilroyUltraLight:["Gilroy-UltraLight"],
      gilroyUltraLightItalic:["Gilroy-UltraLightItalic"],
      testCalibreMedium:["TestCalibre-Medium"],
      testCalibreRegular:["TestCalibre-Regular"],
      ttCommonProMedium:["tt_commons_pro_medium"],
      ttCommonProNormal:["tt_commons_pro_normal"],
      ttCommonProRegular:["tt_commons_pro_regular"],
    },
    backgroundPosition:{
       
    },
    boxShadow: {
      'custom-shadow': ' 0px 32px 64px -12px #10182824',
      'custom-shadow2':'0px 8px 8px -4px rgba(16, 24, 40, 0.03), 0px 20px 24px -4px rgba(16, 24, 40, 0.08)'
    },
  },
   
  },
  plugins: [],
}

