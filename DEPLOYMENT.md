# GitHub Pages Deployment Guide

Your Gyncentrum website is ready to deploy to GitHub Pages! Follow these steps:

## Step 1: Update Astro Configuration

Before pushing to GitHub, update `astro.config.mjs` with your repository details:

```javascript
export default defineConfig({
  // Replace YOUR-USERNAME with your GitHub username
  site: 'https://YOUR-USERNAME.github.io',

  // Replace YOUR-REPO-NAME with your repository name
  // If your repo is named exactly "YOUR-USERNAME.github.io", use '/' instead
  base: '/YOUR-REPO-NAME',

  // ... rest of config
});
```

**Example:**
- If username is `johndoe` and repo is `gyncentrum-web`:
  - `site: 'https://johndoe.github.io'`
  - `base: '/gyncentrum-web'`

- If repo name is `johndoe.github.io` (user site):
  - `site: 'https://johndoe.github.io'`
  - `base: '/'`

## Step 2: Create GitHub Repository

1. Go to https://github.com/new
2. Enter a repository name (e.g., `gyncentrum-web`)
3. Make it **Public** (required for free GitHub Pages)
4. Do NOT initialize with README, .gitignore, or license
5. Click "Create repository"

## Step 3: Push Code to GitHub

Run these commands in your terminal:

```bash
# Add the remote repository (replace with your repo URL)
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# Push to GitHub
git push -u origin main
```

## Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Click **Pages** in the left sidebar
4. Under "Build and deployment":
   - **Source:** Select "GitHub Actions"
5. The deployment will start automatically!

## Step 5: Wait for Deployment

1. Go to the **Actions** tab in your repository
2. You'll see the deployment workflow running
3. Wait 2-5 minutes for it to complete
4. Your site will be live at:
   - `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

## Troubleshooting

### Links Not Working
- Make sure `base` in `astro.config.mjs` matches your repo name
- Commit and push the changes: `git add . && git commit -m "fix: update base path" && git push`

### Images Not Loading
- Images should work automatically since they're in `src/resources/`
- If issues persist, check the browser console for 404 errors

### Deployment Failed
- Check the Actions tab for error messages
- Ensure the repository is public
- Verify GitHub Pages is enabled with "GitHub Actions" source

## Updating the Site

After making changes:

```bash
git add .
git commit -m "Update website"
git push
```

GitHub Actions will automatically rebuild and deploy your site!

## Custom Domain (Optional)

If you own `gyncentrum.sk`:

1. Update `astro.config.mjs`:
   ```javascript
   site: 'https://www.gyncentrum.sk',
   base: '/',
   ```

2. In GitHub Settings > Pages:
   - Enter `www.gyncentrum.sk` in "Custom domain"
   - Check "Enforce HTTPS"

3. Add DNS records at your domain registrar:
   - CNAME record: `www` → `YOUR-USERNAME.github.io`
   - A records for apex domain (optional):
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`

## Need Help?

- [Astro Deployment Docs](https://docs.astro.build/en/guides/deploy/github/)
- [GitHub Pages Docs](https://docs.github.com/en/pages)
