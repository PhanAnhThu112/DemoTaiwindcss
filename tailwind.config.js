/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    "**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        "second-text": "#AFAFAF",
        "light" : '#BCD0E5',
        "secondary": '#173A56',
        "primary" : '#02897A',
        "gray": {
            "1000" : "#DEDEDE",
            "1001" : "#EFEFEF",
            "1002" : "#737373",
        },
        "dark" : {
          "DEFAULT" : '#1F2E35',
          "800": '#22343D',
          "900": '#2F281E'
        },
        "yellow": {
            1000: "#FF9900",
        },
        "red": {
          1000: "#F03E3D",
        }, 
        "blue": {
          1000: "#4D8DFF",
        }, 
        "orange":{
          500:"#F97316"

        }
      }
    },
  },
  plugins: [],
}

