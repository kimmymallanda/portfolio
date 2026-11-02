# Kimberly Mallanda — Portfolio

Next.js 14 · TypeScript · Tailwind CSS. Projects live in plain Markdown files, so adding work never needs a redesign.

## Run it on your computer

You need [Node.js 20+](https://nodejs.org). In this folder:

```bash
npm install
npm run dev          # opens at http://localhost:3000
```

To also preview draft projects while you work: `SHOW_DRAFTS=1 npm run dev` (Windows PowerShell: `$env:SHOW_DRAFTS=1; npm run dev`).
Before deploying, run `npm run build` once. If it finishes without errors, Vercel will build it too.

## Everyday edits

| I want to… | Do this |
|---|---|
| **Add a project** | Copy `content/projects/_template.md`, rename it (e.g. `my-film.md`; the filename becomes the URL `/work/my-film`), fill it in, set `draft: false`. |
| **Hide a project** | Set `draft: true`. Drafts never appear publicly. |
| **Feature it on the homepage** | Set `featured: true`. Lower `order` numbers appear first. |
| **Replace an image** | Put the new file in `public/images/` and update the `cover:` or `gallery:` path in the project file. Keep photos under about 500 KB (JPG, ~1600px wide). |
| **Add a video thumbnail** | Save it in `public/images/` and set `video.poster`. YouTube thumbnails are automatic. |
| **Embed a video** | In the project file, under `video:` add the YouTube ID (the part after `v=`), or the Vimeo ID (digits at the end of the URL). Uploaded files go in `public/video/` and are set with `file: "/video/name.mp4"`. Prefer YouTube or Vimeo for anything longer than a minute; it loads faster. |
| **Edit text** | Project text: the matching `.md` file. Name, email, LinkedIn, headline and intro: `lib/site.ts`. About page: `app/about/page.tsx`. |
| **Update your résumé** | Save the PDF as `public/resume.pdf`. The Résumé buttons appear automatically once that file exists. Use a version **without your phone number or home address**. |

## Things to check before you publish

- **Résumé:** `public/resume.pdf` is included, and it contains your phone number. To change it, replace the file (keep the name).
- **Screenplay excerpt:** approved, and linked on the project page. It is the first seven script pages (the title page with your home address is excluded). The full script is not on the site.
- **Reel:** the reel’s opening title card reads “Kim Carducci”. Consider re-exporting it with the name you want on this site. It includes music that requires attribution (credited on the page) and branded or university footage.
- **Name:** `creditedAs` in `lib/site.ts` shows that your book and film credits use “Kimberly Carducci”. Set it to `''` to remove that line.

## Publish with Vercel

1. Create a free account at [github.com](https://github.com) and a new **empty** repository (e.g. `portfolio`).
2. In this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
   git push -u origin main
   ```
3. Go to [vercel.com](https://vercel.com), sign up with GitHub, choose **Add New → Project**, import the repo, and click **Deploy**. No settings need changing.
4. When it finishes, Vercel gives you a public `https://….vercel.app` address. Open it in a private window to confirm it works without logging in.
5. In Vercel → Settings → Environment Variables, add `NEXT_PUBLIC_SITE_URL` with that address (later, your custom domain), then redeploy. This makes link previews and the sitemap correct.

Every time you push a change to GitHub, Vercel redeploys automatically.

### Custom domain (later)

Buy a domain (Namecheap, Cloudflare, Google Domains successors, etc.). In Vercel → your project → **Settings → Domains → Add**, type the domain, and copy the DNS records Vercel shows into your domain registrar. HTTPS is automatic. Update `NEXT_PUBLIC_SITE_URL` afterwards.

### Final check after deploying

Visit the live site and confirm: the homepage hero plays, each project page opens, the reel plays, the Amazon link opens, the résumé downloads, and the email and LinkedIn links work.
