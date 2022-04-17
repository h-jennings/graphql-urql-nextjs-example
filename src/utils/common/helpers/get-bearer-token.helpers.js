export const getBearerToken = (preview = false) =>
  preview
    ? `Bearer ${process.env.CTF_PREVIEW_TOKEN}`
    : `Bearer ${process.env.CTF_PROD_TOKEN}`;
