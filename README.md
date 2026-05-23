# Happy Birthday Sumin 🎂

A personal interactive birthday website for Sumin.

---

## Setup: Add Images

1. Copy all images from `~/Downloads/sum/` into the `assets/` folder inside this project.
2. The final screen expects a file named `assets/25.heic` (the last photo in Downloads/sum).
   - If you rename it to `16_badgirl_bday.jpg`, update the path in `script.js` line with `img: 'assets/...'` in the last screen object.

### HEIC compatibility note
HEIC files display natively in Safari (iPhone & Mac) but **not** in Chrome or Firefox.
To make the site work in all browsers, convert HEIC files to JPG:

```bash
# macOS: convert all HEIC to JPG (requires sips, built into macOS)
cd ~/Desktop/sumin-birthday/assets
for f in *.heic *.HEIC; do
  sips -s format jpeg "$f" --out "${f%.*}.jpg"
done
```

Then update the extensions in `script.js` (search for `.heic` / `.HEIC` and replace with `.jpg`).

---

## View Locally

Just open `index.html` in Safari — works with no server needed.

For Chrome/Firefox, serve it with a local server (or convert HEIC files first):
```bash
cd ~/Desktop/sumin-birthday
python3 -m http.server 8080
# open http://localhost:8080
```

---

## Deploy to Netlify Drop (Easiest)

1. Go to **https://app.netlify.com/drop**
2. Drag the entire `sumin-birthday` folder onto the page
3. Netlify gives you a live URL to share — done!

No build step, no config needed.

---

## Deploy to Vercel

```bash
npm i -g vercel
cd ~/Desktop/sumin-birthday
vercel --prod
```

Or drag the folder into **https://vercel.com/new** → Import → Static site.

---

## Deploy to GitHub Pages

1. Create a new GitHub repo (e.g. `sumin-birthday`)
2. Push the folder contents:
   ```bash
   cd ~/Desktop/sumin-birthday
   git init
   git add .
   git commit -m "birthday site"
   git remote add origin https://github.com/YOUR_USERNAME/sumin-birthday.git
   git push -u origin main
   ```
3. Go to repo Settings → Pages → Source: `main` branch → Save
4. Your site is live at `https://YOUR_USERNAME.github.io/sumin-birthday/`

---

## Navigation

| Action | Result |
|---|---|
| Click / Tap / Enter | Next screen |
| Arrow Left ← | Previous screen |
| Swipe Left | Next screen |
| Swipe Right | Previous screen |
| ‹ button (left side) | Previous screen |

---

## File Structure

```
sumin-birthday/
├── index.html      — main HTML shell
├── styles.css      — all visual styles + cake animation
├── script.js       — screen data, navigation, rendering
├── assets/         — place all images here
│   ├── 01_redwall.heic
│   ├── 02_roompose.JPG
│   └── ... (copy from ~/Downloads/sum/)
└── README.md
```
