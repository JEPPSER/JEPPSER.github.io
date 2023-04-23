(function dartProgram(){function copyProperties(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
b[r]=a[r]}}function mixinPropertiesHard(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
if(!b.hasOwnProperty(r))b[r]=a[r]}}function mixinPropertiesEasy(a,b){Object.assign(b,a)}var z=function(){var t=function(){}
t.prototype={p:{}}
var s=new t()
if(!(s.__proto__&&s.__proto__.p===t.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var r=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(r))return true}}catch(q){}return false}()
function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var t=Object.create(b.prototype)
copyProperties(a.prototype,t)
a.prototype=t}}function inheritMany(a,b){for(var t=0;t<b.length;t++)inherit(b[t],a)}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazyOld(a,b,c,d){var t=a
a[b]=t
a[c]=function(){a[c]=function(){A.eT(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else s=a[b]}finally{if(s===r)a[b]=null
a[c]=function(){return this[b]}}return s}}function lazy(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t)a[b]=d()
a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t){var s=d()
if(a[b]!==t)A.eU(b)
a[b]=s}var r=a[b]
a[c]=function(){return r}
return r}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t)convertToFastObject(a[t])}var y=0
function instanceTearOffGetter(a,b){var t=null
return a?function(c){if(t===null)t=A.c5(b)
return new t(c,this)}:function(){if(t===null)t=A.c5(b)
return new t(this,null)}}function staticTearOffGetter(a){var t=null
return function(){if(t===null)t=A.c5(a).prototype
return t}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number")h+=x
return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var t=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var s=staticTearOffGetter(t)
a[b]=s}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var t=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var s=instanceTearOffGetter(c,t)
a[b]=s}function setOrUpdateInterceptorsByTag(a){var t=v.interceptorsByTag
if(!t){v.interceptorsByTag=a
return}copyProperties(a,t)}function setOrUpdateLeafTags(a){var t=v.leafTags
if(!t){v.leafTags=a
return}copyProperties(a,t)}function updateTypes(a){var t=v.types
var s=t.length
t.push.apply(t,a)
return s}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var t=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},s=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixinEasy,mixinHard:mixinHard,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:t(0,0,null,["$0"],0),_instance_1u:t(0,1,null,["$1"],0),_instance_2u:t(0,2,null,["$2"],0),_instance_0i:t(1,0,null,["$0"],0),_instance_1i:t(1,1,null,["$1"],0),_instance_2i:t(1,2,null,["$2"],0),_static_0:s(0,null,["$0"],0),_static_1:s(1,null,["$1"],0),_static_2:s(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,lazyOld:lazyOld,updateHolder:updateHolder,convertToFastObject:convertToFastObject,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var A={bW:function bW(){},
ae(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
cw(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
dy(a,b,c){return A.cw(A.ae(A.ae(c,a),b))},
cV(a,b,c){return a},
aQ:function aQ(a){this.a=a},
bv:function bv(){},
af:function af(a,b,c){this.a=a
this.b=b
this.$ti=c},
S:function S(a,b,c){this.a=a
this.b=b
this.$ti=c},
d1(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
e(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.bk(a)
return t},
aW(a){var t,s=$.cp
if(s==null)s=$.cp=Symbol("identityHashCode")
t=a[s]
if(t==null){t=Math.random()*0x3fffffff|0
a[s]=t}return t},
bu(a){return A.du(a)},
du(a){var t,s,r,q
if(a instanceof A.j)return A.n(A.bj(a),null)
t=J.a3(a)
if(t===B.B||t===B.D||u.B.b(a)){s=B.m(a)
if(s!=="Object"&&s!=="")return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&q!=="Object"&&q!=="")return q}}return A.n(A.bj(a),null)},
I(a,b){if(a==null)J.cd(a)
throw A.d(A.eC(a,b))},
eC(a,b){var t,s="index"
if(!A.cQ(b))return new A.K(!0,b,s,null)
t=A.bO(J.cd(a))
if(b<0||b>=t)return new A.aK(t,!0,b,s,"Index out of range")
return new A.ac(null,null,!0,b,s,"Value not in range")},
d(a){var t,s
if(a==null)a=new A.aR()
t=new Error()
t.dartException=a
s=A.eV
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:s})
t.name=""}else t.toString=s
return t},
eV(){return J.bk(this.dartException)},
ca(a){throw A.d(a)},
V(a){throw A.d(A.cj(a))},
y(a){var t,s,r,q,p,o
a=A.eS(a.replace(String({}),"$receiver$"))
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=A.T([],u.s)
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new A.bx(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),s,r,q,p,o)},
by(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
cA(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
bX(a,b){var t=b==null,s=t?null:b.method
return new A.aO(a,s,t?null:b.receiver)},
eX(a){if(a==null)return new A.br(a)
if(typeof a!=="object")return a
if("dartException" in a)return A.U(a,a.dartException)
return A.eu(a)},
U(a,b){if(u.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
eu(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((B.b.a4(s,16)&8191)===10)switch(r){case 438:return A.U(a,A.bX(A.e(t)+" (Error "+r+")",f))
case 445:case 5007:q=A.e(t)
return A.U(a,new A.ab(q+" (Error "+r+")",f))}}if(a instanceof TypeError){p=$.d3()
o=$.d4()
n=$.d5()
m=$.d6()
l=$.d9()
k=$.da()
j=$.d8()
$.d7()
i=$.dc()
h=$.db()
g=p.n(t)
if(g!=null)return A.U(a,A.bX(A.bg(t),g))
else{g=o.n(t)
if(g!=null){g.method="call"
return A.U(a,A.bX(A.bg(t),g))}else{g=n.n(t)
if(g==null){g=m.n(t)
if(g==null){g=l.n(t)
if(g==null){g=k.n(t)
if(g==null){g=j.n(t)
if(g==null){g=m.n(t)
if(g==null){g=i.n(t)
if(g==null){g=h.n(t)
q=g!=null}else q=!0}else q=!0}else q=!0}else q=!0}else q=!0}else q=!0}else q=!0
if(q){A.bg(t)
return A.U(a,new A.ab(t,g==null?f:g.method))}}}return A.U(a,new A.b4(typeof t=="string"?t:""))}if(a instanceof RangeError){if(typeof t=="string"&&t.indexOf("call stack")!==-1)return new A.ad()
t=function(b){try{return String(b)}catch(e){}return null}(a)
return A.U(a,new A.K(!1,f,f,typeof t=="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t=="string"&&t==="too much recursion")return new A.ad()
return a},
eI(a){var t
if(a==null)return new A.al(a)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new A.al(a)},
cZ(a){if(a==null||typeof a!="object")return J.cc(a)
else return A.aW(a)},
eD(a,b){var t,s=a.length
for(t=0;t<s;++t)b.j(0,a[t])
return b},
eN(a,b,c,d,e,f){u.Z.a(a)
switch(A.bO(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.d(new A.bF("Unsupported number of arguments for wrapped closure"))},
ax(a,b){var t
if(a==null)return null
t=a.$identity
if(!!t)return t
t=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.eN)
a.$identity=t
return t},
dp(a1){var t,s,r,q,p,o,n,m,l,k,j=a1.co,i=a1.iS,h=a1.iI,g=a1.nDA,f=a1.aI,e=a1.fs,d=a1.cs,c=e[0],b=d[0],a=j[c],a0=a1.fT
a0.toString
t=i?Object.create(new A.b_().constructor.prototype):Object.create(new A.W(null,null).constructor.prototype)
t.$initialize=t.constructor
if(i)s=function static_tear_off(){this.$initialize()}
else s=function tear_off(a2,a3){this.$initialize(a2,a3)}
t.constructor=s
s.prototype=t
t.$_name=c
t.$_target=a
r=!i
if(r)q=A.ci(c,a,h,g)
else{t.$static_name=c
q=a}t.$S=A.dk(a0,i,h)
t[b]=q
for(p=q,o=1;o<e.length;++o){n=e[o]
if(typeof n=="string"){m=j[n]
l=n
n=m}else l=""
k=d[o]
if(k!=null){if(r)n=A.ci(l,n,h,g)
t[k]=n}if(o===f)p=n}t.$C=p
t.$R=a1.rC
t.$D=a1.dV
return s},
dk(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.d("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.di)}throw A.d("Error in functionType of tearoff")},
dl(a,b,c,d){var t=A.ch
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
ci(a,b,c,d){var t,s
if(c)return A.dn(a,b,d)
t=b.length
s=A.dl(t,d,a,b)
return s},
dm(a,b,c,d){var t=A.ch,s=A.dj
switch(b?-1:a){case 0:throw A.d(new A.aX("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,t)
default:return function(e,f,g){return function(){var r=[g(this)]
Array.prototype.push.apply(r,arguments)
return e.apply(f(this),r)}}(d,s,t)}},
dn(a,b,c){var t,s
if($.cf==null)$.cf=A.ce("interceptor")
if($.cg==null)$.cg=A.ce("receiver")
t=b.length
s=A.dm(t,c,a,b)
return s},
c5(a){return A.dp(a)},
di(a,b){return A.bL(v.typeUniverse,A.bj(a.a),b)},
ch(a){return a.a},
dj(a){return a.b},
ce(a){var t,s,r,q=new A.W("receiver","interceptor"),p=Object.getOwnPropertyNames(q)
p.fixed$length=Array
t=p
for(p=t.length,s=0;s<p;++s){r=t[s]
if(q[r]===a)return r}throw A.d(A.dh("Field name "+a+" not found."))},
ez(a){if(a==null)A.ev("boolean expression must not be null")
return a},
ev(a){throw A.d(new A.b7(a))},
eT(a){throw A.d(new A.aF(a))},
eH(a){return v.getIsolateTag(a)},
fy(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
eP(a){var t,s,r,q,p,o=A.bg($.cX.$1(a)),n=$.bQ[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.bU[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=A.e3($.cT.$2(a,o))
if(r!=null){n=$.bQ[r]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.bU[r]
if(t!=null)return t
s=v.interceptorsByTag[r]
o=r}}if(s==null)return null
t=s.prototype
q=o[0]
if(q==="!"){n=A.bV(t)
$.bQ[o]=n
Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}if(q==="~"){$.bU[o]=t
return t}if(q==="-"){p=A.bV(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return A.d_(a,t)
if(q==="*")throw A.d(A.cB(o))
if(v.leafTags[o]===true){p=A.bV(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return A.d_(a,t)},
d_(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.c9(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
bV(a){return J.c9(a,!1,null,!!a.$if5)},
eR(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return A.bV(t)
else return J.c9(t,c,null,null)},
eL(){if(!0===$.c7)return
$.c7=!0
A.eM()},
eM(){var t,s,r,q,p,o,n,m
$.bQ=Object.create(null)
$.bU=Object.create(null)
A.eK()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.d0.$1(p)
if(o!=null){n=A.eR(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
eK(){var t,s,r,q,p,o,n=B.r()
n=A.a2(B.t,A.a2(B.u,A.a2(B.n,A.a2(B.n,A.a2(B.v,A.a2(B.w,A.a2(B.x(B.m),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.cX=new A.bR(q)
$.cT=new A.bS(p)
$.d0=new A.bT(o)},
a2(a,b){return a(b)||b},
eS(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
bx:function bx(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ab:function ab(a,b){this.a=a
this.b=b},
aO:function aO(a,b,c){this.a=a
this.b=b
this.c=c},
b4:function b4(a){this.a=a},
br:function br(a){this.a=a},
al:function al(a){this.a=a
this.b=null},
M:function M(){},
aC:function aC(){},
aD:function aD(){},
b0:function b0(){},
b_:function b_(){},
W:function W(a,b){this.a=a
this.b=b},
aX:function aX(a){this.a=a},
b7:function b7(a){this.a=a},
bR:function bR(a){this.a=a},
bS:function bS(a){this.a=a},
bT:function bT(a){this.a=a},
cr(a,b){var t=b.c
return t==null?b.c=A.c2(a,b.y,!0):t},
cq(a,b){var t=b.c
return t==null?b.c=A.ap(a,"ck",[b.y]):t},
cs(a){var t=a.x
if(t===6||t===7||t===8)return A.cs(a.y)
return t===12||t===13},
dx(a){return a.at},
cW(a){return A.bf(v.typeUniverse,a,!1)},
H(a,b,c,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.x
switch(d){case 5:case 1:case 2:case 3:case 4:return b
case 6:t=b.y
s=A.H(a,t,c,a0)
if(s===t)return b
return A.cI(a,s,!0)
case 7:t=b.y
s=A.H(a,t,c,a0)
if(s===t)return b
return A.c2(a,s,!0)
case 8:t=b.y
s=A.H(a,t,c,a0)
if(s===t)return b
return A.cH(a,s,!0)
case 9:r=b.z
q=A.av(a,r,c,a0)
if(q===r)return b
return A.ap(a,b.y,q)
case 10:p=b.y
o=A.H(a,p,c,a0)
n=b.z
m=A.av(a,n,c,a0)
if(o===p&&m===n)return b
return A.c0(a,o,m)
case 12:l=b.y
k=A.H(a,l,c,a0)
j=b.z
i=A.er(a,j,c,a0)
if(k===l&&i===j)return b
return A.cG(a,k,i)
case 13:h=b.z
a0+=h.length
g=A.av(a,h,c,a0)
p=b.y
o=A.H(a,p,c,a0)
if(g===h&&o===p)return b
return A.c1(a,o,g,!0)
case 14:f=b.y
if(f<a0)return b
e=c[f-a0]
if(e==null)return b
return e
default:throw A.d(A.aB("Attempted to substitute unexpected RTI kind "+d))}},
av(a,b,c,d){var t,s,r,q,p=b.length,o=A.bM(p)
for(t=!1,s=0;s<p;++s){r=b[s]
q=A.H(a,r,c,d)
if(q!==r)t=!0
o[s]=q}return t?o:b},
es(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=A.bM(n)
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=A.H(a,p,c,d)
if(o!==p)t=!0
m.splice(s,3,r,q,o)}return t?m:b},
er(a,b,c,d){var t,s=b.a,r=A.av(a,s,c,d),q=b.b,p=A.av(a,q,c,d),o=b.c,n=A.es(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new A.bb()
t.a=r
t.b=p
t.c=n
return t},
T(a,b){a[v.arrayRti]=b
return a},
eA(a){var t,s=a.$S
if(s!=null){if(typeof s=="number")return A.eJ(s)
t=a.$S()
return t}return null},
cY(a,b){var t
if(A.cs(b))if(a instanceof A.M){t=A.eA(a)
if(t!=null)return t}return A.bj(a)},
bj(a){var t
if(a instanceof A.j){t=a.$ti
return t!=null?t:A.c3(a)}if(Array.isArray(a))return A.as(a)
return A.c3(J.a3(a))},
as(a){var t=a[v.arrayRti],s=u.b
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
fx(a){var t=a.$ti
return t!=null?t:A.c3(a)},
c3(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return A.eb(a,t)},
eb(a,b){var t=a instanceof A.M?a.__proto__.__proto__.constructor:b,s=A.dZ(v.typeUniverse,t.name)
b.$ccache=s
return s},
eJ(a){var t,s=v.types,r=s[a]
if(typeof r=="string"){t=A.bf(v.typeUniverse,r,!1)
s[a]=t
return t}return r},
eB(a){var t,s,r,q=a.w
if(q!=null)return q
t=a.at
s=t.replace(/\*/g,"")
if(s===t)return a.w=new A.be(a)
r=A.bf(v.typeUniverse,s,!0)
q=r.w
return a.w=q==null?r.w=new A.be(r):q},
eW(a){return A.eB(A.bf(v.typeUniverse,a,!1))},
ea(a){var t,s,r,q,p=this
if(p===u.K)return A.a0(p,a,A.ef)
if(!A.B(p))if(!(p===u._))t=!1
else t=!0
else t=!0
if(t)return A.a0(p,a,A.ej)
t=p.x
s=t===6?p.y:p
if(s===u.S)r=A.cQ
else if(s===u.i||s===u.t)r=A.ee
else if(s===u.R)r=A.eh
else r=s===u.w?A.cO:null
if(r!=null)return A.a0(p,a,r)
if(s.x===9){q=s.y
if(s.z.every(A.eO)){p.r="$i"+q
if(q==="aa")return A.a0(p,a,A.ed)
return A.a0(p,a,A.ei)}}else if(t===7)return A.a0(p,a,A.e8)
return A.a0(p,a,A.e6)},
a0(a,b,c){a.b=c
return a.b(b)},
e9(a){var t,s=this,r=A.e5
if(!A.B(s))if(!(s===u._))t=!1
else t=!0
else t=!0
if(t)r=A.e4
else if(s===u.K)r=A.e2
else{t=A.ay(s)
if(t)r=A.e7}s.a=r
return s.a(a)},
bh(a){var t,s=a.x
if(!A.B(a))if(!(a===u._))if(!(a===u.A))if(s!==7)if(!(s===6&&A.bh(a.y)))t=s===8&&A.bh(a.y)||a===u.P||a===u.T
else t=!0
else t=!0
else t=!0
else t=!0
else t=!0
return t},
e6(a){var t=this
if(a==null)return A.bh(t)
return A.h(v.typeUniverse,A.cY(a,t),null,t,null)},
e8(a){if(a==null)return!0
return this.y.b(a)},
ei(a){var t,s=this
if(a==null)return A.bh(s)
t=s.r
if(a instanceof A.j)return!!a[t]
return!!J.a3(a)[t]},
ed(a){var t,s=this
if(a==null)return A.bh(s)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
t=s.r
if(a instanceof A.j)return!!a[t]
return!!J.a3(a)[t]},
e5(a){var t,s=this
if(a==null){t=A.ay(s)
if(t)return a}else if(s.b(a))return a
A.cM(a,s)},
e7(a){var t=this
if(a==null)return a
else if(t.b(a))return a
A.cM(a,t)},
cM(a,b){throw A.d(A.dO(A.cC(a,A.cY(a,b),A.n(b,null))))},
cC(a,b,c){var t=A.aH(a)
return t+": type '"+A.n(b==null?A.bj(a):b,null)+"' is not a subtype of type '"+c+"'"},
dO(a){return new A.an("TypeError: "+a)},
l(a,b){return new A.an("TypeError: "+A.cC(a,null,b))},
ef(a){return a!=null},
e2(a){if(a!=null)return a
throw A.d(A.l(a,"Object"))},
ej(a){return!0},
e4(a){return a},
cO(a){return!0===a||!1===a},
fm(a){if(!0===a)return!0
if(!1===a)return!1
throw A.d(A.l(a,"bool"))},
fo(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.l(a,"bool"))},
fn(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.l(a,"bool?"))},
e0(a){if(typeof a=="number")return a
throw A.d(A.l(a,"double"))},
fq(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.l(a,"double"))},
fp(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.l(a,"double?"))},
cQ(a){return typeof a=="number"&&Math.floor(a)===a},
bO(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.d(A.l(a,"int"))},
fs(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.l(a,"int"))},
fr(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.l(a,"int?"))},
ee(a){return typeof a=="number"},
ft(a){if(typeof a=="number")return a
throw A.d(A.l(a,"num"))},
fu(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.l(a,"num"))},
e1(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.l(a,"num?"))},
eh(a){return typeof a=="string"},
bg(a){if(typeof a=="string")return a
throw A.d(A.l(a,"String"))},
fv(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.l(a,"String"))},
e3(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.l(a,"String?"))},
cS(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=s+A.n(a[r],b)
return t},
em(a,b){var t,s,r,q,p,o,n=a.y,m=a.z
if(""===n)return"("+A.cS(m,b)+")"
t=m.length
s=n.split(",")
r=s.length-t
for(q="(",p="",o=0;o<t;++o,p=", "){q+=p
if(r===0)q+="{"
q+=A.n(m[o],b)
if(r>=0)q+=" "+s[r];++r}return q+"})"},
cN(a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=", "
if(a5!=null){t=a5.length
if(a4==null){a4=A.T([],u.s)
s=null}else s=a4.length
r=a4.length
for(q=t;q>0;--q)B.a.j(a4,"T"+(r+q))
for(p=u.X,o=u._,n="<",m="",q=0;q<t;++q,m=a2){l=a4.length
k=l-1-q
if(!(k>=0))return A.I(a4,k)
n=B.p.P(n+m,a4[k])
j=a5[q]
i=j.x
if(!(i===2||i===3||i===4||i===5||j===p))if(!(j===o))l=!1
else l=!0
else l=!0
if(!l)n+=" extends "+A.n(j,a4)}n+=">"}else{n=""
s=null}p=a3.y
h=a3.z
g=h.a
f=g.length
e=h.b
d=e.length
c=h.c
b=c.length
a=A.n(p,a4)
for(a0="",a1="",q=0;q<f;++q,a1=a2)a0+=a1+A.n(g[q],a4)
if(d>0){a0+=a1+"["
for(a1="",q=0;q<d;++q,a1=a2)a0+=a1+A.n(e[q],a4)
a0+="]"}if(b>0){a0+=a1+"{"
for(a1="",q=0;q<b;q+=3,a1=a2){a0+=a1
if(c[q+1])a0+="required "
a0+=A.n(c[q+2],a4)+" "+c[q]}a0+="}"}if(s!=null){a4.toString
a4.length=s}return n+"("+a0+") => "+a},
n(a,b){var t,s,r,q,p,o,n,m=a.x
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){t=A.n(a.y,b)
return t}if(m===7){s=a.y
t=A.n(s,b)
r=s.x
return(r===12||r===13?"("+t+")":t)+"?"}if(m===8)return"FutureOr<"+A.n(a.y,b)+">"
if(m===9){q=A.et(a.y)
p=a.z
return p.length>0?q+("<"+A.cS(p,b)+">"):q}if(m===11)return A.em(a,b)
if(m===12)return A.cN(a,b,null)
if(m===13)return A.cN(a.y,b,a.z)
if(m===14){o=a.y
n=b.length
o=n-1-o
if(!(o>=0&&o<n))return A.I(b,o)
return b[o]}return"?"},
et(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
e_(a,b){var t=a.tR[b]
for(;typeof t=="string";)t=a.tR[t]
return t},
dZ(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return A.bf(a,b,!1)
else if(typeof n=="number"){t=n
s=A.aq(a,5,"#")
r=A.bM(t)
for(q=0;q<t;++q)r[q]=s
p=A.ap(a,b,r)
o[b]=p
return p}else return n},
dX(a,b){return A.cJ(a.tR,b)},
dW(a,b){return A.cJ(a.eT,b)},
bf(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=A.cF(A.cD(a,null,b,c))
s.set(b,t)
return t},
bL(a,b,c){var t,s,r=b.Q
if(r==null)r=b.Q=new Map()
t=r.get(c)
if(t!=null)return t
s=A.cF(A.cD(a,b,c,!0))
r.set(c,s)
return s},
dY(a,b,c){var t,s,r,q=b.as
if(q==null)q=b.as=new Map()
t=c.at
s=q.get(t)
if(s!=null)return s
r=A.c0(a,b,c.x===10?c.z:[c])
q.set(t,r)
return r},
z(a,b){b.a=A.e9
b.b=A.ea
return b},
aq(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new A.p(null,null)
t.x=b
t.at=c
s=A.z(a,t)
a.eC.set(c,s)
return s},
cI(a,b,c){var t,s=b.at+"*",r=a.eC.get(s)
if(r!=null)return r
t=A.dT(a,b,s,c)
a.eC.set(s,t)
return t},
dT(a,b,c,d){var t,s,r
if(d){t=b.x
if(!A.B(b))s=b===u.P||b===u.T||t===7||t===6
else s=!0
if(s)return b}r=new A.p(null,null)
r.x=6
r.y=b
r.at=c
return A.z(a,r)},
c2(a,b,c){var t,s=b.at+"?",r=a.eC.get(s)
if(r!=null)return r
t=A.dS(a,b,s,c)
a.eC.set(s,t)
return t},
dS(a,b,c,d){var t,s,r,q
if(d){t=b.x
if(!A.B(b))if(!(b===u.P||b===u.T))if(t!==7)s=t===8&&A.ay(b.y)
else s=!0
else s=!0
else s=!0
if(s)return b
else if(t===1||b===u.A)return u.P
else if(t===6){r=b.y
if(r.x===8&&A.ay(r.y))return r
else return A.cr(a,b)}}q=new A.p(null,null)
q.x=7
q.y=b
q.at=c
return A.z(a,q)},
cH(a,b,c){var t,s=b.at+"/",r=a.eC.get(s)
if(r!=null)return r
t=A.dQ(a,b,s,c)
a.eC.set(s,t)
return t},
dQ(a,b,c,d){var t,s,r
if(d){t=b.x
if(!A.B(b))if(!(b===u._))s=!1
else s=!0
else s=!0
if(s||b===u.K)return b
else if(t===1)return A.ap(a,"ck",[b])
else if(b===u.P||b===u.T)return u.Q}r=new A.p(null,null)
r.x=8
r.y=b
r.at=c
return A.z(a,r)},
dU(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new A.p(null,null)
t.x=14
t.y=b
t.at=r
s=A.z(a,t)
a.eC.set(r,s)
return s},
ao(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].at
return t},
dP(a){var t,s,r,q,p,o=a.length
for(t="",s="",r=0;r<o;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
t+=s+q+p+a[r+2].at}return t},
ap(a,b,c){var t,s,r,q=b
if(c.length>0)q+="<"+A.ao(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new A.p(null,null)
s.x=9
s.y=b
s.z=c
if(c.length>0)s.c=c[0]
s.at=q
r=A.z(a,s)
a.eC.set(q,r)
return r},
c0(a,b,c){var t,s,r,q,p,o
if(b.x===10){t=b.y
s=b.z.concat(c)}else{s=c
t=b}r=t.at+(";<"+A.ao(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new A.p(null,null)
p.x=10
p.y=t
p.z=s
p.at=r
o=A.z(a,p)
a.eC.set(r,o)
return o},
dV(a,b,c){var t,s,r="+"+(b+"("+A.ao(c)+")"),q=a.eC.get(r)
if(q!=null)return q
t=new A.p(null,null)
t.x=11
t.y=b
t.z=c
t.at=r
s=A.z(a,t)
a.eC.set(r,s)
return s},
cG(a,b,c){var t,s,r,q,p,o=b.at,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+A.ao(n)
if(k>0){t=m>0?",":""
h+=t+"["+A.ao(l)+"]"}if(i>0){t=m>0?",":""
h+=t+"{"+A.dP(j)+"}"}s=o+(h+")")
r=a.eC.get(s)
if(r!=null)return r
q=new A.p(null,null)
q.x=12
q.y=b
q.z=c
q.at=s
p=A.z(a,q)
a.eC.set(s,p)
return p},
c1(a,b,c,d){var t,s=b.at+("<"+A.ao(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=A.dR(a,b,c,s,d)
a.eC.set(s,t)
return t},
dR(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=A.bM(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.x===1){s[q]=p;++r}}if(r>0){o=A.H(a,b,s,0)
n=A.av(a,c,s,0)
return A.c1(a,o,n,c!==n)}}m=new A.p(null,null)
m.x=13
m.y=b
m.z=c
m.at=d
return A.z(a,m)},
cD(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
cF(a){var t,s,r,q,p,o,n,m,l,k=a.r,j=a.s
for(t=k.length,s=0;s<t;){r=k.charCodeAt(s)
if(r>=48&&r<=57)s=A.dI(s+1,r,k,j)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124)s=A.cE(a,s,k,j,!1)
else if(r===46)s=A.cE(a,s,k,j,!0)
else{++s
switch(r){case 44:break
case 58:j.push(!1)
break
case 33:j.push(!0)
break
case 59:j.push(A.G(a.u,a.e,j.pop()))
break
case 94:j.push(A.dU(a.u,j.pop()))
break
case 35:j.push(A.aq(a.u,5,"#"))
break
case 64:j.push(A.aq(a.u,2,"@"))
break
case 126:j.push(A.aq(a.u,3,"~"))
break
case 60:j.push(a.p)
a.p=j.length
break
case 62:q=a.u
p=j.splice(a.p)
A.c_(a.u,a.e,p)
a.p=j.pop()
o=j.pop()
if(typeof o=="string")j.push(A.ap(q,o,p))
else{n=A.G(q,a.e,o)
switch(n.x){case 12:j.push(A.c1(q,n,p,a.n))
break
default:j.push(A.c0(q,n,p))
break}}break
case 38:A.dJ(a,j)
break
case 42:q=a.u
j.push(A.cI(q,A.G(q,a.e,j.pop()),a.n))
break
case 63:q=a.u
j.push(A.c2(q,A.G(q,a.e,j.pop()),a.n))
break
case 47:q=a.u
j.push(A.cH(q,A.G(q,a.e,j.pop()),a.n))
break
case 40:j.push(-3)
j.push(a.p)
a.p=j.length
break
case 41:A.dH(a,j)
break
case 91:j.push(a.p)
a.p=j.length
break
case 93:p=j.splice(a.p)
A.c_(a.u,a.e,p)
a.p=j.pop()
j.push(p)
j.push(-1)
break
case 123:j.push(a.p)
a.p=j.length
break
case 125:p=j.splice(a.p)
A.dL(a.u,a.e,p)
a.p=j.pop()
j.push(p)
j.push(-2)
break
case 43:m=k.indexOf("(",s)
j.push(k.substring(s,m))
j.push(-4)
j.push(a.p)
a.p=j.length
s=m+1
break
default:throw"Bad character "+r}}}l=j.pop()
return A.G(a.u,a.e,l)},
dI(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
cE(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36||s===124))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.x===10)p=p.y
o=A.e_(t,p.y)[q]
if(o==null)A.ca('No "'+q+'" in "'+A.dx(p)+'"')
d.push(A.bL(t,p,o))}else d.push(q)
return n},
dH(a,b){var t,s,r,q,p,o=null,n=a.u,m=b.pop()
if(typeof m=="number")switch(m){case-1:t=b.pop()
s=o
break
case-2:s=b.pop()
t=o
break
default:b.push(m)
s=o
t=s
break}else{b.push(m)
s=o
t=s}r=A.dG(a,b)
m=b.pop()
switch(m){case-3:m=b.pop()
if(t==null)t=n.sEA
if(s==null)s=n.sEA
q=A.G(n,a.e,m)
p=new A.bb()
p.a=r
p.b=t
p.c=s
b.push(A.cG(n,q,p))
return
case-4:b.push(A.dV(n,b.pop(),r))
return
default:throw A.d(A.aB("Unexpected state under `()`: "+A.e(m)))}},
dJ(a,b){var t=b.pop()
if(0===t){b.push(A.aq(a.u,1,"0&"))
return}if(1===t){b.push(A.aq(a.u,4,"1&"))
return}throw A.d(A.aB("Unexpected extended operation "+A.e(t)))},
dG(a,b){var t=b.splice(a.p)
A.c_(a.u,a.e,t)
a.p=b.pop()
return t},
G(a,b,c){if(typeof c=="string")return A.ap(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.dK(a,b,c)}else return c},
c_(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=A.G(a,b,c[t])},
dL(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=A.G(a,b,c[t])},
dK(a,b,c){var t,s,r=b.x
if(r===10){if(c===0)return b.y
t=b.z
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.y
r=b.x}else if(c===0)return b
if(r!==9)throw A.d(A.aB("Indexed base must be an interface type"))
t=b.z
if(c<=t.length)return t[c-1]
throw A.d(A.aB("Bad index "+c+" for "+b.h(0)))},
h(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
if(b===d)return!0
if(!A.B(d))if(!(d===u._))t=!1
else t=!0
else t=!0
if(t)return!0
s=b.x
if(s===4)return!0
if(A.B(b))return!1
if(b.x!==1)t=!1
else t=!0
if(t)return!0
r=s===14
if(r)if(A.h(a,c[b.y],c,d,e))return!0
q=d.x
t=b===u.P||b===u.T
if(t){if(q===8)return A.h(a,b,c,d.y,e)
return d===u.P||d===u.T||q===7||q===6}if(d===u.K){if(s===8)return A.h(a,b.y,c,d,e)
if(s===6)return A.h(a,b.y,c,d,e)
return s!==7}if(s===6)return A.h(a,b.y,c,d,e)
if(q===6){t=A.cr(a,d)
return A.h(a,b,c,t,e)}if(s===8){if(!A.h(a,b.y,c,d,e))return!1
return A.h(a,A.cq(a,b),c,d,e)}if(s===7){t=A.h(a,u.P,c,d,e)
return t&&A.h(a,b.y,c,d,e)}if(q===8){if(A.h(a,b,c,d.y,e))return!0
return A.h(a,b,c,A.cq(a,d),e)}if(q===7){t=A.h(a,b,c,u.P,e)
return t||A.h(a,b,c,d.y,e)}if(r)return!1
t=s!==12
if((!t||s===13)&&d===u.Z)return!0
if(q===13){if(b===u.g)return!0
if(s!==13)return!1
p=b.z
o=d.z
n=p.length
if(n!==o.length)return!1
c=c==null?p:p.concat(c)
e=e==null?o:o.concat(e)
for(m=0;m<n;++m){l=p[m]
k=o[m]
if(!A.h(a,l,c,k,e)||!A.h(a,k,e,l,c))return!1}return A.cP(a,b.y,c,d.y,e)}if(q===12){if(b===u.g)return!0
if(t)return!1
return A.cP(a,b,c,d,e)}if(s===9){if(q!==9)return!1
return A.ec(a,b,c,d,e)}t=s===11
if(t&&d===u.L)return!0
if(t&&q===11)return A.eg(a,b,c,d,e)
return!1},
cP(a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
if(!A.h(a2,a3.y,a4,a5.y,a6))return!1
t=a3.z
s=a5.z
r=t.a
q=s.a
p=r.length
o=q.length
if(p>o)return!1
n=o-p
m=t.b
l=s.b
k=m.length
j=l.length
if(p+k<o+j)return!1
for(i=0;i<p;++i){h=r[i]
if(!A.h(a2,q[i],a6,h,a4))return!1}for(i=0;i<n;++i){h=m[i]
if(!A.h(a2,q[p+i],a6,h,a4))return!1}for(i=0;i<j;++i){h=m[n+i]
if(!A.h(a2,l[i],a6,h,a4))return!1}g=t.c
f=s.c
e=g.length
d=f.length
for(c=0,b=0;b<d;b+=3){a=f[b]
for(;!0;){if(c>=e)return!1
a0=g[c]
c+=3
if(a<a0)return!1
a1=g[c-2]
if(a0<a){if(a1)return!1
continue}h=f[b+1]
if(a1&&!h)return!1
h=g[c-1]
if(!A.h(a2,f[b+2],a6,h,a4))return!1
break}}for(;c<e;){if(g[c+1])return!1
c+=3}return!0},
ec(a,b,c,d,e){var t,s,r,q,p,o,n,m=b.y,l=d.y
for(;m!==l;){t=a.tR[m]
if(t==null)return!1
if(typeof t=="string"){m=t
continue}s=t[l]
if(s==null)return!1
r=s.length
q=r>0?new Array(r):v.typeUniverse.sEA
for(p=0;p<r;++p)q[p]=A.bL(a,b,s[p])
return A.cK(a,q,null,c,d.z,e)}o=b.z
n=d.z
return A.cK(a,o,null,c,n,e)},
cK(a,b,c,d,e,f){var t,s,r,q=b.length
for(t=0;t<q;++t){s=b[t]
r=e[t]
if(!A.h(a,s,d,r,f))return!1}return!0},
eg(a,b,c,d,e){var t,s=b.z,r=d.z,q=s.length
if(q!==r.length)return!1
if(b.y!==d.y)return!1
for(t=0;t<q;++t)if(!A.h(a,s[t],c,r[t],e))return!1
return!0},
ay(a){var t,s=a.x
if(!(a===u.P||a===u.T))if(!A.B(a))if(s!==7)if(!(s===6&&A.ay(a.y)))t=s===8&&A.ay(a.y)
else t=!0
else t=!0
else t=!0
else t=!0
return t},
eO(a){var t
if(!A.B(a))if(!(a===u._))t=!1
else t=!0
else t=!0
return t},
B(a){var t=a.x
return t===2||t===3||t===4||t===5||a===u.X},
cJ(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
bM(a){return a>0?new Array(a):v.typeUniverse.sEA},
p:function p(a,b){var _=this
_.a=a
_.b=b
_.w=_.r=_.c=null
_.x=0
_.at=_.as=_.Q=_.z=_.y=null},
bb:function bb(){this.c=this.b=this.a=null},
be:function be(a){this.a=a},
ba:function ba(){},
an:function an(a){this.a=a},
dB(){var t,s,r={}
if(self.scheduleImmediate!=null)return A.ew()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
r.a=null
new self.MutationObserver(A.ax(new A.bB(r),1)).observe(t,{childList:true})
return new A.bA(r,t,s)}else if(self.setImmediate!=null)return A.ex()
return A.ey()},
dC(a){self.scheduleImmediate(A.ax(new A.bC(u.M.a(a)),0))},
dD(a){self.setImmediate(A.ax(new A.bD(u.M.a(a)),0))},
dE(a){u.M.a(a)
A.dM(0,a)},
cz(a,b){var t=B.b.v(a.a,1000)
return A.dN(t<0?0:t,b)},
dM(a,b){var t=new A.am(!0)
t.Y(a,b)
return t},
dN(a,b){var t=new A.am(!1)
t.Z(a,b)
return t},
el(){var t,s
for(t=$.a1;t!=null;t=$.a1){$.au=null
s=t.b
$.a1=s
if(s==null)$.at=null
t.a.$0()}},
eq(){$.c4=!0
try{A.el()}finally{$.au=null
$.c4=!1
if($.a1!=null)$.cb().$1(A.cU())}},
ep(a){var t,s,r,q,p,o=$.a1
if(o==null){t=new A.b8(a)
s=$.at
if(s==null){$.a1=$.at=t
if(!$.c4)$.cb().$1(A.cU())}else $.at=s.b=t
$.au=$.at
return}r=new A.b8(a)
q=$.au
if(q==null){r.b=o
$.a1=$.au=r}else{p=q.b
r.b=p
$.au=q.b=r
if(p==null)$.at=r}},
dA(a,b){var t=$.b6
if(t===B.i)return A.cz(a,u.F.a(b))
return A.cz(a,u.F.a(t.a5(b,u.p)))},
en(a,b){A.ep(new A.bP(a,b))},
eo(a,b,c,d,e,f,g){var t,s=$.b6
if(s===c)return d.$1(e)
$.b6=c
t=s
try{s=d.$1(e)
return s}finally{$.b6=t}},
bB:function bB(a){this.a=a},
bA:function bA(a,b,c){this.a=a
this.b=b
this.c=c},
bC:function bC(a){this.a=a},
bD:function bD(a){this.a=a},
am:function am(a){this.a=a
this.b=null
this.c=0},
bK:function bK(a,b){this.a=a
this.b=b},
bJ:function bJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b8:function b8(a){this.a=a
this.b=null},
bN:function bN(){},
bP:function bP(a,b){this.a=a
this.b=b},
bH:function bH(){},
bI:function bI(a,b,c){this.a=a
this.b=b
this.c=c},
dt(a,b){return b.k("cm<0>").a(A.eD(a,new A.ai(b.k("ai<0>"))))},
bZ(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
ds(a,b,c){var t,s
if(A.cR(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=A.T([],u.s)
B.a.j($.A,a)
try{A.ek(a,t)}finally{if(0>=$.A.length)return A.I($.A,-1)
$.A.pop()}s=A.cv(b,u.N.a(t),", ")+c
return s.charCodeAt(0)==0?s:s},
cl(a,b,c){var t,s
if(A.cR(a))return b+"..."+c
t=new A.bw(b)
B.a.j($.A,a)
try{s=t
s.a=A.cv(s.a,a,", ")}finally{if(0>=$.A.length)return A.I($.A,-1)
$.A.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
cR(a){var t,s
for(t=$.A.length,s=0;s<t;++s)if(a===$.A[s])return!0
return!1},
ek(a,b){var t,s,r,q,p,o,n,m,l,k,j,i=a.a,h=A.as(i)
i=new J.x(i,i.length,h.k("x<1>"))
t=new A.S(i,a.b,a.$ti.k("S<1>"))
h=h.c
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.l())return
q=i.d
p=A.e(q==null?h.a(q):q)
B.a.j(b,p)
s+=p.length+2;++r}if(!t.l()){if(r<=5)return
if(0>=b.length)return A.I(b,-1)
o=b.pop()
if(0>=b.length)return A.I(b,-1)
n=b.pop()}else{m=i.d
if(m==null)m=h.a(m);++r
if(!t.l()){if(r<=4){B.a.j(b,A.e(m))
return}o=A.e(m)
if(0>=b.length)return A.I(b,-1)
n=b.pop()
s+=o.length+2}else{l=i.d
if(l==null)l=h.a(l);++r
for(;t.l();m=l,l=k){k=i.d
if(k==null)k=h.a(k);++r
if(r>100){while(!0){if(!(s>75&&r>3))break
if(0>=b.length)return A.I(b,-1)
s-=b.pop().length+2;--r}B.a.j(b,"...")
return}}n=A.e(m)
o=A.e(l)
s+=o.length+n.length+4}}if(r>b.length+2){s+=5
j="..."}else j=null
while(!0){if(!(s>80&&b.length>3))break
if(0>=b.length)return A.I(b,-1)
s-=b.pop().length+2
if(j==null){s+=5
j="..."}}if(j!=null)B.a.j(b,j)
B.a.j(b,n)
B.a.j(b,o)},
ai:function ai(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bd:function bd(a){this.a=a
this.b=null},
aj:function aj(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
aZ:function aZ(){},
ak:function ak(){},
ar:function ar(){},
dq(a){if(a instanceof A.M)return a.h(0)
return"Instance of '"+A.bu(a)+"'"},
dr(a,b){a=A.d(a)
if(a==null)a=u.K.a(a)
a.stack=b.h(0)
throw a
throw A.d("unreachable")},
cv(a,b,c){var t=J.df(b)
if(!t.l())return a
if(c.length===0){do a+=A.e(t.gA())
while(t.l())}else{a+=A.e(t.gA())
for(;t.l();)a=a+c+A.e(t.gA())}return a},
aH(a){if(typeof a=="number"||A.cO(a)||a==null)return J.bk(a)
if(typeof a=="string")return JSON.stringify(a)
return A.dq(a)},
aB(a){return new A.a4(a)},
dh(a){return new A.K(!1,null,null,a)},
dw(a){var t=null
return new A.ac(t,t,!1,t,t,a)},
R(a){return new A.b5(a)},
cB(a){return new A.b3(a)},
cj(a){return new A.aE(a)},
cn(a,b,c,d){var t,s=B.c.gi(a)
b=B.c.gi(b)
c=B.c.gi(c)
d=B.c.gi(d)
t=$.dd()
return A.cw(A.ae(A.ae(A.ae(A.ae(t,s),b),c),d))},
aG:function aG(a){this.a=a},
bE:function bE(){},
f:function f(){},
a4:function a4(a){this.a=a},
b2:function b2(){},
aR:function aR(){},
K:function K(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ac:function ac(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
aK:function aK(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
b5:function b5(a){this.a=a},
b3:function b3(a){this.a=a},
aE:function aE(a){this.a=a},
aS:function aS(){},
ad:function ad(){},
aF:function aF(a){this.a=a},
bF:function bF(a){this.a=a},
o:function o(){},
E:function E(){},
q:function q(){},
j:function j(){},
bw:function bw(a){this.a=a},
cL(a){var t
if("postMessage" in a){t=A.dF(a)
return t}else return u.O.a(a)},
dF(a){if(a===window)return u.y.a(a)
else return new A.b9()},
c:function c(){},
az:function az(){},
aA:function aA(){},
L:function L(){},
a5:function a5(){},
t:function t(){},
bn:function bn(){},
a6:function a6(){},
a:function a(){},
b:function b(){},
i:function i(){},
aI:function aI(){},
X:function X(){},
w:function w(){},
m:function m(){},
aY:function aY(){},
r:function r(){},
ag:function ag(){},
ah:function ah(){},
b9:function b9(){},
bc:function bc(){},
P:function P(a,b,c){this.a=a
this.b=b
this.$ti=c},
bl:function bl(a,b,c){var _=this
_.b=a
_.c=b
_.e=c
_.r=0},
bt:function bt(a){this.b=a},
C:function C(a){this.b=a},
bm:function bm(){},
u:function u(){},
bo:function bo(a){this.a=a},
aJ:function aJ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.e=d
_.r=_.f=null
_.w=e
_.x=f
_.y=g
_.z=null
_.Q=0},
bp:function bp(a){this.a=a},
D:function D(){var _=this
_.y=!1
_.f=_.e=_.d=_.c=_.b=_.a=0
_.r=!0
_.w=!1
_.x=0},
aP:function aP(a,b){var _=this
_.e=a
_.a=b
_.c=_.b=0
_.d=!1},
Z:function Z(){},
aT:function aT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.w=_.r=_.f=_.e=0
_.x=!1},
co(a,b,c,d){var t=document.createElement("img"),s=new A.aV(t)
s.a=a
s.b=b
s.c=c
s.d=d
s.w=!0
s.x=1
B.A.sT(t,"../assets/img/player.png")
return s},
aV:function aV(a){var _=this
_.y=null
_.z=!1
_.Q=a
_.f=_.e=_.d=_.c=_.b=_.a=0
_.r=!0
_.w=!1
_.x=0},
bs:function bs(a){this.a=a},
eU(a){return A.ca(new A.aQ("Field '"+a+"' has been assigned during initialization."))},
eQ(){var t,s,r=u.E.a(document.querySelector("#canvas")),q=r.getContext("2d"),p=A.T([],u.n),o=new A.aP(B.o,A.T([],u.I))
o.X()
t=A.T([],u.a)
s=new A.aJ(30,r,q,p,o,t,A.co(150,300,50,50))
s.a7()
B.a.j(t,o)
s.F(0)}},J={
c9(a,b,c,d){return{i:a,p:b,e:c,x:d}},
c6(a){var t,s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.c7==null){A.eL()
o=a[v.dispatchPropertyName]}if(o!=null){t=o.p
if(!1===t)return o.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return o.i
if(o.e===s)throw A.d(A.cB("Return interceptor for "+A.e(t(a,o))))}r=a.constructor
if(r==null)q=null
else{p=$.bG
if(p==null)p=$.bG=v.getIsolateTag("_$dart_js")
q=r[p]}if(q!=null)return q
q=A.eP(a)
if(q!=null)return q
if(typeof a=="function")return B.C
t=Object.getPrototypeOf(a)
if(t==null)return B.q
if(t===Object.prototype)return B.q
if(typeof r=="function"){p=$.bG
if(p==null)p=$.bG=v.getIsolateTag("_$dart_js")
Object.defineProperty(r,p,{value:B.l,enumerable:false,writable:true,configurable:true})
return B.l}return B.l},
a3(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.a8.prototype
return J.aN.prototype}if(typeof a=="string")return J.Y.prototype
if(a==null)return J.aM.prototype
if(typeof a=="boolean")return J.aL.prototype
if(a.constructor==Array)return J.k.prototype
if(typeof a!="object"){if(typeof a=="function")return J.F.prototype
return a}if(a instanceof A.j)return a
return J.c6(a)},
eE(a){if(a==null)return a
if(a.constructor==Array)return J.k.prototype
if(!(a instanceof A.j))return J.a_.prototype
return a},
eF(a){if(typeof a=="string")return J.Y.prototype
if(a==null)return a
if(a.constructor==Array)return J.k.prototype
if(typeof a!="object"){if(typeof a=="function")return J.F.prototype
return a}if(a instanceof A.j)return a
return J.c6(a)},
eG(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.F.prototype
return a}if(a instanceof A.j)return a
return J.c6(a)},
de(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.a3(a).p(a,b)},
cc(a){return J.a3(a).gi(a)},
df(a){return J.eE(a).gM(a)},
cd(a){return J.eF(a).gm(a)},
dg(a){return J.eG(a).gac(a)},
bk(a){return J.a3(a).h(a)},
a7:function a7(){},
aL:function aL(){},
aM:function aM(){},
v:function v(){},
O:function O(){},
aU:function aU(){},
a_:function a_(){},
F:function F(){},
k:function k(a){this.$ti=a},
bq:function bq(a){this.$ti=a},
x:function x(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
a9:function a9(){},
a8:function a8(){},
aN:function aN(){},
Y:function Y(){}},B={}
var w=[A,J,B]
var $={}
A.bW.prototype={}
J.a7.prototype={
p(a,b){return a===b},
gi(a){return A.aW(a)},
h(a){return"Instance of '"+A.bu(a)+"'"}}
J.aL.prototype={
h(a){return String(a)},
gi(a){return a?519018:218159},
$iaw:1}
J.aM.prototype={
p(a,b){return null==b},
h(a){return"null"},
gi(a){return 0}}
J.v.prototype={}
J.O.prototype={
gi(a){return 0},
h(a){return String(a)}}
J.aU.prototype={}
J.a_.prototype={}
J.F.prototype={
h(a){var t=a[$.d2()]
if(t==null)return this.V(a)
return"JavaScript function for "+J.bk(t)},
$iN:1}
J.k.prototype={
j(a,b){A.as(a).c.a(b)
if(!!a.fixed$length)A.ca(A.R("add"))
a.push(b)},
h(a){return A.cl(a,"[","]")},
gM(a){return new J.x(a,a.length,A.as(a).k("x<1>"))},
gi(a){return A.aW(a)},
gm(a){return a.length},
$io:1,
$iaa:1}
J.bq.prototype={}
J.x.prototype={
gA(){var t=this.d
return t==null?this.$ti.c.a(t):t},
l(){var t,s=this,r=s.a,q=r.length
if(s.b!==q)throw A.d(A.V(r))
t=s.c
if(t>=q){s.sJ(null)
return!1}s.sJ(r[t]);++s.c
return!0},
sJ(a){this.d=this.$ti.k("1?").a(a)},
$iE:1}
J.a9.prototype={
O(a){var t
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){t=a<0?Math.ceil(a):Math.floor(a)
return t+0}throw A.d(A.R(""+a+".toInt()"))},
ae(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.d(A.R(""+a+".round()"))},
h(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gi(a){var t,s,r,q,p=a|0
if(a===p)return p&536870911
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259&536870911},
R(a,b){var t=a%b
if(t===0)return 0
if(t>0)return t
return t+b},
W(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.K(a,b)},
v(a,b){return(a|0)===a?a/b|0:this.K(a,b)},
K(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw A.d(A.R("Result of truncating division is "+A.e(t)+": "+A.e(a)+" ~/ "+b))},
a4(a,b){var t
if(a>0)t=this.a3(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
a3(a,b){return b>31?0:a>>>b},
$ibi:1,
$iJ:1}
J.a8.prototype={$ic8:1}
J.aN.prototype={}
J.Y.prototype={
P(a,b){return a+b},
S(a,b){var t,s
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.d(B.y)
for(t=a,s="";!0;){if((b&1)===1)s=t+s
b=b>>>1
if(b===0)break
t+=t}return s},
ad(a,b,c){var t=b-a.length
if(t<=0)return a
return this.S(c,t)+a},
h(a){return a},
gi(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=s+a.charCodeAt(r)&536870911
s=s+((s&524287)<<10)&536870911
s^=s>>6}s=s+((s&67108863)<<3)&536870911
s^=s>>11
return s+((s&16383)<<15)&536870911},
gm(a){return a.length},
$iQ:1}
A.aQ.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.bv.prototype={}
A.af.prototype={}
A.S.prototype={
l(){var t,s,r,q
for(t=this.a,s=this.b,r=t.$ti.c;t.l();){q=t.d
if(A.ez(s.$1(q==null?r.a(q):q)))return!0}return!1}}
A.bx.prototype={
n(a){var t,s,r=this,q=new RegExp(r.a).exec(a)
if(q==null)return null
t=Object.create(null)
s=r.b
if(s!==-1)t.arguments=q[s+1]
s=r.c
if(s!==-1)t.argumentsExpr=q[s+1]
s=r.d
if(s!==-1)t.expr=q[s+1]
s=r.e
if(s!==-1)t.method=q[s+1]
s=r.f
if(s!==-1)t.receiver=q[s+1]
return t}}
A.ab.prototype={
h(a){var t=this.b
if(t==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+t+"' on null"}}
A.aO.prototype={
h(a){var t,s=this,r="NoSuchMethodError: method not found: '",q=s.b
if(q==null)return"NoSuchMethodError: "+s.a
t=s.c
if(t==null)return r+q+"' ("+s.a+")"
return r+q+"' on '"+t+"' ("+s.a+")"}}
A.b4.prototype={
h(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
A.br.prototype={
h(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.al.prototype={
h(a){var t,s=this.b
if(s!=null)return s
s=this.a
t=s!==null&&typeof s==="object"?s.stack:null
return this.b=t==null?"":t},
$icu:1}
A.M.prototype={
h(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+A.d1(s==null?"unknown":s)+"'"},
$iN:1,
gai(){return this},
$C:"$1",
$R:1,
$D:null}
A.aC.prototype={$C:"$0",$R:0}
A.aD.prototype={$C:"$2",$R:2}
A.b0.prototype={}
A.b_.prototype={
h(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+A.d1(t)+"'"}}
A.W.prototype={
p(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.W))return!1
return this.$_target===b.$_target&&this.a===b.a},
gi(a){return(A.cZ(this.a)^A.aW(this.$_target))>>>0},
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.bu(this.a)+"'")}}
A.aX.prototype={
h(a){return"RuntimeError: "+this.a}}
A.b7.prototype={
h(a){return"Assertion failed: "+A.aH(this.a)}}
A.bR.prototype={
$1(a){return this.a(a)},
$S:3}
A.bS.prototype={
$2(a,b){return this.a(a,b)},
$S:4}
A.bT.prototype={
$1(a){return this.a(A.bg(a))},
$S:5}
A.p.prototype={
k(a){return A.bL(v.typeUniverse,this,a)},
aj(a){return A.dY(v.typeUniverse,this,a)}}
A.bb.prototype={}
A.be.prototype={
h(a){return A.n(this.a,null)}}
A.ba.prototype={
h(a){return this.a}}
A.an.prototype={}
A.bB.prototype={
$1(a){var t=this.a,s=t.a
t.a=null
s.$0()},
$S:6}
A.bA.prototype={
$1(a){var t,s
this.a.a=u.M.a(a)
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:7}
A.bC.prototype={
$0(){this.a.$0()},
$S:0}
A.bD.prototype={
$0(){this.a.$0()},
$S:0}
A.am.prototype={
Y(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(A.ax(new A.bK(this,b),0),a)
else throw A.d(A.R("`setTimeout()` not found."))},
Z(a,b){if(self.setTimeout!=null)this.b=self.setInterval(A.ax(new A.bJ(this,a,Date.now(),b),0),a)
else throw A.d(A.R("Periodic timer."))},
a6(){if(self.setTimeout!=null){var t=this.b
if(t==null)return
if(this.a)self.clearTimeout(t)
else self.clearInterval(t)
this.b=null}else throw A.d(A.R("Canceling a timer."))},
$ib1:1}
A.bK.prototype={
$0(){var t=this.a
t.b=null
t.c=1
this.b.$0()},
$S:1}
A.bJ.prototype={
$0(){var t,s=this,r=s.a,q=r.c+1,p=s.b
if(p>0){t=Date.now()-s.c
if(t>(q+1)*p)q=B.b.W(t,p)}r.c=q
s.d.$1(r)},
$S:0}
A.b8.prototype={}
A.bN.prototype={}
A.bP.prototype={
$0(){var t=this.a,s=this.b
A.cV(t,"error",u.K)
A.cV(s,"stackTrace",u.l)
A.dr(t,s)},
$S:1}
A.bH.prototype={
af(a,b,c){var t,s,r
c.k("~(0)").a(a)
c.a(b)
try{if(B.i===$.b6){a.$1(b)
return}A.eo(null,null,this,a,b,u.u,c)}catch(r){t=A.eX(r)
s=A.eI(r)
A.en(u.K.a(t),u.l.a(s))}},
a5(a,b){return new A.bI(this,b.k("~(0)").a(a),b)}}
A.bI.prototype={
$1(a){var t=this.c
return this.a.af(this.b,t.a(a),t)},
$S(){return this.c.k("~(0)")}}
A.ai.prototype={
gM(a){var t=this,s=new A.aj(t,t.r,t.$ti.k("aj<1>"))
s.c=t.e
return s},
gm(a){return this.a},
j(a,b){var t,s,r=this
r.$ti.c.a(b)
if(typeof b=="string"&&b!=="__proto__"){t=r.b
return r.H(t==null?r.b=A.bZ():t,b)}else if(typeof b=="number"&&(b&1073741823)===b){s=r.c
return r.H(s==null?r.c=A.bZ():s,b)}else return r.a_(b)},
a_(a){var t,s,r,q=this
q.$ti.c.a(a)
t=q.d
if(t==null)t=q.d=A.bZ()
s=J.cc(a)&1073741823
r=t[s]
if(r==null)t[s]=[q.D(a)]
else{if(q.a2(r,a)>=0)return!1
r.push(q.D(a))}return!0},
H(a,b){this.$ti.c.a(b)
if(u.U.a(a[b])!=null)return!1
a[b]=this.D(b)
return!0},
D(a){var t=this,s=new A.bd(t.$ti.c.a(a))
if(t.e==null)t.e=t.f=s
else t.f=t.f.b=s;++t.a
t.r=t.r+1&1073741823
return s},
a2(a,b){var t,s=a.length
for(t=0;t<s;++t)if(J.de(a[t].a,b))return t
return-1},
$icm:1}
A.bd.prototype={}
A.aj.prototype={
gA(){var t=this.d
return t==null?this.$ti.c.a(t):t},
l(){var t=this,s=t.c,r=t.a
if(t.b!==r.r)throw A.d(A.cj(r))
else if(s==null){t.sI(null)
return!1}else{t.sI(t.$ti.k("1?").a(s.a))
t.c=s.b
return!0}},
sI(a){this.d=this.$ti.k("1?").a(a)},
$iE:1}
A.aZ.prototype={
h(a){return A.cl(this,"{","}")}}
A.ak.prototype={$io:1}
A.ar.prototype={}
A.aG.prototype={
p(a,b){if(b==null)return!1
return b instanceof A.aG&&this.a===b.a},
gi(a){return B.b.gi(this.a)},
h(a){var t,s,r,q,p=this.a,o=p<0?"-":"",n=B.b.v(p,36e8)
p%=36e8
if(p<0)p=-p
t=B.b.v(p,6e7)
p%=6e7
s=t<10?"0":""
r=B.b.v(p,1e6)
q=r<10?"0":""
return o+Math.abs(n)+":"+s+t+":"+q+r+"."+B.p.ad(B.b.h(p%1e6),6,"0")}}
A.bE.prototype={
h(a){return this.a1()}}
A.f.prototype={}
A.a4.prototype={
h(a){var t=this.a
if(t!=null)return"Assertion failed: "+A.aH(t)
return"Assertion failed"}}
A.b2.prototype={}
A.aR.prototype={
h(a){return"Throw of null."}}
A.K.prototype={
gC(){return"Invalid argument"+(!this.a?"(s)":"")},
gB(){return""},
h(a){var t=this,s=t.c,r=s==null?"":" ("+s+")",q=t.d,p=q==null?"":": "+q,o=t.gC()+r+p
if(!t.a)return o
return o+t.gB()+": "+A.aH(t.gE())},
gE(){return this.b}}
A.ac.prototype={
gE(){return A.e1(this.b)},
gC(){return"RangeError"},
gB(){var t,s=this.e,r=this.f
if(s==null)t=r!=null?": Not less than or equal to "+A.e(r):""
else if(r==null)t=": Not greater than or equal to "+A.e(s)
else if(r>s)t=": Not in inclusive range "+A.e(s)+".."+A.e(r)
else t=r<s?": Valid value range is empty":": Only valid value is "+A.e(s)
return t}}
A.aK.prototype={
gE(){return A.bO(this.b)},
gC(){return"RangeError"},
gB(){if(A.bO(this.b)<0)return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+t},
gm(a){return this.f}}
A.b5.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.b3.prototype={
h(a){return"UnimplementedError: "+this.a}}
A.aE.prototype={
h(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.aH(t)+"."}}
A.aS.prototype={
h(a){return"Out of Memory"},
$if:1}
A.ad.prototype={
h(a){return"Stack Overflow"},
$if:1}
A.aF.prototype={
h(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.bF.prototype={
h(a){return"Exception: "+this.a}}
A.o.prototype={
gm(a){var t,s=this.a,r=new A.S(new J.x(s,s.length,A.as(s).k("x<1>")),this.b,this.$ti.k("S<1>"))
for(t=0;r.l();)++t
return t},
h(a){return A.ds(this,"(",")")}}
A.E.prototype={}
A.q.prototype={
gi(a){return A.j.prototype.gi.call(this,this)},
h(a){return"null"}}
A.j.prototype={$ij:1,
p(a,b){return this===b},
gi(a){return A.aW(this)},
h(a){return"Instance of '"+A.bu(this)+"'"},
toString(){return this.h(this)}}
A.bw.prototype={
gm(a){return this.a.length},
h(a){var t=this.a
return t.charCodeAt(0)==0?t:t}}
A.c.prototype={}
A.az.prototype={
h(a){return String(a)}}
A.aA.prototype={
h(a){return String(a)}}
A.L.prototype={$iL:1}
A.a5.prototype={
su(a,b){a.fillStyle=b},
$ia5:1}
A.t.prototype={
gm(a){return a.length}}
A.bn.prototype={
h(a){return String(a)}}
A.a6.prototype={
h(a){var t,s,r,q=a.left
q.toString
t=a.top
t.toString
s=a.width
s.toString
r=a.height
r.toString
return"Rectangle ("+A.e(q)+", "+A.e(t)+") "+A.e(s)+" x "+A.e(r)},
p(a,b){var t,s
if(b==null)return!1
if(u.q.b(b)){t=a.left
t.toString
s=b.left
s.toString
if(t===s){t=a.top
t.toString
s=b.top
s.toString
if(t===s){t=a.width
t.toString
s=b.width
s.toString
if(t===s){t=a.height
t.toString
s=b.height
s.toString
s=t===s
t=s}else t=!1}else t=!1}else t=!1}else t=!1
return t},
gi(a){var t,s,r,q=a.left
q.toString
t=a.top
t.toString
s=a.width
s.toString
r=a.height
r.toString
return A.cn(q,t,s,r)},
$ibY:1}
A.a.prototype={
h(a){return a.localName},
$ia:1}
A.b.prototype={$ib:1}
A.i.prototype={
a0(a,b,c,d){return a.addEventListener(b,A.ax(u.o.a(c),1),d)},
$ii:1}
A.aI.prototype={
gm(a){return a.length}}
A.X.prototype={
sT(a,b){a.src=b},
$iX:1}
A.w.prototype={
gac(a){var t,s,r,q,p,o
if(!!a.offsetX)return new A.P(a.offsetX,a.offsetY,u.H)
else{t=a.target
s=u.h
if(!s.b(A.cL(t)))throw A.d(A.R("offsetX is only supported on elements"))
r=s.a(A.cL(t))
t=a.clientX
s=a.clientY
q=u.H
p=r.getBoundingClientRect()
o=p.left
o.toString
p=p.top
p.toString
q.a(new A.P(o,p,q))
return new A.P(B.c.O(t-o),B.c.O(s-p),q)}},
$iw:1}
A.m.prototype={
h(a){var t=a.nodeValue
return t==null?this.U(a):t}}
A.aY.prototype={
gm(a){return a.length}}
A.r.prototype={}
A.ag.prototype={$ibz:1}
A.ah.prototype={
h(a){var t,s,r,q=a.left
q.toString
t=a.top
t.toString
s=a.width
s.toString
r=a.height
r.toString
return"Rectangle ("+A.e(q)+", "+A.e(t)+") "+A.e(s)+" x "+A.e(r)},
p(a,b){var t,s
if(b==null)return!1
if(u.q.b(b)){t=a.left
t.toString
s=b.left
s.toString
if(t===s){t=a.top
t.toString
s=b.top
s.toString
if(t===s){t=a.width
t.toString
s=b.width
s.toString
if(t===s){t=a.height
t.toString
s=b.height
s.toString
s=t===s
t=s}else t=!1}else t=!1}else t=!1}else t=!1
return t},
gi(a){var t,s,r,q=a.left
q.toString
t=a.top
t.toString
s=a.width
s.toString
r=a.height
r.toString
return A.cn(q,t,s,r)}}
A.b9.prototype={$ii:1,$ibz:1}
A.bc.prototype={
ab(a){if(a<=0||a>4294967296)throw A.d(A.dw("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0},
N(){return Math.random()},
$idv:1}
A.P.prototype={
h(a){return"Point("+A.e(this.a)+", "+A.e(this.b)+")"},
p(a,b){if(b==null)return!1
return b instanceof A.P&&this.a===b.a&&this.b===b.b},
gi(a){return A.dy(B.c.gi(this.a),B.c.gi(this.b),0)}}
A.bl.prototype={
q(a,b,c){var t,s,r,q,p,o,n,m=this
u.r.a(b)
u.c.a(c)
t=m.b
s=t.b
r=m.c.b
q=Math.abs(s-r)
if(q<5){t.b=r
t=r}else{p=s<r?0:-1
t=t.b=s+p*(q<100?5*(1-(100-q)/100):5)}m.r=t-m.e/2
for(t=b.length,o=0;o<b.length;b.length===t||(0,A.V)(b),++o)b[o].q(a,0,m.r)
for(t=c.length,o=0;o<c.length;c.length===t||(0,A.V)(c),++o){n=c[o]
if(n.d)n.q(a,0,m.r)}}}
A.bt.prototype={}
A.C.prototype={
a1(){return"Direction."+this.b}}
A.bm.prototype={}
A.u.prototype={}
A.bo.prototype={}
A.aJ.prototype={
F(a){var t,s,r=this,q=r.b
q.clientWidth
q.clientHeight
q=r.d
if(q!=null)q.a6()
r.d=A.dA(new A.aG(1000*B.c.ae(1000/r.a)),r.gah())
r.Q=0
q=A.co(150,300,50,50)
r.y=q
q.y=r.w
r.sa8(A.T([],u.n))
for(t=0;t<50;++t){q=r.e
s=new A.D()
s.a=B.o.N()*260
s.b=200-t*200
s.c=100
s.d=20
B.a.j(q,s)}q=r.e
s=new A.D()
s.G(100,600,200,20)
B.a.j(q,s)
s=r.e
q=new A.D()
q.G(0,400,100,20)
B.a.j(s,q)
B.a.j(r.e,r.y)
r.f=new A.bo(1.5)
r.r=new A.bm()
q=r.y
s=new A.bt(0)
s.b=q.b
r.z=new A.bl(s,q,640)},
t(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=d.c
B.e.su(c,"#151515")
c.fillRect(0,0,360,640)
t=$.cx
$.dz=t
s=a.c
$.cx=s
$.cy=s-t
d.w.t(d)
for(t=d.e,s=t.length,r=0;r<t.length;t.length===s||(0,A.V)(t),++r)t[r].t(d)
for(t=d.e,s=t.length,q=u.j,r=0;r<t.length;t.length===s||(0,A.V)(t),++r){p=t[r]
o=d.f
if(o!=null)if(p.w){o=p.f=p.f+p.x*o.a
p.b+=o>100?p.f=100:o}p.a=p.a+p.e
for(o=d.e,n=o.length,m=0;m<o.length;o.length===n||(0,A.V)(o),++m){l=o[m]
k=p!==l
if(k){if(d.r==null)j=null
else{k=p.a
i=l.a
h=i+l.c
if(k<h)if(k+p.c>i){g=p.b
f=l.b
g=g<f+l.d&&g+p.d>f}else g=!1
else g=!1
if(g){g=p.b
f=l.b
if(g>=f&&g<=f+l.d){if(k<=i)e=k+p.c-i
else e=k+p.c>=h?k-h:1000
if(f+l.d-g<=Math.abs(e))j=B.j
else if(e>0)j=B.h
else j=e<0?B.f:B.d}else{g+=p.d
if(g>=f&&g<=f+l.d){if(k<=i)e=k+p.c-i
else e=k+p.c>=h?k-h:1000
if(g-f<=Math.abs(e))j=B.k
else if(e>0)j=B.h
else j=e<0?B.f:B.d}else if(k<i)j=B.h
else j=k+p.c>h?B.f:B.d}}else j=B.d}p.L(l,j==null?q.a(j):j)}}}t=d.z
if(t!=null)t.q(c,d.e,d.x)
B.e.su(c,"white")
c.font="16px sans-serif"
c.fillText("SCORE: "+d.Q,10,20)},
a7(){B.z.a0(this.b,"mousedown",u.o.a(new A.bp(this)),null)},
sa8(a){this.e=u.r.a(a)}}
A.bp.prototype={
$1(a){a=u.V.a(u.z.a(a))
this.a.y.a9(a)
return A.dt([null],u.D)},
$S:9}
A.D.prototype={
G(a,b,c,d){var t=this
t.a=a
t.b=b
t.c=c
t.d=d},
t(a){},
q(a,b,c){var t=this
B.e.su(a,t.y?"gray":"white")
a.fillRect(t.a-b,t.b-c,t.c,t.d)},
L(a,b){var t,s,r
switch(b){case B.d:break
case B.j:t=a.e
s=t>0?1:-1
t=Math.abs(t)>0?t-s/2:0
a.e=t
r=Math.abs(t)
a.e=r>0&&r<1?0:t
if(a.f>=0){a.b=this.b-a.d
a.f=0}break
case B.k:break
case B.f:break
case B.h:break}}}
A.aP.prototype={
X(){var t,s
for(t=this.a,s=0;s<10;++s)B.a.j(t,new A.aT(this.b,this.c,5,5))},
ag(a,b){var t,s,r,q,p,o,n=this
n.d=!0
n.b=a
n.c=b
for(t=n.a,s=t.length,r=n.e,q=0;q<t.length;t.length===s||(0,A.V)(t),++q){p=t[q]
p.w=0
o=r.N()*3.141592653589793/4+1.5707963267948966
o=B.b.R(r.ab(10),2)===0?o:6.283185307179586-o
p.e=Math.sin(o)*10
p.f=Math.cos(o)*10
p.a=a+50*(1-o/4.71238898038469)
p.b=b
p.r=10
p.w=0
p.x=!0}},
q(a,b,c){var t,s,r,q
for(t=this.a,s=t.length,r=0;r<t.length;t.length===s||(0,A.V)(t),++r){q=t[r]
if(q.x){B.e.su(a,"rgba(255, 255, 255, "+A.e(1-q.w/q.r)+")")
a.fillRect(q.a-b,q.b-c,q.c,q.d)}}},
t(a){var t,s,r,q,p,o,n
if(a.d!=null)for(t=this.a,s=t.length,r=$.cy,q=0;q<s;++q){p=t[q]
if(p.x){p.a=p.a+p.e
o=p.b
n=p.f
p.b=o+n
o=p.w+=r
p.f=n+1
if(o>p.r)p.x=!1}}}}
A.Z.prototype={}
A.aT.prototype={}
A.aV.prototype={
t(a){var t=this,s=a.e,r=A.as(s)
r=new A.af(s,r.k("aw(1)").a(new A.bs(t)),r.k("af<1>"))
a.Q=r.gm(r)
s=t.b
r=a.z
r=r==null?null:r.r
if(s-(r==null?A.e0(r):r)>640)a.F(0)
s=t.a
r=t.c
if(s+r>360){t.e*=-1
t.a=360-r-1}else if(s<0){t.e*=-1
t.a=1}t.z=!1},
q(a,b,c){var t=this
B.e.su(a,"yellow")
a.fillRect(t.a-b,t.b-c,t.c,t.d)},
L(a,b){var t,s=this
switch(b){case B.d:break
case B.j:break
case B.k:if(s.f>0){s.z=!0
if(a instanceof A.D){if(!a.y){t=s.y
if(t!=null)t.ag(s.a,a.b)}a.y=!0}}break
case B.f:break
case B.h:break}},
a9(a){var t=this
if(!t.z)return
t.e=(J.dg(a).a-(t.a+t.c/2))/30
t.f=-30
t.b-=20},
aa(a){if(a instanceof A.D)return a.y
return!1}}
A.bs.prototype={
$1(a){return this.a.aa(u.v.a(a))},
$S:10};(function aliases(){var t=J.a7.prototype
t.U=t.h
t=J.O.prototype
t.V=t.h})();(function installTearOffs(){var t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers._instance_1u
t(A,"ew","dC",2)
t(A,"ex","dD",2)
t(A,"ey","dE",2)
s(A,"cU","eq",1)
r(A.aJ.prototype,"gah","t",8)})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(A.j,null)
r(A.j,[A.bW,J.a7,J.x,A.f,A.bv,A.o,A.E,A.bx,A.br,A.al,A.M,A.p,A.bb,A.be,A.am,A.b8,A.bN,A.ar,A.bd,A.aj,A.aZ,A.aG,A.bE,A.aS,A.ad,A.bF,A.q,A.bw,A.b9,A.bc,A.P,A.bl,A.bt,A.bm,A.u,A.bo,A.aJ,A.Z,A.aT])
r(J.a7,[J.aL,J.aM,J.v,J.k,J.a9,J.Y])
r(J.v,[J.O,A.i,A.a5,A.bn,A.a6,A.b])
r(J.O,[J.aU,J.a_,J.F])
s(J.bq,J.k)
r(J.a9,[J.a8,J.aN])
r(A.f,[A.aQ,A.b2,A.aO,A.b4,A.aX,A.a4,A.ba,A.aR,A.K,A.b5,A.b3,A.aE,A.aF])
s(A.af,A.o)
s(A.S,A.E)
s(A.ab,A.b2)
r(A.M,[A.aC,A.aD,A.b0,A.bR,A.bT,A.bB,A.bA,A.bI,A.bp,A.bs])
r(A.b0,[A.b_,A.W])
s(A.b7,A.a4)
s(A.bS,A.aD)
s(A.an,A.ba)
r(A.aC,[A.bC,A.bD,A.bK,A.bJ,A.bP])
s(A.bH,A.bN)
s(A.ak,A.ar)
s(A.ai,A.ak)
r(A.K,[A.ac,A.aK])
r(A.i,[A.m,A.ag])
r(A.m,[A.a,A.t])
s(A.c,A.a)
r(A.c,[A.az,A.aA,A.L,A.aI,A.X,A.aY])
s(A.r,A.b)
s(A.w,A.r)
s(A.ah,A.a6)
s(A.C,A.bE)
r(A.u,[A.D,A.aV])
s(A.aP,A.Z)
t(A.ar,A.aZ)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{c8:"int",bi:"double",J:"num",Q:"String",aw:"bool",q:"Null",aa:"List"},mangledNames:{},types:["q()","~()","~(~())","@(@)","@(@,Q)","@(Q)","q(@)","q(~())","@(b1)","ct<@>(b)","aw(u)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.dX(v.typeUniverse,JSON.parse('{"aU":"O","a_":"O","F":"O","eY":"b","f3":"b","f6":"a","eZ":"c","f7":"c","f4":"m","f2":"m","f8":"w","f0":"r","f_":"t","fa":"t","aL":{"aw":[]},"k":{"aa":["1"],"o":["1"]},"bq":{"k":["1"],"aa":["1"],"o":["1"]},"x":{"E":["1"]},"a9":{"bi":[],"J":[]},"a8":{"bi":[],"c8":[],"J":[]},"aN":{"bi":[],"J":[]},"Y":{"Q":[]},"aQ":{"f":[]},"af":{"o":["1"]},"S":{"E":["1"]},"ab":{"f":[]},"aO":{"f":[]},"b4":{"f":[]},"al":{"cu":[]},"M":{"N":[]},"aC":{"N":[]},"aD":{"N":[]},"b0":{"N":[]},"b_":{"N":[]},"W":{"N":[]},"aX":{"f":[]},"b7":{"f":[]},"ba":{"f":[]},"an":{"f":[]},"am":{"b1":[]},"ai":{"cm":["1"],"o":["1"]},"aj":{"E":["1"]},"ak":{"o":["1"]},"ct":{"o":["1"]},"a4":{"f":[]},"b2":{"f":[]},"aR":{"f":[]},"K":{"f":[]},"ac":{"f":[]},"aK":{"f":[]},"b5":{"f":[]},"b3":{"f":[]},"aE":{"f":[]},"aS":{"f":[]},"ad":{"f":[]},"aF":{"f":[]},"c":{"a":[],"i":[]},"az":{"a":[],"i":[]},"aA":{"a":[],"i":[]},"L":{"a":[],"i":[]},"t":{"i":[]},"a6":{"bY":["J"]},"a":{"i":[]},"aI":{"a":[],"i":[]},"X":{"a":[],"i":[]},"w":{"b":[]},"m":{"i":[]},"aY":{"a":[],"i":[]},"r":{"b":[]},"ag":{"bz":[],"i":[]},"ah":{"bY":["J"]},"b9":{"bz":[],"i":[]},"bc":{"dv":[]},"D":{"u":[]},"aP":{"Z":[]},"aV":{"u":[]}}'))
A.dW(v.typeUniverse,JSON.parse('{"aZ":1,"ak":1,"ar":1}'))
var u=(function rtii(){var t=A.cW
return{E:t("L"),j:t("C"),h:t("a"),v:t("u"),C:t("f"),z:t("b"),Z:t("N"),N:t("o<@>"),n:t("k<u>"),I:t("k<aT>"),a:t("k<Z>"),s:t("k<Q>"),b:t("k<@>"),T:t("aM"),g:t("F"),r:t("aa<u>"),c:t("aa<Z>"),V:t("w"),P:t("q"),K:t("j"),H:t("P<J>"),L:t("f9"),q:t("bY<J>"),l:t("cu"),R:t("Q"),p:t("b1"),B:t("a_"),y:t("bz"),w:t("aw"),i:t("bi"),D:t("@"),S:t("c8"),A:t("0&*"),_:t("j*"),O:t("i?"),Q:t("ck<q>?"),X:t("j?"),U:t("bd?"),o:t("@(b)?"),t:t("J"),u:t("~"),M:t("~()"),F:t("~(b1)")}})();(function constants(){B.z=A.L.prototype
B.e=A.a5.prototype
B.A=A.X.prototype
B.B=J.a7.prototype
B.a=J.k.prototype
B.b=J.a8.prototype
B.c=J.a9.prototype
B.p=J.Y.prototype
B.C=J.F.prototype
B.D=J.v.prototype
B.q=J.aU.prototype
B.l=J.a_.prototype
B.m=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.r=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof navigator == "object";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
B.x=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var ua = navigator.userAgent;
    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;
    if (ua.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
B.t=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.u=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
B.w=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
B.v=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
B.n=function(hooks) { return hooks; }

B.y=new A.aS()
B.F=new A.bv()
B.o=new A.bc()
B.i=new A.bH()
B.d=new A.C("none")
B.j=new A.C("up")
B.k=new A.C("down")
B.f=new A.C("left")
B.h=new A.C("right")
B.E=A.eW("j")})();(function staticFields(){$.bG=null
$.cp=null
$.cg=null
$.cf=null
$.cX=null
$.cT=null
$.d0=null
$.bQ=null
$.bU=null
$.c7=null
$.a1=null
$.at=null
$.au=null
$.c4=!1
$.b6=B.i
$.A=A.T([],A.cW("k<j>"))
$.dz=0
$.cx=0
$.cy=0})();(function lazyInitializers(){var t=hunkHelpers.lazyFinal
t($,"f1","d2",()=>A.eH("_$dart_dartClosure"))
t($,"fb","d3",()=>A.y(A.by({
toString:function(){return"$receiver$"}})))
t($,"fc","d4",()=>A.y(A.by({$method$:null,
toString:function(){return"$receiver$"}})))
t($,"fd","d5",()=>A.y(A.by(null)))
t($,"fe","d6",()=>A.y(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(s){return s.message}}()))
t($,"fh","d9",()=>A.y(A.by(void 0)))
t($,"fi","da",()=>A.y(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(s){return s.message}}()))
t($,"fg","d8",()=>A.y(A.cA(null)))
t($,"ff","d7",()=>A.y(function(){try{null.$method$}catch(s){return s.message}}()))
t($,"fk","dc",()=>A.y(A.cA(void 0)))
t($,"fj","db",()=>A.y(function(){try{(void 0).$method$}catch(s){return s.message}}()))
t($,"fl","cb",()=>A.dB())
t($,"fw","dd",()=>A.cZ(B.E))})();(function nativeSupport(){!function(){var t=function(a){var n={}
n[a]=1
return Object.keys(hunkHelpers.convertToFastObject(n))[0]}
v.getIsolateTag=function(a){return t("___dart_"+a+v.isolateTag)}
var s="___dart_isolate_tags_"
var r=Object[s]||(Object[s]=Object.create(null))
var q="_ZxYxX"
for(var p=0;;p++){var o=t(q+"_"+p+"_")
if(!(o in r)){r[o]=1
v.isolateTag=o
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.v,MediaError:J.v,NavigatorUserMediaError:J.v,OverconstrainedError:J.v,PositionError:J.v,GeolocationPositionError:J.v,HTMLAudioElement:A.c,HTMLBRElement:A.c,HTMLBaseElement:A.c,HTMLBodyElement:A.c,HTMLButtonElement:A.c,HTMLContentElement:A.c,HTMLDListElement:A.c,HTMLDataElement:A.c,HTMLDataListElement:A.c,HTMLDetailsElement:A.c,HTMLDialogElement:A.c,HTMLDivElement:A.c,HTMLEmbedElement:A.c,HTMLFieldSetElement:A.c,HTMLHRElement:A.c,HTMLHeadElement:A.c,HTMLHeadingElement:A.c,HTMLHtmlElement:A.c,HTMLIFrameElement:A.c,HTMLInputElement:A.c,HTMLLIElement:A.c,HTMLLabelElement:A.c,HTMLLegendElement:A.c,HTMLLinkElement:A.c,HTMLMapElement:A.c,HTMLMediaElement:A.c,HTMLMenuElement:A.c,HTMLMetaElement:A.c,HTMLMeterElement:A.c,HTMLModElement:A.c,HTMLOListElement:A.c,HTMLObjectElement:A.c,HTMLOptGroupElement:A.c,HTMLOptionElement:A.c,HTMLOutputElement:A.c,HTMLParagraphElement:A.c,HTMLParamElement:A.c,HTMLPictureElement:A.c,HTMLPreElement:A.c,HTMLProgressElement:A.c,HTMLQuoteElement:A.c,HTMLScriptElement:A.c,HTMLShadowElement:A.c,HTMLSlotElement:A.c,HTMLSourceElement:A.c,HTMLSpanElement:A.c,HTMLStyleElement:A.c,HTMLTableCaptionElement:A.c,HTMLTableCellElement:A.c,HTMLTableDataCellElement:A.c,HTMLTableHeaderCellElement:A.c,HTMLTableColElement:A.c,HTMLTableElement:A.c,HTMLTableRowElement:A.c,HTMLTableSectionElement:A.c,HTMLTemplateElement:A.c,HTMLTextAreaElement:A.c,HTMLTimeElement:A.c,HTMLTitleElement:A.c,HTMLTrackElement:A.c,HTMLUListElement:A.c,HTMLUnknownElement:A.c,HTMLVideoElement:A.c,HTMLDirectoryElement:A.c,HTMLFontElement:A.c,HTMLFrameElement:A.c,HTMLFrameSetElement:A.c,HTMLMarqueeElement:A.c,HTMLElement:A.c,HTMLAnchorElement:A.az,HTMLAreaElement:A.aA,HTMLCanvasElement:A.L,CanvasRenderingContext2D:A.a5,CDATASection:A.t,CharacterData:A.t,Comment:A.t,ProcessingInstruction:A.t,Text:A.t,DOMException:A.bn,DOMRectReadOnly:A.a6,MathMLElement:A.a,SVGAElement:A.a,SVGAnimateElement:A.a,SVGAnimateMotionElement:A.a,SVGAnimateTransformElement:A.a,SVGAnimationElement:A.a,SVGCircleElement:A.a,SVGClipPathElement:A.a,SVGDefsElement:A.a,SVGDescElement:A.a,SVGDiscardElement:A.a,SVGEllipseElement:A.a,SVGFEBlendElement:A.a,SVGFEColorMatrixElement:A.a,SVGFEComponentTransferElement:A.a,SVGFECompositeElement:A.a,SVGFEConvolveMatrixElement:A.a,SVGFEDiffuseLightingElement:A.a,SVGFEDisplacementMapElement:A.a,SVGFEDistantLightElement:A.a,SVGFEFloodElement:A.a,SVGFEFuncAElement:A.a,SVGFEFuncBElement:A.a,SVGFEFuncGElement:A.a,SVGFEFuncRElement:A.a,SVGFEGaussianBlurElement:A.a,SVGFEImageElement:A.a,SVGFEMergeElement:A.a,SVGFEMergeNodeElement:A.a,SVGFEMorphologyElement:A.a,SVGFEOffsetElement:A.a,SVGFEPointLightElement:A.a,SVGFESpecularLightingElement:A.a,SVGFESpotLightElement:A.a,SVGFETileElement:A.a,SVGFETurbulenceElement:A.a,SVGFilterElement:A.a,SVGForeignObjectElement:A.a,SVGGElement:A.a,SVGGeometryElement:A.a,SVGGraphicsElement:A.a,SVGImageElement:A.a,SVGLineElement:A.a,SVGLinearGradientElement:A.a,SVGMarkerElement:A.a,SVGMaskElement:A.a,SVGMetadataElement:A.a,SVGPathElement:A.a,SVGPatternElement:A.a,SVGPolygonElement:A.a,SVGPolylineElement:A.a,SVGRadialGradientElement:A.a,SVGRectElement:A.a,SVGScriptElement:A.a,SVGSetElement:A.a,SVGStopElement:A.a,SVGStyleElement:A.a,SVGElement:A.a,SVGSVGElement:A.a,SVGSwitchElement:A.a,SVGSymbolElement:A.a,SVGTSpanElement:A.a,SVGTextContentElement:A.a,SVGTextElement:A.a,SVGTextPathElement:A.a,SVGTextPositioningElement:A.a,SVGTitleElement:A.a,SVGUseElement:A.a,SVGViewElement:A.a,SVGGradientElement:A.a,SVGComponentTransferFunctionElement:A.a,SVGFEDropShadowElement:A.a,SVGMPathElement:A.a,Element:A.a,AbortPaymentEvent:A.b,AnimationEvent:A.b,AnimationPlaybackEvent:A.b,ApplicationCacheErrorEvent:A.b,BackgroundFetchClickEvent:A.b,BackgroundFetchEvent:A.b,BackgroundFetchFailEvent:A.b,BackgroundFetchedEvent:A.b,BeforeInstallPromptEvent:A.b,BeforeUnloadEvent:A.b,BlobEvent:A.b,CanMakePaymentEvent:A.b,ClipboardEvent:A.b,CloseEvent:A.b,CustomEvent:A.b,DeviceMotionEvent:A.b,DeviceOrientationEvent:A.b,ErrorEvent:A.b,ExtendableEvent:A.b,ExtendableMessageEvent:A.b,FetchEvent:A.b,FontFaceSetLoadEvent:A.b,ForeignFetchEvent:A.b,GamepadEvent:A.b,HashChangeEvent:A.b,InstallEvent:A.b,MediaEncryptedEvent:A.b,MediaKeyMessageEvent:A.b,MediaQueryListEvent:A.b,MediaStreamEvent:A.b,MediaStreamTrackEvent:A.b,MessageEvent:A.b,MIDIConnectionEvent:A.b,MIDIMessageEvent:A.b,MutationEvent:A.b,NotificationEvent:A.b,PageTransitionEvent:A.b,PaymentRequestEvent:A.b,PaymentRequestUpdateEvent:A.b,PopStateEvent:A.b,PresentationConnectionAvailableEvent:A.b,PresentationConnectionCloseEvent:A.b,ProgressEvent:A.b,PromiseRejectionEvent:A.b,PushEvent:A.b,RTCDataChannelEvent:A.b,RTCDTMFToneChangeEvent:A.b,RTCPeerConnectionIceEvent:A.b,RTCTrackEvent:A.b,SecurityPolicyViolationEvent:A.b,SensorErrorEvent:A.b,SpeechRecognitionError:A.b,SpeechRecognitionEvent:A.b,SpeechSynthesisEvent:A.b,StorageEvent:A.b,SyncEvent:A.b,TrackEvent:A.b,TransitionEvent:A.b,WebKitTransitionEvent:A.b,VRDeviceEvent:A.b,VRDisplayEvent:A.b,VRSessionEvent:A.b,MojoInterfaceRequestEvent:A.b,ResourceProgressEvent:A.b,USBConnectionEvent:A.b,IDBVersionChangeEvent:A.b,AudioProcessingEvent:A.b,OfflineAudioCompletionEvent:A.b,WebGLContextEvent:A.b,Event:A.b,InputEvent:A.b,SubmitEvent:A.b,EventTarget:A.i,HTMLFormElement:A.aI,HTMLImageElement:A.X,MouseEvent:A.w,DragEvent:A.w,PointerEvent:A.w,WheelEvent:A.w,Document:A.m,DocumentFragment:A.m,HTMLDocument:A.m,ShadowRoot:A.m,XMLDocument:A.m,Attr:A.m,DocumentType:A.m,Node:A.m,HTMLSelectElement:A.aY,CompositionEvent:A.r,FocusEvent:A.r,KeyboardEvent:A.r,TextEvent:A.r,TouchEvent:A.r,UIEvent:A.r,Window:A.ag,DOMWindow:A.ag,ClientRect:A.ah,DOMRect:A.ah})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,GeolocationPositionError:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,DOMException:true,DOMRectReadOnly:false,MathMLElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,EventTarget:false,HTMLFormElement:true,HTMLImageElement:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,HTMLSelectElement:true,CompositionEvent:true,FocusEvent:true,KeyboardEvent:true,TextEvent:true,TouchEvent:true,UIEvent:false,Window:true,DOMWindow:true,ClientRect:true,DOMRect:true})})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var t=A.eQ
if(typeof dartMainRunner==="function")dartMainRunner(t,[])
else t([])})})()
//# sourceMappingURL=main.js.map
