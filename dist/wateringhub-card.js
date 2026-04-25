var xt=Object.defineProperty;var bt=Object.getOwnPropertyDescriptor;var h=(o,t,e,r)=>{for(var n=r>1?void 0:r?bt(t,e):t,i=o.length-1,s;i>=0;i--)(s=o[i])&&(n=(r?s(t,e,n):s(n))||n);return r&&n&&xt(t,e,n),n};var X=globalThis,Q=X.ShadowRoot&&(X.ShadyCSS===void 0||X.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,me=Symbol(),Ce=new WeakMap,H=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==me)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(Q&&t===void 0){let r=e!==void 0&&e.length===1;r&&(t=Ce.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&Ce.set(e,t))}return t}toString(){return this.cssText}},Re=o=>new H(typeof o=="string"?o:o+"",void 0,me),S=(o,...t)=>{let e=o.length===1?o[0]:t.reduce((r,n,i)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+o[i+1],o[0]);return new H(e,o,me)},Ze=(o,t)=>{if(Q)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let r=document.createElement("style"),n=X.litNonce;n!==void 0&&r.setAttribute("nonce",n),r.textContent=e.cssText,o.appendChild(r)}},ge=Q?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(let r of t.cssRules)e+=r.cssText;return Re(e)})(o):o;var{is:wt,defineProperty:$t,getOwnPropertyDescriptor:St,getOwnPropertyNames:kt,getOwnPropertySymbols:At,getPrototypeOf:Tt}=Object,ee=globalThis,Ne=ee.trustedTypes,zt=Ne?Ne.emptyScript:"",Et=ee.reactiveElementPolyfillSupport,j=(o,t)=>o,U={toAttribute(o,t){switch(t){case Boolean:o=o?zt:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},te=(o,t)=>!wt(o,t),Fe={attribute:!0,type:String,converter:U,reflect:!1,useDefault:!1,hasChanged:te};Symbol.metadata??=Symbol("metadata"),ee.litPropertyMetadata??=new WeakMap;var k=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Fe){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let r=Symbol(),n=this.getPropertyDescriptor(t,r,e);n!==void 0&&$t(this.prototype,t,n)}}static getPropertyDescriptor(t,e,r){let{get:n,set:i}=St(this.prototype,t)??{get(){return this[e]},set(s){this[e]=s}};return{get:n,set(s){let l=n?.call(this);i?.call(this,s),this.requestUpdate(t,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Fe}static _$Ei(){if(this.hasOwnProperty(j("elementProperties")))return;let t=Tt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(j("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(j("properties"))){let e=this.properties,r=[...kt(e),...At(e)];for(let n of r)this.createProperty(n,e[n])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[r,n]of e)this.elementProperties.set(r,n)}this._$Eh=new Map;for(let[e,r]of this.elementProperties){let n=this._$Eu(e,r);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let r=new Set(t.flat(1/0).reverse());for(let n of r)e.unshift(ge(n))}else t!==void 0&&e.push(ge(t));return e}static _$Eu(t,e){let r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ze(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ET(t,e){let r=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,r);if(n!==void 0&&r.reflect===!0){let i=(r.converter?.toAttribute!==void 0?r.converter:U).toAttribute(e,r.type);this._$Em=t,i==null?this.removeAttribute(n):this.setAttribute(n,i),this._$Em=null}}_$AK(t,e){let r=this.constructor,n=r._$Eh.get(t);if(n!==void 0&&this._$Em!==n){let i=r.getPropertyOptions(n),s=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:U;this._$Em=n;let l=s.fromAttribute(e,i.type);this[n]=l??this._$Ej?.get(n)??l,this._$Em=null}}requestUpdate(t,e,r,n=!1,i){if(t!==void 0){let s=this.constructor;if(n===!1&&(i=this[t]),r??=s.getPropertyOptions(t),!((r.hasChanged??te)(i,e)||r.useDefault&&r.reflect&&i===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,r))))return;this.C(t,e,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:r,reflect:n,wrapped:i},s){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??e??this[t]),i!==!0||s!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(e=void 0),this._$AL.set(t,e)),n===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[n,i]of this._$Ep)this[n]=i;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[n,i]of r){let{wrapped:s}=i,l=this[n];s!==!0||this._$AL.has(n)||l===void 0||this.C(n,void 0,i,l)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(e)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};k.elementStyles=[],k.shadowRootOptions={mode:"open"},k[j("elementProperties")]=new Map,k[j("finalized")]=new Map,Et?.({ReactiveElement:k}),(ee.reactiveElementVersions??=[]).push("2.1.2");var be=globalThis,Me=o=>o,re=be.trustedTypes,De=re?re.createPolicy("lit-html",{createHTML:o=>o}):void 0,je="$lit$",A=`lit$${Math.random().toFixed(9).slice(2)}$`,Ue="?"+A,Pt=`<${Ue}>`,C=document,W=()=>C.createComment(""),G=o=>o===null||typeof o!="object"&&typeof o!="function",we=Array.isArray,Vt=o=>we(o)||typeof o?.[Symbol.iterator]=="function",ve=`[ 	
\f\r]`,B=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,qe=/-->/g,Le=/>/g,P=RegExp(`>|${ve}(?:([^\\s"'>=/]+)(${ve}*=${ve}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ie=/'/g,Oe=/"/g,Be=/^(?:script|style|textarea|title)$/i,$e=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),c=$e(1),cr=$e(2),dr=$e(3),R=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),He=new WeakMap,V=C.createTreeWalker(C,129);function We(o,t){if(!we(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return De!==void 0?De.createHTML(t):t}var Ct=(o,t)=>{let e=o.length-1,r=[],n,i=t===2?"<svg>":t===3?"<math>":"",s=B;for(let l=0;l<e;l++){let a=o[l],d,u,p=-1,v=0;for(;v<a.length&&(s.lastIndex=v,u=s.exec(a),u!==null);)v=s.lastIndex,s===B?u[1]==="!--"?s=qe:u[1]!==void 0?s=Le:u[2]!==void 0?(Be.test(u[2])&&(n=RegExp("</"+u[2],"g")),s=P):u[3]!==void 0&&(s=P):s===P?u[0]===">"?(s=n??B,p=-1):u[1]===void 0?p=-2:(p=s.lastIndex-u[2].length,d=u[1],s=u[3]===void 0?P:u[3]==='"'?Oe:Ie):s===Oe||s===Ie?s=P:s===qe||s===Le?s=B:(s=P,n=void 0);let g=s===P&&o[l+1].startsWith("/>")?" ":"";i+=s===B?a+Pt:p>=0?(r.push(d),a.slice(0,p)+je+a.slice(p)+A+g):a+A+(p===-2?l:g)}return[We(o,i+(o[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]},Y=class o{constructor({strings:t,_$litType$:e},r){let n;this.parts=[];let i=0,s=0,l=t.length-1,a=this.parts,[d,u]=Ct(t,e);if(this.el=o.createElement(d,r),V.currentNode=this.el.content,e===2||e===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(n=V.nextNode())!==null&&a.length<l;){if(n.nodeType===1){if(n.hasAttributes())for(let p of n.getAttributeNames())if(p.endsWith(je)){let v=u[s++],g=n.getAttribute(p).split(A),_=/([.?@])?(.*)/.exec(v);a.push({type:1,index:i,name:_[2],strings:g,ctor:_[1]==="."?fe:_[1]==="?"?_e:_[1]==="@"?ye:q}),n.removeAttribute(p)}else p.startsWith(A)&&(a.push({type:6,index:i}),n.removeAttribute(p));if(Be.test(n.tagName)){let p=n.textContent.split(A),v=p.length-1;if(v>0){n.textContent=re?re.emptyScript:"";for(let g=0;g<v;g++)n.append(p[g],W()),V.nextNode(),a.push({type:2,index:++i});n.append(p[v],W())}}}else if(n.nodeType===8)if(n.data===Ue)a.push({type:2,index:i});else{let p=-1;for(;(p=n.data.indexOf(A,p+1))!==-1;)a.push({type:7,index:i}),p+=A.length-1}i++}}static createElement(t,e){let r=C.createElement("template");return r.innerHTML=t,r}};function D(o,t,e=o,r){if(t===R)return t;let n=r!==void 0?e._$Co?.[r]:e._$Cl,i=G(t)?void 0:t._$litDirective$;return n?.constructor!==i&&(n?._$AO?.(!1),i===void 0?n=void 0:(n=new i(o),n._$AT(o,e,r)),r!==void 0?(e._$Co??=[])[r]=n:e._$Cl=n),n!==void 0&&(t=D(o,n._$AS(o,t.values),n,r)),t}var he=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:r}=this._$AD,n=(t?.creationScope??C).importNode(e,!0);V.currentNode=n;let i=V.nextNode(),s=0,l=0,a=r[0];for(;a!==void 0;){if(s===a.index){let d;a.type===2?d=new J(i,i.nextSibling,this,t):a.type===1?d=new a.ctor(i,a.name,a.strings,this,t):a.type===6&&(d=new xe(i,this,t)),this._$AV.push(d),a=r[++l]}s!==a?.index&&(i=V.nextNode(),s++)}return V.currentNode=C,n}p(t){let e=0;for(let r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}},J=class o{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,r,n){this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=D(this,t,e),G(t)?t===m||t==null||t===""?(this._$AH!==m&&this._$AR(),this._$AH=m):t!==this._$AH&&t!==R&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Vt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==m&&G(this._$AH)?this._$AA.nextSibling.data=t:this.T(C.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:r}=t,n=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=Y.createElement(We(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===n)this._$AH.p(e);else{let i=new he(n,this),s=i.u(this.options);i.p(e),this.T(s),this._$AH=i}}_$AC(t){let e=He.get(t.strings);return e===void 0&&He.set(t.strings,e=new Y(t)),e}k(t){we(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,r,n=0;for(let i of t)n===e.length?e.push(r=new o(this.O(W()),this.O(W()),this,this.options)):r=e[n],r._$AI(i),n++;n<e.length&&(this._$AR(r&&r._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let r=Me(t).nextSibling;Me(t).remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},q=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,n,i){this.type=1,this._$AH=m,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=m}_$AI(t,e=this,r,n){let i=this.strings,s=!1;if(i===void 0)t=D(this,t,e,0),s=!G(t)||t!==this._$AH&&t!==R,s&&(this._$AH=t);else{let l=t,a,d;for(t=i[0],a=0;a<i.length-1;a++)d=D(this,l[r+a],e,a),d===R&&(d=this._$AH[a]),s||=!G(d)||d!==this._$AH[a],d===m?t=m:t!==m&&(t+=(d??"")+i[a+1]),this._$AH[a]=d}s&&!n&&this.j(t)}j(t){t===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},fe=class extends q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===m?void 0:t}},_e=class extends q{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==m)}},ye=class extends q{constructor(t,e,r,n,i){super(t,e,r,n,i),this.type=5}_$AI(t,e=this){if((t=D(this,t,e,0)??m)===R)return;let r=this._$AH,n=t===m&&r!==m||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,i=t!==m&&(r===m||n);n&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},xe=class{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){D(this,t)}};var Rt=be.litHtmlPolyfillSupport;Rt?.(Y,J),(be.litHtmlVersions??=[]).push("3.3.2");var Ge=(o,t,e)=>{let r=e?.renderBefore??t,n=r._$litPart$;if(n===void 0){let i=e?.renderBefore??null;r._$litPart$=n=new J(t.insertBefore(W(),i),i,void 0,e??{})}return n._$AI(o),n};var Se=globalThis,w=class extends k{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ge(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return R}};w._$litElement$=!0,w.finalized=!0,Se.litElementHydrateSupport?.({LitElement:w});var Zt=Se.litElementPolyfillSupport;Zt?.({LitElement:w});(Se.litElementVersions??=[]).push("4.2.2");var T=o=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(o,t)}):customElements.define(o,t)};var Nt={attribute:!0,type:String,converter:U,reflect:!1,hasChanged:te},Ft=(o=Nt,t,e)=>{let{kind:r,metadata:n}=e,i=globalThis.litPropertyMetadata.get(n);if(i===void 0&&globalThis.litPropertyMetadata.set(n,i=new Map),r==="setter"&&((o=Object.create(o)).wrapped=!0),i.set(e.name,o),r==="accessor"){let{name:s}=e;return{set(l){let a=t.get.call(this);t.set.call(this,l),this.requestUpdate(s,a,o,!0,l)},init(l){return l!==void 0&&this.C(s,void 0,o,l),l}}}if(r==="setter"){let{name:s}=e;return function(l){let a=this[s];t.call(this,l),this.requestUpdate(s,a,o,!0,l)}}throw Error("Unsupported decorator location: "+r)};function Ye(o){return(t,e)=>typeof e=="object"?Ft(o,t,e):((r,n,i)=>{let s=n.hasOwnProperty(i);return n.constructor.createProperty(i,r),s?Object.getOwnPropertyDescriptor(n,i):void 0})(o,t,e)}function f(o){return Ye({...o,state:!0,attribute:!1})}var Je={"status.idle":"Idle","status.running":"Running","status.error":"Error","status.disabled":"Disabled",stop_all:"Stop All",next:"Next",last:"Last",no_programs:"No programs found",loading:"Loading...","time.just_now":"just now","time.minutes_ago":"{count}m ago","time.hours_ago":"{count}h ago","time.days_ago":"{count }d ago","time.today_at":"today at {time}","time.tomorrow_at":"tomorrow at {time}","time.in_days":"in {count} d","time.never":"Never","time.no_schedule":"No active program","status.running_program":"Running: {name}",stop_confirm:"Stop all watering?","recap.total_duration":"Total duration: {duration} min","days.mon":"Mon","days.tue":"Tue","days.wed":"Wed","days.thu":"Thu","days.fri":"Fri","days.sat":"Sat","days.sun":"Sun","running.progress":"Valve {done} of {total}","error.program":"Error \u2014 {name}","error.auto_stopped":"All valves have been automatically closed.","config.tab_valves":"Valves","config.tab_zones":"Zones","config.tab_programs":"Programs","config.no_valves":"No valves configured","config.no_zones":"No zones created","config.no_programs":"No programs created","config.new_zone":"New zone","config.new_program":"New program","config.name":"Name","config.save":"Save","config.cancel":"Cancel","config.delete":"Delete","config.edit":"Edit","config.confirm_delete_zone":"Delete this zone?","config.confirm_delete_program":"Delete this program?","config.trigger_time":"Trigger time","config.select_valves":"Select valves","config.select_zones":"Select zones","config.valve_entity":"Entity","config.total_duration":"Total: {duration} min","config.dry_run":"Test mode","config.dry_run_hint":"Runs the sequence without activating valves","running.dry_run":"Test mode","config.follows_program":"Every day","config.frequency_every_n":"Every {n} days","config.frequency_weekdays":"Specific days","recap.frequency_every_n":"every {n}d","config.title":"WateringHub Config","config.editor_valves":"Valves","config.add_valve":"Add valve","config.select_entity":"Switch entity","config.confirm_delete_valve":"Delete this valve?","config.saved":"Saved","config.deleted":"Deleted","skip.button":"Pause","skip.days_1":"1 day","skip.days_n":"{count} days","skip.active":"Paused {count} d","skip.cancel":"Resume","skip.toast_paused":"Program paused {count} d","skip.toast_resumed":"Program resumed","confirm.stop":"Stop","config.tab_water_supplies":"Water Supplies","config.no_water_supplies":"No water supplies","config.new_water_supply":"New supply","config.water_supply":"Water supply","config.confirm_delete_water_supply":"Delete this water supply?","config.error_water_supply_in_use":"Reassign valves first","config.no_water_supply_hint":"Create a water supply first","config.hint_programs":"Create watering programs with a schedule and zones.","config.hint_zones":"Create at least one zone to group your valves.","config.hint_water_supplies":"Define at least one water supply to enable parallel execution.","config.hint_valves":"Configure your valves and assign them to a zone and water supply.","config.none":"None","config.hint_valves_prereq":"Create water supplies and zones first","config.hint_programs_prereq":"Configure your valves first","schedule.at_one":"at {time}","schedule.at_many":"at {rest} and {last}","config.trigger_times":"Trigger times","config.add_time":"Add a time","config.valve_custom_times":"Custom times","config.valve_custom_times_hint":"Run only at selected times","config.valve_times_required":"Select at least one time, or uncheck custom times","config.valves_per_slot":"Valves per trigger time","config.slot_disabled_here":"disabled here","config.no_schedule_times":"Add at least one trigger time","config.valves_unassigned":"Unassigned valves","config.no_valves_in_zone":"No valve in this zone","config.hint_zones_unified":"Manage water supplies, zones, and valves.","config.valves_unassigned_warn":"Reassign valves first","config.editor_managed_in_card":"Configure water supplies, zones, valves, and programs from the card itself (Programmes / Zones tabs)."};var Ke={"status.idle":"En attente","status.running":"Arrosage en cours","status.error":"Erreur","status.disabled":"D\xE9sactiv\xE9",stop_all:"Tout arr\xEAter",next:"Prochain",last:"Dernier",no_programs:"Aucun programme trouv\xE9",loading:"Chargement...","time.just_now":"\xE0 l'instant","time.minutes_ago":"il y a {count} min","time.hours_ago":"il y a {count}h","time.days_ago":"il y a {count} j","time.today_at":"aujourd'hui \xE0 {time}","time.tomorrow_at":"demain \xE0 {time}","time.in_days":"dans {count} j","time.never":"Jamais","time.no_schedule":"Aucun programme actif","status.running_program":"En cours : {name}",stop_confirm:"Arr\xEAter tout l'arrosage ?","recap.total_duration":"Dur\xE9e totale : {duration} min","days.mon":"Lun","days.tue":"Mar","days.wed":"Mer","days.thu":"Jeu","days.fri":"Ven","days.sat":"Sam","days.sun":"Dim","running.progress":"Vanne {done} sur {total}","error.program":"Erreur \u2014 {name}","error.auto_stopped":"Toutes les vannes ont \xE9t\xE9 ferm\xE9es automatiquement.","config.tab_valves":"Vannes","config.tab_zones":"Zones","config.tab_programs":"Programmes","config.no_valves":"Aucune vanne configur\xE9e","config.no_zones":"Aucune zone cr\xE9\xE9e","config.no_programs":"Aucun programme cr\xE9\xE9","config.new_zone":"Nouvelle zone","config.new_program":"Nouveau programme","config.name":"Nom","config.save":"Sauvegarder","config.cancel":"Annuler","config.delete":"Supprimer","config.edit":"Modifier","config.confirm_delete_zone":"Supprimer cette zone ?","config.confirm_delete_program":"Supprimer ce programme ?","config.trigger_time":"Heure de d\xE9clenchement","config.select_valves":"S\xE9lectionner les vannes","config.select_zones":"S\xE9lectionner les zones","config.valve_entity":"Entit\xE9","config.total_duration":"Total : {duration} min","config.dry_run":"Mode test","config.dry_run_hint":"Ex\xE9cute la s\xE9quence sans activer les vannes","running.dry_run":"Mode test","config.follows_program":"Tous les jours","config.frequency_every_n":"Tous les {n} jours","config.frequency_weekdays":"Jours sp\xE9cifiques","recap.frequency_every_n":"tous les {n}j","config.title":"WateringHub Config","config.editor_valves":"Vannes","config.add_valve":"Ajouter une vanne","config.select_entity":"Entit\xE9 switch","config.confirm_delete_valve":"Supprimer cette vanne ?","config.saved":"Enregistr\xE9","config.deleted":"Supprim\xE9","skip.button":"Pause","skip.days_1":"1 jour","skip.days_n":"{count} jours","skip.active":"En pause {count} j","skip.cancel":"Reprendre","skip.toast_paused":"Programme en pause {count} j","skip.toast_resumed":"Programme repris","confirm.stop":"Arr\xEAter","config.tab_water_supplies":"Arriv\xE9es d'eau","config.no_water_supplies":"Aucune arriv\xE9e d'eau","config.new_water_supply":"Nouvelle arriv\xE9e","config.water_supply":"Arriv\xE9e d'eau","config.confirm_delete_water_supply":"Supprimer cette arriv\xE9e ?","config.error_water_supply_in_use":"R\xE9assignez d'abord les vannes","config.no_water_supply_hint":"Cr\xE9ez d'abord une arriv\xE9e d'eau","config.hint_programs":"Cr\xE9ez des programmes d'arrosage avec un horaire et des zones.","config.hint_zones":"Cr\xE9ez au moins une zone pour regrouper vos vannes.","config.hint_water_supplies":"Cr\xE9ez au moins une arriv\xE9e d'eau pour activer le parall\xE9lisme.","config.hint_valves":"Configurez vos vannes et assignez-les \xE0 une zone et une arriv\xE9e d'eau.","config.none":"Aucun","config.hint_valves_prereq":"Cr\xE9ez d'abord des arriv\xE9es d'eau et des zones","config.hint_programs_prereq":"Configurez d'abord vos vannes","schedule.at_one":"\xE0 {time}","schedule.at_many":"\xE0 {rest} et {last}","config.trigger_times":"Horaires de d\xE9clenchement","config.add_time":"Ajouter un horaire","config.valve_custom_times":"Horaires sp\xE9cifiques","config.valve_custom_times_hint":"Ne tourne qu'aux horaires s\xE9lectionn\xE9s","config.valve_times_required":"S\xE9lectionnez au moins un horaire, ou d\xE9cochez les horaires sp\xE9cifiques","config.valves_per_slot":"Vannes par horaire","config.slot_disabled_here":"d\xE9sactiv\xE9e ici","config.no_schedule_times":"Ajoutez au moins un horaire","config.valves_unassigned":"Vannes non assign\xE9es","config.no_valves_in_zone":"Aucune vanne dans cette zone","config.hint_zones_unified":"G\xE9rez vos arriv\xE9es d'eau, zones et vannes.","config.valves_unassigned_warn":"R\xE9assignez d'abord les vannes","config.editor_managed_in_card":"Configurez arriv\xE9es, zones, vannes et programmes directement depuis la carte (onglets Programmes / Zones)."};var ke={en:Je,fr:Ke};function z(o){let t=o?.toLowerCase().startsWith("fr")?"fr":"en",e=ke[t]??ke.en;return(r,n)=>{let i=e[r]??ke.en[r]??r;return n&&(i=i.replace(/\{(\w+)\}/g,(s,l)=>String(n[l]??s))),i}}var E=S`
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

  /* Form basics */
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

  /* Buttons */
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
  .btn:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
  }
  .btn-primary {
    background: var(--primary-color);
    color: var(--text-primary-color, white);
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
  .add-btn:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
  }

  /* Form select */
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

  /* Form actions */
  .form-actions {
    display: flex;
    gap: 8px;
    justify-content: flex-end;
    margin-top: 12px;
  }

  /* Badge base */
  .badge-sm {
    display: inline-flex;
    align-items: center;
    padding: 3px 10px;
    border-radius: 10px;
    font-size: 11px;
    font-weight: 500;
    color: white;
  }

  /* Badge dry-run (running block) */
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
  /* Badge dry-run inline (config list item) */
  .badge-dry-run-sm {
    display: inline-flex;
    align-items: center;
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 10px;
    font-weight: 500;
    background: var(--secondary-background-color);
    color: var(--secondary-text-color);
    border: 1px dashed var(--divider-color);
    margin-left: 8px;
    vertical-align: middle;
  }

  /* Action buttons */
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
  .action-btn:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
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
  .list-item-actions {
    display: flex;
    gap: 8px;
    flex-shrink: 0;
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

  /* Toast */
  .toast {
    position: fixed;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--primary-text-color);
    color: var(--card-background-color);
    padding: 10px 24px;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 500;
    z-index: 100;
    animation: toast-in 0.3s ease;
  }
  @keyframes toast-in {
    from {
      opacity: 0;
      transform: translateX(-50%) translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
  }

  /* Confirm dialog */
  .confirm-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 200;
  }
  .confirm-dialog {
    background: var(--card-background-color);
    border-radius: 12px;
    padding: 24px;
    min-width: 280px;
    max-width: 400px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
  }
  .confirm-message {
    font-size: 15px;
    color: var(--primary-text-color);
    margin-bottom: 20px;
  }
  .confirm-actions {
    display: flex;
    gap: 8px;
    justify-content: flex-end;
  }
  .btn-danger {
    background: var(--error-color);
    color: white;
  }
`;var Xe=S`
  /* Program status line */
  .program-status {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 2px 0 8px 32px;
    flex-wrap: wrap;
  }
  .badge-idle {
    background: var(--success-color);
  }
  .badge-disabled {
    background: var(--disabled-text-color);
  }
  .badge-skipped {
    background: none;
    border: 1px solid var(--warning-color);
    color: var(--warning-color);
  }
  .badge-running {
    background: var(--primary-color);
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
    padding: 8px 16px;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    transition: opacity 0.2s;
  }
  .running-stop-btn:hover {
    opacity: 0.85;
  }
  .running-stop-btn:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
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
    stroke: var(--primary-color);
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
    display: inline-flex;
    align-items: center;
    padding: 3px 10px;
    border-radius: 10px;
    font-size: 11px;
    font-weight: 500;
    color: white;
    background: var(--primary-color);
    margin: 6px 0 2px;
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
    border-radius: 8px;
    padding: 4px;
    margin: -4px;
    transition: background 0.2s;
  }
  .program-header:hover {
    background: var(--secondary-background-color);
  }
  .program-header:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
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
    padding: 8px 0 4px;
  }
  .recap-zone-badge {
    display: inline-flex;
    align-items: center;
    padding: 3px 10px;
    border-radius: 10px;
    font-size: 11px;
    font-weight: 500;
    color: white;
    background: var(--primary-color);
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
  .recap-valve ha-icon,
  .recap-total ha-icon {
    --mdc-icon-size: 18px;
    color: var(--secondary-text-color);
  }

  /* Skip button */
  .skip-btn {
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px;
    border-radius: 50%;
    color: var(--secondary-text-color);
    display: flex;
    align-items: center;
    justify-content: center;
    transition:
      color 0.2s,
      background 0.2s;
    flex-shrink: 0;
  }
  .skip-btn:hover {
    color: var(--warning-color);
    background: var(--secondary-background-color);
  }
  .skip-btn ha-icon {
    --mdc-icon-size: 20px;
  }

  /* Skip cancel button */
  .skip-cancel-btn {
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px;
    border-radius: 50%;
    color: var(--secondary-text-color);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: color 0.2s;
  }
  .skip-cancel-btn:hover {
    color: var(--warning-color);
  }
  .skip-cancel-btn ha-icon {
    --mdc-icon-size: 20px;
  }

  /* Skip dropdown */
  .skip-dropdown-wrapper {
    position: relative;
    display: inline-flex;
    flex-shrink: 0;
  }
  .skip-dropdown {
    position: absolute;
    top: 100%;
    right: 0;
    z-index: 10;
    background: var(--card-background-color);
    border: 1px solid var(--divider-color);
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    min-width: 120px;
    padding: 4px 0;
    margin-top: 4px;
  }
  .skip-dropdown-option {
    display: block;
    width: 100%;
    padding: 8px 16px;
    border: none;
    background: none;
    text-align: left;
    font-size: 13px;
    color: var(--primary-text-color);
    cursor: pointer;
    transition: background 0.15s;
  }
  .skip-dropdown-option:hover {
    background: var(--secondary-background-color);
  }

  /* Parallel timeline */
  .parallel-timeline {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }
  .supply-column {
    flex: 1;
    min-width: 200px;
  }
  .supply-label {
    display: inline-flex;
    align-items: center;
    padding: 3px 10px;
    border-radius: 10px;
    font-size: 11px;
    font-weight: 500;
    color: white;
    background: var(--primary-color);
    margin-bottom: 8px;
  }
`;function ne(o){return Object.keys(o.states).filter(t=>t.startsWith("switch.wateringhub_"))}function L(o,t){return typeof o?.attributes.friendly_name=="string"?o.attributes.friendly_name:t}function ie(o){return o.states["sensor.wateringhub_status"]?.state??"idle"}function Qe(o){let t=o.states["sensor.wateringhub_status"];if(t?.state!=="error")return null;let e=t.attributes,r=e.current_program,n=r?o.states[`switch.wateringhub_${r}`]:void 0;return{programName:L(n,r??""),errorMessage:e.error_message??""}}function et(o){let t=o.states["sensor.wateringhub_status"];if(t?.state!=="running")return null;let e=t.attributes,r=e.valves_done??0,n=e.valves_total??1,i=Array.isArray(e.valves_sequence)?e.valves_sequence:[],s=Array.isArray(e.active_valves)?e.active_valves:[],l=s.map(g=>{let _=Math.max(0,(Date.now()-new Date(g.valve_start).getTime())/1e3),$=Math.max(0,g.valve_duration-_),ue=i.filter(x=>x.water_supply_id===g.water_supply_id&&x.status==="pending").reduce((x,yt)=>x+yt.duration,0);return $+ue}),a=l.length>0?Math.max(...l):0,d=i.reduce((g,_)=>g+_.duration,0),u=i.filter(g=>g.status==="done").reduce((g,_)=>g+_.duration,0),p=s.reduce((g,_)=>g+Math.max(0,(Date.now()-new Date(_.valve_start).getTime())/1e3),0),v=u+p;return{programName:e.current_program??"",valvesDone:r,valvesTotal:n,progressPercent:e.progress_percent??0,totalRemaining:a,totalDuration:d,totalElapsed:v,valveSequence:i,activeValves:s,dryRun:e.dry_run===!0}}function Ae(o){if(o<=0)return"0:00";let t=Math.floor(o/3600),e=Math.floor(o%3600/60),r=Math.floor(o%60);return t>0?`${t}:${e.toString().padStart(2,"0")}:${r.toString().padStart(2,"0")}`:`${e}:${r.toString().padStart(2,"0")}`}function se(o,t){if(!o)return"";let e=[...o.times].sort();if(e.length===0)return"";if(e.length===1)return t("schedule.at_one",{time:e[0]});let r=e[e.length-1],n=e.slice(0,-1).join(", ");return t("schedule.at_many",{rest:n,last:r})}function tt(o){let t=o?.state;return t==null||t==="None"||t==="null"||t==="unknown"||t==="unavailable"}function Te(o,t,e,r){let n=o.states[t];if(tt(n))return e("time.never");let i=new Date(n.state);if(Number.isNaN(i.getTime()))return n.state;let s=new Date,l=s.getTime()-i.getTime();if(l<0){let p=new Date(s.getFullYear(),s.getMonth(),s.getDate()),v=new Date(i.getFullYear(),i.getMonth(),i.getDate()),g=Math.round((v.getTime()-p.getTime())/(1e3*60*60*24)),_=i.toLocaleTimeString(r??[],{hour:"2-digit",minute:"2-digit"});return g===0?e("time.today_at",{time:_}):g===1?e("time.tomorrow_at",{time:_}):e("time.in_days",{count:g})}let a=Math.floor(l/(1e3*60));if(a<1)return e("time.just_now");if(a<60)return e("time.minutes_ago",{count:a});let d=Math.floor(a/60);if(d<24)return e("time.hours_ago",{count:d});let u=Math.floor(d/24);return e("time.days_ago",{count:u})}function rt(o,t,e){let r=o.states["sensor.wateringhub_next_run"];return tt(r)?t("time.no_schedule"):Te(o,"sensor.wateringhub_next_run",t,e)}function ot(o){let t=o.attributes.skip_until;if(typeof t!="string")return null;let e=new Date(t+"T23:59:59");if(Number.isNaN(e.getTime()))return null;let r=new Date;if(r>e)return null;let n=new Date(r.getFullYear(),r.getMonth(),r.getDate()),i=new Date(e.getFullYear(),e.getMonth(),e.getDate());return{isSkipped:!0,daysRemaining:Math.max(1,Math.ceil((i.getTime()-n.getTime())/(1e3*60*60*24))),skipUntil:t}}function nt(o,t){return t("skip.active",{count:o})}function O(o,t){return c`<span class="badge-sm badge-${o}">${t}</span>`}function it(o,t,e="primary"){return c`<button class="btn btn-${e}" @click=${t}>${o}</button>`}function I(o,t,e){return c`
    <button
      class=${e?.className??"action-btn"}
      @click=${t}
      title=${e?.title??""}
    >
      <ha-icon icon=${o}></ha-icon>
    </button>
  `}function st(o,t){return c`<button class="add-btn" @click=${t}>${o}</button>`}function ae(o,t,e){return c`
    <div class="form-actions">
      ${it(e("config.cancel"),o,"cancel")}
      ${it(e("config.save"),t,"primary")}
    </div>
  `}function Z(o,t){return c`
    <div class="form-row">
      <label class="form-label">${o}</label>
      ${t}
    </div>
  `}function at(o,t,e,r,n){return c`
    <div class="list-item">
      <div class="list-item-header">
        <div>
          <div class="list-item-name">${o}</div>
          <div class="list-item-sub">${t}</div>
        </div>
        <div class="list-item-actions">
          ${I("mdi:pencil",e,{title:n("config.edit")})}
          ${I("mdi:delete",r,{title:n("config.delete"),className:"action-btn delete"})}
        </div>
      </div>
    </div>
  `}function le(o,t,e,r,n,i){return o?c`
    <div class="confirm-overlay" @click=${n}>
      <div class="confirm-dialog" @click=${s=>s.stopPropagation()}>
        <div class="confirm-message">${t}</div>
        <div class="confirm-actions">
          <button class="btn btn-cancel" @click=${n}>${i("config.cancel")}</button>
          <button class="btn btn-danger" @click=${r}>${e}</button>
        </div>
      </div>
    </div>
  `:c``}function lt(o){return c`
    <div class="header">
      <span class="title">${o}</span>
    </div>
  `}function qt(o,t,e,r,n,i,s,l){if(!e)return c`
      <div class="program-status">${O("disabled",n("status.disabled"))}</div>
    `;if(ie(o)==="running"){let v=o.states["sensor.wateringhub_status"]?.attributes.current_program,g=t.entity_id?.replace("switch.wateringhub_","");return c`
      <div class="program-status">
        ${v===g?O("running",n("status.running")):m}
      </div>
    `}let d=ot(t),u=r?It(s,n):m;return c`
    <div class="program-status">
      ${d?c`
            ${O("skipped",nt(d.daysRemaining,n))}
            <button class="skip-cancel-btn" @click=${l} title=${n("skip.cancel")}>
              <ha-icon icon="mdi:close-circle-outline"></ha-icon>
            </button>
          `:c`
            ${O("idle",n("status.idle"))}
            <div class="skip-dropdown-wrapper">
              <button class="skip-btn" @click=${i} title=${n("skip.button")}>
                <ha-icon icon="mdi:pause-circle-outline"></ha-icon>
              </button>
              ${u}
            </div>
          `}
      <span class="info-sm">${n("next")}: ${rt(o,n,o.language)}</span>
    </div>
  `}function ct(o,t){let e=Qe(o);return e?c`
    <div class="error-view">
      <div class="error-title">
        <ha-icon icon="mdi:alert-circle"></ha-icon>
        ${t("error.program",{name:e.programName})}
      </div>
      ${e.errorMessage?c`<div class="error-message">${e.errorMessage}</div>`:m}
      <div class="error-auto-stopped">${t("error.auto_stopped")}</div>
    </div>
  `:c``}function dt(o,t,e){let r=et(o);if(!r)return c``;let n=o.states["sensor.wateringhub_status"]?.attributes.water_supplies??[],i=r.activeValves.length>1?Lt(r.valveSequence,r.activeValves,n):pt(r.valveSequence,r.activeValves),s=r.valveSequence.length>0?i:m,l=2*Math.PI*30,a=r.totalDuration>0?Math.min(1,r.totalElapsed/r.totalDuration):0,d=l*(1-a);return c`
    <div class="running-block">
      <button class="running-stop-btn" @click=${t}>${e("stop_all")}</button>
      ${r.dryRun?O("dry-run",e("running.dry_run")):m}

      <div class="global-hero">
        <div class="circular-progress">
          <svg viewBox="0 0 68 68">
            <circle class="cp-track" cx="34" cy="34" r="30" />
            <circle
              class="cp-fill"
              cx="34"
              cy="34"
              r="30"
              style="stroke-dasharray: ${l}; stroke-dashoffset: ${d}"
            />
          </svg>
          <div class="cp-center">
            <span class="cp-time">${Ae(r.totalRemaining)}</span>
          </div>
        </div>
        <div class="global-info">
          <div class="global-program-name">
            ${L(o.states[`switch.wateringhub_${r.programName}`],r.programName)}
          </div>
          <div class="global-sub">
            ${e("running.progress",{done:r.valvesDone+1,total:r.valvesTotal})}
          </div>
        </div>
      </div>

      ${s}
    </div>
  `}function pt(o,t){let e=[];for(let a of o){let d=e[e.length-1];d?.zoneName===a.zone_name?d.valves.push(a):e.push({zoneName:a.zone_name,valves:[a]})}let r=new Map;for(let a of t){let d=Math.max(0,(Date.now()-new Date(a.valve_start).getTime())/1e3);r.set(a.valve_id,Math.max(0,a.valve_duration-d))}let n=c`<svg viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z"
    />
  </svg>`,i=c`<svg viewBox="0 0 24 24">
    <circle fill="currentColor" cx="12" cy="12" r="6" />
  </svg>`,s=c`<svg viewBox="0 0 24 24">
    <circle fill="none" stroke="currentColor" stroke-width="2" cx="12" cy="12" r="6" />
  </svg>`,l={done:n,running:i,pending:s};return c`
    <div class="valve-timeline">
      ${e.map(a=>c`
          <div class="tl-zone">${a.zoneName}</div>
          ${a.valves.map(d=>{let u=Math.ceil(d.duration/60),p=r.get(d.valve_id)??0;return c`
              <div class="tl-step tl-${d.status}">
                <span class="tl-dot">${l[d.status]}</span>
                <span class="tl-step-name">${d.valve_name}</span>
                <span class="tl-step-time">
                  ${d.status==="running"?Ae(p):`${u} min`}
                </span>
              </div>
            `})}
        `)}
    </div>
  `}function Lt(o,t,e){let r=[],n=new Map;for(let s of o)n.has(s.water_supply_id)||(r.push(s.water_supply_id),n.set(s.water_supply_id,[])),n.get(s.water_supply_id).push(s);let i=new Map;for(let s of t)i.has(s.water_supply_id)||i.set(s.water_supply_id,[]),i.get(s.water_supply_id).push(s);return c`
    <div class="parallel-timeline">
      ${r.map(s=>{let l=n.get(s)??[],a=i.get(s)??[],d=s===null?"\u2014":e.find(u=>u.id===s)?.name??s;return c`
          <div class="supply-column">
            <div class="supply-label">${d}</div>
            ${pt(l,a)}
          </div>
        `})}
    </div>
  `}function ut(o,t,e,r,n,i,s,l,a,d){return t.length===0?c`<div class="empty-state">${d("no_programs")}</div>`:c`${t.map(u=>{let p=o.states[u];if(!p)return m;let v=p.state==="on",g=e===u,_=L(p,u);return c`
      <div class="program-wrapper">
        <div class="program">
          <div class="program-header" @click=${()=>n(u)}>
            <ha-icon class="chevron ${g?"open":""}" icon="mdi:chevron-down"></ha-icon>
            ${v?c`<div class="active-dot"></div>`:m}
            <span class="program-name ${v?"active":""}">${_}</span>
          </div>
          <ha-switch .checked=${v} @change=${()=>i(u)}></ha-switch>
        </div>
        ${qt(o,p,v,r===u,d,()=>s(u),$=>l(u,$),()=>a(u))}
        ${Ot(o,p.attributes,g,d)}
      </div>
    `})}`}function It(o,t){return c`
    <div class="skip-dropdown">
      ${[1,2,3,5].map(r=>c`
          <button class="skip-dropdown-option" @click=${()=>o(r)}>
            ${r===1?t("skip.days_1"):t("skip.days_n",{count:r})}
          </button>
        `)}
    </div>
  `}function Ot(o,t,e,r){let n=t.schedule,i=t.zones??[],s=t.total_duration;return c`
    <div class="program-recap ${e?"open":""}">
      ${n?c`<div class="recap-schedule">
            <ha-icon icon="mdi:calendar-clock"></ha-icon>
            ${se(n,r)}
          </div>`:m}
      <div class="recap-schedule">
        <ha-icon icon="mdi:history"></ha-icon>
        ${r("last")}: ${Te(o,"sensor.wateringhub_last_run",r,o.language)}
      </div>
      ${i.map(l=>c`
          <div class="recap-zone">
            <span class="recap-zone-badge">${l.zone_name}</span>
          </div>
          ${l.valves.map(a=>c`
              <div class="recap-valve">
                <ha-icon icon="mdi:water"></ha-icon>
                ${a.valve_name} — ${a.duration}
                min${jt(a.frequency,r)}${Ht(a.times,n?.times)}
              </div>
            `)}
        `)}
      ${s?c`<div class="recap-total">
            <ha-icon icon="mdi:timer-outline"></ha-icon>
            ${r("recap.total_duration",{duration:s})}
          </div>`:m}
    </div>
  `}function Ht(o,t){return!o||o.length===0||t&&o.length===t.length?"":` \xB7 ${[...o].sort().join(", ")}`}function jt(o,t){return o?o.type==="every_n_days"?` \xB7 ${t("recap.frequency_every_n",{n:o.n??2})}`:o.type==="weekdays"&&o.days?.length?` \xB7 ${o.days.map(r=>t(`days.${r}`)).join(", ")}`:"":""}var N=class extends w{constructor(){super(...arguments);this._t=e=>e}set hass(e){this._hass=e,this._t=z(e.language)}setConfig(e){this._config=e}_titleChanged(e){let r=e.target.value;this._config={...this._config,title:r},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config}}))}render(){return c`
      ${Z(this._t("config.name"),c`<input
          class="form-input"
          .value=${this._config?.title??""}
          @input=${this._titleChanged}
        />`)}
    `}};N.styles=[E],h([f()],N.prototype,"_config",2),h([f()],N.prototype,"_hass",2),N=h([T("wateringhub-card-editor")],N);var b=class extends w{constructor(){super(...arguments);this._programEntities=[];this._expandedProgram=null;this._skipDropdownOpen=null;this._toast="";this._confirmMessage="";this._confirmLabel="";this._confirmAction=null;this._tick=0;this._t=e=>e;this._timerInterval=null;this._unsubEvents=null;this._boundCloseDropdown=this._closeSkipDropdown.bind(this)}static getConfigElement(){return document.createElement("wateringhub-card-editor")}setConfig(e){this._config=e}set hass(e){let r=this._hass;this._hass=e,this._t=z(e.language),r?.states!==e.states&&(this._programEntities=ne(e)),this._updateTimer(ie(e)),this._subscribeEvents()}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._boundCloseDropdown)}disconnectedCallback(){super.disconnectedCallback(),this._clearTimer(),this._unsubscribeEvents(),document.removeEventListener("click",this._boundCloseDropdown)}_subscribeEvents(){this._unsubEvents||!this._hass?.connection||this._hass.connection.subscribeEvents(()=>{this._tick++},"wateringhub_event").then(e=>{this._unsubEvents=e})}_unsubscribeEvents(){this._unsubEvents&&(this._unsubEvents(),this._unsubEvents=null)}_updateTimer(e){e==="running"&&!this._timerInterval?this._timerInterval=setInterval(()=>{this._tick++},1e3):e!=="running"&&this._timerInterval&&this._clearTimer()}_clearTimer(){this._timerInterval&&(clearInterval(this._timerInterval),this._timerInterval=null)}getCardSize(){return 3}_toggleExpand(e){this._expandedProgram=this._expandedProgram===e?null:e}_toggleProgram(e){let r=this._hass.states[e];if(!r)return;let n=r.state==="on"?"turn_off":"turn_on";this._hass.callService("switch",n,{entity_id:e})}_requestConfirm(e,r,n){this._confirmMessage=e,this._confirmLabel=r,this._confirmAction=n}_executeConfirm(){this._confirmAction?.(),this._confirmAction=null,this._confirmMessage="",this._confirmLabel=""}_cancelConfirm(){this._confirmAction=null,this._confirmMessage="",this._confirmLabel=""}_stopAll(){this._requestConfirm(this._t("stop_confirm"),this._t("confirm.stop"),()=>{this._hass.callService("wateringhub","stop_all",{})})}_toggleSkipDropdown(e){this._skipDropdownOpen=this._skipDropdownOpen===e?null:e}_showToast(e){this._toast=e,setTimeout(()=>{this._toast=""},3e3)}_handleSkip(e,r){let n=e.replace("switch.wateringhub_","");this._hass.callService("wateringhub","skip_program",{id:n,days:r}),this._skipDropdownOpen=null,this._showToast(this._t("skip.toast_paused",{count:r}))}_handleCancelSkip(e){let r=e.replace("switch.wateringhub_","");this._hass.callService("wateringhub","skip_program",{id:r,days:0}),this._showToast(this._t("skip.toast_resumed"))}_closeSkipDropdown(e){if(!this._skipDropdownOpen)return;e.composedPath().some(i=>i instanceof HTMLElement&&i.classList?.contains("skip-dropdown-wrapper"))||(this._skipDropdownOpen=null)}render(){if(!this._hass||!this._config)return c`<ha-card>${this._t("loading")}</ha-card>`;let e=this._config.title??"WateringHub";return c`
      <ha-card>
        ${lt(e)} ${ct(this._hass,this._t)}
        ${dt(this._hass,()=>this._stopAll(),this._t)}
        ${ut(this._hass,this._programEntities,this._expandedProgram,this._skipDropdownOpen,r=>this._toggleExpand(r),r=>this._toggleProgram(r),r=>this._toggleSkipDropdown(r),(r,n)=>this._handleSkip(r,n),r=>this._handleCancelSkip(r),this._t)}
        ${this._toast?c`<div class="toast">${this._toast}</div>`:m}
        ${le(!!this._confirmAction,this._confirmMessage,this._confirmLabel,()=>this._executeConfirm(),()=>this._cancelConfirm(),this._t)}
      </ha-card>
    `}};b.styles=[E,Xe],h([f()],b.prototype,"_config",2),h([f()],b.prototype,"_hass",2),h([f()],b.prototype,"_programEntities",2),h([f()],b.prototype,"_expandedProgram",2),h([f()],b.prototype,"_skipDropdownOpen",2),h([f()],b.prototype,"_toast",2),h([f()],b.prototype,"_confirmMessage",2),h([f()],b.prototype,"_confirmLabel",2),h([f()],b.prototype,"_confirmAction",2),h([f()],b.prototype,"_tick",2),b=h([T("wateringhub-card")],b);globalThis.customCards=globalThis.customCards||[];globalThis.customCards.push({type:"wateringhub-card",name:"WateringHub Card",description:"Watering management card for WateringHub"});var mt=S`
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
  .tab:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: -2px;
  }

  .form-hint {
    font-size: 12px;
    color: var(--secondary-text-color);
    margin-bottom: 16px;
  }
  /* Inline form */
  .inline-form {
    border: 2px solid var(--primary-color);
    border-radius: 8px;
    padding: 16px;
    margin-bottom: 8px;
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

  /* Reorder buttons */
  .reorder-btns {
    display: flex;
    flex-direction: column;
    gap: 0;
    flex-shrink: 0;
  }
  .reorder-btn {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    color: var(--secondary-text-color);
    line-height: 0;
  }
  .reorder-btn ha-icon {
    --mdc-icon-size: 16px;
  }
  .reorder-btn:disabled {
    color: var(--disabled-text-color);
    cursor: default;
  }
  .reorder-btn:not(:disabled):hover {
    color: var(--primary-color);
  }
  .zone-header-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
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

  /* Total duration */
  .total-duration {
    font-size: 13px;
    color: var(--secondary-text-color);
    margin-top: 8px;
    text-align: right;
  }

  /* Schedule time chips */
  .schedule-chips {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 6px;
  }
  .schedule-chip-wrap {
    display: inline-flex;
    align-items: center;
    gap: 2px;
    padding: 4px 4px 4px 10px;
    border-radius: 16px;
    background: var(--primary-color);
    color: white;
    flex-shrink: 0;
    line-height: 1;
  }
  .schedule-chip-input {
    background: transparent;
    border: none;
    color: white;
    font-size: 13px;
    font-weight: 500;
    padding: 0;
    margin: 0;
    outline: none;
    box-sizing: content-box;
    width: 90px;
    color-scheme: dark;
  }
  .schedule-chip-input::-webkit-calendar-picker-indicator {
    filter: invert(1);
    cursor: pointer;
    padding: 0;
    margin-left: 2px;
  }
  .chip-close {
    background: none;
    border: none;
    cursor: pointer;
    color: inherit;
    padding: 2px;
    display: inline-flex;
    align-items: center;
    border-radius: 50%;
    flex-shrink: 0;
  }
  .chip-close ha-icon {
    --mdc-icon-size: 14px;
  }
  .schedule-chips .supply-chip.chip-add {
    flex-shrink: 0;
    white-space: nowrap;
  }

  /* Supply chips */
  .supply-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }
  .supply-chip {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 10px;
    border-radius: 16px;
    background: var(--secondary-background-color);
    color: var(--primary-text-color);
    font-size: 12px;
    cursor: pointer;
  }
  .supply-chip ha-icon {
    --mdc-icon-size: 14px;
  }
  .supply-chip.chip-add {
    background: transparent;
    border: 1px dashed var(--divider-color);
    color: var(--secondary-text-color);
  }
  .supply-chip .chip-close {
    color: var(--secondary-text-color);
  }
  .supply-chip:hover {
    background: var(--divider-color);
  }

  /* Zone card (Zones tab) */
  .zone-card {
    border: 1px solid var(--divider-color);
    border-radius: 8px;
    padding: 10px 14px;
    margin-bottom: 8px;
  }
  .zone-card-header {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
  }
  .zone-card-name {
    font-size: 15px;
    font-weight: 500;
    color: var(--primary-text-color);
    flex: 1;
  }
  .zone-card-body {
    padding: 8px 0 0;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .chevron {
    --mdc-icon-size: 18px;
    color: var(--secondary-text-color);
    transition: transform 0.2s;
  }
  .chevron.open {
    transform: rotate(180deg);
  }

  /* Valve row (inside zone card / unassigned section) */
  .valve-row {
    display: flex;
    gap: 8px;
    align-items: center;
  }
  .valve-icon {
    --mdc-icon-size: 16px;
    color: var(--primary-color);
    flex-shrink: 0;
  }
  .valve-name {
    flex: 1;
    font-size: 13px;
    color: var(--primary-text-color);
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .valve-dropdown {
    flex: 0 1 110px;
    min-width: 90px;
  }
  .valve-row-unassigned {
    border: 1px solid var(--warning-color);
    border-radius: 8px;
    padding: 8px 10px;
    margin-bottom: 6px;
  }
  .valve-row-unassigned .valve-icon {
    color: var(--warning-color);
  }

  /* Slot sections (per-time valve selection in program editor) */
  .slot-section {
    border: 1px solid var(--divider-color);
    border-radius: 8px;
    padding: 10px 14px;
    margin-bottom: 8px;
  }
  .slot-header {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 500;
    color: var(--primary-text-color);
    margin-bottom: 8px;
  }
  .slot-header ha-icon {
    --mdc-icon-size: 18px;
    color: var(--primary-color);
  }
  .slot-time {
    font-size: 15px;
    font-variant-numeric: tabular-nums;
  }
  .slot-body {
    padding-left: 12px;
  }
  .slot-zone-label {
    font-size: 11px;
    color: var(--secondary-text-color);
    text-transform: uppercase;
    letter-spacing: 1px;
    margin: 6px 0 2px;
  }
  .slot-valve-row {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 4px 0;
    font-size: 13px;
  }
  .slot-valve-row.inactive {
    color: var(--disabled-text-color);
  }
  .slot-valve-main {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
  }
  .slot-valve-freq {
    display: flex;
    align-items: center;
    gap: 6px;
    padding-left: 26px;
    flex-wrap: wrap;
  }
  .slot-valve-name {
    flex: 1;
    color: inherit;
  }
  .slot-duration-input {
    width: 52px;
    padding: 2px 6px;
    border: 1px solid var(--divider-color);
    border-radius: 4px;
    font-size: 12px;
    text-align: right;
    color: var(--primary-text-color);
    background: var(--card-background-color);
  }
  .slot-disabled-hint {
    font-style: italic;
    margin-left: auto;
  }
`;function ce(o){return o.map(t=>({entity_id:t.entity_id,name:t.name,zone_id:t.zone_id,water_supply_id:t.water_supply_id}))}function F(o){return o.states["sensor.wateringhub_status"]?.attributes.available_valves??[]}function de(o){return o.states["sensor.wateringhub_status"]?.attributes.zones??[]}function gt(o){return o.states["sensor.wateringhub_status"]?.attributes.water_supplies??[]}function pe(o){return o.toLowerCase().normalize("NFD").replaceAll(/[\u0300-\u036f]/g,"").replaceAll(/[^a-z0-9]+/g,"_").replaceAll(/^_|_$/g,"")}function Ee(o,t,e){let r=gt(o),n=de(o),i=F(o),s=t.editingValves??ce(i),l=t.editingValves!==null,a=l?s.every(u=>u.zone_id&&u.water_supply_id):!1,d=s.filter(u=>!u.zone_id);return c`
    <div class="form-hint">${e("config.hint_zones_unified")}</div>

    <!-- Supplies chips -->
    <div class="form-label" style="margin-top:12px;">${e("config.tab_water_supplies")}</div>
    ${t.editingSupply?ze(t.editingSupply.name,u=>t.onUpdateSupplyForm({...t.editingSupply,name:u}),()=>t.onSaveSupply(t.editingSupply),t.onCancelSupply,e):c`
          <div class="supply-chips">
            ${r.map(u=>c`
                <span class="supply-chip" @click=${()=>t.onEditSupply(u)}>
                  <ha-icon icon="mdi:water-pump"></ha-icon>
                  ${u.name}
                  <span
                    class="chip-close"
                    @click=${p=>{p.stopPropagation(),t.onDeleteSupply(u.id)}}
                  >
                    <ha-icon icon="mdi:close"></ha-icon>
                  </span>
                </span>
              `)}
            <span class="supply-chip chip-add" @click=${t.onNewSupply}>
              + ${e("config.new_water_supply")}
            </span>
          </div>
        `}

    <!-- Zones list -->
    <div class="form-label" style="margin-top:16px;">${e("config.tab_zones")}</div>
    ${n.length===0&&!t.editingZone?.isNew?c`<div class="empty-state">${e("config.no_zones")}</div>`:m}
    ${n.map(u=>t.editingZone?.id===u.id?ze(t.editingZone.name,p=>t.onUpdateZoneForm({...t.editingZone,name:p}),()=>t.onSaveZone(t.editingZone),t.onCancelZone,e):Ut(u,s,n,r,t,e))}
    ${t.editingZone?.isNew?ze(t.editingZone.name,u=>t.onUpdateZoneForm({...t.editingZone,name:u}),()=>t.onSaveZone(t.editingZone),t.onCancelZone,e):m}
    ${t.editingZone?m:c`<button class="add-btn" @click=${t.onNewZone}>+ ${e("config.new_zone")}</button>`}

    <!-- Unassigned valves -->
    ${d.length>0?c`
          <div class="form-label" style="margin-top:16px; color:var(--warning-color);">
            ${e("config.valves_unassigned")} (${d.length})
          </div>
          ${d.map(u=>vt(u,n,r,t,!0,e))}
        `:m}

    <!-- Global valves save -->
    ${l?c`<div class="form-actions" style="margin-top:16px;">
          <button class="btn btn-cancel" @click=${t.onCancelValves}>${e("config.cancel")}</button>
          <button class="btn btn-primary" ?disabled=${!a} @click=${t.onSaveValves}>
            ${e("config.save")}
          </button>
        </div>`:m}
  `}function Ut(o,t,e,r,n,i){let s=t.filter(a=>a.zone_id===o.id),l=n.expandedZones.has(o.id);return c`
    <div class="zone-card">
      <div class="zone-card-header" @click=${()=>n.onToggleZone(o.id)}>
        <ha-icon class="chevron ${l?"open":""}" icon="mdi:chevron-down"></ha-icon>
        <span class="zone-card-name">${o.name}</span>
        <span class="info-sm">(${s.length})</span>
        <div class="list-item-actions" @click=${a=>a.stopPropagation()}>
          ${I("mdi:pencil",()=>n.onEditZone(o),{className:"action-btn",title:i("config.edit")})}
          ${I("mdi:delete",()=>n.onDeleteZone(o.id),{className:"action-btn delete",title:i("config.delete")})}
        </div>
      </div>
      ${l?c`
            <div class="zone-card-body">
              ${s.length===0?c`<div class="info-sm" style="padding:8px 0;">
                    ${i("config.no_valves_in_zone")}
                  </div>`:s.map(a=>vt(a,e,r,n,!1,i))}
            </div>
          `:m}
    </div>
  `}function vt(o,t,e,r,n,i){let s=!o.zone_id,l=!o.water_supply_id,a="border-color: var(--error-color);",d=p=>{r.editingValves||r.onStartEditValves();let v=(r.editingValves??[o]).map(g=>g.entity_id===o.entity_id?{...g,zone_id:p||null}:g);r.onUpdateValves(v)},u=p=>{r.editingValves||r.onStartEditValves();let v=(r.editingValves??[o]).map(g=>g.entity_id===o.entity_id?{...g,water_supply_id:p||null}:g);r.onUpdateValves(v)};return c`
    <div class="valve-row ${n?"valve-row-unassigned":""}">
      <ha-icon
        class="valve-icon"
        icon=${n?"mdi:alert-circle-outline":"mdi:valve"}
      ></ha-icon>
      <div class="valve-name">${o.name}</div>
      <select
        class="form-select valve-dropdown"
        style=${s?a:""}
        @change=${p=>d(p.target.value)}
      >
        <option value="" ?selected=${!o.zone_id}>${i("config.none")}</option>
        ${t.map(p=>c`<option value=${p.id} ?selected=${p.id===o.zone_id}>${p.name}</option>`)}
      </select>
      <select
        class="form-select valve-dropdown"
        style=${l?a:""}
        @change=${p=>u(p.target.value)}
      >
        <option value="" ?selected=${!o.water_supply_id}>${i("config.none")}</option>
        ${e.map(p=>c`<option value=${p.id} ?selected=${p.id===o.water_supply_id}>${p.name}</option>`)}
      </select>
      ${I("mdi:delete",()=>r.onDeleteValve(o.entity_id),{className:"action-btn delete",title:i("config.delete")})}
    </div>
  `}function ze(o,t,e,r,n){return c`
    <div class="inline-form">
      ${Z(n("config.name"),c`<input
          class="form-input"
          .value=${o}
          @input=${i=>t(i.target.value)}
        />`)}
      ${ae(r,e,n)}
    </div>
  `}function Ve(o,t,e,r,n,i,s,l,a){let d=ne(o),u=de(o),p=F(o),v=p.some(g=>g.zone_id!==null);return c`
    <div class="form-hint">${a("config.hint_programs")}</div>
    ${v?m:c`<div class="empty-state">${a("config.hint_programs_prereq")}</div>`}
    ${d.map(g=>{let _=o.states[g];if(!_)return m;let $=_.attributes.program_id??"";return t?.id===$?ht(t,u,p,i,s,l,a):Bt(_,g,e,r,a)})}
    ${t?.isNew?ht(t,u,p,i,s,l,a):m}
    ${t?m:st(`+ ${a("config.new_program")}`,n)}
    ${d.length===0&&!t?c`<div class="empty-state">${a("config.no_programs")}</div>`:m}
  `}function Bt(o,t,e,r,n){let i=L(o,t),s=o.attributes.schedule,l=o.attributes.total_duration,a=o.attributes.dry_run===!0,d=se(s,n),u=l?`${d} \u2014 ${l} min`:d,p=a?c`<span class="badge-dry-run-sm">${n("config.dry_run")}</span>`:m;return at(c`${i} ${p}`,u,()=>e(t),()=>r(t),n)}function ht(o,t,e,r,n,i,s){let l=[...o.schedule.times],a=o.zones.reduce((d,u)=>d+u.valves.reduce((p,v)=>p+(v.duration||0),0),0);return c`
    <div class="inline-form">
      <!-- Name -->
      ${Z(s("config.name"),c`<input
          class="form-input"
          .value=${o.name}
          @input=${d=>i({...o,name:d.target.value})}
        />`)}

      <!-- Schedule times (chips + time picker) -->
      ${Wt(o,i,s)}

      <!-- Per-slot valve sections -->
      ${l.length===0?c`<div class="form-hint" style="color:var(--warning-color);">
            ${s("config.no_schedule_times")}
          </div>`:c`<div class="form-label" style="margin-top:12px;">${s("config.valves_per_slot")}</div>
            ${[...l].sort().map(d=>Gt(d,o,t,e,i,s))}`}
      ${a>0?c`<div class="total-duration">
            ${s("config.total_duration",{duration:a})}
          </div>`:m}

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

      ${ae(n,()=>r(o),s)}
    </div>
  `}function Wt(o,t,e){let r=o.schedule.times??[];return Z(e("config.trigger_times"),c`<div class="schedule-chips">
      ${r.map((n,i)=>c`
          <div class="schedule-chip-wrap">
            <input
              class="schedule-chip-input"
              type="time"
              .value=${n}
              @input=${s=>{let l=r.map((a,d)=>d===i?s.target.value:a);t(Pe(o,l))}}
            />
            ${r.length>1?c`<button
                  class="chip-close"
                  @click=${()=>t(Pe(o,r.filter((s,l)=>l!==i)))}
                >
                  <ha-icon icon="mdi:close"></ha-icon>
                </button>`:m}
          </div>
        `)}
      <button
        class="supply-chip chip-add"
        @click=${()=>t(Pe(o,[...r,"12:00"]))}
      >
        + ${e("config.add_time")}
      </button>
    </div>`)}function Gt(o,t,e,r,n,i){let s=e.filter(a=>r.some(d=>d.zone_id===a.id)),l=Xt(t,o);return c`
    <div class="slot-section">
      <div class="slot-header">
        <ha-icon icon="mdi:clock-outline"></ha-icon>
        <span class="slot-time">${o}</span>
        <span class="info-sm">(${l})</span>
      </div>
      <div class="slot-body">
        ${s.length===0?c`<div class="info-sm" style="padding:4px 0;">
              ${i("config.hint_programs_prereq")}
            </div>`:s.map(a=>c`
                <div class="slot-zone-label">${a.name}</div>
                ${Yt(a.id,r,t).map(d=>Jt(d,a.id,o,t,n,i))}
              `)}
      </div>
    </div>
  `}function Yt(o,t,e){let r=t.filter(a=>a.zone_id===o),n=e.zones.find(a=>a.zone_id===o);if(!n)return r;let i=n.valves.map(a=>r.find(d=>d.id===a.valve_id)).filter(a=>!!a),s=new Set(i.map(a=>a.id)),l=r.filter(a=>!s.has(a.id));return[...i,...l]}function Jt(o,t,e,r,n,i){let s=r.zones.find(x=>x.zone_id===t),l=s?.valves.find(x=>x.valve_id===o.id),a=!!(l&&(l.times===void 0||l.times.includes(e))),d=s?.valves.findIndex(x=>x.valve_id===o.id)??-1,u=s?.valves.length??0,p=d<=0,v=d<0||d===u-1,g=()=>n(Qt(r,t,o.id,e)),_=x=>n(er(r,t,o.id,x)),$=x=>n(or(r,t,o.id,x)),ue=a&&l&&u>1?c`
          <div class="reorder-btns">
            <button class="reorder-btn" ?disabled=${p} @click=${()=>$(-1)}>
              <ha-icon icon="mdi:chevron-up"></ha-icon>
            </button>
            <button class="reorder-btn" ?disabled=${v} @click=${()=>$(1)}>
              <ha-icon icon="mdi:chevron-down"></ha-icon>
            </button>
          </div>
        `:m;return c`
    <div class="slot-valve-row ${a?"":"inactive"}">
      <label class="slot-valve-main">
        <input type="checkbox" .checked=${a} @change=${g} />
        ${ue}
        <span class="slot-valve-name">${o.name}</span>
        ${a&&l?c`<input
                class="slot-duration-input"
                type="number"
                min="1"
                .value=${String(l.duration)}
                @input=${x=>_(Number.parseInt(x.target.value)||1)}
              /><span class="info-sm">min</span>`:c`<span class="info-sm slot-disabled-hint">
              ${i("config.slot_disabled_here")}
            </span>`}
      </label>
      ${a&&l?Kt(l,t,r,n,i):m}
    </div>
  `}function Kt(o,t,e,r,n){let i=o.frequency,s=i?.type??"",l=new Date().toISOString().slice(0,10),a=p=>r(K(e,t,o.valve_id,{frequency:p})),d=s==="every_n_days"&&i?c`
          <input
            class="valve-freq-n-input"
            type="number"
            min="2"
            .value=${String(i.n??2)}
            @input=${p=>a({...i,n:Number.parseInt(p.target.value)||2})}
          />
          <span class="info-sm">j</span>
        `:m,u=s==="weekdays"&&i?c`
          <div class="valve-freq-days">
            ${["mon","tue","wed","thu","fri","sat","sun"].map(p=>{let v=i.days?.includes(p)??!1;return c`
                <label class="valve-freq-day">
                  <input
                    type="checkbox"
                    .checked=${v}
                    @change=${()=>{let g=i.days??[],_=v?g.filter($=>$!==p):[...g,p];a({...i,days:_})}}
                  />
                  ${n(`days.${p}`)}
                </label>
              `})}
          </div>
        `:m;return c`
    <div class="slot-valve-freq">
      <select
        class="valve-freq-select"
        @change=${p=>{let v=p.target.value;a(v?v==="every_n_days"?{type:"every_n_days",n:2,start_date:l}:{type:"weekdays",days:[]}:void 0)}}
      >
        <option value="" ?selected=${s===""}>${n("config.follows_program")}</option>
        <option value="every_n_days" ?selected=${s==="every_n_days"}>
          ${n("config.frequency_every_n",{n:i?.n??2})}
        </option>
        <option value="weekdays" ?selected=${s==="weekdays"}>
          ${n("config.frequency_weekdays")}
        </option>
      </select>
      ${d}${u}
    </div>
  `}function Xt(o,t){return o.zones.reduce((e,r)=>e+r.valves.filter(n=>n.times===void 0||n.times.includes(t)).length,0)}function Pe(o,t){let e=new Set(t),r=o.zones.map(n=>({...n,valves:n.valves.map(i=>{if(i.times===void 0)return i;let s=i.times.filter(l=>e.has(l));return{...i,times:s}}).filter(i=>i.times===void 0||i.times.length>0)})).filter(n=>n.valves.length>0);return{...o,schedule:{times:t},zones:r}}function Qt(o,t,e,r,n=10){let i=o.schedule.times,l=o.zones.find(p=>p.zone_id===t)?.valves.find(p=>p.valve_id===e);if(!!(l&&(l.times===void 0||l.times.includes(r)))&&l){let v=(l.times??[...i]).filter(g=>g!==r);return v.length===0?rr(o,t,e):K(o,t,e,{times:v})}if(!l)return tr(o,t,{valve_id:e,duration:n,times:[r]});let u=[...l.times??[],r];return u.length>=i.length?K(o,t,e,{times:void 0}):K(o,t,e,{times:u})}function er(o,t,e,r){return K(o,t,e,{duration:r})}function K(o,t,e,r){return{...o,zones:o.zones.map(n=>n.zone_id===t?{...n,valves:n.valves.map(i=>i.valve_id===e?{...i,...r}:i)}:n)}}function tr(o,t,e){let n=o.zones.some(i=>i.zone_id===t)?o.zones.map(i=>i.zone_id===t?{...i,valves:[...i.valves,e]}:i):[...o.zones,{zone_id:t,valves:[e]}];return{...o,zones:n}}function rr(o,t,e){let r=o.zones.map(n=>n.zone_id===t?{...n,valves:n.valves.filter(i=>i.valve_id!==e)}:n).filter(n=>n.valves.length>0);return{...o,zones:r}}function or(o,t,e,r){return{...o,zones:o.zones.map(n=>{if(n.zone_id!==t)return n;let i=n.valves.findIndex(a=>a.valve_id===e),s=i+r;if(i<0||s<0||s>=n.valves.length)return n;let l=[...n.valves];return[l[i],l[s]]=[l[s],l[i]],{...n,valves:l}})}}function ft(o,t,e){let r=[{id:"programs",label:e("config.tab_programs")},{id:"zones",label:e("config.tab_zones")}];return c`
    <div class="tabs">
      ${r.map(n=>c`
          <div
            class="tab ${o===n.id?"active":""}"
            @click=${()=>t(n.id)}
          >
            ${n.label}
          </div>
        `)}
    </div>
  `}var _t=S`
  .editor-root {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  /* Section accordion */
  .editor-section {
    border: 1px solid var(--divider-color);
    border-radius: 8px;
    overflow: hidden;
  }
  .editor-section.warn {
    border-color: var(--warning-color);
  }
  .editor-section-header {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 12px;
    cursor: pointer;
    background: var(--secondary-background-color);
    user-select: none;
  }
  .editor-section-header:hover {
    background: var(--divider-color);
  }
  .editor-section-label {
    flex: 1;
    font-size: 14px;
    font-weight: 500;
    color: var(--primary-text-color);
  }
  .editor-section-count {
    font-size: 12px;
    color: var(--secondary-text-color);
    padding: 2px 8px;
    border-radius: 10px;
    background: var(--card-background-color);
  }
  .editor-section.warn .editor-section-count {
    color: var(--warning-color);
  }
  .editor-section-body {
    padding: 12px;
    background: var(--card-background-color);
  }
  .chevron {
    --mdc-icon-size: 18px;
    color: var(--secondary-text-color);
    transition: transform 0.2s;
  }
  .chevron.open {
    transform: rotate(180deg);
  }

  /* Supply chips */
  .supply-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }
  .supply-chip {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 10px;
    border-radius: 16px;
    background: var(--secondary-background-color);
    color: var(--primary-text-color);
    font-size: 12px;
    cursor: pointer;
  }
  .supply-chip ha-icon {
    --mdc-icon-size: 14px;
  }
  .supply-chip.chip-add {
    background: transparent;
    border: 1px dashed var(--divider-color);
    color: var(--secondary-text-color);
  }
  .supply-chip:hover {
    background: var(--divider-color);
  }
  .chip-close {
    background: none;
    border: none;
    cursor: pointer;
    padding: 2px;
    display: inline-flex;
    align-items: center;
    border-radius: 50%;
    color: var(--secondary-text-color);
  }
  .chip-close ha-icon {
    --mdc-icon-size: 14px;
  }

  /* Zone row (flat list) */
  .zone-row {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 10px;
    border: 1px solid var(--divider-color);
    border-radius: 8px;
    margin-bottom: 6px;
  }
  .zone-row-name {
    flex: 1;
    font-size: 14px;
    color: var(--primary-text-color);
  }

  /* Zone card (legacy — kept for compatibility) */
  .zone-card {
    border: 1px solid var(--divider-color);
    border-radius: 8px;
    margin-bottom: 8px;
  }
  .zone-card-header {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 10px;
    cursor: pointer;
  }
  .zone-card-name {
    flex: 1;
    font-size: 14px;
    font-weight: 500;
    color: var(--primary-text-color);
  }
  .zone-card-body {
    padding: 0 10px 10px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  /* Valve row — stacked layout (icon+name on row 1, dropdowns below) */
  .valve-row-stacked {
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 8px;
    border: 1px solid var(--divider-color);
    border-radius: 6px;
  }
  .valve-row-stacked.valve-row-unassigned {
    border-color: var(--warning-color);
  }
  .valve-row-head {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .valve-icon {
    --mdc-icon-size: 16px;
    color: var(--primary-color);
    flex-shrink: 0;
  }
  .valve-row-unassigned .valve-icon {
    color: var(--warning-color);
  }
  .valve-name {
    flex: 1;
    font-size: 13px;
    color: var(--primary-text-color);
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .valve-row-field {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .valve-row-field label {
    font-size: 12px;
    color: var(--secondary-text-color);
    min-width: 56px;
  }
  .valve-row-field select {
    flex: 1;
    padding: 6px 10px;
    border: 1px solid var(--divider-color);
    border-radius: 6px;
    font-size: 13px;
    color: var(--primary-text-color);
    background: var(--card-background-color);
  }

  /* Inline name form (supply / zone edit) */
  .inline-form {
    border: 2px solid var(--primary-color);
    border-radius: 8px;
    padding: 12px;
    margin-bottom: 8px;
  }

  /* Add form (entity picker section) */
  .add-form {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .add-form ha-entity-picker {
    width: 100%;
  }

  /* Action button (delete icons) */
  .action-btn {
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
    color: var(--secondary-text-color);
    display: inline-flex;
    align-items: center;
    border-radius: 4px;
  }
  .action-btn ha-icon {
    --mdc-icon-size: 18px;
  }
  .action-btn:hover {
    color: var(--primary-text-color);
  }
  .action-btn.delete:hover {
    color: var(--error-color);
  }
  .list-item-actions {
    display: flex;
    gap: 4px;
    flex-shrink: 0;
  }

  /* Empty state */
  .empty-state {
    padding: 12px;
    color: var(--secondary-text-color);
    font-size: 13px;
    font-style: italic;
    text-align: center;
  }

  /* Info text */
  .info-sm {
    font-size: 12px;
    color: var(--secondary-text-color);
  }

  /* Form bits — buttons / hints */
  .form-row {
    margin-bottom: 8px;
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
  .form-actions {
    display: flex;
    gap: 8px;
    justify-content: flex-end;
    margin-top: 8px;
  }
  .editor-global-actions {
    margin-top: 4px;
    padding: 8px 0;
    border-top: 1px solid var(--divider-color);
  }
  .btn {
    padding: 8px 16px;
    border: none;
    border-radius: 6px;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
  }
  .btn-primary {
    background: var(--primary-color);
    color: white;
  }
  .btn-primary:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
  .btn-cancel {
    background: transparent;
    color: var(--secondary-text-color);
  }
  .add-btn {
    width: 100%;
    padding: 8px;
    border: 1px dashed var(--divider-color);
    border-radius: 8px;
    background: transparent;
    color: var(--secondary-text-color);
    font-size: 13px;
    cursor: pointer;
  }
  .add-btn:hover {
    color: var(--primary-color);
    border-color: var(--primary-color);
  }

  /* Toast */
  .toast {
    position: fixed;
    left: 50%;
    bottom: 24px;
    transform: translateX(-50%);
    background: var(--primary-text-color);
    color: var(--card-background-color);
    padding: 10px 20px;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 500;
    z-index: 1000;
    pointer-events: none;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.25);
  }
`;var M=class extends w{constructor(){super(...arguments);this._t=e=>e}set hass(e){this._hass=e,this._t=z(e.language)}setConfig(e){this._config=e}render(){return c`
      <div class="editor-root">
        <div class="empty-state">${this._t("config.editor_managed_in_card")}</div>
      </div>
    `}};M.styles=[E,_t],h([f()],M.prototype,"_config",2),h([f()],M.prototype,"_hass",2),M=h([T("wateringhub-config-editor")],M);var y=class extends w{constructor(){super(...arguments);this._activeTab="programs";this._editingZone=null;this._toast="";this._confirmMessage="";this._confirmLabel="";this._confirmAction=null;this._editingProgram=null;this._editingWaterSupply=null;this._editingValves=null;this._expandedZones=new Set;this._t=e=>e}static getConfigElement(){return document.createElement("wateringhub-config-editor")}setConfig(e){this._config=e}set hass(e){this._hass=e,this._t=z(e.language)}getCardSize(){return 5}_showToast(e){this._toast=e,setTimeout(()=>{this._toast=""},3e3)}_requestConfirm(e,r,n){this._confirmMessage=e,this._confirmLabel=r,this._confirmAction=n}_executeConfirm(){this._confirmAction?.(),this._confirmAction=null,this._confirmMessage="",this._confirmLabel=""}_cancelConfirm(){this._confirmAction=null,this._confirmMessage="",this._confirmLabel=""}_setTab(e){this._activeTab=e,this._editingZone=null,this._editingProgram=null,this._editingWaterSupply=null}_toggleZone(e){let r=new Set(this._expandedZones);r.has(e)?r.delete(e):r.add(e),this._expandedZones=r}_newZone(){this._editingZone={id:"",name:"",isNew:!0}}_editZone(e){this._editingZone={id:e.id,name:e.name,isNew:!1}}_cancelZone(){this._editingZone=null}_updateZoneForm(e){this._editingZone=e}async _saveZone(e){let r=e.isNew?pe(e.name):e.id,n=e.isNew?"create_zone":"update_zone";await this._hass.callService("wateringhub",n,{id:r,name:e.name}),this._editingZone=null,this._showToast(this._t("config.saved"))}_deleteZone(e){this._requestConfirm(this._t("config.confirm_delete_zone"),this._t("config.delete"),async()=>{try{await this._hass.callService("wateringhub","delete_zone",{id:e}),this._showToast(this._t("config.deleted"))}catch{this._showToast(this._t("config.error_water_supply_in_use"))}})}_newProgram(){this._editingProgram={id:"",name:"",schedule:{times:["06:00"]},zones:[],dry_run:!1,isNew:!0}}_editProgram(e){let r=this._hass.states[e];if(!r)return;let n=r.attributes,i=n.program_id??"",l={times:n.schedule?.times??["06:00"]},a=(n.zones??[]).map(d=>({zone_id:d.zone_id,valves:d.valves.map(u=>({valve_id:u.valve_id,duration:u.duration,frequency:u.frequency,times:u.times}))}));this._editingProgram={id:i,name:typeof n.friendly_name=="string"?n.friendly_name:i,schedule:l,zones:a,dry_run:n.dry_run===!0,isNew:!1}}_cancelProgram(){this._editingProgram=null}_updateProgramForm(e){this._editingProgram=e}async _saveProgram(e){if(e.zones.some(l=>l.valves.some(a=>a.times!==void 0&&a.times.length===0))){this._showToast(this._t("config.valve_times_required"));return}let n=e.isNew?pe(e.name):e.id,i=e.isNew?"create_program":"update_program",s=[...e.schedule.times].sort();await this._hass.callService("wateringhub",i,{id:n,name:e.name,schedule:{times:s},dry_run:e.dry_run,zones:e.zones.map(l=>({zone_id:l.zone_id,valves:l.valves.map(a=>({valve_id:a.valve_id,duration:a.duration,...a.frequency?{frequency:a.frequency}:{},...a.times&&a.times.length>0&&a.times.length<s.length?{times:[...a.times].sort()}:{}}))}))}),this._editingProgram=null,this._showToast(this._t("config.saved"))}_deleteProgram(e){this._requestConfirm(this._t("config.confirm_delete_program"),this._t("config.delete"),async()=>{let n=this._hass.states[e]?.attributes.program_id??"";await this._hass.callService("wateringhub","delete_program",{id:n}),this._showToast(this._t("config.deleted"))})}_newWaterSupply(){this._editingWaterSupply={id:"",name:"",isNew:!0}}_editWaterSupply(e){this._editingWaterSupply={...e,isNew:!1}}_cancelWaterSupply(){this._editingWaterSupply=null}_updateWaterSupplyForm(e){this._editingWaterSupply=e}async _saveWaterSupply(e){let r=e.isNew?pe(e.name):e.id,n=e.isNew?"create_water_supply":"update_water_supply";await this._hass.callService("wateringhub",n,{id:r,name:e.name}),this._editingWaterSupply=null,this._showToast(this._t("config.saved"))}_deleteWaterSupply(e){this._requestConfirm(this._t("config.confirm_delete_water_supply"),this._t("config.delete"),async()=>{try{await this._hass.callService("wateringhub","delete_water_supply",{id:e}),this._showToast(this._t("config.deleted"))}catch{this._showToast(this._t("config.error_water_supply_in_use"))}})}_startEditValves(){this._editingValves=ce(F(this._hass))}_updateValvesForm(e){this._editingValves=e}async _saveValves(){this._editingValves&&(await this._hass.callService("wateringhub","set_valves",{valves:this._editingValves.map(e=>({entity_id:e.entity_id,name:e.name,water_supply_id:e.water_supply_id,zone_id:e.zone_id}))}),this._editingValves=null,this._showToast(this._t("config.saved")))}_cancelEditValves(){this._editingValves=null}_deleteValveFromTab(e){this._requestConfirm(this._t("config.confirm_delete_valve"),this._t("config.delete"),async()=>{let r=F(this._hass).filter(n=>n.entity_id!==e).map(n=>({entity_id:n.entity_id,name:n.name,water_supply_id:n.water_supply_id,zone_id:n.zone_id}));await this._hass.callService("wateringhub","set_valves",{valves:r}),this._showToast(this._t("config.deleted"))})}_zonesTabCallbacks(){return{editingSupply:this._editingWaterSupply,onNewSupply:()=>this._newWaterSupply(),onEditSupply:e=>this._editWaterSupply(e),onSaveSupply:e=>this._saveWaterSupply(e),onCancelSupply:()=>this._cancelWaterSupply(),onUpdateSupplyForm:e=>this._updateWaterSupplyForm(e),onDeleteSupply:e=>this._deleteWaterSupply(e),editingZone:this._editingZone,onNewZone:()=>this._newZone(),onEditZone:e=>this._editZone(e),onSaveZone:e=>this._saveZone(e),onCancelZone:()=>this._cancelZone(),onUpdateZoneForm:e=>this._updateZoneForm(e),onDeleteZone:e=>this._deleteZone(e),editingValves:this._editingValves,onStartEditValves:()=>this._startEditValves(),onUpdateValves:e=>this._updateValvesForm(e),onSaveValves:()=>this._saveValves(),onCancelValves:()=>this._cancelEditValves(),onDeleteValve:e=>this._deleteValveFromTab(e),expandedZones:this._expandedZones,onToggleZone:e=>this._toggleZone(e)}}render(){return!this._hass||!this._config?c`<ha-card>${this._t("loading")}</ha-card>`:c`
      <ha-card>
        <div class="header"><span class="title">${this._t("config.title")}</span></div>
        ${ft(this._activeTab,e=>this._setTab(e),this._t)}
        ${this._activeTab==="programs"?Ve(this._hass,this._editingProgram,e=>this._editProgram(e),e=>this._deleteProgram(e),()=>this._newProgram(),e=>this._saveProgram(e),()=>this._cancelProgram(),e=>this._updateProgramForm(e),this._t):""}
        ${this._activeTab==="zones"?Ee(this._hass,this._zonesTabCallbacks(),this._t):""}
        ${this._toast?c`<div class="toast">${this._toast}</div>`:m}
        ${le(!!this._confirmAction,this._confirmMessage,this._confirmLabel,()=>this._executeConfirm(),()=>this._cancelConfirm(),this._t)}
      </ha-card>
    `}};y.styles=[E,mt],h([f()],y.prototype,"_config",2),h([f()],y.prototype,"_hass",2),h([f()],y.prototype,"_activeTab",2),h([f()],y.prototype,"_editingZone",2),h([f()],y.prototype,"_toast",2),h([f()],y.prototype,"_confirmMessage",2),h([f()],y.prototype,"_confirmLabel",2),h([f()],y.prototype,"_confirmAction",2),h([f()],y.prototype,"_editingProgram",2),h([f()],y.prototype,"_editingWaterSupply",2),h([f()],y.prototype,"_editingValves",2),h([f()],y.prototype,"_expandedZones",2),y=h([T("wateringhub-config-card")],y);globalThis.customCards=globalThis.customCards||[];globalThis.customCards.push({type:"wateringhub-config-card",name:"WateringHub Config Card",description:"Configuration card for WateringHub zones and programs"});
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
