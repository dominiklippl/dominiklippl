module.exports = {
	trailingComma: 'es5',
	tabWidth: 4,
	semi: true,
	singleQuote: true,
	bracketSpacing: true,
	plugins: [require('prettier-plugin-tailwindcss')],
	tailwindConfig: 'tailwind.config.js',
};
