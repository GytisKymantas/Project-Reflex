const path = require('path');

module.exports = {
	siteMetadata: {
		title: `april2`,
		siteUrl: `https://www.yourdomain.tld`,
	},
	plugins: [
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-image`,
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [`Roboto Slab\:300,400,400,700`,`Open Sans\:300,400,400,700`],
				display: `swap`,
			},
		},
		{
			resolve: 'gatsby-plugin-page-creator',
			options: {
				path: path.resolve(__dirname, 'src/pages'),
				ignore: ['**/sections/*', '**/options/*', '**/elements/*'],
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/assets/images`,
			},
		},
		{
			resolve: 'gatsby-plugin-resolve-src',
			options: {
				srcPath: path.resolve(__dirname, 'src'),
			},
		},
	],
};
