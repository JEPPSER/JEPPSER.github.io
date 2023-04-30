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
a[c]=function(){a[c]=function(){A.fM(b)}
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
if(a[b]!==t)A.fN(b)
a[b]=s}var r=a[b]
a[c]=function(){return r}
return r}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t)convertToFastObject(a[t])}var y=0
function instanceTearOffGetter(a,b){var t=null
return a?function(c){if(t===null)t=A.cR(b)
return new t(c,this)}:function(){if(t===null)t=A.cR(b)
return new t(this,null)}}function staticTearOffGetter(a){var t=null
return function(){if(t===null)t=A.cR(a).prototype
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
a(hunkHelpers,v,w,$)}var A={cG:function cG(){},
a1(a){return new A.ap("Field '"+a+"' has not been initialized.")},
aw(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
dh(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
es(a,b,c){return A.dh(A.aw(A.aw(c,a),b))},
di(a,b,c,d,e){return A.dh(A.aw(A.aw(A.aw(A.aw(e,a),b),c),d))},
dJ(a,b,c){return a},
ap:function ap(a){this.a=a},
c8:function c8(){},
al:function al(){},
G:function G(a,b,c){this.a=a
this.b=b
this.$ti=c},
D:function D(a,b,c){this.a=a
this.b=b
this.$ti=c},
ay:function ay(a,b){this.a=a
this.$ti=b},
az:function az(a,b){this.a=a
this.$ti=b},
dQ(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
e(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.bQ(a)
return t},
bm(a){var t,s=$.da
if(s==null)s=$.da=Symbol("identityHashCode")
t=a[s]
if(t==null){t=Math.random()*0x3fffffff|0
a[s]=t}return t},
c7(a){return A.em(a)},
em(a){var t,s,r,q
if(a instanceof A.i)return A.y(A.bP(a),null)
t=J.ah(a)
if(t===B.B||t===B.D||u.J.b(a)){s=B.n(a)
if(s!=="Object"&&s!=="")return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&q!=="Object"&&q!=="")return q}}return A.y(A.bP(a),null)},
l(a,b){if(a==null)J.cZ(a)
throw A.d(A.fw(a,b))},
fw(a,b){var t,s="index"
if(!A.dE(b))return new A.X(!0,b,s,null)
t=A.cw(J.cZ(a))
if(b<0||b>=t)return A.d5(b,t,a,s)
return new A.ac(null,null,!0,b,s,"Value not in range")},
d(a){var t,s
if(a==null)a=new A.bj()
t=new Error()
t.dartException=a
s=A.fO
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:s})
t.name=""}else t.toString=s
return t},
fO(){return J.bQ(this.dartException)},
L(a){throw A.d(a)},
r(a){throw A.d(A.b4(a))},
O(a){var t,s,r,q,p,o
a=A.fL(a.replace(String({}),"$receiver$"))
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=A.q([],u.s)
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new A.ce(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),s,r,q,p,o)},
cf(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
dk(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
cH(a,b){var t=b==null,s=t?null:b.method
return new A.bg(a,s,t?null:b.receiver)},
fQ(a){if(a==null)return new A.c3(a)
if(typeof a!=="object")return a
if("dartException" in a)return A.a8(a,a.dartException)
return A.fp(a)},
a8(a,b){if(u.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
fp(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((B.b.aA(s,16)&8191)===10)switch(r){case 438:return A.a8(a,A.cH(A.e(t)+" (Error "+r+")",f))
case 445:case 5007:q=A.e(t)
return A.a8(a,new A.at(q+" (Error "+r+")",f))}}if(a instanceof TypeError){p=$.dS()
o=$.dT()
n=$.dU()
m=$.dV()
l=$.dY()
k=$.dZ()
j=$.dX()
$.dW()
i=$.e0()
h=$.e_()
g=p.A(t)
if(g!=null)return A.a8(a,A.cH(A.bM(t),g))
else{g=o.A(t)
if(g!=null){g.method="call"
return A.a8(a,A.cH(A.bM(t),g))}else{g=n.A(t)
if(g==null){g=m.A(t)
if(g==null){g=l.A(t)
if(g==null){g=k.A(t)
if(g==null){g=j.A(t)
if(g==null){g=m.A(t)
if(g==null){g=i.A(t)
if(g==null){g=h.A(t)
q=g!=null}else q=!0}else q=!0}else q=!0}else q=!0}else q=!0}else q=!0}else q=!0
if(q){A.bM(t)
return A.a8(a,new A.at(t,g==null?f:g.method))}}}return A.a8(a,new A.bx(typeof t=="string"?t:""))}if(a instanceof RangeError){if(typeof t=="string"&&t.indexOf("call stack")!==-1)return new A.av()
t=function(b){try{return String(b)}catch(e){}return null}(a)
return A.a8(a,new A.X(!1,f,f,typeof t=="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t=="string"&&t==="too much recursion")return new A.av()
return a},
fB(a){var t
if(a==null)return new A.aI(a)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new A.aI(a)},
dN(a){if(a==null||typeof a!="object")return J.cF(a)
else return A.bm(a)},
fx(a,b){var t,s=a.length
for(t=0;t<s;++t)b.j(0,a[t])
return b},
fG(a,b,c,d,e,f){u.Z.a(a)
switch(A.cw(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.d(new A.cn("Unsupported number of arguments for wrapped closure"))},
aT(a,b){var t
if(a==null)return null
t=a.$identity
if(!!t)return t
t=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.fG)
a.$identity=t
return t},
ea(a1){var t,s,r,q,p,o,n,m,l,k,j=a1.co,i=a1.iS,h=a1.iI,g=a1.nDA,f=a1.aI,e=a1.fs,d=a1.cs,c=e[0],b=d[0],a=j[c],a0=a1.fT
a0.toString
t=i?Object.create(new A.br().constructor.prototype):Object.create(new A.a9(null,null).constructor.prototype)
t.$initialize=t.constructor
if(i)s=function static_tear_off(){this.$initialize()}
else s=function tear_off(a2,a3){this.$initialize(a2,a3)}
t.constructor=s
s.prototype=t
t.$_name=c
t.$_target=a
r=!i
if(r)q=A.d3(c,a,h,g)
else{t.$static_name=c
q=a}t.$S=A.e6(a0,i,h)
t[b]=q
for(p=q,o=1;o<e.length;++o){n=e[o]
if(typeof n=="string"){m=j[n]
l=n
n=m}else l=""
k=d[o]
if(k!=null){if(r)n=A.d3(l,n,h,g)
t[k]=n}if(o===f)p=n}t.$C=p
t.$R=a1.rC
t.$D=a1.dV
return s},
e6(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.d("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.e4)}throw A.d("Error in functionType of tearoff")},
e7(a,b,c,d){var t=A.d2
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
d3(a,b,c,d){var t,s
if(c)return A.e9(a,b,d)
t=b.length
s=A.e7(t,d,a,b)
return s},
e8(a,b,c,d){var t=A.d2,s=A.e5
switch(b?-1:a){case 0:throw A.d(new A.bo("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,t)
default:return function(e,f,g){return function(){var r=[g(this)]
Array.prototype.push.apply(r,arguments)
return e.apply(f(this),r)}}(d,s,t)}},
e9(a,b,c){var t,s
if($.d0==null)$.d0=A.d_("interceptor")
if($.d1==null)$.d1=A.d_("receiver")
t=b.length
s=A.e8(t,c,a,b)
return s},
cR(a){return A.ea(a)},
e4(a,b){return A.ct(v.typeUniverse,A.bP(a.a),b)},
d2(a){return a.a},
e5(a){return a.b},
d_(a){var t,s,r,q=new A.a9("receiver","interceptor"),p=J.d7(Object.getOwnPropertyNames(q),u.X)
for(t=p.length,s=0;s<t;++s){r=p[s]
if(q[r]===a)return r}throw A.d(A.e3("Field name "+a+" not found."))},
dI(a){if(a==null)A.fq("boolean expression must not be null")
return a},
fq(a){throw A.d(new A.bC(a))},
fM(a){throw A.d(new A.b5(a))},
fA(a){return v.getIsolateTag(a)},
hq(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
fI(a){var t,s,r,q,p,o=A.bM($.dL.$1(a)),n=$.cy[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.cD[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=A.eZ($.dG.$2(a,o))
if(r!=null){n=$.cy[r]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.cD[r]
if(t!=null)return t
s=v.interceptorsByTag[r]
o=r}}if(s==null)return null
t=s.prototype
q=o[0]
if(q==="!"){n=A.cE(t)
$.cy[o]=n
Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}if(q==="~"){$.cD[o]=t
return t}if(q==="-"){p=A.cE(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return A.dO(a,t)
if(q==="*")throw A.d(A.dl(o))
if(v.leafTags[o]===true){p=A.cE(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return A.dO(a,t)},
dO(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.cV(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
cE(a){return J.cV(a,!1,null,!!a.$ih_)},
fK(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return A.cE(t)
else return J.cV(t,c,null,null)},
fE(){if(!0===$.cT)return
$.cT=!0
A.fF()},
fF(){var t,s,r,q,p,o,n,m
$.cy=Object.create(null)
$.cD=Object.create(null)
A.fD()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.dP.$1(p)
if(o!=null){n=A.fK(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
fD(){var t,s,r,q,p,o,n=B.r()
n=A.ag(B.t,A.ag(B.u,A.ag(B.o,A.ag(B.o,A.ag(B.v,A.ag(B.w,A.ag(B.x(B.n),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.dL=new A.cA(q)
$.dG=new A.cB(p)
$.dP=new A.cC(o)},
ag(a,b){return a(b)||b},
fL(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
ce:function ce(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
at:function at(a,b){this.a=a
this.b=b},
bg:function bg(a,b,c){this.a=a
this.b=b
this.c=c},
bx:function bx(a){this.a=a},
c3:function c3(a){this.a=a},
aI:function aI(a){this.a=a
this.b=null},
Z:function Z(){},
b_:function b_(){},
b0:function b0(){},
bt:function bt(){},
br:function br(){},
a9:function a9(a,b){this.a=a
this.b=b},
bo:function bo(a){this.a=a},
bC:function bC(a){this.a=a},
cA:function cA(a){this.a=a},
cB:function cB(a){this.a=a},
cC:function cC(a){this.a=a},
fN(a){return A.L(new A.ap("Field '"+a+"' has been assigned during initialization."))},
t(){return A.L(A.a1(""))},
ez(){var t=new A.cl()
return t.b=t},
cl:function cl(){this.b=null},
dc(a,b){var t=b.c
return t==null?b.c=A.cN(a,b.y,!0):t},
db(a,b){var t=b.c
return t==null?b.c=A.aM(a,"d4",[b.y]):t},
dd(a){var t=a.x
if(t===6||t===7||t===8)return A.dd(a.y)
return t===12||t===13},
er(a){return a.at},
dK(a){return A.bL(v.typeUniverse,a,!1)},
V(a,b,c,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.x
switch(d){case 5:case 1:case 2:case 3:case 4:return b
case 6:t=b.y
s=A.V(a,t,c,a0)
if(s===t)return b
return A.dw(a,s,!0)
case 7:t=b.y
s=A.V(a,t,c,a0)
if(s===t)return b
return A.cN(a,s,!0)
case 8:t=b.y
s=A.V(a,t,c,a0)
if(s===t)return b
return A.dv(a,s,!0)
case 9:r=b.z
q=A.aS(a,r,c,a0)
if(q===r)return b
return A.aM(a,b.y,q)
case 10:p=b.y
o=A.V(a,p,c,a0)
n=b.z
m=A.aS(a,n,c,a0)
if(o===p&&m===n)return b
return A.cL(a,o,m)
case 12:l=b.y
k=A.V(a,l,c,a0)
j=b.z
i=A.fm(a,j,c,a0)
if(k===l&&i===j)return b
return A.du(a,k,i)
case 13:h=b.z
a0+=h.length
g=A.aS(a,h,c,a0)
p=b.y
o=A.V(a,p,c,a0)
if(g===h&&o===p)return b
return A.cM(a,o,g,!0)
case 14:f=b.y
if(f<a0)return b
e=c[f-a0]
if(e==null)return b
return e
default:throw A.d(A.aX("Attempted to substitute unexpected RTI kind "+d))}},
aS(a,b,c,d){var t,s,r,q,p=b.length,o=A.cu(p)
for(t=!1,s=0;s<p;++s){r=b[s]
q=A.V(a,r,c,d)
if(q!==r)t=!0
o[s]=q}return t?o:b},
fn(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=A.cu(n)
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=A.V(a,p,c,d)
if(o!==p)t=!0
m.splice(s,3,r,q,o)}return t?m:b},
fm(a,b,c,d){var t,s=b.a,r=A.aS(a,s,c,d),q=b.b,p=A.aS(a,q,c,d),o=b.c,n=A.fn(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new A.bG()
t.a=r
t.b=p
t.c=n
return t},
q(a,b){a[v.arrayRti]=b
return a},
fu(a){var t,s=a.$S
if(s!=null){if(typeof s=="number")return A.fC(s)
t=a.$S()
return t}return null},
dM(a,b){var t
if(A.dd(b))if(a instanceof A.Z){t=A.fu(a)
if(t!=null)return t}return A.bP(a)},
bP(a){var t
if(a instanceof A.i){t=a.$ti
return t!=null?t:A.cO(a)}if(Array.isArray(a))return A.K(a)
return A.cO(J.ah(a))},
K(a){var t=a[v.arrayRti],s=u.b
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
aP(a){var t=a.$ti
return t!=null?t:A.cO(a)},
cO(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return A.f6(a,t)},
f6(a,b){var t=a instanceof A.Z?a.__proto__.__proto__.constructor:b,s=A.eU(v.typeUniverse,t.name)
b.$ccache=s
return s},
fC(a){var t,s=v.types,r=s[a]
if(typeof r=="string"){t=A.bL(v.typeUniverse,r,!1)
s[a]=t
return t}return r},
fv(a){var t,s,r,q=a.w
if(q!=null)return q
t=a.at
s=t.replace(/\*/g,"")
if(s===t)return a.w=new A.bK(a)
r=A.bL(v.typeUniverse,s,!0)
q=r.w
return a.w=q==null?r.w=new A.bK(r):q},
fP(a){return A.fv(A.bL(v.typeUniverse,a,!1))},
f5(a){var t,s,r,q,p=this
if(p===u.K)return A.ae(p,a,A.fa)
if(!A.Q(p))if(!(p===u._))t=!1
else t=!0
else t=!0
if(t)return A.ae(p,a,A.fe)
t=p.x
s=t===6?p.y:p
if(s===u.S)r=A.dE
else if(s===u.i||s===u.H)r=A.f9
else if(s===u.N)r=A.fc
else r=s===u.w?A.dC:null
if(r!=null)return A.ae(p,a,r)
if(s.x===9){q=s.y
if(s.z.every(A.fH)){p.r="$i"+q
if(q==="aq")return A.ae(p,a,A.f8)
return A.ae(p,a,A.fd)}}else if(t===7)return A.ae(p,a,A.f3)
return A.ae(p,a,A.f1)},
ae(a,b,c){a.b=c
return a.b(b)},
f4(a){var t,s=this,r=A.f0
if(!A.Q(s))if(!(s===u._))t=!1
else t=!0
else t=!0
if(t)r=A.f_
else if(s===u.K)r=A.eY
else{t=A.aU(s)
if(t)r=A.f2}s.a=r
return s.a(a)},
bN(a){var t,s=a.x
if(!A.Q(a))if(!(a===u._))if(!(a===u.A))if(s!==7)if(!(s===6&&A.bN(a.y)))t=s===8&&A.bN(a.y)||a===u.P||a===u.T
else t=!0
else t=!0
else t=!0
else t=!0
else t=!0
return t},
f1(a){var t=this
if(a==null)return A.bN(t)
return A.h(v.typeUniverse,A.dM(a,t),null,t,null)},
f3(a){if(a==null)return!0
return this.y.b(a)},
fd(a){var t,s=this
if(a==null)return A.bN(s)
t=s.r
if(a instanceof A.i)return!!a[t]
return!!J.ah(a)[t]},
f8(a){var t,s=this
if(a==null)return A.bN(s)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
t=s.r
if(a instanceof A.i)return!!a[t]
return!!J.ah(a)[t]},
f0(a){var t,s=this
if(a==null){t=A.aU(s)
if(t)return a}else if(s.b(a))return a
A.dA(a,s)},
f2(a){var t=this
if(a==null)return a
else if(t.b(a))return a
A.dA(a,t)},
dA(a,b){throw A.d(A.eJ(A.dn(a,A.dM(a,b),A.y(b,null))))},
dn(a,b,c){var t=A.b9(a)
return t+": type '"+A.y(b==null?A.bP(a):b,null)+"' is not a subtype of type '"+c+"'"},
eJ(a){return new A.aK("TypeError: "+a)},
p(a,b){return new A.aK("TypeError: "+A.dn(a,null,b))},
fa(a){return a!=null},
eY(a){if(a!=null)return a
throw A.d(A.p(a,"Object"))},
fe(a){return!0},
f_(a){return a},
dC(a){return!0===a||!1===a},
hf(a){if(!0===a)return!0
if(!1===a)return!1
throw A.d(A.p(a,"bool"))},
hh(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.p(a,"bool"))},
hg(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.p(a,"bool?"))},
eW(a){if(typeof a=="number")return a
throw A.d(A.p(a,"double"))},
hj(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.p(a,"double"))},
hi(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.p(a,"double?"))},
dE(a){return typeof a=="number"&&Math.floor(a)===a},
cw(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.d(A.p(a,"int"))},
hl(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.p(a,"int"))},
hk(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.p(a,"int?"))},
f9(a){return typeof a=="number"},
hm(a){if(typeof a=="number")return a
throw A.d(A.p(a,"num"))},
hn(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.p(a,"num"))},
eX(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.p(a,"num?"))},
fc(a){return typeof a=="string"},
bM(a){if(typeof a=="string")return a
throw A.d(A.p(a,"String"))},
ho(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.p(a,"String"))},
eZ(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.p(a,"String?"))},
dF(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=s+A.y(a[r],b)
return t},
fh(a,b){var t,s,r,q,p,o,n=a.y,m=a.z
if(""===n)return"("+A.dF(m,b)+")"
t=m.length
s=n.split(",")
r=s.length-t
for(q="(",p="",o=0;o<t;++o,p=", "){q+=p
if(r===0)q+="{"
q+=A.y(m[o],b)
if(r>=0)q+=" "+s[r];++r}return q+"})"},
dB(a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=", "
if(a5!=null){t=a5.length
if(a4==null){a4=A.q([],u.s)
s=null}else s=a4.length
r=a4.length
for(q=t;q>0;--q)B.a.j(a4,"T"+(r+q))
for(p=u.X,o=u._,n="<",m="",q=0;q<t;++q,m=a2){l=a4.length
k=l-1-q
if(!(k>=0))return A.l(a4,k)
n=B.p.a8(n+m,a4[k])
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
if(m===9){q=A.fo(a.y)
p=a.z
return p.length>0?q+("<"+A.dF(p,b)+">"):q}if(m===11)return A.fh(a,b)
if(m===12)return A.dB(a,b,null)
if(m===13)return A.dB(a.y,b,a.z)
if(m===14){o=a.y
n=b.length
o=n-1-o
if(!(o>=0&&o<n))return A.l(b,o)
return b[o]}return"?"},
fo(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
eV(a,b){var t=a.tR[b]
for(;typeof t=="string";)t=a.tR[t]
return t},
eU(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return A.bL(a,b,!1)
else if(typeof n=="number"){t=n
s=A.aN(a,5,"#")
r=A.cu(t)
for(q=0;q<t;++q)r[q]=s
p=A.aM(a,b,r)
o[b]=p
return p}else return n},
eS(a,b){return A.dx(a.tR,b)},
eR(a,b){return A.dx(a.eT,b)},
bL(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=A.dt(A.dr(a,null,b,c))
s.set(b,t)
return t},
ct(a,b,c){var t,s,r=b.Q
if(r==null)r=b.Q=new Map()
t=r.get(c)
if(t!=null)return t
s=A.dt(A.dr(a,b,c,!0))
r.set(c,s)
return s},
eT(a,b,c){var t,s,r,q=b.as
if(q==null)q=b.as=new Map()
t=c.at
s=q.get(t)
if(s!=null)return s
r=A.cL(a,b,c.x===10?c.z:[c])
q.set(t,r)
return r},
P(a,b){b.a=A.f4
b.b=A.f5
return b},
aN(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new A.C(null,null)
t.x=b
t.at=c
s=A.P(a,t)
a.eC.set(c,s)
return s},
dw(a,b,c){var t,s=b.at+"*",r=a.eC.get(s)
if(r!=null)return r
t=A.eO(a,b,s,c)
a.eC.set(s,t)
return t},
eO(a,b,c,d){var t,s,r
if(d){t=b.x
if(!A.Q(b))s=b===u.P||b===u.T||t===7||t===6
else s=!0
if(s)return b}r=new A.C(null,null)
r.x=6
r.y=b
r.at=c
return A.P(a,r)},
cN(a,b,c){var t,s=b.at+"?",r=a.eC.get(s)
if(r!=null)return r
t=A.eN(a,b,s,c)
a.eC.set(s,t)
return t},
eN(a,b,c,d){var t,s,r,q
if(d){t=b.x
if(!A.Q(b))if(!(b===u.P||b===u.T))if(t!==7)s=t===8&&A.aU(b.y)
else s=!0
else s=!0
else s=!0
if(s)return b
else if(t===1||b===u.A)return u.P
else if(t===6){r=b.y
if(r.x===8&&A.aU(r.y))return r
else return A.dc(a,b)}}q=new A.C(null,null)
q.x=7
q.y=b
q.at=c
return A.P(a,q)},
dv(a,b,c){var t,s=b.at+"/",r=a.eC.get(s)
if(r!=null)return r
t=A.eL(a,b,s,c)
a.eC.set(s,t)
return t},
eL(a,b,c,d){var t,s,r
if(d){t=b.x
if(!A.Q(b))if(!(b===u._))s=!1
else s=!0
else s=!0
if(s||b===u.K)return b
else if(t===1)return A.aM(a,"d4",[b])
else if(b===u.P||b===u.T)return u.Q}r=new A.C(null,null)
r.x=8
r.y=b
r.at=c
return A.P(a,r)},
eP(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new A.C(null,null)
t.x=14
t.y=b
t.at=r
s=A.P(a,t)
a.eC.set(r,s)
return s},
aL(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].at
return t},
eK(a){var t,s,r,q,p,o=a.length
for(t="",s="",r=0;r<o;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
t+=s+q+p+a[r+2].at}return t},
aM(a,b,c){var t,s,r,q=b
if(c.length>0)q+="<"+A.aL(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new A.C(null,null)
s.x=9
s.y=b
s.z=c
if(c.length>0)s.c=c[0]
s.at=q
r=A.P(a,s)
a.eC.set(q,r)
return r},
cL(a,b,c){var t,s,r,q,p,o
if(b.x===10){t=b.y
s=b.z.concat(c)}else{s=c
t=b}r=t.at+(";<"+A.aL(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new A.C(null,null)
p.x=10
p.y=t
p.z=s
p.at=r
o=A.P(a,p)
a.eC.set(r,o)
return o},
eQ(a,b,c){var t,s,r="+"+(b+"("+A.aL(c)+")"),q=a.eC.get(r)
if(q!=null)return q
t=new A.C(null,null)
t.x=11
t.y=b
t.z=c
t.at=r
s=A.P(a,t)
a.eC.set(r,s)
return s},
du(a,b,c){var t,s,r,q,p,o=b.at,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+A.aL(n)
if(k>0){t=m>0?",":""
h+=t+"["+A.aL(l)+"]"}if(i>0){t=m>0?",":""
h+=t+"{"+A.eK(j)+"}"}s=o+(h+")")
r=a.eC.get(s)
if(r!=null)return r
q=new A.C(null,null)
q.x=12
q.y=b
q.z=c
q.at=s
p=A.P(a,q)
a.eC.set(s,p)
return p},
cM(a,b,c,d){var t,s=b.at+("<"+A.aL(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=A.eM(a,b,c,s,d)
a.eC.set(s,t)
return t},
eM(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=A.cu(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.x===1){s[q]=p;++r}}if(r>0){o=A.V(a,b,s,0)
n=A.aS(a,c,s,0)
return A.cM(a,o,n,c!==n)}}m=new A.C(null,null)
m.x=13
m.y=b
m.z=c
m.at=d
return A.P(a,m)},
dr(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
dt(a){var t,s,r,q,p,o,n,m,l,k=a.r,j=a.s
for(t=k.length,s=0;s<t;){r=k.charCodeAt(s)
if(r>=48&&r<=57)s=A.eD(s+1,r,k,j)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124)s=A.ds(a,s,k,j,!1)
else if(r===46)s=A.ds(a,s,k,j,!0)
else{++s
switch(r){case 44:break
case 58:j.push(!1)
break
case 33:j.push(!0)
break
case 59:j.push(A.U(a.u,a.e,j.pop()))
break
case 94:j.push(A.eP(a.u,j.pop()))
break
case 35:j.push(A.aN(a.u,5,"#"))
break
case 64:j.push(A.aN(a.u,2,"@"))
break
case 126:j.push(A.aN(a.u,3,"~"))
break
case 60:j.push(a.p)
a.p=j.length
break
case 62:q=a.u
p=j.splice(a.p)
A.cK(a.u,a.e,p)
a.p=j.pop()
o=j.pop()
if(typeof o=="string")j.push(A.aM(q,o,p))
else{n=A.U(q,a.e,o)
switch(n.x){case 12:j.push(A.cM(q,n,p,a.n))
break
default:j.push(A.cL(q,n,p))
break}}break
case 38:A.eE(a,j)
break
case 42:q=a.u
j.push(A.dw(q,A.U(q,a.e,j.pop()),a.n))
break
case 63:q=a.u
j.push(A.cN(q,A.U(q,a.e,j.pop()),a.n))
break
case 47:q=a.u
j.push(A.dv(q,A.U(q,a.e,j.pop()),a.n))
break
case 40:j.push(-3)
j.push(a.p)
a.p=j.length
break
case 41:A.eC(a,j)
break
case 91:j.push(a.p)
a.p=j.length
break
case 93:p=j.splice(a.p)
A.cK(a.u,a.e,p)
a.p=j.pop()
j.push(p)
j.push(-1)
break
case 123:j.push(a.p)
a.p=j.length
break
case 125:p=j.splice(a.p)
A.eG(a.u,a.e,p)
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
return A.U(a.u,a.e,l)},
eD(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
ds(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36||s===124))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.x===10)p=p.y
o=A.eV(t,p.y)[q]
if(o==null)A.L('No "'+q+'" in "'+A.er(p)+'"')
d.push(A.ct(t,p,o))}else d.push(q)
return n},
eC(a,b){var t,s,r,q,p,o=null,n=a.u,m=b.pop()
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
t=s}r=A.eB(a,b)
m=b.pop()
switch(m){case-3:m=b.pop()
if(t==null)t=n.sEA
if(s==null)s=n.sEA
q=A.U(n,a.e,m)
p=new A.bG()
p.a=r
p.b=t
p.c=s
b.push(A.du(n,q,p))
return
case-4:b.push(A.eQ(n,b.pop(),r))
return
default:throw A.d(A.aX("Unexpected state under `()`: "+A.e(m)))}},
eE(a,b){var t=b.pop()
if(0===t){b.push(A.aN(a.u,1,"0&"))
return}if(1===t){b.push(A.aN(a.u,4,"1&"))
return}throw A.d(A.aX("Unexpected extended operation "+A.e(t)))},
eB(a,b){var t=b.splice(a.p)
A.cK(a.u,a.e,t)
a.p=b.pop()
return t},
U(a,b,c){if(typeof c=="string")return A.aM(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.eF(a,b,c)}else return c},
cK(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=A.U(a,b,c[t])},
eG(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=A.U(a,b,c[t])},
eF(a,b,c){var t,s,r=b.x
if(r===10){if(c===0)return b.y
t=b.z
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.y
r=b.x}else if(c===0)return b
if(r!==9)throw A.d(A.aX("Indexed base must be an interface type"))
t=b.z
if(c<=t.length)return t[c-1]
throw A.d(A.aX("Bad index "+c+" for "+b.h(0)))},
h(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
if(b===d)return!0
if(!A.Q(d))if(!(d===u._))t=!1
else t=!0
else t=!0
if(t)return!0
s=b.x
if(s===4)return!0
if(A.Q(b))return!1
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
if(q===6){t=A.dc(a,d)
return A.h(a,b,c,t,e)}if(s===8){if(!A.h(a,b.y,c,d,e))return!1
return A.h(a,A.db(a,b),c,d,e)}if(s===7){t=A.h(a,u.P,c,d,e)
return t&&A.h(a,b.y,c,d,e)}if(q===8){if(A.h(a,b,c,d.y,e))return!0
return A.h(a,b,c,A.db(a,d),e)}if(q===7){t=A.h(a,b,c,u.P,e)
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
if(!A.h(a,l,c,k,e)||!A.h(a,k,e,l,c))return!1}return A.dD(a,b.y,c,d.y,e)}if(q===12){if(b===u.g)return!0
if(t)return!1
return A.dD(a,b,c,d,e)}if(s===9){if(q!==9)return!1
return A.f7(a,b,c,d,e)}t=s===11
if(t&&d===u.L)return!0
if(t&&q===11)return A.fb(a,b,c,d,e)
return!1},
dD(a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
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
f7(a,b,c,d,e){var t,s,r,q,p,o,n,m=b.y,l=d.y
for(;m!==l;){t=a.tR[m]
if(t==null)return!1
if(typeof t=="string"){m=t
continue}s=t[l]
if(s==null)return!1
r=s.length
q=r>0?new Array(r):v.typeUniverse.sEA
for(p=0;p<r;++p)q[p]=A.ct(a,b,s[p])
return A.dy(a,q,null,c,d.z,e)}o=b.z
n=d.z
return A.dy(a,o,null,c,n,e)},
dy(a,b,c,d,e,f){var t,s,r,q=b.length
for(t=0;t<q;++t){s=b[t]
r=e[t]
if(!A.h(a,s,d,r,f))return!1}return!0},
fb(a,b,c,d,e){var t,s=b.z,r=d.z,q=s.length
if(q!==r.length)return!1
if(b.y!==d.y)return!1
for(t=0;t<q;++t)if(!A.h(a,s[t],c,r[t],e))return!1
return!0},
aU(a){var t,s=a.x
if(!(a===u.P||a===u.T))if(!A.Q(a))if(s!==7)if(!(s===6&&A.aU(a.y)))t=s===8&&A.aU(a.y)
else t=!0
else t=!0
else t=!0
else t=!0
return t},
fH(a){var t
if(!A.Q(a))if(!(a===u._))t=!1
else t=!0
else t=!0
return t},
Q(a){var t=a.x
return t===2||t===3||t===4||t===5||a===u.X},
dx(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
cu(a){return a>0?new Array(a):v.typeUniverse.sEA},
C:function C(a,b){var _=this
_.a=a
_.b=b
_.w=_.r=_.c=null
_.x=0
_.at=_.as=_.Q=_.z=_.y=null},
bG:function bG(){this.c=this.b=this.a=null},
bK:function bK(a){this.a=a},
bF:function bF(){},
aK:function aK(a){this.a=a},
ev(){var t,s,r={}
if(self.scheduleImmediate!=null)return A.fr()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
r.a=null
new self.MutationObserver(A.aT(new A.ci(r),1)).observe(t,{childList:true})
return new A.ch(r,t,s)}else if(self.setImmediate!=null)return A.fs()
return A.ft()},
ew(a){self.scheduleImmediate(A.aT(new A.cj(u.M.a(a)),0))},
ex(a){self.setImmediate(A.aT(new A.ck(u.M.a(a)),0))},
ey(a){u.M.a(a)
A.eH(0,a)},
dj(a,b){var t=B.b.J(a.a,1000)
return A.eI(t<0?0:t,b)},
eH(a,b){var t=new A.aJ(!0)
t.am(a,b)
return t},
eI(a,b){var t=new A.aJ(!1)
t.an(a,b)
return t},
fg(){var t,s
for(t=$.af;t!=null;t=$.af){$.aR=null
s=t.b
$.af=s
if(s==null)$.aQ=null
t.a.$0()}},
fl(){$.cP=!0
try{A.fg()}finally{$.aR=null
$.cP=!1
if($.af!=null)$.cW().$1(A.dH())}},
fk(a){var t,s,r,q,p,o=$.af
if(o==null){t=new A.bD(a)
s=$.aQ
if(s==null){$.af=$.aQ=t
if(!$.cP)$.cW().$1(A.dH())}else $.aQ=s.b=t
$.aR=$.aQ
return}r=new A.bD(a)
q=$.aR
if(q==null){r.b=o
$.af=$.aR=r}else{p=q.b
r.b=p
$.aR=q.b=r
if(p==null)$.aQ=r}},
eu(a,b){var t=$.bB
if(t===B.j)return A.dj(a,u.F.a(b))
return A.dj(a,u.F.a(t.aC(b,u.G)))},
fi(a,b){A.fk(new A.cx(a,b))},
fj(a,b,c,d,e,f,g){var t,s=$.bB
if(s===c)return d.$1(e)
$.bB=c
t=s
try{s=d.$1(e)
return s}finally{$.bB=t}},
ci:function ci(a){this.a=a},
ch:function ch(a,b,c){this.a=a
this.b=b
this.c=c},
cj:function cj(a){this.a=a},
ck:function ck(a){this.a=a},
aJ:function aJ(a){this.a=a
this.b=null
this.c=0},
cs:function cs(a,b){this.a=a
this.b=b},
cr:function cr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bD:function bD(a){this.a=a
this.b=null},
cv:function cv(){},
cx:function cx(a,b){this.a=a
this.b=b},
cp:function cp(){},
cq:function cq(a,b,c){this.a=a
this.b=b
this.c=c},
ee(a,b){return new A.aC(a.i("@<0>").ar(b).i("aC<1,2>"))},
dp(a,b){var t=a[b]
return t===a?null:t},
cI(a,b,c){if(c==null)a[b]=a
else a[b]=c},
dq(){var t=Object.create(null)
A.cI(t,"<non-identifier-key>",t)
delete t["<non-identifier-key>"]
return t},
eh(a,b){return b.i("d8<0>").a(A.fx(a,new A.aF(b.i("aF<0>"))))},
cJ(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
ef(a,b,c){var t,s
if(A.cQ(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=A.q([],u.s)
B.a.j($.A,a)
try{A.ff(a,t)}finally{if(0>=$.A.length)return A.l($.A,-1)
$.A.pop()}s=A.dg(b,u.U.a(t),", ")+c
return s.charCodeAt(0)==0?s:s},
d6(a,b,c){var t,s
if(A.cQ(a))return b+"..."+c
t=new A.bs(b)
B.a.j($.A,a)
try{s=t
s.a=A.dg(s.a,a,", ")}finally{if(0>=$.A.length)return A.l($.A,-1)
$.A.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
cQ(a){var t,s
for(t=$.A.length,s=0;s<t;++s)if(a===$.A[s])return!0
return!1},
ff(a,b){var t,s,r,q,p,o,n,m=a.gv(a),l=0,k=0
while(!0){if(!(l<80||k<3))break
if(!m.l())return
t=A.e(m.gt())
B.a.j(b,t)
l+=t.length+2;++k}if(!m.l()){if(k<=5)return
if(0>=b.length)return A.l(b,-1)
s=b.pop()
if(0>=b.length)return A.l(b,-1)
r=b.pop()}else{q=m.gt();++k
if(!m.l()){if(k<=4){B.a.j(b,A.e(q))
return}s=A.e(q)
if(0>=b.length)return A.l(b,-1)
r=b.pop()
l+=s.length+2}else{p=m.gt();++k
for(;m.l();q=p,p=o){o=m.gt();++k
if(k>100){while(!0){if(!(l>75&&k>3))break
if(0>=b.length)return A.l(b,-1)
l-=b.pop().length+2;--k}B.a.j(b,"...")
return}}r=A.e(q)
s=A.e(p)
l+=s.length+r.length+4}}if(k>b.length+2){l+=5
n="..."}else n=null
while(!0){if(!(l>80&&b.length>3))break
if(0>=b.length)return A.l(b,-1)
l-=b.pop().length+2
if(n==null){l+=5
n="..."}}if(n!=null)B.a.j(b,n)
B.a.j(b,r)
B.a.j(b,s)},
el(a){var t,s={}
if(A.cQ(a))return"{...}"
t=new A.bs("")
try{B.a.j($.A,a)
t.a+="{"
s.a=!0
a.a3(0,new A.c2(s,t))
t.a+="}"}finally{if(0>=$.A.length)return A.l($.A,-1)
$.A.pop()}s=t.a
return s.charCodeAt(0)==0?s:s},
aC:function aC(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
aD:function aD(a,b){this.a=a
this.$ti=b},
aE:function aE(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aF:function aF(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bI:function bI(a){this.a=a
this.b=null},
aG:function aG(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
ar:function ar(){},
c2:function c2(a,b){this.a=a
this.b=b},
as:function as(){},
au:function au(){},
aH:function aH(){},
aO:function aO(){},
eb(a){if(a instanceof A.Z)return a.h(0)
return"Instance of '"+A.c7(a)+"'"},
ec(a,b){a=A.d(a)
if(a==null)a=u.K.a(a)
a.stack=b.h(0)
throw a
throw A.d("unreachable")},
ej(a,b,c){var t
if(a>4294967295)A.L(A.ep(a,0,4294967295,"length",null))
t=J.eg(new Array(a),c)
return t},
ek(a,b,c){var t=A.ei(a,c)
return t},
ei(a,b){var t,s
if(Array.isArray(a))return A.q(a.slice(0),b.i("m<0>"))
t=A.q([],b.i("m<0>"))
for(s=J.cY(a);s.l();)B.a.j(t,s.gt())
return t},
dg(a,b,c){var t=J.cY(b)
if(!t.l())return a
if(c.length===0){do a+=A.e(t.gt())
while(t.l())}else{a+=A.e(t.gt())
for(;t.l();)a=a+c+A.e(t.gt())}return a},
b9(a){if(typeof a=="number"||A.dC(a)||a==null)return J.bQ(a)
if(typeof a=="string")return JSON.stringify(a)
return A.eb(a)},
aX(a){return new A.ai(a)},
e3(a){return new A.X(!1,null,null,a)},
eo(a){var t=null
return new A.ac(t,t,!1,t,t,a)},
ep(a,b,c,d,e){return new A.ac(b,c,!0,a,d,"Invalid value")},
eq(a,b){return a},
d5(a,b,c,d){return new A.bc(b,!0,a,d,"Index out of range")},
a7(a){return new A.by(a)},
dl(a){return new A.bw(a)},
b4(a){return new A.b3(a)},
d9(a,b,c,d){var t=A.di(B.c.gk(a),B.c.gk(b),B.c.gk(c),B.c.gk(d),$.e1())
return t},
b8:function b8(a){this.a=a},
cm:function cm(){},
f:function f(){},
ai:function ai(a){this.a=a},
bv:function bv(){},
bj:function bj(){},
X:function X(a,b,c,d){var _=this
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
bc:function bc(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
by:function by(a){this.a=a},
bw:function bw(a){this.a=a},
b3:function b3(a){this.a=a},
bk:function bk(){},
av:function av(){},
b5:function b5(a){this.a=a},
cn:function cn(a){this.a=a},
o:function o(){},
B:function B(){},
E:function E(){},
i:function i(){},
bs:function bs(a){this.a=a},
dz(a){var t
if("postMessage" in a){t=A.eA(a)
return t}else return u.O.a(a)},
eA(a){if(a===window)return u.y.a(a)
else return new A.bE()},
c:function c(){},
aV:function aV(){},
aW:function aW(){},
Y:function Y(){},
aY:function aY(){},
aj:function aj(){},
H:function H(){},
bW:function bW(){},
ak:function ak(){},
a:function a(){},
b:function b(){},
k:function k(){},
ba:function ba(){},
a0:function a0(){},
a3:function a3(){},
J:function J(){},
v:function v(){},
bp:function bp(){},
F:function F(){},
bz:function bz(){},
aA:function aA(){},
aB:function aB(){},
bE:function bE(){},
bn(a,b,c,d,e){var t,s
if(c<0)t=c===-1/0?0:-c*0
else t=c+0
e.a(t)
if(d<0)s=d===-1/0?0:-d*0
else s=d+0
return new A.N(a,b,t,e.a(s),e.i("N<0>"))},
bH:function bH(){},
a4:function a4(a,b,c){this.a=a
this.b=b
this.$ti=c},
bJ:function bJ(){},
N:function N(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bR:function bR(){},
bS:function bS(a,b,c){var _=this
_.b=a
_.c=b
_.e=c
_.r=0},
bT:function bT(){},
bU:function bU(){},
c6:function c6(a){this.b=a},
b1:function b1(){var _=this
_.y=!1
_.f=_.e=_.d=_.c=_.b=_.a=0
_.r=!0
_.w=!1
_.x=0},
R:function R(a){this.b=a},
bV:function bV(){},
b6:function b6(){var _=this
_.y=!1
_.f=_.e=_.d=_.c=_.b=_.a=0
_.r=!0
_.w=!1
_.x=0},
u:function u(){},
bX:function bX(a){this.a=a},
bb:function bb(a,b,c,d,e,f){var _=this
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
bY:function bY(a){this.a=a},
ed(a,b,c,d){var t,s,r,q,p=new A.aa()
p.a=a
p.b=b
p.c=c
p.d=d
t=A.c9()
p.z=t
s=A.c9()
p.Q=s
r=a-9
q=b-5
t.u(r,q)
s.u(r+c,q)
return p},
aa:function aa(){var _=this
_.y=!1
_.Q=_.z=$
_.f=_.e=_.d=_.c=_.b=_.a=0
_.r=!0
_.w=!1
_.x=0},
c9(){var t=new A.bq(B.e,A.q([],u.I))
t.al()
return t},
dm(a,b,c,d){var t=new A.ax(B.e)
t.ak(a,b,c,d)
t.Q=!0
t.f=5
t.z=0
return t},
bA:function bA(a,b,c,d){var _=this
_.e=a
_.f=b
_.r=c
_.a=d
_.c=_.b=0
_.d=!1},
bq:function bq(a,b){var _=this
_.e=a
_.r=0
_.a=b
_.c=_.b=0
_.d=!1},
ca:function ca(){},
cb:function cb(){},
cc:function cc(){},
bh:function bh(a,b){var _=this
_.e=a
_.a=b
_.c=_.b=0
_.d=!1},
c_:function c_(){},
c0:function c0(){},
c1:function c1(){},
bi:function bi(a,b){var _=this
_.e=a
_.a=b
_.c=_.b=0
_.d=!1},
b7:function b7(a,b){var _=this
_.e=a
_.a=b
_.c=_.b=0
_.d=!1},
b2:function b2(a,b){var _=this
_.e=a
_.a=b
_.c=_.b=0
_.d=!1},
x:function x(){},
c4:function c4(){},
w:function w(){var _=this
_.z=_.y=0
_.Q=!1
_.f=_.e=_.d=_.c=_.b=_.a=_.as=0
_.r=!0
_.w=!1
_.x=0},
ax:function ax(a){var _=this
_.dy=a
_.z=_.y=0
_.Q=!1
_.f=_.e=_.d=_.c=_.b=_.a=_.as=0
_.r=!0
_.w=!1
_.x=0},
T:function T(a){var _=this
_.as=_.Q=_.z=_.y=null
_.ax=_.at=!1
_.ay=0
_.ch=a
_.f=_.e=_.d=_.c=_.b=_.a=_.CW=0
_.r=!0
_.w=!1
_.x=0},
c5:function c5(a){this.a=a},
M(a){var t=document.createElement("img")
B.A.sab(t,"./assets/img/"+a+".png")
$.j.D().a9(0,a,t)},
fJ(){var t,s="rgb(66, 205, 255)",r="rgb(0, 131, 179)",q=u.E.a(document.querySelector("#canvas")),p=q.getContext("2d"),o=A.q([],u.n),n=A.q([],u.a),m=new A.T(B.h)
m.W(150,300,50,50)
t=new A.bb(30,q,p,o,n,m)
t.aE()
$.j.b=A.ee(u.N,u.R)
A.M("bubbles")
A.M("player_left")
A.M("player_right")
A.M("rock")
A.M("waterfall")
A.M("coin")
A.M("coin_mirrored")
A.M("coin_particle")
A.M("jump_item")
A.M("double_jump_particle")
m=p.createLinearGradient(0,0,180,0)
t.ch=m
m.addColorStop(0,s)
t.ch.addColorStop(1,r)
m=p.createLinearGradient(180,0,360,0)
t.CW=m
m.addColorStop(0,r)
t.CW.addColorStop(1,s)
p=p.createLinearGradient(0,0,0,640)
t.cx=p
p.addColorStop(0,"transparent")
t.cx.addColorStop(1,"rgba(255, 255, 255, 0.5)")
p=u.I
o=new A.bi(B.e,A.q([],p))
o.aj()
t.w=o
o=new A.bh(B.e,A.q([],p))
o.ai()
t.x=o
o=new A.b2(B.e,A.q([],p))
o.af()
t.y=o
o=new A.b7(B.e,A.q([],p))
o.ag()
t.Q=o
p=A.q([],p)
o=new A.bA(new A.bR(),B.e,900,p)
o.d=!0
B.a.j(p,A.dm(0,-900,1,1))
B.a.j(p,A.dm(0,0,1,1))
t.z=o
B.a.j(n,t.w)
B.a.j(n,t.x)
B.a.j(n,t.z)
B.a.j(n,t.y)
B.a.j(n,t.Q)
t.V(0)}},J={
cV(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cS(a){var t,s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.cT==null){A.fE()
o=a[v.dispatchPropertyName]}if(o!=null){t=o.p
if(!1===t)return o.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return o.i
if(o.e===s)throw A.d(A.dl("Return interceptor for "+A.e(t(a,o))))}r=a.constructor
if(r==null)q=null
else{p=$.co
if(p==null)p=$.co=v.getIsolateTag("_$dart_js")
q=r[p]}if(q!=null)return q
q=A.fI(a)
if(q!=null)return q
if(typeof a=="function")return B.C
t=Object.getPrototypeOf(a)
if(t==null)return B.q
if(t===Object.prototype)return B.q
if(typeof r=="function"){p=$.co
if(p==null)p=$.co=v.getIsolateTag("_$dart_js")
Object.defineProperty(r,p,{value:B.m,enumerable:false,writable:true,configurable:true})
return B.m}return B.m},
eg(a,b){return J.d7(A.q(a,b.i("m<0>")),b)},
d7(a,b){a.fixed$length=Array
return a},
ah(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.an.prototype
return J.bf.prototype}if(typeof a=="string")return J.ab.prototype
if(a==null)return J.be.prototype
if(typeof a=="boolean")return J.bd.prototype
if(a.constructor==Array)return J.m.prototype
if(typeof a!="object"){if(typeof a=="function")return J.S.prototype
return a}if(a instanceof A.i)return a
return J.cS(a)},
fy(a){if(a==null)return a
if(a.constructor==Array)return J.m.prototype
if(!(a instanceof A.i))return J.ad.prototype
return a},
fz(a){if(typeof a=="string")return J.ab.prototype
if(a==null)return a
if(a.constructor==Array)return J.m.prototype
if(typeof a!="object"){if(typeof a=="function")return J.S.prototype
return a}if(a instanceof A.i)return a
return J.cS(a)},
cz(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.S.prototype
return a}if(a instanceof A.i)return a
return J.cS(a)},
cX(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.ah(a).C(a,b)},
cF(a){return J.ah(a).gk(a)},
cY(a){return J.fy(a).gv(a)},
cZ(a){return J.fz(a).gq(a)},
e2(a){return J.cz(a).gaK(a)},
bQ(a){return J.ah(a).h(a)},
am:function am(){},
bd:function bd(){},
be:function be(){},
I:function I(){},
a2:function a2(){},
bl:function bl(){},
ad:function ad(){},
S:function S(){},
m:function m(a){this.$ti=a},
bZ:function bZ(a){this.$ti=a},
n:function n(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ao:function ao(){},
an:function an(){},
bf:function bf(){},
ab:function ab(){}},B={}
var w=[A,J,B]
var $={}
A.cG.prototype={}
J.am.prototype={
C(a,b){return a===b},
gk(a){return A.bm(a)},
h(a){return"Instance of '"+A.c7(a)+"'"}}
J.bd.prototype={
h(a){return String(a)},
gk(a){return a?519018:218159},
$iz:1}
J.be.prototype={
C(a,b){return null==b},
h(a){return"null"},
gk(a){return 0}}
J.I.prototype={}
J.a2.prototype={
gk(a){return 0},
h(a){return String(a)}}
J.bl.prototype={}
J.ad.prototype={}
J.S.prototype={
h(a){var t=a[$.dR()]
if(t==null)return this.ad(a)
return"JavaScript function for "+J.bQ(t)},
$ia_:1}
J.m.prototype={
j(a,b){A.K(a).c.a(b)
if(!!a.fixed$length)A.L(A.a7("add"))
a.push(b)},
aB(a,b){var t,s
A.K(a).i("z(1)").a(b)
t=a.length
for(s=0;s<t;++s){if(A.dI(b.$1(a[s])))return!0
if(a.length!==t)throw A.d(A.b4(a))}return!1},
h(a){return A.d6(a,"[","]")},
gv(a){return new J.n(a,a.length,A.K(a).i("n<1>"))},
gk(a){return A.bm(a)},
gq(a){return a.length},
$io:1,
$iaq:1}
J.bZ.prototype={}
J.n.prototype={
gt(){var t=this.d
return t==null?this.$ti.c.a(t):t},
l(){var t,s=this,r=s.a,q=r.length
if(s.b!==q)throw A.d(A.r(r))
t=s.c
if(t>=q){s.sa_(null)
return!1}s.sa_(r[t]);++s.c
return!0},
sa_(a){this.d=this.$ti.i("1?").a(a)},
$iB:1}
J.ao.prototype={
a7(a){var t
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){t=a<0?Math.ceil(a):Math.floor(a)
return t+0}throw A.d(A.a7(""+a+".toInt()"))},
aM(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
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
F(a,b){var t=a%b
if(t===0)return 0
if(t>0)return t
if(b<0)return t-b
else return t+b},
ae(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.a0(a,b)},
J(a,b){return(a|0)===a?a/b|0:this.a0(a,b)},
a0(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw A.d(A.a7("Result of truncating division is "+A.e(t)+": "+A.e(a)+" ~/ "+b))},
aA(a,b){var t
if(a>0)t=this.az(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
az(a,b){return b>31?0:a>>>b},
$ibO:1,
$iW:1}
J.an.prototype={$icU:1}
J.bf.prototype={}
J.ab.prototype={
a8(a,b){return a+b},
aa(a,b){var t,s
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.d(B.y)
for(t=a,s="";!0;){if((b&1)===1)s=t+s
b=b>>>1
if(b===0)break
t+=t}return s},
aL(a,b,c){var t=b-a.length
if(t<=0)return a
return this.aa(c,t)+a},
h(a){return a},
gk(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=s+a.charCodeAt(r)&536870911
s=s+((s&524287)<<10)&536870911
s^=s>>6}s=s+((s&67108863)<<3)&536870911
s^=s>>11
return s+((s&16383)<<15)&536870911},
gq(a){return a.length},
$ia5:1}
A.ap.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.c8.prototype={}
A.al.prototype={}
A.G.prototype={
gv(a){var t=this.a
return new A.D(new J.n(t,t.length,A.K(t).i("n<1>")),this.b,this.$ti.i("D<1>"))}}
A.D.prototype={
l(){var t,s,r,q
for(t=this.a,s=this.b,r=t.$ti.c;t.l();){q=t.d
if(A.dI(s.$1(q==null?r.a(q):q)))return!0}return!1},
gt(){var t=this.a,s=t.d
return s==null?t.$ti.c.a(s):s}}
A.ay.prototype={
gv(a){var t=this.a
return new A.az(new J.n(t,t.length,A.K(t).i("n<1>")),this.$ti.i("az<1>"))}}
A.az.prototype={
l(){var t,s,r,q
for(t=this.a,s=this.$ti.c,r=t.$ti.c;t.l();){q=t.d
if(s.b(q==null?r.a(q):q))return!0}return!1},
gt(){var t=this.a,s=t.d
t=s==null?t.$ti.c.a(s):s
return this.$ti.c.a(t)},
$iB:1}
A.ce.prototype={
A(a){var t,s,r=this,q=new RegExp(r.a).exec(a)
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
A.bg.prototype={
h(a){var t,s=this,r="NoSuchMethodError: method not found: '",q=s.b
if(q==null)return"NoSuchMethodError: "+s.a
t=s.c
if(t==null)return r+q+"' ("+s.a+")"
return r+q+"' on '"+t+"' ("+s.a+")"}}
A.bx.prototype={
h(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
A.c3.prototype={
h(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.aI.prototype={
h(a){var t,s=this.b
if(s!=null)return s
s=this.a
t=s!==null&&typeof s==="object"?s.stack:null
return this.b=t==null?"":t},
$idf:1}
A.Z.prototype={
h(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+A.dQ(s==null?"unknown":s)+"'"},
$ia_:1,
gaP(){return this},
$C:"$1",
$R:1,
$D:null}
A.b_.prototype={$C:"$0",$R:0}
A.b0.prototype={$C:"$2",$R:2}
A.bt.prototype={}
A.br.prototype={
h(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+A.dQ(t)+"'"}}
A.a9.prototype={
C(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.a9))return!1
return this.$_target===b.$_target&&this.a===b.a},
gk(a){return(A.dN(this.a)^A.bm(this.$_target))>>>0},
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.c7(this.a)+"'")}}
A.bo.prototype={
h(a){return"RuntimeError: "+this.a}}
A.bC.prototype={
h(a){return"Assertion failed: "+A.b9(this.a)}}
A.cA.prototype={
$1(a){return this.a(a)},
$S:5}
A.cB.prototype={
$2(a,b){return this.a(a,b)},
$S:6}
A.cC.prototype={
$1(a){return this.a(A.bM(a))},
$S:7}
A.cl.prototype={
D(){var t=this.b
if(t===this)throw A.d(A.a1(""))
return t}}
A.C.prototype={
i(a){return A.ct(v.typeUniverse,this,a)},
ar(a){return A.eT(v.typeUniverse,this,a)}}
A.bG.prototype={}
A.bK.prototype={
h(a){return A.y(this.a,null)}}
A.bF.prototype={
h(a){return this.a}}
A.aK.prototype={}
A.ci.prototype={
$1(a){var t=this.a,s=t.a
t.a=null
s.$0()},
$S:8}
A.ch.prototype={
$1(a){var t,s
this.a.a=u.M.a(a)
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:9}
A.cj.prototype={
$0(){this.a.$0()},
$S:1}
A.ck.prototype={
$0(){this.a.$0()},
$S:1}
A.aJ.prototype={
am(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(A.aT(new A.cs(this,b),0),a)
else throw A.d(A.a7("`setTimeout()` not found."))},
an(a,b){if(self.setTimeout!=null)this.b=self.setInterval(A.aT(new A.cr(this,a,Date.now(),b),0),a)
else throw A.d(A.a7("Periodic timer."))},
aD(){if(self.setTimeout!=null){var t=this.b
if(t==null)return
if(this.a)self.clearTimeout(t)
else self.clearInterval(t)
this.b=null}else throw A.d(A.a7("Canceling a timer."))},
$ibu:1}
A.cs.prototype={
$0(){var t=this.a
t.b=null
t.c=1
this.b.$0()},
$S:2}
A.cr.prototype={
$0(){var t,s=this,r=s.a,q=r.c+1,p=s.b
if(p>0){t=Date.now()-s.c
if(t>(q+1)*p)q=B.b.ae(t,p)}r.c=q
s.d.$1(r)},
$S:1}
A.bD.prototype={}
A.cv.prototype={}
A.cx.prototype={
$0(){var t=this.a,s=this.b
A.dJ(t,"error",u.K)
A.dJ(s,"stackTrace",u.l)
A.ec(t,s)},
$S:2}
A.cp.prototype={
aN(a,b,c){var t,s,r
c.i("~(0)").a(a)
c.a(b)
try{if(B.j===$.bB){a.$1(b)
return}A.fj(null,null,this,a,b,u.t,c)}catch(r){t=A.fQ(r)
s=A.fB(r)
A.fi(u.K.a(t),u.l.a(s))}},
aC(a,b){return new A.cq(this,b.i("~(0)").a(a),b)}}
A.cq.prototype={
$1(a){var t=this.c
return this.a.aN(this.b,t.a(a),t)},
$S(){return this.c.i("~(0)")}}
A.aC.prototype={
gq(a){return this.a},
ga5(){return new A.aD(this,A.aP(this).i("aD<1>"))},
n(a,b){var t,s,r
if(typeof b=="string"&&b!=="__proto__"){t=this.b
s=t==null?null:A.dp(t,b)
return s}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
s=r==null?null:A.dp(r,b)
return s}else return this.av(b)},
av(a){var t,s,r=this.d
if(r==null)return null
t=r[this.Y(a)]
s=this.I(t,a)
return s<0?null:t[s+1]},
a9(a,b,c){var t,s=this,r=A.aP(s)
r.c.a(b)
r.z[1].a(c)
if(b!=="__proto__"){t=s.b
s.aq(t==null?s.b=A.dq():t,b,c)}else s.aw(b,c)},
aw(a,b){var t,s,r,q,p=this,o=A.aP(p)
o.c.a(a)
o.z[1].a(b)
t=p.d
if(t==null)t=p.d=A.dq()
s=p.Y(a)
r=t[s]
if(r==null){A.cI(t,s,[a,b]);++p.a
p.e=null}else{q=p.I(r,a)
if(q>=0)r[q+1]=b
else{r.push(a,b);++p.a
p.e=null}}},
a3(a,b){var t,s,r,q,p,o,n=this,m=A.aP(n)
m.i("~(1,2)").a(b)
t=n.Z()
for(s=t.length,r=m.c,m=m.z[1],q=0;q<s;++q){p=t[q]
r.a(p)
o=n.n(0,p)
b.$2(p,o==null?m.a(o):o)
if(t!==n.e)throw A.d(A.b4(n))}},
Z(){var t,s,r,q,p,o,n,m,l,k,j=this,i=j.e
if(i!=null)return i
i=A.ej(j.a,null,u.B)
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
aq(a,b,c){var t=A.aP(this)
t.c.a(b)
t.z[1].a(c)
if(a[b]==null){++this.a
this.e=null}A.cI(a,b,c)},
Y(a){return J.cF(a)&1073741823},
I(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;s+=2)if(J.cX(a[s],b))return s
return-1}}
A.aD.prototype={
gq(a){return this.a.a},
gv(a){var t=this.a
return new A.aE(t,t.Z(),this.$ti.i("aE<1>"))}}
A.aE.prototype={
gt(){var t=this.d
return t==null?this.$ti.c.a(t):t},
l(){var t=this,s=t.b,r=t.c,q=t.a
if(s!==q.e)throw A.d(A.b4(q))
else if(r>=s.length){t.sG(null)
return!1}else{t.sG(s[r])
t.c=r+1
return!0}},
sG(a){this.d=this.$ti.i("1?").a(a)},
$iB:1}
A.aF.prototype={
gv(a){var t=this,s=new A.aG(t,t.r,t.$ti.i("aG<1>"))
s.c=t.e
return s},
gq(a){return this.a},
j(a,b){var t,s,r=this
r.$ti.c.a(b)
if(typeof b=="string"&&b!=="__proto__"){t=r.b
return r.X(t==null?r.b=A.cJ():t,b)}else if(typeof b=="number"&&(b&1073741823)===b){s=r.c
return r.X(s==null?r.c=A.cJ():s,b)}else return r.ao(b)},
ao(a){var t,s,r,q=this
q.$ti.c.a(a)
t=q.d
if(t==null)t=q.d=A.cJ()
s=J.cF(a)&1073741823
r=t[s]
if(r==null)t[s]=[q.T(a)]
else{if(q.I(r,a)>=0)return!1
r.push(q.T(a))}return!0},
X(a,b){this.$ti.c.a(b)
if(u.Y.a(a[b])!=null)return!1
a[b]=this.T(b)
return!0},
T(a){var t=this,s=new A.bI(t.$ti.c.a(a))
if(t.e==null)t.e=t.f=s
else t.f=t.f.b=s;++t.a
t.r=t.r+1&1073741823
return s},
I(a,b){var t,s=a.length
for(t=0;t<s;++t)if(J.cX(a[t].a,b))return t
return-1},
$id8:1}
A.bI.prototype={}
A.aG.prototype={
gt(){var t=this.d
return t==null?this.$ti.c.a(t):t},
l(){var t=this,s=t.c,r=t.a
if(t.b!==r.r)throw A.d(A.b4(r))
else if(s==null){t.sG(null)
return!1}else{t.sG(t.$ti.i("1?").a(s.a))
t.c=s.b
return!0}},
sG(a){this.d=this.$ti.i("1?").a(a)},
$iB:1}
A.ar.prototype={}
A.c2.prototype={
$2(a,b){var t,s=this.a
if(!s.a)this.b.a+=", "
s.a=!1
s=this.b
t=s.a+=A.e(a)
s.a=t+": "
s.a+=A.e(b)},
$S:10}
A.as.prototype={
a3(a,b){var t,s,r,q=A.aP(this)
q.i("~(1,2)").a(b)
for(t=this.ga5(),t=t.gv(t),q=q.z[1];t.l();){s=t.gt()
r=this.n(0,s)
b.$2(s,r==null?q.a(r):r)}},
gq(a){var t=this.ga5()
return t.gq(t)},
h(a){return A.el(this)}}
A.au.prototype={
h(a){return A.d6(this,"{","}")}}
A.aH.prototype={$io:1}
A.aO.prototype={}
A.b8.prototype={
C(a,b){if(b==null)return!1
return b instanceof A.b8&&this.a===b.a},
gk(a){return B.b.gk(this.a)},
h(a){var t,s,r,q,p=this.a,o=p<0?"-":"",n=B.b.J(p,36e8)
p%=36e8
if(p<0)p=-p
t=B.b.J(p,6e7)
p%=6e7
s=t<10?"0":""
r=B.b.J(p,1e6)
q=r<10?"0":""
return o+Math.abs(n)+":"+s+t+":"+q+r+"."+B.p.aL(B.b.h(p%1e6),6,"0")}}
A.cm.prototype={
h(a){return this.au()}}
A.f.prototype={}
A.ai.prototype={
h(a){var t=this.a
if(t!=null)return"Assertion failed: "+A.b9(t)
return"Assertion failed"}}
A.bv.prototype={}
A.bj.prototype={
h(a){return"Throw of null."}}
A.X.prototype={
gS(){return"Invalid argument"+(!this.a?"(s)":"")},
gR(){return""},
h(a){var t=this,s=t.c,r=s==null?"":" ("+s+")",q=t.d,p=q==null?"":": "+q,o=t.gS()+r+p
if(!t.a)return o
return o+t.gR()+": "+A.b9(t.gU())},
gU(){return this.b}}
A.ac.prototype={
gU(){return A.eX(this.b)},
gS(){return"RangeError"},
gR(){var t,s=this.e,r=this.f
if(s==null)t=r!=null?": Not less than or equal to "+A.e(r):""
else if(r==null)t=": Not greater than or equal to "+A.e(s)
else if(r>s)t=": Not in inclusive range "+A.e(s)+".."+A.e(r)
else t=r<s?": Valid value range is empty":": Only valid value is "+A.e(s)
return t}}
A.bc.prototype={
gU(){return A.cw(this.b)},
gS(){return"RangeError"},
gR(){if(A.cw(this.b)<0)return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+t},
gq(a){return this.f}}
A.by.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.bw.prototype={
h(a){return"UnimplementedError: "+this.a}}
A.b3.prototype={
h(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.b9(t)+"."}}
A.bk.prototype={
h(a){return"Out of Memory"},
$if:1}
A.av.prototype={
h(a){return"Stack Overflow"},
$if:1}
A.b5.prototype={
h(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.cn.prototype={
h(a){return"Exception: "+this.a}}
A.o.prototype={
gq(a){var t,s=this.gv(this)
for(t=0;s.l();)++t
return t},
gaH(a){return!this.gv(this).l()},
a2(a,b){var t,s,r
A.eq(b,"index")
for(t=this.gv(this),s=0;t.l();){r=t.gt()
if(b===s)return r;++s}throw A.d(A.d5(b,s,this,"index"))},
h(a){return A.ef(this,"(",")")}}
A.B.prototype={}
A.E.prototype={
gk(a){return A.i.prototype.gk.call(this,this)},
h(a){return"null"}}
A.i.prototype={$ii:1,
C(a,b){return this===b},
gk(a){return A.bm(this)},
h(a){return"Instance of '"+A.c7(this)+"'"},
toString(){return this.h(this)}}
A.bs.prototype={
gq(a){return this.a.length},
h(a){var t=this.a
return t.charCodeAt(0)==0?t:t}}
A.c.prototype={}
A.aV.prototype={
h(a){return String(a)}}
A.aW.prototype={
h(a){return String(a)}}
A.Y.prototype={$iY:1,$iaZ:1}
A.aY.prototype={$iaY:1}
A.aj.prototype={
sE(a,b){a.fillStyle=b},
H(a,b,c){u.q.a(c)
a.drawImage(b,c.a,c.b,c.c,c.d)},
$iaj:1}
A.H.prototype={
gq(a){return a.length}}
A.bW.prototype={
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
C(a,b){var t,s
if(b==null)return!1
if(u.q.b(b)){t=a.left
t.toString
s=J.cz(b)
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
return A.d9(q,t,s,r)},
ga1(a){var t=a.bottom
t.toString
return t},
gL(a){var t=a.height
t.toString
return t},
gM(a){var t=a.left
t.toString
return t},
ga6(a){var t=a.right
t.toString
return t},
gN(a){var t=a.top
t.toString
return t},
gO(a){var t=a.width
t.toString
return t},
$iN:1}
A.a.prototype={
h(a){return a.localName},
$ia:1}
A.b.prototype={$ib:1}
A.k.prototype={
ap(a,b,c,d){return a.addEventListener(b,A.aT(u.o.a(c),1),d)},
$ik:1}
A.ba.prototype={
gq(a){return a.length}}
A.a0.prototype={
sab(a,b){a.src=b},
$ia0:1,
$iaZ:1}
A.a3.prototype={}
A.J.prototype={
gaK(a){var t,s,r,q,p,o
if(!!a.offsetX)return new A.a4(a.offsetX,a.offsetY,u.p)
else{t=a.target
s=u.h
if(!s.b(A.dz(t)))throw A.d(A.a7("offsetX is only supported on elements"))
r=s.a(A.dz(t))
t=a.clientX
s=a.clientY
q=u.p
p=r.getBoundingClientRect()
o=p.left
o.toString
p=p.top
p.toString
q.a(new A.a4(o,p,q))
return new A.a4(B.c.a7(t-o),B.c.a7(s-p),q)}},
$iJ:1}
A.v.prototype={
h(a){var t=a.nodeValue
return t==null?this.ac(a):t}}
A.bp.prototype={
gq(a){return a.length}}
A.F.prototype={}
A.bz.prototype={$iaZ:1}
A.aA.prototype={$icg:1}
A.aB.prototype={
h(a){var t,s,r,q=a.left
q.toString
t=a.top
t.toString
s=a.width
s.toString
r=a.height
r.toString
return"Rectangle ("+A.e(q)+", "+A.e(t)+") "+A.e(s)+" x "+A.e(r)},
C(a,b){var t,s
if(b==null)return!1
if(u.q.b(b)){t=a.left
t.toString
s=J.cz(b)
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
return A.d9(q,t,s,r)},
gL(a){var t=a.height
t.toString
return t},
gO(a){var t=a.width
t.toString
return t}}
A.bE.prototype={$ik:1,$icg:1}
A.bH.prototype={
aJ(a){if(a<=0||a>4294967296)throw A.d(A.eo("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0},
B(){return Math.random()},
$ien:1}
A.a4.prototype={
h(a){return"Point("+A.e(this.a)+", "+A.e(this.b)+")"},
C(a,b){if(b==null)return!1
return b instanceof A.a4&&this.a===b.a&&this.b===b.b},
gk(a){return A.es(B.c.gk(this.a),B.c.gk(this.b),0)}}
A.bJ.prototype={
ga6(a){return this.$ti.c.a(this.a+this.c)},
ga1(a){return this.$ti.c.a(this.b+this.d)},
h(a){var t=this
return"Rectangle ("+A.e(t.a)+", "+A.e(t.b)+") "+A.e(t.c)+" x "+A.e(t.d)},
C(a,b){var t,s,r,q,p=this
if(b==null)return!1
if(u.q.b(b)){t=p.a
s=J.cz(b)
if(t===s.gM(b)){r=p.b
if(r===s.gN(b)){q=p.$ti.c
t=q.a(t+p.c)===s.ga6(b)&&q.a(r+p.d)===s.ga1(b)}else t=!1}else t=!1}else t=!1
return t},
gk(a){var t=this,s=t.a,r=t.b,q=t.$ti.c
return A.di(B.c.gk(s),B.c.gk(r),B.c.gk(q.a(s+t.c)),B.c.gk(q.a(r+t.d)),0)}}
A.N.prototype={
gM(a){return this.a},
gN(a){return this.b},
gO(a){return this.c},
gL(a){return this.d}}
A.bR.prototype={}
A.bS.prototype={
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
for(t=A.K(c),r=t.i("z(1)"),o=r.a(new A.bT()),n=t.i("n<1>"),m=new J.n(c,c.length,n),l=t.i("D<1>"),o=new A.D(m,o,l),t=t.c;o.l();){k=m.d
if(k==null)k=t.a(k)
if(k.a4())k.m(a,0,h.r)}for(o=b.length,j=0;j<b.length;b.length===o||(0,A.r)(b),++j){i=b[j]
m=i.b
k=h.r
if(m>k-400&&m<k+s+400)i.m(a,0,k)}for(s=r.a(new A.bU()),n=new J.n(c,c.length,n),l=new A.D(n,s,l);l.l();){s=n.d
if(s==null)s=t.a(s)
if(s.a4())s.m(a,0,h.r)}}}
A.bT.prototype={
$1(a){return u.W.a(a).d},
$S:4}
A.bU.prototype={
$1(a){return!u.W.a(a).d},
$S:4}
A.c6.prototype={}
A.b1.prototype={
p(a){},
m(a,b,c){var t,s,r,q,p=this
if(!p.y){t=p.c
s=t-B.b.F($.cd*2,t*4)
if(s<-t)s=-2*t-s
r=Math.abs(s)
if(r<3)r=3
q=A.bn(p.a-b+(t-r)/2,p.b-c,r,p.d,u.H)
if(s<0){t=$.j.D().n(0,"coin_mirrored")
if(t==null)t=u.R.a(t)}else{t=$.j.D().n(0,"coin")
if(t==null)t=u.R.a(t)}B.d.H(a,t,q)}},
K(a,b){var t,s=this
if(b!==B.f&&!s.y&&a instanceof A.T){++a.CW
t=a.Q
if(t!=null)t.u(s.a,s.b)
s.y=!0}}}
A.R.prototype={
au(){return"Direction."+this.b}}
A.bV.prototype={}
A.b6.prototype={
p(a){},
m(a,b,c){var t,s,r=this
if(!r.y){t=r.d
s=t-B.b.F($.cd*2,t*4)
if(s<-t)s=-2*t-s
t=$.j.D().n(0,"jump_item")
if(t==null)t=u.R.a(t)
a.drawImage(t,r.a-b-30,r.b+s/2-c-30)}},
K(a,b){var t
if(b!==B.f&&!this.y&&a instanceof A.T){this.y=!0
a.P(!0)
t=a.as
if(t!=null)t.u(a.a+a.c/2,a.b+a.d/2)}}}
A.u.prototype={}
A.bX.prototype={}
A.bb.prototype={
V(a){var t,s,r,q,p,o=this,n=o.b
n.clientWidth
n.clientHeight
n=o.d
if(n!=null)n.aD()
o.d=A.eu(new A.b8(1000*B.c.aM(1000/o.a)),o.gaO())
o.at.CW=0
n=new A.T(B.h)
n.W(150,300,50,50)
o.at=n
t=o.w
t===$&&A.t()
n.y=t
t=o.x
t===$&&A.t()
n.z=t
t=o.y
t===$&&A.t()
n.Q=t
t=o.Q
t===$&&A.t()
n.as=t
o.saF(A.q([],u.n))
for(s=0;s<50;++s){r=B.e.B()*260
n=o.e
t=s*500
q=new A.aa()
q.ah(r,0-t,100,20)
B.a.j(n,q)
q=o.e
n=new A.b6()
n.a=r-50+B.e.B()*200
n.b=200-t
n.d=n.c=30
B.a.j(q,n)
n=o.e
q=new A.b1()
q.a=r-25+B.e.B()*100
q.b=100-s*200
q.c=30
q.d=40
B.a.j(n,q)}B.a.j(o.e,A.ed(100,400,100,20))
B.a.j(o.e,o.at)
o.f=new A.bX(1.5)
o.r=new A.bV()
n=o.at
t=new A.c6(0)
t.b=n.b
o.ax=new A.bS(t,n,640)
n=o.z
n===$&&A.t()
n.c=n.b=0
t=n.a
q=t.length
if(0>=q)return A.l(t,0)
p=t[0]
p.a=0
if(0>=q)return A.l(t,0)
p.b=-1*n.r
if(1>=q)return A.l(t,1)
n=t[1]
n.a=0
if(1>=q)return A.l(t,1)
n.b=0},
p(a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=c.c,a=c.ch
a===$&&A.t()
B.d.sE(b,a)
b.fillRect(0,0,180,640)
a=c.CW
a===$&&A.t()
B.d.sE(b,a)
b.fillRect(180,0,180,640)
a=c.cx
a===$&&A.t()
B.d.sE(b,a)
b.fillRect(0,0,360,640)
a=$.cd
$.et=a
t=a0.c
$.cd=t
$.a6=t-a
for(a=c.as,t=a.length,s=0;s<a.length;a.length===t||(0,A.r)(a),++s)a[s].p(c)
for(t=c.e,r=t.length,s=0;s<t.length;t.length===r||(0,A.r)(t),++s){q=t[s]
p=q.b
o=c.ax
o===$&&A.t()
o=o.r
if(p>o-400&&p<o+640+400)q.p(c)}for(t=c.e,r=t.length,s=0;s<r;++s){q=t[s]
p=c.f
if(p!=null)if(q.w){p=q.f=q.f+q.x*p.a
q.b+=p>100?q.f=100:p}q.a=q.a+q.e}for(t=c.e,r=t.length,p=u.j,s=0;s<t.length;t.length===r||(0,A.r)(t),++s){q=t[s]
for(o=c.e,n=o.length,m=0;m<o.length;o.length===n||(0,A.r)(o),++m){l=o[m]
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
if(f+l.d-g<=Math.abs(e))j=B.k
else if(e>0)j=B.h
else j=e<0?B.i:B.f}else{g+=q.d
if(g>=f&&g<=f+l.d){if(k<=i)e=k+q.c-i
else e=k+q.c>=h?k-h:1000
if(g-f<=Math.abs(e))j=B.l
else if(e>0)j=B.h
else j=e<0?B.i:B.f}else if(k<i)j=B.h
else j=k+q.c>h?B.i:B.f}}else j=B.f}q.K(l,j==null?p.a(j):j)}}}t=c.ax
t===$&&A.t()
t.m(b,c.e,a)
a=$.j.D().n(0,"coin")
b.drawImage(a==null?u.R.a(a):a,5,5)
d=c.at.CW
B.d.sE(b,"white")
b.font="36px sans-serif"
b.fillText(""+d,40,40)},
aE(){B.z.ap(this.b,"mousedown",u.o.a(new A.bY(this)),null)},
saF(a){this.e=u.r.a(a)}}
A.bY.prototype={
$1(a){a=u.V.a(u.D.a(a))
this.a.at.aG(a)
return A.eh([null],u.B)},
$S:12}
A.aa.prototype={
ah(a,b,c,d){var t,s,r=this
r.a=a
r.b=b
r.c=c
r.d=d
r.z=A.c9()
r.Q=A.c9()
t=a-9
s=b-5
r.z.u(t,s)
r.Q.u(t+c,s)},
p(a){var t=this.z
t===$&&A.t()
t.p(a)
t=this.Q
t===$&&A.t()
t.p(a)},
m(a,b,c){var t,s=this
B.d.sE(a,"white")
t=s.z
t===$&&A.t()
t.m(a,b,c)
t=s.Q
t===$&&A.t()
t.m(a,b,c)
t=$.j.D().n(0,"rock")
if(t==null)t=u.R.a(t)
a.drawImage(t,s.a-b,s.b-c)},
K(a,b){var t,s,r
switch(b){case B.f:break
case B.k:t=a.e
s=t>0?1:-1
t=Math.abs(t)>0?t-s/2:0
a.e=t
r=Math.abs(t)
a.e=r>0&&r<1?0:t
if(a.f>=0){a.b=this.b-a.d
a.f=0
if(a instanceof A.T){if(!a.at){t=a.y
if(t!=null)t.u(a.a,this.b)}this.y=a.at=!0}}break
case B.l:break
case B.i:break
case B.h:break}}}
A.bA.prototype={
m(a,b,c){var t,s,r,q,p,o
for(t=this.a,s=t.length,r=u.R,q=0;q<t.length;t.length===s||(0,A.r)(t),++q){p=t[q]
o=$.j.b
if(o==$.j)A.L(A.a1(""))
o=o.n(0,"waterfall")
if(o==null)o=r.a(o)
a.drawImage(o,p.a-b,p.b-c)}},
p(a){var t,s,r,q,p,o,n
if(a.d!=null){t=u.d
s=A.ek(new A.ay(this.a,t),!0,t.c)
for(t=s.length,r=u.R,q=0;q<t;++q){p=s[q]
o=p.b
n=a.ax
n===$&&A.t()
if(o>640+n.r){n=$.j.b
if(n==$.j)A.L(A.a1(""))
n=n.n(0,"waterfall")
n=A.eW((n==null?r.a(n):n).height)
p.z=0
p.Q=!0
n=p.b=o-n*2
p.f=5
o=n}p.z=p.z+$.a6
p.a=p.a+p.e
p.b=o+p.f}}}}
A.bq.prototype={
al(){var t,s,r,q,p
for(t=this.a,s=0;s<20;++s){r=this.b
q=this.c
p=new A.w()
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
l=A.bn(o.a-b,o.b-c,o.c,o.d,r)
a.globalAlpha=1-Math.abs(0.5-n/m)*2
n=$.j.b
if(n==$.j)A.L(A.a1(""))
n=n.n(0,"bubbles")
B.d.H(a,n==null?q.a(n):n,l)}}a.globalAlpha=1},
p(a){var t,s,r,q,p,o,n,m=this
if(a.d!=null){if(++m.r>=3){m.r=0
t=m.a
s=A.K(t)
r=s.i("z(1)")
s=s.i("G<1>")
q=new A.G(t,r.a(new A.ca()),s)
if(!q.gaH(q)){p=new A.G(t,r.a(new A.cb()),s).a2(0,0)
p.z=0
p.Q=!0
p.b=m.c
t=m.e
p.a=m.b+t.B()*6-3
p.c=p.d=t.B()*5+15}o=!0}else o=!1
for(t=m.a,s=A.K(t),r=s.i("z(1)").a(new A.cc()),t=new J.n(t,t.length,s.i("n<1>")),r=new A.D(t,r,s.i("D<1>")),s=s.c;r.l();){q=t.d
if(q==null)q=s.a(q)
n=q.z+$.a6
q.z=n
q.b=q.b+q.f
if(o&&q.c>0){q.a+=0.5;--q.c;--q.d}if(n>q.y)q.Q=!1}}}}
A.ca.prototype={
$1(a){return!u.z.a(a).Q},
$S:0}
A.cb.prototype={
$1(a){return!u.z.a(a).Q},
$S:0}
A.cc.prototype={
$1(a){return u.z.a(a).Q},
$S:0}
A.bh.prototype={
ai(){var t,s,r,q,p
for(t=this.a,s=0;s<30;++s){r=this.b
q=this.c
p=new A.w()
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
if(q.Q){B.d.sE(a,"rgba(255, 255, 255, "+A.e(1-q.z/q.y)+")")
a.fillRect(q.a-b,q.b-c,q.c,q.d)}}},
p(a){var t,s,r,q,p,o,n,m
if(a.d!=null){t=this.a
s=A.K(t)
r=s.i("z(1)")
q=s.i("G<1>")
p=new A.G(t,r.a(new A.c_()),q)
if(p.gq(p)>3)for(p=this.e,o=0;o<3;++o){n=new A.G(t,r.a(new A.c0()),q).a2(0,o)
n.Q=!0
n.a=a.at.a+p.B()*a.at.c
n.f=5*p.B()
m=a.at
n.b=m.b+m.d}for(r=r.a(new A.c1()),t=new J.n(t,t.length,s.i("n<1>")),r=new A.D(t,r,s.i("D<1>")),s=s.c;r.l();){q=t.d
if(q==null)q=s.a(q)
p=q.z+$.a6
q.z=p
q.b=q.b+q.f
if(p>q.y)q.Q=!1}}}}
A.c_.prototype={
$1(a){return!u.z.a(a).Q},
$S:0}
A.c0.prototype={
$1(a){return!u.z.a(a).Q},
$S:0}
A.c1.prototype={
$1(a){return u.z.a(a).Q},
$S:0}
A.bi.prototype={
aj(){var t,s,r,q,p
for(t=this.a,s=0;s<10;++s){r=this.b
q=this.c
p=new A.w()
p.a=r
p.b=q
p.d=p.c=10
B.a.j(t,p)}},
u(a,b){var t,s,r,q,p,o,n=this
n.b=a
n.c=b
for(t=n.a,s=t.length,r=n.e,q=0;q<t.length;t.length===s||(0,A.r)(t),++q){p=t[q]
p.z=0
o=r.B()*3.141592653589793/4+1.5707963267948966
o=B.b.F(r.aJ(10),2)===0?o:6.283185307179586-o
p.e=Math.sin(o)*10
p.f=Math.cos(o)*10
p.a=a+50*(1-o/4.71238898038469)
p.b=b
p.y=10
p.Q=!0}},
m(a,b,c){var t,s,r,q,p,o,n,m
for(t=this.a,s=t.length,r=u.H,q=u.R,p=0;p<t.length;t.length===s||(0,A.r)(t),++p){o=t[p]
if(o.Q){a.globalAlpha=1-o.z/o.y
n=A.bn(o.a-b,o.b-c,o.c,o.d,r)
m=$.j.b
if(m==$.j)A.L(A.a1(""))
m=m.n(0,"bubbles")
B.d.H(a,m==null?q.a(m):m,n)}}a.globalAlpha=1},
p(a){var t,s,r,q,p,o,n
if(a.d!=null)for(t=this.a,s=t.length,r=$.a6,q=0;q<s;++q){p=t[q]
if(p.Q){p.a=p.a+p.e
o=p.b
n=p.f
p.b=o+n
o=p.z+=r
p.f=n+1
if(o>p.y)p.Q=!1}}}}
A.b7.prototype={
ag(){var t,s,r,q,p,o=this
o.d=!0
for(t=o.a,s=0;s<15;++s){r=o.b
q=o.c
p=new A.w()
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
p.as=r.B()*3.141592653589793*2
p.Q=!0}},
m(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f="double_jump_particle",e=this.a
if(1>=e.length)return A.l(e,1)
t=e[1]
s=t.z/t.y
a.globalAlpha=s*0.8
t=e.length
if(1>=t)return A.l(e,1)
r=e[1]
q=r.z>r.y?1:(1-s)/3
p=r.c*q
o=r.d*q
for(r=p/2,n=o/2,m=u.H,l=u.R,k=0,j=0;j<e.length;e.length===t||(0,A.r)(e),++j){i=e[j]
if(i.Q&&i.z<i.y&&k>0){h=A.bn(i.a-b-r,i.b-c-n,p,o,m)
g=$.j.b
if(g==$.j)A.L(A.a1(""))
g=g.n(0,f)
B.d.H(a,g==null?l.a(g):g,h)}++k}t=s*2
a.globalAlpha=t>1?1:t
if(0>=e.length)return A.l(e,0)
if(e[0].Q){t=$.j.D().n(0,f)
if(t==null)t=l.a(t)
if(0>=e.length)return A.l(e,0)
e=e[0]
a.drawImage(t,e.a-b-e.c/2,e.b-c-e.d/2)}a.globalAlpha=1},
p(a){var t,s,r,q,p,o,n,m,l,k,j=this
if(a.d!=null){t=a.at
j.b=t.a+t.c/2
j.c=t.b+t.d/2
t=j.a
s=t.length
if(1>=s)return A.l(t,1)
r=t[1]
q=100*(1-r.z/r.y)
for(p=0,o=0;o<t.length;t.length===s||(0,A.r)(t),++o){n=t[o]
if(n.Q){n.z=n.z+$.a6
r=j.b
if(p>0){m=Math.sin(n.as)
l=B.b.F(p,2)===0
k=l?1.5:1
n.a=r+m*q*k
k=j.c
m=Math.cos(n.as)
r=l?1.5:1
n.b=k+m*q*r
if(n.z>n.y)n.Q=!1}else{n.a=r
n.b=j.c}}++p}}}}
A.b2.prototype={
af(){var t,s,r,q,p
for(t=this.a,s=0;s<10;++s){r=this.b
q=this.c
p=new A.w()
p.a=r
p.b=q
p.d=p.c=10
B.a.j(t,p)}},
u(a,b){var t,s,r,q,p,o,n=this
n.b=a
n.c=b
for(t=n.a,s=t.length,r=n.e,q=0;q<t.length;t.length===s||(0,A.r)(t),++q){p=t[q]
p.z=0
o=r.B()*3.141592653589793*2
p.e=Math.sin(o)*10
p.f=Math.cos(o)*10
p.a=a
p.b=b
p.y=10
p.Q=!0}},
m(a,b,c){var t,s,r,q,p,o
for(t=this.a,s=t.length,r=u.R,q=0;q<t.length;t.length===s||(0,A.r)(t),++q){p=t[q]
if(p.Q){a.globalAlpha=1-p.z/p.y
o=$.j.b
if(o==$.j)A.L(A.a1(""))
o=o.n(0,"coin_particle")
if(o==null)o=r.a(o)
a.drawImage(o,p.a-b,p.b-c)}}a.globalAlpha=1},
p(a){var t,s,r,q,p,o,n
if(a.d!=null)for(t=this.a,s=t.length,r=$.a6,q=0;q<s;++q){p=t[q]
if(p.Q){p.a=p.a+p.e
o=p.b
n=p.f
p.b=o+n
o=p.z+=r
p.f=n+1
if(o>p.y)p.Q=!1}}}}
A.x.prototype={
m(a,b,c){},
p(a){},
a4(){return B.a.aB(this.a,new A.c4())}}
A.c4.prototype={
$1(a){return u.z.a(a).Q},
$S:0}
A.w.prototype={
ak(a,b,c,d){var t=this
t.a=a
t.b=b
t.c=c
t.d=d}}
A.ax.prototype={}
A.T.prototype={
W(a,b,c,d){var t=this
t.a=a
t.b=b
t.c=c
t.d=d
t.r=t.w=!0
t.x=1},
p(a){var t=this,s=a.e,r=A.K(s)
r=new A.G(s,r.i("z(1)").a(new A.c5(t)),r.i("G<1>"))
r.gq(r)
s=t.b
r=a.ax
r===$&&A.t()
if(s-r.r>640)a.V(0)
s=t.a
r=t.c
if(s+r>360){t.e*=-1
t.a=360-r-1}else if(s<0){t.e*=-1
t.a=1}if(t.at){t.P(!1)
t.ay=t.ay+$.a6
if(Math.abs(t.f)>5){t.at=!1
t.ay=0}}},
m(a,b,c){var t,s,r=this,q=r.f,p=r.d,o=q>0?p:p+-q
q=r.ay
if(q<5&&r.at)o-=(2.5-Math.abs(2.5-q))*8
else if(r.at)o-=(25-Math.abs(25-B.b.F(q,50)))*0.25
q=r.c
t=q*(p/o)
s=A.bn(r.a+(q-t)/2-b,r.b+(p-o)-c,t,o,u.H)
if(r.ch===B.i){q=$.j.D().n(0,"player_left")
if(q==null)q=u.R.a(q)}else{q=$.j.D().n(0,"player_right")
if(q==null)q=u.R.a(q)}B.d.H(a,q,s)},
K(a,b){switch(b){case B.f:break
case B.k:break
case B.l:break
case B.i:break
case B.h:break}},
aG(a){var t,s,r,q=this
if(!q.at&&!q.ax)return
t=J.e2(a)
s=q.a
q.e=(t.a-(s+q.c/2))/30
q.f=-30
t=q.b-=20
r=q.z
if(r!=null)r.u(s,t)
q.ch=q.e<0?B.i:B.h
q.P(!1)},
aI(a){if(a instanceof A.aa)return a.y
return!1},
P(a){var t
if(!a){t=this.as
if(t!=null){t=t.a
if(0>=t.length)return A.l(t,0)
t[0].Q=!1}}this.ax=a}}
A.c5.prototype={
$1(a){return this.a.aI(u.v.a(a))},
$S:13};(function aliases(){var t=J.am.prototype
t.ac=t.h
t=J.a2.prototype
t.ad=t.h})();(function installTearOffs(){var t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers._instance_1u
t(A,"fr","ew",3)
t(A,"fs","ex",3)
t(A,"ft","ey",3)
s(A,"dH","fl",2)
r(A.bb.prototype,"gaO","p",11)})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(A.i,null)
r(A.i,[A.cG,J.am,J.n,A.f,A.c8,A.o,A.B,A.az,A.ce,A.c3,A.aI,A.Z,A.cl,A.C,A.bG,A.bK,A.aJ,A.bD,A.cv,A.as,A.aE,A.aO,A.bI,A.aG,A.au,A.b8,A.cm,A.bk,A.av,A.cn,A.E,A.bs,A.bE,A.bH,A.a4,A.bJ,A.bR,A.bS,A.c6,A.u,A.bV,A.bX,A.bb,A.x])
r(J.am,[J.bd,J.be,J.I,J.m,J.ao,J.ab])
r(J.I,[J.a2,A.k,A.aY,A.aj,A.bW,A.ak,A.b])
r(J.a2,[J.bl,J.ad,J.S])
s(J.bZ,J.m)
r(J.ao,[J.an,J.bf])
r(A.f,[A.ap,A.bv,A.bg,A.bx,A.bo,A.ai,A.bF,A.bj,A.X,A.by,A.bw,A.b3,A.b5])
r(A.o,[A.al,A.G,A.ay])
s(A.D,A.B)
s(A.at,A.bv)
r(A.Z,[A.b_,A.b0,A.bt,A.cA,A.cC,A.ci,A.ch,A.cq,A.bT,A.bU,A.bY,A.ca,A.cb,A.cc,A.c_,A.c0,A.c1,A.c4,A.c5])
r(A.bt,[A.br,A.a9])
s(A.bC,A.ai)
r(A.b0,[A.cB,A.c2])
s(A.aK,A.bF)
r(A.b_,[A.cj,A.ck,A.cs,A.cr,A.cx])
s(A.cp,A.cv)
s(A.ar,A.as)
s(A.aC,A.ar)
s(A.aD,A.al)
s(A.aH,A.aO)
s(A.aF,A.aH)
r(A.X,[A.ac,A.bc])
r(A.k,[A.v,A.aA])
r(A.v,[A.a,A.H])
s(A.c,A.a)
r(A.c,[A.aV,A.aW,A.Y,A.ba,A.a0,A.a3,A.bp])
s(A.F,A.b)
s(A.J,A.F)
s(A.bz,A.a3)
s(A.aB,A.ak)
s(A.N,A.bJ)
r(A.u,[A.b1,A.b6,A.aa,A.w,A.T])
s(A.R,A.cm)
r(A.x,[A.bA,A.bq,A.bh,A.bi,A.b7,A.b2])
s(A.ax,A.w)
t(A.aO,A.au)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{cU:"int",bO:"double",W:"num",a5:"String",z:"bool",E:"Null",aq:"List"},mangledNames:{},types:["z(w)","E()","~()","~(~())","z(x)","@(@)","@(@,a5)","@(a5)","E(@)","E(~())","~(i?,i?)","@(bu)","de<@>(b)","z(u)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.eS(v.typeUniverse,JSON.parse('{"bl":"a2","ad":"a2","S":"a2","fR":"b","fY":"b","h0":"a","fT":"c","fZ":"v","fX":"v","h1":"J","fV":"F","fU":"H","h3":"H","fS":"a3","bd":{"z":[]},"m":{"aq":["1"],"o":["1"]},"bZ":{"m":["1"],"aq":["1"],"o":["1"]},"n":{"B":["1"]},"ao":{"bO":[],"W":[]},"an":{"bO":[],"cU":[],"W":[]},"bf":{"bO":[],"W":[]},"ab":{"a5":[]},"ap":{"f":[]},"al":{"o":["1"]},"G":{"o":["1"]},"D":{"B":["1"]},"ay":{"o":["1"]},"az":{"B":["1"]},"at":{"f":[]},"bg":{"f":[]},"bx":{"f":[]},"aI":{"df":[]},"Z":{"a_":[]},"b_":{"a_":[]},"b0":{"a_":[]},"bt":{"a_":[]},"br":{"a_":[]},"a9":{"a_":[]},"bo":{"f":[]},"bC":{"f":[]},"bF":{"f":[]},"aK":{"f":[]},"aJ":{"bu":[]},"aC":{"as":["1","2"]},"aD":{"o":["1"]},"aE":{"B":["1"]},"aF":{"au":["1"],"d8":["1"],"o":["1"]},"aG":{"B":["1"]},"ar":{"as":["1","2"]},"aH":{"au":["1"],"o":["1"]},"de":{"o":["1"]},"ai":{"f":[]},"bv":{"f":[]},"bj":{"f":[]},"X":{"f":[]},"ac":{"f":[]},"bc":{"f":[]},"by":{"f":[]},"bw":{"f":[]},"b3":{"f":[]},"bk":{"f":[]},"av":{"f":[]},"b5":{"f":[]},"a0":{"a":[],"k":[],"aZ":[]},"c":{"a":[],"k":[]},"aV":{"a":[],"k":[]},"aW":{"a":[],"k":[]},"Y":{"a":[],"k":[],"aZ":[]},"H":{"k":[]},"ak":{"N":["W"]},"a":{"k":[]},"ba":{"a":[],"k":[]},"a3":{"a":[],"k":[]},"J":{"b":[]},"v":{"k":[]},"bp":{"a":[],"k":[]},"F":{"b":[]},"bz":{"a":[],"k":[],"aZ":[]},"aA":{"cg":[],"k":[]},"aB":{"N":["W"]},"bE":{"cg":[],"k":[]},"bH":{"en":[]},"N":{"bJ":["1"]},"b1":{"u":[]},"b6":{"u":[]},"aa":{"u":[]},"w":{"u":[]},"ax":{"w":[],"u":[]},"bA":{"x":[]},"bq":{"x":[]},"bh":{"x":[]},"bi":{"x":[]},"b7":{"x":[]},"b2":{"x":[]},"T":{"u":[]}}'))
A.eR(v.typeUniverse,JSON.parse('{"al":1,"ar":2,"aH":1,"aO":1}'))
var u=(function rtii(){var t=A.dK
return{E:t("Y"),j:t("R"),h:t("a"),v:t("u"),C:t("f"),D:t("b"),Z:t("a_"),R:t("a0"),U:t("o<@>"),n:t("m<u>"),I:t("m<w>"),a:t("m<x>"),s:t("m<a5>"),b:t("m<@>"),T:t("be"),g:t("S"),r:t("aq<u>"),c:t("aq<x>"),V:t("J"),P:t("E"),K:t("i"),z:t("w"),W:t("x"),p:t("a4<W>"),L:t("h2"),q:t("N<W>"),l:t("df"),N:t("a5"),G:t("bu"),J:t("ad"),d:t("ay<ax>"),y:t("cg"),w:t("z"),i:t("bO"),B:t("@"),S:t("cU"),A:t("0&*"),_:t("i*"),O:t("k?"),Q:t("d4<E>?"),X:t("i?"),Y:t("bI?"),o:t("@(b)?"),H:t("W"),t:t("~"),M:t("~()"),F:t("~(bu)")}})();(function constants(){B.z=A.Y.prototype
B.d=A.aj.prototype
B.A=A.a0.prototype
B.B=J.am.prototype
B.a=J.m.prototype
B.b=J.an.prototype
B.c=J.ao.prototype
B.p=J.ab.prototype
B.C=J.S.prototype
B.D=J.I.prototype
B.q=J.bl.prototype
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

B.y=new A.bk()
B.F=new A.c8()
B.e=new A.bH()
B.j=new A.cp()
B.f=new A.R("none")
B.k=new A.R("up")
B.l=new A.R("down")
B.i=new A.R("left")
B.h=new A.R("right")
B.E=A.fP("i")})();(function staticFields(){$.co=null
$.da=null
$.d1=null
$.d0=null
$.dL=null
$.dG=null
$.dP=null
$.cy=null
$.cD=null
$.cT=null
$.af=null
$.aQ=null
$.aR=null
$.cP=!1
$.bB=B.j
$.A=A.q([],A.dK("m<i>"))
$.j=A.ez()
$.et=0
$.cd=0
$.a6=0})();(function lazyInitializers(){var t=hunkHelpers.lazyFinal
t($,"fW","dR",()=>A.fA("_$dart_dartClosure"))
t($,"h4","dS",()=>A.O(A.cf({
toString:function(){return"$receiver$"}})))
t($,"h5","dT",()=>A.O(A.cf({$method$:null,
toString:function(){return"$receiver$"}})))
t($,"h6","dU",()=>A.O(A.cf(null)))
t($,"h7","dV",()=>A.O(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(s){return s.message}}()))
t($,"ha","dY",()=>A.O(A.cf(void 0)))
t($,"hb","dZ",()=>A.O(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(s){return s.message}}()))
t($,"h9","dX",()=>A.O(A.dk(null)))
t($,"h8","dW",()=>A.O(function(){try{null.$method$}catch(s){return s.message}}()))
t($,"hd","e0",()=>A.O(A.dk(void 0)))
t($,"hc","e_",()=>A.O(function(){try{(void 0).$method$}catch(s){return s.message}}()))
t($,"he","cW",()=>A.ev())
t($,"hp","e1",()=>A.dN(B.E))})();(function nativeSupport(){!function(){var t=function(a){var n={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.I,MediaError:J.I,NavigatorUserMediaError:J.I,OverconstrainedError:J.I,PositionError:J.I,GeolocationPositionError:J.I,HTMLBRElement:A.c,HTMLBaseElement:A.c,HTMLBodyElement:A.c,HTMLButtonElement:A.c,HTMLContentElement:A.c,HTMLDListElement:A.c,HTMLDataElement:A.c,HTMLDataListElement:A.c,HTMLDetailsElement:A.c,HTMLDialogElement:A.c,HTMLDivElement:A.c,HTMLEmbedElement:A.c,HTMLFieldSetElement:A.c,HTMLHRElement:A.c,HTMLHeadElement:A.c,HTMLHeadingElement:A.c,HTMLHtmlElement:A.c,HTMLIFrameElement:A.c,HTMLInputElement:A.c,HTMLLIElement:A.c,HTMLLabelElement:A.c,HTMLLegendElement:A.c,HTMLLinkElement:A.c,HTMLMapElement:A.c,HTMLMenuElement:A.c,HTMLMetaElement:A.c,HTMLMeterElement:A.c,HTMLModElement:A.c,HTMLOListElement:A.c,HTMLObjectElement:A.c,HTMLOptGroupElement:A.c,HTMLOptionElement:A.c,HTMLOutputElement:A.c,HTMLParagraphElement:A.c,HTMLParamElement:A.c,HTMLPictureElement:A.c,HTMLPreElement:A.c,HTMLProgressElement:A.c,HTMLQuoteElement:A.c,HTMLScriptElement:A.c,HTMLShadowElement:A.c,HTMLSlotElement:A.c,HTMLSourceElement:A.c,HTMLSpanElement:A.c,HTMLStyleElement:A.c,HTMLTableCaptionElement:A.c,HTMLTableCellElement:A.c,HTMLTableDataCellElement:A.c,HTMLTableHeaderCellElement:A.c,HTMLTableColElement:A.c,HTMLTableElement:A.c,HTMLTableRowElement:A.c,HTMLTableSectionElement:A.c,HTMLTemplateElement:A.c,HTMLTextAreaElement:A.c,HTMLTimeElement:A.c,HTMLTitleElement:A.c,HTMLTrackElement:A.c,HTMLUListElement:A.c,HTMLUnknownElement:A.c,HTMLDirectoryElement:A.c,HTMLFontElement:A.c,HTMLFrameElement:A.c,HTMLFrameSetElement:A.c,HTMLMarqueeElement:A.c,HTMLElement:A.c,HTMLAnchorElement:A.aV,HTMLAreaElement:A.aW,HTMLCanvasElement:A.Y,CanvasGradient:A.aY,CanvasRenderingContext2D:A.aj,CDATASection:A.H,CharacterData:A.H,Comment:A.H,ProcessingInstruction:A.H,Text:A.H,DOMException:A.bW,DOMRectReadOnly:A.ak,MathMLElement:A.a,SVGAElement:A.a,SVGAnimateElement:A.a,SVGAnimateMotionElement:A.a,SVGAnimateTransformElement:A.a,SVGAnimationElement:A.a,SVGCircleElement:A.a,SVGClipPathElement:A.a,SVGDefsElement:A.a,SVGDescElement:A.a,SVGDiscardElement:A.a,SVGEllipseElement:A.a,SVGFEBlendElement:A.a,SVGFEColorMatrixElement:A.a,SVGFEComponentTransferElement:A.a,SVGFECompositeElement:A.a,SVGFEConvolveMatrixElement:A.a,SVGFEDiffuseLightingElement:A.a,SVGFEDisplacementMapElement:A.a,SVGFEDistantLightElement:A.a,SVGFEFloodElement:A.a,SVGFEFuncAElement:A.a,SVGFEFuncBElement:A.a,SVGFEFuncGElement:A.a,SVGFEFuncRElement:A.a,SVGFEGaussianBlurElement:A.a,SVGFEImageElement:A.a,SVGFEMergeElement:A.a,SVGFEMergeNodeElement:A.a,SVGFEMorphologyElement:A.a,SVGFEOffsetElement:A.a,SVGFEPointLightElement:A.a,SVGFESpecularLightingElement:A.a,SVGFESpotLightElement:A.a,SVGFETileElement:A.a,SVGFETurbulenceElement:A.a,SVGFilterElement:A.a,SVGForeignObjectElement:A.a,SVGGElement:A.a,SVGGeometryElement:A.a,SVGGraphicsElement:A.a,SVGImageElement:A.a,SVGLineElement:A.a,SVGLinearGradientElement:A.a,SVGMarkerElement:A.a,SVGMaskElement:A.a,SVGMetadataElement:A.a,SVGPathElement:A.a,SVGPatternElement:A.a,SVGPolygonElement:A.a,SVGPolylineElement:A.a,SVGRadialGradientElement:A.a,SVGRectElement:A.a,SVGScriptElement:A.a,SVGSetElement:A.a,SVGStopElement:A.a,SVGStyleElement:A.a,SVGElement:A.a,SVGSVGElement:A.a,SVGSwitchElement:A.a,SVGSymbolElement:A.a,SVGTSpanElement:A.a,SVGTextContentElement:A.a,SVGTextElement:A.a,SVGTextPathElement:A.a,SVGTextPositioningElement:A.a,SVGTitleElement:A.a,SVGUseElement:A.a,SVGViewElement:A.a,SVGGradientElement:A.a,SVGComponentTransferFunctionElement:A.a,SVGFEDropShadowElement:A.a,SVGMPathElement:A.a,Element:A.a,AbortPaymentEvent:A.b,AnimationEvent:A.b,AnimationPlaybackEvent:A.b,ApplicationCacheErrorEvent:A.b,BackgroundFetchClickEvent:A.b,BackgroundFetchEvent:A.b,BackgroundFetchFailEvent:A.b,BackgroundFetchedEvent:A.b,BeforeInstallPromptEvent:A.b,BeforeUnloadEvent:A.b,BlobEvent:A.b,CanMakePaymentEvent:A.b,ClipboardEvent:A.b,CloseEvent:A.b,CustomEvent:A.b,DeviceMotionEvent:A.b,DeviceOrientationEvent:A.b,ErrorEvent:A.b,ExtendableEvent:A.b,ExtendableMessageEvent:A.b,FetchEvent:A.b,FontFaceSetLoadEvent:A.b,ForeignFetchEvent:A.b,GamepadEvent:A.b,HashChangeEvent:A.b,InstallEvent:A.b,MediaEncryptedEvent:A.b,MediaKeyMessageEvent:A.b,MediaQueryListEvent:A.b,MediaStreamEvent:A.b,MediaStreamTrackEvent:A.b,MessageEvent:A.b,MIDIConnectionEvent:A.b,MIDIMessageEvent:A.b,MutationEvent:A.b,NotificationEvent:A.b,PageTransitionEvent:A.b,PaymentRequestEvent:A.b,PaymentRequestUpdateEvent:A.b,PopStateEvent:A.b,PresentationConnectionAvailableEvent:A.b,PresentationConnectionCloseEvent:A.b,ProgressEvent:A.b,PromiseRejectionEvent:A.b,PushEvent:A.b,RTCDataChannelEvent:A.b,RTCDTMFToneChangeEvent:A.b,RTCPeerConnectionIceEvent:A.b,RTCTrackEvent:A.b,SecurityPolicyViolationEvent:A.b,SensorErrorEvent:A.b,SpeechRecognitionError:A.b,SpeechRecognitionEvent:A.b,SpeechSynthesisEvent:A.b,StorageEvent:A.b,SyncEvent:A.b,TrackEvent:A.b,TransitionEvent:A.b,WebKitTransitionEvent:A.b,VRDeviceEvent:A.b,VRDisplayEvent:A.b,VRSessionEvent:A.b,MojoInterfaceRequestEvent:A.b,ResourceProgressEvent:A.b,USBConnectionEvent:A.b,IDBVersionChangeEvent:A.b,AudioProcessingEvent:A.b,OfflineAudioCompletionEvent:A.b,WebGLContextEvent:A.b,Event:A.b,InputEvent:A.b,SubmitEvent:A.b,EventTarget:A.k,HTMLFormElement:A.ba,HTMLImageElement:A.a0,HTMLAudioElement:A.a3,HTMLMediaElement:A.a3,MouseEvent:A.J,DragEvent:A.J,PointerEvent:A.J,WheelEvent:A.J,Document:A.v,DocumentFragment:A.v,HTMLDocument:A.v,ShadowRoot:A.v,XMLDocument:A.v,Attr:A.v,DocumentType:A.v,Node:A.v,HTMLSelectElement:A.bp,CompositionEvent:A.F,FocusEvent:A.F,KeyboardEvent:A.F,TextEvent:A.F,TouchEvent:A.F,UIEvent:A.F,HTMLVideoElement:A.bz,Window:A.aA,DOMWindow:A.aA,ClientRect:A.aB,DOMRect:A.aB})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,GeolocationPositionError:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLCanvasElement:true,CanvasGradient:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,DOMException:true,DOMRectReadOnly:false,MathMLElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,EventTarget:false,HTMLFormElement:true,HTMLImageElement:true,HTMLAudioElement:true,HTMLMediaElement:false,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,HTMLSelectElement:true,CompositionEvent:true,FocusEvent:true,KeyboardEvent:true,TextEvent:true,TouchEvent:true,UIEvent:false,HTMLVideoElement:true,Window:true,DOMWindow:true,ClientRect:true,DOMRect:true})})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var t=A.fJ
if(typeof dartMainRunner==="function")dartMainRunner(t,[])
else t([])})})()
//# sourceMappingURL=main.js.map
