function bw(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const s in r)if(s!=="default"&&!(s in t)){const i=Object.getOwnPropertyDescriptor(r,s);i&&Object.defineProperty(t,s,i.get?i:{enumerable:!0,get:()=>r[s]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Rw(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Gm={exports:{}},nl={},Km={exports:{}},q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ro=Symbol.for("react.element"),jw=Symbol.for("react.portal"),Mw=Symbol.for("react.fragment"),Dw=Symbol.for("react.strict_mode"),Lw=Symbol.for("react.profiler"),Ow=Symbol.for("react.provider"),Fw=Symbol.for("react.context"),Uw=Symbol.for("react.forward_ref"),Bw=Symbol.for("react.suspense"),zw=Symbol.for("react.memo"),Ww=Symbol.for("react.lazy"),of=Symbol.iterator;function $w(t){return t===null||typeof t!="object"?null:(t=of&&t[of]||t["@@iterator"],typeof t=="function"?t:null)}var Qm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qm=Object.assign,Ym={};function Ps(t,e,n){this.props=t,this.context=e,this.refs=Ym,this.updater=n||Qm}Ps.prototype.isReactComponent={};Ps.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ps.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Xm(){}Xm.prototype=Ps.prototype;function sd(t,e,n){this.props=t,this.context=e,this.refs=Ym,this.updater=n||Qm}var id=sd.prototype=new Xm;id.constructor=sd;qm(id,Ps.prototype);id.isPureReactComponent=!0;var af=Array.isArray,Jm=Object.prototype.hasOwnProperty,od={current:null},Zm={key:!0,ref:!0,__self:!0,__source:!0};function eg(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)Jm.call(e,r)&&!Zm.hasOwnProperty(r)&&(s[r]=e[r]);var a=arguments.length-2;if(a===1)s.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];s.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)s[r]===void 0&&(s[r]=a[r]);return{$$typeof:ro,type:t,key:i,ref:o,props:s,_owner:od.current}}function Vw(t,e){return{$$typeof:ro,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ad(t){return typeof t=="object"&&t!==null&&t.$$typeof===ro}function Hw(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var lf=/\/+/g;function zl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Hw(""+t.key):e.toString(36)}function Wo(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ro:case jw:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+zl(o,0):r,af(s)?(n="",t!=null&&(n=t.replace(lf,"$&/")+"/"),Wo(s,e,n,"",function(u){return u})):s!=null&&(ad(s)&&(s=Vw(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(lf,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",af(t))for(var a=0;a<t.length;a++){i=t[a];var l=r+zl(i,a);o+=Wo(i,e,n,l,s)}else if(l=$w(t),typeof l=="function")for(t=l.call(t),a=0;!(i=t.next()).done;)i=i.value,l=r+zl(i,a++),o+=Wo(i,e,n,l,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function vo(t,e,n){if(t==null)return t;var r=[],s=0;return Wo(t,r,"","",function(i){return e.call(n,i,s++)}),r}function Gw(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Xe={current:null},$o={transition:null},Kw={ReactCurrentDispatcher:Xe,ReactCurrentBatchConfig:$o,ReactCurrentOwner:od};function tg(){throw Error("act(...) is not supported in production builds of React.")}q.Children={map:vo,forEach:function(t,e,n){vo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return vo(t,function(){e++}),e},toArray:function(t){return vo(t,function(e){return e})||[]},only:function(t){if(!ad(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};q.Component=Ps;q.Fragment=Mw;q.Profiler=Lw;q.PureComponent=sd;q.StrictMode=Dw;q.Suspense=Bw;q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Kw;q.act=tg;q.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=qm({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=od.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Jm.call(e,l)&&!Zm.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:ro,type:t.type,key:s,ref:i,props:r,_owner:o}};q.createContext=function(t){return t={$$typeof:Fw,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Ow,_context:t},t.Consumer=t};q.createElement=eg;q.createFactory=function(t){var e=eg.bind(null,t);return e.type=t,e};q.createRef=function(){return{current:null}};q.forwardRef=function(t){return{$$typeof:Uw,render:t}};q.isValidElement=ad;q.lazy=function(t){return{$$typeof:Ww,_payload:{_status:-1,_result:t},_init:Gw}};q.memo=function(t,e){return{$$typeof:zw,type:t,compare:e===void 0?null:e}};q.startTransition=function(t){var e=$o.transition;$o.transition={};try{t()}finally{$o.transition=e}};q.unstable_act=tg;q.useCallback=function(t,e){return Xe.current.useCallback(t,e)};q.useContext=function(t){return Xe.current.useContext(t)};q.useDebugValue=function(){};q.useDeferredValue=function(t){return Xe.current.useDeferredValue(t)};q.useEffect=function(t,e){return Xe.current.useEffect(t,e)};q.useId=function(){return Xe.current.useId()};q.useImperativeHandle=function(t,e,n){return Xe.current.useImperativeHandle(t,e,n)};q.useInsertionEffect=function(t,e){return Xe.current.useInsertionEffect(t,e)};q.useLayoutEffect=function(t,e){return Xe.current.useLayoutEffect(t,e)};q.useMemo=function(t,e){return Xe.current.useMemo(t,e)};q.useReducer=function(t,e,n){return Xe.current.useReducer(t,e,n)};q.useRef=function(t){return Xe.current.useRef(t)};q.useState=function(t){return Xe.current.useState(t)};q.useSyncExternalStore=function(t,e,n){return Xe.current.useSyncExternalStore(t,e,n)};q.useTransition=function(){return Xe.current.useTransition()};q.version="18.3.1";Km.exports=q;var w=Km.exports;const ng=Rw(w),Qw=bw({__proto__:null,default:ng},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qw=w,Yw=Symbol.for("react.element"),Xw=Symbol.for("react.fragment"),Jw=Object.prototype.hasOwnProperty,Zw=qw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,eE={key:!0,ref:!0,__self:!0,__source:!0};function rg(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Jw.call(e,r)&&!eE.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:Yw,type:t,key:i,ref:o,props:s,_owner:Zw.current}}nl.Fragment=Xw;nl.jsx=rg;nl.jsxs=rg;Gm.exports=nl;var c=Gm.exports,sg={exports:{}},ht={},ig={exports:{}},og={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(A,O){var L=A.length;A.push(O);e:for(;0<L;){var oe=L-1>>>1,pe=A[oe];if(0<s(pe,O))A[oe]=O,A[L]=pe,L=oe;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var O=A[0],L=A.pop();if(L!==O){A[0]=L;e:for(var oe=0,pe=A.length,yn=pe>>>1;oe<yn;){var xt=2*(oe+1)-1,_n=A[xt],Ze=xt+1,vn=A[Ze];if(0>s(_n,L))Ze<pe&&0>s(vn,_n)?(A[oe]=vn,A[Ze]=L,oe=Ze):(A[oe]=_n,A[xt]=L,oe=xt);else if(Ze<pe&&0>s(vn,L))A[oe]=vn,A[Ze]=L,oe=Ze;else break e}}return O}function s(A,O){var L=A.sortIndex-O.sortIndex;return L!==0?L:A.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],h=1,d=null,f=3,y=!1,v=!1,g=!1,E=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(A){for(var O=n(u);O!==null;){if(O.callback===null)r(u);else if(O.startTime<=A)r(u),O.sortIndex=O.expirationTime,e(l,O);else break;O=n(u)}}function C(A){if(g=!1,_(A),!v)if(n(l)!==null)v=!0,W(x);else{var O=n(u);O!==null&&V(C,O.startTime-A)}}function x(A,O){v=!1,g&&(g=!1,m(S),S=-1),y=!0;var L=f;try{for(_(O),d=n(l);d!==null&&(!(d.expirationTime>O)||A&&!$());){var oe=d.callback;if(typeof oe=="function"){d.callback=null,f=d.priorityLevel;var pe=oe(d.expirationTime<=O);O=t.unstable_now(),typeof pe=="function"?d.callback=pe:d===n(l)&&r(l),_(O)}else r(l);d=n(l)}if(d!==null)var yn=!0;else{var xt=n(u);xt!==null&&V(C,xt.startTime-O),yn=!1}return yn}finally{d=null,f=L,y=!1}}var b=!1,k=null,S=-1,U=5,P=-1;function $(){return!(t.unstable_now()-P<U)}function te(){if(k!==null){var A=t.unstable_now();P=A;var O=!0;try{O=k(!0,A)}finally{O?H():(b=!1,k=null)}}else b=!1}var H;if(typeof p=="function")H=function(){p(te)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,F=D.port2;D.port1.onmessage=te,H=function(){F.postMessage(null)}}else H=function(){E(te,0)};function W(A){k=A,b||(b=!0,H())}function V(A,O){S=E(function(){A(t.unstable_now())},O)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(A){A.callback=null},t.unstable_continueExecution=function(){v||y||(v=!0,W(x))},t.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<A?Math.floor(1e3/A):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(A){switch(f){case 1:case 2:case 3:var O=3;break;default:O=f}var L=f;f=O;try{return A()}finally{f=L}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(A,O){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var L=f;f=A;try{return O()}finally{f=L}},t.unstable_scheduleCallback=function(A,O,L){var oe=t.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?oe+L:oe):L=oe,A){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=L+pe,A={id:h++,callback:O,priorityLevel:A,startTime:L,expirationTime:pe,sortIndex:-1},L>oe?(A.sortIndex=L,e(u,A),n(l)===null&&A===n(u)&&(g?(m(S),S=-1):g=!0,V(C,L-oe))):(A.sortIndex=pe,e(l,A),v||y||(v=!0,W(x))),A},t.unstable_shouldYield=$,t.unstable_wrapCallback=function(A){var O=f;return function(){var L=f;f=O;try{return A.apply(this,arguments)}finally{f=L}}}})(og);ig.exports=og;var tE=ig.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nE=w,dt=tE;function T(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ag=new Set,Ii={};function Mr(t,e){ps(t,e),ps(t+"Capture",e)}function ps(t,e){for(Ii[t]=e,t=0;t<e.length;t++)ag.add(e[t])}var an=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mc=Object.prototype.hasOwnProperty,rE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,cf={},uf={};function sE(t){return Mc.call(uf,t)?!0:Mc.call(cf,t)?!1:rE.test(t)?uf[t]=!0:(cf[t]=!0,!1)}function iE(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function oE(t,e,n,r){if(e===null||typeof e>"u"||iE(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Je(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var Ue={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ue[t]=new Je(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ue[e]=new Je(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ue[t]=new Je(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ue[t]=new Je(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ue[t]=new Je(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ue[t]=new Je(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ue[t]=new Je(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ue[t]=new Je(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ue[t]=new Je(t,5,!1,t.toLowerCase(),null,!1,!1)});var ld=/[\-:]([a-z])/g;function cd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ld,cd);Ue[e]=new Je(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ld,cd);Ue[e]=new Je(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ld,cd);Ue[e]=new Je(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ue[t]=new Je(t,1,!1,t.toLowerCase(),null,!1,!1)});Ue.xlinkHref=new Je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ue[t]=new Je(t,1,!1,t.toLowerCase(),null,!0,!0)});function ud(t,e,n,r){var s=Ue.hasOwnProperty(e)?Ue[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(oE(e,n,s,r)&&(n=null),r||s===null?sE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var mn=nE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,wo=Symbol.for("react.element"),$r=Symbol.for("react.portal"),Vr=Symbol.for("react.fragment"),dd=Symbol.for("react.strict_mode"),Dc=Symbol.for("react.profiler"),lg=Symbol.for("react.provider"),cg=Symbol.for("react.context"),hd=Symbol.for("react.forward_ref"),Lc=Symbol.for("react.suspense"),Oc=Symbol.for("react.suspense_list"),fd=Symbol.for("react.memo"),Nn=Symbol.for("react.lazy"),ug=Symbol.for("react.offscreen"),df=Symbol.iterator;function Hs(t){return t===null||typeof t!="object"?null:(t=df&&t[df]||t["@@iterator"],typeof t=="function"?t:null)}var we=Object.assign,Wl;function oi(t){if(Wl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Wl=e&&e[1]||""}return`
`+Wl+t}var $l=!1;function Vl(t,e){if(!t||$l)return"";$l=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var s=u.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,a=i.length-1;1<=o&&0<=a&&s[o]!==i[a];)a--;for(;1<=o&&0<=a;o--,a--)if(s[o]!==i[a]){if(o!==1||a!==1)do if(o--,a--,0>a||s[o]!==i[a]){var l=`
`+s[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{$l=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?oi(t):""}function aE(t){switch(t.tag){case 5:return oi(t.type);case 16:return oi("Lazy");case 13:return oi("Suspense");case 19:return oi("SuspenseList");case 0:case 2:case 15:return t=Vl(t.type,!1),t;case 11:return t=Vl(t.type.render,!1),t;case 1:return t=Vl(t.type,!0),t;default:return""}}function Fc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Vr:return"Fragment";case $r:return"Portal";case Dc:return"Profiler";case dd:return"StrictMode";case Lc:return"Suspense";case Oc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case cg:return(t.displayName||"Context")+".Consumer";case lg:return(t._context.displayName||"Context")+".Provider";case hd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case fd:return e=t.displayName||null,e!==null?e:Fc(t.type)||"Memo";case Nn:e=t._payload,t=t._init;try{return Fc(t(e))}catch{}}return null}function lE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Fc(e);case 8:return e===dd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Yn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function dg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function cE(t){var e=dg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Eo(t){t._valueTracker||(t._valueTracker=cE(t))}function hg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=dg(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function oa(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Uc(t,e){var n=e.checked;return we({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function hf(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Yn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function fg(t,e){e=e.checked,e!=null&&ud(t,"checked",e,!1)}function Bc(t,e){fg(t,e);var n=Yn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?zc(t,e.type,n):e.hasOwnProperty("defaultValue")&&zc(t,e.type,Yn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ff(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function zc(t,e,n){(e!=="number"||oa(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ai=Array.isArray;function rs(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Yn(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Wc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(T(91));return we({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function pf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(T(92));if(ai(n)){if(1<n.length)throw Error(T(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Yn(n)}}function pg(t,e){var n=Yn(e.value),r=Yn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function mf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function mg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $c(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?mg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Co,gg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Co=Co||document.createElement("div"),Co.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Co.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ki(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ui={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},uE=["Webkit","ms","Moz","O"];Object.keys(ui).forEach(function(t){uE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ui[e]=ui[t]})});function yg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ui.hasOwnProperty(t)&&ui[t]?(""+e).trim():e+"px"}function _g(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=yg(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var dE=we({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Vc(t,e){if(e){if(dE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(T(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(T(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(T(61))}if(e.style!=null&&typeof e.style!="object")throw Error(T(62))}}function Hc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gc=null;function pd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Kc=null,ss=null,is=null;function gf(t){if(t=oo(t)){if(typeof Kc!="function")throw Error(T(280));var e=t.stateNode;e&&(e=al(e),Kc(t.stateNode,t.type,e))}}function vg(t){ss?is?is.push(t):is=[t]:ss=t}function wg(){if(ss){var t=ss,e=is;if(is=ss=null,gf(t),e)for(t=0;t<e.length;t++)gf(e[t])}}function Eg(t,e){return t(e)}function Cg(){}var Hl=!1;function xg(t,e,n){if(Hl)return t(e,n);Hl=!0;try{return Eg(t,e,n)}finally{Hl=!1,(ss!==null||is!==null)&&(Cg(),wg())}}function Pi(t,e){var n=t.stateNode;if(n===null)return null;var r=al(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(T(231,e,typeof n));return n}var Qc=!1;if(an)try{var Gs={};Object.defineProperty(Gs,"passive",{get:function(){Qc=!0}}),window.addEventListener("test",Gs,Gs),window.removeEventListener("test",Gs,Gs)}catch{Qc=!1}function hE(t,e,n,r,s,i,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(h){this.onError(h)}}var di=!1,aa=null,la=!1,qc=null,fE={onError:function(t){di=!0,aa=t}};function pE(t,e,n,r,s,i,o,a,l){di=!1,aa=null,hE.apply(fE,arguments)}function mE(t,e,n,r,s,i,o,a,l){if(pE.apply(this,arguments),di){if(di){var u=aa;di=!1,aa=null}else throw Error(T(198));la||(la=!0,qc=u)}}function Dr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Sg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function yf(t){if(Dr(t)!==t)throw Error(T(188))}function gE(t){var e=t.alternate;if(!e){if(e=Dr(t),e===null)throw Error(T(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return yf(s),t;if(i===r)return yf(s),e;i=i.sibling}throw Error(T(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o){for(a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o)throw Error(T(189))}}if(n.alternate!==r)throw Error(T(190))}if(n.tag!==3)throw Error(T(188));return n.stateNode.current===n?t:e}function Ng(t){return t=gE(t),t!==null?Tg(t):null}function Tg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Tg(t);if(e!==null)return e;t=t.sibling}return null}var Ig=dt.unstable_scheduleCallback,_f=dt.unstable_cancelCallback,yE=dt.unstable_shouldYield,_E=dt.unstable_requestPaint,Ne=dt.unstable_now,vE=dt.unstable_getCurrentPriorityLevel,md=dt.unstable_ImmediatePriority,kg=dt.unstable_UserBlockingPriority,ca=dt.unstable_NormalPriority,wE=dt.unstable_LowPriority,Pg=dt.unstable_IdlePriority,rl=null,Vt=null;function EE(t){if(Vt&&typeof Vt.onCommitFiberRoot=="function")try{Vt.onCommitFiberRoot(rl,t,void 0,(t.current.flags&128)===128)}catch{}}var Mt=Math.clz32?Math.clz32:SE,CE=Math.log,xE=Math.LN2;function SE(t){return t>>>=0,t===0?32:31-(CE(t)/xE|0)|0}var xo=64,So=4194304;function li(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ua(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~s;a!==0?r=li(a):(i&=o,i!==0&&(r=li(i)))}else o=n&~s,o!==0?r=li(o):i!==0&&(r=li(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Mt(e),s=1<<n,r|=t[n],e&=~s;return r}function NE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function TE(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-Mt(i),a=1<<o,l=s[o];l===-1?(!(a&n)||a&r)&&(s[o]=NE(a,e)):l<=e&&(t.expiredLanes|=a),i&=~a}}function Yc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ag(){var t=xo;return xo<<=1,!(xo&4194240)&&(xo=64),t}function Gl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function so(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Mt(e),t[e]=n}function IE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-Mt(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function gd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Mt(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var re=0;function bg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Rg,yd,jg,Mg,Dg,Xc=!1,No=[],On=null,Fn=null,Un=null,Ai=new Map,bi=new Map,In=[],kE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vf(t,e){switch(t){case"focusin":case"focusout":On=null;break;case"dragenter":case"dragleave":Fn=null;break;case"mouseover":case"mouseout":Un=null;break;case"pointerover":case"pointerout":Ai.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":bi.delete(e.pointerId)}}function Ks(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=oo(e),e!==null&&yd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function PE(t,e,n,r,s){switch(e){case"focusin":return On=Ks(On,t,e,n,r,s),!0;case"dragenter":return Fn=Ks(Fn,t,e,n,r,s),!0;case"mouseover":return Un=Ks(Un,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return Ai.set(i,Ks(Ai.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,bi.set(i,Ks(bi.get(i)||null,t,e,n,r,s)),!0}return!1}function Lg(t){var e=pr(t.target);if(e!==null){var n=Dr(e);if(n!==null){if(e=n.tag,e===13){if(e=Sg(n),e!==null){t.blockedOn=e,Dg(t.priority,function(){jg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Vo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Jc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Gc=r,n.target.dispatchEvent(r),Gc=null}else return e=oo(n),e!==null&&yd(e),t.blockedOn=n,!1;e.shift()}return!0}function wf(t,e,n){Vo(t)&&n.delete(e)}function AE(){Xc=!1,On!==null&&Vo(On)&&(On=null),Fn!==null&&Vo(Fn)&&(Fn=null),Un!==null&&Vo(Un)&&(Un=null),Ai.forEach(wf),bi.forEach(wf)}function Qs(t,e){t.blockedOn===e&&(t.blockedOn=null,Xc||(Xc=!0,dt.unstable_scheduleCallback(dt.unstable_NormalPriority,AE)))}function Ri(t){function e(s){return Qs(s,t)}if(0<No.length){Qs(No[0],t);for(var n=1;n<No.length;n++){var r=No[n];r.blockedOn===t&&(r.blockedOn=null)}}for(On!==null&&Qs(On,t),Fn!==null&&Qs(Fn,t),Un!==null&&Qs(Un,t),Ai.forEach(e),bi.forEach(e),n=0;n<In.length;n++)r=In[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<In.length&&(n=In[0],n.blockedOn===null);)Lg(n),n.blockedOn===null&&In.shift()}var os=mn.ReactCurrentBatchConfig,da=!0;function bE(t,e,n,r){var s=re,i=os.transition;os.transition=null;try{re=1,_d(t,e,n,r)}finally{re=s,os.transition=i}}function RE(t,e,n,r){var s=re,i=os.transition;os.transition=null;try{re=4,_d(t,e,n,r)}finally{re=s,os.transition=i}}function _d(t,e,n,r){if(da){var s=Jc(t,e,n,r);if(s===null)nc(t,e,r,ha,n),vf(t,r);else if(PE(s,t,e,n,r))r.stopPropagation();else if(vf(t,r),e&4&&-1<kE.indexOf(t)){for(;s!==null;){var i=oo(s);if(i!==null&&Rg(i),i=Jc(t,e,n,r),i===null&&nc(t,e,r,ha,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else nc(t,e,r,null,n)}}var ha=null;function Jc(t,e,n,r){if(ha=null,t=pd(r),t=pr(t),t!==null)if(e=Dr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Sg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ha=t,null}function Og(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(vE()){case md:return 1;case kg:return 4;case ca:case wE:return 16;case Pg:return 536870912;default:return 16}default:return 16}}var jn=null,vd=null,Ho=null;function Fg(){if(Ho)return Ho;var t,e=vd,n=e.length,r,s="value"in jn?jn.value:jn.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return Ho=s.slice(t,1<r?1-r:void 0)}function Go(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function To(){return!0}function Ef(){return!1}function ft(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?To:Ef,this.isPropagationStopped=Ef,this}return we(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=To)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=To)},persist:function(){},isPersistent:To}),e}var As={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wd=ft(As),io=we({},As,{view:0,detail:0}),jE=ft(io),Kl,Ql,qs,sl=we({},io,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ed,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==qs&&(qs&&t.type==="mousemove"?(Kl=t.screenX-qs.screenX,Ql=t.screenY-qs.screenY):Ql=Kl=0,qs=t),Kl)},movementY:function(t){return"movementY"in t?t.movementY:Ql}}),Cf=ft(sl),ME=we({},sl,{dataTransfer:0}),DE=ft(ME),LE=we({},io,{relatedTarget:0}),ql=ft(LE),OE=we({},As,{animationName:0,elapsedTime:0,pseudoElement:0}),FE=ft(OE),UE=we({},As,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),BE=ft(UE),zE=we({},As,{data:0}),xf=ft(zE),WE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$E={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},VE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function HE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=VE[t])?!!e[t]:!1}function Ed(){return HE}var GE=we({},io,{key:function(t){if(t.key){var e=WE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Go(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?$E[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ed,charCode:function(t){return t.type==="keypress"?Go(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Go(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),KE=ft(GE),QE=we({},sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sf=ft(QE),qE=we({},io,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ed}),YE=ft(qE),XE=we({},As,{propertyName:0,elapsedTime:0,pseudoElement:0}),JE=ft(XE),ZE=we({},sl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),eC=ft(ZE),tC=[9,13,27,32],Cd=an&&"CompositionEvent"in window,hi=null;an&&"documentMode"in document&&(hi=document.documentMode);var nC=an&&"TextEvent"in window&&!hi,Ug=an&&(!Cd||hi&&8<hi&&11>=hi),Nf=" ",Tf=!1;function Bg(t,e){switch(t){case"keyup":return tC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Hr=!1;function rC(t,e){switch(t){case"compositionend":return zg(e);case"keypress":return e.which!==32?null:(Tf=!0,Nf);case"textInput":return t=e.data,t===Nf&&Tf?null:t;default:return null}}function sC(t,e){if(Hr)return t==="compositionend"||!Cd&&Bg(t,e)?(t=Fg(),Ho=vd=jn=null,Hr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ug&&e.locale!=="ko"?null:e.data;default:return null}}var iC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function If(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!iC[t.type]:e==="textarea"}function Wg(t,e,n,r){vg(r),e=fa(e,"onChange"),0<e.length&&(n=new wd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var fi=null,ji=null;function oC(t){Zg(t,0)}function il(t){var e=Qr(t);if(hg(e))return t}function aC(t,e){if(t==="change")return e}var $g=!1;if(an){var Yl;if(an){var Xl="oninput"in document;if(!Xl){var kf=document.createElement("div");kf.setAttribute("oninput","return;"),Xl=typeof kf.oninput=="function"}Yl=Xl}else Yl=!1;$g=Yl&&(!document.documentMode||9<document.documentMode)}function Pf(){fi&&(fi.detachEvent("onpropertychange",Vg),ji=fi=null)}function Vg(t){if(t.propertyName==="value"&&il(ji)){var e=[];Wg(e,ji,t,pd(t)),xg(oC,e)}}function lC(t,e,n){t==="focusin"?(Pf(),fi=e,ji=n,fi.attachEvent("onpropertychange",Vg)):t==="focusout"&&Pf()}function cC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return il(ji)}function uC(t,e){if(t==="click")return il(e)}function dC(t,e){if(t==="input"||t==="change")return il(e)}function hC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ot=typeof Object.is=="function"?Object.is:hC;function Mi(t,e){if(Ot(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!Mc.call(e,s)||!Ot(t[s],e[s]))return!1}return!0}function Af(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function bf(t,e){var n=Af(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Af(n)}}function Hg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Hg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Gg(){for(var t=window,e=oa();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=oa(t.document)}return e}function xd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function fC(t){var e=Gg(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Hg(n.ownerDocument.documentElement,n)){if(r!==null&&xd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=bf(n,i);var o=bf(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var pC=an&&"documentMode"in document&&11>=document.documentMode,Gr=null,Zc=null,pi=null,eu=!1;function Rf(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;eu||Gr==null||Gr!==oa(r)||(r=Gr,"selectionStart"in r&&xd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),pi&&Mi(pi,r)||(pi=r,r=fa(Zc,"onSelect"),0<r.length&&(e=new wd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Gr)))}function Io(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Kr={animationend:Io("Animation","AnimationEnd"),animationiteration:Io("Animation","AnimationIteration"),animationstart:Io("Animation","AnimationStart"),transitionend:Io("Transition","TransitionEnd")},Jl={},Kg={};an&&(Kg=document.createElement("div").style,"AnimationEvent"in window||(delete Kr.animationend.animation,delete Kr.animationiteration.animation,delete Kr.animationstart.animation),"TransitionEvent"in window||delete Kr.transitionend.transition);function ol(t){if(Jl[t])return Jl[t];if(!Kr[t])return t;var e=Kr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Kg)return Jl[t]=e[n];return t}var Qg=ol("animationend"),qg=ol("animationiteration"),Yg=ol("animationstart"),Xg=ol("transitionend"),Jg=new Map,jf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function tr(t,e){Jg.set(t,e),Mr(e,[t])}for(var Zl=0;Zl<jf.length;Zl++){var ec=jf[Zl],mC=ec.toLowerCase(),gC=ec[0].toUpperCase()+ec.slice(1);tr(mC,"on"+gC)}tr(Qg,"onAnimationEnd");tr(qg,"onAnimationIteration");tr(Yg,"onAnimationStart");tr("dblclick","onDoubleClick");tr("focusin","onFocus");tr("focusout","onBlur");tr(Xg,"onTransitionEnd");ps("onMouseEnter",["mouseout","mouseover"]);ps("onMouseLeave",["mouseout","mouseover"]);ps("onPointerEnter",["pointerout","pointerover"]);ps("onPointerLeave",["pointerout","pointerover"]);Mr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Mr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Mr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Mr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Mr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Mr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ci="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yC=new Set("cancel close invalid load scroll toggle".split(" ").concat(ci));function Mf(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,mE(r,e,void 0,t),t.currentTarget=null}function Zg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==i&&s.isPropagationStopped())break e;Mf(s,a,u),i=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==i&&s.isPropagationStopped())break e;Mf(s,a,u),i=l}}}if(la)throw t=qc,la=!1,qc=null,t}function de(t,e){var n=e[iu];n===void 0&&(n=e[iu]=new Set);var r=t+"__bubble";n.has(r)||(ey(e,t,2,!1),n.add(r))}function tc(t,e,n){var r=0;e&&(r|=4),ey(n,t,r,e)}var ko="_reactListening"+Math.random().toString(36).slice(2);function Di(t){if(!t[ko]){t[ko]=!0,ag.forEach(function(n){n!=="selectionchange"&&(yC.has(n)||tc(n,!1,t),tc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ko]||(e[ko]=!0,tc("selectionchange",!1,e))}}function ey(t,e,n,r){switch(Og(e)){case 1:var s=bE;break;case 4:s=RE;break;default:s=_d}n=s.bind(null,e,n,t),s=void 0,!Qc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function nc(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===s||a.nodeType===8&&a.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===s||l.nodeType===8&&l.parentNode===s))return;o=o.return}for(;a!==null;){if(o=pr(a),o===null)return;if(l=o.tag,l===5||l===6){r=i=o;continue e}a=a.parentNode}}r=r.return}xg(function(){var u=i,h=pd(n),d=[];e:{var f=Jg.get(t);if(f!==void 0){var y=wd,v=t;switch(t){case"keypress":if(Go(n)===0)break e;case"keydown":case"keyup":y=KE;break;case"focusin":v="focus",y=ql;break;case"focusout":v="blur",y=ql;break;case"beforeblur":case"afterblur":y=ql;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Cf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=DE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=YE;break;case Qg:case qg:case Yg:y=FE;break;case Xg:y=JE;break;case"scroll":y=jE;break;case"wheel":y=eC;break;case"copy":case"cut":case"paste":y=BE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Sf}var g=(e&4)!==0,E=!g&&t==="scroll",m=g?f!==null?f+"Capture":null:f;g=[];for(var p=u,_;p!==null;){_=p;var C=_.stateNode;if(_.tag===5&&C!==null&&(_=C,m!==null&&(C=Pi(p,m),C!=null&&g.push(Li(p,C,_)))),E)break;p=p.return}0<g.length&&(f=new y(f,v,null,n,h),d.push({event:f,listeners:g}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",f&&n!==Gc&&(v=n.relatedTarget||n.fromElement)&&(pr(v)||v[ln]))break e;if((y||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,y?(v=n.relatedTarget||n.toElement,y=u,v=v?pr(v):null,v!==null&&(E=Dr(v),v!==E||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=u),y!==v)){if(g=Cf,C="onMouseLeave",m="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(g=Sf,C="onPointerLeave",m="onPointerEnter",p="pointer"),E=y==null?f:Qr(y),_=v==null?f:Qr(v),f=new g(C,p+"leave",y,n,h),f.target=E,f.relatedTarget=_,C=null,pr(h)===u&&(g=new g(m,p+"enter",v,n,h),g.target=_,g.relatedTarget=E,C=g),E=C,y&&v)t:{for(g=y,m=v,p=0,_=g;_;_=Ur(_))p++;for(_=0,C=m;C;C=Ur(C))_++;for(;0<p-_;)g=Ur(g),p--;for(;0<_-p;)m=Ur(m),_--;for(;p--;){if(g===m||m!==null&&g===m.alternate)break t;g=Ur(g),m=Ur(m)}g=null}else g=null;y!==null&&Df(d,f,y,g,!1),v!==null&&E!==null&&Df(d,E,v,g,!0)}}e:{if(f=u?Qr(u):window,y=f.nodeName&&f.nodeName.toLowerCase(),y==="select"||y==="input"&&f.type==="file")var x=aC;else if(If(f))if($g)x=dC;else{x=cC;var b=lC}else(y=f.nodeName)&&y.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(x=uC);if(x&&(x=x(t,u))){Wg(d,x,n,h);break e}b&&b(t,f,u),t==="focusout"&&(b=f._wrapperState)&&b.controlled&&f.type==="number"&&zc(f,"number",f.value)}switch(b=u?Qr(u):window,t){case"focusin":(If(b)||b.contentEditable==="true")&&(Gr=b,Zc=u,pi=null);break;case"focusout":pi=Zc=Gr=null;break;case"mousedown":eu=!0;break;case"contextmenu":case"mouseup":case"dragend":eu=!1,Rf(d,n,h);break;case"selectionchange":if(pC)break;case"keydown":case"keyup":Rf(d,n,h)}var k;if(Cd)e:{switch(t){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else Hr?Bg(t,n)&&(S="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(S="onCompositionStart");S&&(Ug&&n.locale!=="ko"&&(Hr||S!=="onCompositionStart"?S==="onCompositionEnd"&&Hr&&(k=Fg()):(jn=h,vd="value"in jn?jn.value:jn.textContent,Hr=!0)),b=fa(u,S),0<b.length&&(S=new xf(S,t,null,n,h),d.push({event:S,listeners:b}),k?S.data=k:(k=zg(n),k!==null&&(S.data=k)))),(k=nC?rC(t,n):sC(t,n))&&(u=fa(u,"onBeforeInput"),0<u.length&&(h=new xf("onBeforeInput","beforeinput",null,n,h),d.push({event:h,listeners:u}),h.data=k))}Zg(d,e)})}function Li(t,e,n){return{instance:t,listener:e,currentTarget:n}}function fa(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Pi(t,n),i!=null&&r.unshift(Li(t,i,s)),i=Pi(t,e),i!=null&&r.push(Li(t,i,s))),t=t.return}return r}function Ur(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Df(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,s?(l=Pi(n,i),l!=null&&o.unshift(Li(n,l,a))):s||(l=Pi(n,i),l!=null&&o.push(Li(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var _C=/\r\n?/g,vC=/\u0000|\uFFFD/g;function Lf(t){return(typeof t=="string"?t:""+t).replace(_C,`
`).replace(vC,"")}function Po(t,e,n){if(e=Lf(e),Lf(t)!==e&&n)throw Error(T(425))}function pa(){}var tu=null,nu=null;function ru(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var su=typeof setTimeout=="function"?setTimeout:void 0,wC=typeof clearTimeout=="function"?clearTimeout:void 0,Of=typeof Promise=="function"?Promise:void 0,EC=typeof queueMicrotask=="function"?queueMicrotask:typeof Of<"u"?function(t){return Of.resolve(null).then(t).catch(CC)}:su;function CC(t){setTimeout(function(){throw t})}function rc(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),Ri(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);Ri(e)}function Bn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ff(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var bs=Math.random().toString(36).slice(2),Wt="__reactFiber$"+bs,Oi="__reactProps$"+bs,ln="__reactContainer$"+bs,iu="__reactEvents$"+bs,xC="__reactListeners$"+bs,SC="__reactHandles$"+bs;function pr(t){var e=t[Wt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ln]||n[Wt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ff(t);t!==null;){if(n=t[Wt])return n;t=Ff(t)}return e}t=n,n=t.parentNode}return null}function oo(t){return t=t[Wt]||t[ln],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Qr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(T(33))}function al(t){return t[Oi]||null}var ou=[],qr=-1;function nr(t){return{current:t}}function he(t){0>qr||(t.current=ou[qr],ou[qr]=null,qr--)}function ue(t,e){qr++,ou[qr]=t.current,t.current=e}var Xn={},He=nr(Xn),it=nr(!1),Cr=Xn;function ms(t,e){var n=t.type.contextTypes;if(!n)return Xn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function ot(t){return t=t.childContextTypes,t!=null}function ma(){he(it),he(He)}function Uf(t,e,n){if(He.current!==Xn)throw Error(T(168));ue(He,e),ue(it,n)}function ty(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(T(108,lE(t)||"Unknown",s));return we({},n,r)}function ga(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Xn,Cr=He.current,ue(He,t),ue(it,it.current),!0}function Bf(t,e,n){var r=t.stateNode;if(!r)throw Error(T(169));n?(t=ty(t,e,Cr),r.__reactInternalMemoizedMergedChildContext=t,he(it),he(He),ue(He,t)):he(it),ue(it,n)}var Xt=null,ll=!1,sc=!1;function ny(t){Xt===null?Xt=[t]:Xt.push(t)}function NC(t){ll=!0,ny(t)}function rr(){if(!sc&&Xt!==null){sc=!0;var t=0,e=re;try{var n=Xt;for(re=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Xt=null,ll=!1}catch(s){throw Xt!==null&&(Xt=Xt.slice(t+1)),Ig(md,rr),s}finally{re=e,sc=!1}}return null}var Yr=[],Xr=0,ya=null,_a=0,gt=[],yt=0,xr=null,Jt=1,Zt="";function cr(t,e){Yr[Xr++]=_a,Yr[Xr++]=ya,ya=t,_a=e}function ry(t,e,n){gt[yt++]=Jt,gt[yt++]=Zt,gt[yt++]=xr,xr=t;var r=Jt;t=Zt;var s=32-Mt(r)-1;r&=~(1<<s),n+=1;var i=32-Mt(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,Jt=1<<32-Mt(e)+s|n<<s|r,Zt=i+t}else Jt=1<<i|n<<s|r,Zt=t}function Sd(t){t.return!==null&&(cr(t,1),ry(t,1,0))}function Nd(t){for(;t===ya;)ya=Yr[--Xr],Yr[Xr]=null,_a=Yr[--Xr],Yr[Xr]=null;for(;t===xr;)xr=gt[--yt],gt[yt]=null,Zt=gt[--yt],gt[yt]=null,Jt=gt[--yt],gt[yt]=null}var ut=null,ct=null,fe=!1,At=null;function sy(t,e){var n=_t(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function zf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,ut=t,ct=Bn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,ut=t,ct=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=xr!==null?{id:Jt,overflow:Zt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=_t(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,ut=t,ct=null,!0):!1;default:return!1}}function au(t){return(t.mode&1)!==0&&(t.flags&128)===0}function lu(t){if(fe){var e=ct;if(e){var n=e;if(!zf(t,e)){if(au(t))throw Error(T(418));e=Bn(n.nextSibling);var r=ut;e&&zf(t,e)?sy(r,n):(t.flags=t.flags&-4097|2,fe=!1,ut=t)}}else{if(au(t))throw Error(T(418));t.flags=t.flags&-4097|2,fe=!1,ut=t}}}function Wf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ut=t}function Ao(t){if(t!==ut)return!1;if(!fe)return Wf(t),fe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ru(t.type,t.memoizedProps)),e&&(e=ct)){if(au(t))throw iy(),Error(T(418));for(;e;)sy(t,e),e=Bn(e.nextSibling)}if(Wf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(T(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ct=Bn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ct=null}}else ct=ut?Bn(t.stateNode.nextSibling):null;return!0}function iy(){for(var t=ct;t;)t=Bn(t.nextSibling)}function gs(){ct=ut=null,fe=!1}function Td(t){At===null?At=[t]:At.push(t)}var TC=mn.ReactCurrentBatchConfig;function Ys(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(T(309));var r=n.stateNode}if(!r)throw Error(T(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var a=s.refs;o===null?delete a[i]:a[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(T(284));if(!n._owner)throw Error(T(290,t))}return t}function bo(t,e){throw t=Object.prototype.toString.call(e),Error(T(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function $f(t){var e=t._init;return e(t._payload)}function oy(t){function e(m,p){if(t){var _=m.deletions;_===null?(m.deletions=[p],m.flags|=16):_.push(p)}}function n(m,p){if(!t)return null;for(;p!==null;)e(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function s(m,p){return m=Vn(m,p),m.index=0,m.sibling=null,m}function i(m,p,_){return m.index=_,t?(_=m.alternate,_!==null?(_=_.index,_<p?(m.flags|=2,p):_):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,p,_,C){return p===null||p.tag!==6?(p=dc(_,m.mode,C),p.return=m,p):(p=s(p,_),p.return=m,p)}function l(m,p,_,C){var x=_.type;return x===Vr?h(m,p,_.props.children,C,_.key):p!==null&&(p.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Nn&&$f(x)===p.type)?(C=s(p,_.props),C.ref=Ys(m,p,_),C.return=m,C):(C=Zo(_.type,_.key,_.props,null,m.mode,C),C.ref=Ys(m,p,_),C.return=m,C)}function u(m,p,_,C){return p===null||p.tag!==4||p.stateNode.containerInfo!==_.containerInfo||p.stateNode.implementation!==_.implementation?(p=hc(_,m.mode,C),p.return=m,p):(p=s(p,_.children||[]),p.return=m,p)}function h(m,p,_,C,x){return p===null||p.tag!==7?(p=vr(_,m.mode,C,x),p.return=m,p):(p=s(p,_),p.return=m,p)}function d(m,p,_){if(typeof p=="string"&&p!==""||typeof p=="number")return p=dc(""+p,m.mode,_),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case wo:return _=Zo(p.type,p.key,p.props,null,m.mode,_),_.ref=Ys(m,null,p),_.return=m,_;case $r:return p=hc(p,m.mode,_),p.return=m,p;case Nn:var C=p._init;return d(m,C(p._payload),_)}if(ai(p)||Hs(p))return p=vr(p,m.mode,_,null),p.return=m,p;bo(m,p)}return null}function f(m,p,_,C){var x=p!==null?p.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return x!==null?null:a(m,p,""+_,C);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case wo:return _.key===x?l(m,p,_,C):null;case $r:return _.key===x?u(m,p,_,C):null;case Nn:return x=_._init,f(m,p,x(_._payload),C)}if(ai(_)||Hs(_))return x!==null?null:h(m,p,_,C,null);bo(m,_)}return null}function y(m,p,_,C,x){if(typeof C=="string"&&C!==""||typeof C=="number")return m=m.get(_)||null,a(p,m,""+C,x);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case wo:return m=m.get(C.key===null?_:C.key)||null,l(p,m,C,x);case $r:return m=m.get(C.key===null?_:C.key)||null,u(p,m,C,x);case Nn:var b=C._init;return y(m,p,_,b(C._payload),x)}if(ai(C)||Hs(C))return m=m.get(_)||null,h(p,m,C,x,null);bo(p,C)}return null}function v(m,p,_,C){for(var x=null,b=null,k=p,S=p=0,U=null;k!==null&&S<_.length;S++){k.index>S?(U=k,k=null):U=k.sibling;var P=f(m,k,_[S],C);if(P===null){k===null&&(k=U);break}t&&k&&P.alternate===null&&e(m,k),p=i(P,p,S),b===null?x=P:b.sibling=P,b=P,k=U}if(S===_.length)return n(m,k),fe&&cr(m,S),x;if(k===null){for(;S<_.length;S++)k=d(m,_[S],C),k!==null&&(p=i(k,p,S),b===null?x=k:b.sibling=k,b=k);return fe&&cr(m,S),x}for(k=r(m,k);S<_.length;S++)U=y(k,m,S,_[S],C),U!==null&&(t&&U.alternate!==null&&k.delete(U.key===null?S:U.key),p=i(U,p,S),b===null?x=U:b.sibling=U,b=U);return t&&k.forEach(function($){return e(m,$)}),fe&&cr(m,S),x}function g(m,p,_,C){var x=Hs(_);if(typeof x!="function")throw Error(T(150));if(_=x.call(_),_==null)throw Error(T(151));for(var b=x=null,k=p,S=p=0,U=null,P=_.next();k!==null&&!P.done;S++,P=_.next()){k.index>S?(U=k,k=null):U=k.sibling;var $=f(m,k,P.value,C);if($===null){k===null&&(k=U);break}t&&k&&$.alternate===null&&e(m,k),p=i($,p,S),b===null?x=$:b.sibling=$,b=$,k=U}if(P.done)return n(m,k),fe&&cr(m,S),x;if(k===null){for(;!P.done;S++,P=_.next())P=d(m,P.value,C),P!==null&&(p=i(P,p,S),b===null?x=P:b.sibling=P,b=P);return fe&&cr(m,S),x}for(k=r(m,k);!P.done;S++,P=_.next())P=y(k,m,S,P.value,C),P!==null&&(t&&P.alternate!==null&&k.delete(P.key===null?S:P.key),p=i(P,p,S),b===null?x=P:b.sibling=P,b=P);return t&&k.forEach(function(te){return e(m,te)}),fe&&cr(m,S),x}function E(m,p,_,C){if(typeof _=="object"&&_!==null&&_.type===Vr&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case wo:e:{for(var x=_.key,b=p;b!==null;){if(b.key===x){if(x=_.type,x===Vr){if(b.tag===7){n(m,b.sibling),p=s(b,_.props.children),p.return=m,m=p;break e}}else if(b.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Nn&&$f(x)===b.type){n(m,b.sibling),p=s(b,_.props),p.ref=Ys(m,b,_),p.return=m,m=p;break e}n(m,b);break}else e(m,b);b=b.sibling}_.type===Vr?(p=vr(_.props.children,m.mode,C,_.key),p.return=m,m=p):(C=Zo(_.type,_.key,_.props,null,m.mode,C),C.ref=Ys(m,p,_),C.return=m,m=C)}return o(m);case $r:e:{for(b=_.key;p!==null;){if(p.key===b)if(p.tag===4&&p.stateNode.containerInfo===_.containerInfo&&p.stateNode.implementation===_.implementation){n(m,p.sibling),p=s(p,_.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else e(m,p);p=p.sibling}p=hc(_,m.mode,C),p.return=m,m=p}return o(m);case Nn:return b=_._init,E(m,p,b(_._payload),C)}if(ai(_))return v(m,p,_,C);if(Hs(_))return g(m,p,_,C);bo(m,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,p!==null&&p.tag===6?(n(m,p.sibling),p=s(p,_),p.return=m,m=p):(n(m,p),p=dc(_,m.mode,C),p.return=m,m=p),o(m)):n(m,p)}return E}var ys=oy(!0),ay=oy(!1),va=nr(null),wa=null,Jr=null,Id=null;function kd(){Id=Jr=wa=null}function Pd(t){var e=va.current;he(va),t._currentValue=e}function cu(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function as(t,e){wa=t,Id=Jr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(nt=!0),t.firstContext=null)}function Et(t){var e=t._currentValue;if(Id!==t)if(t={context:t,memoizedValue:e,next:null},Jr===null){if(wa===null)throw Error(T(308));Jr=t,wa.dependencies={lanes:0,firstContext:t}}else Jr=Jr.next=t;return e}var mr=null;function Ad(t){mr===null?mr=[t]:mr.push(t)}function ly(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,Ad(e)):(n.next=s.next,s.next=n),e.interleaved=n,cn(t,r)}function cn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Tn=!1;function bd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cy(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function rn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function zn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ee&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,cn(t,n)}return s=r.interleaved,s===null?(e.next=e,Ad(r)):(e.next=s.next,s.next=e),r.interleaved=e,cn(t,n)}function Ko(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,gd(t,n)}}function Vf(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ea(t,e,n,r){var s=t.updateQueue;Tn=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,a=s.shared.pending;if(a!==null){s.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?i=u:o.next=u,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=u:a.next=u,h.lastBaseUpdate=l))}if(i!==null){var d=s.baseState;o=0,h=u=l=null,a=i;do{var f=a.lane,y=a.eventTime;if((r&f)===f){h!==null&&(h=h.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,g=a;switch(f=e,y=n,g.tag){case 1:if(v=g.payload,typeof v=="function"){d=v.call(y,d,f);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=g.payload,f=typeof v=="function"?v.call(y,d,f):v,f==null)break e;d=we({},d,f);break e;case 2:Tn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=s.effects,f===null?s.effects=[a]:f.push(a))}else y={eventTime:y,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(u=h=y,l=d):h=h.next=y,o|=f;if(a=a.next,a===null){if(a=s.shared.pending,a===null)break;f=a,a=f.next,f.next=null,s.lastBaseUpdate=f,s.shared.pending=null}}while(!0);if(h===null&&(l=d),s.baseState=l,s.firstBaseUpdate=u,s.lastBaseUpdate=h,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);Nr|=o,t.lanes=o,t.memoizedState=d}}function Hf(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(T(191,s));s.call(r)}}}var ao={},Ht=nr(ao),Fi=nr(ao),Ui=nr(ao);function gr(t){if(t===ao)throw Error(T(174));return t}function Rd(t,e){switch(ue(Ui,e),ue(Fi,t),ue(Ht,ao),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:$c(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=$c(e,t)}he(Ht),ue(Ht,e)}function _s(){he(Ht),he(Fi),he(Ui)}function uy(t){gr(Ui.current);var e=gr(Ht.current),n=$c(e,t.type);e!==n&&(ue(Fi,t),ue(Ht,n))}function jd(t){Fi.current===t&&(he(Ht),he(Fi))}var ge=nr(0);function Ca(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ic=[];function Md(){for(var t=0;t<ic.length;t++)ic[t]._workInProgressVersionPrimary=null;ic.length=0}var Qo=mn.ReactCurrentDispatcher,oc=mn.ReactCurrentBatchConfig,Sr=0,_e=null,Ie=null,Ae=null,xa=!1,mi=!1,Bi=0,IC=0;function We(){throw Error(T(321))}function Dd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ot(t[n],e[n]))return!1;return!0}function Ld(t,e,n,r,s,i){if(Sr=i,_e=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Qo.current=t===null||t.memoizedState===null?bC:RC,t=n(r,s),mi){i=0;do{if(mi=!1,Bi=0,25<=i)throw Error(T(301));i+=1,Ae=Ie=null,e.updateQueue=null,Qo.current=jC,t=n(r,s)}while(mi)}if(Qo.current=Sa,e=Ie!==null&&Ie.next!==null,Sr=0,Ae=Ie=_e=null,xa=!1,e)throw Error(T(300));return t}function Od(){var t=Bi!==0;return Bi=0,t}function zt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ae===null?_e.memoizedState=Ae=t:Ae=Ae.next=t,Ae}function Ct(){if(Ie===null){var t=_e.alternate;t=t!==null?t.memoizedState:null}else t=Ie.next;var e=Ae===null?_e.memoizedState:Ae.next;if(e!==null)Ae=e,Ie=t;else{if(t===null)throw Error(T(310));Ie=t,t={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},Ae===null?_e.memoizedState=Ae=t:Ae=Ae.next=t}return Ae}function zi(t,e){return typeof e=="function"?e(t):e}function ac(t){var e=Ct(),n=e.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=t;var r=Ie,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var a=o=null,l=null,u=i;do{var h=u.lane;if((Sr&h)===h)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,_e.lanes|=h,Nr|=h}u=u.next}while(u!==null&&u!==i);l===null?o=r:l.next=a,Ot(r,e.memoizedState)||(nt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,_e.lanes|=i,Nr|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function lc(t){var e=Ct(),n=e.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);Ot(i,e.memoizedState)||(nt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function dy(){}function hy(t,e){var n=_e,r=Ct(),s=e(),i=!Ot(r.memoizedState,s);if(i&&(r.memoizedState=s,nt=!0),r=r.queue,Fd(my.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||Ae!==null&&Ae.memoizedState.tag&1){if(n.flags|=2048,Wi(9,py.bind(null,n,r,s,e),void 0,null),Me===null)throw Error(T(349));Sr&30||fy(n,e,s)}return s}function fy(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=_e.updateQueue,e===null?(e={lastEffect:null,stores:null},_e.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function py(t,e,n,r){e.value=n,e.getSnapshot=r,gy(e)&&yy(t)}function my(t,e,n){return n(function(){gy(e)&&yy(t)})}function gy(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ot(t,n)}catch{return!0}}function yy(t){var e=cn(t,1);e!==null&&Dt(e,t,1,-1)}function Gf(t){var e=zt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:zi,lastRenderedState:t},e.queue=t,t=t.dispatch=AC.bind(null,_e,t),[e.memoizedState,t]}function Wi(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=_e.updateQueue,e===null?(e={lastEffect:null,stores:null},_e.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function _y(){return Ct().memoizedState}function qo(t,e,n,r){var s=zt();_e.flags|=t,s.memoizedState=Wi(1|e,n,void 0,r===void 0?null:r)}function cl(t,e,n,r){var s=Ct();r=r===void 0?null:r;var i=void 0;if(Ie!==null){var o=Ie.memoizedState;if(i=o.destroy,r!==null&&Dd(r,o.deps)){s.memoizedState=Wi(e,n,i,r);return}}_e.flags|=t,s.memoizedState=Wi(1|e,n,i,r)}function Kf(t,e){return qo(8390656,8,t,e)}function Fd(t,e){return cl(2048,8,t,e)}function vy(t,e){return cl(4,2,t,e)}function wy(t,e){return cl(4,4,t,e)}function Ey(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Cy(t,e,n){return n=n!=null?n.concat([t]):null,cl(4,4,Ey.bind(null,e,t),n)}function Ud(){}function xy(t,e){var n=Ct();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Dd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Sy(t,e){var n=Ct();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Dd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Ny(t,e,n){return Sr&21?(Ot(n,e)||(n=Ag(),_e.lanes|=n,Nr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,nt=!0),t.memoizedState=n)}function kC(t,e){var n=re;re=n!==0&&4>n?n:4,t(!0);var r=oc.transition;oc.transition={};try{t(!1),e()}finally{re=n,oc.transition=r}}function Ty(){return Ct().memoizedState}function PC(t,e,n){var r=$n(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Iy(t))ky(e,n);else if(n=ly(t,e,n,r),n!==null){var s=Qe();Dt(n,t,r,s),Py(n,e,r)}}function AC(t,e,n){var r=$n(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Iy(t))ky(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,a=i(o,n);if(s.hasEagerState=!0,s.eagerState=a,Ot(a,o)){var l=e.interleaved;l===null?(s.next=s,Ad(e)):(s.next=l.next,l.next=s),e.interleaved=s;return}}catch{}finally{}n=ly(t,e,s,r),n!==null&&(s=Qe(),Dt(n,t,r,s),Py(n,e,r))}}function Iy(t){var e=t.alternate;return t===_e||e!==null&&e===_e}function ky(t,e){mi=xa=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Py(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,gd(t,n)}}var Sa={readContext:Et,useCallback:We,useContext:We,useEffect:We,useImperativeHandle:We,useInsertionEffect:We,useLayoutEffect:We,useMemo:We,useReducer:We,useRef:We,useState:We,useDebugValue:We,useDeferredValue:We,useTransition:We,useMutableSource:We,useSyncExternalStore:We,useId:We,unstable_isNewReconciler:!1},bC={readContext:Et,useCallback:function(t,e){return zt().memoizedState=[t,e===void 0?null:e],t},useContext:Et,useEffect:Kf,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,qo(4194308,4,Ey.bind(null,e,t),n)},useLayoutEffect:function(t,e){return qo(4194308,4,t,e)},useInsertionEffect:function(t,e){return qo(4,2,t,e)},useMemo:function(t,e){var n=zt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=zt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=PC.bind(null,_e,t),[r.memoizedState,t]},useRef:function(t){var e=zt();return t={current:t},e.memoizedState=t},useState:Gf,useDebugValue:Ud,useDeferredValue:function(t){return zt().memoizedState=t},useTransition:function(){var t=Gf(!1),e=t[0];return t=kC.bind(null,t[1]),zt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=_e,s=zt();if(fe){if(n===void 0)throw Error(T(407));n=n()}else{if(n=e(),Me===null)throw Error(T(349));Sr&30||fy(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,Kf(my.bind(null,r,i,t),[t]),r.flags|=2048,Wi(9,py.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=zt(),e=Me.identifierPrefix;if(fe){var n=Zt,r=Jt;n=(r&~(1<<32-Mt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Bi++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=IC++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},RC={readContext:Et,useCallback:xy,useContext:Et,useEffect:Fd,useImperativeHandle:Cy,useInsertionEffect:vy,useLayoutEffect:wy,useMemo:Sy,useReducer:ac,useRef:_y,useState:function(){return ac(zi)},useDebugValue:Ud,useDeferredValue:function(t){var e=Ct();return Ny(e,Ie.memoizedState,t)},useTransition:function(){var t=ac(zi)[0],e=Ct().memoizedState;return[t,e]},useMutableSource:dy,useSyncExternalStore:hy,useId:Ty,unstable_isNewReconciler:!1},jC={readContext:Et,useCallback:xy,useContext:Et,useEffect:Fd,useImperativeHandle:Cy,useInsertionEffect:vy,useLayoutEffect:wy,useMemo:Sy,useReducer:lc,useRef:_y,useState:function(){return lc(zi)},useDebugValue:Ud,useDeferredValue:function(t){var e=Ct();return Ie===null?e.memoizedState=t:Ny(e,Ie.memoizedState,t)},useTransition:function(){var t=lc(zi)[0],e=Ct().memoizedState;return[t,e]},useMutableSource:dy,useSyncExternalStore:hy,useId:Ty,unstable_isNewReconciler:!1};function kt(t,e){if(t&&t.defaultProps){e=we({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function uu(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:we({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ul={isMounted:function(t){return(t=t._reactInternals)?Dr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Qe(),s=$n(t),i=rn(r,s);i.payload=e,n!=null&&(i.callback=n),e=zn(t,i,s),e!==null&&(Dt(e,t,s,r),Ko(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Qe(),s=$n(t),i=rn(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=zn(t,i,s),e!==null&&(Dt(e,t,s,r),Ko(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Qe(),r=$n(t),s=rn(n,r);s.tag=2,e!=null&&(s.callback=e),e=zn(t,s,r),e!==null&&(Dt(e,t,r,n),Ko(e,t,r))}};function Qf(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!Mi(n,r)||!Mi(s,i):!0}function Ay(t,e,n){var r=!1,s=Xn,i=e.contextType;return typeof i=="object"&&i!==null?i=Et(i):(s=ot(e)?Cr:He.current,r=e.contextTypes,i=(r=r!=null)?ms(t,s):Xn),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ul,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function qf(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ul.enqueueReplaceState(e,e.state,null)}function du(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},bd(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=Et(i):(i=ot(e)?Cr:He.current,s.context=ms(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(uu(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&ul.enqueueReplaceState(s,s.state,null),Ea(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function vs(t,e){try{var n="",r=e;do n+=aE(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function cc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function hu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var MC=typeof WeakMap=="function"?WeakMap:Map;function by(t,e,n){n=rn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ta||(Ta=!0,Cu=r),hu(t,e)},n}function Ry(t,e,n){n=rn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){hu(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){hu(t,e),typeof r!="function"&&(Wn===null?Wn=new Set([this]):Wn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Yf(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new MC;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=QC.bind(null,t,e,n),e.then(t,t))}function Xf(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Jf(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=rn(-1,1),e.tag=2,zn(n,e,1))),n.lanes|=1),t)}var DC=mn.ReactCurrentOwner,nt=!1;function Ge(t,e,n,r){e.child=t===null?ay(e,null,n,r):ys(e,t.child,n,r)}function Zf(t,e,n,r,s){n=n.render;var i=e.ref;return as(e,s),r=Ld(t,e,n,r,i,s),n=Od(),t!==null&&!nt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,un(t,e,s)):(fe&&n&&Sd(e),e.flags|=1,Ge(t,e,r,s),e.child)}function ep(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!Kd(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,jy(t,e,i,r,s)):(t=Zo(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Mi,n(o,r)&&t.ref===e.ref)return un(t,e,s)}return e.flags|=1,t=Vn(i,r),t.ref=e.ref,t.return=e,e.child=t}function jy(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(Mi(i,r)&&t.ref===e.ref)if(nt=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(nt=!0);else return e.lanes=t.lanes,un(t,e,s)}return fu(t,e,n,r,s)}function My(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ue(es,lt),lt|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ue(es,lt),lt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ue(es,lt),lt|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,ue(es,lt),lt|=r;return Ge(t,e,s,n),e.child}function Dy(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function fu(t,e,n,r,s){var i=ot(n)?Cr:He.current;return i=ms(e,i),as(e,s),n=Ld(t,e,n,r,i,s),r=Od(),t!==null&&!nt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,un(t,e,s)):(fe&&r&&Sd(e),e.flags|=1,Ge(t,e,n,s),e.child)}function tp(t,e,n,r,s){if(ot(n)){var i=!0;ga(e)}else i=!1;if(as(e,s),e.stateNode===null)Yo(t,e),Ay(e,n,r),du(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Et(u):(u=ot(n)?Cr:He.current,u=ms(e,u));var h=n.getDerivedStateFromProps,d=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&qf(e,o,r,u),Tn=!1;var f=e.memoizedState;o.state=f,Ea(e,r,o,s),l=e.memoizedState,a!==r||f!==l||it.current||Tn?(typeof h=="function"&&(uu(e,n,h,r),l=e.memoizedState),(a=Tn||Qf(e,n,a,r,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,cy(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:kt(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Et(l):(l=ot(n)?Cr:He.current,l=ms(e,l));var y=n.getDerivedStateFromProps;(h=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&qf(e,o,r,l),Tn=!1,f=e.memoizedState,o.state=f,Ea(e,r,o,s);var v=e.memoizedState;a!==d||f!==v||it.current||Tn?(typeof y=="function"&&(uu(e,n,y,r),v=e.memoizedState),(u=Tn||Qf(e,n,u,r,f,v,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return pu(t,e,n,r,i,s)}function pu(t,e,n,r,s,i){Dy(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&Bf(e,n,!1),un(t,e,i);r=e.stateNode,DC.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ys(e,t.child,null,i),e.child=ys(e,null,a,i)):Ge(t,e,a,i),e.memoizedState=r.state,s&&Bf(e,n,!0),e.child}function Ly(t){var e=t.stateNode;e.pendingContext?Uf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Uf(t,e.context,!1),Rd(t,e.containerInfo)}function np(t,e,n,r,s){return gs(),Td(s),e.flags|=256,Ge(t,e,n,r),e.child}var mu={dehydrated:null,treeContext:null,retryLane:0};function gu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Oy(t,e,n){var r=e.pendingProps,s=ge.current,i=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(s&2)!==0),a?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),ue(ge,s&1),t===null)return lu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=fl(o,r,0,null),t=vr(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=gu(n),e.memoizedState=mu,t):Bd(e,o));if(s=t.memoizedState,s!==null&&(a=s.dehydrated,a!==null))return LC(t,e,o,r,a,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,a=s.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Vn(s,l),r.subtreeFlags=s.subtreeFlags&14680064),a!==null?i=Vn(a,i):(i=vr(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?gu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=mu,r}return i=t.child,t=i.sibling,r=Vn(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Bd(t,e){return e=fl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ro(t,e,n,r){return r!==null&&Td(r),ys(e,t.child,null,n),t=Bd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function LC(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=cc(Error(T(422))),Ro(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=fl({mode:"visible",children:r.children},s,0,null),i=vr(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&ys(e,t.child,null,o),e.child.memoizedState=gu(o),e.memoizedState=mu,i);if(!(e.mode&1))return Ro(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(T(419)),r=cc(i,r,void 0),Ro(t,e,o,r)}if(a=(o&t.childLanes)!==0,nt||a){if(r=Me,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,cn(t,s),Dt(r,t,s,-1))}return Gd(),r=cc(Error(T(421))),Ro(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=qC.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,ct=Bn(s.nextSibling),ut=e,fe=!0,At=null,t!==null&&(gt[yt++]=Jt,gt[yt++]=Zt,gt[yt++]=xr,Jt=t.id,Zt=t.overflow,xr=e),e=Bd(e,r.children),e.flags|=4096,e)}function rp(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),cu(t.return,e,n)}function uc(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function Fy(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(Ge(t,e,r.children,n),r=ge.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&rp(t,n,e);else if(t.tag===19)rp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ue(ge,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&Ca(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),uc(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&Ca(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}uc(e,!0,n,null,i);break;case"together":uc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Yo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function un(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Nr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(T(153));if(e.child!==null){for(t=e.child,n=Vn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Vn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function OC(t,e,n){switch(e.tag){case 3:Ly(e),gs();break;case 5:uy(e);break;case 1:ot(e.type)&&ga(e);break;case 4:Rd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;ue(va,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ue(ge,ge.current&1),e.flags|=128,null):n&e.child.childLanes?Oy(t,e,n):(ue(ge,ge.current&1),t=un(t,e,n),t!==null?t.sibling:null);ue(ge,ge.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Fy(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),ue(ge,ge.current),r)break;return null;case 22:case 23:return e.lanes=0,My(t,e,n)}return un(t,e,n)}var Uy,yu,By,zy;Uy=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};yu=function(){};By=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,gr(Ht.current);var i=null;switch(n){case"input":s=Uc(t,s),r=Uc(t,r),i=[];break;case"select":s=we({},s,{value:void 0}),r=we({},r,{value:void 0}),i=[];break;case"textarea":s=Wc(t,s),r=Wc(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=pa)}Vc(n,r);var o;n=null;for(u in s)if(!r.hasOwnProperty(u)&&s.hasOwnProperty(u)&&s[u]!=null)if(u==="style"){var a=s[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ii.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var l=r[u];if(a=s!=null?s[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(i||(i=[]),i.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(i=i||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ii.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&de("scroll",t),i||a===l||(i=[])):(i=i||[]).push(u,l))}n&&(i=i||[]).push("style",n);var u=i;(e.updateQueue=u)&&(e.flags|=4)}};zy=function(t,e,n,r){n!==r&&(e.flags|=4)};function Xs(t,e){if(!fe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function $e(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function FC(t,e,n){var r=e.pendingProps;switch(Nd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(e),null;case 1:return ot(e.type)&&ma(),$e(e),null;case 3:return r=e.stateNode,_s(),he(it),he(He),Md(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ao(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,At!==null&&(Nu(At),At=null))),yu(t,e),$e(e),null;case 5:jd(e);var s=gr(Ui.current);if(n=e.type,t!==null&&e.stateNode!=null)By(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(T(166));return $e(e),null}if(t=gr(Ht.current),Ao(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[Wt]=e,r[Oi]=i,t=(e.mode&1)!==0,n){case"dialog":de("cancel",r),de("close",r);break;case"iframe":case"object":case"embed":de("load",r);break;case"video":case"audio":for(s=0;s<ci.length;s++)de(ci[s],r);break;case"source":de("error",r);break;case"img":case"image":case"link":de("error",r),de("load",r);break;case"details":de("toggle",r);break;case"input":hf(r,i),de("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},de("invalid",r);break;case"textarea":pf(r,i),de("invalid",r)}Vc(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var a=i[o];o==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Po(r.textContent,a,t),s=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Po(r.textContent,a,t),s=["children",""+a]):Ii.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&de("scroll",r)}switch(n){case"input":Eo(r),ff(r,i,!0);break;case"textarea":Eo(r),mf(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=pa)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=mg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Wt]=e,t[Oi]=r,Uy(t,e,!1,!1),e.stateNode=t;e:{switch(o=Hc(n,r),n){case"dialog":de("cancel",t),de("close",t),s=r;break;case"iframe":case"object":case"embed":de("load",t),s=r;break;case"video":case"audio":for(s=0;s<ci.length;s++)de(ci[s],t);s=r;break;case"source":de("error",t),s=r;break;case"img":case"image":case"link":de("error",t),de("load",t),s=r;break;case"details":de("toggle",t),s=r;break;case"input":hf(t,r),s=Uc(t,r),de("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=we({},r,{value:void 0}),de("invalid",t);break;case"textarea":pf(t,r),s=Wc(t,r),de("invalid",t);break;default:s=r}Vc(n,s),a=s;for(i in a)if(a.hasOwnProperty(i)){var l=a[i];i==="style"?_g(t,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&gg(t,l)):i==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ki(t,l):typeof l=="number"&&ki(t,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Ii.hasOwnProperty(i)?l!=null&&i==="onScroll"&&de("scroll",t):l!=null&&ud(t,i,l,o))}switch(n){case"input":Eo(t),ff(t,r,!1);break;case"textarea":Eo(t),mf(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Yn(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?rs(t,!!r.multiple,i,!1):r.defaultValue!=null&&rs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=pa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return $e(e),null;case 6:if(t&&e.stateNode!=null)zy(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(T(166));if(n=gr(Ui.current),gr(Ht.current),Ao(e)){if(r=e.stateNode,n=e.memoizedProps,r[Wt]=e,(i=r.nodeValue!==n)&&(t=ut,t!==null))switch(t.tag){case 3:Po(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Po(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Wt]=e,e.stateNode=r}return $e(e),null;case 13:if(he(ge),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(fe&&ct!==null&&e.mode&1&&!(e.flags&128))iy(),gs(),e.flags|=98560,i=!1;else if(i=Ao(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(T(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(T(317));i[Wt]=e}else gs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;$e(e),i=!1}else At!==null&&(Nu(At),At=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ge.current&1?ke===0&&(ke=3):Gd())),e.updateQueue!==null&&(e.flags|=4),$e(e),null);case 4:return _s(),yu(t,e),t===null&&Di(e.stateNode.containerInfo),$e(e),null;case 10:return Pd(e.type._context),$e(e),null;case 17:return ot(e.type)&&ma(),$e(e),null;case 19:if(he(ge),i=e.memoizedState,i===null)return $e(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)Xs(i,!1);else{if(ke!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ca(t),o!==null){for(e.flags|=128,Xs(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ue(ge,ge.current&1|2),e.child}t=t.sibling}i.tail!==null&&Ne()>ws&&(e.flags|=128,r=!0,Xs(i,!1),e.lanes=4194304)}else{if(!r)if(t=Ca(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Xs(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!fe)return $e(e),null}else 2*Ne()-i.renderingStartTime>ws&&n!==1073741824&&(e.flags|=128,r=!0,Xs(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Ne(),e.sibling=null,n=ge.current,ue(ge,r?n&1|2:n&1),e):($e(e),null);case 22:case 23:return Hd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?lt&1073741824&&($e(e),e.subtreeFlags&6&&(e.flags|=8192)):$e(e),null;case 24:return null;case 25:return null}throw Error(T(156,e.tag))}function UC(t,e){switch(Nd(e),e.tag){case 1:return ot(e.type)&&ma(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return _s(),he(it),he(He),Md(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return jd(e),null;case 13:if(he(ge),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(T(340));gs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return he(ge),null;case 4:return _s(),null;case 10:return Pd(e.type._context),null;case 22:case 23:return Hd(),null;case 24:return null;default:return null}}var jo=!1,Ve=!1,BC=typeof WeakSet=="function"?WeakSet:Set,M=null;function Zr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ee(t,e,r)}else n.current=null}function _u(t,e,n){try{n()}catch(r){Ee(t,e,r)}}var sp=!1;function zC(t,e){if(tu=da,t=Gg(),xd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,h=0,d=t,f=null;t:for(;;){for(var y;d!==n||s!==0&&d.nodeType!==3||(a=o+s),d!==i||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(y=d.firstChild)!==null;)f=d,d=y;for(;;){if(d===t)break t;if(f===n&&++u===s&&(a=o),f===i&&++h===r&&(l=o),(y=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(nu={focusedElem:t,selectionRange:n},da=!1,M=e;M!==null;)if(e=M,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,M=t;else for(;M!==null;){e=M;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var g=v.memoizedProps,E=v.memoizedState,m=e.stateNode,p=m.getSnapshotBeforeUpdate(e.elementType===e.type?g:kt(e.type,g),E);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(C){Ee(e,e.return,C)}if(t=e.sibling,t!==null){t.return=e.return,M=t;break}M=e.return}return v=sp,sp=!1,v}function gi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&_u(e,n,i)}s=s.next}while(s!==r)}}function dl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function vu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Wy(t){var e=t.alternate;e!==null&&(t.alternate=null,Wy(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Wt],delete e[Oi],delete e[iu],delete e[xC],delete e[SC])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function $y(t){return t.tag===5||t.tag===3||t.tag===4}function ip(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||$y(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function wu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=pa));else if(r!==4&&(t=t.child,t!==null))for(wu(t,e,n),t=t.sibling;t!==null;)wu(t,e,n),t=t.sibling}function Eu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Eu(t,e,n),t=t.sibling;t!==null;)Eu(t,e,n),t=t.sibling}var Le=null,Pt=!1;function wn(t,e,n){for(n=n.child;n!==null;)Vy(t,e,n),n=n.sibling}function Vy(t,e,n){if(Vt&&typeof Vt.onCommitFiberUnmount=="function")try{Vt.onCommitFiberUnmount(rl,n)}catch{}switch(n.tag){case 5:Ve||Zr(n,e);case 6:var r=Le,s=Pt;Le=null,wn(t,e,n),Le=r,Pt=s,Le!==null&&(Pt?(t=Le,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Le.removeChild(n.stateNode));break;case 18:Le!==null&&(Pt?(t=Le,n=n.stateNode,t.nodeType===8?rc(t.parentNode,n):t.nodeType===1&&rc(t,n),Ri(t)):rc(Le,n.stateNode));break;case 4:r=Le,s=Pt,Le=n.stateNode.containerInfo,Pt=!0,wn(t,e,n),Le=r,Pt=s;break;case 0:case 11:case 14:case 15:if(!Ve&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&_u(n,e,o),s=s.next}while(s!==r)}wn(t,e,n);break;case 1:if(!Ve&&(Zr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ee(n,e,a)}wn(t,e,n);break;case 21:wn(t,e,n);break;case 22:n.mode&1?(Ve=(r=Ve)||n.memoizedState!==null,wn(t,e,n),Ve=r):wn(t,e,n);break;default:wn(t,e,n)}}function op(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new BC),e.forEach(function(r){var s=YC.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Nt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Le=a.stateNode,Pt=!1;break e;case 3:Le=a.stateNode.containerInfo,Pt=!0;break e;case 4:Le=a.stateNode.containerInfo,Pt=!0;break e}a=a.return}if(Le===null)throw Error(T(160));Vy(i,o,s),Le=null,Pt=!1;var l=s.alternate;l!==null&&(l.return=null),s.return=null}catch(u){Ee(s,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Hy(e,t),e=e.sibling}function Hy(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Nt(e,t),Bt(t),r&4){try{gi(3,t,t.return),dl(3,t)}catch(g){Ee(t,t.return,g)}try{gi(5,t,t.return)}catch(g){Ee(t,t.return,g)}}break;case 1:Nt(e,t),Bt(t),r&512&&n!==null&&Zr(n,n.return);break;case 5:if(Nt(e,t),Bt(t),r&512&&n!==null&&Zr(n,n.return),t.flags&32){var s=t.stateNode;try{ki(s,"")}catch(g){Ee(t,t.return,g)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&fg(s,i),Hc(a,o);var u=Hc(a,i);for(o=0;o<l.length;o+=2){var h=l[o],d=l[o+1];h==="style"?_g(s,d):h==="dangerouslySetInnerHTML"?gg(s,d):h==="children"?ki(s,d):ud(s,h,d,u)}switch(a){case"input":Bc(s,i);break;case"textarea":pg(s,i);break;case"select":var f=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?rs(s,!!i.multiple,y,!1):f!==!!i.multiple&&(i.defaultValue!=null?rs(s,!!i.multiple,i.defaultValue,!0):rs(s,!!i.multiple,i.multiple?[]:"",!1))}s[Oi]=i}catch(g){Ee(t,t.return,g)}}break;case 6:if(Nt(e,t),Bt(t),r&4){if(t.stateNode===null)throw Error(T(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(g){Ee(t,t.return,g)}}break;case 3:if(Nt(e,t),Bt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ri(e.containerInfo)}catch(g){Ee(t,t.return,g)}break;case 4:Nt(e,t),Bt(t);break;case 13:Nt(e,t),Bt(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||($d=Ne())),r&4&&op(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Ve=(u=Ve)||h,Nt(e,t),Ve=u):Nt(e,t),Bt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for(M=t,h=t.child;h!==null;){for(d=M=h;M!==null;){switch(f=M,y=f.child,f.tag){case 0:case 11:case 14:case 15:gi(4,f,f.return);break;case 1:Zr(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(g){Ee(r,n,g)}}break;case 5:Zr(f,f.return);break;case 22:if(f.memoizedState!==null){lp(d);continue}}y!==null?(y.return=f,M=y):lp(d)}h=h.sibling}e:for(h=null,d=t;;){if(d.tag===5){if(h===null){h=d;try{s=d.stateNode,u?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=yg("display",o))}catch(g){Ee(t,t.return,g)}}}else if(d.tag===6){if(h===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(g){Ee(t,t.return,g)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Nt(e,t),Bt(t),r&4&&op(t);break;case 21:break;default:Nt(e,t),Bt(t)}}function Bt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if($y(n)){var r=n;break e}n=n.return}throw Error(T(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(ki(s,""),r.flags&=-33);var i=ip(t);Eu(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,a=ip(t);wu(t,a,o);break;default:throw Error(T(161))}}catch(l){Ee(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function WC(t,e,n){M=t,Gy(t)}function Gy(t,e,n){for(var r=(t.mode&1)!==0;M!==null;){var s=M,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||jo;if(!o){var a=s.alternate,l=a!==null&&a.memoizedState!==null||Ve;a=jo;var u=Ve;if(jo=o,(Ve=l)&&!u)for(M=s;M!==null;)o=M,l=o.child,o.tag===22&&o.memoizedState!==null?cp(s):l!==null?(l.return=o,M=l):cp(s);for(;i!==null;)M=i,Gy(i),i=i.sibling;M=s,jo=a,Ve=u}ap(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,M=i):ap(t)}}function ap(t){for(;M!==null;){var e=M;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ve||dl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ve)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:kt(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&Hf(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Hf(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var d=h.dehydrated;d!==null&&Ri(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}Ve||e.flags&512&&vu(e)}catch(f){Ee(e,e.return,f)}}if(e===t){M=null;break}if(n=e.sibling,n!==null){n.return=e.return,M=n;break}M=e.return}}function lp(t){for(;M!==null;){var e=M;if(e===t){M=null;break}var n=e.sibling;if(n!==null){n.return=e.return,M=n;break}M=e.return}}function cp(t){for(;M!==null;){var e=M;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{dl(4,e)}catch(l){Ee(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(l){Ee(e,s,l)}}var i=e.return;try{vu(e)}catch(l){Ee(e,i,l)}break;case 5:var o=e.return;try{vu(e)}catch(l){Ee(e,o,l)}}}catch(l){Ee(e,e.return,l)}if(e===t){M=null;break}var a=e.sibling;if(a!==null){a.return=e.return,M=a;break}M=e.return}}var $C=Math.ceil,Na=mn.ReactCurrentDispatcher,zd=mn.ReactCurrentOwner,wt=mn.ReactCurrentBatchConfig,ee=0,Me=null,Te=null,Fe=0,lt=0,es=nr(0),ke=0,$i=null,Nr=0,hl=0,Wd=0,yi=null,tt=null,$d=0,ws=1/0,Yt=null,Ta=!1,Cu=null,Wn=null,Mo=!1,Mn=null,Ia=0,_i=0,xu=null,Xo=-1,Jo=0;function Qe(){return ee&6?Ne():Xo!==-1?Xo:Xo=Ne()}function $n(t){return t.mode&1?ee&2&&Fe!==0?Fe&-Fe:TC.transition!==null?(Jo===0&&(Jo=Ag()),Jo):(t=re,t!==0||(t=window.event,t=t===void 0?16:Og(t.type)),t):1}function Dt(t,e,n,r){if(50<_i)throw _i=0,xu=null,Error(T(185));so(t,n,r),(!(ee&2)||t!==Me)&&(t===Me&&(!(ee&2)&&(hl|=n),ke===4&&kn(t,Fe)),at(t,r),n===1&&ee===0&&!(e.mode&1)&&(ws=Ne()+500,ll&&rr()))}function at(t,e){var n=t.callbackNode;TE(t,e);var r=ua(t,t===Me?Fe:0);if(r===0)n!==null&&_f(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&_f(n),e===1)t.tag===0?NC(up.bind(null,t)):ny(up.bind(null,t)),EC(function(){!(ee&6)&&rr()}),n=null;else{switch(bg(r)){case 1:n=md;break;case 4:n=kg;break;case 16:n=ca;break;case 536870912:n=Pg;break;default:n=ca}n=e_(n,Ky.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Ky(t,e){if(Xo=-1,Jo=0,ee&6)throw Error(T(327));var n=t.callbackNode;if(ls()&&t.callbackNode!==n)return null;var r=ua(t,t===Me?Fe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ka(t,r);else{e=r;var s=ee;ee|=2;var i=qy();(Me!==t||Fe!==e)&&(Yt=null,ws=Ne()+500,_r(t,e));do try{GC();break}catch(a){Qy(t,a)}while(!0);kd(),Na.current=i,ee=s,Te!==null?e=0:(Me=null,Fe=0,e=ke)}if(e!==0){if(e===2&&(s=Yc(t),s!==0&&(r=s,e=Su(t,s))),e===1)throw n=$i,_r(t,0),kn(t,r),at(t,Ne()),n;if(e===6)kn(t,r);else{if(s=t.current.alternate,!(r&30)&&!VC(s)&&(e=ka(t,r),e===2&&(i=Yc(t),i!==0&&(r=i,e=Su(t,i))),e===1))throw n=$i,_r(t,0),kn(t,r),at(t,Ne()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(T(345));case 2:ur(t,tt,Yt);break;case 3:if(kn(t,r),(r&130023424)===r&&(e=$d+500-Ne(),10<e)){if(ua(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){Qe(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=su(ur.bind(null,t,tt,Yt),e);break}ur(t,tt,Yt);break;case 4:if(kn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-Mt(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=Ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*$C(r/1960))-r,10<r){t.timeoutHandle=su(ur.bind(null,t,tt,Yt),r);break}ur(t,tt,Yt);break;case 5:ur(t,tt,Yt);break;default:throw Error(T(329))}}}return at(t,Ne()),t.callbackNode===n?Ky.bind(null,t):null}function Su(t,e){var n=yi;return t.current.memoizedState.isDehydrated&&(_r(t,e).flags|=256),t=ka(t,e),t!==2&&(e=tt,tt=n,e!==null&&Nu(e)),t}function Nu(t){tt===null?tt=t:tt.push.apply(tt,t)}function VC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!Ot(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function kn(t,e){for(e&=~Wd,e&=~hl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Mt(e),r=1<<n;t[n]=-1,e&=~r}}function up(t){if(ee&6)throw Error(T(327));ls();var e=ua(t,0);if(!(e&1))return at(t,Ne()),null;var n=ka(t,e);if(t.tag!==0&&n===2){var r=Yc(t);r!==0&&(e=r,n=Su(t,r))}if(n===1)throw n=$i,_r(t,0),kn(t,e),at(t,Ne()),n;if(n===6)throw Error(T(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ur(t,tt,Yt),at(t,Ne()),null}function Vd(t,e){var n=ee;ee|=1;try{return t(e)}finally{ee=n,ee===0&&(ws=Ne()+500,ll&&rr())}}function Tr(t){Mn!==null&&Mn.tag===0&&!(ee&6)&&ls();var e=ee;ee|=1;var n=wt.transition,r=re;try{if(wt.transition=null,re=1,t)return t()}finally{re=r,wt.transition=n,ee=e,!(ee&6)&&rr()}}function Hd(){lt=es.current,he(es)}function _r(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,wC(n)),Te!==null)for(n=Te.return;n!==null;){var r=n;switch(Nd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ma();break;case 3:_s(),he(it),he(He),Md();break;case 5:jd(r);break;case 4:_s();break;case 13:he(ge);break;case 19:he(ge);break;case 10:Pd(r.type._context);break;case 22:case 23:Hd()}n=n.return}if(Me=t,Te=t=Vn(t.current,null),Fe=lt=e,ke=0,$i=null,Wd=hl=Nr=0,tt=yi=null,mr!==null){for(e=0;e<mr.length;e++)if(n=mr[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}mr=null}return t}function Qy(t,e){do{var n=Te;try{if(kd(),Qo.current=Sa,xa){for(var r=_e.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}xa=!1}if(Sr=0,Ae=Ie=_e=null,mi=!1,Bi=0,zd.current=null,n===null||n.return===null){ke=1,$i=e,Te=null;break}e:{var i=t,o=n.return,a=n,l=e;if(e=Fe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,h=a,d=h.tag;if(!(h.mode&1)&&(d===0||d===11||d===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var y=Xf(o);if(y!==null){y.flags&=-257,Jf(y,o,a,i,e),y.mode&1&&Yf(i,u,e),e=y,l=u;var v=e.updateQueue;if(v===null){var g=new Set;g.add(l),e.updateQueue=g}else v.add(l);break e}else{if(!(e&1)){Yf(i,u,e),Gd();break e}l=Error(T(426))}}else if(fe&&a.mode&1){var E=Xf(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Jf(E,o,a,i,e),Td(vs(l,a));break e}}i=l=vs(l,a),ke!==4&&(ke=2),yi===null?yi=[i]:yi.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var m=by(i,l,e);Vf(i,m);break e;case 1:a=l;var p=i.type,_=i.stateNode;if(!(i.flags&128)&&(typeof p.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Wn===null||!Wn.has(_)))){i.flags|=65536,e&=-e,i.lanes|=e;var C=Ry(i,a,e);Vf(i,C);break e}}i=i.return}while(i!==null)}Xy(n)}catch(x){e=x,Te===n&&n!==null&&(Te=n=n.return);continue}break}while(!0)}function qy(){var t=Na.current;return Na.current=Sa,t===null?Sa:t}function Gd(){(ke===0||ke===3||ke===2)&&(ke=4),Me===null||!(Nr&268435455)&&!(hl&268435455)||kn(Me,Fe)}function ka(t,e){var n=ee;ee|=2;var r=qy();(Me!==t||Fe!==e)&&(Yt=null,_r(t,e));do try{HC();break}catch(s){Qy(t,s)}while(!0);if(kd(),ee=n,Na.current=r,Te!==null)throw Error(T(261));return Me=null,Fe=0,ke}function HC(){for(;Te!==null;)Yy(Te)}function GC(){for(;Te!==null&&!yE();)Yy(Te)}function Yy(t){var e=Zy(t.alternate,t,lt);t.memoizedProps=t.pendingProps,e===null?Xy(t):Te=e,zd.current=null}function Xy(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=UC(n,e),n!==null){n.flags&=32767,Te=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ke=6,Te=null;return}}else if(n=FC(n,e,lt),n!==null){Te=n;return}if(e=e.sibling,e!==null){Te=e;return}Te=e=t}while(e!==null);ke===0&&(ke=5)}function ur(t,e,n){var r=re,s=wt.transition;try{wt.transition=null,re=1,KC(t,e,n,r)}finally{wt.transition=s,re=r}return null}function KC(t,e,n,r){do ls();while(Mn!==null);if(ee&6)throw Error(T(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(T(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(IE(t,i),t===Me&&(Te=Me=null,Fe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Mo||(Mo=!0,e_(ca,function(){return ls(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=wt.transition,wt.transition=null;var o=re;re=1;var a=ee;ee|=4,zd.current=null,zC(t,n),Hy(n,t),fC(nu),da=!!tu,nu=tu=null,t.current=n,WC(n),_E(),ee=a,re=o,wt.transition=i}else t.current=n;if(Mo&&(Mo=!1,Mn=t,Ia=s),i=t.pendingLanes,i===0&&(Wn=null),EE(n.stateNode),at(t,Ne()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(Ta)throw Ta=!1,t=Cu,Cu=null,t;return Ia&1&&t.tag!==0&&ls(),i=t.pendingLanes,i&1?t===xu?_i++:(_i=0,xu=t):_i=0,rr(),null}function ls(){if(Mn!==null){var t=bg(Ia),e=wt.transition,n=re;try{if(wt.transition=null,re=16>t?16:t,Mn===null)var r=!1;else{if(t=Mn,Mn=null,Ia=0,ee&6)throw Error(T(331));var s=ee;for(ee|=4,M=t.current;M!==null;){var i=M,o=i.child;if(M.flags&16){var a=i.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(M=u;M!==null;){var h=M;switch(h.tag){case 0:case 11:case 15:gi(8,h,i)}var d=h.child;if(d!==null)d.return=h,M=d;else for(;M!==null;){h=M;var f=h.sibling,y=h.return;if(Wy(h),h===u){M=null;break}if(f!==null){f.return=y,M=f;break}M=y}}}var v=i.alternate;if(v!==null){var g=v.child;if(g!==null){v.child=null;do{var E=g.sibling;g.sibling=null,g=E}while(g!==null)}}M=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,M=o;else e:for(;M!==null;){if(i=M,i.flags&2048)switch(i.tag){case 0:case 11:case 15:gi(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,M=m;break e}M=i.return}}var p=t.current;for(M=p;M!==null;){o=M;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,M=_;else e:for(o=p;M!==null;){if(a=M,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:dl(9,a)}}catch(x){Ee(a,a.return,x)}if(a===o){M=null;break e}var C=a.sibling;if(C!==null){C.return=a.return,M=C;break e}M=a.return}}if(ee=s,rr(),Vt&&typeof Vt.onPostCommitFiberRoot=="function")try{Vt.onPostCommitFiberRoot(rl,t)}catch{}r=!0}return r}finally{re=n,wt.transition=e}}return!1}function dp(t,e,n){e=vs(n,e),e=by(t,e,1),t=zn(t,e,1),e=Qe(),t!==null&&(so(t,1,e),at(t,e))}function Ee(t,e,n){if(t.tag===3)dp(t,t,n);else for(;e!==null;){if(e.tag===3){dp(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Wn===null||!Wn.has(r))){t=vs(n,t),t=Ry(e,t,1),e=zn(e,t,1),t=Qe(),e!==null&&(so(e,1,t),at(e,t));break}}e=e.return}}function QC(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Qe(),t.pingedLanes|=t.suspendedLanes&n,Me===t&&(Fe&n)===n&&(ke===4||ke===3&&(Fe&130023424)===Fe&&500>Ne()-$d?_r(t,0):Wd|=n),at(t,e)}function Jy(t,e){e===0&&(t.mode&1?(e=So,So<<=1,!(So&130023424)&&(So=4194304)):e=1);var n=Qe();t=cn(t,e),t!==null&&(so(t,e,n),at(t,n))}function qC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Jy(t,n)}function YC(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(T(314))}r!==null&&r.delete(e),Jy(t,n)}var Zy;Zy=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||it.current)nt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return nt=!1,OC(t,e,n);nt=!!(t.flags&131072)}else nt=!1,fe&&e.flags&1048576&&ry(e,_a,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Yo(t,e),t=e.pendingProps;var s=ms(e,He.current);as(e,n),s=Ld(null,e,r,t,s,n);var i=Od();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ot(r)?(i=!0,ga(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,bd(e),s.updater=ul,e.stateNode=s,s._reactInternals=e,du(e,r,t,n),e=pu(null,e,r,!0,i,n)):(e.tag=0,fe&&i&&Sd(e),Ge(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Yo(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=JC(r),t=kt(r,t),s){case 0:e=fu(null,e,r,t,n);break e;case 1:e=tp(null,e,r,t,n);break e;case 11:e=Zf(null,e,r,t,n);break e;case 14:e=ep(null,e,r,kt(r.type,t),n);break e}throw Error(T(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:kt(r,s),fu(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:kt(r,s),tp(t,e,r,s,n);case 3:e:{if(Ly(e),t===null)throw Error(T(387));r=e.pendingProps,i=e.memoizedState,s=i.element,cy(t,e),Ea(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=vs(Error(T(423)),e),e=np(t,e,r,n,s);break e}else if(r!==s){s=vs(Error(T(424)),e),e=np(t,e,r,n,s);break e}else for(ct=Bn(e.stateNode.containerInfo.firstChild),ut=e,fe=!0,At=null,n=ay(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(gs(),r===s){e=un(t,e,n);break e}Ge(t,e,r,n)}e=e.child}return e;case 5:return uy(e),t===null&&lu(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,ru(r,s)?o=null:i!==null&&ru(r,i)&&(e.flags|=32),Dy(t,e),Ge(t,e,o,n),e.child;case 6:return t===null&&lu(e),null;case 13:return Oy(t,e,n);case 4:return Rd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ys(e,null,r,n):Ge(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:kt(r,s),Zf(t,e,r,s,n);case 7:return Ge(t,e,e.pendingProps,n),e.child;case 8:return Ge(t,e,e.pendingProps.children,n),e.child;case 12:return Ge(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,ue(va,r._currentValue),r._currentValue=o,i!==null)if(Ot(i.value,o)){if(i.children===s.children&&!it.current){e=un(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){o=i.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(i.tag===1){l=rn(-1,n&-n),l.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?l.next=l:(l.next=h.next,h.next=l),u.pending=l}}i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),cu(i.return,n,e),a.lanes|=n;break}l=l.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(T(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),cu(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}Ge(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,as(e,n),s=Et(s),r=r(s),e.flags|=1,Ge(t,e,r,n),e.child;case 14:return r=e.type,s=kt(r,e.pendingProps),s=kt(r.type,s),ep(t,e,r,s,n);case 15:return jy(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:kt(r,s),Yo(t,e),e.tag=1,ot(r)?(t=!0,ga(e)):t=!1,as(e,n),Ay(e,r,s),du(e,r,s,n),pu(null,e,r,!0,t,n);case 19:return Fy(t,e,n);case 22:return My(t,e,n)}throw Error(T(156,e.tag))};function e_(t,e){return Ig(t,e)}function XC(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _t(t,e,n,r){return new XC(t,e,n,r)}function Kd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function JC(t){if(typeof t=="function")return Kd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===hd)return 11;if(t===fd)return 14}return 2}function Vn(t,e){var n=t.alternate;return n===null?(n=_t(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Zo(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")Kd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Vr:return vr(n.children,s,i,e);case dd:o=8,s|=8;break;case Dc:return t=_t(12,n,e,s|2),t.elementType=Dc,t.lanes=i,t;case Lc:return t=_t(13,n,e,s),t.elementType=Lc,t.lanes=i,t;case Oc:return t=_t(19,n,e,s),t.elementType=Oc,t.lanes=i,t;case ug:return fl(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case lg:o=10;break e;case cg:o=9;break e;case hd:o=11;break e;case fd:o=14;break e;case Nn:o=16,r=null;break e}throw Error(T(130,t==null?t:typeof t,""))}return e=_t(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function vr(t,e,n,r){return t=_t(7,t,r,e),t.lanes=n,t}function fl(t,e,n,r){return t=_t(22,t,r,e),t.elementType=ug,t.lanes=n,t.stateNode={isHidden:!1},t}function dc(t,e,n){return t=_t(6,t,null,e),t.lanes=n,t}function hc(t,e,n){return e=_t(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ZC(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gl(0),this.expirationTimes=Gl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gl(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Qd(t,e,n,r,s,i,o,a,l){return t=new ZC(t,e,n,a,l),e===1?(e=1,i===!0&&(e|=8)):e=0,i=_t(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},bd(i),t}function e0(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$r,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function t_(t){if(!t)return Xn;t=t._reactInternals;e:{if(Dr(t)!==t||t.tag!==1)throw Error(T(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ot(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(T(171))}if(t.tag===1){var n=t.type;if(ot(n))return ty(t,n,e)}return e}function n_(t,e,n,r,s,i,o,a,l){return t=Qd(n,r,!0,t,s,i,o,a,l),t.context=t_(null),n=t.current,r=Qe(),s=$n(n),i=rn(r,s),i.callback=e??null,zn(n,i,s),t.current.lanes=s,so(t,s,r),at(t,r),t}function pl(t,e,n,r){var s=e.current,i=Qe(),o=$n(s);return n=t_(n),e.context===null?e.context=n:e.pendingContext=n,e=rn(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=zn(s,e,o),t!==null&&(Dt(t,s,o,i),Ko(t,s,o)),o}function Pa(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function hp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function qd(t,e){hp(t,e),(t=t.alternate)&&hp(t,e)}function t0(){return null}var r_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Yd(t){this._internalRoot=t}ml.prototype.render=Yd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(T(409));pl(t,e,null,null)};ml.prototype.unmount=Yd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Tr(function(){pl(null,t,null,null)}),e[ln]=null}};function ml(t){this._internalRoot=t}ml.prototype.unstable_scheduleHydration=function(t){if(t){var e=Mg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<In.length&&e!==0&&e<In[n].priority;n++);In.splice(n,0,t),n===0&&Lg(t)}};function Xd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function gl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function fp(){}function n0(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var u=Pa(o);i.call(u)}}var o=n_(e,r,t,0,null,!1,!1,"",fp);return t._reactRootContainer=o,t[ln]=o.current,Di(t.nodeType===8?t.parentNode:t),Tr(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var a=r;r=function(){var u=Pa(l);a.call(u)}}var l=Qd(t,0,!1,null,null,!1,!1,"",fp);return t._reactRootContainer=l,t[ln]=l.current,Di(t.nodeType===8?t.parentNode:t),Tr(function(){pl(e,l,n,r)}),l}function yl(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var a=s;s=function(){var l=Pa(o);a.call(l)}}pl(e,o,t,s)}else o=n0(n,e,t,s,r);return Pa(o)}Rg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=li(e.pendingLanes);n!==0&&(gd(e,n|1),at(e,Ne()),!(ee&6)&&(ws=Ne()+500,rr()))}break;case 13:Tr(function(){var r=cn(t,1);if(r!==null){var s=Qe();Dt(r,t,1,s)}}),qd(t,1)}};yd=function(t){if(t.tag===13){var e=cn(t,134217728);if(e!==null){var n=Qe();Dt(e,t,134217728,n)}qd(t,134217728)}};jg=function(t){if(t.tag===13){var e=$n(t),n=cn(t,e);if(n!==null){var r=Qe();Dt(n,t,e,r)}qd(t,e)}};Mg=function(){return re};Dg=function(t,e){var n=re;try{return re=t,e()}finally{re=n}};Kc=function(t,e,n){switch(e){case"input":if(Bc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=al(r);if(!s)throw Error(T(90));hg(r),Bc(r,s)}}}break;case"textarea":pg(t,n);break;case"select":e=n.value,e!=null&&rs(t,!!n.multiple,e,!1)}};Eg=Vd;Cg=Tr;var r0={usingClientEntryPoint:!1,Events:[oo,Qr,al,vg,wg,Vd]},Js={findFiberByHostInstance:pr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},s0={bundleType:Js.bundleType,version:Js.version,rendererPackageName:Js.rendererPackageName,rendererConfig:Js.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:mn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ng(t),t===null?null:t.stateNode},findFiberByHostInstance:Js.findFiberByHostInstance||t0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Do=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Do.isDisabled&&Do.supportsFiber)try{rl=Do.inject(s0),Vt=Do}catch{}}ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=r0;ht.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xd(e))throw Error(T(200));return e0(t,e,null,n)};ht.createRoot=function(t,e){if(!Xd(t))throw Error(T(299));var n=!1,r="",s=r_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Qd(t,1,!1,null,null,n,!1,r,s),t[ln]=e.current,Di(t.nodeType===8?t.parentNode:t),new Yd(e)};ht.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(T(188)):(t=Object.keys(t).join(","),Error(T(268,t)));return t=Ng(e),t=t===null?null:t.stateNode,t};ht.flushSync=function(t){return Tr(t)};ht.hydrate=function(t,e,n){if(!gl(e))throw Error(T(200));return yl(null,t,e,!0,n)};ht.hydrateRoot=function(t,e,n){if(!Xd(t))throw Error(T(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=r_;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=n_(e,null,t,1,n??null,s,!1,i,o),t[ln]=e.current,Di(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new ml(e)};ht.render=function(t,e,n){if(!gl(e))throw Error(T(200));return yl(null,t,e,!1,n)};ht.unmountComponentAtNode=function(t){if(!gl(t))throw Error(T(40));return t._reactRootContainer?(Tr(function(){yl(null,null,t,!1,function(){t._reactRootContainer=null,t[ln]=null})}),!0):!1};ht.unstable_batchedUpdates=Vd;ht.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!gl(n))throw Error(T(200));if(t==null||t._reactInternals===void 0)throw Error(T(38));return yl(t,e,n,!1,r)};ht.version="18.3.1-next-f1338f8080-20240426";function s_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s_)}catch(t){console.error(t)}}s_(),sg.exports=ht;var i0=sg.exports,i_,pp=i0;i_=pp.createRoot,pp.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vi(){return Vi=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Vi.apply(this,arguments)}var Dn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Dn||(Dn={}));const mp="popstate";function o0(t){t===void 0&&(t={});function e(r,s){let{pathname:i,search:o,hash:a}=r.location;return Tu("",{pathname:i,search:o,hash:a},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(r,s){return typeof s=="string"?s:Aa(s)}return l0(e,n,null,t)}function ve(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Jd(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function a0(){return Math.random().toString(36).substr(2,8)}function gp(t,e){return{usr:t.state,key:t.key,idx:e}}function Tu(t,e,n,r){return n===void 0&&(n=null),Vi({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Rs(e):e,{state:n,key:e&&e.key||r||a0()})}function Aa(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Rs(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function l0(t,e,n,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:i=!1}=r,o=s.history,a=Dn.Pop,l=null,u=h();u==null&&(u=0,o.replaceState(Vi({},o.state,{idx:u}),""));function h(){return(o.state||{idx:null}).idx}function d(){a=Dn.Pop;let E=h(),m=E==null?null:E-u;u=E,l&&l({action:a,location:g.location,delta:m})}function f(E,m){a=Dn.Push;let p=Tu(g.location,E,m);u=h()+1;let _=gp(p,u),C=g.createHref(p);try{o.pushState(_,"",C)}catch(x){if(x instanceof DOMException&&x.name==="DataCloneError")throw x;s.location.assign(C)}i&&l&&l({action:a,location:g.location,delta:1})}function y(E,m){a=Dn.Replace;let p=Tu(g.location,E,m);u=h();let _=gp(p,u),C=g.createHref(p);o.replaceState(_,"",C),i&&l&&l({action:a,location:g.location,delta:0})}function v(E){let m=s.location.origin!=="null"?s.location.origin:s.location.href,p=typeof E=="string"?E:Aa(E);return p=p.replace(/ $/,"%20"),ve(m,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,m)}let g={get action(){return a},get location(){return t(s,o)},listen(E){if(l)throw new Error("A history only accepts one active listener");return s.addEventListener(mp,d),l=E,()=>{s.removeEventListener(mp,d),l=null}},createHref(E){return e(s,E)},createURL:v,encodeLocation(E){let m=v(E);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:f,replace:y,go(E){return o.go(E)}};return g}var yp;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(yp||(yp={}));function c0(t,e,n){return n===void 0&&(n="/"),u0(t,e,n)}function u0(t,e,n,r){let s=typeof e=="string"?Rs(e):e,i=Es(s.pathname||"/",n);if(i==null)return null;let o=o_(t);d0(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let u=C0(i);a=w0(o[l],u)}return a}function o_(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let s=(i,o,a)=>{let l={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};l.relativePath.startsWith("/")&&(ve(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Hn([r,l.relativePath]),h=n.concat(l);i.children&&i.children.length>0&&(ve(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),o_(i.children,e,h,u)),!(i.path==null&&!i.index)&&e.push({path:u,score:_0(u,i.index),routesMeta:h})};return t.forEach((i,o)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))s(i,o);else for(let l of a_(i.path))s(i,o,l)}),e}function a_(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,s=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return s?[i,""]:[i];let o=a_(r.join("/")),a=[];return a.push(...o.map(l=>l===""?i:[i,l].join("/"))),s&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function d0(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:v0(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const h0=/^:[\w-]+$/,f0=3,p0=2,m0=1,g0=10,y0=-2,_p=t=>t==="*";function _0(t,e){let n=t.split("/"),r=n.length;return n.some(_p)&&(r+=y0),e&&(r+=p0),n.filter(s=>!_p(s)).reduce((s,i)=>s+(h0.test(i)?f0:i===""?m0:g0),r)}function v0(t,e){return t.length===e.length&&t.slice(0,-1).every((r,s)=>r===e[s])?t[t.length-1]-e[e.length-1]:0}function w0(t,e,n){let{routesMeta:r}=t,s={},i="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],u=a===r.length-1,h=i==="/"?e:e.slice(i.length)||"/",d=Iu({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},h),f=l.route;if(!d)return null;Object.assign(s,d.params),o.push({params:s,pathname:Hn([i,d.pathname]),pathnameBase:I0(Hn([i,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(i=Hn([i,d.pathnameBase]))}return o}function Iu(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=E0(t.path,t.caseSensitive,t.end),s=e.match(n);if(!s)return null;let i=s[0],o=i.replace(/(.)\/+$/,"$1"),a=s.slice(1);return{params:r.reduce((u,h,d)=>{let{paramName:f,isOptional:y}=h;if(f==="*"){let g=a[d]||"";o=i.slice(0,i.length-g.length).replace(/(.)\/+$/,"$1")}const v=a[d];return y&&!v?u[f]=void 0:u[f]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:o,pattern:t}}function E0(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Jd(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],s="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),s+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":t!==""&&t!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),r]}function C0(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Jd(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Es(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const x0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,S0=t=>x0.test(t);function N0(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:s=""}=typeof t=="string"?Rs(t):t,i;if(n)if(S0(n))i=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),Jd(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?i=vp(n.substring(1),"/"):i=vp(n,e)}else i=e;return{pathname:i,search:k0(r),hash:P0(s)}}function vp(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function fc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function T0(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Zd(t,e){let n=T0(t);return e?n.map((r,s)=>s===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function eh(t,e,n,r){r===void 0&&(r=!1);let s;typeof t=="string"?s=Rs(t):(s=Vi({},t),ve(!s.pathname||!s.pathname.includes("?"),fc("?","pathname","search",s)),ve(!s.pathname||!s.pathname.includes("#"),fc("#","pathname","hash",s)),ve(!s.search||!s.search.includes("#"),fc("#","search","hash",s)));let i=t===""||s.pathname==="",o=i?"/":s.pathname,a;if(o==null)a=n;else{let d=e.length-1;if(!r&&o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),d-=1;s.pathname=f.join("/")}a=d>=0?e[d]:"/"}let l=N0(s,a),u=o&&o!=="/"&&o.endsWith("/"),h=(i||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||h)&&(l.pathname+="/"),l}const Hn=t=>t.join("/").replace(/\/\/+/g,"/"),I0=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),k0=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,P0=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function A0(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const l_=["post","put","patch","delete"];new Set(l_);const b0=["get",...l_];new Set(b0);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Hi(){return Hi=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Hi.apply(this,arguments)}const _l=w.createContext(null),c_=w.createContext(null),gn=w.createContext(null),vl=w.createContext(null),sr=w.createContext({outlet:null,matches:[],isDataRoute:!1}),u_=w.createContext(null);function R0(t,e){let{relative:n}=e===void 0?{}:e;js()||ve(!1);let{basename:r,navigator:s}=w.useContext(gn),{hash:i,pathname:o,search:a}=wl(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Hn([r,o])),s.createHref({pathname:l,search:a,hash:i})}function js(){return w.useContext(vl)!=null}function Lr(){return js()||ve(!1),w.useContext(vl).location}function d_(t){w.useContext(gn).static||w.useLayoutEffect(t)}function h_(){let{isDataRoute:t}=w.useContext(sr);return t?H0():j0()}function j0(){js()||ve(!1);let t=w.useContext(_l),{basename:e,future:n,navigator:r}=w.useContext(gn),{matches:s}=w.useContext(sr),{pathname:i}=Lr(),o=JSON.stringify(Zd(s,n.v7_relativeSplatPath)),a=w.useRef(!1);return d_(()=>{a.current=!0}),w.useCallback(function(u,h){if(h===void 0&&(h={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let d=eh(u,JSON.parse(o),i,h.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:Hn([e,d.pathname])),(h.replace?r.replace:r.push)(d,h.state,h)},[e,r,o,i,t])}function wl(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=w.useContext(gn),{matches:s}=w.useContext(sr),{pathname:i}=Lr(),o=JSON.stringify(Zd(s,r.v7_relativeSplatPath));return w.useMemo(()=>eh(t,JSON.parse(o),i,n==="path"),[t,o,i,n])}function M0(t,e){return D0(t,e)}function D0(t,e,n,r){js()||ve(!1);let{navigator:s}=w.useContext(gn),{matches:i}=w.useContext(sr),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=Lr(),h;if(e){var d;let E=typeof e=="string"?Rs(e):e;l==="/"||(d=E.pathname)!=null&&d.startsWith(l)||ve(!1),h=E}else h=u;let f=h.pathname||"/",y=f;if(l!=="/"){let E=l.replace(/^\//,"").split("/");y="/"+f.replace(/^\//,"").split("/").slice(E.length).join("/")}let v=c0(t,{pathname:y}),g=B0(v&&v.map(E=>Object.assign({},E,{params:Object.assign({},a,E.params),pathname:Hn([l,s.encodeLocation?s.encodeLocation(E.pathname).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?l:Hn([l,s.encodeLocation?s.encodeLocation(E.pathnameBase).pathname:E.pathnameBase])})),i,n,r);return e&&g?w.createElement(vl.Provider,{value:{location:Hi({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:Dn.Pop}},g):g}function L0(){let t=V0(),e=A0(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},e),n?w.createElement("pre",{style:s},n):null,null)}const O0=w.createElement(L0,null);class F0 extends w.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?w.createElement(sr.Provider,{value:this.props.routeContext},w.createElement(u_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function U0(t){let{routeContext:e,match:n,children:r}=t,s=w.useContext(_l);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),w.createElement(sr.Provider,{value:e},r)}function B0(t,e,n,r){var s;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var i;if(!n)return null;if(n.errors)t=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(s=n)==null?void 0:s.errors;if(a!=null){let h=o.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);h>=0||ve(!1),o=o.slice(0,Math.min(o.length,h+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let d=o[h];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=h),d.route.id){let{loaderData:f,errors:y}=n,v=d.route.loader&&f[d.route.id]===void 0&&(!y||y[d.route.id]===void 0);if(d.route.lazy||v){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((h,d,f)=>{let y,v=!1,g=null,E=null;n&&(y=a&&d.route.id?a[d.route.id]:void 0,g=d.route.errorElement||O0,l&&(u<0&&f===0?(G0("route-fallback"),v=!0,E=null):u===f&&(v=!0,E=d.route.hydrateFallbackElement||null)));let m=e.concat(o.slice(0,f+1)),p=()=>{let _;return y?_=g:v?_=E:d.route.Component?_=w.createElement(d.route.Component,null):d.route.element?_=d.route.element:_=h,w.createElement(U0,{match:d,routeContext:{outlet:h,matches:m,isDataRoute:n!=null},children:_})};return n&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?w.createElement(F0,{location:n.location,revalidation:n.revalidation,component:g,error:y,children:p(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):p()},null)}var f_=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(f_||{}),p_=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(p_||{});function z0(t){let e=w.useContext(_l);return e||ve(!1),e}function W0(t){let e=w.useContext(c_);return e||ve(!1),e}function $0(t){let e=w.useContext(sr);return e||ve(!1),e}function m_(t){let e=$0(),n=e.matches[e.matches.length-1];return n.route.id||ve(!1),n.route.id}function V0(){var t;let e=w.useContext(u_),n=W0(),r=m_();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function H0(){let{router:t}=z0(f_.UseNavigateStable),e=m_(p_.UseNavigateStable),n=w.useRef(!1);return d_(()=>{n.current=!0}),w.useCallback(function(s,i){i===void 0&&(i={}),n.current&&(typeof s=="number"?t.navigate(s):t.navigate(s,Hi({fromRouteId:e},i)))},[t,e])}const wp={};function G0(t,e,n){wp[t]||(wp[t]=!0)}function K0(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function pc(t){let{to:e,replace:n,state:r,relative:s}=t;js()||ve(!1);let{future:i,static:o}=w.useContext(gn),{matches:a}=w.useContext(sr),{pathname:l}=Lr(),u=h_(),h=eh(e,Zd(a,i.v7_relativeSplatPath),l,s==="path"),d=JSON.stringify(h);return w.useEffect(()=>u(JSON.parse(d),{replace:n,state:r,relative:s}),[u,d,s,n,r]),null}function Tt(t){ve(!1)}function Q0(t){let{basename:e="/",children:n=null,location:r,navigationType:s=Dn.Pop,navigator:i,static:o=!1,future:a}=t;js()&&ve(!1);let l=e.replace(/^\/*/,"/"),u=w.useMemo(()=>({basename:l,navigator:i,static:o,future:Hi({v7_relativeSplatPath:!1},a)}),[l,a,i,o]);typeof r=="string"&&(r=Rs(r));let{pathname:h="/",search:d="",hash:f="",state:y=null,key:v="default"}=r,g=w.useMemo(()=>{let E=Es(h,l);return E==null?null:{location:{pathname:E,search:d,hash:f,state:y,key:v},navigationType:s}},[l,h,d,f,y,v,s]);return g==null?null:w.createElement(gn.Provider,{value:u},w.createElement(vl.Provider,{children:n,value:g}))}function q0(t){let{children:e,location:n}=t;return M0(ku(e),n)}new Promise(()=>{});function ku(t,e){e===void 0&&(e=[]);let n=[];return w.Children.forEach(t,(r,s)=>{if(!w.isValidElement(r))return;let i=[...e,s];if(r.type===w.Fragment){n.push.apply(n,ku(r.props.children,i));return}r.type!==Tt&&ve(!1),!r.props.index||!r.props.children||ve(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=ku(r.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ba(){return ba=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ba.apply(this,arguments)}function g_(t,e){if(t==null)return{};var n={},r=Object.keys(t),s,i;for(i=0;i<r.length;i++)s=r[i],!(e.indexOf(s)>=0)&&(n[s]=t[s]);return n}function Y0(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function X0(t,e){return t.button===0&&(!e||e==="_self")&&!Y0(t)}const J0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Z0=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],ex="6";try{window.__reactRouterVersion=ex}catch{}const tx=w.createContext({isTransitioning:!1}),nx="startTransition",Ep=Qw[nx];function rx(t){let{basename:e,children:n,future:r,window:s}=t,i=w.useRef();i.current==null&&(i.current=o0({window:s,v5Compat:!0}));let o=i.current,[a,l]=w.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},h=w.useCallback(d=>{u&&Ep?Ep(()=>l(d)):l(d)},[l,u]);return w.useLayoutEffect(()=>o.listen(h),[o,h]),w.useEffect(()=>K0(r),[r]),w.createElement(Q0,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const sx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ix=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ox=w.forwardRef(function(e,n){let{onClick:r,relative:s,reloadDocument:i,replace:o,state:a,target:l,to:u,preventScrollReset:h,viewTransition:d}=e,f=g_(e,J0),{basename:y}=w.useContext(gn),v,g=!1;if(typeof u=="string"&&ix.test(u)&&(v=u,sx))try{let _=new URL(window.location.href),C=u.startsWith("//")?new URL(_.protocol+u):new URL(u),x=Es(C.pathname,y);C.origin===_.origin&&x!=null?u=x+C.search+C.hash:g=!0}catch{}let E=R0(u,{relative:s}),m=cx(u,{replace:o,state:a,target:l,preventScrollReset:h,relative:s,viewTransition:d});function p(_){r&&r(_),_.defaultPrevented||m(_)}return w.createElement("a",ba({},f,{href:v||E,onClick:g||i?r:p,ref:n,target:l}))}),ax=w.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:s=!1,className:i="",end:o=!1,style:a,to:l,viewTransition:u,children:h}=e,d=g_(e,Z0),f=wl(l,{relative:d.relative}),y=Lr(),v=w.useContext(c_),{navigator:g,basename:E}=w.useContext(gn),m=v!=null&&ux(f)&&u===!0,p=g.encodeLocation?g.encodeLocation(f).pathname:f.pathname,_=y.pathname,C=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;s||(_=_.toLowerCase(),C=C?C.toLowerCase():null,p=p.toLowerCase()),C&&E&&(C=Es(C,E)||C);const x=p!=="/"&&p.endsWith("/")?p.length-1:p.length;let b=_===p||!o&&_.startsWith(p)&&_.charAt(x)==="/",k=C!=null&&(C===p||!o&&C.startsWith(p)&&C.charAt(p.length)==="/"),S={isActive:b,isPending:k,isTransitioning:m},U=b?r:void 0,P;typeof i=="function"?P=i(S):P=[i,b?"active":null,k?"pending":null,m?"transitioning":null].filter(Boolean).join(" ");let $=typeof a=="function"?a(S):a;return w.createElement(ox,ba({},d,{"aria-current":U,className:P,ref:n,style:$,to:l,viewTransition:u}),typeof h=="function"?h(S):h)});var Pu;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Pu||(Pu={}));var Cp;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Cp||(Cp={}));function lx(t){let e=w.useContext(_l);return e||ve(!1),e}function cx(t,e){let{target:n,replace:r,state:s,preventScrollReset:i,relative:o,viewTransition:a}=e===void 0?{}:e,l=h_(),u=Lr(),h=wl(t,{relative:o});return w.useCallback(d=>{if(X0(d,n)){d.preventDefault();let f=r!==void 0?r:Aa(u)===Aa(h);l(t,{replace:f,state:s,preventScrollReset:i,relative:o,viewTransition:a})}},[u,l,h,r,s,n,t,i,o,a])}function ux(t,e){e===void 0&&(e={});let n=w.useContext(tx);n==null&&ve(!1);let{basename:r}=lx(Pu.useViewTransitionState),s=wl(t,{relative:e.relative});if(!n.isTransitioning)return!1;let i=Es(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Es(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Iu(s.pathname,o)!=null||Iu(s.pathname,i)!=null}const dx=[{label:"Dashboard",path:"/"},{label:"Players",path:"/players"},{label:"Match Center",path:"/match-center"},{label:"History",path:"/history"},{label:"Weekly Summary",path:"/weekly-summary"},{label:"Rules Patoda(g)",path:"/rules-patodag"},{label:"Ground Expense",path:"/ground-expense"}];function hx({accessMode:t,onSwitchRole:e}){return c.jsxs("aside",{className:"sidebar",children:[c.jsxs("div",{className:"sidebar-brand",children:[c.jsx("span",{children:"Patoda XI"}),c.jsx("p",{children:"Cricket group manager"})]}),c.jsx("nav",{className:"sidebar-nav",children:dx.map(n=>c.jsx(ax,{to:n.path,className:({isActive:r})=>r?"nav-link active":"nav-link",children:n.label},n.path))}),c.jsxs("div",{className:"sidebar-footer",children:[c.jsxs("small",{className:"sidebar-mode-tag",children:["Mode: ",t==="admin"?"Admin":"Guest"]}),c.jsx("button",{type:"button",className:"sidebar-switch-btn",onClick:e,children:"Switch Role"})]})]})}const Ra=t=>String(t).padStart(2,"0"),Ms=/^\d{4}-\d{2}-\d{2}$/,fx="Asia/Kolkata",px=new Intl.DateTimeFormat("en-CA",{timeZone:fx,year:"numeric",month:"2-digit",day:"2-digit"}),mx=(t=new Date)=>{if(typeof t=="string"&&Ms.test(t)){const[e,n,r]=t.split("-").map(Number);return new Date(e,n-1,r)}return new Date(t)},gx=t=>{var i,o,a;const e=px.formatToParts(t),n=Number((i=e.find(l=>l.type==="year"))==null?void 0:i.value),r=Number((o=e.find(l=>l.type==="month"))==null?void 0:o.value),s=Number((a=e.find(l=>l.type==="day"))==null?void 0:a.value);return!Number.isFinite(n)||!Number.isFinite(r)||!Number.isFinite(s)?null:{year:n,month:r,day:s}},yx=(t,e)=>{if(!Ms.test(t))return"";const[n,r,s]=t.split("-").map(Number),i=new Date(Date.UTC(n,r-1,s));return i.setUTCDate(i.getUTCDate()+e),`${i.getUTCFullYear()}-${Ra(i.getUTCMonth()+1)}-${Ra(i.getUTCDate())}`},Ft=(t=new Date)=>{if(typeof t=="string"&&Ms.test(t))return t;const e=mx(t);if(Number.isNaN(e.getTime()))return"";const n=gx(e);return n?`${n.year}-${Ra(n.month)}-${Ra(n.day)}`:""},Ke=t=>{const e=Ft(t);if(!Ms.test(e))return"";const[n,r,s]=e.split("-");return`${s}/${r}/${n}`},et=()=>Ft(new Date),Au=()=>yx(et(),1),_x=(t=new Date)=>{const e=Ft(t);if(!Ms.test(e))return 0;const[n,r,s]=e.split("-").map(Number),i=new Date(Date.UTC(n,r-1,s)),o=new Date(Date.UTC(n,0,1)),a=new Date(o);return a.setUTCDate(o.getUTCDate()-o.getUTCDay()),Math.floor((i-a)/6048e5)+1},El=(t=new Date)=>{const e=Ft(t);if(!Ms.test(e))return"";const[n]=e.split("-").map(Number);return`${n}-W${String(_x(e)).padStart(2,"0")}`},ea=(t,e)=>{const n=Ft(t),r=Ft(e);return!!(n&&r&&n===r)},xp=t=>{const e=Ft(t);return e?e===et()||e===Au():!1},bu=t=>{const e=[...t];for(let n=e.length-1;n>0;n-=1){const r=Math.floor(Math.random()*(n+1));[e[n],e[r]]=[e[r],e[n]]}return e},vx=t=>{const e=t.map(s=>s.id),n=bu(e),r=Math.ceil(n.length/2);return{teamA:n.slice(0,r),teamB:n.slice(r)}},wx=({teamA:t,teamB:e},n={})=>{const r=n.teamA||[],s=n.teamB||[],i=bu(t.filter(a=>!r.includes(a))),o=bu(e.filter(a=>!s.includes(a)));return i.length===0||o.length===0?null:{teamA:i[0],teamB:o[0]}},J=(t,e)=>{const n=e==null?"":String(e).trim(),r=t.find(s=>String(s.id).trim()===n);return r?r.name:"Unknown"},Ex="अज्ञात",Cx="प्रलंबित मॅच फी सूचना",xx="उबेद शेख",Sx=(t=0)=>new Intl.NumberFormat("mr-IN",{maximumFractionDigits:0}).format(t),Nx=(t,e)=>{const n=J(t,e);return n==="Unknown"?Ex:n};function Tx({matches:t=[],players:e=[],resetKey:n="",autoHideMs:r=5e3}){const[s,i]=w.useState(!0),o=w.useMemo(()=>t.filter(l=>l.status!=="no-match"&&l.penaltyPaid!==!0).slice().sort((l,u)=>l.date<u.date?1:-1).map(l=>({id:l.id,date:Ke(l.date),loserName:Nx(e,l.loserCaptain),penaltyText:Sx(l.penalty||0)})),[t,e]),a=o.map(l=>l.id).join("|");return w.useEffect(()=>{if(o.length===0){i(!1);return}i(!0);const l=window.setTimeout(()=>{i(!1)},r);return()=>{window.clearTimeout(l)}},[r,a,o.length,n]),o.length===0||!s?null:c.jsxs("aside",{className:"match-fee-toast visible",role:"status","aria-live":"polite",children:[c.jsx("p",{className:"match-fee-toast-title",children:Cx}),c.jsx("ul",{className:"match-fee-toast-list",children:o.map(l=>c.jsxs("li",{children:[`दिनांक ${l.date}: `,c.jsx("strong",{className:"match-fee-toast-name",children:l.loserName}),` लवकरात लवकर ₹${l.penaltyText} ${xx} यांच्याकडे जमा करा.`]},l.id))})]})}const y_="/assets/ubed-upi-qr-B6YX14-H.jpeg",Ix="Ubed Shaikh",kx="उबेद शेख",Sp=`${Ix} (${kx})`,Px="ubbus313-3@okaxis";function Cl({title:t="Contribution Payment QR",description:e=`Pay contribution to ${Sp}.`}){return c.jsxs("section",{className:"card payment-qr-panel",children:[c.jsx("h2",{className:"card-title",children:t}),c.jsx("p",{className:"page-intro payment-qr-copy",children:e}),c.jsxs("div",{className:"payment-qr-stack",children:[c.jsx("img",{className:"fund-qr-image",src:y_,alt:`UPI QR for ${Sp}`}),c.jsxs("p",{className:"fund-upi-id",children:["UPI ID: ",Px]})]})]})}const Ax=()=>{};var Np={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const __={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I=function(t,e){if(!t)throw Ds(e)},Ds=function(t){return new Error("Firebase Database ("+__.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},bx=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},th={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,h=i>>2,d=(i&3)<<4|a>>4;let f=(a&15)<<2|u>>6,y=u&63;l||(y=64,o||(f=64)),r.push(n[h],n[d],n[f],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(v_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):bx(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||d==null)throw new Rx;const f=i<<2|a>>4;if(r.push(f),u!==64){const y=a<<4&240|u>>2;if(r.push(y),d!==64){const v=u<<6&192|d;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Rx extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const w_=function(t){const e=v_(t);return th.encodeByteArray(e,!0)},ja=function(t){return w_(t).replace(/\./g,"")},Ma=function(t){try{return th.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jx(t){return E_(void 0,t)}function E_(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Mx(n)||(t[n]=E_(t[n],e[n]));return t}function Mx(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dx(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lx=()=>Dx().__FIREBASE_DEFAULTS__,Ox=()=>{if(typeof process>"u"||typeof Np>"u")return;const t=Np.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Fx=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ma(t[1]);return e&&JSON.parse(e)},nh=()=>{try{return Ax()||Lx()||Ox()||Fx()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},C_=t=>{var e,n;return(n=(e=nh())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},Ux=t=>{const e=C_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},x_=()=>{var t;return(t=nh())==null?void 0:t.config},S_=t=>{var e;return(e=nh())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bx(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[ja(JSON.stringify(n)),ja(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function rh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ye())}function zx(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Wx(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function N_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $x(){const t=Ye();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Vx(){return __.NODE_ADMIN===!0}function Hx(){try{return typeof indexedDB=="object"}catch{return!1}}function Gx(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kx="FirebaseError";class ir extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Kx,Object.setPrototypeOf(this,ir.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,co.prototype.create)}}class co{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Qx(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new ir(s,a,r)}}function Qx(t,e){return t.replace(qx,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const qx=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gi(t){return JSON.parse(t)}function je(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T_=function(t){let e={},n={},r={},s="";try{const i=t.split(".");e=Gi(Ma(i[0])||""),n=Gi(Ma(i[1])||""),s=i[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:s}},Yx=function(t){const e=T_(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Xx=function(t){const e=T_(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Cs(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Ru(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Da(t,e,n){const r={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=e.call(n,t[s],s,t));return r}function Ir(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Tp(i)&&Tp(o)){if(!Ir(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Tp(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ls(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jx{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(f<<1|f>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,h;for(let d=0;d<80;d++){d<40?d<20?(u=a^i&(o^a),h=1518500249):(u=i^o^a,h=1859775393):d<60?(u=i&o|a&(i|o),h=2400959708):(u=i^o^a,h=3395469782);const f=(s<<5|s>>>27)+u+l+h+r[d]&4294967295;l=a,a=o,o=(i<<30|i>>>2)&4294967295,i=s,s=f}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<n;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[r]=this.chain_[s]>>i&255,++r;return e}}function Zx(t,e){const n=new eS(t,e);return n.subscribe.bind(n)}class eS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");tS(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=mc),s.error===void 0&&(s.error=mc),s.complete===void 0&&(s.complete=mc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function tS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function mc(){}function xl(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nS=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,I(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;s=65536+(i<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Sl=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uo(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function I_(t){return(await fetch(t,{credentials:"include"})).ok}class kr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new lo;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(iS(e))try{this.getOrInitializeService({instanceIdentifier:dr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=dr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=dr){return this.instances.has(e)}getOptions(e=dr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:sS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=dr){return this.component?this.component.multipleInstances?e:dr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sS(t){return t===dr?void 0:t}function iS(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new rS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const aS={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},lS=ie.INFO,cS={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},uS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=cS[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class sh{constructor(e){this.name=e,this._logLevel=lS,this._logHandler=uS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?aS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const dS=(t,e)=>e.some(n=>t instanceof n);let Ip,kp;function hS(){return Ip||(Ip=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fS(){return kp||(kp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const k_=new WeakMap,ju=new WeakMap,P_=new WeakMap,gc=new WeakMap,ih=new WeakMap;function pS(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Gn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&k_.set(n,t)}).catch(()=>{}),ih.set(e,t),e}function mS(t){if(ju.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ju.set(t,e)}let Mu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ju.get(t);if(e==="objectStoreNames")return t.objectStoreNames||P_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Gn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function gS(t){Mu=t(Mu)}function yS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(yc(this),e,...n);return P_.set(r,e.sort?e.sort():[e]),Gn(r)}:fS().includes(t)?function(...e){return t.apply(yc(this),e),Gn(k_.get(this))}:function(...e){return Gn(t.apply(yc(this),e))}}function _S(t){return typeof t=="function"?yS(t):(t instanceof IDBTransaction&&mS(t),dS(t,hS())?new Proxy(t,Mu):t)}function Gn(t){if(t instanceof IDBRequest)return pS(t);if(gc.has(t))return gc.get(t);const e=_S(t);return e!==t&&(gc.set(t,e),ih.set(e,t)),e}const yc=t=>ih.get(t);function vS(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Gn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Gn(o.result),l.oldVersion,l.newVersion,Gn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const wS=["get","getKey","getAll","getAllKeys","count"],ES=["put","add","delete","clear"],_c=new Map;function Pp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(_c.get(e))return _c.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=ES.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||wS.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&l.done]))[0]};return _c.set(e,i),i}gS(t=>({...t,get:(e,n,r)=>Pp(e,n)||t.get(e,n,r),has:(e,n)=>!!Pp(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(xS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function xS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Du="@firebase/app",Ap="0.14.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dn=new sh("@firebase/app"),SS="@firebase/app-compat",NS="@firebase/analytics-compat",TS="@firebase/analytics",IS="@firebase/app-check-compat",kS="@firebase/app-check",PS="@firebase/auth",AS="@firebase/auth-compat",bS="@firebase/database",RS="@firebase/data-connect",jS="@firebase/database-compat",MS="@firebase/functions",DS="@firebase/functions-compat",LS="@firebase/installations",OS="@firebase/installations-compat",FS="@firebase/messaging",US="@firebase/messaging-compat",BS="@firebase/performance",zS="@firebase/performance-compat",WS="@firebase/remote-config",$S="@firebase/remote-config-compat",VS="@firebase/storage",HS="@firebase/storage-compat",GS="@firebase/firestore",KS="@firebase/ai",QS="@firebase/firestore-compat",qS="firebase",YS="12.11.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lu="[DEFAULT]",XS={[Du]:"fire-core",[SS]:"fire-core-compat",[TS]:"fire-analytics",[NS]:"fire-analytics-compat",[kS]:"fire-app-check",[IS]:"fire-app-check-compat",[PS]:"fire-auth",[AS]:"fire-auth-compat",[bS]:"fire-rtdb",[RS]:"fire-data-connect",[jS]:"fire-rtdb-compat",[MS]:"fire-fn",[DS]:"fire-fn-compat",[LS]:"fire-iid",[OS]:"fire-iid-compat",[FS]:"fire-fcm",[US]:"fire-fcm-compat",[BS]:"fire-perf",[zS]:"fire-perf-compat",[WS]:"fire-rc",[$S]:"fire-rc-compat",[VS]:"fire-gcs",[HS]:"fire-gcs-compat",[GS]:"fire-fst",[QS]:"fire-fst-compat",[KS]:"fire-vertex","fire-js":"fire-js",[qS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const La=new Map,JS=new Map,Ou=new Map;function bp(t,e){try{t.container.addComponent(e)}catch(n){dn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function xs(t){const e=t.name;if(Ou.has(e))return dn.debug(`There were multiple attempts to register component ${e}.`),!1;Ou.set(e,t);for(const n of La.values())bp(n,t);for(const n of JS.values())bp(n,t);return!0}function oh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function $t(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Kn=new co("app","Firebase",ZS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eN{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new kr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Kn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Os=YS;function A_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Lu,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Kn.create("bad-app-name",{appName:String(s)});if(n||(n=x_()),!n)throw Kn.create("no-options");const i=La.get(s);if(i){if(Ir(n,i.options)&&Ir(r,i.config))return i;throw Kn.create("duplicate-app",{appName:s})}const o=new oS(s);for(const l of Ou.values())o.addComponent(l);const a=new eN(n,r,o);return La.set(s,a),a}function b_(t=Lu){const e=La.get(t);if(!e&&t===Lu&&x_())return A_();if(!e)throw Kn.create("no-app",{appName:t});return e}function Qn(t,e,n){let r=XS[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),dn.warn(o.join(" "));return}xs(new kr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tN="firebase-heartbeat-database",nN=1,Ki="firebase-heartbeat-store";let vc=null;function R_(){return vc||(vc=vS(tN,nN,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ki)}catch(n){console.warn(n)}}}}).catch(t=>{throw Kn.create("idb-open",{originalErrorMessage:t.message})})),vc}async function rN(t){try{const n=(await R_()).transaction(Ki),r=await n.objectStore(Ki).get(j_(t));return await n.done,r}catch(e){if(e instanceof ir)dn.warn(e.message);else{const n=Kn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});dn.warn(n.message)}}}async function Rp(t,e){try{const r=(await R_()).transaction(Ki,"readwrite");await r.objectStore(Ki).put(e,j_(t)),await r.done}catch(n){if(n instanceof ir)dn.warn(n.message);else{const r=Kn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});dn.warn(r.message)}}}function j_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sN=1024,iN=30;class oN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new lN(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=jp();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>iN){const o=cN(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){dn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=jp(),{heartbeatsToSend:r,unsentEntries:s}=aN(this._heartbeatsCache.heartbeats),i=ja(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return dn.warn(n),""}}}function jp(){return new Date().toISOString().substring(0,10)}function aN(t,e=sN){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Mp(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Mp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class lN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Hx()?Gx().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await rN(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Rp(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Rp(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Mp(t){return ja(JSON.stringify({version:2,heartbeats:t})).length}function cN(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uN(t){xs(new kr("platform-logger",e=>new CS(e),"PRIVATE")),xs(new kr("heartbeat",e=>new oN(e),"PRIVATE")),Qn(Du,Ap,t),Qn(Du,Ap,"esm2020"),Qn("fire-js","")}uN("");var Dp={};const Lp="@firebase/database",Op="1.1.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let M_="";function dN(t){M_=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hN{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),je(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Gi(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fN{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Qt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new hN(e)}}catch{}return new fN},yr=D_("localStorage"),pN=D_("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs=new sh("@firebase/database"),mN=function(){let t=1;return function(){return t++}}(),L_=function(t){const e=nS(t),n=new Jx;n.update(e);const r=n.digest();return th.encodeByteArray(r)},ho=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=ho.apply(null,r):typeof r=="object"?e+=je(r):e+=r,e+=" "}return e};let vi=null,Fp=!0;const gN=function(t,e){I(!0,"Can't turn on custom loggers persistently."),cs.logLevel=ie.VERBOSE,vi=cs.log.bind(cs)},Oe=function(...t){if(Fp===!0&&(Fp=!1,vi===null&&pN.get("logging_enabled")===!0&&gN()),vi){const e=ho.apply(null,t);vi(e)}},fo=function(t){return function(...e){Oe(t,...e)}},Fu=function(...t){const e="FIREBASE INTERNAL ERROR: "+ho(...t);cs.error(e)},hn=function(...t){const e=`FIREBASE FATAL ERROR: ${ho(...t)}`;throw cs.error(e),new Error(e)},qe=function(...t){const e="FIREBASE WARNING: "+ho(...t);cs.warn(e)},yN=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&qe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ah=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},_N=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Pr="[MIN_NAME]",Jn="[MAX_NAME]",Or=function(t,e){if(t===e)return 0;if(t===Pr||e===Jn)return-1;if(e===Pr||t===Jn)return 1;{const n=Up(t),r=Up(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},vN=function(t,e){return t===e?0:t<e?-1:1},Zs=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+je(e))},lh=function(t){if(typeof t!="object"||t===null)return je(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=je(e[r]),n+=":",n+=lh(t[e[r]]);return n+="}",n},O_=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let s=0;s<n;s+=e)s+e>n?r.push(t.substring(s,n)):r.push(t.substring(s,s+e));return r};function Be(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const F_=function(t){I(!ah(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let s,i,o,a,l;t===0?(i=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),i=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(i%2?1:0),i=Math.floor(i/2);u.push(s?1:0),u.reverse();const h=u.join("");let d="";for(l=0;l<64;l+=8){let f=parseInt(h.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},wN=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},EN=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function CN(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const xN=new RegExp("^-?(0*)\\d{1,10}$"),SN=-2147483648,NN=2147483647,Up=function(t){if(xN.test(t)){const e=Number(t);if(e>=SN&&e<=NN)return e}return null},Fs=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw qe("Exception was thrown by user callback.",n),e},Math.floor(0))}},TN=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},wi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IN{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,$t(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)==null||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){qe(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kN{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Oe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',qe(e)}}class ta{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ta.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ch="5",U_="v",B_="s",z_="r",W_="f",$_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,V_="ls",H_="p",Uu="ac",G_="websocket",K_="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{constructor(e,n,r,s,i=!1,o="",a=!1,l=!1,u=null){this.secure=n,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=yr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&yr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function PN(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function q_(t,e,n){I(typeof e=="string","typeof type must == string"),I(typeof n=="object","typeof params must == object");let r;if(e===G_)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===K_)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);PN(t)&&(n.ns=t.namespace);const s=[];return Be(n,(i,o)=>{s.push(i+"="+o)}),r+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AN{constructor(){this.counters_={}}incrementCounter(e,n=1){Qt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return jx(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wc={},Ec={};function uh(t){const e=t.toString();return wc[e]||(wc[e]=new AN),wc[e]}function bN(t,e){const n=t.toString();return Ec[n]||(Ec[n]=e()),Ec[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RN{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&Fs(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bp="start",jN="close",MN="pLPCommand",DN="pRTLPCB",Y_="id",X_="pw",J_="ser",LN="cb",ON="seg",FN="ts",UN="d",BN="dframe",Z_=1870,ev=30,zN=Z_-ev,WN=25e3,$N=3e4;class ts{constructor(e,n,r,s,i,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=fo(e),this.stats_=uh(n),this.urlFn=l=>(this.appCheckToken&&(l[Uu]=this.appCheckToken),q_(n,K_,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new RN(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor($N)),_N(()=>{if(this.isClosed_)return;this.scriptTagHolder=new dh((...i)=>{const[o,a,l,u,h]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Bp)this.id=a,this.password=l;else if(o===jN)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Bp]="t",r[J_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[LN]=this.scriptTagHolder.uniqueCallbackIdentifier),r[U_]=ch,this.transportSessionId&&(r[B_]=this.transportSessionId),this.lastSessionId&&(r[V_]=this.lastSessionId),this.applicationId&&(r[H_]=this.applicationId),this.appCheckToken&&(r[Uu]=this.appCheckToken),typeof location<"u"&&location.hostname&&$_.test(location.hostname)&&(r[z_]=W_);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ts.forceAllow_=!0}static forceDisallow(){ts.forceDisallow_=!0}static isAvailable(){return ts.forceAllow_?!0:!ts.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!wN()&&!EN()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=je(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=w_(n),s=O_(r,zN);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[BN]="t",r[Y_]=e,r[X_]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=je(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class dh{constructor(e,n,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=mN(),window[MN+this.uniqueCallbackIdentifier]=e,window[DN+this.uniqueCallbackIdentifier]=n,this.myIFrame=dh.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Oe("frame writing exception"),a.stack&&Oe(a.stack),Oe(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Oe("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Y_]=this.myID,e[X_]=this.myPW,e[J_]=this.currentSerial;let n=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+ev+r.length<=Z_;){const o=this.pendingSegs.shift();r=r+"&"+ON+s+"="+o.seg+"&"+FN+s+"="+o.ts+"&"+UN+s+"="+o.d,s++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(r,Math.floor(WN)),i=()=>{clearTimeout(s),r()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Oe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VN=16384,HN=45e3;let Oa=null;typeof MozWebSocket<"u"?Oa=MozWebSocket:typeof WebSocket<"u"&&(Oa=WebSocket);class bt{constructor(e,n,r,s,i,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=fo(this.connId),this.stats_=uh(n),this.connURL=bt.connectionURL_(n,o,a,s,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,s,i){const o={};return o[U_]=ch,typeof location<"u"&&location.hostname&&$_.test(location.hostname)&&(o[z_]=W_),n&&(o[B_]=n),r&&(o[V_]=r),s&&(o[Uu]=s),i&&(o[H_]=i),q_(e,G_,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,yr.set("previous_websocket_failure",!0);try{let r;Vx(),this.mySock=new Oa(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){bt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Oa!==null&&!bt.forceDisallow_}static previouslyFailed(){return yr.isInMemoryStorage||yr.get("previous_websocket_failure")===!0}markConnectionHealthy(){yr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Gi(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(I(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=je(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=O_(n,VN);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(HN))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}bt.responsesRequiredToBeHealthy=2;bt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{static get ALL_TRANSPORTS(){return[ts,bt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=bt&&bt.isAvailable();let r=n&&!bt.previouslyFailed();if(e.webSocketOnly&&(n||qe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[bt];else{const s=this.transports_=[];for(const i of Qi.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);Qi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Qi.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GN=6e4,KN=5e3,QN=10*1024,qN=100*1024,Cc="t",zp="d",YN="s",Wp="r",XN="e",$p="o",Vp="a",Hp="n",Gp="p",JN="h";class ZN{constructor(e,n,r,s,i,o,a,l,u,h){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=fo("c:"+this.id+":"),this.transportManager_=new Qi(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=wi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>qN?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>QN?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Cc in e){const n=e[Cc];n===Vp?this.upgradeIfSecondaryHealthy_():n===Wp?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===$p&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Zs("t",e),r=Zs("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Gp,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Vp,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Hp,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Zs("t",e),r=Zs("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Zs(Cc,e);if(zp in e){const r=e[zp];if(n===JN){const s={...r};this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===Hp){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===YN?this.onConnectionShutdown_(r):n===Wp?this.onReset_(r):n===XN?Fu("Server Error: "+r):n===$p?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Fu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),ch!==r&&qe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),wi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(GN))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):wi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(KN))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Gp,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(yr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{put(e,n,r,s){}merge(e,n,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(e){this.allowedEvents_=e,this.listeners_={},I(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const s=this.getInitialEvent(e);s&&n.apply(r,s)}off(e,n,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===n&&(!r||r===s[i].context)){s.splice(i,1);return}}validateEventType_(e){I(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa extends nv{static getInstance(){return new Fa}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!rh()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return I(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kp=32,Qp=768;class se{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ne(){return new se("")}function G(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Zn(t){return t.pieces_.length-t.pieceNum_}function ce(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new se(t.pieces_,e)}function hh(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function eT(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function qi(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function rv(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new se(e,0)}function Ce(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof se)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&n.push(r[s])}return new se(n,0)}function K(t){return t.pieceNum_>=t.pieces_.length}function rt(t,e){const n=G(t),r=G(e);if(n===null)return e;if(n===r)return rt(ce(t),ce(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function tT(t,e){const n=qi(t,0),r=qi(e,0);for(let s=0;s<n.length&&s<r.length;s++){const i=Or(n[s],r[s]);if(i!==0)return i}return n.length===r.length?0:n.length<r.length?-1:1}function fh(t,e){if(Zn(t)!==Zn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function vt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Zn(t)>Zn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class nT{constructor(e,n){this.errorPrefix_=n,this.parts_=qi(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Sl(this.parts_[r]);sv(this)}}function rT(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Sl(e),sv(t)}function sT(t){const e=t.parts_.pop();t.byteLength_-=Sl(e),t.parts_.length>0&&(t.byteLength_-=1)}function sv(t){if(t.byteLength_>Qp)throw new Error(t.errorPrefix_+"has a key path longer than "+Qp+" bytes ("+t.byteLength_+").");if(t.parts_.length>Kp)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Kp+") or object contains a cycle "+hr(t))}function hr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph extends nv{static getInstance(){return new ph}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return I(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei=1e3,iT=60*5*1e3,qp=30*1e3,oT=1.3,aT=3e4,lT="server_kill",Yp=3;class sn extends tv{constructor(e,n,r,s,i,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=sn.nextPersistentConnectionId_++,this.log_=fo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ei,this.maxReconnectDelay_=iT,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ph.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Fa.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const s=++this.requestNumber_,i={r:s,a:e,b:n};this.log_(je(i)),I(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const n=new lo,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,r,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),I(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:r};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+r+" for "+s);const i={p:r},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const l=a.d,u=a.s;sn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Qt(e,"w")){const r=Cs(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();qe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Xx(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=qp)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Yx(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,n)}sendUnlisten_(e,n,r,s){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";s&&(i.q=r,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,s){const i={p:n,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,r,s){this.putInternal("p",e,n,r,s)}merge(e,n,r,s){this.putInternal("m",e,n,r,s)}putInternal(e,n,r,s,i){this.initConnection_();const o={p:n,d:r};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const i=r.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+je(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Fu("Unrecognized action received from server: "+je(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){I(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ei,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ei,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>aT&&(this.reconnectDelay_=ei),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*oT)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+sn.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(d){I(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:u};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?Oe("getToken() completed but was canceled"):(Oe("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,a=new ZN(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,y=>{qe(y+" ("+this.repoInfo_.toString()+")"),this.interrupt(lT)},i))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&qe(d),l())}}}interrupt(e){Oe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Oe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ru(this.interruptReasons_)&&(this.reconnectDelay_=ei,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(i=>lh(i)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const r=new se(e).toString();let s;if(this.listens.has(r)){const i=this.listens.get(r);s=i.get(n),i.delete(n),i.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,n){Oe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Yp&&(this.reconnectDelay_=qp,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Oe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Yp&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+M_.replace(/\./g,"-")]=1,rh()?e["framework.cordova"]=1:N_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Fa.getInstance().currentlyOnline();return Ru(this.interruptReasons_)&&e}}sn.nextPersistentConnectionId_=0;sn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Q(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new Q(Pr,e),s=new Q(Pr,n);return this.compare(r,s)!==0}minPost(){return Q.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lo;class iv extends Nl{static get __EMPTY_NODE(){return Lo}static set __EMPTY_NODE(e){Lo=e}compare(e,n){return Or(e.name,n.name)}isDefinedOn(e){throw Ds("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Q.MIN}maxPost(){return new Q(Jn,Lo)}makePost(e,n){return I(typeof e=="string","KeyIndex indexValue must always be a string."),new Q(e,Lo)}toString(){return".key"}}const wr=new iv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e,n,r,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class be{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??be.RED,this.left=s??st.EMPTY_NODE,this.right=i??st.EMPTY_NODE}copy(e,n,r,s,i){return new be(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return st.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,s;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return st.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}be.RED=!0;be.BLACK=!1;class cT{copy(e,n,r,s,i){return this}insert(e,n,r){return new be(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class st{constructor(e,n=st.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new st(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,be.BLACK,null,null))}remove(e){return new st(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,be.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,s=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Oo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Oo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Oo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Oo(this.root_,null,this.comparator_,!0,e)}}st.EMPTY_NODE=new cT;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uT(t,e){return Or(t.name,e.name)}function mh(t,e){return Or(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bu;function dT(t){Bu=t}const ov=function(t){return typeof t=="number"?"number:"+F_(t):"string:"+t},av=function(t){if(t.isLeafNode()){const e=t.val();I(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Qt(e,".sv"),"Priority must be a string or number.")}else I(t===Bu||t.isEmpty(),"priority of unexpected type.");I(t===Bu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xp;class Pe{static set __childrenNodeConstructor(e){Xp=e}static get __childrenNodeConstructor(){return Xp}constructor(e,n=Pe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,I(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),av(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Pe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Pe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return K(e)?this:G(e)===".priority"?this.priorityNode_:Pe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Pe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=G(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(I(r!==".priority"||Zn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Pe.__childrenNodeConstructor.EMPTY_NODE.updateChild(ce(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ov(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=F_(this.value_):e+=this.value_,this.lazyHash_=L_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Pe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Pe.__childrenNodeConstructor?-1:(I(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,s=Pe.VALUE_TYPE_ORDER.indexOf(n),i=Pe.VALUE_TYPE_ORDER.indexOf(r);return I(s>=0,"Unknown leaf type: "+n),I(i>=0,"Unknown leaf type: "+r),s===i?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Pe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lv,cv;function hT(t){lv=t}function fT(t){cv=t}class pT extends Nl{compare(e,n){const r=e.node.getPriority(),s=n.node.getPriority(),i=r.compareTo(s);return i===0?Or(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Q.MIN}maxPost(){return new Q(Jn,new Pe("[PRIORITY-POST]",cv))}makePost(e,n){const r=lv(e);return new Q(n,new Pe("[PRIORITY-POST]",r))}toString(){return".priority"}}const ye=new pT;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mT=Math.log(2);class gT{constructor(e){const n=i=>parseInt(Math.log(i)/mT,10),r=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ua=function(t,e,n,r){t.sort(e);const s=function(l,u){const h=u-l;let d,f;if(h===0)return null;if(h===1)return d=t[l],f=n?n(d):d,new be(f,d.node,be.BLACK,null,null);{const y=parseInt(h/2,10)+l,v=s(l,y),g=s(y+1,u);return d=t[y],f=n?n(d):d,new be(f,d.node,be.BLACK,v,g)}},i=function(l){let u=null,h=null,d=t.length;const f=function(v,g){const E=d-v,m=d;d-=v;const p=s(E+1,m),_=t[E],C=n?n(_):_;y(new be(C,_.node,g,null,p))},y=function(v){u?(u.left=v,u=v):(h=v,u=v)};for(let v=0;v<l.count;++v){const g=l.nextBitIsOne(),E=Math.pow(2,l.count-(v+1));g?f(E,be.BLACK):(f(E,be.BLACK),f(E,be.RED))}return h},o=new gT(t.length),a=i(o);return new st(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xc;const Br={};class en{static get Default(){return I(Br&&ye,"ChildrenNode.ts has not been loaded"),xc=xc||new en({".priority":Br},{".priority":ye}),xc}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Cs(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof st?n:null}hasIndex(e){return Qt(this.indexSet_,e.toString())}addIndex(e,n){I(e!==wr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const i=n.getIterator(Q.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),r.push(o),o=i.getNext();let a;s?a=Ua(r,e.getCompare()):a=Br;const l=e.toString(),u={...this.indexSet_};u[l]=e;const h={...this.indexes_};return h[l]=a,new en(h,u)}addToIndexes(e,n){const r=Da(this.indexes_,(s,i)=>{const o=Cs(this.indexSet_,i);if(I(o,"Missing index implementation for "+i),s===Br)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(Q.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),Ua(a,o.getCompare())}else return Br;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new Q(e.name,a))),l.insert(e,e.node)}});return new en(r,this.indexSet_)}removeFromIndexes(e,n){const r=Da(this.indexes_,s=>{if(s===Br)return s;{const i=n.get(e.name);return i?s.remove(new Q(e.name,i)):s}});return new en(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ti;class B{static get EMPTY_NODE(){return ti||(ti=new B(new st(mh),null,en.Default))}constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&av(this.priorityNode_),this.children_.isEmpty()&&I(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ti}updatePriority(e){return this.children_.isEmpty()?this:new B(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ti:n}}getChild(e){const n=G(e);return n===null?this:this.getImmediateChild(n).getChild(ce(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(I(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new Q(e,n);let s,i;n.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(r,this.children_));const o=s.isEmpty()?ti:this.priorityNode_;return new B(s,o,i)}}updateChild(e,n){const r=G(e);if(r===null)return n;{I(G(e)!==".priority"||Zn(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(ce(e),n);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,s=0,i=!0;if(this.forEachChild(ye,(o,a)=>{n[o]=a.val(e),r++,i&&B.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+ov(this.getPriority().val())+":"),this.forEachChild(ye,(n,r)=>{const s=r.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":L_(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const s=this.resolveIndex_(r);if(s){const i=s.getPredecessorKey(new Q(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Q(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Q(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,Q.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,Q.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===po?-1:0}withIndex(e){if(e===wr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new B(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===wr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ye),s=n.getIterator(ye);let i=r.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=r.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===wr?null:this.indexMap_.get(e.toString())}}B.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class yT extends B{constructor(){super(new st(mh),B.EMPTY_NODE,en.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return B.EMPTY_NODE}isEmpty(){return!1}}const po=new yT;Object.defineProperties(Q,{MIN:{value:new Q(Pr,B.EMPTY_NODE)},MAX:{value:new Q(Jn,po)}});iv.__EMPTY_NODE=B.EMPTY_NODE;Pe.__childrenNodeConstructor=B;dT(po);fT(po);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _T=!0;function Re(t,e=null){if(t===null)return B.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),I(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Pe(n,Re(e))}if(!(t instanceof Array)&&_T){const n=[];let r=!1;if(Be(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Re(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new Q(o,l)))}}),n.length===0)return B.EMPTY_NODE;const i=Ua(n,uT,o=>o.name,mh);if(r){const o=Ua(n,ye.getCompare());return new B(i,Re(e),new en({".priority":o},{".priority":ye}))}else return new B(i,Re(e),en.Default)}else{let n=B.EMPTY_NODE;return Be(t,(r,s)=>{if(Qt(t,r)&&r.substring(0,1)!=="."){const i=Re(s);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(r,i))}}),n.updatePriority(Re(e))}}hT(Re);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh extends Nl{constructor(e){super(),this.indexPath_=e,I(!K(e)&&G(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),s=this.extractChild(n.node),i=r.compareTo(s);return i===0?Or(e.name,n.name):i}makePost(e,n){const r=Re(e),s=B.EMPTY_NODE.updateChild(this.indexPath_,r);return new Q(n,s)}maxPost(){const e=B.EMPTY_NODE.updateChild(this.indexPath_,po);return new Q(Jn,e)}toString(){return qi(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vT extends Nl{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Or(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Q.MIN}maxPost(){return Q.MAX}makePost(e,n){const r=Re(e);return new Q(n,r)}toString(){return".value"}}const uv=new vT;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dv(t){return{type:"value",snapshotNode:t}}function Ss(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Yi(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Xi(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function wT(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(e){this.index_=e}updateChild(e,n,r,s,i,o){I(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(s).equals(r.getChild(s))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Yi(n,a)):I(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ss(n,r)):o.trackChildChange(Xi(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ye,(s,i)=>{n.hasChild(s)||r.trackChildChange(Yi(s,i))}),n.isLeafNode()||n.forEachChild(ye,(s,i)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(i)||r.trackChildChange(Xi(s,i,o))}else r.trackChildChange(Ss(s,i))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?B.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e){this.indexedFilter_=new yh(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ji.getStartPost_(e),this.endPost_=Ji.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,s,i,o){return this.matches(new Q(n,r))||(r=B.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,s,i,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=B.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(B.EMPTY_NODE);const i=this;return n.forEachChild(ye,(o,a)=>{i.matches(new Q(o,a))||(s=s.updateImmediateChild(o,B.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Ji(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,s,i,o){return this.rangedFilter_.matches(new Q(n,r))||(r=B.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,s,i,o):this.fullLimitUpdateChild_(e,n,r,i,o)}updateFullNode(e,n,r){let s;if(n.isLeafNode()||n.isEmpty())s=B.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=B.EMPTY_NODE.withIndex(this.index_);let i;this.reverse_?i=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):i=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;i.hasNext()&&o<this.limit_;){const a=i.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=n.withIndex(this.index_),s=s.updatePriority(B.EMPTY_NODE);let i;this.reverse_?i=s.getReverseIterator(this.index_):i=s.getIterator(this.index_);let o=0;for(;i.hasNext();){const a=i.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,B.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,s,i){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,y)=>d(y,f)}else o=this.index_.getCompare();const a=e;I(a.numChildren()===this.limit_,"");const l=new Q(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let f=s.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=s.getChildAfterChild(this.index_,f,this.reverse_);const y=f==null?1:o(f,l);if(h&&!r.isEmpty()&&y>=0)return i!=null&&i.trackChildChange(Xi(n,r,d)),a.updateImmediateChild(n,r);{i!=null&&i.trackChildChange(Yi(n,d));const g=a.updateImmediateChild(n,B.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(i!=null&&i.trackChildChange(Ss(f.name,f.node)),g.updateImmediateChild(f.name,f.node)):g}}else return r.isEmpty()?e:h&&o(u,l)>=0?(i!=null&&(i.trackChildChange(Yi(u.name,u.node)),i.trackChildChange(Ss(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,B.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ye}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return I(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return I(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Pr}hasEnd(){return this.endSet_}getIndexEndValue(){return I(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return I(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Jn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return I(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ye}copy(){const e=new _h;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function CT(t){return t.loadsAllData()?new yh(t.getIndex()):t.hasLimit()?new ET(t):new Ji(t)}function xT(t,e){const n=t.copy();return n.index_=e,n}function Jp(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ye?n="$priority":t.index_===uv?n="$value":t.index_===wr?n="$key":(I(t.index_ instanceof gh,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=je(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=je(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+je(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=je(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+je(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Zp(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ye&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba extends tv{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(I(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=fo("p:rest:"),this.listens_={}}listen(e,n,r,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=Ba.getListenId_(e,r),a={};this.listens_[o]=a;const l=Jp(e._queryParams);this.restRequest_(i+".json",l,(u,h)=>{let d=h;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(i,d,!1,r),Cs(this.listens_,o)===a){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",s(f,null)}})}unlisten(e,n){const r=Ba.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Jp(e._queryParams),r=e._path.toString(),s=new lo;return this.restRequest_(r+".json",n,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(r,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(n.auth=s.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ls(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Gi(a.responseText)}catch{qe("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&qe("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ST{constructor(){this.rootNode_=B.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function za(){return{value:null,children:new Map}}function hv(t,e,n){if(K(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=G(e);t.children.has(r)||t.children.set(r,za());const s=t.children.get(r);e=ce(e),hv(s,e,n)}}function zu(t,e,n){t.value!==null?n(e,t.value):NT(t,(r,s)=>{const i=new se(e.toString()+"/"+r);zu(s,i,n)})}function NT(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TT{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&Be(this.last_,(r,s)=>{n[r]=n[r]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const em=10*1e3,IT=30*1e3,kT=5*60*1e3;class PT{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new TT(e);const r=em+(IT-em)*Math.random();wi(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Be(e,(s,i)=>{i>0&&Qt(this.statsToReport_,s)&&(n[s]=i,r=!0)}),r&&this.server_.reportStats(n),wi(this.reportStats_.bind(this),Math.floor(Math.random()*2*kT))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Rt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Rt||(Rt={}));function vh(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function wh(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Eh(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Rt.ACK_USER_WRITE,this.source=vh()}operationForChild(e){if(K(this.path)){if(this.affectedTree.value!=null)return I(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new se(e));return new Wa(ne(),n,this.revert)}}else return I(G(this.path)===e,"operationForChild called for unrelated child."),new Wa(ce(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e,n){this.source=e,this.path=n,this.type=Rt.LISTEN_COMPLETE}operationForChild(e){return K(this.path)?new Zi(this.source,ne()):new Zi(this.source,ce(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Rt.OVERWRITE}operationForChild(e){return K(this.path)?new Ar(this.source,ne(),this.snap.getImmediateChild(e)):new Ar(this.source,ce(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Rt.MERGE}operationForChild(e){if(K(this.path)){const n=this.children.subtree(new se(e));return n.isEmpty()?null:n.value?new Ar(this.source,ne(),n.value):new Ns(this.source,ne(),n)}else return I(G(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ns(this.source,ce(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(K(e))return this.isFullyInitialized()&&!this.filtered_;const n=G(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AT{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function bT(t,e,n,r){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(wT(o.childName,o.snapshotNode))}),ni(t,s,"child_removed",e,r,n),ni(t,s,"child_added",e,r,n),ni(t,s,"child_moved",i,r,n),ni(t,s,"child_changed",e,r,n),ni(t,s,"value",e,r,n),s}function ni(t,e,n,r,s,i){const o=r.filter(a=>a.type===n);o.sort((a,l)=>jT(t,a,l)),o.forEach(a=>{const l=RT(t,a,i);s.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function RT(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function jT(t,e,n){if(e.childName==null||n.childName==null)throw Ds("Should only compare child_ events.");const r=new Q(e.childName,e.snapshotNode),s=new Q(n.childName,n.snapshotNode);return t.index_.compare(r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tl(t,e){return{eventCache:t,serverCache:e}}function Ei(t,e,n,r){return Tl(new br(e,n,r),t.serverCache)}function fv(t,e,n,r){return Tl(t.eventCache,new br(e,n,r))}function Wu(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Rr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sc;const MT=()=>(Sc||(Sc=new st(vN)),Sc);class le{static fromObject(e){let n=new le(null);return Be(e,(r,s)=>{n=n.set(new se(r),s)}),n}constructor(e,n=MT()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ne(),value:this.value};if(K(e))return null;{const r=G(e),s=this.children.get(r);if(s!==null){const i=s.findRootMostMatchingPathAndValue(ce(e),n);return i!=null?{path:Ce(new se(r),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(K(e))return this;{const n=G(e),r=this.children.get(n);return r!==null?r.subtree(ce(e)):new le(null)}}set(e,n){if(K(e))return new le(n,this.children);{const r=G(e),i=(this.children.get(r)||new le(null)).set(ce(e),n),o=this.children.insert(r,i);return new le(this.value,o)}}remove(e){if(K(e))return this.children.isEmpty()?new le(null):new le(null,this.children);{const n=G(e),r=this.children.get(n);if(r){const s=r.remove(ce(e));let i;return s.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,s),this.value===null&&i.isEmpty()?new le(null):new le(this.value,i)}else return this}}get(e){if(K(e))return this.value;{const n=G(e),r=this.children.get(n);return r?r.get(ce(e)):null}}setTree(e,n){if(K(e))return n;{const r=G(e),i=(this.children.get(r)||new le(null)).setTree(ce(e),n);let o;return i.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,i),new le(this.value,o)}}fold(e){return this.fold_(ne(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((s,i)=>{r[s]=i.fold_(Ce(e,s),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,ne(),n)}findOnPath_(e,n,r){const s=this.value?r(n,this.value):!1;if(s)return s;if(K(e))return null;{const i=G(e),o=this.children.get(i);return o?o.findOnPath_(ce(e),Ce(n,i),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ne(),n)}foreachOnPath_(e,n,r){if(K(e))return this;{this.value&&r(n,this.value);const s=G(e),i=this.children.get(s);return i?i.foreachOnPath_(ce(e),Ce(n,s),r):new le(null)}}foreach(e){this.foreach_(ne(),e)}foreach_(e,n){this.children.inorderTraversal((r,s)=>{s.foreach_(Ce(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this.writeTree_=e}static empty(){return new Lt(new le(null))}}function Ci(t,e,n){if(K(e))return new Lt(new le(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let i=r.value;const o=rt(s,e);return i=i.updateChild(o,n),new Lt(t.writeTree_.set(s,i))}else{const s=new le(n),i=t.writeTree_.setTree(e,s);return new Lt(i)}}}function $u(t,e,n){let r=t;return Be(n,(s,i)=>{r=Ci(r,Ce(e,s),i)}),r}function tm(t,e){if(K(e))return Lt.empty();{const n=t.writeTree_.setTree(e,new le(null));return new Lt(n)}}function Vu(t,e){return Fr(t,e)!=null}function Fr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(rt(n.path,e)):null}function nm(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ye,(r,s)=>{e.push(new Q(r,s))}):t.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new Q(r,s.value))}),e}function qn(t,e){if(K(e))return t;{const n=Fr(t,e);return n!=null?new Lt(new le(n)):new Lt(t.writeTree_.subtree(e))}}function Hu(t){return t.writeTree_.isEmpty()}function Ts(t,e){return pv(ne(),t.writeTree_,e)}function pv(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?(I(i.value!==null,"Priority writes must always be leaf nodes"),r=i.value):n=pv(Ce(t,s),i,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Ce(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ch(t,e){return _v(e,t)}function DT(t,e,n,r,s){I(r>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:s}),s&&(t.visibleWrites=Ci(t.visibleWrites,e,n)),t.lastWriteId=r}function LT(t,e,n,r){I(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=$u(t.visibleWrites,e,n),t.lastWriteId=r}function OT(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function FT(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);I(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let s=r.visible,i=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&UT(a,r.path)?s=!1:vt(r.path,a.path)&&(i=!0)),o--}if(s){if(i)return BT(t),!0;if(r.snap)t.visibleWrites=tm(t.visibleWrites,r.path);else{const a=r.children;Be(a,l=>{t.visibleWrites=tm(t.visibleWrites,Ce(r.path,l))})}return!0}else return!1}function UT(t,e){if(t.snap)return vt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&vt(Ce(t.path,n),e))return!0;return!1}function BT(t){t.visibleWrites=mv(t.allWrites,zT,ne()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function zT(t){return t.visible}function mv(t,e,n){let r=Lt.empty();for(let s=0;s<t.length;++s){const i=t[s];if(e(i)){const o=i.path;let a;if(i.snap)vt(n,o)?(a=rt(n,o),r=Ci(r,a,i.snap)):vt(o,n)&&(a=rt(o,n),r=Ci(r,ne(),i.snap.getChild(a)));else if(i.children){if(vt(n,o))a=rt(n,o),r=$u(r,a,i.children);else if(vt(o,n))if(a=rt(o,n),K(a))r=$u(r,ne(),i.children);else{const l=Cs(i.children,G(a));if(l){const u=l.getChild(ce(a));r=Ci(r,ne(),u)}}}else throw Ds("WriteRecord should have .snap or .children")}}return r}function gv(t,e,n,r,s){if(!r&&!s){const i=Fr(t.visibleWrites,e);if(i!=null)return i;{const o=qn(t.visibleWrites,e);if(Hu(o))return n;if(n==null&&!Vu(o,ne()))return null;{const a=n||B.EMPTY_NODE;return Ts(o,a)}}}else{const i=qn(t.visibleWrites,e);if(!s&&Hu(i))return n;if(!s&&n==null&&!Vu(i,ne()))return null;{const o=function(u){return(u.visible||s)&&(!r||!~r.indexOf(u.writeId))&&(vt(u.path,e)||vt(e,u.path))},a=mv(t.allWrites,o,e),l=n||B.EMPTY_NODE;return Ts(a,l)}}}function WT(t,e,n){let r=B.EMPTY_NODE;const s=Fr(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(ye,(i,o)=>{r=r.updateImmediateChild(i,o)}),r;if(n){const i=qn(t.visibleWrites,e);return n.forEachChild(ye,(o,a)=>{const l=Ts(qn(i,new se(o)),a);r=r.updateImmediateChild(o,l)}),nm(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const i=qn(t.visibleWrites,e);return nm(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function $T(t,e,n,r,s){I(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=Ce(e,n);if(Vu(t.visibleWrites,i))return null;{const o=qn(t.visibleWrites,i);return Hu(o)?s.getChild(n):Ts(o,s.getChild(n))}}function VT(t,e,n,r){const s=Ce(e,n),i=Fr(t.visibleWrites,s);if(i!=null)return i;if(r.isCompleteForChild(n)){const o=qn(t.visibleWrites,s);return Ts(o,r.getNode().getImmediateChild(n))}else return null}function HT(t,e){return Fr(t.visibleWrites,e)}function GT(t,e,n,r,s,i,o){let a;const l=qn(t.visibleWrites,e),u=Fr(l,ne());if(u!=null)a=u;else if(n!=null)a=Ts(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],d=o.getCompare(),f=i?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let y=f.getNext();for(;y&&h.length<s;)d(y,r)!==0&&h.push(y),y=f.getNext();return h}else return[]}function KT(){return{visibleWrites:Lt.empty(),allWrites:[],lastWriteId:-1}}function $a(t,e,n,r){return gv(t.writeTree,t.treePath,e,n,r)}function xh(t,e){return WT(t.writeTree,t.treePath,e)}function rm(t,e,n,r){return $T(t.writeTree,t.treePath,e,n,r)}function Va(t,e){return HT(t.writeTree,Ce(t.treePath,e))}function QT(t,e,n,r,s,i){return GT(t.writeTree,t.treePath,e,n,r,s,i)}function Sh(t,e,n){return VT(t.writeTree,t.treePath,e,n)}function yv(t,e){return _v(Ce(t.treePath,e),t.writeTree)}function _v(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;I(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),I(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const i=s.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(r,Xi(r,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(r,Yi(r,s.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(r,Ss(r,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(r,Xi(r,e.snapshotNode,s.oldSnap));else throw Ds("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YT{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const vv=new YT;class Nh{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new br(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Sh(this.writes_,e,r)}}getChildAfterChild(e,n,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Rr(this.viewCache_),i=QT(this.writes_,s,n,1,r,e);return i.length===0?null:i[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XT(t){return{filter:t}}function JT(t,e){I(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),I(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function ZT(t,e,n,r,s){const i=new qT;let o,a;if(n.type===Rt.OVERWRITE){const u=n;u.source.fromUser?o=Gu(t,e,u.path,u.snap,r,s,i):(I(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!K(u.path),o=Ha(t,e,u.path,u.snap,r,s,a,i))}else if(n.type===Rt.MERGE){const u=n;u.source.fromUser?o=tI(t,e,u.path,u.children,r,s,i):(I(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=Ku(t,e,u.path,u.children,r,s,a,i))}else if(n.type===Rt.ACK_USER_WRITE){const u=n;u.revert?o=sI(t,e,u.path,r,s,i):o=nI(t,e,u.path,u.affectedTree,r,s,i)}else if(n.type===Rt.LISTEN_COMPLETE)o=rI(t,e,n.path,r,i);else throw Ds("Unknown operation type: "+n.type);const l=i.getChanges();return eI(e,o,l),{viewCache:o,changes:l}}function eI(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=Wu(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&n.push(dv(Wu(e)))}}function wv(t,e,n,r,s,i){const o=e.eventCache;if(Va(r,n)!=null)return e;{let a,l;if(K(n))if(I(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Rr(e),h=u instanceof B?u:B.EMPTY_NODE,d=xh(r,h);a=t.filter.updateFullNode(e.eventCache.getNode(),d,i)}else{const u=$a(r,Rr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,i)}else{const u=G(n);if(u===".priority"){I(Zn(n)===1,"Can't have a priority with additional path components");const h=o.getNode();l=e.serverCache.getNode();const d=rm(r,n,h,l);d!=null?a=t.filter.updatePriority(h,d):a=o.getNode()}else{const h=ce(n);let d;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const f=rm(r,n,o.getNode(),l);f!=null?d=o.getNode().getImmediateChild(u).updateChild(h,f):d=o.getNode().getImmediateChild(u)}else d=Sh(r,u,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),u,d,h,s,i):a=o.getNode()}}return Ei(e,a,o.isFullyInitialized()||K(n),t.filter.filtersNodes())}}function Ha(t,e,n,r,s,i,o,a){const l=e.serverCache;let u;const h=o?t.filter:t.filter.getIndexedFilter();if(K(n))u=h.updateFullNode(l.getNode(),r,null);else if(h.filtersNodes()&&!l.isFiltered()){const y=l.getNode().updateChild(n,r);u=h.updateFullNode(l.getNode(),y,null)}else{const y=G(n);if(!l.isCompleteForPath(n)&&Zn(n)>1)return e;const v=ce(n),E=l.getNode().getImmediateChild(y).updateChild(v,r);y===".priority"?u=h.updatePriority(l.getNode(),E):u=h.updateChild(l.getNode(),y,E,v,vv,null)}const d=fv(e,u,l.isFullyInitialized()||K(n),h.filtersNodes()),f=new Nh(s,d,i);return wv(t,d,n,s,f,a)}function Gu(t,e,n,r,s,i,o){const a=e.eventCache;let l,u;const h=new Nh(s,e,i);if(K(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Ei(e,u,!0,t.filter.filtersNodes());else{const d=G(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=Ei(e,u,a.isFullyInitialized(),a.isFiltered());else{const f=ce(n),y=a.getNode().getImmediateChild(d);let v;if(K(f))v=r;else{const g=h.getCompleteChild(d);g!=null?hh(f)===".priority"&&g.getChild(rv(f)).isEmpty()?v=g:v=g.updateChild(f,r):v=B.EMPTY_NODE}if(y.equals(v))l=e;else{const g=t.filter.updateChild(a.getNode(),d,v,f,h,o);l=Ei(e,g,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function sm(t,e){return t.eventCache.isCompleteForChild(e)}function tI(t,e,n,r,s,i,o){let a=e;return r.foreach((l,u)=>{const h=Ce(n,l);sm(e,G(h))&&(a=Gu(t,a,h,u,s,i,o))}),r.foreach((l,u)=>{const h=Ce(n,l);sm(e,G(h))||(a=Gu(t,a,h,u,s,i,o))}),a}function im(t,e,n){return n.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function Ku(t,e,n,r,s,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;K(n)?u=r:u=new le(null).setTree(n,r);const h=e.serverCache.getNode();return u.children.inorderTraversal((d,f)=>{if(h.hasChild(d)){const y=e.serverCache.getNode().getImmediateChild(d),v=im(t,y,f);l=Ha(t,l,new se(d),v,s,i,o,a)}}),u.children.inorderTraversal((d,f)=>{const y=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!h.hasChild(d)&&!y){const v=e.serverCache.getNode().getImmediateChild(d),g=im(t,v,f);l=Ha(t,l,new se(d),g,s,i,o,a)}}),l}function nI(t,e,n,r,s,i,o){if(Va(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(K(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Ha(t,e,n,l.getNode().getChild(n),s,i,a,o);if(K(n)){let u=new le(null);return l.getNode().forEachChild(wr,(h,d)=>{u=u.set(new se(h),d)}),Ku(t,e,n,u,s,i,a,o)}else return e}else{let u=new le(null);return r.foreach((h,d)=>{const f=Ce(n,h);l.isCompleteForPath(f)&&(u=u.set(h,l.getNode().getChild(f)))}),Ku(t,e,n,u,s,i,a,o)}}function rI(t,e,n,r,s){const i=e.serverCache,o=fv(e,i.getNode(),i.isFullyInitialized()||K(n),i.isFiltered());return wv(t,o,n,r,vv,s)}function sI(t,e,n,r,s,i){let o;if(Va(r,n)!=null)return e;{const a=new Nh(r,e,s),l=e.eventCache.getNode();let u;if(K(n)||G(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=$a(r,Rr(e));else{const d=e.serverCache.getNode();I(d instanceof B,"serverChildren would be complete if leaf node"),h=xh(r,d)}h=h,u=t.filter.updateFullNode(l,h,i)}else{const h=G(n);let d=Sh(r,h,e.serverCache);d==null&&e.serverCache.isCompleteForChild(h)&&(d=l.getImmediateChild(h)),d!=null?u=t.filter.updateChild(l,h,d,ce(n),a,i):e.eventCache.getNode().hasChild(h)?u=t.filter.updateChild(l,h,B.EMPTY_NODE,ce(n),a,i):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=$a(r,Rr(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,i)))}return o=e.serverCache.isFullyInitialized()||Va(r,ne())!=null,Ei(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,s=new yh(r.getIndex()),i=CT(r);this.processor_=XT(i);const o=n.serverCache,a=n.eventCache,l=s.updateFullNode(B.EMPTY_NODE,o.getNode(),null),u=i.updateFullNode(B.EMPTY_NODE,a.getNode(),null),h=new br(l,o.isFullyInitialized(),s.filtersNodes()),d=new br(u,a.isFullyInitialized(),i.filtersNodes());this.viewCache_=Tl(d,h),this.eventGenerator_=new AT(this.query_)}get query(){return this.query_}}function oI(t){return t.viewCache_.serverCache.getNode()}function aI(t,e){const n=Rr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!K(e)&&!n.getImmediateChild(G(e)).isEmpty())?n.getChild(e):null}function om(t){return t.eventRegistrations_.length===0}function lI(t,e){t.eventRegistrations_.push(e)}function am(t,e,n){const r=[];if(n){I(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(i=>{const o=i.createCancelEvent(n,s);o&&r.push(o)})}if(e){let s=[];for(let i=0;i<t.eventRegistrations_.length;++i){const o=t.eventRegistrations_[i];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(i+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return r}function lm(t,e,n,r){e.type===Rt.MERGE&&e.source.queryId!==null&&(I(Rr(t.viewCache_),"We should always have a full cache before handling merges"),I(Wu(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,i=ZT(t.processor_,s,e,n,r);return JT(t.processor_,i.viewCache),I(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,Ev(t,i.changes,i.viewCache.eventCache.getNode(),null)}function cI(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ye,(i,o)=>{r.push(Ss(i,o))}),n.isFullyInitialized()&&r.push(dv(n.getNode())),Ev(t,r,n.getNode(),e)}function Ev(t,e,n,r){const s=r?[r]:t.eventRegistrations_;return bT(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ga;class uI{constructor(){this.views=new Map}}function dI(t){I(!Ga,"__referenceConstructor has already been defined"),Ga=t}function hI(){return I(Ga,"Reference.ts has not been loaded"),Ga}function fI(t){return t.views.size===0}function Th(t,e,n,r){const s=e.source.queryId;if(s!==null){const i=t.views.get(s);return I(i!=null,"SyncTree gave us an op for an invalid query."),lm(i,e,n,r)}else{let i=[];for(const o of t.views.values())i=i.concat(lm(o,e,n,r));return i}}function pI(t,e,n,r,s){const i=e._queryIdentifier,o=t.views.get(i);if(!o){let a=$a(n,s?r:null),l=!1;a?l=!0:r instanceof B?(a=xh(n,r),l=!1):(a=B.EMPTY_NODE,l=!1);const u=Tl(new br(a,l,!1),new br(r,s,!1));return new iI(e,u)}return o}function mI(t,e,n,r,s,i){const o=pI(t,e,r,s,i);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),lI(o,n),cI(o,n)}function gI(t,e,n,r){const s=e._queryIdentifier,i=[];let o=[];const a=er(t);if(s==="default")for(const[l,u]of t.views.entries())o=o.concat(am(u,n,r)),om(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||i.push(u.query));else{const l=t.views.get(s);l&&(o=o.concat(am(l,n,r)),om(l)&&(t.views.delete(s),l.query._queryParams.loadsAllData()||i.push(l.query)))}return a&&!er(t)&&i.push(new(hI())(e._repo,e._path)),{removed:i,events:o}}function Cv(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function us(t,e){let n=null;for(const r of t.views.values())n=n||aI(r,e);return n}function xv(t,e){if(e._queryParams.loadsAllData())return Il(t);{const r=e._queryIdentifier;return t.views.get(r)}}function Sv(t,e){return xv(t,e)!=null}function er(t){return Il(t)!=null}function Il(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ka;function yI(t){I(!Ka,"__referenceConstructor has already been defined"),Ka=t}function _I(){return I(Ka,"Reference.ts has not been loaded"),Ka}let vI=1;class cm{constructor(e){this.listenProvider_=e,this.syncPointTree_=new le(null),this.pendingWriteTree_=KT(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Nv(t,e,n,r,s){return DT(t.pendingWriteTree_,e,n,r,s),s?Us(t,new Ar(vh(),e,n)):[]}function wI(t,e,n,r){LT(t.pendingWriteTree_,e,n,r);const s=le.fromObject(n);return Us(t,new Ns(vh(),e,s))}function Ln(t,e,n=!1){const r=OT(t.pendingWriteTree_,e);if(FT(t.pendingWriteTree_,e)){let i=new le(null);return r.snap!=null?i=i.set(ne(),!0):Be(r.children,o=>{i=i.set(new se(o),!0)}),Us(t,new Wa(r.path,i,n))}else return[]}function kl(t,e,n){return Us(t,new Ar(wh(),e,n))}function EI(t,e,n){const r=le.fromObject(n);return Us(t,new Ns(wh(),e,r))}function CI(t,e){return Us(t,new Zi(wh(),e))}function xI(t,e,n){const r=kh(t,n);if(r){const s=Ph(r),i=s.path,o=s.queryId,a=rt(i,e),l=new Zi(Eh(o),a);return Ah(t,i,l)}else return[]}function Qu(t,e,n,r,s=!1){const i=e._path,o=t.syncPointTree_.get(i);let a=[];if(o&&(e._queryIdentifier==="default"||Sv(o,e))){const l=gI(o,e,n,r);fI(o)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const u=l.removed;if(a=l.events,!s){const h=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(i,(f,y)=>er(y));if(h&&!d){const f=t.syncPointTree_.subtree(i);if(!f.isEmpty()){const y=TI(f);for(let v=0;v<y.length;++v){const g=y[v],E=g.query,m=kv(t,g);t.listenProvider_.startListening(xi(E),Qa(t,E),m.hashFn,m.onComplete)}}}!d&&u.length>0&&!r&&(h?t.listenProvider_.stopListening(xi(e),null):u.forEach(f=>{const y=t.queryToTagMap.get(Pl(f));t.listenProvider_.stopListening(xi(f),y)}))}II(t,u)}return a}function SI(t,e,n,r){const s=kh(t,r);if(s!=null){const i=Ph(s),o=i.path,a=i.queryId,l=rt(o,e),u=new Ar(Eh(a),l,n);return Ah(t,o,u)}else return[]}function NI(t,e,n,r){const s=kh(t,r);if(s){const i=Ph(s),o=i.path,a=i.queryId,l=rt(o,e),u=le.fromObject(n),h=new Ns(Eh(a),l,u);return Ah(t,o,h)}else return[]}function um(t,e,n,r=!1){const s=e._path;let i=null,o=!1;t.syncPointTree_.foreachOnPath(s,(f,y)=>{const v=rt(f,s);i=i||us(y,v),o=o||er(y)});let a=t.syncPointTree_.get(s);a?(o=o||er(a),i=i||us(a,ne())):(a=new uI,t.syncPointTree_=t.syncPointTree_.set(s,a));let l;i!=null?l=!0:(l=!1,i=B.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((y,v)=>{const g=us(v,ne());g&&(i=i.updateImmediateChild(y,g))}));const u=Sv(a,e);if(!u&&!e._queryParams.loadsAllData()){const f=Pl(e);I(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const y=kI();t.queryToTagMap.set(f,y),t.tagToQueryMap.set(y,f)}const h=Ch(t.pendingWriteTree_,s);let d=mI(a,e,n,h,i,l);if(!u&&!o&&!r){const f=xv(a,e);d=d.concat(PI(t,e,f))}return d}function Ih(t,e,n){const s=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=rt(o,e),u=us(a,l);if(u)return u});return gv(s,e,i,n,!0)}function Us(t,e){return Tv(e,t.syncPointTree_,null,Ch(t.pendingWriteTree_,ne()))}function Tv(t,e,n,r){if(K(t.path))return Iv(t,e,n,r);{const s=e.get(ne());n==null&&s!=null&&(n=us(s,ne()));let i=[];const o=G(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,h=yv(r,o);i=i.concat(Tv(a,l,u,h))}return s&&(i=i.concat(Th(s,t,r,n))),i}}function Iv(t,e,n,r){const s=e.get(ne());n==null&&s!=null&&(n=us(s,ne()));let i=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=yv(r,o),h=t.operationForChild(o);h&&(i=i.concat(Iv(h,a,l,u)))}),s&&(i=i.concat(Th(s,t,r,n))),i}function kv(t,e){const n=e.query,r=Qa(t,n);return{hashFn:()=>(oI(e)||B.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return r?xI(t,n._path,r):CI(t,n._path);{const i=CN(s,n);return Qu(t,n,null,i)}}}}function Qa(t,e){const n=Pl(e);return t.queryToTagMap.get(n)}function Pl(t){return t._path.toString()+"$"+t._queryIdentifier}function kh(t,e){return t.tagToQueryMap.get(e)}function Ph(t){const e=t.indexOf("$");return I(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new se(t.substr(0,e))}}function Ah(t,e,n){const r=t.syncPointTree_.get(e);I(r,"Missing sync point for query tag that we're tracking");const s=Ch(t.pendingWriteTree_,e);return Th(r,n,s,null)}function TI(t){return t.fold((e,n,r)=>{if(n&&er(n))return[Il(n)];{let s=[];return n&&(s=Cv(n)),Be(r,(i,o)=>{s=s.concat(o)}),s}})}function xi(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(_I())(t._repo,t._path):t}function II(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const s=Pl(r),i=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(i)}}}function kI(){return vI++}function PI(t,e,n){const r=e._path,s=Qa(t,e),i=kv(t,n),o=t.listenProvider_.startListening(xi(e),s,i.hashFn,i.onComplete),a=t.syncPointTree_.subtree(r);if(s)I(!er(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,h,d)=>{if(!K(u)&&h&&er(h))return[Il(h).query];{let f=[];return h&&(f=f.concat(Cv(h).map(y=>y.query))),Be(d,(y,v)=>{f=f.concat(v)}),f}});for(let u=0;u<l.length;++u){const h=l[u];t.listenProvider_.stopListening(xi(h),Qa(t,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new bh(n)}node(){return this.node_}}class Rh{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ce(this.path_,e);return new Rh(this.syncTree_,n)}node(){return Ih(this.syncTree_,this.path_)}}const AI=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},dm=function(t,e,n){if(!t||typeof t!="object")return t;if(I(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return bI(t[".sv"],e,n);if(typeof t[".sv"]=="object")return RI(t[".sv"],e);I(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},bI=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:I(!1,"Unexpected server value: "+t)}},RI=function(t,e,n){t.hasOwnProperty("increment")||I(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&I(!1,"Unexpected increment value: "+r);const s=e.node();if(I(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const o=s.getValue();return typeof o!="number"?r:o+r},Pv=function(t,e,n,r){return jh(e,new Rh(n,t),r)},Av=function(t,e,n){return jh(t,new bh(e),n)};function jh(t,e,n){const r=t.getPriority().val(),s=dm(r,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,a=dm(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new Pe(a,Re(s)):t}else{const o=t;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new Pe(s))),o.forEachChild(ye,(a,l)=>{const u=jh(l,e.getImmediateChild(a),n);u!==l&&(i=i.updateImmediateChild(a,u))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Dh(t,e){let n=e instanceof se?e:new se(e),r=t,s=G(n);for(;s!==null;){const i=Cs(r.node.children,s)||{children:{},childCount:0};r=new Mh(s,r,i),n=ce(n),s=G(n)}return r}function Bs(t){return t.node.value}function bv(t,e){t.node.value=e,qu(t)}function Rv(t){return t.node.childCount>0}function jI(t){return Bs(t)===void 0&&!Rv(t)}function Al(t,e){Be(t.node.children,(n,r)=>{e(new Mh(n,t,r))})}function jv(t,e,n,r){n&&e(t),Al(t,s=>{jv(s,e,!0)})}function MI(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function mo(t){return new se(t.parent===null?t.name:mo(t.parent)+"/"+t.name)}function qu(t){t.parent!==null&&DI(t.parent,t.name,t)}function DI(t,e,n){const r=jI(n),s=Qt(t.node.children,e);r&&s?(delete t.node.children[e],t.node.childCount--,qu(t)):!r&&!s&&(t.node.children[e]=n.node,t.node.childCount++,qu(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LI=/[\[\].#$\/\u0000-\u001F\u007F]/,OI=/[\[\].#$\u0000-\u001F\u007F]/,Nc=10*1024*1024,Lh=function(t){return typeof t=="string"&&t.length!==0&&!LI.test(t)},Mv=function(t){return typeof t=="string"&&t.length!==0&&!OI.test(t)},FI=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Mv(t)},Yu=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!ah(t)||t&&typeof t=="object"&&Qt(t,".sv")},Dv=function(t,e,n,r){r&&e===void 0||bl(xl(t,"value"),e,n)},bl=function(t,e,n){const r=n instanceof se?new nT(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+hr(r));if(typeof e=="function")throw new Error(t+"contains a function "+hr(r)+" with contents = "+e.toString());if(ah(e))throw new Error(t+"contains "+e.toString()+" "+hr(r));if(typeof e=="string"&&e.length>Nc/3&&Sl(e)>Nc)throw new Error(t+"contains a string greater than "+Nc+" utf8 bytes "+hr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(Be(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!Lh(o)))throw new Error(t+" contains an invalid key ("+o+") "+hr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);rT(r,o),bl(t,a,r),sT(r)}),s&&i)throw new Error(t+' contains ".value" child '+hr(r)+" in addition to actual children.")}},UI=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const i=qi(r);for(let o=0;o<i.length;o++)if(!(i[o]===".priority"&&o===i.length-1)){if(!Lh(i[o]))throw new Error(t+"contains an invalid key ("+i[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(tT);let s=null;for(n=0;n<e.length;n++){if(r=e[n],s!==null&&vt(s,r))throw new Error(t+"contains a path "+s.toString()+" that is ancestor of another path "+r.toString());s=r}},BI=function(t,e,n,r){const s=xl(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const i=[];Be(e,(o,a)=>{const l=new se(o);if(bl(s,a,Ce(n,l)),hh(l)===".priority"&&!Yu(a))throw new Error(s+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");i.push(l)}),UI(s,i)},Oh=function(t,e,n,r){if(!Mv(n))throw new Error(xl(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},zI=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Oh(t,e,n)},Fh=function(t,e){if(G(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},WI=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Lh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!FI(n))throw new Error(xl(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Rl(t,e){let n=null;for(let r=0;r<e.length;r++){const s=e[r],i=s.getPath();n!==null&&!fh(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(s)}n&&t.eventLists_.push(n)}function Lv(t,e,n){Rl(t,n),Ov(t,r=>fh(r,e))}function Ut(t,e,n){Rl(t,n),Ov(t,r=>vt(r,e)||vt(e,r))}function Ov(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const s=t.eventLists_[r];if(s){const i=s.path;e(i)?(VI(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function VI(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();vi&&Oe("event: "+n.toString()),Fs(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HI="repo_interrupt",GI=25;class KI{constructor(e,n,r,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new $I,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=za(),this.transactionQueueTree_=new Mh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function QI(t,e,n){if(t.stats_=uh(t.repoInfo_),t.forceRestClient_||TN())t.server_=new Ba(t.repoInfo_,(r,s,i,o)=>{hm(t,r,s,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>fm(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{je(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new sn(t.repoInfo_,e,(r,s,i,o)=>{hm(t,r,s,i,o)},r=>{fm(t,r)},r=>{qI(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=bN(t.repoInfo_,()=>new PT(t.stats_,t.server_)),t.infoData_=new ST,t.infoSyncTree_=new cm({startListening:(r,s,i,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=kl(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Uh(t,"connected",!1),t.serverSyncTree_=new cm({startListening:(r,s,i,o)=>(t.server_.listen(r,i,s,(a,l)=>{const u=o(a,l);Ut(t.eventQueue_,r._path,u)}),[]),stopListening:(r,s)=>{t.server_.unlisten(r,s)}})}function Fv(t){const n=t.infoData_.getNode(new se(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function jl(t){return AI({timestamp:Fv(t)})}function hm(t,e,n,r,s){t.dataUpdateCount++;const i=new se(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(r){const l=Da(n,u=>Re(u));o=NI(t.serverSyncTree_,i,l,s)}else{const l=Re(n);o=SI(t.serverSyncTree_,i,l,s)}else if(r){const l=Da(n,u=>Re(u));o=EI(t.serverSyncTree_,i,l)}else{const l=Re(n);o=kl(t.serverSyncTree_,i,l)}let a=i;o.length>0&&(a=Is(t,i)),Ut(t.eventQueue_,a,o)}function fm(t,e){Uh(t,"connected",e),e===!1&&JI(t)}function qI(t,e){Be(e,(n,r)=>{Uh(t,n,r)})}function Uh(t,e,n){const r=new se("/.info/"+e),s=Re(n);t.infoData_.updateSnapshot(r,s);const i=kl(t.infoSyncTree_,r,s);Ut(t.eventQueue_,r,i)}function Bh(t){return t.nextWriteId_++}function YI(t,e,n,r,s){Ml(t,"set",{path:e.toString(),value:n,priority:r});const i=jl(t),o=Re(n,r),a=Ih(t.serverSyncTree_,e),l=Av(o,a,i),u=Bh(t),h=Nv(t.serverSyncTree_,e,l,u,!0);Rl(t.eventQueue_,h),t.server_.put(e.toString(),o.val(!0),(f,y)=>{const v=f==="ok";v||qe("set at "+e+" failed: "+f);const g=Ln(t.serverSyncTree_,u,!v);Ut(t.eventQueue_,e,g),Xu(t,s,f,y)});const d=Wh(t,e);Is(t,d),Ut(t.eventQueue_,d,[])}function XI(t,e,n,r){Ml(t,"update",{path:e.toString(),value:n});let s=!0;const i=jl(t),o={};if(Be(n,(a,l)=>{s=!1,o[a]=Pv(Ce(e,a),Re(l),t.serverSyncTree_,i)}),s)Oe("update() called with empty data.  Don't do anything."),Xu(t,r,"ok",void 0);else{const a=Bh(t),l=wI(t.serverSyncTree_,e,o,a);Rl(t.eventQueue_,l),t.server_.merge(e.toString(),n,(u,h)=>{const d=u==="ok";d||qe("update at "+e+" failed: "+u);const f=Ln(t.serverSyncTree_,a,!d),y=f.length>0?Is(t,e):e;Ut(t.eventQueue_,y,f),Xu(t,r,u,h)}),Be(n,u=>{const h=Wh(t,Ce(e,u));Is(t,h)}),Ut(t.eventQueue_,e,[])}}function JI(t){Ml(t,"onDisconnectEvents");const e=jl(t),n=za();zu(t.onDisconnect_,ne(),(s,i)=>{const o=Pv(s,i,t.serverSyncTree_,e);hv(n,s,o)});let r=[];zu(n,ne(),(s,i)=>{r=r.concat(kl(t.serverSyncTree_,s,i));const o=Wh(t,s);Is(t,o)}),t.onDisconnect_=za(),Ut(t.eventQueue_,ne(),r)}function ZI(t,e,n){let r;G(e._path)===".info"?r=um(t.infoSyncTree_,e,n):r=um(t.serverSyncTree_,e,n),Lv(t.eventQueue_,e._path,r)}function pm(t,e,n){let r;G(e._path)===".info"?r=Qu(t.infoSyncTree_,e,n):r=Qu(t.serverSyncTree_,e,n),Lv(t.eventQueue_,e._path,r)}function ek(t){t.persistentConnection_&&t.persistentConnection_.interrupt(HI)}function Ml(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Oe(n,...e)}function Xu(t,e,n,r){e&&Fs(()=>{if(n==="ok")e(null);else{const s=(n||"error").toUpperCase();let i=s;r&&(i+=": "+r);const o=new Error(i);o.code=s,e(o)}})}function Uv(t,e,n){return Ih(t.serverSyncTree_,e,n)||B.EMPTY_NODE}function zh(t,e=t.transactionQueueTree_){if(e||Dl(t,e),Bs(e)){const n=zv(t,e);I(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&tk(t,mo(e),n)}else Rv(e)&&Al(e,n=>{zh(t,n)})}function tk(t,e,n){const r=n.map(u=>u.currentWriteId),s=Uv(t,e,r);let i=s;const o=s.hash();for(let u=0;u<n.length;u++){const h=n[u];I(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const d=rt(e,h.path);i=i.updateChild(d,h.currentOutputSnapshotRaw)}const a=i.val(!0),l=e;t.server_.put(l.toString(),a,u=>{Ml(t,"transaction put response",{path:l.toString(),status:u});let h=[];if(u==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,h=h.concat(Ln(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Dl(t,Dh(t.transactionQueueTree_,e)),zh(t,t.transactionQueueTree_),Ut(t.eventQueue_,e,h);for(let f=0;f<d.length;f++)Fs(d[f])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{qe("transaction at "+l.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}Is(t,e)}},o)}function Is(t,e){const n=Bv(t,e),r=mo(n),s=zv(t,n);return nk(t,s,r),r}function nk(t,e,n){if(e.length===0)return;const r=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=rt(n,l.path);let h=!1,d;if(I(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)h=!0,d=l.abortReason,s=s.concat(Ln(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=GI)h=!0,d="maxretry",s=s.concat(Ln(t.serverSyncTree_,l.currentWriteId,!0));else{const f=Uv(t,l.path,o);l.currentInputSnapshot=f;const y=e[a].update(f.val());if(y!==void 0){bl("transaction failed: Data returned ",y,l.path);let v=Re(y);typeof y=="object"&&y!=null&&Qt(y,".priority")||(v=v.updatePriority(f.getPriority()));const E=l.currentWriteId,m=jl(t),p=Av(v,f,m);l.currentOutputSnapshotRaw=v,l.currentOutputSnapshotResolved=p,l.currentWriteId=Bh(t),o.splice(o.indexOf(E),1),s=s.concat(Nv(t.serverSyncTree_,l.path,p,l.currentWriteId,l.applyLocally)),s=s.concat(Ln(t.serverSyncTree_,E,!0))}else h=!0,d="nodata",s=s.concat(Ln(t.serverSyncTree_,l.currentWriteId,!0))}Ut(t.eventQueue_,n,s),s=[],h&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}Dl(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Fs(r[a]);zh(t,t.transactionQueueTree_)}function Bv(t,e){let n,r=t.transactionQueueTree_;for(n=G(e);n!==null&&Bs(r)===void 0;)r=Dh(r,n),e=ce(e),n=G(e);return r}function zv(t,e){const n=[];return Wv(t,e,n),n.sort((r,s)=>r.order-s.order),n}function Wv(t,e,n){const r=Bs(e);if(r)for(let s=0;s<r.length;s++)n.push(r[s]);Al(e,s=>{Wv(t,s,n)})}function Dl(t,e){const n=Bs(e);if(n){let r=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[r]=n[s],r++);n.length=r,bv(e,n.length>0?n:void 0)}Al(e,r=>{Dl(t,r)})}function Wh(t,e){const n=mo(Bv(t,e)),r=Dh(t.transactionQueueTree_,e);return MI(r,s=>{Tc(t,s)}),Tc(t,r),jv(r,s=>{Tc(t,s)}),n}function Tc(t,e){const n=Bs(e);if(n){const r=[];let s=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(I(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(I(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(Ln(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?bv(e,void 0):n.length=i+1,Ut(t.eventQueue_,mo(e),s);for(let o=0;o<r.length;o++)Fs(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rk(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let s=n[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function sk(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):qe(`Invalid query segment '${n}' in query '${t}'`)}return e}const mm=function(t,e){const n=ik(t),r=n.namespace;n.domain==="firebase.com"&&hn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&hn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||yN();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Q_(n.host,n.secure,r,s,e,"",r!==n.subdomain),path:new se(n.pathString)}},ik=function(t){let e="",n="",r="",s="",i="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let h=t.indexOf("/");h===-1&&(h=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(h,d)),h<d&&(s=rk(t.substring(h,d)));const f=sk(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const y=e.slice(0,u);if(y.toLowerCase()==="localhost")n="localhost";else if(y.split(".").length<=2)n=y;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),i=r}"ns"in f&&(i=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:s,namespace:i}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gm="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",ok=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let s;const i=new Array(8);for(s=7;s>=0;s--)i[s]=gm.charAt(n%64),n=Math.floor(n/64);I(n===0,"Cannot push at time == 0");let o=i.join("");if(r){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=gm.charAt(e[s]);return I(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ak{constructor(e,n,r,s){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+je(this.snapshot.exportVal())}}class lk{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ck{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return I(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(e,n,r,s){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=s}get key(){return K(this._path)?null:hh(this._path)}get ref(){return new or(this._repo,this._path)}get _queryIdentifier(){const e=Zp(this._queryParams),n=lh(e);return n==="{}"?"default":n}get _queryObject(){return Zp(this._queryParams)}isEqual(e){if(e=pt(e),!(e instanceof Ll))return!1;const n=this._repo===e._repo,r=fh(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+eT(this._path)}}function uk(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function dk(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===wr){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",s="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==Pr)throw new Error(r);if(typeof e!="string")throw new Error(s)}if(t.hasEnd()){if(t.getIndexEndName()!==Jn)throw new Error(r);if(typeof n!="string")throw new Error(s)}}else if(t.getIndex()===ye){if(e!=null&&!Yu(e)||n!=null&&!Yu(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(I(t.getIndex()instanceof gh||t.getIndex()===uv,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}class or extends Ll{constructor(e,n){super(e,n,new _h,!1)}get parent(){const e=rv(this._path);return e===null?null:new or(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class qa{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new se(e),r=eo(this.ref,e);return new qa(this._node.getChild(n),r,ye)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,s)=>e(new qa(s,eo(this.ref,r),ye)))}hasChild(e){const n=new se(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ri(t,e){return t=pt(t),t._checkNotDeleted("ref"),e!==void 0?eo(t._root,e):t._root}function eo(t,e){return t=pt(t),G(t._path)===null?zI("child","path",e):Oh("child","path",e),new or(t._repo,Ce(t._path,e))}function hk(t,e){t=pt(t),Fh("push",t._path),Dv("push",e,t._path,!0);const n=Fv(t._repo),r=ok(n),s=eo(t,r),i=eo(t,r);let o;return o=Promise.resolve(i),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function fk(t){return Fh("remove",t._path),zr(t,null)}function zr(t,e){t=pt(t),Fh("set",t._path),Dv("set",e,t._path,!1);const n=new lo;return YI(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Ic(t,e){BI("update",e,t._path);const n=new lo;return XI(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}class $h{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new ak("value",this,new qa(e.snapshotNode,new or(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new lk(this,e,n):null}matches(e){return e instanceof $h?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function pk(t,e,n,r,s){let i;if(typeof r=="object"&&(i=void 0,s=r),typeof r=="function"&&(i=r),s&&s.onlyOnce){const l=n,u=(h,d)=>{pm(t._repo,t,a),l(h,d)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new ck(n,i||void 0),a=new $h(o);return ZI(t._repo,t,a),()=>pm(t._repo,t,a)}function ym(t,e,n,r){return pk(t,"value",e,n,r)}class mk{}class gk extends mk{constructor(e){super(),this._path=e,this.type="orderByChild"}_apply(e){uk(e,"orderByChild");const n=new se(this._path);if(K(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const r=new gh(n),s=xT(e._queryParams,r);return dk(s),new Ll(e._repo,e._path,s,!0)}}function yk(t){return Oh("orderByChild","path",t),new gk(t)}function _k(t,...e){let n=pt(t);for(const r of e)n=r._apply(n);return n}dI(or);yI(or);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vk="FIREBASE_DATABASE_EMULATOR_HOST",Ju={};let wk=!1;function Ek(t,e,n,r){const s=e.lastIndexOf(":"),i=e.substring(0,s),o=uo(i);t.repoInfo_=new Q_(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),r&&(t.authTokenProvider_=r)}function Ck(t,e,n,r,s){let i=r||t.options.databaseURL;i===void 0&&(t.options.projectId||hn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Oe("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=mm(i,s),a=o.repoInfo,l;typeof process<"u"&&Dp&&(l=Dp[vk]),l?(i=`http://${l}?ns=${a.namespace}`,o=mm(i,s),a=o.repoInfo):o.repoInfo.secure;const u=new kN(t.name,t.options,e);WI("Invalid Firebase Database URL",o),K(o.path)||hn("Database URL must point to the root of a Firebase Database (not including a child path).");const h=Sk(a,t,u,new IN(t,n));return new Nk(h,t)}function xk(t,e){const n=Ju[e];(!n||n[t.key]!==t)&&hn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),ek(t),delete n[t.key]}function Sk(t,e,n,r){let s=Ju[e.name];s||(s={},Ju[e.name]=s);let i=s[t.toURLString()];return i&&hn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new KI(t,wk,n,r),s[t.toURLString()]=i,i}class Nk{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(QI(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new or(this._repo,ne())),this._rootInternal}_delete(){return this._rootInternal!==null&&(xk(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&hn("Cannot call "+e+" on a deleted database.")}}function Tk(t=b_(),e){const n=oh(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=Ux("database");r&&Ik(n,...r)}return n}function Ik(t,e,n,r={}){t=pt(t),t._checkNotDeleted("useEmulator");const s=`${e}:${n}`,i=t._repoInternal;if(t._instanceStarted){if(s===t._repoInternal.repoInfo_.host&&Ir(r,i.repoInfo_.emulatorOptions))return;hn("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&hn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new ta(ta.OWNER);else if(r.mockUserToken){const a=typeof r.mockUserToken=="string"?r.mockUserToken:Bx(r.mockUserToken,t.app.options.projectId);o=new ta(a)}uo(e)&&I_(e),Ek(i,s,r,o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kk(t){dN(Os),xs(new kr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return Ck(r,s,i,n)},"PUBLIC").setMultipleInstances(!0)),Qn(Lp,Op,t),Qn(Lp,Op,"esm2020")}sn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};sn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};kk();var Pk="firebase",Ak="12.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qn(Pk,Ak,"app");function $v(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const bk=$v,Vv=new co("auth","Firebase",$v());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ya=new sh("@firebase/auth");function Rk(t,...e){Ya.logLevel<=ie.WARN&&Ya.warn(`Auth (${Os}): ${t}`,...e)}function na(t,...e){Ya.logLevel<=ie.ERROR&&Ya.error(`Auth (${Os}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(t,...e){throw Vh(t,...e)}function Gt(t,...e){return Vh(t,...e)}function Hv(t,e,n){const r={...bk(),[e]:n};return new co("auth","Firebase",r).create(e,{appName:t.name})}function Er(t){return Hv(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Vh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Vv.create(t,...e)}function z(t,e,...n){if(!t)throw Vh(e,...n)}function tn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw na(e),new Error(e)}function pn(t,e){t||tn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zu(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function jk(){return _m()==="http:"||_m()==="https:"}function _m(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(jk()||Wx()||"connection"in navigator)?navigator.onLine:!0}function Dk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e,n){this.shortDelay=e,this.longDelay=n,pn(n>e,"Short delay should be less than long delay!"),this.isMobile=rh()||N_()}get(){return Mk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hh(t,e){pn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;tn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;tn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;tn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ok=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Fk=new go(3e4,6e4);function Gh(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function zs(t,e,n,r,s={}){return Kv(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Ls({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:l,...i};return zx()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&uo(t.emulatorConfig.host)&&(u.credentials="include"),Gv.fetch()(await Qv(t,t.config.apiHost,n,a),u)})}async function Kv(t,e,n){t._canInitEmulator=!1;const r={...Lk,...e};try{const s=new Bk(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Fo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Fo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Fo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Fo(t,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Hv(t,h,u);fn(t,h)}}catch(s){if(s instanceof ir)throw s;fn(t,"network-request-failed",{message:String(s)})}}async function Uk(t,e,n,r,s={}){const i=await zs(t,e,n,r,s);return"mfaPendingCredential"in i&&fn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Qv(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Hh(t.config,s):`${t.config.apiScheme}://${s}`;return Ok.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class Bk{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Gt(this.auth,"network-request-failed")),Fk.get())})}}function Fo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Gt(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zk(t,e){return zs(t,"POST","/v1/accounts:delete",e)}async function Xa(t,e){return zs(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Si(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Wk(t,e=!1){const n=pt(t),r=await n.getIdToken(e),s=Kh(r);z(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Si(kc(s.auth_time)),issuedAtTime:Si(kc(s.iat)),expirationTime:Si(kc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function kc(t){return Number(t)*1e3}function Kh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return na("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ma(n);return s?JSON.parse(s):(na("Failed to decode base64 JWT payload"),null)}catch(s){return na("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function vm(t){const e=Kh(t);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function to(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ir&&$k(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function $k({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Si(this.lastLoginAt),this.creationTime=Si(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ja(t){var d;const e=t.auth,n=await t.getIdToken(),r=await to(t,Xa(e,{idToken:n}));z(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(d=s.providerUserInfo)!=null&&d.length?qv(s.providerUserInfo):[],o=Gk(t.providerData,i),a=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),u=a?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new ed(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Hk(t){const e=pt(t);await Ja(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Gk(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function qv(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kk(t,e){const n=await Kv(t,{},async()=>{const r=Ls({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await Qv(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:r};return t.emulatorConfig&&uo(t.emulatorConfig.host)&&(l.credentials="include"),Gv.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Qk(t,e){return zs(t,"POST","/v2/accounts:revokeToken",Gh(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):vm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){z(e.length!==0,"internal-error");const n=vm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Kk(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ds;return r&&(z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(z(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(z(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ds,this.toJSON())}_performRefresh(){return tn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(t,e){z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class jt{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new Vk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ed(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await to(this,this.stsTokenManager.getToken(this.auth,e));return z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Wk(this,e)}reload(){return Hk(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new jt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ja(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if($t(this.auth.app))return Promise.reject(Er(this.auth));const e=await this.getIdToken();return await to(this,zk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,l=n._redirectEventId??void 0,u=n.createdAt??void 0,h=n.lastLoginAt??void 0,{uid:d,emailVerified:f,isAnonymous:y,providerData:v,stsTokenManager:g}=n;z(d&&g,e,"internal-error");const E=ds.fromJSON(this.name,g);z(typeof d=="string",e,"internal-error"),En(r,e.name),En(s,e.name),z(typeof f=="boolean",e,"internal-error"),z(typeof y=="boolean",e,"internal-error"),En(i,e.name),En(o,e.name),En(a,e.name),En(l,e.name),En(u,e.name),En(h,e.name);const m=new jt({uid:d,auth:e,email:s,emailVerified:f,displayName:r,isAnonymous:y,photoURL:o,phoneNumber:i,tenantId:a,stsTokenManager:E,createdAt:u,lastLoginAt:h});return v&&Array.isArray(v)&&(m.providerData=v.map(p=>({...p}))),l&&(m._redirectEventId=l),m}static async _fromIdTokenResponse(e,n,r=!1){const s=new ds;s.updateFromServerResponse(n);const i=new jt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ja(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];z(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?qv(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new ds;a.updateFromIdToken(r);const l=new jt({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new ed(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wm=new Map;function nn(t){pn(t instanceof Function,"Expected a class definition");let e=wm.get(t);return e?(pn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,wm.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Yv.type="NONE";const Em=Yv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ra(t,e,n){return`firebase:${t}:${e}:${n}`}class hs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ra(this.userKey,s.apiKey,i),this.fullPersistenceKey=ra("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Xa(this.auth,{idToken:e}).catch(()=>{});return n?jt._fromGetAccountInfoResponse(this.auth,n,e):null}return jt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new hs(nn(Em),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||nn(Em);const o=ra(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const h=await u._get(o);if(h){let d;if(typeof h=="string"){const f=await Xa(e,{idToken:h}).catch(()=>{});if(!f)break;d=await jt._fromGetAccountInfoResponse(e,f,h)}else d=jt._fromJSON(e,h);u!==i&&(a=d),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new hs(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new hs(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ew(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Xv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(nw(e))return"Blackberry";if(rw(e))return"Webos";if(Jv(e))return"Safari";if((e.includes("chrome/")||Zv(e))&&!e.includes("edge/"))return"Chrome";if(tw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Xv(t=Ye()){return/firefox\//i.test(t)}function Jv(t=Ye()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Zv(t=Ye()){return/crios\//i.test(t)}function ew(t=Ye()){return/iemobile/i.test(t)}function tw(t=Ye()){return/android/i.test(t)}function nw(t=Ye()){return/blackberry/i.test(t)}function rw(t=Ye()){return/webos/i.test(t)}function Qh(t=Ye()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function qk(t=Ye()){var e;return Qh(t)&&!!((e=window.navigator)!=null&&e.standalone)}function Yk(){return $x()&&document.documentMode===10}function sw(t=Ye()){return Qh(t)||tw(t)||rw(t)||nw(t)||/windows phone/i.test(t)||ew(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iw(t,e=[]){let n;switch(t){case"Browser":n=Cm(Ye());break;case"Worker":n=`${Cm(Ye())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Os}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jk(t,e={}){return zs(t,"GET","/v2/passwordPolicy",Gh(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zk=6;class eP{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??Zk,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tP{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xm(this),this.idTokenSubscription=new xm(this),this.beforeStateQueue=new Xk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Vv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=nn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await hs.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Xa(this,{idToken:e}),r=await jt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if($t(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ja(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Dk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if($t(this.app))return Promise.reject(Er(this));const n=e?pt(e):null;return n&&z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return $t(this.app)?Promise.reject(Er(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return $t(this.app)?Promise.reject(Er(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(nn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Jk(this),n=new eP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new co("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Qk(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&nn(e)||this._popupRedirectResolver;z(n,this,"argument-error"),this.redirectPersistenceManager=await hs.create(this,[nn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(z(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=iw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if($t(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&Rk(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function qh(t){return pt(t)}class xm{constructor(e){this.auth=e,this.observer=null,this.addObserver=Zx(n=>this.observer=n)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function nP(t){Yh=t}function rP(t){return Yh.loadJS(t)}function sP(){return Yh.gapiScript}function iP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oP(t,e){const n=oh(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Ir(i,e??{}))return s;fn(s,"already-initialized")}return n.initialize({options:e})}function aP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(nn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function lP(t,e,n){const r=qh(t);z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=ow(e),{host:o,port:a}=cP(e),l=a===null?"":`:${a}`,u={url:`${i}//${o}${l}/`},h=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){z(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),z(Ir(u,r.config.emulator)&&Ir(h,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=h,r.settings.appVerificationDisabledForTesting=!0,uo(o)?I_(`${i}//${o}${l}`):uP()}function ow(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function cP(t){const e=ow(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Sm(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Sm(o)}}}function Sm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function uP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aw{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return tn("not implemented")}_getIdTokenResponse(e){return tn("not implemented")}_linkToIdToken(e,n){return tn("not implemented")}_getReauthenticationResolver(e){return tn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fs(t,e){return Uk(t,"POST","/v1/accounts:signInWithIdp",Gh(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dP="http://localhost";class jr extends aw{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new jr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):fn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new jr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return fs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,fs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,fs(e,n)}buildRequest(){const e={requestUri:dP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ls(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo extends lw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn extends yo{constructor(){super("facebook.com")}static credential(e){return jr._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pn.credential(e.oauthAccessToken)}catch{return null}}}Pn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Pn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An extends yo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return jr._fromParams({providerId:An.PROVIDER_ID,signInMethod:An.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return An.credentialFromTaggedObject(e)}static credentialFromError(e){return An.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return An.credential(n,r)}catch{return null}}}An.GOOGLE_SIGN_IN_METHOD="google.com";An.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends yo{constructor(){super("github.com")}static credential(e){return jr._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bn.credential(e.oauthAccessToken)}catch{return null}}}bn.GITHUB_SIGN_IN_METHOD="github.com";bn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn extends yo{constructor(){super("twitter.com")}static credential(e,n){return jr._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Rn.credentialFromTaggedObject(e)}static credentialFromError(e){return Rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Rn.credential(n,r)}catch{return null}}}Rn.TWITTER_SIGN_IN_METHOD="twitter.com";Rn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await jt._fromIdTokenResponse(e,r,s),o=Nm(r);return new ks({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Nm(r);return new ks({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Nm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za extends ir{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Za.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Za(e,n,r,s)}}function cw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Za._fromErrorAndOperation(t,i,e,r):i})}async function hP(t,e,n=!1){const r=await to(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ks._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fP(t,e,n=!1){const{auth:r}=t;if($t(r.app))return Promise.reject(Er(r));const s="reauthenticate";try{const i=await to(t,cw(r,s,e,t),n);z(i.idToken,r,"internal-error");const o=Kh(i.idToken);z(o,r,"internal-error");const{sub:a}=o;return z(t.uid===a,r,"user-mismatch"),ks._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&fn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pP(t,e,n=!1){if($t(t.app))return Promise.reject(Er(t));const r="signIn",s=await cw(t,r,e),i=await ks._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function mP(t,e,n,r){return pt(t).onIdTokenChanged(e,n,r)}function gP(t,e,n){return pt(t).beforeAuthStateChanged(e,n)}const el="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(el,"1"),this.storage.removeItem(el),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yP=1e3,_P=10;class dw extends uw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=sw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Yk()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,_P):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},yP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}dw.type="LOCAL";const vP=dw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw extends uw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}hw.type="SESSION";const fw=hw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ol(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),l=await wP(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ol.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const u=Xh("",20);s.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const f=d;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(h),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(){return window}function CP(t){Kt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pw(){return typeof Kt().WorkerGlobalScope<"u"&&typeof Kt().importScripts=="function"}async function xP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function SP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function NP(){return pw()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mw="firebaseLocalStorageDb",TP=1,tl="firebaseLocalStorage",gw="fbase_key";class _o{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Fl(t,e){return t.transaction([tl],e?"readwrite":"readonly").objectStore(tl)}function IP(){const t=indexedDB.deleteDatabase(mw);return new _o(t).toPromise()}function td(){const t=indexedDB.open(mw,TP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(tl,{keyPath:gw})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(tl)?e(r):(r.close(),await IP(),e(await td()))})})}async function Tm(t,e,n){const r=Fl(t,!0).put({[gw]:e,value:n});return new _o(r).toPromise()}async function kP(t,e){const n=Fl(t,!1).get(e),r=await new _o(n).toPromise();return r===void 0?null:r.value}function Im(t,e){const n=Fl(t,!0).delete(e);return new _o(n).toPromise()}const PP=800,AP=3;class yw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await td(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>AP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return pw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ol._getInstance(NP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await xP(),!this.activeServiceWorker)return;this.sender=new EP(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||SP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await td();return await Tm(e,el,"1"),await Im(e,el),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Tm(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>kP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Im(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Fl(s,!1).getAll();return new _o(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),PP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}yw.type="LOCAL";const bP=yw;new go(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RP(t,e){return e?nn(e):(z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh extends aw{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return fs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return fs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return fs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function jP(t){return pP(t.auth,new Jh(t),t.bypassAuthState)}function MP(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),fP(n,new Jh(t),t.bypassAuthState)}async function DP(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),hP(n,new Jh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return jP;case"linkViaPopup":case"linkViaRedirect":return DP;case"reauthViaPopup":case"reauthViaRedirect":return MP;default:fn(this.auth,"internal-error")}}resolve(e){pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LP=new go(2e3,1e4);class ns extends _w{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ns.currentPopupAction&&ns.currentPopupAction.cancel(),ns.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){pn(this.filter.length===1,"Popup operations only handle one event");const e=Xh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Gt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Gt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ns.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Gt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,LP.get())};e()}}ns.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OP="pendingRedirect",sa=new Map;class FP extends _w{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=sa.get(this.auth._key());if(!e){try{const r=await UP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}sa.set(this.auth._key(),e)}return this.bypassAuthState||sa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function UP(t,e){const n=WP(e),r=zP(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function BP(t,e){sa.set(t._key(),e)}function zP(t){return nn(t._redirectPersistence)}function WP(t){return ra(OP,t.config.apiKey,t.name)}async function $P(t,e,n=!1){if($t(t.app))return Promise.reject(Er(t));const r=qh(t),s=RP(r,e),o=await new FP(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VP=10*60*1e3;class HP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!GP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!vw(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Gt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=VP&&this.cachedEventUids.clear(),this.cachedEventUids.has(km(e))}saveEventToCache(e){this.cachedEventUids.add(km(e)),this.lastProcessedEventTime=Date.now()}}function km(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function vw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function GP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return vw(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KP(t,e={}){return zs(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,qP=/^https?/;async function YP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await KP(t);for(const n of e)try{if(XP(n))return}catch{}fn(t,"unauthorized-domain")}function XP(t){const e=Zu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!qP.test(n))return!1;if(QP.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JP=new go(3e4,6e4);function Pm(){const t=Kt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ZP(t){return new Promise((e,n)=>{var s,i,o;function r(){Pm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Pm(),n(Gt(t,"network-request-failed"))},timeout:JP.get()})}if((i=(s=Kt().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=Kt().gapi)!=null&&o.load)r();else{const a=iP("iframefcb");return Kt()[a]=()=>{gapi.load?r():n(Gt(t,"network-request-failed"))},rP(`${sP()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ia=null,e})}let ia=null;function eA(t){return ia=ia||ZP(t),ia}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tA=new go(5e3,15e3),nA="__/auth/iframe",rA="emulator/auth/iframe",sA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},iA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function oA(t){const e=t.config;z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Hh(e,rA):`https://${t.config.authDomain}/${nA}`,r={apiKey:e.apiKey,appName:t.name,v:Os},s=iA.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ls(r).slice(1)}`}async function aA(t){const e=await eA(t),n=Kt().gapi;return z(n,t,"internal-error"),e.open({where:document.body,url:oA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:sA,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Gt(t,"network-request-failed"),a=Kt().setTimeout(()=>{i(o)},tA.get());function l(){Kt().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},cA=500,uA=600,dA="_blank",hA="http://localhost";class Am{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function fA(t,e,n,r=cA,s=uA){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l={...lA,width:r.toString(),height:s.toString(),top:i,left:o},u=Ye().toLowerCase();n&&(a=Zv(u)?dA:n),Xv(u)&&(e=e||hA,l.scrollbars="yes");const h=Object.entries(l).reduce((f,[y,v])=>`${f}${y}=${v},`,"");if(qk(u)&&a!=="_self")return pA(e||"",a),new Am(null);const d=window.open(e||"",a,h);z(d,t,"popup-blocked");try{d.focus()}catch{}return new Am(d)}function pA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mA="__/auth/handler",gA="emulator/auth/handler",yA=encodeURIComponent("fac");async function bm(t,e,n,r,s,i){z(t.config.authDomain,t,"auth-domain-config-required"),z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Os,eventId:s};if(e instanceof lw){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ru(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries({}))o[h]=d}if(e instanceof yo){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await t._getAppCheckToken(),u=l?`#${yA}=${encodeURIComponent(l)}`:"";return`${_A(t)}?${Ls(a).slice(1)}${u}`}function _A({config:t}){return t.emulator?Hh(t,gA):`https://${t.authDomain}/${mA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pc="webStorageSupport";class vA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=fw,this._completeRedirectFn=$P,this._overrideRedirectResult=BP}async _openPopup(e,n,r,s){var o;pn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await bm(e,n,r,Zu(),s);return fA(e,i,Xh())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await bm(e,n,r,Zu(),s);return CP(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(pn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await aA(e),r=new HP(e);return n.register("authEvent",s=>(z(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Pc,{type:Pc},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[Pc];i!==void 0&&n(!!i),fn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=YP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return sw()||Jv()||Qh()}}const wA=vA;var Rm="@firebase/auth",jm="1.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function xA(t){xs(new kr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:iw(t)},u=new tP(r,s,i,l);return aP(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),xs(new kr("auth-internal",e=>{const n=qh(e.getProvider("auth").getImmediate());return(r=>new EA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qn(Rm,jm,CA(t)),Qn(Rm,jm,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SA=5*60,NA=S_("authIdTokenMaxAge")||SA;let Mm=null;const TA=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>NA)return;const s=n==null?void 0:n.token;Mm!==s&&(Mm=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function IA(t=b_()){const e=oh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=oP(t,{popupRedirectResolver:wA,persistence:[bP,vP,fw]}),r=S_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=TA(i.toString());gP(n,o,()=>o(n.currentUser)),mP(n,a=>o(a))}}const s=C_("auth");return s&&lP(n,`http://${s}`),n}function kA(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}nP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Gt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",kA().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});xA("Browser");const PA={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_FIREBASE_API_KEY:"AIzaSyBBRzpkT-9DH4F7cGyofjJrbt2DlPNjC0s",VITE_FIREBASE_APP_ID:"1:633983796288:web:ca7f0ce3a1932509a48ba5",VITE_FIREBASE_AUTH_DOMAIN:"patoda-xi-live.firebaseapp.com",VITE_FIREBASE_DATABASE_URL:"https://patoda-xi-live-default-rtdb.asia-southeast1.firebasedatabase.app",VITE_FIREBASE_MEASUREMENT_ID:"G-T52BLFZYXT",VITE_FIREBASE_MESSAGING_SENDER_ID:"633983796288",VITE_FIREBASE_PROJECT_ID:"patoda-xi-live",VITE_FIREBASE_STORAGE_BUCKET:"patoda-xi-live.firebasestorage.app"},Cn={apiKey:"AIzaSyBBRzpkT-9DH4F7cGyofjJrbt2DlPNjC0s",authDomain:"patoda-xi-live.firebaseapp.com",projectId:"patoda-xi-live",storageBucket:"patoda-xi-live.firebasestorage.app",messagingSenderId:"633983796288",appId:"1:633983796288:web:ca7f0ce3a1932509a48ba5",measurementId:"G-T52BLFZYXT",databaseURL:"https://patoda-xi-live-default-rtdb.asia-southeast1.firebasedatabase.app"},xn=(t,e="")=>{const n=PA[t];return String(n||e).trim()},Ni={apiKey:xn("VITE_FIREBASE_API_KEY",Cn.apiKey),authDomain:xn("VITE_FIREBASE_AUTH_DOMAIN",Cn.authDomain),projectId:xn("VITE_FIREBASE_PROJECT_ID",Cn.projectId),storageBucket:xn("VITE_FIREBASE_STORAGE_BUCKET",Cn.storageBucket),messagingSenderId:xn("VITE_FIREBASE_MESSAGING_SENDER_ID",Cn.messagingSenderId),appId:xn("VITE_FIREBASE_APP_ID",Cn.appId),measurementId:xn("VITE_FIREBASE_MEASUREMENT_ID",Cn.measurementId),databaseURL:xn("VITE_FIREBASE_DATABASE_URL",Cn.databaseURL)};let Ac=null,Wr=null,It=!1;const AA=!!(Ni.apiKey&&Ni.projectId&&Ni.appId);AA&&(Ac=A_(Ni),IA(Ac),Ni.databaseURL&&(Wr=Tk(Ac),It=!0));const bA="2026-04-08",RA=/^\d{4}-\d{2}-\d{2}$/,jA=/^player-(?:[1-9]|[12]\d|30)$/,MA=t=>String(t||"").trim().toLowerCase(),DA=t=>{const e=new Set,n=[];return t.forEach(r=>{const s=String(r||"").trim();if(!s)return;const i=MA(s);e.has(i)||(e.add(i),n.push(s))}),n},Ul=t=>typeof t=="string"&&RA.test(t),ww=t=>Ul(t)&&t>=bA,Dm=t=>t==null?"":String(t).trim()||"",LA=()=>typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():`match-${Date.now()}-${Math.random().toString(16).slice(2)}`,no=t=>t&&typeof t.toDate=="function"?Ft(t.toDate()):Ft(t),OA=t=>(t==null?void 0:t.status)==="no-match"?"No match":typeof(t==null?void 0:t.score)=="string"&&t.score.trim()?t.score.trim():(t==null?void 0:t.winnerTeam)==="teamA"?"Team A won":(t==null?void 0:t.winnerTeam)==="teamB"?"Team B won":"Match recorded",FA=()=>[],Ew=t=>t.reduce((e,n)=>{if(!(n!=null&&n.loserCaptain))return e;const r=Number(n.penalty)||0;return r<=0||(e[n.loserCaptain]=(e[n.loserCaptain]||0)+r),e},{}),Cw=t=>!t||typeof t!="object"||Array.isArray(t)?{}:Object.entries(t).reduce((e,[n,r])=>{const s=Array.isArray(r==null?void 0:r.teamA)?r.teamA.filter(Boolean).map(String):[],i=Array.isArray(r==null?void 0:r.teamB)?r.teamB.filter(Boolean).map(String):[],o=Number(r==null?void 0:r.generationCount),a=s.length+i.length>0?1:0;return e[n]={...r,weekId:(r==null?void 0:r.weekId)||n,date:Ul(r==null?void 0:r.date)?r.date:"",generationCount:Number.isFinite(o)&&o>=0?o:a,teamA:s,teamB:i},e},{}),UA=(t,e={})=>Cw({[t]:{...e,weekId:t}})[t]||null,BA=t=>{if(!t||typeof t!="object"||Array.isArray(t))return{};const e={};return Object.entries(t).forEach(([n,r])=>{const s=Array.isArray(r==null?void 0:r.dailyCaptains)?r.dailyCaptains.filter(a=>ww(a==null?void 0:a.date)).map(a=>({...a,date:a.date,teamA:Dm(a==null?void 0:a.teamA),teamB:Dm(a==null?void 0:a.teamB)})).filter(a=>a.teamA||a.teamB):[];if(s.length===0)return;const i=[],o=[];s.forEach(a=>{a!=null&&a.teamA&&!i.includes(a.teamA)&&i.push(a.teamA),a!=null&&a.teamB&&!o.includes(a.teamB)&&o.push(a.teamB)}),e[n]={...r,usedCaptains:{teamA:i,teamB:o},dailyCaptains:s}}),e},Ti=t=>Array.isArray(t)?t.map(e=>{const n=no(e==null?void 0:e.date);return{...e,id:String((e==null?void 0:e.id)||LA()),date:n,weekId:String((e==null?void 0:e.weekId)||""),status:(e==null?void 0:e.status)==="no-match"?"no-match":"played",teamA:Array.isArray(e==null?void 0:e.teamA)?e.teamA.filter(Boolean).map(String):[],teamB:Array.isArray(e==null?void 0:e.teamB)?e.teamB.filter(Boolean).map(String):[],score:OA(e),penalty:Number(e==null?void 0:e.penalty)||0,penaltyPaid:(e==null?void 0:e.penaltyPaid)===!0}}).filter(e=>ww(e.date)).map(e=>({...e,captainA:e!=null&&e.captainA?String(e.captainA):"",captainB:e!=null&&e.captainB?String(e.captainB):"",loserCaptain:e!=null&&e.loserCaptain?String(e.loserCaptain):"",winnerTeam:(e==null?void 0:e.winnerTeam)==="teamA"||(e==null?void 0:e.winnerTeam)==="teamB"?e.winnerTeam:""})):[],xw=t=>Array.isArray(t)?t.filter(e=>e&&(e.type==="credit"||e.type==="debit")).map(e=>({id:e.id||`txn-${Date.now()}`,name:String(e.name||"").trim(),date:e!=null&&e.date&&Ul(no(e.date))?no(e.date):"",weekId:String(e.weekId||"").trim(),createdAt:Number.isFinite(Number(e.createdAt))?Number(e.createdAt):0,updatedAt:Number.isFinite(Number(e.updatedAt))?Number(e.updatedAt):0,amount:e.type==="credit"?100:Number.isFinite(Number(e.amount))?Number(e.amount):0,type:e.type})).filter(e=>e.name&&e.amount>0):[],zA=(t,e)=>{const n=Array.isArray(t)?t:[],r=Array.isArray(e)?e.filter(s=>(s==null?void 0:s.type)==="credit").map(s=>s.name):[];return DA([...n,...r])},WA=t=>Array.isArray(t)?t.map(e=>{const n=xw(e==null?void 0:e.transactions);return{id:String((e==null?void 0:e.id)||`fund-archive-${Date.now()}`),date:e!=null&&e.date&&Ul(no(e.date))?no(e.date):"",weekId:String((e==null?void 0:e.weekId)||"").trim(),resetAt:Number.isFinite(Number(e==null?void 0:e.resetAt))?Number(e.resetAt):0,transactions:n}}).filter(e=>e.transactions.length>0):[],$A=t=>Array.isArray(t)?t.filter(e=>e&&typeof e=="object").map((e,n)=>({id:String(e.id||`player-${n+1}`),name:String(e.name||"").trim()})).filter(e=>!jA.test(e.id)).filter(e=>e.name):[],Uo=()=>({players:FA(),teams:{},captains:{},matches:[],stats:{},fundTransactions:[],fundArchives:[],contributionPlayers:[]}),fr=(t={})=>{const{matches:e,stats:n,...r}=t;return r},Bo=(t={})=>{const e=nd({...fr(t),matches:[]});return fr(e)},bc=(t={})=>{const e=Ti([t])[0];if(!e)return null;const{id:n,...r}=e;return{...r,date:e.date,teamA:e.teamA,teamB:e.teamB,score:e.score}},nd=(t={})=>{const e=$A(t.players),n=Cw(t.teams),r=BA(t.captains),s=Ti(t.matches),i=xw(t.fundTransactions),o=WA(t.fundArchives),a=zA(t.contributionPlayers,i);return{players:e,teams:n,captains:r,matches:s,stats:Ew(s),fundTransactions:i,fundArchives:o,contributionPlayers:a}},Lm="appState/main",Rc="matches",Sw=w.createContext(null),VA=6e3,jc=(t,e)=>({...t,matches:e,stats:Ew(e)}),si=()=>new Error("Firebase Realtime Database is not configured. Check VITE_FIREBASE_DATABASE_URL.");function HA({children:t}){const e=w.useMemo(()=>Uo(),[]),[n,r]=w.useState(fr(e)),[s,i]=w.useState([]),[o,a]=w.useState(!1),[l,u]=w.useState(""),h=w.useRef(fr(e)),d=w.useRef([]),f=w.useRef(!1),y=w.useRef(!1),v=w.useRef([]),g=w.useRef(!1),E=w.useMemo(()=>It?ri(Wr,Lm):null,[]),m=w.useMemo(()=>It?ri(Wr,Rc):null,[]),p=w.useCallback(()=>{f.current&&y.current&&a(!0)},[]),_=w.useCallback(async()=>{if(!(!It||!m||!y.current||v.current.length===0||d.current.length>0||g.current)){g.current=!0;try{await Promise.all(v.current.map(P=>{const $=bc(P);return $?zr(ri(Wr,`${Rc}/${P.id}`),$):Promise.resolve()}))}catch(P){g.current=!1,console.error("Legacy match migration failed:",P)}}},[m]);w.useEffect(()=>{h.current=n},[n]),w.useEffect(()=>{d.current=s},[s]),w.useEffect(()=>{if(!It||!E||!m){const D=fr(Uo());h.current=D,d.current=[],r(D),i([]),u("Firebase Realtime Database is not configured. Admin changes cannot be saved."),a(!0);return}a(!1),u(""),f.current=!1,y.current=!1,g.current=!1;const P=_k(m,yk("date")),$=window.setTimeout(()=>{(!f.current||!y.current)&&(a(!0),u("Firebase is taking longer than expected. Showing available data while the database keeps syncing."))},VA),te=ym(E,async D=>{try{const F=D.exists()?D.val():Uo(),W=nd({...F,matches:[]}),V=fr(W);v.current=Ti(F==null?void 0:F.matches),h.current=V,r(V),u(""),f.current=!0,p();try{D.exists()?(Object.prototype.hasOwnProperty.call(F,"matches")||Object.prototype.hasOwnProperty.call(F,"stats"))&&await Ic(E,{...Bo(V),matches:null,stats:null}):await zr(E,Bo(e))}catch(A){console.error("Realtime app state write failed:",A),u("Database data loaded, but Firebase rejected an automatic setup write. Admin changes may need database rules/configuration checked.")}await _()}catch(F){console.error("Realtime app state parsing failed:",F),u("Database data could not be read correctly. Showing an empty player roster for now."),f.current=!0,p()}},D=>{console.error("Realtime app state sync failed:",D),u("Could not sync app settings from Firebase. Please check the database connection."),f.current=!0,p()}),H=ym(P,async D=>{try{const F=[];D.forEach(V=>{F.push({id:V.key,...V.val()})});const W=Ti(F).sort((V,A)=>V.date<A.date?1:-1);d.current=W,i(W),u(""),y.current=!0,p(),D.exists()||await _()}catch(F){console.error("Realtime matches parsing failed:",F),u("Match data could not be read correctly. Showing available match data for now."),y.current=!0,p()}},D=>{console.error("Realtime matches sync failed:",D),u("Could not sync matches from Firebase. Please check the database connection."),y.current=!0,p()});return()=>{window.clearTimeout($),te(),H()}},[E,e,m,_,p]);const C=w.useCallback(async P=>{const $=jc(h.current,d.current),te=typeof P=="function"?P($):P,{matches:H,stats:D,...F}=te||{},W=nd({...$,...F,matches:d.current}),V=fr(W);if(!It||!E)throw si();return await Ic(E,{...Bo(V),matches:null,stats:null}),jc(V,d.current)},[E]),x=w.useCallback(async P=>{if(!It||!m)throw si();const $=bc(P);if(!$)throw new Error("Match payload is invalid.");const te=hk(m);return await zr(te,$),te.key},[m]),b=w.useCallback(async(P,$)=>{if(!It||!m)throw si();const te=d.current.find(F=>F.id===P),H=Ti([{...te,...$,id:P}])[0];if(!H)throw new Error(`Match "${P}" was not found.`);const D=bc(H);if(!D)throw new Error("Match payload is invalid.");await Ic(ri(Wr,`${Rc}/${P}`),D)},[m]),k=w.useCallback(async(P,$)=>{if(!It)throw si();const te=UA(P,$);if(!te)throw new Error("Team payload is invalid.");return await zr(ri(Wr,`${Lm}/teams/${P}`),te),r(H=>{const D={...H,teams:{...H.teams||{},[P]:te}};return h.current=D,D}),te},[]),S=w.useCallback(async()=>{if(!It||!E||!m)throw si();await Promise.all([fk(m),zr(E,Bo(Uo()))])},[E,m]),U=w.useMemo(()=>({...jc(n,s),isReady:o,isDatabaseConfigured:It,syncError:l,updateAppState:C,addMatch:x,updateMatch:b,saveWeeklyTeams:k,resetAppState:S}),[x,n,o,s,S,k,l,C,b]);return c.jsx(Sw.Provider,{value:U,children:t})}const ar=()=>{const t=w.useContext(Sw);if(!t)throw new Error("useAppData must be used inside AppDataProvider");return t},GA=15e3;function on(t,e,n=GA){w.useEffect(()=>{if(!t)return;const r=window.setTimeout(()=>{e("")},n);return()=>{window.clearTimeout(r)}},[n,t,e])}function KA({accessMode:t}){var P,$,te,H,D;const{players:e,teams:n,captains:r,matches:s,resetAppState:i}=ar(),[o,a]=w.useState(""),[l,u]=w.useState("success"),[h,d]=w.useState(!1),f=t==="guest",y=t==="admin";on(o,a);const v=El(),g=n[v]||null,E=(($=(P=r[v])==null?void 0:P.dailyCaptains)==null?void 0:$.find(F=>F.date===et()))||null,m=s.find(F=>ea(F.date,et())),p=E||((D=(H=(te=r[v])==null?void 0:te.dailyCaptains)==null?void 0:H.slice(-1))==null?void 0:D[0])||null,_=p!=null&&p.teamA?J(e,p.teamA):"--",C=p!=null&&p.teamB?J(e,p.teamB):"--",x=w.useMemo(()=>s.reduce((F,W)=>F+(W.penalty||0),0),[s]),b=g?g.teamA.length+g.teamB.length:0,k=w.useMemo(()=>g?Math.max(g.teamA.length,g.teamB.length):0,[g]),S=(F,W)=>F?`${W+1}. ${J(e,F)}`:"--",U=async()=>{if(!(!y||h||!window.confirm("This will reset ALL application data including players, teams, captains, and matches. Are you sure?"))){d(!0);try{await i(),u("success"),a("Application data has been reset successfully!")}catch(W){console.error("Error resetting app data:",W),u("warning"),a("Application data could not be reset. Please verify Firebase configuration and try again.")}finally{d(!1)}}};return c.jsxs("section",{children:[c.jsx("div",{className:"top-nav",children:c.jsxs("div",{children:[c.jsx("h1",{className:"page-title",children:"Dashboard"}),c.jsx("p",{className:"page-intro",children:"Quick review of Patoda XI weekly squads, captains, and money status."})]})}),c.jsxs("div",{className:"card",children:[c.jsx("h2",{className:"card-title",children:"Dashboard information"}),c.jsx("div",{className:"overflow-x-auto",children:c.jsxs("table",{className:"table",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"Metric"}),c.jsx("th",{children:"Value"})]})}),c.jsxs("tbody",{children:[c.jsxs("tr",{children:[c.jsx("td",{children:"Players"}),c.jsxs("td",{children:[e.length," members loaded"]})]}),c.jsxs("tr",{children:[c.jsx("td",{children:"Current week"}),c.jsx("td",{children:v})]}),c.jsxs("tr",{children:[c.jsx("td",{children:"Weekly team status"}),c.jsx("td",{children:g?`${b} players split into 2 teams`:"Teams not generated yet"})]}),c.jsxs("tr",{children:[c.jsx("td",{children:"Today"}),c.jsx("td",{children:m?m.status==="no-match"?"Today marked as no match":"Match recorded today":"No match recorded yet"})]}),c.jsxs("tr",{children:[c.jsx("td",{children:"Money collected"}),c.jsxs("td",{children:["Rs. ",x]})]})]})]})})]}),f?c.jsx("div",{style:{marginTop:"20px"},children:c.jsx(Cl,{title:"Contribution Payment QR"})}):null,c.jsx("div",{className:"section-grid",style:{gridTemplateColumns:"1fr",marginTop:"20px"},children:c.jsxs("div",{className:"card",children:[c.jsx("h2",{className:"card-title",children:"Current week status"}),c.jsx("div",{className:"overflow-x-auto",children:c.jsxs("table",{className:"table team-table split-team-table",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsxs("th",{children:["Team A (",g?g.teamA.length:0,") - Captain: ",c.jsx("strong",{children:_})]}),c.jsxs("th",{children:["Team B (",g?g.teamB.length:0,") - Captain: ",c.jsx("strong",{children:C})]})]})}),c.jsx("tbody",{children:g?Array.from({length:k},(F,W)=>{const V=g.teamA[W],A=g.teamB[W];return c.jsxs("tr",{children:[c.jsx("td",{className:"team-players-cell team-col-a",children:V?c.jsx("span",{className:"team-player-name",children:S(V,W)}):c.jsx("span",{className:"empty-state",children:"--"})}),c.jsx("td",{className:"team-players-cell team-col-b",children:A?c.jsx("span",{className:"team-player-name",children:S(A,W)}):c.jsx("span",{className:"empty-state",children:"--"})})]},`dashboard-team-row-${W}`)}):c.jsxs("tr",{children:[c.jsx("td",{className:"team-players-cell team-col-a",children:c.jsx("span",{className:"empty-state",children:"Not generated yet"})}),c.jsx("td",{className:"team-players-cell team-col-b",children:c.jsx("span",{className:"empty-state",children:"Not generated yet"})})]})})]})})]})}),y?c.jsxs("div",{className:"card",style:{marginTop:"24px"},children:[c.jsx("h2",{className:"card-title",children:"Application Settings"}),c.jsx("div",{className:"button-row",children:c.jsx("button",{className:"button-secondary button-small",onClick:U,disabled:h,children:h?"Resetting...":"Reset Application Data"})}),o&&c.jsx("p",{className:l==="success"?"success-text":"warning-text",style:{marginTop:"14px"},children:o})]}):null]})}function QA({existingPlayer:t,onSave:e,onCancel:n,players:r,isSubmitting:s=!1}){const[i,o]=w.useState(""),[a,l]=w.useState("");on(a,l),w.useEffect(()=>{o((t==null?void 0:t.name)||""),l("")},[t]);const u=i.trim().toLowerCase(),h=r.some(f=>f.name.trim().toLowerCase()===u&&f.id!==(t==null?void 0:t.id)),d=async f=>{if(f.preventDefault(),!u){l("Player name is required.");return}if(h){l("This player already exists.");return}await e({id:(t==null?void 0:t.id)||`player-${Date.now()}`,name:i.trim()})!==!1&&o("")};return c.jsxs("form",{className:"rounded-2xl border border-slate-300 bg-white p-4 shadow-md sm:p-5",onSubmit:d,children:[c.jsx("h2",{className:"text-lg font-extrabold text-slate-900",children:t?"Edit Player":"Add Player"}),c.jsx("p",{className:"mt-1 text-sm leading-relaxed text-slate-600",children:"Use clear names for better search and Marathi readability."}),c.jsxs("div",{className:"mt-4 space-y-2",children:[c.jsx("label",{className:"text-sm font-medium text-slate-700",htmlFor:"player-name",children:"Player name"}),c.jsx("input",{id:"player-name",type:"text",value:i,onChange:f=>o(f.target.value),placeholder:"Enter player name",className:"w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm leading-relaxed text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"})]}),a&&c.jsx("p",{className:"mt-3 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-700",children:a}),c.jsxs("div",{className:"mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap",children:[c.jsx("button",{type:"submit",disabled:s,className:"inline-flex w-full items-center justify-center rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 sm:w-auto",children:s?"Saving...":t?"Update player":"Save player"}),t&&c.jsx("button",{type:"button",disabled:s,className:"inline-flex w-full items-center justify-center rounded-xl border border-slate-300 bg-slate-100 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-200 sm:w-auto",onClick:n,children:"Cancel"})]})]})}function qA({accessMode:t}){const{players:e,updateAppState:n}=ar(),[r,s]=w.useState(null),[i,o]=w.useState(""),[a,l]=w.useState("success"),[u,h]=w.useState(!1),d=w.useRef(null),f=t==="admin";on(i,o),w.useEffect(()=>{!r||!d.current||d.current.scrollIntoView({behavior:"smooth",block:"start"})},[r]);const y=async g=>{if(!f||u)return!1;const E=r?e.map(m=>m.id===g.id?g:m):[...e,g];h(!0);try{return await n({players:E}),s(null),l("success"),o(r?"Player updated in Firebase.":"Player saved in Firebase."),!0}catch(m){return console.error("Error saving player:",m),l("warning"),o("Player could not be saved. Please verify Firebase configuration and try again."),!1}finally{h(!1)}},v=async g=>{if(!f||u||!window.confirm("Delete this player from the roster?"))return;const m=e.filter(p=>p.id!==g);h(!0);try{await n({players:m}),(r==null?void 0:r.id)===g&&s(null),l("success"),o("Player deleted from Firebase.")}catch(p){console.error("Error deleting player:",p),l("warning"),o("Player could not be deleted. Please verify Firebase configuration and try again.")}finally{h(!1)}};return c.jsxs("section",{className:"mx-auto w-full max-w-7xl space-y-4 text-slate-800 md:space-y-6",style:{fontFamily:"Inter, 'Noto Sans Devanagari', 'Nirmala UI', sans-serif"},children:[c.jsxs("div",{className:"rounded-2xl border border-slate-200 bg-white px-4 py-5 shadow-sm sm:px-6",children:[c.jsxs("div",{className:"flex flex-wrap items-end justify-between gap-3",children:[c.jsxs("div",{className:"space-y-1",children:[c.jsx("h1",{className:"text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl",children:"Players"}),c.jsx("p",{className:"text-sm leading-relaxed text-slate-600 md:text-base",children:"Add new members or edit the Firebase player roster."})]}),c.jsxs("span",{className:"inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-sm font-bold text-indigo-700",children:["Total: ",e.length]})]}),f?null:c.jsx("p",{className:"mt-4 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-sm font-semibold text-amber-700",children:"Guest mode is view only. Login as Admin to add, edit, or delete players."}),i?c.jsx("p",{className:`mt-4 rounded-lg border px-3 py-2 text-sm font-semibold ${a==="success"?"border-emerald-200 bg-emerald-50 text-emerald-700":"border-amber-200 bg-amber-50 text-amber-700"}`,children:i}):null]}),c.jsxs("div",{className:"grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6",children:[f?c.jsx("div",{ref:d,className:"scroll-mt-24 lg:col-span-1",children:c.jsx(QA,{existingPlayer:r,onSave:y,onCancel:()=>s(null),players:e,isSubmitting:u})}):null,c.jsxs("div",{className:`rounded-2xl border border-slate-300 bg-white p-4 shadow-md sm:p-5 ${f?"lg:col-span-2":"lg:col-span-3"}`,children:[c.jsx("h2",{className:"mb-4 text-lg font-extrabold text-slate-900",children:"Player Roster"}),e.length===0&&c.jsx("div",{className:"rounded-xl border border-dashed border-slate-300 bg-slate-50 px-4 py-8 text-center text-sm leading-relaxed text-slate-600",children:"No players found. Add the first member to start managing your team."}),e.length>0&&c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"player-roster-scroll space-y-3 pr-1 md:hidden",children:e.map((g,E)=>c.jsxs("article",{className:"rounded-xl border border-slate-200 bg-slate-50 p-3 shadow-sm",children:[c.jsx("p",{className:"text-xs font-medium uppercase tracking-wide text-slate-500",children:"Number"}),c.jsx("p",{className:"mt-1 text-base font-bold leading-relaxed text-slate-900",children:E+1}),c.jsx("p",{className:"text-xs font-medium uppercase tracking-wide text-slate-500",children:"Player Name"}),c.jsx("p",{className:"mt-1 break-words text-base font-bold leading-relaxed text-slate-900",children:g.name}),f?c.jsxs("div",{className:"mt-3 grid grid-cols-2 gap-2",children:[c.jsx("button",{type:"button",onClick:()=>s(g),disabled:u,className:"inline-flex items-center justify-center rounded-xl border border-indigo-200 bg-indigo-50 px-3 py-2 text-sm font-medium text-indigo-700 transition hover:bg-indigo-100",children:"Edit"}),c.jsx("button",{type:"button",onClick:()=>v(g.id),disabled:u,className:"inline-flex items-center justify-center rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-sm font-medium text-rose-700 transition hover:bg-rose-100",children:"Delete"})]}):null]},g.id))}),c.jsx("div",{className:"hidden md:block",children:c.jsx("div",{className:"player-roster-scroll overflow-x-auto rounded-xl border border-slate-200",children:c.jsxs("table",{className:"min-w-full border-separate border-spacing-0",children:[c.jsx("thead",{className:"bg-slate-100",children:c.jsxs("tr",{children:[c.jsx("th",{className:"w-24 px-4 py-3 text-left text-sm font-semibold text-slate-700",children:"Number"}),c.jsx("th",{className:"px-4 py-3 text-left text-sm font-semibold text-slate-700",children:"Name"}),c.jsx("th",{className:"w-52 px-4 py-3 text-right text-sm font-semibold text-slate-700",children:"Actions"})]})}),c.jsx("tbody",{children:e.map((g,E)=>c.jsxs("tr",{className:"bg-white",children:[c.jsx("td",{className:`px-4 py-3 text-sm font-bold text-slate-900 ${E!==e.length-1?"border-b border-slate-200":""}`,children:E+1}),c.jsx("td",{className:`px-4 py-3 text-sm font-bold leading-relaxed text-slate-900 ${E!==e.length-1?"border-b border-slate-200":""}`,children:g.name}),c.jsx("td",{className:`px-4 py-3 ${E!==e.length-1?"border-b border-slate-200":""}`,children:f?c.jsxs("div",{className:"flex flex-wrap items-center justify-end gap-2",children:[c.jsx("button",{type:"button",onClick:()=>s(g),disabled:u,className:"inline-flex min-w-20 items-center justify-center rounded-xl border border-indigo-200 bg-indigo-50 px-3 py-2 text-sm font-medium text-indigo-700 transition hover:bg-indigo-100",children:"Edit"}),c.jsx("button",{type:"button",onClick:()=>v(g.id),disabled:u,className:"inline-flex min-w-20 items-center justify-center rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-sm font-medium text-rose-700 transition hover:bg-rose-100",children:"Delete"})]}):null})]},g.id))})]})})})]})]})]})]})}const Bl=2,YA="9322070390",rd=()=>`Today's ${Bl} team-generation chances are over. You can generate teams again tomorrow.`,XA=t=>{const e=Math.max(Bl-t,0);return e===0?"Weekly teams generated successfully. This was your final team generation for today.":`Weekly teams generated successfully. ${e} team-generation chance${e===1?"":"s"} left today.`},JA=()=>`Confirm password to use 1 of today's ${Bl} team-generation chances.`,ZA=(t,e=et())=>{if(!t)return 0;const n=Ft(e),r=Ft(t.date);if(!n||n!==r)return 0;const s=Number(t.generationCount);return Number.isFinite(s)&&s>=0?s:(Array.isArray(t.teamA)?t.teamA.length:0)+(Array.isArray(t.teamB)?t.teamB.length:0)>0?1:0},e1=(t,e=et())=>{const n=ZA(t,e),r=n>=Bl;let s="";return r&&(s=rd()),{currentGenerationCount:n,hasReachedGenerationLimit:r,canGenerateTeams:!r,lockedMessage:s}},t1="अज्ञात",n1="आज सामना झाला नाही.",r1="आजचा सामना अद्याप नोंदवलेला नाही.",s1="टीम A",i1="टीम B",o1="स्थिती",a1="विजेता टीम",l1="कर्णधार",c1="पराभूत कर्णधार",u1="मॅच फी",d1="पेमेंट स्थिती",h1="बाकी आहे",f1="भरली आहे",p1=(t=new Date)=>new Intl.DateTimeFormat("mr-IN",{weekday:"long",day:"numeric",month:"long",year:"numeric"}).format(t),ii=(t,e)=>{const n=J(t,e);return n==="Unknown"?t1:n};function m1({todayMatch:t,players:e}){const n=w.useMemo(()=>{if(!t)return null;if(t.status==="no-match")return{isNoMatch:!0,statusLabel:n1,captainAName:t.captainA?ii(e,t.captainA):"--",captainBName:t.captainB?ii(e,t.captainB):"--",penaltyAmount:0,pendingFee:!1};const r=ii(e,t.loserCaptain),s=ii(e,t.captainA),i=ii(e,t.captainB);return{isNoMatch:!1,winnerLabel:t.winnerTeam==="teamA"?s1:i1,loserName:r,captainAName:s,captainBName:i,captainAResultClass:t.winnerTeam==="teamA"?"captain-win-color":"captain-loss-color",captainBResultClass:t.winnerTeam==="teamB"?"captain-win-color":"captain-loss-color",penaltyAmount:t.penalty||0,pendingFee:t.penaltyPaid!==!0}},[e,t]);return c.jsxs("section",{className:"card match-details-widget",children:[c.jsxs("div",{className:"match-details-header",children:[c.jsx("p",{className:"match-details-date",children:p1(new Date)}),c.jsx("h2",{className:"card-title",children:"Match Details"})]}),!n&&c.jsx("p",{className:"empty-state",children:r1}),n?c.jsxs("div",{className:"match-details-body",children:[c.jsxs("div",{className:"match-details-row",children:[c.jsx("span",{className:"match-details-label",children:n.isNoMatch?o1:a1}),c.jsx("strong",{className:"match-details-value",children:n.isNoMatch?n.statusLabel:n.winnerLabel})]}),c.jsxs("div",{className:"match-details-row",children:[c.jsx("span",{className:"match-details-label",children:l1}),c.jsx("strong",{className:"match-details-value",children:n.isNoMatch?`${n.captainAName} / ${n.captainBName}`:c.jsxs(c.Fragment,{children:[c.jsx("span",{className:n.captainAResultClass,children:n.captainAName})," / ",c.jsx("span",{className:n.captainBResultClass,children:n.captainBName})]})})]}),n.isNoMatch?null:c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"match-details-row",children:[c.jsx("span",{className:"match-details-label",children:c1}),c.jsx("strong",{className:"match-details-value captain-loss-color",children:n.loserName})]}),c.jsxs("div",{className:"match-details-row",children:[c.jsx("span",{className:"match-details-label",children:u1}),c.jsx("strong",{className:"match-details-value",children:`₹${n.penaltyAmount}`})]}),c.jsxs("div",{className:"match-details-row",children:[c.jsx("span",{className:"match-details-label",children:d1}),c.jsx("strong",{className:`match-details-value ${n.pendingFee?"pending":"paid"}`,children:n.pendingFee?h1:f1})]})]})]}):null]})}const me=t=>String(t??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),Om=t=>t?t.status==="no-match"?"No payment needed":t.penaltyPaid===!0?"Paid":"Unpaid":"Not recorded",g1=({captainAName:t,captainBName:e,players:n=[],match:r=null})=>r?r.status==="no-match"?{winningCaptainName:"No Match",losingCaptainName:"No Match",paymentStatusLabel:Om(r),matchStatusLabel:"No match",winningCaptainClass:"neutral",losingCaptainClass:"neutral"}:{winningCaptainName:r.winnerTeam==="teamA"?t:e,losingCaptainName:r.loserCaptain?J(n,r.loserCaptain):"--",paymentStatusLabel:Om(r),matchStatusLabel:r.winnerTeam==="teamA"?"Team A":"Team B",winningCaptainClass:"win",losingCaptainClass:"loss"}:{winningCaptainName:"Not recorded",losingCaptainName:"Not recorded",paymentStatusLabel:"Not recorded",matchStatusLabel:"Result pending",winningCaptainClass:"neutral",losingCaptainClass:"neutral"},y1=({title:t,weekId:e,date:n,captainAName:r,captainBName:s,players:i=[],match:o=null})=>{const a=g1({captainAName:r,captainBName:s,players:i,match:o}),l=Ke(n);return`
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <title>${me(t)}</title>
        <style>
          :root {
            color-scheme: light;
            font-family: Arial, sans-serif;
          }

          body {
            margin: 0;
            padding: 20px;
            color: #0f172a;
            background: #f8fafc;
          }

          .sheet {
            max-width: 860px;
            margin: 0 auto;
            background: #ffffff;
            border: 1px solid #cbd5e1;
            border-radius: 20px;
            padding: 24px;
          }

          .hero {
            display: flex;
            justify-content: space-between;
            gap: 20px;
            align-items: flex-start;
            margin-bottom: 24px;
            padding-bottom: 20px;
            border-bottom: 2px solid #e2e8f0;
          }

          .hero h1 {
            margin: 0 0 8px;
            font-size: 28px;
          }

          .hero p {
            margin: 4px 0;
            color: #475569;
            font-size: 15px;
          }

          .pill {
            display: inline-block;
            margin-top: 8px;
            padding: 8px 14px;
            border-radius: 999px;
            background: #e0e7ff;
            color: #312e81;
            font-weight: 700;
          }

          .summary-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 16px;
          }

          .card {
            border: 1px solid #e2e8f0;
            border-radius: 16px;
            padding: 16px;
            background: #f8fafc;
          }

          .card h2 {
            margin: 0 0 12px;
            font-size: 18px;
          }

          .meta-row {
            display: flex;
            justify-content: space-between;
            gap: 16px;
            padding: 10px 0;
            border-bottom: 1px solid #e2e8f0;
          }

          .meta-row:last-child {
            border-bottom: 0;
            padding-bottom: 0;
          }

          .meta-row strong {
            text-align: right;
          }

          .value-win {
            color: #15803d;
          }

          .value-loss {
            color: #dc2626;
          }

          .value-neutral {
            color: #334155;
          }

          .footer-note {
            margin-top: 24px;
            color: #475569;
            font-size: 13px;
          }

          @media print {
            body {
              background: #ffffff;
              padding: 0;
            }

            .sheet {
              border: 0;
              border-radius: 0;
              padding: 0;
            }
          }
        </style>
      </head>
      <body>
        <main class="sheet">
          <header class="hero">
            <div>
              <h1>${me(t)}</h1>
              <p>Week: ${me(e||"--")}</p>
              <p>Date: ${me(Ke(n))}</p>
              <span class="pill">Day summary</span>
            </div>
            <div>
              <p>Match status: <strong>${me(a.matchStatusLabel)}</strong></p>
              <p>Penalty status: <strong>${me(a.paymentStatusLabel)}</strong></p>
            </div>
          </header>

          <section class="summary-grid">
            <article class="card">
              <h2>Day Result</h2>
              <div class="meta-row">
                <span>Result Date</span>
                <strong>${me(l)}</strong>
              </div>
              <div class="meta-row">
                <span>Winning Captain</span>
                <strong class="value-${me(a.winningCaptainClass)}">${me(a.winningCaptainName)}</strong>
              </div>
              <div class="meta-row">
                <span>Losing Captain</span>
                <strong class="value-${me(a.losingCaptainClass)}">${me(a.losingCaptainName)}</strong>
              </div>
            </article>

            <article class="card">
              <h2>Selected Captains</h2>
              <div class="meta-row">
                <span>Captain Date</span>
                <strong>${me(l)}</strong>
              </div>
              <div class="meta-row">
                <span>Team A Captain</span>
                <strong>${me(r)}</strong>
              </div>
              <div class="meta-row">
                <span>Team B Captain</span>
                <strong>${me(s)}</strong>
              </div>
            </article>
          </section>

          <p class="footer-note">Use the print dialog and choose "Save as PDF" to keep this weekly history summary.</p>
        </main>
      </body>
    </html>
  `},Fm=({teamName:t,playerIds:e=[],captainId:n="",players:r=[]})=>`
  <article class="team-card">
    <div class="team-card-header">
      <div>
        <h2>${me(t)}</h2>
        <p>Captain: <strong>${me(n?J(r,n):"--")}</strong></p>
      </div>
      <span class="team-count">${e.length} players</span>
    </div>
    <ol class="player-list">
      ${e.map(s=>{const i=String(s)===String(n),o=J(r,s);return`
            <li class="${i?"captain-player":""}">
              <span>${me(o)}</span>
              ${i?"<strong>Captain</strong>":""}
            </li>
          `}).join("")}
    </ol>
  </article>
`,_1=({title:t,weekId:e,date:n,captainAName:r,captainBName:s,teams:i,captains:o,players:a=[]})=>{const l=(i==null?void 0:i.teamA)||[],u=(i==null?void 0:i.teamB)||[];return`
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <title>${me(t)}</title>
        <style>
          @page {
            size: A4 landscape;
            margin: 7mm;
          }

          :root {
            color-scheme: light;
            font-family: Arial, sans-serif;
          }

          html,
          body {
            margin: 0;
            padding: 0;
            color: #0f172a;
            background: #f1f5f9;
            font-size: 12px;
          }

          .sheet {
            max-width: 1120px;
            min-height: calc(210mm - 14mm);
            margin: 0 auto;
            background: #ffffff;
            border: 1px solid #cbd5e1;
            border-radius: 14px;
            padding: 12px 14px;
            display: grid;
            gap: 8px;
          }

          .hero {
            display: flex;
            justify-content: space-between;
            gap: 12px;
            align-items: flex-start;
            padding-bottom: 8px;
            border-bottom: 2px solid #e2e8f0;
          }

          .hero h1 {
            margin: 0 0 6px;
            font-size: 21px;
          }

          .hero p {
            margin: 1px 0;
            color: #475569;
            font-size: 12px;
          }

          .pill {
            display: inline-block;
            margin-top: 4px;
            padding: 5px 10px;
            border-radius: 999px;
            background: #dbeafe;
            color: #1d4ed8;
            font-weight: 700;
            font-size: 11px;
          }

          .header-meta {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            align-items: center;
            justify-content: flex-end;
          }

          .team-card {
            border: 1px solid #e2e8f0;
            border-radius: 12px;
            padding: 10px;
            background: #f8fafc;
            min-height: 100%;
            break-inside: avoid-page;
            page-break-inside: avoid;
            display: grid;
            grid-template-rows: auto 1fr;
          }

          .team-card h2 {
            margin: 0 0 6px;
            font-size: 15px;
          }

          .team-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 8px;
            align-items: stretch;
            height: 100%;
          }

          .team-card-header {
            display: flex;
            justify-content: space-between;
            gap: 10px;
            align-items: flex-start;
            margin-bottom: 6px;
          }

          .team-card-header p {
            margin: 0;
            color: #475569;
            font-size: 11px;
          }

          .team-count {
            padding: 4px 8px;
            border-radius: 999px;
            background: #e2e8f0;
            color: #334155;
            font-weight: 700;
            white-space: nowrap;
            font-size: 10px;
          }

          .player-list {
            margin: 0;
            padding-left: 16px;
            display: grid;
            gap: 3px;
            align-content: start;
          }

          .player-list li {
            display: flex;
            justify-content: space-between;
            gap: 8px;
            align-items: center;
            padding: 4px 6px;
            border-radius: 7px;
            background: #ffffff;
            border: 1px solid #e2e8f0;
            font-size: 11px;
            line-height: 1.18;
          }

          .player-list li strong {
            color: #1d4ed8;
            font-size: 9px;
            text-transform: uppercase;
            flex: 0 0 auto;
          }

          .captain-player {
            border-color: #93c5fd !important;
            background: #eff6ff !important;
          }

          .footer-note {
            margin-top: 0;
            color: #475569;
            font-size: 10px;
          }

          @media print {
            body {
              background: #ffffff;
              padding: 0;
            }

            .sheet {
              max-width: none;
              border: 0;
              border-radius: 0;
              padding: 0;
              gap: 6px;
            }

            .team-grid,
            .team-card {
              break-inside: avoid-page;
              page-break-inside: avoid;
            }
          }

          @media (max-width: 760px) {
            .team-grid {
              grid-template-columns: 1fr;
            }
          }
        </style>
      </head>
      <body>
        <main class="sheet">
          <header class="hero">
            <div>
              <h1>${me(t)}</h1>
              <p>Week: ${me(e||"--")}</p>
              <p>Date: ${me(Ke(n))}</p>
              <span class="pill">Captain team sheet</span>
            </div>
            <div class="header-meta">
              <span class="pill">Team A Captain: ${me(r)}</span>
              <span class="pill">Team B Captain: ${me(s)}</span>
            </div>
          </header>

          <section class="team-grid">
            ${Fm({teamName:"Team A",playerIds:l,captainId:o==null?void 0:o.teamA,players:a})}
            ${Fm({teamName:"Team B",playerIds:u,captainId:o==null?void 0:o.teamB,players:a})}
          </section>

          <p class="footer-note">Use the print dialog and choose "Save as PDF" to share this team sheet.</p>
        </main>
      </body>
    </html>
  `},Nw=t=>{if(typeof window>"u"||typeof document>"u")return!1;const e=document.getElementById("patoda-print-frame");e&&e.remove();const n=document.createElement("iframe");n.id="patoda-print-frame",n.title="Patoda XI PDF Preview",n.setAttribute("aria-hidden","true"),n.style.position="fixed",n.style.width="0",n.style.height="0",n.style.border="0",n.style.right="0",n.style.bottom="0",document.body.appendChild(n);const r=n.contentWindow;if(!r)return n.remove(),!1;const s=()=>{window.setTimeout(()=>{n.parentNode&&n.parentNode.removeChild(n)},1e3)};return r.onafterprint=s,r.document.open(),r.document.write(t),r.document.close(),window.setTimeout(()=>{r.focus(),r.print()},250),!0},v1=({match:t,players:e=[]})=>{if(typeof window>"u"||!t)return!1;const n=t.captainA?J(e,t.captainA):"--",r=t.captainB?J(e,t.captainB):"--";return Nw(y1({title:"Patoda XI Day Summary",weekId:t.weekId,date:t.date,captainAName:n,captainBName:r,players:e,match:t}))},w1=({date:t,weekId:e,captains:n,teams:r,players:s=[],match:i=null})=>{if(typeof window>"u"||!n||!r)return!1;const o=n.teamA?J(s,n.teamA):"--",a=n.teamB?J(s,n.teamB):"--";return Nw(_1({title:"Patoda XI Captain Team Sheet",weekId:e,date:t,captainAName:o,captainBName:a,teams:r,captains:n,players:s}))},Um=100,E1="Ubed Shaikh",C1="उबेद शेख",Bm=`${E1} (${C1})`,x1="ubbus313-3@okaxis",zm=t=>({weekId:t,usedCaptains:{teamA:[],teamB:[]},dailyCaptains:[]}),zo=(t,e)=>e?!t||t.status==="no-match"||!t.winnerTeam||!t.loserCaptain?"captain-neutral-color":e===t.loserCaptain?"captain-loss-color":"captain-win-color":"";function S1({accessMode:t}){var Zh,ef,tf,nf;const{players:e,teams:n,captains:r,matches:s,addMatch:i,updateAppState:o,saveWeeklyTeams:a}=ar(),[l,u]=w.useState("A"),[h,d]=w.useState(""),[f,y]=w.useState("success"),[v,g]=w.useState(!1),[E,m]=w.useState(""),[p,_]=w.useState(!1),[C,x]=w.useState(""),[b,k]=w.useState("success"),[S,U]=w.useState(""),[P,$]=w.useState(null),te=w.useRef(null);on(h,d),on(C,x),on(S,U);const H=El(),D=n[H]||null,F=(P==null?void 0:P.weekId)===H?P:r[H]||zm(H),W=s.find(j=>ea(j.date,et())),V=((Zh=F.dailyCaptains)==null?void 0:Zh.find(j=>j.date===et()))||null,A=((tf=(ef=F.dailyCaptains)==null?void 0:ef.slice(-1))==null?void 0:tf[0])||null,O=V||A,L=t==="admin",oe=V?J(e,V.teamA):"--",pe=V?J(e,V.teamB):"--",yn=O!=null&&O.teamA?J(e,O.teamA):"--",xt=O!=null&&O.teamB?J(e,O.teamB):"--",_n=w.useMemo(()=>D?Math.max(D.teamA.length,D.teamB.length):0,[D]),Ze=(j,X)=>j?`${X+1}. ${J(e,j)}`:"--",{currentGenerationCount:vn,hasReachedGenerationLimit:Ws,canGenerateTeams:N,lockedMessage:R}=w.useMemo(()=>e1(D),[D]);w.useEffect(()=>{!L||!R||(y("warning"),d(j=>j||R))},[L,R]),w.useEffect(()=>{$(null)},[H]);const Y=w.useMemo(()=>{var ae,De;if(!D)return{teamA:0,teamB:0};const j=((ae=F.usedCaptains)==null?void 0:ae.teamA)||[],X=((De=F.usedCaptains)==null?void 0:De.teamB)||[];return{teamA:D.teamA.filter(qt=>!j.includes(qt)).length,teamB:D.teamB.filter(qt=>!X.includes(qt)).length}},[D,F]),Z=w.useMemo(()=>[et(),Au()].map(j=>{var X;return{date:j,formatted:Ke(j),isToday:j===et(),isTomorrow:j===Au(),captains:((X=F.dailyCaptains)==null?void 0:X.find(ae=>ae.date===j))||null}}),[F.dailyCaptains]),xe=w.useMemo(()=>!!D&&!!V&&!W,[D,V,W]),mt=w.useMemo(()=>!!D&&!W,[D,W]),$s=()=>{if(!L){y("warning"),d("Only admin can generate weekly teams."),g(!1);return}if(Ws){y("warning"),d(rd()),g(!1);return}m(""),g(!0)},ze=()=>{g(!1),m("")},St=async j=>{var ae;if(j.preventDefault(),p)return;const X=E.trim();if(ze(),X!==YA){y("warning"),d('Incorrect admin password. Click "Generate Weekly Teams" to try again.');return}if(_(!0),Ws){y("warning"),d(rd()),_(!1);return}try{const De=vx(e),qt=vn+1,Vs=(((ae=F.dailyCaptains)==null?void 0:ae.length)||0)>0,rf={...r},Aw=zm(H);delete rf[H],await a(H,{weekId:H,date:et(),generationCount:qt,...De}),await o({captains:rf}),$(Aw),y("success"),d(XA(qt)),k("success"),x(Vs?"Captain selections were refreshed for the newly generated teams. Please choose fresh captains for this week.":"New teams are ready. Please choose captains for today or tomorrow."),window.setTimeout(()=>{var sf;(sf=te.current)==null||sf.scrollIntoView({behavior:"smooth",block:"start"})},180)}catch(De){console.error("Error generating weekly teams:",De),y("warning"),d("Teams could not be generated. Please verify Firebase configuration and try again.")}finally{_(!1)}},Tw=async j=>{var qt;if(!L){k("warning"),x("Only admin can select captains.");return}if(!D){k("warning"),x("Please generate weekly teams before selecting captains.");return}if(!xp(j)){k("warning"),x("Captain can only be selected for today or tomorrow.");return}if((qt=F.dailyCaptains)==null?void 0:qt.find(Vs=>Vs.date===j)){k("warning"),x("Captains have already been selected for this day.");return}const ae=wx(D,F.usedCaptains);if(!ae){k("warning"),x("No available captain candidates remain for one or both teams this week.");return}const De={...F,weekId:H,usedCaptains:{teamA:[...F.usedCaptains.teamA||[],ae.teamA],teamB:[...F.usedCaptains.teamB||[],ae.teamB]},dailyCaptains:[...F.dailyCaptains||[],{date:j,teamA:ae.teamA,teamB:ae.teamB}]};try{await o({captains:{...r,[H]:De}}),$(De),k("success"),x(`Captains selected successfully for ${Ke(j)}.`)}catch(Vs){console.error("Error selecting captains:",Vs),k("warning"),x("Captains could not be saved. Please verify Firebase configuration and try again.")}},Iw=async()=>{if(!L){U("Only admin can record matches.");return}if(!xe){U("A match cannot be recorded right now. Please check teams and today's captains.");return}const j=l==="A"?"teamA":"teamB",X=l==="A"?V.teamB:V.teamA;try{await i({date:et(),weekId:H,teamA:D.teamA,teamB:D.teamB,score:l==="A"?"Team A won":"Team B won",captainA:V.teamA,captainB:V.teamB,winnerTeam:j,loserCaptain:X,penalty:Um,penaltyPaid:!1}),U(`Match recorded. ₹${Um} penalty assigned to ${J(e,X)}.`)}catch(ae){console.error("Error recording match:",ae),U("Match could not be recorded. Please verify Firebase configuration and try again.")}},kw=async()=>{if(!L){U("Only admin can record matches.");return}if(!mt){U("A no-match entry cannot be recorded right now. Please check today's data.");return}try{await i({date:et(),weekId:H,status:"no-match",teamA:D.teamA,teamB:D.teamB,score:"No match",captainA:(V==null?void 0:V.teamA)||"",captainB:(V==null?void 0:V.teamB)||"",winnerTeam:"",loserCaptain:"",penalty:0,penaltyPaid:!0}),U("No match was recorded for today.")}catch(j){console.error("Error recording no-match day:",j),U("No-match status could not be recorded. Please verify Firebase configuration and try again.")}},Pw=j=>{if(!D||!j){k("warning"),x("Captain team sheet is not ready yet.");return}const X=w1({date:j.date,weekId:H,captains:j,teams:D,players:e});k(X?"success":"warning"),x(X?`Captain team sheet opened for ${Ke(j.date)}. Choose "Save as PDF" to share it.`:"PDF preview could not be prepared. Please try again.")};return c.jsxs("section",{children:[c.jsx("div",{className:"top-nav",children:c.jsxs("div",{children:[c.jsx("h1",{className:"page-title",children:"Match Center"}),c.jsx("p",{className:"page-intro",children:"Run the full weekly workflow here: generate teams, select captains, and record today's result."})]})}),c.jsxs("div",{className:"section-grid",style:{gridTemplateColumns:"1fr",gap:"18px"},children:[c.jsxs("div",{className:"card",children:[c.jsx("h2",{className:"card-title",children:"1. Weekly Teams"}),c.jsxs("p",{className:"pill",children:["Current week: ",H]}),c.jsxs("p",{className:"pill",style:{marginTop:"10px"},children:["Members available: ",e.length]}),c.jsx("div",{className:"button-row",style:{marginTop:"14px"},children:c.jsx("button",{className:"button-primary button-small",type:"button",onClick:$s,disabled:!L||!N||v||p,children:"Generate Weekly Teams"})}),L?null:c.jsx("p",{className:"warning-text",style:{marginTop:"12px"},children:"Login as admin to generate weekly teams."}),h?c.jsx("p",{className:f==="success"?"success-text":"warning-text",style:{marginTop:"14px"},children:h}):null,v?c.jsxs("div",{className:"team-password-panel",children:[c.jsx("h3",{id:"team-password-title",className:"card-title",children:"Enter Admin Password"}),c.jsx("p",{className:"page-intro",style:{marginBottom:"12px"},children:JA()}),c.jsxs("form",{className:"team-password-form",onSubmit:St,children:[c.jsx("label",{className:"input-label",htmlFor:"team-generate-password",children:"Admin Password"}),c.jsx("input",{id:"team-generate-password",type:"password",value:E,onChange:j=>m(j.target.value),placeholder:"Enter admin password",autoFocus:!0,required:!0}),c.jsxs("div",{className:"button-row team-password-actions",style:{marginTop:"8px"},children:[c.jsx("button",{className:"button-primary button-small",type:"submit",disabled:p,children:"Generate Teams"}),c.jsx("button",{className:"button-secondary button-small",type:"button",onClick:ze,disabled:p,children:"Cancel"})]})]})]}):null,c.jsx("div",{className:"overflow-x-auto",style:{marginTop:"18px"},children:c.jsxs("table",{className:"table team-table split-team-table",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsxs("th",{children:["Team A (",D?D.teamA.length:0,") - Captain: ",c.jsx("strong",{children:yn})]}),c.jsxs("th",{children:["Team B (",D?D.teamB.length:0,") - Captain: ",c.jsx("strong",{children:xt})]})]})}),c.jsx("tbody",{children:D?Array.from({length:_n},(j,X)=>{const ae=D.teamA[X],De=D.teamB[X];return c.jsxs("tr",{children:[c.jsx("td",{className:"team-players-cell team-col-a",children:ae?c.jsx("span",{className:"team-player-name",children:Ze(ae,X)}):c.jsx("span",{className:"empty-state",children:"--"})}),c.jsx("td",{className:"team-players-cell team-col-b",children:De?c.jsx("span",{className:"team-player-name",children:Ze(De,X)}):c.jsx("span",{className:"empty-state",children:"--"})})]},`match-center-team-row-${X}`)}):c.jsxs("tr",{children:[c.jsx("td",{className:"team-players-cell team-col-a",children:c.jsx("span",{className:"empty-state",children:"Not generated yet"})}),c.jsx("td",{className:"team-players-cell team-col-b",children:c.jsx("span",{className:"empty-state",children:"Not generated yet"})})]})})]})})]}),c.jsxs("div",{className:"card",ref:te,children:[c.jsx("h2",{className:"card-title",children:"2. Captains"}),D?c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"button-row",style:{marginBottom:"14px"},children:[c.jsxs("span",{className:"status-pill",children:["Team A available: ",Y.teamA]}),c.jsxs("span",{className:"status-pill",children:["Team B available: ",Y.teamB]})]}),C?c.jsx("p",{className:b==="success"?"success-text":"warning-text",style:{marginTop:"14px"},children:C}):null,c.jsx("div",{className:"section-grid",style:{gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",gap:"12px"},children:Z.map(j=>{const X=!j.captains&&xp(j.date),ae=s.find(De=>ea(De.date,j.date))||null;return c.jsxs("div",{className:`card ${j.isToday?"today-highlight":""} ${!X&&!j.captains?"disabled-card":""}`,children:[c.jsxs("h3",{className:"card-title",children:[j.formatted,j.isToday?" (Today)":"",j.isTomorrow&&!j.isToday?" (Tomorrow)":""]}),j.captains?c.jsxs("div",{children:[c.jsxs("p",{children:["Team A:"," ",c.jsx("strong",{className:zo(ae,j.captains.teamA),children:J(e,j.captains.teamA)})]}),c.jsxs("p",{children:["Team B:"," ",c.jsx("strong",{className:zo(ae,j.captains.teamB),children:J(e,j.captains.teamB)})]}),c.jsx("button",{className:"button-secondary button-small",type:"button",onClick:()=>Pw(j.captains),"data-guest-allowed":"true",children:L?"Share Captain PDF":"Open Captain PDF"})]}):c.jsx("button",{className:"button-primary button-small",type:"button",onClick:()=>Tw(j.date),disabled:!L||!X,children:"Select Captains"})]},j.date)})}),c.jsxs("div",{style:{marginTop:"20px"},children:[c.jsx("h3",{className:"card-title",children:"Current Week Captain History"}),((nf=F.dailyCaptains)==null?void 0:nf.length)>0?c.jsx("div",{className:"captain-history-list",children:F.dailyCaptains.slice().sort((j,X)=>j.date<X.date?-1:1).map(j=>{const X=s.find(ae=>ea(ae.date,j.date))||null;return c.jsxs("article",{className:"captain-history-card",children:[c.jsx("div",{className:"captain-history-card-top",children:c.jsx("strong",{className:"captain-history-card-date",children:Ke(j.date)})}),c.jsxs("div",{className:"captain-history-card-grid",children:[c.jsxs("div",{className:"captain-history-field",children:[c.jsx("span",{children:"Team A Captain"}),c.jsx("strong",{className:zo(X,j.teamA),children:J(e,j.teamA)})]}),c.jsxs("div",{className:"captain-history-field",children:[c.jsx("span",{children:"Team B Captain"}),c.jsx("strong",{className:zo(X,j.teamB),children:J(e,j.teamB)})]})]})]},j.date)})}):c.jsx("p",{className:"empty-state",children:"No captain selections recorded yet this week."})]})]}):c.jsx("p",{className:"empty-state",children:"Generate weekly teams first to unlock captain selection."})]}),c.jsx(m1,{todayMatch:W,players:e}),c.jsxs("div",{className:"card",children:[c.jsx("h2",{className:"card-title",children:"3. Today's Match"}),D?null:c.jsx("p",{className:"empty-state",children:"Generate this week's teams first."}),!V&&D?c.jsx("p",{className:"empty-state",children:"Select captains for today before recording a match."}):null,W?c.jsx("div",{children:W.status==="no-match"?c.jsxs(c.Fragment,{children:[c.jsx("p",{className:"success-text",children:"Today is marked as a no-match day."}),c.jsxs("p",{children:["Status: ",c.jsx("strong",{children:"No match"})]})]}):c.jsxs(c.Fragment,{children:[c.jsx("p",{className:"success-text",children:"A match is already recorded today."}),c.jsxs("p",{children:["Winner: ",c.jsx("strong",{children:W.winnerTeam==="teamA"?"Team A":"Team B"})]}),c.jsxs("p",{children:["Captain A:"," ",c.jsx("strong",{className:W.winnerTeam==="teamA"?"captain-win-color":"captain-loss-color",children:J(e,W.captainA)})]}),c.jsxs("p",{children:["Captain B:"," ",c.jsx("strong",{className:W.winnerTeam==="teamB"?"captain-win-color":"captain-loss-color",children:J(e,W.captainB)})]}),c.jsxs("p",{children:["Penalty paid by: ",c.jsx("strong",{children:J(e,W.loserCaptain)})]})]})}):D?c.jsxs("div",{className:"input-group",children:[c.jsxs("div",{children:[c.jsx("p",{className:"card-title",children:"Teams and captains"}),c.jsx("div",{className:"overflow-x-auto",children:c.jsxs("table",{className:"table team-table split-team-table",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsxs("th",{children:["Team A - Captain: ",c.jsx("strong",{children:oe})]}),c.jsxs("th",{children:["Team B - Captain: ",c.jsx("strong",{children:pe})]})]})}),c.jsx("tbody",{children:Array.from({length:_n},(j,X)=>{const ae=D.teamA[X],De=D.teamB[X];return c.jsxs("tr",{children:[c.jsx("td",{className:"team-players-cell team-col-a",children:ae?c.jsx("span",{className:"team-player-name",children:Ze(ae,X)}):c.jsx("span",{className:"empty-state",children:"--"})}),c.jsx("td",{className:"team-players-cell team-col-b",children:De?c.jsx("span",{className:"team-player-name",children:Ze(De,X)}):c.jsx("span",{className:"empty-state",children:"--"})})]},`match-center-row-${X}`)})})]})})]}),c.jsxs("div",{children:[c.jsx("label",{className:"input-label",style:{fontWeight:700},children:"Winning team"}),c.jsxs("select",{value:l,onChange:j=>u(j.target.value),disabled:!V,children:[c.jsxs("option",{value:"A",children:["Team A (",oe,")"]}),c.jsxs("option",{value:"B",children:["Team B (",pe,")"]})]})]}),c.jsxs("div",{className:"button-row",children:[c.jsx("button",{className:"button-primary button-small",type:"button",onClick:Iw,disabled:!L||!xe,children:"Record Match"}),c.jsx("button",{className:"button-secondary button-small",type:"button",onClick:kw,disabled:!L||!mt,children:"No Match Today"})]})]}):null,S?c.jsx("p",{className:"success-text",style:{marginTop:"16px"},children:S}):null]}),L?null:c.jsxs("div",{className:"card match-payment-card",children:[c.jsx("h2",{className:"card-title",children:"Contribution Payment QR"}),c.jsxs("p",{className:"page-intro",style:{marginBottom:"12px"},children:["Pay contribution to ",Bm]}),c.jsxs("div",{style:{display:"grid",gap:"10px",width:"fit-content"},children:[c.jsx("img",{className:"fund-qr-image",src:y_,alt:`UPI QR for ${Bm}`}),c.jsxs("p",{className:"fund-upi-id",children:["UPI ID: ",x1]})]})]})]})]})}function N1({match:t,players:e,canEdit:n=!1}){const{updateMatch:r}=ar(),[s,i]=w.useState(!1),[o,a]=w.useState(""),l=t.status==="no-match",u=l?"":t.winnerTeam==="teamA"?"captain-win-color":"captain-loss-color",h=l?"":t.winnerTeam==="teamB"?"captain-win-color":"captain-loss-color",d=async y=>{if(n){i(!0),a("");try{await r(t.id,{penaltyPaid:y})}catch(v){console.error("Error updating penalty status:",v),a("Payment status could not be saved.")}finally{i(!1)}}},f=t.penaltyPaid!==void 0?t.penaltyPaid:!1;return c.jsxs("div",{className:`match-card ${l||f?"paid":"unpaid"}`,children:[c.jsx("div",{className:"match-header",children:c.jsx("div",{className:"match-week",children:t.weekId})}),c.jsxs("div",{className:"match-details",children:[c.jsxs("div",{className:"match-summary-row",children:[c.jsx("span",{className:"match-summary-label",children:"Date:"}),c.jsx("strong",{className:"match-summary-value",children:Ke(t.date)})]}),c.jsxs("div",{className:"match-summary-row",children:[c.jsx("span",{className:"match-summary-label",children:"Winner:"}),c.jsx("strong",{className:"match-summary-value",children:l?"No Match":t.winnerTeam==="teamA"?"Team A":"Team B"})]}),c.jsxs("div",{className:"captains-info",children:[c.jsxs("div",{className:"captain-item",children:[c.jsx("span",{className:"label",children:"Captain A:"}),c.jsx("span",{className:`name ${u}`,children:t.captainA?J(e,t.captainA):"--"})]}),c.jsxs("div",{className:"captain-item",children:[c.jsx("span",{className:"label",children:"Captain B:"}),c.jsx("span",{className:`name ${h}`,children:t.captainB?J(e,t.captainB):"--"})]})]}),l?c.jsx("div",{className:"penalty-section",children:c.jsxs("div",{className:"penalty-info",children:[c.jsx("span",{className:"label",children:"Status:"}),c.jsx("span",{className:"amount",children:t.score||"No match"})]})}):c.jsxs("div",{className:"penalty-section",children:[c.jsxs("div",{className:"penalty-info",children:[c.jsx("span",{className:"label",children:"Penalty:"}),c.jsxs("span",{className:"amount",children:["₹",t.penalty]}),c.jsxs("span",{className:"loser",children:["(",J(e,t.loserCaptain),")"]})]}),n?c.jsxs("div",{className:"penalty-status",children:[c.jsx("label",{className:"status-label",children:"Payment Status:"}),c.jsxs("select",{value:f?"paid":"not-paid",onChange:y=>d(y.target.value==="paid"),disabled:s,className:`status-select ${f?"paid":"unpaid"}`,children:[c.jsx("option",{value:"not-paid",children:"Not Paid"}),c.jsx("option",{value:"paid",children:"Paid"})]})]}):c.jsxs("div",{className:"penalty-status",children:[c.jsx("span",{className:"status-label",children:"Payment Status:"}),c.jsx("span",{className:`status-select ${f?"paid":"unpaid"}`,children:f?"Paid":"Not Paid"})]}),o?c.jsx("p",{className:"warning-text",children:o}):null]})]})]})}function T1({matches:t,players:e,currentWeekId:n}){const r=w.useMemo(()=>{const i=t.filter(u=>u.weekId===n&&u.status!=="no-match"&&(u.penalty||0)>0&&u.loserCaptain),o={};let a=0,l=0;return i.forEach(u=>{const h=u.loserCaptain,d=u.penaltyPaid!==void 0?u.penaltyPaid:!1;o[h]||(o[h]={playerId:h,totalPenalties:0,paidCount:0,unpaidCount:0,matches:[]}),o[h].totalPenalties+=u.penalty,o[h].matches.push({id:u.id,date:u.date,penalty:u.penalty,paid:d}),d?(o[h].paidCount+=1,a+=u.penalty):(o[h].unpaidCount+=1,l+=u.penalty)}),{playerPenalties:Object.values(o),totalPaid:a,totalUnpaid:l,totalCollected:a,totalOutstanding:l}},[t,n]),s=w.useMemo(()=>r.playerPenalties.sort((i,o)=>o.totalPenalties-i.totalPenalties),[r.playerPenalties]);return c.jsxs("div",{className:"match-fee-sidebar",children:[c.jsxs("div",{className:"sidebar-header",children:[c.jsx("h3",{children:"Match Fee Tracker"}),c.jsx("p",{className:"week-indicator",children:n})]}),c.jsxs("div",{className:"fee-summary",children:[c.jsxs("div",{className:"summary-item collected",children:[c.jsx("span",{className:"label",children:"Collected"}),c.jsxs("span",{className:"amount",children:["₹",r.totalCollected]})]}),c.jsxs("div",{className:"summary-item outstanding",children:[c.jsx("span",{className:"label",children:"Outstanding"}),c.jsxs("span",{className:"amount",children:["₹",r.totalOutstanding]})]})]}),c.jsxs("div",{className:"player-penalties",children:[c.jsx("h4",{children:"Player Penalties"}),s.length>0?c.jsx("div",{className:"penalty-list",children:s.map(i=>c.jsxs("div",{className:"player-penalty-card",children:[c.jsxs("div",{className:"player-header",children:[c.jsx("span",{className:"player-name",children:J(e,i.playerId)}),c.jsxs("span",{className:"total-amount",children:["₹",i.totalPenalties]})]}),c.jsxs("div",{className:"penalty-breakdown",children:[c.jsxs("span",{className:"paid-count paid",children:["Paid: ",i.paidCount]}),c.jsxs("span",{className:"unpaid-count unpaid",children:["Unpaid: ",i.unpaidCount]})]}),c.jsx("div",{className:"match-details",children:i.matches.map(o=>c.jsxs("div",{className:`match-item ${o.paid?"paid":"unpaid"}`,children:[c.jsx("span",{className:"match-date",children:new Date(o.date).toLocaleDateString()}),c.jsxs("span",{className:"match-amount",children:["₹",o.penalty]}),c.jsx("span",{className:`status-badge ${o.paid?"paid":"unpaid"}`,children:o.paid?"✓":"✗"})]},o.id))})]},i.playerId))}):c.jsx("p",{className:"no-data",children:"No penalties recorded this week"})]})]})}const Wm=(t,e)=>e?t.status==="no-match"||!t.winnerTeam||!t.loserCaptain?"captain-neutral-color":e===t.loserCaptain?"captain-loss-color":"captain-win-color":"";function I1({accessMode:t}){const{players:e,matches:n}=ar(),[r,s]=w.useState("all"),[i,o]=w.useState("all"),a=t==="admin",l=t==="guest",u=w.useMemo(()=>Array.from(new Set(n.map(g=>g.weekId))).sort((g,E)=>g<E?1:-1),[n]),h=w.useMemo(()=>n.filter(g=>{const E=r==="all"||g.weekId===r,m=[g.captainA,g.captainB,g.loserCaptain,...g.teamA,...g.teamB],p=i==="all"||m.includes(i);return E&&p}),[n,r,i]),d=w.useMemo(()=>{const g={};return n.forEach(E=>{g[E.weekId]||(g[E.weekId]=[]),g[E.weekId].push(E)}),g},[n]),f=w.useMemo(()=>e.find(g=>g.id===i)||null,[i,e]),y=w.useMemo(()=>i==="all"?[]:h.filter(g=>[g.captainA,g.captainB,...g.teamA,...g.teamB].includes(i)).slice().sort((g,E)=>g.date<E.date?1:-1).slice(0,15).map(g=>{const E=g.captainA===i||g.teamA.includes(i),m=g.captainA===i||g.captainB===i,p=E?"Team A":"Team B",_=g.status==="no-match"?"No Match":E&&g.winnerTeam==="teamA"||!E&&g.winnerTeam==="teamB"?"Win":"Loss";return{id:g.id,date:g.date,weekId:g.weekId,teamLabel:p,roleLabel:m?"Captain":"Player",resultLabel:_,paymentLabel:g.penaltyPaid===!0?"Paid":g.status==="no-match"?"Not needed":"Pending"}}),[h,i]),v=El();return c.jsxs("div",{className:"history-layout",children:[c.jsx("div",{className:"history-main",children:c.jsxs("section",{children:[c.jsx("div",{className:"top-nav",children:c.jsxs("div",{children:[c.jsx("h1",{className:"page-title",children:"Match History"}),c.jsx("p",{className:"page-intro",children:"Browse all past matches with penalty tracking and payment status."})]})}),c.jsx("div",{className:"card",children:c.jsxs("div",{className:"button-row",style:{flexWrap:"wrap"},children:[c.jsx("label",{className:"input-label",htmlFor:"week-filter",children:"Filter by week"}),c.jsxs("select",{id:"week-filter",value:r,onChange:g=>s(g.target.value),children:[c.jsx("option",{value:"all",children:"All weeks"}),u.map(g=>c.jsx("option",{value:g,children:g},g))]}),c.jsx("label",{className:"input-label",htmlFor:"player-filter",children:"Filter by player"}),c.jsxs("select",{id:"player-filter",value:i,onChange:g=>o(g.target.value),children:[c.jsx("option",{value:"all",children:"All players"}),e.map(g=>c.jsx("option",{value:g.id,children:g.name},g.id))]})]})}),c.jsxs("div",{className:"card",style:{marginTop:"20px"},children:[c.jsx("h2",{className:"card-title",children:"Match History"}),h.length>0?c.jsx("div",{className:"matches-grid",children:h.slice().sort((g,E)=>g.date<E.date?1:-1).map(g=>c.jsx(N1,{match:g,players:e,canEdit:a},g.id))}):c.jsx("p",{className:"empty-state",children:"No matches found for the selected filters."})]}),c.jsxs("div",{className:"card",style:{marginTop:"20px"},children:[c.jsx("h2",{className:"card-title",children:"Player History - Last 15 Dates"}),f?y.length>0?c.jsx("div",{className:"weekly-date-table-wrap",children:c.jsxs("table",{className:"weekly-date-table",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"Date"}),c.jsx("th",{children:"Week"}),c.jsx("th",{children:"Team"}),c.jsx("th",{children:"Role"}),c.jsx("th",{children:"Result"}),c.jsx("th",{children:"Payment"})]})}),c.jsx("tbody",{children:y.map(g=>c.jsxs("tr",{children:[c.jsx("td",{"data-label":"Date",style:{fontWeight:800},children:Ke(g.date)}),c.jsx("td",{"data-label":"Week",children:g.weekId}),c.jsx("td",{"data-label":"Team",children:g.teamLabel}),c.jsx("td",{"data-label":"Role",children:g.roleLabel}),c.jsx("td",{"data-label":"Result",children:g.resultLabel}),c.jsx("td",{"data-label":"Payment",children:g.paymentLabel})]},g.id))})]})}):c.jsxs("p",{className:"empty-state",children:["No recent history found for ",f.name,"."]}):c.jsx("p",{className:"empty-state",children:"Select a player above to view that player's most recent 15 dates."})]}),c.jsxs("div",{className:"card",style:{marginTop:"20px"},children:[c.jsx("h2",{className:"card-title",children:"Captain History by Week"}),c.jsxs("p",{className:"captain-color-legend",children:[c.jsx("span",{className:"captain-loss-color",children:"Red"})," = Losing captain, ",c.jsx("span",{className:"captain-win-color",children:"Green"})," = Winning captain, ",c.jsx("span",{className:"captain-neutral-color",children:"Blue"})," = Captain selected but result not recorded"]}),Object.keys(d).length>0?Object.entries(d).map(([g,E])=>c.jsxs("div",{style:{marginBottom:"18px"},children:[c.jsx("p",{className:"pill",children:g}),c.jsxs("table",{className:"weekly-date-table captain-history-table",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"Date"}),c.jsx("th",{children:"Team A Captain"}),c.jsx("th",{children:"Team B Captain"}),c.jsx("th",{children:"Winner"})]})}),c.jsx("tbody",{children:E.slice().sort((m,p)=>m.date<p.date?1:-1).map(m=>c.jsxs("tr",{children:[c.jsx("td",{style:{fontWeight:800},children:Ke(m.date)}),c.jsx("td",{children:c.jsx("span",{className:Wm(m,m.captainA),style:{fontWeight:700},children:m.captainA?J(e,m.captainA):m.status==="no-match"?"No match":"--"})}),c.jsx("td",{children:c.jsx("span",{className:Wm(m,m.captainB),style:{fontWeight:700},children:m.captainB?J(e,m.captainB):m.status==="no-match"?"No match":"--"})}),c.jsx("td",{style:{fontWeight:800},children:m.status==="no-match"?"No Match":m.winnerTeam==="teamA"?"Team A":"Team B"})]},m.id))})]})]},g)):c.jsx("p",{className:"empty-state",children:"No recorded captain history yet."})]})]})}),c.jsxs("aside",{className:"history-sidebar",children:[c.jsx(T1,{matches:n,players:e,currentWeekId:v}),l?c.jsx("div",{style:{marginTop:"18px"},children:c.jsx(Cl,{title:"Guest Contribution QR"})}):null]})]})}const lr=100,k1="Ubed Shaikh",P1="उबेद शेख",A1=`${k1} (${P1})`,Se=t=>String(t||"").trim().toLowerCase(),$m=()=>typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():`${Date.now()}-${Math.random().toString(16).slice(2)}`,Sn=t=>`₹${t.toLocaleString("en-IN")}`;function b1({accessMode:t}){const{fundTransactions:e,fundArchives:n,contributionPlayers:r,updateAppState:s}=ar(),i=e,[o,a]=w.useState({name:"",amount:"",type:"debit"}),[l,u]=w.useState(""),[h,d]=w.useState(null),[f,y]=w.useState(""),[v,g]=w.useState(!1),[E,m]=w.useState(!1),[p,_]=w.useState(!1),C=t==="admin",x=et(),b=El(x),k=w.useRef(null),S=w.useRef(null);on(f,y),w.useEffect(()=>{if(typeof window>"u")return;const N=window.matchMedia("(max-width: 1100px)"),R=Y=>{m(Y.matches),Y.matches||_(!1)};return m(N.matches),N.addEventListener?N.addEventListener("change",R):N.addListener(R),()=>{N.addEventListener?N.removeEventListener("change",R):N.removeListener(R)}},[]),w.useEffect(()=>{if(typeof window>"u"||!(p||h!==null))return;const R=window.requestAnimationFrame(()=>{if(!E&&h&&k.current){const Y=window.matchMedia("(prefers-reduced-motion: reduce)").matches;k.current.scrollIntoView({behavior:Y?"auto":"smooth",block:"start"})}S.current&&S.current.focus({preventScroll:!0})});return()=>{window.cancelAnimationFrame(R)}},[h,p,E]);const U=w.useMemo(()=>{const N=[...r,...i.filter(Z=>Z.type==="credit").map(Z=>Z.name)],R=[],Y=new Set;return N.forEach(Z=>{const xe=String(Z||"").trim();if(!xe)return;const mt=Se(xe);Y.has(mt)||(Y.add(mt),R.push(xe))}),R},[r,i]),P=w.useMemo(()=>{const N=new Set;return i.forEach(R=>{R.type==="credit"&&N.add(Se(R.name))}),N},[i]),$=w.useMemo(()=>U.filter(N=>!P.has(Se(N))),[U,P]),te=w.useMemo(()=>U.reduce((N,R)=>(P.has(Se(R))?N.paid+=1:N.unpaid+=1,N),{paid:0,unpaid:0}),[U,P]),H=w.useMemo(()=>i.reduce((N,R)=>(R.type==="credit"?N.totalCredit+=R.amount:N.totalDebit+=R.amount,N),{totalCredit:0,totalDebit:0}),[i]),D=w.useMemo(()=>i.reduce((N,R)=>(R.type==="credit"?N.credit+=1:N.debit+=1,N),{credit:0,debit:0}),[i]),F=H.totalCredit-H.totalDebit,W=async(N,R="")=>{if(!C||v)return!1;g(!0);try{return await s(N),R&&y(R),!0}catch(Y){return console.error("Error saving ground expense data:",Y),y("Ground expense data could not be saved. Please verify Firebase configuration and try again."),!1}finally{g(!1)}},V=N=>{a(R=>({...R,type:N,amount:N==="credit"?String(lr):R.amount===String(lr)?"":R.amount}))},A=()=>{a({name:"",amount:"",type:"debit"}),d(null),E&&_(!1)},O=async N=>{if(N.preventDefault(),y(""),!C||v)return;const R=o.name.trim();if(!R)return;const Y=o.type==="credit"?lr:Number(o.amount);if(!Number.isFinite(Y)||Y<=0)return;const Z=h&&i.find(ze=>ze.id===h)||null,xe={id:h||$m(),name:R,date:(Z==null?void 0:Z.date)||x,weekId:(Z==null?void 0:Z.weekId)||b,createdAt:(Z==null?void 0:Z.createdAt)||Date.now(),updatedAt:Date.now(),amount:Y,type:o.type},mt=h?i.map(ze=>ze.id===h?xe:ze):[xe,...i];await W({fundTransactions:mt},h?"Transaction updated in Firebase.":"Transaction added to Firebase.")&&A()},L=N=>{d(N.id),a({name:N.name,amount:N.type==="credit"?String(lr):String(N.amount),type:N.type}),E&&_(!0)},oe=async N=>{if(y(""),!C||v)return;const R=i.filter(Z=>Z.id!==N);await W({fundTransactions:R},"Transaction deleted from Firebase.")&&h===N&&A()},pe=async N=>{if(y(""),!C||v)return;const R=Se(N);if(!R||P.has(R))return;const Y={id:$m(),name:N,date:x,weekId:b,createdAt:Date.now(),updatedAt:Date.now(),amount:lr,type:"credit"};await W({fundTransactions:[Y,...i]},`${N} marked as paid in Firebase.`)},yn=async N=>{if(y(""),!C||v)return;const R=Se(N);if(!R)return;const Y=i.some(xe=>xe.id===h&&xe.type==="credit"&&Se(xe.name)===R);await W({fundTransactions:i.filter(xe=>!(xe.type==="credit"&&Se(xe.name)===R))},`${N} marked as unpaid in Firebase.`)&&Y&&A()},xt=async N=>{if(!C||v)return;const R=Se(N);if(!R)return;const Y=window.prompt("Enter updated player name:",N);if(Y===null)return;const Z=Y.trim();if(!Z){y("Player name cannot be empty.");return}const xe=Se(Z);if(U.some(St=>Se(St)===xe&&Se(St)!==R)){y("This player already exists in contribution status.");return}const $s=i.map(St=>Se(St.name)===R?{...St,name:Z}:St),ze=r.map(St=>Se(St)===R?Z:St);await W({fundTransactions:$s,contributionPlayers:ze},`Player name updated to "${Z}".`)},_n=async N=>{if(!C||v)return;const R=Se(N);if(!R||!window.confirm(`Remove "${N}" from Player Contribution Status?`))return;const Z=i.some(ze=>ze.id===h&&Se(ze.name)===R),xe=i.filter(ze=>Se(ze.name)!==R),mt=r.filter(ze=>Se(ze)!==R);await W({fundTransactions:xe,contributionPlayers:mt},`"${N}" removed from contribution status.`)&&Z&&A()},Ze=()=>{y(""),d(null),a({name:"",amount:"",type:"debit"}),_(!0)},vn=async N=>{if(N.preventDefault(),y(""),!C||v)return;const R=l.trim();if(!R){y("Enter a player name to add in contribution status.");return}const Y=Se(R);if(U.some(mt=>Se(mt)===Y)){y("This player already exists in contribution status.");return}await W({contributionPlayers:[R,...r]},`"${R}" added to contribution status.`)&&u("")},Ws=(N=!1)=>c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"ground-expense-editor-header",children:[c.jsxs("div",{children:[c.jsx("h2",{className:"card-title",style:{marginBottom:"8px"},children:"Add / Edit Transaction"}),c.jsx("p",{className:"page-intro",style:{marginBottom:"12px"},children:"Use this for extra expenses or manual entries."})]}),N?c.jsx("button",{type:"button",className:"button-secondary button-small fund-editor-close-btn",onClick:A,disabled:v,children:"Close"}):null]}),c.jsxs("form",{className:"fund-form",onSubmit:O,children:[c.jsxs("div",{className:"input-group",children:[c.jsx("label",{className:"input-label",htmlFor:"transaction-name",children:"Name (Player / Item)"}),c.jsx("input",{ref:S,id:"transaction-name",value:o.name,onChange:R=>a(Y=>({...Y,name:R.target.value})),placeholder:"Example: Rahul / Ball / Ground Rent",disabled:v,required:!0})]}),c.jsxs("div",{className:"input-group",children:[c.jsx("label",{className:"input-label",htmlFor:"transaction-type",children:"प्रकार (Type)"}),c.jsxs("select",{id:"transaction-type",value:o.type,onChange:R=>V(R.target.value),disabled:v,children:[c.jsx("option",{value:"credit",children:"जमा (Fixed ₹100)"}),c.jsx("option",{value:"debit",children:"खर्च"})]})]}),c.jsxs("div",{className:"input-group",children:[c.jsx("label",{className:"input-label",htmlFor:"transaction-amount",children:"रक्कम (Amount)"}),c.jsx("input",{id:"transaction-amount",type:"number",min:"1",value:o.type==="credit"?lr:o.amount,onChange:R=>a(Y=>({...Y,amount:R.target.value})),disabled:v||o.type==="credit",required:!0})]}),c.jsxs("div",{className:"button-row",children:[c.jsx("button",{type:"submit",className:"button-primary",disabled:v,children:v?"Saving...":h?"Update Transaction":"Add Transaction"}),h?c.jsx("button",{type:"button",className:"button-secondary",onClick:A,disabled:v,children:"Cancel Edit"}):null]})]})]});return c.jsxs("section",{className:"ground-expense-page",children:[c.jsxs("div",{className:"card",children:[c.jsx("h1",{className:"page-title",children:"Ground Expense"}),c.jsx("p",{className:"page-intro",style:{marginBottom:"14px"},children:"This page is separate from the Players page. Add contribution players manually here and mark them Paid/Unpaid. Paid automatically adds a जमा transaction of ₹100."}),c.jsx("p",{className:"pill",style:{margin:"0 0 12px",fontWeight:800},children:"Firebase history stays saved with date-wise and week-wise records."}),c.jsxs("div",{className:"fund-summary-grid fund-summary-top-grid",children:[c.jsxs("article",{className:"fund-summary-card credit",children:[c.jsx("span",{children:"Total जमा"}),c.jsx("strong",{children:Sn(H.totalCredit)})]}),c.jsxs("article",{className:"fund-summary-card debit",children:[c.jsx("span",{children:"Total खर्च"}),c.jsx("strong",{children:Sn(H.totalDebit)})]}),c.jsxs("article",{className:"fund-summary-card balance",children:[c.jsx("span",{children:"शिल्लक"}),c.jsx("strong",{children:Sn(F)})]})]}),f?c.jsx("p",{className:"success-text",style:{margin:"12px 0 0"},children:f}):null]}),c.jsxs("div",{className:"card",children:[c.jsxs("div",{className:"top-nav",style:{marginBottom:"10px"},children:[c.jsxs("div",{children:[c.jsx("h2",{className:"card-title",style:{marginBottom:"4px"},children:"Player Contribution Status"}),c.jsx("p",{className:"page-intro",style:{margin:0},children:"Add players manually here and mark them as Paid or Unpaid."})]}),c.jsxs("div",{style:{marginLeft:"auto",display:"flex",alignItems:"center",gap:"14px",fontWeight:800},children:[c.jsxs("span",{style:{color:"#15803d"},children:["Paid: ",te.paid]}),c.jsxs("span",{style:{color:"#dc2626"},children:["Unpaid: ",te.unpaid]})]})]}),C?c.jsxs("form",{className:"ground-player-form",onSubmit:vn,children:[c.jsx("input",{value:l,onChange:N=>u(N.target.value),placeholder:"Add player name for ground contribution",disabled:v}),c.jsx("button",{type:"submit",className:"button-primary button-small",disabled:v,children:"Add Player"})]}):null,U.length===0?c.jsx("p",{className:"empty-state",children:"No contribution players yet. Admin can add them manually here."}):c.jsx("div",{className:"player-status-grid",children:U.map(N=>{const R=P.has(Se(N));return c.jsxs("article",{className:"player-status-row",children:[c.jsxs("div",{className:"player-status-meta",children:[c.jsx("p",{className:"player-status-name",children:N}),c.jsx("span",{className:`player-status-pill ${R?"paid":"unpaid"}`,children:R?"Paid":"Unpaid"})]}),c.jsxs("div",{className:"player-status-actions",children:[c.jsx("button",{type:"button",className:"button-primary button-small fund-paid-btn",onClick:()=>pe(N),disabled:!C||v||R,children:"Paid"}),c.jsx("button",{type:"button",className:"button-secondary button-small fund-unpaid-btn",onClick:()=>yn(N),disabled:!C||v||!R,children:"Unpaid"})]}),C?c.jsxs("div",{className:"player-status-actions",children:[c.jsx("button",{type:"button",className:"button-secondary button-small",onClick:()=>xt(N),disabled:v,children:"Edit Player"}),c.jsx("button",{type:"button",className:"button-primary button-small fund-delete-btn",onClick:()=>_n(N),disabled:v,children:"Remove Player"})]}):null]},N)})})]}),c.jsxs("div",{className:"card unpaid-notice-card",children:[c.jsx("h2",{className:"card-title",style:{marginBottom:"8px"},children:"Unpaid Notices"}),$.length===0?c.jsx("p",{className:"success-text",style:{margin:0},children:"All players are marked as paid."}):c.jsx("div",{className:"unpaid-notice-list",children:$.map(N=>c.jsxs("p",{className:"unpaid-notice-item",children:[c.jsx("strong",{children:N}),": ",Sn(lr)," pending. Pay it to"," ",c.jsx("strong",{children:A1}),"."]},N))})]}),C?null:c.jsx(Cl,{title:"Ground Contribution QR"}),c.jsxs("div",{className:`ground-expense-content ${C&&!E?"":"single-column"}`,children:[c.jsxs("section",{className:"card fund-main-panel",children:[c.jsxs("div",{className:"top-nav",style:{marginBottom:"10px"},children:[c.jsxs("div",{children:[c.jsx("h2",{className:"card-title",style:{marginBottom:"4px"},children:"Transactions"}),c.jsx("p",{className:"page-intro",style:{margin:0},children:"All जमा / खर्च records"})]}),c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",marginLeft:"auto"},children:[c.jsxs("p",{className:"pill",style:{margin:0,fontWeight:800},children:[c.jsxs("span",{className:"fund-count-credit",children:["जमा: ",D.credit]})," | ",c.jsxs("span",{className:"fund-count-debit",children:["खर्च: ",D.debit]})]}),C&&E?c.jsx("button",{type:"button",className:"button-primary button-small",onClick:Ze,disabled:v,children:"Add Transaction"}):null]})]}),i.length===0?c.jsx("p",{className:"empty-state",children:"No transactions yet. Add the first entry."}):c.jsx("div",{className:"fund-table-wrap",children:c.jsxs("table",{className:"table fund-table",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"Date"}),c.jsx("th",{children:"Week"}),c.jsx("th",{children:"Name"}),c.jsx("th",{children:"Amount"}),c.jsx("th",{children:"Type"}),c.jsx("th",{children:"Actions"})]})}),c.jsx("tbody",{children:i.map(N=>c.jsxs("tr",{children:[c.jsx("td",{"data-label":"Date",children:N.date?Ke(N.date):"--"}),c.jsx("td",{"data-label":"Week",children:N.weekId||"--"}),c.jsx("td",{"data-label":"Name",children:N.name}),c.jsx("td",{"data-label":"Amount",children:Sn(N.amount)}),c.jsx("td",{"data-label":"Type",children:c.jsx("span",{className:`fund-type-pill ${N.type}`,children:N.type==="credit"?"जमा":"खर्च"})}),c.jsx("td",{"data-label":"Actions",children:C?c.jsxs("div",{className:"button-row",style:{marginTop:0},children:[c.jsx("button",{type:"button",className:"button-secondary button-small",onClick:()=>L(N),disabled:v,children:"Edit"}),c.jsx("button",{type:"button",className:"button-primary button-small fund-delete-btn",onClick:()=>oe(N.id),disabled:v,children:"Delete"})]}):c.jsx("span",{className:"empty-state",children:"View only"})})]},N.id))})]})})]}),C&&!E?c.jsx("aside",{ref:k,className:"card ground-expense-side-panel",children:Ws(!1)}):null]}),c.jsxs("section",{className:"card",children:[c.jsxs("div",{className:"top-nav",style:{marginBottom:"10px"},children:[c.jsxs("div",{children:[c.jsx("h2",{className:"card-title",style:{marginBottom:"4px"},children:"Archived Ground Expense History"}),c.jsx("p",{className:"page-intro",style:{margin:0},children:"Every reset keeps the older transaction batch saved in Firebase."})]}),c.jsxs("p",{className:"pill",style:{margin:0,fontWeight:800},children:["Archives: ",n.length]})]}),n.length===0?c.jsx("p",{className:"empty-state",children:"No archived ground expense history yet."}):c.jsx("div",{className:"fund-archive-list",children:n.map(N=>{const R=N.transactions.reduce((Y,Z)=>(Z.type==="credit"?Y.credit+=Z.amount:Y.debit+=Z.amount,Y),{credit:0,debit:0});return c.jsxs("article",{className:"fund-archive-card",children:[c.jsxs("div",{className:"fund-archive-card-top",children:[c.jsx("strong",{children:N.date?Ke(N.date):"--"}),c.jsx("span",{className:"pill",children:N.weekId||"--"})]}),c.jsxs("div",{className:"fund-archive-summary",children:[c.jsxs("span",{children:["Entries: ",N.transactions.length]}),c.jsxs("span",{children:["Credit: ",Sn(R.credit)]}),c.jsxs("span",{children:["Debit: ",Sn(R.debit)]}),c.jsxs("span",{children:["Balance: ",Sn(R.credit-R.debit)]})]})]},N.id)})})]}),E&&p?c.jsx("div",{className:"fund-mobile-editor-overlay",role:"dialog","aria-modal":"true","aria-label":"Add or edit transaction",children:c.jsx("aside",{ref:k,className:"card fund-mobile-editor-panel",children:Ws(!0)})}):null]})}const R1=(t,e)=>{if(e.status==="no-match")return"No Match";const n=e.winnerTeam==="teamA"?e.captainA:e.captainB;return n?J(t,n):"--"},j1=(t,e)=>e.status==="no-match"?"No Match":J(t,e.loserCaptain),M1=t=>t.status==="no-match"?"No payment needed":t.penaltyPaid===!0?"Paid":"Unpaid",D1=t=>t.status==="no-match"?"weekly-status-neutral":t.penaltyPaid===!0?"weekly-status-paid":"weekly-status-pending";function L1({accessMode:t}){const{players:e,matches:n}=ar(),[r,s]=w.useState(""),[i,o]=w.useState("success"),a=t==="admin",l=t==="guest";on(r,s);const u=w.useMemo(()=>{const d={};return n.forEach(f=>{if(d[f.weekId]||(d[f.weekId]={matches:[],losses:{},playedMatches:0,noMatchDays:0}),d[f.weekId].matches.push(f),f.status==="no-match"){d[f.weekId].noMatchDays+=1;return}d[f.weekId].playedMatches+=1,d[f.weekId].losses[f.loserCaptain]=(d[f.weekId].losses[f.loserCaptain]||0)+f.penalty}),Object.entries(d).map(([f,y])=>{const v=y.matches.filter(m=>m.status!=="no-match"),g=v.filter(m=>m.penaltyPaid!==!0),E=Object.entries(y.losses).reduce((m,[p,_])=>_>m.amount?{playerId:p,amount:_}:m,{playerId:null,amount:0});return{weekId:f,matchesPlayed:y.playedMatches,noMatchDays:y.noMatchDays,totalMoney:v.reduce((m,p)=>m+p.penalty,0),pendingMoney:g.reduce((m,p)=>m+p.penalty,0),pendingCount:g.length,losses:y.losses,matches:y.matches.slice().sort((m,p)=>m.date<p.date?1:-1),topLoser:E}}).sort((f,y)=>f.weekId<y.weekId?1:-1)},[n]),h=d=>{if(!a){o("warning"),s("Guest mode can only open captain PDFs from the Captains section.");return}const f=v1({match:d,players:e});o(f?"success":"warning"),s(f?`Print dialog opened for ${Ke(d.date)}. Choose "Save as PDF" to download it.`:"PDF preview could not be prepared. Please try again.")};return c.jsxs("section",{children:[c.jsx("div",{className:"top-nav",children:c.jsxs("div",{children:[c.jsx("h1",{className:"page-title",children:"Weekly Summary"}),c.jsx("p",{className:"page-intro",children:"Review money totals, match counts, and top losing players by week."})]})}),r?c.jsx("div",{className:"card",style:{marginBottom:"18px",padding:"14px 20px"},children:c.jsx("p",{className:i==="success"?"success-text":"warning-text",style:{margin:0},children:r})}):null,l?c.jsx("div",{style:{marginBottom:"18px"},children:c.jsx(Cl,{title:"Guest Contribution QR"})}):null,u.length>0?c.jsx("div",{className:"section-grid",style:{gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))"},children:u.map(d=>c.jsxs("div",{className:"card weekly-summary-card",children:[c.jsx("h2",{className:"card-title",children:d.weekId}),c.jsxs("div",{className:"weekly-summary-stats",children:[c.jsxs("p",{children:["Matches played: ",d.matchesPlayed]}),c.jsxs("p",{children:["No-match days: ",d.noMatchDays]}),c.jsxs("p",{children:["Total money: ","₹"," ",d.totalMoney]}),c.jsxs("p",{children:["Pending money: ","₹"," ",d.pendingMoney," (",d.pendingCount," matches)"]}),c.jsxs("p",{children:["Top losing player:"," ",d.topLoser.playerId?`${J(e,d.topLoser.playerId)} (₹ ${d.topLoser.amount})`:"None yet"]})]}),c.jsxs("div",{style:{marginTop:"14px"},children:[c.jsx("p",{className:"card-title",children:"Date-wise details"}),c.jsx("div",{className:"weekly-date-list",children:d.matches.map(f=>{const y=M1(f),v=R1(e,f),g=j1(e,f);return c.jsxs("article",{className:"weekly-date-card",children:[c.jsxs("div",{className:"weekly-date-card-top",children:[c.jsx("strong",{className:"weekly-date-card-date",children:Ke(f.date)}),c.jsxs("div",{className:"weekly-date-card-actions",children:[c.jsx("span",{className:D1(f),children:y}),a?c.jsx("button",{type:"button",className:"button-secondary button-small",onClick:()=>h(f),children:"Print / PDF"}):null]})]}),c.jsxs("div",{className:"weekly-date-card-grid",children:[c.jsxs("div",{className:"weekly-date-field",children:[c.jsx("span",{children:"Winning Captain"}),c.jsx("strong",{className:f.status==="no-match"?"":"captain-win-color",children:v})]}),c.jsxs("div",{className:"weekly-date-field",children:[c.jsx("span",{children:"Losing Captain"}),c.jsx("strong",{className:f.status==="no-match"?"":"captain-loss-color",children:g})]})]})]},f.id)})})]}),c.jsxs("div",{style:{marginTop:"14px"},children:[c.jsx("p",{className:"card-title",children:"Losses breakdown"}),c.jsx("ul",{children:Object.keys(d.losses).length>0?Object.entries(d.losses).map(([f,y])=>c.jsxs("li",{children:[J(e,f)," - ","₹"," ",y]},f)):c.jsx("li",{className:"empty-state",children:"No penalties recorded this week yet."})})]})]},d.weekId))}):c.jsx("div",{className:"card",children:c.jsx("p",{className:"empty-state",children:"No weekly summary data available. Record a few matches first."})})]})}const O1=[{title:"1. मॅचची माहिती (Match Format)",items:["प्रत्येक टीमला 12 ओव्हर्स मिळतील","1 ओव्हर = 6 चेंडू","Powerplay: पहिल्या 4 ओव्हर्स","प्रत्येक गोलंदाज जास्तीत जास्त 3 ओव्हर्स टाकू शकतो"]},{title:"2. फलंदाजीचे नियम (Batting Rules)",items:["फलंदाज खालील प्रकारे आउट होऊ शकतो: बोल्ड, कॅच, रन आऊट","LBW लागू नाही","नो बॉल आणि वाइड बॉलला एक्स्ट्रा रन दिले जातील"]},{title:"3. गोलंदाजीचे नियम (Bowling Rules)",items:["नो बॉल परिस्थिती: पाय क्रीजच्या बाहेर, कमरेच्या वर फुल टॉस, धोकादायक बाऊन्सर, अंपायरला साइड न सांगणे, चेंडू पिचच्या बाहेर पडणे","प्रत्येक नो बॉलवर: +1 एक्स्ट्रा रन आणि पुढचा बॉल फ्री हिट असेल","वाइड बॉल: फलंदाजाच्या पोहोचेबाहेर चेंडू गेला तर +1 रन आणि बॉल पुन्हा टाकावा लागेल","एक गोलंदाज जास्तीत जास्त 3 ओव्हर्स टाकू शकतो"]},{title:"4. फिल्डिंगचे नियम (Fielding Rules)",items:["सर्व खेळाडूंनी फेअर प्ले पाळावे","बाउंड्री: 4 रन (जमिनीवरून), 6 रन (हवेतून)","जाणीवपूर्वक अडथळा आणू नये"]},{title:"5. पॉवरप्ले नियम (Powerplay Rules)",items:["पहिल्या 4 ओव्हर्स = Powerplay","या वेळेत फक्त 2–3 फिल्डर 30 यार्डच्या बाहेर ठेवता येतील"]},{title:"6. रन आणि स्कोरिंग (Runs & Scoring)",items:["रन धाव घेऊन काढले जातील","ओव्हरथ्रो असल्यास अतिरिक्त रन मिळतील","बाउंड्री: 4 = जमिनीवरून, 6 = हवेतून"]},{title:"7. सामान्य नियम (General Rules)",items:["अंपायरचा निर्णय अंतिम असेल","सर्वांनी खेळाची भावना जपावी","वाद टाळावेत"]}];function F1(){return c.jsxs("section",{className:"rules-page",children:[c.jsx("div",{className:"top-nav",children:c.jsxs("div",{children:[c.jsx("h1",{className:"page-title",children:"Rules Patoda(g)"}),c.jsx("p",{className:"page-intro",children:"गावातील 12 ओव्हर क्रिकेट सामन्याचे नियम."})]})}),c.jsx("div",{className:"rules-grid",children:O1.map(t=>c.jsxs("article",{className:"card rules-card",children:[c.jsx("h2",{className:"rules-section-title",children:t.title}),c.jsx("ul",{className:"rules-list",children:t.items.map(e=>c.jsx("li",{children:e},e))})]},t.title))})]})}const U1="9322070390",Vm=t=>t instanceof HTMLElement?!!t.closest('form, button, input, select, textarea, label, [contenteditable="true"]'):!1,Hm=t=>t instanceof HTMLElement?!!t.closest('[data-guest-allowed="true"]'):!1;function B1(){const t=Lr(),e=w.useRef(null),n=w.useRef(null),r=w.useRef(null),[s,i]=w.useState(null),[o,a]=w.useState(!1),[l,u]=w.useState(""),[h,d]=w.useState(""),{isReady:f,isDatabaseConfigured:y,syncError:v,players:g,matches:E}=ar();on(h,d),w.useEffect(()=>{e.current&&e.current.scrollTo({top:0,behavior:"auto"})},[t.pathname]),w.useEffect(()=>{if(!o)return;const S=()=>{var $,te;($=n.current)==null||$.scrollIntoView({behavior:"smooth",block:"start"}),(te=r.current)==null||te.scrollIntoView({behavior:"smooth",block:"center"})},U=window.setTimeout(S,120),P=window.visualViewport;return P&&(P.addEventListener("resize",S),P.addEventListener("scroll",S)),()=>{window.clearTimeout(U),P&&(P.removeEventListener("resize",S),P.removeEventListener("scroll",S))}},[o]);const m=s==="guest",p=t.pathname!=="/rules-patodag"&&t.pathname!=="/ground-expense",_=()=>{i("guest"),a(!1),d(""),u("")},C=S=>{if(S.preventDefault(),l.trim()!==U1){d("Incorrect password. Please try again.");return}i("admin"),a(!1),d(""),u("")},x=()=>{i(null),a(!1),u(""),d("")},b=S=>{m&&(Hm(S.target)||Vm(S.target)&&(S.preventDefault(),S.stopPropagation()))},k=S=>{m&&(Hm(S.target)||Vm(S.target)&&(S.key==="Tab"||S.key==="Escape"||(S.preventDefault(),S.stopPropagation())))};return s?c.jsxs("div",{className:"app-shell",children:[c.jsx(hx,{accessMode:s,onSwitchRole:x}),c.jsxs("main",{className:`app-main ${m?"read-only-mode":""}`,onClickCapture:b,onChangeCapture:b,onSubmitCapture:b,onKeyDownCapture:k,children:[m?c.jsx("div",{className:"readonly-banner",children:"Guest Mode: View only. Login as Admin to edit or manage data."}):null,p?c.jsx(Tx,{matches:E,players:g,resetKey:t.pathname}):null,y?v?c.jsx("div",{className:"database-banner database-banner-warning",children:v}):f?null:c.jsx("div",{className:"database-banner",children:"Loading database data..."}):c.jsx("div",{className:"database-banner database-banner-warning",children:"Firebase Realtime Database is not configured. Admin changes cannot be saved."}),c.jsx("div",{className:"route-scroll-area",ref:e,children:c.jsxs(q0,{children:[c.jsx(Tt,{path:"/",element:c.jsx(KA,{accessMode:s})}),c.jsx(Tt,{path:"/players",element:c.jsx(qA,{accessMode:s})}),c.jsx(Tt,{path:"/match-center",element:c.jsx(S1,{accessMode:s})}),c.jsx(Tt,{path:"/teams",element:c.jsx(pc,{to:"/match-center",replace:!0})}),c.jsx(Tt,{path:"/captains",element:c.jsx(pc,{to:"/match-center",replace:!0})}),c.jsx(Tt,{path:"/match",element:c.jsx(pc,{to:"/match-center",replace:!0})}),c.jsx(Tt,{path:"/history",element:c.jsx(I1,{accessMode:s})}),c.jsx(Tt,{path:"/ground-expense",element:c.jsx(b1,{accessMode:s})}),c.jsx(Tt,{path:"/weekly-summary",element:c.jsx(L1,{accessMode:s})}),c.jsx(Tt,{path:"/rules-patodag",element:c.jsx(F1,{})})]})})]})]}):c.jsx("div",{className:"auth-shell",children:c.jsxs("div",{className:`auth-card ${o?"auth-card-active":""}`,ref:n,children:[c.jsx("h1",{className:"auth-title",children:"Patoda XI Access"}),c.jsx("p",{className:"auth-subtitle",children:"Choose how you want to open the app."}),c.jsxs("div",{className:"auth-actions",children:[c.jsx("button",{type:"button",className:"button-secondary",onClick:_,children:"Continue as Guest"}),c.jsx("button",{type:"button",className:"button-primary",onClick:()=>{a(!0),d("")},children:"Login as Admin"})]}),o?c.jsxs("form",{className:"auth-form",onSubmit:C,children:[c.jsx("label",{className:"input-label",htmlFor:"admin-password",children:"Admin Password"}),c.jsx("input",{id:"admin-password",type:"password",ref:r,value:l,onChange:S=>u(S.target.value),onFocus:()=>{var S;return(S=r.current)==null?void 0:S.scrollIntoView({behavior:"smooth",block:"center"})},placeholder:"Enter admin password",autoFocus:!0,required:!0}),c.jsxs("div",{className:"auth-actions",children:[c.jsx("button",{type:"submit",className:"button-primary",children:"Unlock Admin"}),c.jsx("button",{type:"button",className:"button-secondary",onClick:()=>{a(!1),u(""),d("")},children:"Cancel"})]}),h?c.jsx("p",{className:"auth-error",children:h}):null]}):c.jsx("p",{className:"auth-note",children:"Guest can only view data. Admin can manage and update all sections."})]})})}function z1(){return c.jsx(HA,{children:c.jsx(B1,{})})}const W1=document.getElementById("root"),$1=i_(W1);$1.render(c.jsx(ng.StrictMode,{children:c.jsx(rx,{children:c.jsx(z1,{})})}));
