var Lt=Object.defineProperty;var qt=Object.getOwnPropertyDescriptor;var S=(n,t,e,r)=>{for(var s=r>1?void 0:r?qt(t,e):t,i=n.length-1,o;i>=0;i--)(o=n[i])&&(s=(r?o(t,e,s):o(s))||s);return r&&s&&Lt(t,e,s),s};var k=globalThis,j=k.ShadowRoot&&(k.ShadyCSS===void 0||k.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,B=Symbol(),it=new WeakMap,C=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==B)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(j&&t===void 0){let r=e!==void 0&&e.length===1;r&&(t=it.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&it.set(e,t))}return t}toString(){return this.cssText}},ot=n=>new C(typeof n=="string"?n:n+"",void 0,B),W=(n,...t)=>{let e=n.length===1?n[0]:t.reduce((r,s,i)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[i+1],n[0]);return new C(e,n,B)},at=(n,t)=>{if(j)n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let r=document.createElement("style"),s=k.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=e.cssText,n.appendChild(r)}},Z=j?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(let r of t.cssRules)e+=r.cssText;return ot(e)})(n):n;var{is:It,defineProperty:Vt,getOwnPropertyDescriptor:Bt,getOwnPropertyNames:Wt,getOwnPropertySymbols:Zt,getPrototypeOf:Ft}=Object,D=globalThis,lt=D.trustedTypes,Jt=lt?lt.emptyScript:"",Kt=D.reactiveElementPolyfillSupport,T=(n,t)=>n,R={toAttribute(n,t){switch(t){case Boolean:n=n?Jt:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},L=(n,t)=>!It(n,t),ct={attribute:!0,type:String,converter:R,reflect:!1,useDefault:!1,hasChanged:L};Symbol.metadata??=Symbol("metadata"),D.litPropertyMetadata??=new WeakMap;var f=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=ct){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let r=Symbol(),s=this.getPropertyDescriptor(t,r,e);s!==void 0&&Vt(this.prototype,t,s)}}static getPropertyDescriptor(t,e,r){let{get:s,set:i}=Bt(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get:s,set(o){let l=s?.call(this);i?.call(this,o),this.requestUpdate(t,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ct}static _$Ei(){if(this.hasOwnProperty(T("elementProperties")))return;let t=Ft(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(T("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(T("properties"))){let e=this.properties,r=[...Wt(e),...Zt(e)];for(let s of r)this.createProperty(s,e[s])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[r,s]of e)this.elementProperties.set(r,s)}this._$Eh=new Map;for(let[e,r]of this.elementProperties){let s=this._$Eu(e,r);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let r=new Set(t.flat(1/0).reverse());for(let s of r)e.unshift(Z(s))}else t!==void 0&&e.push(Z(t));return e}static _$Eu(t,e){let r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return at(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ET(t,e){let r=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,r);if(s!==void 0&&r.reflect===!0){let i=(r.converter?.toAttribute!==void 0?r.converter:R).toAttribute(e,r.type);this._$Em=t,i==null?this.removeAttribute(s):this.setAttribute(s,i),this._$Em=null}}_$AK(t,e){let r=this.constructor,s=r._$Eh.get(t);if(s!==void 0&&this._$Em!==s){let i=r.getPropertyOptions(s),o=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:R;this._$Em=s;let l=o.fromAttribute(e,i.type);this[s]=l??this._$Ej?.get(s)??l,this._$Em=null}}requestUpdate(t,e,r,s=!1,i){if(t!==void 0){let o=this.constructor;if(s===!1&&(i=this[t]),r??=o.getPropertyOptions(t),!((r.hasChanged??L)(i,e)||r.useDefault&&r.reflect&&i===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,r))))return;this.C(t,e,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:r,reflect:s,wrapped:i},o){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),i!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(e=void 0),this._$AL.set(t,e)),s===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[s,i]of this._$Ep)this[s]=i;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[s,i]of r){let{wrapped:o}=i,l=this[s];o!==!0||this._$AL.has(s)||l===void 0||this.C(s,void 0,i,l)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(e)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};f.elementStyles=[],f.shadowRootOptions={mode:"open"},f[T("elementProperties")]=new Map,f[T("finalized")]=new Map,Kt?.({ReactiveElement:f}),(D.reactiveElementVersions??=[]).push("2.1.2");var Y=globalThis,dt=n=>n,q=Y.trustedTypes,pt=q?q.createPolicy("lit-html",{createHTML:n=>n}):void 0,vt="$lit$",y=`lit$${Math.random().toFixed(9).slice(2)}$`,_t="?"+y,Gt=`<${_t}>`,A=document,M=()=>A.createComment(""),H=n=>n===null||typeof n!="object"&&typeof n!="function",tt=Array.isArray,Qt=n=>tt(n)||typeof n?.[Symbol.iterator]=="function",F=`[ 	
\f\r]`,N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ht=/-->/g,ut=/>/g,x=RegExp(`>|${F}(?:([^\\s"'>=/]+)(${F}*=${F}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),mt=/'/g,gt=/"/g,yt=/^(?:script|style|textarea|title)$/i,et=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),u=et(1),pe=et(2),he=et(3),w=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),ft=new WeakMap,b=A.createTreeWalker(A,129);function $t(n,t){if(!tt(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return pt!==void 0?pt.createHTML(t):t}var Xt=(n,t)=>{let e=n.length-1,r=[],s,i=t===2?"<svg>":t===3?"<math>":"",o=N;for(let l=0;l<e;l++){let a=n[l],c,h,d=-1,m=0;for(;m<a.length&&(o.lastIndex=m,h=o.exec(a),h!==null);)m=o.lastIndex,o===N?h[1]==="!--"?o=ht:h[1]!==void 0?o=ut:h[2]!==void 0?(yt.test(h[2])&&(s=RegExp("</"+h[2],"g")),o=x):h[3]!==void 0&&(o=x):o===x?h[0]===">"?(o=s??N,d=-1):h[1]===void 0?d=-2:(d=o.lastIndex-h[2].length,c=h[1],o=h[3]===void 0?x:h[3]==='"'?gt:mt):o===gt||o===mt?o=x:o===ht||o===ut?o=N:(o=x,s=void 0);let g=o===x&&n[l+1].startsWith("/>")?" ":"";i+=o===N?a+Gt:d>=0?(r.push(c),a.slice(0,d)+vt+a.slice(d)+y+g):a+y+(d===-2?l:g)}return[$t(n,i+(n[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]},z=class n{constructor({strings:t,_$litType$:e},r){let s;this.parts=[];let i=0,o=0,l=t.length-1,a=this.parts,[c,h]=Xt(t,e);if(this.el=n.createElement(c,r),b.currentNode=this.el.content,e===2||e===3){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(s=b.nextNode())!==null&&a.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(let d of s.getAttributeNames())if(d.endsWith(vt)){let m=h[o++],g=s.getAttribute(d).split(y),_=/([.?@])?(.*)/.exec(m);a.push({type:1,index:i,name:_[2],strings:g,ctor:_[1]==="."?K:_[1]==="?"?G:_[1]==="@"?Q:P}),s.removeAttribute(d)}else d.startsWith(y)&&(a.push({type:6,index:i}),s.removeAttribute(d));if(yt.test(s.tagName)){let d=s.textContent.split(y),m=d.length-1;if(m>0){s.textContent=q?q.emptyScript:"";for(let g=0;g<m;g++)s.append(d[g],M()),b.nextNode(),a.push({type:2,index:++i});s.append(d[m],M())}}}else if(s.nodeType===8)if(s.data===_t)a.push({type:2,index:i});else{let d=-1;for(;(d=s.data.indexOf(y,d+1))!==-1;)a.push({type:7,index:i}),d+=y.length-1}i++}}static createElement(t,e){let r=A.createElement("template");return r.innerHTML=t,r}};function E(n,t,e=n,r){if(t===w)return t;let s=r!==void 0?e._$Co?.[r]:e._$Cl,i=H(t)?void 0:t._$litDirective$;return s?.constructor!==i&&(s?._$AO?.(!1),i===void 0?s=void 0:(s=new i(n),s._$AT(n,e,r)),r!==void 0?(e._$Co??=[])[r]=s:e._$Cl=s),s!==void 0&&(t=E(n,s._$AS(n,t.values),s,r)),t}var J=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:r}=this._$AD,s=(t?.creationScope??A).importNode(e,!0);b.currentNode=s;let i=b.nextNode(),o=0,l=0,a=r[0];for(;a!==void 0;){if(o===a.index){let c;a.type===2?c=new O(i,i.nextSibling,this,t):a.type===1?c=new a.ctor(i,a.name,a.strings,this,t):a.type===6&&(c=new X(i,this,t)),this._$AV.push(c),a=r[++l]}o!==a?.index&&(i=b.nextNode(),o++)}return b.currentNode=A,s}p(t){let e=0;for(let r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}},O=class n{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,r,s){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=E(this,t,e),H(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==w&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Qt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==p&&H(this._$AH)?this._$AA.nextSibling.data=t:this.T(A.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:r}=t,s=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=z.createElement($t(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===s)this._$AH.p(e);else{let i=new J(s,this),o=i.u(this.options);i.p(e),this.T(o),this._$AH=i}}_$AC(t){let e=ft.get(t.strings);return e===void 0&&ft.set(t.strings,e=new z(t)),e}k(t){tt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,r,s=0;for(let i of t)s===e.length?e.push(r=new n(this.O(M()),this.O(M()),this,this.options)):r=e[s],r._$AI(i),s++;s<e.length&&(this._$AR(r&&r._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let r=dt(t).nextSibling;dt(t).remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},P=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,s,i){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=p}_$AI(t,e=this,r,s){let i=this.strings,o=!1;if(i===void 0)t=E(this,t,e,0),o=!H(t)||t!==this._$AH&&t!==w,o&&(this._$AH=t);else{let l=t,a,c;for(t=i[0],a=0;a<i.length-1;a++)c=E(this,l[r+a],e,a),c===w&&(c=this._$AH[a]),o||=!H(c)||c!==this._$AH[a],c===p?t=p:t!==p&&(t+=(c??"")+i[a+1]),this._$AH[a]=c}o&&!s&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},K=class extends P{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}},G=class extends P{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==p)}},Q=class extends P{constructor(t,e,r,s,i){super(t,e,r,s,i),this.type=5}_$AI(t,e=this){if((t=E(this,t,e,0)??p)===w)return;let r=this._$AH,s=t===p&&r!==p||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,i=t!==p&&(r===p||s);s&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},X=class{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){E(this,t)}};var Yt=Y.litHtmlPolyfillSupport;Yt?.(z,O),(Y.litHtmlVersions??=[]).push("3.3.2");var xt=(n,t,e)=>{let r=e?.renderBefore??t,s=r._$litPart$;if(s===void 0){let i=e?.renderBefore??null;r._$litPart$=s=new O(t.insertBefore(M(),i),i,void 0,e??{})}return s._$AI(n),s};var rt=globalThis,$=class extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=xt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return w}};$._$litElement$=!0,$.finalized=!0,rt.litElementHydrateSupport?.({LitElement:$});var te=rt.litElementPolyfillSupport;te?.({LitElement:$});(rt.litElementVersions??=[]).push("4.2.2");var bt=n=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(n,t)}):customElements.define(n,t)};var ee={attribute:!0,type:String,converter:R,reflect:!1,hasChanged:L},re=(n=ee,t,e)=>{let{kind:r,metadata:s}=e,i=globalThis.litPropertyMetadata.get(s);if(i===void 0&&globalThis.litPropertyMetadata.set(s,i=new Map),r==="setter"&&((n=Object.create(n)).wrapped=!0),i.set(e.name,n),r==="accessor"){let{name:o}=e;return{set(l){let a=t.get.call(this);t.set.call(this,l),this.requestUpdate(o,a,n,!0,l)},init(l){return l!==void 0&&this.C(o,void 0,n,l),l}}}if(r==="setter"){let{name:o}=e;return function(l){let a=this[o];t.call(this,l),this.requestUpdate(o,a,n,!0,l)}}throw Error("Unsupported decorator location: "+r)};function At(n){return(t,e)=>typeof e=="object"?re(n,t,e):((r,s,i)=>{let o=s.hasOwnProperty(i);return s.constructor.createProperty(i,r),o?Object.getOwnPropertyDescriptor(s,i):void 0})(n,t,e)}function U(n){return At({...n,state:!0,attribute:!1})}var wt={"status.idle":"Idle","status.running":"Running","status.error":"Error",stop_all:"Stop All",next:"Next",last:"Last",no_programs:"No programs found",loading:"Loading...","time.just_now":"just now","time.minutes_ago":"{count}m ago","time.hours_ago":"{count}h ago","time.days_ago":"{count}d ago","time.today_at":"today at {time}","time.tomorrow_at":"tomorrow at {time}","time.in_days":"in {count}d","time.never":"Never","time.no_schedule":"No active program","status.running_program":"Running: {name}",stop_confirm:"Stop all watering?","schedule.daily":"Every day at {time}","schedule.every_n_days":"Every {n} days at {time}","schedule.weekdays":"{days} at {time}","recap.total_duration":"Total duration: {duration} min","days.mon":"Mon","days.tue":"Tue","days.wed":"Wed","days.thu":"Thu","days.fri":"Fri","days.sat":"Sat","days.sun":"Sun","running.zone":"Zone: {name}","running.valve":"Valve: {name}","running.remaining":"{time} remaining","running.progress":"Valve {done} of {total}","running.global_progress":"Overall progress"};var St={"status.idle":"En attente","status.running":"Arrosage en cours","status.error":"Erreur",stop_all:"Tout arr\xEAter",next:"Prochain",last:"Dernier",no_programs:"Aucun programme trouv\xE9",loading:"Chargement...","time.just_now":"\xE0 l'instant","time.minutes_ago":"il y a {count} min","time.hours_ago":"il y a {count}h","time.days_ago":"il y a {count}j","time.today_at":"aujourd'hui \xE0 {time}","time.tomorrow_at":"demain \xE0 {time}","time.in_days":"dans {count}j","time.never":"Jamais","time.no_schedule":"Aucun programme actif","status.running_program":"En cours : {name}",stop_confirm:"Arr\xEAter tout l'arrosage ?","schedule.daily":"Tous les jours \xE0 {time}","schedule.every_n_days":"Tous les {n} jours \xE0 {time}","schedule.weekdays":"{days} \xE0 {time}","recap.total_duration":"Dur\xE9e totale : {duration} min","days.mon":"Lun","days.tue":"Mar","days.wed":"Mer","days.thu":"Jeu","days.fri":"Ven","days.sat":"Sam","days.sun":"Dim","running.zone":"Zone : {name}","running.valve":"Vanne : {name}","running.remaining":"{time} restant","running.progress":"Vanne {done} sur {total}","running.global_progress":"Progression globale"};var nt={en:wt,fr:St};function Et(n){let t=n?.toLowerCase().startsWith("fr")?"fr":"en",e=nt[t]??nt.en;return(r,s)=>{let i=e[r]??nt.en[r]??r;return s&&(i=i.replace(/\{(\w+)\}/g,(o,l)=>String(s[l]??o))),i}}var Pt=W`
  ha-card {
    padding: 20px;
  }

  /* Header */
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  .title {
    font-size: 20px;
    font-weight: 500;
    color: var(--primary-text-color);
  }

  /* Status badge */
  .status-row {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 20px;
    flex-wrap: wrap;
  }
  .badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 14px;
    border-radius: 12px;
    font-size: 13px;
    font-weight: 500;
    color: white;
  }
  .badge-idle {
    background: var(--success-color);
  }
  .badge-running {
    background: var(--warning-color);
    animation: pulse 2s ease-in-out infinite;
  }
  .badge-error {
    background: var(--error-color);
  }
  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.7;
    }
  }
  .info-item {
    font-size: 13px;
    color: var(--secondary-text-color);
  }

  /* Running view */
  .running-view {
    border: 1px solid var(--divider-color);
    border-radius: 12px;
    padding: 16px;
    margin-bottom: 20px;
  }
  .running-zone {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    font-weight: 500;
    color: var(--primary-text-color);
    margin-bottom: 12px;
  }
  .running-zone ha-icon {
    --mdc-icon-size: 18px;
    color: var(--secondary-text-color);
  }
  .running-valve-row {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    color: var(--primary-text-color);
    margin-bottom: 8px;
  }
  .running-valve-row ha-icon {
    --mdc-icon-size: 18px;
    color: var(--primary-color);
  }
  .running-valve-name {
    flex: 1;
  }
  .running-valve-time {
    font-size: 13px;
    font-weight: 600;
    color: var(--primary-color);
    white-space: nowrap;
  }
  .running-bar-section {
    margin-bottom: 16px;
  }
  .running-bar {
    height: 8px;
    border-radius: 4px;
    background: var(--divider-color);
    overflow: hidden;
  }
  .running-bar-fill {
    height: 100%;
    border-radius: 4px;
    background: var(--primary-color);
    transition: width 1s linear;
  }
  .running-bar-fill.global {
    background: var(--warning-color);
  }
  .running-global {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .running-global-label {
    font-size: 12px;
    color: var(--secondary-text-color);
  }

  /* Programs */
  .program-wrapper {
    border-bottom: 1px solid var(--divider-color);
    padding: 4px 0;
  }
  .program-wrapper:last-child {
    border-bottom: none;
  }
  .program {
    display: flex;
    align-items: center;
    padding: 12px 0;
    gap: 12px;
  }
  .program-header {
    display: flex;
    align-items: center;
    cursor: pointer;
    gap: 12px;
    flex: 1;
    min-width: 0;
  }
  .program-name {
    flex: 1;
    font-size: 15px;
    color: var(--primary-text-color);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .program-name.active {
    font-weight: 600;
  }
  .active-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--primary-color);
    flex-shrink: 0;
  }
  .chevron {
    transition: transform 0.2s;
    color: var(--secondary-text-color);
    flex-shrink: 0;
    --mdc-icon-size: 20px;
  }
  .chevron.open {
    transform: rotate(180deg);
  }

  /* Program recap (accordion content) */
  .program-recap {
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.3s ease;
    padding-left: 32px;
  }
  .program-recap.open {
    max-height: 500px;
    padding-bottom: 12px;
  }
  .recap-schedule {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    color: var(--secondary-text-color);
    padding: 10px 0 6px;
  }
  .recap-zone {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    color: var(--primary-text-color);
    font-weight: 500;
    padding: 8px 0 4px;
  }
  .recap-valve {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 12px;
    color: var(--secondary-text-color);
    padding: 4px 0 4px 28px;
  }
  .recap-total {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    color: var(--primary-text-color);
    font-weight: 500;
    padding: 10px 0 4px;
    border-top: 1px solid var(--divider-color);
    margin-top: 6px;
  }
  .recap-schedule ha-icon,
  .recap-zone ha-icon,
  .recap-valve ha-icon,
  .recap-total ha-icon {
    --mdc-icon-size: 18px;
    color: var(--secondary-text-color);
  }

  /* No programs */
  .no-programs {
    text-align: center;
    padding: 32px;
    color: var(--secondary-text-color);
    font-size: 14px;
  }

  /* Stop button */
  .stop-btn {
    background: var(--error-color);
    color: white;
    border: none;
    border-radius: 8px;
    padding: 8px 16px;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    transition: opacity 0.2s;
  }
  .stop-btn:hover {
    opacity: 0.85;
  }
  .stop-btn:active {
    opacity: 0.7;
  }
  .stop-btn:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;function Ct(n){return Object.keys(n.states).filter(t=>t.startsWith("switch.wateringhub_"))}function Tt(n,t){for(let e of t){let r=n.states[e];if(r?.state==="on")return typeof r.attributes.friendly_name=="string"?r.attributes.friendly_name:e}return null}function V(n){return n.states["sensor.wateringhub_status"]?.state??"idle"}function Rt(n,t,e){if(n==="running"&&e)return t("status.running_program",{name:e});let r=t(`status.${n}`);return r===`status.${n}`?t("status.idle"):r}function Nt(n){let t=n.states["sensor.wateringhub_status"];if(!t||t.state!=="running")return null;let e=t.attributes,r=e.current_valve_start,s=e.current_valve_duration??0,i=e.valves_done??0,o=e.valves_total??1,l=r?Math.max(0,(Date.now()-new Date(r).getTime())/1e3):0,a=Math.max(0,s-l),c=s>0?Math.min(100,l/s*100):0,h=(i+c/100)/o*100;return{programName:e.current_program??"",zoneName:e.current_zone_name??"",valveName:e.current_valve_name??"",valveStart:r??"",valveDuration:s,valvesDone:i,valvesTotal:o,progressPercent:e.progress_percent??0,remaining:a,valvePercent:c,finePercent:h}}function Mt(n){if(n<=0)return"0:00";let t=Math.floor(n/3600),e=Math.floor(n%3600/60),r=Math.floor(n%60);return t>0?`${t}:${e.toString().padStart(2,"0")}:${r.toString().padStart(2,"0")}`:`${e}:${r.toString().padStart(2,"0")}`}function Ht(n,t){if(!n)return"";switch(n.type){case"daily":return t("schedule.daily",{time:n.time});case"every_n_days":return t("schedule.every_n_days",{n:n.n??2,time:n.time});case"weekdays":{let e=(n.days??[]).map(r=>t(`days.${r}`)).join(", ");return t("schedule.weekdays",{days:e,time:n.time})}default:return n.time}}function zt(n){return!n||n.state==="None"||n.state==="unknown"||n.state==="unavailable"}function st(n,t,e,r){let s=n.states[t];if(zt(s))return e("time.never");let i=new Date(s.state);if(isNaN(i.getTime()))return s.state;let l=new Date().getTime()-i.getTime();if(l<0){let d=-l,m=Math.floor(d/(1e3*60*60));if(m<24){let _=i.toLocaleTimeString(r??[],{hour:"2-digit",minute:"2-digit"});return e("time.today_at",{time:_})}let g=Math.floor(m/24);if(g===1){let _=i.toLocaleTimeString(r??[],{hour:"2-digit",minute:"2-digit"});return e("time.tomorrow_at",{time:_})}return e("time.in_days",{count:g})}let a=Math.floor(l/(1e3*60));if(a<1)return e("time.just_now");if(a<60)return e("time.minutes_ago",{count:a});let c=Math.floor(a/60);if(c<24)return e("time.hours_ago",{count:c});let h=Math.floor(c/24);return e("time.days_ago",{count:h})}function Ot(n,t,e){let r=n.states["sensor.wateringhub_next_run"];return zt(r)?t("time.no_schedule"):st(n,"sensor.wateringhub_next_run",t,e)}function Ut(n,t,e,r){return u`
    <div class="header">
      <span class="title">${n}</span>
      ${t?u`<button class="stop-btn" @click=${e}>${r("stop_all")}</button>`:p}
    </div>
  `}function kt(n,t,e){let r=V(n),s=Tt(n,t);return u`
    <div class="status-row">
      <span class="badge badge-${r}"> ${Rt(r,e,s)} </span>
      <span class="info-item"> ${e("next")}: ${Ot(n,e,n.language)} </span>
      <span class="info-item">
        ${e("last")}: ${st(n,"sensor.wateringhub_last_run",e,n.language)}
      </span>
    </div>
  `}function jt(n,t){let e=Nt(n);return e?u`
    <div class="running-view">
      <div class="running-zone">
        <ha-icon icon="mdi:map-marker"></ha-icon>
        ${t("running.zone",{name:e.zoneName})}
      </div>

      <div class="running-valve-row">
        <ha-icon icon="mdi:water"></ha-icon>
        <span class="running-valve-name">${e.valveName}</span>
        <span class="running-valve-time">
          ${t("running.remaining",{time:Mt(e.remaining)})}
        </span>
      </div>

      <div class="running-bar-section">
        <div class="running-bar">
          <div class="running-bar-fill" style="width: ${e.valvePercent}%"></div>
        </div>
      </div>

      <div class="running-global">
        <span class="running-global-label">
          ${t("running.progress",{done:e.valvesDone+1,total:e.valvesTotal})}
        </span>
        <div class="running-bar">
          <div class="running-bar-fill global" style="width: ${e.finePercent}%"></div>
        </div>
      </div>
    </div>
  `:u``}function Dt(n,t,e,r,s,i){return t.length===0?u`<div class="no-programs">${i("no_programs")}</div>`:u`${t.map(o=>{let l=n.states[o];if(!l)return p;let a=l.state==="on",c=e===o,h=typeof l.attributes.friendly_name=="string"?l.attributes.friendly_name:o;return u`
      <div class="program-wrapper">
        <div class="program">
          <div class="program-header" @click=${()=>r(o)}>
            <ha-icon
              class="chevron ${c?"open":""}"
              icon="mdi:chevron-down"
            ></ha-icon>
            ${a?u`<div class="active-dot"></div>`:p}
            <span class="program-name ${a?"active":""}">${h}</span>
          </div>
          <ha-switch .checked=${a} @change=${()=>s(o)}></ha-switch>
        </div>
        ${ie(l.attributes,c,i)}
      </div>
    `})}`}function ie(n,t,e){let r=n.schedule,s=n.zones??[],i=n.total_duration;return u`
    <div class="program-recap ${t?"open":""}">
      ${r?u`<div class="recap-schedule">
            <ha-icon icon="mdi:calendar-clock"></ha-icon>
            ${Ht(r,e)}
          </div>`:p}
      ${s.map(o=>u`
          <div class="recap-zone">
            <ha-icon icon="mdi:map-marker"></ha-icon>
            ${o.zone_name}
          </div>
          ${o.valves.map(l=>u`
              <div class="recap-valve">
                <ha-icon icon="mdi:water"></ha-icon>
                ${l.valve_name} — ${l.duration} min
              </div>
            `)}
        `)}
      ${i?u`<div class="recap-total">
            <ha-icon icon="mdi:timer-outline"></ha-icon>
            ${e("recap.total_duration",{duration:i})}
          </div>`:p}
    </div>
  `}var v=class extends ${constructor(){super(...arguments);this._programEntities=[];this._expandedProgram=null;this._t=e=>e}setConfig(e){this._config=e}set hass(e){let r=this._hass;this._hass=e,this._t=Et(e.language),r?.states!==e.states&&(this._programEntities=Ct(e))}getCardSize(){return 3}_toggleExpand(e){this._expandedProgram=this._expandedProgram===e?null:e}_toggleProgram(e){let r=this._hass.states[e];if(!r)return;let s=r.state==="on"?"turn_off":"turn_on";this._hass.callService("switch",s,{entity_id:e})}_stopAll(){confirm(this._t("stop_confirm"))&&this._hass.callService("wateringhub","stop_all",{})}render(){if(!this._hass||!this._config)return u`<ha-card>${this._t("loading")}</ha-card>`;let e=V(this._hass),r=this._config.title??"WateringHub";return u`
      <ha-card>
        ${Ut(r,e==="running",()=>this._stopAll(),this._t)}
        ${kt(this._hass,this._programEntities,this._t)}
        ${jt(this._hass,this._t)}
        ${Dt(this._hass,this._programEntities,this._expandedProgram,s=>this._toggleExpand(s),s=>this._toggleProgram(s),this._t)}
      </ha-card>
    `}};v.styles=Pt,S([U()],v.prototype,"_config",2),S([U()],v.prototype,"_hass",2),S([U()],v.prototype,"_programEntities",2),S([U()],v.prototype,"_expandedProgram",2),v=S([bt("wateringhub-card")],v);globalThis.customCards=globalThis.customCards||[];globalThis.customCards.push({type:"wateringhub-card",name:"WateringHub Card",description:"Watering management card for WateringHub"});export{v as WateringHubCard};
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
lit-html/lit-html.js:
lit-element/lit-element.js:
@lit/reactive-element/decorators/custom-element.js:
@lit/reactive-element/decorators/property.js:
@lit/reactive-element/decorators/state.js:
@lit/reactive-element/decorators/event-options.js:
@lit/reactive-element/decorators/base.js:
@lit/reactive-element/decorators/query.js:
@lit/reactive-element/decorators/query-all.js:
@lit/reactive-element/decorators/query-async.js:
@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
