var l=!0,n=null,v=!1;window.PR_SHOULD_USE_CONTINUATION=l;window.PR_TAB_WIDTH=8;window.PR_normalizedHtml=window.PR=window.prettyPrintOne=window.prettyPrint=void 0;window._pr_isIE6=function(){var a=navigator&&navigator.userAgent&&navigator.userAgent.match(/\bMSIE ([678])\./),a=a?+a[1]:v;window._pr_isIE6=function(){return a};return a};function x(a){return a.replace(A,"&amp;").replace(B,"&lt;").replace(aa,"&gt;")}
function E(a,d,h){switch(a.nodeType){case 1:var m=a.tagName.toLowerCase();d.push("<",m);var e=a.attributes,i=e.length;if(i){if(h){for(var s=[],k=i;0<=--k;)s[k]=e[k];s.sort(function(a,d){return a.name<d.name?-1:a.name===d.name?0:1});e=s}for(k=0;k<i;++k)s=e[k],s.specified&&d.push(" ",s.name.toLowerCase(),'="',s.value.replace(A,"&amp;").replace(B,"&lt;").replace(aa,"&gt;").replace(ba,"&quot;"),'"')}d.push(">");for(e=a.firstChild;e;e=e.nextSibling)E(e,d,h);(a.firstChild||!/^(?:br|link|img)$/.test(m))&&
d.push("</",m,">");break;case 3:case 4:d.push(x(a.nodeValue))}}
function ea(a){function d(a){if("\\"!==a.charAt(0))return a.charCodeAt(0);switch(a.charAt(1)){case "b":return 8;case "t":return 9;case "n":return 10;case "v":return 11;case "f":return 12;case "r":return 13;case "u":case "x":return parseInt(a.substring(2),16)||a.charCodeAt(1);case "0":case "1":case "2":case "3":case "4":case "5":case "6":case "7":return parseInt(a.substring(1),8);default:return a.charCodeAt(1)}}function h(a){if(32>a)return(16>a?"\\x0":"\\x")+a.toString(16);a=String.fromCharCode(a);
if("\\"===a||"-"===a||"["===a||"]"===a)a="\\"+a;return a}function m(a){for(var g=a.substring(1,a.length-1).match(RegExp("\\\\u[0-9A-Fa-f]{4}|\\\\x[0-9A-Fa-f]{2}|\\\\[0-3][0-7]{0,2}|\\\\[0-7]{1,2}|\\\\[\\s\\S]|-|[^-\\\\]","g")),a=[],c=[],y="^"===g[0],f=y?1:0,e=g.length;f<e;++f){var t=g[f];switch(t){case "\\B":case "\\b":case "\\D":case "\\d":case "\\S":case "\\s":case "\\W":case "\\w":a.push(t);continue}var t=d(t),b;f+2<e&&"-"===g[f+1]?(b=d(g[f+2]),f+=2):b=t;c.push([t,b]);65>b||122<t||(65>b||90<t||
c.push([Math.max(65,t)|32,Math.min(b,90)|32]),97>b||122<t||c.push([Math.max(97,t)&-33,Math.min(b,122)&-33]))}c.sort(function(a,c){return a[0]-c[0]||c[1]-a[1]});g=[];t=[NaN,NaN];for(f=0;f<c.length;++f)e=c[f],e[0]<=t[1]+1?t[1]=Math.max(t[1],e[1]):g.push(t=e);c=["["];y&&c.push("^");c.push.apply(c,a);for(f=0;f<g.length;++f)e=g[f],c.push(h(e[0])),e[1]>e[0]&&(e[1]+1>e[0]&&c.push("-"),c.push(h(e[1])));c.push("]");return c.join("")}function e(a){for(var g=a.source.match(RegExp("(?:\\[(?:[^\\x5C\\x5D]|\\\\[\\s\\S])*\\]|\\\\u[A-Fa-f0-9]{4}|\\\\x[A-Fa-f0-9]{2}|\\\\[0-9]+|\\\\[^ux0-9]|\\(\\?[:!=]|[\\(\\)\\^]|[^\\x5B\\x5C\\(\\)\\^]+)",
"g")),c=g.length,e=[],f=0,d=0;f<c;++f){var b=g[f];"("===b?++d:"\\"===b.charAt(0)&&(b=+b.substring(1))&&b<=d&&(e[b]=-1)}for(f=1;f<e.length;++f)-1===e[f]&&(e[f]=++i);for(d=f=0;f<c;++f)b=g[f],"("===b?(++d,void 0===e[d]&&(g[f]="(?:")):"\\"===b.charAt(0)&&(b=+b.substring(1))&&b<=d&&(g[f]="\\"+e[d]);for(d=f=0;f<c;++f)"^"===g[f]&&"^"!==g[f+1]&&(g[f]="");if(a.ignoreCase&&s)for(f=0;f<c;++f)b=g[f],a=b.charAt(0),2<=b.length&&"["===a?g[f]=m(b):"\\"!==a&&(g[f]=b.replace(/[a-zA-Z]/g,function(a){a=a.charCodeAt(0);
return"["+String.fromCharCode(a&-33,a|32)+"]"}));return g.join("")}for(var i=0,s=v,k=v,j=0,o=a.length;j<o;++j){var q=a[j];if(q.ignoreCase)k=l;else if(/[a-z]/i.test(q.source.replace(/\\u[0-9a-f]{4}|\\x[0-9a-f]{2}|\\[^ux]/gi,""))){s=l;k=v;break}}for(var b=[],j=0,o=a.length;j<o;++j){q=a[j];if(q.global||q.multiline)throw Error(""+q);b.push("(?:"+e(q)+")")}return RegExp(b.join("|"),k?"gi":"g")}function F(a,d,h,m){d&&(a={source:d,c:a},h(a),m.push.apply(m,a.d))}
function G(a,d){function h(a){for(var b=a.c,f=[b,M],k=0,o=a.source.match(e)||[],w={},i=0,s=o.length;i<s;++i){var j=o[i],r=w[j],q=void 0,p;if("string"===typeof r)p=v;else{var u=m[j.charAt(0)];if(u)q=j.match(u[1]),r=u[0];else{for(p=0;p<g;++p)if(u=d[p],q=j.match(u[1])){r=u[0];break}q||(r=M)}if((p=5<=r.length&&"lang-"===r.substring(0,5))&&!(q&&"string"===typeof q[1]))p=v,r=fa;p||(w[j]=r)}u=k;k+=j.length;if(p){p=q[1];var C=j.indexOf(p),D=C+p.length;q[2]&&(D=j.length-q[2].length,C=D-p.length);r=r.substring(5);
F(b+u,j.substring(0,C),h,f);F(b+u+C,p,ga(r,p),f);F(b+u+D,j.substring(D),h,f)}else f.push(b+u,r)}a.d=f}for(var m={},e,i=a.concat(d),s=[],k={},j=0,o=i.length;j<o;++j){var q=i[j],b=q[3];if(b)for(var w=b.length;0<=--w;)m[b.charAt(w)]=q;q=q[1];b=""+q;k.hasOwnProperty(b)||(s.push(q),k[b]=n)}s.push(/[\0-\uffff]/);e=ea(s);var g=d.length;return h}
function N(a){var d=[],h=[];a.tripleQuotedStrings?d.push([Q,/^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/,n,"'\""]):a.multiLineStrings?d.push([Q,/^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/,n,"'\"`"]):d.push([Q,/^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/,n,"\"'"]);a.verbatimStrings&&
h.push([Q,/^@\"(?:[^\"]|\"\")*(?:\"|$)/,n]);a.hashComments&&(a.cStyleComments?(d.push([R,/^#(?:(?:define|elif|else|endif|error|ifdef|include|ifndef|line|pragma|undef|warning)\b|[^\r\n]*)/,n,"#"]),h.push([Q,/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h|[a-z]\w*)>/,n])):d.push([R,/^#[^\r\n]*/,n,"#"]));a.cStyleComments&&(h.push([R,/^\/\/[^\r\n]*/,n]),h.push([R,/^\/\*[\s\S]*?(?:\*\/|$)/,n]));a.regexLiterals&&h.push(["lang-regex",RegExp("^"+ha+"(/(?=[^/*])(?:[^/\\x5B\\x5C]|\\x5C[\\s\\S]|\\x5B(?:[^\\x5C\\x5D]|\\x5C[\\s\\S])*(?:\\x5D|$))+/)")]);
a=a.keywords.replace(/^\s+|\s+$/g,"");a.length&&h.push([ia,RegExp("^(?:"+a.replace(/\s+/g,"|")+")\\b"),n]);d.push([M,/^\s+/,n," \r\n\t\u00a0"]);h.push([S,/^@[a-z_$][a-z_$@0-9]*/i,n],[ja,/^@?[A-Z]+[a-z][A-Za-z_$@0-9]*/,n],[M,/^[a-z_$][a-z_$@0-9]*/i,n],[S,/^(?:0x[a-f0-9]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+\-]?\d+)?)[a-z]*/i,n,"0123456789"],[T,/^.[^\s\w\.$@\'\"\`\/\#]*/,n]);return G(d,h)}
function V(a,d){for(var h=d.length;0<=--h;){var m=d[h];X.hasOwnProperty(m)?"console"in window&&console.warn("cannot override language handler %s",m):X[m]=a}}function ga(a,d){if(!a||!X.hasOwnProperty(a))a=/^\s*</.test(d)?"default-markup":"default-code";return X[a]}
function ka(a){var d,h=a.f,m=a.e;a.a=h;try{var e=h.match(la),h=[],i=0,s=[];if(e)for(var k=0,j=e.length;k<j;++k){var o=e[k];if(1<o.length&&"<"===o.charAt(0)){if(!pa.test(o))if(qa.test(o))h.push(o.substring(9,o.length-3)),i+=o.length-12;else if(ra.test(o))h.push("\n"),++i;else if(0<=o.indexOf(sa)&&o.replace(/\s(\w+)\s*=\s*(?:\"([^\"]*)\"|'([^\']*)'|(\S+))/g,' $1="$2$3$4"').match(/[cC][lL][aA][sS][sS]=\"[^\"]*\bnocode\b/)){var q=o.match(ta)[2],b=1,w;w=k+1;a:for(;w<j;++w){var g=e[w].match(ta);if(g&&g[2]===
q)if("/"===g[1]){if(0===--b)break a}else++b}w<j?(s.push(i,e.slice(k,w+1).join("")),k=w):s.push(i,o)}else s.push(i,o)}else{var c;var b=o,y=b.indexOf("&");if(0>y)c=b;else{for(--y;0<=(y=b.indexOf("&#",y+1));){var f=b.indexOf(";",y);if(0<=f){var H=b.substring(y+3,f),t=10;H&&"x"===H.charAt(0)&&(H=H.substring(1),t=16);var ca=parseInt(H,t);isNaN(ca)||(b=b.substring(0,y)+String.fromCharCode(ca)+b.substring(f+1))}}c=b.replace(ua,"<").replace(va,">").replace(wa,"'").replace(xa,'"').replace(ya," ").replace(za,
"&")}h.push(c);i+=c.length}}d=h.join("");a.source=d;a.c=0;a.g=s;ga(m,d)(a);d=function(a){if(a>U){p&&p!==u&&(r.push("</span>"),p=n);!p&&u&&(p=u,r.push('<span class="',p,'">'));var b=x(C(da.substring(U,a))).replace(ma?Ca:Da,"$1&#160;");ma=Ea.test(b);r.push(b.replace(Fa,W));U=a}};var da=a.source,L=a.g,I=a.d,r=[],U=0,p=n,u=n,e=m=0,C,D=window.PR_TAB_WIDTH,J=0;C=function(a){for(var b=n,c=0,d=0,e=a.length;d<e;++d)switch(a.charAt(d)){case "\t":b||(b=[]);b.push(a.substring(c,d));c=D-J%D;for(J+=c;0<=c;c-=16)b.push("                ".substring(0,
c));c=d+1;break;case "\n":J=0;break;default:++J}if(!b)return a;b.push(a.substring(c));return b.join("")};var Da=/([\r\n ]) /g,Ca=/(^| ) /gm,Fa=/\r\n?|\n/g,Ea=/[ \r\n]$/,ma=l,z=window._pr_isIE6(),na=z?"PRE"===a.b.tagName?6===z?"&#160;\r\n":7===z?"&#160;<br>\r":"&#160;\r":"&#160;<br />":"<br />",K=a.b.className.match(/\blinenums\b(?::(\d+))?/),W;if(K){for(var oa=[],z=0;10>z;++z)oa[z]=na+'</li><li class="L'+z+'">';var O=K[1]&&K[1].length?K[1]-1:0;r.push('<ol class="linenums"><li class="L',O%10,'"');
O&&r.push(' value="',O+1,'"');r.push(">");W=function(){var a=oa[++O%10];return p?"</span>"+a+'<span class="'+p+'">':a}}else W=na;for(;;)if(m<L.length&&(e<I.length?L[m]<=I[e]:1))d(L[m]),p&&(r.push("</span>"),p=n),r.push(L[m+1]),m+=2;else if(e<I.length)d(I[e]),u=I[e+1],e+=2;else break;d(da.length);p&&r.push("</span>");K&&r.push("</li></ol>");a.a=r.join("")}catch(P){"console"in window&&console.log(P&&P.stack?P.stack:P)}}
function Aa(a){function d(){for(var e=window.PR_SHOULD_USE_CONTINUATION?k.now()+250:Infinity;j<m.length&&k.now()<e;j++){var b=m[j];if(b.className&&0<=b.className.indexOf("prettyprint")){var h=b.className.match(/\blang-(\w+)\b/);h&&(h=h[1]);for(var g=v,c=b.parentNode;c;c=c.parentNode)if(("pre"===c.tagName||"code"===c.tagName||"xmp"===c.tagName)&&c.className&&0<=c.className.indexOf("prettyprint")){g=l;break}if(!g){c=b;n===Y&&(g=document.createElement("PRE"),g.appendChild(document.createTextNode('<!DOCTYPE foo PUBLIC "foo bar">\n<foo />')),
Y=!/</.test(g.innerHTML));if(Y)if(g=c.innerHTML,"XMP"===c.tagName)g=x(g);else{if("PRE"===c.tagName||!Ba.test(g))c=l;else{var i="";c.currentStyle?i=c.currentStyle.whiteSpace:window.getComputedStyle&&(i=window.getComputedStyle(c,n).whiteSpace);c=!i||"pre"===i}c||(g=g.replace(/(<br\s*\/?>)[\r\n]+/g,"$1").replace(/(?:[\r\n]+[ \t]*)+/g," "))}else{g=[];for(c=c.firstChild;c;c=c.nextSibling)E(c,g);g=g.join("")}g=g.replace(/(?:\r\n?|\n)$/,"");o={f:g,e:h,b:b};ka(o);if(b=o.a)if(h=o.b,"XMP"===h.tagName){g=document.createElement("PRE");
for(c=0;c<h.attributes.length;++c)i=h.attributes[c],i.specified&&("class"===i.name.toLowerCase()?g.className=i.value:g.setAttribute(i.name,i.value));g.innerHTML=b;h.parentNode.replaceChild(g,h)}else h.innerHTML=b}}}j<m.length?setTimeout(d,250):a&&a()}for(var h=[document.getElementsByTagName("pre"),document.getElementsByTagName("code"),document.getElementsByTagName("xmp")],m=[],e=0;e<h.length;++e)for(var i=0,s=h[e].length;i<s;++i)m.push(h[e][i]);var h=n,k=Date;k.now||(k={now:function(){return(new Date).getTime()}});
var j=0,o;d()}for(var Q="str",ia="kwd",R="com",ja="typ",S="lit",T="pun",M="pln",fa="src",sa="nocode",ha,Ga="! != !== # % %= & && &&= &= ( * *= += , -= -> / /= : :: ; < << <<= <= = == === > >= >> >>= >>> >>>= ? @ [ ^ ^= ^^ ^^= { | |= || ||= ~ break case continue delete do else finally instanceof return throw try typeof".split(" "),Z="(?:^^|[+-]",$=0;$<Ga.length;++$)Z+="|"+Ga[$].replace(/([^=<>:&a-z])/g,"\\$1");ha=Z+=")\\s*";
var A=/&/g,B=/</g,aa=/>/g,ba=/\"/g,ua=/&lt;/g,va=/&gt;/g,wa=/&apos;/g,xa=/&quot;/g,za=/&amp;/g,ya=/&nbsp;/g,Ba=/[\r\n]/g,Y=n,la=RegExp("[^<]+|<\!--[\\s\\S]*?--\>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>|</?[a-zA-Z](?:[^>\"']|'[^']*'|\"[^\"]*\")*>|<","g"),pa=/^<\!--/,qa=/^<!\[CDATA\[/,ra=/^<br\b/i,ta=/^<(\/?)([a-zA-Z][a-zA-Z0-9]*)/,Ha=N({keywords:"break continue do else for if return while auto case char const default double enum extern float goto int long register short signed sizeof static struct switch typedef union unsigned void volatile catch class delete false import new operator private protected public this throw true try typeof alignof align_union asm axiom bool concept concept_map const_cast constexpr decltype dynamic_cast explicit export friend inline late_check mutable namespace nullptr reinterpret_cast static_assert static_cast template typeid typename using virtual wchar_t where break continue do else for if return while auto case char const default double enum extern float goto int long register short signed sizeof static struct switch typedef union unsigned void volatile catch class delete false import new operator private protected public this throw true try typeof abstract boolean byte extends final finally implements import instanceof null native package strictfp super synchronized throws transient as base by checked decimal delegate descending event fixed foreach from group implicit in interface internal into is lock object out override orderby params partial readonly ref sbyte sealed stackalloc string select uint ulong unchecked unsafe ushort var break continue do else for if return while auto case char const default double enum extern float goto int long register short signed sizeof static struct switch typedef union unsigned void volatile catch class delete false import new operator private protected public this throw true try typeof debugger eval export function get null set undefined var with Infinity NaN caller delete die do dump elsif eval exit foreach for goto if import last local my next no our print package redo require sub undef unless until use wantarray while BEGIN END break continue do else for if return while and as assert class def del elif except exec finally from global import in is lambda nonlocal not or pass print raise try with yield False True None break continue do else for if return while alias and begin case class def defined elsif end ensure false in module next nil not or redo rescue retry self super then true undef unless until when yield BEGIN END break continue do else for if return while case done elif esac eval fi function in local set then until ",
hashComments:l,cStyleComments:l,multiLineStrings:l,regexLiterals:l}),X={};V(Ha,["default-code"]);V(G([],[[M,/^[^<?]+/],["dec",/^<!\w[^>]*(?:>|$)/],[R,/^<\!--[\s\S]*?(?:-\->|$)/],["lang-",/^<\?([\s\S]+?)(?:\?>|$)/],["lang-",/^<%([\s\S]+?)(?:%>|$)/],[T,/^(?:<[%?]|[%?]>)/],["lang-",/^<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[^>]*>/i],["lang-js",/^<script\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i],["lang-css",/^<style\b[^>]*>([\s\S]*?)(<\/style\b[^>]*>)/i],["lang-in.tag",/^(<\/?[a-z][^<>]*>)/i]]),"default-markup htm html mxml xhtml xml xsl".split(" "));
V(G([[M,/^[\s]+/,n," \t\r\n"],["atv",/^(?:\"[^\"]*\"?|\'[^\']*\'?)/,n,"\"'"]],[["tag",/^^<\/?[a-z](?:[\w.:-]*\w)?|\/?>$/i],["atn",/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^>\'\"\s]*(?:[^>\'\"\s\/]|\/(?=\s)))/],[T,/^[=<>\/]+/],["lang-js",/^on\w+\s*=\s*\"([^\"]+)\"/i],["lang-js",/^on\w+\s*=\s*\'([^\']+)\'/i],["lang-js",/^on\w+\s*=\s*([^\"\'>\s]+)/i],["lang-css",/^style\s*=\s*\"([^\"]+)\"/i],["lang-css",/^style\s*=\s*\'([^\']+)\'/i],["lang-css",/^style\s*=\s*([^\"\'>\s]+)/i]]),
["in.tag"]);V(G([],[["atv",/^[\s\S]+/]]),["uq.val"]);
V(N({keywords:"break continue do else for if return while auto case char const default double enum extern float goto int long register short signed sizeof static struct switch typedef union unsigned void volatile catch class delete false import new operator private protected public this throw true try typeof alignof align_union asm axiom bool concept concept_map const_cast constexpr decltype dynamic_cast explicit export friend inline late_check mutable namespace nullptr reinterpret_cast static_assert static_cast template typeid typename using virtual wchar_t where ",hashComments:l,
cStyleComments:l}),"c cc cpp cxx cyc m".split(" "));V(N({keywords:"null true false"}),["json"]);
V(N({keywords:"break continue do else for if return while auto case char const default double enum extern float goto int long register short signed sizeof static struct switch typedef union unsigned void volatile catch class delete false import new operator private protected public this throw true try typeof abstract boolean byte extends final finally implements import instanceof null native package strictfp super synchronized throws transient as base by checked decimal delegate descending event fixed foreach from group implicit in interface internal into is lock object out override orderby params partial readonly ref sbyte sealed stackalloc string select uint ulong unchecked unsafe ushort var ",hashComments:l,
cStyleComments:l,verbatimStrings:l}),["cs"]);
V(N({keywords:"break continue do else for if return while auto case char const default double enum extern float goto int long register short signed sizeof static struct switch typedef union unsigned void volatile catch class delete false import new operator private protected public this throw true try typeof abstract boolean byte extends final finally implements import instanceof null native package strictfp super synchronized throws transient ",cStyleComments:l}),["java"]);
V(N({keywords:"break continue do else for if return while case done elif esac eval fi function in local set then until ",hashComments:l,multiLineStrings:l}),["bsh","csh","sh"]);V(N({keywords:"break continue do else for if return while and as assert class def del elif except exec finally from global import in is lambda nonlocal not or pass print raise try with yield False True None ",hashComments:l,multiLineStrings:l,tripleQuotedStrings:l}),["cv","py"]);
V(N({keywords:"caller delete die do dump elsif eval exit foreach for goto if import last local my next no our print package redo require sub undef unless until use wantarray while BEGIN END ",hashComments:l,multiLineStrings:l,regexLiterals:l}),["perl","pl","pm"]);
V(N({keywords:"break continue do else for if return while alias and begin case class def defined elsif end ensure false in module next nil not or redo rescue retry self super then true undef unless until when yield BEGIN END ",hashComments:l,multiLineStrings:l,regexLiterals:l}),["rb"]);
V(N({keywords:"break continue do else for if return while auto case char const default double enum extern float goto int long register short signed sizeof static struct switch typedef union unsigned void volatile catch class delete false import new operator private protected public this throw true try typeof debugger eval export function get null set undefined var with Infinity NaN ",cStyleComments:l,regexLiterals:l}),["js"]);V(G([],[[Q,/^[\s\S]+/]]),["regex"]);window.PR_normalizedHtml=E;
window.prettyPrintOne=function(a,d){var h={f:a,e:d};ka(h);return h.a};window.prettyPrint=Aa;window.PR={combinePrefixPatterns:ea,createSimpleLexer:G,registerLangHandler:V,sourceDecorator:N,PR_ATTRIB_NAME:"atn",PR_ATTRIB_VALUE:"atv",PR_COMMENT:R,PR_DECLARATION:"dec",PR_KEYWORD:ia,PR_LITERAL:S,PR_NOCODE:sa,PR_PLAIN:M,PR_PUNCTUATION:T,PR_SOURCE:fa,PR_STRING:Q,PR_TAG:"tag",PR_TYPE:ja};Aa();