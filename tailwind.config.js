export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // make sure to include your React files
  ],
  theme: {
    extend: {
      keyframes: {
        tada: {
          "0%, 100%": { transform: "scale3d(1,1,1)" },
          "10%, 20%": {
            transform: "scale3d(0.9,0.9,0.9) rotate3d(0,0,1,-3deg)",
          },
          "30%,50%,70%,90%": {
            transform: "scale3d(1.1,1.1,1.1) rotate3d(0,0,1,3deg)",
          },
          "40%,60%,80%": {
            transform: "scale3d(1.1,1.1,1.1) rotate3d(0,0,1,-3deg)",
          },
        },
      },
      animation: {
        tada: "tada 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
