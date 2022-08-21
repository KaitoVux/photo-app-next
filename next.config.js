/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['res.cloudinary.com'],
    },
    publicRuntimeConfig: {
        API_URL:
            process.env.NEXT_PUBLIC_API_URL ??
            'http://ec2-54-169-158-250.ap-southeast-1.compute.amazonaws.com:5112/',
    },
};

module.exports = nextConfig;
