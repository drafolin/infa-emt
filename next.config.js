/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	experimental: {
		appDir: true
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cas2.divtec.ch',
				port: '4443',
				pathname: '/cas/**',
			},
			{
				protocol: 'https',
				hostname: 'www.ict-berufsbildung.ch',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'www.divtec.ch',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'code.visualstudio.com',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'manager.infomaniak.com',
				pathname: '/**',
			}
		]
	}
};

module.exports = nextConfig;
