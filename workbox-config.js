module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{mp3,html,js,css}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};