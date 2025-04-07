module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "inset-glow": "inset 0 0 20px -6px",
      },
      backgroundImage: {
        "gradient-black-transparent":
          "linear-gradient(45deg, black, transparent)",
      },
    },
  },
  plugins: [],
};
