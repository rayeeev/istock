#!/bin/bash

echo "Building Next.js app..."
npm run build

echo "Preparing standalone folder for cPanel deployment..."
# Remove any existing cpanel-build folder
rm -rf cpanel-build
mkdir -p cpanel-build

# Copy the standalone output into cpanel-build
cp -r .next/standalone/* cpanel-build/
cp -r .next/standalone/.* cpanel-build/ 2>/dev/null || true

# Copy static assets and public folder (these are required but not included in standalone by default)
mkdir -p cpanel-build/.next/static
cp -r .next/static/* cpanel-build/.next/static/

if [ -d "public" ]; then
  cp -r public cpanel-build/
fi

echo "Zipping the build..."
cd cpanel-build
zip -r ../cpanel-deploy.zip . > /dev/null
cd ..

echo "Done! You can now upload cpanel-deploy.zip to your cPanel file manager, extract it, and start your Node.js app."
