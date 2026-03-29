var It=Object.defineProperty;var Vt=Object.getOwnPropertyDescriptor;var S=(s,t,e,r)=>{for(var n=r>1?void 0:r?Vt(t,e):t,o=s.length-1,i;o>=0;o--)(i=s[o])&&(n=(r?i(t,e,n):i(n))||n);return r&&n&&It(t,e,n),n};var k=globalThis,j=k.ShadowRoot&&(k.ShadyCSS===void 0||k.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,B=Symbol(),ot=new WeakMap,T=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==B)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(j&&t===void 0){let r=e!==void 0&&e.length===1;r&&(t=ot.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&ot.set(e,t))}return t}toString(){return this.cssText}},it=s=>new T(typeof s=="string"?s:s+"",void 0,B),W=(s,...t)=>{let e=s.length===1?s[0]:t.reduce((r,n,o)=>r+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+s[o+1],s[0]);return new T(e,s,B)},at=(s,t)=>{if(j)s.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let r=document.createElement("style"),n=k.litNonce;n!==void 0&&r.setAttribute("nonce",n),r.textContent=e.cssText,s.appendChild(r)}},Z=j?s=>s:s=>s instanceof CSSStyleSheet?(t=>{let e="";for(let r of t.cssRules)e+=r.cssText;return it(e)})(s):s;var{is:Bt,defineProperty:Wt,getOwnPropertyDescriptor:Zt,getOwnPropertyNames:Ft,getOwnPropertySymbols:Jt,getPrototypeOf:Kt}=Object,D=globalThis,lt=D.trustedTypes,Gt=lt?lt.emptyScript:"",Qt=D.reactiveElementPolyfillSupport,C=(s,t)=>s,R={toAttribute(s,t){switch(t){case Boolean:s=s?Gt:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,t){let e=s;switch(t){case Boolean:e=s!==null;break;case Number:e=s===null?null:Number(s);break;case Object:case Array:try{e=JSON.parse(s)}catch{e=null}}return e}},L=(s,t)=>!Bt(s,t),ct={attribute:!0,type:String,converter:R,reflect:!1,useDefault:!1,hasChanged:L};Symbol.metadata??=Symbol("metadata"),D.litPropertyMetadata??=new WeakMap;var f=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=ct){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let r=Symbol(),n=this.getPropertyDescriptor(t,r,e);n!==void 0&&Wt(this.prototype,t,n)}}static getPropertyDescriptor(t,e,r){let{get:n,set:o}=Zt(this.prototype,t)??{get(){return this[e]},set(i){this[e]=i}};return{get:n,set(i){let l=n?.call(this);o?.call(this,i),this.requestUpdate(t,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ct}static _$Ei(){if(this.hasOwnProperty(C("elementProperties")))return;let t=Kt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(C("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(C("properties"))){let e=this.properties,r=[...Ft(e),...Jt(e)];for(let n of r)this.createProperty(n,e[n])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[r,n]of e)this.elementProperties.set(r,n)}this._$Eh=new Map;for(let[e,r]of this.elementProperties){let n=this._$Eu(e,r);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let r=new Set(t.flat(1/0).reverse());for(let n of r)e.unshift(Z(n))}else t!==void 0&&e.push(Z(t));return e}static _$Eu(t,e){let r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return at(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ET(t,e){let r=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,r);if(n!==void 0&&r.reflect===!0){let o=(r.converter?.toAttribute!==void 0?r.converter:R).toAttribute(e,r.type);this._$Em=t,o==null?this.removeAttribute(n):this.setAttribute(n,o),this._$Em=null}}_$AK(t,e){let r=this.constructor,n=r._$Eh.get(t);if(n!==void 0&&this._$Em!==n){let o=r.getPropertyOptions(n),i=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:R;this._$Em=n;let l=i.fromAttribute(e,o.type);this[n]=l??this._$Ej?.get(n)??l,this._$Em=null}}requestUpdate(t,e,r,n=!1,o){if(t!==void 0){let i=this.constructor;if(n===!1&&(o=this[t]),r??=i.getPropertyOptions(t),!((r.hasChanged??L)(o,e)||r.useDefault&&r.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,r))))return;this.C(t,e,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:r,reflect:n,wrapped:o},i){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,i??e??this[t]),o!==!0||i!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(e=void 0),this._$AL.set(t,e)),n===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[n,o]of r){let{wrapped:i}=o,l=this[n];i!==!0||this._$AL.has(n)||l===void 0||this.C(n,void 0,o,l)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(e)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};f.elementStyles=[],f.shadowRootOptions={mode:"open"},f[C("elementProperties")]=new Map,f[C("finalized")]=new Map,Qt?.({ReactiveElement:f}),(D.reactiveElementVersions??=[]).push("2.1.2");var Y=globalThis,dt=s=>s,q=Y.trustedTypes,pt=q?q.createPolicy("lit-html",{createHTML:s=>s}):void 0,vt="$lit$",y=`lit$${Math.random().toFixed(9).slice(2)}$`,_t="?"+y,Xt=`<${_t}>`,w=document,M=()=>w.createComment(""),z=s=>s===null||typeof s!="object"&&typeof s!="function",tt=Array.isArray,Yt=s=>tt(s)||typeof s?.[Symbol.iterator]=="function",F=`[ 	
\f\r]`,N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ut=/-->/g,ht=/>/g,x=RegExp(`>|${F}(?:([^\\s"'>=/]+)(${F}*=${F}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),mt=/'/g,gt=/"/g,yt=/^(?:script|style|textarea|title)$/i,et=s=>(t,...e)=>({_$litType$:s,strings:t,values:e}),h=et(1),he=et(2),me=et(3),A=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),ft=new WeakMap,b=w.createTreeWalker(w,129);function $t(s,t){if(!tt(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return pt!==void 0?pt.createHTML(t):t}var te=(s,t)=>{let e=s.length-1,r=[],n,o=t===2?"<svg>":t===3?"<math>":"",i=N;for(let l=0;l<e;l++){let a=s[l],c,u,d=-1,m=0;for(;m<a.length&&(i.lastIndex=m,u=i.exec(a),u!==null);)m=i.lastIndex,i===N?u[1]==="!--"?i=ut:u[1]!==void 0?i=ht:u[2]!==void 0?(yt.test(u[2])&&(n=RegExp("</"+u[2],"g")),i=x):u[3]!==void 0&&(i=x):i===x?u[0]===">"?(i=n??N,d=-1):u[1]===void 0?d=-2:(d=i.lastIndex-u[2].length,c=u[1],i=u[3]===void 0?x:u[3]==='"'?gt:mt):i===gt||i===mt?i=x:i===ut||i===ht?i=N:(i=x,n=void 0);let g=i===x&&s[l+1].startsWith("/>")?" ":"";o+=i===N?a+Xt:d>=0?(r.push(c),a.slice(0,d)+vt+a.slice(d)+y+g):a+y+(d===-2?l:g)}return[$t(s,o+(s[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]},H=class s{constructor({strings:t,_$litType$:e},r){let n;this.parts=[];let o=0,i=0,l=t.length-1,a=this.parts,[c,u]=te(t,e);if(this.el=s.createElement(c,r),b.currentNode=this.el.content,e===2||e===3){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(n=b.nextNode())!==null&&a.length<l;){if(n.nodeType===1){if(n.hasAttributes())for(let d of n.getAttributeNames())if(d.endsWith(vt)){let m=u[i++],g=n.getAttribute(d).split(y),_=/([.?@])?(.*)/.exec(m);a.push({type:1,index:o,name:_[2],strings:g,ctor:_[1]==="."?K:_[1]==="?"?G:_[1]==="@"?Q:P}),n.removeAttribute(d)}else d.startsWith(y)&&(a.push({type:6,index:o}),n.removeAttribute(d));if(yt.test(n.tagName)){let d=n.textContent.split(y),m=d.length-1;if(m>0){n.textContent=q?q.emptyScript:"";for(let g=0;g<m;g++)n.append(d[g],M()),b.nextNode(),a.push({type:2,index:++o});n.append(d[m],M())}}}else if(n.nodeType===8)if(n.data===_t)a.push({type:2,index:o});else{let d=-1;for(;(d=n.data.indexOf(y,d+1))!==-1;)a.push({type:7,index:o}),d+=y.length-1}o++}}static createElement(t,e){let r=w.createElement("template");return r.innerHTML=t,r}};function E(s,t,e=s,r){if(t===A)return t;let n=r!==void 0?e._$Co?.[r]:e._$Cl,o=z(t)?void 0:t._$litDirective$;return n?.constructor!==o&&(n?._$AO?.(!1),o===void 0?n=void 0:(n=new o(s),n._$AT(s,e,r)),r!==void 0?(e._$Co??=[])[r]=n:e._$Cl=n),n!==void 0&&(t=E(s,n._$AS(s,t.values),n,r)),t}var J=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:r}=this._$AD,n=(t?.creationScope??w).importNode(e,!0);b.currentNode=n;let o=b.nextNode(),i=0,l=0,a=r[0];for(;a!==void 0;){if(i===a.index){let c;a.type===2?c=new O(o,o.nextSibling,this,t):a.type===1?c=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(c=new X(o,this,t)),this._$AV.push(c),a=r[++l]}i!==a?.index&&(o=b.nextNode(),i++)}return b.currentNode=w,n}p(t){let e=0;for(let r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}},O=class s{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,r,n){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=E(this,t,e),z(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==A&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Yt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==p&&z(this._$AH)?this._$AA.nextSibling.data=t:this.T(w.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:r}=t,n=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=H.createElement($t(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===n)this._$AH.p(e);else{let o=new J(n,this),i=o.u(this.options);o.p(e),this.T(i),this._$AH=o}}_$AC(t){let e=ft.get(t.strings);return e===void 0&&ft.set(t.strings,e=new H(t)),e}k(t){tt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,r,n=0;for(let o of t)n===e.length?e.push(r=new s(this.O(M()),this.O(M()),this,this.options)):r=e[n],r._$AI(o),n++;n<e.length&&(this._$AR(r&&r._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let r=dt(t).nextSibling;dt(t).remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},P=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,n,o){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=p}_$AI(t,e=this,r,n){let o=this.strings,i=!1;if(o===void 0)t=E(this,t,e,0),i=!z(t)||t!==this._$AH&&t!==A,i&&(this._$AH=t);else{let l=t,a,c;for(t=o[0],a=0;a<o.length-1;a++)c=E(this,l[r+a],e,a),c===A&&(c=this._$AH[a]),i||=!z(c)||c!==this._$AH[a],c===p?t=p:t!==p&&(t+=(c??"")+o[a+1]),this._$AH[a]=c}i&&!n&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},K=class extends P{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}},G=class extends P{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==p)}},Q=class extends P{constructor(t,e,r,n,o){super(t,e,r,n,o),this.type=5}_$AI(t,e=this){if((t=E(this,t,e,0)??p)===A)return;let r=this._$AH,n=t===p&&r!==p||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,o=t!==p&&(r===p||n);n&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},X=class{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){E(this,t)}};var ee=Y.litHtmlPolyfillSupport;ee?.(H,O),(Y.litHtmlVersions??=[]).push("3.3.2");var xt=(s,t,e)=>{let r=e?.renderBefore??t,n=r._$litPart$;if(n===void 0){let o=e?.renderBefore??null;r._$litPart$=n=new O(t.insertBefore(M(),o),o,void 0,e??{})}return n._$AI(s),n};var rt=globalThis,$=class extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=xt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return A}};$._$litElement$=!0,$.finalized=!0,rt.litElementHydrateSupport?.({LitElement:$});var re=rt.litElementPolyfillSupport;re?.({LitElement:$});(rt.litElementVersions??=[]).push("4.2.2");var bt=s=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(s,t)}):customElements.define(s,t)};var se={attribute:!0,type:String,converter:R,reflect:!1,hasChanged:L},ne=(s=se,t,e)=>{let{kind:r,metadata:n}=e,o=globalThis.litPropertyMetadata.get(n);if(o===void 0&&globalThis.litPropertyMetadata.set(n,o=new Map),r==="setter"&&((s=Object.create(s)).wrapped=!0),o.set(e.name,s),r==="accessor"){let{name:i}=e;return{set(l){let a=t.get.call(this);t.set.call(this,l),this.requestUpdate(i,a,s,!0,l)},init(l){return l!==void 0&&this.C(i,void 0,s,l),l}}}if(r==="setter"){let{name:i}=e;return function(l){let a=this[i];t.call(this,l),this.requestUpdate(i,a,s,!0,l)}}throw Error("Unsupported decorator location: "+r)};function wt(s){return(t,e)=>typeof e=="object"?ne(s,t,e):((r,n,o)=>{let i=n.hasOwnProperty(o);return n.constructor.createProperty(o,r),i?Object.getOwnPropertyDescriptor(n,o):void 0})(s,t,e)}function U(s){return wt({...s,state:!0,attribute:!1})}var At={"status.idle":"Idle","status.running":"Running","status.error":"Error",stop_all:"Stop All",next:"Next",last:"Last",no_programs:"No programs found",loading:"Loading...","time.just_now":"just now","time.minutes_ago":"{count}m ago","time.hours_ago":"{count}h ago","time.days_ago":"{count}d ago","time.today_at":"today at {time}","time.tomorrow_at":"tomorrow at {time}","time.in_days":"in {count}d","time.never":"Never","time.no_schedule":"No active program","status.running_program":"Running: {name}",stop_confirm:"Stop all watering?","schedule.daily":"Every day at {time}","schedule.every_n_days":"Every {n} days at {time}","schedule.weekdays":"{days} at {time}","recap.total_duration":"Total duration: {duration} min","days.mon":"Mon","days.tue":"Tue","days.wed":"Wed","days.thu":"Thu","days.fri":"Fri","days.sat":"Sat","days.sun":"Sun","running.zone":"Zone: {name}","running.valve":"Valve: {name}","running.remaining":"{time} remaining","running.progress":"Valve {done} of {total}","running.global_progress":"Overall progress","error.program":"Error \u2014 {name}","error.auto_stopped":"All valves have been automatically closed."};var St={"status.idle":"En attente","status.running":"Arrosage en cours","status.error":"Erreur",stop_all:"Tout arr\xEAter",next:"Prochain",last:"Dernier",no_programs:"Aucun programme trouv\xE9",loading:"Chargement...","time.just_now":"\xE0 l'instant","time.minutes_ago":"il y a {count} min","time.hours_ago":"il y a {count}h","time.days_ago":"il y a {count}j","time.today_at":"aujourd'hui \xE0 {time}","time.tomorrow_at":"demain \xE0 {time}","time.in_days":"dans {count}j","time.never":"Jamais","time.no_schedule":"Aucun programme actif","status.running_program":"En cours : {name}",stop_confirm:"Arr\xEAter tout l'arrosage ?","schedule.daily":"Tous les jours \xE0 {time}","schedule.every_n_days":"Tous les {n} jours \xE0 {time}","schedule.weekdays":"{days} \xE0 {time}","recap.total_duration":"Dur\xE9e totale : {duration} min","days.mon":"Lun","days.tue":"Mar","days.wed":"Mer","days.thu":"Jeu","days.fri":"Ven","days.sat":"Sam","days.sun":"Dim","running.zone":"Zone : {name}","running.valve":"Vanne : {name}","running.remaining":"{time} restant","running.progress":"Vanne {done} sur {total}","running.global_progress":"Progression globale","error.program":"Erreur \u2014 {name}","error.auto_stopped":"Toutes les vannes ont \xE9t\xE9 ferm\xE9es automatiquement."};var st={en:At,fr:St};function Et(s){let t=s?.toLowerCase().startsWith("fr")?"fr":"en",e=st[t]??st.en;return(r,n)=>{let o=e[r]??st.en[r]??r;return n&&(o=o.replace(/\{(\w+)\}/g,(i,l)=>String(n[l]??i))),o}}var Pt=W`
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

  /* Error view */
  .error-view {
    border: 1px solid var(--error-color);
    border-radius: 12px;
    padding: 16px;
    margin-bottom: 20px;
  }
  .error-title {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 15px;
    font-weight: 600;
    color: var(--error-color);
    margin-bottom: 8px;
  }
  .error-title ha-icon {
    --mdc-icon-size: 20px;
    color: var(--error-color);
  }
  .error-message {
    font-size: 13px;
    color: var(--primary-text-color);
    padding: 8px 12px;
    background: var(--secondary-background-color);
    border-radius: 8px;
    margin-bottom: 8px;
    font-family: monospace;
  }
  .error-auto-stopped {
    font-size: 12px;
    color: var(--secondary-text-color);
    font-style: italic;
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
`;function Tt(s){return Object.keys(s.states).filter(t=>t.startsWith("switch.wateringhub_"))}function Ct(s,t){for(let e of t){let r=s.states[e];if(r?.state==="on")return typeof r.attributes.friendly_name=="string"?r.attributes.friendly_name:e}return null}function V(s){return s.states["sensor.wateringhub_status"]?.state??"idle"}function Rt(s,t,e){if(s==="running"&&e)return t("status.running_program",{name:e});let r=t(`status.${s}`);return r===`status.${s}`?t("status.idle"):r}function Nt(s){let t=s.states["sensor.wateringhub_status"];if(t?.state!=="error")return null;let e=t.attributes,r=e.current_program,n=r??"";if(r){let o=s.states[`switch.wateringhub_${r}`];typeof o?.attributes.friendly_name=="string"&&(n=o.attributes.friendly_name)}return{programName:n,errorMessage:e.error_message??""}}function Mt(s){let t=s.states["sensor.wateringhub_status"];if(t?.state!=="running")return null;let e=t.attributes,r=e.current_valve_start,n=e.current_valve_duration??0,o=e.valves_done??0,i=e.valves_total??1,l=r?Math.max(0,(Date.now()-new Date(r).getTime())/1e3):0,a=Math.max(0,n-l),c=n>0?Math.min(100,l/n*100):0,u=(o+c/100)/i*100;return{programName:e.current_program??"",zoneName:e.current_zone_name??"",valveName:e.current_valve_name??"",valveStart:r??"",valveDuration:n,valvesDone:o,valvesTotal:i,progressPercent:e.progress_percent??0,remaining:a,valvePercent:c,finePercent:u}}function zt(s){if(s<=0)return"0:00";let t=Math.floor(s/3600),e=Math.floor(s%3600/60),r=Math.floor(s%60);return t>0?`${t}:${e.toString().padStart(2,"0")}:${r.toString().padStart(2,"0")}`:`${e}:${r.toString().padStart(2,"0")}`}function Ht(s,t){if(!s)return"";switch(s.type){case"daily":return t("schedule.daily",{time:s.time});case"every_n_days":return t("schedule.every_n_days",{n:s.n??2,time:s.time});case"weekdays":{let e=(s.days??[]).map(r=>t(`days.${r}`)).join(", ");return t("schedule.weekdays",{days:e,time:s.time})}default:return s.time}}function Ot(s){return!s||s.state==="None"||s.state==="unknown"||s.state==="unavailable"}function nt(s,t,e,r){let n=s.states[t];if(Ot(n))return e("time.never");let o=new Date(n.state);if(Number.isNaN(o.getTime()))return n.state;let l=new Date().getTime()-o.getTime();if(l<0){let d=-l,m=Math.floor(d/(1e3*60*60));if(m<24){let _=o.toLocaleTimeString(r??[],{hour:"2-digit",minute:"2-digit"});return e("time.today_at",{time:_})}let g=Math.floor(m/24);if(g===1){let _=o.toLocaleTimeString(r??[],{hour:"2-digit",minute:"2-digit"});return e("time.tomorrow_at",{time:_})}return e("time.in_days",{count:g})}let a=Math.floor(l/(1e3*60));if(a<1)return e("time.just_now");if(a<60)return e("time.minutes_ago",{count:a});let c=Math.floor(a/60);if(c<24)return e("time.hours_ago",{count:c});let u=Math.floor(c/24);return e("time.days_ago",{count:u})}function Ut(s,t,e){let r=s.states["sensor.wateringhub_next_run"];return Ot(r)?t("time.no_schedule"):nt(s,"sensor.wateringhub_next_run",t,e)}function kt(s,t,e,r){return h`
    <div class="header">
      <span class="title">${s}</span>
      ${t?h`<button class="stop-btn" @click=${e}>${r("stop_all")}</button>`:p}
    </div>
  `}function jt(s,t,e){let r=V(s),n=Ct(s,t);return h`
    <div class="status-row">
      <span class="badge badge-${r}"> ${Rt(r,e,n)} </span>
      <span class="info-item"> ${e("next")}: ${Ut(s,e,s.language)} </span>
      <span class="info-item">
        ${e("last")}: ${nt(s,"sensor.wateringhub_last_run",e,s.language)}
      </span>
    </div>
  `}function Dt(s,t){let e=Nt(s);return e?h`
    <div class="error-view">
      <div class="error-title">
        <ha-icon icon="mdi:alert-circle"></ha-icon>
        ${t("error.program",{name:e.programName})}
      </div>
      ${e.errorMessage?h`<div class="error-message">${e.errorMessage}</div>`:p}
      <div class="error-auto-stopped">${t("error.auto_stopped")}</div>
    </div>
  `:h``}function Lt(s,t){let e=Mt(s);return e?h`
    <div class="running-view">
      <div class="running-zone">
        <ha-icon icon="mdi:map-marker"></ha-icon>
        ${t("running.zone",{name:e.zoneName})}
      </div>

      <div class="running-valve-row">
        <ha-icon icon="mdi:water"></ha-icon>
        <span class="running-valve-name">${e.valveName}</span>
        <span class="running-valve-time">
          ${t("running.remaining",{time:zt(e.remaining)})}
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
  `:h``}function qt(s,t,e,r,n,o){return t.length===0?h`<div class="no-programs">${o("no_programs")}</div>`:h`${t.map(i=>{let l=s.states[i];if(!l)return p;let a=l.state==="on",c=e===i,u=typeof l.attributes.friendly_name=="string"?l.attributes.friendly_name:i;return h`
      <div class="program-wrapper">
        <div class="program">
          <div class="program-header" @click=${()=>r(i)}>
            <ha-icon class="chevron ${c?"open":""}" icon="mdi:chevron-down"></ha-icon>
            ${a?h`<div class="active-dot"></div>`:p}
            <span class="program-name ${a?"active":""}">${u}</span>
          </div>
          <ha-switch .checked=${a} @change=${()=>n(i)}></ha-switch>
        </div>
        ${ae(l.attributes,c,o)}
      </div>
    `})}`}function ae(s,t,e){let r=s.schedule,n=s.zones??[],o=s.total_duration;return h`
    <div class="program-recap ${t?"open":""}">
      ${r?h`<div class="recap-schedule">
            <ha-icon icon="mdi:calendar-clock"></ha-icon>
            ${Ht(r,e)}
          </div>`:p}
      ${n.map(i=>h`
          <div class="recap-zone">
            <ha-icon icon="mdi:map-marker"></ha-icon>
            ${i.zone_name}
          </div>
          ${i.valves.map(l=>h`
              <div class="recap-valve">
                <ha-icon icon="mdi:water"></ha-icon>
                ${l.valve_name} — ${l.duration} min
              </div>
            `)}
        `)}
      ${o?h`<div class="recap-total">
            <ha-icon icon="mdi:timer-outline"></ha-icon>
            ${e("recap.total_duration",{duration:o})}
          </div>`:p}
    </div>
  `}var v=class extends ${constructor(){super(...arguments);this._programEntities=[];this._expandedProgram=null;this._t=e=>e}setConfig(e){this._config=e}set hass(e){let r=this._hass;this._hass=e,this._t=Et(e.language),r?.states!==e.states&&(this._programEntities=Tt(e))}getCardSize(){return 3}_toggleExpand(e){this._expandedProgram=this._expandedProgram===e?null:e}_toggleProgram(e){let r=this._hass.states[e];if(!r)return;let n=r.state==="on"?"turn_off":"turn_on";this._hass.callService("switch",n,{entity_id:e})}_stopAll(){confirm(this._t("stop_confirm"))&&this._hass.callService("wateringhub","stop_all",{})}render(){if(!this._hass||!this._config)return h`<ha-card>${this._t("loading")}</ha-card>`;let e=V(this._hass),r=this._config.title??"WateringHub";return h`
      <ha-card>
        ${kt(r,e==="running",()=>this._stopAll(),this._t)}
        ${jt(this._hass,this._programEntities,this._t)}
        ${Dt(this._hass,this._t)}
        ${Lt(this._hass,this._t)}
        ${qt(this._hass,this._programEntities,this._expandedProgram,n=>this._toggleExpand(n),n=>this._toggleProgram(n),this._t)}
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
