var jt=Object.defineProperty;var zt=Object.getOwnPropertyDescriptor;var w=(r,t,e,s)=>{for(var o=s>1?void 0:s?zt(t,e):t,i=r.length-1,n;i>=0;i--)(n=r[i])&&(o=(s?n(t,e,o):n(o))||o);return s&&o&&jt(t,e,o),o};var j=globalThis,z=j.ShadowRoot&&(j.ShadyCSS===void 0||j.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,V=Symbol(),it=new WeakMap,C=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==V)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(z&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=it.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&it.set(e,t))}return t}toString(){return this.cssText}},nt=r=>new C(typeof r=="string"?r:r+"",void 0,V),W=(r,...t)=>{let e=r.length===1?r[0]:t.reduce((s,o,i)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+r[i+1],r[0]);return new C(e,r,V)},at=(r,t)=>{if(z)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let s=document.createElement("style"),o=j.litNonce;o!==void 0&&s.setAttribute("nonce",o),s.textContent=e.cssText,r.appendChild(s)}},F=z?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return nt(e)})(r):r;var{is:Lt,defineProperty:Dt,getOwnPropertyDescriptor:qt,getOwnPropertyNames:Bt,getOwnPropertySymbols:It,getPrototypeOf:Vt}=Object,L=globalThis,lt=L.trustedTypes,Wt=lt?lt.emptyScript:"",Ft=L.reactiveElementPolyfillSupport,T=(r,t)=>r,R={toAttribute(r,t){switch(t){case Boolean:r=r?Wt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},D=(r,t)=>!Lt(r,t),ct={attribute:!0,type:String,converter:R,reflect:!1,useDefault:!1,hasChanged:D};Symbol.metadata??=Symbol("metadata"),L.litPropertyMetadata??=new WeakMap;var f=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=ct){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),o=this.getPropertyDescriptor(t,s,e);o!==void 0&&Dt(this.prototype,t,o)}}static getPropertyDescriptor(t,e,s){let{get:o,set:i}=qt(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:o,set(n){let l=o?.call(this);i?.call(this,n),this.requestUpdate(t,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ct}static _$Ei(){if(this.hasOwnProperty(T("elementProperties")))return;let t=Vt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(T("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(T("properties"))){let e=this.properties,s=[...Bt(e),...It(e)];for(let o of s)this.createProperty(o,e[o])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,o]of e)this.elementProperties.set(s,o)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let o=this._$Eu(e,s);o!==void 0&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let o of s)e.unshift(F(o))}else t!==void 0&&e.push(F(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return at(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){let s=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,s);if(o!==void 0&&s.reflect===!0){let i=(s.converter?.toAttribute!==void 0?s.converter:R).toAttribute(e,s.type);this._$Em=t,i==null?this.removeAttribute(o):this.setAttribute(o,i),this._$Em=null}}_$AK(t,e){let s=this.constructor,o=s._$Eh.get(t);if(o!==void 0&&this._$Em!==o){let i=s.getPropertyOptions(o),n=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:R;this._$Em=o;let l=n.fromAttribute(e,i.type);this[o]=l??this._$Ej?.get(o)??l,this._$Em=null}}requestUpdate(t,e,s,o=!1,i){if(t!==void 0){let n=this.constructor;if(o===!1&&(i=this[t]),s??=n.getPropertyOptions(t),!((s.hasChanged??D)(i,e)||s.useDefault&&s.reflect&&i===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:o,wrapped:i},n){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),i!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),o===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[o,i]of this._$Ep)this[o]=i;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[o,i]of s){let{wrapped:n}=i,l=this[o];n!==!0||this._$AL.has(o)||l===void 0||this.C(o,void 0,i,l)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};f.elementStyles=[],f.shadowRootOptions={mode:"open"},f[T("elementProperties")]=new Map,f[T("finalized")]=new Map,Ft?.({ReactiveElement:f}),(L.reactiveElementVersions??=[]).push("2.1.2");var Y=globalThis,ht=r=>r,q=Y.trustedTypes,dt=q?q.createPolicy("lit-html",{createHTML:r=>r}):void 0,_t="$lit$",$=`lit$${Math.random().toFixed(9).slice(2)}$`,yt="?"+$,Jt=`<${yt}>`,b=document,N=()=>b.createComment(""),M=r=>r===null||typeof r!="object"&&typeof r!="function",tt=Array.isArray,Kt=r=>tt(r)||typeof r?.[Symbol.iterator]=="function",J=`[ 	
\f\r]`,H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,pt=/-->/g,ut=/>/g,x=RegExp(`>|${J}(?:([^\\s"'>=/]+)(${J}*=${J}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),mt=/'/g,gt=/"/g,$t=/^(?:script|style|textarea|title)$/i,et=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),u=et(1),le=et(2),ce=et(3),S=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),ft=new WeakMap,A=b.createTreeWalker(b,129);function vt(r,t){if(!tt(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return dt!==void 0?dt.createHTML(t):t}var Gt=(r,t)=>{let e=r.length-1,s=[],o,i=t===2?"<svg>":t===3?"<math>":"",n=H;for(let l=0;l<e;l++){let a=r[l],h,p,c=-1,m=0;for(;m<a.length&&(n.lastIndex=m,p=n.exec(a),p!==null);)m=n.lastIndex,n===H?p[1]==="!--"?n=pt:p[1]!==void 0?n=ut:p[2]!==void 0?($t.test(p[2])&&(o=RegExp("</"+p[2],"g")),n=x):p[3]!==void 0&&(n=x):n===x?p[0]===">"?(n=o??H,c=-1):p[1]===void 0?c=-2:(c=n.lastIndex-p[2].length,h=p[1],n=p[3]===void 0?x:p[3]==='"'?gt:mt):n===gt||n===mt?n=x:n===pt||n===ut?n=H:(n=x,o=void 0);let g=n===x&&r[l+1].startsWith("/>")?" ":"";i+=n===H?a+Jt:c>=0?(s.push(h),a.slice(0,c)+_t+a.slice(c)+$+g):a+$+(c===-2?l:g)}return[vt(r,i+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]},U=class r{constructor({strings:t,_$litType$:e},s){let o;this.parts=[];let i=0,n=0,l=t.length-1,a=this.parts,[h,p]=Gt(t,e);if(this.el=r.createElement(h,s),A.currentNode=this.el.content,e===2||e===3){let c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(o=A.nextNode())!==null&&a.length<l;){if(o.nodeType===1){if(o.hasAttributes())for(let c of o.getAttributeNames())if(c.endsWith(_t)){let m=p[n++],g=o.getAttribute(c).split($),y=/([.?@])?(.*)/.exec(m);a.push({type:1,index:i,name:y[2],strings:g,ctor:y[1]==="."?G:y[1]==="?"?Z:y[1]==="@"?Q:P}),o.removeAttribute(c)}else c.startsWith($)&&(a.push({type:6,index:i}),o.removeAttribute(c));if($t.test(o.tagName)){let c=o.textContent.split($),m=c.length-1;if(m>0){o.textContent=q?q.emptyScript:"";for(let g=0;g<m;g++)o.append(c[g],N()),A.nextNode(),a.push({type:2,index:++i});o.append(c[m],N())}}}else if(o.nodeType===8)if(o.data===yt)a.push({type:2,index:i});else{let c=-1;for(;(c=o.data.indexOf($,c+1))!==-1;)a.push({type:7,index:i}),c+=$.length-1}i++}}static createElement(t,e){let s=b.createElement("template");return s.innerHTML=t,s}};function E(r,t,e=r,s){if(t===S)return t;let o=s!==void 0?e._$Co?.[s]:e._$Cl,i=M(t)?void 0:t._$litDirective$;return o?.constructor!==i&&(o?._$AO?.(!1),i===void 0?o=void 0:(o=new i(r),o._$AT(r,e,s)),s!==void 0?(e._$Co??=[])[s]=o:e._$Cl=o),o!==void 0&&(t=E(r,o._$AS(r,t.values),o,s)),t}var K=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:s}=this._$AD,o=(t?.creationScope??b).importNode(e,!0);A.currentNode=o;let i=A.nextNode(),n=0,l=0,a=s[0];for(;a!==void 0;){if(n===a.index){let h;a.type===2?h=new O(i,i.nextSibling,this,t):a.type===1?h=new a.ctor(i,a.name,a.strings,this,t):a.type===6&&(h=new X(i,this,t)),this._$AV.push(h),a=s[++l]}n!==a?.index&&(i=A.nextNode(),n++)}return A.currentNode=b,o}p(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},O=class r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,o){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=E(this,t,e),M(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==S&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Kt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==d&&M(this._$AH)?this._$AA.nextSibling.data=t:this.T(b.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:s}=t,o=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=U.createElement(vt(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===o)this._$AH.p(e);else{let i=new K(o,this),n=i.u(this.options);i.p(e),this.T(n),this._$AH=i}}_$AC(t){let e=ft.get(t.strings);return e===void 0&&ft.set(t.strings,e=new U(t)),e}k(t){tt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,o=0;for(let i of t)o===e.length?e.push(s=new r(this.O(N()),this.O(N()),this,this.options)):s=e[o],s._$AI(i),o++;o<e.length&&(this._$AR(s&&s._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let s=ht(t).nextSibling;ht(t).remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},P=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,o,i){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=i,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=d}_$AI(t,e=this,s,o){let i=this.strings,n=!1;if(i===void 0)t=E(this,t,e,0),n=!M(t)||t!==this._$AH&&t!==S,n&&(this._$AH=t);else{let l=t,a,h;for(t=i[0],a=0;a<i.length-1;a++)h=E(this,l[s+a],e,a),h===S&&(h=this._$AH[a]),n||=!M(h)||h!==this._$AH[a],h===d?t=d:t!==d&&(t+=(h??"")+i[a+1]),this._$AH[a]=h}n&&!o&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},G=class extends P{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}},Z=class extends P{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}},Q=class extends P{constructor(t,e,s,o,i){super(t,e,s,o,i),this.type=5}_$AI(t,e=this){if((t=E(this,t,e,0)??d)===S)return;let s=this._$AH,o=t===d&&s!==d||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,i=t!==d&&(s===d||o);o&&this.element.removeEventListener(this.name,this,s),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},X=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){E(this,t)}};var Zt=Y.litHtmlPolyfillSupport;Zt?.(U,O),(Y.litHtmlVersions??=[]).push("3.3.2");var xt=(r,t,e)=>{let s=e?.renderBefore??t,o=s._$litPart$;if(o===void 0){let i=e?.renderBefore??null;s._$litPart$=o=new O(t.insertBefore(N(),i),i,void 0,e??{})}return o._$AI(r),o};var st=globalThis,v=class extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=xt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return S}};v._$litElement$=!0,v.finalized=!0,st.litElementHydrateSupport?.({LitElement:v});var Qt=st.litElementPolyfillSupport;Qt?.({LitElement:v});(st.litElementVersions??=[]).push("4.2.2");var At=r=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(r,t)}):customElements.define(r,t)};var Xt={attribute:!0,type:String,converter:R,reflect:!1,hasChanged:D},Yt=(r=Xt,t,e)=>{let{kind:s,metadata:o}=e,i=globalThis.litPropertyMetadata.get(o);if(i===void 0&&globalThis.litPropertyMetadata.set(o,i=new Map),s==="setter"&&((r=Object.create(r)).wrapped=!0),i.set(e.name,r),s==="accessor"){let{name:n}=e;return{set(l){let a=t.get.call(this);t.set.call(this,l),this.requestUpdate(n,a,r,!0,l)},init(l){return l!==void 0&&this.C(n,void 0,r,l),l}}}if(s==="setter"){let{name:n}=e;return function(l){let a=this[n];t.call(this,l),this.requestUpdate(n,a,r,!0,l)}}throw Error("Unsupported decorator location: "+s)};function bt(r){return(t,e)=>typeof e=="object"?Yt(r,t,e):((s,o,i)=>{let n=o.hasOwnProperty(i);return o.constructor.createProperty(i,s),n?Object.getOwnPropertyDescriptor(o,i):void 0})(r,t,e)}function k(r){return bt({...r,state:!0,attribute:!1})}var St={"status.idle":"Idle","status.running":"Running","status.error":"Error",stop_all:"Stop All",next:"Next",last:"Last",no_programs:"No programs found",loading:"Loading...","time.just_now":"just now","time.minutes_ago":"{count}m ago","time.hours_ago":"{count}h ago","time.days_ago":"{count}d ago","time.today_at":"today at {time}","time.tomorrow_at":"tomorrow at {time}","time.in_days":"in {count}d","time.never":"Never","time.no_schedule":"No active program","status.running_program":"Running: {name}",stop_confirm:"Stop all watering?","schedule.daily":"Every day at {time}","schedule.every_n_days":"Every {n} days at {time}","schedule.weekdays":"{days} at {time}","recap.total_duration":"Total duration: {duration} min","days.mon":"Mon","days.tue":"Tue","days.wed":"Wed","days.thu":"Thu","days.fri":"Fri","days.sat":"Sat","days.sun":"Sun"};var wt={"status.idle":"En attente","status.running":"Arrosage en cours","status.error":"Erreur",stop_all:"Tout arr\xEAter",next:"Prochain",last:"Dernier",no_programs:"Aucun programme trouv\xE9",loading:"Chargement...","time.just_now":"\xE0 l'instant","time.minutes_ago":"il y a {count} min","time.hours_ago":"il y a {count}h","time.days_ago":"il y a {count}j","time.today_at":"aujourd'hui \xE0 {time}","time.tomorrow_at":"demain \xE0 {time}","time.in_days":"dans {count}j","time.never":"Jamais","time.no_schedule":"Aucun programme actif","status.running_program":"En cours : {name}",stop_confirm:"Arr\xEAter tout l'arrosage ?","schedule.daily":"Tous les jours \xE0 {time}","schedule.every_n_days":"Tous les {n} jours \xE0 {time}","schedule.weekdays":"{days} \xE0 {time}","recap.total_duration":"Dur\xE9e totale : {duration} min","days.mon":"Lun","days.tue":"Mar","days.wed":"Mer","days.thu":"Jeu","days.fri":"Ven","days.sat":"Sam","days.sun":"Dim"};var rt={en:St,fr:wt};function Et(r){let t=r?.toLowerCase().startsWith("fr")?"fr":"en",e=rt[t]??rt.en;return(s,o)=>{let i=e[s]??rt.en[s]??s;return o&&(i=i.replace(/\{(\w+)\}/g,(n,l)=>String(o[l]??n))),i}}var Pt=W`
  ha-card {
    padding: 16px;
  }

  /* Header */
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }
  .title {
    font-size: 18px;
    font-weight: 500;
    color: var(--primary-text-color);
  }

  /* Status badge */
  .status-row {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 12px;
    flex-wrap: wrap;
  }
  .badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 12px;
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

  /* Programs */
  .program {
    display: flex;
    align-items: center;
    padding: 10px 0;
    gap: 12px;
  }
  .program-name {
    flex: 1;
    font-size: 15px;
    color: var(--primary-text-color);
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

  /* Program header (clickable row) */
  .program-header {
    display: flex;
    align-items: center;
    cursor: pointer;
    gap: 12px;
    width: 100%;
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
  .program-wrapper {
    border-bottom: 1px solid var(--divider-color);
  }
  .program-wrapper:last-child {
    border-bottom: none;
  }
  .program-recap {
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.3s ease;
    padding-left: 20px;
  }
  .program-recap.open {
    max-height: 500px;
    padding-bottom: 8px;
  }
  .recap-schedule {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    color: var(--secondary-text-color);
    padding: 8px 0 4px;
  }
  .recap-zone {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    color: var(--primary-text-color);
    font-weight: 500;
    padding: 6px 0 2px;
  }
  .recap-valve {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 12px;
    color: var(--secondary-text-color);
    padding: 2px 0 2px 28px;
  }
  .recap-total {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    color: var(--primary-text-color);
    font-weight: 500;
    padding: 8px 0 4px;
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
    padding: 24px;
    color: var(--secondary-text-color);
    font-size: 14px;
  }

  /* Stop button */
  .stop-btn {
    background: var(--error-color);
    color: white;
    border: none;
    border-radius: 8px;
    padding: 6px 14px;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
  }
  .stop-btn:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;function Ct(r){return Object.keys(r.states).filter(t=>t.startsWith("switch.wateringhub_"))}function Tt(r,t){for(let e of t){let s=r.states[e];if(s?.state==="on")return typeof s.attributes.friendly_name=="string"?s.attributes.friendly_name:e}return null}function I(r){return r.states["sensor.wateringhub_status"]?.state??"idle"}function Rt(r,t,e){if(r==="running"&&e)return t("status.running_program",{name:e});let s=t(`status.${r}`);return s===`status.${r}`?t("status.idle"):s}function Ht(r,t){if(!r)return"";switch(r.type){case"daily":return t("schedule.daily",{time:r.time});case"every_n_days":return t("schedule.every_n_days",{n:r.n??2,time:r.time});case"weekdays":{let e=(r.days??[]).map(s=>t(`days.${s}`)).join(", ");return t("schedule.weekdays",{days:e,time:r.time})}default:return r.time}}function Nt(r){return!r||r.state==="None"||r.state==="unknown"||r.state==="unavailable"}function ot(r,t,e,s){let o=r.states[t];if(Nt(o))return e("time.never");let i=new Date(o.state);if(isNaN(i.getTime()))return o.state;let l=new Date().getTime()-i.getTime();if(l<0){let c=-l,m=Math.floor(c/(1e3*60*60));if(m<24){let y=i.toLocaleTimeString(s??[],{hour:"2-digit",minute:"2-digit"});return e("time.today_at",{time:y})}let g=Math.floor(m/24);if(g===1){let y=i.toLocaleTimeString(s??[],{hour:"2-digit",minute:"2-digit"});return e("time.tomorrow_at",{time:y})}return e("time.in_days",{count:g})}let a=Math.floor(l/(1e3*60));if(a<1)return e("time.just_now");if(a<60)return e("time.minutes_ago",{count:a});let h=Math.floor(a/60);if(h<24)return e("time.hours_ago",{count:h});let p=Math.floor(h/24);return e("time.days_ago",{count:p})}function Mt(r,t,e){let s=r.states["sensor.wateringhub_next_run"];return Nt(s)?t("time.no_schedule"):ot(r,"sensor.wateringhub_next_run",t,e)}function Ut(r,t,e,s){return u`
    <div class="header">
      <span class="title">${r}</span>
      ${t?u`<button class="stop-btn" @click=${e}>${s("stop_all")}</button>`:d}
    </div>
  `}function Ot(r,t,e){let s=I(r),o=Tt(r,t);return u`
    <div class="status-row">
      <span class="badge badge-${s}"> ${Rt(s,e,o)} </span>
      <span class="info-item"> ${e("next")}: ${Mt(r,e,r.language)} </span>
      <span class="info-item">
        ${e("last")}: ${ot(r,"sensor.wateringhub_last_run",e,r.language)}
      </span>
    </div>
  `}function kt(r,t,e,s,o,i){return t.length===0?u`<div class="no-programs">${i("no_programs")}</div>`:u`${t.map(n=>{let l=r.states[n];if(!l)return d;let a=l.state==="on",h=e===n,p=typeof l.attributes.friendly_name=="string"?l.attributes.friendly_name:n;return u`
      <div class="program-wrapper">
        <div class="program">
          <div class="program-header" @click=${()=>s(n)}>
            ${a?u`<div class="active-dot"></div>`:d}
            <span class="program-name ${a?"active":""}">${p}</span>
            <ha-icon class="chevron ${h?"open":""}" icon="mdi:chevron-down"></ha-icon>
          </div>
          <ha-switch .checked=${a} @change=${()=>o(n)}></ha-switch>
        </div>
        ${se(l.attributes,h,i)}
      </div>
    `})}`}function se(r,t,e){let s=r.schedule,o=r.zones??[],i=r.total_duration;return u`
    <div class="program-recap ${t?"open":""}">
      ${s?u`<div class="recap-schedule">
            <ha-icon icon="mdi:calendar-clock"></ha-icon>
            ${Ht(s,e)}
          </div>`:d}
      ${o.map(n=>u`
          <div class="recap-zone">
            <ha-icon icon="mdi:map-marker"></ha-icon>
            ${n.zone_name}
          </div>
          ${n.valves.map(l=>u`
              <div class="recap-valve">
                <ha-icon icon="mdi:water"></ha-icon>
                ${l.valve_name} — ${l.duration} min
              </div>
            `)}
        `)}
      ${i?u`<div class="recap-total">
            <ha-icon icon="mdi:timer-outline"></ha-icon>
            ${e("recap.total_duration",{duration:i})}
          </div>`:d}
    </div>
  `}var _=class extends v{constructor(){super(...arguments);this._programEntities=[];this._expandedProgram=null;this._t=e=>e}setConfig(e){this._config=e}set hass(e){let s=this._hass;this._hass=e,this._t=Et(e.language),s?.states!==e.states&&(this._programEntities=Ct(e))}getCardSize(){return 3}_toggleExpand(e){this._expandedProgram=this._expandedProgram===e?null:e}_toggleProgram(e){let s=this._hass.states[e];if(!s)return;let o=s.state==="on"?"turn_off":"turn_on";this._hass.callService("switch",o,{entity_id:e})}_stopAll(){confirm(this._t("stop_confirm"))&&this._hass.callService("wateringhub","stop_all",{})}render(){if(!this._hass||!this._config)return u`<ha-card>${this._t("loading")}</ha-card>`;let e=I(this._hass),s=this._config.title??"WateringHub";return u`
      <ha-card>
        ${Ut(s,e==="running",()=>this._stopAll(),this._t)}
        ${Ot(this._hass,this._programEntities,this._t)}
        ${kt(this._hass,this._programEntities,this._expandedProgram,o=>this._toggleExpand(o),o=>this._toggleProgram(o),this._t)}
      </ha-card>
    `}};_.styles=Pt,w([k()],_.prototype,"_config",2),w([k()],_.prototype,"_hass",2),w([k()],_.prototype,"_programEntities",2),w([k()],_.prototype,"_expandedProgram",2),_=w([At("wateringhub-card")],_);globalThis.customCards=globalThis.customCards||[];globalThis.customCards.push({type:"wateringhub-card",name:"WateringHub Card",description:"Watering management card for WateringHub"});export{_ as WateringHubCard};
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
