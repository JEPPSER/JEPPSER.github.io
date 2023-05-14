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
a[c]=function(){a[c]=function(){A.h0(b)}
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
if(a[b]!==t)A.h1(b)
a[b]=s}var r=a[b]
a[c]=function(){return r}
return r}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t)convertToFastObject(a[t])}var y=0
function instanceTearOffGetter(a,b){var t=null
return a?function(c){if(t===null)t=A.d3(b)
return new t(c,this)}:function(){if(t===null)t=A.d3(b)
return new t(this,null)}}function staticTearOffGetter(a){var t=null
return function(){if(t===null)t=A.d3(a).prototype
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
a(hunkHelpers,v,w,$)}var A={cT:function cT(){},
V(a){return new A.at("Field '"+a+"' has not been initialized.")},
aB(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
dz(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
eH(a,b,c){return A.dz(A.aB(A.aB(c,a),b))},
dA(a,b,c,d,e){return A.dz(A.aB(A.aB(A.aB(A.aB(e,a),b),c),d))},
e0(a,b,c){return a},
at:function at(a){this.a=a},
ci:function ci(){},
ap:function ap(){},
B:function B(a,b,c){this.a=a
this.b=b
this.$ti=c},
F:function F(a,b,c){this.a=a
this.b=b
this.$ti=c},
aD:function aD(a,b){this.a=a
this.$ti=b},
aE:function aE(a,b){this.a=a
this.$ti=b},
e6(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
e(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.bZ(a)
return t},
bu(a){var t,s=$.ds
if(s==null)s=$.ds=Symbol("identityHashCode")
t=a[s]
if(t==null){t=Math.random()*0x3fffffff|0
a[s]=t}return t},
ch(a){return A.eB(a)},
eB(a){var t,s,r,q
if(a instanceof A.j)return A.z(A.bY(a),null)
t=J.ak(a)
if(t===B.B||t===B.D||u.J.b(a)){s=B.n(a)
if(s!=="Object"&&s!=="")return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&q!=="Object"&&q!=="")return q}}return A.z(A.bY(a),null)},
m(a,b){if(a==null)J.dc(a)
throw A.d(A.fL(a,b))},
fL(a,b){var t,s="index"
if(!A.dW(b))return new A.a0(!0,b,s,null)
t=A.cH(J.dc(a))
if(b<0||b>=t)return A.dl(b,t,a,s)
return new A.af(null,null,!0,b,s,"Value not in range")},
d(a){var t,s
if(a==null)a=new A.br()
t=new Error()
t.dartException=a
s=A.h2
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:s})
t.name=""}else t.toString=s
return t},
h2(){return J.bZ(this.dartException)},
H(a){throw A.d(a)},
p(a){throw A.d(A.an(a))},
Q(a){var t,s,r,q,p,o
a=A.h_(a.replace(String({}),"$receiver$"))
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=A.k([],u.s)
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new A.cp(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),s,r,q,p,o)},
cq(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
dD(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
cU(a,b){var t=b==null,s=t?null:b.method
return new A.bj(a,s,t?null:b.receiver)},
h4(a){if(a==null)return new A.cd(a)
if(typeof a!=="object")return a
if("dartException" in a)return A.aa(a,a.dartException)
return A.fE(a)},
aa(a,b){if(u.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
fE(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((B.c.aK(s,16)&8191)===10)switch(r){case 438:return A.aa(a,A.cU(A.e(t)+" (Error "+r+")",f))
case 445:case 5007:q=A.e(t)
return A.aa(a,new A.ax(q+" (Error "+r+")",f))}}if(a instanceof TypeError){p=$.e8()
o=$.e9()
n=$.ea()
m=$.eb()
l=$.ee()
k=$.ef()
j=$.ed()
$.ec()
i=$.eh()
h=$.eg()
g=p.C(t)
if(g!=null)return A.aa(a,A.cU(A.bV(t),g))
else{g=o.C(t)
if(g!=null){g.method="call"
return A.aa(a,A.cU(A.bV(t),g))}else{g=n.C(t)
if(g==null){g=m.C(t)
if(g==null){g=l.C(t)
if(g==null){g=k.C(t)
if(g==null){g=j.C(t)
if(g==null){g=m.C(t)
if(g==null){g=i.C(t)
if(g==null){g=h.C(t)
q=g!=null}else q=!0}else q=!0}else q=!0}else q=!0}else q=!0}else q=!0}else q=!0
if(q){A.bV(t)
return A.aa(a,new A.ax(t,g==null?f:g.method))}}}return A.aa(a,new A.bG(typeof t=="string"?t:""))}if(a instanceof RangeError){if(typeof t=="string"&&t.indexOf("call stack")!==-1)return new A.aA()
t=function(b){try{return String(b)}catch(e){}return null}(a)
return A.aa(a,new A.a0(!1,f,f,typeof t=="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t=="string"&&t==="too much recursion")return new A.aA()
return a},
fQ(a){var t
if(a==null)return new A.aN(a)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new A.aN(a)},
e3(a){if(a==null||typeof a!="object")return J.cS(a)
else return A.bu(a)},
fM(a,b){var t,s=a.length
for(t=0;t<s;++t)b.i(0,a[t])
return b},
fV(a,b,c,d,e,f){u.Z.a(a)
switch(A.cH(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.d(new A.cy("Unsupported number of arguments for wrapped closure"))},
aY(a,b){var t
if(a==null)return null
t=a.$identity
if(!!t)return t
t=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.fV)
a.$identity=t
return t},
eq(a1){var t,s,r,q,p,o,n,m,l,k,j=a1.co,i=a1.iS,h=a1.iI,g=a1.nDA,f=a1.aI,e=a1.fs,d=a1.cs,c=e[0],b=d[0],a=j[c],a0=a1.fT
a0.toString
t=i?Object.create(new A.bz().constructor.prototype):Object.create(new A.ab(null,null).constructor.prototype)
t.$initialize=t.constructor
if(i)s=function static_tear_off(){this.$initialize()}
else s=function tear_off(a2,a3){this.$initialize(a2,a3)}
t.constructor=s
s.prototype=t
t.$_name=c
t.$_target=a
r=!i
if(r)q=A.dh(c,a,h,g)
else{t.$static_name=c
q=a}t.$S=A.em(a0,i,h)
t[b]=q
for(p=q,o=1;o<e.length;++o){n=e[o]
if(typeof n=="string"){m=j[n]
l=n
n=m}else l=""
k=d[o]
if(k!=null){if(r)n=A.dh(l,n,h,g)
t[k]=n}if(o===f)p=n}t.$C=p
t.$R=a1.rC
t.$D=a1.dV
return s},
em(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.d("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.ek)}throw A.d("Error in functionType of tearoff")},
en(a,b,c,d){var t=A.dg
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
dh(a,b,c,d){var t,s
if(c)return A.ep(a,b,d)
t=b.length
s=A.en(t,d,a,b)
return s},
eo(a,b,c,d){var t=A.dg,s=A.el
switch(b?-1:a){case 0:throw A.d(new A.bw("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,t)
default:return function(e,f,g){return function(){var r=[g(this)]
Array.prototype.push.apply(r,arguments)
return e.apply(f(this),r)}}(d,s,t)}},
ep(a,b,c){var t,s
if($.de==null)$.de=A.dd("interceptor")
if($.df==null)$.df=A.dd("receiver")
t=b.length
s=A.eo(t,c,a,b)
return s},
d3(a){return A.eq(a)},
ek(a,b){return A.cE(v.typeUniverse,A.bY(a.a),b)},
dg(a){return a.a},
el(a){return a.b},
dd(a){var t,s,r,q=new A.ab("receiver","interceptor"),p=J.dn(Object.getOwnPropertyNames(q),u.X)
for(t=p.length,s=0;s<t;++s){r=p[s]
if(q[r]===a)return r}throw A.d(A.ej("Field name "+a+" not found."))},
e_(a){if(a==null)A.fF("boolean expression must not be null")
return a},
fF(a){throw A.d(new A.bL(a))},
h0(a){throw A.d(new A.b9(a))},
fP(a){return v.getIsolateTag(a)},
hH(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
fX(a){var t,s,r,q,p,o=A.bV($.e1.$1(a)),n=$.cJ[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.cO[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=A.fd($.dY.$2(a,o))
if(r!=null){n=$.cJ[r]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.cO[r]
if(t!=null)return t
s=v.interceptorsByTag[r]
o=r}}if(s==null)return null
t=s.prototype
q=o[0]
if(q==="!"){n=A.cP(t)
$.cJ[o]=n
Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}if(q==="~"){$.cO[o]=t
return t}if(q==="-"){p=A.cP(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return A.e4(a,t)
if(q==="*")throw A.d(A.dE(o))
if(v.leafTags[o]===true){p=A.cP(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return A.e4(a,t)},
e4(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.d8(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
cP(a){return J.d8(a,!1,null,!!a.$ihe)},
fZ(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return A.cP(t)
else return J.d8(t,c,null,null)},
fT(){if(!0===$.d6)return
$.d6=!0
A.fU()},
fU(){var t,s,r,q,p,o,n,m
$.cJ=Object.create(null)
$.cO=Object.create(null)
A.fS()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.e5.$1(p)
if(o!=null){n=A.fZ(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
fS(){var t,s,r,q,p,o,n=B.r()
n=A.aj(B.t,A.aj(B.u,A.aj(B.o,A.aj(B.o,A.aj(B.v,A.aj(B.w,A.aj(B.x(B.n),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.e1=new A.cL(q)
$.dY=new A.cM(p)
$.e5=new A.cN(o)},
aj(a,b){return a(b)||b},
h_(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
cp:function cp(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ax:function ax(a,b){this.a=a
this.b=b},
bj:function bj(a,b,c){this.a=a
this.b=b
this.c=c},
bG:function bG(a){this.a=a},
cd:function cd(a){this.a=a},
aN:function aN(a){this.a=a
this.b=null},
a2:function a2(){},
b4:function b4(){},
b5:function b5(){},
bB:function bB(){},
bz:function bz(){},
ab:function ab(a,b){this.a=a
this.b=b},
bw:function bw(a){this.a=a},
bL:function bL(a){this.a=a},
cL:function cL(a){this.a=a},
cM:function cM(a){this.a=a},
cN:function cN(a){this.a=a},
h1(a){return A.H(new A.at("Field '"+a+"' has been assigned during initialization."))},
n(){return A.H(A.V(""))},
eO(){var t=new A.cw()
return t.b=t},
cw:function cw(){this.b=null},
du(a,b){var t=b.c
return t==null?b.c=A.d_(a,b.y,!0):t},
dt(a,b){var t=b.c
return t==null?b.c=A.aR(a,"di",[b.y]):t},
dv(a){var t=a.x
if(t===6||t===7||t===8)return A.dv(a.y)
return t===12||t===13},
eG(a){return a.at},
d4(a){return A.bU(v.typeUniverse,a,!1)},
Z(a,b,c,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.x
switch(d){case 5:case 1:case 2:case 3:case 4:return b
case 6:t=b.y
s=A.Z(a,t,c,a0)
if(s===t)return b
return A.dO(a,s,!0)
case 7:t=b.y
s=A.Z(a,t,c,a0)
if(s===t)return b
return A.d_(a,s,!0)
case 8:t=b.y
s=A.Z(a,t,c,a0)
if(s===t)return b
return A.dN(a,s,!0)
case 9:r=b.z
q=A.aX(a,r,c,a0)
if(q===r)return b
return A.aR(a,b.y,q)
case 10:p=b.y
o=A.Z(a,p,c,a0)
n=b.z
m=A.aX(a,n,c,a0)
if(o===p&&m===n)return b
return A.cY(a,o,m)
case 12:l=b.y
k=A.Z(a,l,c,a0)
j=b.z
i=A.fB(a,j,c,a0)
if(k===l&&i===j)return b
return A.dM(a,k,i)
case 13:h=b.z
a0+=h.length
g=A.aX(a,h,c,a0)
p=b.y
o=A.Z(a,p,c,a0)
if(g===h&&o===p)return b
return A.cZ(a,o,g,!0)
case 14:f=b.y
if(f<a0)return b
e=c[f-a0]
if(e==null)return b
return e
default:throw A.d(A.b1("Attempted to substitute unexpected RTI kind "+d))}},
aX(a,b,c,d){var t,s,r,q,p=b.length,o=A.cF(p)
for(t=!1,s=0;s<p;++s){r=b[s]
q=A.Z(a,r,c,d)
if(q!==r)t=!0
o[s]=q}return t?o:b},
fC(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=A.cF(n)
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=A.Z(a,p,c,d)
if(o!==p)t=!0
m.splice(s,3,r,q,o)}return t?m:b},
fB(a,b,c,d){var t,s=b.a,r=A.aX(a,s,c,d),q=b.b,p=A.aX(a,q,c,d),o=b.c,n=A.fC(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new A.bP()
t.a=r
t.b=p
t.c=n
return t},
k(a,b){a[v.arrayRti]=b
return a},
fJ(a){var t,s=a.$S
if(s!=null){if(typeof s=="number")return A.fR(s)
t=a.$S()
return t}return null},
e2(a,b){var t
if(A.dv(b))if(a instanceof A.a2){t=A.fJ(a)
if(t!=null)return t}return A.bY(a)},
bY(a){var t
if(a instanceof A.j){t=a.$ti
return t!=null?t:A.d0(a)}if(Array.isArray(a))return A.G(a)
return A.d0(J.ak(a))},
G(a){var t=a[v.arrayRti],s=u.b
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
aU(a){var t=a.$ti
return t!=null?t:A.d0(a)},
d0(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return A.fl(a,t)},
fl(a,b){var t=a instanceof A.a2?a.__proto__.__proto__.constructor:b,s=A.f8(v.typeUniverse,t.name)
b.$ccache=s
return s},
fR(a){var t,s=v.types,r=s[a]
if(typeof r=="string"){t=A.bU(v.typeUniverse,r,!1)
s[a]=t
return t}return r},
fK(a){var t,s,r,q=a.w
if(q!=null)return q
t=a.at
s=t.replace(/\*/g,"")
if(s===t)return a.w=new A.bT(a)
r=A.bU(v.typeUniverse,s,!0)
q=r.w
return a.w=q==null?r.w=new A.bT(r):q},
h3(a){return A.fK(A.bU(v.typeUniverse,a,!1))},
fk(a){var t,s,r,q,p=this
if(p===u.K)return A.ah(p,a,A.fp)
if(!A.S(p))if(!(p===u._))t=!1
else t=!0
else t=!0
if(t)return A.ah(p,a,A.ft)
t=p.x
s=t===6?p.y:p
if(s===u.S)r=A.dW
else if(s===u.i||s===u.H)r=A.fo
else if(s===u.N)r=A.fr
else r=s===u.w?A.dU:null
if(r!=null)return A.ah(p,a,r)
if(s.x===9){q=s.y
if(s.z.every(A.fW)){p.r="$i"+q
if(q==="au")return A.ah(p,a,A.fn)
return A.ah(p,a,A.fs)}}else if(t===7)return A.ah(p,a,A.fi)
return A.ah(p,a,A.fg)},
ah(a,b,c){a.b=c
return a.b(b)},
fj(a){var t,s=this,r=A.ff
if(!A.S(s))if(!(s===u._))t=!1
else t=!0
else t=!0
if(t)r=A.fe
else if(s===u.K)r=A.fc
else{t=A.aZ(s)
if(t)r=A.fh}s.a=r
return s.a(a)},
bW(a){var t,s=a.x
if(!A.S(a))if(!(a===u._))if(!(a===u.A))if(s!==7)if(!(s===6&&A.bW(a.y)))t=s===8&&A.bW(a.y)||a===u.P||a===u.T
else t=!0
else t=!0
else t=!0
else t=!0
else t=!0
return t},
fg(a){var t=this
if(a==null)return A.bW(t)
return A.i(v.typeUniverse,A.e2(a,t),null,t,null)},
fi(a){if(a==null)return!0
return this.y.b(a)},
fs(a){var t,s=this
if(a==null)return A.bW(s)
t=s.r
if(a instanceof A.j)return!!a[t]
return!!J.ak(a)[t]},
fn(a){var t,s=this
if(a==null)return A.bW(s)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
t=s.r
if(a instanceof A.j)return!!a[t]
return!!J.ak(a)[t]},
ff(a){var t,s=this
if(a==null){t=A.aZ(s)
if(t)return a}else if(s.b(a))return a
A.dS(a,s)},
fh(a){var t=this
if(a==null)return a
else if(t.b(a))return a
A.dS(a,t)},
dS(a,b){throw A.d(A.eY(A.dG(a,A.e2(a,b),A.z(b,null))))},
dG(a,b,c){var t=A.bc(a)
return t+": type '"+A.z(b==null?A.bY(a):b,null)+"' is not a subtype of type '"+c+"'"},
eY(a){return new A.aP("TypeError: "+a)},
w(a,b){return new A.aP("TypeError: "+A.dG(a,null,b))},
fp(a){return a!=null},
fc(a){if(a!=null)return a
throw A.d(A.w(a,"Object"))},
ft(a){return!0},
fe(a){return a},
dU(a){return!0===a||!1===a},
hw(a){if(!0===a)return!0
if(!1===a)return!1
throw A.d(A.w(a,"bool"))},
hy(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.w(a,"bool"))},
hx(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.d(A.w(a,"bool?"))},
fa(a){if(typeof a=="number")return a
throw A.d(A.w(a,"double"))},
hA(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.w(a,"double"))},
hz(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.w(a,"double?"))},
dW(a){return typeof a=="number"&&Math.floor(a)===a},
cH(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.d(A.w(a,"int"))},
hC(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.w(a,"int"))},
hB(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.d(A.w(a,"int?"))},
fo(a){return typeof a=="number"},
hD(a){if(typeof a=="number")return a
throw A.d(A.w(a,"num"))},
hE(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.w(a,"num"))},
fb(a){if(typeof a=="number")return a
if(a==null)return a
throw A.d(A.w(a,"num?"))},
fr(a){return typeof a=="string"},
bV(a){if(typeof a=="string")return a
throw A.d(A.w(a,"String"))},
hF(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.w(a,"String"))},
fd(a){if(typeof a=="string")return a
if(a==null)return a
throw A.d(A.w(a,"String?"))},
dX(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=s+A.z(a[r],b)
return t},
fw(a,b){var t,s,r,q,p,o,n=a.y,m=a.z
if(""===n)return"("+A.dX(m,b)+")"
t=m.length
s=n.split(",")
r=s.length-t
for(q="(",p="",o=0;o<t;++o,p=", "){q+=p
if(r===0)q+="{"
q+=A.z(m[o],b)
if(r>=0)q+=" "+s[r];++r}return q+"})"},
dT(a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=", "
if(a5!=null){t=a5.length
if(a4==null){a4=A.k([],u.s)
s=null}else s=a4.length
r=a4.length
for(q=t;q>0;--q)B.a.i(a4,"T"+(r+q))
for(p=u.X,o=u._,n="<",m="",q=0;q<t;++q,m=a2){l=a4.length
k=l-1-q
if(!(k>=0))return A.m(a4,k)
n=B.p.ah(n+m,a4[k])
j=a5[q]
i=j.x
if(!(i===2||i===3||i===4||i===5||j===p))if(!(j===o))l=!1
else l=!0
else l=!0
if(!l)n+=" extends "+A.z(j,a4)}n+=">"}else{n=""
s=null}p=a3.y
h=a3.z
g=h.a
f=g.length
e=h.b
d=e.length
c=h.c
b=c.length
a=A.z(p,a4)
for(a0="",a1="",q=0;q<f;++q,a1=a2)a0+=a1+A.z(g[q],a4)
if(d>0){a0+=a1+"["
for(a1="",q=0;q<d;++q,a1=a2)a0+=a1+A.z(e[q],a4)
a0+="]"}if(b>0){a0+=a1+"{"
for(a1="",q=0;q<b;q+=3,a1=a2){a0+=a1
if(c[q+1])a0+="required "
a0+=A.z(c[q+2],a4)+" "+c[q]}a0+="}"}if(s!=null){a4.toString
a4.length=s}return n+"("+a0+") => "+a},
z(a,b){var t,s,r,q,p,o,n,m=a.x
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){t=A.z(a.y,b)
return t}if(m===7){s=a.y
t=A.z(s,b)
r=s.x
return(r===12||r===13?"("+t+")":t)+"?"}if(m===8)return"FutureOr<"+A.z(a.y,b)+">"
if(m===9){q=A.fD(a.y)
p=a.z
return p.length>0?q+("<"+A.dX(p,b)+">"):q}if(m===11)return A.fw(a,b)
if(m===12)return A.dT(a,b,null)
if(m===13)return A.dT(a.y,b,a.z)
if(m===14){o=a.y
n=b.length
o=n-1-o
if(!(o>=0&&o<n))return A.m(b,o)
return b[o]}return"?"},
fD(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
f9(a,b){var t=a.tR[b]
for(;typeof t=="string";)t=a.tR[t]
return t},
f8(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return A.bU(a,b,!1)
else if(typeof n=="number"){t=n
s=A.aS(a,5,"#")
r=A.cF(t)
for(q=0;q<t;++q)r[q]=s
p=A.aR(a,b,r)
o[b]=p
return p}else return n},
f6(a,b){return A.dP(a.tR,b)},
f5(a,b){return A.dP(a.eT,b)},
bU(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=A.dL(A.dJ(a,null,b,c))
s.set(b,t)
return t},
cE(a,b,c){var t,s,r=b.Q
if(r==null)r=b.Q=new Map()
t=r.get(c)
if(t!=null)return t
s=A.dL(A.dJ(a,b,c,!0))
r.set(c,s)
return s},
f7(a,b,c){var t,s,r,q=b.as
if(q==null)q=b.as=new Map()
t=c.at
s=q.get(t)
if(s!=null)return s
r=A.cY(a,b,c.x===10?c.z:[c])
q.set(t,r)
return r},
R(a,b){b.a=A.fj
b.b=A.fk
return b},
aS(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new A.E(null,null)
t.x=b
t.at=c
s=A.R(a,t)
a.eC.set(c,s)
return s},
dO(a,b,c){var t,s=b.at+"*",r=a.eC.get(s)
if(r!=null)return r
t=A.f2(a,b,s,c)
a.eC.set(s,t)
return t},
f2(a,b,c,d){var t,s,r
if(d){t=b.x
if(!A.S(b))s=b===u.P||b===u.T||t===7||t===6
else s=!0
if(s)return b}r=new A.E(null,null)
r.x=6
r.y=b
r.at=c
return A.R(a,r)},
d_(a,b,c){var t,s=b.at+"?",r=a.eC.get(s)
if(r!=null)return r
t=A.f1(a,b,s,c)
a.eC.set(s,t)
return t},
f1(a,b,c,d){var t,s,r,q
if(d){t=b.x
if(!A.S(b))if(!(b===u.P||b===u.T))if(t!==7)s=t===8&&A.aZ(b.y)
else s=!0
else s=!0
else s=!0
if(s)return b
else if(t===1||b===u.A)return u.P
else if(t===6){r=b.y
if(r.x===8&&A.aZ(r.y))return r
else return A.du(a,b)}}q=new A.E(null,null)
q.x=7
q.y=b
q.at=c
return A.R(a,q)},
dN(a,b,c){var t,s=b.at+"/",r=a.eC.get(s)
if(r!=null)return r
t=A.f_(a,b,s,c)
a.eC.set(s,t)
return t},
f_(a,b,c,d){var t,s,r
if(d){t=b.x
if(!A.S(b))if(!(b===u._))s=!1
else s=!0
else s=!0
if(s||b===u.K)return b
else if(t===1)return A.aR(a,"di",[b])
else if(b===u.P||b===u.T)return u.Y}r=new A.E(null,null)
r.x=8
r.y=b
r.at=c
return A.R(a,r)},
f3(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new A.E(null,null)
t.x=14
t.y=b
t.at=r
s=A.R(a,t)
a.eC.set(r,s)
return s},
aQ(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].at
return t},
eZ(a){var t,s,r,q,p,o=a.length
for(t="",s="",r=0;r<o;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
t+=s+q+p+a[r+2].at}return t},
aR(a,b,c){var t,s,r,q=b
if(c.length>0)q+="<"+A.aQ(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new A.E(null,null)
s.x=9
s.y=b
s.z=c
if(c.length>0)s.c=c[0]
s.at=q
r=A.R(a,s)
a.eC.set(q,r)
return r},
cY(a,b,c){var t,s,r,q,p,o
if(b.x===10){t=b.y
s=b.z.concat(c)}else{s=c
t=b}r=t.at+(";<"+A.aQ(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new A.E(null,null)
p.x=10
p.y=t
p.z=s
p.at=r
o=A.R(a,p)
a.eC.set(r,o)
return o},
f4(a,b,c){var t,s,r="+"+(b+"("+A.aQ(c)+")"),q=a.eC.get(r)
if(q!=null)return q
t=new A.E(null,null)
t.x=11
t.y=b
t.z=c
t.at=r
s=A.R(a,t)
a.eC.set(r,s)
return s},
dM(a,b,c){var t,s,r,q,p,o=b.at,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+A.aQ(n)
if(k>0){t=m>0?",":""
h+=t+"["+A.aQ(l)+"]"}if(i>0){t=m>0?",":""
h+=t+"{"+A.eZ(j)+"}"}s=o+(h+")")
r=a.eC.get(s)
if(r!=null)return r
q=new A.E(null,null)
q.x=12
q.y=b
q.z=c
q.at=s
p=A.R(a,q)
a.eC.set(s,p)
return p},
cZ(a,b,c,d){var t,s=b.at+("<"+A.aQ(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=A.f0(a,b,c,s,d)
a.eC.set(s,t)
return t},
f0(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=A.cF(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.x===1){s[q]=p;++r}}if(r>0){o=A.Z(a,b,s,0)
n=A.aX(a,c,s,0)
return A.cZ(a,o,n,c!==n)}}m=new A.E(null,null)
m.x=13
m.y=b
m.z=c
m.at=d
return A.R(a,m)},
dJ(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
dL(a){var t,s,r,q,p,o,n,m,l,k=a.r,j=a.s
for(t=k.length,s=0;s<t;){r=k.charCodeAt(s)
if(r>=48&&r<=57)s=A.eS(s+1,r,k,j)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124)s=A.dK(a,s,k,j,!1)
else if(r===46)s=A.dK(a,s,k,j,!0)
else{++s
switch(r){case 44:break
case 58:j.push(!1)
break
case 33:j.push(!0)
break
case 59:j.push(A.Y(a.u,a.e,j.pop()))
break
case 94:j.push(A.f3(a.u,j.pop()))
break
case 35:j.push(A.aS(a.u,5,"#"))
break
case 64:j.push(A.aS(a.u,2,"@"))
break
case 126:j.push(A.aS(a.u,3,"~"))
break
case 60:j.push(a.p)
a.p=j.length
break
case 62:q=a.u
p=j.splice(a.p)
A.cX(a.u,a.e,p)
a.p=j.pop()
o=j.pop()
if(typeof o=="string")j.push(A.aR(q,o,p))
else{n=A.Y(q,a.e,o)
switch(n.x){case 12:j.push(A.cZ(q,n,p,a.n))
break
default:j.push(A.cY(q,n,p))
break}}break
case 38:A.eT(a,j)
break
case 42:q=a.u
j.push(A.dO(q,A.Y(q,a.e,j.pop()),a.n))
break
case 63:q=a.u
j.push(A.d_(q,A.Y(q,a.e,j.pop()),a.n))
break
case 47:q=a.u
j.push(A.dN(q,A.Y(q,a.e,j.pop()),a.n))
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
A.cX(a.u,a.e,p)
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
return A.Y(a.u,a.e,l)},
eS(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
dK(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36||s===124))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.x===10)p=p.y
o=A.f9(t,p.y)[q]
if(o==null)A.H('No "'+q+'" in "'+A.eG(p)+'"')
d.push(A.cE(t,p,o))}else d.push(q)
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
q=A.Y(n,a.e,m)
p=new A.bP()
p.a=r
p.b=t
p.c=s
b.push(A.dM(n,q,p))
return
case-4:b.push(A.f4(n,b.pop(),r))
return
default:throw A.d(A.b1("Unexpected state under `()`: "+A.e(m)))}},
eT(a,b){var t=b.pop()
if(0===t){b.push(A.aS(a.u,1,"0&"))
return}if(1===t){b.push(A.aS(a.u,4,"1&"))
return}throw A.d(A.b1("Unexpected extended operation "+A.e(t)))},
eQ(a,b){var t=b.splice(a.p)
A.cX(a.u,a.e,t)
a.p=b.pop()
return t},
Y(a,b,c){if(typeof c=="string")return A.aR(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.eU(a,b,c)}else return c},
cX(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=A.Y(a,b,c[t])},
eV(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=A.Y(a,b,c[t])},
eU(a,b,c){var t,s,r=b.x
if(r===10){if(c===0)return b.y
t=b.z
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.y
r=b.x}else if(c===0)return b
if(r!==9)throw A.d(A.b1("Indexed base must be an interface type"))
t=b.z
if(c<=t.length)return t[c-1]
throw A.d(A.b1("Bad index "+c+" for "+b.h(0)))},
i(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
if(b===d)return!0
if(!A.S(d))if(!(d===u._))t=!1
else t=!0
else t=!0
if(t)return!0
s=b.x
if(s===4)return!0
if(A.S(b))return!1
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
if(q===6){t=A.du(a,d)
return A.i(a,b,c,t,e)}if(s===8){if(!A.i(a,b.y,c,d,e))return!1
return A.i(a,A.dt(a,b),c,d,e)}if(s===7){t=A.i(a,u.P,c,d,e)
return t&&A.i(a,b.y,c,d,e)}if(q===8){if(A.i(a,b,c,d.y,e))return!0
return A.i(a,b,c,A.dt(a,d),e)}if(q===7){t=A.i(a,b,c,u.P,e)
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
if(!A.i(a,l,c,k,e)||!A.i(a,k,e,l,c))return!1}return A.dV(a,b.y,c,d.y,e)}if(q===12){if(b===u.g)return!0
if(t)return!1
return A.dV(a,b,c,d,e)}if(s===9){if(q!==9)return!1
return A.fm(a,b,c,d,e)}t=s===11
if(t&&d===u.L)return!0
if(t&&q===11)return A.fq(a,b,c,d,e)
return!1},
dV(a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
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
for(p=0;p<r;++p)q[p]=A.cE(a,b,s[p])
return A.dQ(a,q,null,c,d.z,e)}o=b.z
n=d.z
return A.dQ(a,o,null,c,n,e)},
dQ(a,b,c,d,e,f){var t,s,r,q=b.length
for(t=0;t<q;++t){s=b[t]
r=e[t]
if(!A.i(a,s,d,r,f))return!1}return!0},
fq(a,b,c,d,e){var t,s=b.z,r=d.z,q=s.length
if(q!==r.length)return!1
if(b.y!==d.y)return!1
for(t=0;t<q;++t)if(!A.i(a,s[t],c,r[t],e))return!1
return!0},
aZ(a){var t,s=a.x
if(!(a===u.P||a===u.T))if(!A.S(a))if(s!==7)if(!(s===6&&A.aZ(a.y)))t=s===8&&A.aZ(a.y)
else t=!0
else t=!0
else t=!0
else t=!0
return t},
fW(a){var t
if(!A.S(a))if(!(a===u._))t=!1
else t=!0
else t=!0
return t},
S(a){var t=a.x
return t===2||t===3||t===4||t===5||a===u.X},
dP(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
cF(a){return a>0?new Array(a):v.typeUniverse.sEA},
E:function E(a,b){var _=this
_.a=a
_.b=b
_.w=_.r=_.c=null
_.x=0
_.at=_.as=_.Q=_.z=_.y=null},
bP:function bP(){this.c=this.b=this.a=null},
bT:function bT(a){this.a=a},
bO:function bO(){},
aP:function aP(a){this.a=a},
eK(){var t,s,r={}
if(self.scheduleImmediate!=null)return A.fG()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
r.a=null
new self.MutationObserver(A.aY(new A.ct(r),1)).observe(t,{childList:true})
return new A.cs(r,t,s)}else if(self.setImmediate!=null)return A.fH()
return A.fI()},
eL(a){self.scheduleImmediate(A.aY(new A.cu(u.M.a(a)),0))},
eM(a){self.setImmediate(A.aY(new A.cv(u.M.a(a)),0))},
eN(a){u.M.a(a)
A.eW(0,a)},
dC(a,b){var t=B.c.L(a.a,1000)
return A.eX(t<0?0:t,b)},
eW(a,b){var t=new A.aO(!0)
t.az(a,b)
return t},
eX(a,b){var t=new A.aO(!1)
t.aA(a,b)
return t},
fv(){var t,s
for(t=$.ai;t!=null;t=$.ai){$.aW=null
s=t.b
$.ai=s
if(s==null)$.aV=null
t.a.$0()}},
fA(){$.d1=!0
try{A.fv()}finally{$.aW=null
$.d1=!1
if($.ai!=null)$.da().$1(A.dZ())}},
fz(a){var t,s,r,q,p,o=$.ai
if(o==null){t=new A.bM(a)
s=$.aV
if(s==null){$.ai=$.aV=t
if(!$.d1)$.da().$1(A.dZ())}else $.aV=s.b=t
$.aW=$.aV
return}r=new A.bM(a)
q=$.aW
if(q==null){r.b=o
$.ai=$.aW=r}else{p=q.b
r.b=p
$.aW=q.b=r
if(p==null)$.aV=r}},
eJ(a,b){var t=$.bK
if(t===B.l)return A.dC(a,u.F.a(b))
return A.dC(a,u.F.a(t.aM(b,u.G)))},
fx(a,b){A.fz(new A.cI(a,b))},
fy(a,b,c,d,e,f,g){var t,s=$.bK
if(s===c)return d.$1(e)
$.bK=c
t=s
try{s=d.$1(e)
return s}finally{$.bK=t}},
ct:function ct(a){this.a=a},
cs:function cs(a,b,c){this.a=a
this.b=b
this.c=c},
cu:function cu(a){this.a=a},
cv:function cv(a){this.a=a},
aO:function aO(a){this.a=a
this.b=null
this.c=0},
cD:function cD(a,b){this.a=a
this.b=b},
cC:function cC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bM:function bM(a){this.a=a
this.b=null},
cG:function cG(){},
cI:function cI(a,b){this.a=a
this.b=b},
cA:function cA(){},
cB:function cB(a,b,c){this.a=a
this.b=b
this.c=c},
et(a,b){return new A.aH(a.j("@<0>").aF(b).j("aH<1,2>"))},
dH(a,b){var t=a[b]
return t===a?null:t},
cV(a,b,c){if(c==null)a[b]=a
else a[b]=c},
dI(){var t=Object.create(null)
A.cV(t,"<non-identifier-key>",t)
delete t["<non-identifier-key>"]
return t},
ex(a,b){return b.j("dp<0>").a(A.fM(a,new A.aK(b.j("aK<0>"))))},
cW(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
eu(a,b,c){var t,s
if(A.d2(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=A.k([],u.s)
B.a.i($.C,a)
try{A.fu(a,t)}finally{if(0>=$.C.length)return A.m($.C,-1)
$.C.pop()}s=A.dy(b,u.U.a(t),", ")+c
return s.charCodeAt(0)==0?s:s},
dm(a,b,c){var t,s
if(A.d2(a))return b+"..."+c
t=new A.bA(b)
B.a.i($.C,a)
try{s=t
s.a=A.dy(s.a,a,", ")}finally{if(0>=$.C.length)return A.m($.C,-1)
$.C.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
d2(a){var t,s
for(t=$.C.length,s=0;s<t;++s)if(a===$.C[s])return!0
return!1},
fu(a,b){var t,s,r,q,p,o,n,m=a.gB(a),l=0,k=0
while(!0){if(!(l<80||k<3))break
if(!m.l())return
t=A.e(m.gu())
B.a.i(b,t)
l+=t.length+2;++k}if(!m.l()){if(k<=5)return
if(0>=b.length)return A.m(b,-1)
s=b.pop()
if(0>=b.length)return A.m(b,-1)
r=b.pop()}else{q=m.gu();++k
if(!m.l()){if(k<=4){B.a.i(b,A.e(q))
return}s=A.e(q)
if(0>=b.length)return A.m(b,-1)
r=b.pop()
l+=s.length+2}else{p=m.gu();++k
for(;m.l();q=p,p=o){o=m.gu();++k
if(k>100){while(!0){if(!(l>75&&k>3))break
if(0>=b.length)return A.m(b,-1)
l-=b.pop().length+2;--k}B.a.i(b,"...")
return}}r=A.e(q)
s=A.e(p)
l+=s.length+r.length+4}}if(k>b.length+2){l+=5
n="..."}else n=null
while(!0){if(!(l>80&&b.length>3))break
if(0>=b.length)return A.m(b,-1)
l-=b.pop().length+2
if(n==null){l+=5
n="..."}}if(n!=null)B.a.i(b,n)
B.a.i(b,r)
B.a.i(b,s)},
eA(a){var t,s={}
if(A.d2(a))return"{...}"
t=new A.bA("")
try{B.a.i($.C,a)
t.a+="{"
s.a=!0
a.aa(0,new A.cc(s,t))
t.a+="}"}finally{if(0>=$.C.length)return A.m($.C,-1)
$.C.pop()}s=t.a
return s.charCodeAt(0)==0?s:s},
aH:function aH(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
aI:function aI(a,b){this.a=a
this.$ti=b},
aJ:function aJ(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aK:function aK(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bR:function bR(a){this.a=a
this.b=null},
aL:function aL(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
av:function av(){},
cc:function cc(a,b){this.a=a
this.b=b},
aw:function aw(){},
az:function az(){},
aM:function aM(){},
aT:function aT(){},
er(a){if(a instanceof A.a2)return a.h(0)
return"Instance of '"+A.ch(a)+"'"},
es(a,b){a=A.d(a)
if(a==null)a=u.K.a(a)
a.stack=b.h(0)
throw a
throw A.d("unreachable")},
ez(a,b,c){var t
if(a>4294967295)A.H(A.eE(a,0,4294967295,"length",null))
t=J.ev(new Array(a),c)
return t},
dq(a,b,c){var t=A.ey(a,c)
return t},
ey(a,b){var t,s
if(Array.isArray(a))return A.k(a.slice(0),b.j("o<0>"))
t=A.k([],b.j("o<0>"))
for(s=J.db(a);s.l();)B.a.i(t,s.gu())
return t},
dy(a,b,c){var t=J.db(b)
if(!t.l())return a
if(c.length===0){do a+=A.e(t.gu())
while(t.l())}else{a+=A.e(t.gu())
for(;t.l();)a=a+c+A.e(t.gu())}return a},
bc(a){if(typeof a=="number"||A.dU(a)||a==null)return J.bZ(a)
if(typeof a=="string")return JSON.stringify(a)
return A.er(a)},
b1(a){return new A.al(a)},
ej(a){return new A.a0(!1,null,null,a)},
eD(a){var t=null
return new A.af(t,t,!1,t,t,a)},
eE(a,b,c,d,e){return new A.af(b,c,!0,a,d,"Invalid value")},
eF(a,b){return a},
dl(a,b,c,d){return new A.bf(b,!0,a,d,"Index out of range")},
X(a){return new A.bH(a)},
dE(a){return new A.bF(a)},
an(a){return new A.b8(a)},
dr(a,b,c,d){var t=A.dA(B.d.gk(a),B.d.gk(b),B.d.gk(c),B.d.gk(d),$.ei())
return t},
bb:function bb(a){this.a=a},
cx:function cx(){},
h:function h(){},
al:function al(a){this.a=a},
bE:function bE(){},
br:function br(){},
a0:function a0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
af:function af(a,b,c,d,e,f){var _=this
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
bH:function bH(a){this.a=a},
bF:function bF(a){this.a=a},
b8:function b8(a){this.a=a},
bs:function bs(){},
aA:function aA(){},
b9:function b9(a){this.a=a},
cy:function cy(a){this.a=a},
q:function q(){},
D:function D(){},
I:function I(){},
j:function j(){},
bA:function bA(a){this.a=a},
dR(a){var t
if("postMessage" in a){t=A.eP(a)
return t}else return u.O.a(a)},
eP(a){if(a===window)return u.y.a(a)
else return new A.bN()},
c:function c(){},
b_:function b_(){},
b0:function b0(){},
a1:function a1(){},
b2:function b2(){},
am:function am(){},
K:function K(){},
c4:function c4(){},
ao:function ao(){},
a:function a(){},
b:function b(){},
l:function l(){},
bd:function bd(){},
a5:function a5(){},
a7:function a7(){},
M:function M(){},
y:function y(){},
bx:function bx(){},
J:function J(){},
bI:function bI(){},
aF:function aF(){},
aG:function aG(){},
bN:function bN(){},
bv(){return B.f},
ay(a,b,c,d,e){var t,s
if(c<0)t=c===-1/0?0:-c*0
else t=c+0
e.a(t)
if(d<0)s=d===-1/0?0:-d*0
else s=d+0
return new A.O(a,b,t,e.a(s),e.j("O<0>"))},
bQ:function bQ(){},
a8:function a8(a,b,c){this.a=a
this.b=b
this.$ti=c},
bS:function bS(){},
O:function O(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
c_:function c_(){},
c0:function c0(a,b,c){var _=this
_.b=a
_.c=b
_.e=c
_.r=0},
c1:function c1(){},
c2:function c2(){},
cg:function cg(a){this.b=a},
b6:function b6(){var _=this
_.y=!1
_.f=_.e=_.d=_.c=_.b=_.a=0
_.r=!0
_.w=!1
_.x=0},
T:function T(a){this.b=a},
c3:function c3(){},
ac:function ac(){var _=this
_.y=!1
_.f=_.e=_.d=_.c=_.b=_.a=_.z=0
_.r=!0
_.w=!1
_.x=0},
t:function t(){},
c5:function c5(a){this.a=a},
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
c7:function c7(a){this.a=a},
c6:function c6(a){this.a=a},
ad(a,b,c,d){var t,s,r,q,p=new A.a4()
p.a=a
p.b=b
p.c=c
p.d=d
t=A.cj()
p.z=t
s=A.cj()
p.Q=s
r=a-9
q=b-5
t.t(r,q)
s.t(r+c,q)
return p},
a4:function a4(){var _=this
_.y=!1
_.Q=_.z=$
_.f=_.e=_.d=_.c=_.b=_.a=0
_.r=!0
_.w=!1
_.x=0},
W:function W(){},
bn:function bn(a){this.a=a
this.c=1250},
bo:function bo(a){this.a=a
this.c=1250},
bp:function bp(a){this.a=a
this.c=1250},
bq:function bq(a){this.a=a
this.c=1250},
cj(){var t=new A.by(B.f,A.k([],u.I))
t.aw()
return t},
dF(a,b,c,d){var t=new A.aC(B.f)
t.av(a,b,c,d)
t.Q=!0
t.f=5
t.z=0
return t},
bJ:function bJ(a,b,c,d){var _=this
_.e=a
_.f=b
_.r=c
_.a=d
_.c=_.b=0
_.d=!1},
by:function by(a,b){var _=this
_.e=a
_.r=0
_.a=b
_.c=_.b=0
_.d=!1},
ck:function ck(){},
cl:function cl(){},
cm:function cm(){},
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
c9:function c9(){},
ca:function ca(){},
cb:function cb(){},
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
b7:function b7(a,b){var _=this
_.e=a
_.a=b
_.c=_.b=0
_.d=!1},
v:function v(){},
ce:function ce(){},
u:function u(){var _=this
_.z=_.y=0
_.Q=!1
_.f=_.e=_.d=_.c=_.b=_.a=_.as=0
_.r=!0
_.w=!1
_.x=0},
aC:function aC(a){var _=this
_.dy=a
_.z=_.y=0
_.Q=!1
_.f=_.e=_.d=_.c=_.b=_.a=_.as=0
_.r=!0
_.w=!1
_.x=0},
N:function N(a){var _=this
_.as=_.Q=_.z=_.y=null
_.ax=_.at=!1
_.ay=0
_.ch=a
_.f=_.e=_.d=_.c=_.b=_.a=_.CW=0
_.r=!0
_.w=!1
_.x=0},
cf:function cf(a){this.a=a},
co(a,b,c,d){var t,s=new A.bD()
s.a=a
s.b=b
s.c=c
s.d=d
t=new A.bm(B.f,A.k([],u.I))
t.au()
s.Q=t
return s},
bD:function bD(){var _=this
_.y=0
_.Q=$
_.f=_.e=_.d=_.c=_.b=_.a=0
_.r=!0
_.w=!1
_.x=0},
A(a){var t=document.createElement("img")
B.A.sak(t,"./assets/img/"+a+".png")
$.f.A().ai(0,a,t)},
ew(a,b){var t,s,r,q,p,o=A.k([],u.n)
for(t=a,s=0;s<100;++s){r=$.d9()
$.cQ()
q=r.ac(4)
r=$.cQ()
if(!(q>=0&&q<4))return A.m(r,q)
B.a.a6(o,r[q].J(t,b))
t-=$.cQ()[q].c}for(s=B.c.X(a),r=b-60;s>t;s-=200){p=new A.b6()
p.a=$.d9().v()*r-30
p.b=s
p.c=30
p.d=40
B.a.i(o,p)}return o},
fY(){var t,s,r,q,p="rgb(66, 205, 255)",o="rgb(0, 131, 179)",n=u.E.a(document.querySelector("#canvas")),m=n.getContext("2d")
B.b.saR(m,"high")
t=A.k([],u.n)
s=A.k([],u.a)
r=new A.N(B.h)
r.a0(150,300,50,50)
q=new A.be(30,n,m,t,s,r)
q.aO()
$.f.b=A.et(u.N,u.R)
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
t=new A.bl(B.f,A.k([],m))
t.ar()
q.w=t
t=new A.bk(B.f,A.k([],m))
t.aq()
q.x=t
t=new A.b7(B.f,A.k([],m))
t.ao()
q.y=t
t=new A.ba(B.f,A.k([],m))
t.ap()
q.Q=t
m=A.k([],m)
t=new A.bJ(new A.c_(),B.f,900,m)
t.d=!0
B.a.i(m,A.dF(0,-900,1,1))
B.a.i(m,A.dF(0,0,1,1))
q.z=t
B.a.i(s,q.w)
B.a.i(s,q.x)
B.a.i(s,q.z)
B.a.i(s,q.y)
B.a.i(s,q.Q)
q.Y(0)}},J={
d8(a,b,c,d){return{i:a,p:b,e:c,x:d}},
d5(a){var t,s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.d6==null){A.fT()
o=a[v.dispatchPropertyName]}if(o!=null){t=o.p
if(!1===t)return o.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return o.i
if(o.e===s)throw A.d(A.dE("Return interceptor for "+A.e(t(a,o))))}r=a.constructor
if(r==null)q=null
else{p=$.cz
if(p==null)p=$.cz=v.getIsolateTag("_$dart_js")
q=r[p]}if(q!=null)return q
q=A.fX(a)
if(q!=null)return q
if(typeof a=="function")return B.C
t=Object.getPrototypeOf(a)
if(t==null)return B.q
if(t===Object.prototype)return B.q
if(typeof r=="function"){p=$.cz
if(p==null)p=$.cz=v.getIsolateTag("_$dart_js")
Object.defineProperty(r,p,{value:B.m,enumerable:false,writable:true,configurable:true})
return B.m}return B.m},
ev(a,b){return J.dn(A.k(a,b.j("o<0>")),b)},
dn(a,b){a.fixed$length=Array
return a},
ak(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ar.prototype
return J.bi.prototype}if(typeof a=="string")return J.ae.prototype
if(a==null)return J.bh.prototype
if(typeof a=="boolean")return J.bg.prototype
if(a.constructor==Array)return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.U.prototype
return a}if(a instanceof A.j)return a
return J.d5(a)},
fN(a){if(a==null)return a
if(a.constructor==Array)return J.o.prototype
if(!(a instanceof A.j))return J.ag.prototype
return a},
fO(a){if(typeof a=="string")return J.ae.prototype
if(a==null)return a
if(a.constructor==Array)return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.U.prototype
return a}if(a instanceof A.j)return a
return J.d5(a)},
cK(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.U.prototype
return a}if(a instanceof A.j)return a
return J.d5(a)},
cR(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.ak(a).D(a,b)},
cS(a){return J.ak(a).gk(a)},
db(a){return J.fN(a).gB(a)},
dc(a){return J.fO(a).gq(a)},
bZ(a){return J.ak(a).h(a)},
aq:function aq(){},
bg:function bg(){},
bh:function bh(){},
L:function L(){},
a6:function a6(){},
bt:function bt(){},
ag:function ag(){},
U:function U(){},
o:function o(a){this.$ti=a},
c8:function c8(a){this.$ti=a},
r:function r(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
as:function as(){},
ar:function ar(){},
bi:function bi(){},
ae:function ae(){}},B={}
var w=[A,J,B]
var $={}
A.cT.prototype={}
J.aq.prototype={
D(a,b){return a===b},
gk(a){return A.bu(a)},
h(a){return"Instance of '"+A.ch(a)+"'"}}
J.bg.prototype={
h(a){return String(a)},
gk(a){return a?519018:218159},
$ix:1}
J.bh.prototype={
D(a,b){return null==b},
h(a){return"null"},
gk(a){return 0}}
J.L.prototype={}
J.a6.prototype={
gk(a){return 0},
h(a){return String(a)}}
J.bt.prototype={}
J.ag.prototype={}
J.U.prototype={
h(a){var t=a[$.e7()]
if(t==null)return this.am(a)
return"JavaScript function for "+J.bZ(t)},
$ia3:1}
J.o.prototype={
i(a,b){A.G(a).c.a(b)
if(!!a.fixed$length)A.H(A.X("add"))
a.push(b)},
a6(a,b){A.G(a).j("q<1>").a(b)
if(!!a.fixed$length)A.H(A.X("addAll"))
this.aC(a,b)
return},
aC(a,b){var t,s
u.b.a(b)
t=b.length
if(t===0)return
if(a===b)throw A.d(A.an(a))
for(s=0;s<t;++s)a.push(b[s])},
aL(a,b){var t,s
A.G(a).j("x(1)").a(b)
t=a.length
for(s=0;s<t;++s){if(A.e_(b.$1(a[s])))return!0
if(a.length!==t)throw A.d(A.an(a))}return!1},
h(a){return A.dm(a,"[","]")},
gB(a){return new J.r(a,a.length,A.G(a).j("r<1>"))},
gk(a){return A.bu(a)},
gq(a){return a.length},
$iq:1,
$iau:1}
J.c8.prototype={}
J.r.prototype={
gu(){var t=this.d
return t==null?this.$ti.c.a(t):t},
l(){var t,s=this,r=s.a,q=r.length
if(s.b!==q)throw A.d(A.p(r))
t=s.c
if(t>=q){s.sa4(null)
return!1}s.sa4(r[t]);++s.c
return!0},
sa4(a){this.d=this.$ti.j("1?").a(a)},
$iD:1}
J.as.prototype={
ag(a){var t
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){t=a<0?Math.ceil(a):Math.floor(a)
return t+0}throw A.d(A.X(""+a+".toInt()"))},
X(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.d(A.X(""+a+".round()"))},
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
an(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.a5(a,b)},
L(a,b){return(a|0)===a?a/b|0:this.a5(a,b)},
a5(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw A.d(A.X("Result of truncating division is "+A.e(t)+": "+A.e(a)+" ~/ "+b))},
aK(a,b){var t
if(a>0)t=this.aJ(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
aJ(a,b){return b>31?0:a>>>b},
$ibX:1,
$ia_:1}
J.ar.prototype={$id7:1}
J.bi.prototype={}
J.ae.prototype={
ah(a,b){return a+b},
aj(a,b){var t,s
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.d(B.y)
for(t=a,s="";!0;){if((b&1)===1)s=t+s
b=b>>>1
if(b===0)break
t+=t}return s},
aV(a,b,c){var t=b-a.length
if(t<=0)return a
return this.aj(c,t)+a},
h(a){return a},
gk(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=s+a.charCodeAt(r)&536870911
s=s+((s&524287)<<10)&536870911
s^=s>>6}s=s+((s&67108863)<<3)&536870911
s^=s>>11
return s+((s&16383)<<15)&536870911},
gq(a){return a.length},
$ia9:1}
A.at.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.ci.prototype={}
A.ap.prototype={}
A.B.prototype={
gB(a){var t=this.a
return new A.F(new J.r(t,t.length,A.G(t).j("r<1>")),this.b,this.$ti.j("F<1>"))}}
A.F.prototype={
l(){var t,s,r,q
for(t=this.a,s=this.b,r=t.$ti.c;t.l();){q=t.d
if(A.e_(s.$1(q==null?r.a(q):q)))return!0}return!1},
gu(){var t=this.a,s=t.d
return s==null?t.$ti.c.a(s):s}}
A.aD.prototype={
gB(a){var t=this.a
return new A.aE(new J.r(t,t.length,A.G(t).j("r<1>")),this.$ti.j("aE<1>"))}}
A.aE.prototype={
l(){var t,s,r,q
for(t=this.a,s=this.$ti.c,r=t.$ti.c;t.l();){q=t.d
if(s.b(q==null?r.a(q):q))return!0}return!1},
gu(){var t=this.a,s=t.d
t=s==null?t.$ti.c.a(s):s
return this.$ti.c.a(t)},
$iD:1}
A.cp.prototype={
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
A.ax.prototype={
h(a){var t=this.b
if(t==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+t+"' on null"}}
A.bj.prototype={
h(a){var t,s=this,r="NoSuchMethodError: method not found: '",q=s.b
if(q==null)return"NoSuchMethodError: "+s.a
t=s.c
if(t==null)return r+q+"' ("+s.a+")"
return r+q+"' on '"+t+"' ("+s.a+")"}}
A.bG.prototype={
h(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
A.cd.prototype={
h(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.aN.prototype={
h(a){var t,s=this.b
if(s!=null)return s
s=this.a
t=s!==null&&typeof s==="object"?s.stack:null
return this.b=t==null?"":t},
$idx:1}
A.a2.prototype={
h(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+A.e6(s==null?"unknown":s)+"'"},
$ia3:1,
gaY(){return this},
$C:"$1",
$R:1,
$D:null}
A.b4.prototype={$C:"$0",$R:0}
A.b5.prototype={$C:"$2",$R:2}
A.bB.prototype={}
A.bz.prototype={
h(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+A.e6(t)+"'"}}
A.ab.prototype={
D(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.ab))return!1
return this.$_target===b.$_target&&this.a===b.a},
gk(a){return(A.e3(this.a)^A.bu(this.$_target))>>>0},
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.ch(this.a)+"'")}}
A.bw.prototype={
h(a){return"RuntimeError: "+this.a}}
A.bL.prototype={
h(a){return"Assertion failed: "+A.bc(this.a)}}
A.cL.prototype={
$1(a){return this.a(a)},
$S:6}
A.cM.prototype={
$2(a,b){return this.a(a,b)},
$S:7}
A.cN.prototype={
$1(a){return this.a(A.bV(a))},
$S:8}
A.cw.prototype={
A(){var t=this.b
if(t===this)throw A.d(A.V(""))
return t}}
A.E.prototype={
j(a){return A.cE(v.typeUniverse,this,a)},
aF(a){return A.f7(v.typeUniverse,this,a)}}
A.bP.prototype={}
A.bT.prototype={
h(a){return A.z(this.a,null)}}
A.bO.prototype={
h(a){return this.a}}
A.aP.prototype={}
A.ct.prototype={
$1(a){var t=this.a,s=t.a
t.a=null
s.$0()},
$S:9}
A.cs.prototype={
$1(a){var t,s
this.a.a=u.M.a(a)
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:10}
A.cu.prototype={
$0(){this.a.$0()},
$S:1}
A.cv.prototype={
$0(){this.a.$0()},
$S:1}
A.aO.prototype={
az(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(A.aY(new A.cD(this,b),0),a)
else throw A.d(A.X("`setTimeout()` not found."))},
aA(a,b){if(self.setTimeout!=null)this.b=self.setInterval(A.aY(new A.cC(this,a,Date.now(),b),0),a)
else throw A.d(A.X("Periodic timer."))},
aN(){if(self.setTimeout!=null){var t=this.b
if(t==null)return
if(this.a)self.clearTimeout(t)
else self.clearInterval(t)
this.b=null}else throw A.d(A.X("Canceling a timer."))},
$ibC:1}
A.cD.prototype={
$0(){var t=this.a
t.b=null
t.c=1
this.b.$0()},
$S:2}
A.cC.prototype={
$0(){var t,s=this,r=s.a,q=r.c+1,p=s.b
if(p>0){t=Date.now()-s.c
if(t>(q+1)*p)q=B.c.an(t,p)}r.c=q
s.d.$1(r)},
$S:1}
A.bM.prototype={}
A.cG.prototype={}
A.cI.prototype={
$0(){var t=this.a,s=this.b
A.e0(t,"error",u.K)
A.e0(s,"stackTrace",u.l)
A.es(t,s)},
$S:2}
A.cA.prototype={
aW(a,b,c){var t,s,r
c.j("~(0)").a(a)
c.a(b)
try{if(B.l===$.bK){a.$1(b)
return}A.fy(null,null,this,a,b,u.t,c)}catch(r){t=A.h4(r)
s=A.fQ(r)
A.fx(u.K.a(t),u.l.a(s))}},
aM(a,b){return new A.cB(this,b.j("~(0)").a(a),b)}}
A.cB.prototype={
$1(a){var t=this.c
return this.a.aW(this.b,t.a(a),t)},
$S(){return this.c.j("~(0)")}}
A.aH.prototype={
gq(a){return this.a},
gab(){return new A.aI(this,A.aU(this).j("aI<1>"))},
n(a,b){var t,s,r
if(typeof b=="string"&&b!=="__proto__"){t=this.b
s=t==null?null:A.dH(t,b)
return s}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
s=r==null?null:A.dH(r,b)
return s}else return this.aH(b)},
aH(a){var t,s,r=this.d
if(r==null)return null
t=r[this.a2(a)]
s=this.K(t,a)
return s<0?null:t[s+1]},
ai(a,b,c){var t,s=this,r=A.aU(s)
r.c.a(b)
r.z[1].a(c)
if(b!=="__proto__"){t=s.b
s.aE(t==null?s.b=A.dI():t,b,c)}else s.aI(b,c)},
aI(a,b){var t,s,r,q,p=this,o=A.aU(p)
o.c.a(a)
o.z[1].a(b)
t=p.d
if(t==null)t=p.d=A.dI()
s=p.a2(a)
r=t[s]
if(r==null){A.cV(t,s,[a,b]);++p.a
p.e=null}else{q=p.K(r,a)
if(q>=0)r[q+1]=b
else{r.push(a,b);++p.a
p.e=null}}},
aa(a,b){var t,s,r,q,p,o,n=this,m=A.aU(n)
m.j("~(1,2)").a(b)
t=n.a3()
for(s=t.length,r=m.c,m=m.z[1],q=0;q<s;++q){p=t[q]
r.a(p)
o=n.n(0,p)
b.$2(p,o==null?m.a(o):o)
if(t!==n.e)throw A.d(A.an(n))}},
a3(){var t,s,r,q,p,o,n,m,l,k,j=this,i=j.e
if(i!=null)return i
i=A.ez(j.a,null,u.B)
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
aE(a,b,c){var t=A.aU(this)
t.c.a(b)
t.z[1].a(c)
if(a[b]==null){++this.a
this.e=null}A.cV(a,b,c)},
a2(a){return J.cS(a)&1073741823},
K(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;s+=2)if(J.cR(a[s],b))return s
return-1}}
A.aI.prototype={
gq(a){return this.a.a},
gB(a){var t=this.a
return new A.aJ(t,t.a3(),this.$ti.j("aJ<1>"))}}
A.aJ.prototype={
gu(){var t=this.d
return t==null?this.$ti.c.a(t):t},
l(){var t=this,s=t.b,r=t.c,q=t.a
if(s!==q.e)throw A.d(A.an(q))
else if(r>=s.length){t.sI(null)
return!1}else{t.sI(s[r])
t.c=r+1
return!0}},
sI(a){this.d=this.$ti.j("1?").a(a)},
$iD:1}
A.aK.prototype={
gB(a){var t=this,s=new A.aL(t,t.r,t.$ti.j("aL<1>"))
s.c=t.e
return s},
gq(a){return this.a},
i(a,b){var t,s,r=this
r.$ti.c.a(b)
if(typeof b=="string"&&b!=="__proto__"){t=r.b
return r.a1(t==null?r.b=A.cW():t,b)}else if(typeof b=="number"&&(b&1073741823)===b){s=r.c
return r.a1(s==null?r.c=A.cW():s,b)}else return r.aB(b)},
aB(a){var t,s,r,q=this
q.$ti.c.a(a)
t=q.d
if(t==null)t=q.d=A.cW()
s=J.cS(a)&1073741823
r=t[s]
if(r==null)t[s]=[q.U(a)]
else{if(q.K(r,a)>=0)return!1
r.push(q.U(a))}return!0},
a1(a,b){this.$ti.c.a(b)
if(u.e.a(a[b])!=null)return!1
a[b]=this.U(b)
return!0},
U(a){var t=this,s=new A.bR(t.$ti.c.a(a))
if(t.e==null)t.e=t.f=s
else t.f=t.f.b=s;++t.a
t.r=t.r+1&1073741823
return s},
K(a,b){var t,s=a.length
for(t=0;t<s;++t)if(J.cR(a[t].a,b))return t
return-1},
$idp:1}
A.bR.prototype={}
A.aL.prototype={
gu(){var t=this.d
return t==null?this.$ti.c.a(t):t},
l(){var t=this,s=t.c,r=t.a
if(t.b!==r.r)throw A.d(A.an(r))
else if(s==null){t.sI(null)
return!1}else{t.sI(t.$ti.j("1?").a(s.a))
t.c=s.b
return!0}},
sI(a){this.d=this.$ti.j("1?").a(a)},
$iD:1}
A.av.prototype={}
A.cc.prototype={
$2(a,b){var t,s=this.a
if(!s.a)this.b.a+=", "
s.a=!1
s=this.b
t=s.a+=A.e(a)
s.a=t+": "
s.a+=A.e(b)},
$S:11}
A.aw.prototype={
aa(a,b){var t,s,r,q=A.aU(this)
q.j("~(1,2)").a(b)
for(t=this.gab(),t=t.gB(t),q=q.z[1];t.l();){s=t.gu()
r=this.n(0,s)
b.$2(s,r==null?q.a(r):r)}},
gq(a){var t=this.gab()
return t.gq(t)},
h(a){return A.eA(this)}}
A.az.prototype={
h(a){return A.dm(this,"{","}")}}
A.aM.prototype={$iq:1}
A.aT.prototype={}
A.bb.prototype={
D(a,b){if(b==null)return!1
return b instanceof A.bb&&this.a===b.a},
gk(a){return B.c.gk(this.a)},
h(a){var t,s,r,q,p=this.a,o=p<0?"-":"",n=B.c.L(p,36e8)
p%=36e8
if(p<0)p=-p
t=B.c.L(p,6e7)
p%=6e7
s=t<10?"0":""
r=B.c.L(p,1e6)
q=r<10?"0":""
return o+Math.abs(n)+":"+s+t+":"+q+r+"."+B.p.aV(B.c.h(p%1e6),6,"0")}}
A.cx.prototype={
h(a){return this.aG()}}
A.h.prototype={}
A.al.prototype={
h(a){var t=this.a
if(t!=null)return"Assertion failed: "+A.bc(t)
return"Assertion failed"}}
A.bE.prototype={}
A.br.prototype={
h(a){return"Throw of null."}}
A.a0.prototype={
gT(){return"Invalid argument"+(!this.a?"(s)":"")},
gS(){return""},
h(a){var t=this,s=t.c,r=s==null?"":" ("+s+")",q=t.d,p=q==null?"":": "+q,o=t.gT()+r+p
if(!t.a)return o
return o+t.gS()+": "+A.bc(t.gV())},
gV(){return this.b}}
A.af.prototype={
gV(){return A.fb(this.b)},
gT(){return"RangeError"},
gS(){var t,s=this.e,r=this.f
if(s==null)t=r!=null?": Not less than or equal to "+A.e(r):""
else if(r==null)t=": Not greater than or equal to "+A.e(s)
else if(r>s)t=": Not in inclusive range "+A.e(s)+".."+A.e(r)
else t=r<s?": Valid value range is empty":": Only valid value is "+A.e(s)
return t}}
A.bf.prototype={
gV(){return A.cH(this.b)},
gT(){return"RangeError"},
gS(){if(A.cH(this.b)<0)return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+t},
gq(a){return this.f}}
A.bH.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.bF.prototype={
h(a){return"UnimplementedError: "+this.a}}
A.b8.prototype={
h(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.bc(t)+"."}}
A.bs.prototype={
h(a){return"Out of Memory"},
$ih:1}
A.aA.prototype={
h(a){return"Stack Overflow"},
$ih:1}
A.b9.prototype={
h(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.cy.prototype={
h(a){return"Exception: "+this.a}}
A.q.prototype={
gq(a){var t,s=this.gB(this)
for(t=0;s.l();)++t
return t},
gaS(a){return!this.gB(this).l()},
a8(a,b){var t,s,r
A.eF(b,"index")
for(t=this.gB(this),s=0;t.l();){r=t.gu()
if(b===s)return r;++s}throw A.d(A.dl(b,s,this,"index"))},
h(a){return A.eu(this,"(",")")}}
A.D.prototype={}
A.I.prototype={
gk(a){return A.j.prototype.gk.call(this,this)},
h(a){return"null"}}
A.j.prototype={$ij:1,
D(a,b){return this===b},
gk(a){return A.bu(this)},
h(a){return"Instance of '"+A.ch(this)+"'"},
toString(){return this.h(this)}}
A.bA.prototype={
gq(a){return this.a.length},
h(a){var t=this.a
return t.charCodeAt(0)==0?t:t}}
A.c.prototype={}
A.b_.prototype={
h(a){return String(a)}}
A.b0.prototype={
h(a){return String(a)}}
A.a1.prototype={$ia1:1,$ib3:1}
A.b2.prototype={$ib2:1}
A.am.prototype={
sG(a,b){a.fillStyle=b},
saR(a,b){a.imageSmoothingQuality=b},
F(a,b,c){u.q.a(c)
a.drawImage(b,c.a,c.b,c.c,c.d)},
a9(a,b,c,d){a.fillText(b,c,d)},
$iam:1}
A.K.prototype={
gq(a){return a.length}}
A.c4.prototype={
h(a){return String(a)}}
A.ao.prototype={
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
s=J.cK(b)
if(t===s.gN(b)){t=a.top
t.toString
if(t===s.gO(b)){t=a.width
t.toString
if(t===s.gP(b)){t=a.height
t.toString
s=t===s.gM(b)
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
return A.dr(q,t,s,r)},
ga7(a){var t=a.bottom
t.toString
return t},
gM(a){var t=a.height
t.toString
return t},
gN(a){var t=a.left
t.toString
return t},
gaf(a){var t=a.right
t.toString
return t},
gO(a){var t=a.top
t.toString
return t},
gP(a){var t=a.width
t.toString
return t},
$iO:1}
A.a.prototype={
h(a){return a.localName},
$ia:1}
A.b.prototype={$ib:1}
A.l.prototype={
aD(a,b,c,d){return a.addEventListener(b,A.aY(u.o.a(c),1),d)},
$il:1}
A.bd.prototype={
gq(a){return a.length}}
A.a5.prototype={
sak(a,b){a.src=b},
$ia5:1,
$ib3:1}
A.a7.prototype={}
A.M.prototype={
gad(a){var t,s,r,q,p,o
if(!!a.offsetX)return new A.a8(a.offsetX,a.offsetY,u.p)
else{t=a.target
s=u.h
if(!s.b(A.dR(t)))throw A.d(A.X("offsetX is only supported on elements"))
r=s.a(A.dR(t))
t=a.clientX
s=a.clientY
q=u.p
p=r.getBoundingClientRect()
o=p.left
o.toString
p=p.top
p.toString
q.a(new A.a8(o,p,q))
return new A.a8(B.d.ag(t-o),B.d.ag(s-p),q)}},
$iM:1}
A.y.prototype={
h(a){var t=a.nodeValue
return t==null?this.al(a):t}}
A.bx.prototype={
gq(a){return a.length}}
A.J.prototype={}
A.bI.prototype={$ib3:1}
A.aF.prototype={$icr:1}
A.aG.prototype={
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
s=J.cK(b)
if(t===s.gN(b)){t=a.top
t.toString
if(t===s.gO(b)){t=a.width
t.toString
if(t===s.gP(b)){t=a.height
t.toString
s=t===s.gM(b)
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
return A.dr(q,t,s,r)},
gM(a){var t=a.height
t.toString
return t},
gP(a){var t=a.width
t.toString
return t}}
A.bN.prototype={$il:1,$icr:1}
A.bQ.prototype={
ac(a){if(a<=0||a>4294967296)throw A.d(A.eD("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0},
v(){return Math.random()},
aU(){return Math.random()<0.5},
$ieC:1}
A.a8.prototype={
h(a){return"Point("+A.e(this.a)+", "+A.e(this.b)+")"},
D(a,b){if(b==null)return!1
return b instanceof A.a8&&this.a===b.a&&this.b===b.b},
gk(a){return A.eH(B.d.gk(this.a),B.d.gk(this.b),0)}}
A.bS.prototype={
gaf(a){return this.$ti.c.a(this.a+this.c)},
ga7(a){return this.$ti.c.a(this.b+this.d)},
h(a){var t=this
return"Rectangle ("+A.e(t.a)+", "+A.e(t.b)+") "+A.e(t.c)+" x "+A.e(t.d)},
D(a,b){var t,s,r,q,p=this
if(b==null)return!1
if(u.q.b(b)){t=p.a
s=J.cK(b)
if(t===s.gN(b)){r=p.b
if(r===s.gO(b)){q=p.$ti.c
t=q.a(t+p.c)===s.gaf(b)&&q.a(r+p.d)===s.ga7(b)}else t=!1}else t=!1}else t=!1
return t},
gk(a){var t=this,s=t.a,r=t.b,q=t.$ti.c
return A.dA(B.d.gk(s),B.d.gk(r),B.d.gk(q.a(s+t.c)),B.d.gk(q.a(r+t.d)),0)}}
A.O.prototype={
gN(a){return this.a},
gO(a){return this.b},
gP(a){return this.c},
gM(a){return this.d}}
A.c_.prototype={}
A.c0.prototype={
m(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h,g=this
u.r.a(b)
u.c.a(c)
t=g.b
s=t.b
r=g.c
q=r.b
p=Math.abs(s-q)
if(p<2){t.b=q
t=q}else{o=s<q?1:-1
if(q>g.r+g.e-200)n=r.f+1
else n=p<100?7*(1-(100-p)/100):7
t=t.b=s+o*n}s=g.e
g.r=t-s+200
for(t=A.G(c),r=t.j("x(1)"),q=r.a(new A.c1()),m=t.j("r<1>"),l=new J.r(c,c.length,m),k=t.j("F<1>"),q=new A.F(l,q,k),t=t.c;q.l();){j=l.d
if(j==null)j=t.a(j)
if(j.W())j.m(a,0,g.r)}for(q=b.length,i=0;i<b.length;b.length===q||(0,A.p)(b),++i){h=b[i]
l=h.b
j=g.r
if(l>j-400&&l<j+s+400)h.m(a,0,j)}for(s=r.a(new A.c2()),m=new J.r(c,c.length,m),k=new A.F(m,s,k);k.l();){s=m.d
if(s==null)s=t.a(s)
if(s.W())s.m(a,0,g.r)}}}
A.c1.prototype={
$1(a){return u.W.a(a).d},
$S:4}
A.c2.prototype={
$1(a){return!u.W.a(a).d},
$S:4}
A.cg.prototype={}
A.b6.prototype={
p(a){},
m(a,b,c){var t,s,r,q,p=this
if(!p.y){t=p.c
s=t-B.c.E($.cn*2,t*4)
if(s<-t)s=-2*t-s
r=Math.abs(s)
if(r<3)r=3
q=A.ay(p.a-b+(t-r)/2,p.b-c,r,p.d,u.H)
if(s<0){t=$.f.A().n(0,"coin_mirrored")
if(t==null)t=u.R.a(t)}else{t=$.f.A().n(0,"coin")
if(t==null)t=u.R.a(t)}B.b.F(a,t,q)}},
H(a,b){var t,s=this
if(b!==B.e&&!s.y&&a instanceof A.N){++a.CW
t=a.Q
if(t!=null)t.t(s.a,s.b)
s.y=!0}}}
A.T.prototype={
aG(){return"Direction."+this.b}}
A.c3.prototype={}
A.ac.prototype={
Z(a,b){var t=this
t.a=a
t.b=b
t.d=t.c=30
t.r=!0
t.w=!1},
p(a){var t=this,s=t.z
if(s>0){s-=$.dB
t.z=s
if(s<0){t.z=0
t.y=!1}}},
m(a,b,c){var t,s,r=this
if(!r.y){t=r.d
s=t-B.c.E($.cn*2,t*4)
if(s<-t)s=-2*t-s
t=$.f.A().n(0,"jump_item")
if(t==null)t=u.R.a(t)
a.drawImage(t,r.a-b-30,r.b+s/2-c-30)}},
H(a,b){var t
if(b!==B.e&&!this.y&&a instanceof A.N){this.y=!0
this.z=3000
a.R(!0)
t=a.as
if(t!=null)t.t(a.a+a.c/2,a.b+a.d/2)}}}
A.t.prototype={
m(a,b,c){},
p(a){},
H(a,b){}}
A.c5.prototype={}
A.be.prototype={
Y(a){var t,s,r,q,p=this,o=p.b
$.dj=o.clientWidth/360
$.dk=o.clientHeight/640
o=p.d
if(o!=null)o.aN()
t=B.d.X(1000/p.a)
$.dB=t
p.d=A.eJ(new A.bb(1000*t),p.gaX())
p.at.CW=0
o=new A.N(B.h)
o.a0(150,300,50,50)
p.at=o
s=p.w
s===$&&A.n()
o.y=s
s=p.x
s===$&&A.n()
o.z=s
s=p.y
s===$&&A.n()
o.Q=s
s=p.Q
s===$&&A.n()
o.as=s
p.saP(A.k([],u.n))
s=p.at
o=new A.cg(0)
o.b=s.b
p.ax=new A.c0(o,s,640)
B.a.a6(p.e,u.Q.a(A.ew(400,360)))
B.a.i(p.e,A.ad(100,400,100,20))
B.a.i(p.e,p.at)
p.f=new A.c5(1.5)
p.r=new A.c3()
s=p.z
s===$&&A.n()
s.c=s.b=0
o=s.a
r=o.length
if(0>=r)return A.m(o,0)
q=o[0]
q.a=0
if(0>=r)return A.m(o,0)
q.b=-1*s.r
if(1>=r)return A.m(o,1)
s=o[1]
s.a=0
if(1>=r)return A.m(o,1)
s.b=0},
p(a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=c.c,a=c.ch
a===$&&A.n()
B.b.sG(b,a)
b.fillRect(0,0,180,640)
a=c.CW
a===$&&A.n()
B.b.sG(b,a)
b.fillRect(180,0,180,640)
a=c.cx
a===$&&A.n()
B.b.sG(b,a)
b.fillRect(0,0,360,640)
a=$.cn
$.eI=a
t=a0.c
$.cn=t
$.P=t-a
for(a=c.as,t=a.length,s=0;s<a.length;a.length===t||(0,A.p)(a),++s)a[s].p(c)
t=c.e
r=A.G(t)
q=r.j("B<1>")
p=A.dq(new A.B(t,r.j("x(1)").a(new A.c7(c)),q),!0,q.c)
for(t=p.length,s=0;r=p.length,s<r;p.length===t||(0,A.p)(p),++s){o=p[s]
if(!(o instanceof A.N)){r=o.b
q=c.ax
q===$&&A.n()
q=q.r
r=r>q-400&&r<q+640+400}else r=!0
if(r)o.p(c)}for(t=u.v,s=0;s<r;++s){o=p[s]
q=c.f
if(q!=null){t.a(o)
if(o.w){q=o.f=o.f+o.x*q.a
o.b+=q>40?o.f=40:q}}o.a=o.a+o.e}for(q=u.j,n=r,s=0;s<n;l===r||(0,A.p)(p),++s,n=l){o=p[s]
for(m=0;l=p.length,m<l;p.length===n||(0,A.p)(p),++m){k=p[m]
o.toString
k.toString
l=!J.cR(o,k)
if(l){if(c.r==null)j=null
else{t.a(o)
t.a(k)
l=o.a
i=k.a
h=i+k.c
if(l<h)if(l+o.c>i){g=o.b
f=k.b
g=g<f+k.d&&g+o.d>f}else g=!1
else g=!1
if(g){g=o.b
f=k.b
if(g>=f&&g<=f+k.d){if(l<=i)e=l+o.c-i
else e=l+o.c>=h?l-h:1000
if(f+k.d-g<=Math.abs(e))j=B.j
else if(e>0)j=B.h
else j=e<0?B.i:B.e}else{g+=o.d
if(g>=f&&g<=f+k.d){if(l<=i)e=l+o.c-i
else e=l+o.c>=h?l-h:1000
if(g-f<=Math.abs(e))j=B.k
else if(e>0)j=B.h
else j=e<0?B.i:B.e}else if(l<i)j=B.h
else j=l+o.c>h?B.i:B.e}}else j=B.e}o.H(k,j==null?q.a(j):j)}}}t=c.ax
t===$&&A.n()
t.m(b,p,a)
a=$.f.A().n(0,"coin")
b.drawImage(a==null?u.R.a(a):a,5,5)
d=c.at.CW
B.b.sG(b,"white")
b.font="36px sans-serif"
B.b.a9(b,""+d,40,40)
B.b.a9(b,""+B.d.X(c.at.b*-1/100+3.5),260,40)},
aO(){B.z.aD(this.b,"mousedown",u.o.a(new A.c6(this)),null)},
saP(a){this.e=u.r.a(a)}}
A.c7.prototype={
$1(a){var t=u.v.a(a).b,s=this.a.at.b
return t>s-2000&&t<s+2000},
$S:5}
A.c6.prototype={
$1(a){var t,s=this.a
a=u.V.a(u.D.a(a))
t=s.at
s=s.ax
s===$&&A.n()
t.aQ(a,0,s.r)
return A.ex([null],u.B)},
$S:13}
A.a4.prototype={
a_(a,b,c,d){var t,s,r=this
r.a=a
r.b=b
r.c=c
r.d=d
r.z=A.cj()
r.Q=A.cj()
t=a-9
s=b-5
r.z.t(t,s)
r.Q.t(t+c,s)},
p(a){var t=this.z
t===$&&A.n()
t.p(a)
t=this.Q
t===$&&A.n()
t.p(a)},
m(a,b,c){var t,s=this
B.b.sG(a,"white")
t=s.z
t===$&&A.n()
t.m(a,b,c)
t=s.Q
t===$&&A.n()
t.m(a,b,c)
t=$.f.A().n(0,"rock")
if(t==null)t=u.R.a(t)
a.drawImage(t,s.a-b,s.b-c)},
H(a,b){var t,s,r,q
switch(b){case B.e:break
case B.j:t=a.e
s=t>0?1:-1
r=a.f
if(r>1){t=Math.abs(t)>0?t-s*2:0
a.e=t
q=Math.abs(t)
a.e=q>0&&q<1?0:t}if(r>=0){a.b=this.b-a.d
a.f=0
if(a instanceof A.N){if(!a.at){t=a.y
if(t!=null)t.t(a.a,this.b)}this.y=a.at=!0}}break
case B.k:break
case B.i:break
case B.h:break}}}
A.W.prototype={}
A.bn.prototype={
J(a,b){var t,s,r,q=A.k([],u.n)
B.a.i(q,A.ad(b/2-50,a-250,100,20))
t=a-500
s=a-700
if(this.a.aU()){r=new A.ac()
r.Z(b-90,t)
B.a.i(q,r)
B.a.i(q,A.co(0,s,200,30))}else{r=new A.ac()
r.Z(60,t)
B.a.i(q,r)
B.a.i(q,A.co(b-200,s,200,30))}return q}}
A.bo.prototype={
J(a,b){var t,s,r,q,p=A.k([],u.n),o=b/2-50
B.a.i(p,A.ad(o,a-250,100,20))
for(t=this.a,s=b-100,r=2;r<5;++r){q=new A.a4()
q.a_(t.v()*s,a-250*r,100,20)
B.a.i(p,q)}B.a.i(p,A.ad(o,a-1250,100,20))
return p}}
A.bp.prototype={
J(a,b){var t,s,r,q,p,o=A.k([],u.n),n=b/2
for(t=this.a,s=b-100,r=1;r<2;++r){q=a-500*r
p=new A.a4()
p.a_(t.v()*s,q,100,20)
B.a.i(o,p)
p=new A.ac()
p.a=n
p.b=q+200
p.d=p.c=30
B.a.i(o,p)}return o}}
A.bq.prototype={
J(a,b){var t=A.k([],u.n)
B.a.i(t,A.ad(0,a-250,100,20))
B.a.i(t,A.ad(b-100,a-400,100,20))
B.a.i(t,A.co(0,a-550,200,30))
B.a.i(t,A.ad(100,a-800,100,20))
B.a.i(t,A.co(b-200,a-1000,200,30))
return t}}
A.bJ.prototype={
m(a,b,c){var t,s,r,q,p,o
for(t=this.a,s=t.length,r=u.R,q=0;q<t.length;t.length===s||(0,A.p)(t),++q){p=t[q]
o=$.f.b
if(o==$.f)A.H(A.V(""))
o=o.n(0,"waterfall")
if(o==null)o=r.a(o)
a.drawImage(o,p.a-b,p.b-c)}},
p(a){var t,s,r,q,p,o,n,m,l,k
if(a.d!=null){t=u.d
s=A.dq(new A.aD(this.a,t),!0,t.c)
t=s.length
if(0>=t)return A.m(s,0)
r=s[0]
for(q=r,p=1;p<t;++p){o=s[p]
n=o.b
if(n>r.b)r=o
if(n<q.b)q=o}t=$.f.A().n(0,"waterfall")
m=A.fa((t==null?u.R.a(t):t).height)
t=r.b
n=a.ax
n===$&&A.n()
if(t>m+n.r)r.ae(0,t-m*2)
t=q.b
if(t<a.ax.r-m)q.ae(0,t+m*2)
for(t=s.length,n=$.P,l=0;l<t;++l){k=s[l]
k.z+=n
k.a=k.a+k.e
k.b=k.b+k.f}}}}
A.by.prototype={
aw(){var t,s,r,q,p
for(t=this.a,s=0;s<20;++s){r=this.b
q=this.c
p=new A.u()
p.a=r
p.b=q
p.d=p.c=5
B.a.i(t,p)}},
t(a,b){var t,s,r,q
this.b=a
this.c=b
for(t=this.a,s=t.length,r=0;r<s;++r){q=t[r]
q.z=0
q.f=2
q.y=50
q.Q=!1}},
m(a,b,c){var t,s,r,q,p,o,n,m,l
for(t=this.a,s=t.length,r=u.H,q=u.R,p=0;p<t.length;t.length===s||(0,A.p)(t),++p){o=t[p]
if(o.Q){n=o.z
m=o.y
l=A.ay(o.a-b,o.b-c,o.c,o.d,r)
a.globalAlpha=1-Math.abs(0.5-n/m)*2
n=$.f.b
if(n==$.f)A.H(A.V(""))
n=n.n(0,"bubbles")
B.b.F(a,n==null?q.a(n):n,l)}}a.globalAlpha=1},
p(a){var t,s,r,q,p,o,n,m=this
if(a.d!=null){if(++m.r>=3){m.r=0
t=m.a
s=A.G(t)
r=s.j("x(1)")
s=s.j("B<1>")
q=new A.B(t,r.a(new A.ck()),s)
if(!q.gaS(q)){p=new A.B(t,r.a(new A.cl()),s).a8(0,0)
p.z=0
p.Q=!0
p.b=m.c
t=m.e
p.a=m.b+t.v()*6-3
p.c=p.d=t.v()*5+15}o=!0}else o=!1
for(t=m.a,s=A.G(t),r=s.j("x(1)").a(new A.cm()),t=new J.r(t,t.length,s.j("r<1>")),r=new A.F(t,r,s.j("F<1>")),s=s.c;r.l();){q=t.d
if(q==null)q=s.a(q)
n=q.z+$.P
q.z=n
q.b=q.b+q.f
if(o&&q.c>0){q.a+=0.5;--q.c;--q.d}if(n>q.y)q.Q=!1}}}}
A.ck.prototype={
$1(a){return!u.z.a(a).Q},
$S:0}
A.cl.prototype={
$1(a){return!u.z.a(a).Q},
$S:0}
A.cm.prototype={
$1(a){return u.z.a(a).Q},
$S:0}
A.bm.prototype={
au(){var t,s,r,q,p
for(t=this.a,s=0;s<30;++s){r=this.b
q=this.c
p=new A.u()
p.a=r
p.b=q
p.d=p.c=5
B.a.i(t,p)}},
t(a,b){var t,s,r,q,p,o=this
o.b=a
o.c=b
for(t=o.a,s=t.length,r=o.e,q=0;q<t.length;t.length===s||(0,A.p)(t),++q){p=t[q]
p.e=p.z=0
p.f=2
p.a=a+r.v()*220
p.b=b+r.v()*50
p.y=30
p.Q=!0
p.as=r.v()}},
m(a,b,c){var t,s,r,q,p,o
for(t=this.a,s=t.length,r=u.R,q=0;q<t.length;t.length===s||(0,A.p)(t),++q){p=t[q]
if(p.Q){a.globalAlpha=1-p.z/p.y
if(p.e>0){o=$.f.b
if(o==$.f)A.H(A.V(""))
o=o.n(0,"leaf")
if(o==null)o=r.a(o)}else{o=$.f.b
if(o==$.f)A.H(A.V(""))
o=o.n(0,"leaf_mirrored")
if(o==null)o=r.a(o)}a.drawImage(o,p.a-b,p.b-c)}}a.globalAlpha=1},
p(a){var t,s,r,q,p,o,n
if(a.d!=null)for(t=this.a,s=t.length,r=0,q=0;q<t.length;t.length===s||(0,A.p)(t),++q){p=t[q]
o=p.z+$.P
p.z=o
n=B.c.E(r,2)===0?-1:1
o=n*Math.sin(o*p.as)*2
p.e=o
p.a+=o
p.b=p.b+p.f
if(p.z>p.y)p.Q=!1;++r}}}
A.bk.prototype={
aq(){var t,s,r,q,p
for(t=this.a,s=0;s<30;++s){r=this.b
q=this.c
p=new A.u()
p.a=r
p.b=q
p.d=p.c=5
B.a.i(t,p)}},
t(a,b){var t,s,r,q
this.b=a
this.c=b
for(t=this.a,s=t.length,r=0;r<s;++r){q=t[r]
q.f=q.e=q.z=0
q.y=10
q.Q=!1}},
m(a,b,c){var t,s,r,q
for(t=this.a,s=t.length,r=0;r<t.length;t.length===s||(0,A.p)(t),++r){q=t[r]
if(q.Q){B.b.sG(a,"rgba(255, 255, 255, "+A.e(1-q.z/q.y)+")")
a.fillRect(q.a-b,q.b-c,q.c,q.d)}}},
p(a){var t,s,r,q,p,o,n,m
if(a.d!=null){t=this.a
s=A.G(t)
r=s.j("x(1)")
q=s.j("B<1>")
p=new A.B(t,r.a(new A.c9()),q)
if(p.gq(p)>3)for(p=this.e,o=0;o<3;++o){n=new A.B(t,r.a(new A.ca()),q).a8(0,o)
n.Q=!0
n.a=a.at.a+p.v()*a.at.c
n.f=5*p.v()
m=a.at
n.b=m.b+m.d}for(r=r.a(new A.cb()),t=new J.r(t,t.length,s.j("r<1>")),r=new A.F(t,r,s.j("F<1>")),s=s.c;r.l();){q=t.d
if(q==null)q=s.a(q)
p=q.z+$.P
q.z=p
q.b=q.b+q.f
if(p>q.y)q.Q=!1}}}}
A.c9.prototype={
$1(a){return!u.z.a(a).Q},
$S:0}
A.ca.prototype={
$1(a){return!u.z.a(a).Q},
$S:0}
A.cb.prototype={
$1(a){return u.z.a(a).Q},
$S:0}
A.bl.prototype={
ar(){var t,s,r,q,p
for(t=this.a,s=0;s<10;++s){r=this.b
q=this.c
p=new A.u()
p.a=r
p.b=q
p.d=p.c=10
B.a.i(t,p)}},
t(a,b){var t,s,r,q,p,o,n=this
n.b=a
n.c=b
for(t=n.a,s=t.length,r=n.e,q=0;q<t.length;t.length===s||(0,A.p)(t),++q){p=t[q]
p.z=0
o=r.v()*3.141592653589793/4+1.5707963267948966
o=B.c.E(r.ac(10),2)===0?o:6.283185307179586-o
p.e=Math.sin(o)*10
p.f=Math.cos(o)*10
p.a=a+50*(1-o/4.71238898038469)
p.b=b
p.y=10
p.Q=!0}},
m(a,b,c){var t,s,r,q,p,o,n,m
for(t=this.a,s=t.length,r=u.H,q=u.R,p=0;p<t.length;t.length===s||(0,A.p)(t),++p){o=t[p]
if(o.Q){a.globalAlpha=1-o.z/o.y
n=A.ay(o.a-b,o.b-c,o.c,o.d,r)
m=$.f.b
if(m==$.f)A.H(A.V(""))
m=m.n(0,"bubbles")
B.b.F(a,m==null?q.a(m):m,n)}}a.globalAlpha=1},
p(a){var t,s,r,q,p,o,n
if(a.d!=null)for(t=this.a,s=t.length,r=$.P,q=0;q<s;++q){p=t[q]
if(p.Q){p.a=p.a+p.e
o=p.b
n=p.f
p.b=o+n
o=p.z+=r
p.f=n+1
if(o>p.y)p.Q=!1}}}}
A.ba.prototype={
ap(){var t,s,r,q,p,o=this
o.d=!0
for(t=o.a,s=0;s<15;++s){r=o.b
q=o.c
p=new A.u()
p.a=r
p.b=q
p.d=p.c=100
B.a.i(t,p)}},
t(a,b){var t,s,r,q,p,o=this
o.b=a
o.c=b
for(t=o.a,s=t.length,r=o.e,q=0;q<t.length;t.length===s||(0,A.p)(t),++q){p=t[q]
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
for(r=p/2,n=o/2,m=u.H,l=u.R,k=0,j=0;j<e.length;e.length===t||(0,A.p)(e),++j){i=e[j]
if(i.Q&&i.z<i.y&&k>0){h=A.ay(i.a-b-r,i.b-c-n,p,o,m)
g=$.f.b
if(g==$.f)A.H(A.V(""))
g=g.n(0,f)
B.b.F(a,g==null?l.a(g):g,h)}++k}t=s*2
a.globalAlpha=t>1?1:t
if(0>=e.length)return A.m(e,0)
if(e[0].Q){t=$.f.A().n(0,f)
if(t==null)t=l.a(t)
if(0>=e.length)return A.m(e,0)
e=e[0]
a.drawImage(t,e.a-b-e.c/2,e.b-c-e.d/2)}a.globalAlpha=1},
p(a){var t,s,r,q,p,o,n,m,l,k,j=this
if(a.d!=null){t=a.at
j.b=t.a+t.c/2
j.c=t.b+t.d/2
t=j.a
s=t.length
if(1>=s)return A.m(t,1)
r=t[1]
q=100*(1-r.z/r.y)
for(p=0,o=0;o<t.length;t.length===s||(0,A.p)(t),++o){n=t[o]
if(n.Q){n.z=n.z+$.P
r=j.b
if(p>0){m=Math.sin(n.as)
l=B.c.E(p,2)===0
k=l?1.5:1
n.a=r+m*q*k
k=j.c
m=Math.cos(n.as)
r=l?1.5:1
n.b=k+m*q*r
if(n.z>n.y)n.Q=!1}else{n.a=r
n.b=j.c}}++p}}}}
A.b7.prototype={
ao(){var t,s,r,q,p
for(t=this.a,s=0;s<10;++s){r=this.b
q=this.c
p=new A.u()
p.a=r
p.b=q
p.d=p.c=10
B.a.i(t,p)}},
t(a,b){var t,s,r,q,p,o,n=this
n.b=a
n.c=b
for(t=n.a,s=t.length,r=n.e,q=0;q<t.length;t.length===s||(0,A.p)(t),++q){p=t[q]
p.z=0
o=r.v()*3.141592653589793*2
p.e=Math.sin(o)*10
p.f=Math.cos(o)*10
p.a=a
p.b=b
p.y=10
p.Q=!0}},
m(a,b,c){var t,s,r,q,p,o
for(t=this.a,s=t.length,r=u.R,q=0;q<t.length;t.length===s||(0,A.p)(t),++q){p=t[q]
if(p.Q){a.globalAlpha=1-p.z/p.y
o=$.f.b
if(o==$.f)A.H(A.V(""))
o=o.n(0,"coin_particle")
if(o==null)o=r.a(o)
a.drawImage(o,p.a-b,p.b-c)}}a.globalAlpha=1},
p(a){var t,s,r,q,p,o,n
if(a.d!=null)for(t=this.a,s=t.length,r=$.P,q=0;q<s;++q){p=t[q]
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
W(){return B.a.aL(this.a,new A.ce())}}
A.ce.prototype={
$1(a){return u.z.a(a).Q},
$S:0}
A.u.prototype={
av(a,b,c,d){var t=this
t.a=a
t.b=b
t.c=c
t.d=d}}
A.aC.prototype={
ae(a,b){var t=this
t.z=0
t.Q=!0
t.b=b
t.f=5}}
A.N.prototype={
a0(a,b,c,d){var t=this
t.a=a
t.b=b
t.c=c
t.d=d
t.r=t.w=!0
t.x=1},
p(a){var t=this,s=a.e,r=A.G(s)
r=new A.B(s,r.j("x(1)").a(new A.cf(t)),r.j("B<1>"))
r.gq(r)
if(t.b>640)a.Y(0)
s=t.a
r=t.c
if(s+r>360){t.e*=-1
t.a=360-r-1}else if(s<0){t.e*=-1
t.a=1}if(t.at){t.R(!1)
t.ay=t.ay+$.P
if(Math.abs(t.f)>5){t.at=!1
t.ay=0}}},
m(a,b,c){var t,s,r=this,q=r.f,p=r.d,o=q>0?p:p+-q
q=r.ay
if(q<5&&r.at)o-=(2.5-Math.abs(2.5-q))*8
else if(r.at)o-=(25-Math.abs(25-B.c.E(q,50)))*0.25
q=r.c
t=q*(p/o)
s=A.ay(r.a+(q-t)/2-b,r.b+(p-o)-c,t,o,u.H)
if(r.ch===B.i){q=$.f.A().n(0,"player_left")
if(q==null)q=u.R.a(q)}else{q=$.f.A().n(0,"player_right")
if(q==null)q=u.R.a(q)}B.b.F(a,q,s)},
H(a,b){switch(b){case B.e:break
case B.j:break
case B.k:break
case B.i:break
case B.h:break}},
aQ(a,b,c){var t,s,r,q,p,o,n,m=this
if(!m.at&&!m.ax)return
t=J.cK(a)
s=t.gad(a)
r=$.dj
t=t.gad(a)
q=$.dk
p=m.a
o=m.c
n=Math.atan2(m.b+m.d/2-(t.b/q+c),p+o/2-(s.a/r+b))-1.5707963267948966
m.e=Math.sin(n)*20
r=Math.cos(n)*-40
m.f=r
if(r<-30)m.f=-30
t=m.b-=20
s=m.z
if(s!=null)s.t(m.a,t)
m.ch=m.e<0?B.i:B.h
m.R(!1)},
aT(a){if(a instanceof A.a4)return a.y
return!1},
R(a){var t
if(!a){t=this.as
if(t!=null){t=t.a
if(0>=t.length)return A.m(t,0)
t[0].Q=!1}}this.ax=a}}
A.cf.prototype={
$1(a){return this.a.aT(u.v.a(a))},
$S:5}
A.bD.prototype={
p(a){var t=this.y
if(t>0)this.y=t-$.P
t=this.Q
t===$&&A.n()
t.p(a)},
m(a,b,c){var t=this,s=t.a,r=s<100?0:1,q=82-30*(1-Math.abs(1-t.y/5*2)),p=A.ay(s-b-20*r,t.b-c-30+(82-q)/2,220,q,u.H)
if(r===0){s=$.f.A().n(0,"branch_mirrored")
if(s==null)s=u.R.a(s)}else{s=$.f.A().n(0,"branch")
if(s==null)s=u.R.a(s)}B.b.F(a,s,p)
s=t.Q
s===$&&A.n()
s.m(a,b,c)},
H(a,b){var t,s,r,q,p=this,o=a instanceof A.N
if(o)if(b!==B.e)if(b!==B.j){t=p.Q
t===$&&A.n()
t=!t.W()}else t=!1
else t=!1
else t=!1
if(t){t=p.Q
t===$&&A.n()
t.t(p.a,p.b)
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
o===$&&A.n()
o.t(p.a,p.b)
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
t.al=t.h
t=J.a6.prototype
t.am=t.h})();(function installTearOffs(){var t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers._instance_1u
t(A,"fG","eL",3)
t(A,"fH","eM",3)
t(A,"fI","eN",3)
s(A,"dZ","fA",2)
r(A.be.prototype,"gaX","p",12)})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(A.j,null)
r(A.j,[A.cT,J.aq,J.r,A.h,A.ci,A.q,A.D,A.aE,A.cp,A.cd,A.aN,A.a2,A.cw,A.E,A.bP,A.bT,A.aO,A.bM,A.cG,A.aw,A.aJ,A.aT,A.bR,A.aL,A.az,A.bb,A.cx,A.bs,A.aA,A.cy,A.I,A.bA,A.bN,A.bQ,A.a8,A.bS,A.c_,A.c0,A.cg,A.t,A.c3,A.c5,A.be,A.W,A.v])
r(J.aq,[J.bg,J.bh,J.L,J.o,J.as,J.ae])
r(J.L,[J.a6,A.l,A.b2,A.am,A.c4,A.ao,A.b])
r(J.a6,[J.bt,J.ag,J.U])
s(J.c8,J.o)
r(J.as,[J.ar,J.bi])
r(A.h,[A.at,A.bE,A.bj,A.bG,A.bw,A.al,A.bO,A.br,A.a0,A.bH,A.bF,A.b8,A.b9])
r(A.q,[A.ap,A.B,A.aD])
s(A.F,A.D)
s(A.ax,A.bE)
r(A.a2,[A.b4,A.b5,A.bB,A.cL,A.cN,A.ct,A.cs,A.cB,A.c1,A.c2,A.c7,A.c6,A.ck,A.cl,A.cm,A.c9,A.ca,A.cb,A.ce,A.cf])
r(A.bB,[A.bz,A.ab])
s(A.bL,A.al)
r(A.b5,[A.cM,A.cc])
s(A.aP,A.bO)
r(A.b4,[A.cu,A.cv,A.cD,A.cC,A.cI])
s(A.cA,A.cG)
s(A.av,A.aw)
s(A.aH,A.av)
s(A.aI,A.ap)
s(A.aM,A.aT)
s(A.aK,A.aM)
r(A.a0,[A.af,A.bf])
r(A.l,[A.y,A.aF])
r(A.y,[A.a,A.K])
s(A.c,A.a)
r(A.c,[A.b_,A.b0,A.a1,A.bd,A.a5,A.a7,A.bx])
s(A.J,A.b)
s(A.M,A.J)
s(A.bI,A.a7)
s(A.aG,A.ao)
s(A.O,A.bS)
r(A.t,[A.b6,A.ac,A.a4,A.u,A.N,A.bD])
s(A.T,A.cx)
r(A.W,[A.bn,A.bo,A.bp,A.bq])
r(A.v,[A.bJ,A.by,A.bm,A.bk,A.bl,A.ba,A.b7])
s(A.aC,A.u)
t(A.aT,A.az)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{d7:"int",bX:"double",a_:"num",a9:"String",x:"bool",I:"Null",au:"List"},mangledNames:{},types:["x(u)","I()","~()","~(~())","x(v)","x(t)","@(@)","@(@,a9)","@(a9)","I(@)","I(~())","~(j?,j?)","@(bC)","dw<@>(b)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.f6(v.typeUniverse,JSON.parse('{"bt":"a6","ag":"a6","U":"a6","h5":"b","hc":"b","hh":"a","h7":"c","hd":"y","hb":"y","hi":"M","h9":"J","h8":"K","hk":"K","h6":"a7","bg":{"x":[]},"o":{"au":["1"],"q":["1"]},"c8":{"o":["1"],"au":["1"],"q":["1"]},"r":{"D":["1"]},"as":{"bX":[],"a_":[]},"ar":{"bX":[],"d7":[],"a_":[]},"bi":{"bX":[],"a_":[]},"ae":{"a9":[]},"at":{"h":[]},"ap":{"q":["1"]},"B":{"q":["1"]},"F":{"D":["1"]},"aD":{"q":["1"]},"aE":{"D":["1"]},"ax":{"h":[]},"bj":{"h":[]},"bG":{"h":[]},"aN":{"dx":[]},"a2":{"a3":[]},"b4":{"a3":[]},"b5":{"a3":[]},"bB":{"a3":[]},"bz":{"a3":[]},"ab":{"a3":[]},"bw":{"h":[]},"bL":{"h":[]},"bO":{"h":[]},"aP":{"h":[]},"aO":{"bC":[]},"aH":{"aw":["1","2"]},"aI":{"q":["1"]},"aJ":{"D":["1"]},"aK":{"az":["1"],"dp":["1"],"q":["1"]},"aL":{"D":["1"]},"av":{"aw":["1","2"]},"aM":{"az":["1"],"q":["1"]},"dw":{"q":["1"]},"al":{"h":[]},"bE":{"h":[]},"br":{"h":[]},"a0":{"h":[]},"af":{"h":[]},"bf":{"h":[]},"bH":{"h":[]},"bF":{"h":[]},"b8":{"h":[]},"bs":{"h":[]},"aA":{"h":[]},"b9":{"h":[]},"a5":{"a":[],"l":[],"b3":[]},"c":{"a":[],"l":[]},"b_":{"a":[],"l":[]},"b0":{"a":[],"l":[]},"a1":{"a":[],"l":[],"b3":[]},"K":{"l":[]},"ao":{"O":["a_"]},"a":{"l":[]},"bd":{"a":[],"l":[]},"a7":{"a":[],"l":[]},"M":{"b":[]},"y":{"l":[]},"bx":{"a":[],"l":[]},"J":{"b":[]},"bI":{"a":[],"l":[],"b3":[]},"aF":{"cr":[],"l":[]},"aG":{"O":["a_"]},"bN":{"cr":[],"l":[]},"bQ":{"eC":[]},"O":{"bS":["1"]},"b6":{"t":[]},"ac":{"t":[]},"a4":{"t":[]},"bn":{"W":[]},"bo":{"W":[]},"bp":{"W":[]},"bq":{"W":[]},"u":{"t":[]},"aC":{"u":[],"t":[]},"bJ":{"v":[]},"by":{"v":[]},"bm":{"v":[]},"bk":{"v":[]},"bl":{"v":[]},"ba":{"v":[]},"b7":{"v":[]},"N":{"t":[]},"bD":{"t":[]}}'))
A.f5(v.typeUniverse,JSON.parse('{"ap":1,"av":2,"aM":1,"aT":1}'))
var u=(function rtii(){var t=A.d4
return{E:t("a1"),j:t("T"),h:t("a"),v:t("t"),C:t("h"),D:t("b"),Z:t("a3"),R:t("a5"),Q:t("q<t>"),U:t("q<@>"),n:t("o<t>"),I:t("o<u>"),a:t("o<v>"),s:t("o<a9>"),b:t("o<@>"),T:t("bh"),g:t("U"),r:t("au<t>"),c:t("au<v>"),V:t("M"),P:t("I"),K:t("j"),z:t("u"),W:t("v"),p:t("a8<a_>"),L:t("hj"),q:t("O<a_>"),l:t("dx"),N:t("a9"),G:t("bC"),J:t("ag"),d:t("aD<aC>"),y:t("cr"),w:t("x"),i:t("bX"),B:t("@"),S:t("d7"),A:t("0&*"),_:t("j*"),O:t("l?"),Y:t("di<I>?"),X:t("j?"),e:t("bR?"),o:t("@(b)?"),H:t("a_"),t:t("~"),M:t("~()"),F:t("~(bC)")}})();(function constants(){B.z=A.a1.prototype
B.b=A.am.prototype
B.A=A.a5.prototype
B.B=J.aq.prototype
B.a=J.o.prototype
B.c=J.ar.prototype
B.d=J.as.prototype
B.p=J.ae.prototype
B.C=J.U.prototype
B.D=J.L.prototype
B.q=J.bt.prototype
B.m=J.ag.prototype
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

B.y=new A.bs()
B.F=new A.ci()
B.f=new A.bQ()
B.l=new A.cA()
B.e=new A.T("none")
B.j=new A.T("up")
B.k=new A.T("down")
B.i=new A.T("left")
B.h=new A.T("right")
B.E=A.h3("j")})();(function staticFields(){$.cz=null
$.ds=null
$.df=null
$.de=null
$.e1=null
$.dY=null
$.e5=null
$.cJ=null
$.cO=null
$.d6=null
$.ai=null
$.aV=null
$.aW=null
$.d1=!1
$.bK=B.l
$.C=A.k([],A.d4("o<j>"))
$.f=A.eO()
$.dj=1
$.dk=1
$.dB=1
$.eI=0
$.cn=0
$.P=0})();(function lazyInitializers(){var t=hunkHelpers.lazyFinal,s=hunkHelpers.lazy
t($,"ha","e7",()=>A.fP("_$dart_dartClosure"))
t($,"hl","e8",()=>A.Q(A.cq({
toString:function(){return"$receiver$"}})))
t($,"hm","e9",()=>A.Q(A.cq({$method$:null,
toString:function(){return"$receiver$"}})))
t($,"hn","ea",()=>A.Q(A.cq(null)))
t($,"ho","eb",()=>A.Q(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
t($,"hr","ee",()=>A.Q(A.cq(void 0)))
t($,"hs","ef",()=>A.Q(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
t($,"hq","ed",()=>A.Q(A.dD(null)))
t($,"hp","ec",()=>A.Q(function(){try{null.$method$}catch(r){return r.message}}()))
t($,"hu","eh",()=>A.Q(A.dD(void 0)))
t($,"ht","eg",()=>A.Q(function(){try{(void 0).$method$}catch(r){return r.message}}()))
t($,"hv","da",()=>A.eK())
t($,"hG","ei",()=>A.e3(B.E))
s($,"hg","d9",()=>A.bv())
s($,"hf","cQ",()=>{var r,q,p=A.bv(),o=new A.bq(A.bv())
o.c=1000
r=new A.bp(A.bv())
r.c=500
q=new A.bn(A.bv())
q.c=700
return A.k([new A.bo(p),o,r,q],A.d4("o<W>"))})})();(function nativeSupport(){!function(){var t=function(a){var n={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.L,MediaError:J.L,NavigatorUserMediaError:J.L,OverconstrainedError:J.L,PositionError:J.L,GeolocationPositionError:J.L,HTMLBRElement:A.c,HTMLBaseElement:A.c,HTMLBodyElement:A.c,HTMLButtonElement:A.c,HTMLContentElement:A.c,HTMLDListElement:A.c,HTMLDataElement:A.c,HTMLDataListElement:A.c,HTMLDetailsElement:A.c,HTMLDialogElement:A.c,HTMLDivElement:A.c,HTMLEmbedElement:A.c,HTMLFieldSetElement:A.c,HTMLHRElement:A.c,HTMLHeadElement:A.c,HTMLHeadingElement:A.c,HTMLHtmlElement:A.c,HTMLIFrameElement:A.c,HTMLInputElement:A.c,HTMLLIElement:A.c,HTMLLabelElement:A.c,HTMLLegendElement:A.c,HTMLLinkElement:A.c,HTMLMapElement:A.c,HTMLMenuElement:A.c,HTMLMetaElement:A.c,HTMLMeterElement:A.c,HTMLModElement:A.c,HTMLOListElement:A.c,HTMLObjectElement:A.c,HTMLOptGroupElement:A.c,HTMLOptionElement:A.c,HTMLOutputElement:A.c,HTMLParagraphElement:A.c,HTMLParamElement:A.c,HTMLPictureElement:A.c,HTMLPreElement:A.c,HTMLProgressElement:A.c,HTMLQuoteElement:A.c,HTMLScriptElement:A.c,HTMLShadowElement:A.c,HTMLSlotElement:A.c,HTMLSourceElement:A.c,HTMLSpanElement:A.c,HTMLStyleElement:A.c,HTMLTableCaptionElement:A.c,HTMLTableCellElement:A.c,HTMLTableDataCellElement:A.c,HTMLTableHeaderCellElement:A.c,HTMLTableColElement:A.c,HTMLTableElement:A.c,HTMLTableRowElement:A.c,HTMLTableSectionElement:A.c,HTMLTemplateElement:A.c,HTMLTextAreaElement:A.c,HTMLTimeElement:A.c,HTMLTitleElement:A.c,HTMLTrackElement:A.c,HTMLUListElement:A.c,HTMLUnknownElement:A.c,HTMLDirectoryElement:A.c,HTMLFontElement:A.c,HTMLFrameElement:A.c,HTMLFrameSetElement:A.c,HTMLMarqueeElement:A.c,HTMLElement:A.c,HTMLAnchorElement:A.b_,HTMLAreaElement:A.b0,HTMLCanvasElement:A.a1,CanvasGradient:A.b2,CanvasRenderingContext2D:A.am,CDATASection:A.K,CharacterData:A.K,Comment:A.K,ProcessingInstruction:A.K,Text:A.K,DOMException:A.c4,DOMRectReadOnly:A.ao,MathMLElement:A.a,SVGAElement:A.a,SVGAnimateElement:A.a,SVGAnimateMotionElement:A.a,SVGAnimateTransformElement:A.a,SVGAnimationElement:A.a,SVGCircleElement:A.a,SVGClipPathElement:A.a,SVGDefsElement:A.a,SVGDescElement:A.a,SVGDiscardElement:A.a,SVGEllipseElement:A.a,SVGFEBlendElement:A.a,SVGFEColorMatrixElement:A.a,SVGFEComponentTransferElement:A.a,SVGFECompositeElement:A.a,SVGFEConvolveMatrixElement:A.a,SVGFEDiffuseLightingElement:A.a,SVGFEDisplacementMapElement:A.a,SVGFEDistantLightElement:A.a,SVGFEFloodElement:A.a,SVGFEFuncAElement:A.a,SVGFEFuncBElement:A.a,SVGFEFuncGElement:A.a,SVGFEFuncRElement:A.a,SVGFEGaussianBlurElement:A.a,SVGFEImageElement:A.a,SVGFEMergeElement:A.a,SVGFEMergeNodeElement:A.a,SVGFEMorphologyElement:A.a,SVGFEOffsetElement:A.a,SVGFEPointLightElement:A.a,SVGFESpecularLightingElement:A.a,SVGFESpotLightElement:A.a,SVGFETileElement:A.a,SVGFETurbulenceElement:A.a,SVGFilterElement:A.a,SVGForeignObjectElement:A.a,SVGGElement:A.a,SVGGeometryElement:A.a,SVGGraphicsElement:A.a,SVGImageElement:A.a,SVGLineElement:A.a,SVGLinearGradientElement:A.a,SVGMarkerElement:A.a,SVGMaskElement:A.a,SVGMetadataElement:A.a,SVGPathElement:A.a,SVGPatternElement:A.a,SVGPolygonElement:A.a,SVGPolylineElement:A.a,SVGRadialGradientElement:A.a,SVGRectElement:A.a,SVGScriptElement:A.a,SVGSetElement:A.a,SVGStopElement:A.a,SVGStyleElement:A.a,SVGElement:A.a,SVGSVGElement:A.a,SVGSwitchElement:A.a,SVGSymbolElement:A.a,SVGTSpanElement:A.a,SVGTextContentElement:A.a,SVGTextElement:A.a,SVGTextPathElement:A.a,SVGTextPositioningElement:A.a,SVGTitleElement:A.a,SVGUseElement:A.a,SVGViewElement:A.a,SVGGradientElement:A.a,SVGComponentTransferFunctionElement:A.a,SVGFEDropShadowElement:A.a,SVGMPathElement:A.a,Element:A.a,AbortPaymentEvent:A.b,AnimationEvent:A.b,AnimationPlaybackEvent:A.b,ApplicationCacheErrorEvent:A.b,BackgroundFetchClickEvent:A.b,BackgroundFetchEvent:A.b,BackgroundFetchFailEvent:A.b,BackgroundFetchedEvent:A.b,BeforeInstallPromptEvent:A.b,BeforeUnloadEvent:A.b,BlobEvent:A.b,CanMakePaymentEvent:A.b,ClipboardEvent:A.b,CloseEvent:A.b,CustomEvent:A.b,DeviceMotionEvent:A.b,DeviceOrientationEvent:A.b,ErrorEvent:A.b,ExtendableEvent:A.b,ExtendableMessageEvent:A.b,FetchEvent:A.b,FontFaceSetLoadEvent:A.b,ForeignFetchEvent:A.b,GamepadEvent:A.b,HashChangeEvent:A.b,InstallEvent:A.b,MediaEncryptedEvent:A.b,MediaKeyMessageEvent:A.b,MediaQueryListEvent:A.b,MediaStreamEvent:A.b,MediaStreamTrackEvent:A.b,MessageEvent:A.b,MIDIConnectionEvent:A.b,MIDIMessageEvent:A.b,MutationEvent:A.b,NotificationEvent:A.b,PageTransitionEvent:A.b,PaymentRequestEvent:A.b,PaymentRequestUpdateEvent:A.b,PopStateEvent:A.b,PresentationConnectionAvailableEvent:A.b,PresentationConnectionCloseEvent:A.b,ProgressEvent:A.b,PromiseRejectionEvent:A.b,PushEvent:A.b,RTCDataChannelEvent:A.b,RTCDTMFToneChangeEvent:A.b,RTCPeerConnectionIceEvent:A.b,RTCTrackEvent:A.b,SecurityPolicyViolationEvent:A.b,SensorErrorEvent:A.b,SpeechRecognitionError:A.b,SpeechRecognitionEvent:A.b,SpeechSynthesisEvent:A.b,StorageEvent:A.b,SyncEvent:A.b,TrackEvent:A.b,TransitionEvent:A.b,WebKitTransitionEvent:A.b,VRDeviceEvent:A.b,VRDisplayEvent:A.b,VRSessionEvent:A.b,MojoInterfaceRequestEvent:A.b,ResourceProgressEvent:A.b,USBConnectionEvent:A.b,IDBVersionChangeEvent:A.b,AudioProcessingEvent:A.b,OfflineAudioCompletionEvent:A.b,WebGLContextEvent:A.b,Event:A.b,InputEvent:A.b,SubmitEvent:A.b,EventTarget:A.l,HTMLFormElement:A.bd,HTMLImageElement:A.a5,HTMLAudioElement:A.a7,HTMLMediaElement:A.a7,MouseEvent:A.M,DragEvent:A.M,PointerEvent:A.M,WheelEvent:A.M,Document:A.y,DocumentFragment:A.y,HTMLDocument:A.y,ShadowRoot:A.y,XMLDocument:A.y,Attr:A.y,DocumentType:A.y,Node:A.y,HTMLSelectElement:A.bx,CompositionEvent:A.J,FocusEvent:A.J,KeyboardEvent:A.J,TextEvent:A.J,TouchEvent:A.J,UIEvent:A.J,HTMLVideoElement:A.bI,Window:A.aF,DOMWindow:A.aF,ClientRect:A.aG,DOMRect:A.aG})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,GeolocationPositionError:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLCanvasElement:true,CanvasGradient:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,DOMException:true,DOMRectReadOnly:false,MathMLElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,EventTarget:false,HTMLFormElement:true,HTMLImageElement:true,HTMLAudioElement:true,HTMLMediaElement:false,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,HTMLSelectElement:true,CompositionEvent:true,FocusEvent:true,KeyboardEvent:true,TextEvent:true,TouchEvent:true,UIEvent:false,HTMLVideoElement:true,Window:true,DOMWindow:true,ClientRect:true,DOMRect:true})})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var t=A.fY
if(typeof dartMainRunner==="function")dartMainRunner(t,[])
else t([])})})()
//# sourceMappingURL=main.js.map
