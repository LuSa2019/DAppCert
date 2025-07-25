(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/node_modules/ethers/node_modules/@noble/curves/esm/abstract/utils.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ // 100 lines of code in the file are duplicated from noble-hashes (utils).
// This is OK: `abstract` directory does not use noble-hashes.
// User may opt-in into using different hashing library. This way, noble-hashes
// won't be included into their bundle.
__turbopack_context__.s({
    "bitGet": (()=>bitGet),
    "bitLen": (()=>bitLen),
    "bitMask": (()=>bitMask),
    "bitSet": (()=>bitSet),
    "bytesToHex": (()=>bytesToHex),
    "bytesToNumberBE": (()=>bytesToNumberBE),
    "bytesToNumberLE": (()=>bytesToNumberLE),
    "concatBytes": (()=>concatBytes),
    "createHmacDrbg": (()=>createHmacDrbg),
    "ensureBytes": (()=>ensureBytes),
    "equalBytes": (()=>equalBytes),
    "hexToBytes": (()=>hexToBytes),
    "hexToNumber": (()=>hexToNumber),
    "numberToBytesBE": (()=>numberToBytesBE),
    "numberToBytesLE": (()=>numberToBytesLE),
    "numberToHexUnpadded": (()=>numberToHexUnpadded),
    "numberToVarBytesBE": (()=>numberToVarBytesBE),
    "utf8ToBytes": (()=>utf8ToBytes),
    "validateObject": (()=>validateObject)
});
const _0n = BigInt(0);
const _1n = BigInt(1);
const _2n = BigInt(2);
const u8a = (a)=>a instanceof Uint8Array;
const hexes = /* @__PURE__ */ Array.from({
    length: 256
}, (_, i)=>i.toString(16).padStart(2, '0'));
function bytesToHex(bytes) {
    if (!u8a(bytes)) throw new Error('Uint8Array expected');
    // pre-caching improves the speed 6x
    let hex = '';
    for(let i = 0; i < bytes.length; i++){
        hex += hexes[bytes[i]];
    }
    return hex;
}
function numberToHexUnpadded(num) {
    const hex = num.toString(16);
    return hex.length & 1 ? `0${hex}` : hex;
}
function hexToNumber(hex) {
    if (typeof hex !== 'string') throw new Error('hex string expected, got ' + typeof hex);
    // Big Endian
    return BigInt(hex === '' ? '0' : `0x${hex}`);
}
function hexToBytes(hex) {
    if (typeof hex !== 'string') throw new Error('hex string expected, got ' + typeof hex);
    const len = hex.length;
    if (len % 2) throw new Error('padded hex string expected, got unpadded hex of length ' + len);
    const array = new Uint8Array(len / 2);
    for(let i = 0; i < array.length; i++){
        const j = i * 2;
        const hexByte = hex.slice(j, j + 2);
        const byte = Number.parseInt(hexByte, 16);
        if (Number.isNaN(byte) || byte < 0) throw new Error('Invalid byte sequence');
        array[i] = byte;
    }
    return array;
}
function bytesToNumberBE(bytes) {
    return hexToNumber(bytesToHex(bytes));
}
function bytesToNumberLE(bytes) {
    if (!u8a(bytes)) throw new Error('Uint8Array expected');
    return hexToNumber(bytesToHex(Uint8Array.from(bytes).reverse()));
}
function numberToBytesBE(n, len) {
    return hexToBytes(n.toString(16).padStart(len * 2, '0'));
}
function numberToBytesLE(n, len) {
    return numberToBytesBE(n, len).reverse();
}
function numberToVarBytesBE(n) {
    return hexToBytes(numberToHexUnpadded(n));
}
function ensureBytes(title, hex, expectedLength) {
    let res;
    if (typeof hex === 'string') {
        try {
            res = hexToBytes(hex);
        } catch (e) {
            throw new Error(`${title} must be valid hex string, got "${hex}". Cause: ${e}`);
        }
    } else if (u8a(hex)) {
        // Uint8Array.from() instead of hash.slice() because node.js Buffer
        // is instance of Uint8Array, and its slice() creates **mutable** copy
        res = Uint8Array.from(hex);
    } else {
        throw new Error(`${title} must be hex string or Uint8Array`);
    }
    const len = res.length;
    if (typeof expectedLength === 'number' && len !== expectedLength) throw new Error(`${title} expected ${expectedLength} bytes, got ${len}`);
    return res;
}
function concatBytes(...arrays) {
    const r = new Uint8Array(arrays.reduce((sum, a)=>sum + a.length, 0));
    let pad = 0; // walk through each item, ensure they have proper type
    arrays.forEach((a)=>{
        if (!u8a(a)) throw new Error('Uint8Array expected');
        r.set(a, pad);
        pad += a.length;
    });
    return r;
}
function equalBytes(b1, b2) {
    // We don't care about timing attacks here
    if (b1.length !== b2.length) return false;
    for(let i = 0; i < b1.length; i++)if (b1[i] !== b2[i]) return false;
    return true;
}
function utf8ToBytes(str) {
    if (typeof str !== 'string') throw new Error(`utf8ToBytes expected string, got ${typeof str}`);
    return new Uint8Array(new TextEncoder().encode(str)); // https://bugzil.la/1681809
}
function bitLen(n) {
    let len;
    for(len = 0; n > _0n; n >>= _1n, len += 1);
    return len;
}
function bitGet(n, pos) {
    return n >> BigInt(pos) & _1n;
}
const bitSet = (n, pos, value)=>{
    return n | (value ? _1n : _0n) << BigInt(pos);
};
const bitMask = (n)=>(_2n << BigInt(n - 1)) - _1n;
// DRBG
const u8n = (data)=>new Uint8Array(data); // creates Uint8Array
const u8fr = (arr)=>Uint8Array.from(arr); // another shortcut
function createHmacDrbg(hashLen, qByteLen, hmacFn) {
    if (typeof hashLen !== 'number' || hashLen < 2) throw new Error('hashLen must be a number');
    if (typeof qByteLen !== 'number' || qByteLen < 2) throw new Error('qByteLen must be a number');
    if (typeof hmacFn !== 'function') throw new Error('hmacFn must be a function');
    // Step B, Step C: set hashLen to 8*ceil(hlen/8)
    let v = u8n(hashLen); // Minimal non-full-spec HMAC-DRBG from NIST 800-90 for RFC6979 sigs.
    let k = u8n(hashLen); // Steps B and C of RFC6979 3.2: set hashLen, in our case always same
    let i = 0; // Iterations counter, will throw when over 1000
    const reset = ()=>{
        v.fill(1);
        k.fill(0);
        i = 0;
    };
    const h = (...b)=>hmacFn(k, v, ...b); // hmac(k)(v, ...values)
    const reseed = (seed = u8n())=>{
        // HMAC-DRBG reseed() function. Steps D-G
        k = h(u8fr([
            0x00
        ]), seed); // k = hmac(k || v || 0x00 || seed)
        v = h(); // v = hmac(k || v)
        if (seed.length === 0) return;
        k = h(u8fr([
            0x01
        ]), seed); // k = hmac(k || v || 0x01 || seed)
        v = h(); // v = hmac(k || v)
    };
    const gen = ()=>{
        // HMAC-DRBG generate() function
        if (i++ >= 1000) throw new Error('drbg: tried 1000 values');
        let len = 0;
        const out = [];
        while(len < qByteLen){
            v = h();
            const sl = v.slice();
            out.push(sl);
            len += v.length;
        }
        return concatBytes(...out);
    };
    const genUntil = (seed, pred)=>{
        reset();
        reseed(seed); // Steps D-G
        let res = undefined; // Step H: grind until k is in [1..n-1]
        while(!(res = pred(gen())))reseed();
        reset();
        return res;
    };
    return genUntil;
}
// Validating curves and fields
const validatorFns = {
    bigint: (val)=>typeof val === 'bigint',
    function: (val)=>typeof val === 'function',
    boolean: (val)=>typeof val === 'boolean',
    string: (val)=>typeof val === 'string',
    stringOrUint8Array: (val)=>typeof val === 'string' || val instanceof Uint8Array,
    isSafeInteger: (val)=>Number.isSafeInteger(val),
    array: (val)=>Array.isArray(val),
    field: (val, object)=>object.Fp.isValid(val),
    hash: (val)=>typeof val === 'function' && Number.isSafeInteger(val.outputLen)
};
function validateObject(object, validators, optValidators = {}) {
    const checkField = (fieldName, type, isOptional)=>{
        const checkVal = validatorFns[type];
        if (typeof checkVal !== 'function') throw new Error(`Invalid validator "${type}", expected function`);
        const val = object[fieldName];
        if (isOptional && val === undefined) return;
        if (!checkVal(val, object)) {
            throw new Error(`Invalid param ${String(fieldName)}=${val} (${typeof val}), expected ${type}`);
        }
    };
    for (const [fieldName, type] of Object.entries(validators))checkField(fieldName, type, false);
    for (const [fieldName, type] of Object.entries(optValidators))checkField(fieldName, type, true);
    return object;
} // validate type tests
 // const o: { a: number; b: number; c: number } = { a: 1, b: 5, c: 6 };
 // const z0 = validateObject(o, { a: 'isSafeInteger' }, { c: 'bigint' }); // Ok!
 // // Should fail type-check
 // const z1 = validateObject(o, { a: 'tmp' }, { c: 'zz' });
 // const z2 = validateObject(o, { a: 'isSafeInteger' }, { c: 'zz' });
 // const z3 = validateObject(o, { test: 'boolean', z: 'bug' });
 // const z4 = validateObject(o, { a: 'boolean', z: 'bug' });
 //# sourceMappingURL=utils.js.map
}}),
"[project]/node_modules/ethers/node_modules/@noble/curves/esm/abstract/modular.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ // Utilities for modular arithmetics and finite fields
__turbopack_context__.s({
    "Field": (()=>Field),
    "FpDiv": (()=>FpDiv),
    "FpInvertBatch": (()=>FpInvertBatch),
    "FpIsSquare": (()=>FpIsSquare),
    "FpPow": (()=>FpPow),
    "FpSqrt": (()=>FpSqrt),
    "FpSqrtEven": (()=>FpSqrtEven),
    "FpSqrtOdd": (()=>FpSqrtOdd),
    "getFieldBytesLength": (()=>getFieldBytesLength),
    "getMinHashLength": (()=>getMinHashLength),
    "hashToPrivateScalar": (()=>hashToPrivateScalar),
    "invert": (()=>invert),
    "isNegativeLE": (()=>isNegativeLE),
    "mapHashToField": (()=>mapHashToField),
    "mod": (()=>mod),
    "nLength": (()=>nLength),
    "pow": (()=>pow),
    "pow2": (()=>pow2),
    "tonelliShanks": (()=>tonelliShanks),
    "validateField": (()=>validateField)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ethers/node_modules/@noble/curves/esm/abstract/utils.js [app-client] (ecmascript)");
;
// prettier-ignore
const _0n = BigInt(0), _1n = BigInt(1), _2n = BigInt(2), _3n = BigInt(3);
// prettier-ignore
const _4n = BigInt(4), _5n = BigInt(5), _8n = BigInt(8);
// prettier-ignore
const _9n = BigInt(9), _16n = BigInt(16);
function mod(a, b) {
    const result = a % b;
    return result >= _0n ? result : b + result;
}
function pow(num, power, modulo) {
    if (modulo <= _0n || power < _0n) throw new Error('Expected power/modulo > 0');
    if (modulo === _1n) return _0n;
    let res = _1n;
    while(power > _0n){
        if (power & _1n) res = res * num % modulo;
        num = num * num % modulo;
        power >>= _1n;
    }
    return res;
}
function pow2(x, power, modulo) {
    let res = x;
    while(power-- > _0n){
        res *= res;
        res %= modulo;
    }
    return res;
}
function invert(number, modulo) {
    if (number === _0n || modulo <= _0n) {
        throw new Error(`invert: expected positive integers, got n=${number} mod=${modulo}`);
    }
    // Euclidean GCD https://brilliant.org/wiki/extended-euclidean-algorithm/
    // Fermat's little theorem "CT-like" version inv(n) = n^(m-2) mod m is 30x slower.
    let a = mod(number, modulo);
    let b = modulo;
    // prettier-ignore
    let x = _0n, y = _1n, u = _1n, v = _0n;
    while(a !== _0n){
        // JIT applies optimization if those two lines follow each other
        const q = b / a;
        const r = b % a;
        const m = x - u * q;
        const n = y - v * q;
        // prettier-ignore
        b = a, a = r, x = u, y = v, u = m, v = n;
    }
    const gcd = b;
    if (gcd !== _1n) throw new Error('invert: does not exist');
    return mod(x, modulo);
}
function tonelliShanks(P) {
    // Legendre constant: used to calculate Legendre symbol (a | p),
    // which denotes the value of a^((p-1)/2) (mod p).
    // (a | p) ≡ 1    if a is a square (mod p)
    // (a | p) ≡ -1   if a is not a square (mod p)
    // (a | p) ≡ 0    if a ≡ 0 (mod p)
    const legendreC = (P - _1n) / _2n;
    let Q, S, Z;
    // Step 1: By factoring out powers of 2 from p - 1,
    // find q and s such that p - 1 = q*(2^s) with q odd
    for(Q = P - _1n, S = 0; Q % _2n === _0n; Q /= _2n, S++);
    // Step 2: Select a non-square z such that (z | p) ≡ -1 and set c ≡ zq
    for(Z = _2n; Z < P && pow(Z, legendreC, P) !== P - _1n; Z++);
    // Fast-path
    if (S === 1) {
        const p1div4 = (P + _1n) / _4n;
        return function tonelliFast(Fp, n) {
            const root = Fp.pow(n, p1div4);
            if (!Fp.eql(Fp.sqr(root), n)) throw new Error('Cannot find square root');
            return root;
        };
    }
    // Slow-path
    const Q1div2 = (Q + _1n) / _2n;
    return function tonelliSlow(Fp, n) {
        // Step 0: Check that n is indeed a square: (n | p) should not be ≡ -1
        if (Fp.pow(n, legendreC) === Fp.neg(Fp.ONE)) throw new Error('Cannot find square root');
        let r = S;
        // TODO: will fail at Fp2/etc
        let g = Fp.pow(Fp.mul(Fp.ONE, Z), Q); // will update both x and b
        let x = Fp.pow(n, Q1div2); // first guess at the square root
        let b = Fp.pow(n, Q); // first guess at the fudge factor
        while(!Fp.eql(b, Fp.ONE)){
            if (Fp.eql(b, Fp.ZERO)) return Fp.ZERO; // https://en.wikipedia.org/wiki/Tonelli%E2%80%93Shanks_algorithm (4. If t = 0, return r = 0)
            // Find m such b^(2^m)==1
            let m = 1;
            for(let t2 = Fp.sqr(b); m < r; m++){
                if (Fp.eql(t2, Fp.ONE)) break;
                t2 = Fp.sqr(t2); // t2 *= t2
            }
            // NOTE: r-m-1 can be bigger than 32, need to convert to bigint before shift, otherwise there will be overflow
            const ge = Fp.pow(g, _1n << BigInt(r - m - 1)); // ge = 2^(r-m-1)
            g = Fp.sqr(ge); // g = ge * ge
            x = Fp.mul(x, ge); // x *= ge
            b = Fp.mul(b, g); // b *= g
            r = m;
        }
        return x;
    };
}
function FpSqrt(P) {
    // NOTE: different algorithms can give different roots, it is up to user to decide which one they want.
    // For example there is FpSqrtOdd/FpSqrtEven to choice root based on oddness (used for hash-to-curve).
    // P ≡ 3 (mod 4)
    // √n = n^((P+1)/4)
    if (P % _4n === _3n) {
        // Not all roots possible!
        // const ORDER =
        //   0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffaaabn;
        // const NUM = 72057594037927816n;
        const p1div4 = (P + _1n) / _4n;
        return function sqrt3mod4(Fp, n) {
            const root = Fp.pow(n, p1div4);
            // Throw if root**2 != n
            if (!Fp.eql(Fp.sqr(root), n)) throw new Error('Cannot find square root');
            return root;
        };
    }
    // Atkin algorithm for q ≡ 5 (mod 8), https://eprint.iacr.org/2012/685.pdf (page 10)
    if (P % _8n === _5n) {
        const c1 = (P - _5n) / _8n;
        return function sqrt5mod8(Fp, n) {
            const n2 = Fp.mul(n, _2n);
            const v = Fp.pow(n2, c1);
            const nv = Fp.mul(n, v);
            const i = Fp.mul(Fp.mul(nv, _2n), v);
            const root = Fp.mul(nv, Fp.sub(i, Fp.ONE));
            if (!Fp.eql(Fp.sqr(root), n)) throw new Error('Cannot find square root');
            return root;
        };
    }
    // P ≡ 9 (mod 16)
    if (P % _16n === _9n) {
    // NOTE: tonelli is too slow for bls-Fp2 calculations even on start
    // Means we cannot use sqrt for constants at all!
    //
    // const c1 = Fp.sqrt(Fp.negate(Fp.ONE)); //  1. c1 = sqrt(-1) in F, i.e., (c1^2) == -1 in F
    // const c2 = Fp.sqrt(c1);                //  2. c2 = sqrt(c1) in F, i.e., (c2^2) == c1 in F
    // const c3 = Fp.sqrt(Fp.negate(c1));     //  3. c3 = sqrt(-c1) in F, i.e., (c3^2) == -c1 in F
    // const c4 = (P + _7n) / _16n;           //  4. c4 = (q + 7) / 16        # Integer arithmetic
    // sqrt = (x) => {
    //   let tv1 = Fp.pow(x, c4);             //  1. tv1 = x^c4
    //   let tv2 = Fp.mul(c1, tv1);           //  2. tv2 = c1 * tv1
    //   const tv3 = Fp.mul(c2, tv1);         //  3. tv3 = c2 * tv1
    //   let tv4 = Fp.mul(c3, tv1);           //  4. tv4 = c3 * tv1
    //   const e1 = Fp.equals(Fp.square(tv2), x); //  5.  e1 = (tv2^2) == x
    //   const e2 = Fp.equals(Fp.square(tv3), x); //  6.  e2 = (tv3^2) == x
    //   tv1 = Fp.cmov(tv1, tv2, e1); //  7. tv1 = CMOV(tv1, tv2, e1)  # Select tv2 if (tv2^2) == x
    //   tv2 = Fp.cmov(tv4, tv3, e2); //  8. tv2 = CMOV(tv4, tv3, e2)  # Select tv3 if (tv3^2) == x
    //   const e3 = Fp.equals(Fp.square(tv2), x); //  9.  e3 = (tv2^2) == x
    //   return Fp.cmov(tv1, tv2, e3); //  10.  z = CMOV(tv1, tv2, e3)  # Select the sqrt from tv1 and tv2
    // }
    }
    // Other cases: Tonelli-Shanks algorithm
    return tonelliShanks(P);
}
const isNegativeLE = (num, modulo)=>(mod(num, modulo) & _1n) === _1n;
// prettier-ignore
const FIELD_FIELDS = [
    'create',
    'isValid',
    'is0',
    'neg',
    'inv',
    'sqrt',
    'sqr',
    'eql',
    'add',
    'sub',
    'mul',
    'pow',
    'div',
    'addN',
    'subN',
    'mulN',
    'sqrN'
];
function validateField(field) {
    const initial = {
        ORDER: 'bigint',
        MASK: 'bigint',
        BYTES: 'isSafeInteger',
        BITS: 'isSafeInteger'
    };
    const opts = FIELD_FIELDS.reduce((map, val)=>{
        map[val] = 'function';
        return map;
    }, initial);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateObject"])(field, opts);
}
function FpPow(f, num, power) {
    // Should have same speed as pow for bigints
    // TODO: benchmark!
    if (power < _0n) throw new Error('Expected power > 0');
    if (power === _0n) return f.ONE;
    if (power === _1n) return num;
    let p = f.ONE;
    let d = num;
    while(power > _0n){
        if (power & _1n) p = f.mul(p, d);
        d = f.sqr(d);
        power >>= _1n;
    }
    return p;
}
function FpInvertBatch(f, nums) {
    const tmp = new Array(nums.length);
    // Walk from first to last, multiply them by each other MOD p
    const lastMultiplied = nums.reduce((acc, num, i)=>{
        if (f.is0(num)) return acc;
        tmp[i] = acc;
        return f.mul(acc, num);
    }, f.ONE);
    // Invert last element
    const inverted = f.inv(lastMultiplied);
    // Walk from last to first, multiply them by inverted each other MOD p
    nums.reduceRight((acc, num, i)=>{
        if (f.is0(num)) return acc;
        tmp[i] = f.mul(acc, tmp[i]);
        return f.mul(acc, num);
    }, inverted);
    return tmp;
}
function FpDiv(f, lhs, rhs) {
    return f.mul(lhs, typeof rhs === 'bigint' ? invert(rhs, f.ORDER) : f.inv(rhs));
}
function FpIsSquare(f) {
    const legendreConst = (f.ORDER - _1n) / _2n; // Integer arithmetic
    return (x)=>{
        const p = f.pow(x, legendreConst);
        return f.eql(p, f.ZERO) || f.eql(p, f.ONE);
    };
}
function nLength(n, nBitLength) {
    // Bit size, byte size of CURVE.n
    const _nBitLength = nBitLength !== undefined ? nBitLength : n.toString(2).length;
    const nByteLength = Math.ceil(_nBitLength / 8);
    return {
        nBitLength: _nBitLength,
        nByteLength
    };
}
function Field(ORDER, bitLen, isLE = false, redef = {}) {
    if (ORDER <= _0n) throw new Error(`Expected Field ORDER > 0, got ${ORDER}`);
    const { nBitLength: BITS, nByteLength: BYTES } = nLength(ORDER, bitLen);
    if (BYTES > 2048) throw new Error('Field lengths over 2048 bytes are not supported');
    const sqrtP = FpSqrt(ORDER);
    const f = Object.freeze({
        ORDER,
        BITS,
        BYTES,
        MASK: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bitMask"])(BITS),
        ZERO: _0n,
        ONE: _1n,
        create: (num)=>mod(num, ORDER),
        isValid: (num)=>{
            if (typeof num !== 'bigint') throw new Error(`Invalid field element: expected bigint, got ${typeof num}`);
            return _0n <= num && num < ORDER; // 0 is valid element, but it's not invertible
        },
        is0: (num)=>num === _0n,
        isOdd: (num)=>(num & _1n) === _1n,
        neg: (num)=>mod(-num, ORDER),
        eql: (lhs, rhs)=>lhs === rhs,
        sqr: (num)=>mod(num * num, ORDER),
        add: (lhs, rhs)=>mod(lhs + rhs, ORDER),
        sub: (lhs, rhs)=>mod(lhs - rhs, ORDER),
        mul: (lhs, rhs)=>mod(lhs * rhs, ORDER),
        pow: (num, power)=>FpPow(f, num, power),
        div: (lhs, rhs)=>mod(lhs * invert(rhs, ORDER), ORDER),
        // Same as above, but doesn't normalize
        sqrN: (num)=>num * num,
        addN: (lhs, rhs)=>lhs + rhs,
        subN: (lhs, rhs)=>lhs - rhs,
        mulN: (lhs, rhs)=>lhs * rhs,
        inv: (num)=>invert(num, ORDER),
        sqrt: redef.sqrt || ((n)=>sqrtP(f, n)),
        invertBatch: (lst)=>FpInvertBatch(f, lst),
        // TODO: do we really need constant cmov?
        // We don't have const-time bigints anyway, so probably will be not very useful
        cmov: (a, b, c)=>c ? b : a,
        toBytes: (num)=>isLE ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToBytesLE"])(num, BYTES) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToBytesBE"])(num, BYTES),
        fromBytes: (bytes)=>{
            if (bytes.length !== BYTES) throw new Error(`Fp.fromBytes: expected ${BYTES}, got ${bytes.length}`);
            return isLE ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToNumberLE"])(bytes) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToNumberBE"])(bytes);
        }
    });
    return Object.freeze(f);
}
function FpSqrtOdd(Fp, elm) {
    if (!Fp.isOdd) throw new Error(`Field doesn't have isOdd`);
    const root = Fp.sqrt(elm);
    return Fp.isOdd(root) ? root : Fp.neg(root);
}
function FpSqrtEven(Fp, elm) {
    if (!Fp.isOdd) throw new Error(`Field doesn't have isOdd`);
    const root = Fp.sqrt(elm);
    return Fp.isOdd(root) ? Fp.neg(root) : root;
}
function hashToPrivateScalar(hash, groupOrder, isLE = false) {
    hash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensureBytes"])('privateHash', hash);
    const hashLen = hash.length;
    const minLen = nLength(groupOrder).nByteLength + 8;
    if (minLen < 24 || hashLen < minLen || hashLen > 1024) throw new Error(`hashToPrivateScalar: expected ${minLen}-1024 bytes of input, got ${hashLen}`);
    const num = isLE ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToNumberLE"])(hash) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToNumberBE"])(hash);
    return mod(num, groupOrder - _1n) + _1n;
}
function getFieldBytesLength(fieldOrder) {
    if (typeof fieldOrder !== 'bigint') throw new Error('field order must be bigint');
    const bitLength = fieldOrder.toString(2).length;
    return Math.ceil(bitLength / 8);
}
function getMinHashLength(fieldOrder) {
    const length = getFieldBytesLength(fieldOrder);
    return length + Math.ceil(length / 2);
}
function mapHashToField(key, fieldOrder, isLE = false) {
    const len = key.length;
    const fieldLen = getFieldBytesLength(fieldOrder);
    const minLen = getMinHashLength(fieldOrder);
    // No small numbers: need to understand bias story. No huge numbers: easier to detect JS timings.
    if (len < 16 || len < minLen || len > 1024) throw new Error(`expected ${minLen}-1024 bytes of input, got ${len}`);
    const num = isLE ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToNumberBE"])(key) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToNumberLE"])(key);
    // `mod(x, 11)` can sometimes produce 0. `mod(x, 10) + 1` is the same, but no 0
    const reduced = mod(num, fieldOrder - _1n) + _1n;
    return isLE ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToBytesLE"])(reduced, fieldLen) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToBytesBE"])(reduced, fieldLen);
} //# sourceMappingURL=modular.js.map
}}),
"[project]/node_modules/ethers/node_modules/@noble/curves/esm/abstract/curve.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ // Abelian group utilities
__turbopack_context__.s({
    "validateBasic": (()=>validateBasic),
    "wNAF": (()=>wNAF)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$modular$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ethers/node_modules/@noble/curves/esm/abstract/modular.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ethers/node_modules/@noble/curves/esm/abstract/utils.js [app-client] (ecmascript)");
;
;
const _0n = BigInt(0);
const _1n = BigInt(1);
function wNAF(c, bits) {
    const constTimeNegate = (condition, item)=>{
        const neg = item.negate();
        return condition ? neg : item;
    };
    const opts = (W)=>{
        const windows = Math.ceil(bits / W) + 1; // +1, because
        const windowSize = 2 ** (W - 1); // -1 because we skip zero
        return {
            windows,
            windowSize
        };
    };
    return {
        constTimeNegate,
        // non-const time multiplication ladder
        unsafeLadder (elm, n) {
            let p = c.ZERO;
            let d = elm;
            while(n > _0n){
                if (n & _1n) p = p.add(d);
                d = d.double();
                n >>= _1n;
            }
            return p;
        },
        /**
         * Creates a wNAF precomputation window. Used for caching.
         * Default window size is set by `utils.precompute()` and is equal to 8.
         * Number of precomputed points depends on the curve size:
         * 2^(𝑊−1) * (Math.ceil(𝑛 / 𝑊) + 1), where:
         * - 𝑊 is the window size
         * - 𝑛 is the bitlength of the curve order.
         * For a 256-bit curve and window size 8, the number of precomputed points is 128 * 33 = 4224.
         * @returns precomputed point tables flattened to a single array
         */ precomputeWindow (elm, W) {
            const { windows, windowSize } = opts(W);
            const points = [];
            let p = elm;
            let base = p;
            for(let window = 0; window < windows; window++){
                base = p;
                points.push(base);
                // =1, because we skip zero
                for(let i = 1; i < windowSize; i++){
                    base = base.add(p);
                    points.push(base);
                }
                p = base.double();
            }
            return points;
        },
        /**
         * Implements ec multiplication using precomputed tables and w-ary non-adjacent form.
         * @param W window size
         * @param precomputes precomputed tables
         * @param n scalar (we don't check here, but should be less than curve order)
         * @returns real and fake (for const-time) points
         */ wNAF (W, precomputes, n) {
            // TODO: maybe check that scalar is less than group order? wNAF behavious is undefined otherwise
            // But need to carefully remove other checks before wNAF. ORDER == bits here
            const { windows, windowSize } = opts(W);
            let p = c.ZERO;
            let f = c.BASE;
            const mask = BigInt(2 ** W - 1); // Create mask with W ones: 0b1111 for W=4 etc.
            const maxNumber = 2 ** W;
            const shiftBy = BigInt(W);
            for(let window = 0; window < windows; window++){
                const offset = window * windowSize;
                // Extract W bits.
                let wbits = Number(n & mask);
                // Shift number by W bits.
                n >>= shiftBy;
                // If the bits are bigger than max size, we'll split those.
                // +224 => 256 - 32
                if (wbits > windowSize) {
                    wbits -= maxNumber;
                    n += _1n;
                }
                // This code was first written with assumption that 'f' and 'p' will never be infinity point:
                // since each addition is multiplied by 2 ** W, it cannot cancel each other. However,
                // there is negate now: it is possible that negated element from low value
                // would be the same as high element, which will create carry into next window.
                // It's not obvious how this can fail, but still worth investigating later.
                // Check if we're onto Zero point.
                // Add random point inside current window to f.
                const offset1 = offset;
                const offset2 = offset + Math.abs(wbits) - 1; // -1 because we skip zero
                const cond1 = window % 2 !== 0;
                const cond2 = wbits < 0;
                if (wbits === 0) {
                    // The most important part for const-time getPublicKey
                    f = f.add(constTimeNegate(cond1, precomputes[offset1]));
                } else {
                    p = p.add(constTimeNegate(cond2, precomputes[offset2]));
                }
            }
            // JIT-compiler should not eliminate f here, since it will later be used in normalizeZ()
            // Even if the variable is still unused, there are some checks which will
            // throw an exception, so compiler needs to prove they won't happen, which is hard.
            // At this point there is a way to F be infinity-point even if p is not,
            // which makes it less const-time: around 1 bigint multiply.
            return {
                p,
                f
            };
        },
        wNAFCached (P, precomputesMap, n, transform) {
            // @ts-ignore
            const W = P._WINDOW_SIZE || 1;
            // Calculate precomputes on a first run, reuse them after
            let comp = precomputesMap.get(P);
            if (!comp) {
                comp = this.precomputeWindow(P, W);
                if (W !== 1) {
                    precomputesMap.set(P, transform(comp));
                }
            }
            return this.wNAF(W, comp, n);
        }
    };
}
function validateBasic(curve) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$modular$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateField"])(curve.Fp);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateObject"])(curve, {
        n: 'bigint',
        h: 'bigint',
        Gx: 'field',
        Gy: 'field'
    }, {
        nBitLength: 'isSafeInteger',
        nByteLength: 'isSafeInteger'
    });
    // Set defaults
    return Object.freeze({
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$modular$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nLength"])(curve.n, curve.nBitLength),
        ...curve,
        ...{
            p: curve.Fp.ORDER
        }
    });
} //# sourceMappingURL=curve.js.map
}}),
"[project]/node_modules/ethers/node_modules/@noble/curves/esm/abstract/weierstrass.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ // Short Weierstrass curve. The formula is: y² = x³ + ax + b
__turbopack_context__.s({
    "DER": (()=>DER),
    "SWUFpSqrtRatio": (()=>SWUFpSqrtRatio),
    "mapToCurveSimpleSWU": (()=>mapToCurveSimpleSWU),
    "weierstrass": (()=>weierstrass),
    "weierstrassPoints": (()=>weierstrassPoints)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$modular$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ethers/node_modules/@noble/curves/esm/abstract/modular.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ethers/node_modules/@noble/curves/esm/abstract/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$curve$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ethers/node_modules/@noble/curves/esm/abstract/curve.js [app-client] (ecmascript)");
;
;
;
;
function validatePointOpts(curve) {
    const opts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$curve$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateBasic"])(curve);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.validateObject(opts, {
        a: 'field',
        b: 'field'
    }, {
        allowedPrivateKeyLengths: 'array',
        wrapPrivateKey: 'boolean',
        isTorsionFree: 'function',
        clearCofactor: 'function',
        allowInfinityPoint: 'boolean',
        fromBytes: 'function',
        toBytes: 'function'
    });
    const { endo, Fp, a } = opts;
    if (endo) {
        if (!Fp.eql(a, Fp.ZERO)) {
            throw new Error('Endomorphism can only be defined for Koblitz curves that have a=0');
        }
        if (typeof endo !== 'object' || typeof endo.beta !== 'bigint' || typeof endo.splitScalar !== 'function') {
            throw new Error('Expected endomorphism with beta: bigint and splitScalar: function');
        }
    }
    return Object.freeze({
        ...opts
    });
}
// ASN.1 DER encoding utilities
const { bytesToNumberBE: b2n, hexToBytes: h2b } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__;
const DER = {
    // asn.1 DER encoding utils
    Err: class DERErr extends Error {
        constructor(m = ''){
            super(m);
        }
    },
    _parseInt (data) {
        const { Err: E } = DER;
        if (data.length < 2 || data[0] !== 0x02) throw new E('Invalid signature integer tag');
        const len = data[1];
        const res = data.subarray(2, len + 2);
        if (!len || res.length !== len) throw new E('Invalid signature integer: wrong length');
        // https://crypto.stackexchange.com/a/57734 Leftmost bit of first byte is 'negative' flag,
        // since we always use positive integers here. It must always be empty:
        // - add zero byte if exists
        // - if next byte doesn't have a flag, leading zero is not allowed (minimal encoding)
        if (res[0] & 0b10000000) throw new E('Invalid signature integer: negative');
        if (res[0] === 0x00 && !(res[1] & 0b10000000)) throw new E('Invalid signature integer: unnecessary leading zero');
        return {
            d: b2n(res),
            l: data.subarray(len + 2)
        }; // d is data, l is left
    },
    toSig (hex) {
        // parse DER signature
        const { Err: E } = DER;
        const data = typeof hex === 'string' ? h2b(hex) : hex;
        if (!(data instanceof Uint8Array)) throw new Error('ui8a expected');
        let l = data.length;
        if (l < 2 || data[0] != 0x30) throw new E('Invalid signature tag');
        if (data[1] !== l - 2) throw new E('Invalid signature: incorrect length');
        const { d: r, l: sBytes } = DER._parseInt(data.subarray(2));
        const { d: s, l: rBytesLeft } = DER._parseInt(sBytes);
        if (rBytesLeft.length) throw new E('Invalid signature: left bytes after parsing');
        return {
            r,
            s
        };
    },
    hexFromSig (sig) {
        // Add leading zero if first byte has negative bit enabled. More details in '_parseInt'
        const slice = (s)=>Number.parseInt(s[0], 16) & 0b1000 ? '00' + s : s;
        const h = (num)=>{
            const hex = num.toString(16);
            return hex.length & 1 ? `0${hex}` : hex;
        };
        const s = slice(h(sig.s));
        const r = slice(h(sig.r));
        const shl = s.length / 2;
        const rhl = r.length / 2;
        const sl = h(shl);
        const rl = h(rhl);
        return `30${h(rhl + shl + 4)}02${rl}${r}02${sl}${s}`;
    }
};
// Be friendly to bad ECMAScript parsers by not using bigint literals
// prettier-ignore
const _0n = BigInt(0), _1n = BigInt(1), _2n = BigInt(2), _3n = BigInt(3), _4n = BigInt(4);
function weierstrassPoints(opts) {
    const CURVE = validatePointOpts(opts);
    const { Fp } = CURVE; // All curves has same field / group length as for now, but they can differ
    const toBytes = CURVE.toBytes || ((_c, point, _isCompressed)=>{
        const a = point.toAffine();
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.concatBytes(Uint8Array.from([
            0x04
        ]), Fp.toBytes(a.x), Fp.toBytes(a.y));
    });
    const fromBytes = CURVE.fromBytes || ((bytes)=>{
        // const head = bytes[0];
        const tail = bytes.subarray(1);
        // if (head !== 0x04) throw new Error('Only non-compressed encoding is supported');
        const x = Fp.fromBytes(tail.subarray(0, Fp.BYTES));
        const y = Fp.fromBytes(tail.subarray(Fp.BYTES, 2 * Fp.BYTES));
        return {
            x,
            y
        };
    });
    /**
     * y² = x³ + ax + b: Short weierstrass curve formula
     * @returns y²
     */ function weierstrassEquation(x) {
        const { a, b } = CURVE;
        const x2 = Fp.sqr(x); // x * x
        const x3 = Fp.mul(x2, x); // x2 * x
        return Fp.add(Fp.add(x3, Fp.mul(x, a)), b); // x3 + a * x + b
    }
    // Validate whether the passed curve params are valid.
    // We check if curve equation works for generator point.
    // `assertValidity()` won't work: `isTorsionFree()` is not available at this point in bls12-381.
    // ProjectivePoint class has not been initialized yet.
    if (!Fp.eql(Fp.sqr(CURVE.Gy), weierstrassEquation(CURVE.Gx))) throw new Error('bad generator point: equation left != right');
    // Valid group elements reside in range 1..n-1
    function isWithinCurveOrder(num) {
        return typeof num === 'bigint' && _0n < num && num < CURVE.n;
    }
    function assertGE(num) {
        if (!isWithinCurveOrder(num)) throw new Error('Expected valid bigint: 0 < bigint < curve.n');
    }
    // Validates if priv key is valid and converts it to bigint.
    // Supports options allowedPrivateKeyLengths and wrapPrivateKey.
    function normPrivateKeyToScalar(key) {
        const { allowedPrivateKeyLengths: lengths, nByteLength, wrapPrivateKey, n } = CURVE;
        if (lengths && typeof key !== 'bigint') {
            if (key instanceof Uint8Array) key = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.bytesToHex(key);
            // Normalize to hex string, pad. E.g. P521 would norm 130-132 char hex to 132-char bytes
            if (typeof key !== 'string' || !lengths.includes(key.length)) throw new Error('Invalid key');
            key = key.padStart(nByteLength * 2, '0');
        }
        let num;
        try {
            num = typeof key === 'bigint' ? key : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.bytesToNumberBE((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensureBytes"])('private key', key, nByteLength));
        } catch (error) {
            throw new Error(`private key must be ${nByteLength} bytes, hex or bigint, not ${typeof key}`);
        }
        if (wrapPrivateKey) num = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$modular$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mod"])(num, n); // disabled by default, enabled for BLS
        assertGE(num); // num in range [1..N-1]
        return num;
    }
    const pointPrecomputes = new Map();
    function assertPrjPoint(other) {
        if (!(other instanceof Point)) throw new Error('ProjectivePoint expected');
    }
    /**
     * Projective Point works in 3d / projective (homogeneous) coordinates: (x, y, z) ∋ (x=x/z, y=y/z)
     * Default Point works in 2d / affine coordinates: (x, y)
     * We're doing calculations in projective, because its operations don't require costly inversion.
     */ class Point {
        constructor(px, py, pz){
            this.px = px;
            this.py = py;
            this.pz = pz;
            if (px == null || !Fp.isValid(px)) throw new Error('x required');
            if (py == null || !Fp.isValid(py)) throw new Error('y required');
            if (pz == null || !Fp.isValid(pz)) throw new Error('z required');
        }
        // Does not validate if the point is on-curve.
        // Use fromHex instead, or call assertValidity() later.
        static fromAffine(p) {
            const { x, y } = p || {};
            if (!p || !Fp.isValid(x) || !Fp.isValid(y)) throw new Error('invalid affine point');
            if (p instanceof Point) throw new Error('projective point not allowed');
            const is0 = (i)=>Fp.eql(i, Fp.ZERO);
            // fromAffine(x:0, y:0) would produce (x:0, y:0, z:1), but we need (x:0, y:1, z:0)
            if (is0(x) && is0(y)) return Point.ZERO;
            return new Point(x, y, Fp.ONE);
        }
        get x() {
            return this.toAffine().x;
        }
        get y() {
            return this.toAffine().y;
        }
        /**
         * Takes a bunch of Projective Points but executes only one
         * inversion on all of them. Inversion is very slow operation,
         * so this improves performance massively.
         * Optimization: converts a list of projective points to a list of identical points with Z=1.
         */ static normalizeZ(points) {
            const toInv = Fp.invertBatch(points.map((p)=>p.pz));
            return points.map((p, i)=>p.toAffine(toInv[i])).map(Point.fromAffine);
        }
        /**
         * Converts hash string or Uint8Array to Point.
         * @param hex short/long ECDSA hex
         */ static fromHex(hex) {
            const P = Point.fromAffine(fromBytes((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensureBytes"])('pointHex', hex)));
            P.assertValidity();
            return P;
        }
        // Multiplies generator point by privateKey.
        static fromPrivateKey(privateKey) {
            return Point.BASE.multiply(normPrivateKeyToScalar(privateKey));
        }
        // "Private method", don't use it directly
        _setWindowSize(windowSize) {
            this._WINDOW_SIZE = windowSize;
            pointPrecomputes.delete(this);
        }
        // A point on curve is valid if it conforms to equation.
        assertValidity() {
            if (this.is0()) {
                // (0, 1, 0) aka ZERO is invalid in most contexts.
                // In BLS, ZERO can be serialized, so we allow it.
                // (0, 0, 0) is wrong representation of ZERO and is always invalid.
                if (CURVE.allowInfinityPoint && !Fp.is0(this.py)) return;
                throw new Error('bad point: ZERO');
            }
            // Some 3rd-party test vectors require different wording between here & `fromCompressedHex`
            const { x, y } = this.toAffine();
            // Check if x, y are valid field elements
            if (!Fp.isValid(x) || !Fp.isValid(y)) throw new Error('bad point: x or y not FE');
            const left = Fp.sqr(y); // y²
            const right = weierstrassEquation(x); // x³ + ax + b
            if (!Fp.eql(left, right)) throw new Error('bad point: equation left != right');
            if (!this.isTorsionFree()) throw new Error('bad point: not in prime-order subgroup');
        }
        hasEvenY() {
            const { y } = this.toAffine();
            if (Fp.isOdd) return !Fp.isOdd(y);
            throw new Error("Field doesn't support isOdd");
        }
        /**
         * Compare one point to another.
         */ equals(other) {
            assertPrjPoint(other);
            const { px: X1, py: Y1, pz: Z1 } = this;
            const { px: X2, py: Y2, pz: Z2 } = other;
            const U1 = Fp.eql(Fp.mul(X1, Z2), Fp.mul(X2, Z1));
            const U2 = Fp.eql(Fp.mul(Y1, Z2), Fp.mul(Y2, Z1));
            return U1 && U2;
        }
        /**
         * Flips point to one corresponding to (x, -y) in Affine coordinates.
         */ negate() {
            return new Point(this.px, Fp.neg(this.py), this.pz);
        }
        // Renes-Costello-Batina exception-free doubling formula.
        // There is 30% faster Jacobian formula, but it is not complete.
        // https://eprint.iacr.org/2015/1060, algorithm 3
        // Cost: 8M + 3S + 3*a + 2*b3 + 15add.
        double() {
            const { a, b } = CURVE;
            const b3 = Fp.mul(b, _3n);
            const { px: X1, py: Y1, pz: Z1 } = this;
            let X3 = Fp.ZERO, Y3 = Fp.ZERO, Z3 = Fp.ZERO; // prettier-ignore
            let t0 = Fp.mul(X1, X1); // step 1
            let t1 = Fp.mul(Y1, Y1);
            let t2 = Fp.mul(Z1, Z1);
            let t3 = Fp.mul(X1, Y1);
            t3 = Fp.add(t3, t3); // step 5
            Z3 = Fp.mul(X1, Z1);
            Z3 = Fp.add(Z3, Z3);
            X3 = Fp.mul(a, Z3);
            Y3 = Fp.mul(b3, t2);
            Y3 = Fp.add(X3, Y3); // step 10
            X3 = Fp.sub(t1, Y3);
            Y3 = Fp.add(t1, Y3);
            Y3 = Fp.mul(X3, Y3);
            X3 = Fp.mul(t3, X3);
            Z3 = Fp.mul(b3, Z3); // step 15
            t2 = Fp.mul(a, t2);
            t3 = Fp.sub(t0, t2);
            t3 = Fp.mul(a, t3);
            t3 = Fp.add(t3, Z3);
            Z3 = Fp.add(t0, t0); // step 20
            t0 = Fp.add(Z3, t0);
            t0 = Fp.add(t0, t2);
            t0 = Fp.mul(t0, t3);
            Y3 = Fp.add(Y3, t0);
            t2 = Fp.mul(Y1, Z1); // step 25
            t2 = Fp.add(t2, t2);
            t0 = Fp.mul(t2, t3);
            X3 = Fp.sub(X3, t0);
            Z3 = Fp.mul(t2, t1);
            Z3 = Fp.add(Z3, Z3); // step 30
            Z3 = Fp.add(Z3, Z3);
            return new Point(X3, Y3, Z3);
        }
        // Renes-Costello-Batina exception-free addition formula.
        // There is 30% faster Jacobian formula, but it is not complete.
        // https://eprint.iacr.org/2015/1060, algorithm 1
        // Cost: 12M + 0S + 3*a + 3*b3 + 23add.
        add(other) {
            assertPrjPoint(other);
            const { px: X1, py: Y1, pz: Z1 } = this;
            const { px: X2, py: Y2, pz: Z2 } = other;
            let X3 = Fp.ZERO, Y3 = Fp.ZERO, Z3 = Fp.ZERO; // prettier-ignore
            const a = CURVE.a;
            const b3 = Fp.mul(CURVE.b, _3n);
            let t0 = Fp.mul(X1, X2); // step 1
            let t1 = Fp.mul(Y1, Y2);
            let t2 = Fp.mul(Z1, Z2);
            let t3 = Fp.add(X1, Y1);
            let t4 = Fp.add(X2, Y2); // step 5
            t3 = Fp.mul(t3, t4);
            t4 = Fp.add(t0, t1);
            t3 = Fp.sub(t3, t4);
            t4 = Fp.add(X1, Z1);
            let t5 = Fp.add(X2, Z2); // step 10
            t4 = Fp.mul(t4, t5);
            t5 = Fp.add(t0, t2);
            t4 = Fp.sub(t4, t5);
            t5 = Fp.add(Y1, Z1);
            X3 = Fp.add(Y2, Z2); // step 15
            t5 = Fp.mul(t5, X3);
            X3 = Fp.add(t1, t2);
            t5 = Fp.sub(t5, X3);
            Z3 = Fp.mul(a, t4);
            X3 = Fp.mul(b3, t2); // step 20
            Z3 = Fp.add(X3, Z3);
            X3 = Fp.sub(t1, Z3);
            Z3 = Fp.add(t1, Z3);
            Y3 = Fp.mul(X3, Z3);
            t1 = Fp.add(t0, t0); // step 25
            t1 = Fp.add(t1, t0);
            t2 = Fp.mul(a, t2);
            t4 = Fp.mul(b3, t4);
            t1 = Fp.add(t1, t2);
            t2 = Fp.sub(t0, t2); // step 30
            t2 = Fp.mul(a, t2);
            t4 = Fp.add(t4, t2);
            t0 = Fp.mul(t1, t4);
            Y3 = Fp.add(Y3, t0);
            t0 = Fp.mul(t5, t4); // step 35
            X3 = Fp.mul(t3, X3);
            X3 = Fp.sub(X3, t0);
            t0 = Fp.mul(t3, t1);
            Z3 = Fp.mul(t5, Z3);
            Z3 = Fp.add(Z3, t0); // step 40
            return new Point(X3, Y3, Z3);
        }
        subtract(other) {
            return this.add(other.negate());
        }
        is0() {
            return this.equals(Point.ZERO);
        }
        wNAF(n) {
            return wnaf.wNAFCached(this, pointPrecomputes, n, (comp)=>{
                const toInv = Fp.invertBatch(comp.map((p)=>p.pz));
                return comp.map((p, i)=>p.toAffine(toInv[i])).map(Point.fromAffine);
            });
        }
        /**
         * Non-constant-time multiplication. Uses double-and-add algorithm.
         * It's faster, but should only be used when you don't care about
         * an exposed private key e.g. sig verification, which works over *public* keys.
         */ multiplyUnsafe(n) {
            const I = Point.ZERO;
            if (n === _0n) return I;
            assertGE(n); // Will throw on 0
            if (n === _1n) return this;
            const { endo } = CURVE;
            if (!endo) return wnaf.unsafeLadder(this, n);
            // Apply endomorphism
            let { k1neg, k1, k2neg, k2 } = endo.splitScalar(n);
            let k1p = I;
            let k2p = I;
            let d = this;
            while(k1 > _0n || k2 > _0n){
                if (k1 & _1n) k1p = k1p.add(d);
                if (k2 & _1n) k2p = k2p.add(d);
                d = d.double();
                k1 >>= _1n;
                k2 >>= _1n;
            }
            if (k1neg) k1p = k1p.negate();
            if (k2neg) k2p = k2p.negate();
            k2p = new Point(Fp.mul(k2p.px, endo.beta), k2p.py, k2p.pz);
            return k1p.add(k2p);
        }
        /**
         * Constant time multiplication.
         * Uses wNAF method. Windowed method may be 10% faster,
         * but takes 2x longer to generate and consumes 2x memory.
         * Uses precomputes when available.
         * Uses endomorphism for Koblitz curves.
         * @param scalar by which the point would be multiplied
         * @returns New point
         */ multiply(scalar) {
            assertGE(scalar);
            let n = scalar;
            let point, fake; // Fake point is used to const-time mult
            const { endo } = CURVE;
            if (endo) {
                const { k1neg, k1, k2neg, k2 } = endo.splitScalar(n);
                let { p: k1p, f: f1p } = this.wNAF(k1);
                let { p: k2p, f: f2p } = this.wNAF(k2);
                k1p = wnaf.constTimeNegate(k1neg, k1p);
                k2p = wnaf.constTimeNegate(k2neg, k2p);
                k2p = new Point(Fp.mul(k2p.px, endo.beta), k2p.py, k2p.pz);
                point = k1p.add(k2p);
                fake = f1p.add(f2p);
            } else {
                const { p, f } = this.wNAF(n);
                point = p;
                fake = f;
            }
            // Normalize `z` for both points, but return only real one
            return Point.normalizeZ([
                point,
                fake
            ])[0];
        }
        /**
         * Efficiently calculate `aP + bQ`. Unsafe, can expose private key, if used incorrectly.
         * Not using Strauss-Shamir trick: precomputation tables are faster.
         * The trick could be useful if both P and Q are not G (not in our case).
         * @returns non-zero affine point
         */ multiplyAndAddUnsafe(Q, a, b) {
            const G = Point.BASE; // No Strauss-Shamir trick: we have 10% faster G precomputes
            const mul = (P, a // Select faster multiply() method
            )=>a === _0n || a === _1n || !P.equals(G) ? P.multiplyUnsafe(a) : P.multiply(a);
            const sum = mul(this, a).add(mul(Q, b));
            return sum.is0() ? undefined : sum;
        }
        // Converts Projective point to affine (x, y) coordinates.
        // Can accept precomputed Z^-1 - for example, from invertBatch.
        // (x, y, z) ∋ (x=x/z, y=y/z)
        toAffine(iz) {
            const { px: x, py: y, pz: z } = this;
            const is0 = this.is0();
            // If invZ was 0, we return zero point. However we still want to execute
            // all operations, so we replace invZ with a random number, 1.
            if (iz == null) iz = is0 ? Fp.ONE : Fp.inv(z);
            const ax = Fp.mul(x, iz);
            const ay = Fp.mul(y, iz);
            const zz = Fp.mul(z, iz);
            if (is0) return {
                x: Fp.ZERO,
                y: Fp.ZERO
            };
            if (!Fp.eql(zz, Fp.ONE)) throw new Error('invZ was invalid');
            return {
                x: ax,
                y: ay
            };
        }
        isTorsionFree() {
            const { h: cofactor, isTorsionFree } = CURVE;
            if (cofactor === _1n) return true; // No subgroups, always torsion-free
            if (isTorsionFree) return isTorsionFree(Point, this);
            throw new Error('isTorsionFree() has not been declared for the elliptic curve');
        }
        clearCofactor() {
            const { h: cofactor, clearCofactor } = CURVE;
            if (cofactor === _1n) return this; // Fast-path
            if (clearCofactor) return clearCofactor(Point, this);
            return this.multiplyUnsafe(CURVE.h);
        }
        toRawBytes(isCompressed = true) {
            this.assertValidity();
            return toBytes(Point, this, isCompressed);
        }
        toHex(isCompressed = true) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.bytesToHex(this.toRawBytes(isCompressed));
        }
    }
    Point.BASE = new Point(CURVE.Gx, CURVE.Gy, Fp.ONE);
    Point.ZERO = new Point(Fp.ZERO, Fp.ONE, Fp.ZERO);
    const _bits = CURVE.nBitLength;
    const wnaf = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$curve$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wNAF"])(Point, CURVE.endo ? Math.ceil(_bits / 2) : _bits);
    // Validate if generator point is on curve
    return {
        CURVE,
        ProjectivePoint: Point,
        normPrivateKeyToScalar,
        weierstrassEquation,
        isWithinCurveOrder
    };
}
function validateOpts(curve) {
    const opts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$curve$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateBasic"])(curve);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.validateObject(opts, {
        hash: 'hash',
        hmac: 'function',
        randomBytes: 'function'
    }, {
        bits2int: 'function',
        bits2int_modN: 'function',
        lowS: 'boolean'
    });
    return Object.freeze({
        lowS: true,
        ...opts
    });
}
function weierstrass(curveDef) {
    const CURVE = validateOpts(curveDef);
    const { Fp, n: CURVE_ORDER } = CURVE;
    const compressedLen = Fp.BYTES + 1; // e.g. 33 for 32
    const uncompressedLen = 2 * Fp.BYTES + 1; // e.g. 65 for 32
    function isValidFieldElement(num) {
        return _0n < num && num < Fp.ORDER; // 0 is banned since it's not invertible FE
    }
    function modN(a) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$modular$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mod"])(a, CURVE_ORDER);
    }
    function invN(a) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$modular$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["invert"])(a, CURVE_ORDER);
    }
    const { ProjectivePoint: Point, normPrivateKeyToScalar, weierstrassEquation, isWithinCurveOrder } = weierstrassPoints({
        ...CURVE,
        toBytes (_c, point, isCompressed) {
            const a = point.toAffine();
            const x = Fp.toBytes(a.x);
            const cat = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.concatBytes;
            if (isCompressed) {
                return cat(Uint8Array.from([
                    point.hasEvenY() ? 0x02 : 0x03
                ]), x);
            } else {
                return cat(Uint8Array.from([
                    0x04
                ]), x, Fp.toBytes(a.y));
            }
        },
        fromBytes (bytes) {
            const len = bytes.length;
            const head = bytes[0];
            const tail = bytes.subarray(1);
            // this.assertValidity() is done inside of fromHex
            if (len === compressedLen && (head === 0x02 || head === 0x03)) {
                const x = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.bytesToNumberBE(tail);
                if (!isValidFieldElement(x)) throw new Error('Point is not on curve');
                const y2 = weierstrassEquation(x); // y² = x³ + ax + b
                let y = Fp.sqrt(y2); // y = y² ^ (p+1)/4
                const isYOdd = (y & _1n) === _1n;
                // ECDSA
                const isHeadOdd = (head & 1) === 1;
                if (isHeadOdd !== isYOdd) y = Fp.neg(y);
                return {
                    x,
                    y
                };
            } else if (len === uncompressedLen && head === 0x04) {
                const x = Fp.fromBytes(tail.subarray(0, Fp.BYTES));
                const y = Fp.fromBytes(tail.subarray(Fp.BYTES, 2 * Fp.BYTES));
                return {
                    x,
                    y
                };
            } else {
                throw new Error(`Point of length ${len} was invalid. Expected ${compressedLen} compressed bytes or ${uncompressedLen} uncompressed bytes`);
            }
        }
    });
    const numToNByteStr = (num)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.bytesToHex(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.numberToBytesBE(num, CURVE.nByteLength));
    function isBiggerThanHalfOrder(number) {
        const HALF = CURVE_ORDER >> _1n;
        return number > HALF;
    }
    function normalizeS(s) {
        return isBiggerThanHalfOrder(s) ? modN(-s) : s;
    }
    // slice bytes num
    const slcNum = (b, from, to)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.bytesToNumberBE(b.slice(from, to));
    /**
     * ECDSA signature with its (r, s) properties. Supports DER & compact representations.
     */ class Signature {
        constructor(r, s, recovery){
            this.r = r;
            this.s = s;
            this.recovery = recovery;
            this.assertValidity();
        }
        // pair (bytes of r, bytes of s)
        static fromCompact(hex) {
            const l = CURVE.nByteLength;
            hex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensureBytes"])('compactSignature', hex, l * 2);
            return new Signature(slcNum(hex, 0, l), slcNum(hex, l, 2 * l));
        }
        // DER encoded ECDSA signature
        // https://bitcoin.stackexchange.com/questions/57644/what-are-the-parts-of-a-bitcoin-transaction-input-script
        static fromDER(hex) {
            const { r, s } = DER.toSig((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensureBytes"])('DER', hex));
            return new Signature(r, s);
        }
        assertValidity() {
            // can use assertGE here
            if (!isWithinCurveOrder(this.r)) throw new Error('r must be 0 < r < CURVE.n');
            if (!isWithinCurveOrder(this.s)) throw new Error('s must be 0 < s < CURVE.n');
        }
        addRecoveryBit(recovery) {
            return new Signature(this.r, this.s, recovery);
        }
        recoverPublicKey(msgHash) {
            const { r, s, recovery: rec } = this;
            const h = bits2int_modN((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensureBytes"])('msgHash', msgHash)); // Truncate hash
            if (rec == null || ![
                0,
                1,
                2,
                3
            ].includes(rec)) throw new Error('recovery id invalid');
            const radj = rec === 2 || rec === 3 ? r + CURVE.n : r;
            if (radj >= Fp.ORDER) throw new Error('recovery id 2 or 3 invalid');
            const prefix = (rec & 1) === 0 ? '02' : '03';
            const R = Point.fromHex(prefix + numToNByteStr(radj));
            const ir = invN(radj); // r^-1
            const u1 = modN(-h * ir); // -hr^-1
            const u2 = modN(s * ir); // sr^-1
            const Q = Point.BASE.multiplyAndAddUnsafe(R, u1, u2); // (sr^-1)R-(hr^-1)G = -(hr^-1)G + (sr^-1)
            if (!Q) throw new Error('point at infinify'); // unsafe is fine: no priv data leaked
            Q.assertValidity();
            return Q;
        }
        // Signatures should be low-s, to prevent malleability.
        hasHighS() {
            return isBiggerThanHalfOrder(this.s);
        }
        normalizeS() {
            return this.hasHighS() ? new Signature(this.r, modN(-this.s), this.recovery) : this;
        }
        // DER-encoded
        toDERRawBytes() {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.hexToBytes(this.toDERHex());
        }
        toDERHex() {
            return DER.hexFromSig({
                r: this.r,
                s: this.s
            });
        }
        // padded bytes of r, then padded bytes of s
        toCompactRawBytes() {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.hexToBytes(this.toCompactHex());
        }
        toCompactHex() {
            return numToNByteStr(this.r) + numToNByteStr(this.s);
        }
    }
    const utils = {
        isValidPrivateKey (privateKey) {
            try {
                normPrivateKeyToScalar(privateKey);
                return true;
            } catch (error) {
                return false;
            }
        },
        normPrivateKeyToScalar: normPrivateKeyToScalar,
        /**
         * Produces cryptographically secure private key from random of size
         * (groupLen + ceil(groupLen / 2)) with modulo bias being negligible.
         */ randomPrivateKey: ()=>{
            const length = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$modular$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMinHashLength"])(CURVE.n);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$modular$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapHashToField"])(CURVE.randomBytes(length), CURVE.n);
        },
        /**
         * Creates precompute table for an arbitrary EC point. Makes point "cached".
         * Allows to massively speed-up `point.multiply(scalar)`.
         * @returns cached point
         * @example
         * const fast = utils.precompute(8, ProjectivePoint.fromHex(someonesPubKey));
         * fast.multiply(privKey); // much faster ECDH now
         */ precompute (windowSize = 8, point = Point.BASE) {
            point._setWindowSize(windowSize);
            point.multiply(BigInt(3)); // 3 is arbitrary, just need any number here
            return point;
        }
    };
    /**
     * Computes public key for a private key. Checks for validity of the private key.
     * @param privateKey private key
     * @param isCompressed whether to return compact (default), or full key
     * @returns Public key, full when isCompressed=false; short when isCompressed=true
     */ function getPublicKey(privateKey, isCompressed = true) {
        return Point.fromPrivateKey(privateKey).toRawBytes(isCompressed);
    }
    /**
     * Quick and dirty check for item being public key. Does not validate hex, or being on-curve.
     */ function isProbPub(item) {
        const arr = item instanceof Uint8Array;
        const str = typeof item === 'string';
        const len = (arr || str) && item.length;
        if (arr) return len === compressedLen || len === uncompressedLen;
        if (str) return len === 2 * compressedLen || len === 2 * uncompressedLen;
        if (item instanceof Point) return true;
        return false;
    }
    /**
     * ECDH (Elliptic Curve Diffie Hellman).
     * Computes shared public key from private key and public key.
     * Checks: 1) private key validity 2) shared key is on-curve.
     * Does NOT hash the result.
     * @param privateA private key
     * @param publicB different public key
     * @param isCompressed whether to return compact (default), or full key
     * @returns shared public key
     */ function getSharedSecret(privateA, publicB, isCompressed = true) {
        if (isProbPub(privateA)) throw new Error('first arg must be private key');
        if (!isProbPub(publicB)) throw new Error('second arg must be public key');
        const b = Point.fromHex(publicB); // check for being on-curve
        return b.multiply(normPrivateKeyToScalar(privateA)).toRawBytes(isCompressed);
    }
    // RFC6979: ensure ECDSA msg is X bytes and < N. RFC suggests optional truncating via bits2octets.
    // FIPS 186-4 4.6 suggests the leftmost min(nBitLen, outLen) bits, which matches bits2int.
    // bits2int can produce res>N, we can do mod(res, N) since the bitLen is the same.
    // int2octets can't be used; pads small msgs with 0: unacceptatble for trunc as per RFC vectors
    const bits2int = CURVE.bits2int || function(bytes) {
        // For curves with nBitLength % 8 !== 0: bits2octets(bits2octets(m)) !== bits2octets(m)
        // for some cases, since bytes.length * 8 is not actual bitLength.
        const num = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.bytesToNumberBE(bytes); // check for == u8 done here
        const delta = bytes.length * 8 - CURVE.nBitLength; // truncate to nBitLength leftmost bits
        return delta > 0 ? num >> BigInt(delta) : num;
    };
    const bits2int_modN = CURVE.bits2int_modN || function(bytes) {
        return modN(bits2int(bytes)); // can't use bytesToNumberBE here
    };
    // NOTE: pads output with zero as per spec
    const ORDER_MASK = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.bitMask(CURVE.nBitLength);
    /**
     * Converts to bytes. Checks if num in `[0..ORDER_MASK-1]` e.g.: `[0..2^256-1]`.
     */ function int2octets(num) {
        if (typeof num !== 'bigint') throw new Error('bigint expected');
        if (!(_0n <= num && num < ORDER_MASK)) throw new Error(`bigint expected < 2^${CURVE.nBitLength}`);
        // works with order, can have different size than numToField!
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.numberToBytesBE(num, CURVE.nByteLength);
    }
    // Steps A, D of RFC6979 3.2
    // Creates RFC6979 seed; converts msg/privKey to numbers.
    // Used only in sign, not in verify.
    // NOTE: we cannot assume here that msgHash has same amount of bytes as curve order, this will be wrong at least for P521.
    // Also it can be bigger for P224 + SHA256
    function prepSig(msgHash, privateKey, opts = defaultSigOpts) {
        if ([
            'recovered',
            'canonical'
        ].some((k)=>k in opts)) throw new Error('sign() legacy options not supported');
        const { hash, randomBytes } = CURVE;
        let { lowS, prehash, extraEntropy: ent } = opts; // generates low-s sigs by default
        if (lowS == null) lowS = true; // RFC6979 3.2: we skip step A, because we already provide hash
        msgHash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensureBytes"])('msgHash', msgHash);
        if (prehash) msgHash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensureBytes"])('prehashed msgHash', hash(msgHash));
        // We can't later call bits2octets, since nested bits2int is broken for curves
        // with nBitLength % 8 !== 0. Because of that, we unwrap it here as int2octets call.
        // const bits2octets = (bits) => int2octets(bits2int_modN(bits))
        const h1int = bits2int_modN(msgHash);
        const d = normPrivateKeyToScalar(privateKey); // validate private key, convert to bigint
        const seedArgs = [
            int2octets(d),
            int2octets(h1int)
        ];
        // extraEntropy. RFC6979 3.6: additional k' (optional).
        if (ent != null) {
            // K = HMAC_K(V || 0x00 || int2octets(x) || bits2octets(h1) || k')
            const e = ent === true ? randomBytes(Fp.BYTES) : ent; // generate random bytes OR pass as-is
            seedArgs.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensureBytes"])('extraEntropy', e)); // check for being bytes
        }
        const seed = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.concatBytes(...seedArgs); // Step D of RFC6979 3.2
        const m = h1int; // NOTE: no need to call bits2int second time here, it is inside truncateHash!
        // Converts signature params into point w r/s, checks result for validity.
        function k2sig(kBytes) {
            // RFC 6979 Section 3.2, step 3: k = bits2int(T)
            const k = bits2int(kBytes); // Cannot use fields methods, since it is group element
            if (!isWithinCurveOrder(k)) return; // Important: all mod() calls here must be done over N
            const ik = invN(k); // k^-1 mod n
            const q = Point.BASE.multiply(k).toAffine(); // q = Gk
            const r = modN(q.x); // r = q.x mod n
            if (r === _0n) return;
            // Can use scalar blinding b^-1(bm + bdr) where b ∈ [1,q−1] according to
            // https://tches.iacr.org/index.php/TCHES/article/view/7337/6509. We've decided against it:
            // a) dependency on CSPRNG b) 15% slowdown c) doesn't really help since bigints are not CT
            const s = modN(ik * modN(m + r * d)); // Not using blinding here
            if (s === _0n) return;
            let recovery = (q.x === r ? 0 : 2) | Number(q.y & _1n); // recovery bit (2 or 3, when q.x > n)
            let normS = s;
            if (lowS && isBiggerThanHalfOrder(s)) {
                normS = normalizeS(s); // if lowS was passed, ensure s is always
                recovery ^= 1; // // in the bottom half of N
            }
            return new Signature(r, normS, recovery); // use normS, not s
        }
        return {
            seed,
            k2sig
        };
    }
    const defaultSigOpts = {
        lowS: CURVE.lowS,
        prehash: false
    };
    const defaultVerOpts = {
        lowS: CURVE.lowS,
        prehash: false
    };
    /**
     * Signs message hash with a private key.
     * ```
     * sign(m, d, k) where
     *   (x, y) = G × k
     *   r = x mod n
     *   s = (m + dr)/k mod n
     * ```
     * @param msgHash NOT message. msg needs to be hashed to `msgHash`, or use `prehash`.
     * @param privKey private key
     * @param opts lowS for non-malleable sigs. extraEntropy for mixing randomness into k. prehash will hash first arg.
     * @returns signature with recovery param
     */ function sign(msgHash, privKey, opts = defaultSigOpts) {
        const { seed, k2sig } = prepSig(msgHash, privKey, opts); // Steps A, D of RFC6979 3.2.
        const C = CURVE;
        const drbg = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createHmacDrbg(C.hash.outputLen, C.nByteLength, C.hmac);
        return drbg(seed, k2sig); // Steps B, C, D, E, F, G
    }
    // Enable precomputes. Slows down first publicKey computation by 20ms.
    Point.BASE._setWindowSize(8);
    // utils.precompute(8, ProjectivePoint.BASE)
    /**
     * Verifies a signature against message hash and public key.
     * Rejects lowS signatures by default: to override,
     * specify option `{lowS: false}`. Implements section 4.1.4 from https://www.secg.org/sec1-v2.pdf:
     *
     * ```
     * verify(r, s, h, P) where
     *   U1 = hs^-1 mod n
     *   U2 = rs^-1 mod n
     *   R = U1⋅G - U2⋅P
     *   mod(R.x, n) == r
     * ```
     */ function verify(signature, msgHash, publicKey, opts = defaultVerOpts) {
        const sg = signature;
        msgHash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensureBytes"])('msgHash', msgHash);
        publicKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensureBytes"])('publicKey', publicKey);
        if ('strict' in opts) throw new Error('options.strict was renamed to lowS');
        const { lowS, prehash } = opts;
        let _sig = undefined;
        let P;
        try {
            if (typeof sg === 'string' || sg instanceof Uint8Array) {
                // Signature can be represented in 2 ways: compact (2*nByteLength) & DER (variable-length).
                // Since DER can also be 2*nByteLength bytes, we check for it first.
                try {
                    _sig = Signature.fromDER(sg);
                } catch (derError) {
                    if (!(derError instanceof DER.Err)) throw derError;
                    _sig = Signature.fromCompact(sg);
                }
            } else if (typeof sg === 'object' && typeof sg.r === 'bigint' && typeof sg.s === 'bigint') {
                const { r, s } = sg;
                _sig = new Signature(r, s);
            } else {
                throw new Error('PARSE');
            }
            P = Point.fromHex(publicKey);
        } catch (error) {
            if (error.message === 'PARSE') throw new Error(`signature must be Signature instance, Uint8Array or hex string`);
            return false;
        }
        if (lowS && _sig.hasHighS()) return false;
        if (prehash) msgHash = CURVE.hash(msgHash);
        const { r, s } = _sig;
        const h = bits2int_modN(msgHash); // Cannot use fields methods, since it is group element
        const is = invN(s); // s^-1
        const u1 = modN(h * is); // u1 = hs^-1 mod n
        const u2 = modN(r * is); // u2 = rs^-1 mod n
        const R = Point.BASE.multiplyAndAddUnsafe(P, u1, u2)?.toAffine(); // R = u1⋅G + u2⋅P
        if (!R) return false;
        const v = modN(R.x);
        return v === r;
    }
    return {
        CURVE,
        getPublicKey,
        getSharedSecret,
        sign,
        verify,
        ProjectivePoint: Point,
        Signature,
        utils
    };
}
function SWUFpSqrtRatio(Fp, Z) {
    // Generic implementation
    const q = Fp.ORDER;
    let l = _0n;
    for(let o = q - _1n; o % _2n === _0n; o /= _2n)l += _1n;
    const c1 = l; // 1. c1, the largest integer such that 2^c1 divides q - 1.
    // We need 2n ** c1 and 2n ** (c1-1). We can't use **; but we can use <<.
    // 2n ** c1 == 2n << (c1-1)
    const _2n_pow_c1_1 = _2n << c1 - _1n - _1n;
    const _2n_pow_c1 = _2n_pow_c1_1 * _2n;
    const c2 = (q - _1n) / _2n_pow_c1; // 2. c2 = (q - 1) / (2^c1)  # Integer arithmetic
    const c3 = (c2 - _1n) / _2n; // 3. c3 = (c2 - 1) / 2            # Integer arithmetic
    const c4 = _2n_pow_c1 - _1n; // 4. c4 = 2^c1 - 1                # Integer arithmetic
    const c5 = _2n_pow_c1_1; // 5. c5 = 2^(c1 - 1)                  # Integer arithmetic
    const c6 = Fp.pow(Z, c2); // 6. c6 = Z^c2
    const c7 = Fp.pow(Z, (c2 + _1n) / _2n); // 7. c7 = Z^((c2 + 1) / 2)
    let sqrtRatio = (u, v)=>{
        let tv1 = c6; // 1. tv1 = c6
        let tv2 = Fp.pow(v, c4); // 2. tv2 = v^c4
        let tv3 = Fp.sqr(tv2); // 3. tv3 = tv2^2
        tv3 = Fp.mul(tv3, v); // 4. tv3 = tv3 * v
        let tv5 = Fp.mul(u, tv3); // 5. tv5 = u * tv3
        tv5 = Fp.pow(tv5, c3); // 6. tv5 = tv5^c3
        tv5 = Fp.mul(tv5, tv2); // 7. tv5 = tv5 * tv2
        tv2 = Fp.mul(tv5, v); // 8. tv2 = tv5 * v
        tv3 = Fp.mul(tv5, u); // 9. tv3 = tv5 * u
        let tv4 = Fp.mul(tv3, tv2); // 10. tv4 = tv3 * tv2
        tv5 = Fp.pow(tv4, c5); // 11. tv5 = tv4^c5
        let isQR = Fp.eql(tv5, Fp.ONE); // 12. isQR = tv5 == 1
        tv2 = Fp.mul(tv3, c7); // 13. tv2 = tv3 * c7
        tv5 = Fp.mul(tv4, tv1); // 14. tv5 = tv4 * tv1
        tv3 = Fp.cmov(tv2, tv3, isQR); // 15. tv3 = CMOV(tv2, tv3, isQR)
        tv4 = Fp.cmov(tv5, tv4, isQR); // 16. tv4 = CMOV(tv5, tv4, isQR)
        // 17. for i in (c1, c1 - 1, ..., 2):
        for(let i = c1; i > _1n; i--){
            let tv5 = i - _2n; // 18.    tv5 = i - 2
            tv5 = _2n << tv5 - _1n; // 19.    tv5 = 2^tv5
            let tvv5 = Fp.pow(tv4, tv5); // 20.    tv5 = tv4^tv5
            const e1 = Fp.eql(tvv5, Fp.ONE); // 21.    e1 = tv5 == 1
            tv2 = Fp.mul(tv3, tv1); // 22.    tv2 = tv3 * tv1
            tv1 = Fp.mul(tv1, tv1); // 23.    tv1 = tv1 * tv1
            tvv5 = Fp.mul(tv4, tv1); // 24.    tv5 = tv4 * tv1
            tv3 = Fp.cmov(tv2, tv3, e1); // 25.    tv3 = CMOV(tv2, tv3, e1)
            tv4 = Fp.cmov(tvv5, tv4, e1); // 26.    tv4 = CMOV(tv5, tv4, e1)
        }
        return {
            isValid: isQR,
            value: tv3
        };
    };
    if (Fp.ORDER % _4n === _3n) {
        // sqrt_ratio_3mod4(u, v)
        const c1 = (Fp.ORDER - _3n) / _4n; // 1. c1 = (q - 3) / 4     # Integer arithmetic
        const c2 = Fp.sqrt(Fp.neg(Z)); // 2. c2 = sqrt(-Z)
        sqrtRatio = (u, v)=>{
            let tv1 = Fp.sqr(v); // 1. tv1 = v^2
            const tv2 = Fp.mul(u, v); // 2. tv2 = u * v
            tv1 = Fp.mul(tv1, tv2); // 3. tv1 = tv1 * tv2
            let y1 = Fp.pow(tv1, c1); // 4. y1 = tv1^c1
            y1 = Fp.mul(y1, tv2); // 5. y1 = y1 * tv2
            const y2 = Fp.mul(y1, c2); // 6. y2 = y1 * c2
            const tv3 = Fp.mul(Fp.sqr(y1), v); // 7. tv3 = y1^2; 8. tv3 = tv3 * v
            const isQR = Fp.eql(tv3, u); // 9. isQR = tv3 == u
            let y = Fp.cmov(y2, y1, isQR); // 10. y = CMOV(y2, y1, isQR)
            return {
                isValid: isQR,
                value: y
            }; // 11. return (isQR, y) isQR ? y : y*c2
        };
    }
    // No curves uses that
    // if (Fp.ORDER % _8n === _5n) // sqrt_ratio_5mod8
    return sqrtRatio;
}
function mapToCurveSimpleSWU(Fp, opts) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$modular$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateField"])(Fp);
    if (!Fp.isValid(opts.A) || !Fp.isValid(opts.B) || !Fp.isValid(opts.Z)) throw new Error('mapToCurveSimpleSWU: invalid opts');
    const sqrtRatio = SWUFpSqrtRatio(Fp, opts.Z);
    if (!Fp.isOdd) throw new Error('Fp.isOdd is not implemented!');
    // Input: u, an element of F.
    // Output: (x, y), a point on E.
    return (u)=>{
        // prettier-ignore
        let tv1, tv2, tv3, tv4, tv5, tv6, x, y;
        tv1 = Fp.sqr(u); // 1.  tv1 = u^2
        tv1 = Fp.mul(tv1, opts.Z); // 2.  tv1 = Z * tv1
        tv2 = Fp.sqr(tv1); // 3.  tv2 = tv1^2
        tv2 = Fp.add(tv2, tv1); // 4.  tv2 = tv2 + tv1
        tv3 = Fp.add(tv2, Fp.ONE); // 5.  tv3 = tv2 + 1
        tv3 = Fp.mul(tv3, opts.B); // 6.  tv3 = B * tv3
        tv4 = Fp.cmov(opts.Z, Fp.neg(tv2), !Fp.eql(tv2, Fp.ZERO)); // 7.  tv4 = CMOV(Z, -tv2, tv2 != 0)
        tv4 = Fp.mul(tv4, opts.A); // 8.  tv4 = A * tv4
        tv2 = Fp.sqr(tv3); // 9.  tv2 = tv3^2
        tv6 = Fp.sqr(tv4); // 10. tv6 = tv4^2
        tv5 = Fp.mul(tv6, opts.A); // 11. tv5 = A * tv6
        tv2 = Fp.add(tv2, tv5); // 12. tv2 = tv2 + tv5
        tv2 = Fp.mul(tv2, tv3); // 13. tv2 = tv2 * tv3
        tv6 = Fp.mul(tv6, tv4); // 14. tv6 = tv6 * tv4
        tv5 = Fp.mul(tv6, opts.B); // 15. tv5 = B * tv6
        tv2 = Fp.add(tv2, tv5); // 16. tv2 = tv2 + tv5
        x = Fp.mul(tv1, tv3); // 17.   x = tv1 * tv3
        const { isValid, value } = sqrtRatio(tv2, tv6); // 18. (is_gx1_square, y1) = sqrt_ratio(tv2, tv6)
        y = Fp.mul(tv1, u); // 19.   y = tv1 * u  -> Z * u^3 * y1
        y = Fp.mul(y, value); // 20.   y = y * y1
        x = Fp.cmov(x, tv3, isValid); // 21.   x = CMOV(x, tv3, is_gx1_square)
        y = Fp.cmov(y, value, isValid); // 22.   y = CMOV(y, y1, is_gx1_square)
        const e1 = Fp.isOdd(u) === Fp.isOdd(y); // 23.  e1 = sgn0(u) == sgn0(y)
        y = Fp.cmov(Fp.neg(y), y, e1); // 24.   y = CMOV(-y, y, e1)
        x = Fp.div(x, tv4); // 25.   x = x / tv4
        return {
            x,
            y
        };
    };
} //# sourceMappingURL=weierstrass.js.map
}}),
"[project]/node_modules/ethers/node_modules/@noble/curves/esm/abstract/hash-to-curve.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createHasher": (()=>createHasher),
    "expand_message_xmd": (()=>expand_message_xmd),
    "expand_message_xof": (()=>expand_message_xof),
    "hash_to_field": (()=>hash_to_field),
    "isogenyMap": (()=>isogenyMap)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$modular$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ethers/node_modules/@noble/curves/esm/abstract/modular.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ethers/node_modules/@noble/curves/esm/abstract/utils.js [app-client] (ecmascript)");
