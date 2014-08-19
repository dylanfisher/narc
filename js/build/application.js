/*! VelocityJS.org (0.11.6). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
!function(e){"object"==typeof module&&"object"==typeof module.exports?module.exports=e(window.Velocity?void 0:require("jquery")):"function"==typeof define&&define.amd?window.Velocity?define("velocity",e):define("velocity",["jquery"],e):e(window.jQuery)}(function(e){return function(t,r,a,o){function i(e){for(var t=-1,r=e?e.length:0,a=[];++t<r;){var o=e[t];o&&a.push(o)}return a}function n(e){return v.isNode(e)?[e]:e}function s(e){var t=$.data(e,f);return null===t?o:t}function l(e){return function(t){return Math.round(t*e)*(1/e)}}function u(e,t){var r=e;return v.isString(e)?S.Easings[e]||(r=!1):r=v.isArray(e)&&1===e.length?l.apply(null,e):v.isArray(e)&&2===e.length?b.apply(null,e.concat([t])):v.isArray(e)&&4===e.length?x.apply(null,e):!1,r===!1&&(r=S.Easings[S.defaults.easing]?S.defaults.easing:g),r}function c(e){if(e)for(var t=(new Date).getTime(),r=0,a=S.State.calls.length;a>r;r++)if(S.State.calls[r]){var i=S.State.calls[r],n=i[0],l=i[2],u=i[3];u||(u=S.State.calls[r][3]=t-16);for(var f=Math.min((t-u)/l.duration,1),d=0,g=n.length;g>d;d++){var m=n[d],y=m.element;if(s(y)){var x=!1;l.display&&"none"!==l.display&&V.setPropertyValue(y,"display",l.display),l.visibility&&"hidden"!==l.visibility&&V.setPropertyValue(y,"visibility",l.visibility);for(var b in m)if("element"!==b){var P=m[b],w,C=v.isString(P.easing)?S.Easings[P.easing]:P.easing;if(w=1===f?P.endValue:P.startValue+(P.endValue-P.startValue)*C(f),P.currentValue=w,V.Hooks.registered[b]){var T=V.Hooks.getRoot(b),k=s(y).rootPropertyValueCache[T];k&&(P.rootPropertyValue=k)}var E=V.setPropertyValue(y,b,P.currentValue+(0===parseFloat(w)?"":P.unitType),P.rootPropertyValue,P.scrollData);V.Hooks.registered[b]&&(s(y).rootPropertyValueCache[T]=V.Normalizations.registered[T]?V.Normalizations.registered[T]("extract",null,E[1]):E[1]),"transform"===E[0]&&(x=!0)}l.mobileHA&&s(y).transformCache.translate3d===o&&(s(y).transformCache.translate3d="(0px, 0px, 0px)",x=!0),x&&V.flushTransformCache(y)}}l.display&&"none"!==l.display&&(S.State.calls[r][2].display=!1),l.visibility&&"hidden"!==l.visibility&&(S.State.calls[r][2].visibility=!1),l.progress&&l.progress.call(i[1],i[1],f,Math.max(0,u+l.duration-t),u),1===f&&p(r)}S.State.isTicking&&h(c)}function p(e,t){if(!S.State.calls[e])return!1;for(var r=S.State.calls[e][0],a=S.State.calls[e][1],i=S.State.calls[e][2],n=S.State.calls[e][4],l=!1,u=0,c=r.length;c>u;u++){var p=r[u].element;if(t||i.loop||("none"===i.display&&V.setPropertyValue(p,"display",i.display),"hidden"===i.visibility&&V.setPropertyValue(p,"visibility",i.visibility)),($.queue(p)[1]===o||!/\.velocityQueueEntryFlag/i.test($.queue(p)[1]))&&s(p)){s(p).isAnimating=!1,s(p).rootPropertyValueCache={};var f=!1;$.each(V.Lists.transforms3D,function(e,t){var r=/^scale/.test(t)?1:0,a=s(p).transformCache[t];s(p).transformCache[t]!==o&&new RegExp("^\\("+r+"[^.]").test(a)&&(f=!0,delete s(p).transformCache[t])}),i.mobileHA&&(f=!0,delete s(p).transformCache.translate3d),f&&V.flushTransformCache(p),V.Values.removeClass(p,"velocity-animating")}if(!t&&i.complete&&!i.loop&&u===c-1)try{i.complete.call(a,a)}catch(d){setTimeout(function(){throw d},1)}n&&i.loop!==!0&&n(a),i.loop!==!0||t||S(p,"reverse",{loop:!0,delay:i.delay}),i.queue!==!1&&$.dequeue(p,i.queue)}S.State.calls[e]=!1;for(var g=0,m=S.State.calls.length;m>g;g++)if(S.State.calls[g]!==!1){l=!0;break}l===!1&&(S.State.isTicking=!1,delete S.State.calls,S.State.calls=[])}var f="velocity",d=400,g="swing",m=function(){if(a.documentMode)return a.documentMode;for(var e=7;e>4;e--){var t=a.createElement("div");if(t.innerHTML="<!--[if IE "+e+"]><span></span><![endif]-->",t.getElementsByTagName("span").length)return t=null,e}return o}(),y=function(){var e=0;return r.webkitRequestAnimationFrame||r.mozRequestAnimationFrame||function(t){var r=(new Date).getTime(),a;return a=Math.max(0,16-(r-e)),e=r+a,setTimeout(function(){t(r+a)},a)}}(),h=r.requestAnimationFrame||y,v={isString:function(e){return"string"==typeof e},isArray:Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},isFunction:function(e){return"[object Function]"===Object.prototype.toString.call(e)},isNode:function(e){return e&&e.nodeType},isNodeList:function(e){return"object"==typeof e&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e))&&e.length!==o&&(0===e.length||"object"==typeof e[0]&&e[0].nodeType>0)},isWrapped:function(e){return e&&(e.jquery||r.Zepto&&r.Zepto.zepto.isZ(e))},isSVG:function(e){return r.SVGElement&&e instanceof SVGElement},isEmptyObject:function(e){var t;for(t in e)return!1;return!0}},$;if(e&&e.fn!==o?$=e:r.Velocity&&r.Velocity.Utilities&&($=r.Velocity.Utilities),!$)throw new Error("Velocity: Either jQuery or Velocity's jQuery shim must first be loaded.");if(t.Velocity!==o&&t.Velocity.Utilities==o)throw new Error("Velocity: Namespace is occupied.");if(7>=m){if(e)return void(e.fn.velocity=e.fn.animate);throw new Error("Velocity: For IE<=7, Velocity falls back to jQuery, which must first be loaded.")}if(8===m&&!e)throw new Error("Velocity: For IE8, Velocity requires jQuery proper to be loaded; Velocity's jQuery shim does not work with IE8.");var S={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:r.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:a.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:$,Sequences:{},Easings:{},Promise:r.Promise,defaults:{queue:"",duration:d,easing:g,begin:null,complete:null,progress:null,display:null,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},init:function(e){$.data(e,f,{isSVG:v.isSVG(e),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},animate:null,hook:function(e,t,r){var a=o;return v.isWrapped(e)&&(e=[].slice.call(e)),$.each(n(e),function(e,i){if(s(i)===o&&S.init(i),r===o)a===o&&(a=S.CSS.getPropertyValue(i,t));else{var n=S.CSS.setPropertyValue(i,t,r);"transform"===n[0]&&S.CSS.flushTransformCache(i),a=n}}),a},mock:!1,version:{major:0,minor:11,patch:6},debug:!1};r.pageYOffset!==o?(S.State.scrollAnchor=r,S.State.scrollPropertyLeft="pageXOffset",S.State.scrollPropertyTop="pageYOffset"):(S.State.scrollAnchor=a.documentElement||a.body.parentNode||a.body,S.State.scrollPropertyLeft="scrollLeft",S.State.scrollPropertyTop="scrollTop");var x=function(){function e(e,t){return 1-3*t+3*e}function t(e,t){return 3*t-6*e}function r(e){return 3*e}function a(a,o,i){return((e(o,i)*a+t(o,i))*a+r(o))*a}function o(a,o,i){return 3*e(o,i)*a*a+2*t(o,i)*a+r(o)}return function(e,t,r,i){function n(t){for(var i=t,n=0;8>n;++n){var s=o(i,e,r);if(0===s)return i;var l=a(i,e,r)-t;i-=l/s}return i}if(4!==arguments.length)return!1;for(var s=0;4>s;++s)if("number"!=typeof arguments[s]||isNaN(arguments[s])||!isFinite(arguments[s]))return!1;return e=Math.min(e,1),r=Math.min(r,1),e=Math.max(e,0),r=Math.max(r,0),function(o){return e===t&&r===i?o:a(n(o),t,i)}}}(),b=function(){function e(e){return-e.tension*e.x-e.friction*e.v}function t(t,r,a){var o={x:t.x+a.dx*r,v:t.v+a.dv*r,tension:t.tension,friction:t.friction};return{dx:o.v,dv:e(o)}}function r(r,a){var o={dx:r.v,dv:e(r)},i=t(r,.5*a,o),n=t(r,.5*a,i),s=t(r,a,n),l=1/6*(o.dx+2*(i.dx+n.dx)+s.dx),u=1/6*(o.dv+2*(i.dv+n.dv)+s.dv);return r.x=r.x+l*a,r.v=r.v+u*a,r}return function a(e,t,o){var i={x:-1,v:0,tension:null,friction:null},n=[0],s=0,l=1e-4,u=.016,c,p,f;for(e=parseFloat(e)||500,t=parseFloat(t)||20,o=o||null,i.tension=e,i.friction=t,c=null!==o,c?(s=a(e,t),p=s/o*u):p=u;;)if(f=r(f||i,p),n.push(1+f.x),s+=16,!(Math.abs(f.x)>l&&Math.abs(f.v)>l))break;return c?function(e){return n[e*(n.length-1)|0]}:s}}();!function(){S.Easings.linear=function(e){return e},S.Easings.swing=function(e){return.5-Math.cos(e*Math.PI)/2},S.Easings.spring=function(e){return 1-Math.cos(4.5*e*Math.PI)*Math.exp(6*-e)},S.Easings.ease=x(.25,.1,.25,1),S.Easings["ease-in"]=x(.42,0,1,1),S.Easings["ease-out"]=x(0,0,.58,1),S.Easings["ease-in-out"]=x(.42,0,.58,1);var e={};$.each(["Quad","Cubic","Quart","Quint","Expo"],function(t,r){e[r]=function(e){return Math.pow(e,t+2)}}),$.extend(e,{Sine:function(e){return 1-Math.cos(e*Math.PI/2)},Circ:function(e){return 1-Math.sqrt(1-e*e)},Elastic:function(e){return 0===e||1===e?e:-Math.pow(2,8*(e-1))*Math.sin((80*(e-1)-7.5)*Math.PI/15)},Back:function(e){return e*e*(3*e-2)},Bounce:function(e){for(var t,r=4;e<((t=Math.pow(2,--r))-1)/11;);return 1/Math.pow(4,3-r)-7.5625*Math.pow((3*t-2)/22-e,2)}}),$.each(e,function(e,t){S.Easings["easeIn"+e]=t,S.Easings["easeOut"+e]=function(e){return 1-t(1-e)},S.Easings["easeInOut"+e]=function(e){return.5>e?t(2*e)/2:1-t(-2*e+2)/2}})}();var V=S.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var e=0;e<V.Lists.colors.length;e++)V.Hooks.templates[V.Lists.colors[e]]=["Red Green Blue Alpha","255 255 255 1"];var t,r,a;if(m)for(t in V.Hooks.templates){r=V.Hooks.templates[t],a=r[0].split(" ");var o=r[1].match(V.RegEx.valueSplit);"Color"===a[0]&&(a.push(a.shift()),o.push(o.shift()),V.Hooks.templates[t]=[a.join(" "),o.join(" ")])}for(t in V.Hooks.templates){r=V.Hooks.templates[t],a=r[0].split(" ");for(var e in a){var i=t+a[e],n=e;V.Hooks.registered[i]=[t,n]}}},getRoot:function(e){var t=V.Hooks.registered[e];return t?t[0]:e},cleanRootPropertyValue:function(e,t){return V.RegEx.valueUnwrap.test(t)&&(t=t.match(V.Hooks.RegEx.valueUnwrap)[1]),V.Values.isCSSNullValue(t)&&(t=V.Hooks.templates[e][1]),t},extractValue:function(e,t){var r=V.Hooks.registered[e];if(r){var a=r[0],o=r[1];return t=V.Hooks.cleanRootPropertyValue(a,t),t.toString().match(V.RegEx.valueSplit)[o]}return t},injectValue:function(e,t,r){var a=V.Hooks.registered[e];if(a){var o=a[0],i=a[1],n,s;return r=V.Hooks.cleanRootPropertyValue(o,r),n=r.toString().match(V.RegEx.valueSplit),n[i]=t,s=n.join(" ")}return r}},Normalizations:{registered:{clip:function(e,t,r){switch(e){case"name":return"clip";case"extract":var a;return V.RegEx.wrappedValueAlreadyExtracted.test(r)?a=r:(a=r.toString().match(V.RegEx.valueUnwrap),a=a?a[1].replace(/,(\s+)?/g," "):r),a;case"inject":return"rect("+r+")"}},opacity:function(e,t,r){if(8>=m)switch(e){case"name":return"filter";case"extract":var a=r.toString().match(/alpha\(opacity=(.*)\)/i);return r=a?a[1]/100:1;case"inject":return t.style.zoom=1,parseFloat(r)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(r),10)+")"}else switch(e){case"name":return"opacity";case"extract":return r;case"inject":return r}}},register:function(){9>=m||S.State.isGingerbread||(V.Lists.transformsBase=V.Lists.transformsBase.concat(V.Lists.transforms3D));for(var e=0;e<V.Lists.transformsBase.length;e++)!function(){var t=V.Lists.transformsBase[e];V.Normalizations.registered[t]=function(e,r,a){switch(e){case"name":return"transform";case"extract":return s(r)===o||s(r).transformCache[t]===o?/^scale/i.test(t)?1:0:s(r).transformCache[t].replace(/[()]/g,"");case"inject":var i=!1;switch(t.substr(0,t.length-1)){case"translate":i=!/(%|px|em|rem|vw|vh|\d)$/i.test(a);break;case"scal":case"scale":S.State.isAndroid&&s(r).transformCache[t]===o&&1>a&&(a=1),i=!/(\d)$/i.test(a);break;case"skew":i=!/(deg|\d)$/i.test(a);break;case"rotate":i=!/(deg|\d)$/i.test(a)}return i||(s(r).transformCache[t]="("+a+")"),s(r).transformCache[t]}}}();for(var e=0;e<V.Lists.colors.length;e++)!function(){var t=V.Lists.colors[e];V.Normalizations.registered[t]=function(e,r,a){switch(e){case"name":return t;case"extract":var i;if(V.RegEx.wrappedValueAlreadyExtracted.test(a))i=a;else{var n,s={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(a)?n=s[a]!==o?s[a]:s.black:V.RegEx.isHex.test(a)?n="rgb("+V.Values.hexToRgb(a).join(" ")+")":/^rgba?\(/i.test(a)||(n=s.black),i=(n||a).toString().match(V.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return 8>=m||3!==i.split(" ").length||(i+=" 1"),i;case"inject":return 8>=m?4===a.split(" ").length&&(a=a.split(/\s+/).slice(0,3).join(" ")):3===a.split(" ").length&&(a+=" 1"),(8>=m?"rgb":"rgba")+"("+a.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(e){return e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})},SVGAttribute:function(e){var t="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(m||S.State.isAndroid&&!S.State.isChrome)&&(t+="|transform"),new RegExp("^("+t+")$","i").test(e)},prefixCheck:function(e){if(S.State.prefixMatches[e])return[S.State.prefixMatches[e],!0];for(var t=["","Webkit","Moz","ms","O"],r=0,a=t.length;a>r;r++){var o;if(o=0===r?e:t[r]+e.replace(/^\w/,function(e){return e.toUpperCase()}),v.isString(S.State.prefixElement.style[o]))return S.State.prefixMatches[e]=o,[o,!0]}return[e,!1]}},Values:{hexToRgb:function(e){var t=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,a;return e=e.replace(t,function(e,t,r,a){return t+t+r+r+a+a}),a=r.exec(e),a?[parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],16)]:[0,0,0]},isCSSNullValue:function(e){return 0==e||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)},getUnitType:function(e){return/^(rotate|skew)/i.test(e)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e)?"":"px"},getDisplayType:function(e){var t=e.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t)?"inline":/^(li)$/i.test(t)?"list-item":/^(tr)$/i.test(t)?"table-row":"block"},addClass:function(e,t){e.classList?e.classList.add(t):e.className+=(e.className.length?" ":"")+t},removeClass:function(e,t){e.classList?e.classList.remove(t):e.className=e.className.toString().replace(new RegExp("(^|\\s)"+t.split(" ").join("|")+"(\\s|$)","gi")," ")}},getPropertyValue:function(e,t,a,i){function n(e,t){function a(){u&&V.setPropertyValue(e,"display","none")}var l=0;if(8>=m)l=$.css(e,t);else{var u=!1;if(/^(width|height)$/.test(t)&&0===V.getPropertyValue(e,"display")&&(u=!0,V.setPropertyValue(e,"display",V.Values.getDisplayType(e))),!i){if("height"===t&&"border-box"!==V.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var c=e.offsetHeight-(parseFloat(V.getPropertyValue(e,"borderTopWidth"))||0)-(parseFloat(V.getPropertyValue(e,"borderBottomWidth"))||0)-(parseFloat(V.getPropertyValue(e,"paddingTop"))||0)-(parseFloat(V.getPropertyValue(e,"paddingBottom"))||0);return a(),c}if("width"===t&&"border-box"!==V.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var p=e.offsetWidth-(parseFloat(V.getPropertyValue(e,"borderLeftWidth"))||0)-(parseFloat(V.getPropertyValue(e,"borderRightWidth"))||0)-(parseFloat(V.getPropertyValue(e,"paddingLeft"))||0)-(parseFloat(V.getPropertyValue(e,"paddingRight"))||0);return a(),p}}var f;f=s(e)===o?r.getComputedStyle(e,null):s(e).computedStyle?s(e).computedStyle:s(e).computedStyle=r.getComputedStyle(e,null),(m||S.State.isFirefox)&&"borderColor"===t&&(t="borderTopColor"),l=9===m&&"filter"===t?f.getPropertyValue(t):f[t],(""===l||null===l)&&(l=e.style[t]),a()}if("auto"===l&&/^(top|right|bottom|left)$/i.test(t)){var d=n(e,"position");("fixed"===d||"absolute"===d&&/top|left/i.test(t))&&(l=$(e).position()[t]+"px")}return l}var l;if(V.Hooks.registered[t]){var u=t,c=V.Hooks.getRoot(u);a===o&&(a=V.getPropertyValue(e,V.Names.prefixCheck(c)[0])),V.Normalizations.registered[c]&&(a=V.Normalizations.registered[c]("extract",e,a)),l=V.Hooks.extractValue(u,a)}else if(V.Normalizations.registered[t]){var p,f;p=V.Normalizations.registered[t]("name",e),"transform"!==p&&(f=n(e,V.Names.prefixCheck(p)[0]),V.Values.isCSSNullValue(f)&&V.Hooks.templates[t]&&(f=V.Hooks.templates[t][1])),l=V.Normalizations.registered[t]("extract",e,f)}return/^[\d-]/.test(l)||(l=s(e)&&s(e).isSVG&&V.Names.SVGAttribute(t)?/^(height|width)$/i.test(t)?e.getBBox()[t]:e.getAttribute(t):n(e,V.Names.prefixCheck(t)[0])),V.Values.isCSSNullValue(l)&&(l=0),S.debug>=2&&console.log("Get "+t+": "+l),l},setPropertyValue:function(e,t,a,o,i){var n=t;if("scroll"===t)i.container?i.container["scroll"+i.direction]=a:"Left"===i.direction?r.scrollTo(a,i.alternateValue):r.scrollTo(i.alternateValue,a);else if(V.Normalizations.registered[t]&&"transform"===V.Normalizations.registered[t]("name",e))V.Normalizations.registered[t]("inject",e,a),n="transform",a=s(e).transformCache[t];else{if(V.Hooks.registered[t]){var l=t,u=V.Hooks.getRoot(t);o=o||V.getPropertyValue(e,u),a=V.Hooks.injectValue(l,a,o),t=u}if(V.Normalizations.registered[t]&&(a=V.Normalizations.registered[t]("inject",e,a),t=V.Normalizations.registered[t]("name",e)),n=V.Names.prefixCheck(t)[0],8>=m)try{e.style[n]=a}catch(c){S.debug&&console.log("Browser does not support ["+a+"] for ["+n+"]")}else s(e)&&s(e).isSVG&&V.Names.SVGAttribute(t)?e.setAttribute(t,a):e.style[n]=a;S.debug>=2&&console.log("Set "+t+" ("+n+"): "+a)}return[n,a]},flushTransformCache:function(e){function t(t){return parseFloat(V.getPropertyValue(e,t))}var r="";if((m||S.State.isAndroid&&!S.State.isChrome)&&s(e).isSVG){var a={translate:[t("translateX"),t("translateY")],skewX:[t("skewX")],skewY:[t("skewY")],scale:1!==t("scale")?[t("scale"),t("scale")]:[t("scaleX"),t("scaleY")],rotate:[t("rotateZ"),0,0]};$.each(s(e).transformCache,function(e){/^translate/i.test(e)?e="translate":/^scale/i.test(e)?e="scale":/^rotate/i.test(e)&&(e="rotate"),a[e]&&(r+=e+"("+a[e].join(" ")+") ",delete a[e])})}else{var o,i;$.each(s(e).transformCache,function(t){return o=s(e).transformCache[t],"transformPerspective"===t?(i=o,!0):(9===m&&"rotateZ"===t&&(t="rotate"),void(r+=t+o+" "))}),i&&(r="perspective"+i+" "+r)}V.setPropertyValue(e,"transform",r)}};V.Hooks.register(),V.Normalizations.register();var P=function(){function e(){return f?T.promise||null:g}function t(){function e(e){function f(e,r){var a=o,i=o,s=o;return v.isArray(e)?(a=e[0],!v.isArray(e[1])&&/^[\d-]/.test(e[1])||v.isFunction(e[1])||V.RegEx.isHex.test(e[1])?s=e[1]:(v.isString(e[1])&&!V.RegEx.isHex.test(e[1])||v.isArray(e[1]))&&(i=r?e[1]:u(e[1],n.duration),e[2]!==o&&(s=e[2]))):a=e,r||(i=i||n.easing),v.isFunction(a)&&(a=a.call(t,P,b)),v.isFunction(s)&&(s=s.call(t,P,b)),[a||0,i,s]}function d(e,t){var r,a;return a=(t||0).toString().toLowerCase().replace(/[%A-z]+$/,function(e){return r=e,""}),r||(r=V.Values.getUnitType(e)),[a,r]}function g(){var e={myParent:t.parentNode||a.body,position:V.getPropertyValue(t,"position"),fontSize:V.getPropertyValue(t,"fontSize")},o=e.position===N.lastPosition&&e.myParent===N.lastParent,i=e.fontSize===N.lastFontSize;N.lastParent=e.myParent,N.lastPosition=e.position,N.lastFontSize=e.fontSize;var n=100,l={};if(i&&o)l.emToPx=N.lastEmToPx,l.percentToPxWidth=N.lastPercentToPxWidth,l.percentToPxHeight=N.lastPercentToPxHeight;else{var u=s(t).isSVG?a.createElementNS("http://www.w3.org/2000/svg","rect"):a.createElement("div");S.init(u),e.myParent.appendChild(u),S.CSS.setPropertyValue(u,"position",e.position),S.CSS.setPropertyValue(u,"fontSize",e.fontSize),S.CSS.setPropertyValue(u,"overflow","hidden"),S.CSS.setPropertyValue(u,"overflowX","hidden"),S.CSS.setPropertyValue(u,"overflowY","hidden"),S.CSS.setPropertyValue(u,"boxSizing","content-box"),S.CSS.setPropertyValue(u,"paddingLeft",n+"em"),S.CSS.setPropertyValue(u,"minWidth",n+"%"),S.CSS.setPropertyValue(u,"maxWidth",n+"%"),S.CSS.setPropertyValue(u,"width",n+"%"),S.CSS.setPropertyValue(u,"minHeight",n+"%"),S.CSS.setPropertyValue(u,"maxHeight",n+"%"),S.CSS.setPropertyValue(u,"height",n+"%"),l.percentToPxWidth=N.lastPercentToPxWidth=(parseFloat(V.getPropertyValue(u,"width",null,!0))||1)/n,l.percentToPxHeight=N.lastPercentToPxHeight=(parseFloat(V.getPropertyValue(u,"height",null,!0))||1)/n,l.emToPx=N.lastEmToPx=(parseFloat(V.getPropertyValue(u,"paddingLeft"))||1)/n,e.myParent.removeChild(u)}return null===N.remToPx&&(N.remToPx=parseFloat(V.getPropertyValue(a.body,"fontSize"))||16),null===N.vwToPx&&(N.vwToPx=parseFloat(r.innerWidth)/100,N.vhToPx=parseFloat(r.innerHeight)/100),l.remToPx=N.remToPx,l.vwToPx=N.vwToPx,l.vhToPx=N.vhToPx,S.debug>=1&&console.log("Unit ratios: "+JSON.stringify(l),t),l}if(n.begin&&0===P)try{n.begin.call(y,y)}catch(m){setTimeout(function(){throw m},1)}if("scroll"===k){var w=/^x$/i.test(n.axis)?"Left":"Top",C=parseFloat(n.offset)||0,E,F,A;n.container?v.isWrapped(n.container)||v.isNode(n.container)?(n.container=n.container[0]||n.container,E=n.container["scroll"+w],A=E+$(t).position()[w.toLowerCase()]+C):n.container=null:(E=S.State.scrollAnchor[S.State["scrollProperty"+w]],F=S.State.scrollAnchor[S.State["scrollProperty"+("Left"===w?"Top":"Left")]],A=$(t).offset()[w.toLowerCase()]+C),l={scroll:{rootPropertyValue:!1,startValue:E,currentValue:E,endValue:A,unitType:"",easing:n.easing,scrollData:{container:n.container,direction:w,alternateValue:F}},element:t},S.debug&&console.log("tweensContainer (scroll): ",l.scroll,t)}else if("reverse"===k){if(!s(t).tweensContainer)return void $.dequeue(t,n.queue);"none"===s(t).opts.display&&(s(t).opts.display="block"),"hidden"===s(t).opts.visibility&&(s(t).opts.visibility="visible"),s(t).opts.loop=!1,s(t).opts.begin=null,s(t).opts.complete=null,x.easing||delete n.easing,x.duration||delete n.duration,n=$.extend({},s(t).opts,n);var H=$.extend(!0,{},s(t).tweensContainer);for(var L in H)if("element"!==L){var z=H[L].startValue;H[L].startValue=H[L].currentValue=H[L].endValue,H[L].endValue=z,v.isEmptyObject(x)||(H[L].easing=n.easing),S.debug&&console.log("reverse tweensContainer ("+L+"): "+JSON.stringify(H[L]),t)}l=H}else if("start"===k){var H;s(t).tweensContainer&&s(t).isAnimating===!0&&(H=s(t).tweensContainer),$.each(h,function(e,t){if(RegExp("^"+V.Lists.colors.join("$|^")+"$").test(e)){var r=f(t,!0),a=r[0],i=r[1],n=r[2];if(V.RegEx.isHex.test(a)){for(var s=["Red","Green","Blue"],l=V.Values.hexToRgb(a),u=n?V.Values.hexToRgb(n):o,c=0;c<s.length;c++)h[e+s[c]]=[l[c],i,u?u[c]:u];delete h[e]}}});for(var M in h){var R=f(h[M]),q=R[0],B=R[1],O=R[2];M=V.Names.camelCase(M);var W=V.Hooks.getRoot(M),X=!1;if(s(t).isSVG||V.Names.prefixCheck(W)[1]!==!1||V.Normalizations.registered[W]!==o){(n.display&&"none"!==n.display||n.visibility&&"hidden"!==n.visibility)&&/opacity|filter/.test(M)&&!O&&0!==q&&(O=0),n._cacheValues&&H&&H[M]?(O===o&&(O=H[M].endValue+H[M].unitType),X=s(t).rootPropertyValueCache[W]):V.Hooks.registered[M]?O===o?(X=V.getPropertyValue(t,W),O=V.getPropertyValue(t,M,X)):X=V.Hooks.templates[W][1]:O===o&&(O=V.getPropertyValue(t,M));var Y,G,I,U=!1;if(Y=d(M,O),O=Y[0],I=Y[1],Y=d(M,q),q=Y[0].replace(/^([+-\/*])=/,function(e,t){return U=t,""}),G=Y[1],O=parseFloat(O)||0,q=parseFloat(q)||0,"%"===G&&(/^(fontSize|lineHeight)$/.test(M)?(q/=100,G="em"):/^scale/.test(M)?(q/=100,G=""):/(Red|Green|Blue)$/i.test(M)&&(q=q/100*255,G="")),/[\/*]/.test(U))G=I;else if(I!==G&&0!==O)if(0===q)G=I;else{p=p||g();var D=/margin|padding|left|right|width|text|word|letter/i.test(M)||/X$/.test(M)?"x":"y";switch(I){case"%":O*="x"===D?p.percentToPxWidth:p.percentToPxHeight;break;case"px":break;default:O*=p[I+"ToPx"]}switch(G){case"%":O*=1/("x"===D?p.percentToPxWidth:p.percentToPxHeight);break;case"px":break;default:O*=1/p[G+"ToPx"]}}switch(U){case"+":q=O+q;break;case"-":q=O-q;break;case"*":q=O*q;break;case"/":q=O/q}l[M]={rootPropertyValue:X,startValue:O,currentValue:O,endValue:q,unitType:G,easing:B},S.debug&&console.log("tweensContainer ("+M+"): "+JSON.stringify(l[M]),t)}else S.debug&&console.log("Skipping ["+W+"] due to a lack of browser support.")}l.element=t}l.element&&(V.Values.addClass(t,"velocity-animating"),j.push(l),s(t).tweensContainer=l,s(t).opts=n,s(t).isAnimating=!0,P===b-1?(S.State.calls.length>1e4&&(S.State.calls=i(S.State.calls)),S.State.calls.push([j,y,n,null,T.resolver]),S.State.isTicking===!1&&(S.State.isTicking=!0,c())):P++)}var t=this,n=$.extend({},S.defaults,x),l={},p;if(s(t)===o&&S.init(t),parseFloat(n.delay)&&n.queue!==!1&&$.queue(t,n.queue,function(e){S.velocityQueueEntryFlag=!0,s(t).delayTimer={setTimeout:setTimeout(e,parseFloat(n.delay)),next:e}}),S.mock===!0)n.duration=1;else switch(n.duration.toString().toLowerCase()){case"fast":n.duration=200;break;case"normal":n.duration=d;break;case"slow":n.duration=600;break;default:n.duration=parseFloat(n.duration)||1}n.easing=u(n.easing,n.duration),n.begin&&!v.isFunction(n.begin)&&(n.begin=null),n.progress&&!v.isFunction(n.progress)&&(n.progress=null),n.complete&&!v.isFunction(n.complete)&&(n.complete=null),n.display&&(n.display=n.display.toString().toLowerCase(),"auto"===n.display&&(n.display=S.CSS.Values.getDisplayType(t))),n.visibility&&(n.visibility=n.visibility.toString().toLowerCase()),n.mobileHA=n.mobileHA&&S.State.isMobile&&!S.State.isGingerbread,n.queue===!1?n.delay?setTimeout(e,n.delay):e():$.queue(t,n.queue,function(t,r){return r===!0?(T.promise&&T.resolver(y),!0):(S.velocityQueueEntryFlag=!0,void e(t))}),""!==n.queue&&"fx"!==n.queue||"inprogress"===$.queue(t)[0]||$.dequeue(t)}var l=arguments[0]&&($.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||v.isString(arguments[0].properties)),f,g,m,y,h,x;if(v.isWrapped(this)?(f=!1,m=0,y=this,g=this):(f=!0,m=1,y=l?arguments[0].elements:arguments[0]),y=v.isWrapped(y)?[].slice.call(y):y){l?(h=arguments[0].properties,x=arguments[0].options):(h=arguments[m],x=arguments[m+1]);var b=v.isArray(y)||v.isNodeList(y)?y.length:1,P=0;if("stop"!==h&&!$.isPlainObject(x)){var w=m+1;x={};for(var C=w;C<arguments.length;C++)!v.isArray(arguments[C])&&/^\d/.test(arguments[C])?x.duration=parseFloat(arguments[C]):v.isString(arguments[C])||v.isArray(arguments[C])?x.easing=arguments[C]:v.isFunction(arguments[C])&&(x.complete=arguments[C])}var T={promise:null,resolver:null,rejecter:null};f&&S.Promise&&(T.promise=new S.Promise(function(e,t){T.resolver=e,T.rejecter=t}));var k;switch(h){case"scroll":k="scroll";break;case"reverse":k="reverse";break;case"stop":$.each(n(y),function(e,t){s(t)&&s(t).delayTimer&&(clearTimeout(s(t).delayTimer.setTimeout),s(t).delayTimer.next&&s(t).delayTimer.next(),delete s(t).delayTimer)});var E=[];return $.each(S.State.calls,function(e,t){t&&$.each(n(t[1]),function(t,r){$.each(n(y),function(t,a){if(a===r){if(s(a)&&$.each(s(a).tweensContainer,function(e,t){t.endValue=t.currentValue}),x===!0||v.isString(x)){var o=v.isString(x)?x:"";$.each($.queue(a,o),function(e,t){v.isFunction(t)&&t(null,!0)}),$.queue(a,o,[])}E.push(e)}})})}),$.each(E,function(e,t){p(t,!0)}),T.promise&&T.resolver(y),e();default:if(!$.isPlainObject(h)||v.isEmptyObject(h)){if(v.isString(h)&&S.Sequences[h]){var F=x.duration,A=x.delay||0;return x.backwards===!0&&(y=(v.isWrapped(y)?[].slice.call(y):y).reverse()),$.each(n(y),function(e,t){parseFloat(x.stagger)?x.delay=A+parseFloat(x.stagger)*e:v.isFunction(x.stagger)&&(x.delay=A+x.stagger.call(t,e,b)),x.drag&&(x.duration=parseFloat(F)||(/^(callout|transition)/.test(h)?1e3:d),x.duration=Math.max(x.duration*(x.backwards?1-e/b:(e+1)/b),.75*x.duration,200)),S.Sequences[h].call(t,t,x||{},e,b,y,T.promise?T:o)}),e()}var H="Velocity: First argument ("+h+") was not a property map, a known action, or a registered sequence. Aborting.";return T.promise?T.rejecter(new Error(H)):console.log(H),e()}k="start"}var N={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},j=[];$.each(n(y),function(e,r){v.isNode(r)&&t.call(r)});var L=$.extend({},S.defaults,x),z;if(L.loop=parseInt(L.loop),z=2*L.loop-1,L.loop)for(var M=0;z>M;M++){var R={delay:L.delay};M===z-1&&(R.display=L.display,R.visibility=L.visibility,R.complete=L.complete),S(y,"reverse",R)}return e()}};S=$.extend(P,S),S.animate=P,S.State.isMobile||a.hidden===o||a.addEventListener("visibilitychange",function(){a.hidden?(h=function(e){return setTimeout(function(){e(!0)},16)},c()):h=r.requestAnimationFrame||y});var w;return e&&e.fn!==o?w=e:r.Zepto&&(w=r.Zepto),(w||r).Velocity=S,w&&(w.fn.velocity=P,w.fn.velocity.defaults=S.defaults),$.each(["Down","Up"],function(e,t){S.Sequences["slide"+t]=function(e,r,a,o,i,n){var s=$.extend({},r),l={height:null,marginTop:null,marginBottom:null,paddingTop:null,paddingBottom:null,overflow:null,overflowX:null,overflowY:null},u=s.begin,c=s.complete,p=!1;null!==s.display&&(s.display="Down"===t?s.display||"auto":s.display||"none"),s.begin=function(){function r(){l.height=parseFloat(S.CSS.getPropertyValue(e,"height")),e.style.height="auto",parseFloat(S.CSS.getPropertyValue(e,"height"))===l.height&&(p=!0),S.CSS.setPropertyValue(e,"height",l.height+"px")}if("Down"===t){l.overflow=[S.CSS.getPropertyValue(e,"overflow"),0],l.overflowX=[S.CSS.getPropertyValue(e,"overflowX"),0],l.overflowY=[S.CSS.getPropertyValue(e,"overflowY"),0],e.style.overflow="hidden",e.style.overflowX="visible",e.style.overflowY="hidden",r();for(var a in l)if(!/^overflow/.test(a)){var o=S.CSS.getPropertyValue(e,a);"height"===a&&(o=parseFloat(o)),l[a]=[o,0]}}else{r();for(var a in l){var o=S.CSS.getPropertyValue(e,a);"height"===a&&(o=parseFloat(o)),l[a]=[0,o]}e.style.overflow="hidden",e.style.overflowX="visible",e.style.overflowY="hidden"}u&&u.call(e,e)},s.complete=function(e){var r="Down"===t?0:1;p===!0?l.height[r]="auto":l.height[r]+="px";for(var a in l)e.style[a]=l[a][r];c&&c.call(e,e),n&&n.resolver(i||e)},S(e,l,s)}}),$.each(["In","Out"],function(e,t){S.Sequences["fade"+t]=function(e,r,a,o,i,n){var s=$.extend({},r),l={opacity:"In"===t?1:0};if(a!==o-1)s.complete=s.begin=null;else{var u=s.complete;s.complete=function(){u&&u.call(e,e),n&&n.resolver(i||e)}}null!==s.display&&(s.display=s.display||("In"===t?"auto":"none")),S(this,l,s)}}),S}(e||window,window,document)});
// Primary Javascript file

var narc = {};
narc.lightbox_open = false;

$(function(){

  $('.shape-wrapper .scene').each(function(){
    var rand = Math.floor(Math.random()*20)+1;
    $(this).addClass('animate' + rand);
  });

  $('.shape').click(function(){
    narc.open_lightbox('1');
    var imgs = $(this).closest('.shape').find('img');
    imgs = narc.shuffle(imgs.clone());
    imgs.appendTo($('.lightbox-content'));
  });

  $(document).on('click', '.lightbox-1 img', function(){
    narc.open_lightbox('2');
    $(this).clone().appendTo($('.lightbox-2 .lightbox-content'));
  });

  // Close top lightbox on click
  $(document).on('click.close-lightbox', function(e){
    if(!$(e.target).closest('img').length){
      narc.close_lightbox();
    }
  });

  // Close top lightbox with escape key
  $(document).keyup(function(e) {
    if (e.keyCode == 27){
      narc.close_lightbox();
    }
  });

});

narc.open_lightbox = function(num){
  $('body').addClass('lightbox-open').prepend('<div class="lightbox lightbox-' + num + '"><div class="lightbox-content-wrapper"><div class="lightbox-content"></div></div></div>');
};

narc.close_lightbox = function(){
  if($('.lightbox').length){
    $('.lightbox').first().remove();
    if(!$('.lightbox').length){
      $('body').removeClass('lightbox-open');
    }
  } else {
    $('body').removeClass('lightbox-open');
  }
};

narc.shuffle = function(o) {
  for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o;
};
