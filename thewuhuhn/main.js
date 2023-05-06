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
a[c]=function(){a[c]=function(){A.h3(b)}
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
if(a[b]!==t)A.h4(b)
a[b]=s}var r=a[b]
a[c]=function(){return r}
return r}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t)convertToFastObject(a[t])}var y=0
function instanceTearOffGetter(a,b){var t=null
return a?function(c){if(t===null)t=A.d_(b)
return new t(c,this)}:function(){if(t===null)t=A.d_(b)
return new t(this,null)}}function staticTearOffGetter(a){var t=null
return function(){if(t===null)t=A.d_(a).prototype
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
a(hunkHelpers,v,w,$)}var A={cN:function cN(){},
N(a){return new A.at("Field '"+a+"' has not been initialized.")},
aA(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
dt(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
eH(a,b,c){return A.dt(A.aA(A.aA(c,a),b))},
du(a,b,c,d,e){return A.dt(A.aA(A.aA(A.aA(A.aA(e,a),b),c),d))},
dV(a,b,c){return a},
at:function at(a){this.a=a},
cc:function cc(){},
ao:function ao(){},
I:function I(a,b,c){this.a=a
this.b=b
this.$ti=c},
F:function F(a,b,c){this.a=a
this.b=b
this.$ti=c},
aC:function aC(a,b){this.a=a
this.$ti=b},
aD:function aD(a,b){this.a=a
this.$ti=b},
e0(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
e(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.bU(a)
return t},
br(a){var t,s=$.dl
if(s==null)s=$.dl=Symbol("identityHashCode")
t=a[s]
if(t==null){t=Math.random()*0x3fffffff|0
a[s]=t}return t},
cb(a){return A.eB(a)},
eB(a){var t,s,r,q
if(a instanceof A.j)return A.y(A.bT(a),null)
t=J.aj(a)
if(t===B.B||t===B.D||u.J.b(a)){s=B.n(a)
if(s!=="Object"&&s!=="")return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&q!=="Object"&&q!=="")return q}}return A.y(A.bT(a),null)},
n(a,b){if(a==null)J.d7(a)
throw A.d(A.fL(a,b))},
fL(a,b){var t,s="index"
if(!A.dQ(b))return new A.a1(!0,b,s,null)
t=A.cA(J.d7(a))
if(b<0||b>=t)return A.dg(b,t,a,s)
return new A.ae(null,null,!0,b,s,"Value not in range")},
d(a){var t,s
if(a==null)a=new A.bo()
t=new Error()
t.dartException=a
s=A.h5
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:s})
t.name=""}else t.toString=s
return t},
h5(){return J.bU(this.dartException)},
C(a){throw A.d(a)},
r(a){throw A.d(A.am(a))},
R(a){var t,s,r,q,p,o
a=A.h2(a.replace(String({}),"$receiver$"))
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=A.l([],u.s)
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new A.ci(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),s,r,q,p,o)},
cj(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
dx(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
cO(a,b){var t=b==null,s=t?null:b.method
return new A.bj(a,s,t?null:b.receiver)},
h7(a){if(a==null)return new A.c7(a)
if(typeof a!=="object")return a
if("dartException" in a)return A.ab(a,a.dartException)
return A.fE(a)},
ab(a,b){if(u.Q.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
fE(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((B.b.aG(s,16)&8191)===10)switch(r){case 438:return A.ab(a,A.cO(A.e(t)+" (Error "+r+")",f))
case 445:case 5007:q=A.e(t)
return A.ab(a,new A.aw(q+" (Error "+r+")",f))}}if(a instanceof TypeError){p=$.e4()
o=$.e5()
n=$.e6()
m=$.e7()
l=$.ea()
k=$.eb()
j=$.e9()
$.e8()
i=$.ed()
h=$.ec()
g=p.C(t)
if(g!=null)return A.ab(a,A.cO(A.bR(t),g))
else{g=o.C(t)
if(g!=null){g.method="call"
return A.ab(a,A.cO(A.bR(t),g))}else{g=n.C(t)
if(g==null){g=m.C(t)
if(g==null){g=l.C(t)
if(g==null){g=k.C(t)
if(g==null){g=j.C(t)
if(g==null){g=m.C(t)
if(g==null){g=i.C(t)
if(g==null){g=h.C(t)
q=g!=null}else q=!0}else q=!0}else q=!0}else q=!0}else q=!0}else q=!0}else q=!0
if(q){A.bR(t)
return A.ab(a,new A.aw(t,g==null?f:g.method))}}}return A.ab(a,new A.bC(typeof t=="string"?t:""))}if(a instanceof RangeError){if(typeof t=="string"&&t.indexOf("call stack")!==-1)return new A.az()
t=function(b){try{return String(b)}catch(e){}return null}(a)
return A.ab(a,new A.a1(!1,f,f,typeof t=="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t=="string"&&t==="too much recursion")return new A.az()
return a},
fQ(a){var t
if(a==null)return new A.aM(a)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new A.aM(a)},
dY(a){if(a==null||typeof a!="object")return J.cL(a)
else return A.br(a)},
fM(a,b){var t,s=a.length
for(t=0;t<s;++t)b.j(0,a[t])
return b},
fV(a,b,c,d,e,f){u.Z.a(a)
switch(A.cA(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.d(new A.cr("Unsupported number of arguments for wrapped closure"))},
aX(a,b){var t
if(a==null)return null
t=a.$identity
if(!!t)return t
t=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.fV)
a.$identity=t
return t},
em(a1){var t,s,r,q,p,o,n,m,l,k,j=a1.co,i=a1.iS,h=a1.iI,g=a1.nDA,f=a1.aI,e=a1.fs,d=a1.cs,c=e[0],b=d[0],a=j[c],a0=a1.fT
a0.toString
t=i?Object.create(new A.bv().constructor.prototype):Object.create(new A.ac(null,null).constructor.prototype)
t.$initialize=t.constructor
if(i)s=function static_tear_off(){this.$initialize()}
else s=function tear_off(a2,a3){this.$initialize(a2,a3)}
t.constructor=s
s.prototype=t
t.$_name=c
t.$_target=a
r=!i
if(r)q=A.dc(c,a,h,g)
else{t.$static_name=c
q=a}t.$S=A.ei(a0,i,h)
t[b]=q
for(p=q,o=1;o<e.length;++o){n=e[o]
if(typeof n=="string"){m=j[n]
l=n
n=m}else l=""
k=d[o]
if(k!=null){if(r)n=A.dc(l,n,h,g)
t[k]=n}if(o===f)p=n}t.$C=p
t.$R=a1.rC
t.$D=a1.dV
return s},
ei(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.d("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.eg)}throw A.d("Error in functionType of tearoff")},
ej(a,b,c,d){var t=A.db
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
dc(a,b,c,d){var t,s
if(c)return A.el(a,b,d)
t=b.length
s=A.ej(t,d,a,b)
return s},
ek(a,b,c,d){var t=A.db,s=A.eh
switch(b?-1:a){case 0:throw A.d(new A.bs("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,t)
default:return function(e,f,g){return function(){var r=[g(this)]
Array.prototype.push.apply(r,arguments)
return e.apply(f(this),r)}}(d,s,t)}},
el(a,b,c){var t,s
if($.d9==null)$.d9=A.d8("interceptor")
if($.da==null)$.da=A.d8("receiver")
t=b.length
s=A.ek(t,c,a,b)
return s},
d_(a){return A.em(a)},
eg(a,b){return A.cx(v.typeUniverse,A.bT(a.a),b)},
db(a){return a.a},
eh(a){return a.b},
d8(a){var t,s,r,q=new A.ac("receiver","interceptor"),p=J.di(Object.getOwnPropertyNames(q),u.X)
for(t=p.length,s=0;s<t;++s){r=p[s]
if(q[r]===a)return r}throw A.d(A.ef("Field name "+a+" not found."))},
dU(a){if(a==null)A.fF("boolean expression must not be null")
return a},
fF(a){throw A.d(new A.bH(a))},
h3(a){throw A.d(new A.b8(a))},
fP(a){return v.getIsolateTag(a)},
hM(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
h_(a){var t,s,r,q,p,o=A.bR($.dW.$1(a)),n=$.cC[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.cH[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=A.fd($.dS.$2(a,o))
if(r!=null){n=$.cC[r]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.cH[r]
if(t!=null)return t
s=v.interceptorsByTag[r]
o=r}}if(s==null)return null
t=s.prototype
q=o[0]
if(q==="!"){n=A.cI(t)
$.cC[o]=n
Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}if(q==="~"){$.cH[o]=t
return t}if(q==="-"){p=A.cI(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return A.dZ(a,t)
if(q==="*")throw A.d(A.dy(o))
if(v.leafTags[o]===true){p=A.cI(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return A.dZ(a,t)},
dZ(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.d4(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
cI(a){return J.d4(a,!1,null,!!a.$ihh)},
h1(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return A.cI(t)
else return J.d4(t,c,null,null)},
fT(){if(!0===$.d2)return
$.d2=!0
A.fU()},
fU(){var t,s,r,q,p,o,n,m
$.cC=Object.create(null)
$.cH=Object.create(null)
A.fS()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.e_.$1(p)
if(o!=null){n=A.h1(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
fS(){var t,s,r,q,p,o,n=B.r()
n=A.ai(B.t,A.ai(B.u,A.ai(B.o,A.ai(B.o,A.ai(B.v,A.ai(B.w,A.ai(B.x(B.n),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.dW=new A.cE(q)
$.dS=new A.cF(p)
$.e_=new A.cG(o)},
ai(a,b){return a(b)||b},
h2(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
ci:function ci(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aw:function aw(a,b){this.a=a
this.b=b},
bj:function bj(a,b,c){this.a=a
this.b=b
this.c=c},
bC:function bC(a){this.a=a},
c7:function c7(a){this.a=a},
aM:function aM(a){this.a=a
this.b=null},
a3:function a3(){},
b3:function b3(){},
b4:function b4(){},
bx:function bx(){},
bv:function bv(){},
ac:function ac(a,b){this.a=a
this.b=b},
bs:function bs(a){this.a=a},
bH:function bH(a){this.a=a},
cE:function cE(a){this.a=a},
cF:function cF(a){this.a=a},
cG:function cG(a){this.a=a},
h4(a){return A.C(new A.at("Field '"+a+"' has been assigned during initialization."))},
m(){return A.C(A.N(""))},
eO(){var t=new A.cp()
return t.b=t},
cp:function cp(){this.b=null},
dn(a,b){var t=b.c
return t==null?b.c=A.cW(a,b.y,!0):t},
dm(a,b){var t=b.c
return t==null?b.c=A.aQ(a,"dd",[b.y]):t},
dp(a){var t=a.x
if(t===6||t===7||t===8)return A.dp(a.y)
return t===12||t===13},
eG(a){return a.at},
d0(a){return A.bQ(v.typeUniverse,a,!1)},
a0(a,b,c,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.x
switch(d){case 5:case 1:case 2:case 3:case 4:return b
case 6:t=b.y
s=A.a0(a,t,c,a0)
if(s===t)return b
return A.dI(a,s,!0)
case 7:t=b.y
s=A.a0(a,t,c,a0)
if(s===t)return b
return A.cW(a,s,!0)
case 8:t=b.y
s=A.a0(a,t,c,a0)
if(s===t)return b
return A.dH(a,s,!0)
case 9:r=b.z
q=A.aW(a,r,c,a0)
if(q===r)return b
return A.aQ(a,b.y,q)
case 10:p=b.y
o=A.a0(a,p,c,a0)
n=b.z
m=A.aW(a,n,c,a0)
if(o===p&&m===n)return b
return A.cU(a,o,m)
case 12:l=b.y
k=A.a0(a,l,c,a0)
j=b.z
i=A.fB(a,j,c,a0)
if(k===l&&i===j)return b
return A.dG(a,k,i)
case 13:h=b.z
a0+=h.length
g=A.aW(a,h,c,a0)
p=b.y
o=A.a0(a,p,c,a0)
if(g===h&&o===p)return b
return A.cV(a,o,g,!0)
case 14:f=b.y
if(f<a0)return b
e=c[f-a0]
if(e==null)return b
return e
default:throw A.d(A.b0("Attempted to substitute unexpected RTI kind "+d))}},
aW(a,b,c,d){var t,s,r,q,p=b.length,o=A.cy(p)
for(t=!1,s=0;s<p;++s){r=b[s]
q=A.a0(a,r,c,d)
if(q!==r)t=!0
o[s]=q}return t?o:b},
fC(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=A.cy(n)
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=A.a0(a,p,c,d)
if(o!==p)t=!0
m.splice(s,3,r,q,o)}return t?m:b},
fB(a,b,c,d){var t,s=b.a,r=A.aW(a,s,c,d),q=b.b,p=A.aW(a,q,c,d),o=b.c,n=A.fC(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new A.bL()
t.a=r
t.b=p
t.c=n
return t},
l(a,b){a[v.arrayRti]=b
return a},
fJ(a){var t,s=a.$S
if(s!=null){if(typeof s=="number")return A.fR(s)
t=a.$S()
return t}return null},
dX(a,b){var t
if(A.dp(b))if(a instanceof A.a3){t=A.fJ(a)
if(t!=null)return t}return A.bT(a)},
bT(a){var t
if(a instanceof A.j){t=a.$ti
return t!=null?t:A.cX(a)}if(Array.isArray(a))return A.J(a)
return A.cX(J.aj(a))},
J(a){var t=a[v.arrayRti],s=u.b
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
aT(a){var t=a.$ti
return t!=null?t:A.cX(a)},
cX(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return A.fl(a,t)},
fl(a,b){var t=a instanceof A.a3?a.__proto__.__proto__.constructor:b,s=A.f8(v.typeUniverse,t.name)
b.$ccache=s
return s},
fR(a){var t,s=v.types,r=s[a]
if(typeof r=="string"){t=A.bQ(v.typeUniverse,r,!1)
s[a]=t
return t}return r},
fK(a){var t,s,r,q=a.w
if(q!=null)return q
t=a.at
s=t.replace(/\*/g,"")
if(s===t)return a.w=new A.bP(a)
r=A.bQ(v.typeUniverse,s,!0)
q=r.w
return a.w=q==null?r.w=new A.bP(r):q},
h6(a){return A.fK(A.bQ(v.typeUniverse,a,!1))},
fk(a){var t,s,r,q,p=this
if(p===u.K)return A.ag(p,a,A.fp)
if(!A.U(p))if(!(p===u._))t=!1
else t=!0
else t=!0
if(t)return A.ag(p,a,A.ft)
t=p.x
s=t===6?p.y:p
if(s===u.S)r=A.dQ
else if(s===u.i||s===u.H)r=A.fo
else if(s===u.N)r=A.fr
else r=s===u.w?A.dO:null
if(r!=null)return A.ag(p,a,r)
if(s.x===9){q=s.y
if(s.z.every(A.fW)){p.r="$i"+q
if(q==="Y")return A.ag(p,a,A.fn)
return A.ag(p,a,A.fs)}}else if(t===7)return A.ag(p,a,A.fi)
return A.ag(p,a,A.fg)},
ag(a,b,c){a.b=c
return a.b(b)},
fj(a){var t,s=this,r=A.ff
if(!A.U(s))if(!(s===u._))t=!1
else t=!0
else t=!0
if(t)r=A.fe
else if(s===u.K)r=A.fc
else{t=A.aY(s)
if(t)r=A.fh}s.a=r
return s.a(a)},
bS(a){var t,s=a.x
if(!A.U(a))if(!(a===u._))if(!(a===u.A))if(s!==7)if(!(s===6&&A.bS(a.y)))t=s===8&&A.bS(a.y)||a===u.P||a===u.T
else t=!0
else t=!0
else t=!0
else t=!0
else t=!0
return t},
fg(a){var t=this
if(a==null)return A.bS(t)
return A.i(v.typeUniverse,A.dX(a,t),null,t,null)},
fi(a){if(a==null)return!0
return this.y.b(a)},
fs(a){var t,s=this
if(a==null)return A.bS(s)
t=s.r
if(a instanceof A.j)return!!a[t]
return!!J.aj(a)[t]},
fn(a){var t,s=this
if(a==null)return A.bS(s)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
t=s.r
if(a instanceof A.j)return!!a[t]
return!!J.aj(a)[t]},
ff(a){var t,s=this
if(a==null){t=A.aY(s)
if(t)return a}else if(s.b(a))return a
A.dM(a,s)},
fh(a){var t=this
if(a==null)return a
else if(t.b(a))return a
A.dM(a,t)},
dM(a,b){throw A.d(A.eY(A.dA(a,A.dX(a,b),A.y(b,null))))},
dA(a,b,c){var t=A.bc(a)
return t+": type '"+A.y(b==null?A.bT(a):b,null)+"' is not a subtype of type '"+c+"'"},
eY(a){return new A.aO("TypeError: "+a)},
w(a,b){return new A.aO("TypeError: "+A.dA(a,null,b))},
fp(a){return a!=null},
fc(a){if(a!=null)return a
throw A.d(A.w(a,"Object"))},
ft(a){return!0},
fe(a){return a},
dO(a){return!0===a||!1===a},
hB(a){if(!0===a)return!0
if(!1===a)return!1
throw A.d(A.w(a,"bool"))},
hD(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.w(a,"bool"))},
hC(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.w(a,"bool?"))},
fa(a){if(typeof a=="number")return a
throw A.d(A.w(a,"double"))},
hF(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.w(a,"double"))},
hE(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.w(a,"double?"))},
dQ(a){return typeof a=="number"&&Math.floor(a)===a},
cA(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.d(A.w(a,"int"))},
hH(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.w(a,"int"))},
hG(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.w(a,"int?"))},
fo(a){return typeof a=="number"},
hI(a){if(typeof a=="number")return a
throw A.d(A.w(a,"num"))},
hJ(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.w(a,"num"))},
fb(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.w(a,"num?"))},
fr(a){return typeof a=="string"},
bR(a){if(typeof a=="string")return a
throw A.d(A.w(a,"String"))},
hK(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.w(a,"String"))},
fd(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.w(a,"String?"))},
dR(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=s+A.y(a[r],b)
return t},
fw(a,b){var t,s,r,q,p,o,n=a.y,m=a.z
if(""===n)return"("+A.dR(m,b)+")"
t=m.length
s=n.split(",")
r=s.length-t
for(q="(",p="",o=0;o<t;++o,p=", "){q+=p
if(r===0)q+="{"
q+=A.y(m[o],b)
if(r>=0)q+=" "+s[r];++r}return q+"})"},
dN(a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=", "
if(a5!=null){t=a5.length
if(a4==null){a4=A.l([],u.s)
s=null}else s=a4.length
r=a4.length
for(q=t;q>0;--q)B.a.j(a4,"T"+(r+q))
for(p=u.X,o=u._,n="<",m="",q=0;q<t;++q,m=a2){l=a4.length
k=l-1-q
if(!(k>=0))return A.n(a4,k)
n=B.p.ad(n+m,a4[k])
j=a5[q]
i=j.x
if(!(i===2||i===3||i===4||i===5||j===p))if(!(j===o))l=!1
else l=!0
else l=!0
if(!l)n+=" extends "+A.y(j,a4)}n+=">"}else{n=""
s=null}p=a3.y
h=a3.z
g=h.a
f=g.length
e=h.b
d=e.length
c=h.c
b=c.length
a=A.y(p,a4)
for(a0="",a1="",q=0;q<f;++q,a1=a2)a0+=a1+A.y(g[q],a4)
if(d>0){a0+=a1+"["
for(a1="",q=0;q<d;++q,a1=a2)a0+=a1+A.y(e[q],a4)
a0+="]"}if(b>0){a0+=a1+"{"
for(a1="",q=0;q<b;q+=3,a1=a2){a0+=a1
if(c[q+1])a0+="required "
a0+=A.y(c[q+2],a4)+" "+c[q]}a0+="}"}if(s!=null){a4.toString
a4.length=s}return n+"("+a0+") => "+a},
y(a,b){var t,s,r,q,p,o,n,m=a.x
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){t=A.y(a.y,b)
return t}if(m===7){s=a.y
t=A.y(s,b)
r=s.x
return(r===12||r===13?"("+t+")":t)+"?"}if(m===8)return"FutureOr<"+A.y(a.y,b)+">"
if(m===9){q=A.fD(a.y)
p=a.z
return p.length>0?q+("<"+A.dR(p,b)+">"):q}if(m===11)return A.fw(a,b)
if(m===12)return A.dN(a,b,null)
if(m===13)return A.dN(a.y,b,a.z)
if(m===14){o=a.y
n=b.length
o=n-1-o
if(!(o>=0&&o<n))return A.n(b,o)
return b[o]}return"?"},
fD(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
f9(a,b){var t=a.tR[b]
for(;typeof t=="string";)t=a.tR[t]
return t},
f8(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return A.bQ(a,b,!1)
else if(typeof n=="number"){t=n
s=A.aR(a,5,"#")
r=A.cy(t)
for(q=0;q<t;++q)r[q]=s
p=A.aQ(a,b,r)
o[b]=p
return p}else return n},
f6(a,b){return A.dJ(a.tR,b)},
f5(a,b){return A.dJ(a.eT,b)},
bQ(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=A.dF(A.dD(a,null,b,c))
s.set(b,t)
return t},
cx(a,b,c){var t,s,r=b.Q
if(r==null)r=b.Q=new Map()
t=r.get(c)
if(t!=null)return t
s=A.dF(A.dD(a,b,c,!0))
r.set(c,s)
return s},
f7(a,b,c){var t,s,r,q=b.as
if(q==null)q=b.as=new Map()
t=c.at
s=q.get(t)
if(s!=null)return s
r=A.cU(a,b,c.x===10?c.z:[c])
q.set(t,r)
return r},
S(a,b){b.a=A.fj
b.b=A.fk
return b},
aR(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new A.E(null,null)
t.x=b
t.at=c
s=A.S(a,t)
a.eC.set(c,s)
return s},
dI(a,b,c){var t,s=b.at+"*",r=a.eC.get(s)
if(r!=null)return r
t=A.f2(a,b,s,c)
a.eC.set(s,t)
return t},
f2(a,b,c,d){var t,s,r
if(d){t=b.x
if(!A.U(b))s=b===u.P||b===u.T||t===7||t===6
else s=!0
if(s)return b}r=new A.E(null,null)
r.x=6
r.y=b
r.at=c
return A.S(a,r)},
cW(a,b,c){var t,s=b.at+"?",r=a.eC.get(s)
if(r!=null)return r
t=A.f1(a,b,s,c)
a.eC.set(s,t)
return t},
f1(a,b,c,d){var t,s,r,q
if(d){t=b.x
if(!A.U(b))if(!(b===u.P||b===u.T))if(t!==7)s=t===8&&A.aY(b.y)
else s=!0
else s=!0
else s=!0
if(s)return b
else if(t===1||b===u.A)return u.P
else if(t===6){r=b.y
if(r.x===8&&A.aY(r.y))return r
else return A.dn(a,b)}}q=new A.E(null,null)
q.x=7
q.y=b
q.at=c
return A.S(a,q)},
dH(a,b,c){var t,s=b.at+"/",r=a.eC.get(s)
if(r!=null)return r
t=A.f_(a,b,s,c)
a.eC.set(s,t)
return t},
f_(a,b,c,d){var t,s,r
if(d){t=b.x
if(!A.U(b))if(!(b===u._))s=!1
else s=!0
else s=!0
if(s||b===u.K)return b
else if(t===1)return A.aQ(a,"dd",[b])
else if(b===u.P||b===u.T)return u.Y}r=new A.E(null,null)
r.x=8
r.y=b
r.at=c
return A.S(a,r)},
f3(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new A.E(null,null)
t.x=14
t.y=b
t.at=r
s=A.S(a,t)
a.eC.set(r,s)
return s},
aP(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].at
return t},
eZ(a){var t,s,r,q,p,o=a.length
for(t="",s="",r=0;r<o;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
t+=s+q+p+a[r+2].at}return t},
aQ(a,b,c){var t,s,r,q=b
if(c.length>0)q+="<"+A.aP(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new A.E(null,null)
s.x=9
s.y=b
s.z=c
if(c.length>0)s.c=c[0]
s.at=q
r=A.S(a,s)
a.eC.set(q,r)
return r},
cU(a,b,c){var t,s,r,q,p,o
if(b.x===10){t=b.y
s=b.z.concat(c)}else{s=c
t=b}r=t.at+(";<"+A.aP(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new A.E(null,null)
p.x=10
p.y=t
p.z=s
p.at=r
o=A.S(a,p)
a.eC.set(r,o)
return o},
f4(a,b,c){var t,s,r="+"+(b+"("+A.aP(c)+")"),q=a.eC.get(r)
if(q!=null)return q
t=new A.E(null,null)
t.x=11
t.y=b
t.z=c
t.at=r
s=A.S(a,t)
a.eC.set(r,s)
return s},
dG(a,b,c){var t,s,r,q,p,o=b.at,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+A.aP(n)
if(k>0){t=m>0?",":""
h+=t+"["+A.aP(l)+"]"}if(i>0){t=m>0?",":""
h+=t+"{"+A.eZ(j)+"}"}s=o+(h+")")
r=a.eC.get(s)
if(r!=null)return r
q=new A.E(null,null)
q.x=12
q.y=b
q.z=c
q.at=s
p=A.S(a,q)
a.eC.set(s,p)
return p},
cV(a,b,c,d){var t,s=b.at+("<"+A.aP(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=A.f0(a,b,c,s,d)
a.eC.set(s,t)
return t},
f0(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=A.cy(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.x===1){s[q]=p;++r}}if(r>0){o=A.a0(a,b,s,0)
n=A.aW(a,c,s,0)
return A.cV(a,o,n,c!==n)}}m=new A.E(null,null)
m.x=13
m.y=b
m.z=c
m.at=d
return A.S(a,m)},
dD(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
dF(a){var t,s,r,q,p,o,n,m,l,k=a.r,j=a.s
for(t=k.length,s=0;s<t;){r=k.charCodeAt(s)
if(r>=48&&r<=57)s=A.eS(s+1,r,k,j)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124)s=A.dE(a,s,k,j,!1)
else if(r===46)s=A.dE(a,s,k,j,!0)
else{++s
switch(r){case 44:break
case 58:j.push(!1)
break
case 33:j.push(!0)
break
case 59:j.push(A.a_(a.u,a.e,j.pop()))
break
case 94:j.push(A.f3(a.u,j.pop()))
break
case 35:j.push(A.aR(a.u,5,"#"))
break
case 64:j.push(A.aR(a.u,2,"@"))
break
case 126:j.push(A.aR(a.u,3,"~"))
break
case 60:j.push(a.p)
a.p=j.length
break
case 62:q=a.u
p=j.splice(a.p)
A.cT(a.u,a.e,p)
a.p=j.pop()
o=j.pop()
if(typeof o=="string")j.push(A.aQ(q,o,p))
else{n=A.a_(q,a.e,o)
switch(n.x){case 12:j.push(A.cV(q,n,p,a.n))
break
default:j.push(A.cU(q,n,p))
break}}break
case 38:A.eT(a,j)
break
case 42:q=a.u
j.push(A.dI(q,A.a_(q,a.e,j.pop()),a.n))
break
case 63:q=a.u
j.push(A.cW(q,A.a_(q,a.e,j.pop()),a.n))
break
case 47:q=a.u
j.push(A.dH(q,A.a_(q,a.e,j.pop()),a.n))
break
case 40:j.push(-3)
j.push(a.p)
a.p=j.length
break
case 41:A.eR(a,j)
break
case 91:j.push(a.p)
a.p=j.length
break
case 93:p=j.splice(a.p)
A.cT(a.u,a.e,p)
a.p=j.pop()
j.push(p)
j.push(-1)
break
case 123:j.push(a.p)
a.p=j.length
break
case 125:p=j.splice(a.p)
A.eV(a.u,a.e,p)
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
return A.a_(a.u,a.e,l)},
eS(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
dE(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36||s===124))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.x===10)p=p.y
o=A.f9(t,p.y)[q]
if(o==null)A.C('No "'+q+'" in "'+A.eG(p)+'"')
d.push(A.cx(t,p,o))}else d.push(q)
return n},
eR(a,b){var t,s,r,q,p,o=null,n=a.u,m=b.pop()
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
t=s}r=A.eQ(a,b)
m=b.pop()
switch(m){case-3:m=b.pop()
if(t==null)t=n.sEA
if(s==null)s=n.sEA
q=A.a_(n,a.e,m)
p=new A.bL()
p.a=r
p.b=t
p.c=s
b.push(A.dG(n,q,p))
return
case-4:b.push(A.f4(n,b.pop(),r))
return
default:throw A.d(A.b0("Unexpected state under `()`: "+A.e(m)))}},
eT(a,b){var t=b.pop()
if(0===t){b.push(A.aR(a.u,1,"0&"))
return}if(1===t){b.push(A.aR(a.u,4,"1&"))
return}throw A.d(A.b0("Unexpected extended operation "+A.e(t)))},
eQ(a,b){var t=b.splice(a.p)
A.cT(a.u,a.e,t)
a.p=b.pop()
return t},
a_(a,b,c){if(typeof c=="string")return A.aQ(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.eU(a,b,c)}else return c},
cT(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=A.a_(a,b,c[t])},
eV(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=A.a_(a,b,c[t])},
eU(a,b,c){var t,s,r=b.x
if(r===10){if(c===0)return b.y
t=b.z
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.y
r=b.x}else if(c===0)return b
if(r!==9)throw A.d(A.b0("Indexed base must be an interface type"))
t=b.z
if(c<=t.length)return t[c-1]
throw A.d(A.b0("Bad index "+c+" for "+b.h(0)))},
i(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
if(b===d)return!0
if(!A.U(d))if(!(d===u._))t=!1
else t=!0
else t=!0
if(t)return!0
s=b.x
if(s===4)return!0
if(A.U(b))return!1
if(b.x!==1)t=!1
else t=!0
if(t)return!0
r=s===14
if(r)if(A.i(a,c[b.y],c,d,e))return!0
q=d.x
t=b===u.P||b===u.T
if(t){if(q===8)return A.i(a,b,c,d.y,e)
return d===u.P||d===u.T||q===7||q===6}if(d===u.K){if(s===8)return A.i(a,b.y,c,d,e)
if(s===6)return A.i(a,b.y,c,d,e)
return s!==7}if(s===6)return A.i(a,b.y,c,d,e)
if(q===6){t=A.dn(a,d)
return A.i(a,b,c,t,e)}if(s===8){if(!A.i(a,b.y,c,d,e))return!1
return A.i(a,A.dm(a,b),c,d,e)}if(s===7){t=A.i(a,u.P,c,d,e)
return t&&A.i(a,b.y,c,d,e)}if(q===8){if(A.i(a,b,c,d.y,e))return!0
return A.i(a,b,c,A.dm(a,d),e)}if(q===7){t=A.i(a,b,c,u.P,e)
return t||A.i(a,b,c,d.y,e)}if(r)return!1
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
if(!A.i(a,l,c,k,e)||!A.i(a,k,e,l,c))return!1}return A.dP(a,b.y,c,d.y,e)}if(q===12){if(b===u.g)return!0
if(t)return!1
return A.dP(a,b,c,d,e)}if(s===9){if(q!==9)return!1
return A.fm(a,b,c,d,e)}t=s===11
if(t&&d===u.L)return!0
if(t&&q===11)return A.fq(a,b,c,d,e)
return!1},
dP(a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
if(!A.i(a2,a3.y,a4,a5.y,a6))return!1
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
if(!A.i(a2,q[i],a6,h,a4))return!1}for(i=0;i<n;++i){h=m[i]
if(!A.i(a2,q[p+i],a6,h,a4))return!1}for(i=0;i<j;++i){h=m[n+i]
if(!A.i(a2,l[i],a6,h,a4))return!1}g=t.c
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
if(!A.i(a2,f[b+2],a6,h,a4))return!1
break}}for(;c<e;){if(g[c+1])return!1
c+=3}return!0},
fm(a,b,c,d,e){var t,s,r,q,p,o,n,m=b.y,l=d.y
for(;m!==l;){t=a.tR[m]
if(t==null)return!1
if(typeof t=="string"){m=t
continue}s=t[l]
if(s==null)return!1
r=s.length
q=r>0?new Array(r):v.typeUniverse.sEA
for(p=0;p<r;++p)q[p]=A.cx(a,b,s[p])
return A.dK(a,q,null,c,d.z,e)}o=b.z
n=d.z
return A.dK(a,o,null,c,n,e)},
dK(a,b,c,d,e,f){var t,s,r,q=b.length
for(t=0;t<q;++t){s=b[t]
r=e[t]
if(!A.i(a,s,d,r,f))return!1}return!0},
fq(a,b,c,d,e){var t,s=b.z,r=d.z,q=s.length
if(q!==r.length)return!1
if(b.y!==d.y)return!1
for(t=0;t<q;++t)if(!A.i(a,s[t],c,r[t],e))return!1
return!0},
aY(a){var t,s=a.x
if(!(a===u.P||a===u.T))if(!A.U(a))if(s!==7)if(!(s===6&&A.aY(a.y)))t=s===8&&A.aY(a.y)
else t=!0
else t=!0
else t=!0
else t=!0
return t},
fW(a){var t
if(!A.U(a))if(!(a===u._))t=!1
else t=!0
else t=!0
return t},
U(a){var t=a.x
return t===2||t===3||t===4||t===5||a===u.X},
dJ(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
cy(a){return a>0?new Array(a):v.typeUniverse.sEA},
E:function E(a,b){var _=this
_.a=a
_.b=b
_.w=_.r=_.c=null
_.x=0
_.at=_.as=_.Q=_.z=_.y=null},
bL:function bL(){this.c=this.b=this.a=null},
bP:function bP(a){this.a=a},
bK:function bK(){},
aO:function aO(a){this.a=a},
eK(){var t,s,r={}
if(self.scheduleImmediate!=null)return A.fG()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
r.a=null
new self.MutationObserver(A.aX(new A.cm(r),1)).observe(t,{childList:true})
return new A.cl(r,t,s)}else if(self.setImmediate!=null)return A.fH()
return A.fI()},
eL(a){self.scheduleImmediate(A.aX(new A.cn(u.M.a(a)),0))},
eM(a){self.setImmediate(A.aX(new A.co(u.M.a(a)),0))},
eN(a){u.M.a(a)
A.eW(0,a)},
dv(a,b){var t=B.b.K(a.a,1000)
return A.eX(t<0?0:t,b)},
eW(a,b){var t=new A.aN(!0)
t.ar(a,b)
return t},
eX(a,b){var t=new A.aN(!1)
t.au(a,b)
return t},
fv(){var t,s
for(t=$.ah;t!=null;t=$.ah){$.aV=null
s=t.b
$.ah=s
if(s==null)$.aU=null
t.a.$0()}},
fA(){$.cY=!0
try{A.fv()}finally{$.aV=null
$.cY=!1
if($.ah!=null)$.d6().$1(A.dT())}},
fz(a){var t,s,r,q,p,o=$.ah
if(o==null){t=new A.bI(a)
s=$.aU
if(s==null){$.ah=$.aU=t
if(!$.cY)$.d6().$1(A.dT())}else $.aU=s.b=t
$.aV=$.aU
return}r=new A.bI(a)
q=$.aV
if(q==null){r.b=o
$.ah=$.aV=r}else{p=q.b
r.b=p
$.aV=q.b=r
if(p==null)$.aU=r}},
eJ(a,b){var t=$.bG
if(t===B.l)return A.dv(a,u.F.a(b))
return A.dv(a,u.F.a(t.aI(b,u.G)))},
fx(a,b){A.fz(new A.cB(a,b))},
fy(a,b,c,d,e,f,g){var t,s=$.bG
if(s===c)return d.$1(e)
$.bG=c
t=s
try{s=d.$1(e)
return s}finally{$.bG=t}},
cm:function cm(a){this.a=a},
cl:function cl(a,b,c){this.a=a
this.b=b
this.c=c},
cn:function cn(a){this.a=a},
co:function co(a){this.a=a},
aN:function aN(a){this.a=a
this.b=null
this.c=0},
cw:function cw(a,b){this.a=a
this.b=b},
cv:function cv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bI:function bI(a){this.a=a
this.b=null},
cz:function cz(){},
cB:function cB(a,b){this.a=a
this.b=b},
ct:function ct(){},
cu:function cu(a,b,c){this.a=a
this.b=b
this.c=c},
ep(a,b){return new A.aG(a.i("@<0>").aB(b).i("aG<1,2>"))},
dB(a,b){var t=a[b]
return t===a?null:t},
cR(a,b,c){if(c==null)a[b]=a
else a[b]=c},
dC(){var t=Object.create(null)
A.cR(t,"<non-identifier-key>",t)
delete t["<non-identifier-key>"]
return t},
ew(a,b){return b.i("dj<0>").a(A.fM(a,new A.aJ(b.i("aJ<0>"))))},
cS(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
eq(a,b,c){var t,s
if(A.cZ(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=A.l([],u.s)
B.a.j($.B,a)
try{A.fu(a,t)}finally{if(0>=$.B.length)return A.n($.B,-1)
$.B.pop()}s=A.ds(b,u.U.a(t),", ")+c
return s.charCodeAt(0)==0?s:s},
dh(a,b,c){var t,s
if(A.cZ(a))return b+"..."+c
t=new A.bw(b)
B.a.j($.B,a)
try{s=t
s.a=A.ds(s.a,a,", ")}finally{if(0>=$.B.length)return A.n($.B,-1)
$.B.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
cZ(a){var t,s
for(t=$.B.length,s=0;s<t;++s)if(a===$.B[s])return!0
return!1},
fu(a,b){var t,s,r,q,p,o,n,m=a.gB(a),l=0,k=0
while(!0){if(!(l<80||k<3))break
if(!m.l())return
t=A.e(m.gq())
B.a.j(b,t)
l+=t.length+2;++k}if(!m.l()){if(k<=5)return
if(0>=b.length)return A.n(b,-1)
s=b.pop()
if(0>=b.length)return A.n(b,-1)
r=b.pop()}else{q=m.gq();++k
if(!m.l()){if(k<=4){B.a.j(b,A.e(q))
return}s=A.e(q)
if(0>=b.length)return A.n(b,-1)
r=b.pop()
l+=s.length+2}else{p=m.gq();++k
for(;m.l();q=p,p=o){o=m.gq();++k
if(k>100){while(!0){if(!(l>75&&k>3))break
if(0>=b.length)return A.n(b,-1)
l-=b.pop().length+2;--k}B.a.j(b,"...")
return}}r=A.e(q)
s=A.e(p)
l+=s.length+r.length+4}}if(k>b.length+2){l+=5
n="..."}else n=null
while(!0){if(!(l>80&&b.length>3))break
if(0>=b.length)return A.n(b,-1)
l-=b.pop().length+2
if(n==null){l+=5
n="..."}}if(n!=null)B.a.j(b,n)
B.a.j(b,r)
B.a.j(b,s)},
eA(a){var t,s={}
if(A.cZ(a))return"{...}"
t=new A.bw("")
try{B.a.j($.B,a)
t.a+="{"
s.a=!0
a.a6(0,new A.c6(s,t))
t.a+="}"}finally{if(0>=$.B.length)return A.n($.B,-1)
$.B.pop()}s=t.a
return s.charCodeAt(0)==0?s:s},
aG:function aG(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
aH:function aH(a,b){this.a=a
this.$ti=b},
aI:function aI(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aJ:function aJ(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bN:function bN(a){this.a=a
this.b=null},
aK:function aK(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
au:function au(){},
c6:function c6(a,b){this.a=a
this.b=b},
av:function av(){},
ay:function ay(){},
aL:function aL(){},
aS:function aS(){},
en(a){if(a instanceof A.a3)return a.h(0)
return"Instance of '"+A.cb(a)+"'"},
eo(a,b){a=A.d(a)
if(a==null)a=u.K.a(a)
a.stack=b.h(0)
throw a
throw A.d("unreachable")},
ey(a,b,c){var t
if(a>4294967295)A.C(A.eE(a,0,4294967295,"length",null))
t=J.er(new Array(a),c)
return t},
ez(a,b,c){var t=A.ex(a,c)
return t},
ex(a,b){var t,s
if(Array.isArray(a))return A.l(a.slice(0),b.i("o<0>"))
t=A.l([],b.i("o<0>"))
for(s=J.cM(a);s.l();)B.a.j(t,s.gq())
return t},
ds(a,b,c){var t=J.cM(b)
if(!t.l())return a
if(c.length===0){do a+=A.e(t.gq())
while(t.l())}else{a+=A.e(t.gq())
for(;t.l();)a=a+c+A.e(t.gq())}return a},
bc(a){if(typeof a=="number"||A.dO(a)||a==null)return J.bU(a)
if(typeof a=="string")return JSON.stringify(a)
return A.en(a)},
b0(a){return new A.ak(a)},
ef(a){return new A.a1(!1,null,null,a)},
eD(a){var t=null
return new A.ae(t,t,!1,t,t,a)},
eE(a,b,c,d,e){return new A.ae(b,c,!0,a,d,"Invalid value")},
eF(a,b){return a},
dg(a,b,c,d){return new A.bf(b,!0,a,d,"Index out of range")},
Z(a){return new A.bD(a)},
dy(a){return new A.bB(a)},
am(a){return new A.b7(a)},
dk(a,b,c,d){var t=A.du(B.d.gk(a),B.d.gk(b),B.d.gk(c),B.d.gk(d),$.ee())
return t},
bb:function bb(a){this.a=a},
cq:function cq(){},
h:function h(){},
ak:function ak(a){this.a=a},
bA:function bA(){},
bo:function bo(){},
a1:function a1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ae:function ae(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
bf:function bf(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
bD:function bD(a){this.a=a},
bB:function bB(a){this.a=a},
b7:function b7(a){this.a=a},
bp:function bp(){},
az:function az(){},
b8:function b8(a){this.a=a},
cr:function cr(a){this.a=a},
q:function q(){},
D:function D(){},
G:function G(){},
j:function j(){},
bw:function bw(a){this.a=a},
dL(a){var t
if("postMessage" in a){t=A.eP(a)
return t}else return u.O.a(a)},
eP(a){if(a===window)return u.y.a(a)
else return new A.bJ()},
c:function c(){},
aZ:function aZ(){},
b_:function b_(){},
a2:function a2(){},
b1:function b1(){},
al:function al(){},
K:function K(){},
c_:function c_(){},
an:function an(){},
a:function a(){},
b:function b(){},
k:function k(){},
bd:function bd(){},
a6:function a6(){},
a8:function a8(){},
M:function M(){},
x:function x(){},
bt:function bt(){},
H:function H(){},
bE:function bE(){},
aE:function aE(){},
aF:function aF(){},
bJ:function bJ(){},
cQ(){return B.f},
ax(a,b,c,d,e){var t,s
if(c<0)t=c===-1/0?0:-c*0
else t=c+0
e.a(t)
if(d<0)s=d===-1/0?0:-d*0
else s=d+0
return new A.P(a,b,t,e.a(s),e.i("P<0>"))},
bM:function bM(){},
a9:function a9(a,b,c){this.a=a
this.b=b
this.$ti=c},
bO:function bO(){},
P:function P(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bV:function bV(){},
bW:function bW(a,b,c){var _=this
_.b=a
_.c=b
_.e=c
_.r=0},
bX:function bX(){},
bY:function bY(){},
ca:function ca(a){this.b=a},
b5:function b5(){var _=this
_.y=!1
_.f=_.e=_.d=_.c=_.b=_.a=0
_.r=!0
_.w=!1
_.x=0},
W:function W(a){this.b=a},
bZ:function bZ(){},
b9:function b9(){var _=this
_.y=!1
_.f=_.e=_.d=_.c=_.b=_.a=0
_.r=!0
_.w=!1
_.x=0},
p:function p(){},
c0:function c0(a){this.a=a},
be:function be(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.e=d
_.r=_.f=null
_.Q=_.z=_.y=_.x=_.w=$
_.as=e
_.at=f
_.cx=_.CW=_.ch=_.ax=$},
c1:function c1(a){this.a=a},
ap(a,b,c,d){var t,s,r,q,p=new A.a5()
p.a=a
p.b=b
p.c=c
p.d=d
t=A.cd()
p.z=t
s=A.cd()
p.Q=s
r=a-9
q=b-5
t.u(r,q)
s.u(r+c,q)
return p},
a5:function a5(){var _=this
_.y=!1
_.Q=_.z=$
_.f=_.e=_.d=_.c=_.b=_.a=0
_.r=!0
_.w=!1
_.x=0},
es(a,b){var t,s,r,q,p,o=A.l([],u.n)
for(t=u.C,s=a,r=0;r<10;++r){q=$.d5()
$.cJ()
p=q.a8(3)
q=$.cJ()
if(!(p>=0&&p<3))return A.n(q,p)
B.a.a3(o,t.a(q[p].a.$2(s,b)))
s-=$.cJ()[p].b}for(r=B.b.ab(a),t=b-60;r>s;r-=200){q=new A.b5()
q.a=$.d5().v()*t-30
q.b=r
q.c=30
q.d=40
B.a.j(o,q)}return o},
cP(a,b){return new A.bn(a,b)},
bn:function bn(a,b){this.a=a
this.b=b},
cd(){var t=new A.bu(B.f,A.l([],u.I))
t.aq()
return t},
dz(a,b,c,d){var t=new A.aB(B.f)
t.ap(a,b,c,d)
t.Q=!0
t.f=5
t.z=0
return t},
bF:function bF(a,b,c,d){var _=this
_.e=a
_.f=b
_.r=c
_.a=d
_.c=_.b=0
_.d=!1},
bu:function bu(a,b){var _=this
_.e=a
_.r=0
_.a=b
_.c=_.b=0
_.d=!1},
ce:function ce(){},
cf:function cf(){},
cg:function cg(){},
bm:function bm(a,b){var _=this
_.e=a
_.a=b
_.c=_.b=0
_.d=!1},
bk:function bk(a,b){var _=this
_.e=a
_.a=b
_.c=_.b=0
_.d=!1},
c3:function c3(){},
c4:function c4(){},
c5:function c5(){},
bl:function bl(a,b){var _=this
_.e=a
_.a=b
_.c=_.b=0
_.d=!1},
ba:function ba(a,b){var _=this
_.e=a
_.a=b
_.c=_.b=0
_.d=!1},
b6:function b6(a,b){var _=this
_.e=a
_.a=b
_.c=_.b=0
_.d=!1},
v:function v(){},
c8:function c8(){},
u:function u(){var _=this
_.z=_.y=0
_.Q=!1
_.f=_.e=_.d=_.c=_.b=_.a=_.as=0
_.r=!0
_.w=!1
_.x=0},
aB:function aB(a){var _=this
_.dy=a
_.z=_.y=0
_.Q=!1
_.f=_.e=_.d=_.c=_.b=_.a=_.as=0
_.r=!0
_.w=!1
_.x=0},
O:function O(a){var _=this
_.as=_.Q=_.z=_.y=null
_.ax=_.at=!1
_.ay=0
_.ch=a
_.f=_.e=_.d=_.c=_.b=_.a=_.CW=0
_.r=!0
_.w=!1
_.x=0},
c9:function c9(a){this.a=a},
dw(a,b,c,d){var t,s=new A.bz()
s.a=a
s.b=b
s.c=c
s.d=d
t=new A.bm(B.f,A.l([],u.I))
t.ao()
s.Q=t
return s},
bz:function bz(){var _=this
_.y=0
_.Q=$
_.f=_.e=_.d=_.c=_.b=_.a=0
_.r=!0
_.w=!1
_.x=0},
A(a){var t=document.createElement("img")
B.A.sag(t,"./assets/img/"+a+".png")
$.f.A().ae(0,a,t)},
et(a,b){var t,s,r,q=A.l([],u.n),p=b/2-50
B.a.j(q,A.ap(p,a-250,100,20))
for(t=b-100,s=2;s<5;++s){r=new A.a5()
r.X($.e2().v()*t,a-250*s,100,20)
B.a.j(q,r)}B.a.j(q,A.ap(p,a-1250,100,20))
return q},
eu(a,b){var t,s,r,q,p=A.l([],u.n),o=b/2
for(t=b-100,s=1;s<5;++s){r=a-500*s
q=new A.a5()
q.X($.e3().v()*t,r,100,20)
B.a.j(p,q)
q=new A.b9()
q.a=o
q.b=r+200
q.d=q.c=30
B.a.j(p,q)}return p},
ev(a,b){var t=A.l([],u.n)
B.a.j(t,A.ap(0,a-250,100,20))
B.a.j(t,A.ap(b-100,a-400,100,20))
B.a.j(t,A.dw(0,a-550,200,30))
B.a.j(t,A.ap(100,a-800,100,20))
B.a.j(t,A.dw(b-200,a-1000,200,30))
return t},
h0(){var t,s,r,q,p="rgb(66, 205, 255)",o="rgb(0, 131, 179)",n=u.E.a(document.querySelector("#canvas")),m=n.getContext("2d")
B.c.saN(m,"high")
t=A.l([],u.n)
s=A.l([],u.a)
r=new A.O(B.h)
r.Y(150,300,50,50)
q=new A.be(30,n,m,t,s,r)
q.aK()
$.f.b=A.ep(u.N,u.R)
A.A("bubbles")
A.A("player_left")
A.A("player_right")
A.A("rock")
A.A("waterfall")
A.A("coin")
A.A("coin_mirrored")
A.A("coin_particle")
A.A("jump_item")
A.A("double_jump_particle")
A.A("branch")
A.A("branch_mirrored")
A.A("leaf")
A.A("leaf_mirrored")
r=m.createLinearGradient(0,0,180,0)
q.ch=r
r.addColorStop(0,p)
q.ch.addColorStop(1,o)
r=m.createLinearGradient(180,0,360,0)
q.CW=r
r.addColorStop(0,o)
q.CW.addColorStop(1,p)
m=m.createLinearGradient(0,0,0,640)
q.cx=m
m.addColorStop(0,"transparent")
q.cx.addColorStop(1,"rgba(255, 255, 255, 0.5)")
m=u.I
t=new A.bl(B.f,A.l([],m))
t.an()
q.w=t
t=new A.bk(B.f,A.l([],m))
t.am()
q.x=t
t=new A.b6(B.f,A.l([],m))
t.ak()
q.y=t
t=new A.ba(B.f,A.l([],m))
t.al()
q.Q=t
m=A.l([],m)
t=new A.bF(new A.bV(),B.f,900,m)
t.d=!0
B.a.j(m,A.dz(0,-900,1,1))
B.a.j(m,A.dz(0,0,1,1))
q.z=t
B.a.j(s,q.w)
B.a.j(s,q.x)
B.a.j(s,q.z)
B.a.j(s,q.y)
B.a.j(s,q.Q)
q.W(0)}},J={
d4(a,b,c,d){return{i:a,p:b,e:c,x:d}},
d1(a){var t,s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.d2==null){A.fT()
o=a[v.dispatchPropertyName]}if(o!=null){t=o.p
if(!1===t)return o.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return o.i
if(o.e===s)throw A.d(A.dy("Return interceptor for "+A.e(t(a,o))))}r=a.constructor
if(r==null)q=null
else{p=$.cs
if(p==null)p=$.cs=v.getIsolateTag("_$dart_js")
q=r[p]}if(q!=null)return q
q=A.h_(a)
if(q!=null)return q
if(typeof a=="function")return B.C
t=Object.getPrototypeOf(a)
if(t==null)return B.q
if(t===Object.prototype)return B.q
if(typeof r=="function"){p=$.cs
if(p==null)p=$.cs=v.getIsolateTag("_$dart_js")
Object.defineProperty(r,p,{value:B.m,enumerable:false,writable:true,configurable:true})
return B.m}return B.m},
er(a,b){return J.di(A.l(a,b.i("o<0>")),b)},
di(a,b){a.fixed$length=Array
return a},
aj(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ar.prototype
return J.bi.prototype}if(typeof a=="string")return J.ad.prototype
if(a==null)return J.bh.prototype
if(typeof a=="boolean")return J.bg.prototype
if(a.constructor==Array)return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.X.prototype
return a}if(a instanceof A.j)return a
return J.d1(a)},
fN(a){if(a==null)return a
if(a.constructor==Array)return J.o.prototype
if(!(a instanceof A.j))return J.af.prototype
return a},
fO(a){if(typeof a=="string")return J.ad.prototype
if(a==null)return a
if(a.constructor==Array)return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.X.prototype
return a}if(a instanceof A.j)return a
return J.d1(a)},
cD(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.X.prototype
return a}if(a instanceof A.j)return a
return J.d1(a)},
cK(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.aj(a).D(a,b)},
cL(a){return J.aj(a).gk(a)},
cM(a){return J.fN(a).gB(a)},
d7(a){return J.fO(a).gt(a)},
bU(a){return J.aj(a).h(a)},
aq:function aq(){},
bg:function bg(){},
bh:function bh(){},
L:function L(){},
a7:function a7(){},
bq:function bq(){},
af:function af(){},
X:function X(){},
o:function o(a){this.$ti=a},
c2:function c2(a){this.$ti=a},
t:function t(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
as:function as(){},
ar:function ar(){},
bi:function bi(){},
ad:function ad(){}},B={}
var w=[A,J,B]
var $={}
A.cN.prototype={}
J.aq.prototype={
D(a,b){return a===b},
gk(a){return A.br(a)},
h(a){return"Instance of '"+A.cb(a)+"'"}}
J.bg.prototype={
h(a){return String(a)},
gk(a){return a?519018:218159},
$iz:1}
J.bh.prototype={
D(a,b){return null==b},
h(a){return"null"},
gk(a){return 0}}
J.L.prototype={}
J.a7.prototype={
gk(a){return 0},
h(a){return String(a)}}
J.bq.prototype={}
J.af.prototype={}
J.X.prototype={
h(a){var t=a[$.e1()]
if(t==null)return this.ai(a)
return"JavaScript function for "+J.bU(t)},
$ia4:1}
J.o.prototype={
j(a,b){A.J(a).c.a(b)
if(!!a.fixed$length)A.C(A.Z("add"))
a.push(b)},
a3(a,b){var t
A.J(a).i("q<1>").a(b)
if(!!a.fixed$length)A.C(A.Z("addAll"))
if(Array.isArray(b)){this.aw(a,b)
return}for(t=J.cM(b);t.l();)a.push(t.gq())},
aw(a,b){var t,s
u.b.a(b)
t=b.length
if(t===0)return
if(a===b)throw A.d(A.am(a))
for(s=0;s<t;++s)a.push(b[s])},
aH(a,b){var t,s
A.J(a).i("z(1)").a(b)
t=a.length
for(s=0;s<t;++s){if(A.dU(b.$1(a[s])))return!0
if(a.length!==t)throw A.d(A.am(a))}return!1},
h(a){return A.dh(a,"[","]")},
gB(a){return new J.t(a,a.length,A.J(a).i("t<1>"))},
gk(a){return A.br(a)},
gt(a){return a.length},
$iq:1,
$iY:1}
J.c2.prototype={}
J.t.prototype={
gq(){var t=this.d
return t==null?this.$ti.c.a(t):t},
l(){var t,s=this,r=s.a,q=r.length
if(s.b!==q)throw A.d(A.r(r))
t=s.c
if(t>=q){s.sa1(null)
return!1}s.sa1(r[t]);++s.c
return!0},
sa1(a){this.d=this.$ti.i("1?").a(a)},
$iD:1}
J.as.prototype={
ac(a){var t
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){t=a<0?Math.ceil(a):Math.floor(a)
return t+0}throw A.d(A.Z(""+a+".toInt()"))},
ab(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.d(A.Z(""+a+".round()"))},
h(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gk(a){var t,s,r,q,p=a|0
if(a===p)return p&536870911
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259&536870911},
E(a,b){var t=a%b
if(t===0)return 0
if(t>0)return t
if(b<0)return t-b
else return t+b},
aj(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.a2(a,b)},
K(a,b){return(a|0)===a?a/b|0:this.a2(a,b)},
a2(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw A.d(A.Z("Result of truncating division is "+A.e(t)+": "+A.e(a)+" ~/ "+b))},
aG(a,b){var t
if(a>0)t=this.aF(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
aF(a,b){return b>31?0:a>>>b},
$iT:1,
$iV:1}
J.ar.prototype={$id3:1}
J.bi.prototype={}
J.ad.prototype={
ad(a,b){return a+b},
af(a,b){var t,s
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.d(B.y)
for(t=a,s="";!0;){if((b&1)===1)s=t+s
b=b>>>1
if(b===0)break
t+=t}return s},
aQ(a,b,c){var t=b-a.length
if(t<=0)return a
return this.af(c,t)+a},
h(a){return a},
gk(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=s+a.charCodeAt(r)&536870911
s=s+((s&524287)<<10)&536870911
s^=s>>6}s=s+((s&67108863)<<3)&536870911
s^=s>>11
return s+((s&16383)<<15)&536870911},
gt(a){return a.length},
$iaa:1}
A.at.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.cc.prototype={}
A.ao.prototype={}
A.I.prototype={
gB(a){var t=this.a
return new A.F(new J.t(t,t.length,A.J(t).i("t<1>")),this.b,this.$ti.i("F<1>"))}}
A.F.prototype={
l(){var t,s,r,q
for(t=this.a,s=this.b,r=t.$ti.c;t.l();){q=t.d
if(A.dU(s.$1(q==null?r.a(q):q)))return!0}return!1},
gq(){var t=this.a,s=t.d
return s==null?t.$ti.c.a(s):s}}
A.aC.prototype={
gB(a){var t=this.a
return new A.aD(new J.t(t,t.length,A.J(t).i("t<1>")),this.$ti.i("aD<1>"))}}
A.aD.prototype={
l(){var t,s,r,q
for(t=this.a,s=this.$ti.c,r=t.$ti.c;t.l();){q=t.d
if(s.b(q==null?r.a(q):q))return!0}return!1},
gq(){var t=this.a,s=t.d
t=s==null?t.$ti.c.a(s):s
return this.$ti.c.a(t)},
$iD:1}
A.ci.prototype={
C(a){var t,s,r=this,q=new RegExp(r.a).exec(a)
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
A.aw.prototype={
h(a){var t=this.b
if(t==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+t+"' on null"}}
A.bj.prototype={
h(a){var t,s=this,r="NoSuchMethodError: method not found: '",q=s.b
if(q==null)return"NoSuchMethodError: "+s.a
t=s.c
if(t==null)return r+q+"' ("+s.a+")"
return r+q+"' on '"+t+"' ("+s.a+")"}}
A.bC.prototype={
h(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
A.c7.prototype={
h(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.aM.prototype={
h(a){var t,s=this.b
if(s!=null)return s
s=this.a
t=s!==null&&typeof s==="object"?s.stack:null
return this.b=t==null?"":t},
$idr:1}
A.a3.prototype={
h(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+A.e0(s==null?"unknown":s)+"'"},
$ia4:1,
gaT(){return this},
$C:"$1",
$R:1,
$D:null}
A.b3.prototype={$C:"$0",$R:0}
A.b4.prototype={$C:"$2",$R:2}
A.bx.prototype={}
A.bv.prototype={
h(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+A.e0(t)+"'"}}
A.ac.prototype={
D(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.ac))return!1
return this.$_target===b.$_target&&this.a===b.a},
gk(a){return(A.dY(this.a)^A.br(this.$_target))>>>0},
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.cb(this.a)+"'")}}
A.bs.prototype={
h(a){return"RuntimeError: "+this.a}}
A.bH.prototype={
h(a){return"Assertion failed: "+A.bc(this.a)}}
A.cE.prototype={
$1(a){return this.a(a)},
$S:6}
A.cF.prototype={
$2(a,b){return this.a(a,b)},
$S:7}
A.cG.prototype={
$1(a){return this.a(A.bR(a))},
$S:8}
A.cp.prototype={
A(){var t=this.b
if(t===this)throw A.d(A.N(""))
return t}}
A.E.prototype={
i(a){return A.cx(v.typeUniverse,this,a)},
aB(a){return A.f7(v.typeUniverse,this,a)}}
A.bL.prototype={}
A.bP.prototype={
h(a){return A.y(this.a,null)}}
A.bK.prototype={
h(a){return this.a}}
A.aO.prototype={}
A.cm.prototype={
$1(a){var t=this.a,s=t.a
t.a=null
s.$0()},
$S:9}
A.cl.prototype={
$1(a){var t,s
this.a.a=u.M.a(a)
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:10}
A.cn.prototype={
$0(){this.a.$0()},
$S:1}
A.co.prototype={
$0(){this.a.$0()},
$S:1}
A.aN.prototype={
ar(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(A.aX(new A.cw(this,b),0),a)
else throw A.d(A.Z("`setTimeout()` not found."))},
au(a,b){if(self.setTimeout!=null)this.b=self.setInterval(A.aX(new A.cv(this,a,Date.now(),b),0),a)
else throw A.d(A.Z("Periodic timer."))},
aJ(){if(self.setTimeout!=null){var t=this.b
if(t==null)return
if(this.a)self.clearTimeout(t)
else self.clearInterval(t)
this.b=null}else throw A.d(A.Z("Canceling a timer."))},
$iby:1}
A.cw.prototype={
$0(){var t=this.a
t.b=null
t.c=1
this.b.$0()},
$S:2}
A.cv.prototype={
$0(){var t,s=this,r=s.a,q=r.c+1,p=s.b
if(p>0){t=Date.now()-s.c
if(t>(q+1)*p)q=B.b.aj(t,p)}r.c=q
s.d.$1(r)},
$S:1}
A.bI.prototype={}
A.cz.prototype={}
A.cB.prototype={
$0(){var t=this.a,s=this.b
A.dV(t,"error",u.K)
A.dV(s,"stackTrace",u.l)
A.eo(t,s)},
$S:2}
A.ct.prototype={
aR(a,b,c){var t,s,r
c.i("~(0)").a(a)
c.a(b)
try{if(B.l===$.bG){a.$1(b)
return}A.fy(null,null,this,a,b,u.t,c)}catch(r){t=A.h7(r)
s=A.fQ(r)
A.fx(u.K.a(t),u.l.a(s))}},
aI(a,b){return new A.cu(this,b.i("~(0)").a(a),b)}}
A.cu.prototype={
$1(a){var t=this.c
return this.a.aR(this.b,t.a(a),t)},
$S(){return this.c.i("~(0)")}}
A.aG.prototype={
gt(a){return this.a},
ga7(){return new A.aH(this,A.aT(this).i("aH<1>"))},
n(a,b){var t,s,r
if(typeof b=="string"&&b!=="__proto__"){t=this.b
s=t==null?null:A.dB(t,b)
return s}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
s=r==null?null:A.dB(r,b)
return s}else return this.aD(b)},
aD(a){var t,s,r=this.d
if(r==null)return null
t=r[this.a_(a)]
s=this.J(t,a)
return s<0?null:t[s+1]},
ae(a,b,c){var t,s=this,r=A.aT(s)
r.c.a(b)
r.z[1].a(c)
if(b!=="__proto__"){t=s.b
s.aA(t==null?s.b=A.dC():t,b,c)}else s.aE(b,c)},
aE(a,b){var t,s,r,q,p=this,o=A.aT(p)
o.c.a(a)
o.z[1].a(b)
t=p.d
if(t==null)t=p.d=A.dC()
s=p.a_(a)
r=t[s]
if(r==null){A.cR(t,s,[a,b]);++p.a
p.e=null}else{q=p.J(r,a)
if(q>=0)r[q+1]=b
else{r.push(a,b);++p.a
p.e=null}}},
a6(a,b){var t,s,r,q,p,o,n=this,m=A.aT(n)
m.i("~(1,2)").a(b)
t=n.a0()
for(s=t.length,r=m.c,m=m.z[1],q=0;q<s;++q){p=t[q]
r.a(p)
o=n.n(0,p)
b.$2(p,o==null?m.a(o):o)
if(t!==n.e)throw A.d(A.am(n))}},
a0(){var t,s,r,q,p,o,n,m,l,k,j=this,i=j.e
if(i!=null)return i
i=A.ey(j.a,null,u.B)
t=j.b
if(t!=null){s=Object.getOwnPropertyNames(t)
r=s.length
for(q=0,p=0;p<r;++p){i[q]=s[p];++q}}else q=0
o=j.c
if(o!=null){s=Object.getOwnPropertyNames(o)
r=s.length
for(p=0;p<r;++p){i[q]=+s[p];++q}}n=j.d
if(n!=null){s=Object.getOwnPropertyNames(n)
r=s.length
for(p=0;p<r;++p){m=n[s[p]]
l=m.length
for(k=0;k<l;k+=2){i[q]=m[k];++q}}}return j.e=i},
aA(a,b,c){var t=A.aT(this)
t.c.a(b)
t.z[1].a(c)
if(a[b]==null){++this.a
this.e=null}A.cR(a,b,c)},
a_(a){return J.cL(a)&1073741823},
J(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;s+=2)if(J.cK(a[s],b))return s
return-1}}
A.aH.prototype={
gt(a){return this.a.a},
gB(a){var t=this.a
return new A.aI(t,t.a0(),this.$ti.i("aI<1>"))}}
A.aI.prototype={
gq(){var t=this.d
return t==null?this.$ti.c.a(t):t},
l(){var t=this,s=t.b,r=t.c,q=t.a
if(s!==q.e)throw A.d(A.am(q))
else if(r>=s.length){t.sI(null)
return!1}else{t.sI(s[r])
t.c=r+1
return!0}},
sI(a){this.d=this.$ti.i("1?").a(a)},
$iD:1}
A.aJ.prototype={
gB(a){var t=this,s=new A.aK(t,t.r,t.$ti.i("aK<1>"))
s.c=t.e
return s},
gt(a){return this.a},
j(a,b){var t,s,r=this
r.$ti.c.a(b)
if(typeof b=="string"&&b!=="__proto__"){t=r.b
return r.Z(t==null?r.b=A.cS():t,b)}else if(typeof b=="number"&&(b&1073741823)===b){s=r.c
return r.Z(s==null?r.c=A.cS():s,b)}else return r.av(b)},
av(a){var t,s,r,q=this
q.$ti.c.a(a)
t=q.d
if(t==null)t=q.d=A.cS()
s=J.cL(a)&1073741823
r=t[s]
if(r==null)t[s]=[q.T(a)]
else{if(q.J(r,a)>=0)return!1
r.push(q.T(a))}return!0},
Z(a,b){this.$ti.c.a(b)
if(u.e.a(a[b])!=null)return!1
a[b]=this.T(b)
return!0},
T(a){var t=this,s=new A.bN(t.$ti.c.a(a))
if(t.e==null)t.e=t.f=s
else t.f=t.f.b=s;++t.a
t.r=t.r+1&1073741823
return s},
J(a,b){var t,s=a.length
for(t=0;t<s;++t)if(J.cK(a[t].a,b))return t
return-1},
$idj:1}
A.bN.prototype={}
A.aK.prototype={
gq(){var t=this.d
return t==null?this.$ti.c.a(t):t},
l(){var t=this,s=t.c,r=t.a
if(t.b!==r.r)throw A.d(A.am(r))
else if(s==null){t.sI(null)
return!1}else{t.sI(t.$ti.i("1?").a(s.a))
t.c=s.b
return!0}},
sI(a){this.d=this.$ti.i("1?").a(a)},
$iD:1}
A.au.prototype={}
A.c6.prototype={
$2(a,b){var t,s=this.a
if(!s.a)this.b.a+=", "
s.a=!1
s=this.b
t=s.a+=A.e(a)
s.a=t+": "
s.a+=A.e(b)},
$S:11}
A.av.prototype={
a6(a,b){var t,s,r,q=A.aT(this)
q.i("~(1,2)").a(b)
for(t=this.ga7(),t=t.gB(t),q=q.z[1];t.l();){s=t.gq()
r=this.n(0,s)
b.$2(s,r==null?q.a(r):r)}},
gt(a){var t=this.ga7()
return t.gt(t)},
h(a){return A.eA(this)}}
A.ay.prototype={
h(a){return A.dh(this,"{","}")}}
A.aL.prototype={$iq:1}
A.aS.prototype={}
A.bb.prototype={
D(a,b){if(b==null)return!1
return b instanceof A.bb&&this.a===b.a},
gk(a){return B.b.gk(this.a)},
h(a){var t,s,r,q,p=this.a,o=p<0?"-":"",n=B.b.K(p,36e8)
p%=36e8
if(p<0)p=-p
t=B.b.K(p,6e7)
p%=6e7
s=t<10?"0":""
r=B.b.K(p,1e6)
q=r<10?"0":""
return o+Math.abs(n)+":"+s+t+":"+q+r+"."+B.p.aQ(B.b.h(p%1e6),6,"0")}}
A.cq.prototype={
h(a){return this.aC()}}
A.h.prototype={}
A.ak.prototype={
h(a){var t=this.a
if(t!=null)return"Assertion failed: "+A.bc(t)
return"Assertion failed"}}
A.bA.prototype={}
A.bo.prototype={
h(a){return"Throw of null."}}
A.a1.prototype={
gS(){return"Invalid argument"+(!this.a?"(s)":"")},
gR(){return""},
h(a){var t=this,s=t.c,r=s==null?"":" ("+s+")",q=t.d,p=q==null?"":": "+q,o=t.gS()+r+p
if(!t.a)return o
return o+t.gR()+": "+A.bc(t.gU())},
gU(){return this.b}}
A.ae.prototype={
gU(){return A.fb(this.b)},
gS(){return"RangeError"},
gR(){var t,s=this.e,r=this.f
if(s==null)t=r!=null?": Not less than or equal to "+A.e(r):""
else if(r==null)t=": Not greater than or equal to "+A.e(s)
else if(r>s)t=": Not in inclusive range "+A.e(s)+".."+A.e(r)
else t=r<s?": Valid value range is empty":": Only valid value is "+A.e(s)
return t}}
A.bf.prototype={
gU(){return A.cA(this.b)},
gS(){return"RangeError"},
gR(){if(A.cA(this.b)<0)return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+t},
gt(a){return this.f}}
A.bD.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.bB.prototype={
h(a){return"UnimplementedError: "+this.a}}
A.b7.prototype={
h(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.bc(t)+"."}}
A.bp.prototype={
h(a){return"Out of Memory"},
$ih:1}
A.az.prototype={
h(a){return"Stack Overflow"},
$ih:1}
A.b8.prototype={
h(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.cr.prototype={
h(a){return"Exception: "+this.a}}
A.q.prototype={
gt(a){var t,s=this.gB(this)
for(t=0;s.l();)++t
return t},
gaO(a){return!this.gB(this).l()},
a5(a,b){var t,s,r
A.eF(b,"index")
for(t=this.gB(this),s=0;t.l();){r=t.gq()
if(b===s)return r;++s}throw A.d(A.dg(b,s,this,"index"))},
h(a){return A.eq(this,"(",")")}}
A.D.prototype={}
A.G.prototype={
gk(a){return A.j.prototype.gk.call(this,this)},
h(a){return"null"}}
A.j.prototype={$ij:1,
D(a,b){return this===b},
gk(a){return A.br(this)},
h(a){return"Instance of '"+A.cb(this)+"'"},
toString(){return this.h(this)}}
A.bw.prototype={
gt(a){return this.a.length},
h(a){var t=this.a
return t.charCodeAt(0)==0?t:t}}
A.c.prototype={}
A.aZ.prototype={
h(a){return String(a)}}
A.b_.prototype={
h(a){return String(a)}}
A.a2.prototype={$ia2:1,$ib2:1}
A.b1.prototype={$ib1:1}
A.al.prototype={
sG(a,b){a.fillStyle=b},
saN(a,b){a.imageSmoothingQuality=b},
F(a,b,c){u.q.a(c)
a.drawImage(b,c.a,c.b,c.c,c.d)},
$ial:1}
A.K.prototype={
gt(a){return a.length}}
A.c_.prototype={
h(a){return String(a)}}
A.an.prototype={
h(a){var t,s,r,q=a.left
q.toString
t=a.top
t.toString
s=a.width
s.toString
r=a.height
r.toString
return"Rectangle ("+A.e(q)+", "+A.e(t)+") "+A.e(s)+" x "+A.e(r)},
D(a,b){var t,s
if(b==null)return!1
if(u.q.b(b)){t=a.left
t.toString
s=J.cD(b)
if(t===s.gM(b)){t=a.top
t.toString
if(t===s.gN(b)){t=a.width
t.toString
if(t===s.gO(b)){t=a.height
t.toString
s=t===s.gL(b)
t=s}else t=!1}else t=!1}else t=!1}else t=!1
return t},
gk(a){var t,s,r,q=a.left
q.toString
t=a.top
t.toString
s=a.width
s.toString
r=a.height
r.toString
return A.dk(q,t,s,r)},
ga4(a){var t=a.bottom
t.toString
return t},
gL(a){var t=a.height
t.toString
return t},
gM(a){var t=a.left
t.toString
return t},
gaa(a){var t=a.right
t.toString
return t},
gN(a){var t=a.top
t.toString
return t},
gO(a){var t=a.width
t.toString
return t},
$iP:1}
A.a.prototype={
h(a){return a.localName},
$ia:1}
A.b.prototype={$ib:1}
A.k.prototype={
az(a,b,c,d){return a.addEventListener(b,A.aX(u.o.a(c),1),d)},
$ik:1}
A.bd.prototype={
gt(a){return a.length}}
A.a6.prototype={
sag(a,b){a.src=b},
$ia6:1,
$ib2:1}
A.a8.prototype={}
A.M.prototype={
ga9(a){var t,s,r,q,p,o
if(!!a.offsetX)return new A.a9(a.offsetX,a.offsetY,u.p)
else{t=a.target
s=u.h
if(!s.b(A.dL(t)))throw A.d(A.Z("offsetX is only supported on elements"))
r=s.a(A.dL(t))
t=a.clientX
s=a.clientY
q=u.p
p=r.getBoundingClientRect()
o=p.left
o.toString
p=p.top
p.toString
q.a(new A.a9(o,p,q))
return new A.a9(B.d.ac(t-o),B.d.ac(s-p),q)}},
$iM:1}
A.x.prototype={
h(a){var t=a.nodeValue
return t==null?this.ah(a):t}}
A.bt.prototype={
gt(a){return a.length}}
A.H.prototype={}
A.bE.prototype={$ib2:1}
A.aE.prototype={$ick:1}
A.aF.prototype={
h(a){var t,s,r,q=a.left
q.toString
t=a.top
t.toString
s=a.width
s.toString
r=a.height
r.toString
return"Rectangle ("+A.e(q)+", "+A.e(t)+") "+A.e(s)+" x "+A.e(r)},
D(a,b){var t,s
if(b==null)return!1
if(u.q.b(b)){t=a.left
t.toString
s=J.cD(b)
if(t===s.gM(b)){t=a.top
t.toString
if(t===s.gN(b)){t=a.width
t.toString
if(t===s.gO(b)){t=a.height
t.toString
s=t===s.gL(b)
t=s}else t=!1}else t=!1}else t=!1}else t=!1
return t},
gk(a){var t,s,r,q=a.left
q.toString
t=a.top
t.toString
s=a.width
s.toString
r=a.height
r.toString
return A.dk(q,t,s,r)},
gL(a){var t=a.height
t.toString
return t},
gO(a){var t=a.width
t.toString
return t}}
A.bJ.prototype={$ik:1,$ick:1}
A.bM.prototype={
a8(a){if(a<=0||a>4294967296)throw A.d(A.eD("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0},
v(){return Math.random()},
$ieC:1}
A.a9.prototype={
h(a){return"Point("+A.e(this.a)+", "+A.e(this.b)+")"},
D(a,b){if(b==null)return!1
return b instanceof A.a9&&this.a===b.a&&this.b===b.b},
gk(a){return A.eH(B.d.gk(this.a),B.d.gk(this.b),0)}}
A.bO.prototype={
gaa(a){return this.$ti.c.a(this.a+this.c)},
ga4(a){return this.$ti.c.a(this.b+this.d)},
h(a){var t=this
return"Rectangle ("+A.e(t.a)+", "+A.e(t.b)+") "+A.e(t.c)+" x "+A.e(t.d)},
D(a,b){var t,s,r,q,p=this
if(b==null)return!1
if(u.q.b(b)){t=p.a
s=J.cD(b)
if(t===s.gM(b)){r=p.b
if(r===s.gN(b)){q=p.$ti.c
t=q.a(t+p.c)===s.gaa(b)&&q.a(r+p.d)===s.ga4(b)}else t=!1}else t=!1}else t=!1
return t},
gk(a){var t=this,s=t.a,r=t.b,q=t.$ti.c
return A.du(B.d.gk(s),B.d.gk(r),B.d.gk(q.a(s+t.c)),B.d.gk(q.a(r+t.d)),0)}}
A.P.prototype={
gM(a){return this.a},
gN(a){return this.b},
gO(a){return this.c},
gL(a){return this.d}}
A.bV.prototype={}
A.bW.prototype={
m(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h=this
u.r.a(b)
u.c.a(c)
t=h.b
s=t.b
r=h.c.b
q=Math.abs(s-r)
if(q<2){t.b=r
t=r}else{p=s<r?0:-1
t=t.b=s+p*(q<100?7*(1-(100-q)/100):7)}s=h.e
h.r=t-s+200
for(t=A.J(c),r=t.i("z(1)"),o=r.a(new A.bX()),n=t.i("t<1>"),m=new J.t(c,c.length,n),l=t.i("F<1>"),o=new A.F(m,o,l),t=t.c;o.l();){k=m.d
if(k==null)k=t.a(k)
if(k.V())k.m(a,0,h.r)}for(o=b.length,j=0;j<b.length;b.length===o||(0,A.r)(b),++j){i=b[j]
m=i.b
k=h.r
if(m>k-400&&m<k+s+400)i.m(a,0,k)}for(s=r.a(new A.bY()),n=new J.t(c,c.length,n),l=new A.F(n,s,l);l.l();){s=n.d
if(s==null)s=t.a(s)
if(s.V())s.m(a,0,h.r)}}}
A.bX.prototype={
$1(a){return u.W.a(a).d},
$S:5}
A.bY.prototype={
$1(a){return!u.W.a(a).d},
$S:5}
A.ca.prototype={}
A.b5.prototype={
p(a){},
m(a,b,c){var t,s,r,q,p=this
if(!p.y){t=p.c
s=t-B.b.E($.ch*2,t*4)
if(s<-t)s=-2*t-s
r=Math.abs(s)
if(r<3)r=3
q=A.ax(p.a-b+(t-r)/2,p.b-c,r,p.d,u.H)
if(s<0){t=$.f.A().n(0,"coin_mirrored")
if(t==null)t=u.R.a(t)}else{t=$.f.A().n(0,"coin")
if(t==null)t=u.R.a(t)}B.c.F(a,t,q)}},
H(a,b){var t,s=this
if(b!==B.e&&!s.y&&a instanceof A.O){++a.CW
t=a.Q
if(t!=null)t.u(s.a,s.b)
s.y=!0}}}
A.W.prototype={
aC(){return"Direction."+this.b}}
A.bZ.prototype={}
A.b9.prototype={
p(a){},
m(a,b,c){var t,s,r=this
if(!r.y){t=r.d
s=t-B.b.E($.ch*2,t*4)
if(s<-t)s=-2*t-s
t=$.f.A().n(0,"jump_item")
if(t==null)t=u.R.a(t)
a.drawImage(t,r.a-b-30,r.b+s/2-c-30)}},
H(a,b){var t
if(b!==B.e&&!this.y&&a instanceof A.O){this.y=!0
a.P(!0)
t=a.as
if(t!=null)t.u(a.a+a.c/2,a.b+a.d/2)}}}
A.p.prototype={
m(a,b,c){},
p(a){},
H(a,b){}}
A.c0.prototype={}
A.be.prototype={
W(a){var t,s,r,q=this,p=q.b
$.de=p.clientWidth/360
$.df=p.clientHeight/640
p=q.d
if(p!=null)p.aJ()
q.d=A.eJ(new A.bb(1000*B.d.ab(1000/q.a)),q.gaS())
q.at.CW=0
p=new A.O(B.h)
p.Y(150,300,50,50)
q.at=p
t=q.w
t===$&&A.m()
p.y=t
t=q.x
t===$&&A.m()
p.z=t
t=q.y
t===$&&A.m()
p.Q=t
t=q.Q
t===$&&A.m()
p.as=t
q.saL(A.l([],u.n))
B.a.a3(q.e,u.C.a(A.es(400,360)))
B.a.j(q.e,A.ap(100,400,100,20))
B.a.j(q.e,q.at)
q.f=new A.c0(1.5)
q.r=new A.bZ()
t=q.at
p=new A.ca(0)
p.b=t.b
q.ax=new A.bW(p,t,640)
t=q.z
t===$&&A.m()
t.c=t.b=0
p=t.a
s=p.length
if(0>=s)return A.n(p,0)
r=p[0]
r.a=0
if(0>=s)return A.n(p,0)
r.b=-1*t.r
if(1>=s)return A.n(p,1)
t=p[1]
t.a=0
if(1>=s)return A.n(p,1)
t.b=0},
p(a1){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=b.c,a0=b.ch
a0===$&&A.m()
B.c.sG(a,a0)
a.fillRect(0,0,180,640)
a0=b.CW
a0===$&&A.m()
B.c.sG(a,a0)
a.fillRect(180,0,180,640)
a0=b.cx
a0===$&&A.m()
B.c.sG(a,a0)
a.fillRect(0,0,360,640)
a0=$.ch
$.eI=a0
t=a1.c
$.ch=t
$.Q=t-a0
for(a0=b.as,t=a0.length,s=0;s<a0.length;a0.length===t||(0,A.r)(a0),++s)a0[s].p(b)
for(t=b.e,r=t.length,s=0;s<t.length;t.length===r||(0,A.r)(t),++s){q=t[s]
p=q.b
o=b.ax
o===$&&A.m()
o=o.r
if(p>o-400&&p<o+640+400)q.p(b)}for(t=b.e,r=t.length,p=u.v,s=0;s<r;++s){q=t[s]
o=b.f
if(o!=null){p.a(q)
if(q.w){o=q.f=q.f+q.x*o.a
q.b+=o>100?q.f=100:o}}q.a=q.a+q.e}for(t=b.e,r=t.length,o=u.j,s=0;s<t.length;t.length===r||(0,A.r)(t),++s){q=t[s]
for(n=b.e,m=n.length,l=0;l<n.length;n.length===m||(0,A.r)(n),++l){k=n[l]
q.toString
k.toString
j=!J.cK(q,k)
if(j){if(b.r==null)i=null
else{p.a(q)
p.a(k)
j=q.a
h=k.a
g=h+k.c
if(j<g)if(j+q.c>h){f=q.b
e=k.b
f=f<e+k.d&&f+q.d>e}else f=!1
else f=!1
if(f){f=q.b
e=k.b
if(f>=e&&f<=e+k.d){if(j<=h)d=j+q.c-h
else d=j+q.c>=g?j-g:1000
if(e+k.d-f<=Math.abs(d))i=B.j
else if(d>0)i=B.h
else i=d<0?B.i:B.e}else{f+=q.d
if(f>=e&&f<=e+k.d){if(j<=h)d=j+q.c-h
else d=j+q.c>=g?j-g:1000
if(f-e<=Math.abs(d))i=B.k
else if(d>0)i=B.h
else i=d<0?B.i:B.e}else if(j<h)i=B.h
else i=j+q.c>g?B.i:B.e}}else i=B.e}q.H(k,i==null?o.a(i):i)}}}t=b.ax
t===$&&A.m()
t.m(a,b.e,a0)
a0=$.f.A().n(0,"coin")
a.drawImage(a0==null?u.R.a(a0):a0,5,5)
c=b.at.CW
B.c.sG(a,"white")
a.font="36px sans-serif"
a.fillText(""+c,40,40)},
aK(){B.z.az(this.b,"mousedown",u.o.a(new A.c1(this)),null)},
saL(a){this.e=u.r.a(a)}}
A.c1.prototype={
$1(a){var t,s=this.a
a=u.V.a(u.D.a(a))
t=s.at
s=s.ax
s===$&&A.m()
t.aM(a,0,s.r)
return A.ew([null],u.B)},
$S:13}
A.a5.prototype={
X(a,b,c,d){var t,s,r=this
r.a=a
r.b=b
r.c=c
r.d=d
r.z=A.cd()
r.Q=A.cd()
t=a-9
s=b-5
r.z.u(t,s)
r.Q.u(t+c,s)},
p(a){var t=this.z
t===$&&A.m()
t.p(a)
t=this.Q
t===$&&A.m()
t.p(a)},
m(a,b,c){var t,s=this
B.c.sG(a,"white")
t=s.z
t===$&&A.m()
t.m(a,b,c)
t=s.Q
t===$&&A.m()
t.m(a,b,c)
t=$.f.A().n(0,"rock")
if(t==null)t=u.R.a(t)
a.drawImage(t,s.a-b,s.b-c)},
H(a,b){var t,s,r,q
switch(b){case B.e:break
case B.j:t=a.e
s=t>0?1:-1
r=a.f
if(r>1){t=Math.abs(t)>0?t-s:0
a.e=t
q=Math.abs(t)
a.e=q>0&&q<1?0:t}if(r>=0){a.b=this.b-a.d
a.f=0
if(a instanceof A.O){if(!a.at){t=a.y
if(t!=null)t.u(a.a,this.b)}this.y=a.at=!0}}break
case B.k:break
case B.i:break
case B.h:break}}}
A.bn.prototype={}
A.bF.prototype={
m(a,b,c){var t,s,r,q,p,o
for(t=this.a,s=t.length,r=u.R,q=0;q<t.length;t.length===s||(0,A.r)(t),++q){p=t[q]
o=$.f.b
if(o==$.f)A.C(A.N(""))
o=o.n(0,"waterfall")
if(o==null)o=r.a(o)
a.drawImage(o,p.a-b,p.b-c)}},
p(a){var t,s,r,q,p,o,n
if(a.d!=null){t=u.d
s=A.ez(new A.aC(this.a,t),!0,t.c)
for(t=s.length,r=u.R,q=0;q<t;++q){p=s[q]
o=p.b
n=a.ax
n===$&&A.m()
if(o>640+n.r){n=$.f.b
if(n==$.f)A.C(A.N(""))
n=n.n(0,"waterfall")
n=A.fa((n==null?r.a(n):n).height)
p.z=0
p.Q=!0
n=p.b=o-n*2
p.f=5
o=n}p.z=p.z+$.Q
p.a=p.a+p.e
p.b=o+p.f}}}}
A.bu.prototype={
aq(){var t,s,r,q,p
for(t=this.a,s=0;s<20;++s){r=this.b
q=this.c
p=new A.u()
p.a=r
p.b=q
p.d=p.c=5
B.a.j(t,p)}},
u(a,b){var t,s,r,q
this.b=a
this.c=b
for(t=this.a,s=t.length,r=0;r<s;++r){q=t[r]
q.z=0
q.f=2
q.y=50
q.Q=!1}},
m(a,b,c){var t,s,r,q,p,o,n,m,l
for(t=this.a,s=t.length,r=u.H,q=u.R,p=0;p<t.length;t.length===s||(0,A.r)(t),++p){o=t[p]
if(o.Q){n=o.z
m=o.y
l=A.ax(o.a-b,o.b-c,o.c,o.d,r)
a.globalAlpha=1-Math.abs(0.5-n/m)*2
n=$.f.b
if(n==$.f)A.C(A.N(""))
n=n.n(0,"bubbles")
B.c.F(a,n==null?q.a(n):n,l)}}a.globalAlpha=1},
p(a){var t,s,r,q,p,o,n,m=this
if(a.d!=null){if(++m.r>=3){m.r=0
t=m.a
s=A.J(t)
r=s.i("z(1)")
s=s.i("I<1>")
q=new A.I(t,r.a(new A.ce()),s)
if(!q.gaO(q)){p=new A.I(t,r.a(new A.cf()),s).a5(0,0)
p.z=0
p.Q=!0
p.b=m.c
t=m.e
p.a=m.b+t.v()*6-3
p.c=p.d=t.v()*5+15}o=!0}else o=!1
for(t=m.a,s=A.J(t),r=s.i("z(1)").a(new A.cg()),t=new J.t(t,t.length,s.i("t<1>")),r=new A.F(t,r,s.i("F<1>")),s=s.c;r.l();){q=t.d
if(q==null)q=s.a(q)
n=q.z+$.Q
q.z=n
q.b=q.b+q.f
if(o&&q.c>0){q.a+=0.5;--q.c;--q.d}if(n>q.y)q.Q=!1}}}}
A.ce.prototype={
$1(a){return!u.z.a(a).Q},
$S:0}
A.cf.prototype={
$1(a){return!u.z.a(a).Q},
$S:0}
A.cg.prototype={
$1(a){return u.z.a(a).Q},
$S:0}
A.bm.prototype={
ao(){var t,s,r,q,p
for(t=this.a,s=0;s<30;++s){r=this.b
q=this.c
p=new A.u()
p.a=r
p.b=q
p.d=p.c=5
B.a.j(t,p)}},
u(a,b){var t,s,r,q,p,o=this
o.b=a
o.c=b
for(t=o.a,s=t.length,r=o.e,q=0;q<t.length;t.length===s||(0,A.r)(t),++q){p=t[q]
p.e=p.z=0
p.f=2
p.a=a+r.v()*220
p.b=b+r.v()*50
p.y=30
p.Q=!0
p.as=r.v()}},
m(a,b,c){var t,s,r,q,p,o
for(t=this.a,s=t.length,r=u.R,q=0;q<t.length;t.length===s||(0,A.r)(t),++q){p=t[q]
if(p.Q){a.globalAlpha=1-p.z/p.y
if(p.e>0){o=$.f.b
if(o==$.f)A.C(A.N(""))
o=o.n(0,"leaf")
if(o==null)o=r.a(o)}else{o=$.f.b
if(o==$.f)A.C(A.N(""))
o=o.n(0,"leaf_mirrored")
if(o==null)o=r.a(o)}a.drawImage(o,p.a-b,p.b-c)}}a.globalAlpha=1},
p(a){var t,s,r,q,p,o,n
if(a.d!=null)for(t=this.a,s=t.length,r=0,q=0;q<t.length;t.length===s||(0,A.r)(t),++q){p=t[q]
o=p.z+$.Q
p.z=o
n=B.b.E(r,2)===0?-1:1
o=n*Math.sin(o*p.as)*2
p.e=o
p.a+=o
p.b=p.b+p.f
if(p.z>p.y)p.Q=!1;++r}}}
A.bk.prototype={
am(){var t,s,r,q,p
for(t=this.a,s=0;s<30;++s){r=this.b
q=this.c
p=new A.u()
p.a=r
p.b=q
p.d=p.c=5
B.a.j(t,p)}},
u(a,b){var t,s,r,q
this.b=a
this.c=b
for(t=this.a,s=t.length,r=0;r<s;++r){q=t[r]
q.f=q.e=q.z=0
q.y=10
q.Q=!1}},
m(a,b,c){var t,s,r,q
for(t=this.a,s=t.length,r=0;r<t.length;t.length===s||(0,A.r)(t),++r){q=t[r]
if(q.Q){B.c.sG(a,"rgba(255, 255, 255, "+A.e(1-q.z/q.y)+")")
a.fillRect(q.a-b,q.b-c,q.c,q.d)}}},
p(a){var t,s,r,q,p,o,n,m
if(a.d!=null){t=this.a
s=A.J(t)
r=s.i("z(1)")
q=s.i("I<1>")
p=new A.I(t,r.a(new A.c3()),q)
if(p.gt(p)>3)for(p=this.e,o=0;o<3;++o){n=new A.I(t,r.a(new A.c4()),q).a5(0,o)
n.Q=!0
n.a=a.at.a+p.v()*a.at.c
n.f=5*p.v()
m=a.at
n.b=m.b+m.d}for(r=r.a(new A.c5()),t=new J.t(t,t.length,s.i("t<1>")),r=new A.F(t,r,s.i("F<1>")),s=s.c;r.l();){q=t.d
if(q==null)q=s.a(q)
p=q.z+$.Q
q.z=p
q.b=q.b+q.f
if(p>q.y)q.Q=!1}}}}
A.c3.prototype={
$1(a){return!u.z.a(a).Q},
$S:0}
A.c4.prototype={
$1(a){return!u.z.a(a).Q},
$S:0}
A.c5.prototype={
$1(a){return u.z.a(a).Q},
$S:0}
A.bl.prototype={
an(){var t,s,r,q,p
for(t=this.a,s=0;s<10;++s){r=this.b
q=this.c
p=new A.u()
p.a=r
p.b=q
p.d=p.c=10
B.a.j(t,p)}},
u(a,b){var t,s,r,q,p,o,n=this
n.b=a
n.c=b
for(t=n.a,s=t.length,r=n.e,q=0;q<t.length;t.length===s||(0,A.r)(t),++q){p=t[q]
p.z=0
o=r.v()*3.141592653589793/4+1.5707963267948966
o=B.b.E(r.a8(10),2)===0?o:6.283185307179586-o
p.e=Math.sin(o)*10
p.f=Math.cos(o)*10
p.a=a+50*(1-o/4.71238898038469)
p.b=b
p.y=10
p.Q=!0}},
m(a,b,c){var t,s,r,q,p,o,n,m
for(t=this.a,s=t.length,r=u.H,q=u.R,p=0;p<t.length;t.length===s||(0,A.r)(t),++p){o=t[p]
if(o.Q){a.globalAlpha=1-o.z/o.y
n=A.ax(o.a-b,o.b-c,o.c,o.d,r)
m=$.f.b
if(m==$.f)A.C(A.N(""))
m=m.n(0,"bubbles")
B.c.F(a,m==null?q.a(m):m,n)}}a.globalAlpha=1},
p(a){var t,s,r,q,p,o,n
if(a.d!=null)for(t=this.a,s=t.length,r=$.Q,q=0;q<s;++q){p=t[q]
if(p.Q){p.a=p.a+p.e
o=p.b
n=p.f
p.b=o+n
o=p.z+=r
p.f=n+1
if(o>p.y)p.Q=!1}}}}
A.ba.prototype={
al(){var t,s,r,q,p,o=this
o.d=!0
for(t=o.a,s=0;s<15;++s){r=o.b
q=o.c
p=new A.u()
p.a=r
p.b=q
p.d=p.c=100
B.a.j(t,p)}},
u(a,b){var t,s,r,q,p,o=this
o.b=a
o.c=b
for(t=o.a,s=t.length,r=o.e,q=0;q<t.length;t.length===s||(0,A.r)(t),++q){p=t[q]
p.z=0
p.y=7
p.as=r.v()*3.141592653589793*2
p.Q=!0}},
m(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f="double_jump_particle",e=this.a
if(1>=e.length)return A.n(e,1)
t=e[1]
s=t.z/t.y
a.globalAlpha=s*0.8
t=e.length
if(1>=t)return A.n(e,1)
r=e[1]
q=r.z>r.y?1:(1-s)/3
p=r.c*q
o=r.d*q
for(r=p/2,n=o/2,m=u.H,l=u.R,k=0,j=0;j<e.length;e.length===t||(0,A.r)(e),++j){i=e[j]
if(i.Q&&i.z<i.y&&k>0){h=A.ax(i.a-b-r,i.b-c-n,p,o,m)
g=$.f.b
if(g==$.f)A.C(A.N(""))
g=g.n(0,f)
B.c.F(a,g==null?l.a(g):g,h)}++k}t=s*2
a.globalAlpha=t>1?1:t
if(0>=e.length)return A.n(e,0)
if(e[0].Q){t=$.f.A().n(0,f)
if(t==null)t=l.a(t)
if(0>=e.length)return A.n(e,0)
e=e[0]
a.drawImage(t,e.a-b-e.c/2,e.b-c-e.d/2)}a.globalAlpha=1},
p(a){var t,s,r,q,p,o,n,m,l,k,j=this
if(a.d!=null){t=a.at
j.b=t.a+t.c/2
j.c=t.b+t.d/2
t=j.a
s=t.length
if(1>=s)return A.n(t,1)
r=t[1]
q=100*(1-r.z/r.y)
for(p=0,o=0;o<t.length;t.length===s||(0,A.r)(t),++o){n=t[o]
if(n.Q){n.z=n.z+$.Q
r=j.b
if(p>0){m=Math.sin(n.as)
l=B.b.E(p,2)===0
k=l?1.5:1
n.a=r+m*q*k
k=j.c
m=Math.cos(n.as)
r=l?1.5:1
n.b=k+m*q*r
if(n.z>n.y)n.Q=!1}else{n.a=r
n.b=j.c}}++p}}}}
A.b6.prototype={
ak(){var t,s,r,q,p
for(t=this.a,s=0;s<10;++s){r=this.b
q=this.c
p=new A.u()
p.a=r
p.b=q
p.d=p.c=10
B.a.j(t,p)}},
u(a,b){var t,s,r,q,p,o,n=this
n.b=a
n.c=b
for(t=n.a,s=t.length,r=n.e,q=0;q<t.length;t.length===s||(0,A.r)(t),++q){p=t[q]
p.z=0
o=r.v()*3.141592653589793*2
p.e=Math.sin(o)*10
p.f=Math.cos(o)*10
p.a=a
p.b=b
p.y=10
p.Q=!0}},
m(a,b,c){var t,s,r,q,p,o
for(t=this.a,s=t.length,r=u.R,q=0;q<t.length;t.length===s||(0,A.r)(t),++q){p=t[q]
if(p.Q){a.globalAlpha=1-p.z/p.y
o=$.f.b
if(o==$.f)A.C(A.N(""))
o=o.n(0,"coin_particle")
if(o==null)o=r.a(o)
a.drawImage(o,p.a-b,p.b-c)}}a.globalAlpha=1},
p(a){var t,s,r,q,p,o,n
if(a.d!=null)for(t=this.a,s=t.length,r=$.Q,q=0;q<s;++q){p=t[q]
if(p.Q){p.a=p.a+p.e
o=p.b
n=p.f
p.b=o+n
o=p.z+=r
p.f=n+1
if(o>p.y)p.Q=!1}}}}
A.v.prototype={
m(a,b,c){},
p(a){},
V(){return B.a.aH(this.a,new A.c8())}}
A.c8.prototype={
$1(a){return u.z.a(a).Q},
$S:0}
A.u.prototype={
ap(a,b,c,d){var t=this
t.a=a
t.b=b
t.c=c
t.d=d}}
A.aB.prototype={}
A.O.prototype={
Y(a,b,c,d){var t=this
t.a=a
t.b=b
t.c=c
t.d=d
t.r=t.w=!0
t.x=1},
p(a){var t=this,s=a.e,r=A.J(s)
r=new A.I(s,r.i("z(1)").a(new A.c9(t)),r.i("I<1>"))
r.gt(r)
s=t.b
r=a.ax
r===$&&A.m()
if(s-r.r>640)a.W(0)
s=t.a
r=t.c
if(s+r>360){t.e*=-1
t.a=360-r-1}else if(s<0){t.e*=-1
t.a=1}if(t.at){t.P(!1)
t.ay=t.ay+$.Q
if(Math.abs(t.f)>5){t.at=!1
t.ay=0}}},
m(a,b,c){var t,s,r=this,q=r.f,p=r.d,o=q>0?p:p+-q
q=r.ay
if(q<5&&r.at)o-=(2.5-Math.abs(2.5-q))*8
else if(r.at)o-=(25-Math.abs(25-B.b.E(q,50)))*0.25
q=r.c
t=q*(p/o)
s=A.ax(r.a+(q-t)/2-b,r.b+(p-o)-c,t,o,u.H)
if(r.ch===B.i){q=$.f.A().n(0,"player_left")
if(q==null)q=u.R.a(q)}else{q=$.f.A().n(0,"player_right")
if(q==null)q=u.R.a(q)}B.c.F(a,q,s)},
H(a,b){switch(b){case B.e:break
case B.j:break
case B.k:break
case B.i:break
case B.h:break}},
aM(a,b,c){var t,s,r,q,p,o,n,m,l=this
if(!l.at&&!l.ax)return
t=J.cD(a)
s=t.ga9(a)
r=$.de
t=t.ga9(a)
q=$.df
p=l.a
o=l.c
n=Math.atan2(l.b+l.d/2-(t.b/q+c),p+o/2-(s.a/r+b))-1.5707963267948966
m=Math.sin(n)
r=Math.pow(m,2)
l.e=r*(m<0?-1:1)*20
t=Math.cos(n)*-40
l.f=t
if(t<-30)l.f=-30
t=l.b-=20
s=l.z
if(s!=null)s.u(l.a,t)
l.ch=l.e<0?B.i:B.h
l.P(!1)},
aP(a){if(a instanceof A.a5)return a.y
return!1},
P(a){var t
if(!a){t=this.as
if(t!=null){t=t.a
if(0>=t.length)return A.n(t,0)
t[0].Q=!1}}this.ax=a}}
A.c9.prototype={
$1(a){return this.a.aP(u.v.a(a))},
$S:14}
A.bz.prototype={
p(a){var t=this.y
if(t>0)this.y=t-$.Q
t=this.Q
t===$&&A.m()
t.p(a)},
m(a,b,c){var t=this,s=t.a,r=s<100?0:1,q=82-30*(1-Math.abs(1-t.y/5*2)),p=A.ax(s-b-20*r,t.b-c-30+(82-q)/2,220,q,u.H)
if(r===0){s=$.f.A().n(0,"branch_mirrored")
if(s==null)s=u.R.a(s)}else{s=$.f.A().n(0,"branch")
if(s==null)s=u.R.a(s)}B.c.F(a,s,p)
s=t.Q
s===$&&A.m()
s.m(a,b,c)},
H(a,b){var t,s,r,q,p=this,o=a instanceof A.O
if(o)if(b!==B.e)if(b!==B.j){t=p.Q
t===$&&A.m()
t=!t.V()}else t=!1
else t=!1
else t=!1
if(t){t=p.Q
t===$&&A.m()
t.u(p.a,p.b)
p.y=5}switch(b){case B.e:break
case B.j:t=a.e
s=t>0?1:-1
r=a.f
if(r>1){t=Math.abs(t)>0?t-s:0
a.e=t
q=Math.abs(t)
a.e=q>0&&q<1?0:t}if(r>=0){a.b=p.b-a.d
a.f=0
if(o){if(!a.at){o=p.Q
o===$&&A.m()
o.u(p.a,p.b)
p.y=5}a.at=!0}}break
case B.k:a.f=0
a.b=p.b+p.d
break
case B.i:a.e*=-1
a.a=p.a-a.c
break
case B.h:a.e*=-1
a.a=p.a+p.c
break}}};(function aliases(){var t=J.aq.prototype
t.ah=t.h
t=J.a7.prototype
t.ai=t.h})();(function installTearOffs(){var t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers._instance_1u,q=hunkHelpers._static_2
t(A,"fG","eL",3)
t(A,"fH","eM",3)
t(A,"fI","eN",3)
s(A,"dT","fA",2)
r(A.be.prototype,"gaS","p",12)
q(A,"fX","et",4)
q(A,"fY","eu",4)
q(A,"fZ","ev",4)})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(A.j,null)
r(A.j,[A.cN,J.aq,J.t,A.h,A.cc,A.q,A.D,A.aD,A.ci,A.c7,A.aM,A.a3,A.cp,A.E,A.bL,A.bP,A.aN,A.bI,A.cz,A.av,A.aI,A.aS,A.bN,A.aK,A.ay,A.bb,A.cq,A.bp,A.az,A.cr,A.G,A.bw,A.bJ,A.bM,A.a9,A.bO,A.bV,A.bW,A.ca,A.p,A.bZ,A.c0,A.be,A.bn,A.v])
r(J.aq,[J.bg,J.bh,J.L,J.o,J.as,J.ad])
r(J.L,[J.a7,A.k,A.b1,A.al,A.c_,A.an,A.b])
r(J.a7,[J.bq,J.af,J.X])
s(J.c2,J.o)
r(J.as,[J.ar,J.bi])
r(A.h,[A.at,A.bA,A.bj,A.bC,A.bs,A.ak,A.bK,A.bo,A.a1,A.bD,A.bB,A.b7,A.b8])
r(A.q,[A.ao,A.I,A.aC])
s(A.F,A.D)
s(A.aw,A.bA)
r(A.a3,[A.b3,A.b4,A.bx,A.cE,A.cG,A.cm,A.cl,A.cu,A.bX,A.bY,A.c1,A.ce,A.cf,A.cg,A.c3,A.c4,A.c5,A.c8,A.c9])
r(A.bx,[A.bv,A.ac])
s(A.bH,A.ak)
r(A.b4,[A.cF,A.c6])
s(A.aO,A.bK)
r(A.b3,[A.cn,A.co,A.cw,A.cv,A.cB])
s(A.ct,A.cz)
s(A.au,A.av)
s(A.aG,A.au)
s(A.aH,A.ao)
s(A.aL,A.aS)
s(A.aJ,A.aL)
r(A.a1,[A.ae,A.bf])
r(A.k,[A.x,A.aE])
r(A.x,[A.a,A.K])
s(A.c,A.a)
r(A.c,[A.aZ,A.b_,A.a2,A.bd,A.a6,A.a8,A.bt])
s(A.H,A.b)
s(A.M,A.H)
s(A.bE,A.a8)
s(A.aF,A.an)
s(A.P,A.bO)
r(A.p,[A.b5,A.b9,A.a5,A.u,A.O,A.bz])
s(A.W,A.cq)
r(A.v,[A.bF,A.bu,A.bm,A.bk,A.bl,A.ba,A.b6])
s(A.aB,A.u)
t(A.aS,A.ay)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{d3:"int",T:"double",V:"num",aa:"String",z:"bool",G:"Null",Y:"List"},mangledNames:{},types:["z(u)","G()","~()","~(~())","Y<p>(T,T)","z(v)","@(@)","@(@,aa)","@(aa)","G(@)","G(~())","~(j?,j?)","@(by)","dq<@>(b)","z(p)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.f6(v.typeUniverse,JSON.parse('{"bq":"a7","af":"a7","X":"a7","h8":"b","hf":"b","hm":"a","ha":"c","hg":"x","he":"x","hn":"M","hc":"H","hb":"K","hp":"K","h9":"a8","bg":{"z":[]},"o":{"Y":["1"],"q":["1"]},"c2":{"o":["1"],"Y":["1"],"q":["1"]},"t":{"D":["1"]},"as":{"T":[],"V":[]},"ar":{"T":[],"d3":[],"V":[]},"bi":{"T":[],"V":[]},"ad":{"aa":[]},"at":{"h":[]},"ao":{"q":["1"]},"I":{"q":["1"]},"F":{"D":["1"]},"aC":{"q":["1"]},"aD":{"D":["1"]},"aw":{"h":[]},"bj":{"h":[]},"bC":{"h":[]},"aM":{"dr":[]},"a3":{"a4":[]},"b3":{"a4":[]},"b4":{"a4":[]},"bx":{"a4":[]},"bv":{"a4":[]},"ac":{"a4":[]},"bs":{"h":[]},"bH":{"h":[]},"bK":{"h":[]},"aO":{"h":[]},"aN":{"by":[]},"aG":{"av":["1","2"]},"aH":{"q":["1"]},"aI":{"D":["1"]},"aJ":{"ay":["1"],"dj":["1"],"q":["1"]},"aK":{"D":["1"]},"au":{"av":["1","2"]},"aL":{"ay":["1"],"q":["1"]},"T":{"V":[]},"Y":{"q":["1"]},"dq":{"q":["1"]},"ak":{"h":[]},"bA":{"h":[]},"bo":{"h":[]},"a1":{"h":[]},"ae":{"h":[]},"bf":{"h":[]},"bD":{"h":[]},"bB":{"h":[]},"b7":{"h":[]},"bp":{"h":[]},"az":{"h":[]},"b8":{"h":[]},"a6":{"a":[],"k":[],"b2":[]},"c":{"a":[],"k":[]},"aZ":{"a":[],"k":[]},"b_":{"a":[],"k":[]},"a2":{"a":[],"k":[],"b2":[]},"K":{"k":[]},"an":{"P":["V"]},"a":{"k":[]},"bd":{"a":[],"k":[]},"a8":{"a":[],"k":[]},"M":{"b":[]},"x":{"k":[]},"bt":{"a":[],"k":[]},"H":{"b":[]},"bE":{"a":[],"k":[],"b2":[]},"aE":{"ck":[],"k":[]},"aF":{"P":["V"]},"bJ":{"ck":[],"k":[]},"bM":{"eC":[]},"P":{"bO":["1"]},"b5":{"p":[]},"b9":{"p":[]},"a5":{"p":[]},"u":{"p":[]},"aB":{"u":[],"p":[]},"bF":{"v":[]},"bu":{"v":[]},"bm":{"v":[]},"bk":{"v":[]},"bl":{"v":[]},"ba":{"v":[]},"b6":{"v":[]},"O":{"p":[]},"bz":{"p":[]}}'))
A.f5(v.typeUniverse,JSON.parse('{"ao":1,"au":2,"aL":1,"aS":1}'))
var u=(function rtii(){var t=A.d0
return{E:t("a2"),j:t("W"),h:t("a"),v:t("p"),Q:t("h"),D:t("b"),Z:t("a4"),R:t("a6"),C:t("q<p>"),U:t("q<@>"),n:t("o<p>"),I:t("o<u>"),a:t("o<v>"),s:t("o<aa>"),b:t("o<@>"),T:t("bh"),g:t("X"),r:t("Y<p>"),c:t("Y<v>"),V:t("M"),P:t("G"),K:t("j"),z:t("u"),W:t("v"),p:t("a9<V>"),L:t("ho"),q:t("P<V>"),l:t("dr"),N:t("aa"),G:t("by"),J:t("af"),d:t("aC<aB>"),y:t("ck"),w:t("z"),i:t("T"),B:t("@"),S:t("d3"),A:t("0&*"),_:t("j*"),O:t("k?"),Y:t("dd<G>?"),X:t("j?"),e:t("bN?"),o:t("@(b)?"),H:t("V"),t:t("~"),M:t("~()"),F:t("~(by)")}})();(function constants(){B.z=A.a2.prototype
B.c=A.al.prototype
B.A=A.a6.prototype
B.B=J.aq.prototype
B.a=J.o.prototype
B.b=J.ar.prototype
B.d=J.as.prototype
B.p=J.ad.prototype
B.C=J.X.prototype
B.D=J.L.prototype
B.q=J.bq.prototype
B.m=J.af.prototype
B.n=function getTagFallback(o) {
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
B.o=function(hooks) { return hooks; }

B.y=new A.bp()
B.F=new A.cc()
B.f=new A.bM()
B.l=new A.ct()
B.e=new A.W("none")
B.j=new A.W("up")
B.k=new A.W("down")
B.i=new A.W("left")
B.h=new A.W("right")
B.E=A.h6("j")})();(function staticFields(){$.cs=null
$.dl=null
$.da=null
$.d9=null
$.dW=null
$.dS=null
$.e_=null
$.cC=null
$.cH=null
$.d2=null
$.ah=null
$.aU=null
$.aV=null
$.cY=!1
$.bG=B.l
$.B=A.l([],A.d0("o<j>"))
$.f=A.eO()
$.de=1
$.df=1
$.eI=0
$.ch=0
$.Q=0})();(function lazyInitializers(){var t=hunkHelpers.lazyFinal,s=hunkHelpers.lazy
t($,"hd","e1",()=>A.fP("_$dart_dartClosure"))
t($,"hq","e4",()=>A.R(A.cj({
toString:function(){return"$receiver$"}})))
t($,"hr","e5",()=>A.R(A.cj({$method$:null,
toString:function(){return"$receiver$"}})))
t($,"hs","e6",()=>A.R(A.cj(null)))
t($,"ht","e7",()=>A.R(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
t($,"hw","ea",()=>A.R(A.cj(void 0)))
t($,"hx","eb",()=>A.R(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
t($,"hv","e9",()=>A.R(A.dx(null)))
t($,"hu","e8",()=>A.R(function(){try{null.$method$}catch(r){return r.message}}()))
t($,"hz","ed",()=>A.R(A.dx(void 0)))
t($,"hy","ec",()=>A.R(function(){try{(void 0).$method$}catch(r){return r.message}}()))
t($,"hA","d6",()=>A.eK())
t($,"hL","ee",()=>A.dY(B.E))
s($,"hj","d5",()=>A.cQ())
s($,"hi","cJ",()=>A.l([A.cP(A.fX(),1250),A.cP(A.fZ(),1000),A.cP(A.fY(),2000)],A.d0("o<bn>")))
s($,"hk","e2",()=>A.cQ())
s($,"hl","e3",()=>A.cQ())})();(function nativeSupport(){!function(){var t=function(a){var n={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.L,MediaError:J.L,NavigatorUserMediaError:J.L,OverconstrainedError:J.L,PositionError:J.L,GeolocationPositionError:J.L,HTMLBRElement:A.c,HTMLBaseElement:A.c,HTMLBodyElement:A.c,HTMLButtonElement:A.c,HTMLContentElement:A.c,HTMLDListElement:A.c,HTMLDataElement:A.c,HTMLDataListElement:A.c,HTMLDetailsElement:A.c,HTMLDialogElement:A.c,HTMLDivElement:A.c,HTMLEmbedElement:A.c,HTMLFieldSetElement:A.c,HTMLHRElement:A.c,HTMLHeadElement:A.c,HTMLHeadingElement:A.c,HTMLHtmlElement:A.c,HTMLIFrameElement:A.c,HTMLInputElement:A.c,HTMLLIElement:A.c,HTMLLabelElement:A.c,HTMLLegendElement:A.c,HTMLLinkElement:A.c,HTMLMapElement:A.c,HTMLMenuElement:A.c,HTMLMetaElement:A.c,HTMLMeterElement:A.c,HTMLModElement:A.c,HTMLOListElement:A.c,HTMLObjectElement:A.c,HTMLOptGroupElement:A.c,HTMLOptionElement:A.c,HTMLOutputElement:A.c,HTMLParagraphElement:A.c,HTMLParamElement:A.c,HTMLPictureElement:A.c,HTMLPreElement:A.c,HTMLProgressElement:A.c,HTMLQuoteElement:A.c,HTMLScriptElement:A.c,HTMLShadowElement:A.c,HTMLSlotElement:A.c,HTMLSourceElement:A.c,HTMLSpanElement:A.c,HTMLStyleElement:A.c,HTMLTableCaptionElement:A.c,HTMLTableCellElement:A.c,HTMLTableDataCellElement:A.c,HTMLTableHeaderCellElement:A.c,HTMLTableColElement:A.c,HTMLTableElement:A.c,HTMLTableRowElement:A.c,HTMLTableSectionElement:A.c,HTMLTemplateElement:A.c,HTMLTextAreaElement:A.c,HTMLTimeElement:A.c,HTMLTitleElement:A.c,HTMLTrackElement:A.c,HTMLUListElement:A.c,HTMLUnknownElement:A.c,HTMLDirectoryElement:A.c,HTMLFontElement:A.c,HTMLFrameElement:A.c,HTMLFrameSetElement:A.c,HTMLMarqueeElement:A.c,HTMLElement:A.c,HTMLAnchorElement:A.aZ,HTMLAreaElement:A.b_,HTMLCanvasElement:A.a2,CanvasGradient:A.b1,CanvasRenderingContext2D:A.al,CDATASection:A.K,CharacterData:A.K,Comment:A.K,ProcessingInstruction:A.K,Text:A.K,DOMException:A.c_,DOMRectReadOnly:A.an,MathMLElement:A.a,SVGAElement:A.a,SVGAnimateElement:A.a,SVGAnimateMotionElement:A.a,SVGAnimateTransformElement:A.a,SVGAnimationElement:A.a,SVGCircleElement:A.a,SVGClipPathElement:A.a,SVGDefsElement:A.a,SVGDescElement:A.a,SVGDiscardElement:A.a,SVGEllipseElement:A.a,SVGFEBlendElement:A.a,SVGFEColorMatrixElement:A.a,SVGFEComponentTransferElement:A.a,SVGFECompositeElement:A.a,SVGFEConvolveMatrixElement:A.a,SVGFEDiffuseLightingElement:A.a,SVGFEDisplacementMapElement:A.a,SVGFEDistantLightElement:A.a,SVGFEFloodElement:A.a,SVGFEFuncAElement:A.a,SVGFEFuncBElement:A.a,SVGFEFuncGElement:A.a,SVGFEFuncRElement:A.a,SVGFEGaussianBlurElement:A.a,SVGFEImageElement:A.a,SVGFEMergeElement:A.a,SVGFEMergeNodeElement:A.a,SVGFEMorphologyElement:A.a,SVGFEOffsetElement:A.a,SVGFEPointLightElement:A.a,SVGFESpecularLightingElement:A.a,SVGFESpotLightElement:A.a,SVGFETileElement:A.a,SVGFETurbulenceElement:A.a,SVGFilterElement:A.a,SVGForeignObjectElement:A.a,SVGGElement:A.a,SVGGeometryElement:A.a,SVGGraphicsElement:A.a,SVGImageElement:A.a,SVGLineElement:A.a,SVGLinearGradientElement:A.a,SVGMarkerElement:A.a,SVGMaskElement:A.a,SVGMetadataElement:A.a,SVGPathElement:A.a,SVGPatternElement:A.a,SVGPolygonElement:A.a,SVGPolylineElement:A.a,SVGRadialGradientElement:A.a,SVGRectElement:A.a,SVGScriptElement:A.a,SVGSetElement:A.a,SVGStopElement:A.a,SVGStyleElement:A.a,SVGElement:A.a,SVGSVGElement:A.a,SVGSwitchElement:A.a,SVGSymbolElement:A.a,SVGTSpanElement:A.a,SVGTextContentElement:A.a,SVGTextElement:A.a,SVGTextPathElement:A.a,SVGTextPositioningElement:A.a,SVGTitleElement:A.a,SVGUseElement:A.a,SVGViewElement:A.a,SVGGradientElement:A.a,SVGComponentTransferFunctionElement:A.a,SVGFEDropShadowElement:A.a,SVGMPathElement:A.a,Element:A.a,AbortPaymentEvent:A.b,AnimationEvent:A.b,AnimationPlaybackEvent:A.b,ApplicationCacheErrorEvent:A.b,BackgroundFetchClickEvent:A.b,BackgroundFetchEvent:A.b,BackgroundFetchFailEvent:A.b,BackgroundFetchedEvent:A.b,BeforeInstallPromptEvent:A.b,BeforeUnloadEvent:A.b,BlobEvent:A.b,CanMakePaymentEvent:A.b,ClipboardEvent:A.b,CloseEvent:A.b,CustomEvent:A.b,DeviceMotionEvent:A.b,DeviceOrientationEvent:A.b,ErrorEvent:A.b,ExtendableEvent:A.b,ExtendableMessageEvent:A.b,FetchEvent:A.b,FontFaceSetLoadEvent:A.b,ForeignFetchEvent:A.b,GamepadEvent:A.b,HashChangeEvent:A.b,InstallEvent:A.b,MediaEncryptedEvent:A.b,MediaKeyMessageEvent:A.b,MediaQueryListEvent:A.b,MediaStreamEvent:A.b,MediaStreamTrackEvent:A.b,MessageEvent:A.b,MIDIConnectionEvent:A.b,MIDIMessageEvent:A.b,MutationEvent:A.b,NotificationEvent:A.b,PageTransitionEvent:A.b,PaymentRequestEvent:A.b,PaymentRequestUpdateEvent:A.b,PopStateEvent:A.b,PresentationConnectionAvailableEvent:A.b,PresentationConnectionCloseEvent:A.b,ProgressEvent:A.b,PromiseRejectionEvent:A.b,PushEvent:A.b,RTCDataChannelEvent:A.b,RTCDTMFToneChangeEvent:A.b,RTCPeerConnectionIceEvent:A.b,RTCTrackEvent:A.b,SecurityPolicyViolationEvent:A.b,SensorErrorEvent:A.b,SpeechRecognitionError:A.b,SpeechRecognitionEvent:A.b,SpeechSynthesisEvent:A.b,StorageEvent:A.b,SyncEvent:A.b,TrackEvent:A.b,TransitionEvent:A.b,WebKitTransitionEvent:A.b,VRDeviceEvent:A.b,VRDisplayEvent:A.b,VRSessionEvent:A.b,MojoInterfaceRequestEvent:A.b,ResourceProgressEvent:A.b,USBConnectionEvent:A.b,IDBVersionChangeEvent:A.b,AudioProcessingEvent:A.b,OfflineAudioCompletionEvent:A.b,WebGLContextEvent:A.b,Event:A.b,InputEvent:A.b,SubmitEvent:A.b,EventTarget:A.k,HTMLFormElement:A.bd,HTMLImageElement:A.a6,HTMLAudioElement:A.a8,HTMLMediaElement:A.a8,MouseEvent:A.M,DragEvent:A.M,PointerEvent:A.M,WheelEvent:A.M,Document:A.x,DocumentFragment:A.x,HTMLDocument:A.x,ShadowRoot:A.x,XMLDocument:A.x,Attr:A.x,DocumentType:A.x,Node:A.x,HTMLSelectElement:A.bt,CompositionEvent:A.H,FocusEvent:A.H,KeyboardEvent:A.H,TextEvent:A.H,TouchEvent:A.H,UIEvent:A.H,HTMLVideoElement:A.bE,Window:A.aE,DOMWindow:A.aE,ClientRect:A.aF,DOMRect:A.aF})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,GeolocationPositionError:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLCanvasElement:true,CanvasGradient:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,DOMException:true,DOMRectReadOnly:false,MathMLElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,EventTarget:false,HTMLFormElement:true,HTMLImageElement:true,HTMLAudioElement:true,HTMLMediaElement:false,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,HTMLSelectElement:true,CompositionEvent:true,FocusEvent:true,KeyboardEvent:true,TextEvent:true,TouchEvent:true,UIEvent:false,HTMLVideoElement:true,Window:true,DOMWindow:true,ClientRect:true,DOMRect:true})})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var t=A.h0
if(typeof dartMainRunner==="function")dartMainRunner(t,[])
else t([])})})()
//# sourceMappingURL=main.js.map
