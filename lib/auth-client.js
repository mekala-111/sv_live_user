const ACCESS_KEY = "sv_user_access";
const REFRESH_KEY = "sv_user_refresh";
const USER_KEY = "sv_user";

function canUseStorage() {
  return typeof window !== "undefined" && typeof localStorage !== "undefined";
}

export function saveSession({ accessToken, refreshToken, user }) {
  if (!canUseStorage()) return;
  if (accessToken) localStorage.setItem(ACCESS_KEY, accessToken);
  if (refreshToken) localStorage.setItem(REFRESH_KEY, refreshToken);
  if (user) localStorage.setItem(USER_KEY, JSON.stringify(user));
}

export function clearSession() {
  if (!canUseStorage()) return;
  localStorage.removeItem(ACCESS_KEY);
  localStorage.removeItem(REFRESH_KEY);
  localStorage.removeItem(USER_KEY);
}

export function getAccessToken() {
  if (!canUseStorage()) return null;
  return localStorage.getItem(ACCESS_KEY);
}

export function getRefreshToken() {
  if (!canUseStorage()) return null;
  return localStorage.getItem(REFRESH_KEY);
}

export function getUser() {
  if (!canUseStorage()) return null;
  try {
    const raw = localStorage.getItem(USER_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}
