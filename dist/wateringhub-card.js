var Ot=Object.defineProperty;var Ht=Object.getOwnPropertyDescriptor;var C=(i,t,e,s)=>{for(var r=s>1?void 0:s?Ht(t,e):t,o=i.length-1,n;o>=0;o--)(n=i[o])&&(r=(s?n(t,e,r):n(r))||r);return s&&r&&Ot(t,e,r),r};var j=globalThis,k=j.ShadowRoot&&(j.ShadyCSS===void 0||j.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,I=Symbol(),it=new WeakMap,P=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==I)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(k&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=it.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&it.set(e,t))}return t}toString(){return this.cssText}},ot=i=>new P(typeof i=="string"?i:i+"",void 0,I),V=(i,...t)=>{let e=i.length===1?i[0]:t.reduce((s,r,o)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[o+1],i[0]);return new P(e,i,I)},nt=(i,t)=>{if(k)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let s=document.createElement("style"),r=j.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=e.cssText,i.appendChild(s)}},W=k?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return ot(e)})(i):i;var{is:Mt,defineProperty:jt,getOwnPropertyDescriptor:kt,getOwnPropertyNames:Lt,getOwnPropertySymbols:Dt,getPrototypeOf:zt}=Object,L=globalThis,at=L.trustedTypes,qt=at?at.emptyScript:"",Bt=L.reactiveElementPolyfillSupport,T=(i,t)=>i,R={toAttribute(i,t){switch(t){case Boolean:i=i?qt:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},D=(i,t)=>!Mt(i,t),ht={attribute:!0,type:String,converter:R,reflect:!1,useDefault:!1,hasChanged:D};Symbol.metadata??=Symbol("metadata"),L.litPropertyMetadata??=new WeakMap;var g=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=ht){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),r=this.getPropertyDescriptor(t,s,e);r!==void 0&&jt(this.prototype,t,r)}}static getPropertyDescriptor(t,e,s){let{get:r,set:o}=kt(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:r,set(n){let h=r?.call(this);o?.call(this,n),this.requestUpdate(t,h,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ht}static _$Ei(){if(this.hasOwnProperty(T("elementProperties")))return;let t=zt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(T("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(T("properties"))){let e=this.properties,s=[...Lt(e),...Dt(e)];for(let r of s)this.createProperty(r,e[r])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,r]of e)this.elementProperties.set(s,r)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let r=this._$Eu(e,s);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let r of s)e.unshift(W(r))}else t!==void 0&&e.push(W(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return nt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){let s=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,s);if(r!==void 0&&s.reflect===!0){let o=(s.converter?.toAttribute!==void 0?s.converter:R).toAttribute(e,s.type);this._$Em=t,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(t,e){let s=this.constructor,r=s._$Eh.get(t);if(r!==void 0&&this._$Em!==r){let o=s.getPropertyOptions(r),n=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:R;this._$Em=r;let h=n.fromAttribute(e,o.type);this[r]=h??this._$Ej?.get(r)??h,this._$Em=null}}requestUpdate(t,e,s,r=!1,o){if(t!==void 0){let n=this.constructor;if(r===!1&&(o=this[t]),s??=n.getPropertyOptions(t),!((s.hasChanged??D)(o,e)||s.useDefault&&s.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:r,wrapped:o},n){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),o!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),r===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[r,o]of s){let{wrapped:n}=o,h=this[r];n!==!0||this._$AL.has(r)||h===void 0||this.C(r,void 0,o,h)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};g.elementStyles=[],g.shadowRootOptions={mode:"open"},g[T("elementProperties")]=new Map,g[T("finalized")]=new Map,Bt?.({ReactiveElement:g}),(L.reactiveElementVersions??=[]).push("2.1.2");var X=globalThis,lt=i=>i,z=X.trustedTypes,ct=z?z.createPolicy("lit-html",{createHTML:i=>i}):void 0,ft="$lit$",_=`lit$${Math.random().toFixed(9).slice(2)}$`,_t="?"+_,It=`<${_t}>`,b=document,U=()=>b.createComment(""),O=i=>i===null||typeof i!="object"&&typeof i!="function",Y=Array.isArray,Vt=i=>Y(i)||typeof i?.[Symbol.iterator]=="function",K=`[ 	
\f\r]`,N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,pt=/-->/g,dt=/>/g,v=RegExp(`>|${K}(?:([^\\s"'>=/]+)(${K}*=${K}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ut=/'/g,mt=/"/g,$t=/^(?:script|style|textarea|title)$/i,tt=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),S=tt(1),re=tt(2),ie=tt(3),x=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),gt=new WeakMap,A=b.createTreeWalker(b,129);function yt(i,t){if(!Y(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return ct!==void 0?ct.createHTML(t):t}var Wt=(i,t)=>{let e=i.length-1,s=[],r,o=t===2?"<svg>":t===3?"<math>":"",n=N;for(let h=0;h<e;h++){let a=i[h],c,d,l=-1,u=0;for(;u<a.length&&(n.lastIndex=u,d=n.exec(a),d!==null);)u=n.lastIndex,n===N?d[1]==="!--"?n=pt:d[1]!==void 0?n=dt:d[2]!==void 0?($t.test(d[2])&&(r=RegExp("</"+d[2],"g")),n=v):d[3]!==void 0&&(n=v):n===v?d[0]===">"?(n=r??N,l=-1):d[1]===void 0?l=-2:(l=n.lastIndex-d[2].length,c=d[1],n=d[3]===void 0?v:d[3]==='"'?mt:ut):n===mt||n===ut?n=v:n===pt||n===dt?n=N:(n=v,r=void 0);let m=n===v&&i[h+1].startsWith("/>")?" ":"";o+=n===N?a+It:l>=0?(s.push(c),a.slice(0,l)+ft+a.slice(l)+_+m):a+_+(l===-2?h:m)}return[yt(i,o+(i[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]},H=class i{constructor({strings:t,_$litType$:e},s){let r;this.parts=[];let o=0,n=0,h=t.length-1,a=this.parts,[c,d]=Wt(t,e);if(this.el=i.createElement(c,s),A.currentNode=this.el.content,e===2||e===3){let l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(r=A.nextNode())!==null&&a.length<h;){if(r.nodeType===1){if(r.hasAttributes())for(let l of r.getAttributeNames())if(l.endsWith(ft)){let u=d[n++],m=r.getAttribute(l).split(_),f=/([.?@])?(.*)/.exec(u);a.push({type:1,index:o,name:f[2],strings:m,ctor:f[1]==="."?J:f[1]==="?"?G:f[1]==="@"?Z:w}),r.removeAttribute(l)}else l.startsWith(_)&&(a.push({type:6,index:o}),r.removeAttribute(l));if($t.test(r.tagName)){let l=r.textContent.split(_),u=l.length-1;if(u>0){r.textContent=z?z.emptyScript:"";for(let m=0;m<u;m++)r.append(l[m],U()),A.nextNode(),a.push({type:2,index:++o});r.append(l[u],U())}}}else if(r.nodeType===8)if(r.data===_t)a.push({type:2,index:o});else{let l=-1;for(;(l=r.data.indexOf(_,l+1))!==-1;)a.push({type:7,index:o}),l+=_.length-1}o++}}static createElement(t,e){let s=b.createElement("template");return s.innerHTML=t,s}};function E(i,t,e=i,s){if(t===x)return t;let r=s!==void 0?e._$Co?.[s]:e._$Cl,o=O(t)?void 0:t._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),o===void 0?r=void 0:(r=new o(i),r._$AT(i,e,s)),s!==void 0?(e._$Co??=[])[s]=r:e._$Cl=r),r!==void 0&&(t=E(i,r._$AS(i,t.values),r,s)),t}var F=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:s}=this._$AD,r=(t?.creationScope??b).importNode(e,!0);A.currentNode=r;let o=A.nextNode(),n=0,h=0,a=s[0];for(;a!==void 0;){if(n===a.index){let c;a.type===2?c=new M(o,o.nextSibling,this,t):a.type===1?c=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(c=new Q(o,this,t)),this._$AV.push(c),a=s[++h]}n!==a?.index&&(o=A.nextNode(),n++)}return A.currentNode=b,r}p(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},M=class i{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,r){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=E(this,t,e),O(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==x&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Vt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==p&&O(this._$AH)?this._$AA.nextSibling.data=t:this.T(b.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:s}=t,r=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=H.createElement(yt(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===r)this._$AH.p(e);else{let o=new F(r,this),n=o.u(this.options);o.p(e),this.T(n),this._$AH=o}}_$AC(t){let e=gt.get(t.strings);return e===void 0&&gt.set(t.strings,e=new H(t)),e}k(t){Y(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,r=0;for(let o of t)r===e.length?e.push(s=new i(this.O(U()),this.O(U()),this,this.options)):s=e[r],s._$AI(o),r++;r<e.length&&(this._$AR(s&&s._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let s=lt(t).nextSibling;lt(t).remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},w=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,r,o){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=p}_$AI(t,e=this,s,r){let o=this.strings,n=!1;if(o===void 0)t=E(this,t,e,0),n=!O(t)||t!==this._$AH&&t!==x,n&&(this._$AH=t);else{let h=t,a,c;for(t=o[0],a=0;a<o.length-1;a++)c=E(this,h[s+a],e,a),c===x&&(c=this._$AH[a]),n||=!O(c)||c!==this._$AH[a],c===p?t=p:t!==p&&(t+=(c??"")+o[a+1]),this._$AH[a]=c}n&&!r&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},J=class extends w{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}},G=class extends w{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==p)}},Z=class extends w{constructor(t,e,s,r,o){super(t,e,s,r,o),this.type=5}_$AI(t,e=this){if((t=E(this,t,e,0)??p)===x)return;let s=this._$AH,r=t===p&&s!==p||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==p&&(s===p||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},Q=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){E(this,t)}};var Kt=X.litHtmlPolyfillSupport;Kt?.(H,M),(X.litHtmlVersions??=[]).push("3.3.2");var vt=(i,t,e)=>{let s=e?.renderBefore??t,r=s._$litPart$;if(r===void 0){let o=e?.renderBefore??null;s._$litPart$=r=new M(t.insertBefore(U(),o),o,void 0,e??{})}return r._$AI(i),r};var et=globalThis,$=class extends g{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=vt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return x}};$._$litElement$=!0,$.finalized=!0,et.litElementHydrateSupport?.({LitElement:$});var Ft=et.litElementPolyfillSupport;Ft?.({LitElement:$});(et.litElementVersions??=[]).push("4.2.2");var At=i=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(i,t)}):customElements.define(i,t)};var Jt={attribute:!0,type:String,converter:R,reflect:!1,hasChanged:D},Gt=(i=Jt,t,e)=>{let{kind:s,metadata:r}=e,o=globalThis.litPropertyMetadata.get(r);if(o===void 0&&globalThis.litPropertyMetadata.set(r,o=new Map),s==="setter"&&((i=Object.create(i)).wrapped=!0),o.set(e.name,i),s==="accessor"){let{name:n}=e;return{set(h){let a=t.get.call(this);t.set.call(this,h),this.requestUpdate(n,a,i,!0,h)},init(h){return h!==void 0&&this.C(n,void 0,i,h),h}}}if(s==="setter"){let{name:n}=e;return function(h){let a=this[n];t.call(this,h),this.requestUpdate(n,a,i,!0,h)}}throw Error("Unsupported decorator location: "+s)};function bt(i){return(t,e)=>typeof e=="object"?Gt(i,t,e):((s,r,o)=>{let n=r.hasOwnProperty(o);return r.constructor.createProperty(o,s),n?Object.getOwnPropertyDescriptor(r,o):void 0})(i,t,e)}function q(i){return bt({...i,state:!0,attribute:!1})}var xt={"status.idle":"Idle","status.running":"Running","status.error":"Error",stop_all:"Stop All",next:"Next",last:"Last",no_programs:"No programs found",loading:"Loading...","time.just_now":"just now","time.minutes_ago":"{count}m ago","time.hours_ago":"{count}h ago","time.days_ago":"{count}d ago","time.today_at":"today at {time}","time.tomorrow_at":"tomorrow at {time}","time.in_days":"in {count}d","time.never":"Never","time.no_schedule":"No active program","status.running_program":"Running: {name}",stop_confirm:"Stop all watering?"};var St={"status.idle":"En attente","status.running":"Arrosage en cours","status.error":"Erreur",stop_all:"Tout arr\xEAter",next:"Prochain",last:"Dernier",no_programs:"Aucun programme trouv\xE9",loading:"Chargement...","time.just_now":"\xE0 l'instant","time.minutes_ago":"il y a {count} min","time.hours_ago":"il y a {count}h","time.days_ago":"il y a {count}j","time.today_at":"aujourd'hui \xE0 {time}","time.tomorrow_at":"demain \xE0 {time}","time.in_days":"dans {count}j","time.never":"Jamais","time.no_schedule":"Aucun programme actif","status.running_program":"En cours : {name}",stop_confirm:"Arr\xEAter tout l'arrosage ?"};var st={en:xt,fr:St};function Et(i){let t=i?.toLowerCase().startsWith("fr")?"fr":"en",e=st[t]??st.en;return(s,r)=>{let o=e[s]??st.en[s]??s;return r&&(o=o.replace(/\{(\w+)\}/g,(n,h)=>String(r[h]??n))),o}}var wt=V`
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
    border-bottom: 1px solid var(--divider-color);
    gap: 12px;
  }
  .program:last-child {
    border-bottom: none;
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
`;function Ct(i){return Object.keys(i.states).filter(t=>t.startsWith("switch.wateringhub_"))}function Pt(i,t){for(let e of t){let s=i.states[e];if(s?.state==="on")return typeof s.attributes.friendly_name=="string"?s.attributes.friendly_name:e}return null}function Tt(i){return i.states["sensor.wateringhub_status"]?.state??"idle"}function Rt(i,t,e){if(i==="running"&&e)return t("status.running_program",{name:e});let s=t(`status.${i}`);return s===`status.${i}`?t("status.idle"):s}function Nt(i){return!i||i.state==="None"||i.state==="unknown"||i.state==="unavailable"}function rt(i,t,e,s){let r=i.states[t];if(Nt(r))return e("time.never");let o=new Date(r.state);if(isNaN(o.getTime()))return r.state;let h=new Date().getTime()-o.getTime();if(h<0){let l=-h,u=Math.floor(l/(1e3*60*60));if(u<24){let f=o.toLocaleTimeString(s??[],{hour:"2-digit",minute:"2-digit"});return e("time.today_at",{time:f})}let m=Math.floor(u/24);if(m===1){let f=o.toLocaleTimeString(s??[],{hour:"2-digit",minute:"2-digit"});return e("time.tomorrow_at",{time:f})}return e("time.in_days",{count:m})}let a=Math.floor(h/(1e3*60));if(a<1)return e("time.just_now");if(a<60)return e("time.minutes_ago",{count:a});let c=Math.floor(a/60);if(c<24)return e("time.hours_ago",{count:c});let d=Math.floor(c/24);return e("time.days_ago",{count:d})}function Ut(i,t,e){let s=i.states["sensor.wateringhub_next_run"];return Nt(s)?t("time.no_schedule"):rt(i,"sensor.wateringhub_next_run",t,e)}var y=class extends ${constructor(){super(...arguments);this._programEntities=[];this._t=e=>e}setConfig(e){this._config=e}set hass(e){let s=this._hass;this._hass=e,this._t=Et(e.language),s?.states!==e.states&&(this._programEntities=Ct(e))}getCardSize(){return 3}_toggleProgram(e){let s=this._hass.states[e];if(!s)return;let r=s.state==="on"?"turn_off":"turn_on";this._hass.callService("switch",r,{entity_id:e})}_stopAll(){confirm(this._t("stop_confirm"))&&this._hass.callService("wateringhub","stop_all",{})}render(){if(!this._hass||!this._config)return S`<ha-card>${this._t("loading")}</ha-card>`;let e=Tt(this._hass),s=e==="running",r=this._config.title??"WateringHub",o=Pt(this._hass,this._programEntities);return S`
      <ha-card>
        <div class="header">
          <span class="title">${r}</span>
          ${s?S`<button class="stop-btn" @click=${this._stopAll}>${this._t("stop_all")}</button>`:p}
        </div>

        <div class="status-row">
          <span class="badge badge-${e}"> ${Rt(e,this._t,o)} </span>
          <span class="info-item">
            ${this._t("next")}: ${Ut(this._hass,this._t,this._hass.language)}
          </span>
          <span class="info-item">
            ${this._t("last")}:
            ${rt(this._hass,"sensor.wateringhub_last_run",this._t,this._hass.language)}
          </span>
        </div>

        ${this._programEntities.length===0?S`<div class="no-programs">${this._t("no_programs")}</div>`:this._programEntities.map(n=>{let h=this._hass.states[n];if(!h)return p;let a=h.state==="on",c=typeof h.attributes.friendly_name=="string"?h.attributes.friendly_name:n;return S`
                <div class="program">
                  ${a?S`<div class="active-dot"></div>`:p}
                  <span class="program-name ${a?"active":""}">${c}</span>
                  <ha-switch
                    .checked=${a}
                    @change=${()=>this._toggleProgram(n)}
                  ></ha-switch>
                </div>
              `})}
      </ha-card>
    `}};y.styles=wt,C([q()],y.prototype,"_config",2),C([q()],y.prototype,"_hass",2),C([q()],y.prototype,"_programEntities",2),y=C([At("wateringhub-card")],y);globalThis.customCards=globalThis.customCards||[];globalThis.customCards.push({type:"wateringhub-card",name:"WateringHub Card",description:"Watering management card for WateringHub"});export{y as WateringHubCard};
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
