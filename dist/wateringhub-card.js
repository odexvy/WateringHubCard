var ht=Object.defineProperty;var ft=Object.getOwnPropertyDescriptor;var v=(o,t,e,r)=>{for(var i=r>1?void 0:r?ft(t,e):t,n=o.length-1,s;n>=0;n--)(s=o[n])&&(i=(r?s(t,e,i):s(i))||i);return r&&i&&ht(t,e,i),i};var re=globalThis,ie=re.ShadowRoot&&(re.ShadyCSS===void 0||re.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ve=Symbol(),Ce=new WeakMap,H=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==ve)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(ie&&t===void 0){let r=e!==void 0&&e.length===1;r&&(t=Ce.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&Ce.set(e,t))}return t}toString(){return this.cssText}},Ve=o=>new H(typeof o=="string"?o:o+"",void 0,ve),k=(o,...t)=>{let e=o.length===1?o[0]:t.reduce((r,i,n)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[n+1],o[0]);return new H(e,o,ve)},Ne=(o,t)=>{if(ie)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let r=document.createElement("style"),i=re.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=e.cssText,o.appendChild(r)}},he=ie?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(let r of t.cssRules)e+=r.cssText;return Ve(e)})(o):o;var{is:_t,defineProperty:yt,getOwnPropertyDescriptor:xt,getOwnPropertyNames:bt,getOwnPropertySymbols:wt,getPrototypeOf:$t}=Object,oe=globalThis,Me=oe.trustedTypes,St=Me?Me.emptyScript:"",kt=oe.reactiveElementPolyfillSupport,B=(o,t)=>o,U={toAttribute(o,t){switch(t){case Boolean:o=o?St:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},ne=(o,t)=>!_t(o,t),De={attribute:!0,type:String,converter:U,reflect:!1,useDefault:!1,hasChanged:ne};Symbol.metadata??=Symbol("metadata"),oe.litPropertyMetadata??=new WeakMap;var A=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=De){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let r=Symbol(),i=this.getPropertyDescriptor(t,r,e);i!==void 0&&yt(this.prototype,t,i)}}static getPropertyDescriptor(t,e,r){let{get:i,set:n}=xt(this.prototype,t)??{get(){return this[e]},set(s){this[e]=s}};return{get:i,set(s){let l=i?.call(this);n?.call(this,s),this.requestUpdate(t,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??De}static _$Ei(){if(this.hasOwnProperty(B("elementProperties")))return;let t=$t(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(B("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(B("properties"))){let e=this.properties,r=[...bt(e),...wt(e)];for(let i of r)this.createProperty(i,e[i])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[r,i]of e)this.elementProperties.set(r,i)}this._$Eh=new Map;for(let[e,r]of this.elementProperties){let i=this._$Eu(e,r);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let r=new Set(t.flat(1/0).reverse());for(let i of r)e.unshift(he(i))}else t!==void 0&&e.push(he(t));return e}static _$Eu(t,e){let r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ne(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ET(t,e){let r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(i!==void 0&&r.reflect===!0){let n=(r.converter?.toAttribute!==void 0?r.converter:U).toAttribute(e,r.type);this._$Em=t,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,e){let r=this.constructor,i=r._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let n=r.getPropertyOptions(i),s=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:U;this._$Em=i;let l=s.fromAttribute(e,n.type);this[i]=l??this._$Ej?.get(i)??l,this._$Em=null}}requestUpdate(t,e,r,i=!1,n){if(t!==void 0){let s=this.constructor;if(i===!1&&(n=this[t]),r??=s.getPropertyOptions(t),!((r.hasChanged??ne)(n,e)||r.useDefault&&r.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,r))))return;this.C(t,e,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:r,reflect:i,wrapped:n},s){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??e??this[t]),n!==!0||s!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,n]of this._$Ep)this[i]=n;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[i,n]of r){let{wrapped:s}=n,l=this[i];s!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,n,l)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(e)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[B("elementProperties")]=new Map,A[B("finalized")]=new Map,kt?.({ReactiveElement:A}),(oe.reactiveElementVersions??=[]).push("2.1.2");var $e=globalThis,Fe=o=>o,se=$e.trustedTypes,qe=se?se.createPolicy("lit-html",{createHTML:o=>o}):void 0,He="$lit$",z=`lit$${Math.random().toFixed(9).slice(2)}$`,Be="?"+z,At=`<${Be}>`,V=document,J=()=>V.createComment(""),G=o=>o===null||typeof o!="object"&&typeof o!="function",Se=Array.isArray,zt=o=>Se(o)||typeof o?.[Symbol.iterator]=="function",fe=`[ 	
\f\r]`,Y=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ze=/-->/g,Ie=/>/g,R=RegExp(`>|${fe}(?:([^\\s"'>=/]+)(${fe}*=${fe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Le=/'/g,Oe=/"/g,Ue=/^(?:script|style|textarea|title)$/i,ke=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),c=ke(1),or=ke(2),nr=ke(3),N=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),je=new WeakMap,C=V.createTreeWalker(V,129);function Ye(o,t){if(!Se(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return qe!==void 0?qe.createHTML(t):t}var Tt=(o,t)=>{let e=o.length-1,r=[],i,n=t===2?"<svg>":t===3?"<math>":"",s=Y;for(let l=0;l<e;l++){let a=o[l],d,u,p=-1,f=0;for(;f<a.length&&(s.lastIndex=f,u=s.exec(a),u!==null);)f=s.lastIndex,s===Y?u[1]==="!--"?s=Ze:u[1]!==void 0?s=Ie:u[2]!==void 0?(Ue.test(u[2])&&(i=RegExp("</"+u[2],"g")),s=R):u[3]!==void 0&&(s=R):s===R?u[0]===">"?(s=i??Y,p=-1):u[1]===void 0?p=-2:(p=s.lastIndex-u[2].length,d=u[1],s=u[3]===void 0?R:u[3]==='"'?Oe:Le):s===Oe||s===Le?s=R:s===Ze||s===Ie?s=Y:(s=R,i=void 0);let g=s===R&&o[l+1].startsWith("/>")?" ":"";n+=s===Y?a+At:p>=0?(r.push(d),a.slice(0,p)+He+a.slice(p)+z+g):a+z+(p===-2?l:g)}return[Ye(o,n+(o[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]},K=class o{constructor({strings:t,_$litType$:e},r){let i;this.parts=[];let n=0,s=0,l=t.length-1,a=this.parts,[d,u]=Tt(t,e);if(this.el=o.createElement(d,r),C.currentNode=this.el.content,e===2||e===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(i=C.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(let p of i.getAttributeNames())if(p.endsWith(He)){let f=u[s++],g=i.getAttribute(p).split(z),_=/([.?@])?(.*)/.exec(f);a.push({type:1,index:n,name:_[2],strings:g,ctor:_[1]==="."?ye:_[1]==="?"?xe:_[1]==="@"?be:Z}),i.removeAttribute(p)}else p.startsWith(z)&&(a.push({type:6,index:n}),i.removeAttribute(p));if(Ue.test(i.tagName)){let p=i.textContent.split(z),f=p.length-1;if(f>0){i.textContent=se?se.emptyScript:"";for(let g=0;g<f;g++)i.append(p[g],J()),C.nextNode(),a.push({type:2,index:++n});i.append(p[f],J())}}}else if(i.nodeType===8)if(i.data===Be)a.push({type:2,index:n});else{let p=-1;for(;(p=i.data.indexOf(z,p+1))!==-1;)a.push({type:7,index:n}),p+=z.length-1}n++}}static createElement(t,e){let r=V.createElement("template");return r.innerHTML=t,r}};function q(o,t,e=o,r){if(t===N)return t;let i=r!==void 0?e._$Co?.[r]:e._$Cl,n=G(t)?void 0:t._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),n===void 0?i=void 0:(i=new n(o),i._$AT(o,e,r)),r!==void 0?(e._$Co??=[])[r]=i:e._$Cl=i),i!==void 0&&(t=q(o,i._$AS(o,t.values),i,r)),t}var _e=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:r}=this._$AD,i=(t?.creationScope??V).importNode(e,!0);C.currentNode=i;let n=C.nextNode(),s=0,l=0,a=r[0];for(;a!==void 0;){if(s===a.index){let d;a.type===2?d=new X(n,n.nextSibling,this,t):a.type===1?d=new a.ctor(n,a.name,a.strings,this,t):a.type===6&&(d=new we(n,this,t)),this._$AV.push(d),a=r[++l]}s!==a?.index&&(n=C.nextNode(),s++)}return C.currentNode=V,i}p(t){let e=0;for(let r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}},X=class o{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,r,i){this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=q(this,t,e),G(t)?t===m||t==null||t===""?(this._$AH!==m&&this._$AR(),this._$AH=m):t!==this._$AH&&t!==N&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):zt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==m&&G(this._$AH)?this._$AA.nextSibling.data=t:this.T(V.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:r}=t,i=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=K.createElement(Ye(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(e);else{let n=new _e(i,this),s=n.u(this.options);n.p(e),this.T(s),this._$AH=n}}_$AC(t){let e=je.get(t.strings);return e===void 0&&je.set(t.strings,e=new K(t)),e}k(t){Se(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,r,i=0;for(let n of t)i===e.length?e.push(r=new o(this.O(J()),this.O(J()),this,this.options)):r=e[i],r._$AI(n),i++;i<e.length&&(this._$AR(r&&r._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let r=Fe(t).nextSibling;Fe(t).remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},Z=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,i,n){this.type=1,this._$AH=m,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=m}_$AI(t,e=this,r,i){let n=this.strings,s=!1;if(n===void 0)t=q(this,t,e,0),s=!G(t)||t!==this._$AH&&t!==N,s&&(this._$AH=t);else{let l=t,a,d;for(t=n[0],a=0;a<n.length-1;a++)d=q(this,l[r+a],e,a),d===N&&(d=this._$AH[a]),s||=!G(d)||d!==this._$AH[a],d===m?t=m:t!==m&&(t+=(d??"")+n[a+1]),this._$AH[a]=d}s&&!i&&this.j(t)}j(t){t===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},ye=class extends Z{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===m?void 0:t}},xe=class extends Z{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==m)}},be=class extends Z{constructor(t,e,r,i,n){super(t,e,r,i,n),this.type=5}_$AI(t,e=this){if((t=q(this,t,e,0)??m)===N)return;let r=this._$AH,i=t===m&&r!==m||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,n=t!==m&&(r===m||i);i&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},we=class{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){q(this,t)}};var Et=$e.litHtmlPolyfillSupport;Et?.(K,X),($e.litHtmlVersions??=[]).push("3.3.2");var Je=(o,t,e)=>{let r=e?.renderBefore??t,i=r._$litPart$;if(i===void 0){let n=e?.renderBefore??null;r._$litPart$=i=new X(t.insertBefore(J(),n),n,void 0,e??{})}return i._$AI(o),i};var Ae=globalThis,w=class extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Je(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return N}};w._$litElement$=!0,w.finalized=!0,Ae.litElementHydrateSupport?.({LitElement:w});var Pt=Ae.litElementPolyfillSupport;Pt?.({LitElement:w});(Ae.litElementVersions??=[]).push("4.2.2");var T=o=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(o,t)}):customElements.define(o,t)};var Rt={attribute:!0,type:String,converter:U,reflect:!1,hasChanged:ne},Ct=(o=Rt,t,e)=>{let{kind:r,metadata:i}=e,n=globalThis.litPropertyMetadata.get(i);if(n===void 0&&globalThis.litPropertyMetadata.set(i,n=new Map),r==="setter"&&((o=Object.create(o)).wrapped=!0),n.set(e.name,o),r==="accessor"){let{name:s}=e;return{set(l){let a=t.get.call(this);t.set.call(this,l),this.requestUpdate(s,a,o,!0,l)},init(l){return l!==void 0&&this.C(s,void 0,o,l),l}}}if(r==="setter"){let{name:s}=e;return function(l){let a=this[s];t.call(this,l),this.requestUpdate(s,a,o,!0,l)}}throw Error("Unsupported decorator location: "+r)};function Ge(o){return(t,e)=>typeof e=="object"?Ct(o,t,e):((r,i,n)=>{let s=i.hasOwnProperty(n);return i.constructor.createProperty(n,r),s?Object.getOwnPropertyDescriptor(i,n):void 0})(o,t,e)}function h(o){return Ge({...o,state:!0,attribute:!1})}var Ke={"status.idle":"Idle","status.running":"Running","status.error":"Error","status.disabled":"Disabled",stop_all:"Stop All",next:"Next",last:"Last",no_programs:"No programs found",loading:"Loading...","time.just_now":"just now","time.minutes_ago":"{count}m ago","time.hours_ago":"{count}h ago","time.days_ago":"{count }d ago","time.today_at":"today at {time}","time.tomorrow_at":"tomorrow at {time}","time.in_days":"in {count} d","time.never":"Never","time.no_schedule":"No active program","status.running_program":"Running: {name}",stop_confirm:"Stop all watering?","recap.total_duration":"Total duration: {duration} min","days.mon":"Mon","days.tue":"Tue","days.wed":"Wed","days.thu":"Thu","days.fri":"Fri","days.sat":"Sat","days.sun":"Sun","running.progress":"Valve {done} of {total}","error.program":"Error \u2014 {name}","error.auto_stopped":"All valves have been automatically closed.","config.tab_valves":"Valves","config.tab_zones":"Zones","config.tab_programs":"Programs","config.no_valves":"No valves configured","config.no_zones":"No zones created","config.no_programs":"No programs created","config.new_zone":"New zone","config.new_program":"New program","config.name":"Name","config.save":"Save","config.cancel":"Cancel","config.delete":"Delete","config.edit":"Edit","config.confirm_delete_zone":"Delete this zone?","config.confirm_delete_program":"Delete this program?","config.trigger_time":"Trigger time","config.select_valves":"Select valves","config.select_zones":"Select zones","config.valve_entity":"Entity","config.total_duration":"Total: {duration} min","config.dry_run":"Test mode","config.dry_run_hint":"Runs the sequence without activating valves","running.dry_run":"Test mode","config.follows_program":"Every day","config.frequency_every_n":"Every {n} days","config.frequency_weekdays":"Specific days","recap.frequency_every_n":"every {n}d","config.title":"WateringHub Config","config.editor_valves":"Valves","config.add_valve":"Add valve","config.select_entity":"Switch entity","config.confirm_delete_valve":"Delete this valve?","config.saved":"Saved","config.deleted":"Deleted","skip.button":"Pause","skip.days_1":"1 day","skip.days_n":"{count} days","skip.active":"Paused {count} d","skip.cancel":"Resume","skip.toast_paused":"Program paused {count} d","skip.toast_resumed":"Program resumed","confirm.stop":"Stop","config.tab_water_supplies":"Water Supplies","config.no_water_supplies":"No water supplies","config.new_water_supply":"New supply","config.water_supply":"Water supply","config.confirm_delete_water_supply":"Delete this water supply?","config.error_water_supply_in_use":"Reassign valves first","config.no_water_supply_hint":"Create a water supply first","config.hint_programs":"Create watering programs with a schedule and zones.","config.hint_zones":"Create at least one zone to group your valves.","config.hint_water_supplies":"Define at least one water supply to enable parallel execution.","config.hint_valves":"Configure your valves and assign them to a zone and water supply.","config.none":"None","config.hint_valves_prereq":"Create water supplies and zones first","config.hint_programs_prereq":"Configure your valves first","schedule.at_one":"at {time}","schedule.at_many":"at {rest} and {last}","config.trigger_times":"Trigger times","config.add_time":"Add a time","config.valve_custom_times":"Custom times","config.valve_custom_times_hint":"Run only at selected times","config.valve_times_required":"Select at least one time, or uncheck custom times","config.valves_per_slot":"Valves per trigger time","config.slot_disabled_here":"disabled here","config.no_schedule_times":"Add at least one trigger time","config.valves_unassigned":"Unassigned valves","config.no_valves_in_zone":"No valve in this zone","config.editor_section_supplies":"Water supplies","config.editor_section_zones":"Zones","config.editor_section_valves":"Valves","config.add_valve_pick_entity":"Pick a switch entity first"};var Xe={"status.idle":"En attente","status.running":"Arrosage en cours","status.error":"Erreur","status.disabled":"D\xE9sactiv\xE9",stop_all:"Tout arr\xEAter",next:"Prochain",last:"Dernier",no_programs:"Aucun programme trouv\xE9",loading:"Chargement...","time.just_now":"\xE0 l'instant","time.minutes_ago":"il y a {count} min","time.hours_ago":"il y a {count}h","time.days_ago":"il y a {count} j","time.today_at":"aujourd'hui \xE0 {time}","time.tomorrow_at":"demain \xE0 {time}","time.in_days":"dans {count} j","time.never":"Jamais","time.no_schedule":"Aucun programme actif","status.running_program":"En cours : {name}",stop_confirm:"Arr\xEAter tout l'arrosage ?","recap.total_duration":"Dur\xE9e totale : {duration} min","days.mon":"Lun","days.tue":"Mar","days.wed":"Mer","days.thu":"Jeu","days.fri":"Ven","days.sat":"Sam","days.sun":"Dim","running.progress":"Vanne {done} sur {total}","error.program":"Erreur \u2014 {name}","error.auto_stopped":"Toutes les vannes ont \xE9t\xE9 ferm\xE9es automatiquement.","config.tab_valves":"Vannes","config.tab_zones":"Zones","config.tab_programs":"Programmes","config.no_valves":"Aucune vanne configur\xE9e","config.no_zones":"Aucune zone cr\xE9\xE9e","config.no_programs":"Aucun programme cr\xE9\xE9","config.new_zone":"Nouvelle zone","config.new_program":"Nouveau programme","config.name":"Nom","config.save":"Sauvegarder","config.cancel":"Annuler","config.delete":"Supprimer","config.edit":"Modifier","config.confirm_delete_zone":"Supprimer cette zone ?","config.confirm_delete_program":"Supprimer ce programme ?","config.trigger_time":"Heure de d\xE9clenchement","config.select_valves":"S\xE9lectionner les vannes","config.select_zones":"S\xE9lectionner les zones","config.valve_entity":"Entit\xE9","config.total_duration":"Total : {duration} min","config.dry_run":"Mode test","config.dry_run_hint":"Ex\xE9cute la s\xE9quence sans activer les vannes","running.dry_run":"Mode test","config.follows_program":"Tous les jours","config.frequency_every_n":"Tous les {n} jours","config.frequency_weekdays":"Jours sp\xE9cifiques","recap.frequency_every_n":"tous les {n}j","config.title":"WateringHub Config","config.editor_valves":"Vannes","config.add_valve":"Ajouter une vanne","config.select_entity":"Entit\xE9 switch","config.confirm_delete_valve":"Supprimer cette vanne ?","config.saved":"Enregistr\xE9","config.deleted":"Supprim\xE9","skip.button":"Pause","skip.days_1":"1 jour","skip.days_n":"{count} jours","skip.active":"En pause {count} j","skip.cancel":"Reprendre","skip.toast_paused":"Programme en pause {count} j","skip.toast_resumed":"Programme repris","confirm.stop":"Arr\xEAter","config.tab_water_supplies":"Arriv\xE9es d'eau","config.no_water_supplies":"Aucune arriv\xE9e d'eau","config.new_water_supply":"Nouvelle arriv\xE9e","config.water_supply":"Arriv\xE9e d'eau","config.confirm_delete_water_supply":"Supprimer cette arriv\xE9e ?","config.error_water_supply_in_use":"R\xE9assignez d'abord les vannes","config.no_water_supply_hint":"Cr\xE9ez d'abord une arriv\xE9e d'eau","config.hint_programs":"Cr\xE9ez des programmes d'arrosage avec un horaire et des zones.","config.hint_zones":"Cr\xE9ez au moins une zone pour regrouper vos vannes.","config.hint_water_supplies":"Cr\xE9ez au moins une arriv\xE9e d'eau pour activer le parall\xE9lisme.","config.hint_valves":"Configurez vos vannes et assignez-les \xE0 une zone et une arriv\xE9e d'eau.","config.none":"Aucun","config.hint_valves_prereq":"Cr\xE9ez d'abord des arriv\xE9es d'eau et des zones","config.hint_programs_prereq":"Configurez d'abord vos vannes","schedule.at_one":"\xE0 {time}","schedule.at_many":"\xE0 {rest} et {last}","config.trigger_times":"Horaires de d\xE9clenchement","config.add_time":"Ajouter un horaire","config.valve_custom_times":"Horaires sp\xE9cifiques","config.valve_custom_times_hint":"Ne tourne qu'aux horaires s\xE9lectionn\xE9s","config.valve_times_required":"S\xE9lectionnez au moins un horaire, ou d\xE9cochez les horaires sp\xE9cifiques","config.valves_per_slot":"Vannes par horaire","config.slot_disabled_here":"d\xE9sactiv\xE9e ici","config.no_schedule_times":"Ajoutez au moins un horaire","config.valves_unassigned":"Vannes non assign\xE9es","config.no_valves_in_zone":"Aucune vanne dans cette zone","config.editor_section_supplies":"Arriv\xE9es d'eau","config.editor_section_zones":"Zones","config.editor_section_valves":"Vannes","config.add_valve_pick_entity":"S\xE9lectionnez d'abord une entit\xE9 switch"};var ze={en:Ke,fr:Xe};function E(o){let t=o?.toLowerCase().startsWith("fr")?"fr":"en",e=ze[t]??ze.en;return(r,i)=>{let n=e[r]??ze.en[r]??r;return i&&(n=n.replace(/\{(\w+)\}/g,(s,l)=>String(i[l]??s))),n}}var P=k`
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
`;var Qe=k`
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
`;function le(o){return Object.keys(o.states).filter(t=>t.startsWith("switch.wateringhub_"))}function I(o,t){return typeof o?.attributes.friendly_name=="string"?o.attributes.friendly_name:t}function ce(o){return o.states["sensor.wateringhub_status"]?.state??"idle"}function We(o){let t=o.states["sensor.wateringhub_status"];if(t?.state!=="error")return null;let e=t.attributes,r=e.current_program,i=r?o.states[`switch.wateringhub_${r}`]:void 0;return{programName:I(i,r??""),errorMessage:e.error_message??""}}function et(o){let t=o.states["sensor.wateringhub_status"];if(t?.state!=="running")return null;let e=t.attributes,r=e.valves_done??0,i=e.valves_total??1,n=Array.isArray(e.valves_sequence)?e.valves_sequence:[],s=Array.isArray(e.active_valves)?e.active_valves:[],l=s.map(g=>{let _=Math.max(0,(Date.now()-new Date(g.valve_start).getTime())/1e3),S=Math.max(0,g.valve_duration-_),ge=n.filter(x=>x.water_supply_id===g.water_supply_id&&x.status==="pending").reduce((x,vt)=>x+vt.duration,0);return S+ge}),a=l.length>0?Math.max(...l):0,d=n.reduce((g,_)=>g+_.duration,0),u=n.filter(g=>g.status==="done").reduce((g,_)=>g+_.duration,0),p=s.reduce((g,_)=>g+Math.max(0,(Date.now()-new Date(_.valve_start).getTime())/1e3),0),f=u+p;return{programName:e.current_program??"",valvesDone:r,valvesTotal:i,progressPercent:e.progress_percent??0,totalRemaining:a,totalDuration:d,totalElapsed:f,valveSequence:n,activeValves:s,dryRun:e.dry_run===!0}}function Te(o){if(o<=0)return"0:00";let t=Math.floor(o/3600),e=Math.floor(o%3600/60),r=Math.floor(o%60);return t>0?`${t}:${e.toString().padStart(2,"0")}:${r.toString().padStart(2,"0")}`:`${e}:${r.toString().padStart(2,"0")}`}function de(o,t){if(!o)return"";let e=[...o.times].sort();if(e.length===0)return"";if(e.length===1)return t("schedule.at_one",{time:e[0]});let r=e[e.length-1],i=e.slice(0,-1).join(", ");return t("schedule.at_many",{rest:i,last:r})}function tt(o){let t=o?.state;return t==null||t==="None"||t==="null"||t==="unknown"||t==="unavailable"}function Ee(o,t,e,r){let i=o.states[t];if(tt(i))return e("time.never");let n=new Date(i.state);if(Number.isNaN(n.getTime()))return i.state;let s=new Date,l=s.getTime()-n.getTime();if(l<0){let p=new Date(s.getFullYear(),s.getMonth(),s.getDate()),f=new Date(n.getFullYear(),n.getMonth(),n.getDate()),g=Math.round((f.getTime()-p.getTime())/(1e3*60*60*24)),_=n.toLocaleTimeString(r??[],{hour:"2-digit",minute:"2-digit"});return g===0?e("time.today_at",{time:_}):g===1?e("time.tomorrow_at",{time:_}):e("time.in_days",{count:g})}let a=Math.floor(l/(1e3*60));if(a<1)return e("time.just_now");if(a<60)return e("time.minutes_ago",{count:a});let d=Math.floor(a/60);if(d<24)return e("time.hours_ago",{count:d});let u=Math.floor(d/24);return e("time.days_ago",{count:u})}function rt(o,t,e){let r=o.states["sensor.wateringhub_next_run"];return tt(r)?t("time.no_schedule"):Ee(o,"sensor.wateringhub_next_run",t,e)}function it(o){let t=o.attributes.skip_until;if(typeof t!="string")return null;let e=new Date(t+"T23:59:59");if(Number.isNaN(e.getTime()))return null;let r=new Date;if(r>e)return null;let i=new Date(r.getFullYear(),r.getMonth(),r.getDate()),n=new Date(e.getFullYear(),e.getMonth(),e.getDate());return{isSkipped:!0,daysRemaining:Math.max(1,Math.ceil((n.getTime()-i.getTime())/(1e3*60*60*24))),skipUntil:t}}function ot(o,t){return t("skip.active",{count:o})}function O(o,t){return c`<span class="badge-sm badge-${o}">${t}</span>`}function Q(o,t,e="primary"){return c`<button class="btn btn-${e}" @click=${t}>${o}</button>`}function L(o,t,e){return c`
    <button
      class=${e?.className??"action-btn"}
      @click=${t}
      title=${e?.title??""}
    >
      <ha-icon icon=${o}></ha-icon>
    </button>
  `}function W(o,t){return c`<button class="add-btn" @click=${t}>${o}</button>`}function pe(o,t,e){return c`
    <div class="form-actions">
      ${Q(e("config.cancel"),o,"cancel")}
      ${Q(e("config.save"),t,"primary")}
    </div>
  `}function M(o,t){return c`
    <div class="form-row">
      <label class="form-label">${o}</label>
      ${t}
    </div>
  `}function nt(o,t,e,r,i){return c`
    <div class="list-item">
      <div class="list-item-header">
        <div>
          <div class="list-item-name">${o}</div>
          <div class="list-item-sub">${t}</div>
        </div>
        <div class="list-item-actions">
          ${L("mdi:pencil",e,{title:i("config.edit")})}
          ${L("mdi:delete",r,{title:i("config.delete"),className:"action-btn delete"})}
        </div>
      </div>
    </div>
  `}function j(o,t,e,r,i,n){return o?c`
    <div class="confirm-overlay" @click=${i}>
      <div class="confirm-dialog" @click=${s=>s.stopPropagation()}>
        <div class="confirm-message">${t}</div>
        <div class="confirm-actions">
          <button class="btn btn-cancel" @click=${i}>${n("config.cancel")}</button>
          <button class="btn btn-danger" @click=${r}>${e}</button>
        </div>
      </div>
    </div>
  `:c``}function st(o){return c`
    <div class="header">
      <span class="title">${o}</span>
    </div>
  `}function Mt(o,t,e,r,i,n,s,l){if(!e)return c`
      <div class="program-status">${O("disabled",i("status.disabled"))}</div>
    `;if(ce(o)==="running"){let f=o.states["sensor.wateringhub_status"]?.attributes.current_program,g=t.entity_id?.replace("switch.wateringhub_","");return c`
      <div class="program-status">
        ${f===g?O("running",i("status.running")):m}
      </div>
    `}let d=it(t),u=r?Ft(s,i):m;return c`
    <div class="program-status">
      ${d?c`
            ${O("skipped",ot(d.daysRemaining,i))}
            <button class="skip-cancel-btn" @click=${l} title=${i("skip.cancel")}>
              <ha-icon icon="mdi:close-circle-outline"></ha-icon>
            </button>
          `:c`
            ${O("idle",i("status.idle"))}
            <div class="skip-dropdown-wrapper">
              <button class="skip-btn" @click=${n} title=${i("skip.button")}>
                <ha-icon icon="mdi:pause-circle-outline"></ha-icon>
              </button>
              ${u}
            </div>
          `}
      <span class="info-sm">${i("next")}: ${rt(o,i,o.language)}</span>
    </div>
  `}function at(o,t){let e=We(o);return e?c`
    <div class="error-view">
      <div class="error-title">
        <ha-icon icon="mdi:alert-circle"></ha-icon>
        ${t("error.program",{name:e.programName})}
      </div>
      ${e.errorMessage?c`<div class="error-message">${e.errorMessage}</div>`:m}
      <div class="error-auto-stopped">${t("error.auto_stopped")}</div>
    </div>
  `:c``}function lt(o,t,e){let r=et(o);if(!r)return c``;let i=o.states["sensor.wateringhub_status"]?.attributes.water_supplies??[],n=r.activeValves.length>1?Dt(r.valveSequence,r.activeValves,i):ct(r.valveSequence,r.activeValves),s=r.valveSequence.length>0?n:m,l=2*Math.PI*30,a=r.totalDuration>0?Math.min(1,r.totalElapsed/r.totalDuration):0,d=l*(1-a);return c`
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
            <span class="cp-time">${Te(r.totalRemaining)}</span>
          </div>
        </div>
        <div class="global-info">
          <div class="global-program-name">
            ${I(o.states[`switch.wateringhub_${r.programName}`],r.programName)}
          </div>
          <div class="global-sub">
            ${e("running.progress",{done:r.valvesDone+1,total:r.valvesTotal})}
          </div>
        </div>
      </div>

      ${s}
    </div>
  `}function ct(o,t){let e=[];for(let a of o){let d=e[e.length-1];d?.zoneName===a.zone_name?d.valves.push(a):e.push({zoneName:a.zone_name,valves:[a]})}let r=new Map;for(let a of t){let d=Math.max(0,(Date.now()-new Date(a.valve_start).getTime())/1e3);r.set(a.valve_id,Math.max(0,a.valve_duration-d))}let i=c`<svg viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z"
    />
  </svg>`,n=c`<svg viewBox="0 0 24 24">
    <circle fill="currentColor" cx="12" cy="12" r="6" />
  </svg>`,s=c`<svg viewBox="0 0 24 24">
    <circle fill="none" stroke="currentColor" stroke-width="2" cx="12" cy="12" r="6" />
  </svg>`,l={done:i,running:n,pending:s};return c`
    <div class="valve-timeline">
      ${e.map(a=>c`
          <div class="tl-zone">${a.zoneName}</div>
          ${a.valves.map(d=>{let u=Math.ceil(d.duration/60),p=r.get(d.valve_id)??0;return c`
              <div class="tl-step tl-${d.status}">
                <span class="tl-dot">${l[d.status]}</span>
                <span class="tl-step-name">${d.valve_name}</span>
                <span class="tl-step-time">
                  ${d.status==="running"?Te(p):`${u} min`}
                </span>
              </div>
            `})}
        `)}
    </div>
  `}function Dt(o,t,e){let r=[],i=new Map;for(let s of o)i.has(s.water_supply_id)||(r.push(s.water_supply_id),i.set(s.water_supply_id,[])),i.get(s.water_supply_id).push(s);let n=new Map;for(let s of t)n.has(s.water_supply_id)||n.set(s.water_supply_id,[]),n.get(s.water_supply_id).push(s);return c`
    <div class="parallel-timeline">
      ${r.map(s=>{let l=i.get(s)??[],a=n.get(s)??[],d=s===null?"\u2014":e.find(u=>u.id===s)?.name??s;return c`
          <div class="supply-column">
            <div class="supply-label">${d}</div>
            ${ct(l,a)}
          </div>
        `})}
    </div>
  `}function dt(o,t,e,r,i,n,s,l,a,d){return t.length===0?c`<div class="empty-state">${d("no_programs")}</div>`:c`${t.map(u=>{let p=o.states[u];if(!p)return m;let f=p.state==="on",g=e===u,_=I(p,u);return c`
      <div class="program-wrapper">
        <div class="program">
          <div class="program-header" @click=${()=>i(u)}>
            <ha-icon class="chevron ${g?"open":""}" icon="mdi:chevron-down"></ha-icon>
            ${f?c`<div class="active-dot"></div>`:m}
            <span class="program-name ${f?"active":""}">${_}</span>
          </div>
          <ha-switch .checked=${f} @change=${()=>n(u)}></ha-switch>
        </div>
        ${Mt(o,p,f,r===u,d,()=>s(u),S=>l(u,S),()=>a(u))}
        ${qt(o,p.attributes,g,d)}
      </div>
    `})}`}function Ft(o,t){return c`
    <div class="skip-dropdown">
      ${[1,2,3,5].map(r=>c`
          <button class="skip-dropdown-option" @click=${()=>o(r)}>
            ${r===1?t("skip.days_1"):t("skip.days_n",{count:r})}
          </button>
        `)}
    </div>
  `}function qt(o,t,e,r){let i=t.schedule,n=t.zones??[],s=t.total_duration;return c`
    <div class="program-recap ${e?"open":""}">
      ${i?c`<div class="recap-schedule">
            <ha-icon icon="mdi:calendar-clock"></ha-icon>
            ${de(i,r)}
          </div>`:m}
      <div class="recap-schedule">
        <ha-icon icon="mdi:history"></ha-icon>
        ${r("last")}: ${Ee(o,"sensor.wateringhub_last_run",r,o.language)}
      </div>
      ${n.map(l=>c`
          <div class="recap-zone">
            <span class="recap-zone-badge">${l.zone_name}</span>
          </div>
          ${l.valves.map(a=>c`
              <div class="recap-valve">
                <ha-icon icon="mdi:water"></ha-icon>
                ${a.valve_name} — ${a.duration}
                min${It(a.frequency,r)}${Zt(a.times,i?.times)}
              </div>
            `)}
        `)}
      ${s?c`<div class="recap-total">
            <ha-icon icon="mdi:timer-outline"></ha-icon>
            ${r("recap.total_duration",{duration:s})}
          </div>`:m}
    </div>
  `}function Zt(o,t){return!o||o.length===0||t&&o.length===t.length?"":` \xB7 ${[...o].sort().join(", ")}`}function It(o,t){return o?o.type==="every_n_days"?` \xB7 ${t("recap.frequency_every_n",{n:o.n??2})}`:o.type==="weekdays"&&o.days?.length?` \xB7 ${o.days.map(r=>t(`days.${r}`)).join(", ")}`:"":""}var D=class extends w{constructor(){super(...arguments);this._t=e=>e}set hass(e){this._hass=e,this._t=E(e.language)}setConfig(e){this._config=e}_titleChanged(e){let r=e.target.value;this._config={...this._config,title:r},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config}}))}render(){return c`
      ${M(this._t("config.name"),c`<input
          class="form-input"
          .value=${this._config?.title??""}
          @input=${this._titleChanged}
        />`)}
    `}};D.styles=[P],v([h()],D.prototype,"_config",2),v([h()],D.prototype,"_hass",2),D=v([T("wateringhub-card-editor")],D);var b=class extends w{constructor(){super(...arguments);this._programEntities=[];this._expandedProgram=null;this._skipDropdownOpen=null;this._toast="";this._confirmMessage="";this._confirmLabel="";this._confirmAction=null;this._tick=0;this._t=e=>e;this._timerInterval=null;this._unsubEvents=null;this._boundCloseDropdown=this._closeSkipDropdown.bind(this)}static getConfigElement(){return document.createElement("wateringhub-card-editor")}setConfig(e){this._config=e}set hass(e){let r=this._hass;this._hass=e,this._t=E(e.language),r?.states!==e.states&&(this._programEntities=le(e)),this._updateTimer(ce(e)),this._subscribeEvents()}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._boundCloseDropdown)}disconnectedCallback(){super.disconnectedCallback(),this._clearTimer(),this._unsubscribeEvents(),document.removeEventListener("click",this._boundCloseDropdown)}_subscribeEvents(){this._unsubEvents||!this._hass?.connection||this._hass.connection.subscribeEvents(()=>{this._tick++},"wateringhub_event").then(e=>{this._unsubEvents=e})}_unsubscribeEvents(){this._unsubEvents&&(this._unsubEvents(),this._unsubEvents=null)}_updateTimer(e){e==="running"&&!this._timerInterval?this._timerInterval=setInterval(()=>{this._tick++},1e3):e!=="running"&&this._timerInterval&&this._clearTimer()}_clearTimer(){this._timerInterval&&(clearInterval(this._timerInterval),this._timerInterval=null)}getCardSize(){return 3}_toggleExpand(e){this._expandedProgram=this._expandedProgram===e?null:e}_toggleProgram(e){let r=this._hass.states[e];if(!r)return;let i=r.state==="on"?"turn_off":"turn_on";this._hass.callService("switch",i,{entity_id:e})}_requestConfirm(e,r,i){this._confirmMessage=e,this._confirmLabel=r,this._confirmAction=i}_executeConfirm(){this._confirmAction?.(),this._confirmAction=null,this._confirmMessage="",this._confirmLabel=""}_cancelConfirm(){this._confirmAction=null,this._confirmMessage="",this._confirmLabel=""}_stopAll(){this._requestConfirm(this._t("stop_confirm"),this._t("confirm.stop"),()=>{this._hass.callService("wateringhub","stop_all",{})})}_toggleSkipDropdown(e){this._skipDropdownOpen=this._skipDropdownOpen===e?null:e}_showToast(e){this._toast=e,setTimeout(()=>{this._toast=""},3e3)}_handleSkip(e,r){let i=e.replace("switch.wateringhub_","");this._hass.callService("wateringhub","skip_program",{id:i,days:r}),this._skipDropdownOpen=null,this._showToast(this._t("skip.toast_paused",{count:r}))}_handleCancelSkip(e){let r=e.replace("switch.wateringhub_","");this._hass.callService("wateringhub","skip_program",{id:r,days:0}),this._showToast(this._t("skip.toast_resumed"))}_closeSkipDropdown(e){if(!this._skipDropdownOpen)return;e.composedPath().some(n=>n instanceof HTMLElement&&n.classList?.contains("skip-dropdown-wrapper"))||(this._skipDropdownOpen=null)}render(){if(!this._hass||!this._config)return c`<ha-card>${this._t("loading")}</ha-card>`;let e=this._config.title??"WateringHub";return c`
      <ha-card>
        ${st(e)} ${at(this._hass,this._t)}
        ${lt(this._hass,()=>this._stopAll(),this._t)}
        ${dt(this._hass,this._programEntities,this._expandedProgram,this._skipDropdownOpen,r=>this._toggleExpand(r),r=>this._toggleProgram(r),r=>this._toggleSkipDropdown(r),(r,i)=>this._handleSkip(r,i),r=>this._handleCancelSkip(r),this._t)}
        ${this._toast?c`<div class="toast">${this._toast}</div>`:m}
        ${j(!!this._confirmAction,this._confirmMessage,this._confirmLabel,()=>this._executeConfirm(),()=>this._cancelConfirm(),this._t)}
      </ha-card>
    `}};b.styles=[P,Qe],v([h()],b.prototype,"_config",2),v([h()],b.prototype,"_hass",2),v([h()],b.prototype,"_programEntities",2),v([h()],b.prototype,"_expandedProgram",2),v([h()],b.prototype,"_skipDropdownOpen",2),v([h()],b.prototype,"_toast",2),v([h()],b.prototype,"_confirmMessage",2),v([h()],b.prototype,"_confirmLabel",2),v([h()],b.prototype,"_confirmAction",2),v([h()],b.prototype,"_tick",2),b=v([T("wateringhub-card")],b);globalThis.customCards=globalThis.customCards||[];globalThis.customCards.push({type:"wateringhub-card",name:"WateringHub Card",description:"Watering management card for WateringHub"});var pt=k`
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
`;function ue(o){return o.map(t=>({entity_id:t.entity_id,name:t.name,zone_id:t.zone_id,water_supply_id:t.water_supply_id}))}function F(o){return o.states["sensor.wateringhub_status"]?.attributes.available_valves??[]}function me(o){return o.states["sensor.wateringhub_status"]?.attributes.zones??[]}function ut(o){return o.states["sensor.wateringhub_status"]?.attributes.water_supplies??[]}function ee(o){return o.toLowerCase().normalize("NFD").replaceAll(/[\u0300-\u036f]/g,"").replaceAll(/[^a-z0-9]+/g,"_").replaceAll(/^_|_$/g,"")}function Re(o,t,e,r,i,n,s,l,a){let d=le(o),u=me(o),p=F(o),f=p.some(g=>g.zone_id!==null);return c`
    <div class="form-hint">${a("config.hint_programs")}</div>
    ${f?m:c`<div class="empty-state">${a("config.hint_programs_prereq")}</div>`}
    ${d.map(g=>{let _=o.states[g];if(!_)return m;let S=_.attributes.program_id??"";return t?.id===S?mt(t,u,p,n,s,l,a):Lt(_,g,e,r,a)})}
    ${t?.isNew?mt(t,u,p,n,s,l,a):m}
    ${t?m:W(`+ ${a("config.new_program")}`,i)}
    ${d.length===0&&!t?c`<div class="empty-state">${a("config.no_programs")}</div>`:m}
  `}function Lt(o,t,e,r,i){let n=I(o,t),s=o.attributes.schedule,l=o.attributes.total_duration,a=o.attributes.dry_run===!0,d=de(s,i),u=l?`${d} \u2014 ${l} min`:d,p=a?c`<span class="badge-dry-run-sm">${i("config.dry_run")}</span>`:m;return nt(c`${n} ${p}`,u,()=>e(t),()=>r(t),i)}function mt(o,t,e,r,i,n,s){let l=[...o.schedule.times],a=o.zones.reduce((d,u)=>d+u.valves.reduce((p,f)=>p+(f.duration||0),0),0);return c`
    <div class="inline-form">
      <!-- Name -->
      ${M(s("config.name"),c`<input
          class="form-input"
          .value=${o.name}
          @input=${d=>n({...o,name:d.target.value})}
        />`)}

      <!-- Schedule times (chips + time picker) -->
      ${Ot(o,n,s)}

      <!-- Per-slot valve sections -->
      ${l.length===0?c`<div class="form-hint" style="color:var(--warning-color);">
            ${s("config.no_schedule_times")}
          </div>`:c`<div class="form-label" style="margin-top:12px;">${s("config.valves_per_slot")}</div>
            ${[...l].sort().map(d=>jt(d,o,t,e,n,s))}`}
      ${a>0?c`<div class="total-duration">
            ${s("config.total_duration",{duration:a})}
          </div>`:m}

      <!-- Dry run toggle -->
      <div class="form-row">
        <label class="checkbox-item">
          <input
            type="checkbox"
            .checked=${o.dry_run}
            @change=${()=>n({...o,dry_run:!o.dry_run})}
          />
          ${s("config.dry_run")}
        </label>
        <div class="form-hint">${s("config.dry_run_hint")}</div>
      </div>

      ${pe(i,()=>r(o),s)}
    </div>
  `}function Ot(o,t,e){let r=o.schedule.times??[];return M(e("config.trigger_times"),c`<div class="schedule-chips">
      ${r.map((i,n)=>c`
          <div class="schedule-chip-wrap">
            <input
              class="schedule-chip-input"
              type="time"
              .value=${i}
              @input=${s=>{let l=r.map((a,d)=>d===n?s.target.value:a);t(Pe(o,l))}}
            />
            ${r.length>1?c`<button
                  class="chip-close"
                  @click=${()=>t(Pe(o,r.filter((s,l)=>l!==n)))}
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
    </div>`)}function jt(o,t,e,r,i,n){let s=e.filter(a=>r.some(d=>d.zone_id===a.id)),l=Yt(t,o);return c`
    <div class="slot-section">
      <div class="slot-header">
        <ha-icon icon="mdi:clock-outline"></ha-icon>
        <span class="slot-time">${o}</span>
        <span class="info-sm">(${l})</span>
      </div>
      <div class="slot-body">
        ${s.length===0?c`<div class="info-sm" style="padding:4px 0;">
              ${n("config.hint_programs_prereq")}
            </div>`:s.map(a=>c`
                <div class="slot-zone-label">${a.name}</div>
                ${Ht(a.id,r,t).map(d=>Bt(d,a.id,o,t,i,n))}
              `)}
      </div>
    </div>
  `}function Ht(o,t,e){let r=t.filter(a=>a.zone_id===o),i=e.zones.find(a=>a.zone_id===o);if(!i)return r;let n=i.valves.map(a=>r.find(d=>d.id===a.valve_id)).filter(a=>!!a),s=new Set(n.map(a=>a.id)),l=r.filter(a=>!s.has(a.id));return[...n,...l]}function Bt(o,t,e,r,i,n){let s=r.zones.find(x=>x.zone_id===t),l=s?.valves.find(x=>x.valve_id===o.id),a=!!(l&&(l.times===void 0||l.times.includes(e))),d=s?.valves.findIndex(x=>x.valve_id===o.id)??-1,u=s?.valves.length??0,p=d<=0,f=d<0||d===u-1,g=()=>i(Jt(r,t,o.id,e)),_=x=>i(Gt(r,t,o.id,x)),S=x=>i(Qt(r,t,o.id,x)),ge=a&&l&&u>1?c`
          <div class="reorder-btns">
            <button class="reorder-btn" ?disabled=${p} @click=${()=>S(-1)}>
              <ha-icon icon="mdi:chevron-up"></ha-icon>
            </button>
            <button class="reorder-btn" ?disabled=${f} @click=${()=>S(1)}>
              <ha-icon icon="mdi:chevron-down"></ha-icon>
            </button>
          </div>
        `:m;return c`
    <div class="slot-valve-row ${a?"":"inactive"}">
      <label class="slot-valve-main">
        <input type="checkbox" .checked=${a} @change=${g} />
        ${ge}
        <span class="slot-valve-name">${o.name}</span>
        ${a&&l?c`<input
                class="slot-duration-input"
                type="number"
                min="1"
                .value=${String(l.duration)}
                @input=${x=>_(Number.parseInt(x.target.value)||1)}
              /><span class="info-sm">min</span>`:c`<span class="info-sm slot-disabled-hint">
              ${n("config.slot_disabled_here")}
            </span>`}
      </label>
      ${a&&l?Ut(l,t,r,i,n):m}
    </div>
  `}function Ut(o,t,e,r,i){let n=o.frequency,s=n?.type??"",l=new Date().toISOString().slice(0,10),a=p=>r(te(e,t,o.valve_id,{frequency:p})),d=s==="every_n_days"&&n?c`
          <input
            class="valve-freq-n-input"
            type="number"
            min="2"
            .value=${String(n.n??2)}
            @input=${p=>a({...n,n:Number.parseInt(p.target.value)||2})}
          />
          <span class="info-sm">j</span>
        `:m,u=s==="weekdays"&&n?c`
          <div class="valve-freq-days">
            ${["mon","tue","wed","thu","fri","sat","sun"].map(p=>{let f=n.days?.includes(p)??!1;return c`
                <label class="valve-freq-day">
                  <input
                    type="checkbox"
                    .checked=${f}
                    @change=${()=>{let g=n.days??[],_=f?g.filter(S=>S!==p):[...g,p];a({...n,days:_})}}
                  />
                  ${i(`days.${p}`)}
                </label>
              `})}
          </div>
        `:m;return c`
    <div class="slot-valve-freq">
      <select
        class="valve-freq-select"
        @change=${p=>{let f=p.target.value;a(f?f==="every_n_days"?{type:"every_n_days",n:2,start_date:l}:{type:"weekdays",days:[]}:void 0)}}
      >
        <option value="" ?selected=${s===""}>${i("config.follows_program")}</option>
        <option value="every_n_days" ?selected=${s==="every_n_days"}>
          ${i("config.frequency_every_n",{n:n?.n??2})}
        </option>
        <option value="weekdays" ?selected=${s==="weekdays"}>
          ${i("config.frequency_weekdays")}
        </option>
      </select>
      ${d}${u}
    </div>
  `}function Yt(o,t){return o.zones.reduce((e,r)=>e+r.valves.filter(i=>i.times===void 0||i.times.includes(t)).length,0)}function Pe(o,t){let e=new Set(t),r=o.zones.map(i=>({...i,valves:i.valves.map(n=>{if(n.times===void 0)return n;let s=n.times.filter(l=>e.has(l));return{...n,times:s}}).filter(n=>n.times===void 0||n.times.length>0)})).filter(i=>i.valves.length>0);return{...o,schedule:{times:t},zones:r}}function Jt(o,t,e,r,i=10){let n=o.schedule.times,l=o.zones.find(p=>p.zone_id===t)?.valves.find(p=>p.valve_id===e);if(!!(l&&(l.times===void 0||l.times.includes(r)))&&l){let f=(l.times??[...n]).filter(g=>g!==r);return f.length===0?Xt(o,t,e):te(o,t,e,{times:f})}if(!l)return Kt(o,t,{valve_id:e,duration:i,times:[r]});let u=[...l.times??[],r];return u.length>=n.length?te(o,t,e,{times:void 0}):te(o,t,e,{times:u})}function Gt(o,t,e,r){return te(o,t,e,{duration:r})}function te(o,t,e,r){return{...o,zones:o.zones.map(i=>i.zone_id===t?{...i,valves:i.valves.map(n=>n.valve_id===e?{...n,...r}:n)}:i)}}function Kt(o,t,e){let i=o.zones.some(n=>n.zone_id===t)?o.zones.map(n=>n.zone_id===t?{...n,valves:[...n.valves,e]}:n):[...o.zones,{zone_id:t,valves:[e]}];return{...o,zones:i}}function Xt(o,t,e){let r=o.zones.map(i=>i.zone_id===t?{...i,valves:i.valves.filter(n=>n.valve_id!==e)}:i).filter(i=>i.valves.length>0);return{...o,zones:r}}function Qt(o,t,e,r){return{...o,zones:o.zones.map(i=>{if(i.zone_id!==t)return i;let n=i.valves.findIndex(a=>a.valve_id===e),s=n+r;if(n<0||s<0||s>=i.valves.length)return i;let l=[...i.valves];return[l[n],l[s]]=[l[s],l[n]],{...i,valves:l}})}}var gt=k`
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
`;var y=class extends w{constructor(){super(...arguments);this._newEntityId="";this._newZoneId="";this._newWaterSupplyId="";this._editingSupply=null;this._editingZone=null;this._addingValve=!1;this._toast="";this._sections={supplies:!0,zones:!0,valves:!0};this._confirmMessage="";this._confirmLabel="";this._confirmAction=null;this._t=e=>e}set hass(e){this._hass=e,this._t=E(e.language)}setConfig(e){this._config=e}_toggleSection(e){this._sections={...this._sections,[e]:!this._sections[e]}}_showToast(e){this._toast=e,setTimeout(()=>{this._toast=""},3e3)}_requestConfirm(e,r,i){this._confirmMessage=e,this._confirmLabel=r,this._confirmAction=i}_executeConfirm(){this._confirmAction?.(),this._confirmAction=null,this._confirmMessage="",this._confirmLabel=""}_cancelConfirm(){this._confirmAction=null,this._confirmMessage="",this._confirmLabel=""}_newSupply(){this._editingSupply={id:"",name:"",isNew:!0}}_editSupply(e){this._editingSupply={...e,isNew:!1}}_cancelSupply(){this._editingSupply=null}_updateSupplyForm(e){this._editingSupply=e}async _saveSupply(e){let r=e.isNew?ee(e.name):e.id,i=e.isNew?"create_water_supply":"update_water_supply";await this._hass.callService("wateringhub",i,{id:r,name:e.name}),this._editingSupply=null}_deleteSupply(e){this._requestConfirm(this._t("config.confirm_delete_water_supply"),this._t("config.delete"),async()=>{try{await this._hass.callService("wateringhub","delete_water_supply",{id:e})}catch{}})}_newZone(){this._editingZone={id:"",name:"",isNew:!0}}_editZone(e){this._editingZone={id:e.id,name:e.name,isNew:!1}}_cancelZone(){this._editingZone=null}_updateZoneForm(e){this._editingZone=e}async _saveZone(e){let r=e.isNew?ee(e.name):e.id,i=e.isNew?"create_zone":"update_zone";await this._hass.callService("wateringhub",i,{id:r,name:e.name}),this._editingZone=null}_deleteZone(e){this._requestConfirm(this._t("config.confirm_delete_zone"),this._t("config.delete"),async()=>{try{await this._hass.callService("wateringhub","delete_zone",{id:e})}catch{}})}async _changeValveAssignment(e,r,i){let n=ue(F(this._hass)).map(s=>s.entity_id===e?{...s,[r]:i}:s);await this._hass.callService("wateringhub","set_valves",{valves:n}),this._showToast(this._t("config.saved"))}_deleteValve(e){this._requestConfirm(this._t("config.confirm_delete_valve"),this._t("config.delete"),async()=>{let r=ue(F(this._hass)).filter(i=>i.entity_id!==e).map(i=>({entity_id:i.entity_id,name:i.name,water_supply_id:i.water_supply_id,zone_id:i.zone_id}));await this._hass.callService("wateringhub","set_valves",{valves:r}),this._showToast(this._t("config.deleted"))})}_onEntityPicked(e){this._newEntityId=e.detail.value}_getFriendlyName(e){let i=this._hass?.states[e]?.attributes.friendly_name;return typeof i=="string"?i:e}async _confirmAddValve(){if(!this._newEntityId){this._showToast(this._t("config.add_valve_pick_entity"));return}let e=this._getFriendlyName(this._newEntityId),r=[...F(this._hass).map(i=>({entity_id:i.entity_id,name:i.name,water_supply_id:i.water_supply_id,zone_id:i.zone_id})),{entity_id:this._newEntityId,name:e,water_supply_id:this._newWaterSupplyId||null,zone_id:this._newZoneId||null}];await this._hass.callService("wateringhub","set_valves",{valves:r}),this._showToast(this._t("config.saved")),this._resetAddValve()}_resetAddValve(){this._newEntityId="",this._newZoneId="",this._newWaterSupplyId="",this._addingValve=!1}render(){if(!this._hass)return c``;let e=ut(this._hass),r=me(this._hass),i=F(this._hass),n=ue(i),s=[...n.filter(l=>!l.zone_id),...n.filter(l=>l.zone_id)];return c`
      <div class="editor-root">
        ${this._renderSection("supplies",this._t("config.editor_section_supplies"),e.length,this._renderSuppliesBody(e))}
        ${this._renderSection("zones",this._t("config.editor_section_zones"),r.length,this._renderZonesBody(r))}
        ${this._renderSection("valves",this._t("config.editor_section_valves"),n.length,this._renderValvesBody(s,r,e))}
        ${this._toast?c`<div class="toast">${this._toast}</div>`:m}
        ${j(!!this._confirmAction,this._confirmMessage,this._confirmLabel,()=>this._executeConfirm(),()=>this._cancelConfirm(),this._t)}
      </div>
    `}_renderSection(e,r,i,n,s=!1){let l=this._sections[e];return c`
      <div class="editor-section ${s?"warn":""}">
        <div class="editor-section-header" @click=${()=>this._toggleSection(e)}>
          <ha-icon class="chevron ${l?"open":""}" icon="mdi:chevron-down"></ha-icon>
          <span class="editor-section-label">${r}</span>
          ${i!==null?c`<span class="editor-section-count">${i}</span>`:m}
        </div>
        ${l?c`<div class="editor-section-body">${n}</div>`:m}
      </div>
    `}_renderSuppliesBody(e){return this._editingSupply?this._renderNameForm(this._editingSupply.name,r=>this._updateSupplyForm({...this._editingSupply,name:r}),()=>this._saveSupply(this._editingSupply),()=>this._cancelSupply()):c`
      <div class="supply-chips">
        ${e.map(r=>c`
            <span class="supply-chip" @click=${()=>this._editSupply(r)}>
              <ha-icon icon="mdi:water-pump"></ha-icon>
              ${r.name}
              <span
                class="chip-close"
                @click=${i=>{i.stopPropagation(),this._deleteSupply(r.id)}}
              >
                <ha-icon icon="mdi:close"></ha-icon>
              </span>
            </span>
          `)}
        <span class="supply-chip chip-add" @click=${()=>this._newSupply()}>
          + ${this._t("config.new_water_supply")}
        </span>
      </div>
    `}_renderZonesBody(e){return c`
      ${e.length===0&&!this._editingZone?.isNew?c`<div class="empty-state">${this._t("config.no_zones")}</div>`:m}
      ${e.map(r=>this._editingZone?.id===r.id?this._renderNameForm(this._editingZone.name,i=>this._updateZoneForm({...this._editingZone,name:i}),()=>this._saveZone(this._editingZone),()=>this._cancelZone()):this._renderZoneItem(r))}
      ${this._editingZone?.isNew?this._renderNameForm(this._editingZone.name,r=>this._updateZoneForm({...this._editingZone,name:r}),()=>this._saveZone(this._editingZone),()=>this._cancelZone()):m}
      ${this._editingZone?m:W(`+ ${this._t("config.new_zone")}`,()=>this._newZone())}
    `}_renderZoneItem(e){return c`
      <div class="zone-row">
        <span class="zone-row-name">${e.name}</span>
        ${L("mdi:pencil",()=>this._editZone(e),{className:"action-btn",title:this._t("config.edit")})}
        ${L("mdi:delete",()=>this._deleteZone(e.id),{className:"action-btn delete",title:this._t("config.delete")})}
      </div>
    `}_renderValvesBody(e,r,i){return c`
      ${e.length===0&&!this._addingValve?c`<div class="empty-state">${this._t("config.no_valves")}</div>`:m}
      ${e.map(n=>this._renderValveRow(n,r,i,!n.zone_id))}
      ${this._addingValve?this._renderAddValveForm(r,i):W(`+ ${this._t("config.add_valve")}`,()=>{this._addingValve=!0})}
    `}_renderValveRow(e,r,i,n){let s=!e.zone_id,l=!e.water_supply_id,a="border-color: var(--error-color);",d=p=>this._changeValveAssignment(e.entity_id,"zone_id",p||null),u=p=>this._changeValveAssignment(e.entity_id,"water_supply_id",p||null);return c`
      <div class="valve-row-stacked ${n?"valve-row-unassigned":""}">
        <div class="valve-row-head">
          <ha-icon
            class="valve-icon"
            icon=${n?"mdi:alert-circle-outline":"mdi:valve"}
          ></ha-icon>
          <span class="valve-name">${e.name}</span>
          ${L("mdi:delete",()=>this._deleteValve(e.entity_id),{className:"action-btn delete",title:this._t("config.delete")})}
        </div>
        <div class="valve-row-field">
          <label>${this._t("config.tab_zones")}</label>
          <select
            class="form-select"
            style=${s?a:""}
            @change=${p=>d(p.target.value)}
          >
            <option value="" ?selected=${!e.zone_id}>${this._t("config.none")}</option>
            ${r.map(p=>c`<option value=${p.id} ?selected=${p.id===e.zone_id}>${p.name}</option>`)}
          </select>
        </div>
        <div class="valve-row-field">
          <label>${this._t("config.tab_water_supplies")}</label>
          <select
            class="form-select"
            style=${l?a:""}
            @change=${p=>u(p.target.value)}
          >
            <option value="" ?selected=${!e.water_supply_id}>${this._t("config.none")}</option>
            ${i.map(p=>c`<option value=${p.id} ?selected=${p.id===e.water_supply_id}>
                  ${p.name}
                </option>`)}
          </select>
        </div>
      </div>
    `}_renderAddValveForm(e,r){return c`
      <div class="add-form">
        <ha-entity-picker
          .hass=${this._hass}
          .includeDomains=${["switch"]}
          .value=${this._newEntityId}
          @value-changed=${this._onEntityPicked}
          allow-custom-entity
        ></ha-entity-picker>
        <div class="valve-row-field">
          <label>${this._t("config.tab_zones")}</label>
          <select
            class="form-select"
            .value=${this._newZoneId}
            @change=${i=>{this._newZoneId=i.target.value}}
          >
            <option value="">${this._t("config.none")}</option>
            ${e.map(i=>c`<option value=${i.id} ?selected=${i.id===this._newZoneId}>
                  ${i.name}
                </option>`)}
          </select>
        </div>
        <div class="valve-row-field">
          <label>${this._t("config.tab_water_supplies")}</label>
          <select
            class="form-select"
            .value=${this._newWaterSupplyId}
            @change=${i=>{this._newWaterSupplyId=i.target.value}}
          >
            <option value="">${this._t("config.none")}</option>
            ${r.map(i=>c`<option value=${i.id} ?selected=${i.id===this._newWaterSupplyId}>
                  ${i.name}
                </option>`)}
          </select>
        </div>
        <div class="form-actions">
          ${Q(this._t("config.cancel"),()=>this._resetAddValve(),"cancel")}
          ${Q(this._t("config.save"),()=>this._confirmAddValve(),"primary")}
        </div>
      </div>
    `}_renderNameForm(e,r,i,n){return c`
      <div class="inline-form">
        ${M(this._t("config.name"),c`<input
            class="form-input"
            .value=${e}
            @input=${s=>r(s.target.value)}
          />`)}
        ${pe(n,i,this._t)}
      </div>
    `}};y.styles=[P,gt],v([h()],y.prototype,"_config",2),v([h()],y.prototype,"_hass",2),v([h()],y.prototype,"_newEntityId",2),v([h()],y.prototype,"_newZoneId",2),v([h()],y.prototype,"_newWaterSupplyId",2),v([h()],y.prototype,"_editingSupply",2),v([h()],y.prototype,"_editingZone",2),v([h()],y.prototype,"_addingValve",2),v([h()],y.prototype,"_toast",2),v([h()],y.prototype,"_sections",2),v([h()],y.prototype,"_confirmMessage",2),v([h()],y.prototype,"_confirmLabel",2),v([h()],y.prototype,"_confirmAction",2),y=v([T("wateringhub-config-editor")],y);var $=class extends w{constructor(){super(...arguments);this._toast="";this._confirmMessage="";this._confirmLabel="";this._confirmAction=null;this._editingProgram=null;this._t=e=>e}static getConfigElement(){return document.createElement("wateringhub-config-editor")}setConfig(e){this._config=e}set hass(e){this._hass=e,this._t=E(e.language)}getCardSize(){return 5}_showToast(e){this._toast=e,setTimeout(()=>{this._toast=""},3e3)}_requestConfirm(e,r,i){this._confirmMessage=e,this._confirmLabel=r,this._confirmAction=i}_executeConfirm(){this._confirmAction?.(),this._confirmAction=null,this._confirmMessage="",this._confirmLabel=""}_cancelConfirm(){this._confirmAction=null,this._confirmMessage="",this._confirmLabel=""}_newProgram(){this._editingProgram={id:"",name:"",schedule:{times:["06:00"]},zones:[],dry_run:!1,isNew:!0}}_editProgram(e){let r=this._hass.states[e];if(!r)return;let i=r.attributes,n=i.program_id??"",l={times:i.schedule?.times??["06:00"]},a=(i.zones??[]).map(d=>({zone_id:d.zone_id,valves:d.valves.map(u=>({valve_id:u.valve_id,duration:u.duration,frequency:u.frequency,times:u.times}))}));this._editingProgram={id:n,name:typeof i.friendly_name=="string"?i.friendly_name:n,schedule:l,zones:a,dry_run:i.dry_run===!0,isNew:!1}}_cancelProgram(){this._editingProgram=null}_updateProgramForm(e){this._editingProgram=e}async _saveProgram(e){if(e.zones.some(l=>l.valves.some(a=>a.times!==void 0&&a.times.length===0))){this._showToast(this._t("config.valve_times_required"));return}let i=e.isNew?ee(e.name):e.id,n=e.isNew?"create_program":"update_program",s=[...e.schedule.times].sort();await this._hass.callService("wateringhub",n,{id:i,name:e.name,schedule:{times:s},dry_run:e.dry_run,zones:e.zones.map(l=>({zone_id:l.zone_id,valves:l.valves.map(a=>({valve_id:a.valve_id,duration:a.duration,...a.frequency?{frequency:a.frequency}:{},...a.times&&a.times.length>0&&a.times.length<s.length?{times:[...a.times].sort()}:{}}))}))}),this._editingProgram=null,this._showToast(this._t("config.saved"))}_deleteProgram(e){this._requestConfirm(this._t("config.confirm_delete_program"),this._t("config.delete"),async()=>{let i=this._hass.states[e]?.attributes.program_id??"";await this._hass.callService("wateringhub","delete_program",{id:i}),this._showToast(this._t("config.deleted"))})}render(){return!this._hass||!this._config?c`<ha-card>${this._t("loading")}</ha-card>`:c`
      <ha-card>
        <div class="header"><span class="title">${this._t("config.title")}</span></div>
        ${Re(this._hass,this._editingProgram,e=>this._editProgram(e),e=>this._deleteProgram(e),()=>this._newProgram(),e=>this._saveProgram(e),()=>this._cancelProgram(),e=>this._updateProgramForm(e),this._t)}
        ${this._toast?c`<div class="toast">${this._toast}</div>`:m}
        ${j(!!this._confirmAction,this._confirmMessage,this._confirmLabel,()=>this._executeConfirm(),()=>this._cancelConfirm(),this._t)}
      </ha-card>
    `}};$.styles=[P,pt],v([h()],$.prototype,"_config",2),v([h()],$.prototype,"_hass",2),v([h()],$.prototype,"_toast",2),v([h()],$.prototype,"_confirmMessage",2),v([h()],$.prototype,"_confirmLabel",2),v([h()],$.prototype,"_confirmAction",2),v([h()],$.prototype,"_editingProgram",2),$=v([T("wateringhub-config-card")],$);globalThis.customCards=globalThis.customCards||[];globalThis.customCards.push({type:"wateringhub-config-card",name:"WateringHub Config Card",description:"Configuration card for WateringHub programs"});
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
