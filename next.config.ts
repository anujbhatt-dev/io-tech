import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
 
const nextConfig: NextConfig = {
    images:{
        remotePatterns: [
            {
                protocol: "http",
                hostname: "**",
              },
              {
                protocol: "https",
                hostname: "**",
              },
          ],
    },
    eslint:{
        ignoreDuringBuilds: true,
    }
};
 
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);