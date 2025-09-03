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
"[project]/src/app/actions/data:0ddf00 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"4049cbb9dc8df1d9a266aac6f7b38db8b9e1de766e":"getCertificatesByStudent"},"src/app/actions/certificateActions.ts",""] */ __turbopack_context__.s({
    "getCertificatesByStudent": (()=>getCertificatesByStudent)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var getCertificatesByStudent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("4049cbb9dc8df1d9a266aac6f7b38db8b9e1de766e", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getCertificatesByStudent"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vY2VydGlmaWNhdGVBY3Rpb25zLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc2VydmVyJztcclxuXHJcbmltcG9ydCB7IHN1cGFiYXNlIH0gZnJvbSAnQC9saWIvc3VwYWJhc2VDbGllbnQnO1xyXG5cclxuLy8g4pyFIFJlY3VwZXJhIGNlcnRpZmljYXRpIGVtZXNzaSBkYSB1biBlbnRlXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDZXJ0aWZpY2F0ZXNCeUVudGl0eShlbnRpdHlJZDogc3RyaW5nKSB7XHJcbiAgaWYgKCFlbnRpdHlJZCkgdGhyb3cgbmV3IEVycm9yKCdJRCBlbnRlIG1hbmNhbnRlJyk7XHJcblxyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbSgnY2VydGlmaWNhdGVzJylcclxuICAgIC5zZWxlY3QoYFxyXG4gICAgICBpZCxcclxuICAgICAgdGl0bGUsXHJcbiAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICBpc3N1ZWRfZGF0ZSxcclxuICAgICAgYmxvY2tjaGFpbl90eCxcclxuICAgICAgdXNlcnM6c3R1ZGVudF9pZCAoXHJcbiAgICAgICAgZW1haWwsXHJcbiAgICAgICAgbm9tZSxcclxuICAgICAgICBjb2dub21lXHJcbiAgICAgIClcclxuICAgIGApXHJcbiAgICAuZXEoJ2VudGl0eV9pZCcsIGVudGl0eUlkKVxyXG4gICAgLm9yZGVyKCdpc3N1ZWRfZGF0ZScsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KTtcclxuXHJcbiAgaWYgKGVycm9yKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZGF0YS5tYXAoKGNlcnQpID0+IHtcclxuICAgIGNvbnN0IHN0dWRlbnQgPSBBcnJheS5pc0FycmF5KGNlcnQudXNlcnMpID8gY2VydC51c2Vyc1swXSA6IGNlcnQudXNlcnM7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpZDogY2VydC5pZCxcclxuICAgICAgdGl0bGU6IGNlcnQudGl0bGUsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBjZXJ0LmRlc2NyaXB0aW9uLFxyXG4gICAgICBpc3N1ZWRfZGF0ZTogY2VydC5pc3N1ZWRfZGF0ZSxcclxuICAgICAgYmxvY2tjaGFpbl90eDogY2VydC5ibG9ja2NoYWluX3R4LFxyXG4gICAgICBzdHVkZW50X2VtYWlsOiBzdHVkZW50Py5lbWFpbCA/PyAnTi9BJyxcclxuICAgICAgc3R1ZGVudF9uYW1lOiBzdHVkZW50ID8gYCR7c3R1ZGVudC5ub21lfSAke3N0dWRlbnQuY29nbm9tZX1gIDogJ04vQScsXHJcbiAgICB9O1xyXG4gIH0pO1xyXG59XHJcblxyXG4vLyDinIUgUmVjdXBlcmEgY2VydGlmaWNhdGkgZGkgdW5vIHN0dWRlbnRlXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDZXJ0aWZpY2F0ZXNCeVN0dWRlbnQoc3R1ZGVudElkOiBzdHJpbmcpIHtcclxuICBpZiAoIXN0dWRlbnRJZCkgdGhyb3cgbmV3IEVycm9yKCdJRCBzdHVkZW50ZSBtYW5jYW50ZScpO1xyXG5cclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oJ2NlcnRpZmljYXRlcycpXHJcbiAgICAuc2VsZWN0KGBcclxuICAgICAgaWQsXHJcbiAgICAgIHRpdGxlLFxyXG4gICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgaXNzdWVkX2RhdGUsXHJcbiAgICAgIGJsb2NrY2hhaW5fdHgsXHJcbiAgICAgIGVudGl0aWVzOmVudGl0eV9pZCAoXHJcbiAgICAgICAgbm9tZV9lbnRlLFxyXG4gICAgICAgIGVtYWlsXHJcbiAgICAgIClcclxuICAgIGApXHJcbiAgICAuZXEoJ3N0dWRlbnRfaWQnLCBzdHVkZW50SWQpXHJcbiAgICAub3JkZXIoJ2lzc3VlZF9kYXRlJywgeyBhc2NlbmRpbmc6IGZhbHNlIH0pO1xyXG5cclxuICBpZiAoZXJyb3IpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBkYXRhLm1hcCgoY2VydCkgPT4ge1xyXG4gICAgY29uc3QgZW50aXR5ID0gQXJyYXkuaXNBcnJheShjZXJ0LmVudGl0aWVzKSA/IGNlcnQuZW50aXRpZXNbMF0gOiBjZXJ0LmVudGl0aWVzO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaWQ6IGNlcnQuaWQsXHJcbiAgICAgIHRpdGxlOiBjZXJ0LnRpdGxlLFxyXG4gICAgICBkZXNjcmlwdGlvbjogY2VydC5kZXNjcmlwdGlvbixcclxuICAgICAgaXNzdWVkX2RhdGU6IGNlcnQuaXNzdWVkX2RhdGUsXHJcbiAgICAgIGJsb2NrY2hhaW5fdHg6IGNlcnQuYmxvY2tjaGFpbl90eCxcclxuICAgICAgZW50aXR5X25hbWU6IGVudGl0eT8ubm9tZV9lbnRlID8/ICdOL0EnLFxyXG4gICAgICBlbnRpdHlfZW1haWw6IGVudGl0eT8uZW1haWwgPz8gJ04vQScsXHJcbiAgICB9O1xyXG4gIH0pO1xyXG59XHJcblxyXG4vLyDinIUgRWxpbWluYSB1biBjZXJ0aWZpY2F0byAoc29sbyBlbnRlIHByb3ByaWV0YXJpbylcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNlcnRpZmljYXRlKGlkOiBzdHJpbmcsIGVudGl0eUlkOiBzdHJpbmcpIHtcclxuICBpZiAoIWlkIHx8ICFlbnRpdHlJZCkgdGhyb3cgbmV3IEVycm9yKCdJRCBjZXJ0aWZpY2F0byBvIGVudGUgbWFuY2FudGUnKTtcclxuXHJcbiAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKCdjZXJ0aWZpY2F0ZXMnKVxyXG4gICAgLmRlbGV0ZSgpXHJcbiAgICAuZXEoJ2lkJywgaWQpXHJcbiAgICAuZXEoJ2VudGl0eV9pZCcsIGVudGl0eUlkKTtcclxuXHJcbiAgaWYgKGVycm9yKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoidVRBNENzQiJ9
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$0ddf00__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:0ddf00 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clipboard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clipboard.js [app-client] (ecmascript) <export default as Clipboard>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function StudentCertificateList({ studentId }) {
    _s();
    const [certificates, setCertificates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const pageSize = 10;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StudentCertificateList.useEffect": ()=>{
            const fetchCertificates = {
                "StudentCertificateList.useEffect.fetchCertificates": async ()=>{
                    try {
                        const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$0ddf00__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getCertificatesByStudent"])(studentId);
                        setCertificates(data);
                    } catch  {
                        setError('Errore durante il recupero dei certificati');
                    } finally{
                        setLoading(false);
                    }
                }
            }["StudentCertificateList.useEffect.fetchCertificates"];
            if (studentId) fetchCertificates();
        }
    }["StudentCertificateList.useEffect"], [
        studentId
    ]);
    // 🔍 Filtraggio in tempo reale
    const filteredCertificates = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "StudentCertificateList.useMemo[filteredCertificates]": ()=>{
            return certificates.filter({
                "StudentCertificateList.useMemo[filteredCertificates]": (cert)=>cert.title.toLowerCase().includes(search.toLowerCase()) || cert.description?.toLowerCase().includes(search.toLowerCase())
            }["StudentCertificateList.useMemo[filteredCertificates]"]);
        }
    }["StudentCertificateList.useMemo[filteredCertificates]"], [
        certificates,
        search
    ]);
    // 📄 Paginazione
    const totalPages = Math.ceil(filteredCertificates.length / pageSize);
    const paginatedCertificates = filteredCertificates.slice((page - 1) * pageSize, page * pageSize);
    const handleCopy = (tx)=>{
        navigator.clipboard.writeText(`https://sepolia.etherscan.io/tx/${tx}`);
        alert('🔗 Link copiato negli appunti!');
    };
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "text-gray-600",
        children: "Caricamento certificati..."
    }, void 0, false, {
        fileName: "[project]/src/app/dashboard-student/components/StudentCertificateList.tsx",
        lineNumber: 64,
        columnNumber: 23
    }, this);
    if (error) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "text-red-500",
        children: error
    }, void 0, false, {
        fileName: "[project]/src/app/dashboard-student/components/StudentCertificateList.tsx",
        lineNumber: 65,
        columnNumber: 21
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "mt-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-2xl",
                        children: "📜"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard-student/components/StudentCertificateList.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold text-indigo-800",
                        children: "Di seguito la lista dei tuoi certificati"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard-student/components/StudentCertificateList.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard-student/components/StudentCertificateList.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-gray-600 mb-4",
                children: "Copia il link per condividere il codice del documento. Chi lo riceverà potrà verificarne l’autenticità."
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard-student/components/StudentCertificateList.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                value: search,
                onChange: (e)=>{
                    setSearch(e.target.value);
                    setPage(1); // reset alla prima pagina durante la ricerca
                },
                placeholder: "🔍 Cerca per titolo o descrizione...",
                className: "w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard-student/components/StudentCertificateList.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            paginatedCertificates.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-500",
                children: "Nessun certificato trovato."
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard-student/components/StudentCertificateList.tsx",
                lineNumber: 93,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                children: paginatedCertificates.map((cert)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white p-4 rounded-xl shadow-md border",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-bold text-indigo-800",
                                children: cert.title
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard-student/components/StudentCertificateList.tsx",
                                lineNumber: 98,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-600",
                                children: cert.description
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard-student/components/StudentCertificateList.tsx",
                                lineNumber: 99,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm mt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Emesso da:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard-student/components/StudentCertificateList.tsx",
                                        lineNumber: 101,
                                        columnNumber: 17
                                    }, this),
                                    " ",
                                    cert.entity_name
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard-student/components/StudentCertificateList.tsx",
                                lineNumber: 100,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Data:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard-student/components/StudentCertificateList.tsx",
                                        lineNumber: 104,
                                        columnNumber: 17
                                    }, this),
                                    " ",
                                    new Date(cert.issued_date).toLocaleDateString()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard-student/components/StudentCertificateList.tsx",
                                lineNumber: 103,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: `https://sepolia.etherscan.io/tx/${cert.blockchain_tx}`,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "text-sm text-blue-600 underline",
                                        children: "Visualizza transazione"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard-student/components/StudentCertificateList.tsx",
                                        lineNumber: 107,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleCopy(cert.blockchain_tx),
                                        className: "p-1 rounded hover:bg-gray-200",
                                        title: "Copia link",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clipboard$3e$__["Clipboard"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard-student/components/StudentCertificateList.tsx",
                                            lineNumber: 120,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard-student/components/StudentCertificateList.tsx",
                                        lineNumber: 115,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard-student/components/StudentCertificateList.tsx",
                                lineNumber: 106,
                                columnNumber: 15
                            }, this)
                        ]
                    }, cert.id, true, {
                        fileName: "[project]/src/app/dashboard-student/components/StudentCertificateList.tsx",
                        lineNumber: 97,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard-student/components/StudentCertificateList.tsx",
                lineNumber: 95,
                columnNumber: 9
            }, this),
            totalPages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center items-center gap-4 mt-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setPage((p)=>Math.max(p - 1, 1)),
                        disabled: page === 1,
                        className: "px-3 py-1 bg-gray-200 rounded disabled:opacity-50",
                        children: "◀ Precedente"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard-student/components/StudentCertificateList.tsx",
                        lineNumber: 131,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "Pagina ",
                            page,
                            " di ",
                            totalPages
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard-student/components/StudentCertificateList.tsx",
                        lineNumber: 138,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setPage((p)=>Math.min(p + 1, totalPages)),
                        disabled: page === totalPages,
                        className: "px-3 py-1 bg-gray-200 rounded disabled:opacity-50",
                        children: "Successiva ▶"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard-student/components/StudentCertificateList.tsx",
                        lineNumber: 141,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard-student/components/StudentCertificateList.tsx",
                lineNumber: 130,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard-student/components/StudentCertificateList.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
_s(StudentCertificateList, "8INdmjFci7cuSH1kBXXxRXKFb80=");
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
    const [studentId, setStudentId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
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
                        // Recupera ID dello studente
                        const { data, error: studentErr } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('users').select('id').eq('email', email).single();
                        if (studentErr) throw studentErr;
                        if (!data) throw new Error('Studente non trovato');
                        setStudentId(data.id);
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
    if (!studentId) {
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
        className: "min-h-screen bg-gradient-to-br from-indigo-700 to-indigo-900 py-10 px-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-md",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-2xl font-bold text-indigo-700",
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
                    studentId: studentId
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard-student/page.tsx",
                    lineNumber: 77,
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
_s(StudentDashboard, "+iRxr0mgKsHaXNCM2JlbraEXQEQ=", false, function() {
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

//# sourceMappingURL=src_3d676e36._.js.map