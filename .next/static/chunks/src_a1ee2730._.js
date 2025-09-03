(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/lib/supabaseClient.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "supabase": (()=>supabase)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/module/index.js [app-client] (ecmascript) <locals>");
;
const supabaseUrl = 'https://rygyqxalcvxrekpfkqga.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ5Z3lxeGFsY3Z4cmVrcGZrcWdhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA0MzM5NjcsImV4cCI6MjA2NjAwOTk2N30.lo2ydzPjibp2nl3W_hnhQNP4od_jprdw4RDVHyXKDJ0';
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/actions/data:88fecf [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"4049cbb9dc8df1d9a266aac6f7b38db8b9e1de766e":"getCertificatesByStudent"},"src/app/actions/certificateActions.ts",""] */ __turbopack_context__.s({
    "getCertificatesByStudent": (()=>getCertificatesByStudent)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var getCertificatesByStudent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("4049cbb9dc8df1d9a266aac6f7b38db8b9e1de766e", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getCertificatesByStudent"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vY2VydGlmaWNhdGVBY3Rpb25zLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc2VydmVyJztcclxuXHJcbmltcG9ydCB7IHN1cGFiYXNlIH0gZnJvbSAnQC9saWIvc3VwYWJhc2VDbGllbnQnO1xyXG5cclxuLy8g8J+TjCBSZWN1cGVyYSB0dXR0aSBpIGNlcnRpZmljYXRpIGVtZXNzaSBkYSB1biBkYXRvIGVudGVcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENlcnRpZmljYXRlc0J5RW50aXR5KGVudGl0eUlkOiBzdHJpbmcpIHtcclxuICBpZiAoIWVudGl0eUlkKSB0aHJvdyBuZXcgRXJyb3IoJ0lEIGVudGUgbWFuY2FudGUnKTtcclxuXHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKCdjZXJ0aWZpY2F0ZXMnKVxyXG4gICAgLnNlbGVjdChgXHJcbiAgICAgIGlkLFxyXG4gICAgICB0aXRsZSxcclxuICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgIGlzc3VlZF9kYXRlLFxyXG4gICAgICBibG9ja2NoYWluX3R4LFxyXG4gICAgICB1c2VyczpzdHVkZW50X2lkIChcclxuICAgICAgICBlbWFpbCxcclxuICAgICAgICBub21lLFxyXG4gICAgICAgIGNvZ25vbWVcclxuICAgICAgKVxyXG4gICAgYClcclxuICAgIC5lcSgnZW50aXR5X2lkJywgZW50aXR5SWQpXHJcbiAgICAub3JkZXIoJ2lzc3VlZF9kYXRlJywgeyBhc2NlbmRpbmc6IGZhbHNlIH0pO1xyXG5cclxuICBpZiAoZXJyb3IpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGNlcnRpZmljYXRlcyA9IGRhdGEubWFwKChjZXJ0KSA9PiB7XHJcbiAgICBjb25zdCBzdHVkZW50ID0gQXJyYXkuaXNBcnJheShjZXJ0LnVzZXJzKSA/IGNlcnQudXNlcnNbMF0gOiBjZXJ0LnVzZXJzO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGlkOiBjZXJ0LmlkLFxyXG4gICAgICB0aXRsZTogY2VydC50aXRsZSxcclxuICAgICAgZGVzY3JpcHRpb246IGNlcnQuZGVzY3JpcHRpb24sXHJcbiAgICAgIGlzc3VlZF9kYXRlOiBjZXJ0Lmlzc3VlZF9kYXRlLFxyXG4gICAgICBibG9ja2NoYWluX3R4OiBjZXJ0LmJsb2NrY2hhaW5fdHgsXHJcbiAgICAgIHN0dWRlbnRfZW1haWw6IHN0dWRlbnQ/LmVtYWlsID8/ICdOL0EnLFxyXG4gICAgICBzdHVkZW50X25hbWU6IHN0dWRlbnQgPyBgJHtzdHVkZW50Lm5vbWV9ICR7c3R1ZGVudC5jb2dub21lfWAgOiAnTi9BJyxcclxuICAgIH07XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBjZXJ0aWZpY2F0ZXM7XHJcbn1cclxuXHJcbi8vIPCfk4wgUmVjdXBlcmEgdHV0dGkgaSBjZXJ0aWZpY2F0aSBkaSB1bm8gc3R1ZGVudGVcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENlcnRpZmljYXRlc0J5U3R1ZGVudChzdHVkZW50RW1haWw6IHN0cmluZykge1xyXG4gIGlmICghc3R1ZGVudEVtYWlsKSB0aHJvdyBuZXcgRXJyb3IoJ0VtYWlsIHN0dWRlbnRlIG1hbmNhbnRlJyk7XHJcblxyXG4gIC8vIFRyb3ZhIGlkIHN0dWRlbnRlIGRhbGxhIHN1YSBlbWFpbFxyXG4gIGNvbnN0IHsgZGF0YTogc3R1ZGVudCwgZXJyb3I6IHVzZXJFcnIgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbSgndXNlcnMnKVxyXG4gICAgLnNlbGVjdCgnaWQnKVxyXG4gICAgLmVxKCdlbWFpbCcsIHN0dWRlbnRFbWFpbClcclxuICAgIC5zaW5nbGUoKTtcclxuXHJcbiAgaWYgKHVzZXJFcnIgfHwgIXN0dWRlbnQpIHRocm93IG5ldyBFcnJvcignU3R1ZGVudGUgbm9uIHRyb3ZhdG8nKTtcclxuXHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKCdjZXJ0aWZpY2F0ZXMnKVxyXG4gICAgLnNlbGVjdChgXHJcbiAgICAgIGlkLFxyXG4gICAgICB0aXRsZSxcclxuICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgIGlzc3VlZF9kYXRlLFxyXG4gICAgICBibG9ja2NoYWluX3R4LFxyXG4gICAgICB1c2VyczplbnRpdHlfaWQgKFxyXG4gICAgICAgIGVtYWlsLFxyXG4gICAgICAgIG5vbWUsXHJcbiAgICAgICAgY29nbm9tZVxyXG4gICAgICApXHJcbiAgICBgKVxyXG4gICAgLmVxKCdzdHVkZW50X2lkJywgc3R1ZGVudC5pZClcclxuICAgIC5vcmRlcignaXNzdWVkX2RhdGUnLCB7IGFzY2VuZGluZzogZmFsc2UgfSk7XHJcblxyXG4gIGlmIChlcnJvcikge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY2VydGlmaWNhdGVzID0gZGF0YS5tYXAoKGNlcnQpID0+IHtcclxuICAgIGNvbnN0IGVudGl0eSA9IEFycmF5LmlzQXJyYXkoY2VydC51c2VycykgPyBjZXJ0LnVzZXJzWzBdIDogY2VydC51c2VycztcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpZDogY2VydC5pZCxcclxuICAgICAgdGl0bGU6IGNlcnQudGl0bGUsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBjZXJ0LmRlc2NyaXB0aW9uLFxyXG4gICAgICBpc3N1ZWRfZGF0ZTogY2VydC5pc3N1ZWRfZGF0ZSxcclxuICAgICAgYmxvY2tjaGFpbl90eDogY2VydC5ibG9ja2NoYWluX3R4LFxyXG4gICAgICBlbnRpdHlfZW1haWw6IGVudGl0eT8uZW1haWwgPz8gJ04vQScsXHJcbiAgICAgIGVudGl0eV9uYW1lOiBlbnRpdHkgPyBgJHtlbnRpdHkubm9tZX0gJHtlbnRpdHkuY29nbm9tZX1gIDogJ04vQScsXHJcbiAgICB9O1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gY2VydGlmaWNhdGVzO1xyXG59XHJcblxyXG4vLyDwn5OMIEVsaW1pbmEgdW4gY2VydGlmaWNhdG8gc29sbyBzZSBhcHBhcnRpZW5lIGFsbCdlbnRlIGNvcnJldHRvXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVDZXJ0aWZpY2F0ZShpZDogc3RyaW5nLCBlbnRpdHlJZDogc3RyaW5nKSB7XHJcbiAgaWYgKCFpZCB8fCAhZW50aXR5SWQpIHRocm93IG5ldyBFcnJvcignSUQgY2VydGlmaWNhdG8gbyBlbnRlIG1hbmNhbnRlJyk7XHJcblxyXG4gIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbSgnY2VydGlmaWNhdGVzJylcclxuICAgIC5kZWxldGUoKVxyXG4gICAgLmVxKCdpZCcsIGlkKVxyXG4gICAgLmVxKCdlbnRpdHlfaWQnLCBlbnRpdHlJZCk7IC8vIHNpY3VyZXp6YTogbCdlbnRlIHB1w7IgY2FuY2VsbGFyZSBzb2xvIGkgcHJvcHJpIGNlcnRpZmljYXRpXHJcblxyXG4gIGlmIChlcnJvcikge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6InVUQStDc0IifQ==
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/dashboard-student/components/StudentCertificateList.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>StudentCertificateList)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$88fecf__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:88fecf [app-client] (ecmascript) <text/javascript>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function StudentCertificateList({ studentEmail }) {
    _s();
    const [certificates, setCertificates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StudentCertificateList.useEffect": ()=>{
            const fetchCertificates = {
                "StudentCertificateList.useEffect.fetchCertificates": async ()=>{
                    try {
                        const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$88fecf__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getCertificatesByStudent"])(studentEmail);
                        setCertificates(data);
                    } catch  {
                        setError('Errore durante il recupero dei certificati');
                    } finally{
                        setLoading(false);
                    }
                }
            }["StudentCertificateList.useEffect.fetchCertificates"];
            if (studentEmail) fetchCertificates();
        }
    }["StudentCertificateList.useEffect"], [
        studentEmail
    ]);
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "text-gray-700",
        children: "Caricamento certificati..."
    }, void 0, false, {
        fileName: "[project]/src/app/dashboard-student/components/StudentCertificateList.tsx",
        lineNumber: 39,
        columnNumber: 23
    }, this);
    if (error) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "text-red-500",
        children: error
    }, void 0, false, {
        fileName: "[project]/src/app/dashboard-student/components/StudentCertificateList.tsx",
        lineNumber: 40,
        columnNumber: 21
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "mt-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold mb-4 text-green-700",
                children: "I miei certificati"
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard-student/components/StudentCertificateList.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            certificates.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-500",
                children: "Nessun certificato disponibile."
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard-student/components/StudentCertificateList.tsx",
                lineNumber: 46,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                children: certificates.map((cert)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white p-4 rounded-xl shadow-md border",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-bold text-green-800",
                                children: cert.title
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard-student/components/StudentCertificateList.tsx",
                                lineNumber: 51,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-600",
                                children: cert.description
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard-student/components/StudentCertificateList.tsx",
                                lineNumber: 52,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm mt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Ente:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard-student/components/StudentCertificateList.tsx",
                                        lineNumber: 54,
                                        columnNumber: 17
                                    }, this),
                                    " ",
                                    cert.entity_name
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard-student/components/StudentCertificateList.tsx",
                                lineNumber: 53,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Data:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard-student/components/StudentCertificateList.tsx",
                                        lineNumber: 57,
                                        columnNumber: 17
                                    }, this),
                                    " ",
                                    new Date(cert.issued_date).toLocaleDateString()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard-student/components/StudentCertificateList.tsx",
                                lineNumber: 56,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: `https://sepolia.etherscan.io/tx/${cert.blockchain_tx}`,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "text-sm text-blue-600 underline block mt-2",
                                children: "Visualizza transazione"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard-student/components/StudentCertificateList.tsx",
                                lineNumber: 59,
                                columnNumber: 15
                            }, this)
                        ]
                    }, cert.id, true, {
                        fileName: "[project]/src/app/dashboard-student/components/StudentCertificateList.tsx",
                        lineNumber: 50,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard-student/components/StudentCertificateList.tsx",
                lineNumber: 48,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard-student/components/StudentCertificateList.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_s(StudentCertificateList, "Yp2VQCd1qbHa0Bxjr01jhSAujJQ=");
_c = StudentCertificateList;
var _c;
__turbopack_context__.k.register(_c, "StudentCertificateList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/dashboard-student/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>StudentDashboard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabaseClient.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2d$student$2f$components$2f$StudentCertificateList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/dashboard-student/components/StudentCertificateList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function StudentDashboard() {
    _s();
    const [studentEmail, setStudentEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StudentDashboard.useEffect": ()=>{
            const fetchStudent = {
                "StudentDashboard.useEffect.fetchStudent": async ()=>{
                    try {
                        setLoading(true);
                        // Recupera email salvata al login
                        const email = localStorage.getItem('userEmail');
                        if (!email) throw new Error('Nessuna email trovata in sessione');
                        // Controlla che lo studente esista
                        const { data, error: studentErr } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('users').select('id, email').eq('email', email).single();
                        if (studentErr) throw studentErr;
                        if (!data) throw new Error('Studente non trovato');
                        setStudentEmail(email);
                    } catch (err) {
                        console.error('Errore fetchStudent:', err);
                        setError('Errore nel recupero dello studente');
                    } finally{
                        setLoading(false);
                    }
                }
            }["StudentDashboard.useEffect.fetchStudent"];
            fetchStudent();
        }
    }["StudentDashboard.useEffect"], []);
    const handleLogout = async ()=>{
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.signOut();
        localStorage.removeItem('userEmail'); // 🔑 pulizia
        router.push('/'); // 🔑 redirect alla home
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 text-gray-100",
            children: "⏳ Caricamento..."
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard-student/page.tsx",
            lineNumber: 52,
            columnNumber: 12
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 text-red-200",
            children: [
                "❌ ",
                error
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard-student/page.tsx",
            lineNumber: 56,
            columnNumber: 12
        }, this);
    }
    if (!studentEmail) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 text-red-200",
            children: "❌ Nessuno studente associato a questo account"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard-student/page.tsx",
            lineNumber: 60,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-green-700 to-green-900 py-10 px-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-md",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-2xl font-bold text-green-700",
                            children: "Dashboard Studente"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard-student/page.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleLogout,
                            className: "px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition",
                            children: "🚪 Logout"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard-student/page.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard-student/page.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2d$student$2f$components$2f$StudentCertificateList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    studentEmail: studentEmail
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard-student/page.tsx",
                    lineNumber: 76,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard-student/page.tsx",
            lineNumber: 65,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/dashboard-student/page.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
_s(StudentDashboard, "FMrlFJFSgoepLoPraHI4SYitSbI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = StudentDashboard;
var _c;
__turbopack_context__.k.register(_c, "StudentDashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_a1ee2730._.js.map