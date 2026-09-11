# DEPLOY.md — how Claude deploys this site (hands-free)

*Proven 2026-07-16 (deploy #5). Any Claude session with this folder connected + Jonny's Chrome open can follow this. Total time: ~2 minutes.*

## Rules first (from [[Vault/02 Rules & Decisions]])

1. **Never deploy without Jonny's explicit go.** Stage everything in the zip; he says ship.
2. **Batch.** One deploy per work session — each costs ~15 Netlify credits.
3. All changes must be in **all three copies** (fitness-snack.html, fitness-snack-standalone.html, and index.html inside snackrx-site.zip) before deploying.

## The recipe

1. **Rebuild `snackrx-site.zip`** with every staged change (zip root: index.html, manifest.json, icons, og.png, favicon.ico).

2. **THE KEY TRICK**: the Chrome extension can only upload files from the *session's own* folders, never from device paths. Copy the zip into the session outputs folder first:
   ```
   cp "/mnt/user-data/uploads/SNACKRX-master/snackrx-site.zip" /mnt/user-data/outputs/
   ```
   (Uploading straight from `/Users/<you>/...` fails with "only files this session is allowed to read".)

3. **Drive Chrome** (claude-in-chrome tools; Jonny must be logged into Netlify):
   - `tabs_context_mcp {createIfEmpty: true}` → get a tab
   - `navigate` → `https://app.netlify.com/projects/brilliant-tarsier-4280f9/deploys`
   - scroll to the bottom of the deploy list → the drop zone ("Drag and drop your project…")
   - `find` → "browse files to upload" → gives a **file input ref** (do NOT click it — that opens a native picker; pass the ref to file_upload instead)
   - `file_upload` → paths: `["/mnt/user-data/outputs/snackrx-site.zip"]`, ref from previous step
   - Upload triggers the deploy automatically. Wait ~5s, screenshot: success = **"Published at H:MM PM"** on the project page.

4. **Verify live** (same browser): navigate to `https://settlemoves.com`, spot-check whatever shipped (e.g. You tab → the new card). `WebFetch https://settlemoves.com/manifest.json` if PWA bits changed.

5. **Log it**: update [[Vault/01 Project Status]] (deploy #, time, what shipped) and check remaining credits at Netlify → Billing.

## Fallback

If the Chrome extension isn't available: Jonny drags `snackrx-site.zip` onto the same drop zone by hand. Same page, same result.

## Post-deploy gotchas (learned earlier)

- Netlify **rewrites the form markup** on every deploy — a changed form DOM is success, not breakage.
- Form submissions can land in the **Spam tab** (Akismet; empty fields raise the score) — check both tabs before trusting the count.
- If forms ever stop registering entirely: site settings → Forms → re-enable Form detection → redeploy once.
- **Waitlist signups do NOT work on local copies** (file:// or the standalone) — the form posts to Netlify's servers, which only exist on the live site. Not a bug. To test post-signup UI locally, flip the joined state in the console: hide the `wlX-form` div, show `wlX-done`.
