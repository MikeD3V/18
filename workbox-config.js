module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{mp3,png,html,js,css}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};