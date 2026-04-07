var st=Object.defineProperty;var at=Object.getOwnPropertyDescriptor;var h=(n,e,t,r)=>{for(var o=r>1?void 0:r?at(e,t):e,i=n.length-1,s;i>=0;i--)(s=n[i])&&(o=(r?s(e,t,o):s(o))||o);return r&&o&&st(e,t,o),o};var K=globalThis,Y=K.ShadowRoot&&(K.ShadyCSS===void 0||K.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ie=Symbol(),$e=new WeakMap,F=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==ie)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Y&&e===void 0){let r=t!==void 0&&t.length===1;r&&(e=$e.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&$e.set(t,e))}return e}toString(){return this.cssText}},we=n=>new F(typeof n=="string"?n:n+"",void 0,ie),T=(n,...e)=>{let t=n.length===1?n[0]:e.reduce((r,o,i)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+n[i+1],n[0]);return new F(t,n,ie)},Se=(n,e)=>{if(Y)n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let r=document.createElement("style"),o=K.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=t.cssText,n.appendChild(r)}},se=Y?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(let r of e.cssRules)t+=r.cssText;return we(t)})(n):n;var{is:lt,defineProperty:ct,getOwnPropertyDescriptor:dt,getOwnPropertyNames:pt,getOwnPropertySymbols:ut,getPrototypeOf:mt}=Object,Q=globalThis,Ae=Q.trustedTypes,gt=Ae?Ae.emptyScript:"",vt=Q.reactiveElementPolyfillSupport,O=(n,e)=>n,L={toAttribute(n,e){switch(e){case Boolean:n=n?gt:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},X=(n,e)=>!lt(n,e),Ee={attribute:!0,type:String,converter:L,reflect:!1,useDefault:!1,hasChanged:X};Symbol.metadata??=Symbol("metadata"),Q.litPropertyMetadata??=new WeakMap;var P=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Ee){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let r=Symbol(),o=this.getPropertyDescriptor(e,r,t);o!==void 0&&ct(this.prototype,e,o)}}static getPropertyDescriptor(e,t,r){let{get:o,set:i}=dt(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get:o,set(s){let l=o?.call(this);i?.call(this,s),this.requestUpdate(e,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ee}static _$Ei(){if(this.hasOwnProperty(O("elementProperties")))return;let e=mt(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(O("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(O("properties"))){let t=this.properties,r=[...pt(t),...ut(t)];for(let o of r)this.createProperty(o,t[o])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[r,o]of t)this.elementProperties.set(r,o)}this._$Eh=new Map;for(let[t,r]of this.elementProperties){let o=this._$Eu(t,r);o!==void 0&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let r=new Set(e.flat(1/0).reverse());for(let o of r)t.unshift(se(o))}else e!==void 0&&t.push(se(e));return t}static _$Eu(e,t){let r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Se(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ET(e,t){let r=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,r);if(o!==void 0&&r.reflect===!0){let i=(r.converter?.toAttribute!==void 0?r.converter:L).toAttribute(t,r.type);this._$Em=e,i==null?this.removeAttribute(o):this.setAttribute(o,i),this._$Em=null}}_$AK(e,t){let r=this.constructor,o=r._$Eh.get(e);if(o!==void 0&&this._$Em!==o){let i=r.getPropertyOptions(o),s=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:L;this._$Em=o;let l=s.fromAttribute(t,i.type);this[o]=l??this._$Ej?.get(o)??l,this._$Em=null}}requestUpdate(e,t,r,o=!1,i){if(e!==void 0){let s=this.constructor;if(o===!1&&(i=this[e]),r??=s.getPropertyOptions(e),!((r.hasChanged??X)(i,t)||r.useDefault&&r.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,r))))return;this.C(e,t,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:r,reflect:o,wrapped:i},s){r&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),i!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||r||(t=void 0),this._$AL.set(e,t)),o===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[o,i]of this._$Ep)this[o]=i;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[o,i]of r){let{wrapped:s}=i,l=this[o];s!==!0||this._$AL.has(o)||l===void 0||this.C(o,void 0,i,l)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(t)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};P.elementStyles=[],P.shadowRootOptions={mode:"open"},P[O("elementProperties")]=new Map,P[O("finalized")]=new Map,vt?.({ReactiveElement:P}),(Q.reactiveElementVersions??=[]).push("2.1.2");var me=globalThis,Te=n=>n,W=me.trustedTypes,Pe=W?W.createPolicy("lit-html",{createHTML:n=>n}):void 0,qe="$lit$",z=`lit$${Math.random().toFixed(9).slice(2)}$`,Me="?"+z,ht=`<${Me}>`,C=document,U=()=>C.createComment(""),B=n=>n===null||typeof n!="object"&&typeof n!="function",ge=Array.isArray,ft=n=>ge(n)||typeof n?.[Symbol.iterator]=="function",ae=`[ 	
\f\r]`,j=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ze=/-->/g,ke=/>/g,k=RegExp(`>|${ae}(?:([^\\s"'>=/]+)(${ae}*=${ae}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ne=/'/g,Ce=/"/g,Ve=/^(?:script|style|textarea|title)$/i,ve=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),c=ve(1),Vt=ve(2),It=ve(3),R=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),Re=new WeakMap,N=C.createTreeWalker(C,129);function Ie(n,e){if(!ge(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Pe!==void 0?Pe.createHTML(e):e}var _t=(n,e)=>{let t=n.length-1,r=[],o,i=e===2?"<svg>":e===3?"<math>":"",s=j;for(let l=0;l<t;l++){let a=n[l],d,m,p=-1,g=0;for(;g<a.length&&(s.lastIndex=g,m=s.exec(a),m!==null);)g=s.lastIndex,s===j?m[1]==="!--"?s=ze:m[1]!==void 0?s=ke:m[2]!==void 0?(Ve.test(m[2])&&(o=RegExp("</"+m[2],"g")),s=k):m[3]!==void 0&&(s=k):s===k?m[0]===">"?(s=o??j,p=-1):m[1]===void 0?p=-2:(p=s.lastIndex-m[2].length,d=m[1],s=m[3]===void 0?k:m[3]==='"'?Ce:Ne):s===Ce||s===Ne?s=k:s===ze||s===ke?s=j:(s=k,o=void 0);let v=s===k&&n[l+1].startsWith("/>")?" ":"";i+=s===j?a+ht:p>=0?(r.push(d),a.slice(0,p)+qe+a.slice(p)+z+v):a+z+(p===-2?l:v)}return[Ie(n,i+(n[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),r]},J=class n{constructor({strings:e,_$litType$:t},r){let o;this.parts=[];let i=0,s=0,l=e.length-1,a=this.parts,[d,m]=_t(e,t);if(this.el=n.createElement(d,r),N.currentNode=this.el.content,t===2||t===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(o=N.nextNode())!==null&&a.length<l;){if(o.nodeType===1){if(o.hasAttributes())for(let p of o.getAttributeNames())if(p.endsWith(qe)){let g=m[s++],v=o.getAttribute(p).split(z),_=/([.?@])?(.*)/.exec(g);a.push({type:1,index:i,name:_[2],strings:v,ctor:_[1]==="."?ce:_[1]==="?"?de:_[1]==="@"?pe:M}),o.removeAttribute(p)}else p.startsWith(z)&&(a.push({type:6,index:i}),o.removeAttribute(p));if(Ve.test(o.tagName)){let p=o.textContent.split(z),g=p.length-1;if(g>0){o.textContent=W?W.emptyScript:"";for(let v=0;v<g;v++)o.append(p[v],U()),N.nextNode(),a.push({type:2,index:++i});o.append(p[g],U())}}}else if(o.nodeType===8)if(o.data===Me)a.push({type:2,index:i});else{let p=-1;for(;(p=o.data.indexOf(z,p+1))!==-1;)a.push({type:7,index:i}),p+=z.length-1}i++}}static createElement(e,t){let r=C.createElement("template");return r.innerHTML=e,r}};function q(n,e,t=n,r){if(e===R)return e;let o=r!==void 0?t._$Co?.[r]:t._$Cl,i=B(e)?void 0:e._$litDirective$;return o?.constructor!==i&&(o?._$AO?.(!1),i===void 0?o=void 0:(o=new i(n),o._$AT(n,t,r)),r!==void 0?(t._$Co??=[])[r]=o:t._$Cl=o),o!==void 0&&(e=q(n,o._$AS(n,e.values),o,r)),e}var le=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:r}=this._$AD,o=(e?.creationScope??C).importNode(t,!0);N.currentNode=o;let i=N.nextNode(),s=0,l=0,a=r[0];for(;a!==void 0;){if(s===a.index){let d;a.type===2?d=new G(i,i.nextSibling,this,e):a.type===1?d=new a.ctor(i,a.name,a.strings,this,e):a.type===6&&(d=new ue(i,this,e)),this._$AV.push(d),a=r[++l]}s!==a?.index&&(i=N.nextNode(),s++)}return N.currentNode=C,o}p(e){let t=0;for(let r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}},G=class n{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,o){this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=q(this,e,t),B(e)?e===u||e==null||e===""?(this._$AH!==u&&this._$AR(),this._$AH=u):e!==this._$AH&&e!==R&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):ft(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==u&&B(this._$AH)?this._$AA.nextSibling.data=e:this.T(C.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:r}=e,o=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=J.createElement(Ie(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===o)this._$AH.p(t);else{let i=new le(o,this),s=i.u(this.options);i.p(t),this.T(s),this._$AH=i}}_$AC(e){let t=Re.get(e.strings);return t===void 0&&Re.set(e.strings,t=new J(e)),t}k(e){ge(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,r,o=0;for(let i of e)o===t.length?t.push(r=new n(this.O(U()),this.O(U()),this,this.options)):r=t[o],r._$AI(i),o++;o<t.length&&(this._$AR(r&&r._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let r=Te(e).nextSibling;Te(e).remove(),e=r}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},M=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,o,i){this.type=1,this._$AH=u,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=u}_$AI(e,t=this,r,o){let i=this.strings,s=!1;if(i===void 0)e=q(this,e,t,0),s=!B(e)||e!==this._$AH&&e!==R,s&&(this._$AH=e);else{let l=e,a,d;for(e=i[0],a=0;a<i.length-1;a++)d=q(this,l[r+a],t,a),d===R&&(d=this._$AH[a]),s||=!B(d)||d!==this._$AH[a],d===u?e=u:e!==u&&(e+=(d??"")+i[a+1]),this._$AH[a]=d}s&&!o&&this.j(e)}j(e){e===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},ce=class extends M{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===u?void 0:e}},de=class extends M{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==u)}},pe=class extends M{constructor(e,t,r,o,i){super(e,t,r,o,i),this.type=5}_$AI(e,t=this){if((e=q(this,e,t,0)??u)===R)return;let r=this._$AH,o=e===u&&r!==u||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,i=e!==u&&(r===u||o);o&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},ue=class{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){q(this,e)}};var yt=me.litHtmlPolyfillSupport;yt?.(J,G),(me.litHtmlVersions??=[]).push("3.3.2");var De=(n,e,t)=>{let r=t?.renderBefore??e,o=r._$litPart$;if(o===void 0){let i=t?.renderBefore??null;r._$litPart$=o=new G(e.insertBefore(U(),i),i,void 0,t??{})}return o._$AI(n),o};var he=globalThis,$=class extends P{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=De(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return R}};$._$litElement$=!0,$.finalized=!0,he.litElementHydrateSupport?.({LitElement:$});var bt=he.litElementPolyfillSupport;bt?.({LitElement:$});(he.litElementVersions??=[]).push("4.2.2");var V=n=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(n,e)}):customElements.define(n,e)};var xt={attribute:!0,type:String,converter:L,reflect:!1,hasChanged:X},$t=(n=xt,e,t)=>{let{kind:r,metadata:o}=t,i=globalThis.litPropertyMetadata.get(o);if(i===void 0&&globalThis.litPropertyMetadata.set(o,i=new Map),r==="setter"&&((n=Object.create(n)).wrapped=!0),i.set(t.name,n),r==="accessor"){let{name:s}=t;return{set(l){let a=e.get.call(this);e.set.call(this,l),this.requestUpdate(s,a,n,!0,l)},init(l){return l!==void 0&&this.C(s,void 0,n,l),l}}}if(r==="setter"){let{name:s}=t;return function(l){let a=this[s];e.call(this,l),this.requestUpdate(s,a,n,!0,l)}}throw Error("Unsupported decorator location: "+r)};function He(n){return(e,t)=>typeof t=="object"?$t(n,e,t):((r,o,i)=>{let s=o.hasOwnProperty(i);return o.constructor.createProperty(i,r),s?Object.getOwnPropertyDescriptor(o,i):void 0})(n,e,t)}function f(n){return He({...n,state:!0,attribute:!1})}var Ze={"status.idle":"Idle","status.running":"Running","status.error":"Error","status.disabled":"Disabled",stop_all:"Stop All",next:"Next",last:"Last",no_programs:"No programs found",loading:"Loading...","time.just_now":"just now","time.minutes_ago":"{count}m ago","time.hours_ago":"{count}h ago","time.days_ago":"{count}d ago","time.today_at":"today at {time}","time.tomorrow_at":"tomorrow at {time}","time.in_days":"in {count}d","time.never":"Never","time.no_schedule":"No active program","status.running_program":"Running: {name}",stop_confirm:"Stop all watering?","recap.total_duration":"Total duration: {duration} min","days.mon":"Mon","days.tue":"Tue","days.wed":"Wed","days.thu":"Thu","days.fri":"Fri","days.sat":"Sat","days.sun":"Sun","running.progress":"Valve {done} of {total}","error.program":"Error \u2014 {name}","error.auto_stopped":"All valves have been automatically closed.","config.tab_valves":"Valves","config.tab_zones":"Zones","config.tab_programs":"Programs","config.no_valves":"No valves configured","config.no_zones":"No zones created","config.no_programs":"No programs created","config.new_zone":"New zone","config.new_program":"New program","config.name":"Name","config.save":"Save","config.cancel":"Cancel","config.delete":"Delete","config.edit":"Edit","config.confirm_delete_zone":"Delete this zone?","config.confirm_delete_program":"Delete this program?","config.trigger_time":"Trigger time","config.select_valves":"Select valves","config.select_zones":"Select zones","config.valve_entity":"Entity","config.total_duration":"Total: {duration} min","config.dry_run":"Test mode","config.dry_run_hint":"Runs the sequence without activating valves","running.dry_run":"Test mode","config.frequency":"Frequency","config.follows_program":"Every day","config.frequency_every_n":"Every {n} days","config.frequency_weekdays":"Specific days","recap.frequency_every_n":"every {n}d","config.title":"WateringHub Config","config.editor_valves":"Valves","config.add_valve":"Add valve","config.select_entity":"Switch entity","config.valve_name":"Valve name","config.confirm_delete_valve":"Delete this valve?"};var Fe={"status.idle":"En attente","status.running":"Arrosage en cours","status.error":"Erreur","status.disabled":"D\xE9sactiv\xE9",stop_all:"Tout arr\xEAter",next:"Prochain",last:"Dernier",no_programs:"Aucun programme trouv\xE9",loading:"Chargement...","time.just_now":"\xE0 l'instant","time.minutes_ago":"il y a {count} min","time.hours_ago":"il y a {count}h","time.days_ago":"il y a {count}j","time.today_at":"aujourd'hui \xE0 {time}","time.tomorrow_at":"demain \xE0 {time}","time.in_days":"dans {count}j","time.never":"Jamais","time.no_schedule":"Aucun programme actif","status.running_program":"En cours : {name}",stop_confirm:"Arr\xEAter tout l'arrosage ?","recap.total_duration":"Dur\xE9e totale : {duration} min","days.mon":"Lun","days.tue":"Mar","days.wed":"Mer","days.thu":"Jeu","days.fri":"Ven","days.sat":"Sam","days.sun":"Dim","running.progress":"Vanne {done} sur {total}","error.program":"Erreur \u2014 {name}","error.auto_stopped":"Toutes les vannes ont \xE9t\xE9 ferm\xE9es automatiquement.","config.tab_valves":"Vannes","config.tab_zones":"Zones","config.tab_programs":"Programmes","config.no_valves":"Aucune vanne configur\xE9e","config.no_zones":"Aucune zone cr\xE9\xE9e","config.no_programs":"Aucun programme cr\xE9\xE9","config.new_zone":"Nouvelle zone","config.new_program":"Nouveau programme","config.name":"Nom","config.save":"Sauvegarder","config.cancel":"Annuler","config.delete":"Supprimer","config.edit":"Modifier","config.confirm_delete_zone":"Supprimer cette zone ?","config.confirm_delete_program":"Supprimer ce programme ?","config.trigger_time":"Heure de d\xE9clenchement","config.select_valves":"S\xE9lectionner les vannes","config.select_zones":"S\xE9lectionner les zones","config.valve_entity":"Entit\xE9","config.total_duration":"Total : {duration} min","config.dry_run":"Mode test","config.dry_run_hint":"Ex\xE9cute la s\xE9quence sans activer les vannes","running.dry_run":"Mode test","config.frequency":"Fr\xE9quence","config.follows_program":"Tous les jours","config.frequency_every_n":"Tous les {n} jours","config.frequency_weekdays":"Jours sp\xE9cifiques","recap.frequency_every_n":"tous les {n}j","config.title":"WateringHub Config","config.editor_valves":"Vannes","config.add_valve":"Ajouter une vanne","config.select_entity":"Entit\xE9 switch","config.valve_name":"Nom de la vanne","config.confirm_delete_valve":"Supprimer cette vanne ?"};var fe={en:Ze,fr:Fe};function I(n){let e=n?.toLowerCase().startsWith("fr")?"fr":"en",t=fe[e]??fe.en;return(r,o)=>{let i=t[r]??fe.en[r]??r;return o&&(i=i.replace(/\{(\w+)\}/g,(s,l)=>String(o[l]??s))),i}}var D=T`
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
`;var Oe=T`
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
    top: 16px;
    right: 16px;
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
`;function te(n){return Object.keys(n.states).filter(e=>e.startsWith("switch.wateringhub_"))}function H(n,e){return typeof n?.attributes.friendly_name=="string"?n.attributes.friendly_name:e}function re(n){return n.states["sensor.wateringhub_status"]?.state??"idle"}function Le(n){let e=n.states["sensor.wateringhub_status"];if(e?.state!=="error")return null;let t=e.attributes,r=t.current_program,o=r?n.states[`switch.wateringhub_${r}`]:void 0;return{programName:H(o,r??""),errorMessage:t.error_message??""}}function je(n){let e=n.states["sensor.wateringhub_status"];if(e?.state!=="running")return null;let t=e.attributes,r=t.current_valve_start,o=t.current_valve_duration??0,i=t.valves_done??0,s=t.valves_total??1,l=r?Math.max(0,(Date.now()-new Date(r).getTime())/1e3):0,a=Math.max(0,o-l),d=o>0?Math.min(100,l/o*100):0,m=(i+d/100)/s*100,p=(i+1)/s*100,g=Array.isArray(t.valves_sequence)?t.valves_sequence:[],v=g.filter(x=>x.status==="pending").reduce((x,b)=>x+b.duration,0),_=a+v,oe=g.length>0?g.reduce((x,b)=>x+b.duration,0):o*s,E=g.filter(x=>x.status==="done").reduce((x,b)=>x+b.duration,0)+l;return{programName:t.current_program??"",zoneName:t.current_zone_name??"",valveName:t.current_valve_name??"",valveStart:r??"",valveDuration:o,valvesDone:i,valvesTotal:s,progressPercent:t.progress_percent??0,remaining:a,totalRemaining:_,totalDuration:oe,totalElapsed:E,valvePercent:d,finePercent:m,globalEndPercent:p,valveSequence:g,dryRun:t.dry_run===!0}}function _e(n){if(n<=0)return"0:00";let e=Math.floor(n/3600),t=Math.floor(n%3600/60),r=Math.floor(n%60);return e>0?`${e}:${t.toString().padStart(2,"0")}:${r.toString().padStart(2,"0")}`:`${t}:${r.toString().padStart(2,"0")}`}function ne(n,e){return n?n.time:""}function Ue(n){return!n||n.state==="None"||n.state==="unknown"||n.state==="unavailable"}function ye(n,e,t,r){let o=n.states[e];if(Ue(o))return t("time.never");let i=new Date(o.state);if(Number.isNaN(i.getTime()))return o.state;let s=new Date,l=s.getTime()-i.getTime();if(l<0){let p=new Date(s.getFullYear(),s.getMonth(),s.getDate()),g=new Date(i.getFullYear(),i.getMonth(),i.getDate()),v=Math.round((g.getTime()-p.getTime())/(1e3*60*60*24)),_=i.toLocaleTimeString(r??[],{hour:"2-digit",minute:"2-digit"});return v===0?t("time.today_at",{time:_}):v===1?t("time.tomorrow_at",{time:_}):t("time.in_days",{count:v})}let a=Math.floor(l/(1e3*60));if(a<1)return t("time.just_now");if(a<60)return t("time.minutes_ago",{count:a});let d=Math.floor(a/60);if(d<24)return t("time.hours_ago",{count:d});let m=Math.floor(d/24);return t("time.days_ago",{count:m})}function Be(n,e,t){let r=n.states["sensor.wateringhub_next_run"];return Ue(r)?e("time.no_schedule"):ye(n,"sensor.wateringhub_next_run",e,t)}function Je(n){return c`
    <div class="header">
      <span class="title">${n}</span>
    </div>
  `}function At(n,e,t){return e?re(n)==="running"?c``:c`
    <div class="program-status">
      <span class="badge-sm badge-idle">${t("status.idle")}</span>
      <span class="info-sm">${t("next")}: ${Be(n,t,n.language)}</span>
      <span class="info-sm">
        ${t("last")}: ${ye(n,"sensor.wateringhub_last_run",t,n.language)}
      </span>
    </div>
  `:c`
      <div class="program-status">
        <span class="badge-sm badge-disabled">${t("status.disabled")}</span>
      </div>
    `}function Ge(n,e){let t=Le(n);return t?c`
    <div class="error-view">
      <div class="error-title">
        <ha-icon icon="mdi:alert-circle"></ha-icon>
        ${e("error.program",{name:t.programName})}
      </div>
      ${t.errorMessage?c`<div class="error-message">${t.errorMessage}</div>`:u}
      <div class="error-auto-stopped">${e("error.auto_stopped")}</div>
    </div>
  `:c``}function Ke(n,e,t){let r=je(n);if(!r)return c``;let o=2*Math.PI*30,i=r.totalDuration>0?r.totalElapsed/r.totalDuration:0,s=o*(1-Math.min(1,i));return c`
    <div class="running-block">
      <button class="running-stop-btn" @click=${e}>${t("stop_all")}</button>
      ${r.dryRun?c`<span class="badge-dry-run">${t("running.dry_run")}</span>`:u}

      <div class="global-hero">
        <div class="circular-progress">
          <svg viewBox="0 0 68 68">
            <circle class="cp-track" cx="34" cy="34" r="30" />
            <circle
              class="cp-fill"
              cx="34"
              cy="34"
              r="30"
              style="stroke-dasharray: ${o}; stroke-dashoffset: ${s}"
            />
          </svg>
          <div class="cp-center">
            <span class="cp-time">${_e(r.totalRemaining)}</span>
          </div>
        </div>
        <div class="global-info">
          <div class="global-program-name">
            ${H(n.states[`switch.wateringhub_${r.programName}`],r.programName)}
          </div>
          <div class="global-sub">
            ${t("running.progress",{done:r.valvesDone+1,total:r.valvesTotal})}
          </div>
        </div>
      </div>

      ${r.valveSequence.length>0?Et(r.valveSequence,r.remaining,t):u}
    </div>
  `}function Et(n,e,t){let r=[];for(let a of n){let d=r[r.length-1];d?.zoneName===a.zone_name?d.valves.push(a):r.push({zoneName:a.zone_name,valves:[a]})}let o=c`<svg viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z"
    />
  </svg>`,i=c`<svg viewBox="0 0 24 24">
    <circle fill="currentColor" cx="12" cy="12" r="6" />
  </svg>`,s=c`<svg viewBox="0 0 24 24">
    <circle fill="none" stroke="currentColor" stroke-width="2" cx="12" cy="12" r="6" />
  </svg>`,l={done:o,running:i,pending:s};return c`
    <div class="valve-timeline">
      ${r.map(a=>c`
          <div class="tl-zone">${a.zoneName}</div>
          ${a.valves.map(d=>{let m=Math.ceil(d.duration/60);return c`
              <div class="tl-step tl-${d.status}">
                <span class="tl-dot">${l[d.status]}</span>
                <span class="tl-step-name">${d.valve_name}</span>
                <span class="tl-step-time">
                  ${d.status==="running"?_e(e):`${m} min`}
                </span>
              </div>
            `})}
        `)}
    </div>
  `}function Ye(n,e,t,r,o,i){return e.length===0?c`<div class="empty-state">${i("no_programs")}</div>`:c`${e.map(s=>{let l=n.states[s];if(!l)return u;let a=l.state==="on",d=t===s,m=H(l,s);return c`
      <div class="program-wrapper">
        <div class="program">
          <div class="program-header" @click=${()=>r(s)}>
            <ha-icon class="chevron ${d?"open":""}" icon="mdi:chevron-down"></ha-icon>
            ${a?c`<div class="active-dot"></div>`:u}
            <span class="program-name ${a?"active":""}">${m}</span>
          </div>
          <ha-switch .checked=${a} @change=${()=>o(s)}></ha-switch>
        </div>
        ${At(n,a,i)}
        ${Tt(l.attributes,d,i)}
      </div>
    `})}`}function Tt(n,e,t){let r=n.schedule,o=n.zones??[],i=n.total_duration;return c`
    <div class="program-recap ${e?"open":""}">
      ${r?c`<div class="recap-schedule">
            <ha-icon icon="mdi:calendar-clock"></ha-icon>
            ${ne(r,t)}
          </div>`:u}
      ${o.map(s=>c`
          <div class="recap-zone">
            <ha-icon icon="mdi:map-marker"></ha-icon>
            ${s.zone_name}
          </div>
          ${s.valves.map(l=>c`
              <div class="recap-valve">
                <ha-icon icon="mdi:water"></ha-icon>
                ${l.valve_name} — ${l.duration}
                min${Pt(l.frequency,t)}
              </div>
            `)}
        `)}
      ${i?c`<div class="recap-total">
            <ha-icon icon="mdi:timer-outline"></ha-icon>
            ${t("recap.total_duration",{duration:i})}
          </div>`:u}
    </div>
  `}function Pt(n,e){return n?n.type==="every_n_days"?` \xB7 ${e("recap.frequency_every_n",{n:n.n??2})}`:n.type==="weekdays"&&n.days?.length?` \xB7 ${n.days.map(r=>e(`days.${r}`)).join(", ")}`:"":""}var w=class extends ${constructor(){super(...arguments);this._programEntities=[];this._expandedProgram=null;this._tick=0;this._t=t=>t;this._timerInterval=null}setConfig(t){this._config=t}set hass(t){let r=this._hass;this._hass=t,this._t=I(t.language),r?.states!==t.states&&(this._programEntities=te(t)),this._updateTimer(re(t))}disconnectedCallback(){super.disconnectedCallback(),this._clearTimer()}_updateTimer(t){t==="running"&&!this._timerInterval?this._timerInterval=setInterval(()=>{this._tick++},1e3):t!=="running"&&this._timerInterval&&this._clearTimer()}_clearTimer(){this._timerInterval&&(clearInterval(this._timerInterval),this._timerInterval=null)}getCardSize(){return 3}_toggleExpand(t){this._expandedProgram=this._expandedProgram===t?null:t}_toggleProgram(t){let r=this._hass.states[t];if(!r)return;let o=r.state==="on"?"turn_off":"turn_on";this._hass.callService("switch",o,{entity_id:t})}_stopAll(){confirm(this._t("stop_confirm"))&&this._hass.callService("wateringhub","stop_all",{})}render(){if(!this._hass||!this._config)return c`<ha-card>${this._t("loading")}</ha-card>`;let t=this._config.title??"WateringHub";return c`
      <ha-card>
        ${Je(t)} ${Ge(this._hass,this._t)}
        ${Ke(this._hass,()=>this._stopAll(),this._t)}
        ${Ye(this._hass,this._programEntities,this._expandedProgram,r=>this._toggleExpand(r),r=>this._toggleProgram(r),this._t)}
      </ha-card>
    `}};w.styles=[D,Oe],h([f()],w.prototype,"_config",2),h([f()],w.prototype,"_hass",2),h([f()],w.prototype,"_programEntities",2),h([f()],w.prototype,"_expandedProgram",2),h([f()],w.prototype,"_tick",2),w=h([V("wateringhub-card")],w);globalThis.customCards=globalThis.customCards||[];globalThis.customCards.push({type:"wateringhub-card",name:"WateringHub Card",description:"Watering management card for WateringHub"});var Qe=T`
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
    padding: 4px 0;
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
`;function Z(n){return n.states["sensor.wateringhub_status"]?.attributes.available_valves??[]}function be(n){return n.states["sensor.wateringhub_status"]?.attributes.zones??[]}function xe(n){return n.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"_").replace(/^_|_$/g,"")}function et(n,e,t){let r=[{id:"programs",label:t("config.tab_programs")},{id:"zones",label:t("config.tab_zones")},{id:"valves",label:t("config.tab_valves")}];return c`
    <div class="tabs">
      ${r.map(o=>c`
          <div
            class="tab ${n===o.id?"active":""}"
            @click=${()=>e(o.id)}
          >
            ${o.label}
          </div>
        `)}
    </div>
  `}function tt(n,e){let t=Z(n);return t.length===0?c`<div class="empty-state">${e("config.no_valves")}</div>`:c`
    ${t.map(r=>c`
        <div class="list-item">
          <div class="list-item-header">
            <div>
              <div class="list-item-name">${r.name}</div>
              <div class="list-item-sub">${e("config.valve_entity")}: ${r.entity_id}</div>
            </div>
          </div>
        </div>
      `)}
  `}function rt(n,e,t,r,o,i,s,l,a){let d=be(n),m=Z(n);return c`
    ${d.map(p=>e&&e.id===p.id?Xe(e,m,i,s,l,a):zt(p,m,t,r,a))}
    ${e?.isNew?Xe(e,m,i,s,l,a):u}
    ${e?u:c`<button class="add-btn" @click=${o}>+ ${a("config.new_zone")}</button>`}
    ${d.length===0&&!e?c`<div class="empty-state">${a("config.no_zones")}</div>`:u}
  `}function zt(n,e,t,r,o){let i=n.valves.map(s=>e.find(l=>l.id===s)?.name??s).join(", ");return c`
    <div class="list-item">
      <div class="list-item-header">
        <div>
          <div class="list-item-name">${n.name}</div>
          <div class="list-item-sub">${i}</div>
        </div>
        <div class="list-item-actions">
          <button class="action-btn" @click=${()=>t(n)} title="${o("config.edit")}">
            <ha-icon icon="mdi:pencil"></ha-icon>
          </button>
          <button
            class="action-btn delete"
            @click=${()=>r(n.id)}
            title="${o("config.delete")}"
          >
            <ha-icon icon="mdi:delete"></ha-icon>
          </button>
        </div>
      </div>
    </div>
  `}function Xe(n,e,t,r,o,i){return c`
    <div class="inline-form">
      <div class="form-row">
        <label class="form-label">${i("config.name")}</label>
        <input
          class="form-input"
          .value=${n.name}
          @input=${s=>o({...n,name:s.target.value})}
        />
      </div>
      <div class="form-row">
        <label class="form-label">${i("config.select_valves")}</label>
        <div class="checkbox-list">
          ${e.map(s=>{let l=n.valves.includes(s.id);return c`
              <label class="checkbox-item">
                <input
                  type="checkbox"
                  .checked=${l}
                  @change=${()=>{let a=l?n.valves.filter(d=>d!==s.id):[...n.valves,s.id];o({...n,valves:a})}}
                />
                ${s.name}
              </label>
            `})}
        </div>
      </div>
      <div class="form-actions">
        <button class="btn btn-cancel" @click=${r}>${i("config.cancel")}</button>
        <button class="btn btn-primary" @click=${()=>t(n)}>${i("config.save")}</button>
      </div>
    </div>
  `}function nt(n,e,t,r,o,i,s,l,a){let d=te(n),m=be(n),p=Z(n);return c`
    ${d.map(g=>{let v=n.states[g];if(!v)return u;let _=v.attributes.program_id??"";return e&&e.id===_?We(e,m,p,i,s,l,a):kt(v,g,t,r,a)})}
    ${e?.isNew?We(e,m,p,i,s,l,a):u}
    ${e?u:c`<button class="add-btn" @click=${o}>+ ${a("config.new_program")}</button>`}
    ${d.length===0&&!e?c`<div class="empty-state">${a("config.no_programs")}</div>`:u}
  `}function kt(n,e,t,r,o){let i=H(n,e),s=n.attributes.schedule,l=n.attributes.total_duration,a=n.attributes.dry_run===!0,d=ne(s,o);return c`
    <div class="list-item">
      <div class="list-item-header">
        <div>
          <div class="list-item-name">
            ${i}
            ${a?c`<span class="dry-run-tag">${o("config.dry_run")}</span>`:u}
          </div>
          <div class="list-item-sub">
            ${d}${l?` \u2014 ${l} min`:""}
          </div>
        </div>
        <div class="list-item-actions">
          <button class="action-btn" @click=${()=>t(e)} title="${o("config.edit")}">
            <ha-icon icon="mdi:pencil"></ha-icon>
          </button>
          <button
            class="action-btn delete"
            @click=${()=>r(e)}
            title="${o("config.delete")}"
          >
            <ha-icon icon="mdi:delete"></ha-icon>
          </button>
        </div>
      </div>
    </div>
  `}function We(n,e,t,r,o,i,s){let l=n.zones.reduce((a,d)=>a+d.valves.reduce((m,p)=>m+(p.duration||0),0),0);return c`
    <div class="inline-form">
      <!-- Name -->
      <div class="form-row">
        <label class="form-label">${s("config.name")}</label>
        <input
          class="form-input"
          .value=${n.name}
          @input=${a=>i({...n,name:a.target.value})}
        />
      </div>

      <!-- Schedule — time only -->
      <div class="form-row">
        <label class="form-label">${s("config.trigger_time")}</label>
        <input
          class="form-input"
          type="time"
          .value=${n.schedule.time}
          @input=${a=>i({...n,schedule:{time:a.target.value}})}
        />
      </div>

      <!-- Zones + valves with durations -->
      <div class="form-row">
        <label class="form-label">${s("config.select_zones")}</label>
        ${e.map(a=>{let d=n.zones.find(p=>p.zone_id===a.id),m=!!d;return c`
            <div class="form-zone-section">
              <label class="checkbox-item">
                <input
                  type="checkbox"
                  .checked=${m}
                  @change=${()=>{let p=m?n.zones.filter(g=>g.zone_id!==a.id):[...n.zones,{zone_id:a.id,valves:a.valves.map(g=>({valve_id:g,duration:10}))}];i({...n,zones:p})}}
                />
                <span class="form-zone-name">${a.name}</span>
              </label>
              ${m&&d?c`
                    ${d.valves.map(p=>{let g=t.find(y=>y.id===p.valve_id)?.name??p.valve_id,v=y=>{let E=d.valves.map(b=>b.valve_id===p.valve_id?{...b,...y}:b),x=n.zones.map(b=>b.zone_id===a.id?{...b,valves:E}:b);i({...n,zones:x})},_=p.frequency?.type??"",oe=new Date().toISOString().slice(0,10);return c`
                        <div class="valve-config-block">
                          <div class="valve-duration-row">
                            <label>${g}</label>
                            <input
                              class="valve-duration-input"
                              type="number"
                              min="1"
                              .value=${String(p.duration)}
                              @input=${y=>v({duration:parseInt(y.target.value)||1})}
                            />
                            <span>min</span>
                          </div>
                          <div class="valve-frequency-row">
                            <select
                              class="valve-freq-select"
                              .value=${_}
                              @change=${y=>{let E=y.target.value;v(E?E==="every_n_days"?{frequency:{type:"every_n_days",n:2,start_date:oe}}:{frequency:{type:"weekdays",days:[]}}:{frequency:void 0})}}
                            >
                              <option value="">${s("config.follows_program")}</option>
                              <option value="every_n_days">
                                ${s("config.frequency_every_n",{n:p.frequency?.n??2})}
                              </option>
                              <option value="weekdays">${s("config.frequency_weekdays")}</option>
                            </select>
                            ${_==="every_n_days"?c`
                                  <input
                                    class="valve-freq-n-input"
                                    type="number"
                                    min="2"
                                    .value=${String(p.frequency?.n??2)}
                                    @input=${y=>v({frequency:{...p.frequency,n:parseInt(y.target.value)||2}})}
                                  />
                                  <span>j</span>
                                `:u}
                            ${_==="weekdays"?c`
                                  <div class="valve-freq-days">
                                    ${["mon","tue","wed","thu","fri","sat","sun"].map(y=>{let E=p.frequency?.days?.includes(y)??!1;return c`
                                          <label class="valve-freq-day">
                                            <input
                                              type="checkbox"
                                              .checked=${E}
                                              @change=${()=>{let x=p.frequency?.days??[],b=E?x.filter(it=>it!==y):[...x,y];v({frequency:{...p.frequency,days:b}})}}
                                            />
                                            ${s(`days.${y}`)}
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

      ${l>0?c`<div class="total-duration">
            ${s("config.total_duration",{duration:l})}
          </div>`:u}

      <!-- Dry run toggle -->
      <div class="form-row">
        <label class="checkbox-item">
          <input
            type="checkbox"
            .checked=${n.dry_run}
            @change=${()=>i({...n,dry_run:!n.dry_run})}
          />
          ${s("config.dry_run")}
        </label>
        <div class="form-hint">${s("config.dry_run_hint")}</div>
      </div>

      <div class="form-actions">
        <button class="btn btn-cancel" @click=${o}>${s("config.cancel")}</button>
        <button class="btn btn-primary" @click=${()=>r(n)}>${s("config.save")}</button>
      </div>
    </div>
  `}var ot=T`
  .editor-section {
    margin-bottom: 16px;
  }
  .editor-label {
    font-size: 14px;
    font-weight: 500;
    color: var(--primary-text-color);
    margin-bottom: 8px;
    display: block;
  }
  .valve-item {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 0;
    border-bottom: 1px solid var(--divider-color);
  }
  .valve-item:last-child {
    border-bottom: none;
  }
  .valve-item-info {
    flex: 1;
    min-width: 0;
  }
  .valve-item-name {
    font-size: 14px;
    color: var(--primary-text-color);
  }
  .valve-item-entity {
    font-size: 12px;
    color: var(--secondary-text-color);
  }
  .delete-btn {
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
    color: var(--secondary-text-color);
  }
  .delete-btn:hover {
    color: var(--error-color);
  }
  .add-form {
    border: 1px dashed var(--divider-color);
    border-radius: 8px;
    padding: 12px;
    margin-top: 8px;
  }
  .add-form select,
  .add-form input {
    width: 100%;
    box-sizing: border-box;
    padding: 8px 12px;
    border: 1px solid var(--divider-color);
    border-radius: 6px;
    font-size: 14px;
    color: var(--primary-text-color);
    background: var(--card-background-color);
    margin-bottom: 8px;
  }
  .add-form-actions {
    display: flex;
    gap: 8px;
    justify-content: flex-end;
  }
  .btn {
    padding: 6px 14px;
    border: none;
    border-radius: 6px;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
  }
  .btn-primary {
    background: var(--primary-color);
    color: var(--text-primary-color);
  }
  .btn-cancel {
    background: transparent;
    color: var(--secondary-text-color);
  }
  .add-btn {
    width: 100%;
    padding: 10px;
    border: 1px dashed var(--divider-color);
    border-radius: 8px;
    background: transparent;
    color: var(--secondary-text-color);
    font-size: 14px;
    cursor: pointer;
    margin-top: 8px;
  }
  .add-btn:hover {
    border-color: var(--primary-color);
    color: var(--primary-color);
  }
`;var S=class extends ${constructor(){super(...arguments);this._adding=!1;this._newEntityId="";this._newName="";this._t=t=>t}set hass(t){this._hass=t,this._t=I(t.language)}setConfig(t){this._config=t}_getValves(){return this._hass?Z(this._hass):[]}_getAvailableSwitches(){if(!this._hass)return[];let t=new Set(this._getValves().map(r=>r.entity_id));return Object.keys(this._hass.states).filter(r=>r.startsWith("switch.")&&!r.startsWith("switch.wateringhub_")&&!t.has(r)).map(r=>({entity_id:r,name:typeof this._hass.states[r].attributes.friendly_name=="string"?this._hass.states[r].attributes.friendly_name:r})).sort((r,o)=>r.name.localeCompare(o.name))}async _setValves(t){await this._hass.callService("wateringhub","set_valves",{valves:t})}async _deleteValve(t){if(!confirm(this._t("config.confirm_delete_valve")))return;let r=this._getValves().filter(o=>o.entity_id!==t).map(o=>({entity_id:o.entity_id,name:o.name}));await this._setValves(r)}_startAdd(){let t=this._getAvailableSwitches();this._adding=!0,this._newEntityId=t[0]?.entity_id??"",this._newName=t[0]?.name??""}async _confirmAdd(){if(!this._newEntityId||!this._newName)return;let t=[...this._getValves().map(r=>({entity_id:r.entity_id,name:r.name})),{entity_id:this._newEntityId,name:this._newName}];await this._setValves(t),this._adding=!1,this._newEntityId="",this._newName=""}_cancelAdd(){this._adding=!1}render(){let t=this._getValves(),r=this._getAvailableSwitches();return c`
      <div class="editor-section">
        <span class="editor-label">${this._t("config.editor_valves")}</span>

        ${t.length===0&&!this._adding?c`<div class="empty-state">${this._t("config.no_valves")}</div>`:u}

        ${t.map(o=>c`
            <div class="valve-item">
              <div class="valve-item-info">
                <div class="valve-item-name">${o.name}</div>
                <div class="valve-item-entity">${o.entity_id}</div>
              </div>
              <button
                class="delete-btn"
                @click=${()=>this._deleteValve(o.entity_id)}
                title="${this._t("config.delete")}"
              >
                <ha-icon icon="mdi:delete"></ha-icon>
              </button>
            </div>
          `)}

        ${this._adding?c`
              <div class="add-form">
                <select
                  @change=${o=>{let i=o.target.value;this._newEntityId=i;let s=r.find(l=>l.entity_id===i);s&&(this._newName=s.name)}}
                >
                  ${r.map(o=>c`
                      <option value="${o.entity_id}" ?selected=${o.entity_id===this._newEntityId}>
                        ${o.name} (${o.entity_id})
                      </option>
                    `)}
                </select>
                <input
                  type="text"
                  .value=${this._newName}
                  placeholder="${this._t("config.valve_name")}"
                  @input=${o=>{this._newName=o.target.value}}
                />
                <div class="add-form-actions">
                  <button class="btn btn-cancel" @click=${()=>this._cancelAdd()}>
                    ${this._t("config.cancel")}
                  </button>
                  <button class="btn btn-primary" @click=${()=>this._confirmAdd()}>
                    ${this._t("config.save")}
                  </button>
                </div>
              </div>
            `:c`
              <button class="add-btn" @click=${()=>this._startAdd()}>
                + ${this._t("config.add_valve")}
              </button>
            `}
      </div>
    `}};S.styles=[D,ot],h([f()],S.prototype,"_config",2),h([f()],S.prototype,"_hass",2),h([f()],S.prototype,"_adding",2),h([f()],S.prototype,"_newEntityId",2),h([f()],S.prototype,"_newName",2),S=h([V("wateringhub-config-editor")],S);var A=class extends ${constructor(){super(...arguments);this._activeTab="programs";this._editingZone=null;this._editingProgram=null;this._t=t=>t}static getConfigElement(){return"wateringhub-config-editor"}setConfig(t){this._config=t}set hass(t){this._hass=t,this._t=I(t.language)}getCardSize(){return 5}_setTab(t){this._activeTab=t,this._editingZone=null,this._editingProgram=null}_newZone(){this._editingZone={id:"",name:"",valves:[],isNew:!0}}_editZone(t){this._editingZone={id:t.id,name:t.name,valves:[...t.valves],isNew:!1}}_cancelZone(){this._editingZone=null}_updateZoneForm(t){this._editingZone=t}async _saveZone(t){let r=t.isNew?xe(t.name):t.id,o=t.isNew?"create_zone":"update_zone";await this._hass.callService("wateringhub",o,{id:r,name:t.name,valves:t.valves}),this._editingZone=null}async _deleteZone(t){confirm(this._t("config.confirm_delete_zone"))&&await this._hass.callService("wateringhub","delete_zone",{id:t})}_newProgram(){this._editingProgram={id:"",name:"",schedule:{time:"06:00"},zones:[],dry_run:!1,isNew:!0}}_editProgram(t){let r=this._hass.states[t];if(!r)return;let o=r.attributes,i=o.program_id??"",s=o.schedule??{time:"06:00"},l=(o.zones??[]).map(a=>({zone_id:a.zone_id,valves:a.valves.map(d=>({valve_id:d.valve_id,duration:d.duration,frequency:d.frequency}))}));this._editingProgram={id:i,name:typeof o.friendly_name=="string"?o.friendly_name:i,schedule:s,zones:l,dry_run:o.dry_run===!0,isNew:!1}}_cancelProgram(){this._editingProgram=null}_updateProgramForm(t){this._editingProgram=t}async _saveProgram(t){let r=t.isNew?xe(t.name):t.id,o=t.isNew?"create_program":"update_program";await this._hass.callService("wateringhub",o,{id:r,name:t.name,schedule:t.schedule,dry_run:t.dry_run,zones:t.zones.map(i=>({zone_id:i.zone_id,valves:i.valves.map(s=>({valve_id:s.valve_id,duration:s.duration,...s.frequency?{frequency:s.frequency}:{}}))}))}),this._editingProgram=null}async _deleteProgram(t){if(confirm(this._t("config.confirm_delete_program"))){let o=this._hass.states[t]?.attributes.program_id??"";await this._hass.callService("wateringhub","delete_program",{id:o})}}render(){return!this._hass||!this._config?c`<ha-card>${this._t("loading")}</ha-card>`:c`
      <ha-card>
        <div class="header"><span class="title">${this._t("config.title")}</span></div>
        ${et(this._activeTab,t=>this._setTab(t),this._t)}
        ${this._activeTab==="valves"?tt(this._hass,this._t):""}
        ${this._activeTab==="zones"?rt(this._hass,this._editingZone,t=>this._editZone(t),t=>this._deleteZone(t),()=>this._newZone(),t=>this._saveZone(t),()=>this._cancelZone(),t=>this._updateZoneForm(t),this._t):""}
        ${this._activeTab==="programs"?nt(this._hass,this._editingProgram,t=>this._editProgram(t),t=>this._deleteProgram(t),()=>this._newProgram(),t=>this._saveProgram(t),()=>this._cancelProgram(),t=>this._updateProgramForm(t),this._t):""}
      </ha-card>
    `}};A.styles=[D,Qe],h([f()],A.prototype,"_config",2),h([f()],A.prototype,"_hass",2),h([f()],A.prototype,"_activeTab",2),h([f()],A.prototype,"_editingZone",2),h([f()],A.prototype,"_editingProgram",2),A=h([V("wateringhub-config-card")],A);globalThis.customCards=globalThis.customCards||[];globalThis.customCards.push({type:"wateringhub-config-card",name:"WateringHub Config Card",description:"Configuration card for WateringHub zones and programs"});
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
