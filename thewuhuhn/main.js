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
a[c]=function(){a[c]=function(){A.fP(b)}
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
if(a[b]!==t)A.fQ(b)
a[b]=s}var r=a[b]
a[c]=function(){return r}
return r}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t)convertToFastObject(a[t])}var y=0
function instanceTearOffGetter(a,b){var t=null
return a?function(c){if(t===null)t=A.cT(b)
return new t(c,this)}:function(){if(t===null)t=A.cT(b)
return new t(this,null)}}function staticTearOffGetter(a){var t=null
return function(){if(t===null)t=A.cT(a).prototype
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
a(hunkHelpers,v,w,$)}var A={cI:function cI(){},
N(a){return new A.ap("Field '"+a+"' has not been initialized.")},
ax(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
dl(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
ev(a,b,c){return A.dl(A.ax(A.ax(c,a),b))},
dm(a,b,c,d,e){return A.dl(A.ax(A.ax(A.ax(A.ax(e,a),b),c),d))},
dN(a,b,c){return a},
ap:function ap(a){this.a=a},
ca:function ca(){},
al:function al(){},
I:function I(a,b,c){this.a=a
this.b=b
this.$ti=c},
E:function E(a,b,c){this.a=a
this.b=b
this.$ti=c},
az:function az(a,b){this.a=a
this.$ti=b},
aA:function aA(a,b){this.a=a
this.$ti=b},
dU(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
e(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.bS(a)
return t},
bo(a){var t,s=$.de
if(s==null)s=$.de=Symbol("identityHashCode")
t=a[s]
if(t==null){t=Math.random()*0x3fffffff|0
a[s]=t}return t},
c9(a){return A.ep(a)},
ep(a){var t,s,r,q
if(a instanceof A.j)return A.y(A.bR(a),null)
t=J.ah(a)
if(t===B.B||t===B.D||u.J.b(a)){s=B.n(a)
if(s!=="Object"&&s!=="")return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&q!=="Object"&&q!=="")return q}}return A.y(A.bR(a),null)},
m(a,b){if(a==null)J.d0(a)
throw A.d(A.fz(a,b))},
fz(a,b){var t,s="index"
if(!A.dI(b))return new A.Z(!0,b,s,null)
t=A.cy(J.d0(a))
if(b<0||b>=t)return A.d9(b,t,a,s)
return new A.ac(null,null,!0,b,s,"Value not in range")},
d(a){var t,s
if(a==null)a=new A.bl()
t=new Error()
t.dartException=a
s=A.fR
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:s})
t.name=""}else t.toString=s
return t},
fR(){return J.bS(this.dartException)},
F(a){throw A.d(a)},
o(a){throw A.d(A.b5(a))},
R(a){var t,s,r,q,p,o
a=A.fO(a.replace(String({}),"$receiver$"))
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=A.q([],u.s)
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new A.cg(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),s,r,q,p,o)},
ch(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
dp(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
cJ(a,b){var t=b==null,s=t?null:b.method
return new A.bh(a,s,t?null:b.receiver)},
fT(a){if(a==null)return new A.c5(a)
if(typeof a!=="object")return a
if("dartException" in a)return A.a8(a,a.dartException)
return A.fs(a)},
a8(a,b){if(u.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
fs(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((B.b.aC(s,16)&8191)===10)switch(r){case 438:return A.a8(a,A.cJ(A.e(t)+" (Error "+r+")",f))
case 445:case 5007:q=A.e(t)
return A.a8(a,new A.at(q+" (Error "+r+")",f))}}if(a instanceof TypeError){p=$.dW()
o=$.dX()
n=$.dY()
m=$.dZ()
l=$.e1()
k=$.e2()
j=$.e0()
$.e_()
i=$.e4()
h=$.e3()
g=p.C(t)
if(g!=null)return A.a8(a,A.cJ(A.bO(t),g))
else{g=o.C(t)
if(g!=null){g.method="call"
return A.a8(a,A.cJ(A.bO(t),g))}else{g=n.C(t)
if(g==null){g=m.C(t)
if(g==null){g=l.C(t)
if(g==null){g=k.C(t)
if(g==null){g=j.C(t)
if(g==null){g=m.C(t)
if(g==null){g=i.C(t)
if(g==null){g=h.C(t)
q=g!=null}else q=!0}else q=!0}else q=!0}else q=!0}else q=!0}else q=!0}else q=!0
if(q){A.bO(t)
return A.a8(a,new A.at(t,g==null?f:g.method))}}}return A.a8(a,new A.bz(typeof t=="string"?t:""))}if(a instanceof RangeError){if(typeof t=="string"&&t.indexOf("call stack")!==-1)return new A.aw()
t=function(b){try{return String(b)}catch(e){}return null}(a)
return A.a8(a,new A.Z(!1,f,f,typeof t=="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t=="string"&&t==="too much recursion")return new A.aw()
return a},
fE(a){var t
if(a==null)return new A.aJ(a)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new A.aJ(a)},
dR(a){if(a==null||typeof a!="object")return J.cH(a)
else return A.bo(a)},
fA(a,b){var t,s=a.length
for(t=0;t<s;++t)b.j(0,a[t])
return b},
fJ(a,b,c,d,e,f){u.Z.a(a)
switch(A.cy(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.d(new A.cp("Unsupported number of arguments for wrapped closure"))},
aU(a,b){var t
if(a==null)return null
t=a.$identity
if(!!t)return t
t=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.fJ)
a.$identity=t
return t},
ed(a1){var t,s,r,q,p,o,n,m,l,k,j=a1.co,i=a1.iS,h=a1.iI,g=a1.nDA,f=a1.aI,e=a1.fs,d=a1.cs,c=e[0],b=d[0],a=j[c],a0=a1.fT
a0.toString
t=i?Object.create(new A.bs().constructor.prototype):Object.create(new A.a9(null,null).constructor.prototype)
t.$initialize=t.constructor
if(i)s=function static_tear_off(){this.$initialize()}
else s=function tear_off(a2,a3){this.$initialize(a2,a3)}
t.constructor=s
s.prototype=t
t.$_name=c
t.$_target=a
r=!i
if(r)q=A.d5(c,a,h,g)
else{t.$static_name=c
q=a}t.$S=A.e9(a0,i,h)
t[b]=q
for(p=q,o=1;o<e.length;++o){n=e[o]
if(typeof n=="string"){m=j[n]
l=n
n=m}else l=""
k=d[o]
if(k!=null){if(r)n=A.d5(l,n,h,g)
t[k]=n}if(o===f)p=n}t.$C=p
t.$R=a1.rC
t.$D=a1.dV
return s},
e9(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.d("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.e7)}throw A.d("Error in functionType of tearoff")},
ea(a,b,c,d){var t=A.d4
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
d5(a,b,c,d){var t,s
if(c)return A.ec(a,b,d)
t=b.length
s=A.ea(t,d,a,b)
return s},
eb(a,b,c,d){var t=A.d4,s=A.e8
switch(b?-1:a){case 0:throw A.d(new A.bp("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,t)
default:return function(e,f,g){return function(){var r=[g(this)]
Array.prototype.push.apply(r,arguments)
return e.apply(f(this),r)}}(d,s,t)}},
ec(a,b,c){var t,s
if($.d2==null)$.d2=A.d1("interceptor")
if($.d3==null)$.d3=A.d1("receiver")
t=b.length
s=A.eb(t,c,a,b)
return s},
cT(a){return A.ed(a)},
e7(a,b){return A.cv(v.typeUniverse,A.bR(a.a),b)},
d4(a){return a.a},
e8(a){return a.b},
d1(a){var t,s,r,q=new A.a9("receiver","interceptor"),p=J.db(Object.getOwnPropertyNames(q),u.X)
for(t=p.length,s=0;s<t;++s){r=p[s]
if(q[r]===a)return r}throw A.d(A.e6("Field name "+a+" not found."))},
dM(a){if(a==null)A.ft("boolean expression must not be null")
return a},
ft(a){throw A.d(new A.bE(a))},
fP(a){throw A.d(new A.b6(a))},
fD(a){return v.getIsolateTag(a)},
ht(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
fL(a){var t,s,r,q,p,o=A.bO($.dP.$1(a)),n=$.cA[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.cF[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=A.f1($.dK.$2(a,o))
if(r!=null){n=$.cA[r]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.cF[r]
if(t!=null)return t
s=v.interceptorsByTag[r]
o=r}}if(s==null)return null
t=s.prototype
q=o[0]
if(q==="!"){n=A.cG(t)
$.cA[o]=n
Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}if(q==="~"){$.cF[o]=t
return t}if(q==="-"){p=A.cG(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return A.dS(a,t)
if(q==="*")throw A.d(A.dq(o))
if(v.leafTags[o]===true){p=A.cG(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return A.dS(a,t)},
dS(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.cX(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
cG(a){return J.cX(a,!1,null,!!a.$ih2)},
fN(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return A.cG(t)
else return J.cX(t,c,null,null)},
fH(){if(!0===$.cV)return
$.cV=!0
A.fI()},
fI(){var t,s,r,q,p,o,n,m
$.cA=Object.create(null)
$.cF=Object.create(null)
A.fG()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.dT.$1(p)
if(o!=null){n=A.fN(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
fG(){var t,s,r,q,p,o,n=B.r()
n=A.ag(B.t,A.ag(B.u,A.ag(B.o,A.ag(B.o,A.ag(B.v,A.ag(B.w,A.ag(B.x(B.n),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.dP=new A.cC(q)
$.dK=new A.cD(p)
$.dT=new A.cE(o)},
ag(a,b){return a(b)||b},
fO(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
cg:function cg(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
at:function at(a,b){this.a=a
this.b=b},
bh:function bh(a,b,c){this.a=a
this.b=b
this.c=c},
bz:function bz(a){this.a=a},
c5:function c5(a){this.a=a},
aJ:function aJ(a){this.a=a
this.b=null},
a0:function a0(){},
b0:function b0(){},
b1:function b1(){},
bu:function bu(){},
bs:function bs(){},
a9:function a9(a,b){this.a=a
this.b=b},
bp:function bp(a){this.a=a},
bE:function bE(a){this.a=a},
cC:function cC(a){this.a=a},
cD:function cD(a){this.a=a},
cE:function cE(a){this.a=a},
fQ(a){return A.F(new A.ap("Field '"+a+"' has been assigned during initialization."))},
l(){return A.F(A.N(""))},
eC(){var t=new A.cn()
return t.b=t},
cn:function cn(){this.b=null},
dg(a,b){var t=b.c
return t==null?b.c=A.cP(a,b.y,!0):t},
df(a,b){var t=b.c
return t==null?b.c=A.aN(a,"d6",[b.y]):t},
dh(a){var t=a.x
if(t===6||t===7||t===8)return A.dh(a.y)
return t===12||t===13},
eu(a){return a.at},
dO(a){return A.bN(v.typeUniverse,a,!1)},
X(a,b,c,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.x
switch(d){case 5:case 1:case 2:case 3:case 4:return b
case 6:t=b.y
s=A.X(a,t,c,a0)
if(s===t)return b
return A.dA(a,s,!0)
case 7:t=b.y
s=A.X(a,t,c,a0)
if(s===t)return b
return A.cP(a,s,!0)
case 8:t=b.y
s=A.X(a,t,c,a0)
if(s===t)return b
return A.dz(a,s,!0)
case 9:r=b.z
q=A.aT(a,r,c,a0)
if(q===r)return b
return A.aN(a,b.y,q)
case 10:p=b.y
o=A.X(a,p,c,a0)
n=b.z
m=A.aT(a,n,c,a0)
if(o===p&&m===n)return b
return A.cN(a,o,m)
case 12:l=b.y
k=A.X(a,l,c,a0)
j=b.z
i=A.fp(a,j,c,a0)
if(k===l&&i===j)return b
return A.dy(a,k,i)
case 13:h=b.z
a0+=h.length
g=A.aT(a,h,c,a0)
p=b.y
o=A.X(a,p,c,a0)
if(g===h&&o===p)return b
return A.cO(a,o,g,!0)
case 14:f=b.y
if(f<a0)return b
e=c[f-a0]
if(e==null)return b
return e
default:throw A.d(A.aY("Attempted to substitute unexpected RTI kind "+d))}},
aT(a,b,c,d){var t,s,r,q,p=b.length,o=A.cw(p)
for(t=!1,s=0;s<p;++s){r=b[s]
q=A.X(a,r,c,d)
if(q!==r)t=!0
o[s]=q}return t?o:b},
fq(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=A.cw(n)
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=A.X(a,p,c,d)
if(o!==p)t=!0
m.splice(s,3,r,q,o)}return t?m:b},
fp(a,b,c,d){var t,s=b.a,r=A.aT(a,s,c,d),q=b.b,p=A.aT(a,q,c,d),o=b.c,n=A.fq(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new A.bI()
t.a=r
t.b=p
t.c=n
return t},
q(a,b){a[v.arrayRti]=b
return a},
fx(a){var t,s=a.$S
if(s!=null){if(typeof s=="number")return A.fF(s)
t=a.$S()
return t}return null},
dQ(a,b){var t
if(A.dh(b))if(a instanceof A.a0){t=A.fx(a)
if(t!=null)return t}return A.bR(a)},
bR(a){var t
if(a instanceof A.j){t=a.$ti
return t!=null?t:A.cQ(a)}if(Array.isArray(a))return A.M(a)
return A.cQ(J.ah(a))},
M(a){var t=a[v.arrayRti],s=u.b
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
aQ(a){var t=a.$ti
return t!=null?t:A.cQ(a)},
cQ(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return A.f9(a,t)},
f9(a,b){var t=a instanceof A.a0?a.__proto__.__proto__.constructor:b,s=A.eX(v.typeUniverse,t.name)
b.$ccache=s
return s},
fF(a){var t,s=v.types,r=s[a]
if(typeof r=="string"){t=A.bN(v.typeUniverse,r,!1)
s[a]=t
return t}return r},
fy(a){var t,s,r,q=a.w
if(q!=null)return q
t=a.at
s=t.replace(/\*/g,"")
if(s===t)return a.w=new A.bM(a)
r=A.bN(v.typeUniverse,s,!0)
q=r.w
return a.w=q==null?r.w=new A.bM(r):q},
fS(a){return A.fy(A.bN(v.typeUniverse,a,!1))},
f8(a){var t,s,r,q,p=this
if(p===u.K)return A.ae(p,a,A.fd)
if(!A.T(p))if(!(p===u._))t=!1
else t=!0
else t=!0
if(t)return A.ae(p,a,A.fh)
t=p.x
s=t===6?p.y:p
if(s===u.S)r=A.dI
else if(s===u.i||s===u.H)r=A.fc
else if(s===u.N)r=A.ff
else r=s===u.w?A.dG:null
if(r!=null)return A.ae(p,a,r)
if(s.x===9){q=s.y
if(s.z.every(A.fK)){p.r="$i"+q
if(q==="aq")return A.ae(p,a,A.fb)
return A.ae(p,a,A.fg)}}else if(t===7)return A.ae(p,a,A.f6)
return A.ae(p,a,A.f4)},
ae(a,b,c){a.b=c
return a.b(b)},
f7(a){var t,s=this,r=A.f3
if(!A.T(s))if(!(s===u._))t=!1
else t=!0
else t=!0
if(t)r=A.f2
else if(s===u.K)r=A.f0
else{t=A.aV(s)
if(t)r=A.f5}s.a=r
return s.a(a)},
bP(a){var t,s=a.x
if(!A.T(a))if(!(a===u._))if(!(a===u.A))if(s!==7)if(!(s===6&&A.bP(a.y)))t=s===8&&A.bP(a.y)||a===u.P||a===u.T
else t=!0
else t=!0
else t=!0
else t=!0
else t=!0
return t},
f4(a){var t=this
if(a==null)return A.bP(t)
return A.i(v.typeUniverse,A.dQ(a,t),null,t,null)},
f6(a){if(a==null)return!0
return this.y.b(a)},
fg(a){var t,s=this
if(a==null)return A.bP(s)
t=s.r
if(a instanceof A.j)return!!a[t]
return!!J.ah(a)[t]},
fb(a){var t,s=this
if(a==null)return A.bP(s)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
t=s.r
if(a instanceof A.j)return!!a[t]
return!!J.ah(a)[t]},
f3(a){var t,s=this
if(a==null){t=A.aV(s)
if(t)return a}else if(s.b(a))return a
A.dE(a,s)},
f5(a){var t=this
if(a==null)return a
else if(t.b(a))return a
A.dE(a,t)},
dE(a,b){throw A.d(A.eM(A.ds(a,A.dQ(a,b),A.y(b,null))))},
ds(a,b,c){var t=A.ba(a)
return t+": type '"+A.y(b==null?A.bR(a):b,null)+"' is not a subtype of type '"+c+"'"},
eM(a){return new A.aL("TypeError: "+a)},
w(a,b){return new A.aL("TypeError: "+A.ds(a,null,b))},
fd(a){return a!=null},
f0(a){if(a!=null)return a
throw A.d(A.w(a,"Object"))},
fh(a){return!0},
f2(a){return a},
dG(a){return!0===a||!1===a},
hi(a){if(!0===a)return!0
if(!1===a)return!1
throw A.d(A.w(a,"bool"))},
hk(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.w(a,"bool"))},
hj(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.w(a,"bool?"))},
eZ(a){if(typeof a=="number")return a
throw A.d(A.w(a,"double"))},
hm(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.w(a,"double"))},
hl(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.w(a,"double?"))},
dI(a){return typeof a=="number"&&Math.floor(a)===a},
cy(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.d(A.w(a,"int"))},
ho(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.w(a,"int"))},
hn(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.w(a,"int?"))},
fc(a){return typeof a=="number"},
hp(a){if(typeof a=="number")return a
throw A.d(A.w(a,"num"))},
hq(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.w(a,"num"))},
f_(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.w(a,"num?"))},
ff(a){return typeof a=="string"},
bO(a){if(typeof a=="string")return a
throw A.d(A.w(a,"String"))},
hr(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.w(a,"String"))},
f1(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.w(a,"String?"))},
dJ(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=s+A.y(a[r],b)
return t},
fk(a,b){var t,s,r,q,p,o,n=a.y,m=a.z
if(""===n)return"("+A.dJ(m,b)+")"
t=m.length
s=n.split(",")
r=s.length-t
for(q="(",p="",o=0;o<t;++o,p=", "){q+=p
if(r===0)q+="{"
q+=A.y(m[o],b)
if(r>=0)q+=" "+s[r];++r}return q+"})"},
dF(a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=", "
if(a5!=null){t=a5.length
if(a4==null){a4=A.q([],u.s)
s=null}else s=a4.length
r=a4.length
for(q=t;q>0;--q)B.a.j(a4,"T"+(r+q))
for(p=u.X,o=u._,n="<",m="",q=0;q<t;++q,m=a2){l=a4.length
k=l-1-q
if(!(k>=0))return A.m(a4,k)
n=B.p.a9(n+m,a4[k])
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
if(m===9){q=A.fr(a.y)
p=a.z
return p.length>0?q+("<"+A.dJ(p,b)+">"):q}if(m===11)return A.fk(a,b)
if(m===12)return A.dF(a,b,null)
if(m===13)return A.dF(a.y,b,a.z)
if(m===14){o=a.y
n=b.length
o=n-1-o
if(!(o>=0&&o<n))return A.m(b,o)
return b[o]}return"?"},
fr(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
eY(a,b){var t=a.tR[b]
for(;typeof t=="string";)t=a.tR[t]
return t},
eX(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return A.bN(a,b,!1)
else if(typeof n=="number"){t=n
s=A.aO(a,5,"#")
r=A.cw(t)
for(q=0;q<t;++q)r[q]=s
p=A.aN(a,b,r)
o[b]=p
return p}else return n},
eV(a,b){return A.dB(a.tR,b)},
eU(a,b){return A.dB(a.eT,b)},
bN(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=A.dx(A.dv(a,null,b,c))
s.set(b,t)
return t},
cv(a,b,c){var t,s,r=b.Q
if(r==null)r=b.Q=new Map()
t=r.get(c)
if(t!=null)return t
s=A.dx(A.dv(a,b,c,!0))
r.set(c,s)
return s},
eW(a,b,c){var t,s,r,q=b.as
if(q==null)q=b.as=new Map()
t=c.at
s=q.get(t)
if(s!=null)return s
r=A.cN(a,b,c.x===10?c.z:[c])
q.set(t,r)
return r},
S(a,b){b.a=A.f7
b.b=A.f8
return b},
aO(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new A.D(null,null)
t.x=b
t.at=c
s=A.S(a,t)
a.eC.set(c,s)
return s},
dA(a,b,c){var t,s=b.at+"*",r=a.eC.get(s)
if(r!=null)return r
t=A.eR(a,b,s,c)
a.eC.set(s,t)
return t},
eR(a,b,c,d){var t,s,r
if(d){t=b.x
if(!A.T(b))s=b===u.P||b===u.T||t===7||t===6
else s=!0
if(s)return b}r=new A.D(null,null)
r.x=6
r.y=b
r.at=c
return A.S(a,r)},
cP(a,b,c){var t,s=b.at+"?",r=a.eC.get(s)
if(r!=null)return r
t=A.eQ(a,b,s,c)
a.eC.set(s,t)
return t},
eQ(a,b,c,d){var t,s,r,q
if(d){t=b.x
if(!A.T(b))if(!(b===u.P||b===u.T))if(t!==7)s=t===8&&A.aV(b.y)
else s=!0
else s=!0
else s=!0
if(s)return b
else if(t===1||b===u.A)return u.P
else if(t===6){r=b.y
if(r.x===8&&A.aV(r.y))return r
else return A.dg(a,b)}}q=new A.D(null,null)
q.x=7
q.y=b
q.at=c
return A.S(a,q)},
dz(a,b,c){var t,s=b.at+"/",r=a.eC.get(s)
if(r!=null)return r
t=A.eO(a,b,s,c)
a.eC.set(s,t)
return t},
eO(a,b,c,d){var t,s,r
if(d){t=b.x
if(!A.T(b))if(!(b===u._))s=!1
else s=!0
else s=!0
if(s||b===u.K)return b
else if(t===1)return A.aN(a,"d6",[b])
else if(b===u.P||b===u.T)return u.Q}r=new A.D(null,null)
r.x=8
r.y=b
r.at=c
return A.S(a,r)},
eS(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new A.D(null,null)
t.x=14
t.y=b
t.at=r
s=A.S(a,t)
a.eC.set(r,s)
return s},
aM(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].at
return t},
eN(a){var t,s,r,q,p,o=a.length
for(t="",s="",r=0;r<o;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
t+=s+q+p+a[r+2].at}return t},
aN(a,b,c){var t,s,r,q=b
if(c.length>0)q+="<"+A.aM(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new A.D(null,null)
s.x=9
s.y=b
s.z=c
if(c.length>0)s.c=c[0]
s.at=q
r=A.S(a,s)
a.eC.set(q,r)
return r},
cN(a,b,c){var t,s,r,q,p,o
if(b.x===10){t=b.y
s=b.z.concat(c)}else{s=c
t=b}r=t.at+(";<"+A.aM(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new A.D(null,null)
p.x=10
p.y=t
p.z=s
p.at=r
o=A.S(a,p)
a.eC.set(r,o)
return o},
eT(a,b,c){var t,s,r="+"+(b+"("+A.aM(c)+")"),q=a.eC.get(r)
if(q!=null)return q
t=new A.D(null,null)
t.x=11
t.y=b
t.z=c
t.at=r
s=A.S(a,t)
a.eC.set(r,s)
return s},
dy(a,b,c){var t,s,r,q,p,o=b.at,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+A.aM(n)
if(k>0){t=m>0?",":""
h+=t+"["+A.aM(l)+"]"}if(i>0){t=m>0?",":""
h+=t+"{"+A.eN(j)+"}"}s=o+(h+")")
r=a.eC.get(s)
if(r!=null)return r
q=new A.D(null,null)
q.x=12
q.y=b
q.z=c
q.at=s
p=A.S(a,q)
a.eC.set(s,p)
return p},
cO(a,b,c,d){var t,s=b.at+("<"+A.aM(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=A.eP(a,b,c,s,d)
a.eC.set(s,t)
return t},
eP(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=A.cw(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.x===1){s[q]=p;++r}}if(r>0){o=A.X(a,b,s,0)
n=A.aT(a,c,s,0)
return A.cO(a,o,n,c!==n)}}m=new A.D(null,null)
m.x=13
m.y=b
m.z=c
m.at=d
return A.S(a,m)},
dv(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
dx(a){var t,s,r,q,p,o,n,m,l,k=a.r,j=a.s
for(t=k.length,s=0;s<t;){r=k.charCodeAt(s)
if(r>=48&&r<=57)s=A.eG(s+1,r,k,j)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124)s=A.dw(a,s,k,j,!1)
else if(r===46)s=A.dw(a,s,k,j,!0)
else{++s
switch(r){case 44:break
case 58:j.push(!1)
break
case 33:j.push(!0)
break
case 59:j.push(A.W(a.u,a.e,j.pop()))
break
case 94:j.push(A.eS(a.u,j.pop()))
break
case 35:j.push(A.aO(a.u,5,"#"))
break
case 64:j.push(A.aO(a.u,2,"@"))
break
case 126:j.push(A.aO(a.u,3,"~"))
break
case 60:j.push(a.p)
a.p=j.length
break
case 62:q=a.u
p=j.splice(a.p)
A.cM(a.u,a.e,p)
a.p=j.pop()
o=j.pop()
if(typeof o=="string")j.push(A.aN(q,o,p))
else{n=A.W(q,a.e,o)
switch(n.x){case 12:j.push(A.cO(q,n,p,a.n))
break
default:j.push(A.cN(q,n,p))
break}}break
case 38:A.eH(a,j)
break
case 42:q=a.u
j.push(A.dA(q,A.W(q,a.e,j.pop()),a.n))
break
case 63:q=a.u
j.push(A.cP(q,A.W(q,a.e,j.pop()),a.n))
break
case 47:q=a.u
j.push(A.dz(q,A.W(q,a.e,j.pop()),a.n))
break
case 40:j.push(-3)
j.push(a.p)
a.p=j.length
break
case 41:A.eF(a,j)
break
case 91:j.push(a.p)
a.p=j.length
break
case 93:p=j.splice(a.p)
A.cM(a.u,a.e,p)
a.p=j.pop()
j.push(p)
j.push(-1)
break
case 123:j.push(a.p)
a.p=j.length
break
case 125:p=j.splice(a.p)
A.eJ(a.u,a.e,p)
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
return A.W(a.u,a.e,l)},
eG(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
dw(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36||s===124))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.x===10)p=p.y
o=A.eY(t,p.y)[q]
if(o==null)A.F('No "'+q+'" in "'+A.eu(p)+'"')
d.push(A.cv(t,p,o))}else d.push(q)
return n},
eF(a,b){var t,s,r,q,p,o=null,n=a.u,m=b.pop()
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
t=s}r=A.eE(a,b)
m=b.pop()
switch(m){case-3:m=b.pop()
if(t==null)t=n.sEA
if(s==null)s=n.sEA
q=A.W(n,a.e,m)
p=new A.bI()
p.a=r
p.b=t
p.c=s
b.push(A.dy(n,q,p))
return
case-4:b.push(A.eT(n,b.pop(),r))
return
default:throw A.d(A.aY("Unexpected state under `()`: "+A.e(m)))}},
eH(a,b){var t=b.pop()
if(0===t){b.push(A.aO(a.u,1,"0&"))
return}if(1===t){b.push(A.aO(a.u,4,"1&"))
return}throw A.d(A.aY("Unexpected extended operation "+A.e(t)))},
eE(a,b){var t=b.splice(a.p)
A.cM(a.u,a.e,t)
a.p=b.pop()
return t},
W(a,b,c){if(typeof c=="string")return A.aN(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.eI(a,b,c)}else return c},
cM(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=A.W(a,b,c[t])},
eJ(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=A.W(a,b,c[t])},
eI(a,b,c){var t,s,r=b.x
if(r===10){if(c===0)return b.y
t=b.z
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.y
r=b.x}else if(c===0)return b
if(r!==9)throw A.d(A.aY("Indexed base must be an interface type"))
t=b.z
if(c<=t.length)return t[c-1]
throw A.d(A.aY("Bad index "+c+" for "+b.h(0)))},
i(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
if(b===d)return!0
if(!A.T(d))if(!(d===u._))t=!1
else t=!0
else t=!0
if(t)return!0
s=b.x
if(s===4)return!0
if(A.T(b))return!1
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
if(q===6){t=A.dg(a,d)
return A.i(a,b,c,t,e)}if(s===8){if(!A.i(a,b.y,c,d,e))return!1
return A.i(a,A.df(a,b),c,d,e)}if(s===7){t=A.i(a,u.P,c,d,e)
return t&&A.i(a,b.y,c,d,e)}if(q===8){if(A.i(a,b,c,d.y,e))return!0
return A.i(a,b,c,A.df(a,d),e)}if(q===7){t=A.i(a,b,c,u.P,e)
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
if(!A.i(a,l,c,k,e)||!A.i(a,k,e,l,c))return!1}return A.dH(a,b.y,c,d.y,e)}if(q===12){if(b===u.g)return!0
if(t)return!1
return A.dH(a,b,c,d,e)}if(s===9){if(q!==9)return!1
return A.fa(a,b,c,d,e)}t=s===11
if(t&&d===u.L)return!0
if(t&&q===11)return A.fe(a,b,c,d,e)
return!1},
dH(a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
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
fa(a,b,c,d,e){var t,s,r,q,p,o,n,m=b.y,l=d.y
for(;m!==l;){t=a.tR[m]
if(t==null)return!1
if(typeof t=="string"){m=t
continue}s=t[l]
if(s==null)return!1
r=s.length
q=r>0?new Array(r):v.typeUniverse.sEA
for(p=0;p<r;++p)q[p]=A.cv(a,b,s[p])
return A.dC(a,q,null,c,d.z,e)}o=b.z
n=d.z
return A.dC(a,o,null,c,n,e)},
dC(a,b,c,d,e,f){var t,s,r,q=b.length
for(t=0;t<q;++t){s=b[t]
r=e[t]
if(!A.i(a,s,d,r,f))return!1}return!0},
fe(a,b,c,d,e){var t,s=b.z,r=d.z,q=s.length
if(q!==r.length)return!1
if(b.y!==d.y)return!1
for(t=0;t<q;++t)if(!A.i(a,s[t],c,r[t],e))return!1
return!0},
aV(a){var t,s=a.x
if(!(a===u.P||a===u.T))if(!A.T(a))if(s!==7)if(!(s===6&&A.aV(a.y)))t=s===8&&A.aV(a.y)
else t=!0
else t=!0
else t=!0
else t=!0
return t},
fK(a){var t
if(!A.T(a))if(!(a===u._))t=!1
else t=!0
else t=!0
return t},
T(a){var t=a.x
return t===2||t===3||t===4||t===5||a===u.X},
dB(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
cw(a){return a>0?new Array(a):v.typeUniverse.sEA},
D:function D(a,b){var _=this
_.a=a
_.b=b
_.w=_.r=_.c=null
_.x=0
_.at=_.as=_.Q=_.z=_.y=null},
bI:function bI(){this.c=this.b=this.a=null},
bM:function bM(a){this.a=a},
bH:function bH(){},
aL:function aL(a){this.a=a},
ey(){var t,s,r={}
if(self.scheduleImmediate!=null)return A.fu()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
r.a=null
new self.MutationObserver(A.aU(new A.ck(r),1)).observe(t,{childList:true})
return new A.cj(r,t,s)}else if(self.setImmediate!=null)return A.fv()
return A.fw()},
ez(a){self.scheduleImmediate(A.aU(new A.cl(u.M.a(a)),0))},
eA(a){self.setImmediate(A.aU(new A.cm(u.M.a(a)),0))},
eB(a){u.M.a(a)
A.eK(0,a)},
dn(a,b){var t=B.b.K(a.a,1000)
return A.eL(t<0?0:t,b)},
eK(a,b){var t=new A.aK(!0)
t.ao(a,b)
return t},
eL(a,b){var t=new A.aK(!1)
t.ap(a,b)
return t},
fj(){var t,s
for(t=$.af;t!=null;t=$.af){$.aS=null
s=t.b
$.af=s
if(s==null)$.aR=null
t.a.$0()}},
fo(){$.cR=!0
try{A.fj()}finally{$.aS=null
$.cR=!1
if($.af!=null)$.cY().$1(A.dL())}},
fn(a){var t,s,r,q,p,o=$.af
if(o==null){t=new A.bF(a)
s=$.aR
if(s==null){$.af=$.aR=t
if(!$.cR)$.cY().$1(A.dL())}else $.aR=s.b=t
$.aS=$.aR
return}r=new A.bF(a)
q=$.aS
if(q==null){r.b=o
$.af=$.aS=r}else{p=q.b
r.b=p
$.aS=q.b=r
if(p==null)$.aR=r}},
ex(a,b){var t=$.bD
if(t===B.l)return A.dn(a,u.F.a(b))
return A.dn(a,u.F.a(t.aE(b,u.G)))},
fl(a,b){A.fn(new A.cz(a,b))},
fm(a,b,c,d,e,f,g){var t,s=$.bD
if(s===c)return d.$1(e)
$.bD=c
t=s
try{s=d.$1(e)
return s}finally{$.bD=t}},
ck:function ck(a){this.a=a},
cj:function cj(a,b,c){this.a=a
this.b=b
this.c=c},
cl:function cl(a){this.a=a},
cm:function cm(a){this.a=a},
aK:function aK(a){this.a=a
this.b=null
this.c=0},
cu:function cu(a,b){this.a=a
this.b=b},
ct:function ct(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bF:function bF(a){this.a=a
this.b=null},
cx:function cx(){},
cz:function cz(a,b){this.a=a
this.b=b},
cr:function cr(){},
cs:function cs(a,b,c){this.a=a
this.b=b
this.c=c},
eh(a,b){return new A.aD(a.i("@<0>").av(b).i("aD<1,2>"))},
dt(a,b){var t=a[b]
return t===a?null:t},
cK(a,b,c){if(c==null)a[b]=a
else a[b]=c},
du(){var t=Object.create(null)
A.cK(t,"<non-identifier-key>",t)
delete t["<non-identifier-key>"]
return t},
ek(a,b){return b.i("dc<0>").a(A.fA(a,new A.aG(b.i("aG<0>"))))},
cL(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
ei(a,b,c){var t,s
if(A.cS(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=A.q([],u.s)
B.a.j($.A,a)
try{A.fi(a,t)}finally{if(0>=$.A.length)return A.m($.A,-1)
$.A.pop()}s=A.dk(b,u.U.a(t),", ")+c
return s.charCodeAt(0)==0?s:s},
da(a,b,c){var t,s
if(A.cS(a))return b+"..."+c
t=new A.bt(b)
B.a.j($.A,a)
try{s=t
s.a=A.dk(s.a,a,", ")}finally{if(0>=$.A.length)return A.m($.A,-1)
$.A.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
cS(a){var t,s
for(t=$.A.length,s=0;s<t;++s)if(a===$.A[s])return!0
return!1},
fi(a,b){var t,s,r,q,p,o,n,m=a.gB(a),l=0,k=0
while(!0){if(!(l<80||k<3))break
if(!m.l())return
t=A.e(m.gu())
B.a.j(b,t)
l+=t.length+2;++k}if(!m.l()){if(k<=5)return
if(0>=b.length)return A.m(b,-1)
s=b.pop()
if(0>=b.length)return A.m(b,-1)
r=b.pop()}else{q=m.gu();++k
if(!m.l()){if(k<=4){B.a.j(b,A.e(q))
return}s=A.e(q)
if(0>=b.length)return A.m(b,-1)
r=b.pop()
l+=s.length+2}else{p=m.gu();++k
for(;m.l();q=p,p=o){o=m.gu();++k
if(k>100){while(!0){if(!(l>75&&k>3))break
if(0>=b.length)return A.m(b,-1)
l-=b.pop().length+2;--k}B.a.j(b,"...")
return}}r=A.e(q)
s=A.e(p)
l+=s.length+r.length+4}}if(k>b.length+2){l+=5
n="..."}else n=null
while(!0){if(!(l>80&&b.length>3))break
if(0>=b.length)return A.m(b,-1)
l-=b.pop().length+2
if(n==null){l+=5
n="..."}}if(n!=null)B.a.j(b,n)
B.a.j(b,r)
B.a.j(b,s)},
eo(a){var t,s={}
if(A.cS(a))return"{...}"
t=new A.bt("")
try{B.a.j($.A,a)
t.a+="{"
s.a=!0
a.a4(0,new A.c4(s,t))
t.a+="}"}finally{if(0>=$.A.length)return A.m($.A,-1)
$.A.pop()}s=t.a
return s.charCodeAt(0)==0?s:s},
aD:function aD(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
aE:function aE(a,b){this.a=a
this.$ti=b},
aF:function aF(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aG:function aG(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bK:function bK(a){this.a=a
this.b=null},
aH:function aH(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
ar:function ar(){},
c4:function c4(a,b){this.a=a
this.b=b},
as:function as(){},
av:function av(){},
aI:function aI(){},
aP:function aP(){},
ee(a){if(a instanceof A.a0)return a.h(0)
return"Instance of '"+A.c9(a)+"'"},
ef(a,b){a=A.d(a)
if(a==null)a=u.K.a(a)
a.stack=b.h(0)
throw a
throw A.d("unreachable")},
em(a,b,c){var t
if(a>4294967295)A.F(A.es(a,0,4294967295,"length",null))
t=J.ej(new Array(a),c)
return t},
en(a,b,c){var t=A.el(a,c)
return t},
el(a,b){var t,s
if(Array.isArray(a))return A.q(a.slice(0),b.i("n<0>"))
t=A.q([],b.i("n<0>"))
for(s=J.d_(a);s.l();)B.a.j(t,s.gu())
return t},
dk(a,b,c){var t=J.d_(b)
if(!t.l())return a
if(c.length===0){do a+=A.e(t.gu())
while(t.l())}else{a+=A.e(t.gu())
for(;t.l();)a=a+c+A.e(t.gu())}return a},
ba(a){if(typeof a=="number"||A.dG(a)||a==null)return J.bS(a)
if(typeof a=="string")return JSON.stringify(a)
return A.ee(a)},
aY(a){return new A.ai(a)},
e6(a){return new A.Z(!1,null,null,a)},
er(a){var t=null
return new A.ac(t,t,!1,t,t,a)},
es(a,b,c,d,e){return new A.ac(b,c,!0,a,d,"Invalid value")},
et(a,b){return a},
d9(a,b,c,d){return new A.bd(b,!0,a,d,"Index out of range")},
a7(a){return new A.bA(a)},
dq(a){return new A.by(a)},
b5(a){return new A.b4(a)},
dd(a,b,c,d){var t=A.dm(B.d.gk(a),B.d.gk(b),B.d.gk(c),B.d.gk(d),$.e5())
return t},
b9:function b9(a){this.a=a},
co:function co(){},
h:function h(){},
ai:function ai(a){this.a=a},
bx:function bx(){},
bl:function bl(){},
Z:function Z(a,b,c,d){var _=this
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
bd:function bd(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
bA:function bA(a){this.a=a},
by:function by(a){this.a=a},
b4:function b4(a){this.a=a},
bm:function bm(){},
aw:function aw(){},
b6:function b6(a){this.a=a},
cp:function cp(a){this.a=a},
t:function t(){},
C:function C(){},
G:function G(){},
j:function j(){},
bt:function bt(a){this.a=a},
dD(a){var t
if("postMessage" in a){t=A.eD(a)
return t}else return u.O.a(a)},
eD(a){if(a===window)return u.y.a(a)
else return new A.bG()},
c:function c(){},
aW:function aW(){},
aX:function aX(){},
a_:function a_(){},
aZ:function aZ(){},
aj:function aj(){},
J:function J(){},
bY:function bY(){},
ak:function ak(){},
a:function a(){},
b:function b(){},
k:function k(){},
bb:function bb(){},
a2:function a2(){},
a4:function a4(){},
L:function L(){},
x:function x(){},
bq:function bq(){},
H:function H(){},
bB:function bB(){},
aB:function aB(){},
aC:function aC(){},
bG:function bG(){},
au(a,b,c,d,e){var t,s
if(c<0)t=c===-1/0?0:-c*0
else t=c+0
e.a(t)
if(d<0)s=d===-1/0?0:-d*0
else s=d+0
return new A.P(a,b,t,e.a(s),e.i("P<0>"))},
bJ:function bJ(){},
a5:function a5(a,b,c){this.a=a
this.b=b
this.$ti=c},
bL:function bL(){},
P:function P(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bT:function bT(){},
bU:function bU(a,b,c){var _=this
_.b=a
_.c=b
_.e=c
_.r=0},
bV:function bV(){},
bW:function bW(){},
c8:function c8(a){this.b=a},
b2:function b2(){var _=this
_.y=!1
_.f=_.e=_.d=_.c=_.b=_.a=0
_.r=!0
_.w=!1
_.x=0},
U:function U(a){this.b=a},
bX:function bX(){},
b7:function b7(){var _=this
_.y=!1
_.f=_.e=_.d=_.c=_.b=_.a=0
_.r=!0
_.w=!1
_.x=0},
r:function r(){},
bZ:function bZ(a){this.a=a},
bc:function bc(a,b,c,d,e,f){var _=this
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
c_:function c_(a){this.a=a},
eg(a,b,c,d){var t,s,r,q,p=new A.aa()
p.a=a
p.b=b
p.c=c
p.d=d
t=A.cb()
p.z=t
s=A.cb()
p.Q=s
r=a-9
q=b-5
t.t(r,q)
s.t(r+c,q)
return p},
aa:function aa(){var _=this
_.y=!1
_.Q=_.z=$
_.f=_.e=_.d=_.c=_.b=_.a=0
_.r=!0
_.w=!1
_.x=0},
cb(){var t=new A.br(B.e,A.q([],u.I))
t.an()
return t},
dr(a,b,c,d){var t=new A.ay(B.e)
t.am(a,b,c,d)
t.Q=!0
t.f=5
t.z=0
return t},
bC:function bC(a,b,c,d){var _=this
_.e=a
_.f=b
_.r=c
_.a=d
_.c=_.b=0
_.d=!1},
br:function br(a,b){var _=this
_.e=a
_.r=0
_.a=b
_.c=_.b=0
_.d=!1},
cc:function cc(){},
cd:function cd(){},
ce:function ce(){},
bk:function bk(a,b){var _=this
_.e=a
_.a=b
_.c=_.b=0
_.d=!1},
bi:function bi(a,b){var _=this
_.e=a
_.a=b
_.c=_.b=0
_.d=!1},
c1:function c1(){},
c2:function c2(){},
c3:function c3(){},
bj:function bj(a,b){var _=this
_.e=a
_.a=b
_.c=_.b=0
_.d=!1},
b8:function b8(a,b){var _=this
_.e=a
_.a=b
_.c=_.b=0
_.d=!1},
b3:function b3(a,b){var _=this
_.e=a
_.a=b
_.c=_.b=0
_.d=!1},
v:function v(){},
c6:function c6(){},
u:function u(){var _=this
_.z=_.y=0
_.Q=!1
_.f=_.e=_.d=_.c=_.b=_.a=_.as=0
_.r=!0
_.w=!1
_.x=0},
ay:function ay(a){var _=this
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
c7:function c7(a){this.a=a},
bw:function bw(){var _=this
_.y=0
_.Q=$
_.f=_.e=_.d=_.c=_.b=_.a=0
_.r=!0
_.w=!1
_.x=0},
B(a){var t=document.createElement("img")
B.A.sac(t,"./assets/img/"+a+".png")
$.f.A().aa(0,a,t)},
fM(){var t,s,r,q,p="rgb(66, 205, 255)",o="rgb(0, 131, 179)",n=u.E.a(document.querySelector("#canvas")),m=n.getContext("2d")
B.c.saJ(m,"high")
t=A.q([],u.n)
s=A.q([],u.a)
r=new A.O(B.h)
r.X(150,300,50,50)
q=new A.bc(30,n,m,t,s,r)
q.aG()
$.f.b=A.eh(u.N,u.R)
A.B("bubbles")
A.B("player_left")
A.B("player_right")
A.B("rock")
A.B("waterfall")
A.B("coin")
A.B("coin_mirrored")
A.B("coin_particle")
A.B("jump_item")
A.B("double_jump_particle")
A.B("branch")
A.B("leaf")
A.B("leaf_mirrored")
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
t=new A.bj(B.e,A.q([],m))
t.ak()
q.w=t
t=new A.bi(B.e,A.q([],m))
t.aj()
q.x=t
t=new A.b3(B.e,A.q([],m))
t.ag()
q.y=t
t=new A.b8(B.e,A.q([],m))
t.ah()
q.Q=t
m=A.q([],m)
t=new A.bC(new A.bT(),B.e,900,m)
t.d=!0
B.a.j(m,A.dr(0,-900,1,1))
B.a.j(m,A.dr(0,0,1,1))
q.z=t
B.a.j(s,q.w)
B.a.j(s,q.x)
B.a.j(s,q.z)
B.a.j(s,q.y)
B.a.j(s,q.Q)
q.W(0)}},J={
cX(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cU(a){var t,s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.cV==null){A.fH()
o=a[v.dispatchPropertyName]}if(o!=null){t=o.p
if(!1===t)return o.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return o.i
if(o.e===s)throw A.d(A.dq("Return interceptor for "+A.e(t(a,o))))}r=a.constructor
if(r==null)q=null
else{p=$.cq
if(p==null)p=$.cq=v.getIsolateTag("_$dart_js")
q=r[p]}if(q!=null)return q
q=A.fL(a)
if(q!=null)return q
if(typeof a=="function")return B.C
t=Object.getPrototypeOf(a)
if(t==null)return B.q
if(t===Object.prototype)return B.q
if(typeof r=="function"){p=$.cq
if(p==null)p=$.cq=v.getIsolateTag("_$dart_js")
Object.defineProperty(r,p,{value:B.m,enumerable:false,writable:true,configurable:true})
return B.m}return B.m},
ej(a,b){return J.db(A.q(a,b.i("n<0>")),b)},
db(a,b){a.fixed$length=Array
return a},
ah(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.an.prototype
return J.bg.prototype}if(typeof a=="string")return J.ab.prototype
if(a==null)return J.bf.prototype
if(typeof a=="boolean")return J.be.prototype
if(a.constructor==Array)return J.n.prototype
if(typeof a!="object"){if(typeof a=="function")return J.V.prototype
return a}if(a instanceof A.j)return a
return J.cU(a)},
fB(a){if(a==null)return a
if(a.constructor==Array)return J.n.prototype
if(!(a instanceof A.j))return J.ad.prototype
return a},
fC(a){if(typeof a=="string")return J.ab.prototype
if(a==null)return a
if(a.constructor==Array)return J.n.prototype
if(typeof a!="object"){if(typeof a=="function")return J.V.prototype
return a}if(a instanceof A.j)return a
return J.cU(a)},
cB(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.V.prototype
return a}if(a instanceof A.j)return a
return J.cU(a)},
cZ(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.ah(a).D(a,b)},
cH(a){return J.ah(a).gk(a)},
d_(a){return J.fB(a).gB(a)},
d0(a){return J.fC(a).gq(a)},
bS(a){return J.ah(a).h(a)},
am:function am(){},
be:function be(){},
bf:function bf(){},
K:function K(){},
a3:function a3(){},
bn:function bn(){},
ad:function ad(){},
V:function V(){},
n:function n(a){this.$ti=a},
c0:function c0(a){this.$ti=a},
p:function p(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ao:function ao(){},
an:function an(){},
bg:function bg(){},
ab:function ab(){}},B={}
var w=[A,J,B]
var $={}
A.cI.prototype={}
J.am.prototype={
D(a,b){return a===b},
gk(a){return A.bo(a)},
h(a){return"Instance of '"+A.c9(a)+"'"}}
J.be.prototype={
h(a){return String(a)},
gk(a){return a?519018:218159},
$iz:1}
J.bf.prototype={
D(a,b){return null==b},
h(a){return"null"},
gk(a){return 0}}
J.K.prototype={}
J.a3.prototype={
gk(a){return 0},
h(a){return String(a)}}
J.bn.prototype={}
J.ad.prototype={}
J.V.prototype={
h(a){var t=a[$.dV()]
if(t==null)return this.ae(a)
return"JavaScript function for "+J.bS(t)},
$ia1:1}
J.n.prototype={
j(a,b){A.M(a).c.a(b)
if(!!a.fixed$length)A.F(A.a7("add"))
a.push(b)},
aD(a,b){var t,s
A.M(a).i("z(1)").a(b)
t=a.length
for(s=0;s<t;++s){if(A.dM(b.$1(a[s])))return!0
if(a.length!==t)throw A.d(A.b5(a))}return!1},
h(a){return A.da(a,"[","]")},
gB(a){return new J.p(a,a.length,A.M(a).i("p<1>"))},
gk(a){return A.bo(a)},
gq(a){return a.length},
$it:1,
$iaq:1}
J.c0.prototype={}
J.p.prototype={
gu(){var t=this.d
return t==null?this.$ti.c.a(t):t},
l(){var t,s=this,r=s.a,q=r.length
if(s.b!==q)throw A.d(A.o(r))
t=s.c
if(t>=q){s.sa0(null)
return!1}s.sa0(r[t]);++s.c
return!0},
sa0(a){this.d=this.$ti.i("1?").a(a)},
$iC:1}
J.ao.prototype={
a8(a){var t
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){t=a<0?Math.ceil(a):Math.floor(a)
return t+0}throw A.d(A.a7(""+a+".toInt()"))},
aO(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.d(A.a7(""+a+".round()"))},
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
af(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.a1(a,b)},
K(a,b){return(a|0)===a?a/b|0:this.a1(a,b)},
a1(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw A.d(A.a7("Result of truncating division is "+A.e(t)+": "+A.e(a)+" ~/ "+b))},
aC(a,b){var t
if(a>0)t=this.aB(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
aB(a,b){return b>31?0:a>>>b},
$ibQ:1,
$iY:1}
J.an.prototype={$icW:1}
J.bg.prototype={}
J.ab.prototype={
a9(a,b){return a+b},
ab(a,b){var t,s
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.d(B.y)
for(t=a,s="";!0;){if((b&1)===1)s=t+s
b=b>>>1
if(b===0)break
t+=t}return s},
aN(a,b,c){var t=b-a.length
if(t<=0)return a
return this.ab(c,t)+a},
h(a){return a},
gk(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=s+a.charCodeAt(r)&536870911
s=s+((s&524287)<<10)&536870911
s^=s>>6}s=s+((s&67108863)<<3)&536870911
s^=s>>11
return s+((s&16383)<<15)&536870911},
gq(a){return a.length},
$ia6:1}
A.ap.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.ca.prototype={}
A.al.prototype={}
A.I.prototype={
gB(a){var t=this.a
return new A.E(new J.p(t,t.length,A.M(t).i("p<1>")),this.b,this.$ti.i("E<1>"))}}
A.E.prototype={
l(){var t,s,r,q
for(t=this.a,s=this.b,r=t.$ti.c;t.l();){q=t.d
if(A.dM(s.$1(q==null?r.a(q):q)))return!0}return!1},
gu(){var t=this.a,s=t.d
return s==null?t.$ti.c.a(s):s}}
A.az.prototype={
gB(a){var t=this.a
return new A.aA(new J.p(t,t.length,A.M(t).i("p<1>")),this.$ti.i("aA<1>"))}}
A.aA.prototype={
l(){var t,s,r,q
for(t=this.a,s=this.$ti.c,r=t.$ti.c;t.l();){q=t.d
if(s.b(q==null?r.a(q):q))return!0}return!1},
gu(){var t=this.a,s=t.d
t=s==null?t.$ti.c.a(s):s
return this.$ti.c.a(t)},
$iC:1}
A.cg.prototype={
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
A.at.prototype={
h(a){var t=this.b
if(t==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+t+"' on null"}}
A.bh.prototype={
h(a){var t,s=this,r="NoSuchMethodError: method not found: '",q=s.b
if(q==null)return"NoSuchMethodError: "+s.a
t=s.c
if(t==null)return r+q+"' ("+s.a+")"
return r+q+"' on '"+t+"' ("+s.a+")"}}
A.bz.prototype={
h(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
A.c5.prototype={
h(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.aJ.prototype={
h(a){var t,s=this.b
if(s!=null)return s
s=this.a
t=s!==null&&typeof s==="object"?s.stack:null
return this.b=t==null?"":t},
$idj:1}
A.a0.prototype={
h(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+A.dU(s==null?"unknown":s)+"'"},
$ia1:1,
gaR(){return this},
$C:"$1",
$R:1,
$D:null}
A.b0.prototype={$C:"$0",$R:0}
A.b1.prototype={$C:"$2",$R:2}
A.bu.prototype={}
A.bs.prototype={
h(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+A.dU(t)+"'"}}
A.a9.prototype={
D(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.a9))return!1
return this.$_target===b.$_target&&this.a===b.a},
gk(a){return(A.dR(this.a)^A.bo(this.$_target))>>>0},
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.c9(this.a)+"'")}}
A.bp.prototype={
h(a){return"RuntimeError: "+this.a}}
A.bE.prototype={
h(a){return"Assertion failed: "+A.ba(this.a)}}
A.cC.prototype={
$1(a){return this.a(a)},
$S:5}
A.cD.prototype={
$2(a,b){return this.a(a,b)},
$S:6}
A.cE.prototype={
$1(a){return this.a(A.bO(a))},
$S:7}
A.cn.prototype={
A(){var t=this.b
if(t===this)throw A.d(A.N(""))
return t}}
A.D.prototype={
i(a){return A.cv(v.typeUniverse,this,a)},
av(a){return A.eW(v.typeUniverse,this,a)}}
A.bI.prototype={}
A.bM.prototype={
h(a){return A.y(this.a,null)}}
A.bH.prototype={
h(a){return this.a}}
A.aL.prototype={}
A.ck.prototype={
$1(a){var t=this.a,s=t.a
t.a=null
s.$0()},
$S:8}
A.cj.prototype={
$1(a){var t,s
this.a.a=u.M.a(a)
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:9}
A.cl.prototype={
$0(){this.a.$0()},
$S:1}
A.cm.prototype={
$0(){this.a.$0()},
$S:1}
A.aK.prototype={
ao(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(A.aU(new A.cu(this,b),0),a)
else throw A.d(A.a7("`setTimeout()` not found."))},
ap(a,b){if(self.setTimeout!=null)this.b=self.setInterval(A.aU(new A.ct(this,a,Date.now(),b),0),a)
else throw A.d(A.a7("Periodic timer."))},
aF(){if(self.setTimeout!=null){var t=this.b
if(t==null)return
if(this.a)self.clearTimeout(t)
else self.clearInterval(t)
this.b=null}else throw A.d(A.a7("Canceling a timer."))},
$ibv:1}
A.cu.prototype={
$0(){var t=this.a
t.b=null
t.c=1
this.b.$0()},
$S:2}
A.ct.prototype={
$0(){var t,s=this,r=s.a,q=r.c+1,p=s.b
if(p>0){t=Date.now()-s.c
if(t>(q+1)*p)q=B.b.af(t,p)}r.c=q
s.d.$1(r)},
$S:1}
A.bF.prototype={}
A.cx.prototype={}
A.cz.prototype={
$0(){var t=this.a,s=this.b
A.dN(t,"error",u.K)
A.dN(s,"stackTrace",u.l)
A.ef(t,s)},
$S:2}
A.cr.prototype={
aP(a,b,c){var t,s,r
c.i("~(0)").a(a)
c.a(b)
try{if(B.l===$.bD){a.$1(b)
return}A.fm(null,null,this,a,b,u.t,c)}catch(r){t=A.fT(r)
s=A.fE(r)
A.fl(u.K.a(t),u.l.a(s))}},
aE(a,b){return new A.cs(this,b.i("~(0)").a(a),b)}}
A.cs.prototype={
$1(a){var t=this.c
return this.a.aP(this.b,t.a(a),t)},
$S(){return this.c.i("~(0)")}}
A.aD.prototype={
gq(a){return this.a},
ga5(){return new A.aE(this,A.aQ(this).i("aE<1>"))},
p(a,b){var t,s,r
if(typeof b=="string"&&b!=="__proto__"){t=this.b
s=t==null?null:A.dt(t,b)
return s}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
s=r==null?null:A.dt(r,b)
return s}else return this.az(b)},
az(a){var t,s,r=this.d
if(r==null)return null
t=r[this.Z(a)]
s=this.J(t,a)
return s<0?null:t[s+1]},
aa(a,b,c){var t,s=this,r=A.aQ(s)
r.c.a(b)
r.z[1].a(c)
if(b!=="__proto__"){t=s.b
s.au(t==null?s.b=A.du():t,b,c)}else s.aA(b,c)},
aA(a,b){var t,s,r,q,p=this,o=A.aQ(p)
o.c.a(a)
o.z[1].a(b)
t=p.d
if(t==null)t=p.d=A.du()
s=p.Z(a)
r=t[s]
if(r==null){A.cK(t,s,[a,b]);++p.a
p.e=null}else{q=p.J(r,a)
if(q>=0)r[q+1]=b
else{r.push(a,b);++p.a
p.e=null}}},
a4(a,b){var t,s,r,q,p,o,n=this,m=A.aQ(n)
m.i("~(1,2)").a(b)
t=n.a_()
for(s=t.length,r=m.c,m=m.z[1],q=0;q<s;++q){p=t[q]
r.a(p)
o=n.p(0,p)
b.$2(p,o==null?m.a(o):o)
if(t!==n.e)throw A.d(A.b5(n))}},
a_(){var t,s,r,q,p,o,n,m,l,k,j=this,i=j.e
if(i!=null)return i
i=A.em(j.a,null,u.B)
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
au(a,b,c){var t=A.aQ(this)
t.c.a(b)
t.z[1].a(c)
if(a[b]==null){++this.a
this.e=null}A.cK(a,b,c)},
Z(a){return J.cH(a)&1073741823},
J(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;s+=2)if(J.cZ(a[s],b))return s
return-1}}
A.aE.prototype={
gq(a){return this.a.a},
gB(a){var t=this.a
return new A.aF(t,t.a_(),this.$ti.i("aF<1>"))}}
A.aF.prototype={
gu(){var t=this.d
return t==null?this.$ti.c.a(t):t},
l(){var t=this,s=t.b,r=t.c,q=t.a
if(s!==q.e)throw A.d(A.b5(q))
else if(r>=s.length){t.sI(null)
return!1}else{t.sI(s[r])
t.c=r+1
return!0}},
sI(a){this.d=this.$ti.i("1?").a(a)},
$iC:1}
A.aG.prototype={
gB(a){var t=this,s=new A.aH(t,t.r,t.$ti.i("aH<1>"))
s.c=t.e
return s},
gq(a){return this.a},
j(a,b){var t,s,r=this
r.$ti.c.a(b)
if(typeof b=="string"&&b!=="__proto__"){t=r.b
return r.Y(t==null?r.b=A.cL():t,b)}else if(typeof b=="number"&&(b&1073741823)===b){s=r.c
return r.Y(s==null?r.c=A.cL():s,b)}else return r.aq(b)},
aq(a){var t,s,r,q=this
q.$ti.c.a(a)
t=q.d
if(t==null)t=q.d=A.cL()
s=J.cH(a)&1073741823
r=t[s]
if(r==null)t[s]=[q.T(a)]
else{if(q.J(r,a)>=0)return!1
r.push(q.T(a))}return!0},
Y(a,b){this.$ti.c.a(b)
if(u.Y.a(a[b])!=null)return!1
a[b]=this.T(b)
return!0},
T(a){var t=this,s=new A.bK(t.$ti.c.a(a))
if(t.e==null)t.e=t.f=s
else t.f=t.f.b=s;++t.a
t.r=t.r+1&1073741823
return s},
J(a,b){var t,s=a.length
for(t=0;t<s;++t)if(J.cZ(a[t].a,b))return t
return-1},
$idc:1}
A.bK.prototype={}
A.aH.prototype={
gu(){var t=this.d
return t==null?this.$ti.c.a(t):t},
l(){var t=this,s=t.c,r=t.a
if(t.b!==r.r)throw A.d(A.b5(r))
else if(s==null){t.sI(null)
return!1}else{t.sI(t.$ti.i("1?").a(s.a))
t.c=s.b
return!0}},
sI(a){this.d=this.$ti.i("1?").a(a)},
$iC:1}
A.ar.prototype={}
A.c4.prototype={
$2(a,b){var t,s=this.a
if(!s.a)this.b.a+=", "
s.a=!1
s=this.b
t=s.a+=A.e(a)
s.a=t+": "
s.a+=A.e(b)},
$S:10}
A.as.prototype={
a4(a,b){var t,s,r,q=A.aQ(this)
q.i("~(1,2)").a(b)
for(t=this.ga5(),t=t.gB(t),q=q.z[1];t.l();){s=t.gu()
r=this.p(0,s)
b.$2(s,r==null?q.a(r):r)}},
gq(a){var t=this.ga5()
return t.gq(t)},
h(a){return A.eo(this)}}
A.av.prototype={
h(a){return A.da(this,"{","}")}}
A.aI.prototype={$it:1}
A.aP.prototype={}
A.b9.prototype={
D(a,b){if(b==null)return!1
return b instanceof A.b9&&this.a===b.a},
gk(a){return B.b.gk(this.a)},
h(a){var t,s,r,q,p=this.a,o=p<0?"-":"",n=B.b.K(p,36e8)
p%=36e8
if(p<0)p=-p
t=B.b.K(p,6e7)
p%=6e7
s=t<10?"0":""
r=B.b.K(p,1e6)
q=r<10?"0":""
return o+Math.abs(n)+":"+s+t+":"+q+r+"."+B.p.aN(B.b.h(p%1e6),6,"0")}}
A.co.prototype={
h(a){return this.aw()}}
A.h.prototype={}
A.ai.prototype={
h(a){var t=this.a
if(t!=null)return"Assertion failed: "+A.ba(t)
return"Assertion failed"}}
A.bx.prototype={}
A.bl.prototype={
h(a){return"Throw of null."}}
A.Z.prototype={
gS(){return"Invalid argument"+(!this.a?"(s)":"")},
gR(){return""},
h(a){var t=this,s=t.c,r=s==null?"":" ("+s+")",q=t.d,p=q==null?"":": "+q,o=t.gS()+r+p
if(!t.a)return o
return o+t.gR()+": "+A.ba(t.gU())},
gU(){return this.b}}
A.ac.prototype={
gU(){return A.f_(this.b)},
gS(){return"RangeError"},
gR(){var t,s=this.e,r=this.f
if(s==null)t=r!=null?": Not less than or equal to "+A.e(r):""
else if(r==null)t=": Not greater than or equal to "+A.e(s)
else if(r>s)t=": Not in inclusive range "+A.e(s)+".."+A.e(r)
else t=r<s?": Valid value range is empty":": Only valid value is "+A.e(s)
return t}}
A.bd.prototype={
gU(){return A.cy(this.b)},
gS(){return"RangeError"},
gR(){if(A.cy(this.b)<0)return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+t},
gq(a){return this.f}}
A.bA.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.by.prototype={
h(a){return"UnimplementedError: "+this.a}}
A.b4.prototype={
h(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.ba(t)+"."}}
A.bm.prototype={
h(a){return"Out of Memory"},
$ih:1}
A.aw.prototype={
h(a){return"Stack Overflow"},
$ih:1}
A.b6.prototype={
h(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.cp.prototype={
h(a){return"Exception: "+this.a}}
A.t.prototype={
gq(a){var t,s=this.gB(this)
for(t=0;s.l();)++t
return t},
gaK(a){return!this.gB(this).l()},
a3(a,b){var t,s,r
A.et(b,"index")
for(t=this.gB(this),s=0;t.l();){r=t.gu()
if(b===s)return r;++s}throw A.d(A.d9(b,s,this,"index"))},
h(a){return A.ei(this,"(",")")}}
A.C.prototype={}
A.G.prototype={
gk(a){return A.j.prototype.gk.call(this,this)},
h(a){return"null"}}
A.j.prototype={$ij:1,
D(a,b){return this===b},
gk(a){return A.bo(this)},
h(a){return"Instance of '"+A.c9(this)+"'"},
toString(){return this.h(this)}}
A.bt.prototype={
gq(a){return this.a.length},
h(a){var t=this.a
return t.charCodeAt(0)==0?t:t}}
A.c.prototype={}
A.aW.prototype={
h(a){return String(a)}}
A.aX.prototype={
h(a){return String(a)}}
A.a_.prototype={$ia_:1,$ib_:1}
A.aZ.prototype={$iaZ:1}
A.aj.prototype={
sG(a,b){a.fillStyle=b},
saJ(a,b){a.imageSmoothingQuality=b},
F(a,b,c){u.q.a(c)
a.drawImage(b,c.a,c.b,c.c,c.d)},
$iaj:1}
A.J.prototype={
gq(a){return a.length}}
A.bY.prototype={
h(a){return String(a)}}
A.ak.prototype={
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
s=J.cB(b)
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
return A.dd(q,t,s,r)},
ga2(a){var t=a.bottom
t.toString
return t},
gL(a){var t=a.height
t.toString
return t},
gM(a){var t=a.left
t.toString
return t},
ga7(a){var t=a.right
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
ar(a,b,c,d){return a.addEventListener(b,A.aU(u.o.a(c),1),d)},
$ik:1}
A.bb.prototype={
gq(a){return a.length}}
A.a2.prototype={
sac(a,b){a.src=b},
$ia2:1,
$ib_:1}
A.a4.prototype={}
A.L.prototype={
ga6(a){var t,s,r,q,p,o
if(!!a.offsetX)return new A.a5(a.offsetX,a.offsetY,u.p)
else{t=a.target
s=u.h
if(!s.b(A.dD(t)))throw A.d(A.a7("offsetX is only supported on elements"))
r=s.a(A.dD(t))
t=a.clientX
s=a.clientY
q=u.p
p=r.getBoundingClientRect()
o=p.left
o.toString
p=p.top
p.toString
q.a(new A.a5(o,p,q))
return new A.a5(B.d.a8(t-o),B.d.a8(s-p),q)}},
$iL:1}
A.x.prototype={
h(a){var t=a.nodeValue
return t==null?this.ad(a):t}}
A.bq.prototype={
gq(a){return a.length}}
A.H.prototype={}
A.bB.prototype={$ib_:1}
A.aB.prototype={$ici:1}
A.aC.prototype={
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
s=J.cB(b)
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
return A.dd(q,t,s,r)},
gL(a){var t=a.height
t.toString
return t},
gO(a){var t=a.width
t.toString
return t}}
A.bG.prototype={$ik:1,$ici:1}
A.bJ.prototype={
aM(a){if(a<=0||a>4294967296)throw A.d(A.er("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0},
v(){return Math.random()},
$ieq:1}
A.a5.prototype={
h(a){return"Point("+A.e(this.a)+", "+A.e(this.b)+")"},
D(a,b){if(b==null)return!1
return b instanceof A.a5&&this.a===b.a&&this.b===b.b},
gk(a){return A.ev(B.d.gk(this.a),B.d.gk(this.b),0)}}
A.bL.prototype={
ga7(a){return this.$ti.c.a(this.a+this.c)},
ga2(a){return this.$ti.c.a(this.b+this.d)},
h(a){var t=this
return"Rectangle ("+A.e(t.a)+", "+A.e(t.b)+") "+A.e(t.c)+" x "+A.e(t.d)},
D(a,b){var t,s,r,q,p=this
if(b==null)return!1
if(u.q.b(b)){t=p.a
s=J.cB(b)
if(t===s.gM(b)){r=p.b
if(r===s.gN(b)){q=p.$ti.c
t=q.a(t+p.c)===s.ga7(b)&&q.a(r+p.d)===s.ga2(b)}else t=!1}else t=!1}else t=!1
return t},
gk(a){var t=this,s=t.a,r=t.b,q=t.$ti.c
return A.dm(B.d.gk(s),B.d.gk(r),B.d.gk(q.a(s+t.c)),B.d.gk(q.a(r+t.d)),0)}}
A.P.prototype={
gM(a){return this.a},
gN(a){return this.b},
gO(a){return this.c},
gL(a){return this.d}}
A.bT.prototype={}
A.bU.prototype={
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
for(t=A.M(c),r=t.i("z(1)"),o=r.a(new A.bV()),n=t.i("p<1>"),m=new J.p(c,c.length,n),l=t.i("E<1>"),o=new A.E(m,o,l),t=t.c;o.l();){k=m.d
if(k==null)k=t.a(k)
if(k.V())k.m(a,0,h.r)}for(o=b.length,j=0;j<b.length;b.length===o||(0,A.o)(b),++j){i=b[j]
m=i.b
k=h.r
if(m>k-400&&m<k+s+400)i.m(a,0,k)}for(s=r.a(new A.bW()),n=new J.p(c,c.length,n),l=new A.E(n,s,l);l.l();){s=n.d
if(s==null)s=t.a(s)
if(s.V())s.m(a,0,h.r)}}}
A.bV.prototype={
$1(a){return u.W.a(a).d},
$S:4}
A.bW.prototype={
$1(a){return!u.W.a(a).d},
$S:4}
A.c8.prototype={}
A.b2.prototype={
n(a){},
m(a,b,c){var t,s,r,q,p=this
if(!p.y){t=p.c
s=t-B.b.E($.cf*2,t*4)
if(s<-t)s=-2*t-s
r=Math.abs(s)
if(r<3)r=3
q=A.au(p.a-b+(t-r)/2,p.b-c,r,p.d,u.H)
if(s<0){t=$.f.A().p(0,"coin_mirrored")
if(t==null)t=u.R.a(t)}else{t=$.f.A().p(0,"coin")
if(t==null)t=u.R.a(t)}B.c.F(a,t,q)}},
H(a,b){var t,s=this
if(b!==B.f&&!s.y&&a instanceof A.O){++a.CW
t=a.Q
if(t!=null)t.t(s.a,s.b)
s.y=!0}}}
A.U.prototype={
aw(){return"Direction."+this.b}}
A.bX.prototype={}
A.b7.prototype={
n(a){},
m(a,b,c){var t,s,r=this
if(!r.y){t=r.d
s=t-B.b.E($.cf*2,t*4)
if(s<-t)s=-2*t-s
t=$.f.A().p(0,"jump_item")
if(t==null)t=u.R.a(t)
a.drawImage(t,r.a-b-30,r.b+s/2-c-30)}},
H(a,b){var t
if(b!==B.f&&!this.y&&a instanceof A.O){this.y=!0
a.P(!0)
t=a.as
if(t!=null)t.t(a.a+a.c/2,a.b+a.d/2)}}}
A.r.prototype={
m(a,b,c){},
n(a){},
H(a,b){}}
A.bZ.prototype={}
A.bc.prototype={
W(a){var t,s,r,q,p,o,n=this,m=n.b
$.d7=m.clientWidth/360
$.d8=m.clientHeight/640
m=n.d
if(m!=null)m.aF()
n.d=A.ex(new A.b9(1000*B.d.aO(1000/n.a)),n.gaQ())
n.at.CW=0
m=new A.O(B.h)
m.X(150,300,50,50)
n.at=m
t=n.w
t===$&&A.l()
m.y=t
t=n.x
t===$&&A.l()
m.z=t
t=n.y
t===$&&A.l()
m.Q=t
t=n.Q
t===$&&A.l()
m.as=t
n.saH(A.q([],u.n))
for(m=u.I,s=0;s<50;++s){r=B.e.v()*260
t=n.e
q=s*500
p=new A.aa()
p.ai(r,0-q,100,20)
B.a.j(t,p)
p=n.e
t=new A.bw()
t.a=160
t.b=100-s*1000
t.c=200
t.d=30
o=new A.bk(B.e,A.q([],m))
o.al()
t.Q=o
B.a.j(p,t)
t=n.e
p=new A.b7()
p.a=30+B.e.v()*270
p.b=200-q
p.d=p.c=30
B.a.j(t,p)
p=n.e
t=new A.b2()
t.a=r-25+B.e.v()*100
t.b=100-s*200
t.c=30
t.d=40
B.a.j(p,t)}B.a.j(n.e,A.eg(100,400,100,20))
B.a.j(n.e,n.at)
n.f=new A.bZ(1.5)
n.r=new A.bX()
m=n.at
t=new A.c8(0)
t.b=m.b
n.ax=new A.bU(t,m,640)
m=n.z
m===$&&A.l()
m.c=m.b=0
t=m.a
q=t.length
if(0>=q)return A.m(t,0)
p=t[0]
p.a=0
if(0>=q)return A.m(t,0)
p.b=-1*m.r
if(1>=q)return A.m(t,1)
m=t[1]
m.a=0
if(1>=q)return A.m(t,1)
m.b=0},
n(a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=c.c,a=c.ch
a===$&&A.l()
B.c.sG(b,a)
b.fillRect(0,0,180,640)
a=c.CW
a===$&&A.l()
B.c.sG(b,a)
b.fillRect(180,0,180,640)
a=c.cx
a===$&&A.l()
B.c.sG(b,a)
b.fillRect(0,0,360,640)
a=$.cf
$.ew=a
t=a0.c
$.cf=t
$.Q=t-a
for(a=c.as,t=a.length,s=0;s<a.length;a.length===t||(0,A.o)(a),++s)a[s].n(c)
for(t=c.e,r=t.length,s=0;s<t.length;t.length===r||(0,A.o)(t),++s){q=t[s]
p=q.b
o=c.ax
o===$&&A.l()
o=o.r
if(p>o-400&&p<o+640+400)q.n(c)}for(t=c.e,r=t.length,s=0;s<r;++s){q=t[s]
p=c.f
if(p!=null)if(q.w){p=q.f=q.f+q.x*p.a
q.b+=p>100?q.f=100:p}q.a=q.a+q.e}for(t=c.e,r=t.length,p=u.j,s=0;s<t.length;t.length===r||(0,A.o)(t),++s){q=t[s]
for(o=c.e,n=o.length,m=0;m<o.length;o.length===n||(0,A.o)(o),++m){l=o[m]
k=q!==l
if(k){if(c.r==null)j=null
else{k=q.a
i=l.a
h=i+l.c
if(k<h)if(k+q.c>i){g=q.b
f=l.b
g=g<f+l.d&&g+q.d>f}else g=!1
else g=!1
if(g){g=q.b
f=l.b
if(g>=f&&g<=f+l.d){if(k<=i)e=k+q.c-i
else e=k+q.c>=h?k-h:1000
if(f+l.d-g<=Math.abs(e))j=B.j
else if(e>0)j=B.h
else j=e<0?B.i:B.f}else{g+=q.d
if(g>=f&&g<=f+l.d){if(k<=i)e=k+q.c-i
else e=k+q.c>=h?k-h:1000
if(g-f<=Math.abs(e))j=B.k
else if(e>0)j=B.h
else j=e<0?B.i:B.f}else if(k<i)j=B.h
else j=k+q.c>h?B.i:B.f}}else j=B.f}q.H(l,j==null?p.a(j):j)}}}t=c.ax
t===$&&A.l()
t.m(b,c.e,a)
a=$.f.A().p(0,"coin")
b.drawImage(a==null?u.R.a(a):a,5,5)
d=c.at.CW
B.c.sG(b,"white")
b.font="36px sans-serif"
b.fillText(""+d,40,40)},
aG(){B.z.ar(this.b,"mousedown",u.o.a(new A.c_(this)),null)},
saH(a){this.e=u.r.a(a)}}
A.c_.prototype={
$1(a){var t,s=this.a
a=u.V.a(u.D.a(a))
t=s.at
s=s.ax
s===$&&A.l()
t.aI(a,0,s.r)
return A.ek([null],u.B)},
$S:12}
A.aa.prototype={
ai(a,b,c,d){var t,s,r=this
r.a=a
r.b=b
r.c=c
r.d=d
r.z=A.cb()
r.Q=A.cb()
t=a-9
s=b-5
r.z.t(t,s)
r.Q.t(t+c,s)},
n(a){var t=this.z
t===$&&A.l()
t.n(a)
t=this.Q
t===$&&A.l()
t.n(a)},
m(a,b,c){var t,s=this
B.c.sG(a,"white")
t=s.z
t===$&&A.l()
t.m(a,b,c)
t=s.Q
t===$&&A.l()
t.m(a,b,c)
t=$.f.A().p(0,"rock")
if(t==null)t=u.R.a(t)
a.drawImage(t,s.a-b,s.b-c)},
H(a,b){var t,s,r
switch(b){case B.f:break
case B.j:t=a.e
s=t>0?1:-1
t=Math.abs(t)>0?t-s/2:0
a.e=t
r=Math.abs(t)
a.e=r>0&&r<1?0:t
if(a.f>=0){a.b=this.b-a.d
a.f=0
if(a instanceof A.O){if(!a.at){t=a.y
if(t!=null)t.t(a.a,this.b)}this.y=a.at=!0}}break
case B.k:break
case B.i:break
case B.h:break}}}
A.bC.prototype={
m(a,b,c){var t,s,r,q,p,o
for(t=this.a,s=t.length,r=u.R,q=0;q<t.length;t.length===s||(0,A.o)(t),++q){p=t[q]
o=$.f.b
if(o==$.f)A.F(A.N(""))
o=o.p(0,"waterfall")
if(o==null)o=r.a(o)
a.drawImage(o,p.a-b,p.b-c)}},
n(a){var t,s,r,q,p,o,n
if(a.d!=null){t=u.d
s=A.en(new A.az(this.a,t),!0,t.c)
for(t=s.length,r=u.R,q=0;q<t;++q){p=s[q]
o=p.b
n=a.ax
n===$&&A.l()
if(o>640+n.r){n=$.f.b
if(n==$.f)A.F(A.N(""))
n=n.p(0,"waterfall")
n=A.eZ((n==null?r.a(n):n).height)
p.z=0
p.Q=!0
n=p.b=o-n*2
p.f=5
o=n}p.z=p.z+$.Q
p.a=p.a+p.e
p.b=o+p.f}}}}
A.br.prototype={
an(){var t,s,r,q,p
for(t=this.a,s=0;s<20;++s){r=this.b
q=this.c
p=new A.u()
p.a=r
p.b=q
p.d=p.c=5
B.a.j(t,p)}},
t(a,b){var t,s,r,q
this.b=a
this.c=b
for(t=this.a,s=t.length,r=0;r<s;++r){q=t[r]
q.z=0
q.f=2
q.y=50
q.Q=!1}},
m(a,b,c){var t,s,r,q,p,o,n,m,l
for(t=this.a,s=t.length,r=u.H,q=u.R,p=0;p<t.length;t.length===s||(0,A.o)(t),++p){o=t[p]
if(o.Q){n=o.z
m=o.y
l=A.au(o.a-b,o.b-c,o.c,o.d,r)
a.globalAlpha=1-Math.abs(0.5-n/m)*2
n=$.f.b
if(n==$.f)A.F(A.N(""))
n=n.p(0,"bubbles")
B.c.F(a,n==null?q.a(n):n,l)}}a.globalAlpha=1},
n(a){var t,s,r,q,p,o,n,m=this
if(a.d!=null){if(++m.r>=3){m.r=0
t=m.a
s=A.M(t)
r=s.i("z(1)")
s=s.i("I<1>")
q=new A.I(t,r.a(new A.cc()),s)
if(!q.gaK(q)){p=new A.I(t,r.a(new A.cd()),s).a3(0,0)
p.z=0
p.Q=!0
p.b=m.c
t=m.e
p.a=m.b+t.v()*6-3
p.c=p.d=t.v()*5+15}o=!0}else o=!1
for(t=m.a,s=A.M(t),r=s.i("z(1)").a(new A.ce()),t=new J.p(t,t.length,s.i("p<1>")),r=new A.E(t,r,s.i("E<1>")),s=s.c;r.l();){q=t.d
if(q==null)q=s.a(q)
n=q.z+$.Q
q.z=n
q.b=q.b+q.f
if(o&&q.c>0){q.a+=0.5;--q.c;--q.d}if(n>q.y)q.Q=!1}}}}
A.cc.prototype={
$1(a){return!u.z.a(a).Q},
$S:0}
A.cd.prototype={
$1(a){return!u.z.a(a).Q},
$S:0}
A.ce.prototype={
$1(a){return u.z.a(a).Q},
$S:0}
A.bk.prototype={
al(){var t,s,r,q,p
for(t=this.a,s=0;s<30;++s){r=this.b
q=this.c
p=new A.u()
p.a=r
p.b=q
p.d=p.c=5
B.a.j(t,p)}},
t(a,b){var t,s,r,q,p,o=this
o.b=a
o.c=b
for(t=o.a,s=t.length,r=o.e,q=0;q<t.length;t.length===s||(0,A.o)(t),++q){p=t[q]
p.e=p.z=0
p.f=2
p.a=a+r.v()*150
p.b=b+r.v()*50
p.y=30
p.Q=!0
p.as=r.v()}},
m(a,b,c){var t,s,r,q,p,o
for(t=this.a,s=t.length,r=u.R,q=0;q<t.length;t.length===s||(0,A.o)(t),++q){p=t[q]
if(p.Q){a.globalAlpha=1-p.z/p.y
if(p.e>0){o=$.f.b
if(o==$.f)A.F(A.N(""))
o=o.p(0,"leaf")
if(o==null)o=r.a(o)}else{o=$.f.b
if(o==$.f)A.F(A.N(""))
o=o.p(0,"leaf_mirrored")
if(o==null)o=r.a(o)}a.drawImage(o,p.a-b,p.b-c)}}a.globalAlpha=1},
n(a){var t,s,r,q,p,o,n
if(a.d!=null)for(t=this.a,s=t.length,r=0,q=0;q<t.length;t.length===s||(0,A.o)(t),++q){p=t[q]
o=p.z+$.Q
p.z=o
n=B.b.E(r,2)===0?-1:1
o=n*Math.sin(o*p.as)*2
p.e=o
p.a+=o
p.b=p.b+p.f
if(p.z>p.y)p.Q=!1;++r}}}
A.bi.prototype={
aj(){var t,s,r,q,p
for(t=this.a,s=0;s<30;++s){r=this.b
q=this.c
p=new A.u()
p.a=r
p.b=q
p.d=p.c=5
B.a.j(t,p)}},
t(a,b){var t,s,r,q
this.b=a
this.c=b
for(t=this.a,s=t.length,r=0;r<s;++r){q=t[r]
q.f=q.e=q.z=0
q.y=10
q.Q=!1}},
m(a,b,c){var t,s,r,q
for(t=this.a,s=t.length,r=0;r<t.length;t.length===s||(0,A.o)(t),++r){q=t[r]
if(q.Q){B.c.sG(a,"rgba(255, 255, 255, "+A.e(1-q.z/q.y)+")")
a.fillRect(q.a-b,q.b-c,q.c,q.d)}}},
n(a){var t,s,r,q,p,o,n,m
if(a.d!=null){t=this.a
s=A.M(t)
r=s.i("z(1)")
q=s.i("I<1>")
p=new A.I(t,r.a(new A.c1()),q)
if(p.gq(p)>3)for(p=this.e,o=0;o<3;++o){n=new A.I(t,r.a(new A.c2()),q).a3(0,o)
n.Q=!0
n.a=a.at.a+p.v()*a.at.c
n.f=5*p.v()
m=a.at
n.b=m.b+m.d}for(r=r.a(new A.c3()),t=new J.p(t,t.length,s.i("p<1>")),r=new A.E(t,r,s.i("E<1>")),s=s.c;r.l();){q=t.d
if(q==null)q=s.a(q)
p=q.z+$.Q
q.z=p
q.b=q.b+q.f
if(p>q.y)q.Q=!1}}}}
A.c1.prototype={
$1(a){return!u.z.a(a).Q},
$S:0}
A.c2.prototype={
$1(a){return!u.z.a(a).Q},
$S:0}
A.c3.prototype={
$1(a){return u.z.a(a).Q},
$S:0}
A.bj.prototype={
ak(){var t,s,r,q,p
for(t=this.a,s=0;s<10;++s){r=this.b
q=this.c
p=new A.u()
p.a=r
p.b=q
p.d=p.c=10
B.a.j(t,p)}},
t(a,b){var t,s,r,q,p,o,n=this
n.b=a
n.c=b
for(t=n.a,s=t.length,r=n.e,q=0;q<t.length;t.length===s||(0,A.o)(t),++q){p=t[q]
p.z=0
o=r.v()*3.141592653589793/4+1.5707963267948966
o=B.b.E(r.aM(10),2)===0?o:6.283185307179586-o
p.e=Math.sin(o)*10
p.f=Math.cos(o)*10
p.a=a+50*(1-o/4.71238898038469)
p.b=b
p.y=10
p.Q=!0}},
m(a,b,c){var t,s,r,q,p,o,n,m
for(t=this.a,s=t.length,r=u.H,q=u.R,p=0;p<t.length;t.length===s||(0,A.o)(t),++p){o=t[p]
if(o.Q){a.globalAlpha=1-o.z/o.y
n=A.au(o.a-b,o.b-c,o.c,o.d,r)
m=$.f.b
if(m==$.f)A.F(A.N(""))
m=m.p(0,"bubbles")
B.c.F(a,m==null?q.a(m):m,n)}}a.globalAlpha=1},
n(a){var t,s,r,q,p,o,n
if(a.d!=null)for(t=this.a,s=t.length,r=$.Q,q=0;q<s;++q){p=t[q]
if(p.Q){p.a=p.a+p.e
o=p.b
n=p.f
p.b=o+n
o=p.z+=r
p.f=n+1
if(o>p.y)p.Q=!1}}}}
A.b8.prototype={
ah(){var t,s,r,q,p,o=this
o.d=!0
for(t=o.a,s=0;s<15;++s){r=o.b
q=o.c
p=new A.u()
p.a=r
p.b=q
p.d=p.c=100
B.a.j(t,p)}},
t(a,b){var t,s,r,q,p,o=this
o.b=a
o.c=b
for(t=o.a,s=t.length,r=o.e,q=0;q<t.length;t.length===s||(0,A.o)(t),++q){p=t[q]
p.z=0
p.y=7
p.as=r.v()*3.141592653589793*2
p.Q=!0}},
m(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f="double_jump_particle",e=this.a
if(1>=e.length)return A.m(e,1)
t=e[1]
s=t.z/t.y
a.globalAlpha=s*0.8
t=e.length
if(1>=t)return A.m(e,1)
r=e[1]
q=r.z>r.y?1:(1-s)/3
p=r.c*q
o=r.d*q
for(r=p/2,n=o/2,m=u.H,l=u.R,k=0,j=0;j<e.length;e.length===t||(0,A.o)(e),++j){i=e[j]
if(i.Q&&i.z<i.y&&k>0){h=A.au(i.a-b-r,i.b-c-n,p,o,m)
g=$.f.b
if(g==$.f)A.F(A.N(""))
g=g.p(0,f)
B.c.F(a,g==null?l.a(g):g,h)}++k}t=s*2
a.globalAlpha=t>1?1:t
if(0>=e.length)return A.m(e,0)
if(e[0].Q){t=$.f.A().p(0,f)
if(t==null)t=l.a(t)
if(0>=e.length)return A.m(e,0)
e=e[0]
a.drawImage(t,e.a-b-e.c/2,e.b-c-e.d/2)}a.globalAlpha=1},
n(a){var t,s,r,q,p,o,n,m,l,k,j=this
if(a.d!=null){t=a.at
j.b=t.a+t.c/2
j.c=t.b+t.d/2
t=j.a
s=t.length
if(1>=s)return A.m(t,1)
r=t[1]
q=100*(1-r.z/r.y)
for(p=0,o=0;o<t.length;t.length===s||(0,A.o)(t),++o){n=t[o]
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
A.b3.prototype={
ag(){var t,s,r,q,p
for(t=this.a,s=0;s<10;++s){r=this.b
q=this.c
p=new A.u()
p.a=r
p.b=q
p.d=p.c=10
B.a.j(t,p)}},
t(a,b){var t,s,r,q,p,o,n=this
n.b=a
n.c=b
for(t=n.a,s=t.length,r=n.e,q=0;q<t.length;t.length===s||(0,A.o)(t),++q){p=t[q]
p.z=0
o=r.v()*3.141592653589793*2
p.e=Math.sin(o)*10
p.f=Math.cos(o)*10
p.a=a
p.b=b
p.y=10
p.Q=!0}},
m(a,b,c){var t,s,r,q,p,o
for(t=this.a,s=t.length,r=u.R,q=0;q<t.length;t.length===s||(0,A.o)(t),++q){p=t[q]
if(p.Q){a.globalAlpha=1-p.z/p.y
o=$.f.b
if(o==$.f)A.F(A.N(""))
o=o.p(0,"coin_particle")
if(o==null)o=r.a(o)
a.drawImage(o,p.a-b,p.b-c)}}a.globalAlpha=1},
n(a){var t,s,r,q,p,o,n
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
n(a){},
V(){return B.a.aD(this.a,new A.c6())}}
A.c6.prototype={
$1(a){return u.z.a(a).Q},
$S:0}
A.u.prototype={
am(a,b,c,d){var t=this
t.a=a
t.b=b
t.c=c
t.d=d}}
A.ay.prototype={}
A.O.prototype={
X(a,b,c,d){var t=this
t.a=a
t.b=b
t.c=c
t.d=d
t.r=t.w=!0
t.x=1},
n(a){var t=this,s=a.e,r=A.M(s)
r=new A.I(s,r.i("z(1)").a(new A.c7(t)),r.i("I<1>"))
r.gq(r)
s=t.b
r=a.ax
r===$&&A.l()
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
s=A.au(r.a+(q-t)/2-b,r.b+(p-o)-c,t,o,u.H)
if(r.ch===B.i){q=$.f.A().p(0,"player_left")
if(q==null)q=u.R.a(q)}else{q=$.f.A().p(0,"player_right")
if(q==null)q=u.R.a(q)}B.c.F(a,q,s)},
H(a,b){switch(b){case B.f:break
case B.j:break
case B.k:break
case B.i:break
case B.h:break}},
aI(a,b,c){var t,s,r,q,p,o,n,m,l=this
if(!l.at&&!l.ax)return
t=J.cB(a)
s=t.ga6(a)
r=$.d7
t=t.ga6(a)
q=$.d8
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
if(s!=null)s.t(l.a,t)
l.ch=l.e<0?B.i:B.h
l.P(!1)},
aL(a){if(a instanceof A.aa)return a.y
return!1},
P(a){var t
if(!a){t=this.as
if(t!=null){t=t.a
if(0>=t.length)return A.m(t,0)
t[0].Q=!1}}this.ax=a}}
A.c7.prototype={
$1(a){return this.a.aL(u.v.a(a))},
$S:13}
A.bw.prototype={
n(a){var t=this.y
if(t>0)this.y=t-$.Q
t=this.Q
t===$&&A.l()
t.n(a)},
m(a,b,c){var t=this,s=82-30*(1-Math.abs(1-t.y/5*2)),r=A.au(t.a-b-20,t.b-c-30+(82-s)/2,220,s,u.H),q=$.f.A().p(0,"branch")
B.c.F(a,q==null?u.R.a(q):q,r)
q=t.Q
q===$&&A.l()
q.m(a,b,c)},
H(a,b){var t,s,r,q=this,p=a instanceof A.O
if(p)if(b!==B.f)if(b!==B.j){t=q.Q
t===$&&A.l()
t=!t.V()}else t=!1
else t=!1
else t=!1
if(t){t=q.Q
t===$&&A.l()
t.t(q.a,q.b)
q.y=5}switch(b){case B.f:break
case B.j:t=a.e
s=t>0?1:-1
t=Math.abs(t)>0?t-s/2:0
a.e=t
r=Math.abs(t)
a.e=r>0&&r<1?0:t
if(a.f>=0){a.b=q.b-a.d
a.f=0
if(p){if(!a.at){p=q.Q
p===$&&A.l()
p.t(q.a,q.b)
q.y=5}a.at=!0}}break
case B.k:a.f=0
a.b=q.b+q.d
break
case B.i:a.e*=-1
a.a=q.a-a.c
break
case B.h:a.e*=-1
a.a=q.a+q.c
break}}};(function aliases(){var t=J.am.prototype
t.ad=t.h
t=J.a3.prototype
t.ae=t.h})();(function installTearOffs(){var t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers._instance_1u
t(A,"fu","ez",3)
t(A,"fv","eA",3)
t(A,"fw","eB",3)
s(A,"dL","fo",2)
r(A.bc.prototype,"gaQ","n",11)})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(A.j,null)
r(A.j,[A.cI,J.am,J.p,A.h,A.ca,A.t,A.C,A.aA,A.cg,A.c5,A.aJ,A.a0,A.cn,A.D,A.bI,A.bM,A.aK,A.bF,A.cx,A.as,A.aF,A.aP,A.bK,A.aH,A.av,A.b9,A.co,A.bm,A.aw,A.cp,A.G,A.bt,A.bG,A.bJ,A.a5,A.bL,A.bT,A.bU,A.c8,A.r,A.bX,A.bZ,A.bc,A.v])
r(J.am,[J.be,J.bf,J.K,J.n,J.ao,J.ab])
r(J.K,[J.a3,A.k,A.aZ,A.aj,A.bY,A.ak,A.b])
r(J.a3,[J.bn,J.ad,J.V])
s(J.c0,J.n)
r(J.ao,[J.an,J.bg])
r(A.h,[A.ap,A.bx,A.bh,A.bz,A.bp,A.ai,A.bH,A.bl,A.Z,A.bA,A.by,A.b4,A.b6])
r(A.t,[A.al,A.I,A.az])
s(A.E,A.C)
s(A.at,A.bx)
r(A.a0,[A.b0,A.b1,A.bu,A.cC,A.cE,A.ck,A.cj,A.cs,A.bV,A.bW,A.c_,A.cc,A.cd,A.ce,A.c1,A.c2,A.c3,A.c6,A.c7])
r(A.bu,[A.bs,A.a9])
s(A.bE,A.ai)
r(A.b1,[A.cD,A.c4])
s(A.aL,A.bH)
r(A.b0,[A.cl,A.cm,A.cu,A.ct,A.cz])
s(A.cr,A.cx)
s(A.ar,A.as)
s(A.aD,A.ar)
s(A.aE,A.al)
s(A.aI,A.aP)
s(A.aG,A.aI)
r(A.Z,[A.ac,A.bd])
r(A.k,[A.x,A.aB])
r(A.x,[A.a,A.J])
s(A.c,A.a)
r(A.c,[A.aW,A.aX,A.a_,A.bb,A.a2,A.a4,A.bq])
s(A.H,A.b)
s(A.L,A.H)
s(A.bB,A.a4)
s(A.aC,A.ak)
s(A.P,A.bL)
r(A.r,[A.b2,A.b7,A.aa,A.u,A.O,A.bw])
s(A.U,A.co)
r(A.v,[A.bC,A.br,A.bk,A.bi,A.bj,A.b8,A.b3])
s(A.ay,A.u)
t(A.aP,A.av)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{cW:"int",bQ:"double",Y:"num",a6:"String",z:"bool",G:"Null",aq:"List"},mangledNames:{},types:["z(u)","G()","~()","~(~())","z(v)","@(@)","@(@,a6)","@(a6)","G(@)","G(~())","~(j?,j?)","@(bv)","di<@>(b)","z(r)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.eV(v.typeUniverse,JSON.parse('{"bn":"a3","ad":"a3","V":"a3","fU":"b","h0":"b","h3":"a","fW":"c","h1":"x","h_":"x","h4":"L","fY":"H","fX":"J","h6":"J","fV":"a4","be":{"z":[]},"n":{"aq":["1"],"t":["1"]},"c0":{"n":["1"],"aq":["1"],"t":["1"]},"p":{"C":["1"]},"ao":{"bQ":[],"Y":[]},"an":{"bQ":[],"cW":[],"Y":[]},"bg":{"bQ":[],"Y":[]},"ab":{"a6":[]},"ap":{"h":[]},"al":{"t":["1"]},"I":{"t":["1"]},"E":{"C":["1"]},"az":{"t":["1"]},"aA":{"C":["1"]},"at":{"h":[]},"bh":{"h":[]},"bz":{"h":[]},"aJ":{"dj":[]},"a0":{"a1":[]},"b0":{"a1":[]},"b1":{"a1":[]},"bu":{"a1":[]},"bs":{"a1":[]},"a9":{"a1":[]},"bp":{"h":[]},"bE":{"h":[]},"bH":{"h":[]},"aL":{"h":[]},"aK":{"bv":[]},"aD":{"as":["1","2"]},"aE":{"t":["1"]},"aF":{"C":["1"]},"aG":{"av":["1"],"dc":["1"],"t":["1"]},"aH":{"C":["1"]},"ar":{"as":["1","2"]},"aI":{"av":["1"],"t":["1"]},"di":{"t":["1"]},"ai":{"h":[]},"bx":{"h":[]},"bl":{"h":[]},"Z":{"h":[]},"ac":{"h":[]},"bd":{"h":[]},"bA":{"h":[]},"by":{"h":[]},"b4":{"h":[]},"bm":{"h":[]},"aw":{"h":[]},"b6":{"h":[]},"a2":{"a":[],"k":[],"b_":[]},"c":{"a":[],"k":[]},"aW":{"a":[],"k":[]},"aX":{"a":[],"k":[]},"a_":{"a":[],"k":[],"b_":[]},"J":{"k":[]},"ak":{"P":["Y"]},"a":{"k":[]},"bb":{"a":[],"k":[]},"a4":{"a":[],"k":[]},"L":{"b":[]},"x":{"k":[]},"bq":{"a":[],"k":[]},"H":{"b":[]},"bB":{"a":[],"k":[],"b_":[]},"aB":{"ci":[],"k":[]},"aC":{"P":["Y"]},"bG":{"ci":[],"k":[]},"bJ":{"eq":[]},"P":{"bL":["1"]},"b2":{"r":[]},"b7":{"r":[]},"aa":{"r":[]},"u":{"r":[]},"ay":{"u":[],"r":[]},"bC":{"v":[]},"br":{"v":[]},"bk":{"v":[]},"bi":{"v":[]},"bj":{"v":[]},"b8":{"v":[]},"b3":{"v":[]},"O":{"r":[]},"bw":{"r":[]}}'))
A.eU(v.typeUniverse,JSON.parse('{"al":1,"ar":2,"aI":1,"aP":1}'))
var u=(function rtii(){var t=A.dO
return{E:t("a_"),j:t("U"),h:t("a"),v:t("r"),C:t("h"),D:t("b"),Z:t("a1"),R:t("a2"),U:t("t<@>"),n:t("n<r>"),I:t("n<u>"),a:t("n<v>"),s:t("n<a6>"),b:t("n<@>"),T:t("bf"),g:t("V"),r:t("aq<r>"),c:t("aq<v>"),V:t("L"),P:t("G"),K:t("j"),z:t("u"),W:t("v"),p:t("a5<Y>"),L:t("h5"),q:t("P<Y>"),l:t("dj"),N:t("a6"),G:t("bv"),J:t("ad"),d:t("az<ay>"),y:t("ci"),w:t("z"),i:t("bQ"),B:t("@"),S:t("cW"),A:t("0&*"),_:t("j*"),O:t("k?"),Q:t("d6<G>?"),X:t("j?"),Y:t("bK?"),o:t("@(b)?"),H:t("Y"),t:t("~"),M:t("~()"),F:t("~(bv)")}})();(function constants(){B.z=A.a_.prototype
B.c=A.aj.prototype
B.A=A.a2.prototype
B.B=J.am.prototype
B.a=J.n.prototype
B.b=J.an.prototype
B.d=J.ao.prototype
B.p=J.ab.prototype
B.C=J.V.prototype
B.D=J.K.prototype
B.q=J.bn.prototype
B.m=J.ad.prototype
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

B.y=new A.bm()
B.F=new A.ca()
B.e=new A.bJ()
B.l=new A.cr()
B.f=new A.U("none")
B.j=new A.U("up")
B.k=new A.U("down")
B.i=new A.U("left")
B.h=new A.U("right")
B.E=A.fS("j")})();(function staticFields(){$.cq=null
$.de=null
$.d3=null
$.d2=null
$.dP=null
$.dK=null
$.dT=null
$.cA=null
$.cF=null
$.cV=null
$.af=null
$.aR=null
$.aS=null
$.cR=!1
$.bD=B.l
$.A=A.q([],A.dO("n<j>"))
$.f=A.eC()
$.d7=1
$.d8=1
$.ew=0
$.cf=0
$.Q=0})();(function lazyInitializers(){var t=hunkHelpers.lazyFinal
t($,"fZ","dV",()=>A.fD("_$dart_dartClosure"))
t($,"h7","dW",()=>A.R(A.ch({
toString:function(){return"$receiver$"}})))
t($,"h8","dX",()=>A.R(A.ch({$method$:null,
toString:function(){return"$receiver$"}})))
t($,"h9","dY",()=>A.R(A.ch(null)))
t($,"ha","dZ",()=>A.R(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(s){return s.message}}()))
t($,"hd","e1",()=>A.R(A.ch(void 0)))
t($,"he","e2",()=>A.R(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(s){return s.message}}()))
t($,"hc","e0",()=>A.R(A.dp(null)))
t($,"hb","e_",()=>A.R(function(){try{null.$method$}catch(s){return s.message}}()))
t($,"hg","e4",()=>A.R(A.dp(void 0)))
t($,"hf","e3",()=>A.R(function(){try{(void 0).$method$}catch(s){return s.message}}()))
t($,"hh","cY",()=>A.ey())
t($,"hs","e5",()=>A.dR(B.E))})();(function nativeSupport(){!function(){var t=function(a){var n={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.K,MediaError:J.K,NavigatorUserMediaError:J.K,OverconstrainedError:J.K,PositionError:J.K,GeolocationPositionError:J.K,HTMLBRElement:A.c,HTMLBaseElement:A.c,HTMLBodyElement:A.c,HTMLButtonElement:A.c,HTMLContentElement:A.c,HTMLDListElement:A.c,HTMLDataElement:A.c,HTMLDataListElement:A.c,HTMLDetailsElement:A.c,HTMLDialogElement:A.c,HTMLDivElement:A.c,HTMLEmbedElement:A.c,HTMLFieldSetElement:A.c,HTMLHRElement:A.c,HTMLHeadElement:A.c,HTMLHeadingElement:A.c,HTMLHtmlElement:A.c,HTMLIFrameElement:A.c,HTMLInputElement:A.c,HTMLLIElement:A.c,HTMLLabelElement:A.c,HTMLLegendElement:A.c,HTMLLinkElement:A.c,HTMLMapElement:A.c,HTMLMenuElement:A.c,HTMLMetaElement:A.c,HTMLMeterElement:A.c,HTMLModElement:A.c,HTMLOListElement:A.c,HTMLObjectElement:A.c,HTMLOptGroupElement:A.c,HTMLOptionElement:A.c,HTMLOutputElement:A.c,HTMLParagraphElement:A.c,HTMLParamElement:A.c,HTMLPictureElement:A.c,HTMLPreElement:A.c,HTMLProgressElement:A.c,HTMLQuoteElement:A.c,HTMLScriptElement:A.c,HTMLShadowElement:A.c,HTMLSlotElement:A.c,HTMLSourceElement:A.c,HTMLSpanElement:A.c,HTMLStyleElement:A.c,HTMLTableCaptionElement:A.c,HTMLTableCellElement:A.c,HTMLTableDataCellElement:A.c,HTMLTableHeaderCellElement:A.c,HTMLTableColElement:A.c,HTMLTableElement:A.c,HTMLTableRowElement:A.c,HTMLTableSectionElement:A.c,HTMLTemplateElement:A.c,HTMLTextAreaElement:A.c,HTMLTimeElement:A.c,HTMLTitleElement:A.c,HTMLTrackElement:A.c,HTMLUListElement:A.c,HTMLUnknownElement:A.c,HTMLDirectoryElement:A.c,HTMLFontElement:A.c,HTMLFrameElement:A.c,HTMLFrameSetElement:A.c,HTMLMarqueeElement:A.c,HTMLElement:A.c,HTMLAnchorElement:A.aW,HTMLAreaElement:A.aX,HTMLCanvasElement:A.a_,CanvasGradient:A.aZ,CanvasRenderingContext2D:A.aj,CDATASection:A.J,CharacterData:A.J,Comment:A.J,ProcessingInstruction:A.J,Text:A.J,DOMException:A.bY,DOMRectReadOnly:A.ak,MathMLElement:A.a,SVGAElement:A.a,SVGAnimateElement:A.a,SVGAnimateMotionElement:A.a,SVGAnimateTransformElement:A.a,SVGAnimationElement:A.a,SVGCircleElement:A.a,SVGClipPathElement:A.a,SVGDefsElement:A.a,SVGDescElement:A.a,SVGDiscardElement:A.a,SVGEllipseElement:A.a,SVGFEBlendElement:A.a,SVGFEColorMatrixElement:A.a,SVGFEComponentTransferElement:A.a,SVGFECompositeElement:A.a,SVGFEConvolveMatrixElement:A.a,SVGFEDiffuseLightingElement:A.a,SVGFEDisplacementMapElement:A.a,SVGFEDistantLightElement:A.a,SVGFEFloodElement:A.a,SVGFEFuncAElement:A.a,SVGFEFuncBElement:A.a,SVGFEFuncGElement:A.a,SVGFEFuncRElement:A.a,SVGFEGaussianBlurElement:A.a,SVGFEImageElement:A.a,SVGFEMergeElement:A.a,SVGFEMergeNodeElement:A.a,SVGFEMorphologyElement:A.a,SVGFEOffsetElement:A.a,SVGFEPointLightElement:A.a,SVGFESpecularLightingElement:A.a,SVGFESpotLightElement:A.a,SVGFETileElement:A.a,SVGFETurbulenceElement:A.a,SVGFilterElement:A.a,SVGForeignObjectElement:A.a,SVGGElement:A.a,SVGGeometryElement:A.a,SVGGraphicsElement:A.a,SVGImageElement:A.a,SVGLineElement:A.a,SVGLinearGradientElement:A.a,SVGMarkerElement:A.a,SVGMaskElement:A.a,SVGMetadataElement:A.a,SVGPathElement:A.a,SVGPatternElement:A.a,SVGPolygonElement:A.a,SVGPolylineElement:A.a,SVGRadialGradientElement:A.a,SVGRectElement:A.a,SVGScriptElement:A.a,SVGSetElement:A.a,SVGStopElement:A.a,SVGStyleElement:A.a,SVGElement:A.a,SVGSVGElement:A.a,SVGSwitchElement:A.a,SVGSymbolElement:A.a,SVGTSpanElement:A.a,SVGTextContentElement:A.a,SVGTextElement:A.a,SVGTextPathElement:A.a,SVGTextPositioningElement:A.a,SVGTitleElement:A.a,SVGUseElement:A.a,SVGViewElement:A.a,SVGGradientElement:A.a,SVGComponentTransferFunctionElement:A.a,SVGFEDropShadowElement:A.a,SVGMPathElement:A.a,Element:A.a,AbortPaymentEvent:A.b,AnimationEvent:A.b,AnimationPlaybackEvent:A.b,ApplicationCacheErrorEvent:A.b,BackgroundFetchClickEvent:A.b,BackgroundFetchEvent:A.b,BackgroundFetchFailEvent:A.b,BackgroundFetchedEvent:A.b,BeforeInstallPromptEvent:A.b,BeforeUnloadEvent:A.b,BlobEvent:A.b,CanMakePaymentEvent:A.b,ClipboardEvent:A.b,CloseEvent:A.b,CustomEvent:A.b,DeviceMotionEvent:A.b,DeviceOrientationEvent:A.b,ErrorEvent:A.b,ExtendableEvent:A.b,ExtendableMessageEvent:A.b,FetchEvent:A.b,FontFaceSetLoadEvent:A.b,ForeignFetchEvent:A.b,GamepadEvent:A.b,HashChangeEvent:A.b,InstallEvent:A.b,MediaEncryptedEvent:A.b,MediaKeyMessageEvent:A.b,MediaQueryListEvent:A.b,MediaStreamEvent:A.b,MediaStreamTrackEvent:A.b,MessageEvent:A.b,MIDIConnectionEvent:A.b,MIDIMessageEvent:A.b,MutationEvent:A.b,NotificationEvent:A.b,PageTransitionEvent:A.b,PaymentRequestEvent:A.b,PaymentRequestUpdateEvent:A.b,PopStateEvent:A.b,PresentationConnectionAvailableEvent:A.b,PresentationConnectionCloseEvent:A.b,ProgressEvent:A.b,PromiseRejectionEvent:A.b,PushEvent:A.b,RTCDataChannelEvent:A.b,RTCDTMFToneChangeEvent:A.b,RTCPeerConnectionIceEvent:A.b,RTCTrackEvent:A.b,SecurityPolicyViolationEvent:A.b,SensorErrorEvent:A.b,SpeechRecognitionError:A.b,SpeechRecognitionEvent:A.b,SpeechSynthesisEvent:A.b,StorageEvent:A.b,SyncEvent:A.b,TrackEvent:A.b,TransitionEvent:A.b,WebKitTransitionEvent:A.b,VRDeviceEvent:A.b,VRDisplayEvent:A.b,VRSessionEvent:A.b,MojoInterfaceRequestEvent:A.b,ResourceProgressEvent:A.b,USBConnectionEvent:A.b,IDBVersionChangeEvent:A.b,AudioProcessingEvent:A.b,OfflineAudioCompletionEvent:A.b,WebGLContextEvent:A.b,Event:A.b,InputEvent:A.b,SubmitEvent:A.b,EventTarget:A.k,HTMLFormElement:A.bb,HTMLImageElement:A.a2,HTMLAudioElement:A.a4,HTMLMediaElement:A.a4,MouseEvent:A.L,DragEvent:A.L,PointerEvent:A.L,WheelEvent:A.L,Document:A.x,DocumentFragment:A.x,HTMLDocument:A.x,ShadowRoot:A.x,XMLDocument:A.x,Attr:A.x,DocumentType:A.x,Node:A.x,HTMLSelectElement:A.bq,CompositionEvent:A.H,FocusEvent:A.H,KeyboardEvent:A.H,TextEvent:A.H,TouchEvent:A.H,UIEvent:A.H,HTMLVideoElement:A.bB,Window:A.aB,DOMWindow:A.aB,ClientRect:A.aC,DOMRect:A.aC})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,GeolocationPositionError:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLCanvasElement:true,CanvasGradient:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,DOMException:true,DOMRectReadOnly:false,MathMLElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,EventTarget:false,HTMLFormElement:true,HTMLImageElement:true,HTMLAudioElement:true,HTMLMediaElement:false,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,HTMLSelectElement:true,CompositionEvent:true,FocusEvent:true,KeyboardEvent:true,TextEvent:true,TouchEvent:true,UIEvent:false,HTMLVideoElement:true,Window:true,DOMWindow:true,ClientRect:true,DOMRect:true})})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var t=A.fM
if(typeof dartMainRunner==="function")dartMainRunner(t,[])
else t([])})})()
//# sourceMappingURL=main.js.map
