/** @type {import('next').NextConfig} */

import dotenv from 'dotenv'
dotenv.config()

const nextConfig = {
    env: {
        API_URL: process.env.API_URL,
        API_URL_DOWN: process.env.API_URL_DOWN

    },
};
export default nextConfig
