# My Daily Blog — Publish on GitHub Pages (Free)

You have a complete static blog in this folder: `index.html`, `style.css`, `script.js`, `posts.js`.

## Publish in 5 minutes

1. Create a GitHub account at https://github.com (if needed).
2. Create a new public repo named `my-blog` (or `YOUR-USERNAME.github.io` for a prettier URL).
3. Upload these files:
   - Go to your repo → `Add file → Upload files` → drag all 4 files in → `Commit changes`.
   - OR from terminal:
     ```bash
     cd ~/my-blog
     git init
     git add .
     git commit -m "my blog"
     git branch -M main
     git remote add origin https://github.com/YOUR-USERNAME/my-blog.git
     git push -u origin main
     ```
4. In repo → `Settings → Pages` → Source: `Deploy from a branch`, Branch: `main`, Folder: `/ (root)` → Save.
5. Wait 1-2 min, open: `https://YOUR-USERNAME.github.io/my-blog/`

## Posting daily blogs

- **Quick (on your device only):** just open the site, type a post, hit Publish. Saved in browser.
- **Permanent (visible to everyone):** hit `Export for GitHub`, copy the text, paste it into `posts.js` on GitHub (edit file → commit). It goes live in ~1 min.

That's it — no server, no cost.
