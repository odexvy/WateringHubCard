var dt=Object.defineProperty;var pt=Object.getOwnPropertyDescriptor;var h=(o,t,e,r)=>{for(var n=r>1?void 0:r?pt(t,e):t,i=o.length-1,s;i>=0;i--)(s=o[i])&&(n=(r?s(t,e,n):s(n))||n);return r&&n&&dt(t,e,n),n};var X=globalThis,Q=X.ShadowRoot&&(X.ShadyCSS===void 0||X.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ce=Symbol(),Te=new WeakMap,L=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==ce)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(Q&&t===void 0){let r=e!==void 0&&e.length===1;r&&(t=Te.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&Te.set(e,t))}return t}toString(){return this.cssText}},Pe=o=>new L(typeof o=="string"?o:o+"",void 0,ce),A=(o,...t)=>{let e=o.length===1?o[0]:t.reduce((r,n,i)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+o[i+1],o[0]);return new L(e,o,ce)},ke=(o,t)=>{if(Q)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let r=document.createElement("style"),n=X.litNonce;n!==void 0&&r.setAttribute("nonce",n),r.textContent=e.cssText,o.appendChild(r)}},de=Q?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(let r of t.cssRules)e+=r.cssText;return Pe(e)})(o):o;var{is:ut,defineProperty:mt,getOwnPropertyDescriptor:gt,getOwnPropertyNames:vt,getOwnPropertySymbols:ht,getPrototypeOf:ft}=Object,W=globalThis,ze=W.trustedTypes,_t=ze?ze.emptyScript:"",yt=W.reactiveElementPolyfillSupport,j=(o,t)=>o,U={toAttribute(o,t){switch(t){case Boolean:o=o?_t:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},ee=(o,t)=>!ut(o,t),Ce={attribute:!0,type:String,converter:U,reflect:!1,useDefault:!1,hasChanged:ee};Symbol.metadata??=Symbol("metadata"),W.litPropertyMetadata??=new WeakMap;var E=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Ce){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let r=Symbol(),n=this.getPropertyDescriptor(t,r,e);n!==void 0&&mt(this.prototype,t,n)}}static getPropertyDescriptor(t,e,r){let{get:n,set:i}=gt(this.prototype,t)??{get(){return this[e]},set(s){this[e]=s}};return{get:n,set(s){let l=n?.call(this);i?.call(this,s),this.requestUpdate(t,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Ce}static _$Ei(){if(this.hasOwnProperty(j("elementProperties")))return;let t=ft(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(j("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(j("properties"))){let e=this.properties,r=[...vt(e),...ht(e)];for(let n of r)this.createProperty(n,e[n])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[r,n]of e)this.elementProperties.set(r,n)}this._$Eh=new Map;for(let[e,r]of this.elementProperties){let n=this._$Eu(e,r);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let r=new Set(t.flat(1/0).reverse());for(let n of r)e.unshift(de(n))}else t!==void 0&&e.push(de(t));return e}static _$Eu(t,e){let r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ke(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ET(t,e){let r=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,r);if(n!==void 0&&r.reflect===!0){let i=(r.converter?.toAttribute!==void 0?r.converter:U).toAttribute(e,r.type);this._$Em=t,i==null?this.removeAttribute(n):this.setAttribute(n,i),this._$Em=null}}_$AK(t,e){let r=this.constructor,n=r._$Eh.get(t);if(n!==void 0&&this._$Em!==n){let i=r.getPropertyOptions(n),s=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:U;this._$Em=n;let l=s.fromAttribute(e,i.type);this[n]=l??this._$Ej?.get(n)??l,this._$Em=null}}requestUpdate(t,e,r,n=!1,i){if(t!==void 0){let s=this.constructor;if(n===!1&&(i=this[t]),r??=s.getPropertyOptions(t),!((r.hasChanged??ee)(i,e)||r.useDefault&&r.reflect&&i===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,r))))return;this.C(t,e,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:r,reflect:n,wrapped:i},s){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??e??this[t]),i!==!0||s!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(e=void 0),this._$AL.set(t,e)),n===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[n,i]of this._$Ep)this[n]=i;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[n,i]of r){let{wrapped:s}=i,l=this[n];s!==!0||this._$AL.has(n)||l===void 0||this.C(n,void 0,i,l)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(e)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[j("elementProperties")]=new Map,E[j("finalized")]=new Map,yt?.({ReactiveElement:E}),(W.reactiveElementVersions??=[]).push("2.1.2");var fe=globalThis,Ne=o=>o,te=fe.trustedTypes,Re=te?te.createPolicy("lit-html",{createHTML:o=>o}):void 0,He="$lit$",k=`lit$${Math.random().toFixed(9).slice(2)}$`,Ze="?"+k,bt=`<${Ze}>`,q=document,J=()=>q.createComment(""),G=o=>o===null||typeof o!="object"&&typeof o!="function",_e=Array.isArray,xt=o=>_e(o)||typeof o?.[Symbol.iterator]=="function",pe=`[ 	
\f\r]`,B=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Me=/-->/g,qe=/>/g,R=RegExp(`>|${pe}(?:([^\\s"'>=/]+)(${pe}*=${pe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),De=/'/g,Ve=/"/g,Fe=/^(?:script|style|textarea|title)$/i,ye=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),c=ye(1),Zt=ye(2),Ft=ye(3),D=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),Ie=new WeakMap,M=q.createTreeWalker(q,129);function Oe(o,t){if(!_e(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Re!==void 0?Re.createHTML(t):t}var $t=(o,t)=>{let e=o.length-1,r=[],n,i=t===2?"<svg>":t===3?"<math>":"",s=B;for(let l=0;l<e;l++){let a=o[l],d,m,p=-1,v=0;for(;v<a.length&&(s.lastIndex=v,m=s.exec(a),m!==null);)v=s.lastIndex,s===B?m[1]==="!--"?s=Me:m[1]!==void 0?s=qe:m[2]!==void 0?(Fe.test(m[2])&&(n=RegExp("</"+m[2],"g")),s=R):m[3]!==void 0&&(s=R):s===R?m[0]===">"?(s=n??B,p=-1):m[1]===void 0?p=-2:(p=s.lastIndex-m[2].length,d=m[1],s=m[3]===void 0?R:m[3]==='"'?Ve:De):s===Ve||s===De?s=R:s===Me||s===qe?s=B:(s=R,n=void 0);let _=s===R&&o[l+1].startsWith("/>")?" ":"";i+=s===B?a+bt:p>=0?(r.push(d),a.slice(0,p)+He+a.slice(p)+k+_):a+k+(p===-2?l:_)}return[Oe(o,i+(o[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]},K=class o{constructor({strings:t,_$litType$:e},r){let n;this.parts=[];let i=0,s=0,l=t.length-1,a=this.parts,[d,m]=$t(t,e);if(this.el=o.createElement(d,r),M.currentNode=this.el.content,e===2||e===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(n=M.nextNode())!==null&&a.length<l;){if(n.nodeType===1){if(n.hasAttributes())for(let p of n.getAttributeNames())if(p.endsWith(He)){let v=m[s++],_=n.getAttribute(p).split(k),b=/([.?@])?(.*)/.exec(v);a.push({type:1,index:i,name:b[2],strings:_,ctor:b[1]==="."?me:b[1]==="?"?ge:b[1]==="@"?ve:H}),n.removeAttribute(p)}else p.startsWith(k)&&(a.push({type:6,index:i}),n.removeAttribute(p));if(Fe.test(n.tagName)){let p=n.textContent.split(k),v=p.length-1;if(v>0){n.textContent=te?te.emptyScript:"";for(let _=0;_<v;_++)n.append(p[_],J()),M.nextNode(),a.push({type:2,index:++i});n.append(p[v],J())}}}else if(n.nodeType===8)if(n.data===Ze)a.push({type:2,index:i});else{let p=-1;for(;(p=n.data.indexOf(k,p+1))!==-1;)a.push({type:7,index:i}),p+=k.length-1}i++}}static createElement(t,e){let r=q.createElement("template");return r.innerHTML=t,r}};function I(o,t,e=o,r){if(t===D)return t;let n=r!==void 0?e._$Co?.[r]:e._$Cl,i=G(t)?void 0:t._$litDirective$;return n?.constructor!==i&&(n?._$AO?.(!1),i===void 0?n=void 0:(n=new i(o),n._$AT(o,e,r)),r!==void 0?(e._$Co??=[])[r]=n:e._$Cl=n),n!==void 0&&(t=I(o,n._$AS(o,t.values),n,r)),t}var ue=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:r}=this._$AD,n=(t?.creationScope??q).importNode(e,!0);M.currentNode=n;let i=M.nextNode(),s=0,l=0,a=r[0];for(;a!==void 0;){if(s===a.index){let d;a.type===2?d=new Y(i,i.nextSibling,this,t):a.type===1?d=new a.ctor(i,a.name,a.strings,this,t):a.type===6&&(d=new he(i,this,t)),this._$AV.push(d),a=r[++l]}s!==a?.index&&(i=M.nextNode(),s++)}return M.currentNode=q,n}p(t){let e=0;for(let r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}},Y=class o{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,r,n){this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=I(this,t,e),G(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==D&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):xt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==u&&G(this._$AH)?this._$AA.nextSibling.data=t:this.T(q.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:r}=t,n=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=K.createElement(Oe(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===n)this._$AH.p(e);else{let i=new ue(n,this),s=i.u(this.options);i.p(e),this.T(s),this._$AH=i}}_$AC(t){let e=Ie.get(t.strings);return e===void 0&&Ie.set(t.strings,e=new K(t)),e}k(t){_e(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,r,n=0;for(let i of t)n===e.length?e.push(r=new o(this.O(J()),this.O(J()),this,this.options)):r=e[n],r._$AI(i),n++;n<e.length&&(this._$AR(r&&r._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let r=Ne(t).nextSibling;Ne(t).remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},H=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,n,i){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=u}_$AI(t,e=this,r,n){let i=this.strings,s=!1;if(i===void 0)t=I(this,t,e,0),s=!G(t)||t!==this._$AH&&t!==D,s&&(this._$AH=t);else{let l=t,a,d;for(t=i[0],a=0;a<i.length-1;a++)d=I(this,l[r+a],e,a),d===D&&(d=this._$AH[a]),s||=!G(d)||d!==this._$AH[a],d===u?t=u:t!==u&&(t+=(d??"")+i[a+1]),this._$AH[a]=d}s&&!n&&this.j(t)}j(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},me=class extends H{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===u?void 0:t}},ge=class extends H{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==u)}},ve=class extends H{constructor(t,e,r,n,i){super(t,e,r,n,i),this.type=5}_$AI(t,e=this){if((t=I(this,t,e,0)??u)===D)return;let r=this._$AH,n=t===u&&r!==u||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,i=t!==u&&(r===u||n);n&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},he=class{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){I(this,t)}};var wt=fe.litHtmlPolyfillSupport;wt?.(K,Y),(fe.litHtmlVersions??=[]).push("3.3.2");var Le=(o,t,e)=>{let r=e?.renderBefore??t,n=r._$litPart$;if(n===void 0){let i=e?.renderBefore??null;r._$litPart$=n=new Y(t.insertBefore(J(),i),i,void 0,e??{})}return n._$AI(o),n};var be=globalThis,x=class extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Le(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return D}};x._$litElement$=!0,x.finalized=!0,be.litElementHydrateSupport?.({LitElement:x});var St=be.litElementPolyfillSupport;St?.({LitElement:x});(be.litElementVersions??=[]).push("4.2.2");var z=o=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(o,t)}):customElements.define(o,t)};var At={attribute:!0,type:String,converter:U,reflect:!1,hasChanged:ee},Et=(o=At,t,e)=>{let{kind:r,metadata:n}=e,i=globalThis.litPropertyMetadata.get(n);if(i===void 0&&globalThis.litPropertyMetadata.set(n,i=new Map),r==="setter"&&((o=Object.create(o)).wrapped=!0),i.set(e.name,o),r==="accessor"){let{name:s}=e;return{set(l){let a=t.get.call(this);t.set.call(this,l),this.requestUpdate(s,a,o,!0,l)},init(l){return l!==void 0&&this.C(s,void 0,o,l),l}}}if(r==="setter"){let{name:s}=e;return function(l){let a=this[s];t.call(this,l),this.requestUpdate(s,a,o,!0,l)}}throw Error("Unsupported decorator location: "+r)};function je(o){return(t,e)=>typeof e=="object"?Et(o,t,e):((r,n,i)=>{let s=n.hasOwnProperty(i);return n.constructor.createProperty(i,r),s?Object.getOwnPropertyDescriptor(n,i):void 0})(o,t,e)}function f(o){return je({...o,state:!0,attribute:!1})}var Ue={"status.idle":"Idle","status.running":"Running","status.error":"Error","status.disabled":"Disabled",stop_all:"Stop All",next:"Next",last:"Last",no_programs:"No programs found",loading:"Loading...","time.just_now":"just now","time.minutes_ago":"{count}m ago","time.hours_ago":"{count}h ago","time.days_ago":"{count}d ago","time.today_at":"today at {time}","time.tomorrow_at":"tomorrow at {time}","time.in_days":"in {count}d","time.never":"Never","time.no_schedule":"No active program","status.running_program":"Running: {name}",stop_confirm:"Stop all watering?","recap.total_duration":"Total duration: {duration} min","days.mon":"Mon","days.tue":"Tue","days.wed":"Wed","days.thu":"Thu","days.fri":"Fri","days.sat":"Sat","days.sun":"Sun","running.progress":"Valve {done} of {total}","error.program":"Error \u2014 {name}","error.auto_stopped":"All valves have been automatically closed.","config.tab_valves":"Valves","config.tab_zones":"Zones","config.tab_programs":"Programs","config.no_valves":"No valves configured","config.no_zones":"No zones created","config.no_programs":"No programs created","config.new_zone":"New zone","config.new_program":"New program","config.name":"Name","config.save":"Save","config.cancel":"Cancel","config.delete":"Delete","config.edit":"Edit","config.confirm_delete_zone":"Delete this zone?","config.confirm_delete_program":"Delete this program?","config.trigger_time":"Trigger time","config.select_valves":"Select valves","config.select_zones":"Select zones","config.valve_entity":"Entity","config.total_duration":"Total: {duration} min","config.dry_run":"Test mode","config.dry_run_hint":"Runs the sequence without activating valves","running.dry_run":"Test mode","config.follows_program":"Every day","config.frequency_every_n":"Every {n} days","config.frequency_weekdays":"Specific days","recap.frequency_every_n":"every {n}d","config.title":"WateringHub Config","config.editor_valves":"Valves","config.add_valve":"Add valve","config.select_entity":"Switch entity","config.confirm_delete_valve":"Delete this valve?","config.saved":"Saved","config.deleted":"Deleted"};var Be={"status.idle":"En attente","status.running":"Arrosage en cours","status.error":"Erreur","status.disabled":"D\xE9sactiv\xE9",stop_all:"Tout arr\xEAter",next:"Prochain",last:"Dernier",no_programs:"Aucun programme trouv\xE9",loading:"Chargement...","time.just_now":"\xE0 l'instant","time.minutes_ago":"il y a {count} min","time.hours_ago":"il y a {count}h","time.days_ago":"il y a {count}j","time.today_at":"aujourd'hui \xE0 {time}","time.tomorrow_at":"demain \xE0 {time}","time.in_days":"dans {count}j","time.never":"Jamais","time.no_schedule":"Aucun programme actif","status.running_program":"En cours : {name}",stop_confirm:"Arr\xEAter tout l'arrosage ?","recap.total_duration":"Dur\xE9e totale : {duration} min","days.mon":"Lun","days.tue":"Mar","days.wed":"Mer","days.thu":"Jeu","days.fri":"Ven","days.sat":"Sam","days.sun":"Dim","running.progress":"Vanne {done} sur {total}","error.program":"Erreur \u2014 {name}","error.auto_stopped":"Toutes les vannes ont \xE9t\xE9 ferm\xE9es automatiquement.","config.tab_valves":"Vannes","config.tab_zones":"Zones","config.tab_programs":"Programmes","config.no_valves":"Aucune vanne configur\xE9e","config.no_zones":"Aucune zone cr\xE9\xE9e","config.no_programs":"Aucun programme cr\xE9\xE9","config.new_zone":"Nouvelle zone","config.new_program":"Nouveau programme","config.name":"Nom","config.save":"Sauvegarder","config.cancel":"Annuler","config.delete":"Supprimer","config.edit":"Modifier","config.confirm_delete_zone":"Supprimer cette zone ?","config.confirm_delete_program":"Supprimer ce programme ?","config.trigger_time":"Heure de d\xE9clenchement","config.select_valves":"S\xE9lectionner les vannes","config.select_zones":"S\xE9lectionner les zones","config.valve_entity":"Entit\xE9","config.total_duration":"Total : {duration} min","config.dry_run":"Mode test","config.dry_run_hint":"Ex\xE9cute la s\xE9quence sans activer les vannes","running.dry_run":"Mode test","config.follows_program":"Tous les jours","config.frequency_every_n":"Tous les {n} jours","config.frequency_weekdays":"Jours sp\xE9cifiques","recap.frequency_every_n":"tous les {n}j","config.title":"WateringHub Config","config.editor_valves":"Vannes","config.add_valve":"Ajouter une vanne","config.select_entity":"Entit\xE9 switch","config.confirm_delete_valve":"Supprimer cette vanne ?","config.saved":"Enregistr\xE9","config.deleted":"Supprim\xE9"};var xe={en:Ue,fr:Be};function C(o){let t=o?.toLowerCase().startsWith("fr")?"fr":"en",e=xe[t]??xe.en;return(r,n)=>{let i=e[r]??xe.en[r]??r;return n&&(i=i.replace(/\{(\w+)\}/g,(s,l)=>String(n[l]??s))),i}}var N=A`
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
`;var Je=A`
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
`;function oe(o){return Object.keys(o.states).filter(t=>t.startsWith("switch.wateringhub_"))}function Z(o,t){return typeof o?.attributes.friendly_name=="string"?o.attributes.friendly_name:t}function ne(o){return o.states["sensor.wateringhub_status"]?.state??"idle"}function Ge(o){let t=o.states["sensor.wateringhub_status"];if(t?.state!=="error")return null;let e=t.attributes,r=e.current_program,n=r?o.states[`switch.wateringhub_${r}`]:void 0;return{programName:Z(n,r??""),errorMessage:e.error_message??""}}function Ke(o){let t=o.states["sensor.wateringhub_status"];if(t?.state!=="running")return null;let e=t.attributes,r=e.current_valve_start,n=e.current_valve_duration??0,i=e.valves_done??0,s=e.valves_total??1,l=r?Math.max(0,(Date.now()-new Date(r).getTime())/1e3):0,a=Math.max(0,n-l),d=n>0?Math.min(100,l/n*100):0,m=(i+d/100)/s*100,p=(i+1)/s*100,v=Array.isArray(e.valves_sequence)?e.valves_sequence:[],_=v.filter(g=>g.status==="pending").reduce((g,y)=>g+y.duration,0),b=a+_,O=v.length>0?v.reduce((g,y)=>g+y.duration,0):n*s,se=v.filter(g=>g.status==="done").reduce((g,y)=>g+y.duration,0)+l;return{programName:e.current_program??"",zoneName:e.current_zone_name??"",valveName:e.current_valve_name??"",valveStart:r??"",valveDuration:n,valvesDone:i,valvesTotal:s,progressPercent:e.progress_percent??0,remaining:a,totalRemaining:b,totalDuration:O,totalElapsed:se,valvePercent:d,finePercent:m,globalEndPercent:p,valveSequence:v,dryRun:e.dry_run===!0}}function $e(o){if(o<=0)return"0:00";let t=Math.floor(o/3600),e=Math.floor(o%3600/60),r=Math.floor(o%60);return t>0?`${t}:${e.toString().padStart(2,"0")}:${r.toString().padStart(2,"0")}`:`${e}:${r.toString().padStart(2,"0")}`}function ie(o,t){return o?o.time:""}function Ye(o){return!o||o.state==="None"||o.state==="unknown"||o.state==="unavailable"}function we(o,t,e,r){let n=o.states[t];if(Ye(n))return e("time.never");let i=new Date(n.state);if(Number.isNaN(i.getTime()))return n.state;let s=new Date,l=s.getTime()-i.getTime();if(l<0){let p=new Date(s.getFullYear(),s.getMonth(),s.getDate()),v=new Date(i.getFullYear(),i.getMonth(),i.getDate()),_=Math.round((v.getTime()-p.getTime())/(1e3*60*60*24)),b=i.toLocaleTimeString(r??[],{hour:"2-digit",minute:"2-digit"});return _===0?e("time.today_at",{time:b}):_===1?e("time.tomorrow_at",{time:b}):e("time.in_days",{count:_})}let a=Math.floor(l/(1e3*60));if(a<1)return e("time.just_now");if(a<60)return e("time.minutes_ago",{count:a});let d=Math.floor(a/60);if(d<24)return e("time.hours_ago",{count:d});let m=Math.floor(d/24);return e("time.days_ago",{count:m})}function Xe(o,t,e){let r=o.states["sensor.wateringhub_next_run"];return Ye(r)?t("time.no_schedule"):we(o,"sensor.wateringhub_next_run",t,e)}function Qe(o){return c`
    <div class="header">
      <span class="title">${o}</span>
    </div>
  `}function kt(o,t,e){return t?ne(o)==="running"?c``:c`
    <div class="program-status">
      <span class="badge-sm badge-idle">${e("status.idle")}</span>
      <span class="info-sm">${e("next")}: ${Xe(o,e,o.language)}</span>
      <span class="info-sm">
        ${e("last")}: ${we(o,"sensor.wateringhub_last_run",e,o.language)}
      </span>
    </div>
  `:c`
      <div class="program-status">
        <span class="badge-sm badge-disabled">${e("status.disabled")}</span>
      </div>
    `}function We(o,t){let e=Ge(o);return e?c`
    <div class="error-view">
      <div class="error-title">
        <ha-icon icon="mdi:alert-circle"></ha-icon>
        ${t("error.program",{name:e.programName})}
      </div>
      ${e.errorMessage?c`<div class="error-message">${e.errorMessage}</div>`:u}
      <div class="error-auto-stopped">${t("error.auto_stopped")}</div>
    </div>
  `:c``}function et(o,t,e){let r=Ke(o);if(!r)return c``;let n=2*Math.PI*30,i=r.totalDuration>0?r.totalElapsed/r.totalDuration:0,s=n*(1-Math.min(1,i));return c`
    <div class="running-block">
      <button class="running-stop-btn" @click=${t}>${e("stop_all")}</button>
      ${r.dryRun?c`<span class="badge-dry-run">${e("running.dry_run")}</span>`:u}

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
            <span class="cp-time">${$e(r.totalRemaining)}</span>
          </div>
        </div>
        <div class="global-info">
          <div class="global-program-name">
            ${Z(o.states[`switch.wateringhub_${r.programName}`],r.programName)}
          </div>
          <div class="global-sub">
            ${e("running.progress",{done:r.valvesDone+1,total:r.valvesTotal})}
          </div>
        </div>
      </div>

      ${r.valveSequence.length>0?zt(r.valveSequence,r.remaining):u}
    </div>
  `}function zt(o,t){let e=[];for(let l of o){let a=e[e.length-1];a?.zoneName===l.zone_name?a.valves.push(l):e.push({zoneName:l.zone_name,valves:[l]})}let r=c`<svg viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z"
    />
  </svg>`,n=c`<svg viewBox="0 0 24 24">
    <circle fill="currentColor" cx="12" cy="12" r="6" />
  </svg>`,i=c`<svg viewBox="0 0 24 24">
    <circle fill="none" stroke="currentColor" stroke-width="2" cx="12" cy="12" r="6" />
  </svg>`,s={done:r,running:n,pending:i};return c`
    <div class="valve-timeline">
      ${e.map(l=>c`
          <div class="tl-zone">${l.zoneName}</div>
          ${l.valves.map(a=>{let d=Math.ceil(a.duration/60);return c`
              <div class="tl-step tl-${a.status}">
                <span class="tl-dot">${s[a.status]}</span>
                <span class="tl-step-name">${a.valve_name}</span>
                <span class="tl-step-time">
                  ${a.status==="running"?$e(t):`${d} min`}
                </span>
              </div>
            `})}
        `)}
    </div>
  `}function tt(o,t,e,r,n,i){return t.length===0?c`<div class="empty-state">${i("no_programs")}</div>`:c`${t.map(s=>{let l=o.states[s];if(!l)return u;let a=l.state==="on",d=e===s,m=Z(l,s);return c`
      <div class="program-wrapper">
        <div class="program">
          <div class="program-header" @click=${()=>r(s)}>
            <ha-icon class="chevron ${d?"open":""}" icon="mdi:chevron-down"></ha-icon>
            ${a?c`<div class="active-dot"></div>`:u}
            <span class="program-name ${a?"active":""}">${m}</span>
          </div>
          <ha-switch .checked=${a} @change=${()=>n(s)}></ha-switch>
        </div>
        ${kt(o,a,i)}
        ${Ct(l.attributes,d,i)}
      </div>
    `})}`}function Ct(o,t,e){let r=o.schedule,n=o.zones??[],i=o.total_duration;return c`
    <div class="program-recap ${t?"open":""}">
      ${r?c`<div class="recap-schedule">
            <ha-icon icon="mdi:calendar-clock"></ha-icon>
            ${ie(r,e)}
          </div>`:u}
      ${n.map(s=>c`
          <div class="recap-zone">
            <span class="recap-zone-badge">${s.zone_name}</span>
          </div>
          ${s.valves.map(l=>c`
              <div class="recap-valve">
                <ha-icon icon="mdi:water"></ha-icon>
                ${l.valve_name} — ${l.duration}
                min${Nt(l.frequency,e)}
              </div>
            `)}
        `)}
      ${i?c`<div class="recap-total">
            <ha-icon icon="mdi:timer-outline"></ha-icon>
            ${e("recap.total_duration",{duration:i})}
          </div>`:u}
    </div>
  `}function Nt(o,t){return o?o.type==="every_n_days"?` \xB7 ${t("recap.frequency_every_n",{n:o.n??2})}`:o.type==="weekdays"&&o.days?.length?` \xB7 ${o.days.map(r=>t(`days.${r}`)).join(", ")}`:"":""}var V=class extends x{constructor(){super(...arguments);this._t=e=>e}set hass(e){this._hass=e,this._t=C(e.language)}setConfig(e){this._config=e}_titleChanged(e){let r=e.target.value;this._config={...this._config,title:r},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config}}))}render(){return c`
      <div class="form-row">
        <label class="form-label">${this._t("config.name")}</label>
        <input
          class="form-input"
          .value=${this._config?.title??""}
          @input=${this._titleChanged}
        />
      </div>
    `}};V.styles=[N],h([f()],V.prototype,"_config",2),h([f()],V.prototype,"_hass",2),V=h([z("wateringhub-card-editor")],V);var S=class extends x{constructor(){super(...arguments);this._programEntities=[];this._expandedProgram=null;this._tick=0;this._t=e=>e;this._timerInterval=null;this._unsubEvents=null}static getConfigElement(){return document.createElement("wateringhub-card-editor")}setConfig(e){this._config=e}set hass(e){let r=this._hass;this._hass=e,this._t=C(e.language),r?.states!==e.states&&(this._programEntities=oe(e)),this._updateTimer(ne(e)),this._subscribeEvents()}disconnectedCallback(){super.disconnectedCallback(),this._clearTimer(),this._unsubscribeEvents()}_subscribeEvents(){this._unsubEvents||!this._hass?.connection||this._hass.connection.subscribeEvents(()=>{this._tick++},"wateringhub_event").then(e=>{this._unsubEvents=e})}_unsubscribeEvents(){this._unsubEvents&&(this._unsubEvents(),this._unsubEvents=null)}_updateTimer(e){e==="running"&&!this._timerInterval?this._timerInterval=setInterval(()=>{this._tick++},1e3):e!=="running"&&this._timerInterval&&this._clearTimer()}_clearTimer(){this._timerInterval&&(clearInterval(this._timerInterval),this._timerInterval=null)}getCardSize(){return 3}_toggleExpand(e){this._expandedProgram=this._expandedProgram===e?null:e}_toggleProgram(e){let r=this._hass.states[e];if(!r)return;let n=r.state==="on"?"turn_off":"turn_on";this._hass.callService("switch",n,{entity_id:e})}_stopAll(){confirm(this._t("stop_confirm"))&&this._hass.callService("wateringhub","stop_all",{})}render(){if(!this._hass||!this._config)return c`<ha-card>${this._t("loading")}</ha-card>`;let e=this._config.title??"WateringHub";return c`
      <ha-card>
        ${Qe(e)} ${We(this._hass,this._t)}
        ${et(this._hass,()=>this._stopAll(),this._t)}
        ${tt(this._hass,this._programEntities,this._expandedProgram,r=>this._toggleExpand(r),r=>this._toggleProgram(r),this._t)}
      </ha-card>
    `}};S.styles=[N,Je],h([f()],S.prototype,"_config",2),h([f()],S.prototype,"_hass",2),h([f()],S.prototype,"_programEntities",2),h([f()],S.prototype,"_expandedProgram",2),h([f()],S.prototype,"_tick",2),S=h([z("wateringhub-card")],S);globalThis.customCards=globalThis.customCards||[];globalThis.customCards.push({type:"wateringhub-card",name:"WateringHub Card",description:"Watering management card for WateringHub"});var rt=A`
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

  /* Drag handle */
  .drag-handle {
    --mdc-icon-size: 18px;
    color: var(--disabled-text-color);
    cursor: grab;
    flex-shrink: 0;
  }
  .drag-handle:active {
    cursor: grabbing;
  }

  /* Valve config block (duration + frequency) */
  .valve-config-block {
    cursor: default;
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
  .btn:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
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
  .add-btn:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
  }
  .action-btn:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
  }

  /* Total duration */
  .total-duration {
    font-size: 13px;
    color: var(--secondary-text-color);
    margin-top: 8px;
    text-align: right;
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
`;function F(o){return o.states["sensor.wateringhub_status"]?.attributes.available_valves??[]}function Se(o){return o.states["sensor.wateringhub_status"]?.attributes.zones??[]}function Ae(o){return o.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"_").replace(/^_|_$/g,"")}function it(o,t,e){let r=[{id:"programs",label:e("config.tab_programs")},{id:"zones",label:e("config.tab_zones")},{id:"valves",label:e("config.tab_valves")}];return c`
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
  `}function st(o,t){let e=F(o);return e.length===0?c`<div class="empty-state">${t("config.no_valves")}</div>`:c`
    ${e.map(r=>c`
        <div class="list-item">
          <div class="list-item-header">
            <div>
              <div class="list-item-name">${r.name}</div>
              <div class="list-item-sub">${t("config.valve_entity")}: ${r.entity_id}</div>
            </div>
          </div>
        </div>
      `)}
  `}function at(o,t,e,r,n,i,s,l,a){let d=Se(o),m=F(o);return c`
    ${d.map(p=>t&&t.id===p.id?ot(t,m,i,s,l,a):Rt(p,m,e,r,a))}
    ${t?.isNew?ot(t,m,i,s,l,a):u}
    ${t?u:c`<button class="add-btn" @click=${n}>+ ${a("config.new_zone")}</button>`}
    ${d.length===0&&!t?c`<div class="empty-state">${a("config.no_zones")}</div>`:u}
  `}function Rt(o,t,e,r,n){let i=o.valves.map(s=>t.find(l=>l.id===s)?.name??s).join(", ");return c`
    <div class="list-item">
      <div class="list-item-header">
        <div>
          <div class="list-item-name">${o.name}</div>
          <div class="list-item-sub">${i}</div>
        </div>
        <div class="list-item-actions">
          <button class="action-btn" @click=${()=>e(o)} title="${n("config.edit")}">
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
  `}function ot(o,t,e,r,n,i){return c`
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
          ${t.map(s=>{let l=o.valves.includes(s.id);return c`
              <label class="checkbox-item">
                <input
                  type="checkbox"
                  .checked=${l}
                  @change=${()=>{let a=l?o.valves.filter(d=>d!==s.id):[...o.valves,s.id];n({...o,valves:a})}}
                />
                ${s.name}
              </label>
            `})}
        </div>
      </div>
      <div class="form-actions">
        <button class="btn btn-cancel" @click=${r}>${i("config.cancel")}</button>
        <button class="btn btn-primary" @click=${()=>e(o)}>${i("config.save")}</button>
      </div>
    </div>
  `}function lt(o,t,e,r,n,i,s,l,a){let d=oe(o),m=Se(o),p=F(o);return c`
    ${d.map(v=>{let _=o.states[v];if(!_)return u;let b=_.attributes.program_id??"";return t&&t.id===b?nt(t,m,p,i,s,l,a):Mt(_,v,e,r,a)})}
    ${t?.isNew?nt(t,m,p,i,s,l,a):u}
    ${t?u:c`<button class="add-btn" @click=${n}>+ ${a("config.new_program")}</button>`}
    ${d.length===0&&!t?c`<div class="empty-state">${a("config.no_programs")}</div>`:u}
  `}function Mt(o,t,e,r,n){let i=Z(o,t),s=o.attributes.schedule,l=o.attributes.total_duration,a=o.attributes.dry_run===!0,d=ie(s,n);return c`
    <div class="list-item">
      <div class="list-item-header">
        <div>
          <div class="list-item-name">
            ${i}
            ${a?c`<span class="dry-run-tag">${n("config.dry_run")}</span>`:u}
          </div>
          <div class="list-item-sub">
            ${d}${l?` \u2014 ${l} min`:""}
          </div>
        </div>
        <div class="list-item-actions">
          <button class="action-btn" @click=${()=>e(t)} title="${n("config.edit")}">
            <ha-icon icon="mdi:pencil"></ha-icon>
          </button>
          <button
            class="action-btn delete"
            @click=${()=>r(t)}
            title="${n("config.delete")}"
          >
            <ha-icon icon="mdi:delete"></ha-icon>
          </button>
        </div>
      </div>
    </div>
  `}function nt(o,t,e,r,n,i,s){let l=o.zones.reduce((a,d)=>a+d.valves.reduce((m,p)=>m+(p.duration||0),0),0);return c`
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
        ${t.map(a=>{let d=o.zones.find(p=>p.zone_id===a.id),m=!!d;return c`
            <div class="form-zone-section">
              <label class="checkbox-item">
                <input
                  type="checkbox"
                  .checked=${m}
                  @change=${()=>{let p=m?o.zones.filter(v=>v.zone_id!==a.id):[...o.zones,{zone_id:a.id,valves:a.valves.map(v=>({valve_id:v,duration:10}))}];i({...o,zones:p})}}
                />
                <span class="form-zone-name">${a.name}</span>
              </label>
              ${m&&d?c`
                    ${d.valves.map((p,v)=>{let _=e.find(g=>g.id===p.valve_id)?.name??p.valve_id,b=g=>{let y=d.valves.map($=>$.valve_id===p.valve_id?{...$,...g}:$),P=o.zones.map($=>$.zone_id===a.id?{...$,valves:y}:$);i({...o,zones:P})},O=p.frequency?.type??"",Ee=new Date().toISOString().slice(0,10),se=(g,y)=>{let P=[...d.valves],[$]=P.splice(g,1);P.splice(y,0,$);let ae=o.zones.map(le=>le.zone_id===a.id?{...le,valves:P}:le);i({...o,zones:ae})};return c`
                        <div
                          class="valve-config-block"
                          draggable="true"
                          @dragstart=${g=>{g.dataTransfer?.setData("text/plain",String(v))}}
                          @dragover=${g=>g.preventDefault()}
                          @drop=${g=>{g.preventDefault();let y=parseInt(g.dataTransfer?.getData("text/plain")??"");!isNaN(y)&&y!==v&&se(y,v)}}
                        >
                          <div class="valve-duration-row">
                            <ha-icon class="drag-handle" icon="mdi:drag"></ha-icon>
                            <label>${_}</label>
                            <input
                              class="valve-duration-input"
                              type="number"
                              min="1"
                              .value=${String(p.duration)}
                              @input=${g=>b({duration:parseInt(g.target.value)||1})}
                            />
                            <span>min</span>
                          </div>
                          <div class="valve-frequency-row">
                            <select
                              class="valve-freq-select"
                              .value=${O}
                              @change=${g=>{let y=g.target.value;b(y?y==="every_n_days"?{frequency:{type:"every_n_days",n:2,start_date:Ee}}:{frequency:{type:"weekdays",days:[]}}:{frequency:void 0})}}
                            >
                              <option value="">${s("config.follows_program")}</option>
                              <option value="every_n_days">
                                ${s("config.frequency_every_n",{n:p.frequency?.n??2})}
                              </option>
                              <option value="weekdays">${s("config.frequency_weekdays")}</option>
                            </select>
                            ${O==="every_n_days"?c`
                                  <input
                                    class="valve-freq-n-input"
                                    type="number"
                                    min="2"
                                    .value=${String(p.frequency?.n??2)}
                                    @input=${g=>b({frequency:{...p.frequency,n:parseInt(g.target.value)||2}})}
                                  />
                                  <span>j</span>
                                `:u}
                            ${O==="weekdays"?c`
                                  <div class="valve-freq-days">
                                    ${["mon","tue","wed","thu","fri","sat","sun"].map(g=>{let y=p.frequency?.days?.includes(g)??!1;return c`
                                          <label class="valve-freq-day">
                                            <input
                                              type="checkbox"
                                              .checked=${y}
                                              @change=${()=>{let P=p.frequency?.days??[],$=y?P.filter(ae=>ae!==g):[...P,g];b({frequency:{...p.frequency,days:$}})}}
                                            />
                                            ${s(`days.${g}`)}
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
  `}var ct=A`
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
`;var T=class extends x{constructor(){super(...arguments);this._adding=!1;this._newEntityId="";this._t=e=>e}set hass(e){this._hass=e,this._t=C(e.language)}setConfig(e){this._config=e}_getValves(){return this._hass?F(this._hass):[]}async _setValves(e){await this._hass.callService("wateringhub","set_valves",{valves:e})}async _deleteValve(e){if(!confirm(this._t("config.confirm_delete_valve")))return;let r=this._getValves().filter(n=>n.entity_id!==e).map(n=>({entity_id:n.entity_id,name:n.name}));await this._setValves(r)}_startAdd(){this._adding=!0,this._newEntityId=""}_onEntityPicked(e){this._newEntityId=e.detail.value}_getFriendlyName(e){let n=this._hass?.states[e]?.attributes.friendly_name;return typeof n=="string"?n:e}async _confirmAdd(){if(!this._newEntityId)return;let e=this._getFriendlyName(this._newEntityId),r=[...this._getValves().map(n=>({entity_id:n.entity_id,name:n.name})),{entity_id:this._newEntityId,name:e}];await this._setValves(r),this._adding=!1,this._newEntityId=""}_cancelAdd(){this._adding=!1}render(){let e=this._getValves();return c`
      <div class="editor-section">
        <span class="editor-label">${this._t("config.editor_valves")}</span>

        ${e.length===0&&!this._adding?c`<div class="empty-state">${this._t("config.no_valves")}</div>`:u}
        ${e.map(r=>c`
            <div class="valve-item">
              <div class="valve-item-info">
                <div class="valve-item-name">${r.name}</div>
                <div class="valve-item-entity">${r.entity_id}</div>
              </div>
              <button
                class="delete-btn"
                @click=${()=>this._deleteValve(r.entity_id)}
                title="${this._t("config.delete")}"
              >
                <ha-icon icon="mdi:delete"></ha-icon>
              </button>
            </div>
          `)}
        ${this._adding?c`
              <div class="add-form">
                <ha-entity-picker
                  .hass=${this._hass}
                  .includeDomains=${["switch"]}
                  .value=${this._newEntityId}
                  @value-changed=${this._onEntityPicked}
                  allow-custom-entity
                ></ha-entity-picker>
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
    `}};T.styles=[N,ct],h([f()],T.prototype,"_config",2),h([f()],T.prototype,"_hass",2),h([f()],T.prototype,"_adding",2),h([f()],T.prototype,"_newEntityId",2),T=h([z("wateringhub-config-editor")],T);var w=class extends x{constructor(){super(...arguments);this._activeTab="programs";this._editingZone=null;this._toast="";this._editingProgram=null;this._t=e=>e}static getConfigElement(){return document.createElement("wateringhub-config-editor")}setConfig(e){this._config=e}set hass(e){this._hass=e,this._t=C(e.language)}getCardSize(){return 5}_showToast(e){this._toast=e,setTimeout(()=>{this._toast=""},3e3)}_setTab(e){this._activeTab=e,this._editingZone=null,this._editingProgram=null}_newZone(){this._editingZone={id:"",name:"",valves:[],isNew:!0}}_editZone(e){this._editingZone={id:e.id,name:e.name,valves:[...e.valves],isNew:!1}}_cancelZone(){this._editingZone=null}_updateZoneForm(e){this._editingZone=e}async _saveZone(e){let r=e.isNew?Ae(e.name):e.id,n=e.isNew?"create_zone":"update_zone";await this._hass.callService("wateringhub",n,{id:r,name:e.name,valves:e.valves}),this._editingZone=null,this._showToast(this._t("config.saved"))}async _deleteZone(e){confirm(this._t("config.confirm_delete_zone"))&&(await this._hass.callService("wateringhub","delete_zone",{id:e}),this._showToast(this._t("config.deleted")))}_newProgram(){this._editingProgram={id:"",name:"",schedule:{time:"06:00"},zones:[],dry_run:!1,isNew:!0}}_editProgram(e){let r=this._hass.states[e];if(!r)return;let n=r.attributes,i=n.program_id??"",s=n.schedule??{time:"06:00"},l=(n.zones??[]).map(a=>({zone_id:a.zone_id,valves:a.valves.map(d=>({valve_id:d.valve_id,duration:d.duration,frequency:d.frequency}))}));this._editingProgram={id:i,name:typeof n.friendly_name=="string"?n.friendly_name:i,schedule:s,zones:l,dry_run:n.dry_run===!0,isNew:!1}}_cancelProgram(){this._editingProgram=null}_updateProgramForm(e){this._editingProgram=e}async _saveProgram(e){let r=e.isNew?Ae(e.name):e.id,n=e.isNew?"create_program":"update_program";await this._hass.callService("wateringhub",n,{id:r,name:e.name,schedule:e.schedule,dry_run:e.dry_run,zones:e.zones.map(i=>({zone_id:i.zone_id,valves:i.valves.map(s=>({valve_id:s.valve_id,duration:s.duration,...s.frequency?{frequency:s.frequency}:{}}))}))}),this._editingProgram=null,this._showToast(this._t("config.saved"))}async _deleteProgram(e){if(confirm(this._t("config.confirm_delete_program"))){let n=this._hass.states[e]?.attributes.program_id??"";await this._hass.callService("wateringhub","delete_program",{id:n}),this._showToast(this._t("config.deleted"))}}render(){return!this._hass||!this._config?c`<ha-card>${this._t("loading")}</ha-card>`:c`
      <ha-card>
        <div class="header"><span class="title">${this._t("config.title")}</span></div>
        ${it(this._activeTab,e=>this._setTab(e),this._t)}
        ${this._activeTab==="valves"?st(this._hass,this._t):""}
        ${this._activeTab==="zones"?at(this._hass,this._editingZone,e=>this._editZone(e),e=>this._deleteZone(e),()=>this._newZone(),e=>this._saveZone(e),()=>this._cancelZone(),e=>this._updateZoneForm(e),this._t):""}
        ${this._activeTab==="programs"?lt(this._hass,this._editingProgram,e=>this._editProgram(e),e=>this._deleteProgram(e),()=>this._newProgram(),e=>this._saveProgram(e),()=>this._cancelProgram(),e=>this._updateProgramForm(e),this._t):""}
        ${this._toast?c`<div class="toast">${this._toast}</div>`:u}
      </ha-card>
    `}};w.styles=[N,rt],h([f()],w.prototype,"_config",2),h([f()],w.prototype,"_hass",2),h([f()],w.prototype,"_activeTab",2),h([f()],w.prototype,"_editingZone",2),h([f()],w.prototype,"_toast",2),h([f()],w.prototype,"_editingProgram",2),w=h([z("wateringhub-config-card")],w);globalThis.customCards=globalThis.customCards||[];globalThis.customCards.push({type:"wateringhub-config-card",name:"WateringHub Config Card",description:"Configuration card for WateringHub zones and programs"});
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
