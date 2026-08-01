import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "localhost",
    "127.0.0.1",
    "192.168.56.1",
    "192.168.56.1:3030",
    "192.168.1.7",
    "192.168.1.7:3030",
    "172.16.11.186",
    "*.local",
  ],
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
