var ot=Object.defineProperty;var nt=Object.getOwnPropertyDescriptor;var v=(r,e,t,o)=>{for(var n=o>1?void 0:o?nt(e,t):e,s=r.length-1,i;s>=0;s--)(i=r[s])&&(n=(o?i(e,t,n):i(n))||n);return o&&n&&ot(e,t,n),n};var U=globalThis,F=U.ShadowRoot&&(U.ShadyCSS===void 0||U.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,oe=Symbol(),xe=new WeakMap,H=class{constructor(e,t,o){if(this._$cssResult$=!0,o!==oe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(F&&e===void 0){let o=t!==void 0&&t.length===1;o&&(e=xe.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&xe.set(t,e))}return e}toString(){return this.cssText}},$e=r=>new H(typeof r=="string"?r:r+"",void 0,oe),E=(r,...e)=>{let t=r.length===1?r[0]:e.reduce((o,n,s)=>o+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+r[s+1],r[0]);return new H(t,r,oe)},we=(r,e)=>{if(F)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let o=document.createElement("style"),n=U.litNonce;n!==void 0&&o.setAttribute("nonce",n),o.textContent=t.cssText,r.appendChild(o)}},ne=F?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(let o of e.cssRules)t+=o.cssText;return $e(t)})(r):r;var{is:st,defineProperty:it,getOwnPropertyDescriptor:at,getOwnPropertyNames:lt,getOwnPropertySymbols:ct,getPrototypeOf:dt}=Object,q=globalThis,Se=q.trustedTypes,pt=Se?Se.emptyScript:"",ut=q.reactiveElementPolyfillSupport,D=(r,e)=>r,I={toAttribute(r,e){switch(e){case Boolean:r=r?pt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},B=(r,e)=>!st(r,e),Ae={attribute:!0,type:String,converter:I,reflect:!1,useDefault:!1,hasChanged:B};Symbol.metadata??=Symbol("metadata"),q.litPropertyMetadata??=new WeakMap;var S=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Ae){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let o=Symbol(),n=this.getPropertyDescriptor(e,o,t);n!==void 0&&it(this.prototype,e,n)}}static getPropertyDescriptor(e,t,o){let{get:n,set:s}=at(this.prototype,e)??{get(){return this[t]},set(i){this[t]=i}};return{get:n,set(i){let l=n?.call(this);s?.call(this,i),this.requestUpdate(e,l,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ae}static _$Ei(){if(this.hasOwnProperty(D("elementProperties")))return;let e=dt(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(D("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(D("properties"))){let t=this.properties,o=[...lt(t),...ct(t)];for(let n of o)this.createProperty(n,t[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[o,n]of t)this.elementProperties.set(o,n)}this._$Eh=new Map;for(let[t,o]of this.elementProperties){let n=this._$Eu(t,o);n!==void 0&&this._$Eh.set(n,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let o=new Set(e.flat(1/0).reverse());for(let n of o)t.unshift(ne(n))}else e!==void 0&&t.push(ne(e));return t}static _$Eu(e,t){let o=t.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return we(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$ET(e,t){let o=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,o);if(n!==void 0&&o.reflect===!0){let s=(o.converter?.toAttribute!==void 0?o.converter:I).toAttribute(t,o.type);this._$Em=e,s==null?this.removeAttribute(n):this.setAttribute(n,s),this._$Em=null}}_$AK(e,t){let o=this.constructor,n=o._$Eh.get(e);if(n!==void 0&&this._$Em!==n){let s=o.getPropertyOptions(n),i=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:I;this._$Em=n;let l=i.fromAttribute(t,s.type);this[n]=l??this._$Ej?.get(n)??l,this._$Em=null}}requestUpdate(e,t,o,n=!1,s){if(e!==void 0){let i=this.constructor;if(n===!1&&(s=this[e]),o??=i.getPropertyOptions(e),!((o.hasChanged??B)(s,t)||o.useDefault&&o.reflect&&s===this._$Ej?.get(e)&&!this.hasAttribute(i._$Eu(e,o))))return;this.C(e,t,o)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:o,reflect:n,wrapped:s},i){o&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,i??t??this[e]),s!==!0||i!==void 0)||(this._$AL.has(e)||(this.hasUpdated||o||(t=void 0),this._$AL.set(e,t)),n===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[n,s]of this._$Ep)this[n]=s;this._$Ep=void 0}let o=this.constructor.elementProperties;if(o.size>0)for(let[n,s]of o){let{wrapped:i}=s,l=this[n];i!==!0||this._$AL.has(n)||l===void 0||this.C(n,void 0,s,l)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(o=>o.hostUpdate?.()),this.update(t)):this._$EM()}catch(o){throw e=!1,this._$EM(),o}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[D("elementProperties")]=new Map,S[D("finalized")]=new Map,ut?.({ReactiveElement:S}),(q.reactiveElementVersions??=[]).push("2.1.2");var pe=globalThis,Ee=r=>r,J=pe.trustedTypes,Te=J?J.createPolicy("lit-html",{createHTML:r=>r}):void 0,Re="$lit$",A=`lit$${Math.random().toFixed(9).slice(2)}$`,Me="?"+A,mt=`<${Me}>`,z=document,O=()=>z.createComment(""),j=r=>r===null||typeof r!="object"&&typeof r!="function",ue=Array.isArray,gt=r=>ue(r)||typeof r?.[Symbol.iterator]=="function",se=`[ 	
\f\r]`,Z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Pe=/-->/g,ze=/>/g,T=RegExp(`>|${se}(?:([^\\s"'>=/]+)(${se}*=${se}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ke=/'/g,Ne=/"/g,He=/^(?:script|style|textarea|title)$/i,me=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),d=me(1),Ct=me(2),Rt=me(3),k=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),Ce=new WeakMap,P=z.createTreeWalker(z,129);function De(r,e){if(!ue(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Te!==void 0?Te.createHTML(e):e}var ht=(r,e)=>{let t=r.length-1,o=[],n,s=e===2?"<svg>":e===3?"<math>":"",i=Z;for(let l=0;l<t;l++){let a=r[l],c,u,p=-1,g=0;for(;g<a.length&&(i.lastIndex=g,u=i.exec(a),u!==null);)g=i.lastIndex,i===Z?u[1]==="!--"?i=Pe:u[1]!==void 0?i=ze:u[2]!==void 0?(He.test(u[2])&&(n=RegExp("</"+u[2],"g")),i=T):u[3]!==void 0&&(i=T):i===T?u[0]===">"?(i=n??Z,p=-1):u[1]===void 0?p=-2:(p=i.lastIndex-u[2].length,c=u[1],i=u[3]===void 0?T:u[3]==='"'?Ne:ke):i===Ne||i===ke?i=T:i===Pe||i===ze?i=Z:(i=T,n=void 0);let h=i===T&&r[l+1].startsWith("/>")?" ":"";s+=i===Z?a+mt:p>=0?(o.push(c),a.slice(0,p)+Re+a.slice(p)+A+h):a+A+(p===-2?l:h)}return[De(r,s+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),o]},V=class r{constructor({strings:e,_$litType$:t},o){let n;this.parts=[];let s=0,i=0,l=e.length-1,a=this.parts,[c,u]=ht(e,t);if(this.el=r.createElement(c,o),P.currentNode=this.el.content,t===2||t===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(n=P.nextNode())!==null&&a.length<l;){if(n.nodeType===1){if(n.hasAttributes())for(let p of n.getAttributeNames())if(p.endsWith(Re)){let g=u[i++],h=n.getAttribute(p).split(A),f=/([.?@])?(.*)/.exec(g);a.push({type:1,index:s,name:f[2],strings:h,ctor:f[1]==="."?ae:f[1]==="?"?le:f[1]==="@"?ce:C}),n.removeAttribute(p)}else p.startsWith(A)&&(a.push({type:6,index:s}),n.removeAttribute(p));if(He.test(n.tagName)){let p=n.textContent.split(A),g=p.length-1;if(g>0){n.textContent=J?J.emptyScript:"";for(let h=0;h<g;h++)n.append(p[h],O()),P.nextNode(),a.push({type:2,index:++s});n.append(p[g],O())}}}else if(n.nodeType===8)if(n.data===Me)a.push({type:2,index:s});else{let p=-1;for(;(p=n.data.indexOf(A,p+1))!==-1;)a.push({type:7,index:s}),p+=A.length-1}s++}}static createElement(e,t){let o=z.createElement("template");return o.innerHTML=e,o}};function N(r,e,t=r,o){if(e===k)return e;let n=o!==void 0?t._$Co?.[o]:t._$Cl,s=j(e)?void 0:e._$litDirective$;return n?.constructor!==s&&(n?._$AO?.(!1),s===void 0?n=void 0:(n=new s(r),n._$AT(r,t,o)),o!==void 0?(t._$Co??=[])[o]=n:t._$Cl=n),n!==void 0&&(e=N(r,n._$AS(r,e.values),n,o)),e}var ie=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:o}=this._$AD,n=(e?.creationScope??z).importNode(t,!0);P.currentNode=n;let s=P.nextNode(),i=0,l=0,a=o[0];for(;a!==void 0;){if(i===a.index){let c;a.type===2?c=new L(s,s.nextSibling,this,e):a.type===1?c=new a.ctor(s,a.name,a.strings,this,e):a.type===6&&(c=new de(s,this,e)),this._$AV.push(c),a=o[++l]}i!==a?.index&&(s=P.nextNode(),i++)}return P.currentNode=z,n}p(e){let t=0;for(let o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}},L=class r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,n){this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=N(this,e,t),j(e)?e===m||e==null||e===""?(this._$AH!==m&&this._$AR(),this._$AH=m):e!==this._$AH&&e!==k&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):gt(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==m&&j(this._$AH)?this._$AA.nextSibling.data=e:this.T(z.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:o}=e,n=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=V.createElement(De(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===n)this._$AH.p(t);else{let s=new ie(n,this),i=s.u(this.options);s.p(t),this.T(i),this._$AH=s}}_$AC(e){let t=Ce.get(e.strings);return t===void 0&&Ce.set(e.strings,t=new V(e)),t}k(e){ue(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,o,n=0;for(let s of e)n===t.length?t.push(o=new r(this.O(O()),this.O(O()),this,this.options)):o=t[n],o._$AI(s),n++;n<t.length&&(this._$AR(o&&o._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let o=Ee(e).nextSibling;Ee(e).remove(),e=o}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},C=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,n,s){this.type=1,this._$AH=m,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=s,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=m}_$AI(e,t=this,o,n){let s=this.strings,i=!1;if(s===void 0)e=N(this,e,t,0),i=!j(e)||e!==this._$AH&&e!==k,i&&(this._$AH=e);else{let l=e,a,c;for(e=s[0],a=0;a<s.length-1;a++)c=N(this,l[o+a],t,a),c===k&&(c=this._$AH[a]),i||=!j(c)||c!==this._$AH[a],c===m?e=m:e!==m&&(e+=(c??"")+s[a+1]),this._$AH[a]=c}i&&!n&&this.j(e)}j(e){e===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},ae=class extends C{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===m?void 0:e}},le=class extends C{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==m)}},ce=class extends C{constructor(e,t,o,n,s){super(e,t,o,n,s),this.type=5}_$AI(e,t=this){if((e=N(this,e,t,0)??m)===k)return;let o=this._$AH,n=e===m&&o!==m||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,s=e!==m&&(o===m||n);n&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},de=class{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){N(this,e)}};var vt=pe.litHtmlPolyfillSupport;vt?.(V,L),(pe.litHtmlVersions??=[]).push("3.3.2");var Ie=(r,e,t)=>{let o=t?.renderBefore??e,n=o._$litPart$;if(n===void 0){let s=t?.renderBefore??null;o._$litPart$=n=new L(e.insertBefore(O(),s),s,void 0,t??{})}return n._$AI(r),n};var ge=globalThis,y=class extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ie(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return k}};y._$litElement$=!0,y.finalized=!0,ge.litElementHydrateSupport?.({LitElement:y});var ft=ge.litElementPolyfillSupport;ft?.({LitElement:y});(ge.litElementVersions??=[]).push("4.2.2");var G=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};var _t={attribute:!0,type:String,converter:I,reflect:!1,hasChanged:B},yt=(r=_t,e,t)=>{let{kind:o,metadata:n}=t,s=globalThis.litPropertyMetadata.get(n);if(s===void 0&&globalThis.litPropertyMetadata.set(n,s=new Map),o==="setter"&&((r=Object.create(r)).wrapped=!0),s.set(t.name,r),o==="accessor"){let{name:i}=t;return{set(l){let a=e.get.call(this);e.set.call(this,l),this.requestUpdate(i,a,r,!0,l)},init(l){return l!==void 0&&this.C(i,void 0,r,l),l}}}if(o==="setter"){let{name:i}=t;return function(l){let a=this[i];e.call(this,l),this.requestUpdate(i,a,r,!0,l)}}throw Error("Unsupported decorator location: "+o)};function Ze(r){return(e,t)=>typeof t=="object"?yt(r,e,t):((o,n,s)=>{let i=n.hasOwnProperty(s);return n.constructor.createProperty(s,o),i?Object.getOwnPropertyDescriptor(n,s):void 0})(r,e,t)}function _(r){return Ze({...r,state:!0,attribute:!1})}var Oe={"status.idle":"Idle","status.running":"Running","status.error":"Error","status.disabled":"Disabled",stop_all:"Stop All",next:"Next",last:"Last",no_programs:"No programs found",loading:"Loading...","time.just_now":"just now","time.minutes_ago":"{count}m ago","time.hours_ago":"{count}h ago","time.days_ago":"{count}d ago","time.today_at":"today at {time}","time.tomorrow_at":"tomorrow at {time}","time.in_days":"in {count}d","time.never":"Never","time.no_schedule":"No active program","status.running_program":"Running: {name}",stop_confirm:"Stop all watering?","schedule.daily":"Every day at {time}","schedule.every_n_days":"Every {n} days at {time}","schedule.weekdays":"{days} at {time}","recap.total_duration":"Total duration: {duration} min","days.mon":"Mon","days.tue":"Tue","days.wed":"Wed","days.thu":"Thu","days.fri":"Fri","days.sat":"Sat","days.sun":"Sun","running.progress":"Valve {done} of {total}","error.program":"Error \u2014 {name}","error.auto_stopped":"All valves have been automatically closed.","config.tab_valves":"Valves","config.tab_zones":"Zones","config.tab_programs":"Programs","config.no_valves":"No valves configured","config.no_zones":"No zones created","config.no_programs":"No programs created","config.new_zone":"New zone","config.new_program":"New program","config.name":"Name","config.save":"Save","config.cancel":"Cancel","config.delete":"Delete","config.edit":"Edit","config.confirm_delete_zone":"Delete this zone?","config.confirm_delete_program":"Delete this program?","config.schedule_type":"Schedule type","config.schedule_daily":"Daily","config.schedule_every_n_days":"Every N days","config.schedule_weekdays":"Weekdays","config.schedule_time":"Time","config.schedule_every_n":"Every N days","config.schedule_days":"Days","config.select_valves":"Select valves","config.select_zones":"Select zones","config.valve_entity":"Entity","config.total_duration":"Total: {duration} min","config.dry_run":"Test mode","config.dry_run_hint":"Runs the sequence without activating valves","running.dry_run":"Test mode","config.title":"WateringHub Config"};var je={"status.idle":"En attente","status.running":"Arrosage en cours","status.error":"Erreur","status.disabled":"D\xE9sactiv\xE9",stop_all:"Tout arr\xEAter",next:"Prochain",last:"Dernier",no_programs:"Aucun programme trouv\xE9",loading:"Chargement...","time.just_now":"\xE0 l'instant","time.minutes_ago":"il y a {count} min","time.hours_ago":"il y a {count}h","time.days_ago":"il y a {count}j","time.today_at":"aujourd'hui \xE0 {time}","time.tomorrow_at":"demain \xE0 {time}","time.in_days":"dans {count}j","time.never":"Jamais","time.no_schedule":"Aucun programme actif","status.running_program":"En cours : {name}",stop_confirm:"Arr\xEAter tout l'arrosage ?","schedule.daily":"Tous les jours \xE0 {time}","schedule.every_n_days":"Tous les {n} jours \xE0 {time}","schedule.weekdays":"{days} \xE0 {time}","recap.total_duration":"Dur\xE9e totale : {duration} min","days.mon":"Lun","days.tue":"Mar","days.wed":"Mer","days.thu":"Jeu","days.fri":"Ven","days.sat":"Sam","days.sun":"Dim","running.progress":"Vanne {done} sur {total}","error.program":"Erreur \u2014 {name}","error.auto_stopped":"Toutes les vannes ont \xE9t\xE9 ferm\xE9es automatiquement.","config.tab_valves":"Vannes","config.tab_zones":"Zones","config.tab_programs":"Programmes","config.no_valves":"Aucune vanne configur\xE9e","config.no_zones":"Aucune zone cr\xE9\xE9e","config.no_programs":"Aucun programme cr\xE9\xE9","config.new_zone":"Nouvelle zone","config.new_program":"Nouveau programme","config.name":"Nom","config.save":"Sauvegarder","config.cancel":"Annuler","config.delete":"Supprimer","config.edit":"Modifier","config.confirm_delete_zone":"Supprimer cette zone ?","config.confirm_delete_program":"Supprimer ce programme ?","config.schedule_type":"Type de planification","config.schedule_daily":"Tous les jours","config.schedule_every_n_days":"Tous les N jours","config.schedule_weekdays":"Jours de la semaine","config.schedule_time":"Heure","config.schedule_every_n":"Tous les N jours","config.schedule_days":"Jours","config.select_valves":"S\xE9lectionner les vannes","config.select_zones":"S\xE9lectionner les zones","config.valve_entity":"Entit\xE9","config.total_duration":"Total : {duration} min","config.dry_run":"Mode test","config.dry_run_hint":"Ex\xE9cute la s\xE9quence sans activer les vannes","running.dry_run":"Mode test","config.title":"WateringHub Config"};var he={en:Oe,fr:je};function W(r){let e=r?.toLowerCase().startsWith("fr")?"fr":"en",t=he[e]??he.en;return(o,n)=>{let s=t[o]??he.en[o]??o;return n&&(s=s.replace(/\{(\w+)\}/g,(i,l)=>String(n[l]??i))),s}}var Y=E`
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
`;var Ve=E`
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
`;function Q(r){return Object.keys(r.states).filter(e=>e.startsWith("switch.wateringhub_"))}function R(r,e){return typeof r?.attributes.friendly_name=="string"?r.attributes.friendly_name:e}function X(r){return r.states["sensor.wateringhub_status"]?.state??"idle"}function Le(r){let e=r.states["sensor.wateringhub_status"];if(e?.state!=="error")return null;let t=e.attributes,o=t.current_program,n=o?r.states[`switch.wateringhub_${o}`]:void 0;return{programName:R(n,o??""),errorMessage:t.error_message??""}}function Ue(r){let e=r.states["sensor.wateringhub_status"];if(e?.state!=="running")return null;let t=e.attributes,o=t.current_valve_start,n=t.current_valve_duration??0,s=t.valves_done??0,i=t.valves_total??1,l=o?Math.max(0,(Date.now()-new Date(o).getTime())/1e3):0,a=Math.max(0,n-l),c=n>0?Math.min(100,l/n*100):0,u=(s+c/100)/i*100,p=(s+1)/i*100,g=Array.isArray(t.valves_sequence)?t.valves_sequence:[],h=g.filter(w=>w.status==="pending").reduce((w,M)=>w+M.duration,0),f=a+h,re=g.length>0?g.reduce((w,M)=>w+M.duration,0):n*i,$=g.filter(w=>w.status==="done").reduce((w,M)=>w+M.duration,0)+l;return{programName:t.current_program??"",zoneName:t.current_zone_name??"",valveName:t.current_valve_name??"",valveStart:o??"",valveDuration:n,valvesDone:s,valvesTotal:i,progressPercent:t.progress_percent??0,remaining:a,totalRemaining:f,totalDuration:re,totalElapsed:$,valvePercent:c,finePercent:u,globalEndPercent:p,valveSequence:g,dryRun:t.dry_run===!0}}function ve(r){if(r<=0)return"0:00";let e=Math.floor(r/3600),t=Math.floor(r%3600/60),o=Math.floor(r%60);return e>0?`${e}:${t.toString().padStart(2,"0")}:${o.toString().padStart(2,"0")}`:`${t}:${o.toString().padStart(2,"0")}`}function ee(r,e){if(!r)return"";switch(r.type){case"daily":return e("schedule.daily",{time:r.time});case"every_n_days":return e("schedule.every_n_days",{n:r.n??2,time:r.time});case"weekdays":{let t=(r.days??[]).map(o=>e(`days.${o}`)).join(", ");return e("schedule.weekdays",{days:t,time:r.time})}default:return r.time}}function Fe(r){return!r||r.state==="None"||r.state==="unknown"||r.state==="unavailable"}function fe(r,e,t,o){let n=r.states[e];if(Fe(n))return t("time.never");let s=new Date(n.state);if(Number.isNaN(s.getTime()))return n.state;let i=new Date,l=i.getTime()-s.getTime();if(l<0){let p=new Date(i.getFullYear(),i.getMonth(),i.getDate()),g=new Date(s.getFullYear(),s.getMonth(),s.getDate()),h=Math.round((g.getTime()-p.getTime())/(1e3*60*60*24)),f=s.toLocaleTimeString(o??[],{hour:"2-digit",minute:"2-digit"});return h===0?t("time.today_at",{time:f}):h===1?t("time.tomorrow_at",{time:f}):t("time.in_days",{count:h})}let a=Math.floor(l/(1e3*60));if(a<1)return t("time.just_now");if(a<60)return t("time.minutes_ago",{count:a});let c=Math.floor(a/60);if(c<24)return t("time.hours_ago",{count:c});let u=Math.floor(c/24);return t("time.days_ago",{count:u})}function qe(r,e,t){let o=r.states["sensor.wateringhub_next_run"];return Fe(o)?e("time.no_schedule"):fe(r,"sensor.wateringhub_next_run",e,t)}function Be(r){return d`
    <div class="header">
      <span class="title">${r}</span>
    </div>
  `}function $t(r,e,t){return e?X(r)==="running"?d``:d`
    <div class="program-status">
      <span class="badge-sm badge-idle">${t("status.idle")}</span>
      <span class="info-sm">${t("next")}: ${qe(r,t,r.language)}</span>
      <span class="info-sm">
        ${t("last")}: ${fe(r,"sensor.wateringhub_last_run",t,r.language)}
      </span>
    </div>
  `:d`
      <div class="program-status">
        <span class="badge-sm badge-disabled">${t("status.disabled")}</span>
      </div>
    `}function Je(r,e){let t=Le(r);return t?d`
    <div class="error-view">
      <div class="error-title">
        <ha-icon icon="mdi:alert-circle"></ha-icon>
        ${e("error.program",{name:t.programName})}
      </div>
      ${t.errorMessage?d`<div class="error-message">${t.errorMessage}</div>`:m}
      <div class="error-auto-stopped">${e("error.auto_stopped")}</div>
    </div>
  `:d``}function Ge(r,e,t){let o=Ue(r);if(!o)return d``;let n=2*Math.PI*30,s=o.totalDuration>0?o.totalElapsed/o.totalDuration:0,i=n*(1-Math.min(1,s));return d`
    <div class="running-block">
      <button class="running-stop-btn" @click=${e}>${t("stop_all")}</button>
      ${o.dryRun?d`<span class="badge-dry-run">${t("running.dry_run")}</span>`:m}

      <div class="global-hero">
        <div class="circular-progress">
          <svg viewBox="0 0 68 68">
            <circle class="cp-track" cx="34" cy="34" r="30" />
            <circle
              class="cp-fill"
              cx="34"
              cy="34"
              r="30"
              style="stroke-dasharray: ${n}; stroke-dashoffset: ${i}"
            />
          </svg>
          <div class="cp-center">
            <span class="cp-time">${ve(o.totalRemaining)}</span>
          </div>
        </div>
        <div class="global-info">
          <div class="global-program-name">
            ${R(r.states[`switch.wateringhub_${o.programName}`],o.programName)}
          </div>
          <div class="global-sub">
            ${t("running.progress",{done:o.valvesDone+1,total:o.valvesTotal})}
          </div>
        </div>
      </div>

      ${o.valveSequence.length>0?wt(o.valveSequence,o.remaining,t):m}
    </div>
  `}function wt(r,e,t){let o=[];for(let a of r){let c=o[o.length-1];c?.zoneName===a.zone_name?c.valves.push(a):o.push({zoneName:a.zone_name,valves:[a]})}let n=d`<svg viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z"
    />
  </svg>`,s=d`<svg viewBox="0 0 24 24">
    <circle fill="currentColor" cx="12" cy="12" r="6" />
  </svg>`,i=d`<svg viewBox="0 0 24 24">
    <circle fill="none" stroke="currentColor" stroke-width="2" cx="12" cy="12" r="6" />
  </svg>`,l={done:n,running:s,pending:i};return d`
    <div class="valve-timeline">
      ${o.map(a=>d`
          <div class="tl-zone">${a.zoneName}</div>
          ${a.valves.map(c=>{let u=Math.ceil(c.duration/60);return d`
              <div class="tl-step tl-${c.status}">
                <span class="tl-dot">${l[c.status]}</span>
                <span class="tl-step-name">${c.valve_name}</span>
                <span class="tl-step-time">
                  ${c.status==="running"?ve(e):`${u} min`}
                </span>
              </div>
            `})}
        `)}
    </div>
  `}function Ke(r,e,t,o,n,s){return e.length===0?d`<div class="empty-state">${s("no_programs")}</div>`:d`${e.map(i=>{let l=r.states[i];if(!l)return m;let a=l.state==="on",c=t===i,u=R(l,i);return d`
      <div class="program-wrapper">
        <div class="program">
          <div class="program-header" @click=${()=>o(i)}>
            <ha-icon class="chevron ${c?"open":""}" icon="mdi:chevron-down"></ha-icon>
            ${a?d`<div class="active-dot"></div>`:m}
            <span class="program-name ${a?"active":""}">${u}</span>
          </div>
          <ha-switch .checked=${a} @change=${()=>n(i)}></ha-switch>
        </div>
        ${$t(r,a,s)}
        ${St(l.attributes,c,s)}
      </div>
    `})}`}function St(r,e,t){let o=r.schedule,n=r.zones??[],s=r.total_duration;return d`
    <div class="program-recap ${e?"open":""}">
      ${o?d`<div class="recap-schedule">
            <ha-icon icon="mdi:calendar-clock"></ha-icon>
            ${ee(o,t)}
          </div>`:m}
      ${n.map(i=>d`
          <div class="recap-zone">
            <ha-icon icon="mdi:map-marker"></ha-icon>
            ${i.zone_name}
          </div>
          ${i.valves.map(l=>d`
              <div class="recap-valve">
                <ha-icon icon="mdi:water"></ha-icon>
                ${l.valve_name} — ${l.duration} min
              </div>
            `)}
        `)}
      ${s?d`<div class="recap-total">
            <ha-icon icon="mdi:timer-outline"></ha-icon>
            ${t("recap.total_duration",{duration:s})}
          </div>`:m}
    </div>
  `}var b=class extends y{constructor(){super(...arguments);this._programEntities=[];this._expandedProgram=null;this._tick=0;this._t=t=>t;this._timerInterval=null}setConfig(t){this._config=t}set hass(t){let o=this._hass;this._hass=t,this._t=W(t.language),o?.states!==t.states&&(this._programEntities=Q(t)),this._updateTimer(X(t))}disconnectedCallback(){super.disconnectedCallback(),this._clearTimer()}_updateTimer(t){t==="running"&&!this._timerInterval?this._timerInterval=setInterval(()=>{this._tick++},1e3):t!=="running"&&this._timerInterval&&this._clearTimer()}_clearTimer(){this._timerInterval&&(clearInterval(this._timerInterval),this._timerInterval=null)}getCardSize(){return 3}_toggleExpand(t){this._expandedProgram=this._expandedProgram===t?null:t}_toggleProgram(t){let o=this._hass.states[t];if(!o)return;let n=o.state==="on"?"turn_off":"turn_on";this._hass.callService("switch",n,{entity_id:t})}_stopAll(){confirm(this._t("stop_confirm"))&&this._hass.callService("wateringhub","stop_all",{})}render(){if(!this._hass||!this._config)return d`<ha-card>${this._t("loading")}</ha-card>`;let t=this._config.title??"WateringHub";return d`
      <ha-card>
        ${Be(t)}
        ${Je(this._hass,this._t)}
        ${Ge(this._hass,()=>this._stopAll(),this._t)}
        ${Ke(this._hass,this._programEntities,this._expandedProgram,o=>this._toggleExpand(o),o=>this._toggleProgram(o),this._t)}
      </ha-card>
    `}};b.styles=[Y,Ve],v([_()],b.prototype,"_config",2),v([_()],b.prototype,"_hass",2),v([_()],b.prototype,"_programEntities",2),v([_()],b.prototype,"_expandedProgram",2),v([_()],b.prototype,"_tick",2),b=v([G("wateringhub-card")],b);globalThis.customCards=globalThis.customCards||[];globalThis.customCards.push({type:"wateringhub-card",name:"WateringHub Card",description:"Watering management card for WateringHub"});var We=E`
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
`;function te(r){return r.states["sensor.wateringhub_status"]?.attributes.available_valves??[]}function _e(r){return r.states["sensor.wateringhub_status"]?.attributes.zones??[]}function ye(r){return r.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"_").replace(/^_|_$/g,"")}function Xe(r,e,t){let o=[{id:"programs",label:t("config.tab_programs")},{id:"zones",label:t("config.tab_zones")},{id:"valves",label:t("config.tab_valves")}];return d`
    <div class="tabs">
      ${o.map(n=>d`
          <div
            class="tab ${r===n.id?"active":""}"
            @click=${()=>e(n.id)}
          >
            ${n.label}
          </div>
        `)}
    </div>
  `}function et(r,e){let t=te(r);return t.length===0?d`<div class="empty-state">${e("config.no_valves")}</div>`:d`
    ${t.map(o=>d`
        <div class="list-item">
          <div class="list-item-header">
            <div>
              <div class="list-item-name">${o.name}</div>
              <div class="list-item-sub">${e("config.valve_entity")}: ${o.entity_id}</div>
            </div>
          </div>
        </div>
      `)}
  `}function tt(r,e,t,o,n,s,i,l,a){let c=_e(r),u=te(r);return d`
    ${c.map(p=>e&&e.id===p.id?Ye(e,u,s,i,l,a):At(p,u,t,o,a))}
    ${e?.isNew?Ye(e,u,s,i,l,a):m}
    ${e?m:d`<button class="add-btn" @click=${n}>+ ${a("config.new_zone")}</button>`}
    ${c.length===0&&!e?d`<div class="empty-state">${a("config.no_zones")}</div>`:m}
  `}function At(r,e,t,o,n){let s=r.valves.map(i=>e.find(l=>l.id===i)?.name??i).join(", ");return d`
    <div class="list-item">
      <div class="list-item-header">
        <div>
          <div class="list-item-name">${r.name}</div>
          <div class="list-item-sub">${s}</div>
        </div>
        <div class="list-item-actions">
          <button class="action-btn" @click=${()=>t(r)} title="${n("config.edit")}">
            <ha-icon icon="mdi:pencil"></ha-icon>
          </button>
          <button
            class="action-btn delete"
            @click=${()=>o(r.id)}
            title="${n("config.delete")}"
          >
            <ha-icon icon="mdi:delete"></ha-icon>
          </button>
        </div>
      </div>
    </div>
  `}function Ye(r,e,t,o,n,s){return d`
    <div class="inline-form">
      <div class="form-row">
        <label class="form-label">${s("config.name")}</label>
        <input
          class="form-input"
          .value=${r.name}
          @input=${i=>n({...r,name:i.target.value})}
        />
      </div>
      <div class="form-row">
        <label class="form-label">${s("config.select_valves")}</label>
        <div class="checkbox-list">
          ${e.map(i=>{let l=r.valves.includes(i.id);return d`
              <label class="checkbox-item">
                <input
                  type="checkbox"
                  .checked=${l}
                  @change=${()=>{let a=l?r.valves.filter(c=>c!==i.id):[...r.valves,i.id];n({...r,valves:a})}}
                />
                ${i.name}
              </label>
            `})}
        </div>
      </div>
      <div class="form-actions">
        <button class="btn btn-cancel" @click=${o}>${s("config.cancel")}</button>
        <button class="btn btn-primary" @click=${()=>t(r)}>${s("config.save")}</button>
      </div>
    </div>
  `}function rt(r,e,t,o,n,s,i,l,a){let c=Q(r),u=_e(r),p=te(r);return d`
    ${c.map(g=>{let h=r.states[g];if(!h)return m;let f=h.attributes.program_id??"";return e&&e.id===f?Qe(e,u,p,s,i,l,a):Et(h,g,t,o,a)})}
    ${e?.isNew?Qe(e,u,p,s,i,l,a):m}
    ${e?m:d`<button class="add-btn" @click=${n}>+ ${a("config.new_program")}</button>`}
    ${c.length===0&&!e?d`<div class="empty-state">${a("config.no_programs")}</div>`:m}
  `}function Et(r,e,t,o,n){let s=R(r,e),i=r.attributes.schedule,l=r.attributes.total_duration,a=r.attributes.dry_run===!0,c=ee(i,n);return d`
    <div class="list-item">
      <div class="list-item-header">
        <div>
          <div class="list-item-name">
            ${s}
            ${a?d`<span class="dry-run-tag">${n("config.dry_run")}</span>`:m}
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
            @click=${()=>o(e)}
            title="${n("config.delete")}"
          >
            <ha-icon icon="mdi:delete"></ha-icon>
          </button>
        </div>
      </div>
    </div>
  `}function Qe(r,e,t,o,n,s,i){let l=r.zones.reduce((a,c)=>a+c.valves.reduce((u,p)=>u+(p.duration||0),0),0);return d`
    <div class="inline-form">
      <!-- Name -->
      <div class="form-row">
        <label class="form-label">${i("config.name")}</label>
        <input
          class="form-input"
          .value=${r.name}
          @input=${a=>s({...r,name:a.target.value})}
        />
      </div>

      <!-- Schedule -->
      <div class="form-row-inline">
        <div>
          <label class="form-label">${i("config.schedule_type")}</label>
          <select
            class="form-select"
            .value=${r.schedule.type}
            @change=${a=>s({...r,schedule:{...r.schedule,type:a.target.value}})}
          >
            <option value="daily">${i("config.schedule_daily")}</option>
            <option value="every_n_days">${i("config.schedule_every_n_days")}</option>
            <option value="weekdays">${i("config.schedule_weekdays")}</option>
          </select>
        </div>
        <div>
          <label class="form-label">${i("config.schedule_time")}</label>
          <input
            class="form-input"
            type="time"
            .value=${r.schedule.time}
            @input=${a=>s({...r,schedule:{...r.schedule,time:a.target.value}})}
          />
        </div>
      </div>

      ${r.schedule.type==="every_n_days"?d`
            <div class="form-row">
              <label class="form-label">${i("config.schedule_every_n")}</label>
              <input
                class="form-input"
                type="number"
                min="2"
                .value=${String(r.schedule.n??2)}
                @input=${a=>s({...r,schedule:{...r.schedule,n:parseInt(a.target.value)||2}})}
              />
            </div>
          `:m}
      ${r.schedule.type==="weekdays"?d`
            <div class="form-row">
              <label class="form-label">${i("config.schedule_days")}</label>
              <div class="checkbox-list" style="flex-direction:row; flex-wrap:wrap;">
                ${["mon","tue","wed","thu","fri","sat","sun"].map(a=>{let c=r.schedule.days?.includes(a)??!1;return d`
                    <label class="checkbox-item">
                      <input
                        type="checkbox"
                        .checked=${c}
                        @change=${()=>{let u=r.schedule.days??[],p=c?u.filter(g=>g!==a):[...u,a];s({...r,schedule:{...r.schedule,days:p}})}}
                      />
                      ${i(`days.${a}`)}
                    </label>
                  `})}
              </div>
            </div>
          `:m}

      <!-- Zones + valves with durations -->
      <div class="form-row">
        <label class="form-label">${i("config.select_zones")}</label>
        ${e.map(a=>{let c=r.zones.find(p=>p.zone_id===a.id),u=!!c;return d`
            <div class="form-zone-section">
              <label class="checkbox-item">
                <input
                  type="checkbox"
                  .checked=${u}
                  @change=${()=>{let p=u?r.zones.filter(g=>g.zone_id!==a.id):[...r.zones,{zone_id:a.id,valves:a.valves.map(g=>({valve_id:g,duration:10}))}];s({...r,zones:p})}}
                />
                <span class="form-zone-name">${a.name}</span>
              </label>
              ${u&&c?d`
                    ${c.valves.map(p=>{let g=t.find(h=>h.id===p.valve_id)?.name??p.valve_id;return d`
                        <div class="valve-duration-row">
                          <label>${g}</label>
                          <input
                            class="valve-duration-input"
                            type="number"
                            min="1"
                            .value=${String(p.duration)}
                            @input=${h=>{let f=parseInt(h.target.value)||1,re=c.valves.map($=>$.valve_id===p.valve_id?{...$,duration:f}:$),be=r.zones.map($=>$.zone_id===a.id?{...$,valves:re}:$);s({...r,zones:be})}}
                          />
                          <span>min</span>
                        </div>
                      `})}
                  `:m}
            </div>
          `})}
      </div>

      ${l>0?d`<div class="total-duration">
            ${i("config.total_duration",{duration:l})}
          </div>`:m}

      <!-- Dry run toggle -->
      <div class="form-row">
        <label class="checkbox-item">
          <input
            type="checkbox"
            .checked=${r.dry_run}
            @change=${()=>s({...r,dry_run:!r.dry_run})}
          />
          ${i("config.dry_run")}
        </label>
        <div class="form-hint">${i("config.dry_run_hint")}</div>
      </div>

      <div class="form-actions">
        <button class="btn btn-cancel" @click=${n}>${i("config.cancel")}</button>
        <button class="btn btn-primary" @click=${()=>o(r)}>${i("config.save")}</button>
      </div>
    </div>
  `}var x=class extends y{constructor(){super(...arguments);this._activeTab="programs";this._editingZone=null;this._editingProgram=null;this._t=t=>t}setConfig(t){this._config=t}set hass(t){this._hass=t,this._t=W(t.language)}getCardSize(){return 5}_setTab(t){this._activeTab=t,this._editingZone=null,this._editingProgram=null}_newZone(){this._editingZone={id:"",name:"",valves:[],isNew:!0}}_editZone(t){this._editingZone={id:t.id,name:t.name,valves:[...t.valves],isNew:!1}}_cancelZone(){this._editingZone=null}_updateZoneForm(t){this._editingZone=t}async _saveZone(t){let o=t.isNew?ye(t.name):t.id,n=t.isNew?"create_zone":"update_zone";await this._hass.callService("wateringhub",n,{id:o,name:t.name,valves:t.valves}),this._editingZone=null}async _deleteZone(t){confirm(this._t("config.confirm_delete_zone"))&&await this._hass.callService("wateringhub","delete_zone",{id:t})}_newProgram(){this._editingProgram={id:"",name:"",schedule:{type:"daily",time:"22:00"},zones:[],dry_run:!1,isNew:!0}}_editProgram(t){let o=this._hass.states[t];if(!o)return;let n=o.attributes,s=n.program_id??"",i=n.schedule??{type:"daily",time:"22:00"},l=(n.zones??[]).map(a=>({zone_id:a.zone_id,valves:a.valves.map(c=>({valve_id:c.valve_id,duration:c.duration}))}));this._editingProgram={id:s,name:typeof n.friendly_name=="string"?n.friendly_name:s,schedule:i,zones:l,dry_run:n.dry_run===!0,isNew:!1}}_cancelProgram(){this._editingProgram=null}_updateProgramForm(t){this._editingProgram=t}async _saveProgram(t){let o=t.isNew?ye(t.name):t.id,n=t.isNew?"create_program":"update_program";await this._hass.callService("wateringhub",n,{id:o,name:t.name,schedule:t.schedule,dry_run:t.dry_run,zones:t.zones.map(s=>({zone_id:s.zone_id,valves:s.valves.map(i=>({valve_id:i.valve_id,duration:i.duration}))}))}),this._editingProgram=null}async _deleteProgram(t){if(confirm(this._t("config.confirm_delete_program"))){let n=this._hass.states[t]?.attributes.program_id??"";await this._hass.callService("wateringhub","delete_program",{id:n})}}render(){return!this._hass||!this._config?d`<ha-card>${this._t("loading")}</ha-card>`:d`
      <ha-card>
        <div class="header"><span class="title">${this._t("config.title")}</span></div>
        ${Xe(this._activeTab,t=>this._setTab(t),this._t)}
        ${this._activeTab==="valves"?et(this._hass,this._t):""}
        ${this._activeTab==="zones"?tt(this._hass,this._editingZone,t=>this._editZone(t),t=>this._deleteZone(t),()=>this._newZone(),t=>this._saveZone(t),()=>this._cancelZone(),t=>this._updateZoneForm(t),this._t):""}
        ${this._activeTab==="programs"?rt(this._hass,this._editingProgram,t=>this._editProgram(t),t=>this._deleteProgram(t),()=>this._newProgram(),t=>this._saveProgram(t),()=>this._cancelProgram(),t=>this._updateProgramForm(t),this._t):""}
      </ha-card>
    `}};x.styles=[Y,We],v([_()],x.prototype,"_config",2),v([_()],x.prototype,"_hass",2),v([_()],x.prototype,"_activeTab",2),v([_()],x.prototype,"_editingZone",2),v([_()],x.prototype,"_editingProgram",2),x=v([G("wateringhub-config-card")],x);globalThis.customCards=globalThis.customCards||[];globalThis.customCards.push({type:"wateringhub-config-card",name:"WateringHub Config Card",description:"Configuration card for WateringHub zones and programs"});
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
