var Et=Object.defineProperty;var Pt=Object.getOwnPropertyDescriptor;var _=(r,t,e,i)=>{for(var n=i>1?void 0:i?Pt(t,e):t,s=r.length-1,o;s>=0;s--)(o=r[s])&&(n=(i?o(t,e,n):o(n))||n);return i&&n&&Et(t,e,n),n};var pe=globalThis,ue=pe.ShadowRoot&&(pe.ShadyCSS===void 0||pe.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,we=Symbol(),Oe=new WeakMap,re=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==we)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(ue&&t===void 0){let i=e!==void 0&&e.length===1;i&&(t=Oe.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Oe.set(e,t))}return t}toString(){return this.cssText}},je=r=>new re(typeof r=="string"?r:r+"",void 0,we),E=(r,...t)=>{let e=r.length===1?r[0]:t.reduce((i,n,s)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+r[s+1],r[0]);return new re(e,r,we)},Be=(r,t)=>{if(ue)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let i=document.createElement("style"),n=pe.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,r.appendChild(i)}},Se=ue?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return je(e)})(r):r;var{is:Rt,defineProperty:Ct,getOwnPropertyDescriptor:Vt,getOwnPropertyNames:Nt,getOwnPropertySymbols:Mt,getPrototypeOf:It}=Object,me=globalThis,Ue=me.trustedTypes,qt=Ue?Ue.emptyScript:"",Dt=me.reactiveElementPolyfillSupport,ie=(r,t)=>r,ne={toAttribute(r,t){switch(t){case Boolean:r=r?qt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},ge=(r,t)=>!Rt(r,t),We={attribute:!0,type:String,converter:ne,reflect:!1,useDefault:!1,hasChanged:ge};Symbol.metadata??=Symbol("metadata"),me.litPropertyMetadata??=new WeakMap;var P=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=We){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let i=Symbol(),n=this.getPropertyDescriptor(t,i,e);n!==void 0&&Ct(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){let{get:n,set:s}=Vt(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get:n,set(o){let c=n?.call(this);s?.call(this,o),this.requestUpdate(t,c,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??We}static _$Ei(){if(this.hasOwnProperty(ie("elementProperties")))return;let t=It(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(ie("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ie("properties"))){let e=this.properties,i=[...Nt(e),...Mt(e)];for(let n of i)this.createProperty(n,e[n])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[i,n]of e)this.elementProperties.set(i,n)}this._$Eh=new Map;for(let[e,i]of this.elementProperties){let n=this._$Eu(e,i);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let n of i)e.unshift(Se(n))}else t!==void 0&&e.push(Se(t));return e}static _$Eu(t,e){let i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Be(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){let i=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,i);if(n!==void 0&&i.reflect===!0){let s=(i.converter?.toAttribute!==void 0?i.converter:ne).toAttribute(e,i.type);this._$Em=t,s==null?this.removeAttribute(n):this.setAttribute(n,s),this._$Em=null}}_$AK(t,e){let i=this.constructor,n=i._$Eh.get(t);if(n!==void 0&&this._$Em!==n){let s=i.getPropertyOptions(n),o=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:ne;this._$Em=n;let c=o.fromAttribute(e,s.type);this[n]=c??this._$Ej?.get(n)??c,this._$Em=null}}requestUpdate(t,e,i,n=!1,s){if(t!==void 0){let o=this.constructor;if(n===!1&&(s=this[t]),i??=o.getPropertyOptions(t),!((i.hasChanged??ge)(s,e)||i.useDefault&&i.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:n,wrapped:s},o){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),s!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),n===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[n,s]of this._$Ep)this[n]=s;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[n,s]of i){let{wrapped:o}=s,c=this[n];o!==!0||this._$AL.has(n)||c===void 0||this.C(n,void 0,s,c)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};P.elementStyles=[],P.shadowRootOptions={mode:"open"},P[ie("elementProperties")]=new Map,P[ie("finalized")]=new Map,Dt?.({ReactiveElement:P}),(me.reactiveElementVersions??=[]).push("2.1.2");var Re=globalThis,Ye=r=>r,ve=Re.trustedTypes,Je=ve?ve.createPolicy("lit-html",{createHTML:r=>r}):void 0,tt="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,rt="?"+C,Ft=`<${rt}>`,Z=document,oe=()=>Z.createComment(""),ae=r=>r===null||typeof r!="object"&&typeof r!="function",Ce=Array.isArray,Lt=r=>Ce(r)||typeof r?.[Symbol.iterator]=="function",Ae=`[ 	
\f\r]`,se=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ge=/-->/g,Ke=/>/g,F=RegExp(`>|${Ae}(?:([^\\s"'>=/]+)(${Ae}*=${Ae}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Xe=/'/g,Qe=/"/g,it=/^(?:script|style|textarea|title)$/i,Ve=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),l=Ve(1),cr=Ve(2),dr=Ve(3),H=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),et=new WeakMap,L=Z.createTreeWalker(Z,129);function nt(r,t){if(!Ce(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Je!==void 0?Je.createHTML(t):t}var Zt=(r,t)=>{let e=r.length-1,i=[],n,s=t===2?"<svg>":t===3?"<math>":"",o=se;for(let c=0;c<e;c++){let a=r[c],d,p,u=-1,g=0;for(;g<a.length&&(o.lastIndex=g,p=o.exec(a),p!==null);)g=o.lastIndex,o===se?p[1]==="!--"?o=Ge:p[1]!==void 0?o=Ke:p[2]!==void 0?(it.test(p[2])&&(n=RegExp("</"+p[2],"g")),o=F):p[3]!==void 0&&(o=F):o===F?p[0]===">"?(o=n??se,u=-1):p[1]===void 0?u=-2:(u=o.lastIndex-p[2].length,d=p[1],o=p[3]===void 0?F:p[3]==='"'?Qe:Xe):o===Qe||o===Xe?o=F:o===Ge||o===Ke?o=se:(o=F,n=void 0);let h=o===F&&r[c+1].startsWith("/>")?" ":"";s+=o===se?a+Ft:u>=0?(i.push(d),a.slice(0,u)+tt+a.slice(u)+C+h):a+C+(u===-2?c:h)}return[nt(r,s+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]},le=class r{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,o=0,c=t.length-1,a=this.parts,[d,p]=Zt(t,e);if(this.el=r.createElement(d,i),L.currentNode=this.el.content,e===2||e===3){let u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(n=L.nextNode())!==null&&a.length<c;){if(n.nodeType===1){if(n.hasAttributes())for(let u of n.getAttributeNames())if(u.endsWith(tt)){let g=p[o++],h=n.getAttribute(u).split(C),v=/([.?@])?(.*)/.exec(g);a.push({type:1,index:s,name:v[2],strings:h,ctor:v[1]==="."?Te:v[1]==="?"?ze:v[1]==="@"?Ee:W}),n.removeAttribute(u)}else u.startsWith(C)&&(a.push({type:6,index:s}),n.removeAttribute(u));if(it.test(n.tagName)){let u=n.textContent.split(C),g=u.length-1;if(g>0){n.textContent=ve?ve.emptyScript:"";for(let h=0;h<g;h++)n.append(u[h],oe()),L.nextNode(),a.push({type:2,index:++s});n.append(u[g],oe())}}}else if(n.nodeType===8)if(n.data===rt)a.push({type:2,index:s});else{let u=-1;for(;(u=n.data.indexOf(C,u+1))!==-1;)a.push({type:7,index:s}),u+=C.length-1}s++}}static createElement(t,e){let i=Z.createElement("template");return i.innerHTML=t,i}};function U(r,t,e=r,i){if(t===H)return t;let n=i!==void 0?e._$Co?.[i]:e._$Cl,s=ae(t)?void 0:t._$litDirective$;return n?.constructor!==s&&(n?._$AO?.(!1),s===void 0?n=void 0:(n=new s(r),n._$AT(r,e,i)),i!==void 0?(e._$Co??=[])[i]=n:e._$Cl=n),n!==void 0&&(t=U(r,n._$AS(r,t.values),n,i)),t}var ke=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:i}=this._$AD,n=(t?.creationScope??Z).importNode(e,!0);L.currentNode=n;let s=L.nextNode(),o=0,c=0,a=i[0];for(;a!==void 0;){if(o===a.index){let d;a.type===2?d=new ce(s,s.nextSibling,this,t):a.type===1?d=new a.ctor(s,a.name,a.strings,this,t):a.type===6&&(d=new Pe(s,this,t)),this._$AV.push(d),a=i[++c]}o!==a?.index&&(s=L.nextNode(),o++)}return L.currentNode=Z,n}p(t){let e=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},ce=class r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,n){this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=U(this,t,e),ae(t)?t===m||t==null||t===""?(this._$AH!==m&&this._$AR(),this._$AH=m):t!==this._$AH&&t!==H&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Lt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==m&&ae(this._$AH)?this._$AA.nextSibling.data=t:this.T(Z.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:i}=t,n=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=le.createElement(nt(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(e);else{let s=new ke(n,this),o=s.u(this.options);s.p(e),this.T(o),this._$AH=s}}_$AC(t){let e=et.get(t.strings);return e===void 0&&et.set(t.strings,e=new le(t)),e}k(t){Ce(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,n=0;for(let s of t)n===e.length?e.push(i=new r(this.O(oe()),this.O(oe()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let i=Ye(t).nextSibling;Ye(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},W=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,n,s){this.type=1,this._$AH=m,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=m}_$AI(t,e=this,i,n){let s=this.strings,o=!1;if(s===void 0)t=U(this,t,e,0),o=!ae(t)||t!==this._$AH&&t!==H,o&&(this._$AH=t);else{let c=t,a,d;for(t=s[0],a=0;a<s.length-1;a++)d=U(this,c[i+a],e,a),d===H&&(d=this._$AH[a]),o||=!ae(d)||d!==this._$AH[a],d===m?t=m:t!==m&&(t+=(d??"")+s[a+1]),this._$AH[a]=d}o&&!n&&this.j(t)}j(t){t===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Te=class extends W{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===m?void 0:t}},ze=class extends W{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==m)}},Ee=class extends W{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){if((t=U(this,t,e,0)??m)===H)return;let i=this._$AH,n=t===m&&i!==m||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==m&&(i===m||n);n&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},Pe=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){U(this,t)}};var Ht=Re.litHtmlPolyfillSupport;Ht?.(le,ce),(Re.litHtmlVersions??=[]).push("3.3.2");var st=(r,t,e)=>{let i=e?.renderBefore??t,n=i._$litPart$;if(n===void 0){let s=e?.renderBefore??null;i._$litPart$=n=new ce(t.insertBefore(oe(),s),s,void 0,e??{})}return n._$AI(r),n};var Ne=globalThis,S=class extends P{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=st(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return H}};S._$litElement$=!0,S.finalized=!0,Ne.litElementHydrateSupport?.({LitElement:S});var Ot=Ne.litElementPolyfillSupport;Ot?.({LitElement:S});(Ne.litElementVersions??=[]).push("4.2.2");var V=r=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(r,t)}):customElements.define(r,t)};var jt={attribute:!0,type:String,converter:ne,reflect:!1,hasChanged:ge},Bt=(r=jt,t,e)=>{let{kind:i,metadata:n}=e,s=globalThis.litPropertyMetadata.get(n);if(s===void 0&&globalThis.litPropertyMetadata.set(n,s=new Map),i==="setter"&&((r=Object.create(r)).wrapped=!0),s.set(e.name,r),i==="accessor"){let{name:o}=e;return{set(c){let a=t.get.call(this);t.set.call(this,c),this.requestUpdate(o,a,r,!0,c)},init(c){return c!==void 0&&this.C(o,void 0,r,c),c}}}if(i==="setter"){let{name:o}=e;return function(c){let a=this[o];t.call(this,c),this.requestUpdate(o,a,r,!0,c)}}throw Error("Unsupported decorator location: "+i)};function ot(r){return(t,e)=>typeof e=="object"?Bt(r,t,e):((i,n,s)=>{let o=n.hasOwnProperty(s);return n.constructor.createProperty(s,i),o?Object.getOwnPropertyDescriptor(n,s):void 0})(r,t,e)}function y(r){return ot({...r,state:!0,attribute:!1})}var at={"status.idle":"Idle","status.running":"Running","status.error":"Error","status.disabled":"Disabled",stop_all:"Stop All",next:"Next",last:"Last",no_programs:"No programs found",loading:"Loading...","time.just_now":"just now","time.minutes_ago":"{count}m ago","time.hours_ago":"{count}h ago","time.days_ago":"{count }d ago","time.today_at":"today at {time}","time.tomorrow_at":"tomorrow at {time}","time.in_days":"in {count} d","time.never":"Never","time.no_schedule":"No active program","status.running_program":"Running: {name}",stop_confirm:"Stop all watering?","recap.total_duration":"Total duration: {duration} min","days.mon":"Mon","days.tue":"Tue","days.wed":"Wed","days.thu":"Thu","days.fri":"Fri","days.sat":"Sat","days.sun":"Sun","running.progress":"Valve {done} of {total}","error.program":"Error \u2014 {name}","error.auto_stopped":"All valves have been automatically closed.","config.tab_valves":"Valves","config.tab_zones":"Zones","config.tab_programs":"Programs","config.no_valves":"No valves configured","config.no_zones":"No zones created","config.no_programs":"No programs created","config.new_zone":"New zone","config.new_program":"New program","config.name":"Name","config.save":"Save","config.cancel":"Cancel","config.delete":"Delete","config.edit":"Edit","config.confirm_delete_zone":"Delete this zone?","config.confirm_delete_program":"Delete this program?","config.trigger_time":"Trigger time","config.select_valves":"Select valves","config.select_zones":"Select zones","config.valve_entity":"Entity","config.total_duration":"Total: {duration} min","config.dry_run":"Test mode","config.dry_run_hint":"Runs the sequence without activating valves","running.dry_run":"Test mode","config.follows_program":"Every day","config.frequency_every_n":"Every {n} days","config.frequency_weekdays":"Specific days","recap.frequency_every_n":"every {n}d","config.title":"WateringHub Config","config.editor_valves":"Valves","config.add_valve":"Add valve","config.select_entity":"Switch entity","config.confirm_delete_valve":"Delete this valve?","config.saved":"Saved","config.deleted":"Deleted","skip.button":"Pause","skip.days_1":"1 day","skip.days_n":"{count} days","skip.active":"Paused {count} d","skip.cancel":"Resume","skip.toast_paused":"Program paused {count} d","skip.toast_resumed":"Program resumed","confirm.stop":"Stop","config.tab_water_supplies":"Water Supplies","config.no_water_supplies":"No water supplies","config.new_water_supply":"New supply","config.water_supply":"Water supply","config.confirm_delete_water_supply":"Delete this water supply?","config.error_water_supply_in_use":"Reassign valves first","config.no_water_supply_hint":"Create a water supply first","config.hint_programs":"Create watering programs with a schedule and zones.","config.hint_zones":"Create at least one zone to group your valves.","config.hint_water_supplies":"Define at least one water supply to enable parallel execution.","config.hint_valves":"Configure your valves and assign them to a zone and water supply.","config.none":"None","config.hint_valves_prereq":"Create water supplies and zones first","config.hint_programs_prereq":"Configure your valves first","schedule.at_one":"at {time}","schedule.at_many":"at {rest} and {last}","config.trigger_times":"Trigger times","config.add_time":"Add a time","config.valve_custom_times":"Custom times","config.valve_custom_times_hint":"Run only at selected times","config.valve_times_required":"Select at least one time, or uncheck custom times"};var lt={"status.idle":"En attente","status.running":"Arrosage en cours","status.error":"Erreur","status.disabled":"D\xE9sactiv\xE9",stop_all:"Tout arr\xEAter",next:"Prochain",last:"Dernier",no_programs:"Aucun programme trouv\xE9",loading:"Chargement...","time.just_now":"\xE0 l'instant","time.minutes_ago":"il y a {count} min","time.hours_ago":"il y a {count}h","time.days_ago":"il y a {count} j","time.today_at":"aujourd'hui \xE0 {time}","time.tomorrow_at":"demain \xE0 {time}","time.in_days":"dans {count} j","time.never":"Jamais","time.no_schedule":"Aucun programme actif","status.running_program":"En cours : {name}",stop_confirm:"Arr\xEAter tout l'arrosage ?","recap.total_duration":"Dur\xE9e totale : {duration} min","days.mon":"Lun","days.tue":"Mar","days.wed":"Mer","days.thu":"Jeu","days.fri":"Ven","days.sat":"Sam","days.sun":"Dim","running.progress":"Vanne {done} sur {total}","error.program":"Erreur \u2014 {name}","error.auto_stopped":"Toutes les vannes ont \xE9t\xE9 ferm\xE9es automatiquement.","config.tab_valves":"Vannes","config.tab_zones":"Zones","config.tab_programs":"Programmes","config.no_valves":"Aucune vanne configur\xE9e","config.no_zones":"Aucune zone cr\xE9\xE9e","config.no_programs":"Aucun programme cr\xE9\xE9","config.new_zone":"Nouvelle zone","config.new_program":"Nouveau programme","config.name":"Nom","config.save":"Sauvegarder","config.cancel":"Annuler","config.delete":"Supprimer","config.edit":"Modifier","config.confirm_delete_zone":"Supprimer cette zone ?","config.confirm_delete_program":"Supprimer ce programme ?","config.trigger_time":"Heure de d\xE9clenchement","config.select_valves":"S\xE9lectionner les vannes","config.select_zones":"S\xE9lectionner les zones","config.valve_entity":"Entit\xE9","config.total_duration":"Total : {duration} min","config.dry_run":"Mode test","config.dry_run_hint":"Ex\xE9cute la s\xE9quence sans activer les vannes","running.dry_run":"Mode test","config.follows_program":"Tous les jours","config.frequency_every_n":"Tous les {n} jours","config.frequency_weekdays":"Jours sp\xE9cifiques","recap.frequency_every_n":"tous les {n}j","config.title":"WateringHub Config","config.editor_valves":"Vannes","config.add_valve":"Ajouter une vanne","config.select_entity":"Entit\xE9 switch","config.confirm_delete_valve":"Supprimer cette vanne ?","config.saved":"Enregistr\xE9","config.deleted":"Supprim\xE9","skip.button":"Pause","skip.days_1":"1 jour","skip.days_n":"{count} jours","skip.active":"En pause {count} j","skip.cancel":"Reprendre","skip.toast_paused":"Programme en pause {count} j","skip.toast_resumed":"Programme repris","confirm.stop":"Arr\xEAter","config.tab_water_supplies":"Arriv\xE9es d'eau","config.no_water_supplies":"Aucune arriv\xE9e d'eau","config.new_water_supply":"Nouvelle arriv\xE9e","config.water_supply":"Arriv\xE9e d'eau","config.confirm_delete_water_supply":"Supprimer cette arriv\xE9e ?","config.error_water_supply_in_use":"R\xE9assignez d'abord les vannes","config.no_water_supply_hint":"Cr\xE9ez d'abord une arriv\xE9e d'eau","config.hint_programs":"Cr\xE9ez des programmes d'arrosage avec un horaire et des zones.","config.hint_zones":"Cr\xE9ez au moins une zone pour regrouper vos vannes.","config.hint_water_supplies":"Cr\xE9ez au moins une arriv\xE9e d'eau pour activer le parall\xE9lisme.","config.hint_valves":"Configurez vos vannes et assignez-les \xE0 une zone et une arriv\xE9e d'eau.","config.none":"Aucun","config.hint_valves_prereq":"Cr\xE9ez d'abord des arriv\xE9es d'eau et des zones","config.hint_programs_prereq":"Configurez d'abord vos vannes","schedule.at_one":"\xE0 {time}","schedule.at_many":"\xE0 {rest} et {last}","config.trigger_times":"Horaires de d\xE9clenchement","config.add_time":"Ajouter un horaire","config.valve_custom_times":"Horaires sp\xE9cifiques","config.valve_custom_times_hint":"Ne tourne qu'aux horaires s\xE9lectionn\xE9s","config.valve_times_required":"S\xE9lectionnez au moins un horaire, ou d\xE9cochez les horaires sp\xE9cifiques"};var Me={en:at,fr:lt};function N(r){let t=r?.toLowerCase().startsWith("fr")?"fr":"en",e=Me[t]??Me.en;return(i,n)=>{let s=e[i]??Me.en[i]??i;return n&&(s=s.replace(/\{(\w+)\}/g,(o,c)=>String(n[c]??o))),s}}var M=E`
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
`;var ct=E`
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
`;function _e(r){return Object.keys(r.states).filter(t=>t.startsWith("switch.wateringhub_"))}function Y(r,t){return typeof r?.attributes.friendly_name=="string"?r.attributes.friendly_name:t}function fe(r){return r.states["sensor.wateringhub_status"]?.state??"idle"}function dt(r){let t=r.states["sensor.wateringhub_status"];if(t?.state!=="error")return null;let e=t.attributes,i=e.current_program,n=i?r.states[`switch.wateringhub_${i}`]:void 0;return{programName:Y(n,i??""),errorMessage:e.error_message??""}}function pt(r){let t=r.states["sensor.wateringhub_status"];if(t?.state!=="running")return null;let e=t.attributes,i=e.valves_done??0,n=e.valves_total??1,s=Array.isArray(e.valves_sequence)?e.valves_sequence:[],o=Array.isArray(e.active_valves)?e.active_valves:[],c=o.map(h=>{let v=Math.max(0,(Date.now()-new Date(h.valve_start).getTime())/1e3),f=Math.max(0,h.valve_duration-v),j=s.filter(B=>B.water_supply_id===h.water_supply_id&&B.status==="pending").reduce((B,te)=>B+te.duration,0);return f+j}),a=c.length>0?Math.max(...c):0,d=s.reduce((h,v)=>h+v.duration,0),p=s.filter(h=>h.status==="done").reduce((h,v)=>h+v.duration,0),u=o.reduce((h,v)=>h+Math.max(0,(Date.now()-new Date(v.valve_start).getTime())/1e3),0),g=p+u;return{programName:e.current_program??"",valvesDone:i,valvesTotal:n,progressPercent:e.progress_percent??0,totalRemaining:a,totalDuration:d,totalElapsed:g,valveSequence:s,activeValves:o,dryRun:e.dry_run===!0}}function Ie(r){if(r<=0)return"0:00";let t=Math.floor(r/3600),e=Math.floor(r%3600/60),i=Math.floor(r%60);return t>0?`${t}:${e.toString().padStart(2,"0")}:${i.toString().padStart(2,"0")}`:`${e}:${i.toString().padStart(2,"0")}`}function ye(r,t){if(!r)return"";let e=[...r.times].sort();if(e.length===0)return"";if(e.length===1)return t("schedule.at_one",{time:e[0]});let i=e[e.length-1],n=e.slice(0,-1).join(", ");return t("schedule.at_many",{rest:n,last:i})}function ut(r){let t=r?.state;return t==null||t==="None"||t==="null"||t==="unknown"||t==="unavailable"}function qe(r,t,e,i){let n=r.states[t];if(ut(n))return e("time.never");let s=new Date(n.state);if(Number.isNaN(s.getTime()))return n.state;let o=new Date,c=o.getTime()-s.getTime();if(c<0){let u=new Date(o.getFullYear(),o.getMonth(),o.getDate()),g=new Date(s.getFullYear(),s.getMonth(),s.getDate()),h=Math.round((g.getTime()-u.getTime())/(1e3*60*60*24)),v=s.toLocaleTimeString(i??[],{hour:"2-digit",minute:"2-digit"});return h===0?e("time.today_at",{time:v}):h===1?e("time.tomorrow_at",{time:v}):e("time.in_days",{count:h})}let a=Math.floor(c/(1e3*60));if(a<1)return e("time.just_now");if(a<60)return e("time.minutes_ago",{count:a});let d=Math.floor(a/60);if(d<24)return e("time.hours_ago",{count:d});let p=Math.floor(d/24);return e("time.days_ago",{count:p})}function mt(r,t,e){let i=r.states["sensor.wateringhub_next_run"];return ut(i)?t("time.no_schedule"):qe(r,"sensor.wateringhub_next_run",t,e)}function gt(r){let t=r.attributes.skip_until;if(typeof t!="string")return null;let e=new Date(t+"T23:59:59");if(Number.isNaN(e.getTime()))return null;let i=new Date;if(i>e)return null;let n=new Date(i.getFullYear(),i.getMonth(),i.getDate()),s=new Date(e.getFullYear(),e.getMonth(),e.getDate());return{isSkipped:!0,daysRemaining:Math.max(1,Math.ceil((s.getTime()-n.getTime())/(1e3*60*60*24))),skipUntil:t}}function vt(r,t){return t("skip.active",{count:r})}function G(r,t){return l`<span class="badge-sm badge-${r}">${t}</span>`}function de(r,t,e="primary"){return l`<button class="btn btn-${e}" @click=${t}>${r}</button>`}function J(r,t,e){return l`
    <button
      class=${e?.className??"action-btn"}
      @click=${t}
      title=${e?.title??""}
    >
      <ha-icon icon=${r}></ha-icon>
    </button>
  `}function I(r,t){return l`<button class="add-btn" @click=${t}>${r}</button>`}function K(r,t,e){return l`
    <div class="form-actions">
      ${de(e("config.cancel"),r,"cancel")}
      ${de(e("config.save"),t,"primary")}
    </div>
  `}function R(r,t){return l`
    <div class="form-row">
      <label class="form-label">${r}</label>
      ${t}
    </div>
  `}function X(r,t,e,i,n){return l`
    <div class="list-item">
      <div class="list-item-header">
        <div>
          <div class="list-item-name">${r}</div>
          <div class="list-item-sub">${t}</div>
        </div>
        <div class="list-item-actions">
          ${J("mdi:pencil",e,{title:n("config.edit")})}
          ${J("mdi:delete",i,{title:n("config.delete"),className:"action-btn delete"})}
        </div>
      </div>
    </div>
  `}function Q(r,t,e,i,n,s){return r?l`
    <div class="confirm-overlay" @click=${n}>
      <div class="confirm-dialog" @click=${o=>o.stopPropagation()}>
        <div class="confirm-message">${t}</div>
        <div class="confirm-actions">
          <button class="btn btn-cancel" @click=${n}>${s("config.cancel")}</button>
          <button class="btn btn-danger" @click=${i}>${e}</button>
        </div>
      </div>
    </div>
  `:l``}function ht(r){return l`
    <div class="header">
      <span class="title">${r}</span>
    </div>
  `}function Yt(r,t,e,i,n,s,o,c){if(!e)return l`
      <div class="program-status">${G("disabled",n("status.disabled"))}</div>
    `;if(fe(r)==="running"){let g=r.states["sensor.wateringhub_status"]?.attributes.current_program,h=t.entity_id?.replace("switch.wateringhub_","");return l`
      <div class="program-status">
        ${g===h?G("running",n("status.running")):m}
      </div>
    `}let d=gt(t),p=i?Gt(o,n):m;return l`
    <div class="program-status">
      ${d?l`
            ${G("skipped",vt(d.daysRemaining,n))}
            <button class="skip-cancel-btn" @click=${c} title=${n("skip.cancel")}>
              <ha-icon icon="mdi:close-circle-outline"></ha-icon>
            </button>
          `:l`
            ${G("idle",n("status.idle"))}
            <div class="skip-dropdown-wrapper">
              <button class="skip-btn" @click=${s} title=${n("skip.button")}>
                <ha-icon icon="mdi:pause-circle-outline"></ha-icon>
              </button>
              ${p}
            </div>
          `}
      <span class="info-sm">${n("next")}: ${mt(r,n,r.language)}</span>
    </div>
  `}function _t(r,t){let e=dt(r);return e?l`
    <div class="error-view">
      <div class="error-title">
        <ha-icon icon="mdi:alert-circle"></ha-icon>
        ${t("error.program",{name:e.programName})}
      </div>
      ${e.errorMessage?l`<div class="error-message">${e.errorMessage}</div>`:m}
      <div class="error-auto-stopped">${t("error.auto_stopped")}</div>
    </div>
  `:l``}function ft(r,t,e){let i=pt(r);if(!i)return l``;let n=r.states["sensor.wateringhub_status"]?.attributes.water_supplies??[],s=i.activeValves.length>1?Jt(i.valveSequence,i.activeValves,n):yt(i.valveSequence,i.activeValves),o=i.valveSequence.length>0?s:m,c=2*Math.PI*30,a=i.totalDuration>0?Math.min(1,i.totalElapsed/i.totalDuration):0,d=c*(1-a);return l`
    <div class="running-block">
      <button class="running-stop-btn" @click=${t}>${e("stop_all")}</button>
      ${i.dryRun?G("dry-run",e("running.dry_run")):m}

      <div class="global-hero">
        <div class="circular-progress">
          <svg viewBox="0 0 68 68">
            <circle class="cp-track" cx="34" cy="34" r="30" />
            <circle
              class="cp-fill"
              cx="34"
              cy="34"
              r="30"
              style="stroke-dasharray: ${c}; stroke-dashoffset: ${d}"
            />
          </svg>
          <div class="cp-center">
            <span class="cp-time">${Ie(i.totalRemaining)}</span>
          </div>
        </div>
        <div class="global-info">
          <div class="global-program-name">
            ${Y(r.states[`switch.wateringhub_${i.programName}`],i.programName)}
          </div>
          <div class="global-sub">
            ${e("running.progress",{done:i.valvesDone+1,total:i.valvesTotal})}
          </div>
        </div>
      </div>

      ${o}
    </div>
  `}function yt(r,t){let e=[];for(let a of r){let d=e[e.length-1];d?.zoneName===a.zone_name?d.valves.push(a):e.push({zoneName:a.zone_name,valves:[a]})}let i=new Map;for(let a of t){let d=Math.max(0,(Date.now()-new Date(a.valve_start).getTime())/1e3);i.set(a.valve_id,Math.max(0,a.valve_duration-d))}let n=l`<svg viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z"
    />
  </svg>`,s=l`<svg viewBox="0 0 24 24">
    <circle fill="currentColor" cx="12" cy="12" r="6" />
  </svg>`,o=l`<svg viewBox="0 0 24 24">
    <circle fill="none" stroke="currentColor" stroke-width="2" cx="12" cy="12" r="6" />
  </svg>`,c={done:n,running:s,pending:o};return l`
    <div class="valve-timeline">
      ${e.map(a=>l`
          <div class="tl-zone">${a.zoneName}</div>
          ${a.valves.map(d=>{let p=Math.ceil(d.duration/60),u=i.get(d.valve_id)??0;return l`
              <div class="tl-step tl-${d.status}">
                <span class="tl-dot">${c[d.status]}</span>
                <span class="tl-step-name">${d.valve_name}</span>
                <span class="tl-step-time">
                  ${d.status==="running"?Ie(u):`${p} min`}
                </span>
              </div>
            `})}
        `)}
    </div>
  `}function Jt(r,t,e){let i=[],n=new Map;for(let o of r)n.has(o.water_supply_id)||(i.push(o.water_supply_id),n.set(o.water_supply_id,[])),n.get(o.water_supply_id).push(o);let s=new Map;for(let o of t)s.has(o.water_supply_id)||s.set(o.water_supply_id,[]),s.get(o.water_supply_id).push(o);return l`
    <div class="parallel-timeline">
      ${i.map(o=>{let c=n.get(o)??[],a=s.get(o)??[],d=o===null?"\u2014":e.find(p=>p.id===o)?.name??o;return l`
          <div class="supply-column">
            <div class="supply-label">${d}</div>
            ${yt(c,a)}
          </div>
        `})}
    </div>
  `}function bt(r,t,e,i,n,s,o,c,a,d){return t.length===0?l`<div class="empty-state">${d("no_programs")}</div>`:l`${t.map(p=>{let u=r.states[p];if(!u)return m;let g=u.state==="on",h=e===p,v=Y(u,p);return l`
      <div class="program-wrapper">
        <div class="program">
          <div class="program-header" @click=${()=>n(p)}>
            <ha-icon class="chevron ${h?"open":""}" icon="mdi:chevron-down"></ha-icon>
            ${g?l`<div class="active-dot"></div>`:m}
            <span class="program-name ${g?"active":""}">${v}</span>
          </div>
          <ha-switch .checked=${g} @change=${()=>s(p)}></ha-switch>
        </div>
        ${Yt(r,u,g,i===p,d,()=>o(p),f=>c(p,f),()=>a(p))}
        ${Kt(r,u.attributes,h,d)}
      </div>
    `})}`}function Gt(r,t){return l`
    <div class="skip-dropdown">
      ${[1,2,3,5].map(i=>l`
          <button class="skip-dropdown-option" @click=${()=>r(i)}>
            ${i===1?t("skip.days_1"):t("skip.days_n",{count:i})}
          </button>
        `)}
    </div>
  `}function Kt(r,t,e,i){let n=t.schedule,s=t.zones??[],o=t.total_duration;return l`
    <div class="program-recap ${e?"open":""}">
      ${n?l`<div class="recap-schedule">
            <ha-icon icon="mdi:calendar-clock"></ha-icon>
            ${ye(n,i)}
          </div>`:m}
      <div class="recap-schedule">
        <ha-icon icon="mdi:history"></ha-icon>
        ${i("last")}: ${qe(r,"sensor.wateringhub_last_run",i,r.language)}
      </div>
      ${s.map(c=>l`
          <div class="recap-zone">
            <span class="recap-zone-badge">${c.zone_name}</span>
          </div>
          ${c.valves.map(a=>l`
              <div class="recap-valve">
                <ha-icon icon="mdi:water"></ha-icon>
                ${a.valve_name} — ${a.duration}
                min${Qt(a.frequency,i)}${Xt(a.times,n?.times)}
              </div>
            `)}
        `)}
      ${o?l`<div class="recap-total">
            <ha-icon icon="mdi:timer-outline"></ha-icon>
            ${i("recap.total_duration",{duration:o})}
          </div>`:m}
    </div>
  `}function Xt(r,t){return!r||r.length===0||t&&r.length===t.length?"":` \xB7 ${[...r].sort().join(", ")}`}function Qt(r,t){return r?r.type==="every_n_days"?` \xB7 ${t("recap.frequency_every_n",{n:r.n??2})}`:r.type==="weekdays"&&r.days?.length?` \xB7 ${r.days.map(i=>t(`days.${i}`)).join(", ")}`:"":""}var O=class extends S{constructor(){super(...arguments);this._t=e=>e}set hass(e){this._hass=e,this._t=N(e.language)}setConfig(e){this._config=e}_titleChanged(e){let i=e.target.value;this._config={...this._config,title:i},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config}}))}render(){return l`
      ${R(this._t("config.name"),l`<input
          class="form-input"
          .value=${this._config?.title??""}
          @input=${this._titleChanged}
        />`)}
    `}};O.styles=[M],_([y()],O.prototype,"_config",2),_([y()],O.prototype,"_hass",2),O=_([V("wateringhub-card-editor")],O);var w=class extends S{constructor(){super(...arguments);this._programEntities=[];this._expandedProgram=null;this._skipDropdownOpen=null;this._toast="";this._confirmMessage="";this._confirmLabel="";this._confirmAction=null;this._tick=0;this._t=e=>e;this._timerInterval=null;this._unsubEvents=null;this._boundCloseDropdown=this._closeSkipDropdown.bind(this)}static getConfigElement(){return document.createElement("wateringhub-card-editor")}setConfig(e){this._config=e}set hass(e){let i=this._hass;this._hass=e,this._t=N(e.language),i?.states!==e.states&&(this._programEntities=_e(e)),this._updateTimer(fe(e)),this._subscribeEvents()}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._boundCloseDropdown)}disconnectedCallback(){super.disconnectedCallback(),this._clearTimer(),this._unsubscribeEvents(),document.removeEventListener("click",this._boundCloseDropdown)}_subscribeEvents(){this._unsubEvents||!this._hass?.connection||this._hass.connection.subscribeEvents(()=>{this._tick++},"wateringhub_event").then(e=>{this._unsubEvents=e})}_unsubscribeEvents(){this._unsubEvents&&(this._unsubEvents(),this._unsubEvents=null)}_updateTimer(e){e==="running"&&!this._timerInterval?this._timerInterval=setInterval(()=>{this._tick++},1e3):e!=="running"&&this._timerInterval&&this._clearTimer()}_clearTimer(){this._timerInterval&&(clearInterval(this._timerInterval),this._timerInterval=null)}getCardSize(){return 3}_toggleExpand(e){this._expandedProgram=this._expandedProgram===e?null:e}_toggleProgram(e){let i=this._hass.states[e];if(!i)return;let n=i.state==="on"?"turn_off":"turn_on";this._hass.callService("switch",n,{entity_id:e})}_requestConfirm(e,i,n){this._confirmMessage=e,this._confirmLabel=i,this._confirmAction=n}_executeConfirm(){this._confirmAction?.(),this._confirmAction=null,this._confirmMessage="",this._confirmLabel=""}_cancelConfirm(){this._confirmAction=null,this._confirmMessage="",this._confirmLabel=""}_stopAll(){this._requestConfirm(this._t("stop_confirm"),this._t("confirm.stop"),()=>{this._hass.callService("wateringhub","stop_all",{})})}_toggleSkipDropdown(e){this._skipDropdownOpen=this._skipDropdownOpen===e?null:e}_showToast(e){this._toast=e,setTimeout(()=>{this._toast=""},3e3)}_handleSkip(e,i){let n=e.replace("switch.wateringhub_","");this._hass.callService("wateringhub","skip_program",{id:n,days:i}),this._skipDropdownOpen=null,this._showToast(this._t("skip.toast_paused",{count:i}))}_handleCancelSkip(e){let i=e.replace("switch.wateringhub_","");this._hass.callService("wateringhub","skip_program",{id:i,days:0}),this._showToast(this._t("skip.toast_resumed"))}_closeSkipDropdown(e){if(!this._skipDropdownOpen)return;e.composedPath().some(s=>s instanceof HTMLElement&&s.classList?.contains("skip-dropdown-wrapper"))||(this._skipDropdownOpen=null)}render(){if(!this._hass||!this._config)return l`<ha-card>${this._t("loading")}</ha-card>`;let e=this._config.title??"WateringHub";return l`
      <ha-card>
        ${ht(e)} ${_t(this._hass,this._t)}
        ${ft(this._hass,()=>this._stopAll(),this._t)}
        ${bt(this._hass,this._programEntities,this._expandedProgram,this._skipDropdownOpen,i=>this._toggleExpand(i),i=>this._toggleProgram(i),i=>this._toggleSkipDropdown(i),(i,n)=>this._handleSkip(i,n),i=>this._handleCancelSkip(i),this._t)}
        ${this._toast?l`<div class="toast">${this._toast}</div>`:m}
        ${Q(!!this._confirmAction,this._confirmMessage,this._confirmLabel,()=>this._executeConfirm(),()=>this._cancelConfirm(),this._t)}
      </ha-card>
    `}};w.styles=[M,ct],_([y()],w.prototype,"_config",2),_([y()],w.prototype,"_hass",2),_([y()],w.prototype,"_programEntities",2),_([y()],w.prototype,"_expandedProgram",2),_([y()],w.prototype,"_skipDropdownOpen",2),_([y()],w.prototype,"_toast",2),_([y()],w.prototype,"_confirmMessage",2),_([y()],w.prototype,"_confirmLabel",2),_([y()],w.prototype,"_confirmAction",2),_([y()],w.prototype,"_tick",2),w=_([V("wateringhub-card")],w);globalThis.customCards=globalThis.customCards||[];globalThis.customCards.push({type:"wateringhub-card",name:"WateringHub Card",description:"Watering management card for WateringHub"});var xt=E`
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
`;function T(r){return r.states["sensor.wateringhub_status"]?.attributes.available_valves??[]}function q(r){return r.states["sensor.wateringhub_status"]?.attributes.zones??[]}function ee(r){return r.states["sensor.wateringhub_status"]?.attributes.water_supplies??[]}function $t(r,t){return t.filter(e=>e.zone_id===r)}function be(r){return r.toLowerCase().normalize("NFD").replaceAll(/[\u0300-\u036f]/g,"").replaceAll(/[^a-z0-9]+/g,"_").replaceAll(/^_|_$/g,"")}function De(r,t,e,i,n,s,o,c){let a=T(r),d=q(r),p=ee(r),u=d.length>0&&p.length>0;if(a.length===0)return l`
      <div class="form-hint">${c("config.hint_valves")}</div>
      <div class="empty-state">${c("config.no_valves")}</div>
    `;let g=t!==null,h=g?t:a,v=g?t.every(f=>f.zone_id&&f.water_supply_id):!1;return l`
    <div class="form-hint">${c("config.hint_valves")}</div>
    ${u?m:l`<div class="empty-state">${c("config.hint_valves_prereq")}</div>`}
    ${h.map(f=>l`
        <div class="list-item">
          <div class="list-item-header">
            <div style="flex:1">
              <div class="list-item-name">${f.name}</div>
              <div class="list-item-sub">${f.entity_id}</div>
              ${u?l`
                    ${er(f,d,p,g,t,a,e,i,c)}
                    ${g&&(!f.zone_id||!f.water_supply_id)?l`<div style="color:var(--error-color);font-size:11px;margin-top:4px;">
                          ${c("config.hint_valves_prereq")}
                        </div>`:m}
                  `:m}
            </div>
            ${J("mdi:delete",()=>o(f.entity_id),{title:c("config.delete"),className:"action-btn delete"})}
          </div>
        </div>
      `)}
    ${g?l`<div class="form-actions">
          <button class="btn btn-cancel" @click=${s}>${c("config.cancel")}</button>
          <button class="btn btn-primary" ?disabled=${!v} @click=${n}>
            ${c("config.save")}
          </button>
        </div>`:m}
  `}function er(r,t,e,i,n,s,o,c,a){let d=i&&!r.zone_id,p=i&&!r.water_supply_id,u="border-color: var(--error-color)";return l`
    <div style="display:flex; gap:8px; margin-top:8px; flex-wrap:wrap;">
      <div style="flex:1; min-width:120px;">
        <label class="form-label">${a("config.tab_zones")}</label>
        <select
          class="form-select"
          style="width:100%;${d?u:""}"
          @change=${g=>{i||o();let h=g.target.value,v=(n??xe(s)).map(f=>f.entity_id===r.entity_id?{...f,zone_id:h}:f);c(v)}}
        >
          <option value="" ?selected=${!r.zone_id}>—</option>
          ${t.map(g=>l`<option value=${g.id} ?selected=${g.id===r.zone_id}>${g.name}</option>`)}
        </select>
      </div>
      <div style="flex:1; min-width:120px;">
        <label class="form-label">${a("config.tab_water_supplies")}</label>
        <select
          class="form-select"
          style="width:100%;${p?u:""}"
          @change=${g=>{i||o();let h=g.target.value,v=(n??xe(s)).map(f=>f.entity_id===r.entity_id?{...f,water_supply_id:h}:f);c(v)}}
        >
          <option value="" ?selected=${!r.water_supply_id}>—</option>
          ${e.map(g=>l`<option value=${g.id} ?selected=${g.id===r.water_supply_id}>
                ${g.name}
              </option>`)}
        </select>
      </div>
    </div>
  `}function xe(r){return r.map(t=>({entity_id:t.entity_id,name:t.name,zone_id:t.zone_id,water_supply_id:t.water_supply_id}))}function Fe(r,t,e,i,n,s,o,c,a){let d=q(r),p=T(r);return l`
    <div class="form-hint">${a("config.hint_zones")}</div>
    ${d.map(u=>t?.id===u.id?wt(t,s,o,c,a):tr(u,p,e,i,a))}
    ${t?.isNew?wt(t,s,o,c,a):m}
    ${t?m:I(`+ ${a("config.new_zone")}`,n)}
    ${d.length===0&&!t?l`<div class="empty-state">${a("config.no_zones")}</div>`:m}
  `}function tr(r,t,e,i,n){let o=t.filter(c=>c.zone_id===r.id).map(c=>c.name).join(", ")||"\u2014";return X(r.name,o,()=>e(r),()=>i(r.id),n)}function wt(r,t,e,i,n){return l`
    <div class="inline-form">
      ${R(n("config.name"),l`<input
          class="form-input"
          .value=${r.name}
          @input=${s=>i({...r,name:s.target.value})}
        />`)}
      ${K(e,()=>t(r),n)}
    </div>
  `}function Le(r,t){let e=new Set(t);return{...r,schedule:{times:t},zones:r.zones.map(i=>({...i,valves:i.valves.map(n=>n.times?{...n,times:n.times.filter(s=>e.has(s))}:n)}))}}function Ze(r,t,e,i,n,s,o,c,a){let d=_e(r),p=q(r),u=T(r),g=u.some(h=>h.zone_id!==null);return l`
    <div class="form-hint">${a("config.hint_programs")}</div>
    ${g?m:l`<div class="empty-state">${a("config.hint_programs_prereq")}</div>`}
    ${d.map(h=>{let v=r.states[h];if(!v)return m;let f=v.attributes.program_id??"";return t?.id===f?St(t,p,u,s,o,c,a):rr(v,h,e,i,a)})}
    ${t?.isNew?St(t,p,u,s,o,c,a):m}
    ${t?m:I(`+ ${a("config.new_program")}`,n)}
    ${d.length===0&&!t?l`<div class="empty-state">${a("config.no_programs")}</div>`:m}
  `}function rr(r,t,e,i,n){let s=Y(r,t),o=r.attributes.schedule,c=r.attributes.total_duration,a=r.attributes.dry_run===!0,d=ye(o,n),p=c?`${d} \u2014 ${c} min`:d,u=a?l`<span class="badge-dry-run-sm">${n("config.dry_run")}</span>`:m;return X(l`${s} ${u}`,p,()=>e(t),()=>i(t),n)}function St(r,t,e,i,n,s,o){let c=r.zones.reduce((a,d)=>a+d.valves.reduce((p,u)=>p+(u.duration||0),0),0);return l`
    <div class="inline-form">
      <!-- Name -->
      ${R(o("config.name"),l`<input
          class="form-input"
          .value=${r.name}
          @input=${a=>s({...r,name:a.target.value})}
        />`)}

      <!-- Schedule — multiple times -->
      ${R(o("config.trigger_times"),l`<div style="display:flex; flex-direction:column; gap:6px;">
          ${(r.schedule.times??[]).map((a,d)=>l`
              <div style="display:flex; gap:8px; align-items:center;">
                <input
                  class="form-input"
                  style="flex:1;"
                  type="time"
                  .value=${a}
                  @input=${p=>{let u=(r.schedule.times??[]).map((g,h)=>h===d?p.target.value:g);s(Le(r,u))}}
                />
                ${(r.schedule.times??[]).length>1?l`<button
                      class="action-btn delete"
                      @click=${()=>{let p=(r.schedule.times??[]).filter((u,g)=>g!==d);s(Le(r,p))}}
                    >
                      <ha-icon icon="mdi:close"></ha-icon>
                    </button>`:m}
              </div>
            `)}
          <button
            class="add-btn"
            style="margin-top:4px;"
            @click=${()=>{let a=[...r.schedule.times??[],"12:00"];s(Le(r,a))}}
          >
            + ${o("config.add_time")}
          </button>
        </div>`)}

      <!-- Zones + valves with durations -->
      <div class="form-row">
        <label class="form-label">${o("config.select_zones")}</label>
        ${[...r.zones.map(a=>t.find(d=>d.id===a.zone_id)),...t.filter(a=>!r.zones.some(d=>d.zone_id===a.id))].filter(a=>!!a).map(a=>{let d=r.zones.findIndex(v=>v.zone_id===a.id),p=d>=0?r.zones[d]:null,u=!!p,g=v=>{let f=[...r.zones],j=d+v;[f[d],f[j]]=[f[j],f[d]],s({...r,zones:f})},h=u&&r.zones.length>1?l`
                    <div class="reorder-btns">
                      <button
                        class="reorder-btn"
                        ?disabled=${d===0}
                        @click=${()=>g(-1)}
                      >
                        <ha-icon icon="mdi:chevron-up"></ha-icon>
                      </button>
                      <button
                        class="reorder-btn"
                        ?disabled=${d===r.zones.length-1}
                        @click=${()=>g(1)}
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
                      @change=${()=>{let v=u?r.zones.filter(f=>f.zone_id!==a.id):[...r.zones,{zone_id:a.id,valves:$t(a.id,e).map(f=>({valve_id:f.id,duration:10}))}];s({...r,zones:v})}}
                    />
                    <span class="form-zone-name">${a.name}</span>
                  </label>
                  ${h}
                </div>
                ${u&&p?p.valves.map((v,f)=>ir(v,f,p,a,r,e,s,o)):m}
              </div>
            `})}
      </div>

      ${c>0?l`<div class="total-duration">
            ${o("config.total_duration",{duration:c})}
          </div>`:m}

      <!-- Dry run toggle -->
      <div class="form-row">
        <label class="checkbox-item">
          <input
            type="checkbox"
            .checked=${r.dry_run}
            @change=${()=>s({...r,dry_run:!r.dry_run})}
          />
          ${o("config.dry_run")}
        </label>
        <div class="form-hint">${o("config.dry_run_hint")}</div>
      </div>

      ${K(n,()=>i(r),o)}
    </div>
  `}function ir(r,t,e,i,n,s,o,c){let a=s.find(b=>b.id===r.valve_id)?.name??r.valve_id,d=r.frequency,p=d?.type??"",u=new Date().toISOString().slice(0,10),g=t===0,h=t===e.valves.length-1,v=b=>{let x=e.valves.map(k=>k.valve_id===r.valve_id?{...k,...b}:k),z=n.zones.map(k=>k.zone_id===i.id?{...k,valves:x}:k);o({...n,zones:z})},f=b=>{let x=[...e.valves],z=t+b;[x[t],x[z]]=[x[z],x[t]];let k=n.zones.map(D=>D.zone_id===i.id?{...D,valves:x}:D);o({...n,zones:k})},j=p==="every_n_days"&&d?l`
          <input
            class="valve-freq-n-input"
            type="number"
            min="2"
            .value=${String(d.n??2)}
            @input=${b=>v({frequency:{...d,n:Number.parseInt(b.target.value)||2}})}
          />
          <span>j</span>
        `:m,B=p==="weekdays"&&d?l`
          <div class="valve-freq-days">
            ${["mon","tue","wed","thu","fri","sat","sun"].map(b=>{let x=d.days?.includes(b)??!1;return l`
                <label class="valve-freq-day">
                  <input
                    type="checkbox"
                    .checked=${x}
                    @change=${()=>{let z=d.days??[],k=x?z.filter(D=>D!==b):[...z,b];v({frequency:{...d,days:k}})}}
                  />
                  ${c(`days.${b}`)}
                </label>
              `})}
          </div>
        `:m,te=n.schedule.times??[],$e=r.times!==void 0,zt=te.length>1?l`
          <div class="valve-custom-times-row">
            <label class="checkbox-item">
              <input
                type="checkbox"
                .checked=${$e}
                @change=${()=>v({times:$e?void 0:[...te]})}
              />
              ${c("config.valve_custom_times")}
            </label>
            ${$e?l`
                  <div class="valve-custom-times-slots">
                    ${[...te].sort().map(b=>{let x=(r.times??[]).includes(b);return l`
                        <label class="valve-custom-time-slot">
                          <input
                            type="checkbox"
                            .checked=${x}
                            @change=${()=>{let z=r.times??[],k=x?z.filter(D=>D!==b):[...z,b];v({times:k})}}
                          />
                          ${b}
                        </label>
                      `})}
                  </div>
                `:m}
          </div>
        `:m;return l`
    <div class="valve-config-block">
      <div class="valve-duration-row">
        <div class="reorder-btns">
          <button class="reorder-btn" ?disabled=${g} @click=${()=>f(-1)}>
            <ha-icon icon="mdi:chevron-up"></ha-icon>
          </button>
          <button class="reorder-btn" ?disabled=${h} @click=${()=>f(1)}>
            <ha-icon icon="mdi:chevron-down"></ha-icon>
          </button>
        </div>
        <label>${a}</label>
        <input
          class="valve-duration-input"
          type="number"
          min="1"
          .value=${String(r.duration)}
          @input=${b=>v({duration:Number.parseInt(b.target.value)||1})}
        />
        <span>min</span>
      </div>
      <div class="valve-frequency-row">
        <select
          class="valve-freq-select"
          .value=${p}
          @change=${b=>{let x=b.target.value;v(x?x==="every_n_days"?{frequency:{type:"every_n_days",n:2,start_date:u}}:{frequency:{type:"weekdays",days:[]}}:{frequency:void 0})}}
        >
          <option value="">${c("config.follows_program")}</option>
          <option value="every_n_days">
            ${c("config.frequency_every_n",{n:d?.n??2})}
          </option>
          <option value="weekdays">${c("config.frequency_weekdays")}</option>
        </select>
        ${j} ${B}
      </div>
      ${zt}
    </div>
  `}function He(r,t,e,i,n,s,o,c,a){let d=ee(r),p=T(r);return l`
    <div class="form-hint">${a("config.hint_water_supplies")}</div>
    ${d.map(u=>{if(t?.id===u.id)return At(t,s,o,c,a);let h=p.filter(v=>v.water_supply_id===u.id).map(v=>v.name).join(", ")||"\u2014";return X(u.name,h,()=>e(u),()=>i(u.id),a)})}
    ${t?.isNew?At(t,s,o,c,a):m}
    ${t?m:I(`+ ${a("config.new_water_supply")}`,n)}
    ${d.length===0&&!t?l`<div class="empty-state">${a("config.no_water_supplies")}</div>`:m}
  `}function At(r,t,e,i,n){return l`
    <div class="inline-form">
      ${R(n("config.name"),l`<input
          class="form-input"
          .value=${r.name}
          @input=${s=>i({...r,name:s.target.value})}
        />`)}
      ${K(e,()=>t(r),n)}
    </div>
  `}function kt(r,t,e){let i=[{id:"water_supplies",label:e("config.tab_water_supplies")},{id:"zones",label:e("config.tab_zones")},{id:"valves",label:e("config.tab_valves")},{id:"programs",label:e("config.tab_programs")}];return l`
    <div class="tabs">
      ${i.map(n=>l`
          <div
            class="tab ${r===n.id?"active":""}"
            @click=${()=>t(n.id)}
          >
            ${n.label}
          </div>
        `)}
    </div>
  `}var Tt=E`
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
`;var A=class extends S{constructor(){super(...arguments);this._adding=!1;this._newEntityId="";this._newZoneId="";this._newWaterSupplyId="";this._confirmMessage="";this._confirmLabel="";this._confirmAction=null;this._t=e=>e}set hass(e){this._hass=e,this._t=N(e.language)}setConfig(e){this._config=e}_getValves(){return this._hass?T(this._hass):[]}async _setValves(e){await this._hass.callService("wateringhub","set_valves",{valves:e})}_requestConfirm(e,i,n){this._confirmMessage=e,this._confirmLabel=i,this._confirmAction=n}_executeConfirm(){this._confirmAction?.(),this._confirmAction=null,this._confirmMessage="",this._confirmLabel=""}_cancelConfirm(){this._confirmAction=null,this._confirmMessage="",this._confirmLabel=""}_deleteValve(e){this._requestConfirm(this._t("config.confirm_delete_valve"),this._t("config.delete"),async()=>{let i=this._getValves().filter(n=>n.entity_id!==e).map(n=>({entity_id:n.entity_id,name:n.name,water_supply_id:n.water_supply_id,zone_id:n.zone_id}));await this._setValves(i)})}_startAdd(){this._adding=!0,this._newEntityId="",this._newZoneId="",this._newWaterSupplyId=""}_onEntityPicked(e){this._newEntityId=e.detail.value}_getFriendlyName(e){let n=this._hass?.states[e]?.attributes.friendly_name;return typeof n=="string"?n:e}async _confirmAdd(){if(!this._newEntityId||!this._newZoneId||!this._newWaterSupplyId)return;let e=this._getFriendlyName(this._newEntityId),i=[...this._getValves().map(n=>({entity_id:n.entity_id,name:n.name,water_supply_id:n.water_supply_id,zone_id:n.zone_id})),{entity_id:this._newEntityId,name:e,water_supply_id:this._newWaterSupplyId,zone_id:this._newZoneId}];await this._setValves(i),this._adding=!1,this._newEntityId="",this._newZoneId="",this._newWaterSupplyId=""}_cancelAdd(){this._adding=!1,this._newEntityId="",this._newZoneId="",this._newWaterSupplyId=""}render(){let e=this._getValves(),i=q(this._hass),n=ee(this._hass);return l`
      <div class="editor-section">
        <span class="editor-label">${this._t("config.editor_valves")}</span>

        ${e.length===0&&!this._adding?l`<div class="empty-state">${this._t("config.no_valves")}</div>`:m}
        ${e.map(s=>l`
            <div class="valve-item">
              <div class="valve-item-info">
                <div class="valve-item-name">${s.name}</div>
                <div class="valve-item-entity">${s.entity_id}</div>
              </div>
              ${J("mdi:delete",()=>this._deleteValve(s.entity_id),{title:this._t("config.delete"),className:"action-btn delete"})}
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
                <div class="form-row">
                  <label class="form-label">${this._t("config.tab_zones")}</label>
                  <select
                    class="form-select"
                    style="width:100%"
                    .value=${this._newZoneId}
                    @change=${s=>{this._newZoneId=s.target.value}}
                  >
                    <option value="">—</option>
                    ${i.map(s=>l`<option value=${s.id}>${s.name}</option>`)}
                  </select>
                </div>
                <div class="form-row">
                  <label class="form-label">${this._t("config.tab_water_supplies")}</label>
                  <select
                    class="form-select"
                    style="width:100%"
                    .value=${this._newWaterSupplyId}
                    @change=${s=>{this._newWaterSupplyId=s.target.value}}
                  >
                    <option value="">—</option>
                    ${n.map(s=>l`<option value=${s.id}>${s.name}</option>`)}
                  </select>
                </div>
                <div class="form-actions">
                  ${de(this._t("config.cancel"),()=>this._cancelAdd(),"cancel")}
                  ${de(this._t("config.save"),()=>this._confirmAdd(),"primary")}
                </div>
              </div>
            `:i.length===0||n.length===0?l`<div class="empty-state">${this._t("config.hint_valves_prereq")}</div>`:I(`+ ${this._t("config.add_valve")}`,()=>this._startAdd())}
        ${Q(!!this._confirmAction,this._confirmMessage,this._confirmLabel,()=>this._executeConfirm(),()=>this._cancelConfirm(),this._t)}
      </div>
    `}};A.styles=[M,Tt],_([y()],A.prototype,"_config",2),_([y()],A.prototype,"_hass",2),_([y()],A.prototype,"_adding",2),_([y()],A.prototype,"_newEntityId",2),_([y()],A.prototype,"_newZoneId",2),_([y()],A.prototype,"_newWaterSupplyId",2),_([y()],A.prototype,"_confirmMessage",2),_([y()],A.prototype,"_confirmLabel",2),_([y()],A.prototype,"_confirmAction",2),A=_([V("wateringhub-config-editor")],A);var $=class extends S{constructor(){super(...arguments);this._activeTab="water_supplies";this._editingZone=null;this._toast="";this._confirmMessage="";this._confirmLabel="";this._confirmAction=null;this._editingProgram=null;this._editingWaterSupply=null;this._editingValves=null;this._t=e=>e}static getConfigElement(){return document.createElement("wateringhub-config-editor")}setConfig(e){this._config=e}set hass(e){this._hass=e,this._t=N(e.language)}getCardSize(){return 5}_showToast(e){this._toast=e,setTimeout(()=>{this._toast=""},3e3)}_requestConfirm(e,i,n){this._confirmMessage=e,this._confirmLabel=i,this._confirmAction=n}_executeConfirm(){this._confirmAction?.(),this._confirmAction=null,this._confirmMessage="",this._confirmLabel=""}_cancelConfirm(){this._confirmAction=null,this._confirmMessage="",this._confirmLabel=""}_setTab(e){this._activeTab=e,this._editingZone=null,this._editingProgram=null,this._editingWaterSupply=null}_newZone(){this._editingZone={id:"",name:"",isNew:!0}}_editZone(e){this._editingZone={id:e.id,name:e.name,isNew:!1}}_cancelZone(){this._editingZone=null}_updateZoneForm(e){this._editingZone=e}async _saveZone(e){let i=e.isNew?be(e.name):e.id,n=e.isNew?"create_zone":"update_zone";await this._hass.callService("wateringhub",n,{id:i,name:e.name}),this._editingZone=null,this._showToast(this._t("config.saved"))}_deleteZone(e){this._requestConfirm(this._t("config.confirm_delete_zone"),this._t("config.delete"),async()=>{try{await this._hass.callService("wateringhub","delete_zone",{id:e}),this._showToast(this._t("config.deleted"))}catch{this._showToast(this._t("config.error_water_supply_in_use"))}})}_newProgram(){this._editingProgram={id:"",name:"",schedule:{times:["06:00"]},zones:[],dry_run:!1,isNew:!0}}_editProgram(e){let i=this._hass.states[e];if(!i)return;let n=i.attributes,s=n.program_id??"",c={times:n.schedule?.times??["06:00"]},a=(n.zones??[]).map(d=>({zone_id:d.zone_id,valves:d.valves.map(p=>({valve_id:p.valve_id,duration:p.duration,frequency:p.frequency,times:p.times}))}));this._editingProgram={id:s,name:typeof n.friendly_name=="string"?n.friendly_name:s,schedule:c,zones:a,dry_run:n.dry_run===!0,isNew:!1}}_cancelProgram(){this._editingProgram=null}_updateProgramForm(e){this._editingProgram=e}async _saveProgram(e){if(e.zones.some(c=>c.valves.some(a=>a.times!==void 0&&a.times.length===0))){this._showToast(this._t("config.valve_times_required"));return}let n=e.isNew?be(e.name):e.id,s=e.isNew?"create_program":"update_program",o=[...e.schedule.times].sort();await this._hass.callService("wateringhub",s,{id:n,name:e.name,schedule:{times:o},dry_run:e.dry_run,zones:e.zones.map(c=>({zone_id:c.zone_id,valves:c.valves.map(a=>({valve_id:a.valve_id,duration:a.duration,...a.frequency?{frequency:a.frequency}:{},...a.times&&a.times.length>0&&a.times.length<o.length?{times:[...a.times].sort()}:{}}))}))}),this._editingProgram=null,this._showToast(this._t("config.saved"))}_deleteProgram(e){this._requestConfirm(this._t("config.confirm_delete_program"),this._t("config.delete"),async()=>{let n=this._hass.states[e]?.attributes.program_id??"";await this._hass.callService("wateringhub","delete_program",{id:n}),this._showToast(this._t("config.deleted"))})}_newWaterSupply(){this._editingWaterSupply={id:"",name:"",isNew:!0}}_editWaterSupply(e){this._editingWaterSupply={...e,isNew:!1}}_cancelWaterSupply(){this._editingWaterSupply=null}_updateWaterSupplyForm(e){this._editingWaterSupply=e}async _saveWaterSupply(e){let i=e.isNew?be(e.name):e.id,n=e.isNew?"create_water_supply":"update_water_supply";await this._hass.callService("wateringhub",n,{id:i,name:e.name}),this._editingWaterSupply=null,this._showToast(this._t("config.saved"))}_deleteWaterSupply(e){this._requestConfirm(this._t("config.confirm_delete_water_supply"),this._t("config.delete"),async()=>{try{await this._hass.callService("wateringhub","delete_water_supply",{id:e}),this._showToast(this._t("config.deleted"))}catch{this._showToast(this._t("config.error_water_supply_in_use"))}})}_startEditValves(){this._editingValves=xe(T(this._hass))}_updateValvesForm(e){this._editingValves=e}async _saveValves(){this._editingValves&&(await this._hass.callService("wateringhub","set_valves",{valves:this._editingValves.map(e=>({entity_id:e.entity_id,name:e.name,water_supply_id:e.water_supply_id,zone_id:e.zone_id}))}),this._editingValves=null,this._showToast(this._t("config.saved")))}_cancelEditValves(){this._editingValves=null}_deleteValveFromTab(e){this._requestConfirm(this._t("config.confirm_delete_valve"),this._t("config.delete"),async()=>{let i=T(this._hass).filter(n=>n.entity_id!==e).map(n=>({entity_id:n.entity_id,name:n.name,water_supply_id:n.water_supply_id,zone_id:n.zone_id}));await this._hass.callService("wateringhub","set_valves",{valves:i}),this._showToast(this._t("config.deleted"))})}render(){return!this._hass||!this._config?l`<ha-card>${this._t("loading")}</ha-card>`:l`
      <ha-card>
        <div class="header"><span class="title">${this._t("config.title")}</span></div>
        ${kt(this._activeTab,e=>this._setTab(e),this._t)}
        ${this._activeTab==="valves"?De(this._hass,this._editingValves,()=>this._startEditValves(),e=>this._updateValvesForm(e),()=>this._saveValves(),()=>this._cancelEditValves(),e=>this._deleteValveFromTab(e),this._t):""}
        ${this._activeTab==="zones"?Fe(this._hass,this._editingZone,e=>this._editZone(e),e=>this._deleteZone(e),()=>this._newZone(),e=>this._saveZone(e),()=>this._cancelZone(),e=>this._updateZoneForm(e),this._t):""}
        ${this._activeTab==="water_supplies"?He(this._hass,this._editingWaterSupply,e=>this._editWaterSupply(e),e=>this._deleteWaterSupply(e),()=>this._newWaterSupply(),e=>this._saveWaterSupply(e),()=>this._cancelWaterSupply(),e=>this._updateWaterSupplyForm(e),this._t):""}
        ${this._activeTab==="programs"?Ze(this._hass,this._editingProgram,e=>this._editProgram(e),e=>this._deleteProgram(e),()=>this._newProgram(),e=>this._saveProgram(e),()=>this._cancelProgram(),e=>this._updateProgramForm(e),this._t):""}
        ${this._toast?l`<div class="toast">${this._toast}</div>`:m}
        ${Q(!!this._confirmAction,this._confirmMessage,this._confirmLabel,()=>this._executeConfirm(),()=>this._cancelConfirm(),this._t)}
      </ha-card>
    `}};$.styles=[M,xt],_([y()],$.prototype,"_config",2),_([y()],$.prototype,"_hass",2),_([y()],$.prototype,"_activeTab",2),_([y()],$.prototype,"_editingZone",2),_([y()],$.prototype,"_toast",2),_([y()],$.prototype,"_confirmMessage",2),_([y()],$.prototype,"_confirmLabel",2),_([y()],$.prototype,"_confirmAction",2),_([y()],$.prototype,"_editingProgram",2),_([y()],$.prototype,"_editingWaterSupply",2),_([y()],$.prototype,"_editingValves",2),$=_([V("wateringhub-config-card")],$);globalThis.customCards=globalThis.customCards||[];globalThis.customCards.push({type:"wateringhub-config-card",name:"WateringHub Config Card",description:"Configuration card for WateringHub zones and programs"});
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
