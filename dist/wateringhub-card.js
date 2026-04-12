var bt=Object.defineProperty;var xt=Object.getOwnPropertyDescriptor;var g=(o,t,e,r)=>{for(var n=r>1?void 0:r?xt(t,e):t,i=o.length-1,s;i>=0;i--)(s=o[i])&&(n=(r?s(t,e,n):s(n))||n);return r&&n&&bt(t,e,n),n};var ne=globalThis,ie=ne.ShadowRoot&&(ne.ShadyCSS===void 0||ne.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,_e=Symbol(),qe=new WeakMap,G=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==_e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(ie&&t===void 0){let r=e!==void 0&&e.length===1;r&&(t=qe.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&qe.set(e,t))}return t}toString(){return this.cssText}},Ve=o=>new G(typeof o=="string"?o:o+"",void 0,_e),T=(o,...t)=>{let e=o.length===1?o[0]:t.reduce((r,n,i)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+o[i+1],o[0]);return new G(e,o,_e)},Ze=(o,t)=>{if(ie)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let r=document.createElement("style"),n=ne.litNonce;n!==void 0&&r.setAttribute("nonce",n),r.textContent=e.cssText,o.appendChild(r)}},ye=ie?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(let r of t.cssRules)e+=r.cssText;return Ve(e)})(o):o;var{is:$t,defineProperty:wt,getOwnPropertyDescriptor:St,getOwnPropertyNames:kt,getOwnPropertySymbols:At,getPrototypeOf:Tt}=Object,se=globalThis,Fe=se.trustedTypes,Et=Fe?Fe.emptyScript:"",Pt=se.reactiveElementPolyfillSupport,K=(o,t)=>o,X={toAttribute(o,t){switch(t){case Boolean:o=o?Et:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},ae=(o,t)=>!$t(o,t),Le={attribute:!0,type:String,converter:X,reflect:!1,useDefault:!1,hasChanged:ae};Symbol.metadata??=Symbol("metadata"),se.litPropertyMetadata??=new WeakMap;var E=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Le){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let r=Symbol(),n=this.getPropertyDescriptor(t,r,e);n!==void 0&&wt(this.prototype,t,n)}}static getPropertyDescriptor(t,e,r){let{get:n,set:i}=St(this.prototype,t)??{get(){return this[e]},set(s){this[e]=s}};return{get:n,set(s){let c=n?.call(this);i?.call(this,s),this.requestUpdate(t,c,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Le}static _$Ei(){if(this.hasOwnProperty(K("elementProperties")))return;let t=Tt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(K("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(K("properties"))){let e=this.properties,r=[...kt(e),...At(e)];for(let n of r)this.createProperty(n,e[n])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[r,n]of e)this.elementProperties.set(r,n)}this._$Eh=new Map;for(let[e,r]of this.elementProperties){let n=this._$Eu(e,r);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let r=new Set(t.flat(1/0).reverse());for(let n of r)e.unshift(ye(n))}else t!==void 0&&e.push(ye(t));return e}static _$Eu(t,e){let r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ze(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ET(t,e){let r=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,r);if(n!==void 0&&r.reflect===!0){let i=(r.converter?.toAttribute!==void 0?r.converter:X).toAttribute(e,r.type);this._$Em=t,i==null?this.removeAttribute(n):this.setAttribute(n,i),this._$Em=null}}_$AK(t,e){let r=this.constructor,n=r._$Eh.get(t);if(n!==void 0&&this._$Em!==n){let i=r.getPropertyOptions(n),s=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:X;this._$Em=n;let c=s.fromAttribute(e,i.type);this[n]=c??this._$Ej?.get(n)??c,this._$Em=null}}requestUpdate(t,e,r,n=!1,i){if(t!==void 0){let s=this.constructor;if(n===!1&&(i=this[t]),r??=s.getPropertyOptions(t),!((r.hasChanged??ae)(i,e)||r.useDefault&&r.reflect&&i===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,r))))return;this.C(t,e,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:r,reflect:n,wrapped:i},s){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??e??this[t]),i!==!0||s!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(e=void 0),this._$AL.set(t,e)),n===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[n,i]of this._$Ep)this[n]=i;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[n,i]of r){let{wrapped:s}=i,c=this[n];s!==!0||this._$AL.has(n)||c===void 0||this.C(n,void 0,i,c)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(e)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[K("elementProperties")]=new Map,E[K("finalized")]=new Map,Pt?.({ReactiveElement:E}),(se.reactiveElementVersions??=[]).push("2.1.2");var Ae=globalThis,Oe=o=>o,le=Ae.trustedTypes,He=le?le.createPolicy("lit-html",{createHTML:o=>o}):void 0,Ge="$lit$",P=`lit$${Math.random().toFixed(9).slice(2)}$`,Ke="?"+P,zt=`<${Ke}>`,V=document,W=()=>V.createComment(""),ee=o=>o===null||typeof o!="object"&&typeof o!="function",Te=Array.isArray,Rt=o=>Te(o)||typeof o?.[Symbol.iterator]=="function",be=`[ 	
\f\r]`,Q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,je=/-->/g,Ue=/>/g,I=RegExp(`>|${be}(?:([^\\s"'>=/]+)(${be}*=${be}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Be=/'/g,Ye=/"/g,Xe=/^(?:script|style|textarea|title)$/i,Ee=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),l=Ee(1),Qt=Ee(2),Wt=Ee(3),Z=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),Je=new WeakMap,q=V.createTreeWalker(V,129);function Qe(o,t){if(!Te(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return He!==void 0?He.createHTML(t):t}var Ct=(o,t)=>{let e=o.length-1,r=[],n,i=t===2?"<svg>":t===3?"<math>":"",s=Q;for(let c=0;c<e;c++){let a=o[c],d,p,u=-1,h=0;for(;h<a.length&&(s.lastIndex=h,p=s.exec(a),p!==null);)h=s.lastIndex,s===Q?p[1]==="!--"?s=je:p[1]!==void 0?s=Ue:p[2]!==void 0?(Xe.test(p[2])&&(n=RegExp("</"+p[2],"g")),s=I):p[3]!==void 0&&(s=I):s===I?p[0]===">"?(s=n??Q,u=-1):p[1]===void 0?u=-2:(u=s.lastIndex-p[2].length,d=p[1],s=p[3]===void 0?I:p[3]==='"'?Ye:Be):s===Ye||s===Be?s=I:s===je||s===Ue?s=Q:(s=I,n=void 0);let _=s===I&&o[c+1].startsWith("/>")?" ":"";i+=s===Q?a+zt:u>=0?(r.push(d),a.slice(0,u)+Ge+a.slice(u)+P+_):a+P+(u===-2?c:_)}return[Qe(o,i+(o[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]},te=class o{constructor({strings:t,_$litType$:e},r){let n;this.parts=[];let i=0,s=0,c=t.length-1,a=this.parts,[d,p]=Ct(t,e);if(this.el=o.createElement(d,r),q.currentNode=this.el.content,e===2||e===3){let u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(n=q.nextNode())!==null&&a.length<c;){if(n.nodeType===1){if(n.hasAttributes())for(let u of n.getAttributeNames())if(u.endsWith(Ge)){let h=p[s++],_=n.getAttribute(u).split(P),v=/([.?@])?(.*)/.exec(h);a.push({type:1,index:i,name:v[2],strings:_,ctor:v[1]==="."?$e:v[1]==="?"?we:v[1]==="@"?Se:O}),n.removeAttribute(u)}else u.startsWith(P)&&(a.push({type:6,index:i}),n.removeAttribute(u));if(Xe.test(n.tagName)){let u=n.textContent.split(P),h=u.length-1;if(h>0){n.textContent=le?le.emptyScript:"";for(let _=0;_<h;_++)n.append(u[_],W()),q.nextNode(),a.push({type:2,index:++i});n.append(u[h],W())}}}else if(n.nodeType===8)if(n.data===Ke)a.push({type:2,index:i});else{let u=-1;for(;(u=n.data.indexOf(P,u+1))!==-1;)a.push({type:7,index:i}),u+=P.length-1}i++}}static createElement(t,e){let r=V.createElement("template");return r.innerHTML=t,r}};function L(o,t,e=o,r){if(t===Z)return t;let n=r!==void 0?e._$Co?.[r]:e._$Cl,i=ee(t)?void 0:t._$litDirective$;return n?.constructor!==i&&(n?._$AO?.(!1),i===void 0?n=void 0:(n=new i(o),n._$AT(o,e,r)),r!==void 0?(e._$Co??=[])[r]=n:e._$Cl=n),n!==void 0&&(t=L(o,n._$AS(o,t.values),n,r)),t}var xe=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:r}=this._$AD,n=(t?.creationScope??V).importNode(e,!0);q.currentNode=n;let i=q.nextNode(),s=0,c=0,a=r[0];for(;a!==void 0;){if(s===a.index){let d;a.type===2?d=new re(i,i.nextSibling,this,t):a.type===1?d=new a.ctor(i,a.name,a.strings,this,t):a.type===6&&(d=new ke(i,this,t)),this._$AV.push(d),a=r[++c]}s!==a?.index&&(i=q.nextNode(),s++)}return q.currentNode=V,n}p(t){let e=0;for(let r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}},re=class o{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,r,n){this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=L(this,t,e),ee(t)?t===m||t==null||t===""?(this._$AH!==m&&this._$AR(),this._$AH=m):t!==this._$AH&&t!==Z&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Rt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==m&&ee(this._$AH)?this._$AA.nextSibling.data=t:this.T(V.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:r}=t,n=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=te.createElement(Qe(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===n)this._$AH.p(e);else{let i=new xe(n,this),s=i.u(this.options);i.p(e),this.T(s),this._$AH=i}}_$AC(t){let e=Je.get(t.strings);return e===void 0&&Je.set(t.strings,e=new te(t)),e}k(t){Te(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,r,n=0;for(let i of t)n===e.length?e.push(r=new o(this.O(W()),this.O(W()),this,this.options)):r=e[n],r._$AI(i),n++;n<e.length&&(this._$AR(r&&r._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let r=Oe(t).nextSibling;Oe(t).remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},O=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,n,i){this.type=1,this._$AH=m,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=m}_$AI(t,e=this,r,n){let i=this.strings,s=!1;if(i===void 0)t=L(this,t,e,0),s=!ee(t)||t!==this._$AH&&t!==Z,s&&(this._$AH=t);else{let c=t,a,d;for(t=i[0],a=0;a<i.length-1;a++)d=L(this,c[r+a],e,a),d===Z&&(d=this._$AH[a]),s||=!ee(d)||d!==this._$AH[a],d===m?t=m:t!==m&&(t+=(d??"")+i[a+1]),this._$AH[a]=d}s&&!n&&this.j(t)}j(t){t===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},$e=class extends O{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===m?void 0:t}},we=class extends O{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==m)}},Se=class extends O{constructor(t,e,r,n,i){super(t,e,r,n,i),this.type=5}_$AI(t,e=this){if((t=L(this,t,e,0)??m)===Z)return;let r=this._$AH,n=t===m&&r!==m||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,i=t!==m&&(r===m||n);n&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},ke=class{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){L(this,t)}};var Nt=Ae.litHtmlPolyfillSupport;Nt?.(te,re),(Ae.litHtmlVersions??=[]).push("3.3.2");var We=(o,t,e)=>{let r=e?.renderBefore??t,n=r._$litPart$;if(n===void 0){let i=e?.renderBefore??null;r._$litPart$=n=new re(t.insertBefore(W(),i),i,void 0,e??{})}return n._$AI(o),n};var Pe=globalThis,$=class extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=We(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Z}};$._$litElement$=!0,$.finalized=!0,Pe.litElementHydrateSupport?.({LitElement:$});var Mt=Pe.litElementPolyfillSupport;Mt?.({LitElement:$});(Pe.litElementVersions??=[]).push("4.2.2");var z=o=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(o,t)}):customElements.define(o,t)};var Dt={attribute:!0,type:String,converter:X,reflect:!1,hasChanged:ae},It=(o=Dt,t,e)=>{let{kind:r,metadata:n}=e,i=globalThis.litPropertyMetadata.get(n);if(i===void 0&&globalThis.litPropertyMetadata.set(n,i=new Map),r==="setter"&&((o=Object.create(o)).wrapped=!0),i.set(e.name,o),r==="accessor"){let{name:s}=e;return{set(c){let a=t.get.call(this);t.set.call(this,c),this.requestUpdate(s,a,o,!0,c)},init(c){return c!==void 0&&this.C(s,void 0,o,c),c}}}if(r==="setter"){let{name:s}=e;return function(c){let a=this[s];t.call(this,c),this.requestUpdate(s,a,o,!0,c)}}throw Error("Unsupported decorator location: "+r)};function et(o){return(t,e)=>typeof e=="object"?It(o,t,e):((r,n,i)=>{let s=n.hasOwnProperty(i);return n.constructor.createProperty(i,r),s?Object.getOwnPropertyDescriptor(n,i):void 0})(o,t,e)}function f(o){return et({...o,state:!0,attribute:!1})}var tt={"status.idle":"Idle","status.running":"Running","status.error":"Error","status.disabled":"Disabled",stop_all:"Stop All",next:"Next",last:"Last",no_programs:"No programs found",loading:"Loading...","time.just_now":"just now","time.minutes_ago":"{count}m ago","time.hours_ago":"{count}h ago","time.days_ago":"{count }d ago","time.today_at":"today at {time}","time.tomorrow_at":"tomorrow at {time}","time.in_days":"in {count} d","time.never":"Never","time.no_schedule":"No active program","status.running_program":"Running: {name}",stop_confirm:"Stop all watering?","recap.total_duration":"Total duration: {duration} min","days.mon":"Mon","days.tue":"Tue","days.wed":"Wed","days.thu":"Thu","days.fri":"Fri","days.sat":"Sat","days.sun":"Sun","running.progress":"Valve {done} of {total}","error.program":"Error \u2014 {name}","error.auto_stopped":"All valves have been automatically closed.","config.tab_valves":"Valves","config.tab_zones":"Zones","config.tab_programs":"Programs","config.no_valves":"No valves configured","config.no_zones":"No zones created","config.no_programs":"No programs created","config.new_zone":"New zone","config.new_program":"New program","config.name":"Name","config.save":"Save","config.cancel":"Cancel","config.delete":"Delete","config.edit":"Edit","config.confirm_delete_zone":"Delete this zone?","config.confirm_delete_program":"Delete this program?","config.trigger_time":"Trigger time","config.select_valves":"Select valves","config.select_zones":"Select zones","config.valve_entity":"Entity","config.total_duration":"Total: {duration} min","config.dry_run":"Test mode","config.dry_run_hint":"Runs the sequence without activating valves","running.dry_run":"Test mode","config.follows_program":"Every day","config.frequency_every_n":"Every {n} days","config.frequency_weekdays":"Specific days","recap.frequency_every_n":"every {n}d","config.title":"WateringHub Config","config.editor_valves":"Valves","config.add_valve":"Add valve","config.select_entity":"Switch entity","config.confirm_delete_valve":"Delete this valve?","config.saved":"Saved","config.deleted":"Deleted","skip.button":"Pause","skip.days_1":"1 day","skip.days_n":"{count} days","skip.active":"Paused {count} d","skip.cancel":"Resume","skip.toast_paused":"Program paused {count} d","skip.toast_resumed":"Program resumed","confirm.stop":"Stop"};var rt={"status.idle":"En attente","status.running":"Arrosage en cours","status.error":"Erreur","status.disabled":"D\xE9sactiv\xE9",stop_all:"Tout arr\xEAter",next:"Prochain",last:"Dernier",no_programs:"Aucun programme trouv\xE9",loading:"Chargement...","time.just_now":"\xE0 l'instant","time.minutes_ago":"il y a {count} min","time.hours_ago":"il y a {count}h","time.days_ago":"il y a {count} j","time.today_at":"aujourd'hui \xE0 {time}","time.tomorrow_at":"demain \xE0 {time}","time.in_days":"dans {count} j","time.never":"Jamais","time.no_schedule":"Aucun programme actif","status.running_program":"En cours : {name}",stop_confirm:"Arr\xEAter tout l'arrosage ?","recap.total_duration":"Dur\xE9e totale : {duration} min","days.mon":"Lun","days.tue":"Mar","days.wed":"Mer","days.thu":"Jeu","days.fri":"Ven","days.sat":"Sam","days.sun":"Dim","running.progress":"Vanne {done} sur {total}","error.program":"Erreur \u2014 {name}","error.auto_stopped":"Toutes les vannes ont \xE9t\xE9 ferm\xE9es automatiquement.","config.tab_valves":"Vannes","config.tab_zones":"Zones","config.tab_programs":"Programmes","config.no_valves":"Aucune vanne configur\xE9e","config.no_zones":"Aucune zone cr\xE9\xE9e","config.no_programs":"Aucun programme cr\xE9\xE9","config.new_zone":"Nouvelle zone","config.new_program":"Nouveau programme","config.name":"Nom","config.save":"Sauvegarder","config.cancel":"Annuler","config.delete":"Supprimer","config.edit":"Modifier","config.confirm_delete_zone":"Supprimer cette zone ?","config.confirm_delete_program":"Supprimer ce programme ?","config.trigger_time":"Heure de d\xE9clenchement","config.select_valves":"S\xE9lectionner les vannes","config.select_zones":"S\xE9lectionner les zones","config.valve_entity":"Entit\xE9","config.total_duration":"Total : {duration} min","config.dry_run":"Mode test","config.dry_run_hint":"Ex\xE9cute la s\xE9quence sans activer les vannes","running.dry_run":"Mode test","config.follows_program":"Tous les jours","config.frequency_every_n":"Tous les {n} jours","config.frequency_weekdays":"Jours sp\xE9cifiques","recap.frequency_every_n":"tous les {n}j","config.title":"WateringHub Config","config.editor_valves":"Vannes","config.add_valve":"Ajouter une vanne","config.select_entity":"Entit\xE9 switch","config.confirm_delete_valve":"Supprimer cette vanne ?","config.saved":"Enregistr\xE9","config.deleted":"Supprim\xE9","skip.button":"Pause","skip.days_1":"1 jour","skip.days_n":"{count} jours","skip.active":"En pause {count} j","skip.cancel":"Reprendre","skip.toast_paused":"Programme en pause {count} j","skip.toast_resumed":"Programme repris","confirm.stop":"Arr\xEAter"};var ze={en:tt,fr:rt};function R(o){let t=o?.toLowerCase().startsWith("fr")?"fr":"en",e=ze[t]??ze.en;return(r,n)=>{let i=e[r]??ze.en[r]??r;return n&&(i=i.replace(/\{(\w+)\}/g,(s,c)=>String(n[c]??s))),i}}var C=T`
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
`;var ot=T`
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
`;function de(o){return Object.keys(o.states).filter(t=>t.startsWith("switch.wateringhub_"))}function H(o,t){return typeof o?.attributes.friendly_name=="string"?o.attributes.friendly_name:t}function pe(o){return o.states["sensor.wateringhub_status"]?.state??"idle"}function nt(o){let t=o.states["sensor.wateringhub_status"];if(t?.state!=="error")return null;let e=t.attributes,r=e.current_program,n=r?o.states[`switch.wateringhub_${r}`]:void 0;return{programName:H(n,r??""),errorMessage:e.error_message??""}}function it(o){let t=o.states["sensor.wateringhub_status"];if(t?.state!=="running")return null;let e=t.attributes,r=e.current_valve_start,n=e.current_valve_duration??0,i=e.valves_done??0,s=e.valves_total??1,c=r?Math.max(0,(Date.now()-new Date(r).getTime())/1e3):0,a=Math.max(0,n-c),d=n>0?Math.min(100,c/n*100):0,p=(i+d/100)/s*100,u=(i+1)/s*100,h=Array.isArray(e.valves_sequence)?e.valves_sequence:[],_=h.filter(y=>y.status==="pending").reduce((y,b)=>y+b.duration,0),v=a+_,x=h.length>0?h.reduce((y,b)=>y+b.duration,0):n*s,fe=h.filter(y=>y.status==="done").reduce((y,b)=>y+b.duration,0)+c;return{programName:e.current_program??"",zoneName:e.current_zone_name??"",valveName:e.current_valve_name??"",valveStart:r??"",valveDuration:n,valvesDone:i,valvesTotal:s,progressPercent:e.progress_percent??0,remaining:a,totalRemaining:v,totalDuration:x,totalElapsed:fe,valvePercent:d,finePercent:p,globalEndPercent:u,valveSequence:h,dryRun:e.dry_run===!0}}function Re(o){if(o<=0)return"0:00";let t=Math.floor(o/3600),e=Math.floor(o%3600/60),r=Math.floor(o%60);return t>0?`${t}:${e.toString().padStart(2,"0")}:${r.toString().padStart(2,"0")}`:`${e}:${r.toString().padStart(2,"0")}`}function ue(o,t){return o?o.time:""}function st(o){return!o||o.state==="None"||o.state==="unknown"||o.state==="unavailable"}function Ce(o,t,e,r){let n=o.states[t];if(st(n))return e("time.never");let i=new Date(n.state);if(Number.isNaN(i.getTime()))return n.state;let s=new Date,c=s.getTime()-i.getTime();if(c<0){let u=new Date(s.getFullYear(),s.getMonth(),s.getDate()),h=new Date(i.getFullYear(),i.getMonth(),i.getDate()),_=Math.round((h.getTime()-u.getTime())/(1e3*60*60*24)),v=i.toLocaleTimeString(r??[],{hour:"2-digit",minute:"2-digit"});return _===0?e("time.today_at",{time:v}):_===1?e("time.tomorrow_at",{time:v}):e("time.in_days",{count:_})}let a=Math.floor(c/(1e3*60));if(a<1)return e("time.just_now");if(a<60)return e("time.minutes_ago",{count:a});let d=Math.floor(a/60);if(d<24)return e("time.hours_ago",{count:d});let p=Math.floor(d/24);return e("time.days_ago",{count:p})}function at(o,t,e){let r=o.states["sensor.wateringhub_next_run"];return st(r)?t("time.no_schedule"):Ce(o,"sensor.wateringhub_next_run",t,e)}function lt(o){let t=o.attributes.skip_until;if(typeof t!="string")return null;let e=new Date(t+"T23:59:59");if(Number.isNaN(e.getTime()))return null;let r=new Date;if(r>e)return null;let n=new Date(r.getFullYear(),r.getMonth(),r.getDate()),i=new Date(e.getFullYear(),e.getMonth(),e.getDate());return{isSkipped:!0,daysRemaining:Math.max(1,Math.ceil((i.getTime()-n.getTime())/(1e3*60*60*24))),skipUntil:t}}function ct(o,t){return t("skip.active",{count:o})}function j(o,t){return l`<span class="badge-sm badge-${o}">${t}</span>`}function oe(o,t,e="primary"){return l`<button class="btn btn-${e}" @click=${t}>${o}</button>`}function me(o,t,e){return l`
    <button
      class=${e?.className??"action-btn"}
      @click=${t}
      title=${e?.title??""}
    >
      <ha-icon icon=${o}></ha-icon>
    </button>
  `}function U(o,t){return l`<button class="add-btn" @click=${t}>${o}</button>`}function ge(o,t,e){return l`
    <div class="form-actions">
      ${oe(e("config.cancel"),o,"cancel")}
      ${oe(e("config.save"),t,"primary")}
    </div>
  `}function N(o,t){return l`
    <div class="form-row">
      <label class="form-label">${o}</label>
      ${t}
    </div>
  `}function dt(o,t){return l`
    <div class="list-item">
      <div class="list-item-header">
        <div>
          <div class="list-item-name">${o}</div>
          <div class="list-item-sub">${t}</div>
        </div>
      </div>
    </div>
  `}function he(o,t,e,r,n){return l`
    <div class="list-item">
      <div class="list-item-header">
        <div>
          <div class="list-item-name">${o}</div>
          <div class="list-item-sub">${t}</div>
        </div>
        <div class="list-item-actions">
          ${me("mdi:pencil",e,{title:n("config.edit")})}
          ${me("mdi:delete",r,{title:n("config.delete"),className:"action-btn delete"})}
        </div>
      </div>
    </div>
  `}function B(o,t,e,r,n){return l`
    <ha-dialog .open=${o} @closed=${r} .heading=${t}>
      <mwc-button slot="secondaryAction" @click=${r}>
        ${n("config.cancel")}
      </mwc-button>
      <mwc-button slot="primaryAction" @click=${e}>
        ${n("config.delete")}
      </mwc-button>
    </ha-dialog>
  `}function pt(o){return l`
    <div class="header">
      <span class="title">${o}</span>
    </div>
  `}function Zt(o,t,e,r,n,i,s,c){if(!e)return l`
      <div class="program-status">${j("disabled",n("status.disabled"))}</div>
    `;if(pe(o)==="running"){let h=o.states["sensor.wateringhub_status"]?.attributes.current_program,_=t.entity_id?.replace("switch.wateringhub_","");return l`
      <div class="program-status">
        ${h===_?j("running",n("status.running")):m}
      </div>
    `}let d=lt(t),p=r?Lt(s,n):m;return l`
    <div class="program-status">
      ${d?l`
            ${j("skipped",ct(d.daysRemaining,n))}
            <button class="skip-cancel-btn" @click=${c} title=${n("skip.cancel")}>
              <ha-icon icon="mdi:close-circle-outline"></ha-icon>
            </button>
          `:l`
            ${j("idle",n("status.idle"))}
            <div class="skip-dropdown-wrapper">
              <button class="skip-btn" @click=${i} title=${n("skip.button")}>
                <ha-icon icon="mdi:pause-circle-outline"></ha-icon>
              </button>
              ${p}
            </div>
          `}
      <span class="info-sm">${n("next")}: ${at(o,n,o.language)}</span>
    </div>
  `}function ut(o,t){let e=nt(o);return e?l`
    <div class="error-view">
      <div class="error-title">
        <ha-icon icon="mdi:alert-circle"></ha-icon>
        ${t("error.program",{name:e.programName})}
      </div>
      ${e.errorMessage?l`<div class="error-message">${e.errorMessage}</div>`:m}
      <div class="error-auto-stopped">${t("error.auto_stopped")}</div>
    </div>
  `:l``}function mt(o,t,e){let r=it(o);if(!r)return l``;let n=2*Math.PI*30,i=r.totalDuration>0?r.totalElapsed/r.totalDuration:0,s=n*(1-Math.min(1,i));return l`
    <div class="running-block">
      <button class="running-stop-btn" @click=${t}>${e("stop_all")}</button>
      ${r.dryRun?j("dry-run",e("running.dry_run")):m}

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
            <span class="cp-time">${Re(r.totalRemaining)}</span>
          </div>
        </div>
        <div class="global-info">
          <div class="global-program-name">
            ${H(o.states[`switch.wateringhub_${r.programName}`],r.programName)}
          </div>
          <div class="global-sub">
            ${e("running.progress",{done:r.valvesDone+1,total:r.valvesTotal})}
          </div>
        </div>
      </div>

      ${r.valveSequence.length>0?Ft(r.valveSequence,r.remaining):m}
    </div>
  `}function Ft(o,t){let e=[];for(let c of o){let a=e[e.length-1];a?.zoneName===c.zone_name?a.valves.push(c):e.push({zoneName:c.zone_name,valves:[c]})}let r=l`<svg viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z"
    />
  </svg>`,n=l`<svg viewBox="0 0 24 24">
    <circle fill="currentColor" cx="12" cy="12" r="6" />
  </svg>`,i=l`<svg viewBox="0 0 24 24">
    <circle fill="none" stroke="currentColor" stroke-width="2" cx="12" cy="12" r="6" />
  </svg>`,s={done:r,running:n,pending:i};return l`
    <div class="valve-timeline">
      ${e.map(c=>l`
          <div class="tl-zone">${c.zoneName}</div>
          ${c.valves.map(a=>{let d=Math.ceil(a.duration/60);return l`
              <div class="tl-step tl-${a.status}">
                <span class="tl-dot">${s[a.status]}</span>
                <span class="tl-step-name">${a.valve_name}</span>
                <span class="tl-step-time">
                  ${a.status==="running"?Re(t):`${d} min`}
                </span>
              </div>
            `})}
        `)}
    </div>
  `}function gt(o,t,e,r,n,i,s,c,a,d){return t.length===0?l`<div class="empty-state">${d("no_programs")}</div>`:l`${t.map(p=>{let u=o.states[p];if(!u)return m;let h=u.state==="on",_=e===p,v=H(u,p);return l`
      <div class="program-wrapper">
        <div class="program">
          <div class="program-header" @click=${()=>n(p)}>
            <ha-icon class="chevron ${_?"open":""}" icon="mdi:chevron-down"></ha-icon>
            ${h?l`<div class="active-dot"></div>`:m}
            <span class="program-name ${h?"active":""}">${v}</span>
          </div>
          <ha-switch .checked=${h} @change=${()=>i(p)}></ha-switch>
        </div>
        ${Zt(o,u,h,r===p,d,()=>s(p),x=>c(p,x),()=>a(p))}
        ${Ot(o,u.attributes,_,d)}
      </div>
    `})}`}function Lt(o,t){return l`
    <div class="skip-dropdown">
      ${[1,2,3,5].map(r=>l`
          <button class="skip-dropdown-option" @click=${()=>o(r)}>
            ${r===1?t("skip.days_1"):t("skip.days_n",{count:r})}
          </button>
        `)}
    </div>
  `}function Ot(o,t,e,r){let n=t.schedule,i=t.zones??[],s=t.total_duration;return l`
    <div class="program-recap ${e?"open":""}">
      ${n?l`<div class="recap-schedule">
            <ha-icon icon="mdi:calendar-clock"></ha-icon>
            ${ue(n,r)}
          </div>`:m}
      <div class="recap-schedule">
        <ha-icon icon="mdi:history"></ha-icon>
        ${r("last")}: ${Ce(o,"sensor.wateringhub_last_run",r,o.language)}
      </div>
      ${i.map(c=>l`
          <div class="recap-zone">
            <span class="recap-zone-badge">${c.zone_name}</span>
          </div>
          ${c.valves.map(a=>l`
              <div class="recap-valve">
                <ha-icon icon="mdi:water"></ha-icon>
                ${a.valve_name} — ${a.duration}
                min${Ht(a.frequency,r)}
              </div>
            `)}
        `)}
      ${s?l`<div class="recap-total">
            <ha-icon icon="mdi:timer-outline"></ha-icon>
            ${r("recap.total_duration",{duration:s})}
          </div>`:m}
    </div>
  `}function Ht(o,t){return o?o.type==="every_n_days"?` \xB7 ${t("recap.frequency_every_n",{n:o.n??2})}`:o.type==="weekdays"&&o.days?.length?` \xB7 ${o.days.map(r=>t(`days.${r}`)).join(", ")}`:"":""}var F=class extends ${constructor(){super(...arguments);this._t=e=>e}set hass(e){this._hass=e,this._t=R(e.language)}setConfig(e){this._config=e}_titleChanged(e){let r=e.target.value;this._config={...this._config,title:r},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config}}))}render(){return l`
      ${N(this._t("config.name"),l`<input
          class="form-input"
          .value=${this._config?.title??""}
          @input=${this._titleChanged}
        />`)}
    `}};F.styles=[C],g([f()],F.prototype,"_config",2),g([f()],F.prototype,"_hass",2),F=g([z("wateringhub-card-editor")],F);var w=class extends ${constructor(){super(...arguments);this._programEntities=[];this._expandedProgram=null;this._skipDropdownOpen=null;this._toast="";this._confirmMessage="";this._confirmAction=null;this._tick=0;this._t=e=>e;this._timerInterval=null;this._unsubEvents=null;this._boundCloseDropdown=this._closeSkipDropdown.bind(this)}static getConfigElement(){return document.createElement("wateringhub-card-editor")}setConfig(e){this._config=e}set hass(e){let r=this._hass;this._hass=e,this._t=R(e.language),r?.states!==e.states&&(this._programEntities=de(e)),this._updateTimer(pe(e)),this._subscribeEvents()}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._boundCloseDropdown)}disconnectedCallback(){super.disconnectedCallback(),this._clearTimer(),this._unsubscribeEvents(),document.removeEventListener("click",this._boundCloseDropdown)}_subscribeEvents(){this._unsubEvents||!this._hass?.connection||this._hass.connection.subscribeEvents(()=>{this._tick++},"wateringhub_event").then(e=>{this._unsubEvents=e})}_unsubscribeEvents(){this._unsubEvents&&(this._unsubEvents(),this._unsubEvents=null)}_updateTimer(e){e==="running"&&!this._timerInterval?this._timerInterval=setInterval(()=>{this._tick++},1e3):e!=="running"&&this._timerInterval&&this._clearTimer()}_clearTimer(){this._timerInterval&&(clearInterval(this._timerInterval),this._timerInterval=null)}getCardSize(){return 3}_toggleExpand(e){this._expandedProgram=this._expandedProgram===e?null:e}_toggleProgram(e){let r=this._hass.states[e];if(!r)return;let n=r.state==="on"?"turn_off":"turn_on";this._hass.callService("switch",n,{entity_id:e})}_requestConfirm(e,r){this._confirmMessage=e,this._confirmAction=r}_executeConfirm(){this._confirmAction?.(),this._confirmAction=null,this._confirmMessage=""}_cancelConfirm(){this._confirmAction=null,this._confirmMessage=""}_stopAll(){this._requestConfirm(this._t("stop_confirm"),()=>{this._hass.callService("wateringhub","stop_all",{})})}_toggleSkipDropdown(e){this._skipDropdownOpen=this._skipDropdownOpen===e?null:e}_showToast(e){this._toast=e,setTimeout(()=>{this._toast=""},3e3)}_handleSkip(e,r){let n=e.replace("switch.wateringhub_","");this._hass.callService("wateringhub","skip_program",{id:n,days:r}),this._skipDropdownOpen=null,this._showToast(this._t("skip.toast_paused",{count:r}))}_handleCancelSkip(e){let r=e.replace("switch.wateringhub_","");this._hass.callService("wateringhub","skip_program",{id:r,days:0}),this._showToast(this._t("skip.toast_resumed"))}_closeSkipDropdown(e){if(!this._skipDropdownOpen)return;e.composedPath().some(i=>i instanceof HTMLElement&&i.classList?.contains("skip-dropdown-wrapper"))||(this._skipDropdownOpen=null)}render(){if(!this._hass||!this._config)return l`<ha-card>${this._t("loading")}</ha-card>`;let e=this._config.title??"WateringHub";return l`
      <ha-card>
        ${pt(e)} ${ut(this._hass,this._t)}
        ${mt(this._hass,()=>this._stopAll(),this._t)}
        ${gt(this._hass,this._programEntities,this._expandedProgram,this._skipDropdownOpen,r=>this._toggleExpand(r),r=>this._toggleProgram(r),r=>this._toggleSkipDropdown(r),(r,n)=>this._handleSkip(r,n),r=>this._handleCancelSkip(r),this._t)}
        ${this._toast?l`<div class="toast">${this._toast}</div>`:m}
        ${B(!!this._confirmAction,this._confirmMessage,()=>this._executeConfirm(),()=>this._cancelConfirm(),this._t)}
      </ha-card>
    `}};w.styles=[C,ot],g([f()],w.prototype,"_config",2),g([f()],w.prototype,"_hass",2),g([f()],w.prototype,"_programEntities",2),g([f()],w.prototype,"_expandedProgram",2),g([f()],w.prototype,"_skipDropdownOpen",2),g([f()],w.prototype,"_toast",2),g([f()],w.prototype,"_confirmMessage",2),g([f()],w.prototype,"_confirmAction",2),g([f()],w.prototype,"_tick",2),w=g([z("wateringhub-card")],w);globalThis.customCards=globalThis.customCards||[];globalThis.customCards.push({type:"wateringhub-card",name:"WateringHub Card",description:"Watering management card for WateringHub"});var ht=T`
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
    font-size: 11px;
    color: var(--secondary-text-color);
    margin-top: 4px;
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
`;function M(o){return o.states["sensor.wateringhub_status"]?.attributes.available_valves??[]}function ve(o){return o.states["sensor.wateringhub_status"]?.attributes.zones??[]}function Ne(o){return o.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"_").replace(/^_|_$/g,"")}function Me(o,t){let e=M(o);return e.length===0?l`<div class="empty-state">${t("config.no_valves")}</div>`:l`
    ${e.map(r=>dt(r.name,`${t("config.valve_entity")}: ${r.entity_id}`))}
  `}function De(o,t,e,r,n,i,s,c,a){let d=ve(o),p=M(o);return l`
    ${d.map(u=>t?.id===u.id?vt(t,p,i,s,c,a):jt(u,p,e,r,a))}
    ${t?.isNew?vt(t,p,i,s,c,a):m}
    ${t?m:U(`+ ${a("config.new_zone")}`,n)}
    ${d.length===0&&!t?l`<div class="empty-state">${a("config.no_zones")}</div>`:m}
  `}function jt(o,t,e,r,n){let i=o.valves.map(s=>t.find(c=>c.id===s)?.name??s).join(", ");return he(o.name,i,()=>e(o),()=>r(o.id),n)}function vt(o,t,e,r,n,i){return l`
    <div class="inline-form">
      ${N(i("config.name"),l`<input
          class="form-input"
          .value=${o.name}
          @input=${s=>n({...o,name:s.target.value})}
        />`)}
      ${N(i("config.select_valves"),l`<div class="checkbox-list">
          ${t.map(s=>{let c=o.valves.includes(s.id);return l`
              <label class="checkbox-item">
                <input
                  type="checkbox"
                  .checked=${c}
                  @change=${()=>{let a=c?o.valves.filter(d=>d!==s.id):[...o.valves,s.id];n({...o,valves:a})}}
                />
                ${s.name}
              </label>
            `})}
        </div>`)}
      ${ge(r,()=>e(o),i)}
    </div>
  `}function Ie(o,t,e,r,n,i,s,c,a){let d=de(o),p=ve(o),u=M(o);return l`
    ${d.map(h=>{let _=o.states[h];if(!_)return m;let v=_.attributes.program_id??"";return t?.id===v?ft(t,p,u,i,s,c,a):Ut(_,h,e,r,a)})}
    ${t?.isNew?ft(t,p,u,i,s,c,a):m}
    ${t?m:U(`+ ${a("config.new_program")}`,n)}
    ${d.length===0&&!t?l`<div class="empty-state">${a("config.no_programs")}</div>`:m}
  `}function Ut(o,t,e,r,n){let i=H(o,t),s=o.attributes.schedule,c=o.attributes.total_duration,a=o.attributes.dry_run===!0,d=ue(s,n),p=c?`${d} \u2014 ${c} min`:d,u=a?l`<span class="badge-dry-run-sm">${n("config.dry_run")}</span>`:m;return he(l`${i} ${u}`,p,()=>e(t),()=>r(t),n)}function ft(o,t,e,r,n,i,s){let c=o.zones.reduce((a,d)=>a+d.valves.reduce((p,u)=>p+(u.duration||0),0),0);return l`
    <div class="inline-form">
      <!-- Name -->
      ${N(s("config.name"),l`<input
          class="form-input"
          .value=${o.name}
          @input=${a=>i({...o,name:a.target.value})}
        />`)}

      <!-- Schedule — time only -->
      ${N(s("config.trigger_time"),l`<input
          class="form-input"
          type="time"
          .value=${o.schedule.time}
          @input=${a=>i({...o,schedule:{time:a.target.value}})}
        />`)}

      <!-- Zones + valves with durations -->
      <div class="form-row">
        <label class="form-label">${s("config.select_zones")}</label>
        ${[...o.zones.map(a=>t.find(d=>d.id===a.zone_id)),...t.filter(a=>!o.zones.some(d=>d.zone_id===a.id))].filter(a=>!!a).map(a=>{let d=o.zones.findIndex(v=>v.zone_id===a.id),p=d>=0?o.zones[d]:null,u=!!p,h=v=>{let x=[...o.zones],Y=d+v;[x[d],x[Y]]=[x[Y],x[d]],i({...o,zones:x})},_=u&&o.zones.length>1?l`
                    <div class="reorder-btns">
                      <button
                        class="reorder-btn"
                        ?disabled=${d===0}
                        @click=${()=>h(-1)}
                      >
                        <ha-icon icon="mdi:chevron-up"></ha-icon>
                      </button>
                      <button
                        class="reorder-btn"
                        ?disabled=${d===o.zones.length-1}
                        @click=${()=>h(1)}
                      >
                        <ha-icon icon="mdi:chevron-down"></ha-icon>
                      </button>
                    </div>
                  `:m;return l`
              <div class="form-zone-section">
                <div class="zone-header-row">
                  <label class="checkbox-item">
                    <input
                      type="checkbox"
                      .checked=${u}
                      @change=${()=>{let v=u?o.zones.filter(x=>x.zone_id!==a.id):[...o.zones,{zone_id:a.id,valves:a.valves.map(x=>({valve_id:x,duration:10}))}];i({...o,zones:v})}}
                    />
                    <span class="form-zone-name">${a.name}</span>
                  </label>
                  ${_}
                </div>
                ${u&&p?p.valves.map((v,x)=>Bt(v,x,p,a,o,e,i,s)):m}
              </div>
            `})}
      </div>

      ${c>0?l`<div class="total-duration">
            ${s("config.total_duration",{duration:c})}
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

      ${ge(n,()=>r(o),s)}
    </div>
  `}function Bt(o,t,e,r,n,i,s,c){let a=i.find(y=>y.id===o.valve_id)?.name??o.valve_id,d=o.frequency,p=d?.type??"",u=new Date().toISOString().slice(0,10),h=t===0,_=t===e.valves.length-1,v=y=>{let b=e.valves.map(k=>k.valve_id===o.valve_id?{...k,...y}:k),D=n.zones.map(k=>k.zone_id===r.id?{...k,valves:b}:k);s({...n,zones:D})},x=y=>{let b=[...e.valves],D=t+y;[b[t],b[D]]=[b[D],b[t]];let k=n.zones.map(J=>J.zone_id===r.id?{...J,valves:b}:J);s({...n,zones:k})},Y=p==="every_n_days"&&d?l`
          <input
            class="valve-freq-n-input"
            type="number"
            min="2"
            .value=${String(d.n??2)}
            @input=${y=>v({frequency:{...d,n:Number.parseInt(y.target.value)||2}})}
          />
          <span>j</span>
        `:m,fe=p==="weekdays"&&d?l`
          <div class="valve-freq-days">
            ${["mon","tue","wed","thu","fri","sat","sun"].map(y=>{let b=d.days?.includes(y)??!1;return l`
                <label class="valve-freq-day">
                  <input
                    type="checkbox"
                    .checked=${b}
                    @change=${()=>{let D=d.days??[],k=b?D.filter(J=>J!==y):[...D,y];v({frequency:{...d,days:k}})}}
                  />
                  ${c(`days.${y}`)}
                </label>
              `})}
          </div>
        `:m;return l`
    <div class="valve-config-block">
      <div class="valve-duration-row">
        <div class="reorder-btns">
          <button class="reorder-btn" ?disabled=${h} @click=${()=>x(-1)}>
            <ha-icon icon="mdi:chevron-up"></ha-icon>
          </button>
          <button class="reorder-btn" ?disabled=${_} @click=${()=>x(1)}>
            <ha-icon icon="mdi:chevron-down"></ha-icon>
          </button>
        </div>
        <label>${a}</label>
        <input
          class="valve-duration-input"
          type="number"
          min="1"
          .value=${String(o.duration)}
          @input=${y=>v({duration:Number.parseInt(y.target.value)||1})}
        />
        <span>min</span>
      </div>
      <div class="valve-frequency-row">
        <select
          class="valve-freq-select"
          .value=${p}
          @change=${y=>{let b=y.target.value;v(b?b==="every_n_days"?{frequency:{type:"every_n_days",n:2,start_date:u}}:{frequency:{type:"weekdays",days:[]}}:{frequency:void 0})}}
        >
          <option value="">${c("config.follows_program")}</option>
          <option value="every_n_days">
            ${c("config.frequency_every_n",{n:d?.n??2})}
          </option>
          <option value="weekdays">${c("config.frequency_weekdays")}</option>
        </select>
        ${Y} ${fe}
      </div>
    </div>
  `}function _t(o,t,e){let r=[{id:"programs",label:e("config.tab_programs")},{id:"zones",label:e("config.tab_zones")},{id:"valves",label:e("config.tab_valves")}];return l`
    <div class="tabs">
      ${r.map(n=>l`
          <div
            class="tab ${o===n.id?"active":""}"
            @click=${()=>t(n.id)}
          >
            ${n.label}
          </div>
        `)}
    </div>
  `}var yt=T`
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
`;var A=class extends ${constructor(){super(...arguments);this._adding=!1;this._newEntityId="";this._confirmMessage="";this._confirmAction=null;this._t=e=>e}set hass(e){this._hass=e,this._t=R(e.language)}setConfig(e){this._config=e}_getValves(){return this._hass?M(this._hass):[]}async _setValves(e){await this._hass.callService("wateringhub","set_valves",{valves:e})}_requestConfirm(e,r){this._confirmMessage=e,this._confirmAction=r}_executeConfirm(){this._confirmAction?.(),this._confirmAction=null,this._confirmMessage=""}_cancelConfirm(){this._confirmAction=null,this._confirmMessage=""}_deleteValve(e){this._requestConfirm(this._t("config.confirm_delete_valve"),async()=>{let r=this._getValves().filter(n=>n.entity_id!==e).map(n=>({entity_id:n.entity_id,name:n.name}));await this._setValves(r)})}_startAdd(){this._adding=!0,this._newEntityId=""}_onEntityPicked(e){this._newEntityId=e.detail.value}_getFriendlyName(e){let n=this._hass?.states[e]?.attributes.friendly_name;return typeof n=="string"?n:e}async _confirmAdd(){if(!this._newEntityId)return;let e=this._getFriendlyName(this._newEntityId),r=[...this._getValves().map(n=>({entity_id:n.entity_id,name:n.name})),{entity_id:this._newEntityId,name:e}];await this._setValves(r),this._adding=!1,this._newEntityId=""}_cancelAdd(){this._adding=!1}render(){let e=this._getValves();return l`
      <div class="editor-section">
        <span class="editor-label">${this._t("config.editor_valves")}</span>

        ${e.length===0&&!this._adding?l`<div class="empty-state">${this._t("config.no_valves")}</div>`:m}
        ${e.map(r=>l`
            <div class="valve-item">
              <div class="valve-item-info">
                <div class="valve-item-name">${r.name}</div>
                <div class="valve-item-entity">${r.entity_id}</div>
              </div>
              ${me("mdi:delete",()=>this._deleteValve(r.entity_id),{title:this._t("config.delete"),className:"action-btn delete"})}
            </div>
          `)}
        ${this._adding?l`
              <div class="add-form">
                <ha-entity-picker
                  .hass=${this._hass}
                  .includeDomains=${["switch"]}
                  .value=${this._newEntityId}
                  @value-changed=${this._onEntityPicked}
                  allow-custom-entity
                ></ha-entity-picker>
                <div class="form-actions">
                  ${oe(this._t("config.cancel"),()=>this._cancelAdd(),"cancel")}
                  ${oe(this._t("config.save"),()=>this._confirmAdd(),"primary")}
                </div>
              </div>
            `:U(`+ ${this._t("config.add_valve")}`,()=>this._startAdd())}
        ${B(!!this._confirmAction,this._confirmMessage,()=>this._executeConfirm(),()=>this._cancelConfirm(),this._t)}
      </div>
    `}};A.styles=[C,yt],g([f()],A.prototype,"_config",2),g([f()],A.prototype,"_hass",2),g([f()],A.prototype,"_adding",2),g([f()],A.prototype,"_newEntityId",2),g([f()],A.prototype,"_confirmMessage",2),g([f()],A.prototype,"_confirmAction",2),A=g([z("wateringhub-config-editor")],A);var S=class extends ${constructor(){super(...arguments);this._activeTab="programs";this._editingZone=null;this._toast="";this._confirmMessage="";this._confirmAction=null;this._editingProgram=null;this._t=e=>e}static getConfigElement(){return document.createElement("wateringhub-config-editor")}setConfig(e){this._config=e}set hass(e){this._hass=e,this._t=R(e.language)}getCardSize(){return 5}_showToast(e){this._toast=e,setTimeout(()=>{this._toast=""},3e3)}_requestConfirm(e,r){this._confirmMessage=e,this._confirmAction=r}_executeConfirm(){this._confirmAction?.(),this._confirmAction=null,this._confirmMessage=""}_cancelConfirm(){this._confirmAction=null,this._confirmMessage=""}_setTab(e){this._activeTab=e,this._editingZone=null,this._editingProgram=null}_newZone(){this._editingZone={id:"",name:"",valves:[],isNew:!0}}_editZone(e){this._editingZone={id:e.id,name:e.name,valves:[...e.valves],isNew:!1}}_cancelZone(){this._editingZone=null}_updateZoneForm(e){this._editingZone=e}async _saveZone(e){let r=e.isNew?Ne(e.name):e.id,n=e.isNew?"create_zone":"update_zone";await this._hass.callService("wateringhub",n,{id:r,name:e.name,valves:e.valves}),this._editingZone=null,this._showToast(this._t("config.saved"))}_deleteZone(e){this._requestConfirm(this._t("config.confirm_delete_zone"),async()=>{await this._hass.callService("wateringhub","delete_zone",{id:e}),this._showToast(this._t("config.deleted"))})}_newProgram(){this._editingProgram={id:"",name:"",schedule:{time:"06:00"},zones:[],dry_run:!1,isNew:!0}}_editProgram(e){let r=this._hass.states[e];if(!r)return;let n=r.attributes,i=n.program_id??"",s=n.schedule??{time:"06:00"},c=(n.zones??[]).map(a=>({zone_id:a.zone_id,valves:a.valves.map(d=>({valve_id:d.valve_id,duration:d.duration,frequency:d.frequency}))}));this._editingProgram={id:i,name:typeof n.friendly_name=="string"?n.friendly_name:i,schedule:s,zones:c,dry_run:n.dry_run===!0,isNew:!1}}_cancelProgram(){this._editingProgram=null}_updateProgramForm(e){this._editingProgram=e}async _saveProgram(e){let r=e.isNew?Ne(e.name):e.id,n=e.isNew?"create_program":"update_program";await this._hass.callService("wateringhub",n,{id:r,name:e.name,schedule:e.schedule,dry_run:e.dry_run,zones:e.zones.map(i=>({zone_id:i.zone_id,valves:i.valves.map(s=>({valve_id:s.valve_id,duration:s.duration,...s.frequency?{frequency:s.frequency}:{}}))}))}),this._editingProgram=null,this._showToast(this._t("config.saved"))}_deleteProgram(e){this._requestConfirm(this._t("config.confirm_delete_program"),async()=>{let n=this._hass.states[e]?.attributes.program_id??"";await this._hass.callService("wateringhub","delete_program",{id:n}),this._showToast(this._t("config.deleted"))})}render(){return!this._hass||!this._config?l`<ha-card>${this._t("loading")}</ha-card>`:l`
      <ha-card>
        <div class="header"><span class="title">${this._t("config.title")}</span></div>
        ${_t(this._activeTab,e=>this._setTab(e),this._t)}
        ${this._activeTab==="valves"?Me(this._hass,this._t):""}
        ${this._activeTab==="zones"?De(this._hass,this._editingZone,e=>this._editZone(e),e=>this._deleteZone(e),()=>this._newZone(),e=>this._saveZone(e),()=>this._cancelZone(),e=>this._updateZoneForm(e),this._t):""}
        ${this._activeTab==="programs"?Ie(this._hass,this._editingProgram,e=>this._editProgram(e),e=>this._deleteProgram(e),()=>this._newProgram(),e=>this._saveProgram(e),()=>this._cancelProgram(),e=>this._updateProgramForm(e),this._t):""}
        ${this._toast?l`<div class="toast">${this._toast}</div>`:m}
        ${B(!!this._confirmAction,this._confirmMessage,()=>this._executeConfirm(),()=>this._cancelConfirm(),this._t)}
      </ha-card>
    `}};S.styles=[C,ht],g([f()],S.prototype,"_config",2),g([f()],S.prototype,"_hass",2),g([f()],S.prototype,"_activeTab",2),g([f()],S.prototype,"_editingZone",2),g([f()],S.prototype,"_toast",2),g([f()],S.prototype,"_confirmMessage",2),g([f()],S.prototype,"_confirmAction",2),g([f()],S.prototype,"_editingProgram",2),S=g([z("wateringhub-config-card")],S);globalThis.customCards=globalThis.customCards||[];globalThis.customCards.push({type:"wateringhub-config-card",name:"WateringHub Config Card",description:"Configuration card for WateringHub zones and programs"});
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
