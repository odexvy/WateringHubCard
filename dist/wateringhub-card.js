var zt=Object.defineProperty;var Pt=Object.getOwnPropertyDescriptor;var v=(n,t,e,r)=>{for(var i=r>1?void 0:r?Pt(t,e):t,o=n.length-1,s;o>=0;o--)(s=n[o])&&(i=(r?s(t,e,i):s(i))||i);return r&&i&&zt(t,e,i),i};var X=globalThis,Q=X.ShadowRoot&&(X.ShadyCSS===void 0||X.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ge=Symbol(),Fe=new WeakMap,O=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==ge)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(Q&&t===void 0){let r=e!==void 0&&e.length===1;r&&(t=Fe.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&Fe.set(e,t))}return t}toString(){return this.cssText}},Ze=n=>new O(typeof n=="string"?n:n+"",void 0,ge),A=(n,...t)=>{let e=n.length===1?n[0]:t.reduce((r,i,o)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+n[o+1],n[0]);return new O(e,n,ge)},De=(n,t)=>{if(Q)n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let r=document.createElement("style"),i=X.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=e.cssText,n.appendChild(r)}},ve=Q?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(let r of t.cssRules)e+=r.cssText;return Ze(e)})(n):n;var{is:Ct,defineProperty:Rt,getOwnPropertyDescriptor:Nt,getOwnPropertyNames:Ft,getOwnPropertySymbols:Zt,getPrototypeOf:Dt}=Object,ee=globalThis,Me=ee.trustedTypes,Mt=Me?Me.emptyScript:"",It=ee.reactiveElementPolyfillSupport,H=(n,t)=>n,j={toAttribute(n,t){switch(t){case Boolean:n=n?Mt:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},te=(n,t)=>!Ct(n,t),Ie={attribute:!0,type:String,converter:j,reflect:!1,useDefault:!1,hasChanged:te};Symbol.metadata??=Symbol("metadata"),ee.litPropertyMetadata??=new WeakMap;var k=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Ie){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let r=Symbol(),i=this.getPropertyDescriptor(t,r,e);i!==void 0&&Rt(this.prototype,t,i)}}static getPropertyDescriptor(t,e,r){let{get:i,set:o}=Nt(this.prototype,t)??{get(){return this[e]},set(s){this[e]=s}};return{get:i,set(s){let l=i?.call(this);o?.call(this,s),this.requestUpdate(t,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Ie}static _$Ei(){if(this.hasOwnProperty(H("elementProperties")))return;let t=Dt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(H("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(H("properties"))){let e=this.properties,r=[...Ft(e),...Zt(e)];for(let i of r)this.createProperty(i,e[i])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[r,i]of e)this.elementProperties.set(r,i)}this._$Eh=new Map;for(let[e,r]of this.elementProperties){let i=this._$Eu(e,r);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let r=new Set(t.flat(1/0).reverse());for(let i of r)e.unshift(ve(i))}else t!==void 0&&e.push(ve(t));return e}static _$Eu(t,e){let r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return De(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ET(t,e){let r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(i!==void 0&&r.reflect===!0){let o=(r.converter?.toAttribute!==void 0?r.converter:j).toAttribute(e,r.type);this._$Em=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){let r=this.constructor,i=r._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let o=r.getPropertyOptions(i),s=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:j;this._$Em=i;let l=s.fromAttribute(e,o.type);this[i]=l??this._$Ej?.get(i)??l,this._$Em=null}}requestUpdate(t,e,r,i=!1,o){if(t!==void 0){let s=this.constructor;if(i===!1&&(o=this[t]),r??=s.getPropertyOptions(t),!((r.hasChanged??te)(o,e)||r.useDefault&&r.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,r))))return;this.C(t,e,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:r,reflect:i,wrapped:o},s){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??e??this[t]),o!==!0||s!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[i,o]of r){let{wrapped:s}=o,l=this[i];s!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,o,l)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(e)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};k.elementStyles=[],k.shadowRootOptions={mode:"open"},k[H("elementProperties")]=new Map,k[H("finalized")]=new Map,It?.({ReactiveElement:k}),(ee.reactiveElementVersions??=[]).push("2.1.2");var we=globalThis,qe=n=>n,re=we.trustedTypes,Le=re?re.createPolicy("lit-html",{createHTML:n=>n}):void 0,We="$lit$",T=`lit$${Math.random().toFixed(9).slice(2)}$`,Ye="?"+T,qt=`<${Ye}>`,N=document,W=()=>N.createComment(""),Y=n=>n===null||typeof n!="object"&&typeof n!="function",$e=Array.isArray,Lt=n=>$e(n)||typeof n?.[Symbol.iterator]=="function",he=`[ 	
\f\r]`,B=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ue=/-->/g,Oe=/>/g,C=RegExp(`>|${he}(?:([^\\s"'>=/]+)(${he}*=${he}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),He=/'/g,je=/"/g,Ge=/^(?:script|style|textarea|title)$/i,Se=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),c=Se(1),fr=Se(2),_r=Se(3),F=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),Be=new WeakMap,R=N.createTreeWalker(N,129);function Je(n,t){if(!$e(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Le!==void 0?Le.createHTML(t):t}var Ut=(n,t)=>{let e=n.length-1,r=[],i,o=t===2?"<svg>":t===3?"<math>":"",s=B;for(let l=0;l<e;l++){let a=n[l],d,p,u=-1,h=0;for(;h<a.length&&(s.lastIndex=h,p=s.exec(a),p!==null);)h=s.lastIndex,s===B?p[1]==="!--"?s=Ue:p[1]!==void 0?s=Oe:p[2]!==void 0?(Ge.test(p[2])&&(i=RegExp("</"+p[2],"g")),s=C):p[3]!==void 0&&(s=C):s===C?p[0]===">"?(s=i??B,u=-1):p[1]===void 0?u=-2:(u=s.lastIndex-p[2].length,d=p[1],s=p[3]===void 0?C:p[3]==='"'?je:He):s===je||s===He?s=C:s===Ue||s===Oe?s=B:(s=C,i=void 0);let g=s===C&&n[l+1].startsWith("/>")?" ":"";o+=s===B?a+qt:u>=0?(r.push(d),a.slice(0,u)+We+a.slice(u)+T+g):a+T+(u===-2?l:g)}return[Je(n,o+(n[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]},G=class n{constructor({strings:t,_$litType$:e},r){let i;this.parts=[];let o=0,s=0,l=t.length-1,a=this.parts,[d,p]=Ut(t,e);if(this.el=n.createElement(d,r),R.currentNode=this.el.content,e===2||e===3){let u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(i=R.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(let u of i.getAttributeNames())if(u.endsWith(We)){let h=p[s++],g=i.getAttribute(u).split(T),_=/([.?@])?(.*)/.exec(h);a.push({type:1,index:o,name:_[2],strings:g,ctor:_[1]==="."?_e:_[1]==="?"?ye:_[1]==="@"?xe:I}),i.removeAttribute(u)}else u.startsWith(T)&&(a.push({type:6,index:o}),i.removeAttribute(u));if(Ge.test(i.tagName)){let u=i.textContent.split(T),h=u.length-1;if(h>0){i.textContent=re?re.emptyScript:"";for(let g=0;g<h;g++)i.append(u[g],W()),R.nextNode(),a.push({type:2,index:++o});i.append(u[h],W())}}}else if(i.nodeType===8)if(i.data===Ye)a.push({type:2,index:o});else{let u=-1;for(;(u=i.data.indexOf(T,u+1))!==-1;)a.push({type:7,index:o}),u+=T.length-1}o++}}static createElement(t,e){let r=N.createElement("template");return r.innerHTML=t,r}};function M(n,t,e=n,r){if(t===F)return t;let i=r!==void 0?e._$Co?.[r]:e._$Cl,o=Y(t)?void 0:t._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),o===void 0?i=void 0:(i=new o(n),i._$AT(n,e,r)),r!==void 0?(e._$Co??=[])[r]=i:e._$Cl=i),i!==void 0&&(t=M(n,i._$AS(n,t.values),i,r)),t}var fe=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:r}=this._$AD,i=(t?.creationScope??N).importNode(e,!0);R.currentNode=i;let o=R.nextNode(),s=0,l=0,a=r[0];for(;a!==void 0;){if(s===a.index){let d;a.type===2?d=new J(o,o.nextSibling,this,t):a.type===1?d=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(d=new be(o,this,t)),this._$AV.push(d),a=r[++l]}s!==a?.index&&(o=R.nextNode(),s++)}return R.currentNode=N,i}p(t){let e=0;for(let r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}},J=class n{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,r,i){this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=M(this,t,e),Y(t)?t===m||t==null||t===""?(this._$AH!==m&&this._$AR(),this._$AH=m):t!==this._$AH&&t!==F&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Lt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==m&&Y(this._$AH)?this._$AA.nextSibling.data=t:this.T(N.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:r}=t,i=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=G.createElement(Je(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(e);else{let o=new fe(i,this),s=o.u(this.options);o.p(e),this.T(s),this._$AH=o}}_$AC(t){let e=Be.get(t.strings);return e===void 0&&Be.set(t.strings,e=new G(t)),e}k(t){$e(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,r,i=0;for(let o of t)i===e.length?e.push(r=new n(this.O(W()),this.O(W()),this,this.options)):r=e[i],r._$AI(o),i++;i<e.length&&(this._$AR(r&&r._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let r=qe(t).nextSibling;qe(t).remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},I=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,i,o){this.type=1,this._$AH=m,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=m}_$AI(t,e=this,r,i){let o=this.strings,s=!1;if(o===void 0)t=M(this,t,e,0),s=!Y(t)||t!==this._$AH&&t!==F,s&&(this._$AH=t);else{let l=t,a,d;for(t=o[0],a=0;a<o.length-1;a++)d=M(this,l[r+a],e,a),d===F&&(d=this._$AH[a]),s||=!Y(d)||d!==this._$AH[a],d===m?t=m:t!==m&&(t+=(d??"")+o[a+1]),this._$AH[a]=d}s&&!i&&this.j(t)}j(t){t===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},_e=class extends I{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===m?void 0:t}},ye=class extends I{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==m)}},xe=class extends I{constructor(t,e,r,i,o){super(t,e,r,i,o),this.type=5}_$AI(t,e=this){if((t=M(this,t,e,0)??m)===F)return;let r=this._$AH,i=t===m&&r!==m||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,o=t!==m&&(r===m||i);i&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},be=class{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){M(this,t)}};var Ot=we.litHtmlPolyfillSupport;Ot?.(G,J),(we.litHtmlVersions??=[]).push("3.3.2");var Ke=(n,t,e)=>{let r=e?.renderBefore??t,i=r._$litPart$;if(i===void 0){let o=e?.renderBefore??null;r._$litPart$=i=new J(t.insertBefore(W(),o),o,void 0,e??{})}return i._$AI(n),i};var Ae=globalThis,w=class extends k{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ke(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return F}};w._$litElement$=!0,w.finalized=!0,Ae.litElementHydrateSupport?.({LitElement:w});var Ht=Ae.litElementPolyfillSupport;Ht?.({LitElement:w});(Ae.litElementVersions??=[]).push("4.2.2");var V=n=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(n,t)}):customElements.define(n,t)};var jt={attribute:!0,type:String,converter:j,reflect:!1,hasChanged:te},Bt=(n=jt,t,e)=>{let{kind:r,metadata:i}=e,o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),r==="setter"&&((n=Object.create(n)).wrapped=!0),o.set(e.name,n),r==="accessor"){let{name:s}=e;return{set(l){let a=t.get.call(this);t.set.call(this,l),this.requestUpdate(s,a,n,!0,l)},init(l){return l!==void 0&&this.C(s,void 0,n,l),l}}}if(r==="setter"){let{name:s}=e;return function(l){let a=this[s];t.call(this,l),this.requestUpdate(s,a,n,!0,l)}}throw Error("Unsupported decorator location: "+r)};function Xe(n){return(t,e)=>typeof e=="object"?Bt(n,t,e):((r,i,o)=>{let s=i.hasOwnProperty(o);return i.constructor.createProperty(o,r),s?Object.getOwnPropertyDescriptor(i,o):void 0})(n,t,e)}function f(n){return Xe({...n,state:!0,attribute:!1})}var Qe={"status.idle":"Idle","status.running":"Running","status.error":"Error","status.disabled":"Disabled",stop_all:"Stop All",next:"Next",last:"Last",no_programs:"No programs found",loading:"Loading...","time.just_now":"just now","time.minutes_ago":"{count}m ago","time.hours_ago":"{count}h ago","time.days_ago":"{count }d ago","time.today_at":"today at {time}","time.tomorrow_at":"tomorrow at {time}","time.in_days":"in {count} d","time.never":"Never","time.no_schedule":"No active program","status.running_program":"Running: {name}",stop_confirm:"Stop all watering?","recap.total_duration":"Total duration: {duration} min","days.mon":"Mon","days.tue":"Tue","days.wed":"Wed","days.thu":"Thu","days.fri":"Fri","days.sat":"Sat","days.sun":"Sun","running.progress":"Valve {done} of {total}","error.program":"Error \u2014 {name}","error.auto_stopped":"All valves have been automatically closed.","config.tab_valves":"Valves","config.tab_zones":"Zones","config.tab_programs":"Programs","config.tab_config":"Config","config.no_valves":"No valves configured","config.no_zones":"No zones created","config.no_programs":"No programs created","config.new_zone":"New zone","config.new_program":"New program","config.name":"Name","config.save":"Save","config.cancel":"Cancel","config.delete":"Delete","config.edit":"Edit","config.confirm_delete_zone":"Delete this zone?","config.confirm_delete_program":"Delete this program?","config.trigger_time":"Trigger time","config.select_valves":"Select valves","config.select_zones":"Select zones","config.valve_entity":"Entity","config.total_duration":"Total: {duration} min","config.dry_run":"Test mode","config.dry_run_hint":"Runs the sequence without activating valves","running.dry_run":"Test mode","config.follows_program":"Every day","config.frequency_every_n":"Every {n} days","config.frequency_weekdays":"Specific days","recap.frequency_every_n":"every {n}d","config.title":"WateringHub Config","config.editor_valves":"Valves","config.add_valve":"Add valve","config.select_entity":"Switch entity","config.confirm_delete_valve":"Delete this valve?","config.saved":"Saved","config.deleted":"Deleted","skip.button":"Pause","skip.days_1":"1 day","skip.days_n":"{count} days","skip.active":"Paused {count} d","skip.cancel":"Resume","skip.toast_paused":"Program paused {count} d","skip.toast_resumed":"Program resumed","confirm.stop":"Stop","config.tab_water_supplies":"Water Supplies","config.no_water_supplies":"No water supplies","config.new_water_supply":"New supply","config.water_supply":"Water supply","config.confirm_delete_water_supply":"Delete this water supply?","config.error_water_supply_in_use":"Reassign valves first","config.no_water_supply_hint":"Create a water supply first","config.hint_programs":"Create watering programs with a schedule and zones.","config.hint_zones":"Create at least one zone to group your valves.","config.hint_water_supplies":"Define at least one water supply to enable parallel execution.","config.hint_valves":"Configure your valves and assign them to a zone and water supply.","config.none":"None","config.hint_valves_prereq":"Create water supplies and zones first","config.hint_programs_prereq":"Configure your valves first","schedule.at_one":"at {time}","schedule.at_many":"at {rest} and {last}","config.trigger_times":"Trigger times","config.add_time":"Add a time","config.valve_custom_times":"Custom times","config.valve_custom_times_hint":"Run only at selected times","config.valve_times_required":"Select at least one time, or uncheck custom times","config.valves_per_slot":"Valves per trigger time","config.slot_disabled_here":"disabled here","config.no_schedule_times":"Add at least one trigger time","config.valves_unassigned":"Unassigned valves","config.no_valves_in_zone":"No valve in this zone","config.hint_zones_unified":"Manage water supplies, zones, and valves.","config.valves_unassigned_warn":"Reassign valves first","config.editor_managed_in_card":"Configure water supplies, zones, valves, and programs from the card itself (Programmes / Zones tabs).","config.editor_section_valves":"Valves","config.add_valve_pick_entity":"Pick a switch entity first"};var et={"status.idle":"En attente","status.running":"Arrosage en cours","status.error":"Erreur","status.disabled":"D\xE9sactiv\xE9",stop_all:"Tout arr\xEAter",next:"Prochain",last:"Dernier",no_programs:"Aucun programme trouv\xE9",loading:"Chargement...","time.just_now":"\xE0 l'instant","time.minutes_ago":"il y a {count} min","time.hours_ago":"il y a {count}h","time.days_ago":"il y a {count} j","time.today_at":"aujourd'hui \xE0 {time}","time.tomorrow_at":"demain \xE0 {time}","time.in_days":"dans {count} j","time.never":"Jamais","time.no_schedule":"Aucun programme actif","status.running_program":"En cours : {name}",stop_confirm:"Arr\xEAter tout l'arrosage ?","recap.total_duration":"Dur\xE9e totale : {duration} min","days.mon":"Lun","days.tue":"Mar","days.wed":"Mer","days.thu":"Jeu","days.fri":"Ven","days.sat":"Sam","days.sun":"Dim","running.progress":"Vanne {done} sur {total}","error.program":"Erreur \u2014 {name}","error.auto_stopped":"Toutes les vannes ont \xE9t\xE9 ferm\xE9es automatiquement.","config.tab_valves":"Vannes","config.tab_zones":"Zones","config.tab_programs":"Programmes","config.tab_config":"Config","config.no_valves":"Aucune vanne configur\xE9e","config.no_zones":"Aucune zone cr\xE9\xE9e","config.no_programs":"Aucun programme cr\xE9\xE9","config.new_zone":"Nouvelle zone","config.new_program":"Nouveau programme","config.name":"Nom","config.save":"Sauvegarder","config.cancel":"Annuler","config.delete":"Supprimer","config.edit":"Modifier","config.confirm_delete_zone":"Supprimer cette zone ?","config.confirm_delete_program":"Supprimer ce programme ?","config.trigger_time":"Heure de d\xE9clenchement","config.select_valves":"S\xE9lectionner les vannes","config.select_zones":"S\xE9lectionner les zones","config.valve_entity":"Entit\xE9","config.total_duration":"Total : {duration} min","config.dry_run":"Mode test","config.dry_run_hint":"Ex\xE9cute la s\xE9quence sans activer les vannes","running.dry_run":"Mode test","config.follows_program":"Tous les jours","config.frequency_every_n":"Tous les {n} jours","config.frequency_weekdays":"Jours sp\xE9cifiques","recap.frequency_every_n":"tous les {n}j","config.title":"WateringHub Config","config.editor_valves":"Vannes","config.add_valve":"Ajouter une vanne","config.select_entity":"Entit\xE9 switch","config.confirm_delete_valve":"Supprimer cette vanne ?","config.saved":"Enregistr\xE9","config.deleted":"Supprim\xE9","skip.button":"Pause","skip.days_1":"1 jour","skip.days_n":"{count} jours","skip.active":"En pause {count} j","skip.cancel":"Reprendre","skip.toast_paused":"Programme en pause {count} j","skip.toast_resumed":"Programme repris","confirm.stop":"Arr\xEAter","config.tab_water_supplies":"Arriv\xE9es d'eau","config.no_water_supplies":"Aucune arriv\xE9e d'eau","config.new_water_supply":"Nouvelle arriv\xE9e","config.water_supply":"Arriv\xE9e d'eau","config.confirm_delete_water_supply":"Supprimer cette arriv\xE9e ?","config.error_water_supply_in_use":"R\xE9assignez d'abord les vannes","config.no_water_supply_hint":"Cr\xE9ez d'abord une arriv\xE9e d'eau","config.hint_programs":"Cr\xE9ez des programmes d'arrosage avec un horaire et des zones.","config.hint_zones":"Cr\xE9ez au moins une zone pour regrouper vos vannes.","config.hint_water_supplies":"Cr\xE9ez au moins une arriv\xE9e d'eau pour activer le parall\xE9lisme.","config.hint_valves":"Configurez vos vannes et assignez-les \xE0 une zone et une arriv\xE9e d'eau.","config.none":"Aucun","config.hint_valves_prereq":"Cr\xE9ez d'abord des arriv\xE9es d'eau et des zones","config.hint_programs_prereq":"Configurez d'abord vos vannes","schedule.at_one":"\xE0 {time}","schedule.at_many":"\xE0 {rest} et {last}","config.trigger_times":"Horaires de d\xE9clenchement","config.add_time":"Ajouter un horaire","config.valve_custom_times":"Horaires sp\xE9cifiques","config.valve_custom_times_hint":"Ne tourne qu'aux horaires s\xE9lectionn\xE9s","config.valve_times_required":"S\xE9lectionnez au moins un horaire, ou d\xE9cochez les horaires sp\xE9cifiques","config.valves_per_slot":"Vannes par horaire","config.slot_disabled_here":"d\xE9sactiv\xE9e ici","config.no_schedule_times":"Ajoutez au moins un horaire","config.valves_unassigned":"Vannes non assign\xE9es","config.no_valves_in_zone":"Aucune vanne dans cette zone","config.hint_zones_unified":"G\xE9rez vos arriv\xE9es d'eau, zones et vannes.","config.valves_unassigned_warn":"R\xE9assignez d'abord les vannes","config.editor_managed_in_card":"Configurez arriv\xE9es, zones, vannes et programmes directement depuis la carte (onglets Programmes / Zones).","config.editor_section_valves":"Vannes","config.add_valve_pick_entity":"S\xE9lectionnez d'abord une entit\xE9 switch"};var ke={en:Qe,fr:et};function E(n){let t=n?.toLowerCase().startsWith("fr")?"fr":"en",e=ke[t]??ke.en;return(r,i)=>{let o=e[r]??ke.en[r]??r;return i&&(o=o.replace(/\{(\w+)\}/g,(s,l)=>String(i[l]??s))),o}}var z=A`
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
`;var tt=A`
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
`;function ie(n){return Object.keys(n.states).filter(t=>t.startsWith("switch.wateringhub_"))}function q(n,t){return typeof n?.attributes.friendly_name=="string"?n.attributes.friendly_name:t}function oe(n){return n.states["sensor.wateringhub_status"]?.state??"idle"}function rt(n){let t=n.states["sensor.wateringhub_status"];if(t?.state!=="error")return null;let e=t.attributes,r=e.current_program,i=r?n.states[`switch.wateringhub_${r}`]:void 0;return{programName:q(i,r??""),errorMessage:e.error_message??""}}function nt(n){let t=n.states["sensor.wateringhub_status"];if(t?.state!=="running")return null;let e=t.attributes,r=e.valves_done??0,i=e.valves_total??1,o=Array.isArray(e.valves_sequence)?e.valves_sequence:[],s=Array.isArray(e.active_valves)?e.active_valves:[],l=s.map(g=>{let _=Math.max(0,(Date.now()-new Date(g.valve_start).getTime())/1e3),$=Math.max(0,g.valve_duration-_),me=o.filter(x=>x.water_supply_id===g.water_supply_id&&x.status==="pending").reduce((x,Et)=>x+Et.duration,0);return $+me}),a=l.length>0?Math.max(...l):0,d=o.reduce((g,_)=>g+_.duration,0),p=o.filter(g=>g.status==="done").reduce((g,_)=>g+_.duration,0),u=s.reduce((g,_)=>g+Math.max(0,(Date.now()-new Date(_.valve_start).getTime())/1e3),0),h=p+u;return{programName:e.current_program??"",valvesDone:r,valvesTotal:i,progressPercent:e.progress_percent??0,totalRemaining:a,totalDuration:d,totalElapsed:h,valveSequence:o,activeValves:s,dryRun:e.dry_run===!0}}function Te(n){if(n<=0)return"0:00";let t=Math.floor(n/3600),e=Math.floor(n%3600/60),r=Math.floor(n%60);return t>0?`${t}:${e.toString().padStart(2,"0")}:${r.toString().padStart(2,"0")}`:`${e}:${r.toString().padStart(2,"0")}`}function se(n,t){if(!n)return"";let e=[...n.times].sort((o,s)=>o.localeCompare(s));if(e.length===0)return"";if(e.length===1)return t("schedule.at_one",{time:e[0]});let r=e[e.length-1],i=e.slice(0,-1).join(", ");return t("schedule.at_many",{rest:i,last:r})}function it(n){let t=n?.state;return t==null||t==="None"||t==="null"||t==="unknown"||t==="unavailable"}function Ve(n,t,e,r){let i=n.states[t];if(it(i))return e("time.never");let o=new Date(i.state);if(Number.isNaN(o.getTime()))return i.state;let s=new Date,l=s.getTime()-o.getTime();if(l<0){let u=new Date(s.getFullYear(),s.getMonth(),s.getDate()),h=new Date(o.getFullYear(),o.getMonth(),o.getDate()),g=Math.round((h.getTime()-u.getTime())/(1e3*60*60*24)),_=o.toLocaleTimeString(r??[],{hour:"2-digit",minute:"2-digit"});return g===0?e("time.today_at",{time:_}):g===1?e("time.tomorrow_at",{time:_}):e("time.in_days",{count:g})}let a=Math.floor(l/(1e3*60));if(a<1)return e("time.just_now");if(a<60)return e("time.minutes_ago",{count:a});let d=Math.floor(a/60);if(d<24)return e("time.hours_ago",{count:d});let p=Math.floor(d/24);return e("time.days_ago",{count:p})}function ot(n,t,e){let r=n.states["sensor.wateringhub_next_run"];return it(r)?t("time.no_schedule"):Ve(n,"sensor.wateringhub_next_run",t,e)}function st(n){let t=n.attributes.skip_until;if(typeof t!="string")return null;let e=new Date(t+"T23:59:59");if(Number.isNaN(e.getTime()))return null;let r=new Date;if(r>e)return null;let i=new Date(r.getFullYear(),r.getMonth(),r.getDate()),o=new Date(e.getFullYear(),e.getMonth(),e.getDate());return{isSkipped:!0,daysRemaining:Math.max(1,Math.ceil((o.getTime()-i.getTime())/(1e3*60*60*24))),skipUntil:t}}function at(n,t){return t("skip.active",{count:n})}function L(n,t){return c`<span class="badge-sm badge-${n}">${t}</span>`}function lt(n,t,e="primary"){return c`<button class="btn btn-${e}" @click=${t}>${n}</button>`}function ae(n,t,e){return c`
    <button
      class=${e?.className??"action-btn"}
      @click=${t}
      title=${e?.title??""}
    >
      <ha-icon icon=${n}></ha-icon>
    </button>
  `}function ct(n,t){return c`<button class="add-btn" @click=${t}>${n}</button>`}function K(n,t,e){return c`
    <div class="form-actions">
      ${lt(e("config.cancel"),n,"cancel")}
      ${lt(e("config.save"),t,"primary")}
    </div>
  `}function S(n,t){return c`
    <div class="form-row">
      <label class="form-label">${n}</label>
      ${t}
    </div>
  `}function dt(n,t,e,r,i){return c`
    <div class="list-item">
      <div class="list-item-header">
        <div>
          <div class="list-item-name">${n}</div>
          <div class="list-item-sub">${t}</div>
        </div>
        <div class="list-item-actions">
          ${ae("mdi:pencil",e,{title:i("config.edit")})}
          ${ae("mdi:delete",r,{title:i("config.delete"),className:"action-btn delete"})}
        </div>
      </div>
    </div>
  `}function Ee(n,t,e,r,i){return c`
    <div class="inline-form">
      ${S(i("config.name"),c`<input
          class="form-input"
          .value=${n}
          @input=${o=>t(o.target.value)}
        />`)}
      ${K(r,e,i)}
    </div>
  `}function ze(n,t){return c`
    <div class="supply-chips">
      ${n.map(e=>c`
          <span class="supply-chip" @click=${()=>t.onClick(e)}>
            <ha-icon icon=${t.icon}></ha-icon>
            ${e.name}
            <span
              class="chip-close"
              @click=${r=>{r.stopPropagation(),t.onDelete(e.id)}}
            >
              <ha-icon icon="mdi:close"></ha-icon>
            </span>
          </span>
        `)}
      <span class="supply-chip chip-add" @click=${t.onNew}> + ${t.addLabel} </span>
    </div>
  `}function le(n,t,e,r,i,o){return n?c`
    <div class="confirm-overlay" @click=${i}>
      <div class="confirm-dialog" @click=${s=>s.stopPropagation()}>
        <div class="confirm-message">${t}</div>
        <div class="confirm-actions">
          <button class="btn btn-cancel" @click=${i}>${o("config.cancel")}</button>
          <button class="btn btn-danger" @click=${r}>${e}</button>
        </div>
      </div>
    </div>
  `:c``}function pt(n){return c`
    <div class="header">
      <span class="title">${n}</span>
    </div>
  `}function Gt(n,t,e,r,i,o,s,l){if(!e)return c`
      <div class="program-status">${L("disabled",i("status.disabled"))}</div>
    `;if(oe(n)==="running"){let h=n.states["sensor.wateringhub_status"]?.attributes.current_program,g=t.entity_id?.replace("switch.wateringhub_","");return c`
      <div class="program-status">
        ${h===g?L("running",i("status.running")):m}
      </div>
    `}let d=st(t),p=r?Kt(s,i):m;return c`
    <div class="program-status">
      ${d?c`
            ${L("skipped",at(d.daysRemaining,i))}
            <button class="skip-cancel-btn" @click=${l} title=${i("skip.cancel")}>
              <ha-icon icon="mdi:close-circle-outline"></ha-icon>
            </button>
          `:c`
            ${L("idle",i("status.idle"))}
            <div class="skip-dropdown-wrapper">
              <button class="skip-btn" @click=${o} title=${i("skip.button")}>
                <ha-icon icon="mdi:pause-circle-outline"></ha-icon>
              </button>
              ${p}
            </div>
          `}
      <span class="info-sm">${i("next")}: ${ot(n,i,n.language)}</span>
    </div>
  `}function ut(n,t){let e=rt(n);return e?c`
    <div class="error-view">
      <div class="error-title">
        <ha-icon icon="mdi:alert-circle"></ha-icon>
        ${t("error.program",{name:e.programName})}
      </div>
      ${e.errorMessage?c`<div class="error-message">${e.errorMessage}</div>`:m}
      <div class="error-auto-stopped">${t("error.auto_stopped")}</div>
    </div>
  `:c``}function mt(n,t,e){let r=nt(n);if(!r)return c``;let i=n.states["sensor.wateringhub_status"]?.attributes.water_supplies??[],o=r.activeValves.length>1?Jt(r.valveSequence,r.activeValves,i):gt(r.valveSequence,r.activeValves),s=r.valveSequence.length>0?o:m,l=2*Math.PI*30,a=r.totalDuration>0?Math.min(1,r.totalElapsed/r.totalDuration):0,d=l*(1-a);return c`
    <div class="running-block">
      <button class="running-stop-btn" @click=${t}>${e("stop_all")}</button>
      ${r.dryRun?L("dry-run",e("running.dry_run")):m}

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
            <span class="cp-time">${Te(r.totalRemaining)}</span>
          </div>
        </div>
        <div class="global-info">
          <div class="global-program-name">
            ${q(n.states[`switch.wateringhub_${r.programName}`],r.programName)}
          </div>
          <div class="global-sub">
            ${e("running.progress",{done:r.valvesDone+1,total:r.valvesTotal})}
          </div>
        </div>
      </div>

      ${s}
    </div>
  `}function gt(n,t){let e=[];for(let a of n){let d=e[e.length-1];d?.zoneName===a.zone_name?d.valves.push(a):e.push({zoneName:a.zone_name,valves:[a]})}let r=new Map;for(let a of t){let d=Math.max(0,(Date.now()-new Date(a.valve_start).getTime())/1e3);r.set(a.valve_id,Math.max(0,a.valve_duration-d))}let i=c`<svg viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z"
    />
  </svg>`,o=c`<svg viewBox="0 0 24 24">
    <circle fill="currentColor" cx="12" cy="12" r="6" />
  </svg>`,s=c`<svg viewBox="0 0 24 24">
    <circle fill="none" stroke="currentColor" stroke-width="2" cx="12" cy="12" r="6" />
  </svg>`,l={done:i,running:o,pending:s};return c`
    <div class="valve-timeline">
      ${e.map(a=>c`
          <div class="tl-zone">${a.zoneName}</div>
          ${a.valves.map(d=>{let p=Math.ceil(d.duration/60),u=r.get(d.valve_id)??0;return c`
              <div class="tl-step tl-${d.status}">
                <span class="tl-dot">${l[d.status]}</span>
                <span class="tl-step-name">${d.valve_name}</span>
                <span class="tl-step-time">
                  ${d.status==="running"?Te(u):`${p} min`}
                </span>
              </div>
            `})}
        `)}
    </div>
  `}function Jt(n,t,e){let r=[],i=new Map;for(let s of n)i.has(s.water_supply_id)||(r.push(s.water_supply_id),i.set(s.water_supply_id,[])),i.get(s.water_supply_id).push(s);let o=new Map;for(let s of t)o.has(s.water_supply_id)||o.set(s.water_supply_id,[]),o.get(s.water_supply_id).push(s);return c`
    <div class="parallel-timeline">
      ${r.map(s=>{let l=i.get(s)??[],a=o.get(s)??[],d=s===null?"\u2014":e.find(p=>p.id===s)?.name??s;return c`
          <div class="supply-column">
            <div class="supply-label">${d}</div>
            ${gt(l,a)}
          </div>
        `})}
    </div>
  `}function vt(n,t,e,r,i,o,s,l,a,d){return t.length===0?c`<div class="empty-state">${d("no_programs")}</div>`:c`${t.map(p=>{let u=n.states[p];if(!u)return m;let h=u.state==="on",g=e===p,_=q(u,p);return c`
      <div class="program-wrapper">
        <div class="program">
          <div class="program-header" @click=${()=>i(p)}>
            <ha-icon class="chevron ${g?"open":""}" icon="mdi:chevron-down"></ha-icon>
            ${h?c`<div class="active-dot"></div>`:m}
            <span class="program-name ${h?"active":""}">${_}</span>
          </div>
          <ha-switch .checked=${h} @change=${()=>o(p)}></ha-switch>
        </div>
        ${Gt(n,u,h,r===p,d,()=>s(p),$=>l(p,$),()=>a(p))}
        ${Xt(n,u.attributes,g,d)}
      </div>
    `})}`}function Kt(n,t){return c`
    <div class="skip-dropdown">
      ${[1,2,3,5].map(r=>c`
          <button class="skip-dropdown-option" @click=${()=>n(r)}>
            ${r===1?t("skip.days_1"):t("skip.days_n",{count:r})}
          </button>
        `)}
    </div>
  `}function Xt(n,t,e,r){let i=t.schedule,o=t.zones??[],s=t.total_duration;return c`
    <div class="program-recap ${e?"open":""}">
      ${i?c`<div class="recap-schedule">
            <ha-icon icon="mdi:calendar-clock"></ha-icon>
            ${se(i,r)}
          </div>`:m}
      <div class="recap-schedule">
        <ha-icon icon="mdi:history"></ha-icon>
        ${r("last")}: ${Ve(n,"sensor.wateringhub_last_run",r,n.language)}
      </div>
      ${o.map(l=>c`
          <div class="recap-zone">
            <span class="recap-zone-badge">${l.zone_name}</span>
          </div>
          ${l.valves.map(a=>c`
              <div class="recap-valve">
                <ha-icon icon="mdi:water"></ha-icon>
                ${a.valve_name} — ${a.duration}
                min${er(a.frequency,r)}${Qt(a.times,i?.times)}
              </div>
            `)}
        `)}
      ${s?c`<div class="recap-total">
            <ha-icon icon="mdi:timer-outline"></ha-icon>
            ${r("recap.total_duration",{duration:s})}
          </div>`:m}
    </div>
  `}function Qt(n,t){return!n||n.length===0||t&&n.length===t.length?"":` \xB7 ${[...n].sort((e,r)=>e.localeCompare(r)).join(", ")}`}function er(n,t){return n?n.type==="every_n_days"?` \xB7 ${t("recap.frequency_every_n",{n:n.n??2})}`:n.type==="weekdays"&&n.days?.length?` \xB7 ${n.days.map(r=>t(`days.${r}`)).join(", ")}`:"":""}var Z=class extends w{constructor(){super(...arguments);this._t=e=>e}set hass(e){this._hass=e,this._t=E(e.language)}setConfig(e){this._config=e}_titleChanged(e){let r=e.target.value;this._config={...this._config,title:r},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config}}))}render(){return c`
      ${S(this._t("config.name"),c`<input
          class="form-input"
          .value=${this._config?.title??""}
          @input=${this._titleChanged}
        />`)}
    `}};Z.styles=[z],v([f()],Z.prototype,"_config",2),v([f()],Z.prototype,"_hass",2),Z=v([V("wateringhub-card-editor")],Z);var b=class extends w{constructor(){super(...arguments);this._programEntities=[];this._expandedProgram=null;this._skipDropdownOpen=null;this._toast="";this._confirmMessage="";this._confirmLabel="";this._confirmAction=null;this._tick=0;this._t=e=>e;this._timerInterval=null;this._unsubEvents=null;this._boundCloseDropdown=this._closeSkipDropdown.bind(this)}static getConfigElement(){return document.createElement("wateringhub-card-editor")}setConfig(e){this._config=e}set hass(e){let r=this._hass;this._hass=e,this._t=E(e.language),r?.states!==e.states&&(this._programEntities=ie(e)),this._updateTimer(oe(e)),this._subscribeEvents()}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._boundCloseDropdown)}disconnectedCallback(){super.disconnectedCallback(),this._clearTimer(),this._unsubscribeEvents(),document.removeEventListener("click",this._boundCloseDropdown)}_subscribeEvents(){this._unsubEvents||!this._hass?.connection||this._hass.connection.subscribeEvents(()=>{this._tick++},"wateringhub_event").then(e=>{this._unsubEvents=e})}_unsubscribeEvents(){this._unsubEvents&&(this._unsubEvents(),this._unsubEvents=null)}_updateTimer(e){e==="running"&&!this._timerInterval?this._timerInterval=setInterval(()=>{this._tick++},1e3):e!=="running"&&this._timerInterval&&this._clearTimer()}_clearTimer(){this._timerInterval&&(clearInterval(this._timerInterval),this._timerInterval=null)}getCardSize(){return 3}_toggleExpand(e){this._expandedProgram=this._expandedProgram===e?null:e}_toggleProgram(e){let r=this._hass.states[e];if(!r)return;let i=r.state==="on"?"turn_off":"turn_on";this._hass.callService("switch",i,{entity_id:e})}_requestConfirm(e,r,i){this._confirmMessage=e,this._confirmLabel=r,this._confirmAction=i}_executeConfirm(){this._confirmAction?.(),this._confirmAction=null,this._confirmMessage="",this._confirmLabel=""}_cancelConfirm(){this._confirmAction=null,this._confirmMessage="",this._confirmLabel=""}_stopAll(){this._requestConfirm(this._t("stop_confirm"),this._t("confirm.stop"),()=>{this._hass.callService("wateringhub","stop_all",{})})}_toggleSkipDropdown(e){this._skipDropdownOpen=this._skipDropdownOpen===e?null:e}_showToast(e){this._toast=e,setTimeout(()=>{this._toast=""},3e3)}_handleSkip(e,r){let i=e.replace("switch.wateringhub_","");this._hass.callService("wateringhub","skip_program",{id:i,days:r}),this._skipDropdownOpen=null,this._showToast(this._t("skip.toast_paused",{count:r}))}_handleCancelSkip(e){let r=e.replace("switch.wateringhub_","");this._hass.callService("wateringhub","skip_program",{id:r,days:0}),this._showToast(this._t("skip.toast_resumed"))}_closeSkipDropdown(e){if(!this._skipDropdownOpen)return;e.composedPath().some(o=>o instanceof HTMLElement&&o.classList?.contains("skip-dropdown-wrapper"))||(this._skipDropdownOpen=null)}render(){if(!this._hass||!this._config)return c`<ha-card>${this._t("loading")}</ha-card>`;let e=this._config.title??"WateringHub";return c`
      <ha-card>
        ${pt(e)} ${ut(this._hass,this._t)}
        ${mt(this._hass,()=>this._stopAll(),this._t)}
        ${vt(this._hass,this._programEntities,this._expandedProgram,this._skipDropdownOpen,r=>this._toggleExpand(r),r=>this._toggleProgram(r),r=>this._toggleSkipDropdown(r),(r,i)=>this._handleSkip(r,i),r=>this._handleCancelSkip(r),this._t)}
        ${this._toast?c`<div class="toast">${this._toast}</div>`:m}
        ${le(!!this._confirmAction,this._confirmMessage,this._confirmLabel,()=>this._executeConfirm(),()=>this._cancelConfirm(),this._t)}
      </ha-card>
    `}};b.styles=[z,tt],v([f()],b.prototype,"_config",2),v([f()],b.prototype,"_hass",2),v([f()],b.prototype,"_programEntities",2),v([f()],b.prototype,"_expandedProgram",2),v([f()],b.prototype,"_skipDropdownOpen",2),v([f()],b.prototype,"_toast",2),v([f()],b.prototype,"_confirmMessage",2),v([f()],b.prototype,"_confirmLabel",2),v([f()],b.prototype,"_confirmAction",2),v([f()],b.prototype,"_tick",2),b=v([V("wateringhub-card")],b);globalThis.customCards=globalThis.customCards||[];globalThis.customCards.push({type:"wateringhub-card",name:"WateringHub Card",description:"Watering management card for WateringHub"});function ht(n){let t=n.attributes,e=t.program_id??"",r=t.schedule,i=(t.zones??[]).map(o=>({zone_id:o.zone_id,valves:o.valves.map(s=>({valve_id:s.valve_id,duration:s.duration,frequency:s.frequency,times:s.times}))}));return{id:e,name:typeof t.friendly_name=="string"?t.friendly_name:e,schedule:{times:r?.times??["06:00"]},zones:i,dry_run:t.dry_run===!0,isNew:!1}}function ft(n,t){let e=[...n.schedule.times].sort((r,i)=>r.localeCompare(i));return{id:t,name:n.name,schedule:{times:e},dry_run:n.dry_run,zones:n.zones.map(r=>({zone_id:r.zone_id,valves:r.valves.map(i=>({valve_id:i.valve_id,duration:i.duration,...i.frequency?{frequency:i.frequency}:{},...i.times&&i.times.length>0&&i.times.length<e.length?{times:[...i.times].sort((o,s)=>o.localeCompare(s))}:{}}))}))}}function _t(n){return n.zones.some(t=>t.valves.some(e=>e.times?.length===0))}function yt(n,t){return n.zones.reduce((e,r)=>e+r.valves.filter(i=>i.times===void 0||i.times.includes(t)).length,0)}function ce(n,t){let e=new Set(t),r=n.zones.map(i=>({...i,valves:i.valves.map(o=>o.times===void 0?o:{...o,times:o.times.filter(s=>e.has(s))}).filter(o=>o.times===void 0||o.times.length>0)})).filter(i=>i.valves.length>0);return{...n,schedule:{times:t},zones:r}}function xt(n,t,e,r,i=10){let o=n.schedule.times,l=n.zones.find(p=>p.zone_id===t)?.valves.find(p=>p.valve_id===e);if(!!(l&&(l.times===void 0||l.times.includes(r)))&&l){let u=(l.times??[...o]).filter(h=>h!==r);return u.length===0?rr(n,t,e):U(n,t,e,{times:u})}if(!l)return tr(n,t,{valve_id:e,duration:i,times:[r]});let d=[...l.times??[],r];return d.length>=o.length?U(n,t,e,{times:void 0}):U(n,t,e,{times:d})}function bt(n,t,e,r){return U(n,t,e,{duration:r})}function U(n,t,e,r){return{...n,zones:n.zones.map(i=>i.zone_id===t?{...i,valves:i.valves.map(o=>o.valve_id===e?{...o,...r}:o)}:i)}}function tr(n,t,e){let i=n.zones.some(o=>o.zone_id===t)?n.zones.map(o=>o.zone_id===t?{...o,valves:[...o.valves,e]}:o):[...n.zones,{zone_id:t,valves:[e]}];return{...n,zones:i}}function rr(n,t,e){let r=n.zones.map(i=>i.zone_id===t?{...i,valves:i.valves.filter(o=>o.valve_id!==e)}:i).filter(i=>i.valves.length>0);return{...n,zones:r}}function wt(n,t,e,r){return{...n,zones:n.zones.map(i=>{if(i.zone_id!==t)return i;let o=i.valves.findIndex(a=>a.valve_id===e),s=o+r;if(o<0||s<0||s>=i.valves.length)return i;let l=[...i.valves];return[l[o],l[s]]=[l[s],l[o]],{...i,valves:l}})}}function $t(n,t,e){let r=t.filter(a=>a.zone_id===n),i=e.zones.find(a=>a.zone_id===n);if(!i)return r;let o=i.valves.map(a=>r.find(d=>d.id===a.valve_id)).filter(a=>!!a),s=new Set(o.map(a=>a.id)),l=r.filter(a=>!s.has(a.id));return[...o,...l]}var St=A`
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

  /* Zone row (flat list, Zones tab) */
  .zone-row {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    border: 1px solid var(--divider-color);
    border-radius: 8px;
    margin-bottom: 6px;
  }
  .zone-row-name {
    flex: 1;
    font-size: 14px;
    font-weight: 500;
    color: var(--primary-text-color);
  }

  /* Zone card (legacy expandable, kept for compat) */
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

  /* Valve row (2-line responsive: head + selects) */
  .valve-row {
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 8px 10px;
    border: 1px solid var(--divider-color);
    border-radius: 8px;
    margin-bottom: 6px;
  }
  .valve-row-head {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .valve-row-selects {
    display: flex;
    gap: 8px;
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
    flex: 1 1 0;
    min-width: 0;
  }
  .valve-row-unassigned {
    border-color: var(--warning-color);
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
`;function de(n){return n.map(t=>({entity_id:t.entity_id,name:t.name,zone_id:t.zone_id,water_supply_id:t.water_supply_id}))}function P(n){return n.states["sensor.wateringhub_status"]?.attributes.available_valves??[]}function pe(n){return n.states["sensor.wateringhub_status"]?.attributes.zones??[]}function At(n){return n.states["sensor.wateringhub_status"]?.attributes.water_supplies??[]}function ue(n){return n.toLowerCase().normalize("NFD").replaceAll(/[\u0300-\u036f]/g,"").replaceAll(/[^a-z0-9]+/g,"_").replaceAll(/^_|_$/g,"")}function kt(n,t,e,r,i,o){let s=new Set(t.map(a=>a.entity_id)),l=Object.keys(n.states).filter(a=>a.startsWith("switch.")&&!s.has(a)).map(a=>({id:a,name:n.states[a]?.attributes.friendly_name??a})).sort((a,d)=>a.name.localeCompare(d.name));return c`
    <div class="inline-form">
      ${S(o("config.select_entity"),Pe(l,i.newValveEntityId,i.onUpdateNewValveEntity,o))}
      ${S(o("config.tab_zones"),Pe(e,i.newValveZoneId,i.onUpdateNewValveZone,o))}
      ${S(o("config.tab_water_supplies"),Pe(r,i.newValveSupplyId,i.onUpdateNewValveSupply,o))}
      ${K(i.onCancelAddValve,i.onSaveNewValve,o)}
    </div>
  `}function Pe(n,t,e,r){return c`<select
    class="form-input"
    @change=${i=>e(i.target.value)}
  >
    <option value="" ?selected=${!t}>${r("config.none")}</option>
    ${n.map(i=>c`<option value=${i.id} ?selected=${i.id===t}>${i.name}</option>`)}
  </select>`}function Ce(n,t,e){let r=At(n),i=pe(n),o=P(n),s=t.editingValves??de(o),l=t.editingValves!==null,a=l?s.every(p=>p.zone_id&&p.water_supply_id):!1,d=[...s.filter(p=>!p.zone_id),...s.filter(p=>p.zone_id)];return c`
    <div class="form-hint">${e("config.hint_zones_unified")}</div>

    <!-- Supplies chips -->
    <div class="form-label" style="margin-top:12px;">${e("config.tab_water_supplies")}</div>
    ${t.editingSupply?nr(t,e):ze(r,{icon:"mdi:water-pump",addLabel:e("config.new_water_supply"),onClick:t.onEditSupply,onDelete:t.onDeleteSupply,onNew:t.onNewSupply})}

    <!-- Zones chips -->
    <div class="form-label" style="margin-top:16px;">${e("config.tab_zones")}</div>
    ${t.editingZone?ir(t,e):ze(i,{icon:"mdi:shape-outline",addLabel:e("config.new_zone"),onClick:t.onEditZone,onDelete:t.onDeleteZone,onNew:t.onNewZone})}

    <!-- Valves -->
    <div class="form-label" style="margin-top:16px;">
      ${e("config.editor_section_valves")} (${d.length})
    </div>
    ${d.length===0&&!t.addingValve?c`<div class="empty-state">${e("config.no_valves")}</div>`:m}
    ${d.map(p=>or(p,i,r,t,!p.zone_id,e))}
    ${t.addingValve?kt(n,o,i,r,t,e):c`<button class="add-btn" @click=${t.onStartAddValve}>
          + ${e("config.add_valve")}
        </button>`}

    <!-- Global save for staged valve dropdown changes -->
    ${l?c`<div class="form-actions" style="margin-top:16px;">
          <button class="btn btn-cancel" @click=${t.onCancelValves}>${e("config.cancel")}</button>
          <button class="btn btn-primary" ?disabled=${!a} @click=${t.onSaveValves}>
            ${e("config.save")}
          </button>
        </div>`:m}
  `}function nr(n,t){let e=n.editingSupply;return e?Ee(e.name,r=>n.onUpdateSupplyForm({...e,name:r}),()=>n.onSaveSupply(e),n.onCancelSupply,t):c``}function ir(n,t){let e=n.editingZone;return e?Ee(e.name,r=>n.onUpdateZoneForm({...e,name:r}),()=>n.onSaveZone(e),n.onCancelZone,t):c``}function or(n,t,e,r,i,o){let s="border-color: var(--error-color);",l=(a,d)=>{r.editingValves||r.onStartEditValves();let p=(r.editingValves??[n]).map(u=>u.entity_id===n.entity_id?{...u,[a]:d||null}:u);r.onUpdateValves(p)};return c`
    <div class="valve-row ${i?"valve-row-unassigned":""}">
      <div class="valve-row-head">
        <ha-icon
          class="valve-icon"
          icon=${i?"mdi:alert-circle-outline":"mdi:valve"}
        ></ha-icon>
        <div class="valve-name">${n.name}</div>
        ${ae("mdi:delete",()=>r.onDeleteValve(n.entity_id),{className:"action-btn delete",title:o("config.delete")})}
      </div>
      <div class="valve-row-selects">
        <select
          class="form-select valve-dropdown"
          style=${n.zone_id?"":s}
          @change=${a=>l("zone_id",a.target.value)}
        >
          <option value="" ?selected=${!n.zone_id}>${o("config.none")}</option>
          ${t.map(a=>c`<option value=${a.id} ?selected=${a.id===n.zone_id}>${a.name}</option>`)}
        </select>
        <select
          class="form-select valve-dropdown"
          style=${n.water_supply_id?"":s}
          @change=${a=>l("water_supply_id",a.target.value)}
        >
          <option value="" ?selected=${!n.water_supply_id}>${o("config.none")}</option>
          ${e.map(a=>c`<option value=${a.id} ?selected=${a.id===n.water_supply_id}>
                ${a.name}
              </option>`)}
        </select>
      </div>
    </div>
  `}var sr=["mon","tue","wed","thu","fri","sat","sun"];function Re(n,t,e,r,i,o,s){let l=[...n.schedule.times],a=n.zones.reduce((d,p)=>d+p.valves.reduce((u,h)=>u+(h.duration||0),0),0);return c`
    <div class="inline-form">
      ${S(s("config.name"),c`<input
          class="form-input"
          .value=${n.name}
          @input=${d=>o({...n,name:d.target.value})}
        />`)}
      ${ar(n,o,s)}
      ${l.length===0?c`<div class="form-hint" style="color:var(--warning-color);">
            ${s("config.no_schedule_times")}
          </div>`:c`<div class="form-label" style="margin-top:12px;">
              ${s("config.valves_per_slot")}
            </div>
            ${[...l].sort((d,p)=>d.localeCompare(p)).map(d=>lr(d,n,t,e,o,s))}`}
      ${a>0?c`<div class="total-duration">
            ${s("config.total_duration",{duration:a})}
          </div>`:m}
      <div class="form-row">
        <label class="checkbox-item">
          <input
            type="checkbox"
            .checked=${n.dry_run}
            @change=${()=>o({...n,dry_run:!n.dry_run})}
          />
          ${s("config.dry_run")}
        </label>
        <div class="form-hint">${s("config.dry_run_hint")}</div>
      </div>
      ${K(i,()=>r(n),s)}
    </div>
  `}function ar(n,t,e){let r=n.schedule.times??[];return S(e("config.trigger_times"),c`<div class="schedule-chips">
      ${r.map((i,o)=>c`
          <div class="schedule-chip-wrap">
            <input
              class="schedule-chip-input"
              type="time"
              .value=${i}
              @input=${s=>{let l=r.map((a,d)=>d===o?s.target.value:a);t(ce(n,l))}}
            />
            ${r.length>1?c`<button
                  class="chip-close"
                  @click=${()=>t(ce(n,r.filter((s,l)=>l!==o)))}
                >
                  <ha-icon icon="mdi:close"></ha-icon>
                </button>`:m}
          </div>
        `)}
      <button
        class="supply-chip chip-add"
        @click=${()=>t(ce(n,[...r,"12:00"]))}
      >
        + ${e("config.add_time")}
      </button>
    </div>`)}function lr(n,t,e,r,i,o){let s=e.filter(a=>r.some(d=>d.zone_id===a.id)),l=yt(t,n);return c`
    <div class="slot-section">
      <div class="slot-header">
        <ha-icon icon="mdi:clock-outline"></ha-icon>
        <span class="slot-time">${n}</span>
        <span class="info-sm">(${l})</span>
      </div>
      <div class="slot-body">
        ${s.length===0?c`<div class="info-sm" style="padding:4px 0;">
              ${o("config.hint_programs_prereq")}
            </div>`:s.map(a=>c`
                <div class="slot-zone-label">${a.name}</div>
                ${$t(a.id,r,t).map(d=>cr(d,a.id,n,t,i,o))}
              `)}
      </div>
    </div>
  `}function cr(n,t,e,r,i,o){let s=r.zones.find(x=>x.zone_id===t),l=s?.valves.find(x=>x.valve_id===n.id),a=!!(l&&(l.times===void 0||l.times.includes(e))),d=s?.valves.findIndex(x=>x.valve_id===n.id)??-1,p=s?.valves.length??0,u=d<=0,h=d<0||d===p-1,g=()=>i(xt(r,t,n.id,e)),_=x=>i(bt(r,t,n.id,x)),$=x=>i(wt(r,t,n.id,x)),me=a&&l&&p>1?c`
          <div class="reorder-btns">
            <button class="reorder-btn" ?disabled=${u} @click=${()=>$(-1)}>
              <ha-icon icon="mdi:chevron-up"></ha-icon>
            </button>
            <button class="reorder-btn" ?disabled=${h} @click=${()=>$(1)}>
              <ha-icon icon="mdi:chevron-down"></ha-icon>
            </button>
          </div>
        `:m;return c`
    <div class="slot-valve-row ${a?"":"inactive"}">
      <label class="slot-valve-main">
        <input type="checkbox" .checked=${a} @change=${g} />
        ${me}
        <span class="slot-valve-name">${n.name}</span>
        ${a&&l?c`<input
                class="slot-duration-input"
                type="number"
                min="1"
                .value=${String(l.duration)}
                @input=${x=>_(Number.parseInt(x.target.value)||1)}
              /><span class="info-sm">min</span>`:c`<span class="info-sm slot-disabled-hint">
              ${o("config.slot_disabled_here")}
            </span>`}
      </label>
      ${a&&l?dr(l,t,r,i,o):m}
    </div>
  `}function dr(n,t,e,r,i){let o=n.frequency,s=o?.type??"",l=new Date().toISOString().slice(0,10),a=u=>r(U(e,t,n.valve_id,{frequency:u})),d=s==="every_n_days"&&o?c`
          <input
            class="valve-freq-n-input"
            type="number"
            min="2"
            .value=${String(o.n??2)}
            @input=${u=>a({...o,n:Number.parseInt(u.target.value)||2})}
          />
          <span class="info-sm">j</span>
        `:m,p=s==="weekdays"&&o?c`
          <div class="valve-freq-days">
            ${sr.map(u=>{let h=o.days?.includes(u)??!1;return c`
                <label class="valve-freq-day">
                  <input
                    type="checkbox"
                    .checked=${h}
                    @change=${()=>{let g=o.days??[],_=h?g.filter($=>$!==u):[...g,u];a({...o,days:_})}}
                  />
                  ${i(`days.${u}`)}
                </label>
              `})}
          </div>
        `:m;return c`
    <div class="slot-valve-freq">
      <select
        class="valve-freq-select"
        @change=${u=>{let h=u.target.value;a(h?h==="every_n_days"?{type:"every_n_days",n:2,start_date:l}:{type:"weekdays",days:[]}:void 0)}}
      >
        <option value="" ?selected=${s===""}>${i("config.follows_program")}</option>
        <option value="every_n_days" ?selected=${s==="every_n_days"}>
          ${i("config.frequency_every_n",{n:o?.n??2})}
        </option>
        <option value="weekdays" ?selected=${s==="weekdays"}>
          ${i("config.frequency_weekdays")}
        </option>
      </select>
      ${d}${p}
    </div>
  `}function Ne(n,t,e,r,i,o,s,l,a){let d=ie(n),p=pe(n),u=P(n),h=u.some(g=>g.zone_id!==null);return c`
    <div class="form-hint">${a("config.hint_programs")}</div>
    ${h?m:c`<div class="empty-state">${a("config.hint_programs_prereq")}</div>`}
    ${d.map(g=>{let _=n.states[g];if(!_)return m;let $=_.attributes.program_id??"";return t?.id===$?Re(t,p,u,o,s,l,a):pr(_,g,e,r,a)})}
    ${t?.isNew?Re(t,p,u,o,s,l,a):m}
    ${t?m:ct(`+ ${a("config.new_program")}`,i)}
    ${d.length===0&&!t?c`<div class="empty-state">${a("config.no_programs")}</div>`:m}
  `}function pr(n,t,e,r,i){let o=q(n,t),s=n.attributes.schedule,l=n.attributes.total_duration,a=n.attributes.dry_run===!0,d=se(s,i),p=l?`${d} \u2014 ${l} min`:d,u=a?c`<span class="badge-dry-run-sm">${i("config.dry_run")}</span>`:m;return dt(c`${o} ${u}`,p,()=>e(t),()=>r(t),i)}function Tt(n,t,e){let r=[{id:"programs",label:e("config.tab_programs")},{id:"zones",label:e("config.tab_config")}];return c`
    <div class="tabs">
      ${r.map(i=>c`
          <div
            class="tab ${n===i.id?"active":""}"
            @click=${()=>t(i.id)}
          >
            ${i.label}
          </div>
        `)}
    </div>
  `}var Vt=A`
  .editor-root {
    padding: 16px;
  }
`;var D=class extends w{constructor(){super(...arguments);this._t=e=>e}set hass(e){this._hass=e,this._t=E(e.language)}setConfig(e){this._config=e}render(){return c`
      <div class="editor-root">
        <div class="empty-state">${this._t("config.editor_managed_in_card")}</div>
      </div>
    `}};D.styles=[z,Vt],v([f()],D.prototype,"_config",2),v([f()],D.prototype,"_hass",2),D=v([V("wateringhub-config-editor")],D);var y=class extends w{constructor(){super(...arguments);this._activeTab="programs";this._editingZone=null;this._toast="";this._confirmMessage="";this._confirmLabel="";this._confirmAction=null;this._editingProgram=null;this._editingWaterSupply=null;this._editingValves=null;this._addingValve=!1;this._newValveEntityId="";this._newValveZoneId="";this._newValveSupplyId="";this._t=e=>e}static getConfigElement(){return document.createElement("wateringhub-config-editor")}setConfig(e){this._config=e}set hass(e){this._hass=e,this._t=E(e.language)}getCardSize(){return 5}_showToast(e){this._toast=e,setTimeout(()=>{this._toast=""},3e3)}_requestConfirm(e,r,i){this._confirmMessage=e,this._confirmLabel=r,this._confirmAction=i}_executeConfirm(){this._confirmAction?.(),this._confirmAction=null,this._confirmMessage="",this._confirmLabel=""}_cancelConfirm(){this._confirmAction=null,this._confirmMessage="",this._confirmLabel=""}_setTab(e){this._activeTab=e,this._editingZone=null,this._editingProgram=null,this._editingWaterSupply=null,this._addingValve=!1}_newZone(){this._editingZone={id:"",name:"",isNew:!0}}_editZone(e){this._editingZone={id:e.id,name:e.name,isNew:!1}}_cancelZone(){this._editingZone=null}_updateZoneForm(e){this._editingZone=e}async _saveZone(e){let r=e.isNew?ue(e.name):e.id,i=e.isNew?"create_zone":"update_zone";await this._hass.callService("wateringhub",i,{id:r,name:e.name}),this._editingZone=null,this._showToast(this._t("config.saved"))}_deleteZone(e){this._requestConfirm(this._t("config.confirm_delete_zone"),this._t("config.delete"),async()=>{try{await this._hass.callService("wateringhub","delete_zone",{id:e}),this._showToast(this._t("config.deleted"))}catch{this._showToast(this._t("config.error_water_supply_in_use"))}})}_newProgram(){this._editingProgram={id:"",name:"",schedule:{times:["06:00"]},zones:[],dry_run:!1,isNew:!0}}_editProgram(e){let r=this._hass.states[e];r&&(this._editingProgram=ht(r))}_cancelProgram(){this._editingProgram=null}_updateProgramForm(e){this._editingProgram=e}async _saveProgram(e){if(_t(e)){this._showToast(this._t("config.valve_times_required"));return}let r=e.isNew?ue(e.name):e.id,i=e.isNew?"create_program":"update_program";await this._hass.callService("wateringhub",i,{...ft(e,r)}),this._editingProgram=null,this._showToast(this._t("config.saved"))}_deleteProgram(e){this._requestConfirm(this._t("config.confirm_delete_program"),this._t("config.delete"),async()=>{let i=this._hass.states[e]?.attributes.program_id??"";await this._hass.callService("wateringhub","delete_program",{id:i}),this._showToast(this._t("config.deleted"))})}_newWaterSupply(){this._editingWaterSupply={id:"",name:"",isNew:!0}}_editWaterSupply(e){this._editingWaterSupply={...e,isNew:!1}}_cancelWaterSupply(){this._editingWaterSupply=null}_updateWaterSupplyForm(e){this._editingWaterSupply=e}async _saveWaterSupply(e){let r=e.isNew?ue(e.name):e.id,i=e.isNew?"create_water_supply":"update_water_supply";await this._hass.callService("wateringhub",i,{id:r,name:e.name}),this._editingWaterSupply=null,this._showToast(this._t("config.saved"))}_deleteWaterSupply(e){this._requestConfirm(this._t("config.confirm_delete_water_supply"),this._t("config.delete"),async()=>{try{await this._hass.callService("wateringhub","delete_water_supply",{id:e}),this._showToast(this._t("config.deleted"))}catch{this._showToast(this._t("config.error_water_supply_in_use"))}})}_startEditValves(){this._editingValves=de(P(this._hass))}_updateValvesForm(e){this._editingValves=e}async _saveValves(){this._editingValves&&(await this._hass.callService("wateringhub","set_valves",{valves:this._editingValves.map(e=>({entity_id:e.entity_id,name:e.name,water_supply_id:e.water_supply_id,zone_id:e.zone_id}))}),this._editingValves=null,this._showToast(this._t("config.saved")))}_cancelEditValves(){this._editingValves=null}_deleteValveFromTab(e){this._requestConfirm(this._t("config.confirm_delete_valve"),this._t("config.delete"),async()=>{let r=P(this._hass).filter(i=>i.entity_id!==e).map(i=>({entity_id:i.entity_id,name:i.name,water_supply_id:i.water_supply_id,zone_id:i.zone_id}));await this._hass.callService("wateringhub","set_valves",{valves:r}),this._showToast(this._t("config.deleted"))})}_startAddValve(){this._addingValve=!0,this._newValveEntityId="",this._newValveZoneId="",this._newValveSupplyId=""}_cancelAddValve(){this._addingValve=!1,this._newValveEntityId="",this._newValveZoneId="",this._newValveSupplyId=""}_updateNewValveEntity(e){this._newValveEntityId=e}_updateNewValveZone(e){this._newValveZoneId=e}_updateNewValveSupply(e){this._newValveSupplyId=e}async _saveNewValve(){if(!this._newValveEntityId){this._showToast(this._t("config.add_valve_pick_entity"));return}let e=this._hass.states[this._newValveEntityId]?.attributes.friendly_name,r=typeof e=="string"?e:this._newValveEntityId,i=[...P(this._hass).map(o=>({entity_id:o.entity_id,name:o.name,water_supply_id:o.water_supply_id,zone_id:o.zone_id})),{entity_id:this._newValveEntityId,name:r,water_supply_id:this._newValveSupplyId||null,zone_id:this._newValveZoneId||null}];await this._hass.callService("wateringhub","set_valves",{valves:i}),this._showToast(this._t("config.saved")),this._cancelAddValve()}_zonesTabCallbacks(){return{editingSupply:this._editingWaterSupply,onNewSupply:()=>this._newWaterSupply(),onEditSupply:e=>this._editWaterSupply(e),onSaveSupply:e=>this._saveWaterSupply(e),onCancelSupply:()=>this._cancelWaterSupply(),onUpdateSupplyForm:e=>this._updateWaterSupplyForm(e),onDeleteSupply:e=>this._deleteWaterSupply(e),editingZone:this._editingZone,onNewZone:()=>this._newZone(),onEditZone:e=>this._editZone(e),onSaveZone:e=>this._saveZone(e),onCancelZone:()=>this._cancelZone(),onUpdateZoneForm:e=>this._updateZoneForm(e),onDeleteZone:e=>this._deleteZone(e),editingValves:this._editingValves,onStartEditValves:()=>this._startEditValves(),onUpdateValves:e=>this._updateValvesForm(e),onSaveValves:()=>this._saveValves(),onCancelValves:()=>this._cancelEditValves(),onDeleteValve:e=>this._deleteValveFromTab(e),addingValve:this._addingValve,newValveEntityId:this._newValveEntityId,newValveZoneId:this._newValveZoneId,newValveSupplyId:this._newValveSupplyId,onStartAddValve:()=>this._startAddValve(),onCancelAddValve:()=>this._cancelAddValve(),onUpdateNewValveEntity:e=>this._updateNewValveEntity(e),onUpdateNewValveZone:e=>this._updateNewValveZone(e),onUpdateNewValveSupply:e=>this._updateNewValveSupply(e),onSaveNewValve:()=>this._saveNewValve()}}render(){return!this._hass||!this._config?c`<ha-card>${this._t("loading")}</ha-card>`:c`
      <ha-card>
        <div class="header"><span class="title">${this._t("config.title")}</span></div>
        ${Tt(this._activeTab,e=>this._setTab(e),this._t)}
        ${this._activeTab==="programs"?Ne(this._hass,this._editingProgram,e=>this._editProgram(e),e=>this._deleteProgram(e),()=>this._newProgram(),e=>this._saveProgram(e),()=>this._cancelProgram(),e=>this._updateProgramForm(e),this._t):""}
        ${this._activeTab==="zones"?Ce(this._hass,this._zonesTabCallbacks(),this._t):""}
        ${this._toast?c`<div class="toast">${this._toast}</div>`:m}
        ${le(!!this._confirmAction,this._confirmMessage,this._confirmLabel,()=>this._executeConfirm(),()=>this._cancelConfirm(),this._t)}
      </ha-card>
    `}};y.styles=[z,St],v([f()],y.prototype,"_config",2),v([f()],y.prototype,"_hass",2),v([f()],y.prototype,"_activeTab",2),v([f()],y.prototype,"_editingZone",2),v([f()],y.prototype,"_toast",2),v([f()],y.prototype,"_confirmMessage",2),v([f()],y.prototype,"_confirmLabel",2),v([f()],y.prototype,"_confirmAction",2),v([f()],y.prototype,"_editingProgram",2),v([f()],y.prototype,"_editingWaterSupply",2),v([f()],y.prototype,"_editingValves",2),v([f()],y.prototype,"_addingValve",2),v([f()],y.prototype,"_newValveEntityId",2),v([f()],y.prototype,"_newValveZoneId",2),v([f()],y.prototype,"_newValveSupplyId",2),y=v([V("wateringhub-config-card")],y);globalThis.customCards=globalThis.customCards||[];globalThis.customCards.push({type:"wateringhub-config-card",name:"WateringHub Config Card",description:"Configuration card for WateringHub zones and programs"});
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
