const API_URL = process.env.NEXT_PUBLIC_API_URL || process.env.API_URL || "http://localhost:4000/api";

/** When the page is opened via LAN IP, rewrite localhost API to the same host:4000. */
function resolveApiUrl() {
  if (typeof window === "undefined") return API_URL;
  try {
    const configured = new URL(API_URL, window.location.origin);
    const pageHost = window.location.hostname;
    const apiIsLoopback =
      configured.hostname === "localhost" || configured.hostname === "127.0.0.1";
    const pageIsLoopback = pageHost === "localhost" || pageHost === "127.0.0.1";

    if (apiIsLoopback && !pageIsLoopback) {
      return `${window.location.protocol}//${pageHost}:4000/api`;
    }
    // localhost vs 127.0.0.1 mismatch — keep API on same host as the page
    if (apiIsLoopback && pageIsLoopback && configured.hostname !== pageHost) {
      return `${window.location.protocol}//${pageHost}:4000/api`;
    }
  } catch {
    /* keep configured */
  }
  return API_URL;
}

async function request(path, options = {}) {
  const { token, body, method = "GET", headers: extra = {}, ...rest } = options;
  const headers = {
    "Content-Type": "application/json",
    ...extra,
  };
  if (token) headers.Authorization = `Bearer ${token}`;

  const apiBase = resolveApiUrl();
  const res = await fetch(`${apiBase}${path.startsWith("/") ? path : `/${path}`}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
    cache: "no-store",
    ...rest,
  });

  const json = await res.json().catch(() => ({}));
  if (!res.ok || json.success === false) {
    const message = json?.error?.message || `Request failed (${res.status})`;
    const err = new Error(message);
    err.status = res.status;
    err.code = json?.error?.code;
    throw err;
  }
  return json.data;
}

export const publicApi = {
  listEvents: (params = {}) => {
    const q = new URLSearchParams(params).toString();
    return request(`/public/events${q ? `?${q}` : ""}`);
  },
  getEvent: (slug, options = {}) => {
    const q = new URLSearchParams();
    if (options.previewToken) q.set("previewToken", options.previewToken);
    const suffix = q.toString() ? `?${q.toString()}` : "";
    return request(`/public/events/${encodeURIComponent(slug)}${suffix}`);
  },
  getInvitation: (slug, options = {}) => {
    const q = new URLSearchParams();
    if (options.previewToken) q.set("previewToken", options.previewToken);
    const suffix = q.toString() ? `?${q.toString()}` : "";
    return request(`/public/invitations/${encodeURIComponent(slug)}${suffix}`);
  },
  unlockEvent: (slug, password) =>
    request(`/public/events/${encodeURIComponent(slug)}/unlock`, {
      method: "POST",
      body: { password },
    }),
  unlockInvitation: (slug, password) =>
    request(`/public/invitations/${encodeURIComponent(slug)}/unlock`, {
      method: "POST",
      body: { password },
    }),
  getShare: (slug) => request(`/public/events/${encodeURIComponent(slug)}/share`),
  getMedia: (slug) => request(`/public/events/${encodeURIComponent(slug)}/media`),
  watchByCode: (code) => request(`/public/watch/${encodeURIComponent(code)}`),
  createBooking: (payload) =>
    request("/public/bookings", { method: "POST", body: payload }),
  createContact: (payload) =>
    request("/public/contact", { method: "POST", body: payload }),
  listPricing: () => request("/public/pricing"),
  getSettings: () => request("/public/settings"),
};

export const authApi = {
  login: (email, password) =>
    request("/auth/login", { method: "POST", body: { email, password } }),
  register: (payload) => request("/auth/register", { method: "POST", body: payload }),
  forgotPassword: (email) =>
    request("/auth/forgot-password", { method: "POST", body: { email } }),
  resetPassword: (email, code, newPassword) =>
    request("/auth/reset-password", {
      method: "POST",
      body: { email, code, newPassword },
    }),
  verifyOtp: (email, code, purpose) =>
    request("/auth/verify-otp", {
      method: "POST",
      body: { email, code, purpose },
    }),
  logout: (refreshToken) =>
    request("/auth/logout", { method: "POST", body: { refreshToken } }),
};

export { API_URL };
