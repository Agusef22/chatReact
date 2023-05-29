/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.html",
		"./src/**/*.js",
		"./src/**/*.jsx",
		// Agrega aquí todas las rutas de tus archivos fuente que utilizan clases de Tailwind CSS
	],
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
}