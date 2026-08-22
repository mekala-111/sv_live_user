(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/event/[slug]/EventDetailsClient.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EventDetailsClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$themes$2f$EventThemeRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/components/themes/EventThemeRenderer.jsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$EventThemeRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EventThemeRenderer$3e$__$3c$export__EventThemeRenderer__as__default$3e$__ = __turbopack_context__.i("[project]/themes/components/EventThemeRenderer.jsx [app-client] (ecmascript) <export default as EventThemeRenderer> <export EventThemeRenderer as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$event$2d$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/event-helpers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$event$2f5b$slug$5d2f$event$2d$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/event/[slug]/event-page.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function EventDetailsClient({ apiKind = "event" }) {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const slug = params?.slug;
    const previewToken = searchParams?.get("previewToken") || undefined;
    const isInvitation = apiKind === "invitation";
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [requiresPassword, setRequiresPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [unlocking, setUnlocking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [payload, setPayload] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EventDetailsClient.useEffect": ()=>{
            if (!slug) return;
            let cancelled = false;
            ({
                "EventDetailsClient.useEffect": async ()=>{
                    setLoading(true);
                    setError("");
                    try {
                        const data = isInvitation ? await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["publicApi"].getInvitation(slug, {
                            previewToken
                        }) : await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["publicApi"].getEvent(slug, {
                            previewToken
                        });
                        if (cancelled) return;
                        if (data?.requiresPassword) {
                            setRequiresPassword(true);
                            setPayload(data);
                        } else {
                            setRequiresPassword(false);
                            setPayload(data);
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$event$2d$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cacheUnlockedEvent"])(slug, data);
                        }
                    } catch (err) {
                        if (!cancelled) setError(err.message || (isInvitation ? "Invitation not found" : "Event not found"));
                    } finally{
                        if (!cancelled) setLoading(false);
                    }
                }
            })["EventDetailsClient.useEffect"]();
            return ({
                "EventDetailsClient.useEffect": ()=>{
                    cancelled = true;
                }
            })["EventDetailsClient.useEffect"];
        }
    }["EventDetailsClient.useEffect"], [
        slug,
        previewToken,
        isInvitation
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EventDetailsClient.useEffect": ()=>{
            if (!payload?.event) return;
            const title = payload.event.pageTitle || payload.event.eventName;
            if (title) document.title = title;
        }
    }["EventDetailsClient.useEffect"], [
        payload
    ]);
    async function handleUnlock(e) {
        e.preventDefault();
        if (!slug || !password) return;
        setUnlocking(true);
        setError("");
        try {
            const data = isInvitation ? await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["publicApi"].unlockInvitation(slug, password) : await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["publicApi"].unlockEvent(slug, password);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$event$2d$helpers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cacheUnlockedEvent"])(slug, data);
            setPayload(data);
            setRequiresPassword(false);
        } catch (err) {
            setError(err.message || "Incorrect password");
        } finally{
            setUnlocking(false);
        }
    }
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$event$2f5b$slug$5d2f$event$2d$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stateScreen,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: isInvitation ? "Loading invitation…" : "Loading event…"
            }, void 0, false, {
                fileName: "[project]/app/event/[slug]/EventDetailsClient.jsx",
                lineNumber: 84,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/event/[slug]/EventDetailsClient.jsx",
            lineNumber: 83,
            columnNumber: 7
        }, this);
    }
    if (requiresPassword) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$event$2f5b$slug$5d2f$event$2d$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].lockScreen,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$event$2f5b$slug$5d2f$event$2d$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].lockCard,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$event$2f5b$slug$5d2f$event$2d$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].lockEyebrow,
                        children: isInvitation ? "PRIVATE INVITATION" : "PRIVATE EVENT"
                    }, void 0, false, {
                        fileName: "[project]/app/event/[slug]/EventDetailsClient.jsx",
                        lineNumber: 93,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: payload?.event?.eventName || (isInvitation ? "Private Invitation" : "Private Event")
                    }, void 0, false, {
                        fileName: "[project]/app/event/[slug]/EventDetailsClient.jsx",
                        lineNumber: 94,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: isInvitation ? "Enter the PIN shared by the host to view." : "Enter the PIN shared by the host to watch."
                    }, void 0, false, {
                        fileName: "[project]/app/event/[slug]/EventDetailsClient.jsx",
                        lineNumber: 95,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleUnlock,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "password",
                                value: password,
                                onChange: (e)=>setPassword(e.target.value),
                                placeholder: isInvitation ? "Invitation PIN" : "Event PIN",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/app/event/[slug]/EventDetailsClient.jsx",
                                lineNumber: 97,
                                columnNumber: 13
                            }, this),
                            error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$event$2f5b$slug$5d2f$event$2d$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].error,
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/app/event/[slug]/EventDetailsClient.jsx",
                                lineNumber: 104,
                                columnNumber: 22
                            }, this) : null,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                disabled: unlocking,
                                children: unlocking ? "Unlocking…" : isInvitation ? "View Invitation" : "Watch Event"
                            }, void 0, false, {
                                fileName: "[project]/app/event/[slug]/EventDetailsClient.jsx",
                                lineNumber: 105,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/event/[slug]/EventDetailsClient.jsx",
                        lineNumber: 96,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/event/[slug]/EventDetailsClient.jsx",
                lineNumber: 92,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/event/[slug]/EventDetailsClient.jsx",
            lineNumber: 91,
            columnNumber: 7
        }, this);
    }
    if (error && !payload?.event) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$event$2f5b$slug$5d2f$event$2d$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stateScreen,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$event$2f5b$slug$5d2f$event$2d$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].error,
                children: error
            }, void 0, false, {
                fileName: "[project]/app/event/[slug]/EventDetailsClient.jsx",
                lineNumber: 117,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/event/[slug]/EventDetailsClient.jsx",
            lineNumber: 116,
            columnNumber: 7
        }, this);
    }
    if (!payload?.event) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Great+Vibes&family=Lora:wght@500;600;700&family=Playfair+Display:wght@500;600;700&display=swap"
            }, void 0, false, {
                fileName: "[project]/app/event/[slug]/EventDetailsClient.jsx",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$EventThemeRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EventThemeRenderer$3e$__$3c$export__EventThemeRenderer__as__default$3e$__["default"], {
                event: payload.event,
                youtube: payload.youtube,
                media: payload.media,
                branding: payload.branding,
                theme: payload.theme,
                publicPath: isInvitation ? `/invitation/${slug}` : `/event/${slug}`
            }, void 0, false, {
                fileName: "[project]/app/event/[slug]/EventDetailsClient.jsx",
                lineNumber: 130,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/event/[slug]/EventDetailsClient.jsx",
        lineNumber: 125,
        columnNumber: 5
    }, this);
}
_s(EventDetailsClient, "YrkQskJrvxvbuCiTWLGf4fheVzU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = EventDetailsClient;
var _c;
__turbopack_context__.k.register(_c, "EventDetailsClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/event/[slug]/event-page.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "error": "event-page-module__-7ah5W__error",
  "lockCard": "event-page-module__-7ah5W__lockCard",
  "lockEyebrow": "event-page-module__-7ah5W__lockEyebrow",
  "lockScreen": "event-page-module__-7ah5W__lockScreen",
  "stateScreen": "event-page-module__-7ah5W__stateScreen",
});
}),
"[project]/components/themes/EventThemeRenderer.jsx [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
/** Local theme renderers (vendored from admin). Assets still load via /themes rewrite → admin. */ var __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/themes/index.ts [app-client] (ecmascript) <locals>");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/api.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "API_URL",
    ()=>API_URL,
    "authApi",
    ()=>authApi,
    "publicApi",
    ()=>publicApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const API_URL = ("TURBOPACK compile-time value", "https://api.svlive.in/api") || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.API_URL || "http://localhost:4000/api";
