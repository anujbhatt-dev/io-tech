import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
 
const nextConfig: NextConfig = {
    images:{
        remotePatterns: [new URL('http://localhost:1337/**')],
    },
    eslint:{
        ignoreDuringBuilds: true,
    }
};
 
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);