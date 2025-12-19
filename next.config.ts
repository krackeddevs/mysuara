import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	// Static export configuration for Azure Static Web Apps
	output: "export",

	// Disable server-side features not supported in static export
	images: {
		unoptimized: true, // Disable Next.js image optimization for static export
	},

	// Ensure trailing slashes for better Azure Static Web Apps compatibility
	trailingSlash: true,

	// Disable x-powered-by header for security
	poweredByHeader: false,

	// Generate sitemap and robots.txt in the output
	generateEtags: false,

	// Environment-specific configuration
	env: {
		CUSTOM_KEY: process.env.NODE_ENV,
	},

	// Asset optimization
	compiler: {
		// Remove console logs in production
		removeConsole:
			process.env.NODE_ENV === "production"
				? {
						exclude: ["error", "warn"],
					}
				: false,
	},

	// Experimental features for better performance
	experimental: {
		optimizePackageImports: [
			"lucide-react",
			"framer-motion",
			"@radix-ui/react-avatar",
			"@radix-ui/react-slot",
		],
	},
};

export default nextConfig;
