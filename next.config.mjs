/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "cdn.proelevate.in"
            }
        ]
    }
};

export default nextConfig;
