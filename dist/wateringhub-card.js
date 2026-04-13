var St=Object.defineProperty;var At=Object.getOwnPropertyDescriptor;var g=(i,t,e,r)=>{for(var n=r>1?void 0:r?At(t,e):t,o=i.length-1,s;o>=0;o--)(s=i[o])&&(n=(r?s(t,e,n):s(n))||n);return r&&n&&St(t,e,n),n};var de=globalThis,pe=de.ShadowRoot&&(de.ShadyCSS===void 0||de.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,be=Symbol(),Fe=new WeakMap,te=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==be)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(pe&&t===void 0){let r=e!==void 0&&e.length===1;r&&(t=Fe.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&Fe.set(e,t))}return t}toString(){return this.cssText}},Le=i=>new te(typeof i=="string"?i:i+"",void 0,be),P=(i,...t)=>{let e=i.length===1?i[0]:t.reduce((r,n,o)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+i[o+1],i[0]);return new te(e,i,be)},Ze=(i,t)=>{if(pe)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let r=document.createElement("style"),n=de.litNonce;n!==void 0&&r.setAttribute("nonce",n),r.textContent=e.cssText,i.appendChild(r)}},xe=pe?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(let r of t.cssRules)e+=r.cssText;return Le(e)})(i):i;var{is:kt,defineProperty:Tt,getOwnPropertyDescriptor:Et,getOwnPropertyNames:zt,getOwnPropertySymbols:Pt,getPrototypeOf:Rt}=Object,ue=globalThis,Oe=ue.trustedTypes,Ct=Oe?Oe.emptyScript:"",Mt=ue.reactiveElementPolyfillSupport,re=(i,t)=>i,ie={toAttribute(i,t){switch(t){case Boolean:i=i?Ct:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},me=(i,t)=>!kt(i,t),He={attribute:!0,type:String,converter:ie,reflect:!1,useDefault:!1,hasChanged:me};Symbol.metadata??=Symbol("metadata"),ue.litPropertyMetadata??=new WeakMap;var R=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=He){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let r=Symbol(),n=this.getPropertyDescriptor(t,r,e);n!==void 0&&Tt(this.prototype,t,n)}}static getPropertyDescriptor(t,e,r){let{get:n,set:o}=Et(this.prototype,t)??{get(){return this[e]},set(s){this[e]=s}};return{get:n,set(s){let d=n?.call(this);o?.call(this,s),this.requestUpdate(t,d,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??He}static _$Ei(){if(this.hasOwnProperty(re("elementProperties")))return;let t=Rt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(re("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(re("properties"))){let e=this.properties,r=[...zt(e),...Pt(e)];for(let n of r)this.createProperty(n,e[n])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[r,n]of e)this.elementProperties.set(r,n)}this._$Eh=new Map;for(let[e,r]of this.elementProperties){let n=this._$Eu(e,r);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let r=new Set(t.flat(1/0).reverse());for(let n of r)e.unshift(xe(n))}else t!==void 0&&e.push(xe(t));return e}static _$Eu(t,e){let r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ze(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ET(t,e){let r=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,r);if(n!==void 0&&r.reflect===!0){let o=(r.converter?.toAttribute!==void 0?r.converter:ie).toAttribute(e,r.type);this._$Em=t,o==null?this.removeAttribute(n):this.setAttribute(n,o),this._$Em=null}}_$AK(t,e){let r=this.constructor,n=r._$Eh.get(t);if(n!==void 0&&this._$Em!==n){let o=r.getPropertyOptions(n),s=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:ie;this._$Em=n;let d=s.fromAttribute(e,o.type);this[n]=d??this._$Ej?.get(n)??d,this._$Em=null}}requestUpdate(t,e,r,n=!1,o){if(t!==void 0){let s=this.constructor;if(n===!1&&(o=this[t]),r??=s.getPropertyOptions(t),!((r.hasChanged??me)(o,e)||r.useDefault&&r.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,r))))return;this.C(t,e,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:r,reflect:n,wrapped:o},s){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??e??this[t]),o!==!0||s!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(e=void 0),this._$AL.set(t,e)),n===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[n,o]of r){let{wrapped:s}=o,d=this[n];s!==!0||this._$AL.has(n)||d===void 0||this.C(n,void 0,o,d)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(e)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};R.elementStyles=[],R.shadowRootOptions={mode:"open"},R[re("elementProperties")]=new Map,R[re("finalized")]=new Map,Mt?.({ReactiveElement:R}),(ue.reactiveElementVersions??=[]).push("2.1.2");var Ee=globalThis,je=i=>i,ge=Ee.trustedTypes,Be=ge?ge.createPolicy("lit-html",{createHTML:i=>i}):void 0,Ke="$lit$",M=`lit$${Math.random().toFixed(9).slice(2)}$`,Xe="?"+M,It=`<${Xe}>`,Z=document,oe=()=>Z.createComment(""),se=i=>i===null||typeof i!="object"&&typeof i!="function",ze=Array.isArray,Nt=i=>ze(i)||typeof i?.[Symbol.iterator]=="function",we=`[ 	
\f\r]`,ne=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ue=/-->/g,We=/>/g,F=RegExp(`>|${we}(?:([^\\s"'>=/]+)(${we}*=${we}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ye=/'/g,Je=/"/g,Qe=/^(?:script|style|textarea|title)$/i,Pe=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),c=Pe(1),rr=Pe(2),ir=Pe(3),O=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),Ge=new WeakMap,L=Z.createTreeWalker(Z,129);function et(i,t){if(!ze(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Be!==void 0?Be.createHTML(t):t}var Vt=(i,t)=>{let e=i.length-1,r=[],n,o=t===2?"<svg>":t===3?"<math>":"",s=ne;for(let d=0;d<e;d++){let a=i[d],l,p,m=-1,y=0;for(;y<a.length&&(s.lastIndex=y,p=s.exec(a),p!==null);)y=s.lastIndex,s===ne?p[1]==="!--"?s=Ue:p[1]!==void 0?s=We:p[2]!==void 0?(Qe.test(p[2])&&(n=RegExp("</"+p[2],"g")),s=F):p[3]!==void 0&&(s=F):s===F?p[0]===">"?(s=n??ne,m=-1):p[1]===void 0?m=-2:(m=s.lastIndex-p[2].length,l=p[1],s=p[3]===void 0?F:p[3]==='"'?Je:Ye):s===Je||s===Ye?s=F:s===Ue||s===We?s=ne:(s=F,n=void 0);let _=s===F&&i[d+1].startsWith("/>")?" ":"";o+=s===ne?a+It:m>=0?(r.push(l),a.slice(0,m)+Ke+a.slice(m)+M+_):a+M+(m===-2?d:_)}return[et(i,o+(i[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]},ae=class i{constructor({strings:t,_$litType$:e},r){let n;this.parts=[];let o=0,s=0,d=t.length-1,a=this.parts,[l,p]=Vt(t,e);if(this.el=i.createElement(l,r),L.currentNode=this.el.content,e===2||e===3){let m=this.el.content.firstChild;m.replaceWith(...m.childNodes)}for(;(n=L.nextNode())!==null&&a.length<d;){if(n.nodeType===1){if(n.hasAttributes())for(let m of n.getAttributeNames())if(m.endsWith(Ke)){let y=p[s++],_=n.getAttribute(m).split(M),f=/([.?@])?(.*)/.exec(y);a.push({type:1,index:o,name:f[2],strings:_,ctor:f[1]==="."?Se:f[1]==="?"?Ae:f[1]==="@"?ke:B}),n.removeAttribute(m)}else m.startsWith(M)&&(a.push({type:6,index:o}),n.removeAttribute(m));if(Qe.test(n.tagName)){let m=n.textContent.split(M),y=m.length-1;if(y>0){n.textContent=ge?ge.emptyScript:"";for(let _=0;_<y;_++)n.append(m[_],oe()),L.nextNode(),a.push({type:2,index:++o});n.append(m[y],oe())}}}else if(n.nodeType===8)if(n.data===Xe)a.push({type:2,index:o});else{let m=-1;for(;(m=n.data.indexOf(M,m+1))!==-1;)a.push({type:7,index:o}),m+=M.length-1}o++}}static createElement(t,e){let r=Z.createElement("template");return r.innerHTML=t,r}};function j(i,t,e=i,r){if(t===O)return t;let n=r!==void 0?e._$Co?.[r]:e._$Cl,o=se(t)?void 0:t._$litDirective$;return n?.constructor!==o&&(n?._$AO?.(!1),o===void 0?n=void 0:(n=new o(i),n._$AT(i,e,r)),r!==void 0?(e._$Co??=[])[r]=n:e._$Cl=n),n!==void 0&&(t=j(i,n._$AS(i,t.values),n,r)),t}var $e=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:r}=this._$AD,n=(t?.creationScope??Z).importNode(e,!0);L.currentNode=n;let o=L.nextNode(),s=0,d=0,a=r[0];for(;a!==void 0;){if(s===a.index){let l;a.type===2?l=new le(o,o.nextSibling,this,t):a.type===1?l=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(l=new Te(o,this,t)),this._$AV.push(l),a=r[++d]}s!==a?.index&&(o=L.nextNode(),s++)}return L.currentNode=Z,n}p(t){let e=0;for(let r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}},le=class i{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,r,n){this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=j(this,t,e),se(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==O&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Nt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==u&&se(this._$AH)?this._$AA.nextSibling.data=t:this.T(Z.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:r}=t,n=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=ae.createElement(et(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===n)this._$AH.p(e);else{let o=new $e(n,this),s=o.u(this.options);o.p(e),this.T(s),this._$AH=o}}_$AC(t){let e=Ge.get(t.strings);return e===void 0&&Ge.set(t.strings,e=new ae(t)),e}k(t){ze(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,r,n=0;for(let o of t)n===e.length?e.push(r=new i(this.O(oe()),this.O(oe()),this,this.options)):r=e[n],r._$AI(o),n++;n<e.length&&(this._$AR(r&&r._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let r=je(t).nextSibling;je(t).remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},B=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,n,o){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=u}_$AI(t,e=this,r,n){let o=this.strings,s=!1;if(o===void 0)t=j(this,t,e,0),s=!se(t)||t!==this._$AH&&t!==O,s&&(this._$AH=t);else{let d=t,a,l;for(t=o[0],a=0;a<o.length-1;a++)l=j(this,d[r+a],e,a),l===O&&(l=this._$AH[a]),s||=!se(l)||l!==this._$AH[a],l===u?t=u:t!==u&&(t+=(l??"")+o[a+1]),this._$AH[a]=l}s&&!n&&this.j(t)}j(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Se=class extends B{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===u?void 0:t}},Ae=class extends B{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==u)}},ke=class extends B{constructor(t,e,r,n,o){super(t,e,r,n,o),this.type=5}_$AI(t,e=this){if((t=j(this,t,e,0)??u)===O)return;let r=this._$AH,n=t===u&&r!==u||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,o=t!==u&&(r===u||n);n&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},Te=class{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){j(this,t)}};var Dt=Ee.litHtmlPolyfillSupport;Dt?.(ae,le),(Ee.litHtmlVersions??=[]).push("3.3.2");var tt=(i,t,e)=>{let r=e?.renderBefore??t,n=r._$litPart$;if(n===void 0){let o=e?.renderBefore??null;r._$litPart$=n=new le(t.insertBefore(oe(),o),o,void 0,e??{})}return n._$AI(i),n};var Re=globalThis,A=class extends R{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=tt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return O}};A._$litElement$=!0,A.finalized=!0,Re.litElementHydrateSupport?.({LitElement:A});var qt=Re.litElementPolyfillSupport;qt?.({LitElement:A});(Re.litElementVersions??=[]).push("4.2.2");var I=i=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(i,t)}):customElements.define(i,t)};var Ft={attribute:!0,type:String,converter:ie,reflect:!1,hasChanged:me},Lt=(i=Ft,t,e)=>{let{kind:r,metadata:n}=e,o=globalThis.litPropertyMetadata.get(n);if(o===void 0&&globalThis.litPropertyMetadata.set(n,o=new Map),r==="setter"&&((i=Object.create(i)).wrapped=!0),o.set(e.name,i),r==="accessor"){let{name:s}=e;return{set(d){let a=t.get.call(this);t.set.call(this,d),this.requestUpdate(s,a,i,!0,d)},init(d){return d!==void 0&&this.C(s,void 0,i,d),d}}}if(r==="setter"){let{name:s}=e;return function(d){let a=this[s];t.call(this,d),this.requestUpdate(s,a,i,!0,d)}}throw Error("Unsupported decorator location: "+r)};function rt(i){return(t,e)=>typeof e=="object"?Lt(i,t,e):((r,n,o)=>{let s=n.hasOwnProperty(o);return n.constructor.createProperty(o,r),s?Object.getOwnPropertyDescriptor(n,o):void 0})(i,t,e)}function v(i){return rt({...i,state:!0,attribute:!1})}var it={"status.idle":"Idle","status.running":"Running","status.error":"Error","status.disabled":"Disabled",stop_all:"Stop All",next:"Next",last:"Last",no_programs:"No programs found",loading:"Loading...","time.just_now":"just now","time.minutes_ago":"{count}m ago","time.hours_ago":"{count}h ago","time.days_ago":"{count }d ago","time.today_at":"today at {time}","time.tomorrow_at":"tomorrow at {time}","time.in_days":"in {count} d","time.never":"Never","time.no_schedule":"No active program","status.running_program":"Running: {name}",stop_confirm:"Stop all watering?","recap.total_duration":"Total duration: {duration} min","days.mon":"Mon","days.tue":"Tue","days.wed":"Wed","days.thu":"Thu","days.fri":"Fri","days.sat":"Sat","days.sun":"Sun","running.progress":"Valve {done} of {total}","error.program":"Error \u2014 {name}","error.auto_stopped":"All valves have been automatically closed.","config.tab_valves":"Valves","config.tab_zones":"Zones","config.tab_programs":"Programs","config.no_valves":"No valves configured","config.no_zones":"No zones created","config.no_programs":"No programs created","config.new_zone":"New zone","config.new_program":"New program","config.name":"Name","config.save":"Save","config.cancel":"Cancel","config.delete":"Delete","config.edit":"Edit","config.confirm_delete_zone":"Delete this zone?","config.confirm_delete_program":"Delete this program?","config.trigger_time":"Trigger time","config.select_valves":"Select valves","config.select_zones":"Select zones","config.valve_entity":"Entity","config.total_duration":"Total: {duration} min","config.dry_run":"Test mode","config.dry_run_hint":"Runs the sequence without activating valves","running.dry_run":"Test mode","config.follows_program":"Every day","config.frequency_every_n":"Every {n} days","config.frequency_weekdays":"Specific days","recap.frequency_every_n":"every {n}d","config.title":"WateringHub Config","config.editor_valves":"Valves","config.add_valve":"Add valve","config.select_entity":"Switch entity","config.confirm_delete_valve":"Delete this valve?","config.saved":"Saved","config.deleted":"Deleted","skip.button":"Pause","skip.days_1":"1 day","skip.days_n":"{count} days","skip.active":"Paused {count} d","skip.cancel":"Resume","skip.toast_paused":"Program paused {count} d","skip.toast_resumed":"Program resumed","confirm.stop":"Stop","config.tab_water_supplies":"Water Supplies","config.no_water_supplies":"No water supplies","config.new_water_supply":"New supply","config.water_supply":"Water supply","config.confirm_delete_water_supply":"Delete this water supply?","config.error_water_supply_in_use":"Reassign valves first","config.no_water_supply_hint":"Create a water supply first","config.hint_programs":"Create watering programs with a schedule and zones.","config.hint_zones":"Create at least one zone to group your valves.","config.hint_water_supplies":"Define at least one water supply to enable parallel execution.","config.hint_valves":"Configure your valves and assign them to a zone and water supply.","config.none":"None","config.hint_valves_prereq":"Create water supplies and zones first","config.hint_programs_prereq":"Configure your valves first"};var nt={"status.idle":"En attente","status.running":"Arrosage en cours","status.error":"Erreur","status.disabled":"D\xE9sactiv\xE9",stop_all:"Tout arr\xEAter",next:"Prochain",last:"Dernier",no_programs:"Aucun programme trouv\xE9",loading:"Chargement...","time.just_now":"\xE0 l'instant","time.minutes_ago":"il y a {count} min","time.hours_ago":"il y a {count}h","time.days_ago":"il y a {count} j","time.today_at":"aujourd'hui \xE0 {time}","time.tomorrow_at":"demain \xE0 {time}","time.in_days":"dans {count} j","time.never":"Jamais","time.no_schedule":"Aucun programme actif","status.running_program":"En cours : {name}",stop_confirm:"Arr\xEAter tout l'arrosage ?","recap.total_duration":"Dur\xE9e totale : {duration} min","days.mon":"Lun","days.tue":"Mar","days.wed":"Mer","days.thu":"Jeu","days.fri":"Ven","days.sat":"Sam","days.sun":"Dim","running.progress":"Vanne {done} sur {total}","error.program":"Erreur \u2014 {name}","error.auto_stopped":"Toutes les vannes ont \xE9t\xE9 ferm\xE9es automatiquement.","config.tab_valves":"Vannes","config.tab_zones":"Zones","config.tab_programs":"Programmes","config.no_valves":"Aucune vanne configur\xE9e","config.no_zones":"Aucune zone cr\xE9\xE9e","config.no_programs":"Aucun programme cr\xE9\xE9","config.new_zone":"Nouvelle zone","config.new_program":"Nouveau programme","config.name":"Nom","config.save":"Sauvegarder","config.cancel":"Annuler","config.delete":"Supprimer","config.edit":"Modifier","config.confirm_delete_zone":"Supprimer cette zone ?","config.confirm_delete_program":"Supprimer ce programme ?","config.trigger_time":"Heure de d\xE9clenchement","config.select_valves":"S\xE9lectionner les vannes","config.select_zones":"S\xE9lectionner les zones","config.valve_entity":"Entit\xE9","config.total_duration":"Total : {duration} min","config.dry_run":"Mode test","config.dry_run_hint":"Ex\xE9cute la s\xE9quence sans activer les vannes","running.dry_run":"Mode test","config.follows_program":"Tous les jours","config.frequency_every_n":"Tous les {n} jours","config.frequency_weekdays":"Jours sp\xE9cifiques","recap.frequency_every_n":"tous les {n}j","config.title":"WateringHub Config","config.editor_valves":"Vannes","config.add_valve":"Ajouter une vanne","config.select_entity":"Entit\xE9 switch","config.confirm_delete_valve":"Supprimer cette vanne ?","config.saved":"Enregistr\xE9","config.deleted":"Supprim\xE9","skip.button":"Pause","skip.days_1":"1 jour","skip.days_n":"{count} jours","skip.active":"En pause {count} j","skip.cancel":"Reprendre","skip.toast_paused":"Programme en pause {count} j","skip.toast_resumed":"Programme repris","confirm.stop":"Arr\xEAter","config.tab_water_supplies":"Arriv\xE9es d'eau","config.no_water_supplies":"Aucune arriv\xE9e d'eau","config.new_water_supply":"Nouvelle arriv\xE9e","config.water_supply":"Arriv\xE9e d'eau","config.confirm_delete_water_supply":"Supprimer cette arriv\xE9e ?","config.error_water_supply_in_use":"R\xE9assignez d'abord les vannes","config.no_water_supply_hint":"Cr\xE9ez d'abord une arriv\xE9e d'eau","config.hint_programs":"Cr\xE9ez des programmes d'arrosage avec un horaire et des zones.","config.hint_zones":"Cr\xE9ez au moins une zone pour regrouper vos vannes.","config.hint_water_supplies":"Cr\xE9ez au moins une arriv\xE9e d'eau pour activer le parall\xE9lisme.","config.hint_valves":"Configurez vos vannes et assignez-les \xE0 une zone et une arriv\xE9e d'eau.","config.none":"Aucun","config.hint_valves_prereq":"Cr\xE9ez d'abord des arriv\xE9es d'eau et des zones","config.hint_programs_prereq":"Configurez d'abord vos vannes"};var Ce={en:it,fr:nt};function N(i){let t=i?.toLowerCase().startsWith("fr")?"fr":"en",e=Ce[t]??Ce.en;return(r,n)=>{let o=e[r]??Ce.en[r]??r;return n&&(o=o.replace(/\{(\w+)\}/g,(s,d)=>String(n[d]??s))),o}}var V=P`
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
`;var ot=P`
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
`;function he(i){return Object.keys(i.states).filter(t=>t.startsWith("switch.wateringhub_"))}function U(i,t){return typeof i?.attributes.friendly_name=="string"?i.attributes.friendly_name:t}function fe(i){return i.states["sensor.wateringhub_status"]?.state??"idle"}function st(i){let t=i.states["sensor.wateringhub_status"];if(t?.state!=="error")return null;let e=t.attributes,r=e.current_program,n=r?i.states[`switch.wateringhub_${r}`]:void 0;return{programName:U(n,r??""),errorMessage:e.error_message??""}}function at(i){let t=i.states["sensor.wateringhub_status"];if(t?.state!=="running")return null;let e=t.attributes,r=e.valves_done??0,n=e.valves_total??1,o=Array.isArray(e.valves_sequence)?e.valves_sequence:[],s=Array.isArray(e.active_valves)?e.active_valves:[],d=s.map(h=>{let S=Math.max(0,(Date.now()-new Date(h.valve_start).getTime())/1e3),Q=Math.max(0,h.valve_duration-S),b=o.filter(x=>x.water_supply_id===h.water_supply_id&&x.status==="pending").reduce((x,z)=>x+z.duration,0);return Q+b}),a=d.length>0?Math.max(...d):0,p=[...new Set(o.map(h=>h.water_supply_id))].map(h=>o.filter(S=>S.water_supply_id===h).reduce((S,Q)=>S+Q.duration,0)),m=p.length>0?Math.max(...p):0,y=o.filter(h=>h.status==="done").reduce((h,S)=>h+S.duration,0),_=s.reduce((h,S)=>h+Math.max(0,(Date.now()-new Date(S.valve_start).getTime())/1e3),0),f=y+_;return{programName:e.current_program??"",valvesDone:r,valvesTotal:n,progressPercent:e.progress_percent??0,totalRemaining:a,totalDuration:m,totalElapsed:f,valveSequence:o,activeValves:s,dryRun:e.dry_run===!0}}function Me(i){if(i<=0)return"0:00";let t=Math.floor(i/3600),e=Math.floor(i%3600/60),r=Math.floor(i%60);return t>0?`${t}:${e.toString().padStart(2,"0")}:${r.toString().padStart(2,"0")}`:`${e}:${r.toString().padStart(2,"0")}`}function _e(i,t){return i?i.time:""}function lt(i){return!i||i.state==="None"||i.state==="unknown"||i.state==="unavailable"}function Ie(i,t,e,r){let n=i.states[t];if(lt(n))return e("time.never");let o=new Date(n.state);if(Number.isNaN(o.getTime()))return n.state;let s=new Date,d=s.getTime()-o.getTime();if(d<0){let m=new Date(s.getFullYear(),s.getMonth(),s.getDate()),y=new Date(o.getFullYear(),o.getMonth(),o.getDate()),_=Math.round((y.getTime()-m.getTime())/(1e3*60*60*24)),f=o.toLocaleTimeString(r??[],{hour:"2-digit",minute:"2-digit"});return _===0?e("time.today_at",{time:f}):_===1?e("time.tomorrow_at",{time:f}):e("time.in_days",{count:_})}let a=Math.floor(d/(1e3*60));if(a<1)return e("time.just_now");if(a<60)return e("time.minutes_ago",{count:a});let l=Math.floor(a/60);if(l<24)return e("time.hours_ago",{count:l});let p=Math.floor(l/24);return e("time.days_ago",{count:p})}function ct(i,t,e){let r=i.states["sensor.wateringhub_next_run"];return lt(r)?t("time.no_schedule"):Ie(i,"sensor.wateringhub_next_run",t,e)}function dt(i){let t=i.attributes.skip_until;if(typeof t!="string")return null;let e=new Date(t+"T23:59:59");if(Number.isNaN(e.getTime()))return null;let r=new Date;if(r>e)return null;let n=new Date(r.getFullYear(),r.getMonth(),r.getDate()),o=new Date(e.getFullYear(),e.getMonth(),e.getDate());return{isSkipped:!0,daysRemaining:Math.max(1,Math.ceil((o.getTime()-n.getTime())/(1e3*60*60*24))),skipUntil:t}}function pt(i,t){return t("skip.active",{count:i})}function Y(i,t){return c`<span class="badge-sm badge-${i}">${t}</span>`}function ce(i,t,e="primary"){return c`<button class="btn btn-${e}" @click=${t}>${i}</button>`}function W(i,t,e){return c`
    <button
      class=${e?.className??"action-btn"}
      @click=${t}
      title=${e?.title??""}
    >
      <ha-icon icon=${i}></ha-icon>
    </button>
  `}function D(i,t){return c`<button class="add-btn" @click=${t}>${i}</button>`}function J(i,t,e){return c`
    <div class="form-actions">
      ${ce(e("config.cancel"),i,"cancel")}
      ${ce(e("config.save"),t,"primary")}
    </div>
  `}function C(i,t){return c`
    <div class="form-row">
      <label class="form-label">${i}</label>
      ${t}
    </div>
  `}function G(i,t,e,r,n){return c`
    <div class="list-item">
      <div class="list-item-header">
        <div>
          <div class="list-item-name">${i}</div>
          <div class="list-item-sub">${t}</div>
        </div>
        <div class="list-item-actions">
          ${W("mdi:pencil",e,{title:n("config.edit")})}
          ${W("mdi:delete",r,{title:n("config.delete"),className:"action-btn delete"})}
        </div>
      </div>
    </div>
  `}function K(i,t,e,r,n,o){return i?c`
    <div class="confirm-overlay" @click=${n}>
      <div class="confirm-dialog" @click=${s=>s.stopPropagation()}>
        <div class="confirm-message">${t}</div>
        <div class="confirm-actions">
          <button class="btn btn-cancel" @click=${n}>${o("config.cancel")}</button>
          <button class="btn btn-danger" @click=${r}>${e}</button>
        </div>
      </div>
    </div>
  `:c``}function ut(i){return c`
    <div class="header">
      <span class="title">${i}</span>
    </div>
  `}function Ht(i,t,e,r,n,o,s,d){if(!e)return c`
      <div class="program-status">${Y("disabled",n("status.disabled"))}</div>
    `;if(fe(i)==="running"){let y=i.states["sensor.wateringhub_status"]?.attributes.current_program,_=t.entity_id?.replace("switch.wateringhub_","");return c`
      <div class="program-status">
        ${y===_?Y("running",n("status.running")):u}
      </div>
    `}let l=dt(t),p=r?Bt(s,n):u;return c`
    <div class="program-status">
      ${l?c`
            ${Y("skipped",pt(l.daysRemaining,n))}
            <button class="skip-cancel-btn" @click=${d} title=${n("skip.cancel")}>
              <ha-icon icon="mdi:close-circle-outline"></ha-icon>
            </button>
          `:c`
            ${Y("idle",n("status.idle"))}
            <div class="skip-dropdown-wrapper">
              <button class="skip-btn" @click=${o} title=${n("skip.button")}>
                <ha-icon icon="mdi:pause-circle-outline"></ha-icon>
              </button>
              ${p}
            </div>
          `}
      <span class="info-sm">${n("next")}: ${ct(i,n,i.language)}</span>
    </div>
  `}function mt(i,t){let e=st(i);return e?c`
    <div class="error-view">
      <div class="error-title">
        <ha-icon icon="mdi:alert-circle"></ha-icon>
        ${t("error.program",{name:e.programName})}
      </div>
      ${e.errorMessage?c`<div class="error-message">${e.errorMessage}</div>`:u}
      <div class="error-auto-stopped">${t("error.auto_stopped")}</div>
    </div>
  `:c``}function gt(i,t,e){let r=at(i);if(!r)return c``;let n=i.states["sensor.wateringhub_status"]?.attributes.water_supplies??[],o=r.activeValves.length>1?jt(r.valveSequence,r.activeValves,n):vt(r.valveSequence,r.activeValves),s=r.valveSequence.length>0?o:u,d=2*Math.PI*30,a=r.totalDuration>0?r.totalElapsed/r.totalDuration:0,l=d*(1-Math.min(1,a));return c`
    <div class="running-block">
      <button class="running-stop-btn" @click=${t}>${e("stop_all")}</button>
      ${r.dryRun?Y("dry-run",e("running.dry_run")):u}

      <div class="global-hero">
        <div class="circular-progress">
          <svg viewBox="0 0 68 68">
            <circle class="cp-track" cx="34" cy="34" r="30" />
            <circle
              class="cp-fill"
              cx="34"
              cy="34"
              r="30"
              style="stroke-dasharray: ${d}; stroke-dashoffset: ${l}"
            />
          </svg>
          <div class="cp-center">
            <span class="cp-time">${Me(r.totalRemaining)}</span>
          </div>
        </div>
        <div class="global-info">
          <div class="global-program-name">
            ${U(i.states[`switch.wateringhub_${r.programName}`],r.programName)}
          </div>
          <div class="global-sub">
            ${e("running.progress",{done:r.valvesDone+1,total:r.valvesTotal})}
          </div>
        </div>
      </div>

      ${s}
    </div>
  `}function vt(i,t){let e=[];for(let a of i){let l=e[e.length-1];l?.zoneName===a.zone_name?l.valves.push(a):e.push({zoneName:a.zone_name,valves:[a]})}let r=new Map;for(let a of t){let l=Math.max(0,(Date.now()-new Date(a.valve_start).getTime())/1e3);r.set(a.valve_id,Math.max(0,a.valve_duration-l))}let n=c`<svg viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z"
    />
  </svg>`,o=c`<svg viewBox="0 0 24 24">
    <circle fill="currentColor" cx="12" cy="12" r="6" />
  </svg>`,s=c`<svg viewBox="0 0 24 24">
    <circle fill="none" stroke="currentColor" stroke-width="2" cx="12" cy="12" r="6" />
  </svg>`,d={done:n,running:o,pending:s};return c`
    <div class="valve-timeline">
      ${e.map(a=>c`
          <div class="tl-zone">${a.zoneName}</div>
          ${a.valves.map(l=>{let p=Math.ceil(l.duration/60),m=r.get(l.valve_id)??0;return c`
              <div class="tl-step tl-${l.status}">
                <span class="tl-dot">${d[l.status]}</span>
                <span class="tl-step-name">${l.valve_name}</span>
                <span class="tl-step-time">
                  ${l.status==="running"?Me(m):`${p} min`}
                </span>
              </div>
            `})}
        `)}
    </div>
  `}function jt(i,t,e){let r=[],n=new Map;for(let s of i)n.has(s.water_supply_id)||(r.push(s.water_supply_id),n.set(s.water_supply_id,[])),n.get(s.water_supply_id).push(s);let o=new Map;for(let s of t)o.has(s.water_supply_id)||o.set(s.water_supply_id,[]),o.get(s.water_supply_id).push(s);return c`
    <div class="parallel-timeline">
      ${r.map(s=>{let d=n.get(s)??[],a=o.get(s)??[],l=e.find(p=>p.id===s)?.name??s;return c`
          <div class="supply-column">
            <div class="supply-label">${l}</div>
            ${vt(d,a)}
          </div>
        `})}
    </div>
  `}function ht(i,t,e,r,n,o,s,d,a,l){return t.length===0?c`<div class="empty-state">${l("no_programs")}</div>`:c`${t.map(p=>{let m=i.states[p];if(!m)return u;let y=m.state==="on",_=e===p,f=U(m,p);return c`
      <div class="program-wrapper">
        <div class="program">
          <div class="program-header" @click=${()=>n(p)}>
            <ha-icon class="chevron ${_?"open":""}" icon="mdi:chevron-down"></ha-icon>
            ${y?c`<div class="active-dot"></div>`:u}
            <span class="program-name ${y?"active":""}">${f}</span>
          </div>
          <ha-switch .checked=${y} @change=${()=>o(p)}></ha-switch>
        </div>
        ${Ht(i,m,y,r===p,l,()=>s(p),h=>d(p,h),()=>a(p))}
        ${Ut(i,m.attributes,_,l)}
      </div>
    `})}`}function Bt(i,t){return c`
    <div class="skip-dropdown">
      ${[1,2,3,5].map(r=>c`
          <button class="skip-dropdown-option" @click=${()=>i(r)}>
            ${r===1?t("skip.days_1"):t("skip.days_n",{count:r})}
          </button>
        `)}
    </div>
  `}function Ut(i,t,e,r){let n=t.schedule,o=t.zones??[],s=t.total_duration;return c`
    <div class="program-recap ${e?"open":""}">
      ${n?c`<div class="recap-schedule">
            <ha-icon icon="mdi:calendar-clock"></ha-icon>
            ${_e(n,r)}
          </div>`:u}
      <div class="recap-schedule">
        <ha-icon icon="mdi:history"></ha-icon>
        ${r("last")}: ${Ie(i,"sensor.wateringhub_last_run",r,i.language)}
      </div>
      ${o.map(d=>c`
          <div class="recap-zone">
            <span class="recap-zone-badge">${d.zone_name}</span>
          </div>
          ${d.valves.map(a=>c`
              <div class="recap-valve">
                <ha-icon icon="mdi:water"></ha-icon>
                ${a.valve_name} — ${a.duration}
                min${Wt(a.frequency,r)}
              </div>
            `)}
        `)}
      ${s?c`<div class="recap-total">
            <ha-icon icon="mdi:timer-outline"></ha-icon>
            ${r("recap.total_duration",{duration:s})}
          </div>`:u}
    </div>
  `}function Wt(i,t){return i?i.type==="every_n_days"?` \xB7 ${t("recap.frequency_every_n",{n:i.n??2})}`:i.type==="weekdays"&&i.days?.length?` \xB7 ${i.days.map(r=>t(`days.${r}`)).join(", ")}`:"":""}var H=class extends A{constructor(){super(...arguments);this._t=e=>e}set hass(e){this._hass=e,this._t=N(e.language)}setConfig(e){this._config=e}_titleChanged(e){let r=e.target.value;this._config={...this._config,title:r},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config}}))}render(){return c`
      ${C(this._t("config.name"),c`<input
          class="form-input"
          .value=${this._config?.title??""}
          @input=${this._titleChanged}
        />`)}
    `}};H.styles=[V],g([v()],H.prototype,"_config",2),g([v()],H.prototype,"_hass",2),H=g([I("wateringhub-card-editor")],H);var w=class extends A{constructor(){super(...arguments);this._programEntities=[];this._expandedProgram=null;this._skipDropdownOpen=null;this._toast="";this._confirmMessage="";this._confirmLabel="";this._confirmAction=null;this._tick=0;this._t=e=>e;this._timerInterval=null;this._unsubEvents=null;this._boundCloseDropdown=this._closeSkipDropdown.bind(this)}static getConfigElement(){return document.createElement("wateringhub-card-editor")}setConfig(e){this._config=e}set hass(e){let r=this._hass;this._hass=e,this._t=N(e.language),r?.states!==e.states&&(this._programEntities=he(e)),this._updateTimer(fe(e)),this._subscribeEvents()}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._boundCloseDropdown)}disconnectedCallback(){super.disconnectedCallback(),this._clearTimer(),this._unsubscribeEvents(),document.removeEventListener("click",this._boundCloseDropdown)}_subscribeEvents(){this._unsubEvents||!this._hass?.connection||this._hass.connection.subscribeEvents(()=>{this._tick++},"wateringhub_event").then(e=>{this._unsubEvents=e})}_unsubscribeEvents(){this._unsubEvents&&(this._unsubEvents(),this._unsubEvents=null)}_updateTimer(e){e==="running"&&!this._timerInterval?this._timerInterval=setInterval(()=>{this._tick++},1e3):e!=="running"&&this._timerInterval&&this._clearTimer()}_clearTimer(){this._timerInterval&&(clearInterval(this._timerInterval),this._timerInterval=null)}getCardSize(){return 3}_toggleExpand(e){this._expandedProgram=this._expandedProgram===e?null:e}_toggleProgram(e){let r=this._hass.states[e];if(!r)return;let n=r.state==="on"?"turn_off":"turn_on";this._hass.callService("switch",n,{entity_id:e})}_requestConfirm(e,r,n){this._confirmMessage=e,this._confirmLabel=r,this._confirmAction=n}_executeConfirm(){this._confirmAction?.(),this._confirmAction=null,this._confirmMessage="",this._confirmLabel=""}_cancelConfirm(){this._confirmAction=null,this._confirmMessage="",this._confirmLabel=""}_stopAll(){this._requestConfirm(this._t("stop_confirm"),this._t("confirm.stop"),()=>{this._hass.callService("wateringhub","stop_all",{})})}_toggleSkipDropdown(e){this._skipDropdownOpen=this._skipDropdownOpen===e?null:e}_showToast(e){this._toast=e,setTimeout(()=>{this._toast=""},3e3)}_handleSkip(e,r){let n=e.replace("switch.wateringhub_","");this._hass.callService("wateringhub","skip_program",{id:n,days:r}),this._skipDropdownOpen=null,this._showToast(this._t("skip.toast_paused",{count:r}))}_handleCancelSkip(e){let r=e.replace("switch.wateringhub_","");this._hass.callService("wateringhub","skip_program",{id:r,days:0}),this._showToast(this._t("skip.toast_resumed"))}_closeSkipDropdown(e){if(!this._skipDropdownOpen)return;e.composedPath().some(o=>o instanceof HTMLElement&&o.classList?.contains("skip-dropdown-wrapper"))||(this._skipDropdownOpen=null)}render(){if(!this._hass||!this._config)return c`<ha-card>${this._t("loading")}</ha-card>`;let e=this._config.title??"WateringHub";return c`
      <ha-card>
        ${ut(e)} ${mt(this._hass,this._t)}
        ${gt(this._hass,()=>this._stopAll(),this._t)}
        ${ht(this._hass,this._programEntities,this._expandedProgram,this._skipDropdownOpen,r=>this._toggleExpand(r),r=>this._toggleProgram(r),r=>this._toggleSkipDropdown(r),(r,n)=>this._handleSkip(r,n),r=>this._handleCancelSkip(r),this._t)}
        ${this._toast?c`<div class="toast">${this._toast}</div>`:u}
        ${K(!!this._confirmAction,this._confirmMessage,this._confirmLabel,()=>this._executeConfirm(),()=>this._cancelConfirm(),this._t)}
      </ha-card>
    `}};w.styles=[V,ot],g([v()],w.prototype,"_config",2),g([v()],w.prototype,"_hass",2),g([v()],w.prototype,"_programEntities",2),g([v()],w.prototype,"_expandedProgram",2),g([v()],w.prototype,"_skipDropdownOpen",2),g([v()],w.prototype,"_toast",2),g([v()],w.prototype,"_confirmMessage",2),g([v()],w.prototype,"_confirmLabel",2),g([v()],w.prototype,"_confirmAction",2),g([v()],w.prototype,"_tick",2),w=g([I("wateringhub-card")],w);globalThis.customCards=globalThis.customCards||[];globalThis.customCards.push({type:"wateringhub-card",name:"WateringHub Card",description:"Watering management card for WateringHub"});var ft=P`
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
`;function E(i){return i.states["sensor.wateringhub_status"]?.attributes.available_valves??[]}function q(i){return i.states["sensor.wateringhub_status"]?.attributes.zones??[]}function X(i){return i.states["sensor.wateringhub_status"]?.attributes.water_supplies??[]}function _t(i,t){return t.filter(e=>e.zone_id===i)}function ye(i){return i.toLowerCase().normalize("NFD").replaceAll(/[\u0300-\u036f]/g,"").replaceAll(/[^a-z0-9]+/g,"_").replaceAll(/^_|_$/g,"")}function Ne(i,t,e,r){let n=E(i),o=q(i),s=X(i);if(n.length===0)return c`
      <div class="form-hint">${r("config.hint_valves")}</div>
      <div class="empty-state">${r("config.no_valves")}</div>
    `;let d=o.length>0&&s.length>0;return c`
    <div class="form-hint">${r("config.hint_valves")}</div>
    ${d?u:c`<div class="empty-state">${r("config.hint_valves_prereq")}</div>`}
    ${n.map(a=>c`
        <div class="list-item">
          <div class="list-item-header">
            <div style="flex:1">
              <div class="list-item-name">${a.name}</div>
              <div class="list-item-sub">${a.entity_id}</div>
              <div style="display:flex; gap:8px; margin-top:8px; flex-wrap:wrap;">
                <select
                  class="form-select"
                  style="flex:1; min-width:120px;"
                  .value=${a.zone_id??""}
                  @change=${l=>{t(a.entity_id,"zone_id",l.target.value)}}
                >
                  ${o.map(l=>c`<option value=${l.id}>${l.name}</option>`)}
                </select>
                <select
                  class="form-select"
                  style="flex:1; min-width:120px;"
                  .value=${a.water_supply_id??""}
                  @change=${l=>{t(a.entity_id,"water_supply_id",l.target.value)}}
                >
                  ${s.map(l=>c`<option value=${l.id}>${l.name}</option>`)}
                </select>
              </div>
            </div>
            ${W("mdi:delete",()=>e(a.entity_id),{title:r("config.delete"),className:"action-btn delete"})}
          </div>
        </div>
      `)}
  `}function Ve(i,t,e,r,n,o,s,d,a){let l=q(i),p=E(i);return c`
    <div class="form-hint">${a("config.hint_zones")}</div>
    ${l.map(m=>t?.id===m.id?yt(t,o,s,d,a):Yt(m,p,e,r,a))}
    ${t?.isNew?yt(t,o,s,d,a):u}
    ${t?u:D(`+ ${a("config.new_zone")}`,n)}
    ${l.length===0&&!t?c`<div class="empty-state">${a("config.no_zones")}</div>`:u}
  `}function Yt(i,t,e,r,n){let s=t.filter(d=>d.zone_id===i.id).map(d=>d.name).join(", ")||"\u2014";return G(i.name,s,()=>e(i),()=>r(i.id),n)}function yt(i,t,e,r,n){return c`
    <div class="inline-form">
      ${C(n("config.name"),c`<input
          class="form-input"
          .value=${i.name}
          @input=${o=>r({...i,name:o.target.value})}
        />`)}
      ${J(e,()=>t(i),n)}
    </div>
  `}function De(i,t,e,r,n,o,s,d,a){let l=he(i),p=q(i),m=E(i),y=m.some(_=>_.zone_id!==null);return c`
    <div class="form-hint">${a("config.hint_programs")}</div>
    ${y?u:c`<div class="empty-state">${a("config.hint_programs_prereq")}</div>`}
    ${l.map(_=>{let f=i.states[_];if(!f)return u;let h=f.attributes.program_id??"";return t?.id===h?bt(t,p,m,o,s,d,a):Jt(f,_,e,r,a)})}
    ${t?.isNew?bt(t,p,m,o,s,d,a):u}
    ${t?u:D(`+ ${a("config.new_program")}`,n)}
    ${l.length===0&&!t?c`<div class="empty-state">${a("config.no_programs")}</div>`:u}
  `}function Jt(i,t,e,r,n){let o=U(i,t),s=i.attributes.schedule,d=i.attributes.total_duration,a=i.attributes.dry_run===!0,l=_e(s,n),p=d?`${l} \u2014 ${d} min`:l,m=a?c`<span class="badge-dry-run-sm">${n("config.dry_run")}</span>`:u;return G(c`${o} ${m}`,p,()=>e(t),()=>r(t),n)}function bt(i,t,e,r,n,o,s){let d=i.zones.reduce((a,l)=>a+l.valves.reduce((p,m)=>p+(m.duration||0),0),0);return c`
    <div class="inline-form">
      <!-- Name -->
      ${C(s("config.name"),c`<input
          class="form-input"
          .value=${i.name}
          @input=${a=>o({...i,name:a.target.value})}
        />`)}

      <!-- Schedule — time only -->
      ${C(s("config.trigger_time"),c`<input
          class="form-input"
          type="time"
          .value=${i.schedule.time}
          @input=${a=>o({...i,schedule:{time:a.target.value}})}
        />`)}

      <!-- Zones + valves with durations -->
      <div class="form-row">
        <label class="form-label">${s("config.select_zones")}</label>
        ${[...i.zones.map(a=>t.find(l=>l.id===a.zone_id)),...t.filter(a=>!i.zones.some(l=>l.zone_id===a.id))].filter(a=>!!a).map(a=>{let l=i.zones.findIndex(f=>f.zone_id===a.id),p=l>=0?i.zones[l]:null,m=!!p,y=f=>{let h=[...i.zones],S=l+f;[h[l],h[S]]=[h[S],h[l]],o({...i,zones:h})},_=m&&i.zones.length>1?c`
                    <div class="reorder-btns">
                      <button
                        class="reorder-btn"
                        ?disabled=${l===0}
                        @click=${()=>y(-1)}
                      >
                        <ha-icon icon="mdi:chevron-up"></ha-icon>
                      </button>
                      <button
                        class="reorder-btn"
                        ?disabled=${l===i.zones.length-1}
                        @click=${()=>y(1)}
                      >
                        <ha-icon icon="mdi:chevron-down"></ha-icon>
                      </button>
                    </div>
                  `:u;return c`
              <div class="form-zone-section">
                <div class="zone-header-row">
                  <label class="checkbox-item">
                    <input
                      type="checkbox"
                      .checked=${m}
                      @change=${()=>{let f=m?i.zones.filter(h=>h.zone_id!==a.id):[...i.zones,{zone_id:a.id,valves:_t(a.id,e).map(h=>({valve_id:h.id,duration:10}))}];o({...i,zones:f})}}
                    />
                    <span class="form-zone-name">${a.name}</span>
                  </label>
                  ${_}
                </div>
                ${m&&p?p.valves.map((f,h)=>Gt(f,h,p,a,i,e,o,s)):u}
              </div>
            `})}
      </div>

      ${d>0?c`<div class="total-duration">
            ${s("config.total_duration",{duration:d})}
          </div>`:u}

      <!-- Dry run toggle -->
      <div class="form-row">
        <label class="checkbox-item">
          <input
            type="checkbox"
            .checked=${i.dry_run}
            @change=${()=>o({...i,dry_run:!i.dry_run})}
          />
          ${s("config.dry_run")}
        </label>
        <div class="form-hint">${s("config.dry_run_hint")}</div>
      </div>

      ${J(n,()=>r(i),s)}
    </div>
  `}function Gt(i,t,e,r,n,o,s,d){let a=o.find(b=>b.id===i.valve_id)?.name??i.valve_id,l=i.frequency,p=l?.type??"",m=new Date().toISOString().slice(0,10),y=t===0,_=t===e.valves.length-1,f=b=>{let x=e.valves.map(T=>T.valve_id===i.valve_id?{...T,...b}:T),z=n.zones.map(T=>T.zone_id===r.id?{...T,valves:x}:T);s({...n,zones:z})},h=b=>{let x=[...e.valves],z=t+b;[x[t],x[z]]=[x[z],x[t]];let T=n.zones.map(ee=>ee.zone_id===r.id?{...ee,valves:x}:ee);s({...n,zones:T})},S=p==="every_n_days"&&l?c`
          <input
            class="valve-freq-n-input"
            type="number"
            min="2"
            .value=${String(l.n??2)}
            @input=${b=>f({frequency:{...l,n:Number.parseInt(b.target.value)||2}})}
          />
          <span>j</span>
        `:u,Q=p==="weekdays"&&l?c`
          <div class="valve-freq-days">
            ${["mon","tue","wed","thu","fri","sat","sun"].map(b=>{let x=l.days?.includes(b)??!1;return c`
                <label class="valve-freq-day">
                  <input
                    type="checkbox"
                    .checked=${x}
                    @change=${()=>{let z=l.days??[],T=x?z.filter(ee=>ee!==b):[...z,b];f({frequency:{...l,days:T}})}}
                  />
                  ${d(`days.${b}`)}
                </label>
              `})}
          </div>
        `:u;return c`
    <div class="valve-config-block">
      <div class="valve-duration-row">
        <div class="reorder-btns">
          <button class="reorder-btn" ?disabled=${y} @click=${()=>h(-1)}>
            <ha-icon icon="mdi:chevron-up"></ha-icon>
          </button>
          <button class="reorder-btn" ?disabled=${_} @click=${()=>h(1)}>
            <ha-icon icon="mdi:chevron-down"></ha-icon>
          </button>
        </div>
        <label>${a}</label>
        <input
          class="valve-duration-input"
          type="number"
          min="1"
          .value=${String(i.duration)}
          @input=${b=>f({duration:Number.parseInt(b.target.value)||1})}
        />
        <span>min</span>
      </div>
      <div class="valve-frequency-row">
        <select
          class="valve-freq-select"
          .value=${p}
          @change=${b=>{let x=b.target.value;f(x?x==="every_n_days"?{frequency:{type:"every_n_days",n:2,start_date:m}}:{frequency:{type:"weekdays",days:[]}}:{frequency:void 0})}}
        >
          <option value="">${d("config.follows_program")}</option>
          <option value="every_n_days">
            ${d("config.frequency_every_n",{n:l?.n??2})}
          </option>
          <option value="weekdays">${d("config.frequency_weekdays")}</option>
        </select>
        ${S} ${Q}
      </div>
    </div>
  `}function qe(i,t,e,r,n,o,s,d,a){let l=X(i);return c`
    <div class="form-hint">${a("config.hint_water_supplies")}</div>
    ${l.map(p=>t?.id===p.id?xt(t,o,s,d,a):G(p.name,p.id,()=>e(p),()=>r(p.id),a))}
    ${t?.isNew?xt(t,o,s,d,a):u}
    ${t?u:D(`+ ${a("config.new_water_supply")}`,n)}
    ${l.length===0&&!t?c`<div class="empty-state">${a("config.no_water_supplies")}</div>`:u}
  `}function xt(i,t,e,r,n){return c`
    <div class="inline-form">
      ${C(n("config.name"),c`<input
          class="form-input"
          .value=${i.name}
          @input=${o=>r({...i,name:o.target.value})}
        />`)}
      ${J(e,()=>t(i),n)}
    </div>
  `}function wt(i,t,e){let r=[{id:"water_supplies",label:e("config.tab_water_supplies")},{id:"zones",label:e("config.tab_zones")},{id:"valves",label:e("config.tab_valves")},{id:"programs",label:e("config.tab_programs")}];return c`
    <div class="tabs">
      ${r.map(n=>c`
          <div
            class="tab ${i===n.id?"active":""}"
            @click=${()=>t(n.id)}
          >
            ${n.label}
          </div>
        `)}
    </div>
  `}var $t=P`
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
`;var k=class extends A{constructor(){super(...arguments);this._adding=!1;this._newEntityId="";this._newZoneId="";this._newWaterSupplyId="";this._confirmMessage="";this._confirmLabel="";this._confirmAction=null;this._t=e=>e}set hass(e){this._hass=e,this._t=N(e.language)}setConfig(e){this._config=e}_getValves(){return this._hass?E(this._hass):[]}async _setValves(e){await this._hass.callService("wateringhub","set_valves",{valves:e})}_requestConfirm(e,r,n){this._confirmMessage=e,this._confirmLabel=r,this._confirmAction=n}_executeConfirm(){this._confirmAction?.(),this._confirmAction=null,this._confirmMessage="",this._confirmLabel=""}_cancelConfirm(){this._confirmAction=null,this._confirmMessage="",this._confirmLabel=""}_deleteValve(e){this._requestConfirm(this._t("config.confirm_delete_valve"),this._t("config.delete"),async()=>{let r=this._getValves().filter(n=>n.entity_id!==e).map(n=>({entity_id:n.entity_id,name:n.name,water_supply_id:n.water_supply_id,zone_id:n.zone_id}));await this._setValves(r)})}_startAdd(){this._adding=!0,this._newEntityId="",this._newZoneId="",this._newWaterSupplyId=""}_onEntityPicked(e){this._newEntityId=e.detail.value}_getFriendlyName(e){let n=this._hass?.states[e]?.attributes.friendly_name;return typeof n=="string"?n:e}async _confirmAdd(){if(!this._newEntityId||!this._newZoneId||!this._newWaterSupplyId)return;let e=this._getFriendlyName(this._newEntityId),r=[...this._getValves().map(n=>({entity_id:n.entity_id,name:n.name,water_supply_id:n.water_supply_id,zone_id:n.zone_id})),{entity_id:this._newEntityId,name:e,water_supply_id:this._newWaterSupplyId,zone_id:this._newZoneId}];await this._setValves(r),this._adding=!1,this._newEntityId="",this._newZoneId="",this._newWaterSupplyId=""}_cancelAdd(){this._adding=!1,this._newEntityId="",this._newZoneId="",this._newWaterSupplyId=""}render(){let e=this._getValves(),r=q(this._hass),n=X(this._hass);return c`
      <div class="editor-section">
        <span class="editor-label">${this._t("config.editor_valves")}</span>

        ${e.length===0&&!this._adding?c`<div class="empty-state">${this._t("config.no_valves")}</div>`:u}
        ${e.map(o=>c`
            <div class="valve-item">
              <div class="valve-item-info">
                <div class="valve-item-name">${o.name}</div>
                <div class="valve-item-entity">${o.entity_id}</div>
              </div>
              ${W("mdi:delete",()=>this._deleteValve(o.entity_id),{title:this._t("config.delete"),className:"action-btn delete"})}
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
                <div class="form-row">
                  <label class="form-label">${this._t("config.tab_zones")}</label>
                  <select
                    class="form-select"
                    style="width:100%"
                    .value=${this._newZoneId}
                    @change=${o=>{this._newZoneId=o.target.value}}
                  >
                    <option value="">—</option>
                    ${r.map(o=>c`<option value=${o.id}>${o.name}</option>`)}
                  </select>
                </div>
                <div class="form-row">
                  <label class="form-label">${this._t("config.tab_water_supplies")}</label>
                  <select
                    class="form-select"
                    style="width:100%"
                    .value=${this._newWaterSupplyId}
                    @change=${o=>{this._newWaterSupplyId=o.target.value}}
                  >
                    <option value="">—</option>
                    ${n.map(o=>c`<option value=${o.id}>${o.name}</option>`)}
                  </select>
                </div>
                <div class="form-actions">
                  ${ce(this._t("config.cancel"),()=>this._cancelAdd(),"cancel")}
                  ${ce(this._t("config.save"),()=>this._confirmAdd(),"primary")}
                </div>
              </div>
            `:r.length===0||n.length===0?c`<div class="empty-state">${this._t("config.hint_valves_prereq")}</div>`:D(`+ ${this._t("config.add_valve")}`,()=>this._startAdd())}
        ${K(!!this._confirmAction,this._confirmMessage,this._confirmLabel,()=>this._executeConfirm(),()=>this._cancelConfirm(),this._t)}
      </div>
    `}};k.styles=[V,$t],g([v()],k.prototype,"_config",2),g([v()],k.prototype,"_hass",2),g([v()],k.prototype,"_adding",2),g([v()],k.prototype,"_newEntityId",2),g([v()],k.prototype,"_newZoneId",2),g([v()],k.prototype,"_newWaterSupplyId",2),g([v()],k.prototype,"_confirmMessage",2),g([v()],k.prototype,"_confirmLabel",2),g([v()],k.prototype,"_confirmAction",2),k=g([I("wateringhub-config-editor")],k);var $=class extends A{constructor(){super(...arguments);this._activeTab="water_supplies";this._editingZone=null;this._toast="";this._confirmMessage="";this._confirmLabel="";this._confirmAction=null;this._editingProgram=null;this._editingWaterSupply=null;this._t=e=>e}static getConfigElement(){return document.createElement("wateringhub-config-editor")}setConfig(e){this._config=e}set hass(e){this._hass=e,this._t=N(e.language)}getCardSize(){return 5}_showToast(e){this._toast=e,setTimeout(()=>{this._toast=""},3e3)}_requestConfirm(e,r,n){this._confirmMessage=e,this._confirmLabel=r,this._confirmAction=n}_executeConfirm(){this._confirmAction?.(),this._confirmAction=null,this._confirmMessage="",this._confirmLabel=""}_cancelConfirm(){this._confirmAction=null,this._confirmMessage="",this._confirmLabel=""}_setTab(e){this._activeTab=e,this._editingZone=null,this._editingProgram=null,this._editingWaterSupply=null}_newZone(){this._editingZone={id:"",name:"",isNew:!0}}_editZone(e){this._editingZone={id:e.id,name:e.name,isNew:!1}}_cancelZone(){this._editingZone=null}_updateZoneForm(e){this._editingZone=e}async _saveZone(e){let r=e.isNew?ye(e.name):e.id,n=e.isNew?"create_zone":"update_zone";await this._hass.callService("wateringhub",n,{id:r,name:e.name}),this._editingZone=null,this._showToast(this._t("config.saved"))}_deleteZone(e){this._requestConfirm(this._t("config.confirm_delete_zone"),this._t("config.delete"),async()=>{try{await this._hass.callService("wateringhub","delete_zone",{id:e}),this._showToast(this._t("config.deleted"))}catch{this._showToast(this._t("config.error_water_supply_in_use"))}})}_newProgram(){this._editingProgram={id:"",name:"",schedule:{time:"06:00"},zones:[],dry_run:!1,isNew:!0}}_editProgram(e){let r=this._hass.states[e];if(!r)return;let n=r.attributes,o=n.program_id??"",s=n.schedule??{time:"06:00"},d=(n.zones??[]).map(a=>({zone_id:a.zone_id,valves:a.valves.map(l=>({valve_id:l.valve_id,duration:l.duration,frequency:l.frequency}))}));this._editingProgram={id:o,name:typeof n.friendly_name=="string"?n.friendly_name:o,schedule:s,zones:d,dry_run:n.dry_run===!0,isNew:!1}}_cancelProgram(){this._editingProgram=null}_updateProgramForm(e){this._editingProgram=e}async _saveProgram(e){let r=e.isNew?ye(e.name):e.id,n=e.isNew?"create_program":"update_program";await this._hass.callService("wateringhub",n,{id:r,name:e.name,schedule:e.schedule,dry_run:e.dry_run,zones:e.zones.map(o=>({zone_id:o.zone_id,valves:o.valves.map(s=>({valve_id:s.valve_id,duration:s.duration,...s.frequency?{frequency:s.frequency}:{}}))}))}),this._editingProgram=null,this._showToast(this._t("config.saved"))}_deleteProgram(e){this._requestConfirm(this._t("config.confirm_delete_program"),this._t("config.delete"),async()=>{let n=this._hass.states[e]?.attributes.program_id??"";await this._hass.callService("wateringhub","delete_program",{id:n}),this._showToast(this._t("config.deleted"))})}_newWaterSupply(){this._editingWaterSupply={id:"",name:"",isNew:!0}}_editWaterSupply(e){this._editingWaterSupply={...e,isNew:!1}}_cancelWaterSupply(){this._editingWaterSupply=null}_updateWaterSupplyForm(e){this._editingWaterSupply=e}async _saveWaterSupply(e){let r=e.isNew?ye(e.name):e.id,n=e.isNew?"create_water_supply":"update_water_supply";await this._hass.callService("wateringhub",n,{id:r,name:e.name}),this._editingWaterSupply=null,this._showToast(this._t("config.saved"))}_deleteWaterSupply(e){this._requestConfirm(this._t("config.confirm_delete_water_supply"),this._t("config.delete"),async()=>{try{await this._hass.callService("wateringhub","delete_water_supply",{id:e}),this._showToast(this._t("config.deleted"))}catch{this._showToast(this._t("config.error_water_supply_in_use"))}})}async _changeValve(e,r,n){let o=E(this._hass).map(s=>({entity_id:s.entity_id,name:s.name,water_supply_id:s.entity_id===e&&r==="water_supply_id"?n:s.water_supply_id,zone_id:s.entity_id===e&&r==="zone_id"?n:s.zone_id}));await this._hass.callService("wateringhub","set_valves",{valves:o})}_deleteValveFromTab(e){this._requestConfirm(this._t("config.confirm_delete_valve"),this._t("config.delete"),async()=>{let r=E(this._hass).filter(n=>n.entity_id!==e).map(n=>({entity_id:n.entity_id,name:n.name,water_supply_id:n.water_supply_id,zone_id:n.zone_id}));await this._hass.callService("wateringhub","set_valves",{valves:r}),this._showToast(this._t("config.deleted"))})}render(){return!this._hass||!this._config?c`<ha-card>${this._t("loading")}</ha-card>`:c`
      <ha-card>
        <div class="header"><span class="title">${this._t("config.title")}</span></div>
        ${wt(this._activeTab,e=>this._setTab(e),this._t)}
        ${this._activeTab==="valves"?Ne(this._hass,(e,r,n)=>this._changeValve(e,r,n),e=>this._deleteValveFromTab(e),this._t):""}
        ${this._activeTab==="zones"?Ve(this._hass,this._editingZone,e=>this._editZone(e),e=>this._deleteZone(e),()=>this._newZone(),e=>this._saveZone(e),()=>this._cancelZone(),e=>this._updateZoneForm(e),this._t):""}
        ${this._activeTab==="water_supplies"?qe(this._hass,this._editingWaterSupply,e=>this._editWaterSupply(e),e=>this._deleteWaterSupply(e),()=>this._newWaterSupply(),e=>this._saveWaterSupply(e),()=>this._cancelWaterSupply(),e=>this._updateWaterSupplyForm(e),this._t):""}
        ${this._activeTab==="programs"?De(this._hass,this._editingProgram,e=>this._editProgram(e),e=>this._deleteProgram(e),()=>this._newProgram(),e=>this._saveProgram(e),()=>this._cancelProgram(),e=>this._updateProgramForm(e),this._t):""}
        ${this._toast?c`<div class="toast">${this._toast}</div>`:u}
        ${K(!!this._confirmAction,this._confirmMessage,this._confirmLabel,()=>this._executeConfirm(),()=>this._cancelConfirm(),this._t)}
      </ha-card>
    `}};$.styles=[V,ft],g([v()],$.prototype,"_config",2),g([v()],$.prototype,"_hass",2),g([v()],$.prototype,"_activeTab",2),g([v()],$.prototype,"_editingZone",2),g([v()],$.prototype,"_toast",2),g([v()],$.prototype,"_confirmMessage",2),g([v()],$.prototype,"_confirmLabel",2),g([v()],$.prototype,"_confirmAction",2),g([v()],$.prototype,"_editingProgram",2),g([v()],$.prototype,"_editingWaterSupply",2),$=g([I("wateringhub-config-card")],$);globalThis.customCards=globalThis.customCards||[];globalThis.customCards.push({type:"wateringhub-config-card",name:"WateringHub Config Card",description:"Configuration card for WateringHub zones and programs"});
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
