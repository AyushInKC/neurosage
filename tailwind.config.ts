import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: { colors: { ivory: "#F8F4ED", cream: "#F0E7DA", sand: "#E6D5C3", terracotta: "#B87560", "terracotta-dark": "#9E5F4C", rose: "#D8B4A7", sage: "#A8B5A0", "sage-dark": "#8C9B83", brown: "#44362F", "deep-brown": "#44362F", secondary: "#786A61", border: "#E4D9CC", surfaceMuted: "#FAF6F0" }, borderRadius: { "4xl": "2rem" } } },
  plugins: []
};
export default config;
