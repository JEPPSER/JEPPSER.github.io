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
a[c]=function(){a[c]=function(){A.fw(b)}
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
if(a[b]!==t)A.fx(b)
a[b]=s}var r=a[b]
a[c]=function(){return r}
return r}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t)convertToFastObject(a[t])}var y=0
function instanceTearOffGetter(a,b){var t=null
return a?function(c){if(t===null)t=A.cE(b)
return new t(c,this)}:function(){if(t===null)t=A.cE(b)
return new t(this,null)}}function staticTearOffGetter(a){var t=null
return function(){if(t===null)t=A.cE(a).prototype
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
a(hunkHelpers,v,w,$)}var A={cv:function cv(){},
b6(a){return new A.ak("Field '"+a+"' has not been initialized.")},
aq(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
d6(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
ed(a,b,c){return A.d6(A.aq(A.aq(c,a),b))},
d7(a,b,c,d,e){return A.d6(A.aq(A.aq(A.aq(A.aq(e,a),b),c),d))},
dy(a,b,c){return a},
ak:function ak(a){this.a=a},
bW:function bW(){},
B:function B(a,b,c){this.a=a
this.b=b
this.$ti=c},
x:function x(a,b,c){this.a=a
this.b=b
this.$ti=c},
at:function at(a,b){this.a=a
this.$ti=b},
au:function au(a,b){this.a=a
this.$ti=b},
dF(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
e(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.bE(a)
return t},
ba(a){var t,s=$.cZ
if(s==null)s=$.cZ=Symbol("identityHashCode")
t=a[s]
if(t==null){t=Math.random()*0x3fffffff|0
a[s]=t}return t},
bV(a){return A.e8(a)},
e8(a){var t,s,r,q
if(a instanceof A.j)return A.p(A.bD(a),null)
t=J.ac(a)
if(t===B.B||t===B.D||u.G.b(a)){s=B.o(a)
if(s!=="Object"&&s!=="")return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&q!=="Object"&&q!=="")return q}}return A.p(A.bD(a),null)},
R(a,b){if(a==null)J.cM(a)
throw A.d(A.fg(a,b))},
fg(a,b){var t,s="index"
if(!A.ds(b))return new A.T(!0,b,s,null)
t=A.bz(J.cM(a))
if(b<0||b>=t)return A.cV(b,t,a,s)
return new A.an(null,null,!0,b,s,"Value not in range")},
d(a){var t,s
if(a==null)a=new A.b7()
t=new Error()
t.dartException=a
s=A.fy
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:s})
t.name=""}else t.toString=s
return t},
fy(){return J.bE(this.dartException)},
ad(a){throw A.d(a)},
M(a){throw A.d(A.ct(a))},
I(a){var t,s,r,q,p,o
a=A.fv(a.replace(String({}),"$receiver$"))
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=A.y([],u.s)
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new A.c1(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),s,r,q,p,o)},
c2(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
da(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
cw(a,b){var t=b==null,s=t?null:b.method
return new A.b3(a,s,t?null:b.receiver)},
fA(a){if(a==null)return new A.bR(a)
if(typeof a!=="object")return a
if("dartException" in a)return A.a3(a,a.dartException)
return A.f9(a)},
a3(a,b){if(u.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
f9(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((B.c.aj(s,16)&8191)===10)switch(r){case 438:return A.a3(a,A.cw(A.e(t)+" (Error "+r+")",f))
case 445:case 5007:q=A.e(t)
return A.a3(a,new A.am(q+" (Error "+r+")",f))}}if(a instanceof TypeError){p=$.dH()
o=$.dI()
n=$.dJ()
m=$.dK()
l=$.dN()
k=$.dO()
j=$.dM()
$.dL()
i=$.dQ()
h=$.dP()
g=p.t(t)
if(g!=null)return A.a3(a,A.cw(A.bA(t),g))
else{g=o.t(t)
if(g!=null){g.method="call"
return A.a3(a,A.cw(A.bA(t),g))}else{g=n.t(t)
if(g==null){g=m.t(t)
if(g==null){g=l.t(t)
if(g==null){g=k.t(t)
if(g==null){g=j.t(t)
if(g==null){g=m.t(t)
if(g==null){g=i.t(t)
if(g==null){g=h.t(t)
q=g!=null}else q=!0}else q=!0}else q=!0}else q=!0}else q=!0}else q=!0}else q=!0
if(q){A.bA(t)
return A.a3(a,new A.am(t,g==null?f:g.method))}}}return A.a3(a,new A.bj(typeof t=="string"?t:""))}if(a instanceof RangeError){if(typeof t=="string"&&t.indexOf("call stack")!==-1)return new A.ap()
t=function(b){try{return String(b)}catch(e){}return null}(a)
return A.a3(a,new A.T(!1,f,f,typeof t=="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t=="string"&&t==="too much recursion")return new A.ap()
return a},
fl(a){var t
if(a==null)return new A.aA(a)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new A.aA(a)},
dC(a){if(a==null||typeof a!="object")return J.cK(a)
else return A.ba(a)},
fh(a,b){var t,s=a.length
for(t=0;t<s;++t)b.k(0,a[t])
return b},
fq(a,b,c,d,e,f){u.Z.a(a)
switch(A.bz(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.d(new A.ca("Unsupported number of arguments for wrapped closure"))},
aK(a,b){var t
if(a==null)return null
t=a.$identity
if(!!t)return t
t=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.fq)
a.$identity=t
return t},
e0(a1){var t,s,r,q,p,o,n,m,l,k,j=a1.co,i=a1.iS,h=a1.iI,g=a1.nDA,f=a1.aI,e=a1.fs,d=a1.cs,c=e[0],b=d[0],a=j[c],a0=a1.fT
a0.toString
t=i?Object.create(new A.be().constructor.prototype):Object.create(new A.a4(null,null).constructor.prototype)
t.$initialize=t.constructor
if(i)s=function static_tear_off(){this.$initialize()}
else s=function tear_off(a2,a3){this.$initialize(a2,a3)}
t.constructor=s
s.prototype=t
t.$_name=c
t.$_target=a
r=!i
if(r)q=A.cS(c,a,h,g)
else{t.$static_name=c
q=a}t.$S=A.dX(a0,i,h)
t[b]=q
for(p=q,o=1;o<e.length;++o){n=e[o]
if(typeof n=="string"){m=j[n]
l=n
n=m}else l=""
k=d[o]
if(k!=null){if(r)n=A.cS(l,n,h,g)
t[k]=n}if(o===f)p=n}t.$C=p
t.$R=a1.rC
t.$D=a1.dV
return s},
dX(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.d("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.dV)}throw A.d("Error in functionType of tearoff")},
dY(a,b,c,d){var t=A.cR
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
cS(a,b,c,d){var t,s
if(c)return A.e_(a,b,d)
t=b.length
s=A.dY(t,d,a,b)
return s},
dZ(a,b,c,d){var t=A.cR,s=A.dW
switch(b?-1:a){case 0:throw A.d(new A.bb("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,t)
default:return function(e,f,g){return function(){var r=[g(this)]
Array.prototype.push.apply(r,arguments)
return e.apply(f(this),r)}}(d,s,t)}},
e_(a,b,c){var t,s
if($.cP==null)$.cP=A.cO("interceptor")
if($.cQ==null)$.cQ=A.cO("receiver")
t=b.length
s=A.dZ(t,c,a,b)
return s},
cE(a){return A.e0(a)},
dV(a,b){return A.cg(v.typeUniverse,A.bD(a.a),b)},
cR(a){return a.a},
dW(a){return a.b},
cO(a){var t,s,r,q=new A.a4("receiver","interceptor"),p=J.e4(Object.getOwnPropertyNames(q),u.X)
for(t=p.length,s=0;s<t;++s){r=p[s]
if(q[r]===a)return r}throw A.d(A.dU("Field name "+a+" not found."))},
dx(a){if(a==null)A.fa("boolean expression must not be null")
return a},
fa(a){throw A.d(new A.bo(a))},
fw(a){throw A.d(new A.aV(a))},
fk(a){return v.getIsolateTag(a)},
hb(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
fs(a){var t,s,r,q,p,o=A.bA($.dA.$1(a)),n=$.ck[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.cp[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=A.eJ($.dv.$2(a,o))
if(r!=null){n=$.ck[r]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.cp[r]
if(t!=null)return t
s=v.interceptorsByTag[r]
o=r}}if(s==null)return null
t=s.prototype
q=o[0]
if(q==="!"){n=A.cq(t)
$.ck[o]=n
Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}if(q==="~"){$.cp[o]=t
return t}if(q==="-"){p=A.cq(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return A.dD(a,t)
if(q==="*")throw A.d(A.db(o))
if(v.leafTags[o]===true){p=A.cq(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return A.dD(a,t)},
dD(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.cI(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
cq(a){return J.cI(a,!1,null,!!a.$ifK)},
fu(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return A.cq(t)
else return J.cI(t,c,null,null)},
fo(){if(!0===$.cG)return
$.cG=!0
A.fp()},
fp(){var t,s,r,q,p,o,n,m
$.ck=Object.create(null)
$.cp=Object.create(null)
A.fn()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.dE.$1(p)
if(o!=null){n=A.fu(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
fn(){var t,s,r,q,p,o,n=B.t()
n=A.ab(B.u,A.ab(B.v,A.ab(B.p,A.ab(B.p,A.ab(B.w,A.ab(B.x,A.ab(B.y(B.o),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.dA=new A.cm(q)
$.dv=new A.cn(p)
$.dE=new A.co(o)},
ab(a,b){return a(b)||b},
fv(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
c1:function c1(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
am:function am(a,b){this.a=a
this.b=b},
b3:function b3(a,b,c){this.a=a
this.b=b
this.c=c},
bj:function bj(a){this.a=a},
bR:function bR(a){this.a=a},
aA:function aA(a){this.a=a
this.b=null},
W:function W(){},
aS:function aS(){},
aT:function aT(){},
bf:function bf(){},
be:function be(){},
a4:function a4(a,b){this.a=a
this.b=b},
bb:function bb(a){this.a=a},
bo:function bo(a){this.a=a},
cm:function cm(a){this.a=a},
cn:function cn(a){this.a=a},
co:function co(a){this.a=a},
fx(a){return A.ad(new A.ak("Field '"+a+"' has been assigned during initialization."))},
m(){return A.ad(A.b6(""))},
bq(){var t=new A.c8()
return t.b=t},
c8:function c8(){this.b=null},
d1(a,b){var t=b.c
return t==null?b.c=A.cB(a,b.y,!0):t},
d0(a,b){var t=b.c
return t==null?b.c=A.aE(a,"cT",[b.y]):t},
d2(a){var t=a.x
if(t===6||t===7||t===8)return A.d2(a.y)
return t===12||t===13},
ec(a){return a.at},
dz(a){return A.by(v.typeUniverse,a,!1)},
Q(a,b,c,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.x
switch(d){case 5:case 1:case 2:case 3:case 4:return b
case 6:t=b.y
s=A.Q(a,t,c,a0)
if(s===t)return b
return A.dj(a,s,!0)
case 7:t=b.y
s=A.Q(a,t,c,a0)
if(s===t)return b
return A.cB(a,s,!0)
case 8:t=b.y
s=A.Q(a,t,c,a0)
if(s===t)return b
return A.di(a,s,!0)
case 9:r=b.z
q=A.aJ(a,r,c,a0)
if(q===r)return b
return A.aE(a,b.y,q)
case 10:p=b.y
o=A.Q(a,p,c,a0)
n=b.z
m=A.aJ(a,n,c,a0)
if(o===p&&m===n)return b
return A.cz(a,o,m)
case 12:l=b.y
k=A.Q(a,l,c,a0)
j=b.z
i=A.f6(a,j,c,a0)
if(k===l&&i===j)return b
return A.dh(a,k,i)
case 13:h=b.z
a0+=h.length
g=A.aJ(a,h,c,a0)
p=b.y
o=A.Q(a,p,c,a0)
if(g===h&&o===p)return b
return A.cA(a,o,g,!0)
case 14:f=b.y
if(f<a0)return b
e=c[f-a0]
if(e==null)return b
return e
default:throw A.d(A.aO("Attempted to substitute unexpected RTI kind "+d))}},
aJ(a,b,c,d){var t,s,r,q,p=b.length,o=A.ch(p)
for(t=!1,s=0;s<p;++s){r=b[s]
q=A.Q(a,r,c,d)
if(q!==r)t=!0
o[s]=q}return t?o:b},
f7(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=A.ch(n)
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=A.Q(a,p,c,d)
if(o!==p)t=!0
m.splice(s,3,r,q,o)}return t?m:b},
f6(a,b,c,d){var t,s=b.a,r=A.aJ(a,s,c,d),q=b.b,p=A.aJ(a,q,c,d),o=b.c,n=A.f7(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new A.bt()
t.a=r
t.b=p
t.c=n
return t},
y(a,b){a[v.arrayRti]=b
return a},
fe(a){var t,s=a.$S
if(s!=null){if(typeof s=="number")return A.fm(s)
t=a.$S()
return t}return null},
dB(a,b){var t
if(A.d2(b))if(a instanceof A.W){t=A.fe(a)
if(t!=null)return t}return A.bD(a)},
bD(a){var t
if(a instanceof A.j){t=a.$ti
return t!=null?t:A.cC(a)}if(Array.isArray(a))return A.G(a)
return A.cC(J.ac(a))},
G(a){var t=a[v.arrayRti],s=u.b
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
ha(a){var t=a.$ti
return t!=null?t:A.cC(a)},
cC(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return A.eR(a,t)},
eR(a,b){var t=a instanceof A.W?a.__proto__.__proto__.constructor:b,s=A.eE(v.typeUniverse,t.name)
b.$ccache=s
return s},
fm(a){var t,s=v.types,r=s[a]
if(typeof r=="string"){t=A.by(v.typeUniverse,r,!1)
s[a]=t
return t}return r},
ff(a){var t,s,r,q=a.w
if(q!=null)return q
t=a.at
s=t.replace(/\*/g,"")
if(s===t)return a.w=new A.bx(a)
r=A.by(v.typeUniverse,s,!0)
q=r.w
return a.w=q==null?r.w=new A.bx(r):q},
fz(a){return A.ff(A.by(v.typeUniverse,a,!1))},
eQ(a){var t,s,r,q,p=this
if(p===u.K)return A.a9(p,a,A.eV)
if(!A.L(p))if(!(p===u._))t=!1
else t=!0
else t=!0
if(t)return A.a9(p,a,A.eZ)
t=p.x
s=t===6?p.y:p
if(s===u.S)r=A.ds
else if(s===u.i||s===u.H)r=A.eU
else if(s===u.U)r=A.eX
else r=s===u.w?A.dq:null
if(r!=null)return A.a9(p,a,r)
if(s.x===9){q=s.y
if(s.z.every(A.fr)){p.r="$i"+q
if(q==="al")return A.a9(p,a,A.eT)
return A.a9(p,a,A.eY)}}else if(t===7)return A.a9(p,a,A.eO)
return A.a9(p,a,A.eM)},
a9(a,b,c){a.b=c
return a.b(b)},
eP(a){var t,s=this,r=A.eL
if(!A.L(s))if(!(s===u._))t=!1
else t=!0
else t=!0
if(t)r=A.eK
else if(s===u.K)r=A.eI
else{t=A.aL(s)
if(t)r=A.eN}s.a=r
return s.a(a)},
bB(a){var t,s=a.x
if(!A.L(a))if(!(a===u._))if(!(a===u.A))if(s!==7)if(!(s===6&&A.bB(a.y)))t=s===8&&A.bB(a.y)||a===u.P||a===u.T
else t=!0
else t=!0
else t=!0
else t=!0
else t=!0
return t},
eM(a){var t=this
if(a==null)return A.bB(t)
return A.h(v.typeUniverse,A.dB(a,t),null,t,null)},
eO(a){if(a==null)return!0
return this.y.b(a)},
eY(a){var t,s=this
if(a==null)return A.bB(s)
t=s.r
if(a instanceof A.j)return!!a[t]
return!!J.ac(a)[t]},
eT(a){var t,s=this
if(a==null)return A.bB(s)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
t=s.r
if(a instanceof A.j)return!!a[t]
return!!J.ac(a)[t]},
eL(a){var t,s=this
if(a==null){t=A.aL(s)
if(t)return a}else if(s.b(a))return a
A.dn(a,s)},
eN(a){var t=this
if(a==null)return a
else if(t.b(a))return a
A.dn(a,t)},
dn(a,b){throw A.d(A.et(A.dd(a,A.dB(a,b),A.p(b,null))))},
dd(a,b,c){var t=A.aX(a)
return t+": type '"+A.p(b==null?A.bD(a):b,null)+"' is not a subtype of type '"+c+"'"},
et(a){return new A.aC("TypeError: "+a)},
n(a,b){return new A.aC("TypeError: "+A.dd(a,null,b))},
eV(a){return a!=null},
eI(a){if(a!=null)return a
throw A.d(A.n(a,"Object"))},
eZ(a){return!0},
eK(a){return a},
dq(a){return!0===a||!1===a},
h_(a){if(!0===a)return!0
if(!1===a)return!1
throw A.d(A.n(a,"bool"))},
h1(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.n(a,"bool"))},
h0(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.n(a,"bool?"))},
eG(a){if(typeof a=="number")return a
throw A.d(A.n(a,"double"))},
h3(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.n(a,"double"))},
h2(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.n(a,"double?"))},
ds(a){return typeof a=="number"&&Math.floor(a)===a},
bz(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.d(A.n(a,"int"))},
h5(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.n(a,"int"))},
h4(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.n(a,"int?"))},
eU(a){return typeof a=="number"},
h6(a){if(typeof a=="number")return a
throw A.d(A.n(a,"num"))},
h7(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.n(a,"num"))},
eH(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.n(a,"num?"))},
eX(a){return typeof a=="string"},
bA(a){if(typeof a=="string")return a
throw A.d(A.n(a,"String"))},
h8(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.n(a,"String"))},
eJ(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.n(a,"String?"))},
du(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=s+A.p(a[r],b)
return t},
f1(a,b){var t,s,r,q,p,o,n=a.y,m=a.z
if(""===n)return"("+A.du(m,b)+")"
t=m.length
s=n.split(",")
r=s.length-t
for(q="(",p="",o=0;o<t;++o,p=", "){q+=p
if(r===0)q+="{"
q+=A.p(m[o],b)
if(r>=0)q+=" "+s[r];++r}return q+"})"},
dp(a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=", "
if(a5!=null){t=a5.length
if(a4==null){a4=A.y([],u.s)
s=null}else s=a4.length
r=a4.length
for(q=t;q>0;--q)B.a.k(a4,"T"+(r+q))
for(p=u.X,o=u._,n="<",m="",q=0;q<t;++q,m=a2){l=a4.length
k=l-1-q
if(!(k>=0))return A.R(a4,k)
n=B.q.a2(n+m,a4[k])
j=a5[q]
i=j.x
if(!(i===2||i===3||i===4||i===5||j===p))if(!(j===o))l=!1
else l=!0
else l=!0
if(!l)n+=" extends "+A.p(j,a4)}n+=">"}else{n=""
s=null}p=a3.y
h=a3.z
g=h.a
f=g.length
e=h.b
d=e.length
c=h.c
b=c.length
a=A.p(p,a4)
for(a0="",a1="",q=0;q<f;++q,a1=a2)a0+=a1+A.p(g[q],a4)
if(d>0){a0+=a1+"["
for(a1="",q=0;q<d;++q,a1=a2)a0+=a1+A.p(e[q],a4)
a0+="]"}if(b>0){a0+=a1+"{"
for(a1="",q=0;q<b;q+=3,a1=a2){a0+=a1
if(c[q+1])a0+="required "
a0+=A.p(c[q+2],a4)+" "+c[q]}a0+="}"}if(s!=null){a4.toString
a4.length=s}return n+"("+a0+") => "+a},
p(a,b){var t,s,r,q,p,o,n,m=a.x
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){t=A.p(a.y,b)
return t}if(m===7){s=a.y
t=A.p(s,b)
r=s.x
return(r===12||r===13?"("+t+")":t)+"?"}if(m===8)return"FutureOr<"+A.p(a.y,b)+">"
if(m===9){q=A.f8(a.y)
p=a.z
return p.length>0?q+("<"+A.du(p,b)+">"):q}if(m===11)return A.f1(a,b)
if(m===12)return A.dp(a,b,null)
if(m===13)return A.dp(a.y,b,a.z)
if(m===14){o=a.y
n=b.length
o=n-1-o
if(!(o>=0&&o<n))return A.R(b,o)
return b[o]}return"?"},
f8(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
eF(a,b){var t=a.tR[b]
for(;typeof t=="string";)t=a.tR[t]
return t},
eE(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return A.by(a,b,!1)
else if(typeof n=="number"){t=n
s=A.aF(a,5,"#")
r=A.ch(t)
for(q=0;q<t;++q)r[q]=s
p=A.aE(a,b,r)
o[b]=p
return p}else return n},
eC(a,b){return A.dk(a.tR,b)},
eB(a,b){return A.dk(a.eT,b)},
by(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=A.dg(A.de(a,null,b,c))
s.set(b,t)
return t},
cg(a,b,c){var t,s,r=b.Q
if(r==null)r=b.Q=new Map()
t=r.get(c)
if(t!=null)return t
s=A.dg(A.de(a,b,c,!0))
r.set(c,s)
return s},
eD(a,b,c){var t,s,r,q=b.as
if(q==null)q=b.as=new Map()
t=c.at
s=q.get(t)
if(s!=null)return s
r=A.cz(a,b,c.x===10?c.z:[c])
q.set(t,r)
return r},
J(a,b){b.a=A.eP
b.b=A.eQ
return b},
aF(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new A.w(null,null)
t.x=b
t.at=c
s=A.J(a,t)
a.eC.set(c,s)
return s},
dj(a,b,c){var t,s=b.at+"*",r=a.eC.get(s)
if(r!=null)return r
t=A.ey(a,b,s,c)
a.eC.set(s,t)
return t},
ey(a,b,c,d){var t,s,r
if(d){t=b.x
if(!A.L(b))s=b===u.P||b===u.T||t===7||t===6
else s=!0
if(s)return b}r=new A.w(null,null)
r.x=6
r.y=b
r.at=c
return A.J(a,r)},
cB(a,b,c){var t,s=b.at+"?",r=a.eC.get(s)
if(r!=null)return r
t=A.ex(a,b,s,c)
a.eC.set(s,t)
return t},
ex(a,b,c,d){var t,s,r,q
if(d){t=b.x
if(!A.L(b))if(!(b===u.P||b===u.T))if(t!==7)s=t===8&&A.aL(b.y)
else s=!0
else s=!0
else s=!0
if(s)return b
else if(t===1||b===u.A)return u.P
else if(t===6){r=b.y
if(r.x===8&&A.aL(r.y))return r
else return A.d1(a,b)}}q=new A.w(null,null)
q.x=7
q.y=b
q.at=c
return A.J(a,q)},
di(a,b,c){var t,s=b.at+"/",r=a.eC.get(s)
if(r!=null)return r
t=A.ev(a,b,s,c)
a.eC.set(s,t)
return t},
ev(a,b,c,d){var t,s,r
if(d){t=b.x
if(!A.L(b))if(!(b===u._))s=!1
else s=!0
else s=!0
if(s||b===u.K)return b
else if(t===1)return A.aE(a,"cT",[b])
else if(b===u.P||b===u.T)return u.Q}r=new A.w(null,null)
r.x=8
r.y=b
r.at=c
return A.J(a,r)},
ez(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new A.w(null,null)
t.x=14
t.y=b
t.at=r
s=A.J(a,t)
a.eC.set(r,s)
return s},
aD(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].at
return t},
eu(a){var t,s,r,q,p,o=a.length
for(t="",s="",r=0;r<o;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
t+=s+q+p+a[r+2].at}return t},
aE(a,b,c){var t,s,r,q=b
if(c.length>0)q+="<"+A.aD(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new A.w(null,null)
s.x=9
s.y=b
s.z=c
if(c.length>0)s.c=c[0]
s.at=q
r=A.J(a,s)
a.eC.set(q,r)
return r},
cz(a,b,c){var t,s,r,q,p,o
if(b.x===10){t=b.y
s=b.z.concat(c)}else{s=c
t=b}r=t.at+(";<"+A.aD(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new A.w(null,null)
p.x=10
p.y=t
p.z=s
p.at=r
o=A.J(a,p)
a.eC.set(r,o)
return o},
eA(a,b,c){var t,s,r="+"+(b+"("+A.aD(c)+")"),q=a.eC.get(r)
if(q!=null)return q
t=new A.w(null,null)
t.x=11
t.y=b
t.z=c
t.at=r
s=A.J(a,t)
a.eC.set(r,s)
return s},
dh(a,b,c){var t,s,r,q,p,o=b.at,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+A.aD(n)
if(k>0){t=m>0?",":""
h+=t+"["+A.aD(l)+"]"}if(i>0){t=m>0?",":""
h+=t+"{"+A.eu(j)+"}"}s=o+(h+")")
r=a.eC.get(s)
if(r!=null)return r
q=new A.w(null,null)
q.x=12
q.y=b
q.z=c
q.at=s
p=A.J(a,q)
a.eC.set(s,p)
return p},
cA(a,b,c,d){var t,s=b.at+("<"+A.aD(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=A.ew(a,b,c,s,d)
a.eC.set(s,t)
return t},
ew(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=A.ch(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.x===1){s[q]=p;++r}}if(r>0){o=A.Q(a,b,s,0)
n=A.aJ(a,c,s,0)
return A.cA(a,o,n,c!==n)}}m=new A.w(null,null)
m.x=13
m.y=b
m.z=c
m.at=d
return A.J(a,m)},
de(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
dg(a){var t,s,r,q,p,o,n,m,l,k=a.r,j=a.s
for(t=k.length,s=0;s<t;){r=k.charCodeAt(s)
if(r>=48&&r<=57)s=A.en(s+1,r,k,j)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124)s=A.df(a,s,k,j,!1)
else if(r===46)s=A.df(a,s,k,j,!0)
else{++s
switch(r){case 44:break
case 58:j.push(!1)
break
case 33:j.push(!0)
break
case 59:j.push(A.P(a.u,a.e,j.pop()))
break
case 94:j.push(A.ez(a.u,j.pop()))
break
case 35:j.push(A.aF(a.u,5,"#"))
break
case 64:j.push(A.aF(a.u,2,"@"))
break
case 126:j.push(A.aF(a.u,3,"~"))
break
case 60:j.push(a.p)
a.p=j.length
break
case 62:q=a.u
p=j.splice(a.p)
A.cy(a.u,a.e,p)
a.p=j.pop()
o=j.pop()
if(typeof o=="string")j.push(A.aE(q,o,p))
else{n=A.P(q,a.e,o)
switch(n.x){case 12:j.push(A.cA(q,n,p,a.n))
break
default:j.push(A.cz(q,n,p))
break}}break
case 38:A.eo(a,j)
break
case 42:q=a.u
j.push(A.dj(q,A.P(q,a.e,j.pop()),a.n))
break
case 63:q=a.u
j.push(A.cB(q,A.P(q,a.e,j.pop()),a.n))
break
case 47:q=a.u
j.push(A.di(q,A.P(q,a.e,j.pop()),a.n))
break
case 40:j.push(-3)
j.push(a.p)
a.p=j.length
break
case 41:A.em(a,j)
break
case 91:j.push(a.p)
a.p=j.length
break
case 93:p=j.splice(a.p)
A.cy(a.u,a.e,p)
a.p=j.pop()
j.push(p)
j.push(-1)
break
case 123:j.push(a.p)
a.p=j.length
break
case 125:p=j.splice(a.p)
A.eq(a.u,a.e,p)
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
return A.P(a.u,a.e,l)},
en(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
df(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36||s===124))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.x===10)p=p.y
o=A.eF(t,p.y)[q]
if(o==null)A.ad('No "'+q+'" in "'+A.ec(p)+'"')
d.push(A.cg(t,p,o))}else d.push(q)
return n},
em(a,b){var t,s,r,q,p,o=null,n=a.u,m=b.pop()
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
t=s}r=A.el(a,b)
m=b.pop()
switch(m){case-3:m=b.pop()
if(t==null)t=n.sEA
if(s==null)s=n.sEA
q=A.P(n,a.e,m)
p=new A.bt()
p.a=r
p.b=t
p.c=s
b.push(A.dh(n,q,p))
return
case-4:b.push(A.eA(n,b.pop(),r))
return
default:throw A.d(A.aO("Unexpected state under `()`: "+A.e(m)))}},
eo(a,b){var t=b.pop()
if(0===t){b.push(A.aF(a.u,1,"0&"))
return}if(1===t){b.push(A.aF(a.u,4,"1&"))
return}throw A.d(A.aO("Unexpected extended operation "+A.e(t)))},
el(a,b){var t=b.splice(a.p)
A.cy(a.u,a.e,t)
a.p=b.pop()
return t},
P(a,b,c){if(typeof c=="string")return A.aE(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.ep(a,b,c)}else return c},
cy(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=A.P(a,b,c[t])},
eq(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=A.P(a,b,c[t])},
ep(a,b,c){var t,s,r=b.x
if(r===10){if(c===0)return b.y
t=b.z
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.y
r=b.x}else if(c===0)return b
if(r!==9)throw A.d(A.aO("Indexed base must be an interface type"))
t=b.z
if(c<=t.length)return t[c-1]
throw A.d(A.aO("Bad index "+c+" for "+b.h(0)))},
h(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
if(b===d)return!0
if(!A.L(d))if(!(d===u._))t=!1
else t=!0
else t=!0
if(t)return!0
s=b.x
if(s===4)return!0
if(A.L(b))return!1
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
if(q===6){t=A.d1(a,d)
return A.h(a,b,c,t,e)}if(s===8){if(!A.h(a,b.y,c,d,e))return!1
return A.h(a,A.d0(a,b),c,d,e)}if(s===7){t=A.h(a,u.P,c,d,e)
return t&&A.h(a,b.y,c,d,e)}if(q===8){if(A.h(a,b,c,d.y,e))return!0
return A.h(a,b,c,A.d0(a,d),e)}if(q===7){t=A.h(a,b,c,u.P,e)
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
if(!A.h(a,l,c,k,e)||!A.h(a,k,e,l,c))return!1}return A.dr(a,b.y,c,d.y,e)}if(q===12){if(b===u.g)return!0
if(t)return!1
return A.dr(a,b,c,d,e)}if(s===9){if(q!==9)return!1
return A.eS(a,b,c,d,e)}t=s===11
if(t&&d===u.L)return!0
if(t&&q===11)return A.eW(a,b,c,d,e)
return!1},
dr(a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
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
eS(a,b,c,d,e){var t,s,r,q,p,o,n,m=b.y,l=d.y
for(;m!==l;){t=a.tR[m]
if(t==null)return!1
if(typeof t=="string"){m=t
continue}s=t[l]
if(s==null)return!1
r=s.length
q=r>0?new Array(r):v.typeUniverse.sEA
for(p=0;p<r;++p)q[p]=A.cg(a,b,s[p])
return A.dl(a,q,null,c,d.z,e)}o=b.z
n=d.z
return A.dl(a,o,null,c,n,e)},
dl(a,b,c,d,e,f){var t,s,r,q=b.length
for(t=0;t<q;++t){s=b[t]
r=e[t]
if(!A.h(a,s,d,r,f))return!1}return!0},
eW(a,b,c,d,e){var t,s=b.z,r=d.z,q=s.length
if(q!==r.length)return!1
if(b.y!==d.y)return!1
for(t=0;t<q;++t)if(!A.h(a,s[t],c,r[t],e))return!1
return!0},
aL(a){var t,s=a.x
if(!(a===u.P||a===u.T))if(!A.L(a))if(s!==7)if(!(s===6&&A.aL(a.y)))t=s===8&&A.aL(a.y)
else t=!0
else t=!0
else t=!0
else t=!0
return t},
fr(a){var t
if(!A.L(a))if(!(a===u._))t=!1
else t=!0
else t=!0
return t},
L(a){var t=a.x
return t===2||t===3||t===4||t===5||a===u.X},
dk(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
ch(a){return a>0?new Array(a):v.typeUniverse.sEA},
w:function w(a,b){var _=this
_.a=a
_.b=b
_.w=_.r=_.c=null
_.x=0
_.at=_.as=_.Q=_.z=_.y=null},
bt:function bt(){this.c=this.b=this.a=null},
bx:function bx(a){this.a=a},
bs:function bs(){},
aC:function aC(a){this.a=a},
eg(){var t,s,r={}
if(self.scheduleImmediate!=null)return A.fb()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
r.a=null
new self.MutationObserver(A.aK(new A.c5(r),1)).observe(t,{childList:true})
return new A.c4(r,t,s)}else if(self.setImmediate!=null)return A.fc()
return A.fd()},
eh(a){self.scheduleImmediate(A.aK(new A.c6(u.M.a(a)),0))},
ei(a){self.setImmediate(A.aK(new A.c7(u.M.a(a)),0))},
ej(a){u.M.a(a)
A.er(0,a)},
d9(a,b){var t=B.c.E(a.a,1000)
return A.es(t<0?0:t,b)},
er(a,b){var t=new A.aB(!0)
t.ac(a,b)
return t},
es(a,b){var t=new A.aB(!1)
t.ad(a,b)
return t},
f0(){var t,s
for(t=$.aa;t!=null;t=$.aa){$.aI=null
s=t.b
$.aa=s
if(s==null)$.aH=null
t.a.$0()}},
f5(){$.cD=!0
try{A.f0()}finally{$.aI=null
$.cD=!1
if($.aa!=null)$.cJ().$1(A.dw())}},
f4(a){var t,s,r,q,p,o=$.aa
if(o==null){t=new A.bp(a)
s=$.aH
if(s==null){$.aa=$.aH=t
if(!$.cD)$.cJ().$1(A.dw())}else $.aH=s.b=t
$.aI=$.aH
return}r=new A.bp(a)
q=$.aI
if(q==null){r.b=o
$.aa=$.aI=r}else{p=q.b
r.b=p
$.aI=q.b=r
if(p==null)$.aH=r}},
ef(a,b){var t=$.bn
if(t===B.j)return A.d9(a,u.F.a(b))
return A.d9(a,u.F.a(t.al(b,u.D)))},
f2(a,b){A.f4(new A.cj(a,b))},
f3(a,b,c,d,e,f,g){var t,s=$.bn
if(s===c)return d.$1(e)
$.bn=c
t=s
try{s=d.$1(e)
return s}finally{$.bn=t}},
c5:function c5(a){this.a=a},
c4:function c4(a,b,c){this.a=a
this.b=b
this.c=c},
c6:function c6(a){this.a=a},
c7:function c7(a){this.a=a},
aB:function aB(a){this.a=a
this.b=null
this.c=0},
cf:function cf(a,b){this.a=a
this.b=b},
ce:function ce(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bp:function bp(a){this.a=a
this.b=null},
ci:function ci(){},
cj:function cj(a,b){this.a=a
this.b=b},
cc:function cc(){},
cd:function cd(a,b,c){this.a=a
this.b=b
this.c=c},
e5(a,b){return b.i("cX<0>").a(A.fh(a,new A.ax(b.i("ax<0>"))))},
cx(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
e3(a,b,c){var t,s
if(A.dt(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=A.y([],u.s)
B.a.k($.K,a)
try{A.f_(a,t)}finally{if(0>=$.K.length)return A.R($.K,-1)
$.K.pop()}s=A.d5(b,u.N.a(t),", ")+c
return s.charCodeAt(0)==0?s:s},
cW(a,b,c){var t,s
if(A.dt(a))return b+"..."+c
t=new A.c0(b)
B.a.k($.K,a)
try{s=t
s.a=A.d5(s.a,a,", ")}finally{if(0>=$.K.length)return A.R($.K,-1)
$.K.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
dt(a){var t,s
for(t=$.K.length,s=0;s<t;++s)if(a===$.K[s])return!0
return!1},
f_(a,b){var t,s,r,q,p,o,n,m=a.gv(a),l=0,k=0
while(!0){if(!(l<80||k<3))break
if(!m.l())return
t=A.e(m.gp())
B.a.k(b,t)
l+=t.length+2;++k}if(!m.l()){if(k<=5)return
if(0>=b.length)return A.R(b,-1)
s=b.pop()
if(0>=b.length)return A.R(b,-1)
r=b.pop()}else{q=m.gp();++k
if(!m.l()){if(k<=4){B.a.k(b,A.e(q))
return}s=A.e(q)
if(0>=b.length)return A.R(b,-1)
r=b.pop()
l+=s.length+2}else{p=m.gp();++k
for(;m.l();q=p,p=o){o=m.gp();++k
if(k>100){while(!0){if(!(l>75&&k>3))break
if(0>=b.length)return A.R(b,-1)
l-=b.pop().length+2;--k}B.a.k(b,"...")
return}}r=A.e(q)
s=A.e(p)
l+=s.length+r.length+4}}if(k>b.length+2){l+=5
n="..."}else n=null
while(!0){if(!(l>80&&b.length>3))break
if(0>=b.length)return A.R(b,-1)
l-=b.pop().length+2
if(n==null){l+=5
n="..."}}if(n!=null)B.a.k(b,n)
B.a.k(b,r)
B.a.k(b,s)},
ax:function ax(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bv:function bv(a){this.a=a
this.b=null},
ay:function ay(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
ao:function ao(){},
az:function az(){},
aG:function aG(){},
e1(a){if(a instanceof A.W)return a.h(0)
return"Instance of '"+A.bV(a)+"'"},
e2(a,b){a=A.d(a)
if(a==null)a=u.K.a(a)
a.stack=b.h(0)
throw a
throw A.d("unreachable")},
e7(a,b,c){var t=A.e6(a,c)
return t},
e6(a,b){var t,s
if(Array.isArray(a))return A.y(a.slice(0),b.i("k<0>"))
t=A.y([],b.i("k<0>"))
for(s=J.cL(a);s.l();)B.a.k(t,s.gp())
return t},
d5(a,b,c){var t=J.cL(b)
if(!t.l())return a
if(c.length===0){do a+=A.e(t.gp())
while(t.l())}else{a+=A.e(t.gp())
for(;t.l();)a=a+c+A.e(t.gp())}return a},
aX(a){if(typeof a=="number"||A.dq(a)||a==null)return J.bE(a)
if(typeof a=="string")return JSON.stringify(a)
return A.e1(a)},
aO(a){return new A.ae(a)},
dU(a){return new A.T(!1,null,null,a)},
ea(a){var t=null
return new A.an(t,t,!1,t,t,a)},
eb(a,b){return a},
cV(a,b,c,d){return new A.b_(b,!0,a,d,"Index out of range")},
a2(a){return new A.bk(a)},
db(a){return new A.bi(a)},
ct(a){return new A.aU(a)},
cY(a,b,c,d){var t=A.d7(B.b.gj(a),B.b.gj(b),B.b.gj(c),B.b.gj(d),$.dR())
return t},
aW:function aW(a){this.a=a},
c9:function c9(){},
f:function f(){},
ae:function ae(a){this.a=a},
bh:function bh(){},
b7:function b7(){},
T:function T(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
an:function an(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
b_:function b_(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
bk:function bk(a){this.a=a},
bi:function bi(a){this.a=a},
aU:function aU(a){this.a=a},
b8:function b8(){},
ap:function ap(){},
aV:function aV(a){this.a=a},
ca:function ca(a){this.a=a},
r:function r(){},
D:function D(){},
z:function z(){},
j:function j(){},
c0:function c0(a){this.a=a},
cu(){var t=document.createElement("img")
return t},
dm(a){var t
if("postMessage" in a){t=A.ek(a)
return t}else return u.O.a(a)},
ek(a){if(a===window)return u.y.a(a)
else return new A.br()},
c:function c(){},
aM:function aM(){},
aN:function aN(){},
V:function V(){},
aQ:function aQ(){},
af:function af(){},
C:function C(){},
bK:function bK(){},
ag:function ag(){},
a:function a(){},
b:function b(){},
i:function i(){},
aY:function aY(){},
Y:function Y(){},
a_:function a_(){},
F:function F(){},
o:function o(){},
bc:function bc(){},
A:function A(){},
bl:function bl(){},
av:function av(){},
aw:function aw(){},
br:function br(){},
d_(a,b,c,d,e){var t,s
if(c<0)t=c===-1/0?0:-c*0
else t=c+0
e.a(t)
if(d<0)s=d===-1/0?0:-d*0
else s=d+0
return new A.H(a,b,t,e.a(s),e.i("H<0>"))},
bu:function bu(){},
a0:function a0(a,b,c){this.a=a
this.b=b
this.$ti=c},
bw:function bw(){},
H:function H(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bF:function bF(){},
bG:function bG(a,b,c){var _=this
_.b=a
_.c=b
_.e=c
_.r=0},
bH:function bH(){},
bI:function bI(){},
bU:function bU(a){this.b=a},
N:function N(a){this.b=a},
bJ:function bJ(){},
t:function t(){},
bL:function bL(a){this.a=a},
aZ:function aZ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.e=d
_.r=_.f=null
_.y=_.x=_.w=$
_.z=e
_.Q=f
_.as=$
_.at=0
_.ch=_.ay=_.ax=$},
bM:function bM(a){this.a=a},
cU(a,b,c,d){var t,s,r,q,p=new A.a5()
p.a=a
p.b=b
p.c=c
p.d=d
t=A.bX()
p.z=t
s=A.bX()
p.Q=s
r=a-9
q=b-5
t.A(r,q)
s.A(r+c,q)
return p},
a5:function a5(){var _=this
_.y=!1
_.Q=_.z=$
_.f=_.e=_.d=_.c=_.b=_.a=0
_.r=!0
_.w=!1
_.x=0},
bX(){var t=new A.bd(B.h,A.y([],u.I))
t.ab()
return t},
dc(a,b,c,d){var t=new A.as(B.h)
t.aa(a,b,c,d)
t.Q=!0
t.f=5
t.z=0
return t},
bm:function bm(a,b,c){var _=this
_.e=a
_.f=b
_.a=c
_.c=_.b=0
_.d=!1},
bd:function bd(a,b){var _=this
_.e=a
_.r=0
_.a=b
_.c=_.b=0
_.d=!1},
bY:function bY(){},
bZ:function bZ(){},
c_:function c_(){},
b4:function b4(a,b){var _=this
_.e=a
_.a=b
_.c=_.b=0
_.d=!1},
bO:function bO(){},
bP:function bP(){},
bQ:function bQ(){},
b5:function b5(a,b){var _=this
_.e=a
_.a=b
_.c=_.b=0
_.d=!1},
v:function v(){},
bS:function bS(){},
u:function u(){var _=this
_.z=_.y=0
_.Q=!1
_.f=_.e=_.d=_.c=_.b=_.a=0
_.r=!0
_.w=!1
_.x=0},
as:function as(a){var _=this
_.dx=a
_.z=_.y=0
_.Q=!1
_.f=_.e=_.d=_.c=_.b=_.a=0
_.r=!0
_.w=!1
_.x=0},
a7:function a7(a){var _=this
_.z=_.y=null
_.Q=!1
_.as=0
_.at=a
_.f=_.e=_.d=_.c=_.b=_.a=0
_.r=!0
_.w=!1
_.x=0},
bT:function bT(a){this.a=a},
ft(){var t,s="rgb(66, 205, 255)",r="rgb(0, 131, 179)",q=document,p=u.E.a(q.querySelector("#canvas")),o=p.getContext("2d"),n=A.y([],u.n),m=A.y([],u.a),l=new A.a7(B.e)
l.R(150,300,50,50)
t=new A.aZ(30,p,o,n,m,l)
t.an()
l=u.R
$.U.b=l.a(q.querySelector("#waterfall"))
$.cN.b=l.a(q.querySelector("#rock"))
$.aP.b=A.cu()
B.m.sJ($.aP.B(),"./assets/img/bubbles.png")
$.cr.b=A.cu()
$.cs.b=A.cu()
B.m.sJ($.cs.B(),"./assets/img/player_right.png")
B.m.sJ($.cr.B(),"./assets/img/player_left.png")
q=o.createLinearGradient(0,0,180,0)
t.ax=q
q.addColorStop(0,s)
t.ax.addColorStop(1,r)
q=o.createLinearGradient(180,0,360,0)
t.ay=q
q.addColorStop(0,r)
t.ay.addColorStop(1,s)
o=o.createLinearGradient(0,0,0,640)
t.ch=o
o.addColorStop(0,"transparent")
t.ch.addColorStop(1,"rgba(255, 255, 255, 0.5)")
q=u.I
o=new A.b5(B.h,A.y([],q))
o.a9()
t.w=o
o=new A.b4(B.h,A.y([],q))
o.a8()
t.x=o
q=A.y([],q)
o=new A.bm(new A.bF(),B.h,q)
o.d=!0
n=$.U.B().height
B.a.k(q,A.dc(0,-1*(n==null?A.bz(n):n),1,1))
B.a.k(q,A.dc(0,0,1,1))
t.y=o
B.a.k(m,t.w)
B.a.k(m,t.x)
B.a.k(m,t.y)
t.P(0)}},J={
cI(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cF(a){var t,s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.cG==null){A.fo()
o=a[v.dispatchPropertyName]}if(o!=null){t=o.p
if(!1===t)return o.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return o.i
if(o.e===s)throw A.d(A.db("Return interceptor for "+A.e(t(a,o))))}r=a.constructor
if(r==null)q=null
else{p=$.cb
if(p==null)p=$.cb=v.getIsolateTag("_$dart_js")
q=r[p]}if(q!=null)return q
q=A.fs(a)
if(q!=null)return q
if(typeof a=="function")return B.C
t=Object.getPrototypeOf(a)
if(t==null)return B.r
if(t===Object.prototype)return B.r
if(typeof r=="function"){p=$.cb
if(p==null)p=$.cb=v.getIsolateTag("_$dart_js")
Object.defineProperty(r,p,{value:B.n,enumerable:false,writable:true,configurable:true})
return B.n}return B.n},
e4(a,b){a.fixed$length=Array
return a},
ac(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ai.prototype
return J.b2.prototype}if(typeof a=="string")return J.a6.prototype
if(a==null)return J.b1.prototype
if(typeof a=="boolean")return J.b0.prototype
if(a.constructor==Array)return J.k.prototype
if(typeof a!="object"){if(typeof a=="function")return J.O.prototype
return a}if(a instanceof A.j)return a
return J.cF(a)},
fi(a){if(a==null)return a
if(a.constructor==Array)return J.k.prototype
if(!(a instanceof A.j))return J.a8.prototype
return a},
fj(a){if(typeof a=="string")return J.a6.prototype
if(a==null)return a
if(a.constructor==Array)return J.k.prototype
if(typeof a!="object"){if(typeof a=="function")return J.O.prototype
return a}if(a instanceof A.j)return a
return J.cF(a)},
cl(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.O.prototype
return a}if(a instanceof A.j)return a
return J.cF(a)},
dS(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.ac(a).u(a,b)},
cK(a){return J.ac(a).gj(a)},
cL(a){return J.fi(a).gv(a)},
cM(a){return J.fj(a).gq(a)},
dT(a){return J.cl(a).gau(a)},
bE(a){return J.ac(a).h(a)},
ah:function ah(){},
b0:function b0(){},
b1:function b1(){},
E:function E(){},
Z:function Z(){},
b9:function b9(){},
a8:function a8(){},
O:function O(){},
k:function k(a){this.$ti=a},
bN:function bN(a){this.$ti=a},
l:function l(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aj:function aj(){},
ai:function ai(){},
b2:function b2(){},
a6:function a6(){}},B={}
var w=[A,J,B]
var $={}
A.cv.prototype={}
J.ah.prototype={
u(a,b){return a===b},
gj(a){return A.ba(a)},
h(a){return"Instance of '"+A.bV(a)+"'"}}
J.b0.prototype={
h(a){return String(a)},
gj(a){return a?519018:218159},
$iq:1}
J.b1.prototype={
u(a,b){return null==b},
h(a){return"null"},
gj(a){return 0}}
J.E.prototype={}
J.Z.prototype={
gj(a){return 0},
h(a){return String(a)}}
J.b9.prototype={}
J.a8.prototype={}
J.O.prototype={
h(a){var t=a[$.dG()]
if(t==null)return this.a5(a)
return"JavaScript function for "+J.bE(t)},
$iX:1}
J.k.prototype={
k(a,b){A.G(a).c.a(b)
if(!!a.fixed$length)A.ad(A.a2("add"))
a.push(b)},
ak(a,b){var t,s
A.G(a).i("q(1)").a(b)
t=a.length
for(s=0;s<t;++s){if(A.dx(b.$1(a[s])))return!0
if(a.length!==t)throw A.d(A.ct(a))}return!1},
h(a){return A.cW(a,"[","]")},
gv(a){return new J.l(a,a.length,A.G(a).i("l<1>"))},
gj(a){return A.ba(a)},
gq(a){return a.length},
$ir:1,
$ial:1}
J.bN.prototype={}
J.l.prototype={
gp(){var t=this.d
return t==null?this.$ti.c.a(t):t},
l(){var t,s=this,r=s.a,q=r.length
if(s.b!==q)throw A.d(A.M(r))
t=s.c
if(t>=q){s.sU(null)
return!1}s.sU(r[t]);++s.c
return!0},
sU(a){this.d=this.$ti.i("1?").a(a)},
$iD:1}
J.aj.prototype={
a1(a){var t
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){t=a<0?Math.ceil(a):Math.floor(a)
return t+0}throw A.d(A.a2(""+a+".toInt()"))},
aw(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.d(A.a2(""+a+".round()"))},
h(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gj(a){var t,s,r,q,p=a|0
if(a===p)return p&536870911
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259&536870911},
O(a,b){var t=a%b
if(t===0)return 0
if(t>0)return t
return t+b},
a6(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.V(a,b)},
E(a,b){return(a|0)===a?a/b|0:this.V(a,b)},
V(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw A.d(A.a2("Result of truncating division is "+A.e(t)+": "+A.e(a)+" ~/ "+b))},
aj(a,b){var t
if(a>0)t=this.ai(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
ai(a,b){return b>31?0:a>>>b},
$ibC:1,
$iS:1}
J.ai.prototype={$icH:1}
J.b2.prototype={}
J.a6.prototype={
a2(a,b){return a+b},
a3(a,b){var t,s
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.d(B.z)
for(t=a,s="";!0;){if((b&1)===1)s=t+s
b=b>>>1
if(b===0)break
t+=t}return s},
av(a,b,c){var t=b-a.length
if(t<=0)return a
return this.a3(c,t)+a},
h(a){return a},
gj(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=s+a.charCodeAt(r)&536870911
s=s+((s&524287)<<10)&536870911
s^=s>>6}s=s+((s&67108863)<<3)&536870911
s^=s>>11
return s+((s&16383)<<15)&536870911},
gq(a){return a.length},
$ia1:1}
A.ak.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.bW.prototype={}
A.B.prototype={
gv(a){var t=this.a
return new A.x(new J.l(t,t.length,A.G(t).i("l<1>")),this.b,this.$ti.i("x<1>"))}}
A.x.prototype={
l(){var t,s,r,q
for(t=this.a,s=this.b,r=t.$ti.c;t.l();){q=t.d
if(A.dx(s.$1(q==null?r.a(q):q)))return!0}return!1},
gp(){var t=this.a,s=t.d
return s==null?t.$ti.c.a(s):s}}
A.at.prototype={
gv(a){var t=this.a
return new A.au(new J.l(t,t.length,A.G(t).i("l<1>")),this.$ti.i("au<1>"))}}
A.au.prototype={
l(){var t,s,r,q
for(t=this.a,s=this.$ti.c,r=t.$ti.c;t.l();){q=t.d
if(s.b(q==null?r.a(q):q))return!0}return!1},
gp(){var t=this.a,s=t.d
t=s==null?t.$ti.c.a(s):s
return this.$ti.c.a(t)},
$iD:1}
A.c1.prototype={
t(a){var t,s,r=this,q=new RegExp(r.a).exec(a)
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
A.am.prototype={
h(a){var t=this.b
if(t==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+t+"' on null"}}
A.b3.prototype={
h(a){var t,s=this,r="NoSuchMethodError: method not found: '",q=s.b
if(q==null)return"NoSuchMethodError: "+s.a
t=s.c
if(t==null)return r+q+"' ("+s.a+")"
return r+q+"' on '"+t+"' ("+s.a+")"}}
A.bj.prototype={
h(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
A.bR.prototype={
h(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.aA.prototype={
h(a){var t,s=this.b
if(s!=null)return s
s=this.a
t=s!==null&&typeof s==="object"?s.stack:null
return this.b=t==null?"":t},
$id4:1}
A.W.prototype={
h(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+A.dF(s==null?"unknown":s)+"'"},
$iX:1,
gaB(){return this},
$C:"$1",
$R:1,
$D:null}
A.aS.prototype={$C:"$0",$R:0}
A.aT.prototype={$C:"$2",$R:2}
A.bf.prototype={}
A.be.prototype={
h(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+A.dF(t)+"'"}}
A.a4.prototype={
u(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.a4))return!1
return this.$_target===b.$_target&&this.a===b.a},
gj(a){return(A.dC(this.a)^A.ba(this.$_target))>>>0},
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.bV(this.a)+"'")}}
A.bb.prototype={
h(a){return"RuntimeError: "+this.a}}
A.bo.prototype={
h(a){return"Assertion failed: "+A.aX(this.a)}}
A.cm.prototype={
$1(a){return this.a(a)},
$S:5}
A.cn.prototype={
$2(a,b){return this.a(a,b)},
$S:6}
A.co.prototype={
$1(a){return this.a(A.bA(a))},
$S:7}
A.c8.prototype={
B(){var t=this.b
if(t===this)throw A.d(A.b6(""))
return t}}
A.w.prototype={
i(a){return A.cg(v.typeUniverse,this,a)},
aC(a){return A.eD(v.typeUniverse,this,a)}}
A.bt.prototype={}
A.bx.prototype={
h(a){return A.p(this.a,null)}}
A.bs.prototype={
h(a){return this.a}}
A.aC.prototype={}
A.c5.prototype={
$1(a){var t=this.a,s=t.a
t.a=null
s.$0()},
$S:8}
A.c4.prototype={
$1(a){var t,s
this.a.a=u.M.a(a)
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:9}
A.c6.prototype={
$0(){this.a.$0()},
$S:1}
A.c7.prototype={
$0(){this.a.$0()},
$S:1}
A.aB.prototype={
ac(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(A.aK(new A.cf(this,b),0),a)
else throw A.d(A.a2("`setTimeout()` not found."))},
ad(a,b){if(self.setTimeout!=null)this.b=self.setInterval(A.aK(new A.ce(this,a,Date.now(),b),0),a)
else throw A.d(A.a2("Periodic timer."))},
am(){if(self.setTimeout!=null){var t=this.b
if(t==null)return
if(this.a)self.clearTimeout(t)
else self.clearInterval(t)
this.b=null}else throw A.d(A.a2("Canceling a timer."))},
$ibg:1}
A.cf.prototype={
$0(){var t=this.a
t.b=null
t.c=1
this.b.$0()},
$S:2}
A.ce.prototype={
$0(){var t,s=this,r=s.a,q=r.c+1,p=s.b
if(p>0){t=Date.now()-s.c
if(t>(q+1)*p)q=B.c.a6(t,p)}r.c=q
s.d.$1(r)},
$S:1}
A.bp.prototype={}
A.ci.prototype={}
A.cj.prototype={
$0(){var t=this.a,s=this.b
A.dy(t,"error",u.K)
A.dy(s,"stackTrace",u.l)
A.e2(t,s)},
$S:2}
A.cc.prototype={
az(a,b,c){var t,s,r
c.i("~(0)").a(a)
c.a(b)
try{if(B.j===$.bn){a.$1(b)
return}A.f3(null,null,this,a,b,u.t,c)}catch(r){t=A.fA(r)
s=A.fl(r)
A.f2(u.K.a(t),u.l.a(s))}},
al(a,b){return new A.cd(this,b.i("~(0)").a(a),b)}}
A.cd.prototype={
$1(a){var t=this.c
return this.a.az(this.b,t.a(a),t)},
$S(){return this.c.i("~(0)")}}
A.ax.prototype={
gv(a){var t=this,s=new A.ay(t,t.r,t.$ti.i("ay<1>"))
s.c=t.e
return s},
gq(a){return this.a},
k(a,b){var t,s,r=this
r.$ti.c.a(b)
if(typeof b=="string"&&b!=="__proto__"){t=r.b
return r.S(t==null?r.b=A.cx():t,b)}else if(typeof b=="number"&&(b&1073741823)===b){s=r.c
return r.S(s==null?r.c=A.cx():s,b)}else return r.ae(b)},
ae(a){var t,s,r,q=this
q.$ti.c.a(a)
t=q.d
if(t==null)t=q.d=A.cx()
s=J.cK(a)&1073741823
r=t[s]
if(r==null)t[s]=[q.M(a)]
else{if(q.ah(r,a)>=0)return!1
r.push(q.M(a))}return!0},
S(a,b){this.$ti.c.a(b)
if(u.Y.a(a[b])!=null)return!1
a[b]=this.M(b)
return!0},
M(a){var t=this,s=new A.bv(t.$ti.c.a(a))
if(t.e==null)t.e=t.f=s
else t.f=t.f.b=s;++t.a
t.r=t.r+1&1073741823
return s},
ah(a,b){var t,s=a.length
for(t=0;t<s;++t)if(J.dS(a[t].a,b))return t
return-1},
$icX:1}
A.bv.prototype={}
A.ay.prototype={
gp(){var t=this.d
return t==null?this.$ti.c.a(t):t},
l(){var t=this,s=t.c,r=t.a
if(t.b!==r.r)throw A.d(A.ct(r))
else if(s==null){t.sT(null)
return!1}else{t.sT(t.$ti.i("1?").a(s.a))
t.c=s.b
return!0}},
sT(a){this.d=this.$ti.i("1?").a(a)},
$iD:1}
A.ao.prototype={
h(a){return A.cW(this,"{","}")}}
A.az.prototype={$ir:1}
A.aG.prototype={}
A.aW.prototype={
u(a,b){if(b==null)return!1
return b instanceof A.aW&&this.a===b.a},
gj(a){return B.c.gj(this.a)},
h(a){var t,s,r,q,p=this.a,o=p<0?"-":"",n=B.c.E(p,36e8)
p%=36e8
if(p<0)p=-p
t=B.c.E(p,6e7)
p%=6e7
s=t<10?"0":""
r=B.c.E(p,1e6)
q=r<10?"0":""
return o+Math.abs(n)+":"+s+t+":"+q+r+"."+B.q.av(B.c.h(p%1e6),6,"0")}}
A.c9.prototype={
h(a){return this.ag()}}
A.f.prototype={}
A.ae.prototype={
h(a){var t=this.a
if(t!=null)return"Assertion failed: "+A.aX(t)
return"Assertion failed"}}
A.bh.prototype={}
A.b7.prototype={
h(a){return"Throw of null."}}
A.T.prototype={
gL(){return"Invalid argument"+(!this.a?"(s)":"")},
gK(){return""},
h(a){var t=this,s=t.c,r=s==null?"":" ("+s+")",q=t.d,p=q==null?"":": "+q,o=t.gL()+r+p
if(!t.a)return o
return o+t.gK()+": "+A.aX(t.gN())},
gN(){return this.b}}
A.an.prototype={
gN(){return A.eH(this.b)},
gL(){return"RangeError"},
gK(){var t,s=this.e,r=this.f
if(s==null)t=r!=null?": Not less than or equal to "+A.e(r):""
else if(r==null)t=": Not greater than or equal to "+A.e(s)
else if(r>s)t=": Not in inclusive range "+A.e(s)+".."+A.e(r)
else t=r<s?": Valid value range is empty":": Only valid value is "+A.e(s)
return t}}
A.b_.prototype={
gN(){return A.bz(this.b)},
gL(){return"RangeError"},
gK(){if(A.bz(this.b)<0)return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+t},
gq(a){return this.f}}
A.bk.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.bi.prototype={
h(a){return"UnimplementedError: "+this.a}}
A.aU.prototype={
h(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.aX(t)+"."}}
A.b8.prototype={
h(a){return"Out of Memory"},
$if:1}
A.ap.prototype={
h(a){return"Stack Overflow"},
$if:1}
A.aV.prototype={
h(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.ca.prototype={
h(a){return"Exception: "+this.a}}
A.r.prototype={
gq(a){var t,s=this.gv(this)
for(t=0;s.l();)++t
return t},
Y(a,b){var t,s,r
A.eb(b,"index")
for(t=this.gv(this),s=0;t.l();){r=t.gp()
if(b===s)return r;++s}throw A.d(A.cV(b,s,this,"index"))},
h(a){return A.e3(this,"(",")")}}
A.D.prototype={}
A.z.prototype={
gj(a){return A.j.prototype.gj.call(this,this)},
h(a){return"null"}}
A.j.prototype={$ij:1,
u(a,b){return this===b},
gj(a){return A.ba(this)},
h(a){return"Instance of '"+A.bV(this)+"'"},
toString(){return this.h(this)}}
A.c0.prototype={
gq(a){return this.a.length},
h(a){var t=this.a
return t.charCodeAt(0)==0?t:t}}
A.c.prototype={}
A.aM.prototype={
h(a){return String(a)}}
A.aN.prototype={
h(a){return String(a)}}
A.V.prototype={$iV:1,$iaR:1}
A.aQ.prototype={$iaQ:1}
A.af.prototype={
sC(a,b){a.fillStyle=b},
X(a,b,c){u.q.a(c)
a.drawImage(b,c.a,c.b,c.c,c.d)},
$iaf:1}
A.C.prototype={
gq(a){return a.length}}
A.bK.prototype={
h(a){return String(a)}}
A.ag.prototype={
h(a){var t,s,r,q=a.left
q.toString
t=a.top
t.toString
s=a.width
s.toString
r=a.height
r.toString
return"Rectangle ("+A.e(q)+", "+A.e(t)+") "+A.e(s)+" x "+A.e(r)},
u(a,b){var t,s
if(b==null)return!1
if(u.q.b(b)){t=a.left
t.toString
s=J.cl(b)
if(t===s.gG(b)){t=a.top
t.toString
if(t===s.gH(b)){t=a.width
t.toString
if(t===s.gI(b)){t=a.height
t.toString
s=t===s.gF(b)
t=s}else t=!1}else t=!1}else t=!1}else t=!1
return t},
gj(a){var t,s,r,q=a.left
q.toString
t=a.top
t.toString
s=a.width
s.toString
r=a.height
r.toString
return A.cY(q,t,s,r)},
gW(a){var t=a.bottom
t.toString
return t},
gF(a){var t=a.height
t.toString
return t},
gG(a){var t=a.left
t.toString
return t},
ga0(a){var t=a.right
t.toString
return t},
gH(a){var t=a.top
t.toString
return t},
gI(a){var t=a.width
t.toString
return t},
$iH:1}
A.a.prototype={
h(a){return a.localName},
$ia:1}
A.b.prototype={$ib:1}
A.i.prototype={
af(a,b,c,d){return a.addEventListener(b,A.aK(u.o.a(c),1),d)},
$ii:1}
A.aY.prototype={
gq(a){return a.length}}
A.Y.prototype={
sJ(a,b){a.src=b},
$iY:1,
$iaR:1}
A.a_.prototype={}
A.F.prototype={
gau(a){var t,s,r,q,p,o
if(!!a.offsetX)return new A.a0(a.offsetX,a.offsetY,u.p)
else{t=a.target
s=u.h
if(!s.b(A.dm(t)))throw A.d(A.a2("offsetX is only supported on elements"))
r=s.a(A.dm(t))
t=a.clientX
s=a.clientY
q=u.p
p=r.getBoundingClientRect()
o=p.left
o.toString
p=p.top
p.toString
q.a(new A.a0(o,p,q))
return new A.a0(B.b.a1(t-o),B.b.a1(s-p),q)}},
$iF:1}
A.o.prototype={
h(a){var t=a.nodeValue
return t==null?this.a4(a):t}}
A.bc.prototype={
gq(a){return a.length}}
A.A.prototype={}
A.bl.prototype={$iaR:1}
A.av.prototype={$ic3:1}
A.aw.prototype={
h(a){var t,s,r,q=a.left
q.toString
t=a.top
t.toString
s=a.width
s.toString
r=a.height
r.toString
return"Rectangle ("+A.e(q)+", "+A.e(t)+") "+A.e(s)+" x "+A.e(r)},
u(a,b){var t,s
if(b==null)return!1
if(u.q.b(b)){t=a.left
t.toString
s=J.cl(b)
if(t===s.gG(b)){t=a.top
t.toString
if(t===s.gH(b)){t=a.width
t.toString
if(t===s.gI(b)){t=a.height
t.toString
s=t===s.gF(b)
t=s}else t=!1}else t=!1}else t=!1}else t=!1
return t},
gj(a){var t,s,r,q=a.left
q.toString
t=a.top
t.toString
s=a.width
s.toString
r=a.height
r.toString
return A.cY(q,t,s,r)},
gF(a){var t=a.height
t.toString
return t},
gI(a){var t=a.width
t.toString
return t}}
A.br.prototype={$ii:1,$ic3:1}
A.bu.prototype={
ar(a){if(a<=0||a>4294967296)throw A.d(A.ea("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0},
D(){return Math.random()},
$ie9:1}
A.a0.prototype={
h(a){return"Point("+A.e(this.a)+", "+A.e(this.b)+")"},
u(a,b){if(b==null)return!1
return b instanceof A.a0&&this.a===b.a&&this.b===b.b},
gj(a){return A.ed(B.b.gj(this.a),B.b.gj(this.b),0)}}
A.bw.prototype={
ga0(a){return this.$ti.c.a(this.a+this.c)},
gW(a){return this.$ti.c.a(this.b+this.d)},
h(a){var t=this
return"Rectangle ("+A.e(t.a)+", "+A.e(t.b)+") "+A.e(t.c)+" x "+A.e(t.d)},
u(a,b){var t,s,r,q,p=this
if(b==null)return!1
if(u.q.b(b)){t=p.a
s=J.cl(b)
if(t===s.gG(b)){r=p.b
if(r===s.gH(b)){q=p.$ti.c
t=q.a(t+p.c)===s.ga0(b)&&q.a(r+p.d)===s.gW(b)}else t=!1}else t=!1}else t=!1
return t},
gj(a){var t=this,s=t.a,r=t.b,q=t.$ti.c
return A.d7(B.b.gj(s),B.b.gj(r),B.b.gj(q.a(s+t.c)),B.b.gj(q.a(r+t.d)),0)}}
A.H.prototype={
gG(a){return this.a},
gH(a){return this.b},
gI(a){return this.c},
gF(a){return this.d}}
A.bF.prototype={}
A.bG.prototype={
m(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h=this
u.r.a(b)
u.c.a(c)
t=h.b
s=t.b
r=h.c.b
q=Math.abs(s-r)
if(q<5){t.b=r
t=r}else{p=s<r?0:-1
t=t.b=s+p*(q<100?5*(1-(100-q)/100):5)}s=h.e
h.r=t-s/2
for(t=A.G(c),r=t.i("q(1)"),o=r.a(new A.bH()),n=t.i("l<1>"),m=new J.l(c,c.length,n),l=t.i("x<1>"),o=new A.x(m,o,l),t=t.c;o.l();){k=m.d
if(k==null)k=t.a(k)
if(k.a_())k.m(a,0,h.r)}for(o=b.length,j=0;j<b.length;b.length===o||(0,A.M)(b),++j){i=b[j]
m=i.b
k=h.r
if(m>k-400&&m<k+s+400)i.m(a,0,k)}for(s=r.a(new A.bI()),n=new J.l(c,c.length,n),l=new A.x(n,s,l);l.l();){s=n.d
if(s==null)s=t.a(s)
if(s.a_())s.m(a,0,h.r)}}}
A.bH.prototype={
$1(a){return u.W.a(a).d},
$S:4}
A.bI.prototype={
$1(a){return!u.W.a(a).d},
$S:4}
A.bU.prototype={}
A.N.prototype={
ag(){return"Direction."+this.b}}
A.bJ.prototype={}
A.t.prototype={}
A.bL.prototype={}
A.aZ.prototype={
P(a){var t,s,r=this,q=r.b
q.clientWidth
q.clientHeight
q=r.d
if(q!=null)q.am()
r.d=A.ef(new A.aW(1000*B.b.aw(1000/r.a)),r.gaA())
r.at=0
q=new A.a7(B.e)
q.R(150,300,50,50)
r.Q=q
t=r.w
t===$&&A.m()
q.y=t
t=r.x
t===$&&A.m()
q.z=t
r.sao(A.y([],u.n))
for(s=0;s<50;++s){q=r.e
t=new A.a5()
t.a7(B.h.D()*260,200-s*200,100,20)
B.a.k(q,t)}B.a.k(r.e,A.cU(100,600,200,20))
B.a.k(r.e,A.cU(0,400,100,20))
B.a.k(r.e,r.Q)
r.f=new A.bL(1.5)
r.r=new A.bJ()
q=r.Q
t=new A.bU(0)
t.b=q.b
r.as=new A.bG(t,q,640)
q=r.y
q===$&&A.m()
q.c=q.b=0},
n(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.c,c=e.ax
c===$&&A.m()
B.d.sC(d,c)
d.fillRect(0,0,180,640)
c=e.ay
c===$&&A.m()
B.d.sC(d,c)
d.fillRect(180,0,180,640)
c=e.ch
c===$&&A.m()
B.d.sC(d,c)
d.fillRect(0,0,360,640)
c=$.d8
$.ee=c
t=a.c
$.d8=t
$.ar=t-c
c=e.w
c===$&&A.m()
c.n(e)
c=e.x
c===$&&A.m()
c.n(e)
c=e.y
c===$&&A.m()
c.n(e)
for(c=e.e,t=c.length,s=0;s<c.length;c.length===t||(0,A.M)(c),++s){r=c[s]
q=r.b
p=e.as
p===$&&A.m()
p=p.r
if(q>p-400&&q<p+640+400)r.n(e)}for(c=e.e,t=c.length,s=0;s<t;++s){r=c[s]
q=e.f
if(q!=null)if(r.w){q=r.f=r.f+r.x*q.a
r.b+=q>100?r.f=100:q}r.a=r.a+r.e}for(c=e.e,t=c.length,q=u.j,s=0;s<c.length;c.length===t||(0,A.M)(c),++s){r=c[s]
for(p=e.e,o=p.length,n=0;n<p.length;p.length===o||(0,A.M)(p),++n){m=p[n]
l=r!==m
if(l){if(e.r==null)k=null
else{l=r.a
j=m.a
i=j+m.c
if(l<i)if(l+r.c>j){h=r.b
g=m.b
h=h<g+m.d&&h+r.d>g}else h=!1
else h=!1
if(h){h=r.b
g=m.b
if(h>=g&&h<=g+m.d){if(l<=j)f=l+r.c-j
else f=l+r.c>=i?l-i:1000
if(g+m.d-h<=Math.abs(f))k=B.k
else if(f>0)k=B.e
else k=f<0?B.f:B.i}else{h+=r.d
if(h>=g&&h<=g+m.d){if(l<=j)f=l+r.c-j
else f=l+r.c>=i?l-i:1000
if(h-g<=Math.abs(f))k=B.l
else if(f>0)k=B.e
else k=f<0?B.f:B.i}else if(l<j)k=B.e
else k=l+r.c>i?B.f:B.i}}else k=B.i}r.Z(m,k==null?q.a(k):k)}}}c=e.as
c===$&&A.m()
c.m(d,e.e,e.z)
B.d.sC(d,"white")
d.font="16px sans-serif"
d.fillText("SCORE: "+e.at,10,20)},
an(){B.A.af(this.b,"mousedown",u.o.a(new A.bM(this)),null)},
sao(a){this.e=u.r.a(a)}}
A.bM.prototype={
$1(a){a=u.V.a(u.B.a(a))
this.a.Q.ap(a)
return A.e5([null],u.J)},
$S:11}
A.a5.prototype={
a7(a,b,c,d){var t,s,r=this
r.a=a
r.b=b
r.c=c
r.d=d
r.z=A.bX()
r.Q=A.bX()
t=a-9
s=b-5
r.z.A(t,s)
r.Q.A(t+c,s)},
n(a){var t=this.z
t===$&&A.m()
t.n(a)
t=this.Q
t===$&&A.m()
t.n(a)},
m(a,b,c){var t,s=this
B.d.sC(a,"white")
t=s.z
t===$&&A.m()
t.m(a,b,c)
t=s.Q
t===$&&A.m()
t.m(a,b,c)
a.drawImage($.cN.B(),s.a-b,s.b-c)},
Z(a,b){var t,s,r
switch(b){case B.i:break
case B.k:t=a.e
s=t>0?1:-1
t=Math.abs(t)>0?t-s/2:0
a.e=t
r=Math.abs(t)
a.e=r>0&&r<1?0:t
if(a.f>=0){a.b=this.b-a.d
a.f=0
if(a instanceof A.a7){if(!a.Q){t=a.y
if(t!=null)t.A(a.a,this.b)}this.y=a.Q=!0}}break
case B.l:break
case B.f:break
case B.e:break}}}
A.bm.prototype={
m(a,b,c){var t,s,r,q,p
for(t=this.a,s=t.length,r=0;r<t.length;t.length===s||(0,A.M)(t),++r){q=t[r]
p=$.U.b
if(p==null?$.U==null:p===$.U)A.ad(A.b6(""))
a.drawImage(p,q.a-b,q.b-c)}},
n(a){var t,s,r,q,p,o
if(a.d!=null){t=u.d
s=A.e7(new A.at(this.a,t),!0,t.c)
for(t=s.length,r=0;r<t;++r){q=s[r]
p=q.b
o=a.as
o===$&&A.m()
if(p>640+o.r){o=$.U.b
if(o==null?$.U==null:o===$.U)A.ad(A.b6(""))
o=A.eG(o.height)
q.z=0
q.Q=!0
o=q.b=p-o*2
q.f=5
p=o}q.z=q.z+$.ar
q.a=q.a+q.e
q.b=p+q.f}}}}
A.bd.prototype={
ab(){var t,s,r,q,p
for(t=this.a,s=0;s<20;++s){r=this.b
q=this.c
p=new A.u()
p.a=r
p.b=q
p.d=p.c=5
B.a.k(t,p)}},
A(a,b){var t,s,r,q
this.b=a
this.c=b
for(t=this.a,s=t.length,r=0;r<s;++r){q=t[r]
q.z=0
q.f=2
q.y=50
q.Q=!1}},
m(a,b,c){var t,s,r,q,p,o,n,m
for(t=this.a,s=t.length,r=u.H,q=0;q<t.length;t.length===s||(0,A.M)(t),++q){p=t[q]
if(p.Q){o=p.z
n=p.y
m=A.d_(p.a-b,p.b-c,p.c,p.d,r)
a.globalAlpha=1-Math.abs(0.5-o/n)*2
o=$.aP.b
if(o==null?$.aP==null:o===$.aP)A.ad(A.b6(""))
B.d.X(a,o,m)}}a.globalAlpha=1},
n(a){var t,s,r,q,p,o,n,m=this
if(a.d!=null){if(++m.r>=3){m.r=0
t=m.a
s=A.G(t)
r=s.i("q(1)")
s=s.i("B<1>")
q=new A.B(t,r.a(new A.bY()),s)
if(q.gv(q).l()){p=new A.B(t,r.a(new A.bZ()),s).Y(0,0)
p.z=0
p.Q=!0
p.b=m.c
t=m.e
p.a=m.b+t.D()*6-3
p.c=p.d=t.D()*5+15}o=!0}else o=!1
for(t=m.a,s=A.G(t),r=s.i("q(1)").a(new A.c_()),t=new J.l(t,t.length,s.i("l<1>")),r=new A.x(t,r,s.i("x<1>")),s=s.c;r.l();){q=t.d
if(q==null)q=s.a(q)
n=q.z+$.ar
q.z=n
q.b=q.b+q.f
if(o&&q.c>0){q.a+=0.5;--q.c;--q.d}if(n>q.y)q.Q=!1}}}}
A.bY.prototype={
$1(a){return!u.z.a(a).Q},
$S:0}
A.bZ.prototype={
$1(a){return!u.z.a(a).Q},
$S:0}
A.c_.prototype={
$1(a){return u.z.a(a).Q},
$S:0}
A.b4.prototype={
a8(){var t,s,r,q,p
for(t=this.a,s=0;s<30;++s){r=this.b
q=this.c
p=new A.u()
p.a=r
p.b=q
p.d=p.c=5
B.a.k(t,p)}},
A(a,b){var t,s,r,q
this.b=a
this.c=b
for(t=this.a,s=t.length,r=0;r<s;++r){q=t[r]
q.f=q.e=q.z=0
q.y=10
q.Q=!1}},
m(a,b,c){var t,s,r,q
for(t=this.a,s=t.length,r=0;r<t.length;t.length===s||(0,A.M)(t),++r){q=t[r]
if(q.Q){B.d.sC(a,"rgba(255, 255, 255, "+A.e(1-q.z/q.y)+")")
a.fillRect(q.a-b,q.b-c,q.c,q.d)}}},
n(a){var t,s,r,q,p,o,n,m
if(a.d!=null){t=this.a
s=A.G(t)
r=s.i("q(1)")
q=s.i("B<1>")
p=new A.B(t,r.a(new A.bO()),q)
if(p.gq(p)>3)for(p=this.e,o=0;o<3;++o){n=new A.B(t,r.a(new A.bP()),q).Y(0,o)
n.Q=!0
n.a=a.Q.a+p.D()*a.Q.c
n.f=5*p.D()
m=a.Q
n.b=m.b+m.d}for(r=r.a(new A.bQ()),t=new J.l(t,t.length,s.i("l<1>")),r=new A.x(t,r,s.i("x<1>")),s=s.c;r.l();){q=t.d
if(q==null)q=s.a(q)
p=q.z+$.ar
q.z=p
q.b=q.b+q.f
if(p>q.y)q.Q=!1}}}}
A.bO.prototype={
$1(a){return!u.z.a(a).Q},
$S:0}
A.bP.prototype={
$1(a){return!u.z.a(a).Q},
$S:0}
A.bQ.prototype={
$1(a){return u.z.a(a).Q},
$S:0}
A.b5.prototype={
a9(){var t,s,r,q,p
for(t=this.a,s=0;s<10;++s){r=this.b
q=this.c
p=new A.u()
p.a=r
p.b=q
p.d=p.c=5
B.a.k(t,p)}},
A(a,b){var t,s,r,q,p,o,n=this
n.b=a
n.c=b
for(t=n.a,s=t.length,r=n.e,q=0;q<t.length;t.length===s||(0,A.M)(t),++q){p=t[q]
p.z=0
o=r.D()*3.141592653589793/4+1.5707963267948966
o=B.c.O(r.ar(10),2)===0?o:6.283185307179586-o
p.e=Math.sin(o)*10
p.f=Math.cos(o)*10
p.a=a+50*(1-o/4.71238898038469)
p.b=b
p.y=10
p.Q=!0}},
m(a,b,c){var t,s,r,q
for(t=this.a,s=t.length,r=0;r<t.length;t.length===s||(0,A.M)(t),++r){q=t[r]
if(q.Q){B.d.sC(a,"rgba(255, 255, 255, "+A.e(1-q.z/q.y)+")")
a.fillRect(q.a-b,q.b-c,q.c,q.d)}}},
n(a){var t,s,r,q,p,o,n
if(a.d!=null)for(t=this.a,s=t.length,r=$.ar,q=0;q<s;++q){p=t[q]
if(p.Q){p.a=p.a+p.e
o=p.b
n=p.f
p.b=o+n
o=p.z+=r
p.f=n+1
if(o>p.y)p.Q=!1}}}}
A.v.prototype={
m(a,b,c){},
a_(){return B.a.ak(this.a,new A.bS())}}
A.bS.prototype={
$1(a){return u.z.a(a).Q},
$S:0}
A.u.prototype={
aa(a,b,c,d){var t=this
t.a=a
t.b=b
t.c=c
t.d=d}}
A.as.prototype={}
A.a7.prototype={
R(a,b,c,d){var t=this
t.a=a
t.b=b
t.c=c
t.d=d
t.r=t.w=!0
t.x=1},
n(a){var t=this,s=a.e,r=A.G(s)
r=new A.B(s,r.i("q(1)").a(new A.bT(t)),r.i("B<1>"))
a.at=r.gq(r)
s=t.b
r=a.as
r===$&&A.m()
if(s-r.r>640)a.P(0)
s=t.a
r=t.c
if(s+r>360){t.e*=-1
t.a=360-r-1}else if(s<0){t.e*=-1
t.a=1}if(t.Q){t.as=t.as+$.ar
if(Math.abs(t.f)>5){t.Q=!1
t.as=0}}},
m(a,b,c){var t,s,r=this,q=r.f,p=r.d,o=q>0?p:p+-q
q=r.as
if(q<5&&r.Q)o-=(2.5-Math.abs(2.5-q))*8
else if(r.Q)o-=(25-Math.abs(25-B.c.O(q,50)))*0.25
q=r.c
t=q*(p/o)
s=A.d_(r.a+(q-t)/2-b,r.b+(p-o)-c,t,o,u.H)
B.d.X(a,r.at===B.f?$.cr.B():$.cs.B(),s)},
Z(a,b){switch(b){case B.i:break
case B.k:break
case B.l:break
case B.f:break
case B.e:break}},
ap(a){var t,s,r,q=this
if(!q.Q)return
t=J.dT(a)
s=q.a
q.e=(t.a-(s+q.c/2))/30
q.f=-30
t=q.b-=20
r=q.z
if(r!=null)r.A(s,t)
q.at=q.e<0?B.f:B.e},
aq(a){if(a instanceof A.a5)return a.y
return!1}}
A.bT.prototype={
$1(a){return this.a.aq(u.v.a(a))},
$S:12};(function aliases(){var t=J.ah.prototype
t.a4=t.h
t=J.Z.prototype
t.a5=t.h})();(function installTearOffs(){var t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers._instance_1u
t(A,"fb","eh",3)
t(A,"fc","ei",3)
t(A,"fd","ej",3)
s(A,"dw","f5",2)
r(A.aZ.prototype,"gaA","n",10)})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(A.j,null)
r(A.j,[A.cv,J.ah,J.l,A.f,A.bW,A.r,A.D,A.au,A.c1,A.bR,A.aA,A.W,A.c8,A.w,A.bt,A.bx,A.aB,A.bp,A.ci,A.aG,A.bv,A.ay,A.ao,A.aW,A.c9,A.b8,A.ap,A.ca,A.z,A.c0,A.br,A.bu,A.a0,A.bw,A.bF,A.bG,A.bU,A.bJ,A.t,A.bL,A.aZ,A.v])
r(J.ah,[J.b0,J.b1,J.E,J.k,J.aj,J.a6])
r(J.E,[J.Z,A.i,A.aQ,A.af,A.bK,A.ag,A.b])
r(J.Z,[J.b9,J.a8,J.O])
s(J.bN,J.k)
r(J.aj,[J.ai,J.b2])
r(A.f,[A.ak,A.bh,A.b3,A.bj,A.bb,A.ae,A.bs,A.b7,A.T,A.bk,A.bi,A.aU,A.aV])
r(A.r,[A.B,A.at])
s(A.x,A.D)
s(A.am,A.bh)
r(A.W,[A.aS,A.aT,A.bf,A.cm,A.co,A.c5,A.c4,A.cd,A.bH,A.bI,A.bM,A.bY,A.bZ,A.c_,A.bO,A.bP,A.bQ,A.bS,A.bT])
r(A.bf,[A.be,A.a4])
s(A.bo,A.ae)
s(A.cn,A.aT)
s(A.aC,A.bs)
r(A.aS,[A.c6,A.c7,A.cf,A.ce,A.cj])
s(A.cc,A.ci)
s(A.az,A.aG)
s(A.ax,A.az)
r(A.T,[A.an,A.b_])
r(A.i,[A.o,A.av])
r(A.o,[A.a,A.C])
s(A.c,A.a)
r(A.c,[A.aM,A.aN,A.V,A.aY,A.Y,A.a_,A.bc])
s(A.A,A.b)
s(A.F,A.A)
s(A.bl,A.a_)
s(A.aw,A.ag)
s(A.H,A.bw)
s(A.N,A.c9)
r(A.t,[A.a5,A.u,A.a7])
r(A.v,[A.bm,A.bd,A.b4,A.b5])
s(A.as,A.u)
t(A.aG,A.ao)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{cH:"int",bC:"double",S:"num",a1:"String",q:"bool",z:"Null",al:"List"},mangledNames:{},types:["q(u)","z()","~()","~(~())","q(v)","@(@)","@(@,a1)","@(a1)","z(@)","z(~())","@(bg)","d3<@>(b)","q(t)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.eC(v.typeUniverse,JSON.parse('{"b9":"Z","a8":"Z","O":"Z","fB":"b","fI":"b","fL":"a","fD":"c","fJ":"o","fH":"o","fM":"F","fF":"A","fE":"C","fO":"C","fC":"a_","b0":{"q":[]},"k":{"al":["1"],"r":["1"]},"bN":{"k":["1"],"al":["1"],"r":["1"]},"l":{"D":["1"]},"aj":{"bC":[],"S":[]},"ai":{"bC":[],"cH":[],"S":[]},"b2":{"bC":[],"S":[]},"a6":{"a1":[]},"ak":{"f":[]},"B":{"r":["1"]},"x":{"D":["1"]},"at":{"r":["1"]},"au":{"D":["1"]},"am":{"f":[]},"b3":{"f":[]},"bj":{"f":[]},"aA":{"d4":[]},"W":{"X":[]},"aS":{"X":[]},"aT":{"X":[]},"bf":{"X":[]},"be":{"X":[]},"a4":{"X":[]},"bb":{"f":[]},"bo":{"f":[]},"bs":{"f":[]},"aC":{"f":[]},"aB":{"bg":[]},"ax":{"ao":["1"],"cX":["1"],"r":["1"]},"ay":{"D":["1"]},"az":{"ao":["1"],"r":["1"]},"d3":{"r":["1"]},"ae":{"f":[]},"bh":{"f":[]},"b7":{"f":[]},"T":{"f":[]},"an":{"f":[]},"b_":{"f":[]},"bk":{"f":[]},"bi":{"f":[]},"aU":{"f":[]},"b8":{"f":[]},"ap":{"f":[]},"aV":{"f":[]},"c":{"a":[],"i":[]},"aM":{"a":[],"i":[]},"aN":{"a":[],"i":[]},"V":{"a":[],"i":[],"aR":[]},"C":{"i":[]},"ag":{"H":["S"]},"a":{"i":[]},"aY":{"a":[],"i":[]},"Y":{"a":[],"i":[],"aR":[]},"a_":{"a":[],"i":[]},"F":{"b":[]},"o":{"i":[]},"bc":{"a":[],"i":[]},"A":{"b":[]},"bl":{"a":[],"i":[],"aR":[]},"av":{"c3":[],"i":[]},"aw":{"H":["S"]},"br":{"c3":[],"i":[]},"bu":{"e9":[]},"H":{"bw":["1"]},"a5":{"t":[]},"u":{"t":[]},"as":{"u":[],"t":[]},"bm":{"v":[]},"bd":{"v":[]},"b4":{"v":[]},"b5":{"v":[]},"a7":{"t":[]}}'))
A.eB(v.typeUniverse,JSON.parse('{"az":1,"aG":1}'))
var u=(function rtii(){var t=A.dz
return{E:t("V"),j:t("N"),h:t("a"),v:t("t"),C:t("f"),B:t("b"),Z:t("X"),R:t("Y"),N:t("r<@>"),n:t("k<t>"),I:t("k<u>"),a:t("k<v>"),s:t("k<a1>"),b:t("k<@>"),T:t("b1"),g:t("O"),r:t("al<t>"),c:t("al<v>"),V:t("F"),P:t("z"),K:t("j"),z:t("u"),W:t("v"),p:t("a0<S>"),L:t("fN"),q:t("H<S>"),l:t("d4"),U:t("a1"),D:t("bg"),G:t("a8"),d:t("at<as>"),y:t("c3"),w:t("q"),i:t("bC"),J:t("@"),S:t("cH"),A:t("0&*"),_:t("j*"),O:t("i?"),Q:t("cT<z>?"),X:t("j?"),Y:t("bv?"),o:t("@(b)?"),H:t("S"),t:t("~"),M:t("~()"),F:t("~(bg)")}})();(function constants(){B.A=A.V.prototype
B.d=A.af.prototype
B.m=A.Y.prototype
B.B=J.ah.prototype
B.a=J.k.prototype
B.c=J.ai.prototype
B.b=J.aj.prototype
B.q=J.a6.prototype
B.C=J.O.prototype
B.D=J.E.prototype
B.r=J.b9.prototype
B.n=J.a8.prototype
B.o=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.t=function() {
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
B.y=function(getTagFallback) {
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
B.u=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.v=function(hooks) {
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
B.x=function(hooks) {
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
B.w=function(hooks) {
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
B.p=function(hooks) { return hooks; }

B.z=new A.b8()
B.F=new A.bW()
B.h=new A.bu()
B.j=new A.cc()
B.i=new A.N("none")
B.k=new A.N("up")
B.l=new A.N("down")
B.f=new A.N("left")
B.e=new A.N("right")
B.E=A.fz("j")})();(function staticFields(){$.cb=null
$.cZ=null
$.cQ=null
$.cP=null
$.dA=null
$.dv=null
$.dE=null
$.ck=null
$.cp=null
$.cG=null
$.aa=null
$.aH=null
$.aI=null
$.cD=!1
$.bn=B.j
$.K=A.y([],A.dz("k<j>"))
$.U=A.bq()
$.cN=A.bq()
$.aP=A.bq()
$.cs=A.bq()
$.cr=A.bq()
$.ee=0
$.d8=0
$.ar=0})();(function lazyInitializers(){var t=hunkHelpers.lazyFinal
t($,"fG","dG",()=>A.fk("_$dart_dartClosure"))
t($,"fP","dH",()=>A.I(A.c2({
toString:function(){return"$receiver$"}})))
t($,"fQ","dI",()=>A.I(A.c2({$method$:null,
toString:function(){return"$receiver$"}})))
t($,"fR","dJ",()=>A.I(A.c2(null)))
t($,"fS","dK",()=>A.I(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(s){return s.message}}()))
t($,"fV","dN",()=>A.I(A.c2(void 0)))
t($,"fW","dO",()=>A.I(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(s){return s.message}}()))
t($,"fU","dM",()=>A.I(A.da(null)))
t($,"fT","dL",()=>A.I(function(){try{null.$method$}catch(s){return s.message}}()))
t($,"fY","dQ",()=>A.I(A.da(void 0)))
t($,"fX","dP",()=>A.I(function(){try{(void 0).$method$}catch(s){return s.message}}()))
t($,"fZ","cJ",()=>A.eg())
t($,"h9","dR",()=>A.dC(B.E))})();(function nativeSupport(){!function(){var t=function(a){var n={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.E,MediaError:J.E,NavigatorUserMediaError:J.E,OverconstrainedError:J.E,PositionError:J.E,GeolocationPositionError:J.E,HTMLBRElement:A.c,HTMLBaseElement:A.c,HTMLBodyElement:A.c,HTMLButtonElement:A.c,HTMLContentElement:A.c,HTMLDListElement:A.c,HTMLDataElement:A.c,HTMLDataListElement:A.c,HTMLDetailsElement:A.c,HTMLDialogElement:A.c,HTMLDivElement:A.c,HTMLEmbedElement:A.c,HTMLFieldSetElement:A.c,HTMLHRElement:A.c,HTMLHeadElement:A.c,HTMLHeadingElement:A.c,HTMLHtmlElement:A.c,HTMLIFrameElement:A.c,HTMLInputElement:A.c,HTMLLIElement:A.c,HTMLLabelElement:A.c,HTMLLegendElement:A.c,HTMLLinkElement:A.c,HTMLMapElement:A.c,HTMLMenuElement:A.c,HTMLMetaElement:A.c,HTMLMeterElement:A.c,HTMLModElement:A.c,HTMLOListElement:A.c,HTMLObjectElement:A.c,HTMLOptGroupElement:A.c,HTMLOptionElement:A.c,HTMLOutputElement:A.c,HTMLParagraphElement:A.c,HTMLParamElement:A.c,HTMLPictureElement:A.c,HTMLPreElement:A.c,HTMLProgressElement:A.c,HTMLQuoteElement:A.c,HTMLScriptElement:A.c,HTMLShadowElement:A.c,HTMLSlotElement:A.c,HTMLSourceElement:A.c,HTMLSpanElement:A.c,HTMLStyleElement:A.c,HTMLTableCaptionElement:A.c,HTMLTableCellElement:A.c,HTMLTableDataCellElement:A.c,HTMLTableHeaderCellElement:A.c,HTMLTableColElement:A.c,HTMLTableElement:A.c,HTMLTableRowElement:A.c,HTMLTableSectionElement:A.c,HTMLTemplateElement:A.c,HTMLTextAreaElement:A.c,HTMLTimeElement:A.c,HTMLTitleElement:A.c,HTMLTrackElement:A.c,HTMLUListElement:A.c,HTMLUnknownElement:A.c,HTMLDirectoryElement:A.c,HTMLFontElement:A.c,HTMLFrameElement:A.c,HTMLFrameSetElement:A.c,HTMLMarqueeElement:A.c,HTMLElement:A.c,HTMLAnchorElement:A.aM,HTMLAreaElement:A.aN,HTMLCanvasElement:A.V,CanvasGradient:A.aQ,CanvasRenderingContext2D:A.af,CDATASection:A.C,CharacterData:A.C,Comment:A.C,ProcessingInstruction:A.C,Text:A.C,DOMException:A.bK,DOMRectReadOnly:A.ag,MathMLElement:A.a,SVGAElement:A.a,SVGAnimateElement:A.a,SVGAnimateMotionElement:A.a,SVGAnimateTransformElement:A.a,SVGAnimationElement:A.a,SVGCircleElement:A.a,SVGClipPathElement:A.a,SVGDefsElement:A.a,SVGDescElement:A.a,SVGDiscardElement:A.a,SVGEllipseElement:A.a,SVGFEBlendElement:A.a,SVGFEColorMatrixElement:A.a,SVGFEComponentTransferElement:A.a,SVGFECompositeElement:A.a,SVGFEConvolveMatrixElement:A.a,SVGFEDiffuseLightingElement:A.a,SVGFEDisplacementMapElement:A.a,SVGFEDistantLightElement:A.a,SVGFEFloodElement:A.a,SVGFEFuncAElement:A.a,SVGFEFuncBElement:A.a,SVGFEFuncGElement:A.a,SVGFEFuncRElement:A.a,SVGFEGaussianBlurElement:A.a,SVGFEImageElement:A.a,SVGFEMergeElement:A.a,SVGFEMergeNodeElement:A.a,SVGFEMorphologyElement:A.a,SVGFEOffsetElement:A.a,SVGFEPointLightElement:A.a,SVGFESpecularLightingElement:A.a,SVGFESpotLightElement:A.a,SVGFETileElement:A.a,SVGFETurbulenceElement:A.a,SVGFilterElement:A.a,SVGForeignObjectElement:A.a,SVGGElement:A.a,SVGGeometryElement:A.a,SVGGraphicsElement:A.a,SVGImageElement:A.a,SVGLineElement:A.a,SVGLinearGradientElement:A.a,SVGMarkerElement:A.a,SVGMaskElement:A.a,SVGMetadataElement:A.a,SVGPathElement:A.a,SVGPatternElement:A.a,SVGPolygonElement:A.a,SVGPolylineElement:A.a,SVGRadialGradientElement:A.a,SVGRectElement:A.a,SVGScriptElement:A.a,SVGSetElement:A.a,SVGStopElement:A.a,SVGStyleElement:A.a,SVGElement:A.a,SVGSVGElement:A.a,SVGSwitchElement:A.a,SVGSymbolElement:A.a,SVGTSpanElement:A.a,SVGTextContentElement:A.a,SVGTextElement:A.a,SVGTextPathElement:A.a,SVGTextPositioningElement:A.a,SVGTitleElement:A.a,SVGUseElement:A.a,SVGViewElement:A.a,SVGGradientElement:A.a,SVGComponentTransferFunctionElement:A.a,SVGFEDropShadowElement:A.a,SVGMPathElement:A.a,Element:A.a,AbortPaymentEvent:A.b,AnimationEvent:A.b,AnimationPlaybackEvent:A.b,ApplicationCacheErrorEvent:A.b,BackgroundFetchClickEvent:A.b,BackgroundFetchEvent:A.b,BackgroundFetchFailEvent:A.b,BackgroundFetchedEvent:A.b,BeforeInstallPromptEvent:A.b,BeforeUnloadEvent:A.b,BlobEvent:A.b,CanMakePaymentEvent:A.b,ClipboardEvent:A.b,CloseEvent:A.b,CustomEvent:A.b,DeviceMotionEvent:A.b,DeviceOrientationEvent:A.b,ErrorEvent:A.b,ExtendableEvent:A.b,ExtendableMessageEvent:A.b,FetchEvent:A.b,FontFaceSetLoadEvent:A.b,ForeignFetchEvent:A.b,GamepadEvent:A.b,HashChangeEvent:A.b,InstallEvent:A.b,MediaEncryptedEvent:A.b,MediaKeyMessageEvent:A.b,MediaQueryListEvent:A.b,MediaStreamEvent:A.b,MediaStreamTrackEvent:A.b,MessageEvent:A.b,MIDIConnectionEvent:A.b,MIDIMessageEvent:A.b,MutationEvent:A.b,NotificationEvent:A.b,PageTransitionEvent:A.b,PaymentRequestEvent:A.b,PaymentRequestUpdateEvent:A.b,PopStateEvent:A.b,PresentationConnectionAvailableEvent:A.b,PresentationConnectionCloseEvent:A.b,ProgressEvent:A.b,PromiseRejectionEvent:A.b,PushEvent:A.b,RTCDataChannelEvent:A.b,RTCDTMFToneChangeEvent:A.b,RTCPeerConnectionIceEvent:A.b,RTCTrackEvent:A.b,SecurityPolicyViolationEvent:A.b,SensorErrorEvent:A.b,SpeechRecognitionError:A.b,SpeechRecognitionEvent:A.b,SpeechSynthesisEvent:A.b,StorageEvent:A.b,SyncEvent:A.b,TrackEvent:A.b,TransitionEvent:A.b,WebKitTransitionEvent:A.b,VRDeviceEvent:A.b,VRDisplayEvent:A.b,VRSessionEvent:A.b,MojoInterfaceRequestEvent:A.b,ResourceProgressEvent:A.b,USBConnectionEvent:A.b,IDBVersionChangeEvent:A.b,AudioProcessingEvent:A.b,OfflineAudioCompletionEvent:A.b,WebGLContextEvent:A.b,Event:A.b,InputEvent:A.b,SubmitEvent:A.b,EventTarget:A.i,HTMLFormElement:A.aY,HTMLImageElement:A.Y,HTMLAudioElement:A.a_,HTMLMediaElement:A.a_,MouseEvent:A.F,DragEvent:A.F,PointerEvent:A.F,WheelEvent:A.F,Document:A.o,DocumentFragment:A.o,HTMLDocument:A.o,ShadowRoot:A.o,XMLDocument:A.o,Attr:A.o,DocumentType:A.o,Node:A.o,HTMLSelectElement:A.bc,CompositionEvent:A.A,FocusEvent:A.A,KeyboardEvent:A.A,TextEvent:A.A,TouchEvent:A.A,UIEvent:A.A,HTMLVideoElement:A.bl,Window:A.av,DOMWindow:A.av,ClientRect:A.aw,DOMRect:A.aw})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,GeolocationPositionError:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLCanvasElement:true,CanvasGradient:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,DOMException:true,DOMRectReadOnly:false,MathMLElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,EventTarget:false,HTMLFormElement:true,HTMLImageElement:true,HTMLAudioElement:true,HTMLMediaElement:false,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,HTMLSelectElement:true,CompositionEvent:true,FocusEvent:true,KeyboardEvent:true,TextEvent:true,TouchEvent:true,UIEvent:false,HTMLVideoElement:true,Window:true,DOMWindow:true,ClientRect:true,DOMRect:true})})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var t=A.ft
if(typeof dartMainRunner==="function")dartMainRunner(t,[])
else t([])})})()
//# sourceMappingURL=main.js.map
