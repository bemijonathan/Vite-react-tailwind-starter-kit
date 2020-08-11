module.exports = {
	purge: ["./src/**/*.jsx"],
	theme: {
		themeVariants: ["dark"],
		extend: {},
		variants: {
			backgroundColor: ["responsive", "dark"],
			textColor: ["responsive", "dark"],
		},
	},
	variants: {},
	plugins: [require("tailwindcss-multi-theme")],
};