/** When the page is opened via LAN IP, rewrite localhost API to the same host:4000. */ function resolveApiUrl() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const configured = new URL(API_URL, window.location.origin);
        const pageHost = window.location.hostname;
        const apiIsLoopback = configured.hostname === "localhost" || configured.hostname === "127.0.0.1";
        const pageIsLoopback = pageHost === "localhost" || pageHost === "127.0.0.1";
        if (apiIsLoopback && !pageIsLoopback) {
            return `${window.location.protocol}//${pageHost}:4000/api`;
        }
        // localhost vs 127.0.0.1 mismatch — keep API on same host as the page
        if (apiIsLoopback && pageIsLoopback && configured.hostname !== pageHost) {
            return `${window.location.protocol}//${pageHost}:4000/api`;
        }
    } catch  {
    /* keep configured */ }
    return API_URL;
}
async function request(path, options = {}) {
    const { token, body, method = "GET", headers: extra = {}, ...rest } = options;
    const headers = {
        "Content-Type": "application/json",
        ...extra
    };
    if (token) headers.Authorization = `Bearer ${token}`;
    const apiBase = resolveApiUrl();
    const res = await fetch(`${apiBase}${path.startsWith("/") ? path : `/${path}`}`, {
        method,
        headers,
        body: body ? JSON.stringify(body) : undefined,
        cache: "no-store",
        ...rest
    });
    const json = await res.json().catch(()=>({}));
    if (!res.ok || json.success === false) {
        const message = json?.error?.message || `Request failed (${res.status})`;
        const err = new Error(message);
        err.status = res.status;
        err.code = json?.error?.code;
        throw err;
    }
    return json.data;
}
const publicApi = {
    listEvents: (params = {})=>{
        const q = new URLSearchParams(params).toString();
        return request(`/public/events${q ? `?${q}` : ""}`);
    },
    getEvent: (slug, options = {})=>{
        const q = new URLSearchParams();
        if (options.previewToken) q.set("previewToken", options.previewToken);
        const suffix = q.toString() ? `?${q.toString()}` : "";
        return request(`/public/events/${encodeURIComponent(slug)}${suffix}`);
    },
    getInvitation: (slug, options = {})=>{
        const q = new URLSearchParams();
        if (options.previewToken) q.set("previewToken", options.previewToken);
        const suffix = q.toString() ? `?${q.toString()}` : "";
        return request(`/public/invitations/${encodeURIComponent(slug)}${suffix}`);
    },
    unlockEvent: (slug, password)=>request(`/public/events/${encodeURIComponent(slug)}/unlock`, {
            method: "POST",
            body: {
                password
            }
        }),
    unlockInvitation: (slug, password)=>request(`/public/invitations/${encodeURIComponent(slug)}/unlock`, {
            method: "POST",
            body: {
                password
            }
        }),
    getShare: (slug)=>request(`/public/events/${encodeURIComponent(slug)}/share`),
    getMedia: (slug)=>request(`/public/events/${encodeURIComponent(slug)}/media`),
    watchByCode: (code)=>request(`/public/watch/${encodeURIComponent(code)}`),
    createBooking: (payload)=>request("/public/bookings", {
            method: "POST",
            body: payload
        }),
    createContact: (payload)=>request("/public/contact", {
            method: "POST",
            body: payload
        }),
    listPricing: ()=>request("/public/pricing"),
    getSettings: ()=>request("/public/settings")
};
const authApi = {
    login: (email, password)=>request("/auth/login", {
            method: "POST",
            body: {
                email,
                password
            }
        }),
    register: (payload)=>request("/auth/register", {
            method: "POST",
            body: payload
        }),
    forgotPassword: (email)=>request("/auth/forgot-password", {
            method: "POST",
            body: {
                email
            }
        }),
    resetPassword: (email, code, newPassword)=>request("/auth/reset-password", {
            method: "POST",
            body: {
                email,
                code,
                newPassword
            }
        }),
    verifyOtp: (email, code, purpose)=>request("/auth/verify-otp", {
            method: "POST",
            body: {
                email,
                code,
                purpose
            }
        }),
    logout: (refreshToken)=>request("/auth/logout", {
            method: "POST",
            body: {
                refreshToken
            }
        })
};
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/event-helpers.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "asEventList",
    ()=>asEventList,
    "cacheUnlockedEvent",
    ()=>cacheUnlockedEvent,
    "coverSrc",
    ()=>coverSrc,
    "formatEventDate",
    ()=>formatEventDate,
    "formatEventDateTime",
    ()=>formatEventDateTime,
    "planFeatureList",
    ()=>planFeatureList,
    "readUnlockedEvent",
    ()=>readUnlockedEvent,
    "youtubeEmbedUrl",
    ()=>youtubeEmbedUrl
]);
const FALLBACK_COVER = "/uploads/Portfolio.png";
function asEventList(data) {
    if (Array.isArray(data)) return data;
    if (Array.isArray(data?.items)) return data.items;
    if (Array.isArray(data?.events)) return data.events;
    return [];
}
function coverSrc(url) {
    if (!url || typeof url !== "string") return FALLBACK_COVER;
    return url;
}
function formatEventDate(value) {
    if (!value) return null;
    const d = new Date(value);
    if (Number.isNaN(d.getTime())) return null;
    return {
        day: String(d.getDate()).padStart(2, "0"),
        month: d.toLocaleString("en-US", {
            month: "short"
        }).toUpperCase(),
        full: d.toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
            year: "numeric"
        })
    };
}
function formatEventDateTime(dateValue, timeValue) {
    const datePart = formatEventDate(dateValue)?.full;
    if (!timeValue) return datePart || "Date TBA";
    const t = new Date(timeValue);
    if (Number.isNaN(t.getTime())) return datePart || "Date TBA";
    const time = t.toLocaleTimeString("en-IN", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true
    });
    return datePart ? `${datePart} · ${time}` : time;
}
function youtubeEmbedUrl(youtube) {
    if (!youtube) return null;
    const params = "autoplay=1&rel=0&modestbranding=1&playsinline=1";
    const id = youtube.videoId || extractIdFromUrl(youtube.liveUrl);
    if (id) return `https://www.youtube.com/embed/${id}?${params}`;
    return null;
}
function extractIdFromUrl(liveUrl) {
    if (!liveUrl || typeof liveUrl !== "string") return null;
    try {
        const u = new URL(liveUrl);
        const v = u.searchParams.get("v");
        if (v) return v;
        const parts = u.pathname.split("/").filter(Boolean);
        const liveIdx = parts.indexOf("live");
        if (liveIdx >= 0 && parts[liveIdx + 1]) return parts[liveIdx + 1];
        if (parts[0] === "embed" && parts[1]) return parts[1];
        if (parts[0] === "shorts" && parts[1]) return parts[1];
        if (u.hostname.includes("youtu.be") && parts[0]) return parts[0];
    } catch  {
    /* ignore */ }
    return null;
}
function cacheUnlockedEvent(slug, payload) {
    if (("TURBOPACK compile-time value", "object") === "undefined" || !slug || !payload) return;
    try {
        sessionStorage.setItem(`sv_unlocked_${slug}`, JSON.stringify(payload));
    } catch  {
    /* ignore quota */ }
}
function readUnlockedEvent(slug) {
    if (("TURBOPACK compile-time value", "object") === "undefined" || !slug) return null;
    try {
        const raw = sessionStorage.getItem(`sv_unlocked_${slug}`);
        return raw ? JSON.parse(raw) : null;
    } catch  {
        return null;
    }
}
function planFeatureList(plan) {
    const features = plan?.features;
    if (Array.isArray(features)) return features.map(String);
    if (features && typeof features === "object") {
        return Object.entries(features).map(([key, value])=>{
            if (typeof value === "boolean") return value ? key : null;
            return `${key}: ${value}`;
        }).filter(Boolean);
    }
    const extras = [];
    if (plan?.eventLimit != null) {
        extras.push(plan.eventLimit < 0 ? "Unlimited events" : `${plan.eventLimit} events`);
    }
    if (plan?.hoursLimit != null) {
        extras.push(plan.hoursLimit < 0 ? "Unlimited hours" : `${plan.hoursLimit} hours`);
    }
    if (plan?.viewerLimit != null) {
        extras.push(plan.viewerLimit < 0 ? "Unlimited viewers" : `${plan.viewerLimit} viewers`);
    }
    if (plan?.storageGb != null) extras.push(`${plan.storageGb} GB storage`);
    return extras;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/themes/components/CinematicLiveTheme.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CinematicLiveTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$lib$2f$event$2d$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/themes/lib/event-helpers.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$CinematicLiveTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/themes/components/CinematicLiveTheme.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function CinematicLiveTheme({ event, youtube, media = [], branding, publicPath }) {
    _s();
    const [watching, setWatching] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const embed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CinematicLiveTheme.useMemo[embed]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$lib$2f$event$2d$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["youtubeEmbedUrl"])(youtube)
    }["CinematicLiveTheme.useMemo[embed]"], [
        youtube
    ]);
    const isLive = event?.status === "LIVE" || youtube?.status === "LIVE";
    const title = event?.pageTitle || event?.eventName || "Live Event";
    const fontFamily = event?.fontFamily || "Cormorant Garamond, Georgia, serif";
    const accent = event?.fontColor || branding?.primaryColor || "#E8C36A";
    const cover = (0, __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$lib$2f$event$2d$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["coverSrc"])(event?.coverImage);
    const logo = branding?.logo || event?.logoImage;
    const shareUrl = ("TURBOPACK compile-time truthy", 1) ? window.location.href : "TURBOPACK unreachable";
    const waNumber = (branding?.whatsappNumber || "").replace(/\D/g, "");
    const gallery = media.filter((m)=>m?.fileUrl || m?.thumbnailUrl);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$CinematicLiveTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].root,
        style: {
            "--cine-accent": accent,
            "--cine-font": fontFamily
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$CinematicLiveTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bgGlow,
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/themes/components/CinematicLiveTheme.jsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$CinematicLiveTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bgCover,
                style: {
                    backgroundImage: `url(${cover})`
                },
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/themes/components/CinematicLiveTheme.jsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            event?.scrollMessage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$CinematicLiveTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].marquee,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$CinematicLiveTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].marqueeTrack,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: event.scrollMessage
                        }, void 0, false, {
                            fileName: "[project]/themes/components/CinematicLiveTheme.jsx",
                            lineNumber: 51,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: event.scrollMessage
                        }, void 0, false, {
                            fileName: "[project]/themes/components/CinematicLiveTheme.jsx",
                            lineNumber: 52,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/themes/components/CinematicLiveTheme.jsx",
                    lineNumber: 50,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/themes/components/CinematicLiveTheme.jsx",
                lineNumber: 49,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$CinematicLiveTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].topBar,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$CinematicLiveTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].brand,
                        children: [
                            logo ? // eslint-disable-next-line @next/next/no-img-element
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: logo,
                                alt: "",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$CinematicLiveTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logo
                            }, void 0, false, {
                                fileName: "[project]/themes/components/CinematicLiveTheme.jsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$CinematicLiveTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].brandMark,
                                children: "SV Live"
                            }, void 0, false, {
                                fileName: "[project]/themes/components/CinematicLiveTheme.jsx",
                                lineNumber: 63,
                                columnNumber: 13
                            }, this),
                            branding?.companyName ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$CinematicLiveTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].host,
                                children: branding.companyName
                            }, void 0, false, {
                                fileName: "[project]/themes/components/CinematicLiveTheme.jsx",
                                lineNumber: 66,
                                columnNumber: 13
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/themes/components/CinematicLiveTheme.jsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    isLive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$CinematicLiveTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].livePill,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$CinematicLiveTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].liveDot
                            }, void 0, false, {
                                fileName: "[project]/themes/components/CinematicLiveTheme.jsx",
                                lineNumber: 71,
                                columnNumber: 13
                            }, this),
                            "LIVE"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/themes/components/CinematicLiveTheme.jsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$CinematicLiveTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].soonPill,
                        children: "UPCOMING"
                    }, void 0, false, {
                        fileName: "[project]/themes/components/CinematicLiveTheme.jsx",
                        lineNumber: 75,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/themes/components/CinematicLiveTheme.jsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$CinematicLiveTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stage,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$CinematicLiveTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eyebrow,
                        children: (event?.eventType || "Event").toUpperCase()
                    }, void 0, false, {
                        fileName: "[project]/themes/components/CinematicLiveTheme.jsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$CinematicLiveTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/themes/components/CinematicLiveTheme.jsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    event?.liveTiming ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$CinematicLiveTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].timing,
                        children: event.liveTiming
                    }, void 0, false, {
                        fileName: "[project]/themes/components/CinematicLiveTheme.jsx",
                        lineNumber: 83,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$CinematicLiveTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].timing,
                        children: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$lib$2f$event$2d$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatEventDateTime"])(event?.eventDate, event?.startTime),
                            event?.location ? ` · ${event.location}` : ""
                        ]
                    }, void 0, true, {
                        fileName: "[project]/themes/components/CinematicLiveTheme.jsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$CinematicLiveTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].playerShell,
                        children: watching && embed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                            src: embed,
                            title: title,
                            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                            allowFullScreen: true,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$CinematicLiveTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].player
                        }, void 0, false, {
                            fileName: "[project]/themes/components/CinematicLiveTheme.jsx",
                            lineNumber: 93,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$CinematicLiveTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].poster,
                            onClick: ()=>setWatching(true),
                            style: {
                                backgroundImage: `url(${event?.customImage || cover})`
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$CinematicLiveTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].posterShade
                                }, void 0, false, {
                                    fileName: "[project]/themes/components/CinematicLiveTheme.jsx",
                                    lineNumber: 107,
                                    columnNumber: 15
                                }, this),
                                event?.showWatchLive !== false ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$CinematicLiveTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].watchBtn,
                                    children: embed ? "Watch Live" : "Stream starting soon"
                                }, void 0, false, {
                                    fileName: "[project]/themes/components/CinematicLiveTheme.jsx",
                                    lineNumber: 109,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$CinematicLiveTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].watchBtn,
                                    children: "Preview"
                                }, void 0, false, {
                                    fileName: "[project]/themes/components/CinematicLiveTheme.jsx",
                                    lineNumber: 113,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/themes/components/CinematicLiveTheme.jsx",
                            lineNumber: 101,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/themes/components/CinematicLiveTheme.jsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$CinematicLiveTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actions,
                        children: [
                            embed && event?.showWatchLive !== false ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$CinematicLiveTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].primaryBtn,
                                onClick: ()=>setWatching(true),
                                children: watching ? "Playing" : "Watch Live"
                            }, void 0, false, {
                                fileName: "[project]/themes/components/CinematicLiveTheme.jsx",
                                lineNumber: 121,
                                columnNumber: 13
                            }, this) : null,
                            event?.showSocialShare !== false && shareUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$CinematicLiveTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].secondaryBtn,
                                href: `https://wa.me/${waNumber || ""}?text=${encodeURIComponent(`Watch live: ${title} — ${shareUrl}`)}`,
                                target: "_blank",
                                rel: "noreferrer",
                                children: "Share on WhatsApp"
                            }, void 0, false, {
                                fileName: "[project]/themes/components/CinematicLiveTheme.jsx",
                                lineNumber: 126,
                                columnNumber: 13
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/themes/components/CinematicLiveTheme.jsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this),
                    (event?.remarks1 || event?.remarks2 || event?.description) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$CinematicLiveTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].notes,
                        children: [
                            event.description ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: event.description
                            }, void 0, false, {
                                fileName: "[project]/themes/components/CinematicLiveTheme.jsx",
                                lineNumber: 141,
                                columnNumber: 34
                            }, this) : null,
                            event.remarks1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: event.remarks1
                            }, void 0, false, {
                                fileName: "[project]/themes/components/CinematicLiveTheme.jsx",
                                lineNumber: 142,
                                columnNumber: 31
                            }, this) : null,
                            event.remarks2 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: event.remarks2
                            }, void 0, false, {
                                fileName: "[project]/themes/components/CinematicLiveTheme.jsx",
                                lineNumber: 143,
                                columnNumber: 31
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/themes/components/CinematicLiveTheme.jsx",
                        lineNumber: 140,
                        columnNumber: 11
                    }, this),
                    gallery.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$CinematicLiveTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].gallery,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Moments"
                            }, void 0, false, {
                                fileName: "[project]/themes/components/CinematicLiveTheme.jsx",
                                lineNumber: 149,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$CinematicLiveTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].galleryGrid,
                                children: gallery.map((item)=>// eslint-disable-next-line @next/next/no-img-element
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: item.thumbnailUrl || item.fileUrl,
                                        alt: ""
                                    }, item.id || item.fileUrl, false, {
                                        fileName: "[project]/themes/components/CinematicLiveTheme.jsx",
                                        lineNumber: 153,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/themes/components/CinematicLiveTheme.jsx",
                                lineNumber: 150,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/themes/components/CinematicLiveTheme.jsx",
                        lineNumber: 148,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/themes/components/CinematicLiveTheme.jsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$CinematicLiveTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footer,
                children: [
                    "Powered by SV Live",
                    event?.location ? ` · ${event.location}` : ""
                ]
            }, void 0, true, {
                fileName: "[project]/themes/components/CinematicLiveTheme.jsx",
                lineNumber: 164,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/themes/components/CinematicLiveTheme.jsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_s(CinematicLiveTheme, "jSHGPr7nPc9GlN4hWWI4DW4+M0Y=");
_c = CinematicLiveTheme;
var _c;
__turbopack_context__.k.register(_c, "CinematicLiveTheme");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/themes/components/CinematicLiveTheme.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actions": "CinematicLiveTheme-module__zWxDPq__actions",
  "bgCover": "CinematicLiveTheme-module__zWxDPq__bgCover",
  "bgGlow": "CinematicLiveTheme-module__zWxDPq__bgGlow",
  "brand": "CinematicLiveTheme-module__zWxDPq__brand",
  "brandMark": "CinematicLiveTheme-module__zWxDPq__brandMark",
  "eyebrow": "CinematicLiveTheme-module__zWxDPq__eyebrow",
  "footer": "CinematicLiveTheme-module__zWxDPq__footer",
  "gallery": "CinematicLiveTheme-module__zWxDPq__gallery",
  "galleryGrid": "CinematicLiveTheme-module__zWxDPq__galleryGrid",
  "host": "CinematicLiveTheme-module__zWxDPq__host",
  "liveDot": "CinematicLiveTheme-module__zWxDPq__liveDot",
  "livePill": "CinematicLiveTheme-module__zWxDPq__livePill",
  "logo": "CinematicLiveTheme-module__zWxDPq__logo",
  "marquee": "CinematicLiveTheme-module__zWxDPq__marquee",
  "marqueeTrack": "CinematicLiveTheme-module__zWxDPq__marqueeTrack",
  "notes": "CinematicLiveTheme-module__zWxDPq__notes",
  "player": "CinematicLiveTheme-module__zWxDPq__player",
  "playerShell": "CinematicLiveTheme-module__zWxDPq__playerShell",
  "poster": "CinematicLiveTheme-module__zWxDPq__poster",
  "posterShade": "CinematicLiveTheme-module__zWxDPq__posterShade",
  "primaryBtn": "CinematicLiveTheme-module__zWxDPq__primaryBtn",
  "pulse": "CinematicLiveTheme-module__zWxDPq__pulse",
  "root": "CinematicLiveTheme-module__zWxDPq__root",
  "scroll": "CinematicLiveTheme-module__zWxDPq__scroll",
  "secondaryBtn": "CinematicLiveTheme-module__zWxDPq__secondaryBtn",
  "soonPill": "CinematicLiveTheme-module__zWxDPq__soonPill",
  "stage": "CinematicLiveTheme-module__zWxDPq__stage",
  "timing": "CinematicLiveTheme-module__zWxDPq__timing",
  "title": "CinematicLiveTheme-module__zWxDPq__title",
  "topBar": "CinematicLiveTheme-module__zWxDPq__topBar",
  "watchBtn": "CinematicLiveTheme-module__zWxDPq__watchBtn",
});
}),
"[project]/themes/components/EventThemeRenderer.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EventThemeRenderer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$CinematicLiveTheme$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/themes/components/CinematicLiveTheme.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$EventThemeShell$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/themes/components/EventThemeShell.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/themes/components/SacredGardenTheme.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$TraditionalStreamingTheme$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/themes/components/TraditionalStreamingTheme.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$WeddingThemeTraditional$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/themes/components/WeddingThemeTraditional.jsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
/**
 * Maps layout keys (from admin theme.config.layout) to guest renderers.
 * Register new layouts in admin only — add a renderer here when the layout needs custom UI.
 */ const LAYOUT_RENDERERS = {
    "wedding-theme-traditional": __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$WeddingThemeTraditional$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "telugu-wedding-traditional": __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$WeddingThemeTraditional$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "traditional-streaming": __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$TraditionalStreamingTheme$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "the-sacred-garden": __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    cinematic: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$CinematicLiveTheme$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    "cinematic-live": __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$CinematicLiveTheme$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
};
function resolveLayoutRenderer(layout) {
    if (!layout) return __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$EventThemeShell$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
    const key = String(layout).toLowerCase();
    if (LAYOUT_RENDERERS[layout]) return LAYOUT_RENDERERS[layout];
    if (LAYOUT_RENDERERS[key]) return LAYOUT_RENDERERS[key];
    if (key.includes("wedding-traditional") || key.includes("telugu-wedding")) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$WeddingThemeTraditional$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
    }
    if (key.includes("sacred-garden") || key.includes("sacredgarden")) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
    }
    if (key.includes("traditional-streaming") || key.includes("streaming")) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$TraditionalStreamingTheme$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
    }
    if (key.includes("cinematic")) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$CinematicLiveTheme$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$EventThemeShell$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
}
function resolveLayoutKey(theme) {
    const config = theme?.config && typeof theme.config === "object" ? theme.config : {};
    return config.layout || config.preset || theme?.slug || theme?.name || null;
}
function EventThemeRenderer(props) {
    const layout = resolveLayoutKey(props.theme);
    const Component = resolveLayoutRenderer(layout);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Component, {
        ...props
    }, void 0, false, {
        fileName: "[project]/themes/components/EventThemeRenderer.jsx",
        lineNumber: 56,
        columnNumber: 10
    }, this);
}
_c = EventThemeRenderer;
var _c;
__turbopack_context__.k.register(_c, "EventThemeRenderer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/themes/components/EventThemeRenderer.jsx [app-client] (ecmascript) <export default as EventThemeRenderer>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EventThemeRenderer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$EventThemeRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$EventThemeRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/themes/components/EventThemeRenderer.jsx [app-client] (ecmascript)");
}),
"[project]/themes/components/EventThemeRenderer.jsx [app-client] (ecmascript) <export default as EventThemeRenderer> <export EventThemeRenderer as default>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$EventThemeRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EventThemeRenderer$3e$__["EventThemeRenderer"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$EventThemeRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EventThemeRenderer$3e$__ = __turbopack_context__.i("[project]/themes/components/EventThemeRenderer.jsx [app-client] (ecmascript) <export default as EventThemeRenderer>");
}),
"[project]/themes/components/EventThemeShell.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EventThemeShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$lib$2f$event$2d$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/themes/lib/event-helpers.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$lib$2f$share$2d$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/themes/lib/share-event.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$lib$2f$theme$2d$sections$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/themes/lib/theme-sections.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$EventThemeShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/themes/components/EventThemeShell.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const FALLBACK_COLORS = {
    primary: "#C77B3E",
    secondary: "#F3D9C0",
    accent: "#8A5A2E",
    background: "#0B0908",
    text: "#F7F1E6",
    fontFamily: "Georgia, serif"
};
function resolveLayout(theme) {
    return theme?.config?.layout || theme?.slug || "cinematic";
}
function isLightTheme(colors) {
    const bg = String(colors.background || "").toLowerCase();
    return bg.includes("#f") || bg.includes("#fff") || bg.includes("250") || bg.includes("248");
}
function EventThemeShell({ event, youtube, media = [], branding, theme, publicPath }) {
    _s();
    const layout = resolveLayout(theme);
    const colors = {
        ...FALLBACK_COLORS,
        ...theme?.config?.colors || {}
    };
    const sections = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "EventThemeShell.useMemo[sections]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$lib$2f$theme$2d$sections$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveThemeSections"])(theme)
    }["EventThemeShell.useMemo[sections]"], [
        theme
    ]);
    const [watching, setWatching] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const embed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "EventThemeShell.useMemo[embed]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$lib$2f$event$2d$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["youtubeEmbedUrl"])(youtube)
    }["EventThemeShell.useMemo[embed]"], [
        youtube
    ]);
    const showLive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$lib$2f$theme$2d$sections$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldShowLivePlayer"])(sections, youtube, embed, event);
    const isLive = event?.status === "LIVE" || youtube?.status === "LIVE";
    const title = event?.pageTitle || event?.eventName || "Live Event";
    const fontFamily = event?.fontFamily || theme?.config?.fontFamily || branding?.customConfig?.fontFamily || colors.fontFamily;
    const accent = event?.fontColor || branding?.primaryColor || colors.primary;
    const cover = (0, __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$lib$2f$event$2d$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["coverSrc"])(event?.coverImage);
    const logo = branding?.logo || event?.logoImage;
    const shareUrl = ("TURBOPACK compile-time truthy", 1) ? window.location.href : "TURBOPACK unreachable";
    const gallery = media.filter((m)=>m?.fileUrl || m?.thumbnailUrl);
    const light = isLightTheme(colors);
    const shareImageUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "EventThemeShell.useMemo[shareImageUrl]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$lib$2f$share$2d$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEventShareImageUrl"])(event)
    }["EventThemeShell.useMemo[shareImageUrl]"], [
        event
    ]);
    const shareText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "EventThemeShell.useMemo[shareText]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$lib$2f$share$2d$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildEventShareText"])({
                url: shareUrl,
                title,
                tagline: event?.scrollMessage || `Watch live: ${title}`,
                placeLine: event?.location || event?.eventPlace || null
            })
    }["EventThemeShell.useMemo[shareText]"], [
        shareUrl,
        title,
        event?.scrollMessage,
        event?.location,
        event?.eventPlace
    ]);
    const shareInvite = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "EventThemeShell.useCallback[shareInvite]": async (e)=>{
            e?.preventDefault?.();
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$lib$2f$share$2d$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shareEventWithImage"])({
                url: shareUrl,
                text: shareText,
                imageUrl: shareImageUrl || cover,
                title,
                fileName: "event-share.png"
            });
        }
    }["EventThemeShell.useCallback[shareInvite]"], [
        shareUrl,
        shareText,
        shareImageUrl,
        cover,
        title
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$EventThemeShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].root} ${__TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$EventThemeShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][layout] || ""} ${light ? __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$EventThemeShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].light : __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$EventThemeShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dark}`,
        style: {
            "--theme-primary": accent,
            "--theme-secondary": colors.secondary,
            "--theme-accent": colors.accent || accent,
            "--theme-bg": colors.background,
            "--theme-text": colors.text,
            "--theme-font": fontFamily
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$EventThemeShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bgGlow,
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/themes/components/EventThemeShell.jsx",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$EventThemeShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bgCover,
                style: {
                    backgroundImage: `url(${cover})`
                },
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/themes/components/EventThemeShell.jsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            event?.scrollMessage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$EventThemeShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].marquee,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$EventThemeShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].marqueeTrack,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: event.scrollMessage
                        }, void 0, false, {
                            fileName: "[project]/themes/components/EventThemeShell.jsx",
                            lineNumber: 100,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: event.scrollMessage
                        }, void 0, false, {
                            fileName: "[project]/themes/components/EventThemeShell.jsx",
                            lineNumber: 101,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/themes/components/EventThemeShell.jsx",
                    lineNumber: 99,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/themes/components/EventThemeShell.jsx",
                lineNumber: 98,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$EventThemeShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].topBar,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$EventThemeShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].brand,
                        children: [
                            logo ? // eslint-disable-next-line @next/next/no-img-element
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: logo,
                                alt: "",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$EventThemeShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logo
                            }, void 0, false, {
                                fileName: "[project]/themes/components/EventThemeShell.jsx",
                                lineNumber: 110,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$EventThemeShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].brandMark,
                                children: "SV Live"
                            }, void 0, false, {
                                fileName: "[project]/themes/components/EventThemeShell.jsx",
                                lineNumber: 112,
                                columnNumber: 13
                            }, this),
                            branding?.companyName ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$EventThemeShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].host,
                                children: branding.companyName
                            }, void 0, false, {
                                fileName: "[project]/themes/components/EventThemeShell.jsx",
                                lineNumber: 114,
                                columnNumber: 36
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/themes/components/EventThemeShell.jsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this),
                    isLive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$EventThemeShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].livePill,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$EventThemeShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].liveDot
                            }, void 0, false, {
                                fileName: "[project]/themes/components/EventThemeShell.jsx",
                                lineNumber: 118,
                                columnNumber: 13
                            }, this),
                            "LIVE"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/themes/components/EventThemeShell.jsx",
                        lineNumber: 117,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$EventThemeShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].soonPill,
                        children: "UPCOMING"
                    }, void 0, false, {
                        fileName: "[project]/themes/components/EventThemeShell.jsx",
                        lineNumber: 122,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/themes/components/EventThemeShell.jsx",
                lineNumber: 106,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$EventThemeShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stage,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$EventThemeShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eyebrow,
                        children: (event?.eventType || "Event").toUpperCase()
                    }, void 0, false, {
                        fileName: "[project]/themes/components/EventThemeShell.jsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$EventThemeShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/themes/components/EventThemeShell.jsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this),
                    event?.liveTiming ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$EventThemeShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].timing,
                        children: event.liveTiming
                    }, void 0, false, {
                        fileName: "[project]/themes/components/EventThemeShell.jsx",
                        lineNumber: 130,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$EventThemeShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].timing,
                        children: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$lib$2f$event$2d$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatEventDateTime"])(event?.eventDate, event?.startTime),
                            event?.location ? ` · ${event.location}` : ""
                        ]
                    }, void 0, true, {
                        fileName: "[project]/themes/components/EventThemeShell.jsx",
                        lineNumber: 132,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$EventThemeShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].playerShell,
                        children: showLive ? watching && embed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                            src: embed,
                            title: title,
                            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                            allowFullScreen: true,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$EventThemeShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].player
                        }, void 0, false, {
                            fileName: "[project]/themes/components/EventThemeShell.jsx",
                            lineNumber: 141,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$EventThemeShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].poster,
                            onClick: ()=>setWatching(true),
                            style: {
                                backgroundImage: `url(${event?.customImage || cover})`
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$EventThemeShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].posterShade
                                }, void 0, false, {
                                    fileName: "[project]/themes/components/EventThemeShell.jsx",
                                    lineNumber: 155,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$EventThemeShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].watchBtn,
                                    children: embed ? "Watch Live" : "Stream starting soon"
                                }, void 0, false, {
                                    fileName: "[project]/themes/components/EventThemeShell.jsx",
                                    lineNumber: 156,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/themes/components/EventThemeShell.jsx",
                            lineNumber: 149,
                            columnNumber: 15
                        }, this) : cover ? // eslint-disable-next-line @next/next/no-img-element
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: cover,
                            alt: "",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$EventThemeShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].coverOnly
                        }, void 0, false, {
                            fileName: "[project]/themes/components/EventThemeShell.jsx",
                            lineNumber: 163,
                            columnNumber: 13
                        }, this) : null
                    }, void 0, false, {
                        fileName: "[project]/themes/components/EventThemeShell.jsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$EventThemeShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actions,
                        children: [
                            showLive && embed && event?.showWatchLive !== false ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$EventThemeShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].primaryBtn,
                                onClick: ()=>setWatching(true),
                                children: watching ? "Playing" : "Watch Live"
                            }, void 0, false, {
                                fileName: "[project]/themes/components/EventThemeShell.jsx",
                                lineNumber: 169,
                                columnNumber: 13
                            }, this) : null,
                            event?.showSocialShare !== false && shareUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$EventThemeShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].secondaryBtn,
                                onClick: shareInvite,
                                children: "Share event"
                            }, void 0, false, {
                                fileName: "[project]/themes/components/EventThemeShell.jsx",
                                lineNumber: 174,
                                columnNumber: 13
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/themes/components/EventThemeShell.jsx",
                        lineNumber: 167,
                        columnNumber: 9
                    }, this),
                    (event?.remarks1 || event?.remarks2 || event?.description) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$EventThemeShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].notes,
                        children: [
                            event.description ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: event.description
                            }, void 0, false, {
                                fileName: "[project]/themes/components/EventThemeShell.jsx",
                                lineNumber: 182,
                                columnNumber: 34
                            }, this) : null,
                            event.remarks1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: event.remarks1
                            }, void 0, false, {
                                fileName: "[project]/themes/components/EventThemeShell.jsx",
                                lineNumber: 183,
                                columnNumber: 31
                            }, this) : null,
                            event.remarks2 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: event.remarks2
                            }, void 0, false, {
                                fileName: "[project]/themes/components/EventThemeShell.jsx",
                                lineNumber: 184,
                                columnNumber: 31
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/themes/components/EventThemeShell.jsx",
                        lineNumber: 181,
                        columnNumber: 11
                    }, this),
                    sections.showGallery !== false && gallery.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$EventThemeShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].gallery,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Moments"
                            }, void 0, false, {
                                fileName: "[project]/themes/components/EventThemeShell.jsx",
                                lineNumber: 190,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$EventThemeShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].galleryGrid,
                                children: gallery.map((item)=>// eslint-disable-next-line @next/next/no-img-element
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: item.thumbnailUrl || item.fileUrl,
                                        alt: ""
                                    }, item.id || item.fileUrl, false, {
                                        fileName: "[project]/themes/components/EventThemeShell.jsx",
                                        lineNumber: 194,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/themes/components/EventThemeShell.jsx",
                                lineNumber: 191,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/themes/components/EventThemeShell.jsx",
                        lineNumber: 189,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/themes/components/EventThemeShell.jsx",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$EventThemeShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footer,
                children: [
                    "Powered by SV Live · Theme: ",
                    theme?.name || layout,
                    event?.location ? ` · ${event.location}` : ""
                ]
            }, void 0, true, {
                fileName: "[project]/themes/components/EventThemeShell.jsx",
                lineNumber: 201,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/themes/components/EventThemeShell.jsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
_s(EventThemeShell, "VHtj+oAHwTPJswaOOP0a+POSNxM=");
_c = EventThemeShell;
var _c;
__turbopack_context__.k.register(_c, "EventThemeShell");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/themes/components/EventThemeShell.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actions": "EventThemeShell-module__sZdZCa__actions",
  "bgCover": "EventThemeShell-module__sZdZCa__bgCover",
  "bgGlow": "EventThemeShell-module__sZdZCa__bgGlow",
  "brand": "EventThemeShell-module__sZdZCa__brand",
  "brandMark": "EventThemeShell-module__sZdZCa__brandMark",
  "classic": "EventThemeShell-module__sZdZCa__classic",
  "coverOnly": "EventThemeShell-module__sZdZCa__coverOnly",
  "eyebrow": "EventThemeShell-module__sZdZCa__eyebrow",
  "floral": "EventThemeShell-module__sZdZCa__floral",
  "footer": "EventThemeShell-module__sZdZCa__footer",
  "gallery": "EventThemeShell-module__sZdZCa__gallery",
  "galleryGrid": "EventThemeShell-module__sZdZCa__galleryGrid",
  "host": "EventThemeShell-module__sZdZCa__host",
  "light": "EventThemeShell-module__sZdZCa__light",
  "liveDot": "EventThemeShell-module__sZdZCa__liveDot",
  "livePill": "EventThemeShell-module__sZdZCa__livePill",
  "logo": "EventThemeShell-module__sZdZCa__logo",
  "marquee": "EventThemeShell-module__sZdZCa__marquee",
  "marqueeTrack": "EventThemeShell-module__sZdZCa__marqueeTrack",
  "notes": "EventThemeShell-module__sZdZCa__notes",
  "player": "EventThemeShell-module__sZdZCa__player",
  "playerShell": "EventThemeShell-module__sZdZCa__playerShell",
  "poster": "EventThemeShell-module__sZdZCa__poster",
  "posterShade": "EventThemeShell-module__sZdZCa__posterShade",
  "primaryBtn": "EventThemeShell-module__sZdZCa__primaryBtn",
  "pulse": "EventThemeShell-module__sZdZCa__pulse",
  "root": "EventThemeShell-module__sZdZCa__root",
  "scroll": "EventThemeShell-module__sZdZCa__scroll",
  "secondaryBtn": "EventThemeShell-module__sZdZCa__secondaryBtn",
  "soonPill": "EventThemeShell-module__sZdZCa__soonPill",
  "stage": "EventThemeShell-module__sZdZCa__stage",
  "timing": "EventThemeShell-module__sZdZCa__timing",
  "title": "EventThemeShell-module__sZdZCa__title",
  "topBar": "EventThemeShell-module__sZdZCa__topBar",
  "traditional": "EventThemeShell-module__sZdZCa__traditional",
  "watchBtn": "EventThemeShell-module__sZdZCa__watchBtn",
});
}),
"[project]/themes/components/SacredGardenTheme.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SacredGardenTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$lib$2f$event$2d$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/themes/lib/event-helpers.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$lib$2f$share$2d$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/themes/lib/share-event.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$lib$2f$theme$2d$sections$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/themes/lib/theme-sections.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/themes/components/SacredGardenTheme.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const DEFAULT_ASSET = "/themes/the-sacred-garden";
const DEFAULT_TAGLINE = "The Sacred Garden";
const DEFAULT_BLESSING = "Two souls, one beautiful journey, surrounded by love, blessed by family, and beginning forever together.";
const PETALS = [
    {
        left: "6%",
        w: 13,
        h: 9,
        round: "60% 40% 55% 45%",
        color: "#E8B5A6",
        opacity: 0.6,
        duration: 19,
        delay: 0
    },
    {
        left: "19%",
        w: 9,
        h: 7,
        round: "60% 40% 55% 45%",
        color: "#87966C",
        opacity: 0.5,
        duration: 26,
        delay: -4
    },
    {
        left: "31%",
        w: 15,
        h: 10,
        round: "60% 40% 55% 45%",
        color: "#E8B5A6",
        opacity: 0.45,
        duration: 22,
        delay: -9
    },
    {
        left: "44%",
        w: 8,
        h: 8,
        round: "50%",
        color: "#B88938",
        opacity: 0.4,
        duration: 30,
        delay: -14
    },
    {
        left: "57%",
        w: 12,
        h: 8,
        round: "60% 40% 55% 45%",
        color: "#E8B5A6",
        opacity: 0.55,
        duration: 24,
        delay: -6
    },
    {
        left: "69%",
        w: 10,
        h: 7,
        round: "60% 40% 55% 45%",
        color: "#87966C",
        opacity: 0.45,
        duration: 28,
        delay: -18
    },
    {
        left: "81%",
        w: 14,
        h: 9,
        round: "60% 40% 55% 45%",
        color: "#E8B5A6",
        opacity: 0.5,
        duration: 21,
        delay: -11
    },
    {
        left: "92%",
        w: 9,
        h: 6,
        round: "60% 40% 55% 45%",
        color: "#B88938",
        opacity: 0.4,
        duration: 33,
        delay: -2
    }
];
function pad(n) {
    return String(n).padStart(2, "0");
}
function splitCoupleName(event) {
    if (event?.brideName || event?.groomName) {
        return {
            left: event.brideName || "Bride",
            right: event.groomName || "Groom"
        };
    }
    const raw = event?.pageTitle || event?.eventName || "Bride & Groom";
    const parts = raw.split(/\s*(?:&|and|♡|weds)\s*/i).map((s)=>s.trim()).filter(Boolean);
    if (parts.length >= 2) return {
        left: parts[0],
        right: parts[1]
    };
    return {
        left: raw,
        right: ""
    };
}
function formatTimeLabel(event) {
    if (event?.eventTime) return event.eventTime;
    if (event?.liveTiming) return event.liveTiming;
    const t = event?.startTime ? new Date(event.startTime) : null;
    if (!t || Number.isNaN(t.getTime())) return null;
    return t.toLocaleTimeString("en-IN", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true
    });
}
function useCountdown(targetIso) {
    _s();
    const [now, setNow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useCountdown.useState": ()=>Date.now()
    }["useCountdown.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCountdown.useEffect": ()=>{
            if (!targetIso) return undefined;
            const id = window.setInterval({
                "useCountdown.useEffect.id": ()=>setNow(Date.now())
            }["useCountdown.useEffect.id"], 1000);
            return ({
                "useCountdown.useEffect": ()=>window.clearInterval(id)
            })["useCountdown.useEffect"];
        }
    }["useCountdown.useEffect"], [
        targetIso
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useCountdown.useMemo": ()=>{
            if (!targetIso) return null;
            const target = new Date(targetIso).getTime();
            if (Number.isNaN(target)) return null;
            const diff = target - now;
            if (diff <= 0) return {
                ended: true,
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0
            };
            return {
                ended: false,
                days: Math.floor(diff / 86400000),
                hours: Math.floor(diff % 86400000 / 3600000),
                minutes: Math.floor(diff % 3600000 / 60000),
                seconds: Math.floor(diff % 60000 / 1000)
            };
        }
    }["useCountdown.useMemo"], [
        targetIso,
        now
    ]);
}
_s(useCountdown, "Hgbq6moc33hRYqLyb8a4L2PMQ58=");
function DiamondRule() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].diamondRule,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ruleLine
            }, void 0, false, {
                fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].diamond
            }, void 0, false, {
                fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ruleLineRev
            }, void 0, false, {
                fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                lineNumber: 83,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/themes/components/SacredGardenTheme.jsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
_c = DiamondRule;
function SacredGardenTheme({ event, youtube, media = [], branding, theme, publicPath }) {
    _s1();
    const assetBase = theme?.config?.assetPath || DEFAULT_ASSET;
    const ASSET = `${assetBase.replace(/\/$/, "")}/assets`;
    const [opened, setOpened] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [closing, setClosing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [gone, setGone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [watching, setWatching] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const embed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SacredGardenTheme.useMemo[embed]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$lib$2f$event$2d$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["youtubeEmbedUrl"])(youtube)
    }["SacredGardenTheme.useMemo[embed]"], [
        youtube
    ]);
    const sections = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SacredGardenTheme.useMemo[sections]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$lib$2f$theme$2d$sections$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveThemeSections"])(theme)
    }["SacredGardenTheme.useMemo[sections]"], [
        theme
    ]);
    const showLive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$lib$2f$theme$2d$sections$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldShowLivePlayer"])(sections, youtube, embed, event);
    const isLive = event?.status === "LIVE" || youtube?.status === "LIVE";
    const { left, right } = splitCoupleName(event);
    const gardenTitle = theme?.config?.defaults?.tagline || theme?.name || DEFAULT_TAGLINE;
    const blessing = event?.description || theme?.config?.defaults?.description || DEFAULT_BLESSING;
    const cover = event?.coverImage ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$lib$2f$event$2d$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["coverSrc"])(event.coverImage) : null;
    const place = event?.eventPlace || event?.location || "";
    const eventTime = formatTimeLabel(event);
    const gallery = media.filter((m)=>m?.fileUrl || m?.thumbnailUrl);
    const galleryUrls = gallery.map((m)=>m.thumbnailUrl || m.fileUrl).filter(Boolean);
    const subEvents = Array.isArray(event?.subEvents) ? event.subEvents.filter((s)=>s?.title) : [];
    const dateValue = event?.eventDate || event?.startTime;
    const dateObj = dateValue ? new Date(dateValue) : null;
    const validDate = dateObj && !Number.isNaN(dateObj.getTime()) ? dateObj : null;
    const dayNum = validDate ? pad(validDate.getDate()) : null;
    const monthName = validDate ? validDate.toLocaleString("en-US", {
        month: "long"
    }).toUpperCase() : null;
    const year = validDate ? String(validDate.getFullYear()) : null;
    const weekday = validDate ? validDate.toLocaleString("en-US", {
        weekday: "long"
    }).toUpperCase() : null;
    const dateDots = validDate ? `${pad(validDate.getDate())} · ${pad(validDate.getMonth() + 1)} · ${validDate.getFullYear()}` : null;
    const countdownTarget = (0, __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$lib$2f$event$2d$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveCountdownTarget"])(event);
    const countdown = useCountdown(sections.showCountdown !== false ? countdownTarget : null);
    const shareUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SacredGardenTheme.useMemo[shareUrl]": ()=>{
            if ("TURBOPACK compile-time truthy", 1) return window.location.href;
            //TURBOPACK unreachable
            ;
        }
    }["SacredGardenTheme.useMemo[shareUrl]"], [
        publicPath
    ]);
    const shareImageUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SacredGardenTheme.useMemo[shareImageUrl]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$lib$2f$share$2d$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEventShareImageUrl"])(event)
    }["SacredGardenTheme.useMemo[shareImageUrl]"], [
        event
    ]);
    const shareText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SacredGardenTheme.useMemo[shareText]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$lib$2f$share$2d$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildEventShareText"])({
                url: shareUrl,
                title: `${left}${right ? ` & ${right}` : ""}`,
                tagline: event?.scrollMessage || gardenTitle,
                placeLine: place || null
            })
    }["SacredGardenTheme.useMemo[shareText]"], [
        shareUrl,
        left,
        right,
        event?.scrollMessage,
        gardenTitle,
        place
    ]);
    const shareInvite = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SacredGardenTheme.useCallback[shareInvite]": async (e)=>{
            e?.preventDefault?.();
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$lib$2f$share$2d$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shareEventWithImage"])({
                url: shareUrl,
                text: shareText,
                imageUrl: shareImageUrl || cover,
                title: gardenTitle,
                fileName: "sacred-garden-invite.png"
            });
        }
    }["SacredGardenTheme.useCallback[shareInvite]"], [
        shareUrl,
        shareText,
        shareImageUrl,
        cover,
        gardenTitle
    ]);
    function openEnvelope() {
        if (opened || closing) return;
        setOpened(true);
        window.setTimeout(()=>setClosing(true), 1600);
        window.setTimeout(()=>setGone(true), 3000);
    }
    const mapsQuery = encodeURIComponent(place || "");
    const mapsHref = place ? `https://www.google.com/maps/search/?api=1&query=${mapsQuery}` : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].root,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                rel: "stylesheet",
                href: `${assetBase.replace(/\/$/, "")}/style.css`
            }, void 0, false, {
                fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                lineNumber: 173,
                columnNumber: 7
            }, this),
            !gone ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].envelope} ${closing ? __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].envelopeClosing : ""} ${opened ? __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].envelopeOpened : ""}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].corner} ${__TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cornerTL}`
                    }, void 0, false, {
                        fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                        lineNumber: 181,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].corner} ${__TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cornerTR}`
                    }, void 0, false, {
                        fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                        lineNumber: 182,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].corner} ${__TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cornerBL}`
                    }, void 0, false, {
                        fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                        lineNumber: 183,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].corner} ${__TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cornerBR}`
                    }, void 0, false, {
                        fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                        lineNumber: 184,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].envelopeGlow,
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                        lineNumber: 185,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: "center",
                            padding: "0 24px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].envelopeLabel,
                                children: "WEDDING INVITATION"
                            }, void 0, false, {
                                fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                lineNumber: 187,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].envelopeTitle,
                                children: gardenTitle
                            }, void 0, false, {
                                fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                lineNumber: 188,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                        lineNumber: 186,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].envelopeBtn,
                        onClick: openEnvelope,
                        "aria-label": "Open invitation",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: `${ASSET}/envelope-closed.png`,
                                alt: "",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].envelopeImg,
                                draggable: false
                            }, void 0, false, {
                                fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                lineNumber: 192,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: `${ASSET}/envelope-open.png`,
                                alt: "",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].envelopeOpenImg,
                                draggable: false
                            }, void 0, false, {
                                fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                lineNumber: 194,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                        lineNumber: 190,
                        columnNumber: 11
                    }, this),
                    !opened ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tapHint,
                        children: "TAP TO OPEN"
                    }, void 0, false, {
                        fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                        lineNumber: 196,
                        columnNumber: 22
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                lineNumber: 176,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].petals,
                "aria-hidden": true,
                children: PETALS.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].petal,
                        style: {
                            left: p.left,
                            width: p.w,
                            height: p.h,
                            borderRadius: p.round,
                            background: p.color,
                            opacity: p.opacity,
                            animationDuration: `${p.duration}s`,
                            animationDelay: `${p.delay}s`
                        }
                    }, i, false, {
                        fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                        lineNumber: 202,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                lineNumber: 200,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].shell,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hero,
                        id: "home",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: `${ASSET}/frame-background.png`,
                                alt: "",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroBg
                            }, void 0, false, {
                                fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                lineNumber: 222,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroShade
                            }, void 0, false, {
                                fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                lineNumber: 223,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroInner,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].scriptTitle,
                                        children: gardenTitle
                                    }, void 0, false, {
                                        fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                        lineNumber: 225,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DiamondRule, {}, void 0, false, {
                                        fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                        lineNumber: 226,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eyebrow,
                                        children: "Together with their families"
                                    }, void 0, false, {
                                        fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                        lineNumber: 227,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].coupleName,
                                        children: left
                                    }, void 0, false, {
                                        fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                        lineNumber: 228,
                                        columnNumber: 13
                                    }, this),
                                    right ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].amp,
                                                children: "&"
                                            }, void 0, false, {
                                                fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                                lineNumber: 231,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].coupleName,
                                                style: {
                                                    margin: "0 0 28px"
                                                },
                                                children: right
                                            }, void 0, false, {
                                                fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                                lineNumber: 232,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                        lineNumber: 230,
                                        columnNumber: 15
                                    }, this) : null,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inviteLine,
                                        children: "Invite you to celebrate their wedding"
                                    }, void 0, false, {
                                        fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                        lineNumber: 237,
                                        columnNumber: 13
                                    }, this),
                                    dayNum ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dateBlock,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dateRail
                                            }, void 0, false, {
                                                fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                                lineNumber: 241,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dateDay,
                                                        children: dayNum
                                                    }, void 0, false, {
                                                        fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                                        lineNumber: 243,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dateMonth,
                                                        children: monthName
                                                    }, void 0, false, {
                                                        fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                                        lineNumber: 244,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dateYear,
                                                        children: year
                                                    }, void 0, false, {
                                                        fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                                        lineNumber: 245,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                                lineNumber: 242,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dateRail
                                            }, void 0, false, {
                                                fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                                lineNumber: 247,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                        lineNumber: 240,
                                        columnNumber: 15
                                    }, this) : null,
                                    (weekday || eventTime) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].timeLine,
                                        children: [
                                            weekday,
                                            eventTime
                                        ].filter(Boolean).join("  ·  ")
                                    }, void 0, false, {
                                        fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                        lineNumber: 251,
                                        columnNumber: 15
                                    }, this),
                                    place ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].venueCard,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].venueName,
                                            children: place.toUpperCase()
                                        }, void 0, false, {
                                            fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                            lineNumber: 258,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                        lineNumber: 257,
                                        columnNumber: 15
                                    }, this) : null,
                                    showLive && isLive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].liveBadge,
                                        style: {
                                            marginTop: 22
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].liveDot
                                            }, void 0, false, {
                                                fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                                lineNumber: 264,
                                                columnNumber: 17
                                            }, this),
                                            " LIVE NOW"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                        lineNumber: 263,
                                        columnNumber: 15
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                lineNumber: 224,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                        lineNumber: 220,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section} ${__TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionAlt}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eyebrow,
                                children: "A CELEBRATION OF"
                            }, void 0, false, {
                                fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                lineNumber: 271,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle} ${__TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitleMaroon}`,
                                style: {
                                    fontSize: 52
                                },
                                children: "Love"
                            }, void 0, false, {
                                fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                lineNumber: 272,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: `${ASSET}/divider-gold.png`,
                                alt: "",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].divider
                            }, void 0, false, {
                                fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                lineNumber: 276,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quote,
                                children: [
                                    "“",
                                    blessing,
                                    "”"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                lineNumber: 277,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                        lineNumber: 270,
                        columnNumber: 9
                    }, this),
                    countdown && !countdown.ended && sections.showCountdown !== false ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle,
                                style: {
                                    fontSize: 44
                                },
                                children: "The Celebration Begins In"
                            }, void 0, false, {
                                fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                lineNumber: 282,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].countdownGrid,
                                children: [
                                    [
                                        "Days",
                                        countdown.days
                                    ],
                                    [
                                        "Hours",
                                        countdown.hours
                                    ],
                                    [
                                        "Minutes",
                                        countdown.minutes
                                    ],
                                    [
                                        "Seconds",
                                        countdown.seconds
                                    ]
                                ].map(([label, value], index, arr)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "contents"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    flex: 1
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].countdownNum,
                                                        children: pad(value)
                                                    }, void 0, false, {
                                                        fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                                        lineNumber: 294,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].countdownLabel,
                                                        children: label
                                                    }, void 0, false, {
                                                        fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                                        lineNumber: 295,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                                lineNumber: 293,
                                                columnNumber: 19
                                            }, this),
                                            index < arr.length - 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].countdownColon,
                                                children: ":"
                                            }, void 0, false, {
                                                fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                                lineNumber: 297,
                                                columnNumber: 45
                                            }, this) : null
                                        ]
                                    }, label, true, {
                                        fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                        lineNumber: 292,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                lineNumber: 285,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                        lineNumber: 281,
                        columnNumber: 11
                    }, this) : null,
                    showLive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section} ${__TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionAlt}`,
                        id: "live",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionLabel,
                                children: "WATCH WITH US"
                            }, void 0, false, {
                                fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                lineNumber: 306,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle,
                                children: "Live Streaming"
                            }, void 0, false, {
                                fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                lineNumber: 307,
                                columnNumber: 13
                            }, this),
                            countdown && !countdown.ended && sections.showCountdown !== false ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].countdownGrid,
                                style: {
                                    marginBottom: 18
                                },
                                children: [
                                    [
                                        "Days",
                                        countdown.days
                                    ],
                                    [
                                        "Hours",
                                        countdown.hours
                                    ],
                                    [
                                        "Minutes",
                                        countdown.minutes
                                    ],
                                    [
                                        "Seconds",
                                        countdown.seconds
                                    ]
                                ].map(([label, value], index, arr)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "contents"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    flex: 1
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].countdownNum,
                                                        children: pad(value)
                                                    }, void 0, false, {
                                                        fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                                        lineNumber: 318,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].countdownLabel,
                                                        children: label
                                                    }, void 0, false, {
                                                        fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                                        lineNumber: 319,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                                lineNumber: 317,
                                                columnNumber: 21
                                            }, this),
                                            index < arr.length - 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].countdownColon,
                                                children: ":"
                                            }, void 0, false, {
                                                fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                                lineNumber: 321,
                                                columnNumber: 47
                                            }, this) : null
                                        ]
                                    }, label, true, {
                                        fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                        lineNumber: 316,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                lineNumber: 309,
                                columnNumber: 15
                            }, this) : null,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].playerShell,
                                children: watching && embed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                    src: embed,
                                    title: `${left} & ${right}`,
                                    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                                    allowFullScreen: true,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].player
                                }, void 0, false, {
                                    fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                    lineNumber: 328,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].poster,
                                    onClick: ()=>embed && setWatching(true),
                                    style: {
                                        backgroundImage: `url(${cover || `${ASSET}/couple-portrait.webp`})`
                                    },
                                    disabled: !embed,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].posterShade
                                        }, void 0, false, {
                                            fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                            lineNumber: 343,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].watchBtn,
                                            children: embed ? "WATCH LIVE" : "STREAM STARTING SOON"
                                        }, void 0, false, {
                                            fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                            lineNumber: 344,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                    lineNumber: 336,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                lineNumber: 326,
                                columnNumber: 13
                            }, this),
                            event?.showWatchLive !== false || event?.showSocialShare !== false ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pillRow,
                                children: [
                                    embed && event?.showWatchLive !== false ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pill,
                                        onClick: ()=>setWatching(true),
                                        children: watching ? "WATCHING LIVE" : "WATCH LIVE"
                                    }, void 0, false, {
                                        fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                        lineNumber: 353,
                                        columnNumber: 19
                                    }, this) : null,
                                    event?.showSocialShare !== false && shareUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pill,
                                        onClick: shareInvite,
                                        children: "SHARE INVITE"
                                    }, void 0, false, {
                                        fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                        lineNumber: 358,
                                        columnNumber: 19
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                lineNumber: 351,
                                columnNumber: 15
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                        lineNumber: 305,
                        columnNumber: 11
                    }, this) : null,
                    sections.showSubEvents !== false && subEvents.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section} ${__TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionAlt}`,
                        id: "events",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionLabel,
                                children: "THE FESTIVITIES"
                            }, void 0, false, {
                                fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                lineNumber: 369,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle,
                                children: "Our Events"
                            }, void 0, false, {
                                fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                lineNumber: 370,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eventList,
                                children: subEvents.map((row, index)=>{
                                    const featured = index === Math.floor(subEvents.length / 2) || subEvents.length === 1;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eventCard} ${featured ? __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eventCardFeatured : ""}`,
                                        children: [
                                            featured ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eventInner
                                            }, void 0, false, {
                                                fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                                lineNumber: 379,
                                                columnNumber: 33
                                            }, this) : null,
                                            !featured ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: `${ASSET}/corner-spray.png`,
                                                        alt: "",
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cornerSpray
                                                    }, void 0, false, {
                                                        fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                                        lineNumber: 383,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: `${ASSET}/corner-spray.png`,
                                                        alt: "",
                                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cornerSpray} ${__TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cornerSprayRight}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                                        lineNumber: 385,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                                lineNumber: 381,
                                                columnNumber: 23
                                            }, this) : null,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eventDotRing,
                                                style: {
                                                    position: "relative"
                                                },
                                                children: row.image ? // eslint-disable-next-line @next/next/no-img-element
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$lib$2f$event$2d$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["coverSrc"])(row.image),
                                                    alt: "",
                                                    style: {
                                                        width: 56,
                                                        height: 56,
                                                        borderRadius: "50%",
                                                        objectFit: "cover",
                                                        border: "2px solid #c9a227"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                                    lineNumber: 395,
                                                    columnNumber: 25
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eventDot
                                                }, void 0, false, {
                                                    fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                                    lineNumber: 407,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                                lineNumber: 392,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eventName} ${featured ? __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eventNameFeatured : ""}`,
                                                style: {
                                                    position: "relative"
                                                },
                                                children: String(row.title).toUpperCase()
                                            }, void 0, false, {
                                                fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                                lineNumber: 410,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].goldRule,
                                                style: {
                                                    position: "relative"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                                lineNumber: 416,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eventMeta,
                                                style: {
                                                    position: "relative"
                                                },
                                                children: [
                                                    row.date,
                                                    row.place
                                                ].filter(Boolean).join("  ·  ") || "Details soon"
                                            }, void 0, false, {
                                                fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                                lineNumber: 417,
                                                columnNumber: 21
                                            }, this),
                                            row.time ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eventTime} ${featured ? __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eventTimeFeatured : ""}`,
                                                style: {
                                                    position: "relative"
                                                },
                                                children: row.time
                                            }, void 0, false, {
                                                fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                                lineNumber: 421,
                                                columnNumber: 23
                                            }, this) : null
                                        ]
                                    }, `${row.title}-${index}`, true, {
                                        fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                        lineNumber: 375,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                lineNumber: 371,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                        lineNumber: 368,
                        columnNumber: 11
                    }, this) : null,
                    place ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
                        id: "venue",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionLabel,
                                children: "WHERE WE GATHER"
                            }, void 0, false, {
                                fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                lineNumber: 437,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle,
                                children: "The Venue"
                            }, void 0, false, {
                                fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                lineNumber: 438,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: `${ASSET}/gazebo-scene.png`,
                                alt: "",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].venueImg,
                                style: {
                                    marginTop: 26
                                }
                            }, void 0, false, {
                                fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                lineNumber: 440,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    textAlign: "center",
                                    marginTop: 24
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].venueName,
                                    children: place.toUpperCase()
                                }, void 0, false, {
                                    fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                    lineNumber: 442,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                lineNumber: 441,
                                columnNumber: 13
                            }, this),
                            mapsHref ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pillRow,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pill,
                                        href: mapsHref,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: "VIEW LOCATION"
                                    }, void 0, false, {
                                        fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                        lineNumber: 446,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pill,
                                        href: mapsHref,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: "GET DIRECTIONS"
                                    }, void 0, false, {
                                        fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                        lineNumber: 449,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                lineNumber: 445,
                                columnNumber: 15
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                        lineNumber: 436,
                        columnNumber: 11
                    }, this) : null,
                    sections.showGallery !== false && galleryUrls.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
                        id: "gallery",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionLabel,
                                children: "FROM THE ALBUM"
                            }, void 0, false, {
                                fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                lineNumber: 459,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle} ${__TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitleMaroon}`,
                                style: {
                                    fontSize: 44
                                },
                                children: "A Few Moments"
                            }, void 0, false, {
                                fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                lineNumber: 460,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].galleryGrid,
                                children: galleryUrls.map((src, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].galleryItem,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: src,
                                            alt: ""
                                        }, void 0, false, {
                                            fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                            lineNumber: 467,
                                            columnNumber: 19
                                        }, this)
                                    }, `${src}-${index}`, false, {
                                        fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                        lineNumber: 465,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                lineNumber: 463,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                        lineNumber: 458,
                        columnNumber: 11
                    }, this) : null,
                    (event?.remarks1 || event?.remarks2) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section} ${__TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionAlt}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionLabel,
                                children: "WITH LOVE"
                            }, void 0, false, {
                                fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                lineNumber: 476,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle,
                                children: "Hosts & Family"
                            }, void 0, false, {
                                fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                lineNumber: 477,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: `${ASSET}/divider-gold.png`,
                                alt: "",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].divider
                            }, void 0, false, {
                                fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                lineNumber: 479,
                                columnNumber: 13
                            }, this),
                            event.remarks1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quote,
                                children: event.remarks1
                            }, void 0, false, {
                                fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                lineNumber: 480,
                                columnNumber: 31
                            }, this) : null,
                            event.remarks2 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quote,
                                style: {
                                    marginTop: 18,
                                    whiteSpace: "pre-line"
                                },
                                children: event.remarks2
                            }, void 0, false, {
                                fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                lineNumber: 482,
                                columnNumber: 15
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                        lineNumber: 475,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].thankYou,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: `${ASSET}/arch-garden.png`,
                                alt: "",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].arch
                            }, void 0, false, {
                                fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                lineNumber: 491,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "relative"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].thankTitle,
                                        children: "Thank You!"
                                    }, void 0, false, {
                                        fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                        lineNumber: 493,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: `${ASSET}/divider-gold-2.png`,
                                        alt: "",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].divider,
                                        style: {
                                            width: 180
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                        lineNumber: 495,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quote,
                                        style: {
                                            fontSize: 19
                                        },
                                        children: "We can't wait to celebrate with you."
                                    }, void 0, false, {
                                        fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                        lineNumber: 496,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].thankNames,
                                        children: [
                                            left.toUpperCase(),
                                            right ? ` & ${right.toUpperCase()}` : ""
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                        lineNumber: 499,
                                        columnNumber: 13
                                    }, this),
                                    dateDots ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].thankDate,
                                        children: dateDots
                                    }, void 0, false, {
                                        fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                        lineNumber: 503,
                                        columnNumber: 25
                                    }, this) : null,
                                    branding?.companyName ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginTop: 28,
                                            fontSize: 12,
                                            letterSpacing: "0.16em",
                                            color: "rgba(108,81,63,0.55)"
                                        },
                                        children: [
                                            "Hosted by ",
                                            branding.companyName
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                        lineNumber: 505,
                                        columnNumber: 15
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                                lineNumber: 492,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                        lineNumber: 489,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                lineNumber: 219,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$SacredGardenTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footer,
                children: "SV Live · The Sacred Garden"
            }, void 0, false, {
                fileName: "[project]/themes/components/SacredGardenTheme.jsx",
                lineNumber: 513,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/themes/components/SacredGardenTheme.jsx",
        lineNumber: 172,
        columnNumber: 5
    }, this);
}
_s1(SacredGardenTheme, "1lJmzKyGOBTbv4tL4oyrmVkyCSU=", false, function() {
    return [
        useCountdown
    ];
});
_c1 = SacredGardenTheme;
var _c, _c1;
__turbopack_context__.k.register(_c, "DiamondRule");
__turbopack_context__.k.register(_c1, "SacredGardenTheme");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/themes/components/SacredGardenTheme.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "amp": "SacredGardenTheme-module__y6nFbG__amp",
  "arch": "SacredGardenTheme-module__y6nFbG__arch",
  "breathe": "SacredGardenTheme-module__y6nFbG__breathe",
  "candleShimmer": "SacredGardenTheme-module__y6nFbG__candleShimmer",
  "corner": "SacredGardenTheme-module__y6nFbG__corner",
  "cornerBL": "SacredGardenTheme-module__y6nFbG__cornerBL",
  "cornerBR": "SacredGardenTheme-module__y6nFbG__cornerBR",
  "cornerSpray": "SacredGardenTheme-module__y6nFbG__cornerSpray",
  "cornerSprayRight": "SacredGardenTheme-module__y6nFbG__cornerSprayRight",
  "cornerTL": "SacredGardenTheme-module__y6nFbG__cornerTL",
  "cornerTR": "SacredGardenTheme-module__y6nFbG__cornerTR",
  "countdownColon": "SacredGardenTheme-module__y6nFbG__countdownColon",
  "countdownGrid": "SacredGardenTheme-module__y6nFbG__countdownGrid",
  "countdownLabel": "SacredGardenTheme-module__y6nFbG__countdownLabel",
  "countdownNum": "SacredGardenTheme-module__y6nFbG__countdownNum",
  "coupleName": "SacredGardenTheme-module__y6nFbG__coupleName",
  "dateBlock": "SacredGardenTheme-module__y6nFbG__dateBlock",
  "dateDay": "SacredGardenTheme-module__y6nFbG__dateDay",
  "dateMonth": "SacredGardenTheme-module__y6nFbG__dateMonth",
  "dateRail": "SacredGardenTheme-module__y6nFbG__dateRail",
  "dateYear": "SacredGardenTheme-module__y6nFbG__dateYear",
  "diamond": "SacredGardenTheme-module__y6nFbG__diamond",
  "diamondRule": "SacredGardenTheme-module__y6nFbG__diamondRule",
  "divider": "SacredGardenTheme-module__y6nFbG__divider",
  "envelope": "SacredGardenTheme-module__y6nFbG__envelope",
  "envelopeBtn": "SacredGardenTheme-module__y6nFbG__envelopeBtn",
  "envelopeClosing": "SacredGardenTheme-module__y6nFbG__envelopeClosing",
  "envelopeGlow": "SacredGardenTheme-module__y6nFbG__envelopeGlow",
  "envelopeHidden": "SacredGardenTheme-module__y6nFbG__envelopeHidden",
  "envelopeImg": "SacredGardenTheme-module__y6nFbG__envelopeImg",
  "envelopeLabel": "SacredGardenTheme-module__y6nFbG__envelopeLabel",
  "envelopeOpenImg": "SacredGardenTheme-module__y6nFbG__envelopeOpenImg",
  "envelopeOpened": "SacredGardenTheme-module__y6nFbG__envelopeOpened",
  "envelopeTitle": "SacredGardenTheme-module__y6nFbG__envelopeTitle",
  "eventCard": "SacredGardenTheme-module__y6nFbG__eventCard",
  "eventCardFeatured": "SacredGardenTheme-module__y6nFbG__eventCardFeatured",
  "eventDot": "SacredGardenTheme-module__y6nFbG__eventDot",
  "eventDotRing": "SacredGardenTheme-module__y6nFbG__eventDotRing",
  "eventInner": "SacredGardenTheme-module__y6nFbG__eventInner",
  "eventList": "SacredGardenTheme-module__y6nFbG__eventList",
  "eventMeta": "SacredGardenTheme-module__y6nFbG__eventMeta",
  "eventName": "SacredGardenTheme-module__y6nFbG__eventName",
  "eventNameFeatured": "SacredGardenTheme-module__y6nFbG__eventNameFeatured",
  "eventTime": "SacredGardenTheme-module__y6nFbG__eventTime",
  "eventTimeFeatured": "SacredGardenTheme-module__y6nFbG__eventTimeFeatured",
  "eyebrow": "SacredGardenTheme-module__y6nFbG__eyebrow",
  "floatSoft": "SacredGardenTheme-module__y6nFbG__floatSoft",
  "footer": "SacredGardenTheme-module__y6nFbG__footer",
  "galleryGrid": "SacredGardenTheme-module__y6nFbG__galleryGrid",
  "galleryItem": "SacredGardenTheme-module__y6nFbG__galleryItem",
  "goldRule": "SacredGardenTheme-module__y6nFbG__goldRule",
  "hero": "SacredGardenTheme-module__y6nFbG__hero",
  "heroBg": "SacredGardenTheme-module__y6nFbG__heroBg",
  "heroInner": "SacredGardenTheme-module__y6nFbG__heroInner",
  "heroShade": "SacredGardenTheme-module__y6nFbG__heroShade",
  "inviteLine": "SacredGardenTheme-module__y6nFbG__inviteLine",
  "liveBadge": "SacredGardenTheme-module__y6nFbG__liveBadge",
  "liveBadgeInline": "SacredGardenTheme-module__y6nFbG__liveBadgeInline",
  "liveDot": "SacredGardenTheme-module__y6nFbG__liveDot",
  "petal": "SacredGardenTheme-module__y6nFbG__petal",
  "petalFall": "SacredGardenTheme-module__y6nFbG__petalFall",
  "petals": "SacredGardenTheme-module__y6nFbG__petals",
  "pill": "SacredGardenTheme-module__y6nFbG__pill",
  "pillRow": "SacredGardenTheme-module__y6nFbG__pillRow",
  "player": "SacredGardenTheme-module__y6nFbG__player",
  "playerShell": "SacredGardenTheme-module__y6nFbG__playerShell",
  "poster": "SacredGardenTheme-module__y6nFbG__poster",
  "posterShade": "SacredGardenTheme-module__y6nFbG__posterShade",
  "quote": "SacredGardenTheme-module__y6nFbG__quote",
  "root": "SacredGardenTheme-module__y6nFbG__root",
  "ruleLine": "SacredGardenTheme-module__y6nFbG__ruleLine",
  "ruleLineRev": "SacredGardenTheme-module__y6nFbG__ruleLineRev",
  "scriptTitle": "SacredGardenTheme-module__y6nFbG__scriptTitle",
  "section": "SacredGardenTheme-module__y6nFbG__section",
  "sectionAlt": "SacredGardenTheme-module__y6nFbG__sectionAlt",
  "sectionLabel": "SacredGardenTheme-module__y6nFbG__sectionLabel",
  "sectionTitle": "SacredGardenTheme-module__y6nFbG__sectionTitle",
  "sectionTitleMaroon": "SacredGardenTheme-module__y6nFbG__sectionTitleMaroon",
  "shell": "SacredGardenTheme-module__y6nFbG__shell",
  "tapHint": "SacredGardenTheme-module__y6nFbG__tapHint",
  "tapPulse": "SacredGardenTheme-module__y6nFbG__tapPulse",
  "thankDate": "SacredGardenTheme-module__y6nFbG__thankDate",
  "thankNames": "SacredGardenTheme-module__y6nFbG__thankNames",
  "thankTitle": "SacredGardenTheme-module__y6nFbG__thankTitle",
  "thankYou": "SacredGardenTheme-module__y6nFbG__thankYou",
  "timeLine": "SacredGardenTheme-module__y6nFbG__timeLine",
  "venueCard": "SacredGardenTheme-module__y6nFbG__venueCard",
  "venueCity": "SacredGardenTheme-module__y6nFbG__venueCity",
  "venueImg": "SacredGardenTheme-module__y6nFbG__venueImg",
  "venueName": "SacredGardenTheme-module__y6nFbG__venueName",
  "watchBtn": "SacredGardenTheme-module__y6nFbG__watchBtn",
});
}),
"[project]/themes/components/TraditionalStreamingTheme.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TraditionalStreamingTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$lib$2f$event$2d$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/themes/lib/event-helpers.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$lib$2f$share$2d$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/themes/lib/share-event.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$lib$2f$theme$2d$sections$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/themes/lib/theme-sections.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$TraditionalStreamingTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/themes/components/TraditionalStreamingTheme.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const DEFAULT_ASSET = "/themes/traditional-streaming";
const DEFAULT_TAGLINE = "ప్రత్యక్ష ప్రసారానికి స్వాగతం";
const DEFAULT_SCROLL = "స్వాగతం — ప్రత్యక్ష ప్రసారం త్వరలో ప్రారంభమవుతుంది";
function pad(n) {
    return String(n).padStart(2, "0");
}
function useCountdown(targetIso) {
    _s();
    const [now, setNow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useCountdown.useState": ()=>Date.now()
    }["useCountdown.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCountdown.useEffect": ()=>{
            if (!targetIso) return undefined;
            const id = window.setInterval({
                "useCountdown.useEffect.id": ()=>setNow(Date.now())
            }["useCountdown.useEffect.id"], 1000);
            return ({
                "useCountdown.useEffect": ()=>window.clearInterval(id)
            })["useCountdown.useEffect"];
        }
    }["useCountdown.useEffect"], [
        targetIso
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useCountdown.useMemo": ()=>{
            if (!targetIso) return null;
            const target = new Date(targetIso).getTime();
            if (Number.isNaN(target)) return null;
            const diff = target - now;
            if (diff <= 0) return {
                ended: true,
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0
            };
            return {
                ended: false,
                days: Math.floor(diff / 86400000),
                hours: Math.floor(diff % 86400000 / 3600000),
                minutes: Math.floor(diff % 3600000 / 60000),
                seconds: Math.floor(diff % 60000 / 1000)
            };
        }
    }["useCountdown.useMemo"], [
        targetIso,
        now
    ]);
}
_s(useCountdown, "Hgbq6moc33hRYqLyb8a4L2PMQ58=");
function formatTimeLabel(event) {
    if (event?.liveTiming) return event.liveTiming;
    if (event?.eventTime) return event.eventTime;
    return null;
}
function TraditionalStreamingTheme({ event, youtube, media = [], branding, theme, publicPath }) {
    _s1();
    const assetBase = theme?.config?.assetPath || DEFAULT_ASSET;
    const colors = theme?.config?.colors || {};
    const sections = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TraditionalStreamingTheme.useMemo[sections]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$lib$2f$theme$2d$sections$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveThemeSections"])(theme)
    }["TraditionalStreamingTheme.useMemo[sections]"], [
        theme
    ]);
    const [watching, setWatching] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const embed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TraditionalStreamingTheme.useMemo[embed]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$lib$2f$event$2d$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["youtubeEmbedUrl"])(youtube)
    }["TraditionalStreamingTheme.useMemo[embed]"], [
        youtube
    ]);
    const showLive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$lib$2f$theme$2d$sections$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldShowLivePlayer"])(sections, youtube, embed, event);
    const isLive = event?.status === "LIVE" || youtube?.status === "LIVE";
    const title = event?.pageTitle || event?.eventName || "Live Event";
    const fontFamily = event?.fontFamily || theme?.config?.fontFamily || "Cormorant Garamond, Georgia, serif";
    const accent = event?.fontColor || branding?.primaryColor || colors.primary || "#B8860A";
    const maroon = colors.secondary || "#7A1626";
    const cover = (0, __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$lib$2f$event$2d$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["coverSrc"])(event?.coverImage);
    const logo = branding?.logo || event?.logoImage;
    const shareUrl = ("TURBOPACK compile-time truthy", 1) ? window.location.href : "TURBOPACK unreachable";
    const gallery = media.filter((m)=>m?.fileUrl || m?.thumbnailUrl);
    const tagline = theme?.config?.defaults?.tagline || DEFAULT_TAGLINE;
    const scrollMessage = event?.scrollMessage || theme?.config?.defaults?.scrollMessage || DEFAULT_SCROLL;
    const dateInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$lib$2f$event$2d$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatEventDate"])(event?.eventDate);
    const timeLabel = formatTimeLabel(event);
    const countdownTarget = (0, __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$lib$2f$event$2d$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveCountdownTarget"])(event);
    const countdown = useCountdown(sections.showCountdown !== false ? countdownTarget : null);
    const shareImageUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TraditionalStreamingTheme.useMemo[shareImageUrl]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$lib$2f$share$2d$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEventShareImageUrl"])(event)
    }["TraditionalStreamingTheme.useMemo[shareImageUrl]"], [
        event
    ]);
    const shareText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TraditionalStreamingTheme.useMemo[shareText]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$lib$2f$share$2d$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildEventShareText"])({
                url: shareUrl,
                title,
                tagline: scrollMessage,
                placeLine: event?.location || event?.eventPlace || null
            })
    }["TraditionalStreamingTheme.useMemo[shareText]"], [
        shareUrl,
        title,
        scrollMessage,
        event?.location,
        event?.eventPlace
    ]);
    const shareInvite = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TraditionalStreamingTheme.useCallback[shareInvite]": async (e)=>{
            e?.preventDefault?.();
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$lib$2f$share$2d$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shareEventWithImage"])({
                url: shareUrl,
                text: shareText,
                imageUrl: shareImageUrl || cover,
                title,
                fileName: "live-event-share.png"
            });
        }
    }["TraditionalStreamingTheme.useCallback[shareInvite]"], [
        shareUrl,
        shareText,
        shareImageUrl,
        cover,
        title
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$TraditionalStreamingTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].root,
        style: {
            "--ts-accent": accent,
            "--ts-maroon": maroon,
            "--ts-font": fontFamily,
            "--ts-bg": colors.background || "#FBF6EC",
            "--ts-text": colors.text || "#5A4A2E"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                rel: "stylesheet",
                href: `${assetBase.replace(/\/$/, "")}/style.css`
            }, void 0, false, {
                fileName: "[project]/themes/components/TraditionalStreamingTheme.jsx",
                lineNumber: 123,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$TraditionalStreamingTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bgTexture,
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/themes/components/TraditionalStreamingTheme.jsx",
                lineNumber: 125,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$TraditionalStreamingTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bgCover,
                style: {
                    backgroundImage: `url(${cover})`
                },
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/themes/components/TraditionalStreamingTheme.jsx",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$TraditionalStreamingTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toranWrap,
                "aria-hidden": true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: `${assetBase}/assets/toran.svg`,
                    alt: "",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$TraditionalStreamingTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toran
                }, void 0, false, {
                    fileName: "[project]/themes/components/TraditionalStreamingTheme.jsx",
                    lineNumber: 130,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/themes/components/TraditionalStreamingTheme.jsx",
                lineNumber: 128,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$TraditionalStreamingTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].marquee,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$TraditionalStreamingTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].marqueeTrack,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: scrollMessage
                        }, void 0, false, {
                            fileName: "[project]/themes/components/TraditionalStreamingTheme.jsx",
                            lineNumber: 135,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: scrollMessage
                        }, void 0, false, {
                            fileName: "[project]/themes/components/TraditionalStreamingTheme.jsx",
                            lineNumber: 136,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/themes/components/TraditionalStreamingTheme.jsx",
                    lineNumber: 134,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/themes/components/TraditionalStreamingTheme.jsx",
                lineNumber: 133,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$TraditionalStreamingTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].topBar,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$TraditionalStreamingTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].brand,
                        children: [
                            logo ? // eslint-disable-next-line @next/next/no-img-element
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: logo,
                                alt: "",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$TraditionalStreamingTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logo
                            }, void 0, false, {
                                fileName: "[project]/themes/components/TraditionalStreamingTheme.jsx",
                                lineNumber: 144,
                                columnNumber: 13
                            }, this) : // eslint-disable-next-line @next/next/no-img-element
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: `${assetBase}/assets/namaste.svg`,
                                alt: "",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$TraditionalStreamingTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoIcon
                            }, void 0, false, {
                                fileName: "[project]/themes/components/TraditionalStreamingTheme.jsx",
                                lineNumber: 147,
                                columnNumber: 13
                            }, this),
                            branding?.companyName ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$TraditionalStreamingTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].host,
                                children: branding.companyName
                            }, void 0, false, {
                                fileName: "[project]/themes/components/TraditionalStreamingTheme.jsx",
                                lineNumber: 150,
                                columnNumber: 13
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/themes/components/TraditionalStreamingTheme.jsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, this),
                    isLive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$TraditionalStreamingTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].livePill,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$TraditionalStreamingTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].liveDot
                            }, void 0, false, {
                                fileName: "[project]/themes/components/TraditionalStreamingTheme.jsx",
                                lineNumber: 155,
                                columnNumber: 13
                            }, this),
                            "LIVE · ప్రత్యక్షం"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/themes/components/TraditionalStreamingTheme.jsx",
                        lineNumber: 154,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$TraditionalStreamingTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].soonPill,
                        children: "త్వరలో ప్రారంభం"
                    }, void 0, false, {
                        fileName: "[project]/themes/components/TraditionalStreamingTheme.jsx",
                        lineNumber: 159,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/themes/components/TraditionalStreamingTheme.jsx",
                lineNumber: 140,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$TraditionalStreamingTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stage,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$TraditionalStreamingTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].flourishRow,
                        "aria-hidden": true,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: `${assetBase}/assets/gold-flourish.svg`,
                                alt: "",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$TraditionalStreamingTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].flourish
                            }, void 0, false, {
                                fileName: "[project]/themes/components/TraditionalStreamingTheme.jsx",
                                lineNumber: 166,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: `${assetBase}/assets/lotus.svg`,
                                alt: "",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$TraditionalStreamingTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].lotus
                            }, void 0, false, {
                                fileName: "[project]/themes/components/TraditionalStreamingTheme.jsx",
                                lineNumber: 168,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: `${assetBase}/assets/gold-flourish.svg`,
                                alt: "",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$TraditionalStreamingTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].flourish
                            }, void 0, false, {
                                fileName: "[project]/themes/components/TraditionalStreamingTheme.jsx",
                                lineNumber: 170,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/themes/components/TraditionalStreamingTheme.jsx",
                        lineNumber: 164,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$TraditionalStreamingTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].taglineTe,
                        children: tagline
                    }, void 0, false, {
                        fileName: "[project]/themes/components/TraditionalStreamingTheme.jsx",
                        lineNumber: 173,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$TraditionalStreamingTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eyebrow,
                        children: (event?.eventType || "Live Event").toUpperCase()
                    }, void 0, false, {
                        fileName: "[project]/themes/components/TraditionalStreamingTheme.jsx",
                        lineNumber: 174,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$TraditionalStreamingTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/themes/components/TraditionalStreamingTheme.jsx",
                        lineNumber: 175,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$TraditionalStreamingTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metaRow,
                        children: [
                            dateInfo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$TraditionalStreamingTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metaChip,
                                children: [
                                    dateInfo.day,
                                    " ",
                                    dateInfo.month,
                                    " ",
                                    dateInfo.full.split(", ").pop()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/themes/components/TraditionalStreamingTheme.jsx",
                                lineNumber: 179,
                                columnNumber: 13
                            }, this) : null,
                            timeLabel ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$TraditionalStreamingTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metaChip,
                                children: timeLabel
                            }, void 0, false, {
                                fileName: "[project]/themes/components/TraditionalStreamingTheme.jsx",
                                lineNumber: 183,
                                columnNumber: 24
                            }, this) : null,
                            event?.location || event?.eventPlace ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$TraditionalStreamingTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metaChip,
                                children: event.location || event.eventPlace
                            }, void 0, false, {
                                fileName: "[project]/themes/components/TraditionalStreamingTheme.jsx",
                                lineNumber: 185,
                                columnNumber: 13
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/themes/components/TraditionalStreamingTheme.jsx",
                        lineNumber: 177,
                        columnNumber: 9
                    }, this),
                    !isLive && countdown && !countdown.ended && sections.showCountdown !== false ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$TraditionalStreamingTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].countdown,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$TraditionalStreamingTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].countdownLabel,
                                children: "ప్రసారం ప్రారంభానికి"
                            }, void 0, false, {
                                fileName: "[project]/themes/components/TraditionalStreamingTheme.jsx",
                                lineNumber: 191,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$TraditionalStreamingTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].countdownGrid,
                                children: [
                                    [
                                        "days",
                                        countdown.days
                                    ],
                                    [
                                        "hours",
                                        countdown.hours
                                    ],
                                    [
                                        "mins",
                                        countdown.minutes
                                    ],
                                    [
                                        "secs",
                                        countdown.seconds
                                    ]
                                ].map(([label, value])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$TraditionalStreamingTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].countdownUnit,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$TraditionalStreamingTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].countdownNum,
                                                children: pad(value)
                                            }, void 0, false, {
                                                fileName: "[project]/themes/components/TraditionalStreamingTheme.jsx",
                                                lineNumber: 200,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$TraditionalStreamingTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].countdownKey,
                                                children: label
                                            }, void 0, false, {
                                                fileName: "[project]/themes/components/TraditionalStreamingTheme.jsx",
                                                lineNumber: 201,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, label, true, {
                                        fileName: "[project]/themes/components/TraditionalStreamingTheme.jsx",
                                        lineNumber: 199,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/themes/components/TraditionalStreamingTheme.jsx",
                                lineNumber: 192,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/themes/components/TraditionalStreamingTheme.jsx",
                        lineNumber: 190,
                        columnNumber: 11
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$TraditionalStreamingTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].playerFrame,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$TraditionalStreamingTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].playerFrameInner,
                            children: showLive ? watching && embed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                src: embed,
                                title: title,
                                allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                                allowFullScreen: true,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$TraditionalStreamingTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].player
                            }, void 0, false, {
                                fileName: "[project]/themes/components/TraditionalStreamingTheme.jsx",
                                lineNumber: 212,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$TraditionalStreamingTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].poster,
                                onClick: ()=>setWatching(true),
                                style: {
                                    backgroundImage: `url(${event?.customImage || cover})`
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$TraditionalStreamingTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].posterShade
                                    }, void 0, false, {
                                        fileName: "[project]/themes/components/TraditionalStreamingTheme.jsx",
                                        lineNumber: 226,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$TraditionalStreamingTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].watchBtn,
                                        children: embed ? "▶ ప్రత్యక్ష ప్రసారం చూడండి" : "ప్రసారం త్వరలో ప్రారంభమవుతుంది"
                                    }, void 0, false, {
                                        fileName: "[project]/themes/components/TraditionalStreamingTheme.jsx",
                                        lineNumber: 227,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/themes/components/TraditionalStreamingTheme.jsx",
                                lineNumber: 220,
                                columnNumber: 17
                            }, this) : cover ? // eslint-disable-next-line @next/next/no-img-element
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: cover,
                                alt: "",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$TraditionalStreamingTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].coverOnly
                            }, void 0, false, {
                                fileName: "[project]/themes/components/TraditionalStreamingTheme.jsx",
                                lineNumber: 234,
                                columnNumber: 15
                            }, this) : null
                        }, void 0, false, {
                            fileName: "[project]/themes/components/TraditionalStreamingTheme.jsx",
                            lineNumber: 209,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/themes/components/TraditionalStreamingTheme.jsx",
                        lineNumber: 208,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$TraditionalStreamingTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actions,
                        children: [
                            showLive && embed && event?.showWatchLive !== false ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$TraditionalStreamingTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].primaryBtn,
                                onClick: ()=>setWatching(true),
                                children: watching ? "ప్రసారం చూస్తున్నారు" : "ప్రత్యక్ష ప్రసారం"
                            }, void 0, false, {
                                fileName: "[project]/themes/components/TraditionalStreamingTheme.jsx",
                                lineNumber: 241,
                                columnNumber: 13
                            }, this) : null,
                            event?.showSocialShare !== false && shareUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$TraditionalStreamingTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].secondaryBtn,
                                onClick: shareInvite,
                                children: "షేర్ చేయండి"
                            }, void 0, false, {
                                fileName: "[project]/themes/components/TraditionalStreamingTheme.jsx",
                                lineNumber: 246,
                                columnNumber: 13
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/themes/components/TraditionalStreamingTheme.jsx",
                        lineNumber: 239,
                        columnNumber: 9
                    }, this),
                    (event?.remarks1 || event?.remarks2 || event?.description) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$TraditionalStreamingTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].notes,
                        children: [
                            event.description ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: event.description
                            }, void 0, false, {
                                fileName: "[project]/themes/components/TraditionalStreamingTheme.jsx",
                                lineNumber: 254,
                                columnNumber: 34
                            }, this) : null,
                            event.remarks1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: event.remarks1
                            }, void 0, false, {
                                fileName: "[project]/themes/components/TraditionalStreamingTheme.jsx",
                                lineNumber: 255,
                                columnNumber: 31
                            }, this) : null,
                            event.remarks2 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: event.remarks2
                            }, void 0, false, {
                                fileName: "[project]/themes/components/TraditionalStreamingTheme.jsx",
                                lineNumber: 256,
                                columnNumber: 31
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/themes/components/TraditionalStreamingTheme.jsx",
                        lineNumber: 253,
                        columnNumber: 11
                    }, this),
                    !timeLabel && !dateInfo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$TraditionalStreamingTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].timingFallback,
                        children: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$lib$2f$event$2d$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatEventDateTime"])(event?.eventDate, event?.startTime),
                            event?.location ? ` · ${event.location}` : ""
                        ]
                    }, void 0, true, {
                        fileName: "[project]/themes/components/TraditionalStreamingTheme.jsx",
                        lineNumber: 261,
                        columnNumber: 11
                    }, this) : null,
                    sections.showGallery !== false && gallery.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$TraditionalStreamingTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].gallery,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "క్షణాలు"
                            }, void 0, false, {
                                fileName: "[project]/themes/components/TraditionalStreamingTheme.jsx",
                                lineNumber: 269,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$TraditionalStreamingTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].galleryGrid,
                                children: gallery.map((item)=>// eslint-disable-next-line @next/next/no-img-element
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: item.thumbnailUrl || item.fileUrl,
                                        alt: ""
                                    }, item.id || item.fileUrl, false, {
                                        fileName: "[project]/themes/components/TraditionalStreamingTheme.jsx",
                                        lineNumber: 273,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/themes/components/TraditionalStreamingTheme.jsx",
                                lineNumber: 270,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/themes/components/TraditionalStreamingTheme.jsx",
                        lineNumber: 268,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/themes/components/TraditionalStreamingTheme.jsx",
                lineNumber: 163,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$TraditionalStreamingTheme$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footer,
                children: [
                    "SV Live · Traditional Streaming Theme",
                    event?.location ? ` · ${event.location}` : ""
                ]
            }, void 0, true, {
                fileName: "[project]/themes/components/TraditionalStreamingTheme.jsx",
                lineNumber: 280,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/themes/components/TraditionalStreamingTheme.jsx",
        lineNumber: 113,
        columnNumber: 5
    }, this);
}
_s1(TraditionalStreamingTheme, "YDJOghY4kWS/670XhdmNYuAn+T0=", false, function() {
    return [
        useCountdown
    ];
});
_c = TraditionalStreamingTheme;
var _c;
__turbopack_context__.k.register(_c, "TraditionalStreamingTheme");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/themes/components/TraditionalStreamingTheme.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actions": "TraditionalStreamingTheme-module__vBQOmW__actions",
  "bgCover": "TraditionalStreamingTheme-module__vBQOmW__bgCover",
  "bgTexture": "TraditionalStreamingTheme-module__vBQOmW__bgTexture",
  "brand": "TraditionalStreamingTheme-module__vBQOmW__brand",
  "countdown": "TraditionalStreamingTheme-module__vBQOmW__countdown",
  "countdownGrid": "TraditionalStreamingTheme-module__vBQOmW__countdownGrid",
  "countdownKey": "TraditionalStreamingTheme-module__vBQOmW__countdownKey",
  "countdownLabel": "TraditionalStreamingTheme-module__vBQOmW__countdownLabel",
  "countdownNum": "TraditionalStreamingTheme-module__vBQOmW__countdownNum",
  "countdownUnit": "TraditionalStreamingTheme-module__vBQOmW__countdownUnit",
  "coverOnly": "TraditionalStreamingTheme-module__vBQOmW__coverOnly",
  "eyebrow": "TraditionalStreamingTheme-module__vBQOmW__eyebrow",
  "flourish": "TraditionalStreamingTheme-module__vBQOmW__flourish",
  "flourishRow": "TraditionalStreamingTheme-module__vBQOmW__flourishRow",
  "footer": "TraditionalStreamingTheme-module__vBQOmW__footer",
  "gallery": "TraditionalStreamingTheme-module__vBQOmW__gallery",
  "galleryGrid": "TraditionalStreamingTheme-module__vBQOmW__galleryGrid",
  "host": "TraditionalStreamingTheme-module__vBQOmW__host",
  "liveDot": "TraditionalStreamingTheme-module__vBQOmW__liveDot",
  "livePill": "TraditionalStreamingTheme-module__vBQOmW__livePill",
  "logo": "TraditionalStreamingTheme-module__vBQOmW__logo",
  "logoIcon": "TraditionalStreamingTheme-module__vBQOmW__logoIcon",
  "lotus": "TraditionalStreamingTheme-module__vBQOmW__lotus",
  "marquee": "TraditionalStreamingTheme-module__vBQOmW__marquee",
  "marqueeTrack": "TraditionalStreamingTheme-module__vBQOmW__marqueeTrack",
  "metaChip": "TraditionalStreamingTheme-module__vBQOmW__metaChip",
  "metaRow": "TraditionalStreamingTheme-module__vBQOmW__metaRow",
  "notes": "TraditionalStreamingTheme-module__vBQOmW__notes",
  "player": "TraditionalStreamingTheme-module__vBQOmW__player",
  "playerFrame": "TraditionalStreamingTheme-module__vBQOmW__playerFrame",
  "playerFrameInner": "TraditionalStreamingTheme-module__vBQOmW__playerFrameInner",
  "poster": "TraditionalStreamingTheme-module__vBQOmW__poster",
  "posterShade": "TraditionalStreamingTheme-module__vBQOmW__posterShade",
  "primaryBtn": "TraditionalStreamingTheme-module__vBQOmW__primaryBtn",
  "pulse": "TraditionalStreamingTheme-module__vBQOmW__pulse",
  "root": "TraditionalStreamingTheme-module__vBQOmW__root",
  "scroll": "TraditionalStreamingTheme-module__vBQOmW__scroll",
  "secondaryBtn": "TraditionalStreamingTheme-module__vBQOmW__secondaryBtn",
  "soonPill": "TraditionalStreamingTheme-module__vBQOmW__soonPill",
  "stage": "TraditionalStreamingTheme-module__vBQOmW__stage",
  "taglineTe": "TraditionalStreamingTheme-module__vBQOmW__taglineTe",
  "timingFallback": "TraditionalStreamingTheme-module__vBQOmW__timingFallback",
  "title": "TraditionalStreamingTheme-module__vBQOmW__title",
  "topBar": "TraditionalStreamingTheme-module__vBQOmW__topBar",
  "toran": "TraditionalStreamingTheme-module__vBQOmW__toran",
  "toranWrap": "TraditionalStreamingTheme-module__vBQOmW__toranWrap",
  "watchBtn": "TraditionalStreamingTheme-module__vBQOmW__watchBtn",
});
}),
"[project]/themes/components/WeddingThemeTraditional.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WeddingThemeTraditional
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$lib$2f$event$2d$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/themes/lib/event-helpers.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$lib$2f$share$2d$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/themes/lib/share-event.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$lib$2f$theme$2d$sections$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/themes/lib/theme-sections.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$WeddingThemeTraditional$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/themes/components/WeddingThemeTraditional.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const DEFAULT_ASSET = "/themes/wedding-theme-traditional";
const PETAL_SPRITES = [
    "heart.svg",
    "heart.svg",
    "heart.svg",
    "heart.svg"
];
const DEFAULT_INVITE = `${DEFAULT_ASSET}/assets/invitation.jpg`;
const DEFAULT_POSTER = `${DEFAULT_ASSET}/assets/poster.png`;
const DEFAULT_BLESSING = "With the divine blessings of Lord Shiva and Goddess Parvati, we invite you to celebrate the beginning of our beautiful journey together.";
const DEFAULT_TAGLINE = "వివాహ మహోత్సవానికి సాదర ఆహ్వానం";
function pad(n) {
    return String(n).padStart(2, "0");
}
function splitCoupleName(event) {
    if (event?.brideName || event?.groomName) {
        return {
            left: event.brideName || "Bride",
            right: event.groomName || "Groom"
        };
    }
    const raw = event?.pageTitle || event?.eventName || "Bride & Groom";
    const parts = raw.split(/\s*(?:&|and|♡|weds)\s*/i).map((s)=>s.trim()).filter(Boolean);
    if (parts.length >= 2) return {
        left: parts[0],
        right: parts[1]
    };
    return {
        left: raw,
        right: ""
    };
}
function formatDateDots(dateValue) {
    if (!dateValue) return null;
    const d = new Date(dateValue);
    if (Number.isNaN(d.getTime())) return null;
    return `${pad(d.getDate())} · ${pad(d.getMonth() + 1)} · ${d.getFullYear()}`;
}
function formatDateBullets(dateValue) {
    if (!dateValue) return null;
    const d = new Date(dateValue);
    if (Number.isNaN(d.getTime())) return null;
    return `${pad(d.getDate())} • ${pad(d.getMonth() + 1)} • ${d.getFullYear()}`;
}
function formatTimeLabel(event) {
    if (event?.eventTime) return event.eventTime;
    const t = event?.startTime ? new Date(event.startTime) : null;
    if (!t || Number.isNaN(t.getTime())) return null;
    return t.toLocaleTimeString("en-IN", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true
    });
}
function venueShortName(place) {
    if (!place) return "";
    return String(place).split(",")[0]?.trim() || place;
}
function useCountdown(targetIso) {
    _s();
    const [now, setNow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useCountdown.useState": ()=>Date.now()
    }["useCountdown.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCountdown.useEffect": ()=>{
            if (!targetIso) return undefined;
            const id = window.setInterval({
                "useCountdown.useEffect.id": ()=>setNow(Date.now())
            }["useCountdown.useEffect.id"], 1000);
            return ({
                "useCountdown.useEffect": ()=>window.clearInterval(id)
            })["useCountdown.useEffect"];
        }
    }["useCountdown.useEffect"], [
        targetIso
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useCountdown.useMemo": ()=>{
            if (!targetIso) return null;
            const target = new Date(targetIso).getTime();
            if (Number.isNaN(target)) return null;
            const diff = target - now;
            if (diff <= 0) return {
                ended: true,
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0
            };
            return {
                ended: false,
                days: Math.floor(diff / 86400000),
                hours: Math.floor(diff % 86400000 / 3600000),
                minutes: Math.floor(diff % 3600000 / 60000),
                seconds: Math.floor(diff % 60000 / 1000)
            };
        }
    }["useCountdown.useMemo"], [
        targetIso,
        now
    ]);
}
_s(useCountdown, "Hgbq6moc33hRYqLyb8a4L2PMQ58=");
function EventRow({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "event-row",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 24 24",
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "4",
                        y: "6",
                        width: "16",
                        height: "14",
                        rx: "2",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "1.7"
                    }, void 0, false, {
                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M8 4v4M16 4v4M4 11h16",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "1.7"
                    }, void 0, false, {
                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: children
            }, void 0, false, {
                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                lineNumber: 95,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
        lineNumber: 90,
        columnNumber: 5
    }, this);
}
_c = EventRow;
function TimeRow({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "event-row",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 24 24",
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "12",
                        cy: "12",
                        r: "8.2",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "1.7"
                    }, void 0, false, {
                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M12 8v4.4l2.8 1.6",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "1.7",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                lineNumber: 103,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: children
            }, void 0, false, {
                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                lineNumber: 107,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
        lineNumber: 102,
        columnNumber: 5
    }, this);
}
_c1 = TimeRow;
function PlaceRow({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "event-row",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 24 24",
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M12 21s7-6.2 7-11.2A7 7 0 0 0 5 9.8C5 14.8 12 21 12 21Z",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "1.7"
                    }, void 0, false, {
                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "12",
                        cy: "10",
                        r: "2.2",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "1.7"
                    }, void 0, false, {
                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: children
            }, void 0, false, {
                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                lineNumber: 124,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
        lineNumber: 114,
        columnNumber: 5
    }, this);
}
_c2 = PlaceRow;
function Portrait({ src, alt, mono }) {
    _s1();
    const [failed, setFailed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const showImage = src && !failed;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "frame",
        children: [
            showImage ? // eslint-disable-next-line @next/next/no-img-element
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: src,
                alt: alt,
                onError: ()=>setFailed(true)
            }, void 0, false, {
                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                lineNumber: 136,
                columnNumber: 9
            }, this) : null,
            !showImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mono",
                children: mono
            }, void 0, false, {
                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                lineNumber: 138,
                columnNumber: 21
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
        lineNumber: 133,
        columnNumber: 5
    }, this);
}
_s1(Portrait, "BFa/7w0IiJnSoWJxZHxuU4kOwF4=");
_c3 = Portrait;
function WeddingThemeTraditional({ event, youtube, media = [], branding, theme, publicPath }) {
    _s2();
    const assetBase = theme?.config?.assetPath || DEFAULT_ASSET;
    const ASSET = `${assetBase.replace(/\/$/, "")}/assets`;
    const [opened, setOpened] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [introGone, setIntroGone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [inviteOpen, setInviteOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [envelopeOpening, setEnvelopeOpening] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [lightboxIdx, setLightboxIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [lightboxOpen, setLightboxOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [watching, setWatching] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [musicPlaying, setMusicPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [musicAvailable, setMusicAvailable] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const embed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "WeddingThemeTraditional.useMemo[embed]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$lib$2f$event$2d$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["youtubeEmbedUrl"])(youtube)
    }["WeddingThemeTraditional.useMemo[embed]"], [
        youtube
    ]);
    const sections = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "WeddingThemeTraditional.useMemo[sections]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$lib$2f$theme$2d$sections$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveThemeSections"])(theme)
    }["WeddingThemeTraditional.useMemo[sections]"], [
        theme
    ]);
    const showLive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$lib$2f$theme$2d$sections$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldShowLivePlayer"])(sections, youtube, embed, event);
    const isLive = event?.status === "LIVE" || youtube?.status === "LIVE";
    const { left, right } = splitCoupleName(event);
    const title = event?.pageTitle || event?.eventName || "Wedding Celebration";
    const tagline = event?.scrollMessage || DEFAULT_TAGLINE;
    const cover = event?.coverImage ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$lib$2f$event$2d$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["coverSrc"])(event.coverImage) : null;
    const bridePhoto = event?.brideImage ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$lib$2f$event$2d$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["coverSrc"])(event.brideImage) : cover;
    const groomPhoto = event?.groomImage ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$lib$2f$event$2d$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["coverSrc"])(event.groomImage) : null;
    const place = event?.eventPlace || event?.location || "";
    const venueName = venueShortName(place);
    const eventTime = formatTimeLabel(event);
    const dateDots = formatDateDots(event?.eventDate || event?.startTime);
    const dateBullets = formatDateBullets(event?.eventDate || event?.startTime);
    const gallery = media.filter((m)=>m?.fileUrl || m?.thumbnailUrl);
    const galleryUrls = gallery.map((m)=>m.thumbnailUrl || m.fileUrl).filter(Boolean);
    const subEvents = Array.isArray(event?.subEvents) ? event.subEvents.filter((s)=>s?.title) : [];
    const showInvitationSection = sections.showInvitationCard !== false && event?.showInvitationCard !== false;
    const invitationCard = showInvitationSection ? event?.invitationCard ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$lib$2f$event$2d$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["coverSrc"])(event.invitationCard) : DEFAULT_INVITE : null;
    const countdown = useCountdown((0, __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$lib$2f$event$2d$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveCountdownTarget"])(event));
    const shareUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "WeddingThemeTraditional.useMemo[shareUrl]": ()=>{
            if ("TURBOPACK compile-time truthy", 1) return window.location.href;
            //TURBOPACK unreachable
            ;
        }
    }["WeddingThemeTraditional.useMemo[shareUrl]"], [
        publicPath
    ]);
    const phone = (branding?.phone || branding?.contactPhone || "").replace(/\s/g, "");
    const hostImage1 = event?.logoImage ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$lib$2f$event$2d$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["coverSrc"])(event.logoImage) : null;
    const hostImage2 = event?.customImage ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$lib$2f$event$2d$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["coverSrc"])(event.customImage) : null;
    const hostCopy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "WeddingThemeTraditional.useMemo[hostCopy]": ()=>{
            if (!event?.remarks1) return {
                names: null,
                place: null
            };
            const lines = String(event.remarks1).split(/\n+/).map({
                "WeddingThemeTraditional.useMemo[hostCopy].lines": (line)=>line.trim()
            }["WeddingThemeTraditional.useMemo[hostCopy].lines"]).filter(Boolean);
            if (!lines.length) return {
                names: null,
                place: null
            };
            if (lines.length === 1) return {
                names: lines[0],
                place: null
            };
            return {
                names: lines[0],
                place: lines.slice(1).join("\n")
            };
        }
    }["WeddingThemeTraditional.useMemo[hostCopy]"], [
        event?.remarks1
    ]);
    const showHosts = Boolean(hostCopy.names || hostCopy.place || hostImage1 || hostImage2);
    const familyLines = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "WeddingThemeTraditional.useMemo[familyLines]": ()=>{
            if (!event?.remarks2) return [];
            return String(event.remarks2).split(/\n+/).map({
                "WeddingThemeTraditional.useMemo[familyLines]": (line)=>line.trim()
            }["WeddingThemeTraditional.useMemo[familyLines]"]).filter(Boolean);
        }
    }["WeddingThemeTraditional.useMemo[familyLines]"], [
        event?.remarks2
    ]);
    const storySteps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "WeddingThemeTraditional.useMemo[storySteps]": ()=>{
            const defaults = [
                {
                    title: "The Beginning",
                    text: "Two hearts met, and a quiet promise took root — the start of a story written in laughter, patience, and love.",
                    glyph: "♥"
                },
                {
                    title: "A Beautiful Bond",
                    text: "Through seasons of becoming, we chose each other again and again — family, faith, and a future we could see together.",
                    glyph: "⚭"
                },
                {
                    title: "Forever Begins",
                    text: "Now we begin our journey as one, and we would be honoured to have your blessings on this sacred day.",
                    glyph: "∞"
                }
            ];
            if (!event?.description) return defaults;
            return [
                {
                    ...defaults[0],
                    text: event.description
                },
                defaults[1],
                defaults[2]
            ];
        }
    }["WeddingThemeTraditional.useMemo[storySteps]"], [
        event?.description
    ]);
    const mapsUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "WeddingThemeTraditional.useMemo[mapsUrl]": ()=>{
            const q = place || venueName;
            return q ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}` : "#";
        }
    }["WeddingThemeTraditional.useMemo[mapsUrl]"], [
        place,
        venueName
    ]);
    const calendarUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "WeddingThemeTraditional.useMemo[calendarUrl]": ()=>{
            const startRaw = event?.startTime || event?.eventDate;
            if (!startRaw) return "#";
            const start = new Date(startRaw);
            if (Number.isNaN(start.getTime())) return "#";
            const end = new Date(start.getTime() + 4 * 60 * 60 * 1000);
            const fmt = {
                "WeddingThemeTraditional.useMemo[calendarUrl].fmt": (d)=>`${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}T${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}00Z`
            }["WeddingThemeTraditional.useMemo[calendarUrl].fmt"];
            const text = `${left}${right ? ` & ${right}` : ""} Wedding`;
            return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(text)}&dates=${fmt(start)}/${fmt(end)}&location=${encodeURIComponent(place)}`;
        }
    }["WeddingThemeTraditional.useMemo[calendarUrl]"], [
        event?.startTime,
        event?.eventDate,
        left,
        right,
        place
    ]);
    const shareImageUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "WeddingThemeTraditional.useMemo[shareImageUrl]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$lib$2f$share$2d$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEventShareImageUrl"])(event, DEFAULT_POSTER)
    }["WeddingThemeTraditional.useMemo[shareImageUrl]"], [
        event
    ]);
    const shareText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "WeddingThemeTraditional.useMemo[shareText]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$lib$2f$share$2d$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildEventShareText"])({
                url: shareUrl,
                title,
                coupleLine: right ? `${left} ❤️ ${right}` : left,
                tagline,
                dateLine: dateDots,
                timeLine: eventTime,
                placeLine: place
            })
    }["WeddingThemeTraditional.useMemo[shareText]"], [
        shareUrl,
        title,
        left,
        right,
        tagline,
        dateDots,
        eventTime,
        place
    ]);
    const shareInvite = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "WeddingThemeTraditional.useCallback[shareInvite]": async (e)=>{
            e?.preventDefault?.();
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$lib$2f$share$2d$event$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shareEventWithImage"])({
                url: shareUrl,
                text: shareText,
                imageUrl: shareImageUrl,
                title,
                fileName: "wedding-invite.png"
            });
        }
    }["WeddingThemeTraditional.useCallback[shareInvite]"], [
        shareUrl,
        shareText,
        shareImageUrl,
        title
    ]);
    const spawnPetals = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "WeddingThemeTraditional.useCallback[spawnPetals]": ()=>{
            const layer = document.getElementById("wtt-petals");
            if (!layer) return;
            layer.innerHTML = "";
            for(let i = 0; i < 12; i++){
                const img = document.createElement("img");
                img.src = `${ASSET}/${PETAL_SPRITES[i % PETAL_SPRITES.length]}`;
                img.alt = "";
                img.className = "petal";
                img.style.left = `${(i * 9 + 3) % 96}%`;
                img.style.width = `${26 + i % 3 * 10}px`;
                img.style.setProperty("--drift", `${(i % 2 === 0 ? 1 : -1) * (20 + i * 7 % 40)}px`);
                img.style.animationDuration = `${14 + i % 4 * 3}s`;
                img.style.animationDelay = `${i * 1.6}s`;
                layer.appendChild(img);
            }
        }
    }["WeddingThemeTraditional.useCallback[spawnPetals]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WeddingThemeTraditional.useEffect": ()=>{
            if (opened) spawnPetals();
        }
    }["WeddingThemeTraditional.useEffect"], [
        opened,
        spawnPetals
    ]);
    const openSite = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "WeddingThemeTraditional.useCallback[openSite]": ()=>{
            setIntroGone(true);
            setOpened(true);
            window.setTimeout({
                "WeddingThemeTraditional.useCallback[openSite]": ()=>{
                    const intro = document.getElementById("wtt-intro");
                    if (intro) intro.hidden = true;
                }
            }["WeddingThemeTraditional.useCallback[openSite]"], 700);
            window.setTimeout({
                "WeddingThemeTraditional.useCallback[openSite]": ()=>spawnPetals()
            }["WeddingThemeTraditional.useCallback[openSite]"], 80);
            const audio = document.getElementById("wtt-bgm");
            if (audio) {
                audio.play().then({
                    "WeddingThemeTraditional.useCallback[openSite]": ()=>setMusicPlaying(true)
                }["WeddingThemeTraditional.useCallback[openSite]"]).catch({
                    "WeddingThemeTraditional.useCallback[openSite]": ()=>{}
                }["WeddingThemeTraditional.useCallback[openSite]"]);
            }
        }
    }["WeddingThemeTraditional.useCallback[openSite]"], [
        spawnPetals
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WeddingThemeTraditional.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) document.title = title;
        }
    }["WeddingThemeTraditional.useEffect"], [
        title
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WeddingThemeTraditional.useEffect": ()=>{
            function onKey(e) {
                if (e.key === "Escape") {
                    setInviteOpen(false);
                    setLightboxOpen(false);
                }
            }
            document.addEventListener("keydown", onKey);
            return ({
                "WeddingThemeTraditional.useEffect": ()=>document.removeEventListener("keydown", onKey)
            })["WeddingThemeTraditional.useEffect"];
        }
    }["WeddingThemeTraditional.useEffect"], []);
    function openInvite() {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setInviteOpen(true);
            return;
        }
        setEnvelopeOpening(true);
        window.setTimeout(()=>setInviteOpen(true), 450);
        window.setTimeout(()=>setEnvelopeOpening(false), 900);
    }
    function toggleMusic() {
        const audio = document.getElementById("wtt-bgm");
        if (!audio || !musicAvailable) return;
        if (audio.paused) {
            audio.play().then(()=>setMusicPlaying(true)).catch(()=>{});
        } else {
            audio.pause();
            setMusicPlaying(false);
        }
    }
    function renderSubEventCard(item, index) {
        const isSingle = subEvents.length === 1;
        const isFirst = !isSingle && index === 0;
        const isHighlight = isSingle || index === subEvents.length - 1;
        const cardClass = isFirst ? "pellikuthuru" : isHighlight ? "highlight" : "plain";
        const customImage = item.image ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$lib$2f$event$2d$helpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["coverSrc"])(item.image) : null;
        // Always render a frame so absolutely-positioned card body has height (3rd+ cards were invisible).
        const frameSrc = isFirst ? `${ASSET}/bride-event.png` : `${ASSET}/event-frame.png`;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
            className: `event-card ${cardClass}`.trim(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    className: "event-frame",
                    src: frameSrc,
                    alt: ""
                }, void 0, false, {
                    fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                    lineNumber: 378,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "event-card-body",
                    children: [
                        customImage ? // eslint-disable-next-line @next/next/no-img-element
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            className: "sub-event-photo",
                            src: customImage,
                            alt: item.title
                        }, void 0, false, {
                            fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                            lineNumber: 382,
                            columnNumber: 13
                        }, this) : isHighlight && !isFirst ? // eslint-disable-next-line @next/next/no-img-element
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            className: "wedding-icon",
                            src: `${ASSET}/wedding-icon.png`,
                            alt: ""
                        }, void 0, false, {
                            fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                            lineNumber: 385,
                            columnNumber: 13
                        }, this) : null,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            children: item.title
                        }, void 0, false, {
                            fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                            lineNumber: 387,
                            columnNumber: 11
                        }, this),
                        item.date ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EventRow, {
                            children: item.date
                        }, void 0, false, {
                            fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                            lineNumber: 388,
                            columnNumber: 24
                        }, this) : null,
                        item.time ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TimeRow, {
                            children: item.time
                        }, void 0, false, {
                            fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                            lineNumber: 389,
                            columnNumber: 24
                        }, this) : null,
                        item.place ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlaceRow, {
                            children: item.place
                        }, void 0, false, {
                            fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                            lineNumber: 390,
                            columnNumber: 25
                        }, this) : null
                    ]
                }, void 0, true, {
                    fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                    lineNumber: 379,
                    columnNumber: 9
                }, this)
            ]
        }, `${item.title}-${index}`, true, {
            fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
            lineNumber: 376,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,500&family=Peddana&family=Playfair+Display:wght@500;600;700&family=Ramabhadra&family=Poppins:wght@300;400;500;600&family=Great+Vibes&display=swap"
            }, void 0, false, {
                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                lineNumber: 398,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                rel: "stylesheet",
                href: `${assetBase.replace(/\/$/, "")}/style.css`
            }, void 0, false, {
                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                lineNumber: 402,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "svg-filters",
                "aria-hidden": "true",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                    id: "knockout-black",
                    colorInterpolationFilters: "sRGB",
                    x: "-5%",
                    y: "-5%",
                    width: "110%",
                    height: "110%",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feColorMatrix", {
                        type: "matrix",
                        values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  5 5 5 0 -0.18"
                    }, void 0, false, {
                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                        lineNumber: 406,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                    lineNumber: 405,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                lineNumber: 404,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$WeddingThemeTraditional$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].root,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "skip",
                        href: "#hero",
                        children: "Skip to invitation"
                    }, void 0, false, {
                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                        lineNumber: 411,
                        columnNumber: 9
                    }, this),
                    !introGone ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `intro ${introGone ? "is-gone" : ""}`,
                        id: "wtt-intro",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "intro-stage",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    className: "intro-bg",
                                    src: `${ASSET}/LANDING-BG.png`,
                                    alt: ""
                                }, void 0, false, {
                                    fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                    lineNumber: 419,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "intro-inner",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "intro-ganesha-wrap",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                className: "intro-ganesha",
                                                src: `${ASSET}/ganesh.png`,
                                                alt: "Lord Ganesha"
                                            }, void 0, false, {
                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                lineNumber: 423,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                            lineNumber: 421,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "intro-shubh",
                                            children: "శుభమస్తు"
                                        }, void 0, false, {
                                            fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                            lineNumber: 425,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "intro-sub",
                                            children: "|| శుభకార్యమస్తు ||"
                                        }, void 0, false, {
                                            fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                            lineNumber: 426,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "intro-title",
                                            children: title
                                        }, void 0, false, {
                                            fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                            lineNumber: 427,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "intro-flourish",
                                            "aria-hidden": "true",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                                    fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                    lineNumber: 429,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                                    fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                    lineNumber: 430,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                                    fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                    lineNumber: 431,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                            lineNumber: 428,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "intro-names",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "script-name",
                                                    children: left
                                                }, void 0, false, {
                                                    fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                    lineNumber: 434,
                                                    columnNumber: 19
                                                }, this),
                                                right ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "heart-outline",
                                                            viewBox: "0 0 24 24",
                                                            "aria-hidden": "true",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M12 20s-7.2-4.4-9.4-8.2C.8 8.8 2.2 5 6 5c2.1 0 3.4 1.2 4 2.2C10.6 6.2 11.9 5 14 5c3.8 0 5.2 3.8 3.4 6.8C19.2 15.6 12 20 12 20Z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                                lineNumber: 438,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                            lineNumber: 437,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "script-name",
                                                            children: right
                                                        }, void 0, false, {
                                                            fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                            lineNumber: 440,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                    lineNumber: 436,
                                                    columnNumber: 21
                                                }, this) : null
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                            lineNumber: 433,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "intro-invite",
                                            children: tagline
                                        }, void 0, false, {
                                            fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                            lineNumber: 444,
                                            columnNumber: 17
                                        }, this),
                                        dateDots ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "intro-date",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "gold-flower",
                                                    viewBox: "0 0 24 24",
                                                    "aria-hidden": "true",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M12 3.2c.6 2.4 1.4 4.2 3.8 5-2.4.8-3.2 2.6-3.8 5-.6-2.4-1.4-4.2-3.8-5 2.4-.8 3.2-2.6 3.8-5Z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                        lineNumber: 448,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                    lineNumber: 447,
                                                    columnNumber: 21
                                                }, this),
                                                dateDots,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "gold-flower",
                                                    viewBox: "0 0 24 24",
                                                    "aria-hidden": "true",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M12 3.2c.6 2.4 1.4 4.2 3.8 5-2.4.8-3.2 2.6-3.8 5-.6-2.4-1.4-4.2-3.8-5 2.4-.8 3.2-2.6 3.8-5Z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                        lineNumber: 452,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                    lineNumber: 451,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                            lineNumber: 446,
                                            columnNumber: 19
                                        }, this) : null,
                                        (eventTime || place) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "intro-meta",
                                            children: [
                                                eventTime ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            viewBox: "0 0 24 24",
                                                            "aria-hidden": "true",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                    cx: "12",
                                                                    cy: "12",
                                                                    r: "8.2",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "1.7"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                                    lineNumber: 461,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M12 8v4.4l2.8 1.6",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "1.7",
                                                                    strokeLinecap: "round"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                                    lineNumber: 462,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                            lineNumber: 460,
                                                            columnNumber: 25
                                                        }, this),
                                                        eventTime
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                    lineNumber: 459,
                                                    columnNumber: 23
                                                }, this) : null,
                                                eventTime && place ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                                    fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                    lineNumber: 467,
                                                    columnNumber: 43
                                                }, this) : null,
                                                place ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            viewBox: "0 0 24 24",
                                                            "aria-hidden": "true",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M12 21s7-6.2 7-11.2A7 7 0 0 0 5 9.8C5 14.8 12 21 12 21Z",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "1.7"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                                    lineNumber: 471,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                    cx: "12",
                                                                    cy: "10",
                                                                    r: "2.2",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "1.7"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                                    lineNumber: 472,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                            lineNumber: 470,
                                                            columnNumber: 25
                                                        }, this),
                                                        venueName.toUpperCase()
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                    lineNumber: 469,
                                                    columnNumber: 23
                                                }, this) : null
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                            lineNumber: 457,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "intro-cta",
                                            type: "button",
                                            onClick: openSite,
                                            children: "VIEW INVITATION →"
                                        }, void 0, false, {
                                            fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                            lineNumber: 479,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                    lineNumber: 420,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                            lineNumber: 417,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                        lineNumber: 416,
                        columnNumber: 11
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `page ${opened ? "is-open" : ""}`,
                        id: "page",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "petals",
                                id: "wtt-petals",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                lineNumber: 488,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                                className: "hero",
                                id: "hero",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "garlands",
                                        "aria-hidden": "true",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "garland g-a"
                                            }, void 0, false, {
                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                lineNumber: 492,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "garland g-b"
                                            }, void 0, false, {
                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                lineNumber: 493,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "garland g-c"
                                            }, void 0, false, {
                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                lineNumber: 494,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                        lineNumber: 491,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        className: "hero-deity",
                                        src: `${ASSET}/shiva-parvati.png`,
                                        alt: "Lord Shiva and Goddess Parvati"
                                    }, void 0, false, {
                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                        lineNumber: 497,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hero-blessing",
                                        children: "॥ శుభమస్తు ॥"
                                    }, void 0, false, {
                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                        lineNumber: 498,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hero-blessing small",
                                        children: "॥ సకల శుభమస్తు ॥"
                                    }, void 0, false, {
                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                        lineNumber: 499,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hero-names",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "script-name",
                                                children: left
                                            }, void 0, false, {
                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                lineNumber: 501,
                                                columnNumber: 15
                                            }, this),
                                            right ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "heart",
                                                        children: "♡"
                                                    }, void 0, false, {
                                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                        lineNumber: 504,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "script-name",
                                                        children: right
                                                    }, void 0, false, {
                                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                        lineNumber: 505,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                lineNumber: 503,
                                                columnNumber: 17
                                            }, this) : null
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                        lineNumber: 500,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "te-line",
                                        children: tagline
                                    }, void 0, false, {
                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                        lineNumber: 509,
                                        columnNumber: 13
                                    }, this),
                                    sections.showCouplePhotos !== false ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "couple",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "portrait",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Portrait, {
                                                        src: bridePhoto,
                                                        alt: left,
                                                        mono: (left || "B").slice(0, 1)
                                                    }, void 0, false, {
                                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                        lineNumber: 513,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flowers",
                                                        "aria-hidden": "true",
                                                        children: "🌸🌼🌸"
                                                    }, void 0, false, {
                                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                        lineNumber: 514,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                lineNumber: 512,
                                                columnNumber: 17
                                            }, this),
                                            right ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "portrait",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Portrait, {
                                                        src: groomPhoto,
                                                        alt: right,
                                                        mono: right.slice(0, 1)
                                                    }, void 0, false, {
                                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                        lineNumber: 520,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flowers",
                                                        "aria-hidden": "true",
                                                        children: "🌸🌼🌸"
                                                    }, void 0, false, {
                                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                        lineNumber: 521,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                lineNumber: 519,
                                                columnNumber: 19
                                            }, this) : null
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                        lineNumber: 511,
                                        columnNumber: 15
                                    }, this) : null,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "meta-list",
                                        children: [
                                            dateDots ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "meta-row",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        viewBox: "0 0 24 24",
                                                        "aria-hidden": "true",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                x: "4",
                                                                y: "6",
                                                                width: "16",
                                                                height: "14",
                                                                rx: "2",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                strokeWidth: "1.8"
                                                            }, void 0, false, {
                                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                                lineNumber: 532,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M8 4v4M16 4v4M4 11h16",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                strokeWidth: "1.8"
                                                            }, void 0, false, {
                                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                                lineNumber: 533,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                        lineNumber: 531,
                                                        columnNumber: 19
                                                    }, this),
                                                    dateDots
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                lineNumber: 530,
                                                columnNumber: 17
                                            }, this) : null,
                                            eventTime ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "meta-row",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        viewBox: "0 0 24 24",
                                                        "aria-hidden": "true",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                cx: "12",
                                                                cy: "12",
                                                                r: "8.2",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                strokeWidth: "1.8"
                                                            }, void 0, false, {
                                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                                lineNumber: 541,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M12 8v4.4l2.8 1.6",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                strokeWidth: "1.8",
                                                                strokeLinecap: "round"
                                                            }, void 0, false, {
                                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                                lineNumber: 542,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                        lineNumber: 540,
                                                        columnNumber: 19
                                                    }, this),
                                                    eventTime
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                lineNumber: 539,
                                                columnNumber: 17
                                            }, this) : null,
                                            place ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "meta-row venue-name",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        viewBox: "0 0 24 24",
                                                        "aria-hidden": "true",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M12 21s7-6.2 7-11.2A7 7 0 0 0 5 9.8C5 14.8 12 21 12 21Z",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                strokeWidth: "1.8"
                                                            }, void 0, false, {
                                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                                lineNumber: 550,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                cx: "12",
                                                                cy: "10",
                                                                r: "2.2",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                strokeWidth: "1.8"
                                                            }, void 0, false, {
                                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                                lineNumber: 551,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                        lineNumber: 549,
                                                        columnNumber: 19
                                                    }, this),
                                                    venueName
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                lineNumber: 548,
                                                columnNumber: 17
                                            }, this) : null
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                        lineNumber: 528,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ornament",
                                        children: "✦ 🪷 ✦"
                                    }, void 0, false, {
                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                        lineNumber: 557,
                                        columnNumber: 13
                                    }, this),
                                    showLive && isLive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$WeddingThemeTraditional$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].liveBadge,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                lineNumber: 560,
                                                columnNumber: 17
                                            }, this),
                                            " LIVE NOW"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                        lineNumber: 559,
                                        columnNumber: 15
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                lineNumber: 490,
                                columnNumber: 11
                            }, this),
                            sections.showCountdown !== false && countdown ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "section countdown",
                                id: "countdown",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        className: "countdown-bg",
                                        src: `${ASSET}/entirepg bg.png`,
                                        alt: ""
                                    }, void 0, false, {
                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                        lineNumber: 568,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "countdown-inner",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "ornament",
                                                children: "✦ 🪷 ✦"
                                            }, void 0, false, {
                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                lineNumber: 570,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "te-title",
                                                children: "❦ వివాహానికి మిగిలిన సమయం ❦"
                                            }, void 0, false, {
                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                lineNumber: 571,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rule"
                                            }, void 0, false, {
                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                lineNumber: 572,
                                                columnNumber: 17
                                            }, this),
                                            countdown.ended ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "ended",
                                                children: "శుభమస్తు ❤️"
                                            }, void 0, false, {
                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                lineNumber: 574,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "count-row",
                                                id: "count-active",
                                                children: [
                                                    [
                                                        "DAYS",
                                                        countdown.days
                                                    ],
                                                    [
                                                        "HOURS",
                                                        countdown.hours
                                                    ],
                                                    [
                                                        "MINUTES",
                                                        countdown.minutes
                                                    ],
                                                    [
                                                        "SECONDS",
                                                        countdown.seconds
                                                    ]
                                                ].map(([label, value])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "count-box",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: "🪷"
                                                            }, void 0, false, {
                                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                                lineNumber: 584,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: pad(value)
                                                            }, void 0, false, {
                                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                                lineNumber: 585,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                children: label
                                                            }, void 0, false, {
                                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                                lineNumber: 586,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, label, true, {
                                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                        lineNumber: 583,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                lineNumber: 576,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "heart-rule",
                                                "aria-hidden": "true",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                        lineNumber: 592,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "♥"
                                                    }, void 0, false, {
                                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                        lineNumber: 593,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                        lineNumber: 594,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                lineNumber: 591,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                        lineNumber: 569,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                lineNumber: 566,
                                columnNumber: 13
                            }, this) : null,
                            showLive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: `section ${__TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$WeddingThemeTraditional$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].liveSection}`,
                                id: "live",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        className: "blessing-bg",
                                        src: `${ASSET}/entirepg bg.png`,
                                        alt: ""
                                    }, void 0, false, {
                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                        lineNumber: 603,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "blessing-inner",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "ornament",
                                                children: "🪷"
                                            }, void 0, false, {
                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                lineNumber: 605,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "te-title",
                                                children: "❖ Live Streaming ❖"
                                            }, void 0, false, {
                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                lineNumber: 606,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rule"
                                            }, void 0, false, {
                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                lineNumber: 607,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$WeddingThemeTraditional$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].playerShell,
                                                children: watching && embed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                                    src: embed,
                                                    title: title,
                                                    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                                                    allowFullScreen: true,
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$WeddingThemeTraditional$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].player
                                                }, void 0, false, {
                                                    fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                    lineNumber: 610,
                                                    columnNumber: 21
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$WeddingThemeTraditional$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].poster,
                                                    style: {
                                                        backgroundImage: `url(${cover || DEFAULT_POSTER})`
                                                    },
                                                    role: embed ? "button" : "img",
                                                    tabIndex: embed ? 0 : undefined,
                                                    onClick: ()=>embed && setWatching(true),
                                                    onKeyDown: (e)=>{
                                                        if (embed && (e.key === "Enter" || e.key === " ")) {
                                                            e.preventDefault();
                                                            setWatching(true);
                                                        }
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$WeddingThemeTraditional$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].posterShade
                                                        }, void 0, false, {
                                                            fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                            lineNumber: 631,
                                                            columnNumber: 23
                                                        }, this),
                                                        embed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$WeddingThemeTraditional$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].streamStatus,
                                                            onClick: ()=>setWatching(true),
                                                            children: "Watch Live"
                                                        }, void 0, false, {
                                                            fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                            lineNumber: 633,
                                                            columnNumber: 25
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$WeddingThemeTraditional$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].streamStatusMuted,
                                                            children: "Stream starting soon"
                                                        }, void 0, false, {
                                                            fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                            lineNumber: 637,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                    lineNumber: 618,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                lineNumber: 608,
                                                columnNumber: 17
                                            }, this),
                                            embed && event?.showWatchLive !== false ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$WeddingThemeTraditional$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].centerActions,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        className: "intro-cta",
                                                        onClick: ()=>setWatching(true),
                                                        children: watching ? "Watching live" : "Watch Live"
                                                    }, void 0, false, {
                                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                        lineNumber: 644,
                                                        columnNumber: 21
                                                    }, this),
                                                    event?.showSocialShare !== false && shareUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$WeddingThemeTraditional$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].shareBtn,
                                                        onClick: shareInvite,
                                                        children: "Share on WhatsApp"
                                                    }, void 0, false, {
                                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                        lineNumber: 648,
                                                        columnNumber: 23
                                                    }, this) : null
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                lineNumber: 643,
                                                columnNumber: 19
                                            }, this) : event?.showSocialShare !== false && shareUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$WeddingThemeTraditional$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].centerActions,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$WeddingThemeTraditional$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].shareBtn,
                                                    onClick: shareInvite,
                                                    children: "Share on WhatsApp"
                                                }, void 0, false, {
                                                    fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                    lineNumber: 655,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                lineNumber: 654,
                                                columnNumber: 19
                                            }, this) : null
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                        lineNumber: 604,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                lineNumber: 601,
                                columnNumber: 13
                            }, this) : null,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "section blessing",
                                id: "blessing",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        className: "blessing-bg",
                                        src: `${ASSET}/entirepg bg.png`,
                                        alt: ""
                                    }, void 0, false, {
                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                        lineNumber: 666,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "blessing-inner",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                className: "blessing-ganesha",
                                                src: `${ASSET}/ganesh.png`,
                                                alt: "Lord Ganesha"
                                            }, void 0, false, {
                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                lineNumber: 669,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "en-title",
                                                children: "Divine Blessings"
                                            }, void 0, false, {
                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                lineNumber: 670,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rule"
                                            }, void 0, false, {
                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                lineNumber: 671,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: event?.description || DEFAULT_BLESSING
                                            }, void 0, false, {
                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                lineNumber: 672,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                        lineNumber: 667,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                lineNumber: 664,
                                columnNumber: 11
                            }, this),
                            sections.showSubEvents !== false && event?.showSubEvents !== false && subEvents.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "section events",
                                id: "events",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        className: "events-bg",
                                        src: `${ASSET}/entirepg bg.png`,
                                        alt: ""
                                    }, void 0, false, {
                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                        lineNumber: 679,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "events-inner",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "events-kicker",
                                                "aria-hidden": "true",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                        lineNumber: 682,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "🪷"
                                                    }, void 0, false, {
                                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                        lineNumber: 683,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                        lineNumber: 684,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                lineNumber: 681,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "events-heading",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        className: "flourish",
                                                        src: `${ASSET}/gold-flourish.svg`,
                                                        alt: ""
                                                    }, void 0, false, {
                                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                        lineNumber: 688,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        children: "కార్యక్రమములు"
                                                    }, void 0, false, {
                                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                        lineNumber: 689,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        className: "flourish flip",
                                                        src: `${ASSET}/gold-flourish.svg`,
                                                        alt: ""
                                                    }, void 0, false, {
                                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                        lineNumber: 691,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                lineNumber: 686,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "event-grid",
                                                children: subEvents.map(renderSubEventCard)
                                            }, void 0, false, {
                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                lineNumber: 693,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "event-rail",
                                                "aria-hidden": "true",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "dot"
                                                    }, void 0, false, {
                                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                        lineNumber: 695,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "dot dark"
                                                    }, void 0, false, {
                                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                        lineNumber: 696,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                lineNumber: 694,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "event-foot",
                                                "aria-hidden": "true",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                        lineNumber: 699,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: `${ASSET}/gold-flourish.svg`,
                                                        alt: ""
                                                    }, void 0, false, {
                                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                        lineNumber: 701,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                        lineNumber: 702,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                lineNumber: 698,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                        lineNumber: 680,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                lineNumber: 677,
                                columnNumber: 13
                            }, this) : null,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "section story",
                                id: "story",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        className: "story-bg",
                                        src: `${ASSET}/entirepg bg.png`,
                                        alt: ""
                                    }, void 0, false, {
                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                        lineNumber: 710,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "story-inner",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "en-title",
                                                children: "❦ Our Journey ❦"
                                            }, void 0, false, {
                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                lineNumber: 712,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rule"
                                            }, void 0, false, {
                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                lineNumber: 713,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "timeline",
                                                children: storySteps.map((step, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "step",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "rail",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "glyph",
                                                                        children: step.glyph
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                                        lineNumber: 718,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    index < storySteps.length - 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "rail-line"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                                        lineNumber: 719,
                                                                        columnNumber: 56
                                                                    }, this) : null
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                                lineNumber: 717,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "step-body",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        children: step.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                                        lineNumber: 722,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "rule",
                                                                        style: {
                                                                            margin: "0 0 10px",
                                                                            marginLeft: 0
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                                        lineNumber: 723,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        children: step.text
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                                        lineNumber: 724,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                                lineNumber: 721,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, step.title, true, {
                                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                        lineNumber: 716,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                lineNumber: 714,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                        lineNumber: 711,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                lineNumber: 708,
                                columnNumber: 11
                            }, this),
                            showInvitationSection && invitationCard ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "section invite",
                                id: "invitation",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        className: "invite-bg",
                                        src: `${ASSET}/entirepg bg.png`,
                                        alt: ""
                                    }, void 0, false, {
                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                        lineNumber: 735,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "invite-inner",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "te-title",
                                                children: "మా వివాహ ఆహ్వానం"
                                            }, void 0, false, {
                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                lineNumber: 737,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: `envelope ${envelopeOpening ? "is-opening" : ""}`,
                                                type: "button",
                                                "aria-label": "Open wedding invitation",
                                                onClick: openInvite,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        className: "envelope-art",
                                                        src: `${ASSET}/envelope-full.png`,
                                                        alt: ""
                                                    }, void 0, false, {
                                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                        lineNumber: 745,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        className: "envelope-card",
                                                        src: invitationCard,
                                                        alt: "Wedding invitation"
                                                    }, void 0, false, {
                                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                        lineNumber: 747,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                lineNumber: 738,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "invite-hint",
                                                children: inviteOpen ? "OPEN INVITATION" : "TAP TO OPEN INVITATION"
                                            }, void 0, false, {
                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                lineNumber: 749,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                        lineNumber: 736,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                lineNumber: 733,
                                columnNumber: 13
                            }, this) : null,
                            sections.showGallery !== false && galleryUrls.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "section gallery",
                                id: "gallery",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "en-title",
                                        style: {
                                            fontFamily: "'Peddana', serif"
                                        },
                                        children: "Moments"
                                    }, void 0, false, {
                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                        lineNumber: 756,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rule"
                                    }, void 0, false, {
                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                        lineNumber: 759,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "g-grid",
                                        children: galleryUrls.map((src, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: `g-item${idx % 3 === 0 ? " tall" : ""}`,
                                                onClick: ()=>{
                                                    setLightboxIdx(idx);
                                                    setLightboxOpen(true);
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: src,
                                                    alt: "Wedding moment",
                                                    loading: "lazy"
                                                }, void 0, false, {
                                                    fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                    lineNumber: 772,
                                                    columnNumber: 21
                                                }, this)
                                            }, `${src}-${idx}`, false, {
                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                lineNumber: 762,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                        lineNumber: 760,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                lineNumber: 755,
                                columnNumber: 13
                            }, this) : null,
                            place ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "section venue",
                                id: "venue",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "venue-deco",
                                        "aria-hidden": "true",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                className: "vine vine-tl",
                                                src: `${ASSET}/venue-vine.svg`,
                                                alt: ""
                                            }, void 0, false, {
                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                lineNumber: 783,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                className: "vine vine-br",
                                                src: `${ASSET}/venue-vine.svg`,
                                                alt: ""
                                            }, void 0, false, {
                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                lineNumber: 785,
                                                columnNumber: 17
                                            }, this),
                                            [
                                                1,
                                                2,
                                                3,
                                                4,
                                                5
                                            ].map((n)=>// eslint-disable-next-line @next/next/no-img-element
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    className: `rose-petal rp${n}`,
                                                    src: `${ASSET}/heart.svg`,
                                                    alt: ""
                                                }, n, false, {
                                                    fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                    lineNumber: 788,
                                                    columnNumber: 19
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                        lineNumber: 781,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "venue-head",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                className: "flourish",
                                                src: `${ASSET}/gold-flourish.svg`,
                                                alt: ""
                                            }, void 0, false, {
                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                lineNumber: 793,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                children: "వేదిక"
                                            }, void 0, false, {
                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                lineNumber: 794,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                className: "flourish flip",
                                                src: `${ASSET}/gold-flourish.svg`,
                                                alt: ""
                                            }, void 0, false, {
                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                lineNumber: 796,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                        lineNumber: 791,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "venue-divider",
                                        "aria-hidden": "true",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                lineNumber: 799,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                lineNumber: 800,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                lineNumber: 801,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                        lineNumber: 798,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "venue-card",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                className: "filigree fg-tl",
                                                src: `${ASSET}/card-corner.svg`,
                                                alt: ""
                                            }, void 0, false, {
                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                lineNumber: 805,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                className: "filigree fg-tr",
                                                src: `${ASSET}/card-corner.svg`,
                                                alt: ""
                                            }, void 0, false, {
                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                lineNumber: 807,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                className: "filigree fg-bl",
                                                src: `${ASSET}/card-corner.svg`,
                                                alt: ""
                                            }, void 0, false, {
                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                lineNumber: 809,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                className: "filigree fg-br",
                                                src: `${ASSET}/card-corner.svg`,
                                                alt: ""
                                            }, void 0, false, {
                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                lineNumber: 811,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                children: venueName
                                            }, void 0, false, {
                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                lineNumber: 812,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "venue-line",
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                lineNumber: 813,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "pin",
                                                        viewBox: "0 0 24 24",
                                                        "aria-hidden": "true",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            fill: "#c45c58",
                                                            d: "M12 2c-3.9 0-7 3-7 7 0 5.3 7 13 7 13s7-7.7 7-13c0-4-3.1-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                            lineNumber: 816,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                        lineNumber: 815,
                                                        columnNumber: 19
                                                    }, this),
                                                    place
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                lineNumber: 814,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                className: "directions-btn",
                                                href: mapsUrl,
                                                target: "_blank",
                                                rel: "noreferrer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        viewBox: "0 0 24 24",
                                                        "aria-hidden": "true",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            fill: "currentColor",
                                                            d: "M12 2c-3.9 0-7 3-7 7 0 5.3 7 13 7 13s7-7.7 7-13c0-4-3.1-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                            lineNumber: 822,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                        lineNumber: 821,
                                                        columnNumber: 19
                                                    }, this),
                                                    "GET DIRECTIONS"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                lineNumber: 820,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                        lineNumber: 803,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        className: "cal-link",
                                        href: calendarUrl,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: "Add to Google Calendar"
                                    }, void 0, false, {
                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                        lineNumber: 827,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                lineNumber: 780,
                                columnNumber: 13
                            }, this) : null,
                            showHosts ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "section hosts",
                                id: "hosts",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "family-deco",
                                        "aria-hidden": "true",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                className: "vine vine-tl",
                                                src: `${ASSET}/venue-vine.svg`,
                                                alt: ""
                                            }, void 0, false, {
                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                lineNumber: 837,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                className: "vine vine-br",
                                                src: `${ASSET}/venue-vine.svg`,
                                                alt: ""
                                            }, void 0, false, {
                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                lineNumber: 839,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                className: "rose-petal rp1",
                                                src: `${ASSET}/heart.svg`,
                                                alt: ""
                                            }, void 0, false, {
                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                lineNumber: 841,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                className: "rose-petal rp3",
                                                src: `${ASSET}/heart.svg`,
                                                alt: ""
                                            }, void 0, false, {
                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                lineNumber: 843,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                className: "rose-petal rp4",
                                                src: `${ASSET}/heart.svg`,
                                                alt: ""
                                            }, void 0, false, {
                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                lineNumber: 845,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                        lineNumber: 835,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                        className: "hosts-card",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                className: "hosts-petal",
                                                src: `${ASSET}/heart.svg`,
                                                alt: ""
                                            }, void 0, false, {
                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                lineNumber: 849,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                className: "filigree fg-tl",
                                                src: `${ASSET}/card-corner.svg`,
                                                alt: ""
                                            }, void 0, false, {
                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                lineNumber: 851,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                className: "filigree fg-tr",
                                                src: `${ASSET}/card-corner.svg`,
                                                alt: ""
                                            }, void 0, false, {
                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                lineNumber: 853,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                className: "filigree fg-bl",
                                                src: `${ASSET}/card-corner.svg`,
                                                alt: ""
                                            }, void 0, false, {
                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                lineNumber: 855,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                className: "filigree fg-br",
                                                src: `${ASSET}/card-corner.svg`,
                                                alt: ""
                                            }, void 0, false, {
                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                lineNumber: 857,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                children: "మీ ఆగమనాభిలాషులు"
                                            }, void 0, false, {
                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                lineNumber: 858,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "family-rule",
                                                "aria-hidden": "true",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                        lineNumber: 860,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                        lineNumber: 861,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                        lineNumber: 862,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                lineNumber: 859,
                                                columnNumber: 17
                                            }, this),
                                            (hostImage1 || hostImage2) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "hosts-pair",
                                                children: [
                                                    hostImage1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "hosts-frame",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: hostImage1,
                                                            alt: "Host"
                                                        }, void 0, false, {
                                                            fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                            lineNumber: 869,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                        lineNumber: 867,
                                                        columnNumber: 23
                                                    }, this) : null,
                                                    hostImage2 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "hosts-frame",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: hostImage2,
                                                            alt: "Host"
                                                        }, void 0, false, {
                                                            fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                            lineNumber: 875,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                        lineNumber: 873,
                                                        columnNumber: 23
                                                    }, this) : null
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                lineNumber: 865,
                                                columnNumber: 19
                                            }, this),
                                            hostCopy.names ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "hosts-names",
                                                children: hostCopy.names
                                            }, void 0, false, {
                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                lineNumber: 880,
                                                columnNumber: 35
                                            }, this) : null,
                                            hostCopy.place ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "hosts-place",
                                                children: hostCopy.place
                                            }, void 0, false, {
                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                lineNumber: 881,
                                                columnNumber: 35
                                            }, this) : null
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                        lineNumber: 847,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                lineNumber: 834,
                                columnNumber: 13
                            }, this) : null,
                            familyLines.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "section members",
                                id: "members",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "family-deco",
                                        "aria-hidden": "true",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                className: "vine vine-tl",
                                                src: `${ASSET}/venue-vine.svg`,
                                                alt: ""
                                            }, void 0, false, {
                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                lineNumber: 890,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                className: "vine vine-br",
                                                src: `${ASSET}/venue-vine.svg`,
                                                alt: ""
                                            }, void 0, false, {
                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                lineNumber: 892,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                className: "rose-petal rp2",
                                                src: `${ASSET}/heart.svg`,
                                                alt: ""
                                            }, void 0, false, {
                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                lineNumber: 894,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                className: "rose-petal rp4",
                                                src: `${ASSET}/heart.svg`,
                                                alt: ""
                                            }, void 0, false, {
                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                lineNumber: 896,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                        lineNumber: 888,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                        className: "members-card",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                className: "filigree fg-tl",
                                                src: `${ASSET}/card-corner.svg`,
                                                alt: ""
                                            }, void 0, false, {
                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                lineNumber: 900,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                className: "filigree fg-tr",
                                                src: `${ASSET}/card-corner.svg`,
                                                alt: ""
                                            }, void 0, false, {
                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                lineNumber: 902,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                className: "filigree fg-bl",
                                                src: `${ASSET}/card-corner.svg`,
                                                alt: ""
                                            }, void 0, false, {
                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                lineNumber: 904,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                className: "filigree fg-br",
                                                src: `${ASSET}/card-corner.svg`,
                                                alt: ""
                                            }, void 0, false, {
                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                lineNumber: 906,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                children: "Family members"
                                            }, void 0, false, {
                                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                lineNumber: 907,
                                                columnNumber: 17
                                            }, this),
                                            familyLines.map((line)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "family-rule",
                                                            "aria-hidden": "true",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                                                    fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                                    lineNumber: 911,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                                                    fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                                    lineNumber: 912,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                                                    fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                                    lineNumber: 913,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                            lineNumber: 910,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: line
                                                        }, void 0, false, {
                                                            fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                            lineNumber: 915,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, line, true, {
                                                    fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                                    lineNumber: 909,
                                                    columnNumber: 19
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                        lineNumber: 898,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                lineNumber: 887,
                                columnNumber: 13
                            }, this) : null,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                                className: "final",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "script-name",
                                        children: [
                                            left,
                                            right ? ` ♡ ${right}` : ""
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                        lineNumber: 923,
                                        columnNumber: 13
                                    }, this),
                                    dateBullets ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "final-date",
                                        children: dateBullets
                                    }, void 0, false, {
                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                        lineNumber: 927,
                                        columnNumber: 28
                                    }, this) : null,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "final-love",
                                        children: "With love, blessings & happiness"
                                    }, void 0, false, {
                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                        lineNumber: 928,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "final-om",
                                        children: "॥ శుభమస్తు ॥"
                                    }, void 0, false, {
                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                        lineNumber: 929,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                lineNumber: 922,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "float-left",
                                children: musicAvailable ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "fab",
                                    type: "button",
                                    "aria-label": "Toggle music",
                                    onClick: toggleMusic,
                                    children: musicPlaying ? "❚❚" : "♪"
                                }, void 0, false, {
                                    fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                    lineNumber: 934,
                                    columnNumber: 15
                                }, this) : null
                            }, void 0, false, {
                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                lineNumber: 932,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "float-right",
                                children: [
                                    phone ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        className: "fab icon-fab",
                                        href: `tel:${phone}`,
                                        "aria-label": "Call",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: `${ASSET}/icon-call.png`,
                                            alt: ""
                                        }, void 0, false, {
                                            fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                            lineNumber: 943,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                        lineNumber: 941,
                                        columnNumber: 15
                                    }, this) : null,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "fab icon-fab wa",
                                        "aria-label": "Share on WhatsApp",
                                        onClick: shareInvite,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: `${ASSET}/icon-whatsapp.png`,
                                            alt: ""
                                        }, void 0, false, {
                                            fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                            lineNumber: 953,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                        lineNumber: 946,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                lineNumber: 939,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
                                id: "wtt-bgm",
                                src: `${ASSET}/music.mp3`,
                                loop: true,
                                onError: ()=>setMusicAvailable(false)
                            }, void 0, false, {
                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                lineNumber: 957,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                        lineNumber: 487,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `modal ${inviteOpen ? "is-open" : ""}`,
                        id: "invite-modal",
                        role: "dialog",
                        "aria-modal": "true",
                        "aria-label": "Wedding invitation",
                        onClick: (e)=>{
                            if (e.target.id === "invite-modal") setInviteOpen(false);
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "modal-x",
                                type: "button",
                                "aria-label": "Close",
                                onClick: ()=>setInviteOpen(false),
                                children: "✕"
                            }, void 0, false, {
                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                lineNumber: 970,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: "invite-sheet",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: invitationCard,
                                    alt: "Wedding invitation"
                                }, void 0, false, {
                                    fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                    lineNumber: 975,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                lineNumber: 973,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                        lineNumber: 960,
                        columnNumber: 9
                    }, this),
                    galleryUrls.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `modal ${lightboxOpen ? "is-open" : ""}`,
                        id: "lightbox",
                        role: "dialog",
                        "aria-modal": "true",
                        "aria-label": "Photo",
                        onClick: (e)=>{
                            if (e.target.id === "lightbox") setLightboxOpen(false);
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "modal-x",
                                type: "button",
                                "aria-label": "Close",
                                onClick: ()=>setLightboxOpen(false),
                                children: "✕"
                            }, void 0, false, {
                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                lineNumber: 990,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "lb-nav prev",
                                type: "button",
                                "aria-label": "Previous",
                                onClick: ()=>setLightboxIdx((i)=>(i - 1 + galleryUrls.length) % galleryUrls.length),
                                children: "‹"
                            }, void 0, false, {
                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                lineNumber: 993,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                id: "lightbox-img",
                                src: galleryUrls[lightboxIdx],
                                alt: "Wedding moment"
                            }, void 0, false, {
                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                lineNumber: 1002,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "lb-nav next",
                                type: "button",
                                "aria-label": "Next",
                                onClick: ()=>setLightboxIdx((i)=>(i + 1) % galleryUrls.length),
                                children: "›"
                            }, void 0, false, {
                                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                                lineNumber: 1003,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                        lineNumber: 980,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
                lineNumber: 410,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/themes/components/WeddingThemeTraditional.jsx",
        lineNumber: 397,
        columnNumber: 5
    }, this);
}
_s2(WeddingThemeTraditional, "CJaA6+zjN7x5sUNqX2WaPw+3xyU=", false, function() {
    return [
        useCountdown
    ];
});
_c4 = WeddingThemeTraditional;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "EventRow");
__turbopack_context__.k.register(_c1, "TimeRow");
__turbopack_context__.k.register(_c2, "PlaceRow");
__turbopack_context__.k.register(_c3, "Portrait");
__turbopack_context__.k.register(_c4, "WeddingThemeTraditional");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/themes/components/WeddingThemeTraditional.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "centerActions": "WeddingThemeTraditional-module__g5xksG__centerActions",
  "footer": "WeddingThemeTraditional-module__g5xksG__footer",
  "liveBadge": "WeddingThemeTraditional-module__g5xksG__liveBadge",
  "liveSection": "WeddingThemeTraditional-module__g5xksG__liveSection",
  "player": "WeddingThemeTraditional-module__g5xksG__player",
  "playerShell": "WeddingThemeTraditional-module__g5xksG__playerShell",
  "poster": "WeddingThemeTraditional-module__g5xksG__poster",
  "posterShade": "WeddingThemeTraditional-module__g5xksG__posterShade",
  "pulse": "WeddingThemeTraditional-module__g5xksG__pulse",
  "root": "WeddingThemeTraditional-module__g5xksG__root",
  "scrollMsg": "WeddingThemeTraditional-module__g5xksG__scrollMsg",
  "shareBtn": "WeddingThemeTraditional-module__g5xksG__shareBtn",
  "streamCountdown": "WeddingThemeTraditional-module__g5xksG__streamCountdown",
  "streamCountdownBox": "WeddingThemeTraditional-module__g5xksG__streamCountdownBox",
  "streamCountdownLabel": "WeddingThemeTraditional-module__g5xksG__streamCountdownLabel",
  "streamCountdownRow": "WeddingThemeTraditional-module__g5xksG__streamCountdownRow",
  "streamStatus": "WeddingThemeTraditional-module__g5xksG__streamStatus",
  "streamStatusMuted": "WeddingThemeTraditional-module__g5xksG__streamStatusMuted",
});
}),
"[project]/themes/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$components$2f$EventThemeRenderer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/themes/components/EventThemeRenderer.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$themes$2f$lib$2f$theme$2d$sections$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/themes/lib/theme-sections.ts [app-client] (ecmascript)");
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/themes/lib/event-helpers.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "asEventList",
    ()=>asEventList,
    "cacheUnlockedEvent",
    ()=>cacheUnlockedEvent,
    "coverSrc",
    ()=>coverSrc,
    "formatEventDate",
    ()=>formatEventDate,
    "formatEventDateTime",
    ()=>formatEventDateTime,
    "parseTimeToHms",
    ()=>parseTimeToHms,
    "planFeatureList",
    ()=>planFeatureList,
    "readUnlockedEvent",
    ()=>readUnlockedEvent,
    "resolveCountdownTarget",
    ()=>resolveCountdownTarget,
    "toDateOnly",
    ()=>toDateOnly,
    "youtubeEmbedUrl",
    ()=>youtubeEmbedUrl
]);
const FALLBACK_COVER = "/uploads/Portfolio.png";
function asEventList(data) {
    if (Array.isArray(data)) return data;
    if (data && typeof data === "object") {
        const obj = data;
        if (Array.isArray(obj.items)) return obj.items;
        if (Array.isArray(obj.events)) return obj.events;
    }
    return [];
}
function coverSrc(url) {
    if (!url || typeof url !== "string") return FALLBACK_COVER;
    return url;
}
function toDateOnly(value) {
    if (value == null || value === "") return null;
    if (typeof value === "string") {
        const m = value.trim().match(/^(\d{4}-\d{2}-\d{2})/);
        if (m) return m[1];
    }
    const d = value instanceof Date ? value : new Date(value);
    if (Number.isNaN(d.getTime())) return null;
    const y = d.getFullYear();
    const mo = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${mo}-${day}`;
}
function parseTimeToHms(timeRaw) {
    const m = timeRaw.trim().match(/^(\d{1,2}):(\d{2})(?::(\d{2}))?(?:\s*([AaPp][Mm]))?/);
    if (!m) return null;
    let h = Number(m[1]);
    const min = Number(m[2]);
    const sec = m[3] != null ? Number(m[3]) : 0;
    const ampm = m[4]?.toUpperCase();
    if (ampm === "PM" && h < 12) h += 12;
    if (ampm === "AM" && h === 12) h = 0;
    if (Number.isNaN(h) || Number.isNaN(min) || h > 23 || min > 59 || sec > 59) return null;
    return `${String(h).padStart(2, "0")}:${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
}
function resolveCountdownTarget(event) {
    if (!event) return null;
    const datePart = toDateOnly(event.eventDate);
    const timeRaw = typeof event.eventTime === "string" ? event.eventTime.trim() : "";
    if (datePart && timeRaw) {
        const timePart = parseTimeToHms(timeRaw);
        if (timePart) return `${datePart}T${timePart}`;
    }
    if (datePart && !timeRaw) {
        // Prefer startTime's clock if we only have a date field.
        if (event.startTime) {
            const st = new Date(event.startTime);
            if (!Number.isNaN(st.getTime())) {
                const h = String(st.getHours()).padStart(2, "0");
                const min = String(st.getMinutes()).padStart(2, "0");
                const sec = String(st.getSeconds()).padStart(2, "0");
                return `${datePart}T${h}:${min}:${sec}`;
            }
        }
        return `${datePart}T00:00:00`;
    }
    if (event.startTime) {
        const st = new Date(event.startTime);
        if (!Number.isNaN(st.getTime())) return st.toISOString();
    }
    return null;
}
function formatEventDate(value) {
    if (typeof value !== "string" && typeof value !== "number" && !(value instanceof Date)) {
        return null;
    }
    const d = new Date(value);
    if (Number.isNaN(d.getTime())) return null;
    return {
        day: String(d.getDate()).padStart(2, "0"),
        month: d.toLocaleString("en-US", {
            month: "short"
        }).toUpperCase(),
        full: d.toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
            year: "numeric"
        })
    };
}
function formatEventDateTime(dateValue, timeValue) {
    const datePart = formatEventDate(dateValue)?.full;
    if (!timeValue) return datePart || "Date TBA";
    if (typeof timeValue !== "string" && typeof timeValue !== "number" && !(timeValue instanceof Date)) {
        return datePart || "Date TBA";
    }
    const t = new Date(timeValue);
    if (Number.isNaN(t.getTime())) return datePart || "Date TBA";
    const time = t.toLocaleTimeString("en-IN", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true
    });
    return datePart ? `${datePart} · ${time}` : time;
}
function youtubeEmbedUrl(youtube) {
    if (!youtube) return null;
    const params = "autoplay=1&rel=0&modestbranding=1&playsinline=1";
    const id = youtube.videoId || extractIdFromUrl(youtube.liveUrl);
    if (id) return `https://www.youtube.com/embed/${id}?${params}`;
    return null;
}
function extractIdFromUrl(liveUrl) {
    if (!liveUrl || typeof liveUrl !== "string") return null;
    try {
        const u = new URL(liveUrl);
        const v = u.searchParams.get("v");
        if (v) return v;
        const parts = u.pathname.split("/").filter(Boolean);
        const liveIdx = parts.indexOf("live");
        if (liveIdx >= 0 && parts[liveIdx + 1]) return parts[liveIdx + 1];
        if (parts[0] === "embed" && parts[1]) return parts[1];
        if (parts[0] === "shorts" && parts[1]) return parts[1];
        if (u.hostname.includes("youtu.be") && parts[0]) return parts[0];
    } catch  {
    /* ignore */ }
    return null;
}
function cacheUnlockedEvent(slug, payload) {
    if (("TURBOPACK compile-time value", "object") === "undefined" || !slug || !payload) return;
    try {
        sessionStorage.setItem(`sv_unlocked_${slug}`, JSON.stringify(payload));
    } catch  {
    /* ignore quota */ }
}
function readUnlockedEvent(slug) {
    if (("TURBOPACK compile-time value", "object") === "undefined" || !slug) return null;
    try {
        const raw = sessionStorage.getItem(`sv_unlocked_${slug}`);
        return raw ? JSON.parse(raw) : null;
    } catch  {
        return null;
    }
}
function planFeatureList(plan) {
    const features = plan?.features;
    if (Array.isArray(features)) return features.map(String);
    if (features && typeof features === "object") {
        return Object.entries(features).map(([key, value])=>{
            if (typeof value === "boolean") return value ? key : null;
            return `${key}: ${value}`;
        }).filter(Boolean);
    }
    const extras = [];
    if (plan?.eventLimit != null) {
        extras.push(plan.eventLimit < 0 ? "Unlimited events" : `${plan.eventLimit} events`);
    }
    if (plan?.hoursLimit != null) {
        extras.push(plan.hoursLimit < 0 ? "Unlimited hours" : `${plan.hoursLimit} hours`);
    }
    if (plan?.viewerLimit != null) {
        extras.push(plan.viewerLimit < 0 ? "Unlimited viewers" : `${plan.viewerLimit} viewers`);
    }
    if (plan?.storageGb != null) extras.push(`${plan.storageGb} GB storage`);
    return extras;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/themes/lib/share-event.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Resolve a fetchable absolute URL for share image assets. */ __turbopack_context__.s([
    "absoluteShareImageUrl",
    ()=>absoluteShareImageUrl,
    "buildEventShareText",
    ()=>buildEventShareText,
    "resolveEventShareImageUrl",
    ()=>resolveEventShareImageUrl,
    "shareEventWithImage",
    ()=>shareEventWithImage
]);
function absoluteShareImageUrl(url) {
    if (!url || typeof url !== "string") return null;
    if (/^(https?:|data:|blob:)/i.test(url)) return url;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return new URL(url, window.location.origin).href;
}
function resolveEventShareImageUrl(event, fallbackUrl = null) {
    const candidate = event?.whatsappImage || event?.coverImage || event?.invitationCard || event?.customImage || fallbackUrl;
    return absoluteShareImageUrl(candidate);
}
function buildEventShareText({ url, title, coupleLine, tagline, dateLine, timeLine, placeLine }) {
    const lines = [
        url,
        "",
        coupleLine ? `🌸 ${coupleLine} 🌸` : null,
        "",
        tagline || title || "You're invited to celebrate with us!",
        dateLine ? `📅 ${dateLine}` : null,
        timeLine ? `⏰ ${timeLine}` : null,
        placeLine || null,
        "",
        `💍 View invitation:\n${url}`
    ].filter(Boolean);
    return lines.join("\n");
}
async function shareEventWithImage({ url, text, imageUrl, title, fileName = "event-invite.png" }) {
    const message = text || url;
    const openWhatsApp = ()=>{
        window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    };
    const absoluteImage = absoluteShareImageUrl(imageUrl);
    if (absoluteImage) {
        try {
            const res = await fetch(absoluteImage);
            if (res.ok) {
                const blob = await res.blob();
                const type = blob.type && blob.type.startsWith("image/") ? blob.type : "image/png";
                const file = new File([
                    blob
                ], fileName, {
                    type
                });
                if (navigator.canShare?.({
                    files: [
                        file
                    ]
                })) {
                    await navigator.share({
                        files: [
                            file
                        ],
                        text: message,
                        title: title || undefined
                    });
                    return;
                }
            }
        } catch (err) {
            if (err instanceof Error && err.name === "AbortError") return;
        }
    }
    if (typeof navigator.share === "function") {
        try {
            await navigator.share({
                text: message,
                url,
                title: title || undefined
            });
            return;
        } catch (err) {
            if (err instanceof Error && err.name === "AbortError") return;
        }
    }
    openWhatsApp();
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/themes/lib/theme-sections.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Section toggles come from theme.config (registered in admin). No local template registry. */ __turbopack_context__.s([
    "resolveThemeSections",
    ()=>resolveThemeSections,
    "shouldShowLivePlayer",
    ()=>shouldShowLivePlayer
]);
function resolveThemeSections(theme) {
    const sections = theme?.config?.sections ?? {};
    return {
        showCountdown: sections.showCountdown !== false,
        showGallery: sections.showGallery !== false,
        showSubEvents: sections.showSubEvents !== false,
        showLivePlayer: sections.showLivePlayer !== false,
        showInvitationCard: sections.showInvitationCard !== false,
        showCouplePhotos: sections.showCouplePhotos !== false
    };
}
function shouldShowLivePlayer(sections, youtube, embed, event) {
    if (sections.showLivePlayer === false) return false;
    if (event?.showWatchLive !== false) return true;
    return Boolean(embed || youtube?.liveUrl || youtube?.videoId);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_1c2-ltq._.js.map