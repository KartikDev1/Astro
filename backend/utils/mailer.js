import { Resend } from "resend";

// ✅ Safe initialization
let resend = null;

if (process.env.RESEND_API_KEY) {
  resend = new Resend(process.env.RESEND_API_KEY);
}

export const sendMail = async (options) => {
  console.log("📧 Using Resend API...");
  console.log(
    "📧 Key loaded:",
    process.env.RESEND_API_KEY ? "yes ✅" : "no ❌",
  );

  // ✅ Skip if no key (prevents crash)
  if (!resend) {
    console.log("⚠️ Resend not configured. Skipping email...");
    return;
  }

  try {
    const { from, to, subject, html, text } = options;

    const data = await resend.emails.send({
      from: from || "Divine Miracle <noreply@divinemiracle.com>",
      to,
      subject,
      html,
      text,
    });

    console.log("✅ Email sent successfully:", data?.id || data);
    return data;
  } catch (err) {
    console.error("❌ Email sending failed via Resend:", err.message);
    throw err;
  }
};