;
;
function validateDST(dst) {
    if (dst instanceof Uint8Array) return dst;
    if (typeof dst === 'string') return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utf8ToBytes"])(dst);
    throw new Error('DST must be Uint8Array or string');
}
// Octet Stream to Integer. "spec" implementation of os2ip is 2.5x slower vs bytesToNumberBE.
const os2ip = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToNumberBE"];
// Integer to Octet Stream (numberToBytesBE)
function i2osp(value, length) {
    if (value < 0 || value >= 1 << 8 * length) {
        throw new Error(`bad I2OSP call: value=${value} length=${length}`);
    }
    const res = Array.from({
        length
    }).fill(0);
    for(let i = length - 1; i >= 0; i--){
        res[i] = value & 0xff;
        value >>>= 8;
    }
    return new Uint8Array(res);
}
function strxor(a, b) {
    const arr = new Uint8Array(a.length);
    for(let i = 0; i < a.length; i++){
        arr[i] = a[i] ^ b[i];
    }
    return arr;
}
function isBytes(item) {
    if (!(item instanceof Uint8Array)) throw new Error('Uint8Array expected');
}
function isNum(item) {
    if (!Number.isSafeInteger(item)) throw new Error('number expected');
}
function expand_message_xmd(msg, DST, lenInBytes, H) {
    isBytes(msg);
    isBytes(DST);
    isNum(lenInBytes);
    // https://www.rfc-editor.org/rfc/rfc9380#section-5.3.3
    if (DST.length > 255) DST = H((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concatBytes"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utf8ToBytes"])('H2C-OVERSIZE-DST-'), DST));
    const { outputLen: b_in_bytes, blockLen: r_in_bytes } = H;
    const ell = Math.ceil(lenInBytes / b_in_bytes);
    if (ell > 255) throw new Error('Invalid xmd length');
    const DST_prime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concatBytes"])(DST, i2osp(DST.length, 1));
    const Z_pad = i2osp(0, r_in_bytes);
    const l_i_b_str = i2osp(lenInBytes, 2); // len_in_bytes_str
    const b = new Array(ell);
    const b_0 = H((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concatBytes"])(Z_pad, msg, l_i_b_str, i2osp(0, 1), DST_prime));
    b[0] = H((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concatBytes"])(b_0, i2osp(1, 1), DST_prime));
    for(let i = 1; i <= ell; i++){
        const args = [
            strxor(b_0, b[i - 1]),
            i2osp(i + 1, 1),
            DST_prime
        ];
        b[i] = H((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concatBytes"])(...args));
    }
    const pseudo_random_bytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concatBytes"])(...b);
    return pseudo_random_bytes.slice(0, lenInBytes);
}
function expand_message_xof(msg, DST, lenInBytes, k, H) {
    isBytes(msg);
    isBytes(DST);
    isNum(lenInBytes);
    // https://www.rfc-editor.org/rfc/rfc9380#section-5.3.3
    // DST = H('H2C-OVERSIZE-DST-' || a_very_long_DST, Math.ceil((lenInBytes * k) / 8));
    if (DST.length > 255) {
        const dkLen = Math.ceil(2 * k / 8);
        DST = H.create({
            dkLen
        }).update((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utf8ToBytes"])('H2C-OVERSIZE-DST-')).update(DST).digest();
    }
    if (lenInBytes > 65535 || DST.length > 255) throw new Error('expand_message_xof: invalid lenInBytes');
    return H.create({
        dkLen: lenInBytes
    }).update(msg).update(i2osp(lenInBytes, 2))// 2. DST_prime = DST || I2OSP(len(DST), 1)
    .update(DST).update(i2osp(DST.length, 1)).digest();
}
function hash_to_field(msg, count, options) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateObject"])(options, {
        DST: 'stringOrUint8Array',
        p: 'bigint',
        m: 'isSafeInteger',
        k: 'isSafeInteger',
        hash: 'hash'
    });
    const { p, k, m, hash, expand, DST: _DST } = options;
    isBytes(msg);
    isNum(count);
    const DST = validateDST(_DST);
    const log2p = p.toString(2).length;
    const L = Math.ceil((log2p + k) / 8); // section 5.1 of ietf draft link above
    const len_in_bytes = count * m * L;
    let prb; // pseudo_random_bytes
    if (expand === 'xmd') {
        prb = expand_message_xmd(msg, DST, len_in_bytes, hash);
    } else if (expand === 'xof') {
        prb = expand_message_xof(msg, DST, len_in_bytes, k, hash);
    } else if (expand === '_internal_pass') {
        // for internal tests only
        prb = msg;
    } else {
        throw new Error('expand must be "xmd" or "xof"');
    }
    const u = new Array(count);
    for(let i = 0; i < count; i++){
        const e = new Array(m);
        for(let j = 0; j < m; j++){
            const elm_offset = L * (j + i * m);
            const tv = prb.subarray(elm_offset, elm_offset + L);
            e[j] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$modular$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mod"])(os2ip(tv), p);
        }
        u[i] = e;
    }
    return u;
}
function isogenyMap(field, map) {
    // Make same order as in spec
    const COEFF = map.map((i)=>Array.from(i).reverse());
    return (x, y)=>{
        const [xNum, xDen, yNum, yDen] = COEFF.map((val)=>val.reduce((acc, i)=>field.add(field.mul(acc, x), i)));
        x = field.div(xNum, xDen); // xNum / xDen
        y = field.mul(y, field.div(yNum, yDen)); // y * (yNum / yDev)
        return {
            x,
            y
        };
    };
}
function createHasher(Point, mapToCurve, def) {
    if (typeof mapToCurve !== 'function') throw new Error('mapToCurve() must be defined');
    return {
        // Encodes byte string to elliptic curve.
        // hash_to_curve from https://www.rfc-editor.org/rfc/rfc9380#section-3
        hashToCurve (msg, options) {
            const u = hash_to_field(msg, 2, {
                ...def,
                DST: def.DST,
                ...options
            });
            const u0 = Point.fromAffine(mapToCurve(u[0]));
            const u1 = Point.fromAffine(mapToCurve(u[1]));
            const P = u0.add(u1).clearCofactor();
            P.assertValidity();
            return P;
        },
        // Encodes byte string to elliptic curve.
        // encode_to_curve from https://www.rfc-editor.org/rfc/rfc9380#section-3
        encodeToCurve (msg, options) {
            const u = hash_to_field(msg, 1, {
                ...def,
                DST: def.encodeDST,
                ...options
            });
            const P = Point.fromAffine(mapToCurve(u[0])).clearCofactor();
            P.assertValidity();
            return P;
        }
    };
} //# sourceMappingURL=hash-to-curve.js.map
}}),
"[project]/node_modules/ethers/node_modules/@noble/curves/esm/_shortw_utils.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ __turbopack_context__.s({
    "createCurve": (()=>createCurve),
    "getHash": (()=>getHash)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$hmac$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ethers/node_modules/@noble/hashes/esm/hmac.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ethers/node_modules/@noble/hashes/esm/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$weierstrass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ethers/node_modules/@noble/curves/esm/abstract/weierstrass.js [app-client] (ecmascript)");
;
;
;
function getHash(hash) {
    return {
        hash,
        hmac: (key, ...msgs)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$hmac$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hmac"])(hash, key, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concatBytes"])(...msgs)),
        randomBytes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomBytes"]
    };
}
function createCurve(curveDef, defHash) {
    const create = (hash)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$weierstrass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["weierstrass"])({
            ...curveDef,
            ...getHash(hash)
        });
    return Object.freeze({
        ...create(defHash),
        create
    });
} //# sourceMappingURL=_shortw_utils.js.map
}}),
"[project]/node_modules/ethers/node_modules/@noble/curves/esm/secp256k1.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ __turbopack_context__.s({
    "encodeToCurve": (()=>encodeToCurve),
    "hashToCurve": (()=>hashToCurve),
    "schnorr": (()=>schnorr),
    "secp256k1": (()=>secp256k1)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha256$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ethers/node_modules/@noble/hashes/esm/sha256.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ethers/node_modules/@noble/hashes/esm/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$modular$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ethers/node_modules/@noble/curves/esm/abstract/modular.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$weierstrass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ethers/node_modules/@noble/curves/esm/abstract/weierstrass.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ethers/node_modules/@noble/curves/esm/abstract/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$hash$2d$to$2d$curve$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ethers/node_modules/@noble/curves/esm/abstract/hash-to-curve.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$_shortw_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ethers/node_modules/@noble/curves/esm/_shortw_utils.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const secp256k1P = BigInt('0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f');
