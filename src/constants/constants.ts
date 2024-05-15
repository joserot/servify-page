const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://servify-page-backend-production.up.railway.app/api"
    : "http://localhost:5000/api";

const SITE_URL = "https://servify-page.vercel.app";

const ACCESS_TOKEN_NAME = "servify-token";

const NAME_TOKEN_NAME = "name-servify-token";

const PROJECT_NAME = "Profesio";

const OG_IMG = "/servify.png";

export {
  API_URL,
  ACCESS_TOKEN_NAME,
  NAME_TOKEN_NAME,
  PROJECT_NAME,
  SITE_URL,
  OG_IMG,
};
