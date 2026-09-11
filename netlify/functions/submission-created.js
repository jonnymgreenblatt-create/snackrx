/**
 * submission-created.js — Netlify fires this for every VERIFIED form submission.
 * Sends a server-side Lead to Meta's Conversions API (dodges ad blockers / iOS
 * tracking prevention; deduped against the browser pixel via event_id).
 *
 * Setup (one-time, Jonny): Events Manager → the pixel's dataset → Settings →
 * Conversions API → Generate access token → Netlify → Site configuration →
 * Environment variables → add META_CAPI_TOKEN = <token>. Redeploy once after.
 *
 * Privacy contract (see Vault/02 Rules & Decisions): only what the visitor
 * already volunteered leaves here — a SHA-256 HASH of their email (never raw),
 * plus Meta's own fbp/fbc identifiers. No moods, ratings, doses or results.
 * Jonny's test submissions (utm_source test/pixeltest/deploycheck) are skipped
 * so Meta's optimizer never learns from fake signups.
 */
const PIXEL_ID = "199999138000739";
const SKIP_SOURCES = ["test", "pixeltest", "deploycheck"];

exports.handler = async (event) => {
  try {
    const token = process.env.META_CAPI_TOKEN;
    if (!token) { console.log("CAPI: no META_CAPI_TOKEN set — skipping (browser pixel still fired)"); return ok("no token"); }

    const payload = (JSON.parse(event.body || "{}").payload) || {};
    const d = payload.data || {};

    if ((d["bot-field"] || "").trim()) return ok("honeypot");
    if (SKIP_SOURCES.includes((d.utm_source || "").toLowerCase().trim())) return ok("test submission — skipped");

    const email = (d.email || "").trim().toLowerCase();
    if (!email) return ok("no email");

    const em = require("crypto").createHash("sha256").update(email).digest("hex");
    const user_data = { em: [em] };
    if (d.fbp) user_data.fbp = d.fbp;
    if (d.fbc) user_data.fbc = d.fbc;

    const evt = {
      event_name: "Lead",
      event_time: Math.floor(new Date(payload.created_at || Date.now()).getTime() / 1000),
      action_source: "website",
      event_source_url: "https://settlemoves.com/",
      user_data,
    };
    if (d.event_id) evt.event_id = d.event_id;   // dedupe vs the browser pixel's Lead

    const r = await fetch(
      "https://graph.facebook.com/v21.0/" + PIXEL_ID + "/events?access_token=" + encodeURIComponent(token),
      { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ data: [evt] }) }
    );
    const txt = await r.text();
    console.log("CAPI Lead:", r.status, txt.slice(0, 300));
    return ok("sent " + r.status);
  } catch (e) {
    console.log("CAPI error (logged, never blocks the signup):", e.message);
    return ok("error logged");
  }
};

function ok(body) { return { statusCode: 200, body }; }