const secp256k1N = BigInt('0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141');
const _1n = BigInt(1);
const _2n = BigInt(2);
const divNearest = (a, b)=>(a + b / _2n) / b;
/**
 * √n = n^((p+1)/4) for fields p = 3 mod 4. We unwrap the loop and multiply bit-by-bit.
 * (P+1n/4n).toString(2) would produce bits [223x 1, 0, 22x 1, 4x 0, 11, 00]
 */ function sqrtMod(y) {
    const P = secp256k1P;
    // prettier-ignore
    const _3n = BigInt(3), _6n = BigInt(6), _11n = BigInt(11), _22n = BigInt(22);
    // prettier-ignore
    const _23n = BigInt(23), _44n = BigInt(44), _88n = BigInt(88);
    const b2 = y * y * y % P; // x^3, 11
    const b3 = b2 * b2 * y % P; // x^7
    const b6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$modular$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pow2"])(b3, _3n, P) * b3 % P;
    const b9 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$modular$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pow2"])(b6, _3n, P) * b3 % P;
    const b11 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$modular$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pow2"])(b9, _2n, P) * b2 % P;
    const b22 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$modular$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pow2"])(b11, _11n, P) * b11 % P;
    const b44 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$modular$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pow2"])(b22, _22n, P) * b22 % P;
    const b88 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$modular$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pow2"])(b44, _44n, P) * b44 % P;
    const b176 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$modular$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pow2"])(b88, _88n, P) * b88 % P;
    const b220 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$modular$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pow2"])(b176, _44n, P) * b44 % P;
    const b223 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$modular$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pow2"])(b220, _3n, P) * b3 % P;
    const t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$modular$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pow2"])(b223, _23n, P) * b22 % P;
    const t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$modular$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pow2"])(t1, _6n, P) * b2 % P;
    const root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$modular$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pow2"])(t2, _2n, P);
    if (!Fp.eql(Fp.sqr(root), y)) throw new Error('Cannot find square root');
    return root;
}
const Fp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$modular$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"])(secp256k1P, undefined, undefined, {
    sqrt: sqrtMod
});
const secp256k1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$_shortw_utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCurve"])({
    a: BigInt(0),
    b: BigInt(7),
    Fp,
    n: secp256k1N,
    // Base point (x, y) aka generator point
    Gx: BigInt('55066263022277343669578718895168534326250603453777594175500187360389116729240'),
    Gy: BigInt('32670510020758816978083085130507043184471273380659243275938904335757337482424'),
    h: BigInt(1),
    lowS: true,
    /**
     * secp256k1 belongs to Koblitz curves: it has efficiently computable endomorphism.
     * Endomorphism uses 2x less RAM, speeds up precomputation by 2x and ECDH / key recovery by 20%.
     * For precomputed wNAF it trades off 1/2 init time & 1/3 ram for 20% perf hit.
     * Explanation: https://gist.github.com/paulmillr/eb670806793e84df628a7c434a873066
     */ endo: {
        beta: BigInt('0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee'),
        splitScalar: (k)=>{
            const n = secp256k1N;
            const a1 = BigInt('0x3086d221a7d46bcde86c90e49284eb15');
            const b1 = -_1n * BigInt('0xe4437ed6010e88286f547fa90abfe4c3');
            const a2 = BigInt('0x114ca50f7a8e2f3f657c1108d9d44cfd8');
            const b2 = a1;
            const POW_2_128 = BigInt('0x100000000000000000000000000000000'); // (2n**128n).toString(16)
            const c1 = divNearest(b2 * k, n);
            const c2 = divNearest(-b1 * k, n);
            let k1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$modular$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mod"])(k - c1 * a1 - c2 * a2, n);
            let k2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$modular$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mod"])(-c1 * b1 - c2 * b2, n);
            const k1neg = k1 > POW_2_128;
            const k2neg = k2 > POW_2_128;
            if (k1neg) k1 = n - k1;
            if (k2neg) k2 = n - k2;
            if (k1 > POW_2_128 || k2 > POW_2_128) {
                throw new Error('splitScalar: Endomorphism failed, k=' + k);
            }
            return {
                k1neg,
                k1,
                k2neg,
                k2
            };
        }
    }
}, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha256$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sha256"]);
// Schnorr signatures are superior to ECDSA from above. Below is Schnorr-specific BIP0340 code.
// https://github.com/bitcoin/bips/blob/master/bip-0340.mediawiki
const _0n = BigInt(0);
const fe = (x)=>typeof x === 'bigint' && _0n < x && x < secp256k1P;
const ge = (x)=>typeof x === 'bigint' && _0n < x && x < secp256k1N;
/** An object mapping tags to their tagged hash prefix of [SHA256(tag) | SHA256(tag)] */ const TAGGED_HASH_PREFIXES = {};
function taggedHash(tag, ...messages) {
    let tagP = TAGGED_HASH_PREFIXES[tag];
    if (tagP === undefined) {
        const tagH = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha256$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sha256"])(Uint8Array.from(tag, (c)=>c.charCodeAt(0)));
        tagP = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concatBytes"])(tagH, tagH);
        TAGGED_HASH_PREFIXES[tag] = tagP;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha256$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sha256"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concatBytes"])(tagP, ...messages));
}
// ECDSA compact points are 33-byte. Schnorr is 32: we strip first byte 0x02 or 0x03
const pointToBytes = (point)=>point.toRawBytes(true).slice(1);
const numTo32b = (n)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToBytesBE"])(n, 32);
const modP = (x)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$modular$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mod"])(x, secp256k1P);
const modN = (x)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$modular$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mod"])(x, secp256k1N);
const Point = secp256k1.ProjectivePoint;
const GmulAdd = (Q, a, b)=>Point.BASE.multiplyAndAddUnsafe(Q, a, b);
// Calculate point, scalar and bytes
function schnorrGetExtPubKey(priv) {
    let d_ = secp256k1.utils.normPrivateKeyToScalar(priv); // same method executed in fromPrivateKey
    let p = Point.fromPrivateKey(d_); // P = d'⋅G; 0 < d' < n check is done inside
    const scalar = p.hasEvenY() ? d_ : modN(-d_);
    return {
        scalar: scalar,
        bytes: pointToBytes(p)
    };
}
/**
 * lift_x from BIP340. Convert 32-byte x coordinate to elliptic curve point.
 * @returns valid point checked for being on-curve
 */ function lift_x(x) {
    if (!fe(x)) throw new Error('bad x: need 0 < x < p'); // Fail if x ≥ p.
    const xx = modP(x * x);
    const c = modP(xx * x + BigInt(7)); // Let c = x³ + 7 mod p.
    let y = sqrtMod(c); // Let y = c^(p+1)/4 mod p.
    if (y % _2n !== _0n) y = modP(-y); // Return the unique point P such that x(P) = x and
    const p = new Point(x, y, _1n); // y(P) = y if y mod 2 = 0 or y(P) = p-y otherwise.
    p.assertValidity();
    return p;
}
/**
 * Create tagged hash, convert it to bigint, reduce modulo-n.
 */ function challenge(...args) {
    return modN((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToNumberBE"])(taggedHash('BIP0340/challenge', ...args)));
}
/**
 * Schnorr public key is just `x` coordinate of Point as per BIP340.
 */ function schnorrGetPublicKey(privateKey) {
    return schnorrGetExtPubKey(privateKey).bytes; // d'=int(sk). Fail if d'=0 or d'≥n. Ret bytes(d'⋅G)
}
/**
 * Creates Schnorr signature as per BIP340. Verifies itself before returning anything.
 * auxRand is optional and is not the sole source of k generation: bad CSPRNG won't be dangerous.
 */ function schnorrSign(message, privateKey, auxRand = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomBytes"])(32)) {
    const m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensureBytes"])('message', message);
    const { bytes: px, scalar: d } = schnorrGetExtPubKey(privateKey); // checks for isWithinCurveOrder
    const a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensureBytes"])('auxRand', auxRand, 32); // Auxiliary random data a: a 32-byte array
    const t = numTo32b(d ^ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToNumberBE"])(taggedHash('BIP0340/aux', a))); // Let t be the byte-wise xor of bytes(d) and hash/aux(a)
    const rand = taggedHash('BIP0340/nonce', t, px, m); // Let rand = hash/nonce(t || bytes(P) || m)
    const k_ = modN((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToNumberBE"])(rand)); // Let k' = int(rand) mod n
    if (k_ === _0n) throw new Error('sign failed: k is zero'); // Fail if k' = 0.
    const { bytes: rx, scalar: k } = schnorrGetExtPubKey(k_); // Let R = k'⋅G.
    const e = challenge(rx, px, m); // Let e = int(hash/challenge(bytes(R) || bytes(P) || m)) mod n.
    const sig = new Uint8Array(64); // Let sig = bytes(R) || bytes((k + ed) mod n).
    sig.set(rx, 0);
    sig.set(numTo32b(modN(k + e * d)), 32);
    // If Verify(bytes(P), m, sig) (see below) returns failure, abort
    if (!schnorrVerify(sig, m, px)) throw new Error('sign: Invalid signature produced');
    return sig;
}
/**
 * Verifies Schnorr signature.
 * Will swallow errors & return false except for initial type validation of arguments.
 */ function schnorrVerify(signature, message, publicKey) {
    const sig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensureBytes"])('signature', signature, 64);
    const m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensureBytes"])('message', message);
    const pub = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensureBytes"])('publicKey', publicKey, 32);
    try {
        const P = lift_x((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToNumberBE"])(pub)); // P = lift_x(int(pk)); fail if that fails
        const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToNumberBE"])(sig.subarray(0, 32)); // Let r = int(sig[0:32]); fail if r ≥ p.
        if (!fe(r)) return false;
        const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToNumberBE"])(sig.subarray(32, 64)); // Let s = int(sig[32:64]); fail if s ≥ n.
        if (!ge(s)) return false;
        const e = challenge(numTo32b(r), pointToBytes(P), m); // int(challenge(bytes(r)||bytes(P)||m))%n
        const R = GmulAdd(P, s, modN(-e)); // R = s⋅G - e⋅P
        if (!R || !R.hasEvenY() || R.toAffine().x !== r) return false; // -eP == (n-e)P
        return true; // Fail if is_infinite(R) / not has_even_y(R) / x(R) ≠ r.
    } catch (error) {
        return false;
    }
}
const schnorr = /* @__PURE__ */ (()=>({
        getPublicKey: schnorrGetPublicKey,
        sign: schnorrSign,
        verify: schnorrVerify,
        utils: {
            randomPrivateKey: secp256k1.utils.randomPrivateKey,
            lift_x,
            pointToBytes,
            numberToBytesBE: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToBytesBE"],
            bytesToNumberBE: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToNumberBE"],
            taggedHash,
            mod: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$modular$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mod"]
        }
    }))();
const isoMap = /* @__PURE__ */ (()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$hash$2d$to$2d$curve$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isogenyMap"])(Fp, [
        // xNum
        [
            '0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa8c7',
            '0x7d3d4c80bc321d5b9f315cea7fd44c5d595d2fc0bf63b92dfff1044f17c6581',
            '0x534c328d23f234e6e2a413deca25caece4506144037c40314ecbd0b53d9dd262',
            '0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa88c'
        ],
        // xDen
        [
            '0xd35771193d94918a9ca34ccbb7b640dd86cd409542f8487d9fe6b745781eb49b',
            '0xedadc6f64383dc1df7c4b2d51b54225406d36b641f5e41bbc52a56612a8c6d14',
            '0x0000000000000000000000000000000000000000000000000000000000000001'
        ],
        // yNum
        [
            '0x4bda12f684bda12f684bda12f684bda12f684bda12f684bda12f684b8e38e23c',
            '0xc75e0c32d5cb7c0fa9d0a54b12a0a6d5647ab046d686da6fdffc90fc201d71a3',
            '0x29a6194691f91a73715209ef6512e576722830a201be2018a765e85a9ecee931',
            '0x2f684bda12f684bda12f684bda12f684bda12f684bda12f684bda12f38e38d84'
        ],
        // yDen
        [
            '0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffff93b',
            '0x7a06534bb8bdb49fd5e9e6632722c2989467c1bfc8e8d978dfb425d2685c2573',
            '0x6484aa716545ca2cf3a70c3fa8fe337e0a3d21162f0d6299a7bf8192bfd2a76f',
            '0x0000000000000000000000000000000000000000000000000000000000000001'
        ]
    ].map((i)=>i.map((j)=>BigInt(j)))))();
const mapSWU = /* @__PURE__ */ (()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$weierstrass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapToCurveSimpleSWU"])(Fp, {
        A: BigInt('0x3f8731abdd661adca08a5558f0f5d272e953d363cb6f0e5d405447c01a444533'),
        B: BigInt('1771'),
        Z: Fp.create(BigInt('-11'))
    }))();
const htf = /* @__PURE__ */ (()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$abstract$2f$hash$2d$to$2d$curve$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createHasher"])(secp256k1.ProjectivePoint, (scalars)=>{
        const { x, y } = mapSWU(Fp.create(scalars[0]));
        return isoMap(x, y);
    }, {
        DST: 'secp256k1_XMD:SHA-256_SSWU_RO_',
        encodeDST: 'secp256k1_XMD:SHA-256_SSWU_NU_',
        p: Fp.ORDER,
        m: 1,
        k: 128,
        expand: 'xmd',
        hash: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$node_modules$2f40$noble$2f$hashes$2f$esm$2f$sha256$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sha256"]
    }))();
const hashToCurve = /* @__PURE__ */ (()=>htf.hashToCurve)();
const encodeToCurve = /* @__PURE__ */ (()=>htf.encodeToCurve)(); //# sourceMappingURL=secp256k1.js.map
}}),
}]);

//# sourceMappingURL=004bd_%40noble_curves_esm_1ce48120._.js.map