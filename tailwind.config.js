module.exports = {
  theme: {
    fontFamily: {
      sans: "Source Sans Pro, Roboto, sans-serif",
      serif: "ui-serif, Georgia",
      mono: "Roboto Mono, SFMono-Regular, monospace"
    }
  },
  variants: {
    backgroundColor: ["group-focus"]
  },
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: [
      "components/**/*.vue",
      "layouts/**/*.vue",
      "pages/**/*.vue",
      "plugins/**/*.js",
      "nuxt.config.js"
    ]
  }
};
