module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/stream [external] (stream, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/http [external] (http, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}}),
"[externals]/url [external] (url, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}}),
"[externals]/punycode [external] (punycode, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("punycode", () => require("punycode"));

module.exports = mod;
}}),
"[externals]/https [external] (https, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[externals]/events [external] (events, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}}),
"[externals]/net [external] (net, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}}),
"[externals]/tls [external] (tls, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}}),
"[externals]/crypto [external] (crypto, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}}),
"[externals]/buffer [external] (buffer, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}}),
"[project]/src/lib/supabaseClient.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "supabase": (()=>supabase)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/module/index.js [app-ssr] (ecmascript) <locals>");
;
const supabaseUrl = 'https://rygyqxalcvxrekpfkqga.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ5Z3lxeGFsY3Z4cmVrcGZrcWdhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA0MzM5NjcsImV4cCI6MjA2NjAwOTk2N30.lo2ydzPjibp2nl3W_hnhQNP4od_jprdw4RDVHyXKDJ0';
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey);
}}),
"[project]/src/lib/contract.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "aggiungiCertificatoSuChain": (()=>aggiungiCertificatoSuChain)
});
async function aggiungiCertificatoSuChain(hash) {
    const res = await fetch("/api/aggiungi-certificato", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            hash
        })
    });
    if (!res.ok) {
        let msg = "Errore invio transazione";
        try {
            const j = await res.json();
            msg = j.error || msg;
        } catch  {}
        throw new Error(msg);
    }
    const data = await res.json();
    return data.txHash;
}
}}),
"[project]/src/app/dashboard-entity/components/InsertCertificate.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>InsertCertificate)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contract$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/contract.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabaseClient.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function InsertCertificate({ entityId }) {
    const [pdfFile, setPdfFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        studentEmail: '',
        corso: '',
        descrizione: '',
        data: ''
    });
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleChange = (e)=>{
        setFormData((prev)=>({
                ...prev,
                [e.target.name]: e.target.value
            }));
    };
    const handlePdfChange = (e)=>{
        if (e.target.files?.[0]) setPdfFile(e.target.files[0]);
    };
    const calculateHash = async (file)=>{
        const arrayBuffer = await file.arrayBuffer();
        const hashBuffer = await crypto.subtle.digest('SHA-256', arrayBuffer);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map((b)=>b.toString(16).padStart(2, '0')).join('');
        return hashHex;
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setStatus(null);
        if (!pdfFile) return setStatus('Seleziona un PDF');
        if (!formData.studentEmail) return setStatus('Inserisci l\'email dello studente');
        setLoading(true);
        try {
            // 1. Trova utente per email
            const { data: users, error: userErr } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('users').select('id').eq('email', formData.studentEmail).limit(1).single();
            if (userErr || !users) {
                setStatus('❌ Studente non trovato con questa email');
                setLoading(false);
                return;
            }
            const studentId = users.id;
            // 2. Calcola hash PDF
            const hash = await calculateHash(pdfFile);
            // 3. Interagisci con smart contract e ottieni txHash
            const txHash = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contract$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["aggiungiCertificatoSuChain"])(hash);
            setStatus(`✅ Transazione inviata: ${txHash}`);
            /*      
      // 4. Upload file
      const fileName = `cert-${Date.now()}.pdf`;
      const { error: uploadErr } = await supabase.storage
        .from('certificati')
        .upload(fileName, pdfFile);
      
      if (uploadErr) throw uploadErr;
    */ // 5. Inserisci record certificato
            const { error: insertErr } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('certificates').insert({
                student_id: studentId,
                entity_id: entityId,
                title: formData.corso,
                description: formData.descrizione,
                issued_date: formData.data,
                blockchain_tx: txHash
            });
            if (insertErr) throw insertErr;
            setStatus('✅ Certificato registrato con successo!');
            setFormData({
                studentEmail: '',
                corso: '',
                descrizione: '',
                data: ''
            });
            setPdfFile(null);
        } catch (err) {
            if (err instanceof Error) {
                setStatus(`❌ Errore: ${err.message}`);
            } else {
                setStatus('❌ Errore sconosciuto');
            }
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white p-6 rounded-xl shadow-md max-w-2xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold mb-4 text-indigo-700",
                children: "Inserisci nuovo certificato"
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard-entity/components/InsertCertificate.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                className: "flex flex-col gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "email",
                        name: "studentEmail",
                        value: formData.studentEmail,
                        onChange: handleChange,
                        placeholder: "Email studente",
                        className: "border rounded p-2",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard-entity/components/InsertCertificate.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        name: "corso",
                        value: formData.corso,
                        onChange: handleChange,
                        placeholder: "Nome Corso",
                        className: "border rounded p-2",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard-entity/components/InsertCertificate.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        name: "descrizione",
                        value: formData.descrizione,
                        onChange: handleChange,
                        placeholder: "Descrizione certificato",
                        className: "border rounded p-2",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard-entity/components/InsertCertificate.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "date",
                        name: "data",
                        value: formData.data,
                        onChange: handleChange,
                        className: "border rounded p-2",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard-entity/components/InsertCertificate.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "file",
                        accept: "application/pdf",
                        onChange: handlePdfChange,
                        className: "border rounded p-2",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard-entity/components/InsertCertificate.tsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this),
                    status && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `text-sm ${status.startsWith('✅') ? 'text-green-600' : 'text-red-600'}`,
                        children: status
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard-entity/components/InsertCertificate.tsx",
                        lineNumber: 161,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        disabled: loading,
                        className: "bg-indigo-700 text-white py-2 px-4 rounded hover:bg-indigo-800",
                        children: loading ? 'Registrazione in corso...' : 'Registra Certificato'
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard-entity/components/InsertCertificate.tsx",
                        lineNumber: 166,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard-entity/components/InsertCertificate.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard-entity/components/InsertCertificate.tsx",
        lineNumber: 110,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/actions/data:dc80b9 [app-ssr] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"4009146593d086f9541c47bbd394df152d0ac54185":"getCertificatesByEntity"},"src/app/actions/certificateActions.ts",""] */ __turbopack_context__.s({
    "getCertificatesByEntity": (()=>getCertificatesByEntity)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var getCertificatesByEntity = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("4009146593d086f9541c47bbd394df152d0ac54185", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getCertificatesByEntity"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vY2VydGlmaWNhdGVBY3Rpb25zLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc2VydmVyJztcclxuXHJcbmltcG9ydCB7IHN1cGFiYXNlIH0gZnJvbSAnQC9saWIvc3VwYWJhc2VDbGllbnQnO1xyXG5cclxuLy8gUmVjdXBlcmEgdHV0dGkgaSBjZXJ0aWZpY2F0aSBlbWVzc2kgZGEgdW4gZGF0byBlbnRlXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDZXJ0aWZpY2F0ZXNCeUVudGl0eShlbnRpdHlJZDogc3RyaW5nKSB7XHJcbiAgaWYgKCFlbnRpdHlJZCkgdGhyb3cgbmV3IEVycm9yKCdJRCBlbnRlIG1hbmNhbnRlJyk7XHJcblxyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbSgnY2VydGlmaWNhdGVzJylcclxuICAgIC5zZWxlY3QoYFxyXG4gICAgICBpZCxcclxuICAgICAgdGl0bGUsXHJcbiAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICBpc3N1ZWRfZGF0ZSxcclxuICAgICAgYmxvY2tjaGFpbl90eCxcclxuICAgICAgdXNlcnM6c3R1ZGVudF9pZCAoXHJcbiAgICAgICAgZW1haWwsXHJcbiAgICAgICAgbm9tZSxcclxuICAgICAgICBjb2dub21lXHJcbiAgICAgIClcclxuICAgIGApXHJcbiAgICAuZXEoJ2VudGl0eV9pZCcsIGVudGl0eUlkKVxyXG4gICAgLm9yZGVyKCdpc3N1ZWRfZGF0ZScsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KTtcclxuXHJcbiAgaWYgKGVycm9yKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBjZXJ0aWZpY2F0ZXMgPSBkYXRhLm1hcCgoY2VydCkgPT4ge1xyXG4gICAgY29uc3Qgc3R1ZGVudCA9IEFycmF5LmlzQXJyYXkoY2VydC51c2VycykgPyBjZXJ0LnVzZXJzWzBdIDogY2VydC51c2VycztcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpZDogY2VydC5pZCxcclxuICAgICAgdGl0bGU6IGNlcnQudGl0bGUsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBjZXJ0LmRlc2NyaXB0aW9uLFxyXG4gICAgICBpc3N1ZWRfZGF0ZTogY2VydC5pc3N1ZWRfZGF0ZSxcclxuICAgICAgYmxvY2tjaGFpbl90eDogY2VydC5ibG9ja2NoYWluX3R4LFxyXG4gICAgICBzdHVkZW50X2VtYWlsOiBzdHVkZW50Py5lbWFpbCA/PyAnTi9BJyxcclxuICAgICAgc3R1ZGVudF9uYW1lOiBzdHVkZW50ID8gYCR7c3R1ZGVudC5ub21lfSAke3N0dWRlbnQuY29nbm9tZX1gIDogJ04vQScsXHJcbiAgICB9O1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gY2VydGlmaWNhdGVzO1xyXG59XHJcblxyXG4vLyBFbGltaW5hIHVuIGNlcnRpZmljYXRvIHNvbG8gc2UgYXBwYXJ0aWVuZSBhbGwnZW50ZSBjb3JyZXR0b1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQ2VydGlmaWNhdGUoaWQ6IHN0cmluZywgZW50aXR5SWQ6IHN0cmluZykge1xyXG4gIGlmICghaWQgfHwgIWVudGl0eUlkKSB0aHJvdyBuZXcgRXJyb3IoJ0lEIGNlcnRpZmljYXRvIG8gZW50ZSBtYW5jYW50ZScpO1xyXG5cclxuICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oJ2NlcnRpZmljYXRlcycpXHJcbiAgICAuZGVsZXRlKClcclxuICAgIC5lcSgnaWQnLCBpZClcclxuICAgIC5lcSgnZW50aXR5X2lkJywgZW50aXR5SWQpOyAvLyBzaWN1cmV6emE6IGwnZW50ZSBwdcOyIGNhbmNlbGxhcmUgc29sbyBpIHByb3ByaSBjZXJ0aWZpY2F0aVxyXG5cclxuICBpZiAoZXJyb3IpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJzVEFLc0IifQ==
}}),
"[project]/src/app/actions/data:442835 [app-ssr] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"60586f3441b7247f3fc0baa9cb6d323431066d3b01":"deleteCertificate"},"src/app/actions/certificateActions.ts",""] */ __turbopack_context__.s({
    "deleteCertificate": (()=>deleteCertificate)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var deleteCertificate = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("60586f3441b7247f3fc0baa9cb6d323431066d3b01", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteCertificate"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vY2VydGlmaWNhdGVBY3Rpb25zLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc2VydmVyJztcclxuXHJcbmltcG9ydCB7IHN1cGFiYXNlIH0gZnJvbSAnQC9saWIvc3VwYWJhc2VDbGllbnQnO1xyXG5cclxuLy8gUmVjdXBlcmEgdHV0dGkgaSBjZXJ0aWZpY2F0aSBlbWVzc2kgZGEgdW4gZGF0byBlbnRlXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDZXJ0aWZpY2F0ZXNCeUVudGl0eShlbnRpdHlJZDogc3RyaW5nKSB7XHJcbiAgaWYgKCFlbnRpdHlJZCkgdGhyb3cgbmV3IEVycm9yKCdJRCBlbnRlIG1hbmNhbnRlJyk7XHJcblxyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbSgnY2VydGlmaWNhdGVzJylcclxuICAgIC5zZWxlY3QoYFxyXG4gICAgICBpZCxcclxuICAgICAgdGl0bGUsXHJcbiAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICBpc3N1ZWRfZGF0ZSxcclxuICAgICAgYmxvY2tjaGFpbl90eCxcclxuICAgICAgdXNlcnM6c3R1ZGVudF9pZCAoXHJcbiAgICAgICAgZW1haWwsXHJcbiAgICAgICAgbm9tZSxcclxuICAgICAgICBjb2dub21lXHJcbiAgICAgIClcclxuICAgIGApXHJcbiAgICAuZXEoJ2VudGl0eV9pZCcsIGVudGl0eUlkKVxyXG4gICAgLm9yZGVyKCdpc3N1ZWRfZGF0ZScsIHsgYXNjZW5kaW5nOiBmYWxzZSB9KTtcclxuXHJcbiAgaWYgKGVycm9yKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBjZXJ0aWZpY2F0ZXMgPSBkYXRhLm1hcCgoY2VydCkgPT4ge1xyXG4gICAgY29uc3Qgc3R1ZGVudCA9IEFycmF5LmlzQXJyYXkoY2VydC51c2VycykgPyBjZXJ0LnVzZXJzWzBdIDogY2VydC51c2VycztcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpZDogY2VydC5pZCxcclxuICAgICAgdGl0bGU6IGNlcnQudGl0bGUsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBjZXJ0LmRlc2NyaXB0aW9uLFxyXG4gICAgICBpc3N1ZWRfZGF0ZTogY2VydC5pc3N1ZWRfZGF0ZSxcclxuICAgICAgYmxvY2tjaGFpbl90eDogY2VydC5ibG9ja2NoYWluX3R4LFxyXG4gICAgICBzdHVkZW50X2VtYWlsOiBzdHVkZW50Py5lbWFpbCA/PyAnTi9BJyxcclxuICAgICAgc3R1ZGVudF9uYW1lOiBzdHVkZW50ID8gYCR7c3R1ZGVudC5ub21lfSAke3N0dWRlbnQuY29nbm9tZX1gIDogJ04vQScsXHJcbiAgICB9O1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gY2VydGlmaWNhdGVzO1xyXG59XHJcblxyXG4vLyBFbGltaW5hIHVuIGNlcnRpZmljYXRvIHNvbG8gc2UgYXBwYXJ0aWVuZSBhbGwnZW50ZSBjb3JyZXR0b1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQ2VydGlmaWNhdGUoaWQ6IHN0cmluZywgZW50aXR5SWQ6IHN0cmluZykge1xyXG4gIGlmICghaWQgfHwgIWVudGl0eUlkKSB0aHJvdyBuZXcgRXJyb3IoJ0lEIGNlcnRpZmljYXRvIG8gZW50ZSBtYW5jYW50ZScpO1xyXG5cclxuICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oJ2NlcnRpZmljYXRlcycpXHJcbiAgICAuZGVsZXRlKClcclxuICAgIC5lcSgnaWQnLCBpZClcclxuICAgIC5lcSgnZW50aXR5X2lkJywgZW50aXR5SWQpOyAvLyBzaWN1cmV6emE6IGwnZW50ZSBwdcOyIGNhbmNlbGxhcmUgc29sbyBpIHByb3ByaSBjZXJ0aWZpY2F0aVxyXG5cclxuICBpZiAoZXJyb3IpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJnVEErQ3NCIn0=
}}),
"[project]/src/app/dashboard-entity/components/CertificateList.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CertificateList)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$dc80b9__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:dc80b9 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$442835__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:442835 [app-ssr] (ecmascript) <text/javascript>");
'use client';
;
;
;
;
function CertificateList({ entityId }) {
    const [certificates, setCertificates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchCertificates = async ()=>{
            try {
                const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$dc80b9__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getCertificatesByEntity"])(entityId);
                setCertificates(data);
            } catch  {
                setError('Errore durante il recupero dei certificati');
            } finally{
                setLoading(false);
            }
        };
        if (entityId) fetchCertificates();
    }, [
        entityId
    ]);
    const handleDelete = async (id)=>{
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$442835__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteCertificate"])(id, entityId);
            setCertificates((prev)=>prev.filter((cert)=>cert.id !== id));
        } catch  {
            alert('Errore durante l\'eliminazione del certificato');
        }
    };
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "text-white",
        children: "Caricamento certificati..."
    }, void 0, false, {
        fileName: "[project]/src/app/dashboard-entity/components/CertificateList.tsx",
        lineNumber: 50,
        columnNumber: 23
    }, this);
    if (error) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "text-red-500",
        children: error
    }, void 0, false, {
        fileName: "[project]/src/app/dashboard-entity/components/CertificateList.tsx",
        lineNumber: 51,
        columnNumber: 21
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "mt-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold mb-4 text-white",
                children: "Certificati Emessi"
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard-entity/components/CertificateList.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            certificates.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-300",
                children: "Nessun certificato emesso."
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard-entity/components/CertificateList.tsx",
                lineNumber: 57,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                children: certificates.map((cert)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white p-4 rounded-xl shadow-md",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-start",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-bold text-indigo-800",
                                            children: cert.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard-entity/components/CertificateList.tsx",
                                            lineNumber: 64,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-600",
                                            children: cert.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard-entity/components/CertificateList.tsx",
                                            lineNumber: 65,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm mt-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Studente:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard-entity/components/CertificateList.tsx",
                                                    lineNumber: 67,
                                                    columnNumber: 21
                                                }, this),
                                                " ",
                                                cert.student_name
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard-entity/components/CertificateList.tsx",
                                            lineNumber: 66,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Email:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard-entity/components/CertificateList.tsx",
                                                    lineNumber: 70,
                                                    columnNumber: 21
                                                }, this),
                                                " ",
                                                cert.student_email
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard-entity/components/CertificateList.tsx",
                                            lineNumber: 69,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Data:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard-entity/components/CertificateList.tsx",
                                                    lineNumber: 73,
                                                    columnNumber: 21
                                                }, this),
                                                " ",
                                                new Date(cert.issued_date).toLocaleDateString()
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard-entity/components/CertificateList.tsx",
                                            lineNumber: 72,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: `https://sepolia.etherscan.io/tx/${cert.blockchain_tx}`,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "text-sm text-blue-600 underline block mt-2",
                                            children: "Visualizza transazione"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard-entity/components/CertificateList.tsx",
                                            lineNumber: 75,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard-entity/components/CertificateList.tsx",
                                    lineNumber: 63,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleDelete(cert.id),
                                    className: "text-red-600 hover:text-red-800",
                                    title: "Elimina certificato",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {}, void 0, false, {
                                        fileName: "[project]/src/app/dashboard-entity/components/CertificateList.tsx",
                                        lineNumber: 89,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard-entity/components/CertificateList.tsx",
                                    lineNumber: 84,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard-entity/components/CertificateList.tsx",
                            lineNumber: 62,
                            columnNumber: 15
                        }, this)
                    }, cert.id, false, {
                        fileName: "[project]/src/app/dashboard-entity/components/CertificateList.tsx",
                        lineNumber: 61,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard-entity/components/CertificateList.tsx",
                lineNumber: 59,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard-entity/components/CertificateList.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
}}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/src/app/dashboard-entity/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>EntityDashboard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabaseClient.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2d$entity$2f$components$2f$InsertCertificate$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/dashboard-entity/components/InsertCertificate.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2d$entity$2f$components$2f$CertificateList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/dashboard-entity/components/CertificateList.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function EntityDashboard() {
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('insert');
    const [entityId, setEntityId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchEntity = async ()=>{
            try {
                setLoading(true);
                // Recupera email salvata al login
                const email = localStorage.getItem('userEmail');
                if (!email) throw new Error('Nessuna email trovata in sessione');
                // Recupera entity_id dalla tabella entities
                const { data, error: entityErr } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('entities').select('id').eq('email', email).single();
                if (entityErr) throw entityErr;
                if (!data) throw new Error('Ente non trovato');
                setEntityId(data.id);
            } catch (err) {
                console.error("Errore fetchEntity:", err);
                setError('Errore nel recupero dell’ente');
            } finally{
                setLoading(false);
            }
        };
        fetchEntity();
    }, []);
    const handleLogout = async ()=>{
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.signOut();
        localStorage.removeItem('userEmail'); // 🔑 pulizia
        router.push('/'); // 🔑 redirect alla home
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 text-gray-100",
            children: "⏳ Caricamento..."
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard-entity/page.tsx",
            lineNumber: 54,
            columnNumber: 12
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 text-red-200",
            children: [
                "❌ ",
                error
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard-entity/page.tsx",
            lineNumber: 58,
            columnNumber: 12
        }, this);
    }
    if (!entityId) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 text-red-200",
            children: "❌ Nessun ente associato a questo account"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard-entity/page.tsx",
            lineNumber: 62,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-indigo-700 to-indigo-900 py-10 px-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-md",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-2xl font-bold text-indigo-700",
                            children: "Dashboard Ente"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard-entity/page.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleLogout,
                            className: "px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition",
                            children: "🚪 Logout"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard-entity/page.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard-entity/page.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-4 mb-6 border-b pb-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveTab('insert'),
                            className: `px-4 py-2 rounded-t-lg ${activeTab === 'insert' ? 'bg-indigo-700 text-white' : 'bg-gray-200 text-gray-700'}`,
                            children: "➕ Inserisci Certificato"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard-entity/page.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveTab('list'),
                            className: `px-4 py-2 rounded-t-lg ${activeTab === 'list' ? 'bg-indigo-700 text-white' : 'bg-gray-200 text-gray-700'}`,
                            children: "📜 Lista Certificati"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard-entity/page.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard-entity/page.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this),
                activeTab === 'insert' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2d$entity$2f$components$2f$InsertCertificate$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    entityId: entityId
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard-entity/page.tsx",
                    lineNumber: 98,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2d$entity$2f$components$2f$CertificateList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    entityId: entityId
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard-entity/page.tsx",
                    lineNumber: 100,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard-entity/page.tsx",
            lineNumber: 67,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/dashboard-entity/page.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__5ce91640._.js.map