#!/bin/bash
# Deployment script for my application
# Usage: ./deploy.sh

# Source the user's profile to get the correct PATH
source ~/.zshrc 2>/dev/null || source ~/.bash_profile 2>/dev/null || source ~/.profile 2>/dev/null

set -e  # Exit immediately if any command fails

# Configuration
PROJECT_DIR="$HOME/www/astro-template"          # Adjust this path
PM2_PROCESS_NAME="astro-template"                        # Your PM2 process name or ID

echo "======================================"
echo "🚀 Deployment started at $(date)"
echo "======================================"

# Navigate to project directory
echo "📂 Changing to project directory: $PROJECT_DIR"
cd "$PROJECT_DIR" || { echo "❌ Directory not found!"; exit 1; }

# Pull latest code
echo "📥 Pulling latest code from git... ..."
git pull
echo "✅ Git pull completed."

# Install dependencies
echo "📦 Installing dependencies with pnpm..."
/home/vi-dev/.nvm/versions/node/v22.11.0/bin/pnpm install
echo "✅ pnpm install completed."

# Build the project
echo "🔨 Building project..."
/home/vi-dev/.nvm/versions/node/v22.11.0/bin/pnpm run build
echo "✅ Build completed."

# Stop the current PM2 process (if running)
echo "🛑 Stopping PM2 process '$PM2_PROCESS_NAME'..."
pm2 stop "$PM2_PROCESS_NAME" || echo "⚠️  Process was not running, continuing..."
echo "✅ PM2 stop command executed."

# Start the new PM2 process
echo "▶️  Starting PM2 process '$PM2_PROCESS_NAME'..."
pm2 start "$PM2_PROCESS_NAME"
echo "✅ PM2 start completed."

# Optional: Save PM2 process list (if you use pm2 save)
# pm2 save

echo "======================================"
echo "✅ Deployment finished successfully at $(date)"
echo "======================================"
