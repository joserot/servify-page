const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://servify-page-backend-production.up.railway.app/api"
    : "http://localhost:5000/api";

const ACCESS_TOKEN_NAME = "servify-token";

const NAME_TOKEN_NAME = "name-servify-token";

export { API_URL, ACCESS_TOKEN_NAME, NAME_TOKEN_NAME };
