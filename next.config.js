/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_PUBLIC_SERVICE_ID: process.env.NEXT_PUBLIC_SERVICE_ID,
        NEXT_PUBLIC_TEMPLATE_ID: process.env.NEXT_PUBLIC_TEMPLATE_ID,
        NEXT_PUBLIC_TEMPLATE_NEW_MESSAGE_ID: process.env.NEXT_PUBLIC_TEMPLATE_NEW_MESSAGE_ID,
        NEXT_PUBLIC_USER_ID: process.env.NEXT_PUBLIC_USER_ID,
    },
    images: {
        domains: ['images.unsplash.com']
    }
}

module.exports = nextConfig
