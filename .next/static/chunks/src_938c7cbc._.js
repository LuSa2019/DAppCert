(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/lib/magic.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "getMagicProvider": (()=>getMagicProvider),
    "magic": (()=>magic)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$magic$2d$sdk$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/magic-sdk/dist/es/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$magic$2d$sdk$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/magic-sdk/dist/es/index.mjs [app-client] (ecmascript) <locals>");
;
const createMagic = ()=>("TURBOPACK compile-time truthy", 1) ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$magic$2d$sdk$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Magic"](("TURBOPACK compile-time value", "pk_live_39E018C7347F517D"), {
        network: 'sepolia'
    }) : ("TURBOPACK unreachable", undefined);
const magic = createMagic();
const getMagicProvider = ()=>magic?.rpcProvider || magic?.provider || null;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/abi/CertificatiABI.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "CertificatiABI": (()=>CertificatiABI)
});
const CertificatiABI = [
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "hash",
                "type": "bytes32"
            }
        ],
        "name": "aggiungiCertificato",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "bytes32",
                "name": "hash",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "emittente",
                "type": "address"
            }
        ],
        "name": "CertificatoAggiunto",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "bytes32",
                "name": "hash",
                "type": "bytes32"
            }
        ],
        "name": "CertificatoRimosso",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "hash",
                "type": "bytes32"
            }
        ],
        "name": "rimuoviCertificato",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "name": "certificati",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "hash",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "emittente",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "hash",
                "type": "bytes32"
            }
        ],
        "name": "verificaCertificato",
        "outputs": [
            {
                "internalType": "bool",
                "name": "exists",
                "type": "bool"
            },
            {
                "internalType": "address",
                "name": "emittente",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/contract.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "aggiungiCertificatoSuChain": (()=>aggiungiCertificatoSuChain)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$magic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/magic.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$abi$2f$CertificatiABI$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/abi/CertificatiABI.ts [app-client] (ecmascript)");
;
;
;
const CONTRACT_ADDRESS = '0x4c323D7a113edC4dfe9d639E0acFa7f47B722ed4';
async function aggiungiCertificatoSuChain(hash) {
    const magicProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$magic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMagicProvider"])();
    if (!magicProvider) throw new Error('Magic provider non disponibile');
    // ethers v5 Web3Provider avvolge il provider Magic senza problemi
    const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].providers.Web3Provider(magicProvider);
    const signer = provider.getSigner();
    const contract = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].Contract(CONTRACT_ADDRESS, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$abi$2f$CertificatiABI$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CertificatiABI"], signer);
    const tx = await contract.aggiungiCertificato(hash);
    await tx.wait();
    return tx.hash;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
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
"[project]/src/app/dashboard-entity/components/InsertCertificate.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>InsertCertificate)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contract$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/contract.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabaseClient.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function InsertCertificate({ entityId }) {
    _s();
    const [pdfFile, setPdfFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        studentEmail: '',
        corso: '',
        data: ''
    });
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
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
            const { data: users, error: userErr } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('users').select('id').eq('email', formData.studentEmail).limit(1).single();
            if (userErr || !users) {
                setStatus('❌ Studente non trovato con questa email');
                setLoading(false);
                return;
            }
            const studentId = users.id;
            // 2. Calcola hash PDF
            const hash = await calculateHash(pdfFile);
            // 3. Interagisci con smart contract e ottieni txHash
            const txHash = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contract$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["aggiungiCertificatoSuChain"])(hash);
            setStatus(`✅ Transazione inviata: ${txHash}`);
            // 4. Upload file
            const fileName = `cert-${Date.now()}.pdf`;
            const { data: uploaded, error: uploadErr } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].storage.from('certificati').upload(fileName, pdfFile);
            if (uploadErr) throw uploadErr;
            // 5. Inserisci record certificato
            const { error: insertErr } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('certificates').insert({
                student_id: studentId,
                entity_id: entityId,
                title: formData.corso,
                description: '',
                issued_date: formData.data,
                blockchain_tx: txHash
            });
            if (insertErr) throw insertErr;
            setStatus('✅ Certificato registrato con successo!');
            setFormData({
                studentEmail: '',
                corso: '',
                data: ''
            });
            setPdfFile(null);
        } catch (err) {
            setStatus(`❌ Errore: ${err.message || String(err)}`);
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white p-6 rounded-xl shadow-md max-w-2xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold mb-4 text-indigo-700",
                children: "Inserisci nuovo certificato"
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard-entity/components/InsertCertificate.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                className: "flex flex-col gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "email",
                        name: "studentEmail",
                        value: formData.studentEmail,
                        onChange: handleChange,
                        placeholder: "Email studente",
                        className: "border rounded p-2",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard-entity/components/InsertCertificate.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        name: "corso",
                        value: formData.corso,
                        onChange: handleChange,
                        placeholder: "Nome Corso",
                        className: "border rounded p-2",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard-entity/components/InsertCertificate.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "date",
                        name: "data",
                        value: formData.data,
                        onChange: handleChange,
                        className: "border rounded p-2",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard-entity/components/InsertCertificate.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "file",
                        accept: "application/pdf",
                        onChange: handlePdfChange,
                        className: "border rounded p-2",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard-entity/components/InsertCertificate.tsx",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this),
                    status && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `text-sm ${status.startsWith('✅') ? 'text-green-600' : 'text-red-600'}`,
                        children: status
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard-entity/components/InsertCertificate.tsx",
                        lineNumber: 145,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        disabled: loading,
                        className: "bg-indigo-700 text-white py-2 px-4 rounded hover:bg-indigo-800",
                        children: loading ? 'Registrazione in corso...' : 'Registra Certificato'
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard-entity/components/InsertCertificate.tsx",
                        lineNumber: 150,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard-entity/components/InsertCertificate.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard-entity/components/InsertCertificate.tsx",
        lineNumber: 103,
        columnNumber: 5
    }, this);
}
_s(InsertCertificate, "0ux7IHIHIuiC4LqgWnUc5drxFvM=");
_c = InsertCertificate;
var _c;
__turbopack_context__.k.register(_c, "InsertCertificate");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/actions/data:5f96e7 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"000469e3b873b8fab8731c5b2fe2d39b775c4bcaf7":"getCertificatesByEntity"},"src/app/actions/certificateActions.ts",""] */ __turbopack_context__.s({
    "getCertificatesByEntity": (()=>getCertificatesByEntity)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var getCertificatesByEntity = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("000469e3b873b8fab8731c5b2fe2d39b775c4bcaf7", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getCertificatesByEntity"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vY2VydGlmaWNhdGVBY3Rpb25zLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc2VydmVyJztcclxuXHJcbmltcG9ydCB7IHN1cGFiYXNlIH0gZnJvbSAnQC9saWIvc3VwYWJhc2VDbGllbnQnO1xyXG5cclxuLy8gUmVjdXBlcmEgY2VydGlmaWNhdGkgZGVsbCdlbnRlIGF1dGVudGljYXRvXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDZXJ0aWZpY2F0ZXNCeUVudGl0eSgpIHtcclxuICBjb25zdCB7XHJcbiAgICBkYXRhOiB7IHVzZXIgfSxcclxuICAgIGVycm9yOiBhdXRoRXJyb3IsXHJcbiAgfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguZ2V0VXNlcigpO1xyXG5cclxuICBpZiAoYXV0aEVycm9yIHx8ICF1c2VyKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1V0ZW50ZSBub24gYXV0ZW50aWNhdG8nKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbSgnY2VydGlmaWNhdGknKVxyXG4gICAgLnNlbGVjdChgXHJcbiAgICAgIGlkLFxyXG4gICAgICB0aXRsZSxcclxuICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgIGlzc3VlZF9kYXRlLFxyXG4gICAgICBibG9ja2NoYWluX3R4LFxyXG4gICAgICBzdHVkZW50OnN0dWRlbnRfaWQgKCBub21lLCBjb2dub21lIClcclxuICAgIGApXHJcbiAgICAuZXEoJ2VudGl0eV9pZCcsIHVzZXIuaWQpXHJcbiAgICAub3JkZXIoJ2lzc3VlZF9kYXRlJywgeyBhc2NlbmRpbmc6IGZhbHNlIH0pO1xyXG5cclxuICBpZiAoZXJyb3IpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKTtcclxuICB9XHJcblxyXG4gIC8vIE1hcHBpYW1vIG5vbWUgY29tcGxldG8gZGVsbG8gc3R1ZGVudGVcclxuICAgIGNvbnN0IGNlcnRpZmljYXRlcyA9IGRhdGEubWFwKChjZXJ0KSA9PiB7XHJcbiAgICBjb25zdCBzdHVkZW50ID0gQXJyYXkuaXNBcnJheShjZXJ0LnN0dWRlbnQpID8gY2VydC5zdHVkZW50WzBdIDogY2VydC5zdHVkZW50O1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaWQ6IGNlcnQuaWQsXHJcbiAgICAgICAgdGl0bGU6IGNlcnQudGl0bGUsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGNlcnQuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgaXNzdWVkX2RhdGU6IGNlcnQuaXNzdWVkX2RhdGUsXHJcbiAgICAgICAgYmxvY2tjaGFpbl90eDogY2VydC5ibG9ja2NoYWluX3R4LFxyXG4gICAgICAgIHN0dWRlbnRfbmFtZTogc3R1ZGVudCA/IGAke3N0dWRlbnQubm9tZX0gJHtzdHVkZW50LmNvZ25vbWV9YCA6ICdOL0EnLFxyXG4gICAgfTtcclxuICAgIH0pO1xyXG5cclxuICByZXR1cm4gY2VydGlmaWNhdGVzO1xyXG59XHJcblxyXG4vLyBFbGltaW5hIGNlcnRpZmljYXRvIHBlciBJRFxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQ2VydGlmaWNhdGUoaWQ6IHN0cmluZykge1xyXG4gIGNvbnN0IHtcclxuICAgIGRhdGE6IHsgdXNlciB9LFxyXG4gICAgZXJyb3I6IGF1dGhFcnJvcixcclxuICB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5nZXRVc2VyKCk7XHJcblxyXG4gIGlmIChhdXRoRXJyb3IgfHwgIXVzZXIpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignVXRlbnRlIG5vbiBhdXRlbnRpY2F0bycpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKCdjZXJ0aWZpY2F0aScpXHJcbiAgICAuZGVsZXRlKClcclxuICAgIC5lcSgnaWQnLCBpZClcclxuICAgIC5lcSgnZW50aXR5X2lkJywgdXNlci5pZCk7IC8vIFNpY3VyZXp6YTogcHXDsiBjYW5jZWxsYXJlIHNvbG8gaSBwcm9wcmlcclxuXHJcbiAgaWYgKGVycm9yKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoic1RBS3NCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/actions/data:01423f [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"40734f71ef0226509bdeae312782bcbe4904436c12":"deleteCertificate"},"src/app/actions/certificateActions.ts",""] */ __turbopack_context__.s({
    "deleteCertificate": (()=>deleteCertificate)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var deleteCertificate = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40734f71ef0226509bdeae312782bcbe4904436c12", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteCertificate"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vY2VydGlmaWNhdGVBY3Rpb25zLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc2VydmVyJztcclxuXHJcbmltcG9ydCB7IHN1cGFiYXNlIH0gZnJvbSAnQC9saWIvc3VwYWJhc2VDbGllbnQnO1xyXG5cclxuLy8gUmVjdXBlcmEgY2VydGlmaWNhdGkgZGVsbCdlbnRlIGF1dGVudGljYXRvXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDZXJ0aWZpY2F0ZXNCeUVudGl0eSgpIHtcclxuICBjb25zdCB7XHJcbiAgICBkYXRhOiB7IHVzZXIgfSxcclxuICAgIGVycm9yOiBhdXRoRXJyb3IsXHJcbiAgfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguZ2V0VXNlcigpO1xyXG5cclxuICBpZiAoYXV0aEVycm9yIHx8ICF1c2VyKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1V0ZW50ZSBub24gYXV0ZW50aWNhdG8nKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAuZnJvbSgnY2VydGlmaWNhdGknKVxyXG4gICAgLnNlbGVjdChgXHJcbiAgICAgIGlkLFxyXG4gICAgICB0aXRsZSxcclxuICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgIGlzc3VlZF9kYXRlLFxyXG4gICAgICBibG9ja2NoYWluX3R4LFxyXG4gICAgICBzdHVkZW50OnN0dWRlbnRfaWQgKCBub21lLCBjb2dub21lIClcclxuICAgIGApXHJcbiAgICAuZXEoJ2VudGl0eV9pZCcsIHVzZXIuaWQpXHJcbiAgICAub3JkZXIoJ2lzc3VlZF9kYXRlJywgeyBhc2NlbmRpbmc6IGZhbHNlIH0pO1xyXG5cclxuICBpZiAoZXJyb3IpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKTtcclxuICB9XHJcblxyXG4gIC8vIE1hcHBpYW1vIG5vbWUgY29tcGxldG8gZGVsbG8gc3R1ZGVudGVcclxuICAgIGNvbnN0IGNlcnRpZmljYXRlcyA9IGRhdGEubWFwKChjZXJ0KSA9PiB7XHJcbiAgICBjb25zdCBzdHVkZW50ID0gQXJyYXkuaXNBcnJheShjZXJ0LnN0dWRlbnQpID8gY2VydC5zdHVkZW50WzBdIDogY2VydC5zdHVkZW50O1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaWQ6IGNlcnQuaWQsXHJcbiAgICAgICAgdGl0bGU6IGNlcnQudGl0bGUsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGNlcnQuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgaXNzdWVkX2RhdGU6IGNlcnQuaXNzdWVkX2RhdGUsXHJcbiAgICAgICAgYmxvY2tjaGFpbl90eDogY2VydC5ibG9ja2NoYWluX3R4LFxyXG4gICAgICAgIHN0dWRlbnRfbmFtZTogc3R1ZGVudCA/IGAke3N0dWRlbnQubm9tZX0gJHtzdHVkZW50LmNvZ25vbWV9YCA6ICdOL0EnLFxyXG4gICAgfTtcclxuICAgIH0pO1xyXG5cclxuICByZXR1cm4gY2VydGlmaWNhdGVzO1xyXG59XHJcblxyXG4vLyBFbGltaW5hIGNlcnRpZmljYXRvIHBlciBJRFxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQ2VydGlmaWNhdGUoaWQ6IHN0cmluZykge1xyXG4gIGNvbnN0IHtcclxuICAgIGRhdGE6IHsgdXNlciB9LFxyXG4gICAgZXJyb3I6IGF1dGhFcnJvcixcclxuICB9ID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5nZXRVc2VyKCk7XHJcblxyXG4gIGlmIChhdXRoRXJyb3IgfHwgIXVzZXIpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignVXRlbnRlIG5vbiBhdXRlbnRpY2F0bycpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgIC5mcm9tKCdjZXJ0aWZpY2F0aScpXHJcbiAgICAuZGVsZXRlKClcclxuICAgIC5lcSgnaWQnLCBpZClcclxuICAgIC5lcSgnZW50aXR5X2lkJywgdXNlci5pZCk7IC8vIFNpY3VyZXp6YTogcHXDsiBjYW5jZWxsYXJlIHNvbG8gaSBwcm9wcmlcclxuXHJcbiAgaWYgKGVycm9yKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiZ1RBa0RzQiJ9
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/dashboard-entity/components/CertificateList.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CertificateList)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$5f96e7__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:5f96e7 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$01423f__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:01423f [app-client] (ecmascript) <text/javascript>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function CertificateList() {
    _s();
    const [certificates, setCertificates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CertificateList.useEffect": ()=>{
            const fetchCertificates = {
                "CertificateList.useEffect.fetchCertificates": async ()=>{
                    try {
                        const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$5f96e7__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getCertificatesByEntity"])();
                        setCertificates(data);
                    } catch (err) {
                        setError('Errore durante il recupero dei certificati');
                    } finally{
                        setLoading(false);
                    }
                }
            }["CertificateList.useEffect.fetchCertificates"];
            fetchCertificates();
        }
    }["CertificateList.useEffect"], []);
    const handleDelete = async (id)=>{
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$01423f__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteCertificate"])(id);
            setCertificates((prev)=>prev.filter((cert)=>cert.id !== id));
        } catch  {
            alert('Errore durante l\'eliminazione del certificato');
        }
    };
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "text-white",
        children: "Caricamento certificati..."
    }, void 0, false, {
        fileName: "[project]/src/app/dashboard-entity/components/CertificateList.tsx",
        lineNumber: 45,
        columnNumber: 23
    }, this);
    if (error) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "text-red-500",
        children: error
    }, void 0, false, {
        fileName: "[project]/src/app/dashboard-entity/components/CertificateList.tsx",
        lineNumber: 46,
        columnNumber: 21
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "mt-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold mb-4 text-white",
                children: "Certificati Emessi"
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard-entity/components/CertificateList.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            certificates.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-300",
                children: "Nessun certificato emesso."
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard-entity/components/CertificateList.tsx",
                lineNumber: 52,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                children: certificates.map((cert)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white p-4 rounded-xl shadow-md",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-start",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-bold text-indigo-800",
                                            children: cert.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard-entity/components/CertificateList.tsx",
                                            lineNumber: 59,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-600",
                                            children: cert.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard-entity/components/CertificateList.tsx",
                                            lineNumber: 60,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm mt-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Studente:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard-entity/components/CertificateList.tsx",
                                                    lineNumber: 62,
                                                    columnNumber: 21
                                                }, this),
                                                " ",
                                                cert.student_name
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard-entity/components/CertificateList.tsx",
                                            lineNumber: 61,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Data:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard-entity/components/CertificateList.tsx",
                                                    lineNumber: 65,
                                                    columnNumber: 21
                                                }, this),
                                                " ",
                                                new Date(cert.issued_date).toLocaleDateString()
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard-entity/components/CertificateList.tsx",
                                            lineNumber: 64,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: `https://sepolia.etherscan.io/tx/${cert.blockchain_tx}`,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "text-sm text-blue-600 underline block mt-2",
                                            children: "Visualizza transazione"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard-entity/components/CertificateList.tsx",
                                            lineNumber: 67,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard-entity/components/CertificateList.tsx",
                                    lineNumber: 58,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleDelete(cert.id),
                                    className: "text-red-600 hover:text-red-800",
                                    title: "Elimina certificato",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {}, void 0, false, {
                                        fileName: "[project]/src/app/dashboard-entity/components/CertificateList.tsx",
                                        lineNumber: 81,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard-entity/components/CertificateList.tsx",
                                    lineNumber: 76,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard-entity/components/CertificateList.tsx",
                            lineNumber: 57,
                            columnNumber: 15
                        }, this)
                    }, cert.id, false, {
                        fileName: "[project]/src/app/dashboard-entity/components/CertificateList.tsx",
                        lineNumber: 56,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard-entity/components/CertificateList.tsx",
                lineNumber: 54,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard-entity/components/CertificateList.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_s(CertificateList, "Yp2VQCd1qbHa0Bxjr01jhSAujJQ=");
_c = CertificateList;
var _c;
__turbopack_context__.k.register(_c, "CertificateList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/dashboard-entity/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>EntityDashboard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2d$entity$2f$components$2f$InsertCertificate$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/dashboard-entity/components/InsertCertificate.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2d$entity$2f$components$2f$CertificateList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/dashboard-entity/components/CertificateList.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function EntityDashboard() {
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('insert');
    // TODO: Sostituisci con il vero entityId preso dalla sessione o auth
    const entityId = 'INSERISCI_QUI_L_ID_ENTE';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: "w-64 bg-indigo-800 text-white p-6 flex flex-col gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold mb-6",
                        children: "UniChain - Ente"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard-entity/page.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveTab('insert'),
                        className: `flex items-center gap-2 py-2 px-4 rounded-lg ${activeTab === 'insert' ? 'bg-indigo-600' : 'hover:bg-indigo-700'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard-entity/page.tsx",
                                lineNumber: 26,
                                columnNumber: 11
                            }, this),
                            " Inserisci Certificato"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard-entity/page.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveTab('list'),
                        className: `flex items-center gap-2 py-2 px-4 rounded-lg ${activeTab === 'list' ? 'bg-indigo-600' : 'hover:bg-indigo-700'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard-entity/page.tsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this),
                            " Certificati Emessi"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard-entity/page.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "flex items-center gap-2 text-red-300 hover:text-red-100",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard-entity/page.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this),
                                " Logout"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard-entity/page.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard-entity/page.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard-entity/page.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 p-10 bg-gray-100 overflow-y-auto",
                children: [
                    activeTab === 'insert' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2d$entity$2f$components$2f$InsertCertificate$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        entityId: entityId
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard-entity/page.tsx",
                        lineNumber: 47,
                        columnNumber: 36
                    }, this),
                    activeTab === 'list' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2d$entity$2f$components$2f$CertificateList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/dashboard-entity/page.tsx",
                        lineNumber: 48,
                        columnNumber: 34
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard-entity/page.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard-entity/page.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_s(EntityDashboard, "MyNtbdFF+cnhWuRmg3WriKRROW0=");
_c = EntityDashboard;
var _c;
__turbopack_context__.k.register(_c, "EntityDashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_938c7cbc._.js.map