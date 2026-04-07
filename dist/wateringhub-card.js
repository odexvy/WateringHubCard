var nt=Object.defineProperty;var it=Object.getOwnPropertyDescriptor;var b=(o,e,t,r)=>{for(var n=r>1?void 0:r?it(e,t):e,i=o.length-1,s;i>=0;i--)(s=o[i])&&(n=(r?s(e,t,n):s(n))||n);return r&&n&&nt(e,t,n),n};var j=globalThis,U=j.ShadowRoot&&(j.ShadyCSS===void 0||j.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ne=Symbol(),xe=new WeakMap,H=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==ne)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(U&&e===void 0){let r=t!==void 0&&t.length===1;r&&(e=xe.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&xe.set(t,e))}return e}toString(){return this.cssText}},$e=o=>new H(typeof o=="string"?o:o+"",void 0,ne),P=(o,...e)=>{let t=o.length===1?o[0]:e.reduce((r,n,i)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+o[i+1],o[0]);return new H(t,o,ne)},we=(o,e)=>{if(U)o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let r=document.createElement("style"),n=j.litNonce;n!==void 0&&r.setAttribute("nonce",n),r.textContent=t.cssText,o.appendChild(r)}},ie=U?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(let r of e.cssRules)t+=r.cssText;return $e(t)})(o):o;var{is:st,defineProperty:at,getOwnPropertyDescriptor:lt,getOwnPropertyNames:ct,getOwnPropertySymbols:dt,getPrototypeOf:pt}=Object,B=globalThis,Se=B.trustedTypes,ut=Se?Se.emptyScript:"",mt=B.reactiveElementPolyfillSupport,D=(o,e)=>o,I={toAttribute(o,e){switch(e){case Boolean:o=o?ut:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},J=(o,e)=>!st(o,e),Ae={attribute:!0,type:String,converter:I,reflect:!1,useDefault:!1,hasChanged:J};Symbol.metadata??=Symbol("metadata"),B.litPropertyMetadata??=new WeakMap;var E=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Ae){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let r=Symbol(),n=this.getPropertyDescriptor(e,r,t);n!==void 0&&at(this.prototype,e,n)}}static getPropertyDescriptor(e,t,r){let{get:n,set:i}=lt(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get:n,set(s){let l=n?.call(this);i?.call(this,s),this.requestUpdate(e,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ae}static _$Ei(){if(this.hasOwnProperty(D("elementProperties")))return;let e=pt(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(D("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(D("properties"))){let t=this.properties,r=[...ct(t),...dt(t)];for(let n of r)this.createProperty(n,t[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[r,n]of t)this.elementProperties.set(r,n)}this._$Eh=new Map;for(let[t,r]of this.elementProperties){let n=this._$Eu(t,r);n!==void 0&&this._$Eh.set(n,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let r=new Set(e.flat(1/0).reverse());for(let n of r)t.unshift(ie(n))}else e!==void 0&&t.push(ie(e));return t}static _$Eu(e,t){let r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return we(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ET(e,t){let r=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,r);if(n!==void 0&&r.reflect===!0){let i=(r.converter?.toAttribute!==void 0?r.converter:I).toAttribute(t,r.type);this._$Em=e,i==null?this.removeAttribute(n):this.setAttribute(n,i),this._$Em=null}}_$AK(e,t){let r=this.constructor,n=r._$Eh.get(e);if(n!==void 0&&this._$Em!==n){let i=r.getPropertyOptions(n),s=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:I;this._$Em=n;let l=s.fromAttribute(t,i.type);this[n]=l??this._$Ej?.get(n)??l,this._$Em=null}}requestUpdate(e,t,r,n=!1,i){if(e!==void 0){let s=this.constructor;if(n===!1&&(i=this[e]),r??=s.getPropertyOptions(e),!((r.hasChanged??J)(i,t)||r.useDefault&&r.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,r))))return;this.C(e,t,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:r,reflect:n,wrapped:i},s){r&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),i!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||r||(t=void 0),this._$AL.set(e,t)),n===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[n,i]of this._$Ep)this[n]=i;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[n,i]of r){let{wrapped:s}=i,l=this[n];s!==!0||this._$AL.has(n)||l===void 0||this.C(n,void 0,i,l)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(t)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[D("elementProperties")]=new Map,E[D("finalized")]=new Map,mt?.({ReactiveElement:E}),(B.reactiveElementVersions??=[]).push("2.1.2");var ue=globalThis,Ee=o=>o,G=ue.trustedTypes,Te=G?G.createPolicy("lit-html",{createHTML:o=>o}):void 0,Re="$lit$",T=`lit$${Math.random().toFixed(9).slice(2)}$`,qe="?"+T,gt=`<${qe}>`,C=document,V=()=>C.createComment(""),F=o=>o===null||typeof o!="object"&&typeof o!="function",me=Array.isArray,ht=o=>me(o)||typeof o?.[Symbol.iterator]=="function",se=`[ 	
\f\r]`,Z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Pe=/-->/g,ze=/>/g,z=RegExp(`>|${se}(?:([^\\s"'>=/]+)(${se}*=${se}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ke=/'/g,Ce=/"/g,Me=/^(?:script|style|textarea|title)$/i,ge=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),d=ge(1),qt=ge(2),Mt=ge(3),N=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),Ne=new WeakMap,k=C.createTreeWalker(C,129);function He(o,e){if(!me(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Te!==void 0?Te.createHTML(e):e}var vt=(o,e)=>{let t=o.length-1,r=[],n,i=e===2?"<svg>":e===3?"<math>":"",s=Z;for(let l=0;l<t;l++){let a=o[l],c,m,p=-1,g=0;for(;g<a.length&&(s.lastIndex=g,m=s.exec(a),m!==null);)g=s.lastIndex,s===Z?m[1]==="!--"?s=Pe:m[1]!==void 0?s=ze:m[2]!==void 0?(Me.test(m[2])&&(n=RegExp("</"+m[2],"g")),s=z):m[3]!==void 0&&(s=z):s===z?m[0]===">"?(s=n??Z,p=-1):m[1]===void 0?p=-2:(p=s.lastIndex-m[2].length,c=m[1],s=m[3]===void 0?z:m[3]==='"'?Ce:ke):s===Ce||s===ke?s=z:s===Pe||s===ze?s=Z:(s=z,n=void 0);let h=s===z&&o[l+1].startsWith("/>")?" ":"";i+=s===Z?a+gt:p>=0?(r.push(c),a.slice(0,p)+Re+a.slice(p)+T+h):a+T+(p===-2?l:h)}return[He(o,i+(o[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),r]},O=class o{constructor({strings:e,_$litType$:t},r){let n;this.parts=[];let i=0,s=0,l=e.length-1,a=this.parts,[c,m]=vt(e,t);if(this.el=o.createElement(c,r),k.currentNode=this.el.content,t===2||t===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(n=k.nextNode())!==null&&a.length<l;){if(n.nodeType===1){if(n.hasAttributes())for(let p of n.getAttributeNames())if(p.endsWith(Re)){let g=m[s++],h=n.getAttribute(p).split(T),v=/([.?@])?(.*)/.exec(g);a.push({type:1,index:i,name:v[2],strings:h,ctor:v[1]==="."?le:v[1]==="?"?ce:v[1]==="@"?de:q}),n.removeAttribute(p)}else p.startsWith(T)&&(a.push({type:6,index:i}),n.removeAttribute(p));if(Me.test(n.tagName)){let p=n.textContent.split(T),g=p.length-1;if(g>0){n.textContent=G?G.emptyScript:"";for(let h=0;h<g;h++)n.append(p[h],V()),k.nextNode(),a.push({type:2,index:++i});n.append(p[g],V())}}}else if(n.nodeType===8)if(n.data===qe)a.push({type:2,index:i});else{let p=-1;for(;(p=n.data.indexOf(T,p+1))!==-1;)a.push({type:7,index:i}),p+=T.length-1}i++}}static createElement(e,t){let r=C.createElement("template");return r.innerHTML=e,r}};function R(o,e,t=o,r){if(e===N)return e;let n=r!==void 0?t._$Co?.[r]:t._$Cl,i=F(e)?void 0:e._$litDirective$;return n?.constructor!==i&&(n?._$AO?.(!1),i===void 0?n=void 0:(n=new i(o),n._$AT(o,t,r)),r!==void 0?(t._$Co??=[])[r]=n:t._$Cl=n),n!==void 0&&(e=R(o,n._$AS(o,e.values),n,r)),e}var ae=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:r}=this._$AD,n=(e?.creationScope??C).importNode(t,!0);k.currentNode=n;let i=k.nextNode(),s=0,l=0,a=r[0];for(;a!==void 0;){if(s===a.index){let c;a.type===2?c=new L(i,i.nextSibling,this,e):a.type===1?c=new a.ctor(i,a.name,a.strings,this,e):a.type===6&&(c=new pe(i,this,e)),this._$AV.push(c),a=r[++l]}s!==a?.index&&(i=k.nextNode(),s++)}return k.currentNode=C,n}p(e){let t=0;for(let r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}},L=class o{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,n){this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=R(this,e,t),F(e)?e===u||e==null||e===""?(this._$AH!==u&&this._$AR(),this._$AH=u):e!==this._$AH&&e!==N&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):ht(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==u&&F(this._$AH)?this._$AA.nextSibling.data=e:this.T(C.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:r}=e,n=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=O.createElement(He(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===n)this._$AH.p(t);else{let i=new ae(n,this),s=i.u(this.options);i.p(t),this.T(s),this._$AH=i}}_$AC(e){let t=Ne.get(e.strings);return t===void 0&&Ne.set(e.strings,t=new O(e)),t}k(e){me(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,r,n=0;for(let i of e)n===t.length?t.push(r=new o(this.O(V()),this.O(V()),this,this.options)):r=t[n],r._$AI(i),n++;n<t.length&&(this._$AR(r&&r._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let r=Ee(e).nextSibling;Ee(e).remove(),e=r}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},q=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,n,i){this.type=1,this._$AH=u,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=u}_$AI(e,t=this,r,n){let i=this.strings,s=!1;if(i===void 0)e=R(this,e,t,0),s=!F(e)||e!==this._$AH&&e!==N,s&&(this._$AH=e);else{let l=e,a,c;for(e=i[0],a=0;a<i.length-1;a++)c=R(this,l[r+a],t,a),c===N&&(c=this._$AH[a]),s||=!F(c)||c!==this._$AH[a],c===u?e=u:e!==u&&(e+=(c??"")+i[a+1]),this._$AH[a]=c}s&&!n&&this.j(e)}j(e){e===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},le=class extends q{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===u?void 0:e}},ce=class extends q{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==u)}},de=class extends q{constructor(e,t,r,n,i){super(e,t,r,n,i),this.type=5}_$AI(e,t=this){if((e=R(this,e,t,0)??u)===N)return;let r=this._$AH,n=e===u&&r!==u||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,i=e!==u&&(r===u||n);n&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},pe=class{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){R(this,e)}};var ft=ue.litHtmlPolyfillSupport;ft?.(O,L),(ue.litHtmlVersions??=[]).push("3.3.2");var De=(o,e,t)=>{let r=t?.renderBefore??e,n=r._$litPart$;if(n===void 0){let i=t?.renderBefore??null;r._$litPart$=n=new L(e.insertBefore(V(),i),i,void 0,t??{})}return n._$AI(o),n};var he=globalThis,$=class extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=De(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return N}};$._$litElement$=!0,$.finalized=!0,he.litElementHydrateSupport?.({LitElement:$});var _t=he.litElementPolyfillSupport;_t?.({LitElement:$});(he.litElementVersions??=[]).push("4.2.2");var K=o=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(o,e)}):customElements.define(o,e)};var yt={attribute:!0,type:String,converter:I,reflect:!1,hasChanged:J},bt=(o=yt,e,t)=>{let{kind:r,metadata:n}=t,i=globalThis.litPropertyMetadata.get(n);if(i===void 0&&globalThis.litPropertyMetadata.set(n,i=new Map),r==="setter"&&((o=Object.create(o)).wrapped=!0),i.set(t.name,o),r==="accessor"){let{name:s}=t;return{set(l){let a=e.get.call(this);e.set.call(this,l),this.requestUpdate(s,a,o,!0,l)},init(l){return l!==void 0&&this.C(s,void 0,o,l),l}}}if(r==="setter"){let{name:s}=t;return function(l){let a=this[s];e.call(this,l),this.requestUpdate(s,a,o,!0,l)}}throw Error("Unsupported decorator location: "+r)};function Ie(o){return(e,t)=>typeof t=="object"?bt(o,e,t):((r,n,i)=>{let s=n.hasOwnProperty(i);return n.constructor.createProperty(i,r),s?Object.getOwnPropertyDescriptor(n,i):void 0})(o,e,t)}function x(o){return Ie({...o,state:!0,attribute:!1})}var Ze={"status.idle":"Idle","status.running":"Running","status.error":"Error","status.disabled":"Disabled",stop_all:"Stop All",next:"Next",last:"Last",no_programs:"No programs found",loading:"Loading...","time.just_now":"just now","time.minutes_ago":"{count}m ago","time.hours_ago":"{count}h ago","time.days_ago":"{count}d ago","time.today_at":"today at {time}","time.tomorrow_at":"tomorrow at {time}","time.in_days":"in {count}d","time.never":"Never","time.no_schedule":"No active program","status.running_program":"Running: {name}",stop_confirm:"Stop all watering?","recap.total_duration":"Total duration: {duration} min","days.mon":"Mon","days.tue":"Tue","days.wed":"Wed","days.thu":"Thu","days.fri":"Fri","days.sat":"Sat","days.sun":"Sun","running.progress":"Valve {done} of {total}","error.program":"Error \u2014 {name}","error.auto_stopped":"All valves have been automatically closed.","config.tab_valves":"Valves","config.tab_zones":"Zones","config.tab_programs":"Programs","config.no_valves":"No valves configured","config.no_zones":"No zones created","config.no_programs":"No programs created","config.new_zone":"New zone","config.new_program":"New program","config.name":"Name","config.save":"Save","config.cancel":"Cancel","config.delete":"Delete","config.edit":"Edit","config.confirm_delete_zone":"Delete this zone?","config.confirm_delete_program":"Delete this program?","config.trigger_time":"Trigger time","config.select_valves":"Select valves","config.select_zones":"Select zones","config.valve_entity":"Entity","config.total_duration":"Total: {duration} min","config.dry_run":"Test mode","config.dry_run_hint":"Runs the sequence without activating valves","running.dry_run":"Test mode","config.frequency":"Frequency","config.follows_program":"Every day","config.frequency_every_n":"Every {n} days","config.frequency_weekdays":"Specific days","recap.frequency_every_n":"every {n}d","config.title":"WateringHub Config"};var Ve={"status.idle":"En attente","status.running":"Arrosage en cours","status.error":"Erreur","status.disabled":"D\xE9sactiv\xE9",stop_all:"Tout arr\xEAter",next:"Prochain",last:"Dernier",no_programs:"Aucun programme trouv\xE9",loading:"Chargement...","time.just_now":"\xE0 l'instant","time.minutes_ago":"il y a {count} min","time.hours_ago":"il y a {count}h","time.days_ago":"il y a {count}j","time.today_at":"aujourd'hui \xE0 {time}","time.tomorrow_at":"demain \xE0 {time}","time.in_days":"dans {count}j","time.never":"Jamais","time.no_schedule":"Aucun programme actif","status.running_program":"En cours : {name}",stop_confirm:"Arr\xEAter tout l'arrosage ?","recap.total_duration":"Dur\xE9e totale : {duration} min","days.mon":"Lun","days.tue":"Mar","days.wed":"Mer","days.thu":"Jeu","days.fri":"Ven","days.sat":"Sam","days.sun":"Dim","running.progress":"Vanne {done} sur {total}","error.program":"Erreur \u2014 {name}","error.auto_stopped":"Toutes les vannes ont \xE9t\xE9 ferm\xE9es automatiquement.","config.tab_valves":"Vannes","config.tab_zones":"Zones","config.tab_programs":"Programmes","config.no_valves":"Aucune vanne configur\xE9e","config.no_zones":"Aucune zone cr\xE9\xE9e","config.no_programs":"Aucun programme cr\xE9\xE9","config.new_zone":"Nouvelle zone","config.new_program":"Nouveau programme","config.name":"Nom","config.save":"Sauvegarder","config.cancel":"Annuler","config.delete":"Supprimer","config.edit":"Modifier","config.confirm_delete_zone":"Supprimer cette zone ?","config.confirm_delete_program":"Supprimer ce programme ?","config.trigger_time":"Heure de d\xE9clenchement","config.select_valves":"S\xE9lectionner les vannes","config.select_zones":"S\xE9lectionner les zones","config.valve_entity":"Entit\xE9","config.total_duration":"Total : {duration} min","config.dry_run":"Mode test","config.dry_run_hint":"Ex\xE9cute la s\xE9quence sans activer les vannes","running.dry_run":"Mode test","config.frequency":"Fr\xE9quence","config.follows_program":"Tous les jours","config.frequency_every_n":"Tous les {n} jours","config.frequency_weekdays":"Jours sp\xE9cifiques","recap.frequency_every_n":"tous les {n}j","config.title":"WateringHub Config"};var ve={en:Ze,fr:Ve};function W(o){let e=o?.toLowerCase().startsWith("fr")?"fr":"en",t=ve[e]??ve.en;return(r,n)=>{let i=t[r]??ve.en[r]??r;return n&&(i=i.replace(/\{(\w+)\}/g,(s,l)=>String(n[l]??s))),i}}var Q=P`
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

  /* Empty state */
  .empty-state {
    text-align: center;
    padding: 32px;
    color: var(--secondary-text-color);
    font-size: 14px;
  }
`;var Fe=P`
  /* Program status line */
  .program-status {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 2px 0 8px 32px;
    flex-wrap: wrap;
  }
  .badge-sm {
    display: inline-flex;
    align-items: center;
    padding: 3px 10px;
    border-radius: 10px;
    font-size: 11px;
    font-weight: 500;
    color: white;
  }
  .badge-idle {
    background: var(--success-color);
  }
  .badge-disabled {
    background: var(--disabled-text-color);
  }
  .info-sm {
    font-size: 12px;
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

  /* Running block */
  .running-block {
    border: 1px solid var(--divider-color);
    border-radius: 12px;
    padding: 16px;
    margin-bottom: 20px;
    position: relative;
  }
  .running-stop-btn {
    position: absolute;
    top: 12px;
    right: 12px;
    background: var(--error-color);
    color: white;
    border: none;
    border-radius: 8px;
    padding: 6px 12px;
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
    transition: opacity 0.2s;
  }
  .running-stop-btn:hover {
    opacity: 0.85;
  }

  /* Dry run badge */
  .badge-dry-run {
    display: inline-flex;
    align-items: center;
    padding: 4px 10px;
    border-radius: 8px;
    font-size: 12px;
    font-weight: 500;
    background: var(--secondary-background-color);
    color: var(--secondary-text-color);
    border: 1px dashed var(--divider-color);
    margin-bottom: 12px;
  }

  /* Global hero (circle + program info) */
  .global-hero {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 16px;
  }
  .circular-progress {
    position: relative;
    width: 72px;
    height: 72px;
    flex-shrink: 0;
  }
  .circular-progress svg {
    transform: rotate(-90deg);
    width: 72px;
    height: 72px;
  }
  .cp-track {
    fill: none;
    stroke: var(--divider-color);
    stroke-width: 4;
  }
  .cp-fill {
    fill: none;
    stroke: var(--warning-color);
    stroke-width: 4;
    stroke-linecap: round;
  }
  .cp-center {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .cp-time {
    font-size: 14px;
    font-weight: 600;
    color: var(--primary-text-color);
  }
  .global-info {
    flex: 1;
    min-width: 0;
  }
  .global-program-name {
    font-size: 15px;
    font-weight: 500;
    color: var(--primary-text-color);
  }
  .global-sub {
    font-size: 13px;
    color: var(--secondary-text-color);
    margin-top: 2px;
  }

  /* Valve timeline */
  .valve-timeline {
    position: relative;
    padding-left: 20px;
  }
  .valve-timeline::before {
    content: '';
    position: absolute;
    left: 7px;
    top: 4px;
    bottom: 4px;
    width: 2px;
    background: var(--divider-color);
  }
  .tl-zone {
    font-size: 12px;
    font-weight: 500;
    color: var(--secondary-text-color);
    padding: 6px 0 2px;
  }
  .tl-step {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 5px 0;
    position: relative;
  }
  .tl-dot {
    position: absolute;
    left: -20px;
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .tl-dot svg {
    width: 14px;
    height: 14px;
  }
  .tl-step-name {
    flex: 1;
    font-size: 13px;
  }
  .tl-step-time {
    font-size: 12px;
    white-space: nowrap;
  }
  .tl-done .tl-step-name,
  .tl-done .tl-step-time {
    color: var(--secondary-text-color);
  }
  .tl-done .tl-dot svg {
    color: var(--success-color);
  }
  .tl-running .tl-step-name {
    color: var(--primary-text-color);
    font-weight: 500;
  }
  .tl-running .tl-step-time {
    color: var(--primary-color);
    font-weight: 600;
  }
  .tl-running .tl-dot svg {
    color: var(--primary-color);
  }
  .tl-pending .tl-step-name,
  .tl-pending .tl-step-time {
    color: var(--disabled-text-color);
  }
  .tl-pending .tl-dot svg {
    color: var(--disabled-text-color);
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
`;function X(o){return Object.keys(o.states).filter(e=>e.startsWith("switch.wateringhub_"))}function M(o,e){return typeof o?.attributes.friendly_name=="string"?o.attributes.friendly_name:e}function ee(o){return o.states["sensor.wateringhub_status"]?.state??"idle"}function Oe(o){let e=o.states["sensor.wateringhub_status"];if(e?.state!=="error")return null;let t=e.attributes,r=t.current_program,n=r?o.states[`switch.wateringhub_${r}`]:void 0;return{programName:M(n,r??""),errorMessage:t.error_message??""}}function Le(o){let e=o.states["sensor.wateringhub_status"];if(e?.state!=="running")return null;let t=e.attributes,r=t.current_valve_start,n=t.current_valve_duration??0,i=t.valves_done??0,s=t.valves_total??1,l=r?Math.max(0,(Date.now()-new Date(r).getTime())/1e3):0,a=Math.max(0,n-l),c=n>0?Math.min(100,l/n*100):0,m=(i+c/100)/s*100,p=(i+1)/s*100,g=Array.isArray(t.valves_sequence)?t.valves_sequence:[],h=g.filter(y=>y.status==="pending").reduce((y,_)=>y+_.duration,0),v=a+h,oe=g.length>0?g.reduce((y,_)=>y+_.duration,0):n*s,A=g.filter(y=>y.status==="done").reduce((y,_)=>y+_.duration,0)+l;return{programName:t.current_program??"",zoneName:t.current_zone_name??"",valveName:t.current_valve_name??"",valveStart:r??"",valveDuration:n,valvesDone:i,valvesTotal:s,progressPercent:t.progress_percent??0,remaining:a,totalRemaining:v,totalDuration:oe,totalElapsed:A,valvePercent:c,finePercent:m,globalEndPercent:p,valveSequence:g,dryRun:t.dry_run===!0}}function fe(o){if(o<=0)return"0:00";let e=Math.floor(o/3600),t=Math.floor(o%3600/60),r=Math.floor(o%60);return e>0?`${e}:${t.toString().padStart(2,"0")}:${r.toString().padStart(2,"0")}`:`${t}:${r.toString().padStart(2,"0")}`}function te(o,e){return o?o.time:""}function je(o){return!o||o.state==="None"||o.state==="unknown"||o.state==="unavailable"}function _e(o,e,t,r){let n=o.states[e];if(je(n))return t("time.never");let i=new Date(n.state);if(Number.isNaN(i.getTime()))return n.state;let s=new Date,l=s.getTime()-i.getTime();if(l<0){let p=new Date(s.getFullYear(),s.getMonth(),s.getDate()),g=new Date(i.getFullYear(),i.getMonth(),i.getDate()),h=Math.round((g.getTime()-p.getTime())/(1e3*60*60*24)),v=i.toLocaleTimeString(r??[],{hour:"2-digit",minute:"2-digit"});return h===0?t("time.today_at",{time:v}):h===1?t("time.tomorrow_at",{time:v}):t("time.in_days",{count:h})}let a=Math.floor(l/(1e3*60));if(a<1)return t("time.just_now");if(a<60)return t("time.minutes_ago",{count:a});let c=Math.floor(a/60);if(c<24)return t("time.hours_ago",{count:c});let m=Math.floor(c/24);return t("time.days_ago",{count:m})}function Ue(o,e,t){let r=o.states["sensor.wateringhub_next_run"];return je(r)?e("time.no_schedule"):_e(o,"sensor.wateringhub_next_run",e,t)}function Be(o){return d`
    <div class="header">
      <span class="title">${o}</span>
    </div>
  `}function wt(o,e,t){return e?ee(o)==="running"?d``:d`
    <div class="program-status">
      <span class="badge-sm badge-idle">${t("status.idle")}</span>
      <span class="info-sm">${t("next")}: ${Ue(o,t,o.language)}</span>
      <span class="info-sm">
        ${t("last")}: ${_e(o,"sensor.wateringhub_last_run",t,o.language)}
      </span>
    </div>
  `:d`
      <div class="program-status">
        <span class="badge-sm badge-disabled">${t("status.disabled")}</span>
      </div>
    `}function Je(o,e){let t=Oe(o);return t?d`
    <div class="error-view">
      <div class="error-title">
        <ha-icon icon="mdi:alert-circle"></ha-icon>
        ${e("error.program",{name:t.programName})}
      </div>
      ${t.errorMessage?d`<div class="error-message">${t.errorMessage}</div>`:u}
      <div class="error-auto-stopped">${e("error.auto_stopped")}</div>
    </div>
  `:d``}function Ge(o,e,t){let r=Le(o);if(!r)return d``;let n=2*Math.PI*30,i=r.totalDuration>0?r.totalElapsed/r.totalDuration:0,s=n*(1-Math.min(1,i));return d`
    <div class="running-block">
      <button class="running-stop-btn" @click=${e}>${t("stop_all")}</button>
      ${r.dryRun?d`<span class="badge-dry-run">${t("running.dry_run")}</span>`:u}

      <div class="global-hero">
        <div class="circular-progress">
          <svg viewBox="0 0 68 68">
            <circle class="cp-track" cx="34" cy="34" r="30" />
            <circle
              class="cp-fill"
              cx="34"
              cy="34"
              r="30"
              style="stroke-dasharray: ${n}; stroke-dashoffset: ${s}"
            />
          </svg>
          <div class="cp-center">
            <span class="cp-time">${fe(r.totalRemaining)}</span>
          </div>
        </div>
        <div class="global-info">
          <div class="global-program-name">
            ${M(o.states[`switch.wateringhub_${r.programName}`],r.programName)}
          </div>
          <div class="global-sub">
            ${t("running.progress",{done:r.valvesDone+1,total:r.valvesTotal})}
          </div>
        </div>
      </div>

      ${r.valveSequence.length>0?St(r.valveSequence,r.remaining,t):u}
    </div>
  `}function St(o,e,t){let r=[];for(let a of o){let c=r[r.length-1];c?.zoneName===a.zone_name?c.valves.push(a):r.push({zoneName:a.zone_name,valves:[a]})}let n=d`<svg viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z"
    />
  </svg>`,i=d`<svg viewBox="0 0 24 24">
    <circle fill="currentColor" cx="12" cy="12" r="6" />
  </svg>`,s=d`<svg viewBox="0 0 24 24">
    <circle fill="none" stroke="currentColor" stroke-width="2" cx="12" cy="12" r="6" />
  </svg>`,l={done:n,running:i,pending:s};return d`
    <div class="valve-timeline">
      ${r.map(a=>d`
          <div class="tl-zone">${a.zoneName}</div>
          ${a.valves.map(c=>{let m=Math.ceil(c.duration/60);return d`
              <div class="tl-step tl-${c.status}">
                <span class="tl-dot">${l[c.status]}</span>
                <span class="tl-step-name">${c.valve_name}</span>
                <span class="tl-step-time">
                  ${c.status==="running"?fe(e):`${m} min`}
                </span>
              </div>
            `})}
        `)}
    </div>
  `}function Ke(o,e,t,r,n,i){return e.length===0?d`<div class="empty-state">${i("no_programs")}</div>`:d`${e.map(s=>{let l=o.states[s];if(!l)return u;let a=l.state==="on",c=t===s,m=M(l,s);return d`
      <div class="program-wrapper">
        <div class="program">
          <div class="program-header" @click=${()=>r(s)}>
            <ha-icon class="chevron ${c?"open":""}" icon="mdi:chevron-down"></ha-icon>
            ${a?d`<div class="active-dot"></div>`:u}
            <span class="program-name ${a?"active":""}">${m}</span>
          </div>
          <ha-switch .checked=${a} @change=${()=>n(s)}></ha-switch>
        </div>
        ${wt(o,a,i)}
        ${At(l.attributes,c,i)}
      </div>
    `})}`}function At(o,e,t){let r=o.schedule,n=o.zones??[],i=o.total_duration;return d`
    <div class="program-recap ${e?"open":""}">
      ${r?d`<div class="recap-schedule">
            <ha-icon icon="mdi:calendar-clock"></ha-icon>
            ${te(r,t)}
          </div>`:u}
      ${n.map(s=>d`
          <div class="recap-zone">
            <ha-icon icon="mdi:map-marker"></ha-icon>
            ${s.zone_name}
          </div>
          ${s.valves.map(l=>d`
              <div class="recap-valve">
                <ha-icon icon="mdi:water"></ha-icon>
                ${l.valve_name} — ${l.duration}
                min${Et(l.frequency,t)}
              </div>
            `)}
        `)}
      ${i?d`<div class="recap-total">
            <ha-icon icon="mdi:timer-outline"></ha-icon>
            ${t("recap.total_duration",{duration:i})}
          </div>`:u}
    </div>
  `}function Et(o,e){return o?o.type==="every_n_days"?` \xB7 ${e("recap.frequency_every_n",{n:o.n??2})}`:o.type==="weekdays"&&o.days?.length?` \xB7 ${o.days.map(r=>e(`days.${r}`)).join(", ")}`:"":""}var w=class extends ${constructor(){super(...arguments);this._programEntities=[];this._expandedProgram=null;this._tick=0;this._t=t=>t;this._timerInterval=null}setConfig(t){this._config=t}set hass(t){let r=this._hass;this._hass=t,this._t=W(t.language),r?.states!==t.states&&(this._programEntities=X(t)),this._updateTimer(ee(t))}disconnectedCallback(){super.disconnectedCallback(),this._clearTimer()}_updateTimer(t){t==="running"&&!this._timerInterval?this._timerInterval=setInterval(()=>{this._tick++},1e3):t!=="running"&&this._timerInterval&&this._clearTimer()}_clearTimer(){this._timerInterval&&(clearInterval(this._timerInterval),this._timerInterval=null)}getCardSize(){return 3}_toggleExpand(t){this._expandedProgram=this._expandedProgram===t?null:t}_toggleProgram(t){let r=this._hass.states[t];if(!r)return;let n=r.state==="on"?"turn_off":"turn_on";this._hass.callService("switch",n,{entity_id:t})}_stopAll(){confirm(this._t("stop_confirm"))&&this._hass.callService("wateringhub","stop_all",{})}render(){if(!this._hass||!this._config)return d`<ha-card>${this._t("loading")}</ha-card>`;let t=this._config.title??"WateringHub";return d`
      <ha-card>
        ${Be(t)} ${Je(this._hass,this._t)}
        ${Ge(this._hass,()=>this._stopAll(),this._t)}
        ${Ke(this._hass,this._programEntities,this._expandedProgram,r=>this._toggleExpand(r),r=>this._toggleProgram(r),this._t)}
      </ha-card>
    `}};w.styles=[Q,Fe],b([x()],w.prototype,"_config",2),b([x()],w.prototype,"_hass",2),b([x()],w.prototype,"_programEntities",2),b([x()],w.prototype,"_expandedProgram",2),b([x()],w.prototype,"_tick",2),w=b([K("wateringhub-card")],w);globalThis.customCards=globalThis.customCards||[];globalThis.customCards.push({type:"wateringhub-card",name:"WateringHub Card",description:"Watering management card for WateringHub"});var Ye=P`
  /* Tabs */
  .tabs {
    display: flex;
    border-bottom: 2px solid var(--divider-color);
    margin-bottom: 20px;
  }
  .tab {
    padding: 10px 20px;
    font-size: 14px;
    font-weight: 500;
    color: var(--secondary-text-color);
    cursor: pointer;
    border-bottom: 2px solid transparent;
    margin-bottom: -2px;
    transition: color 0.2s;
  }
  .tab:hover {
    color: var(--primary-text-color);
  }
  .tab.active {
    color: var(--primary-color);
    border-bottom-color: var(--primary-color);
  }

  /* List items */
  .list-item {
    border: 1px solid var(--divider-color);
    border-radius: 8px;
    padding: 12px 16px;
    margin-bottom: 8px;
  }
  .list-item-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .list-item-name {
    font-size: 15px;
    font-weight: 500;
    color: var(--primary-text-color);
  }
  .list-item-sub {
    font-size: 12px;
    color: var(--secondary-text-color);
    margin-top: 2px;
  }
  .dry-run-tag {
    font-size: 10px;
    font-weight: 500;
    padding: 2px 6px;
    border-radius: 4px;
    background: var(--secondary-background-color);
    color: var(--secondary-text-color);
    border: 1px dashed var(--divider-color);
    margin-left: 8px;
    vertical-align: middle;
  }
  .form-hint {
    font-size: 11px;
    color: var(--secondary-text-color);
    margin-top: 4px;
  }
  .list-item-actions {
    display: flex;
    gap: 8px;
    flex-shrink: 0;
  }
  .action-btn {
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
    color: var(--secondary-text-color);
    transition: color 0.2s;
  }
  .action-btn:hover {
    color: var(--primary-text-color);
  }
  .action-btn.delete:hover {
    color: var(--error-color);
  }

  /* Inline form */
  .inline-form {
    border: 2px solid var(--primary-color);
    border-radius: 8px;
    padding: 16px;
    margin-bottom: 8px;
  }
  .form-row {
    margin-bottom: 12px;
  }
  .form-label {
    font-size: 12px;
    color: var(--secondary-text-color);
    margin-bottom: 4px;
    display: block;
  }
  .form-input {
    width: 100%;
    box-sizing: border-box;
    padding: 8px 12px;
    border: 1px solid var(--divider-color);
    border-radius: 6px;
    font-size: 14px;
    color: var(--primary-text-color);
    background: var(--card-background-color);
  }
  .form-input:focus {
    outline: none;
    border-color: var(--primary-color);
  }
  .form-select {
    width: 100%;
    box-sizing: border-box;
    padding: 8px 12px;
    border: 1px solid var(--divider-color);
    border-radius: 6px;
    font-size: 14px;
    color: var(--primary-text-color);
    background: var(--card-background-color);
  }
  .form-row-inline {
    display: flex;
    gap: 12px;
    margin-bottom: 12px;
  }
  .form-row-inline > div {
    flex: 1;
  }

  /* Checkboxes */
  .checkbox-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 8px 0;
  }
  .checkbox-item {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    color: var(--primary-text-color);
  }
  .checkbox-item input[type='checkbox'] {
    accent-color: var(--primary-color);
  }

  /* Valve duration row (inside program form) */
  .valve-duration-row {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 4px 0 4px 24px;
    font-size: 13px;
  }
  .valve-duration-row label {
    flex: 1;
    color: var(--primary-text-color);
  }
  .valve-duration-input {
    width: 70px;
    padding: 4px 8px;
    border: 1px solid var(--divider-color);
    border-radius: 4px;
    font-size: 13px;
    text-align: right;
    color: var(--primary-text-color);
    background: var(--card-background-color);
  }

  /* Valve config block (duration + frequency) */
  .valve-config-block {
    padding: 4px 0 8px 24px;
    border-bottom: 1px solid var(--divider-color);
    margin-bottom: 4px;
  }
  .valve-config-block:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
  .valve-frequency-row {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 4px 0 0;
    flex-wrap: wrap;
  }
  .valve-freq-select {
    padding: 3px 8px;
    border: 1px solid var(--divider-color);
    border-radius: 4px;
    font-size: 12px;
    color: var(--primary-text-color);
    background: var(--card-background-color);
  }
  .valve-freq-n-input {
    width: 50px;
    padding: 3px 6px;
    border: 1px solid var(--divider-color);
    border-radius: 4px;
    font-size: 12px;
    text-align: right;
    color: var(--primary-text-color);
    background: var(--card-background-color);
  }
  .valve-freq-days {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
    padding: 4px 0;
  }
  .valve-freq-day {
    display: flex;
    align-items: center;
    gap: 3px;
    font-size: 12px;
    color: var(--primary-text-color);
  }
  .valve-freq-day input[type='checkbox'] {
    accent-color: var(--primary-color);
  }

  /* Zone section inside program form */
  .form-zone-section {
    border: 1px solid var(--divider-color);
    border-radius: 6px;
    padding: 10px;
    margin-bottom: 8px;
  }
  .form-zone-name {
    font-size: 13px;
    font-weight: 500;
    color: var(--primary-text-color);
    margin-bottom: 6px;
  }

  /* Form buttons */
  .form-actions {
    display: flex;
    gap: 8px;
    justify-content: flex-end;
    margin-top: 12px;
  }
  .btn {
    padding: 8px 16px;
    border: none;
    border-radius: 6px;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    transition: opacity 0.2s;
  }
  .btn:hover {
    opacity: 0.85;
  }
  .btn-primary {
    background: var(--primary-color);
    color: var(--text-primary-color);
  }
  .btn-cancel {
    background: transparent;
    color: var(--secondary-text-color);
  }

  /* Add button */
  .add-btn {
    width: 100%;
    padding: 10px;
    border: 1px dashed var(--divider-color);
    border-radius: 8px;
    background: transparent;
    color: var(--secondary-text-color);
    font-size: 14px;
    cursor: pointer;
    transition:
      border-color 0.2s,
      color 0.2s;
  }
  .add-btn:hover {
    border-color: var(--primary-color);
    color: var(--primary-color);
  }

  /* Total duration */
  .total-duration {
    font-size: 13px;
    color: var(--secondary-text-color);
    margin-top: 8px;
    text-align: right;
  }
`;function re(o){return o.states["sensor.wateringhub_status"]?.attributes.available_valves??[]}function ye(o){return o.states["sensor.wateringhub_status"]?.attributes.zones??[]}function be(o){return o.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"_").replace(/^_|_$/g,"")}function Xe(o,e,t){let r=[{id:"programs",label:t("config.tab_programs")},{id:"zones",label:t("config.tab_zones")},{id:"valves",label:t("config.tab_valves")}];return d`
    <div class="tabs">
      ${r.map(n=>d`
          <div
            class="tab ${o===n.id?"active":""}"
            @click=${()=>e(n.id)}
          >
            ${n.label}
          </div>
        `)}
    </div>
  `}function et(o,e){let t=re(o);return t.length===0?d`<div class="empty-state">${e("config.no_valves")}</div>`:d`
    ${t.map(r=>d`
        <div class="list-item">
          <div class="list-item-header">
            <div>
              <div class="list-item-name">${r.name}</div>
              <div class="list-item-sub">${e("config.valve_entity")}: ${r.entity_id}</div>
            </div>
          </div>
        </div>
      `)}
  `}function tt(o,e,t,r,n,i,s,l,a){let c=ye(o),m=re(o);return d`
    ${c.map(p=>e&&e.id===p.id?We(e,m,i,s,l,a):Tt(p,m,t,r,a))}
    ${e?.isNew?We(e,m,i,s,l,a):u}
    ${e?u:d`<button class="add-btn" @click=${n}>+ ${a("config.new_zone")}</button>`}
    ${c.length===0&&!e?d`<div class="empty-state">${a("config.no_zones")}</div>`:u}
  `}function Tt(o,e,t,r,n){let i=o.valves.map(s=>e.find(l=>l.id===s)?.name??s).join(", ");return d`
    <div class="list-item">
      <div class="list-item-header">
        <div>
          <div class="list-item-name">${o.name}</div>
          <div class="list-item-sub">${i}</div>
        </div>
        <div class="list-item-actions">
          <button class="action-btn" @click=${()=>t(o)} title="${n("config.edit")}">
            <ha-icon icon="mdi:pencil"></ha-icon>
          </button>
          <button
            class="action-btn delete"
            @click=${()=>r(o.id)}
            title="${n("config.delete")}"
          >
            <ha-icon icon="mdi:delete"></ha-icon>
          </button>
        </div>
      </div>
    </div>
  `}function We(o,e,t,r,n,i){return d`
    <div class="inline-form">
      <div class="form-row">
        <label class="form-label">${i("config.name")}</label>
        <input
          class="form-input"
          .value=${o.name}
          @input=${s=>n({...o,name:s.target.value})}
        />
      </div>
      <div class="form-row">
        <label class="form-label">${i("config.select_valves")}</label>
        <div class="checkbox-list">
          ${e.map(s=>{let l=o.valves.includes(s.id);return d`
              <label class="checkbox-item">
                <input
                  type="checkbox"
                  .checked=${l}
                  @change=${()=>{let a=l?o.valves.filter(c=>c!==s.id):[...o.valves,s.id];n({...o,valves:a})}}
                />
                ${s.name}
              </label>
            `})}
        </div>
      </div>
      <div class="form-actions">
        <button class="btn btn-cancel" @click=${r}>${i("config.cancel")}</button>
        <button class="btn btn-primary" @click=${()=>t(o)}>${i("config.save")}</button>
      </div>
    </div>
  `}function rt(o,e,t,r,n,i,s,l,a){let c=X(o),m=ye(o),p=re(o);return d`
    ${c.map(g=>{let h=o.states[g];if(!h)return u;let v=h.attributes.program_id??"";return e&&e.id===v?Qe(e,m,p,i,s,l,a):Pt(h,g,t,r,a)})}
    ${e?.isNew?Qe(e,m,p,i,s,l,a):u}
    ${e?u:d`<button class="add-btn" @click=${n}>+ ${a("config.new_program")}</button>`}
    ${c.length===0&&!e?d`<div class="empty-state">${a("config.no_programs")}</div>`:u}
  `}function Pt(o,e,t,r,n){let i=M(o,e),s=o.attributes.schedule,l=o.attributes.total_duration,a=o.attributes.dry_run===!0,c=te(s,n);return d`
    <div class="list-item">
      <div class="list-item-header">
        <div>
          <div class="list-item-name">
            ${i}
            ${a?d`<span class="dry-run-tag">${n("config.dry_run")}</span>`:u}
          </div>
          <div class="list-item-sub">
            ${c}${l?` \u2014 ${l} min`:""}
          </div>
        </div>
        <div class="list-item-actions">
          <button class="action-btn" @click=${()=>t(e)} title="${n("config.edit")}">
            <ha-icon icon="mdi:pencil"></ha-icon>
          </button>
          <button
            class="action-btn delete"
            @click=${()=>r(e)}
            title="${n("config.delete")}"
          >
            <ha-icon icon="mdi:delete"></ha-icon>
          </button>
        </div>
      </div>
    </div>
  `}function Qe(o,e,t,r,n,i,s){let l=o.zones.reduce((a,c)=>a+c.valves.reduce((m,p)=>m+(p.duration||0),0),0);return d`
    <div class="inline-form">
      <!-- Name -->
      <div class="form-row">
        <label class="form-label">${s("config.name")}</label>
        <input
          class="form-input"
          .value=${o.name}
          @input=${a=>i({...o,name:a.target.value})}
        />
      </div>

      <!-- Schedule — time only -->
      <div class="form-row">
        <label class="form-label">${s("config.trigger_time")}</label>
        <input
          class="form-input"
          type="time"
          .value=${o.schedule.time}
          @input=${a=>i({...o,schedule:{time:a.target.value}})}
        />
      </div>

      <!-- Zones + valves with durations -->
      <div class="form-row">
        <label class="form-label">${s("config.select_zones")}</label>
        ${e.map(a=>{let c=o.zones.find(p=>p.zone_id===a.id),m=!!c;return d`
            <div class="form-zone-section">
              <label class="checkbox-item">
                <input
                  type="checkbox"
                  .checked=${m}
                  @change=${()=>{let p=m?o.zones.filter(g=>g.zone_id!==a.id):[...o.zones,{zone_id:a.id,valves:a.valves.map(g=>({valve_id:g,duration:10}))}];i({...o,zones:p})}}
                />
                <span class="form-zone-name">${a.name}</span>
              </label>
              ${m&&c?d`
                    ${c.valves.map(p=>{let g=t.find(f=>f.id===p.valve_id)?.name??p.valve_id,h=f=>{let A=c.valves.map(_=>_.valve_id===p.valve_id?{..._,...f}:_),y=o.zones.map(_=>_.zone_id===a.id?{..._,valves:A}:_);i({...o,zones:y})},v=p.frequency?.type??"",oe=new Date().toISOString().slice(0,10);return d`
                        <div class="valve-config-block">
                          <div class="valve-duration-row">
                            <label>${g}</label>
                            <input
                              class="valve-duration-input"
                              type="number"
                              min="1"
                              .value=${String(p.duration)}
                              @input=${f=>h({duration:parseInt(f.target.value)||1})}
                            />
                            <span>min</span>
                          </div>
                          <div class="valve-frequency-row">
                            <select
                              class="valve-freq-select"
                              .value=${v}
                              @change=${f=>{let A=f.target.value;h(A?A==="every_n_days"?{frequency:{type:"every_n_days",n:2,start_date:oe}}:{frequency:{type:"weekdays",days:[]}}:{frequency:void 0})}}
                            >
                              <option value="">${s("config.follows_program")}</option>
                              <option value="every_n_days">
                                ${s("config.frequency_every_n",{n:p.frequency?.n??2})}
                              </option>
                              <option value="weekdays">${s("config.frequency_weekdays")}</option>
                            </select>
                            ${v==="every_n_days"?d`
                                  <input
                                    class="valve-freq-n-input"
                                    type="number"
                                    min="2"
                                    .value=${String(p.frequency?.n??2)}
                                    @input=${f=>h({frequency:{...p.frequency,n:parseInt(f.target.value)||2}})}
                                  />
                                  <span>j</span>
                                `:u}
                            ${v==="weekdays"?d`
                                  <div class="valve-freq-days">
                                    ${["mon","tue","wed","thu","fri","sat","sun"].map(f=>{let A=p.frequency?.days?.includes(f)??!1;return d`
                                          <label class="valve-freq-day">
                                            <input
                                              type="checkbox"
                                              .checked=${A}
                                              @change=${()=>{let y=p.frequency?.days??[],_=A?y.filter(ot=>ot!==f):[...y,f];h({frequency:{...p.frequency,days:_}})}}
                                            />
                                            ${s(`days.${f}`)}
                                          </label>
                                        `})}
                                  </div>
                                `:u}
                          </div>
                        </div>
                      `})}
                  `:u}
            </div>
          `})}
      </div>

      ${l>0?d`<div class="total-duration">
            ${s("config.total_duration",{duration:l})}
          </div>`:u}

      <!-- Dry run toggle -->
      <div class="form-row">
        <label class="checkbox-item">
          <input
            type="checkbox"
            .checked=${o.dry_run}
            @change=${()=>i({...o,dry_run:!o.dry_run})}
          />
          ${s("config.dry_run")}
        </label>
        <div class="form-hint">${s("config.dry_run_hint")}</div>
      </div>

      <div class="form-actions">
        <button class="btn btn-cancel" @click=${n}>${s("config.cancel")}</button>
        <button class="btn btn-primary" @click=${()=>r(o)}>${s("config.save")}</button>
      </div>
    </div>
  `}var S=class extends ${constructor(){super(...arguments);this._activeTab="programs";this._editingZone=null;this._editingProgram=null;this._t=t=>t}setConfig(t){this._config=t}set hass(t){this._hass=t,this._t=W(t.language)}getCardSize(){return 5}_setTab(t){this._activeTab=t,this._editingZone=null,this._editingProgram=null}_newZone(){this._editingZone={id:"",name:"",valves:[],isNew:!0}}_editZone(t){this._editingZone={id:t.id,name:t.name,valves:[...t.valves],isNew:!1}}_cancelZone(){this._editingZone=null}_updateZoneForm(t){this._editingZone=t}async _saveZone(t){let r=t.isNew?be(t.name):t.id,n=t.isNew?"create_zone":"update_zone";await this._hass.callService("wateringhub",n,{id:r,name:t.name,valves:t.valves}),this._editingZone=null}async _deleteZone(t){confirm(this._t("config.confirm_delete_zone"))&&await this._hass.callService("wateringhub","delete_zone",{id:t})}_newProgram(){this._editingProgram={id:"",name:"",schedule:{time:"22:00"},zones:[],dry_run:!1,isNew:!0}}_editProgram(t){let r=this._hass.states[t];if(!r)return;let n=r.attributes,i=n.program_id??"",s=n.schedule??{time:"22:00"},l=(n.zones??[]).map(a=>({zone_id:a.zone_id,valves:a.valves.map(c=>({valve_id:c.valve_id,duration:c.duration,frequency:c.frequency}))}));this._editingProgram={id:i,name:typeof n.friendly_name=="string"?n.friendly_name:i,schedule:s,zones:l,dry_run:n.dry_run===!0,isNew:!1}}_cancelProgram(){this._editingProgram=null}_updateProgramForm(t){this._editingProgram=t}async _saveProgram(t){let r=t.isNew?be(t.name):t.id,n=t.isNew?"create_program":"update_program";await this._hass.callService("wateringhub",n,{id:r,name:t.name,schedule:t.schedule,dry_run:t.dry_run,zones:t.zones.map(i=>({zone_id:i.zone_id,valves:i.valves.map(s=>({valve_id:s.valve_id,duration:s.duration,...s.frequency?{frequency:s.frequency}:{}}))}))}),this._editingProgram=null}async _deleteProgram(t){if(confirm(this._t("config.confirm_delete_program"))){let n=this._hass.states[t]?.attributes.program_id??"";await this._hass.callService("wateringhub","delete_program",{id:n})}}render(){return!this._hass||!this._config?d`<ha-card>${this._t("loading")}</ha-card>`:d`
      <ha-card>
        <div class="header"><span class="title">${this._t("config.title")}</span></div>
        ${Xe(this._activeTab,t=>this._setTab(t),this._t)}
        ${this._activeTab==="valves"?et(this._hass,this._t):""}
        ${this._activeTab==="zones"?tt(this._hass,this._editingZone,t=>this._editZone(t),t=>this._deleteZone(t),()=>this._newZone(),t=>this._saveZone(t),()=>this._cancelZone(),t=>this._updateZoneForm(t),this._t):""}
        ${this._activeTab==="programs"?rt(this._hass,this._editingProgram,t=>this._editProgram(t),t=>this._deleteProgram(t),()=>this._newProgram(),t=>this._saveProgram(t),()=>this._cancelProgram(),t=>this._updateProgramForm(t),this._t):""}
      </ha-card>
    `}};S.styles=[Q,Ye],b([x()],S.prototype,"_config",2),b([x()],S.prototype,"_hass",2),b([x()],S.prototype,"_activeTab",2),b([x()],S.prototype,"_editingZone",2),b([x()],S.prototype,"_editingProgram",2),S=b([K("wateringhub-config-card")],S);globalThis.customCards=globalThis.customCards||[];globalThis.customCards.push({type:"wateringhub-config-card",name:"WateringHub Config Card",description:"Configuration card for WateringHub zones and programs"});
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
