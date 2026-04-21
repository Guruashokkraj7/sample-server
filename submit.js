export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  const name = req.body?.name || "Anonymous";

  res.setHeader("Access-Control-Allow-Origin", "https://mail.google.com");
  res.setHeader(
    "AMP-Access-Control-Allow-Source-Origin",
    "https://your-app.vercel.app"
  );
  res.setHeader(
    "Access-Control-Expose-Headers",
    "AMP-Access-Control-Allow-Source-Origin"
  );

  res.status(200).json({
    name
  });
}