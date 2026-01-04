
# EnglishFlow Academy - Installation & Deployment Guide

This guide provides instructions for setting up the EnglishFlow Academy platform locally and deploying it to a production server.

## 🚀 Local Installation

1. **Install Node.js**: Ensure you have Node.js (v18+) installed on your machine.
2. **Download the Code**: Copy the project files to a local directory.
3. **Install Dependencies**:
   ```bash
   npm install
   ```
4. **Set up Environment Variables**:
   Create a `.env` file in the root directory and add your Gemini API Key:
   ```env
   VITE_API_KEY=your_gemini_api_key_here
   ```
5. **Run Development Server**:
   ```bash
   npm run dev
   ```
   Access the app at `http://localhost:3000`.

## 🌐 Server Deployment

### Option A: Vercel or Netlify (Recommended)
1. Push your code to a **GitHub/GitLab** repository.
2. Connect your repository to Vercel or Netlify.
3. **Important**: In the dashboard, add an environment variable named `API_KEY` with your Gemini API key value.
4. The platform will automatically build and deploy every time you push to the `main` branch.

### Option B: Static File Hosting (S3, Firebase, etc.)
1. Build the production files:
   ```bash
   npm run build
   ```
2. Upload the contents of the generated `dist/` folder to your static hosting provider.

## 🔄 How to Upgrade

To upgrade the platform on your server:

1. **Update Local Code**: Pull the latest changes from your repository.
   ```bash
   git pull origin main
   ```
2. **Update Dependencies**:
   ```bash
   npm install
   ```
3. **Rebuild & Deploy**:
   * If using **Vercel/Netlify**: Simply push the changes to GitHub; the server will auto-upgrade.
   * If using **Manual Hosting**: Run `npm run build` and re-upload the `dist/` folder to your server.

## 🔑 Security Note
Never commit your `.env` file to a public repository. Always use the hosting provider's "Environment Variables" settings for the production API key.
