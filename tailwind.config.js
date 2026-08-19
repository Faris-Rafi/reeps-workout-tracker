/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/features/**/*.{js,jsx,ts,tsx}",
    // add any other folders under src/ that contain components
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#232933",
        secondary: "#f0f2f5",
        muted: "#5f636a",
        accent: "#e8ebf1",
        danger: "#d73337",
        success: "#308639",
        warning: "#ce871b",
      },
      fontFamily: {
        sans: ["Inter-Regular"],
        bold: ["Inter-Bold"],
        semibold: ["Inter-SemiBold"],
        extralight: ["Inter-ExtraLight"],
        medium: ["Inter-Medium"],
        thin: ["Inter-Thin"],
        light: ["Inter-Light"],
      },
    },
  },
  plugins: [],
};
