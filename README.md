# Aurelia — AP Economics Simulator

A browser-based grand strategy game for AP Micro and Macroeconomics.

## Deploy to Vercel (browser only, no terminal)

You will need free accounts on **github.com** and **vercel.com**. Sign in to Vercel using your GitHub account, it makes step three easier.

### 1. Put the code on GitHub

1. Go to [github.com/new](https://github.com/new).
2. Name the repository anything (for example, `aurelia-game`). Leave it public. Do not check any of the "initialize with" boxes. Click **Create repository**.
3. On the new empty repository page, click the link that says **uploading an existing file** (it's in the middle of the page).
4. Open the `aurelia-game` folder on your computer. Select every file and folder inside it (including the hidden `.gitignore` if visible, the `src` folder, and all config files) and drag them into the GitHub upload area. **Do not drag the outer `aurelia-game` folder itself**, drag its contents.
5. Scroll down and click **Commit changes**.

### 2. Deploy on Vercel

1. Go to [vercel.com/new](https://vercel.com/new).
2. Find your new repository in the list and click **Import**.
3. Vercel will auto-detect that it's a Vite project. Do not change any settings.
4. Click **Deploy**.
5. Wait about a minute. When it finishes, click the preview screenshot to open your live site.

You now have a permanent URL like `aurelia-game-yourname.vercel.app`. Every time you edit files on GitHub, Vercel will redeploy automatically within 30 seconds.

### 3. If you want a custom domain

In the Vercel project dashboard, go to **Settings → Domains** and add any domain you own. Vercel walks you through the DNS records. You can also pick a free `.vercel.app` subdomain that is cleaner than the default.

## If you want to run it locally first

You need Node.js installed ([nodejs.org](https://nodejs.org), pick the LTS version).

```
npm install
npm run dev
```

Open the URL it prints (usually `http://localhost:5173`).

## Tech stack

- React 18 with Vite
- Tailwind CSS
- Recharts for time series
- Lucide for icons
- Google Fonts (Fraunces, IBM Plex Sans) loaded via import
