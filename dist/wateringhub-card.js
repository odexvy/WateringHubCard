var xt=Object.defineProperty;var bt=Object.getOwnPropertyDescriptor;var v=(r,t,e,i)=>{for(var n=i>1?void 0:i?bt(t,e):t,o=r.length-1,s;o>=0;o--)(s=r[o])&&(n=(i?s(t,e,n):s(n))||n);return i&&n&&xt(t,e,n),n};var te=globalThis,ie=te.ShadowRoot&&(te.ShadyCSS===void 0||te.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,he=Symbol(),Ne=new WeakMap,U=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==he)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(ie&&t===void 0){let i=e!==void 0&&e.length===1;i&&(t=Ne.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Ne.set(e,t))}return t}toString(){return this.cssText}},Me=r=>new U(typeof r=="string"?r:r+"",void 0,he),A=(r,...t)=>{let e=r.length===1?r[0]:t.reduce((i,n,o)=>i+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+r[o+1],r[0]);return new U(e,r,he)},Fe=(r,t)=>{if(ie)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let i=document.createElement("style"),n=te.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,r.appendChild(i)}},fe=ie?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return Me(e)})(r):r;var{is:wt,defineProperty:$t,getOwnPropertyDescriptor:St,getOwnPropertyNames:At,getOwnPropertySymbols:kt,getPrototypeOf:Tt}=Object,re=globalThis,De=re.trustedTypes,Et=De?De.emptyScript:"",zt=re.reactiveElementPolyfillSupport,B=(r,t)=>r,W={toAttribute(r,t){switch(t){case Boolean:r=r?Et:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},ne=(r,t)=>!wt(r,t),qe={attribute:!0,type:String,converter:W,reflect:!1,useDefault:!1,hasChanged:ne};Symbol.metadata??=Symbol("metadata"),re.litPropertyMetadata??=new WeakMap;var k=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=qe){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let i=Symbol(),n=this.getPropertyDescriptor(t,i,e);n!==void 0&&$t(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){let{get:n,set:o}=St(this.prototype,t)??{get(){return this[e]},set(s){this[e]=s}};return{get:n,set(s){let l=n?.call(this);o?.call(this,s),this.requestUpdate(t,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??qe}static _$Ei(){if(this.hasOwnProperty(B("elementProperties")))return;let t=Tt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(B("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(B("properties"))){let e=this.properties,i=[...At(e),...kt(e)];for(let n of i)this.createProperty(n,e[n])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[i,n]of e)this.elementProperties.set(i,n)}this._$Eh=new Map;for(let[e,i]of this.elementProperties){let n=this._$Eu(e,i);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let n of i)e.unshift(fe(n))}else t!==void 0&&e.push(fe(t));return e}static _$Eu(t,e){let i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Fe(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){let i=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,i);if(n!==void 0&&i.reflect===!0){let o=(i.converter?.toAttribute!==void 0?i.converter:W).toAttribute(e,i.type);this._$Em=t,o==null?this.removeAttribute(n):this.setAttribute(n,o),this._$Em=null}}_$AK(t,e){let i=this.constructor,n=i._$Eh.get(t);if(n!==void 0&&this._$Em!==n){let o=i.getPropertyOptions(n),s=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:W;this._$Em=n;let l=s.fromAttribute(e,o.type);this[n]=l??this._$Ej?.get(n)??l,this._$Em=null}}requestUpdate(t,e,i,n=!1,o){if(t!==void 0){let s=this.constructor;if(n===!1&&(o=this[t]),i??=s.getPropertyOptions(t),!((i.hasChanged??ne)(o,e)||i.useDefault&&i.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:n,wrapped:o},s){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??e??this[t]),o!==!0||s!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),n===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[n,o]of i){let{wrapped:s}=o,l=this[n];s!==!0||this._$AL.has(n)||l===void 0||this.C(n,void 0,o,l)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};k.elementStyles=[],k.shadowRootOptions={mode:"open"},k[B("elementProperties")]=new Map,k[B("finalized")]=new Map,zt?.({ReactiveElement:k}),(re.reactiveElementVersions??=[]).push("2.1.2");var Se=globalThis,Ie=r=>r,oe=Se.trustedTypes,Le=oe?oe.createPolicy("lit-html",{createHTML:r=>r}):void 0,We="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,Ge="?"+E,Pt=`<${Ge}>`,N=document,Y=()=>N.createComment(""),J=r=>r===null||typeof r!="object"&&typeof r!="function",Ae=Array.isArray,Vt=r=>Ae(r)||typeof r?.[Symbol.iterator]=="function",_e=`[ 	
\f\r]`,G=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Oe=/-->/g,je=/>/g,R=RegExp(`>|${_e}(?:([^\\s"'>=/]+)(${_e}*=${_e}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),He=/'/g,Ue=/"/g,Ye=/^(?:script|style|textarea|title)$/i,ke=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),c=ke(1),ci=ke(2),di=ke(3),M=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),Be=new WeakMap,Z=N.createTreeWalker(N,129);function Je(r,t){if(!Ae(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Le!==void 0?Le.createHTML(t):t}var Ct=(r,t)=>{let e=r.length-1,i=[],n,o=t===2?"<svg>":t===3?"<math>":"",s=G;for(let l=0;l<e;l++){let a=r[l],d,u,p=-1,h=0;for(;h<a.length&&(s.lastIndex=h,u=s.exec(a),u!==null);)h=s.lastIndex,s===G?u[1]==="!--"?s=Oe:u[1]!==void 0?s=je:u[2]!==void 0?(Ye.test(u[2])&&(n=RegExp("</"+u[2],"g")),s=R):u[3]!==void 0&&(s=R):s===R?u[0]===">"?(s=n??G,p=-1):u[1]===void 0?p=-2:(p=s.lastIndex-u[2].length,d=u[1],s=u[3]===void 0?R:u[3]==='"'?Ue:He):s===Ue||s===He?s=R:s===Oe||s===je?s=G:(s=R,n=void 0);let g=s===R&&r[l+1].startsWith("/>")?" ":"";o+=s===G?a+Pt:p>=0?(i.push(d),a.slice(0,p)+We+a.slice(p)+E+g):a+E+(p===-2?l:g)}return[Je(r,o+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]},K=class r{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let o=0,s=0,l=t.length-1,a=this.parts,[d,u]=Ct(t,e);if(this.el=r.createElement(d,i),Z.currentNode=this.el.content,e===2||e===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(n=Z.nextNode())!==null&&a.length<l;){if(n.nodeType===1){if(n.hasAttributes())for(let p of n.getAttributeNames())if(p.endsWith(We)){let h=u[s++],g=n.getAttribute(p).split(E),_=/([.?@])?(.*)/.exec(h);a.push({type:1,index:o,name:_[2],strings:g,ctor:_[1]==="."?xe:_[1]==="?"?be:_[1]==="@"?we:I}),n.removeAttribute(p)}else p.startsWith(E)&&(a.push({type:6,index:o}),n.removeAttribute(p));if(Ye.test(n.tagName)){let p=n.textContent.split(E),h=p.length-1;if(h>0){n.textContent=oe?oe.emptyScript:"";for(let g=0;g<h;g++)n.append(p[g],Y()),Z.nextNode(),a.push({type:2,index:++o});n.append(p[h],Y())}}}else if(n.nodeType===8)if(n.data===Ge)a.push({type:2,index:o});else{let p=-1;for(;(p=n.data.indexOf(E,p+1))!==-1;)a.push({type:7,index:o}),p+=E.length-1}o++}}static createElement(t,e){let i=N.createElement("template");return i.innerHTML=t,i}};function q(r,t,e=r,i){if(t===M)return t;let n=i!==void 0?e._$Co?.[i]:e._$Cl,o=J(t)?void 0:t._$litDirective$;return n?.constructor!==o&&(n?._$AO?.(!1),o===void 0?n=void 0:(n=new o(r),n._$AT(r,e,i)),i!==void 0?(e._$Co??=[])[i]=n:e._$Cl=n),n!==void 0&&(t=q(r,n._$AS(r,t.values),n,i)),t}var ye=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:i}=this._$AD,n=(t?.creationScope??N).importNode(e,!0);Z.currentNode=n;let o=Z.nextNode(),s=0,l=0,a=i[0];for(;a!==void 0;){if(s===a.index){let d;a.type===2?d=new X(o,o.nextSibling,this,t):a.type===1?d=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(d=new $e(o,this,t)),this._$AV.push(d),a=i[++l]}s!==a?.index&&(o=Z.nextNode(),s++)}return Z.currentNode=N,n}p(t){let e=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},X=class r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,n){this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=q(this,t,e),J(t)?t===m||t==null||t===""?(this._$AH!==m&&this._$AR(),this._$AH=m):t!==this._$AH&&t!==M&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Vt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==m&&J(this._$AH)?this._$AA.nextSibling.data=t:this.T(N.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:i}=t,n=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=K.createElement(Je(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(e);else{let o=new ye(n,this),s=o.u(this.options);o.p(e),this.T(s),this._$AH=o}}_$AC(t){let e=Be.get(t.strings);return e===void 0&&Be.set(t.strings,e=new K(t)),e}k(t){Ae(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,n=0;for(let o of t)n===e.length?e.push(i=new r(this.O(Y()),this.O(Y()),this,this.options)):i=e[n],i._$AI(o),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let i=Ie(t).nextSibling;Ie(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},I=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,n,o){this.type=1,this._$AH=m,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=m}_$AI(t,e=this,i,n){let o=this.strings,s=!1;if(o===void 0)t=q(this,t,e,0),s=!J(t)||t!==this._$AH&&t!==M,s&&(this._$AH=t);else{let l=t,a,d;for(t=o[0],a=0;a<o.length-1;a++)d=q(this,l[i+a],e,a),d===M&&(d=this._$AH[a]),s||=!J(d)||d!==this._$AH[a],d===m?t=m:t!==m&&(t+=(d??"")+o[a+1]),this._$AH[a]=d}s&&!n&&this.j(t)}j(t){t===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},xe=class extends I{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===m?void 0:t}},be=class extends I{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==m)}},we=class extends I{constructor(t,e,i,n,o){super(t,e,i,n,o),this.type=5}_$AI(t,e=this){if((t=q(this,t,e,0)??m)===M)return;let i=this._$AH,n=t===m&&i!==m||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==m&&(i===m||n);n&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},$e=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){q(this,t)}};var Rt=Se.litHtmlPolyfillSupport;Rt?.(K,X),(Se.litHtmlVersions??=[]).push("3.3.2");var Ke=(r,t,e)=>{let i=e?.renderBefore??t,n=i._$litPart$;if(n===void 0){let o=e?.renderBefore??null;i._$litPart$=n=new X(t.insertBefore(Y(),o),o,void 0,e??{})}return n._$AI(r),n};var Te=globalThis,w=class extends k{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ke(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return M}};w._$litElement$=!0,w.finalized=!0,Te.litElementHydrateSupport?.({LitElement:w});var Zt=Te.litElementPolyfillSupport;Zt?.({LitElement:w});(Te.litElementVersions??=[]).push("4.2.2");var z=r=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(r,t)}):customElements.define(r,t)};var Nt={attribute:!0,type:String,converter:W,reflect:!1,hasChanged:ne},Mt=(r=Nt,t,e)=>{let{kind:i,metadata:n}=e,o=globalThis.litPropertyMetadata.get(n);if(o===void 0&&globalThis.litPropertyMetadata.set(n,o=new Map),i==="setter"&&((r=Object.create(r)).wrapped=!0),o.set(e.name,r),i==="accessor"){let{name:s}=e;return{set(l){let a=t.get.call(this);t.set.call(this,l),this.requestUpdate(s,a,r,!0,l)},init(l){return l!==void 0&&this.C(s,void 0,r,l),l}}}if(i==="setter"){let{name:s}=e;return function(l){let a=this[s];t.call(this,l),this.requestUpdate(s,a,r,!0,l)}}throw Error("Unsupported decorator location: "+i)};function Xe(r){return(t,e)=>typeof e=="object"?Mt(r,t,e):((i,n,o)=>{let s=n.hasOwnProperty(o);return n.constructor.createProperty(o,i),s?Object.getOwnPropertyDescriptor(n,o):void 0})(r,t,e)}function f(r){return Xe({...r,state:!0,attribute:!1})}var Qe={"status.idle":"Idle","status.running":"Running","status.error":"Error","status.disabled":"Disabled",stop_all:"Stop All",next:"Next",last:"Last",no_programs:"No programs found",loading:"Loading...","time.just_now":"just now","time.minutes_ago":"{count}m ago","time.hours_ago":"{count}h ago","time.days_ago":"{count }d ago","time.today_at":"today at {time}","time.tomorrow_at":"tomorrow at {time}","time.in_days":"in {count} d","time.never":"Never","time.no_schedule":"No active program","status.running_program":"Running: {name}",stop_confirm:"Stop all watering?","recap.total_duration":"Total duration: {duration} min","days.mon":"Mon","days.tue":"Tue","days.wed":"Wed","days.thu":"Thu","days.fri":"Fri","days.sat":"Sat","days.sun":"Sun","running.progress":"Valve {done} of {total}","error.program":"Error \u2014 {name}","error.auto_stopped":"All valves have been automatically closed.","config.tab_valves":"Valves","config.tab_zones":"Zones","config.tab_programs":"Programs","config.no_valves":"No valves configured","config.no_zones":"No zones created","config.no_programs":"No programs created","config.new_zone":"New zone","config.new_program":"New program","config.name":"Name","config.save":"Save","config.cancel":"Cancel","config.delete":"Delete","config.edit":"Edit","config.confirm_delete_zone":"Delete this zone?","config.confirm_delete_program":"Delete this program?","config.trigger_time":"Trigger time","config.select_valves":"Select valves","config.select_zones":"Select zones","config.valve_entity":"Entity","config.total_duration":"Total: {duration} min","config.dry_run":"Test mode","config.dry_run_hint":"Runs the sequence without activating valves","running.dry_run":"Test mode","config.follows_program":"Every day","config.frequency_every_n":"Every {n} days","config.frequency_weekdays":"Specific days","recap.frequency_every_n":"every {n}d","config.title":"WateringHub Config","config.editor_valves":"Valves","config.add_valve":"Add valve","config.select_entity":"Switch entity","config.confirm_delete_valve":"Delete this valve?","config.saved":"Saved","config.deleted":"Deleted","skip.button":"Pause","skip.days_1":"1 day","skip.days_n":"{count} days","skip.active":"Paused {count} d","skip.cancel":"Resume","skip.toast_paused":"Program paused {count} d","skip.toast_resumed":"Program resumed","confirm.stop":"Stop","config.tab_water_supplies":"Water Supplies","config.no_water_supplies":"No water supplies","config.new_water_supply":"New supply","config.water_supply":"Water supply","config.confirm_delete_water_supply":"Delete this water supply?","config.error_water_supply_in_use":"Reassign valves first","config.no_water_supply_hint":"Create a water supply first","config.hint_programs":"Create watering programs with a schedule and zones.","config.hint_zones":"Create at least one zone to group your valves.","config.hint_water_supplies":"Define at least one water supply to enable parallel execution.","config.hint_valves":"Configure your valves and assign them to a zone and water supply.","config.none":"None","config.hint_valves_prereq":"Create water supplies and zones first","config.hint_programs_prereq":"Configure your valves first","schedule.at_one":"at {time}","schedule.at_many":"at {rest} and {last}","config.trigger_times":"Trigger times","config.add_time":"Add a time","config.valve_custom_times":"Custom times","config.valve_custom_times_hint":"Run only at selected times","config.valve_times_required":"Select at least one time, or uncheck custom times","config.valves_per_slot":"Valves per trigger time","config.slot_disabled_here":"disabled here","config.no_schedule_times":"Add at least one trigger time","config.valves_unassigned":"Unassigned valves","config.no_valves_in_zone":"No valve in this zone","config.hint_zones_unified":"Manage water supplies, zones, and valves."};var et={"status.idle":"En attente","status.running":"Arrosage en cours","status.error":"Erreur","status.disabled":"D\xE9sactiv\xE9",stop_all:"Tout arr\xEAter",next:"Prochain",last:"Dernier",no_programs:"Aucun programme trouv\xE9",loading:"Chargement...","time.just_now":"\xE0 l'instant","time.minutes_ago":"il y a {count} min","time.hours_ago":"il y a {count}h","time.days_ago":"il y a {count} j","time.today_at":"aujourd'hui \xE0 {time}","time.tomorrow_at":"demain \xE0 {time}","time.in_days":"dans {count} j","time.never":"Jamais","time.no_schedule":"Aucun programme actif","status.running_program":"En cours : {name}",stop_confirm:"Arr\xEAter tout l'arrosage ?","recap.total_duration":"Dur\xE9e totale : {duration} min","days.mon":"Lun","days.tue":"Mar","days.wed":"Mer","days.thu":"Jeu","days.fri":"Ven","days.sat":"Sam","days.sun":"Dim","running.progress":"Vanne {done} sur {total}","error.program":"Erreur \u2014 {name}","error.auto_stopped":"Toutes les vannes ont \xE9t\xE9 ferm\xE9es automatiquement.","config.tab_valves":"Vannes","config.tab_zones":"Zones","config.tab_programs":"Programmes","config.no_valves":"Aucune vanne configur\xE9e","config.no_zones":"Aucune zone cr\xE9\xE9e","config.no_programs":"Aucun programme cr\xE9\xE9","config.new_zone":"Nouvelle zone","config.new_program":"Nouveau programme","config.name":"Nom","config.save":"Sauvegarder","config.cancel":"Annuler","config.delete":"Supprimer","config.edit":"Modifier","config.confirm_delete_zone":"Supprimer cette zone ?","config.confirm_delete_program":"Supprimer ce programme ?","config.trigger_time":"Heure de d\xE9clenchement","config.select_valves":"S\xE9lectionner les vannes","config.select_zones":"S\xE9lectionner les zones","config.valve_entity":"Entit\xE9","config.total_duration":"Total : {duration} min","config.dry_run":"Mode test","config.dry_run_hint":"Ex\xE9cute la s\xE9quence sans activer les vannes","running.dry_run":"Mode test","config.follows_program":"Tous les jours","config.frequency_every_n":"Tous les {n} jours","config.frequency_weekdays":"Jours sp\xE9cifiques","recap.frequency_every_n":"tous les {n}j","config.title":"WateringHub Config","config.editor_valves":"Vannes","config.add_valve":"Ajouter une vanne","config.select_entity":"Entit\xE9 switch","config.confirm_delete_valve":"Supprimer cette vanne ?","config.saved":"Enregistr\xE9","config.deleted":"Supprim\xE9","skip.button":"Pause","skip.days_1":"1 jour","skip.days_n":"{count} jours","skip.active":"En pause {count} j","skip.cancel":"Reprendre","skip.toast_paused":"Programme en pause {count} j","skip.toast_resumed":"Programme repris","confirm.stop":"Arr\xEAter","config.tab_water_supplies":"Arriv\xE9es d'eau","config.no_water_supplies":"Aucune arriv\xE9e d'eau","config.new_water_supply":"Nouvelle arriv\xE9e","config.water_supply":"Arriv\xE9e d'eau","config.confirm_delete_water_supply":"Supprimer cette arriv\xE9e ?","config.error_water_supply_in_use":"R\xE9assignez d'abord les vannes","config.no_water_supply_hint":"Cr\xE9ez d'abord une arriv\xE9e d'eau","config.hint_programs":"Cr\xE9ez des programmes d'arrosage avec un horaire et des zones.","config.hint_zones":"Cr\xE9ez au moins une zone pour regrouper vos vannes.","config.hint_water_supplies":"Cr\xE9ez au moins une arriv\xE9e d'eau pour activer le parall\xE9lisme.","config.hint_valves":"Configurez vos vannes et assignez-les \xE0 une zone et une arriv\xE9e d'eau.","config.none":"Aucun","config.hint_valves_prereq":"Cr\xE9ez d'abord des arriv\xE9es d'eau et des zones","config.hint_programs_prereq":"Configurez d'abord vos vannes","schedule.at_one":"\xE0 {time}","schedule.at_many":"\xE0 {rest} et {last}","config.trigger_times":"Horaires de d\xE9clenchement","config.add_time":"Ajouter un horaire","config.valve_custom_times":"Horaires sp\xE9cifiques","config.valve_custom_times_hint":"Ne tourne qu'aux horaires s\xE9lectionn\xE9s","config.valve_times_required":"S\xE9lectionnez au moins un horaire, ou d\xE9cochez les horaires sp\xE9cifiques","config.valves_per_slot":"Vannes par horaire","config.slot_disabled_here":"d\xE9sactiv\xE9e ici","config.no_schedule_times":"Ajoutez au moins un horaire","config.valves_unassigned":"Vannes non assign\xE9es","config.no_valves_in_zone":"Aucune vanne dans cette zone","config.hint_zones_unified":"G\xE9rez vos arriv\xE9es d'eau, zones et vannes."};var Ee={en:Qe,fr:et};function P(r){let t=r?.toLowerCase().startsWith("fr")?"fr":"en",e=Ee[t]??Ee.en;return(i,n)=>{let o=e[i]??Ee.en[i]??i;return n&&(o=o.replace(/\{(\w+)\}/g,(s,l)=>String(n[l]??s))),o}}var V=A`
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
`;function ae(r){return Object.keys(r.states).filter(t=>t.startsWith("switch.wateringhub_"))}function L(r,t){return typeof r?.attributes.friendly_name=="string"?r.attributes.friendly_name:t}function le(r){return r.states["sensor.wateringhub_status"]?.state??"idle"}function it(r){let t=r.states["sensor.wateringhub_status"];if(t?.state!=="error")return null;let e=t.attributes,i=e.current_program,n=i?r.states[`switch.wateringhub_${i}`]:void 0;return{programName:L(n,i??""),errorMessage:e.error_message??""}}function rt(r){let t=r.states["sensor.wateringhub_status"];if(t?.state!=="running")return null;let e=t.attributes,i=e.valves_done??0,n=e.valves_total??1,o=Array.isArray(e.valves_sequence)?e.valves_sequence:[],s=Array.isArray(e.active_valves)?e.active_valves:[],l=s.map(g=>{let _=Math.max(0,(Date.now()-new Date(g.valve_start).getTime())/1e3),S=Math.max(0,g.valve_duration-_),ve=o.filter(x=>x.water_supply_id===g.water_supply_id&&x.status==="pending").reduce((x,yt)=>x+yt.duration,0);return S+ve}),a=l.length>0?Math.max(...l):0,d=o.reduce((g,_)=>g+_.duration,0),u=o.filter(g=>g.status==="done").reduce((g,_)=>g+_.duration,0),p=s.reduce((g,_)=>g+Math.max(0,(Date.now()-new Date(_.valve_start).getTime())/1e3),0),h=u+p;return{programName:e.current_program??"",valvesDone:i,valvesTotal:n,progressPercent:e.progress_percent??0,totalRemaining:a,totalDuration:d,totalElapsed:h,valveSequence:o,activeValves:s,dryRun:e.dry_run===!0}}function ze(r){if(r<=0)return"0:00";let t=Math.floor(r/3600),e=Math.floor(r%3600/60),i=Math.floor(r%60);return t>0?`${t}:${e.toString().padStart(2,"0")}:${i.toString().padStart(2,"0")}`:`${e}:${i.toString().padStart(2,"0")}`}function ce(r,t){if(!r)return"";let e=[...r.times].sort();if(e.length===0)return"";if(e.length===1)return t("schedule.at_one",{time:e[0]});let i=e[e.length-1],n=e.slice(0,-1).join(", ");return t("schedule.at_many",{rest:n,last:i})}function nt(r){let t=r?.state;return t==null||t==="None"||t==="null"||t==="unknown"||t==="unavailable"}function Pe(r,t,e,i){let n=r.states[t];if(nt(n))return e("time.never");let o=new Date(n.state);if(Number.isNaN(o.getTime()))return n.state;let s=new Date,l=s.getTime()-o.getTime();if(l<0){let p=new Date(s.getFullYear(),s.getMonth(),s.getDate()),h=new Date(o.getFullYear(),o.getMonth(),o.getDate()),g=Math.round((h.getTime()-p.getTime())/(1e3*60*60*24)),_=o.toLocaleTimeString(i??[],{hour:"2-digit",minute:"2-digit"});return g===0?e("time.today_at",{time:_}):g===1?e("time.tomorrow_at",{time:_}):e("time.in_days",{count:g})}let a=Math.floor(l/(1e3*60));if(a<1)return e("time.just_now");if(a<60)return e("time.minutes_ago",{count:a});let d=Math.floor(a/60);if(d<24)return e("time.hours_ago",{count:d});let u=Math.floor(d/24);return e("time.days_ago",{count:u})}function ot(r,t,e){let i=r.states["sensor.wateringhub_next_run"];return nt(i)?t("time.no_schedule"):Pe(r,"sensor.wateringhub_next_run",t,e)}function st(r){let t=r.attributes.skip_until;if(typeof t!="string")return null;let e=new Date(t+"T23:59:59");if(Number.isNaN(e.getTime()))return null;let i=new Date;if(i>e)return null;let n=new Date(i.getFullYear(),i.getMonth(),i.getDate()),o=new Date(e.getFullYear(),e.getMonth(),e.getDate());return{isSkipped:!0,daysRemaining:Math.max(1,Math.ceil((o.getTime()-n.getTime())/(1e3*60*60*24))),skipUntil:t}}function at(r,t){return t("skip.active",{count:r})}function O(r,t){return c`<span class="badge-sm badge-${r}">${t}</span>`}function Q(r,t,e="primary"){return c`<button class="btn btn-${e}" @click=${t}>${r}</button>`}function C(r,t,e){return c`
    <button
      class=${e?.className??"action-btn"}
      @click=${t}
      title=${e?.title??""}
    >
      <ha-icon icon=${r}></ha-icon>
    </button>
  `}function de(r,t){return c`<button class="add-btn" @click=${t}>${r}</button>`}function pe(r,t,e){return c`
    <div class="form-actions">
      ${Q(e("config.cancel"),r,"cancel")}
      ${Q(e("config.save"),t,"primary")}
    </div>
  `}function F(r,t){return c`
    <div class="form-row">
      <label class="form-label">${r}</label>
      ${t}
    </div>
  `}function lt(r,t,e,i,n){return c`
    <div class="list-item">
      <div class="list-item-header">
        <div>
          <div class="list-item-name">${r}</div>
          <div class="list-item-sub">${t}</div>
        </div>
        <div class="list-item-actions">
          ${C("mdi:pencil",e,{title:n("config.edit")})}
          ${C("mdi:delete",i,{title:n("config.delete"),className:"action-btn delete"})}
        </div>
      </div>
    </div>
  `}function j(r,t,e,i,n,o){return r?c`
    <div class="confirm-overlay" @click=${n}>
      <div class="confirm-dialog" @click=${s=>s.stopPropagation()}>
        <div class="confirm-message">${t}</div>
        <div class="confirm-actions">
          <button class="btn btn-cancel" @click=${n}>${o("config.cancel")}</button>
          <button class="btn btn-danger" @click=${i}>${e}</button>
        </div>
      </div>
    </div>
  `:c``}function ct(r){return c`
    <div class="header">
      <span class="title">${r}</span>
    </div>
  `}function qt(r,t,e,i,n,o,s,l){if(!e)return c`
      <div class="program-status">${O("disabled",n("status.disabled"))}</div>
    `;if(le(r)==="running"){let h=r.states["sensor.wateringhub_status"]?.attributes.current_program,g=t.entity_id?.replace("switch.wateringhub_","");return c`
      <div class="program-status">
        ${h===g?O("running",n("status.running")):m}
      </div>
    `}let d=st(t),u=i?Lt(s,n):m;return c`
    <div class="program-status">
      ${d?c`
            ${O("skipped",at(d.daysRemaining,n))}
            <button class="skip-cancel-btn" @click=${l} title=${n("skip.cancel")}>
              <ha-icon icon="mdi:close-circle-outline"></ha-icon>
            </button>
          `:c`
            ${O("idle",n("status.idle"))}
            <div class="skip-dropdown-wrapper">
              <button class="skip-btn" @click=${o} title=${n("skip.button")}>
                <ha-icon icon="mdi:pause-circle-outline"></ha-icon>
              </button>
              ${u}
            </div>
          `}
      <span class="info-sm">${n("next")}: ${ot(r,n,r.language)}</span>
    </div>
  `}function dt(r,t){let e=it(r);return e?c`
    <div class="error-view">
      <div class="error-title">
        <ha-icon icon="mdi:alert-circle"></ha-icon>
        ${t("error.program",{name:e.programName})}
      </div>
      ${e.errorMessage?c`<div class="error-message">${e.errorMessage}</div>`:m}
      <div class="error-auto-stopped">${t("error.auto_stopped")}</div>
    </div>
  `:c``}function pt(r,t,e){let i=rt(r);if(!i)return c``;let n=r.states["sensor.wateringhub_status"]?.attributes.water_supplies??[],o=i.activeValves.length>1?It(i.valveSequence,i.activeValves,n):ut(i.valveSequence,i.activeValves),s=i.valveSequence.length>0?o:m,l=2*Math.PI*30,a=i.totalDuration>0?Math.min(1,i.totalElapsed/i.totalDuration):0,d=l*(1-a);return c`
    <div class="running-block">
      <button class="running-stop-btn" @click=${t}>${e("stop_all")}</button>
      ${i.dryRun?O("dry-run",e("running.dry_run")):m}

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
            <span class="cp-time">${ze(i.totalRemaining)}</span>
          </div>
        </div>
        <div class="global-info">
          <div class="global-program-name">
            ${L(r.states[`switch.wateringhub_${i.programName}`],i.programName)}
          </div>
          <div class="global-sub">
            ${e("running.progress",{done:i.valvesDone+1,total:i.valvesTotal})}
          </div>
        </div>
      </div>

      ${s}
    </div>
  `}function ut(r,t){let e=[];for(let a of r){let d=e[e.length-1];d?.zoneName===a.zone_name?d.valves.push(a):e.push({zoneName:a.zone_name,valves:[a]})}let i=new Map;for(let a of t){let d=Math.max(0,(Date.now()-new Date(a.valve_start).getTime())/1e3);i.set(a.valve_id,Math.max(0,a.valve_duration-d))}let n=c`<svg viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z"
    />
  </svg>`,o=c`<svg viewBox="0 0 24 24">
    <circle fill="currentColor" cx="12" cy="12" r="6" />
  </svg>`,s=c`<svg viewBox="0 0 24 24">
    <circle fill="none" stroke="currentColor" stroke-width="2" cx="12" cy="12" r="6" />
  </svg>`,l={done:n,running:o,pending:s};return c`
    <div class="valve-timeline">
      ${e.map(a=>c`
          <div class="tl-zone">${a.zoneName}</div>
          ${a.valves.map(d=>{let u=Math.ceil(d.duration/60),p=i.get(d.valve_id)??0;return c`
              <div class="tl-step tl-${d.status}">
                <span class="tl-dot">${l[d.status]}</span>
                <span class="tl-step-name">${d.valve_name}</span>
                <span class="tl-step-time">
                  ${d.status==="running"?ze(p):`${u} min`}
                </span>
              </div>
            `})}
        `)}
    </div>
  `}function It(r,t,e){let i=[],n=new Map;for(let s of r)n.has(s.water_supply_id)||(i.push(s.water_supply_id),n.set(s.water_supply_id,[])),n.get(s.water_supply_id).push(s);let o=new Map;for(let s of t)o.has(s.water_supply_id)||o.set(s.water_supply_id,[]),o.get(s.water_supply_id).push(s);return c`
    <div class="parallel-timeline">
      ${i.map(s=>{let l=n.get(s)??[],a=o.get(s)??[],d=s===null?"\u2014":e.find(u=>u.id===s)?.name??s;return c`
          <div class="supply-column">
            <div class="supply-label">${d}</div>
            ${ut(l,a)}
          </div>
        `})}
    </div>
  `}function mt(r,t,e,i,n,o,s,l,a,d){return t.length===0?c`<div class="empty-state">${d("no_programs")}</div>`:c`${t.map(u=>{let p=r.states[u];if(!p)return m;let h=p.state==="on",g=e===u,_=L(p,u);return c`
      <div class="program-wrapper">
        <div class="program">
          <div class="program-header" @click=${()=>n(u)}>
            <ha-icon class="chevron ${g?"open":""}" icon="mdi:chevron-down"></ha-icon>
            ${h?c`<div class="active-dot"></div>`:m}
            <span class="program-name ${h?"active":""}">${_}</span>
          </div>
          <ha-switch .checked=${h} @change=${()=>o(u)}></ha-switch>
        </div>
        ${qt(r,p,h,i===u,d,()=>s(u),S=>l(u,S),()=>a(u))}
        ${Ot(r,p.attributes,g,d)}
      </div>
    `})}`}function Lt(r,t){return c`
    <div class="skip-dropdown">
      ${[1,2,3,5].map(i=>c`
          <button class="skip-dropdown-option" @click=${()=>r(i)}>
            ${i===1?t("skip.days_1"):t("skip.days_n",{count:i})}
          </button>
        `)}
    </div>
  `}function Ot(r,t,e,i){let n=t.schedule,o=t.zones??[],s=t.total_duration;return c`
    <div class="program-recap ${e?"open":""}">
      ${n?c`<div class="recap-schedule">
            <ha-icon icon="mdi:calendar-clock"></ha-icon>
            ${ce(n,i)}
          </div>`:m}
      <div class="recap-schedule">
        <ha-icon icon="mdi:history"></ha-icon>
        ${i("last")}: ${Pe(r,"sensor.wateringhub_last_run",i,r.language)}
      </div>
      ${o.map(l=>c`
          <div class="recap-zone">
            <span class="recap-zone-badge">${l.zone_name}</span>
          </div>
          ${l.valves.map(a=>c`
              <div class="recap-valve">
                <ha-icon icon="mdi:water"></ha-icon>
                ${a.valve_name} — ${a.duration}
                min${Ht(a.frequency,i)}${jt(a.times,n?.times)}
              </div>
            `)}
        `)}
      ${s?c`<div class="recap-total">
            <ha-icon icon="mdi:timer-outline"></ha-icon>
            ${i("recap.total_duration",{duration:s})}
          </div>`:m}
    </div>
  `}function jt(r,t){return!r||r.length===0||t&&r.length===t.length?"":` \xB7 ${[...r].sort().join(", ")}`}function Ht(r,t){return r?r.type==="every_n_days"?` \xB7 ${t("recap.frequency_every_n",{n:r.n??2})}`:r.type==="weekdays"&&r.days?.length?` \xB7 ${r.days.map(i=>t(`days.${i}`)).join(", ")}`:"":""}var D=class extends w{constructor(){super(...arguments);this._t=e=>e}set hass(e){this._hass=e,this._t=P(e.language)}setConfig(e){this._config=e}_titleChanged(e){let i=e.target.value;this._config={...this._config,title:i},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config}}))}render(){return c`
      ${F(this._t("config.name"),c`<input
          class="form-input"
          .value=${this._config?.title??""}
          @input=${this._titleChanged}
        />`)}
    `}};D.styles=[V],v([f()],D.prototype,"_config",2),v([f()],D.prototype,"_hass",2),D=v([z("wateringhub-card-editor")],D);var b=class extends w{constructor(){super(...arguments);this._programEntities=[];this._expandedProgram=null;this._skipDropdownOpen=null;this._toast="";this._confirmMessage="";this._confirmLabel="";this._confirmAction=null;this._tick=0;this._t=e=>e;this._timerInterval=null;this._unsubEvents=null;this._boundCloseDropdown=this._closeSkipDropdown.bind(this)}static getConfigElement(){return document.createElement("wateringhub-card-editor")}setConfig(e){this._config=e}set hass(e){let i=this._hass;this._hass=e,this._t=P(e.language),i?.states!==e.states&&(this._programEntities=ae(e)),this._updateTimer(le(e)),this._subscribeEvents()}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._boundCloseDropdown)}disconnectedCallback(){super.disconnectedCallback(),this._clearTimer(),this._unsubscribeEvents(),document.removeEventListener("click",this._boundCloseDropdown)}_subscribeEvents(){this._unsubEvents||!this._hass?.connection||this._hass.connection.subscribeEvents(()=>{this._tick++},"wateringhub_event").then(e=>{this._unsubEvents=e})}_unsubscribeEvents(){this._unsubEvents&&(this._unsubEvents(),this._unsubEvents=null)}_updateTimer(e){e==="running"&&!this._timerInterval?this._timerInterval=setInterval(()=>{this._tick++},1e3):e!=="running"&&this._timerInterval&&this._clearTimer()}_clearTimer(){this._timerInterval&&(clearInterval(this._timerInterval),this._timerInterval=null)}getCardSize(){return 3}_toggleExpand(e){this._expandedProgram=this._expandedProgram===e?null:e}_toggleProgram(e){let i=this._hass.states[e];if(!i)return;let n=i.state==="on"?"turn_off":"turn_on";this._hass.callService("switch",n,{entity_id:e})}_requestConfirm(e,i,n){this._confirmMessage=e,this._confirmLabel=i,this._confirmAction=n}_executeConfirm(){this._confirmAction?.(),this._confirmAction=null,this._confirmMessage="",this._confirmLabel=""}_cancelConfirm(){this._confirmAction=null,this._confirmMessage="",this._confirmLabel=""}_stopAll(){this._requestConfirm(this._t("stop_confirm"),this._t("confirm.stop"),()=>{this._hass.callService("wateringhub","stop_all",{})})}_toggleSkipDropdown(e){this._skipDropdownOpen=this._skipDropdownOpen===e?null:e}_showToast(e){this._toast=e,setTimeout(()=>{this._toast=""},3e3)}_handleSkip(e,i){let n=e.replace("switch.wateringhub_","");this._hass.callService("wateringhub","skip_program",{id:n,days:i}),this._skipDropdownOpen=null,this._showToast(this._t("skip.toast_paused",{count:i}))}_handleCancelSkip(e){let i=e.replace("switch.wateringhub_","");this._hass.callService("wateringhub","skip_program",{id:i,days:0}),this._showToast(this._t("skip.toast_resumed"))}_closeSkipDropdown(e){if(!this._skipDropdownOpen)return;e.composedPath().some(o=>o instanceof HTMLElement&&o.classList?.contains("skip-dropdown-wrapper"))||(this._skipDropdownOpen=null)}render(){if(!this._hass||!this._config)return c`<ha-card>${this._t("loading")}</ha-card>`;let e=this._config.title??"WateringHub";return c`
      <ha-card>
        ${ct(e)} ${dt(this._hass,this._t)}
        ${pt(this._hass,()=>this._stopAll(),this._t)}
        ${mt(this._hass,this._programEntities,this._expandedProgram,this._skipDropdownOpen,i=>this._toggleExpand(i),i=>this._toggleProgram(i),i=>this._toggleSkipDropdown(i),(i,n)=>this._handleSkip(i,n),i=>this._handleCancelSkip(i),this._t)}
        ${this._toast?c`<div class="toast">${this._toast}</div>`:m}
        ${j(!!this._confirmAction,this._confirmMessage,this._confirmLabel,()=>this._executeConfirm(),()=>this._cancelConfirm(),this._t)}
      </ha-card>
    `}};b.styles=[V,tt],v([f()],b.prototype,"_config",2),v([f()],b.prototype,"_hass",2),v([f()],b.prototype,"_programEntities",2),v([f()],b.prototype,"_expandedProgram",2),v([f()],b.prototype,"_skipDropdownOpen",2),v([f()],b.prototype,"_toast",2),v([f()],b.prototype,"_confirmMessage",2),v([f()],b.prototype,"_confirmLabel",2),v([f()],b.prototype,"_confirmAction",2),v([f()],b.prototype,"_tick",2),b=v([z("wateringhub-card")],b);globalThis.customCards=globalThis.customCards||[];globalThis.customCards.push({type:"wateringhub-card",name:"WateringHub Card",description:"Watering management card for WateringHub"});var gt=A`
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
    gap: 6px;
  }
  .schedule-chip-wrap {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 4px 6px 4px 10px;
    border-radius: 16px;
    background: var(--primary-color);
    color: white;
  }
  .schedule-chip-input {
    background: transparent;
    border: none;
    color: white;
    font-size: 13px;
    font-weight: 500;
    padding: 0;
    outline: none;
    width: 58px;
  }
  .schedule-chip-input::-webkit-calendar-picker-indicator {
    filter: invert(1);
    cursor: pointer;
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
  }
  .chip-close ha-icon {
    --mdc-icon-size: 14px;
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
`;function ue(r){return r.map(t=>({entity_id:t.entity_id,name:t.name,zone_id:t.zone_id,water_supply_id:t.water_supply_id}))}function T(r){return r.states["sensor.wateringhub_status"]?.attributes.available_valves??[]}function H(r){return r.states["sensor.wateringhub_status"]?.attributes.zones??[]}function me(r){return r.states["sensor.wateringhub_status"]?.attributes.water_supplies??[]}function ge(r){return r.toLowerCase().normalize("NFD").replaceAll(/[\u0300-\u036f]/g,"").replaceAll(/[^a-z0-9]+/g,"_").replaceAll(/^_|_$/g,"")}function Ce(r,t,e){let i=me(r),n=H(r),o=T(r),s=t.editingValves??ue(o),l=t.editingValves!==null,a=l?s.every(u=>u.zone_id&&u.water_supply_id):!1,d=s.filter(u=>!u.zone_id);return c`
    <div class="form-hint">${e("config.hint_zones_unified")}</div>

    <!-- Supplies chips -->
    <div class="form-label" style="margin-top:12px;">${e("config.tab_water_supplies")}</div>
    ${t.editingSupply?Ve(t.editingSupply.name,u=>t.onUpdateSupplyForm({...t.editingSupply,name:u}),()=>t.onSaveSupply(t.editingSupply),t.onCancelSupply,e):c`
          <div class="supply-chips">
            ${i.map(u=>c`
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
    ${n.map(u=>t.editingZone?.id===u.id?Ve(t.editingZone.name,p=>t.onUpdateZoneForm({...t.editingZone,name:p}),()=>t.onSaveZone(t.editingZone),t.onCancelZone,e):Ut(u,s,n,i,t,e))}
    ${t.editingZone?.isNew?Ve(t.editingZone.name,u=>t.onUpdateZoneForm({...t.editingZone,name:u}),()=>t.onSaveZone(t.editingZone),t.onCancelZone,e):m}
    ${t.editingZone?m:c`<button class="add-btn" @click=${t.onNewZone}>
          + ${e("config.new_zone")}
        </button>`}

    <!-- Unassigned valves -->
    ${d.length>0?c`
          <div class="form-label" style="margin-top:16px; color:var(--warning-color);">
            ${e("config.valves_unassigned")} (${d.length})
          </div>
          ${d.map(u=>vt(u,n,i,t,!0,e))}
        `:m}

    <!-- Global valves save -->
    ${l?c`<div class="form-actions" style="margin-top:16px;">
          <button class="btn btn-cancel" @click=${t.onCancelValves}>
            ${e("config.cancel")}
          </button>
          <button class="btn btn-primary" ?disabled=${!a} @click=${t.onSaveValves}>
            ${e("config.save")}
          </button>
        </div>`:m}
  `}function Ut(r,t,e,i,n,o){let s=t.filter(a=>a.zone_id===r.id),l=n.expandedZones.has(r.id);return c`
    <div class="zone-card">
      <div class="zone-card-header" @click=${()=>n.onToggleZone(r.id)}>
        <ha-icon
          class="chevron ${l?"open":""}"
          icon="mdi:chevron-down"
        ></ha-icon>
        <span class="zone-card-name">${r.name}</span>
        <span class="info-sm">(${s.length})</span>
        <div class="list-item-actions" @click=${a=>a.stopPropagation()}>
          ${C("mdi:pencil",()=>n.onEditZone(r),{className:"action-btn",title:o("config.edit")})}
          ${C("mdi:delete",()=>n.onDeleteZone(r.id),{className:"action-btn delete",title:o("config.delete")})}
        </div>
      </div>
      ${l?c`
            <div class="zone-card-body">
              ${s.length===0?c`<div class="info-sm" style="padding:8px 0;">
                    ${o("config.no_valves_in_zone")}
                  </div>`:s.map(a=>vt(a,e,i,n,!1,o))}
            </div>
          `:m}
    </div>
  `}function vt(r,t,e,i,n,o){let s=!r.zone_id,l=!r.water_supply_id,a="border-color: var(--error-color);",d=p=>{i.editingValves||i.onStartEditValves();let h=(i.editingValves??[r]).map(g=>g.entity_id===r.entity_id?{...g,zone_id:p||null}:g);i.onUpdateValves(h)},u=p=>{i.editingValves||i.onStartEditValves();let h=(i.editingValves??[r]).map(g=>g.entity_id===r.entity_id?{...g,water_supply_id:p||null}:g);i.onUpdateValves(h)};return c`
    <div class="valve-row ${n?"valve-row-unassigned":""}">
      <ha-icon
        class="valve-icon"
        icon=${n?"mdi:alert-circle-outline":"mdi:valve"}
      ></ha-icon>
      <div class="valve-name">${r.name}</div>
      <select
        class="form-select valve-dropdown"
        style=${s?a:""}
        @change=${p=>d(p.target.value)}
      >
        <option value="" ?selected=${!r.zone_id}>${o("config.none")}</option>
        ${t.map(p=>c`<option value=${p.id} ?selected=${p.id===r.zone_id}>${p.name}</option>`)}
      </select>
      <select
        class="form-select valve-dropdown"
        style=${l?a:""}
        @change=${p=>u(p.target.value)}
      >
        <option value="" ?selected=${!r.water_supply_id}>${o("config.none")}</option>
        ${e.map(p=>c`<option value=${p.id} ?selected=${p.id===r.water_supply_id}>
            ${p.name}
          </option>`)}
      </select>
      ${C("mdi:delete",()=>i.onDeleteValve(r.entity_id),{className:"action-btn delete",title:o("config.delete")})}
    </div>
  `}function Ve(r,t,e,i,n){return c`
    <div class="inline-form">
      ${F(n("config.name"),c`<input
          class="form-input"
          .value=${r}
          @input=${o=>t(o.target.value)}
        />`)}
      ${pe(i,e,n)}
    </div>
  `}function Ze(r,t,e,i,n,o,s,l,a){let d=ae(r),u=H(r),p=T(r),h=p.some(g=>g.zone_id!==null);return c`
    <div class="form-hint">${a("config.hint_programs")}</div>
    ${h?m:c`<div class="empty-state">${a("config.hint_programs_prereq")}</div>`}
    ${d.map(g=>{let _=r.states[g];if(!_)return m;let S=_.attributes.program_id??"";return t?.id===S?ht(t,u,p,o,s,l,a):Bt(_,g,e,i,a)})}
    ${t?.isNew?ht(t,u,p,o,s,l,a):m}
    ${t?m:de(`+ ${a("config.new_program")}`,n)}
    ${d.length===0&&!t?c`<div class="empty-state">${a("config.no_programs")}</div>`:m}
  `}function Bt(r,t,e,i,n){let o=L(r,t),s=r.attributes.schedule,l=r.attributes.total_duration,a=r.attributes.dry_run===!0,d=ce(s,n),u=l?`${d} \u2014 ${l} min`:d,p=a?c`<span class="badge-dry-run-sm">${n("config.dry_run")}</span>`:m;return lt(c`${o} ${p}`,u,()=>e(t),()=>i(t),n)}function ht(r,t,e,i,n,o,s){let l=[...r.schedule.times],a=r.zones.reduce((d,u)=>d+u.valves.reduce((p,h)=>p+(h.duration||0),0),0);return c`
    <div class="inline-form">
      <!-- Name -->
      ${F(s("config.name"),c`<input
          class="form-input"
          .value=${r.name}
          @input=${d=>o({...r,name:d.target.value})}
        />`)}

      <!-- Schedule times (chips + time picker) -->
      ${Wt(r,o,s)}

      <!-- Per-slot valve sections -->
      ${l.length===0?c`<div class="form-hint" style="color:var(--warning-color);">
            ${s("config.no_schedule_times")}
          </div>`:c`<div class="form-label" style="margin-top:12px;">
              ${s("config.valves_per_slot")}
            </div>
            ${[...l].sort().map(d=>Gt(d,r,t,e,o,s))}`}

      ${a>0?c`<div class="total-duration">
            ${s("config.total_duration",{duration:a})}
          </div>`:m}

      <!-- Dry run toggle -->
      <div class="form-row">
        <label class="checkbox-item">
          <input
            type="checkbox"
            .checked=${r.dry_run}
            @change=${()=>o({...r,dry_run:!r.dry_run})}
          />
          ${s("config.dry_run")}
        </label>
        <div class="form-hint">${s("config.dry_run_hint")}</div>
      </div>

      ${pe(n,()=>i(r),s)}
    </div>
  `}function Wt(r,t,e){let i=r.schedule.times??[];return F(e("config.trigger_times"),c`<div class="schedule-chips">
      ${i.map((n,o)=>c`
          <div class="schedule-chip-wrap">
            <input
              class="schedule-chip-input"
              type="time"
              .value=${n}
              @input=${s=>{let l=i.map((a,d)=>d===o?s.target.value:a);t(Re(r,l))}}
            />
            ${i.length>1?c`<button
                  class="chip-close"
                  @click=${()=>t(Re(r,i.filter((s,l)=>l!==o)))}
                >
                  <ha-icon icon="mdi:close"></ha-icon>
                </button>`:m}
          </div>
        `)}
      <button
        class="supply-chip chip-add"
        @click=${()=>t(Re(r,[...i,"12:00"]))}
      >
        + ${e("config.add_time")}
      </button>
    </div>`)}function Gt(r,t,e,i,n,o){let s=e.filter(a=>i.some(d=>d.zone_id===a.id)),l=Xt(t,r);return c`
    <div class="slot-section">
      <div class="slot-header">
        <ha-icon icon="mdi:clock-outline"></ha-icon>
        <span class="slot-time">${r}</span>
        <span class="info-sm">(${l})</span>
      </div>
      <div class="slot-body">
        ${s.length===0?c`<div class="info-sm" style="padding:4px 0;">
              ${o("config.hint_programs_prereq")}
            </div>`:s.map(a=>c`
                <div class="slot-zone-label">${a.name}</div>
                ${Yt(a.id,i,t).map(d=>Jt(d,a.id,r,t,n,o))}
              `)}
      </div>
    </div>
  `}function Yt(r,t,e){let i=t.filter(a=>a.zone_id===r),n=e.zones.find(a=>a.zone_id===r);if(!n)return i;let o=n.valves.map(a=>i.find(d=>d.id===a.valve_id)).filter(a=>!!a),s=new Set(o.map(a=>a.id)),l=i.filter(a=>!s.has(a.id));return[...o,...l]}function Jt(r,t,e,i,n,o){let s=i.zones.find(x=>x.zone_id===t),l=s?.valves.find(x=>x.valve_id===r.id),a=!!(l&&(l.times===void 0||l.times.includes(e))),d=s?.valves.findIndex(x=>x.valve_id===r.id)??-1,u=s?.valves.length??0,p=d<=0,h=d<0||d===u-1,g=()=>n(Qt(i,t,r.id,e)),_=x=>n(ei(i,t,r.id,x)),S=x=>n(ri(i,t,r.id,x)),ve=a&&l&&u>1?c`
          <div class="reorder-btns">
            <button class="reorder-btn" ?disabled=${p} @click=${()=>S(-1)}>
              <ha-icon icon="mdi:chevron-up"></ha-icon>
            </button>
            <button class="reorder-btn" ?disabled=${h} @click=${()=>S(1)}>
              <ha-icon icon="mdi:chevron-down"></ha-icon>
            </button>
          </div>
        `:m;return c`
    <div class="slot-valve-row ${a?"":"inactive"}">
      <label class="slot-valve-main">
        <input type="checkbox" .checked=${a} @change=${g} />
        ${ve}
        <span class="slot-valve-name">${r.name}</span>
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
      ${a&&l?Kt(l,t,i,n,o):m}
    </div>
  `}function Kt(r,t,e,i,n){let o=r.frequency,s=o?.type??"",l=new Date().toISOString().slice(0,10),a=p=>i(ee(e,t,r.valve_id,{frequency:p})),d=s==="every_n_days"&&o?c`
          <input
            class="valve-freq-n-input"
            type="number"
            min="2"
            .value=${String(o.n??2)}
            @input=${p=>a({...o,n:Number.parseInt(p.target.value)||2})}
          />
          <span class="info-sm">j</span>
        `:m,u=s==="weekdays"&&o?c`
          <div class="valve-freq-days">
            ${["mon","tue","wed","thu","fri","sat","sun"].map(p=>{let h=o.days?.includes(p)??!1;return c`
                <label class="valve-freq-day">
                  <input
                    type="checkbox"
                    .checked=${h}
                    @change=${()=>{let g=o.days??[],_=h?g.filter(S=>S!==p):[...g,p];a({...o,days:_})}}
                  />
                  ${n(`days.${p}`)}
                </label>
              `})}
          </div>
        `:m;return c`
    <div class="slot-valve-freq">
      <select
        class="valve-freq-select"
        @change=${p=>{let h=p.target.value;a(h?h==="every_n_days"?{type:"every_n_days",n:2,start_date:l}:{type:"weekdays",days:[]}:void 0)}}
      >
        <option value="" ?selected=${s===""}>${n("config.follows_program")}</option>
        <option value="every_n_days" ?selected=${s==="every_n_days"}>
          ${n("config.frequency_every_n",{n:o?.n??2})}
        </option>
        <option value="weekdays" ?selected=${s==="weekdays"}>
          ${n("config.frequency_weekdays")}
        </option>
      </select>
      ${d}${u}
    </div>
  `}function Xt(r,t){return r.zones.reduce((e,i)=>e+i.valves.filter(n=>n.times===void 0||n.times.includes(t)).length,0)}function Re(r,t){let e=new Set(t),i=r.zones.map(n=>({...n,valves:n.valves.map(o=>{if(o.times===void 0)return o;let s=o.times.filter(l=>e.has(l));return{...o,times:s}}).filter(o=>o.times===void 0||o.times.length>0)})).filter(n=>n.valves.length>0);return{...r,schedule:{times:t},zones:i}}function Qt(r,t,e,i,n=10){let o=r.schedule.times,l=r.zones.find(p=>p.zone_id===t)?.valves.find(p=>p.valve_id===e);if(!!(l&&(l.times===void 0||l.times.includes(i)))&&l){let h=(l.times??[...o]).filter(g=>g!==i);return h.length===0?ii(r,t,e):ee(r,t,e,{times:h})}if(!l)return ti(r,t,{valve_id:e,duration:n,times:[i]});let u=[...l.times??[],i];return u.length>=o.length?ee(r,t,e,{times:void 0}):ee(r,t,e,{times:u})}function ei(r,t,e,i){return ee(r,t,e,{duration:i})}function ee(r,t,e,i){return{...r,zones:r.zones.map(n=>n.zone_id===t?{...n,valves:n.valves.map(o=>o.valve_id===e?{...o,...i}:o)}:n)}}function ti(r,t,e){let n=r.zones.some(o=>o.zone_id===t)?r.zones.map(o=>o.zone_id===t?{...o,valves:[...o.valves,e]}:o):[...r.zones,{zone_id:t,valves:[e]}];return{...r,zones:n}}function ii(r,t,e){let i=r.zones.map(n=>n.zone_id===t?{...n,valves:n.valves.filter(o=>o.valve_id!==e)}:n).filter(n=>n.valves.length>0);return{...r,zones:i}}function ri(r,t,e,i){return{...r,zones:r.zones.map(n=>{if(n.zone_id!==t)return n;let o=n.valves.findIndex(a=>a.valve_id===e),s=o+i;if(o<0||s<0||s>=n.valves.length)return n;let l=[...n.valves];return[l[o],l[s]]=[l[s],l[o]],{...n,valves:l}})}}function ft(r,t,e){let i=[{id:"programs",label:e("config.tab_programs")},{id:"zones",label:e("config.tab_zones")}];return c`
    <div class="tabs">
      ${i.map(n=>c`
          <div
            class="tab ${r===n.id?"active":""}"
            @click=${()=>t(n.id)}
          >
            ${n.label}
          </div>
        `)}
    </div>
  `}var _t=A`
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
`;var $=class extends w{constructor(){super(...arguments);this._adding=!1;this._newEntityId="";this._newZoneId="";this._newWaterSupplyId="";this._confirmMessage="";this._confirmLabel="";this._confirmAction=null;this._t=e=>e}set hass(e){this._hass=e,this._t=P(e.language)}setConfig(e){this._config=e}_getValves(){return this._hass?T(this._hass):[]}async _setValves(e){await this._hass.callService("wateringhub","set_valves",{valves:e})}_requestConfirm(e,i,n){this._confirmMessage=e,this._confirmLabel=i,this._confirmAction=n}_executeConfirm(){this._confirmAction?.(),this._confirmAction=null,this._confirmMessage="",this._confirmLabel=""}_cancelConfirm(){this._confirmAction=null,this._confirmMessage="",this._confirmLabel=""}_deleteValve(e){this._requestConfirm(this._t("config.confirm_delete_valve"),this._t("config.delete"),async()=>{let i=this._getValves().filter(n=>n.entity_id!==e).map(n=>({entity_id:n.entity_id,name:n.name,water_supply_id:n.water_supply_id,zone_id:n.zone_id}));await this._setValves(i)})}_startAdd(){this._adding=!0,this._newEntityId="",this._newZoneId="",this._newWaterSupplyId=""}_onEntityPicked(e){this._newEntityId=e.detail.value}_getFriendlyName(e){let n=this._hass?.states[e]?.attributes.friendly_name;return typeof n=="string"?n:e}async _confirmAdd(){if(!this._newEntityId||!this._newZoneId||!this._newWaterSupplyId)return;let e=this._getFriendlyName(this._newEntityId),i=[...this._getValves().map(n=>({entity_id:n.entity_id,name:n.name,water_supply_id:n.water_supply_id,zone_id:n.zone_id})),{entity_id:this._newEntityId,name:e,water_supply_id:this._newWaterSupplyId,zone_id:this._newZoneId}];await this._setValves(i),this._adding=!1,this._newEntityId="",this._newZoneId="",this._newWaterSupplyId=""}_cancelAdd(){this._adding=!1,this._newEntityId="",this._newZoneId="",this._newWaterSupplyId=""}render(){let e=this._getValves(),i=H(this._hass),n=me(this._hass);return c`
      <div class="editor-section">
        <span class="editor-label">${this._t("config.editor_valves")}</span>

        ${e.length===0&&!this._adding?c`<div class="empty-state">${this._t("config.no_valves")}</div>`:m}
        ${e.map(o=>c`
            <div class="valve-item">
              <div class="valve-item-info">
                <div class="valve-item-name">${o.name}</div>
                <div class="valve-item-entity">${o.entity_id}</div>
              </div>
              ${C("mdi:delete",()=>this._deleteValve(o.entity_id),{title:this._t("config.delete"),className:"action-btn delete"})}
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
                    ${i.map(o=>c`<option value=${o.id}>${o.name}</option>`)}
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
                  ${Q(this._t("config.cancel"),()=>this._cancelAdd(),"cancel")}
                  ${Q(this._t("config.save"),()=>this._confirmAdd(),"primary")}
                </div>
              </div>
            `:i.length===0||n.length===0?c`<div class="empty-state">${this._t("config.hint_valves_prereq")}</div>`:de(`+ ${this._t("config.add_valve")}`,()=>this._startAdd())}
        ${j(!!this._confirmAction,this._confirmMessage,this._confirmLabel,()=>this._executeConfirm(),()=>this._cancelConfirm(),this._t)}
      </div>
    `}};$.styles=[V,_t],v([f()],$.prototype,"_config",2),v([f()],$.prototype,"_hass",2),v([f()],$.prototype,"_adding",2),v([f()],$.prototype,"_newEntityId",2),v([f()],$.prototype,"_newZoneId",2),v([f()],$.prototype,"_newWaterSupplyId",2),v([f()],$.prototype,"_confirmMessage",2),v([f()],$.prototype,"_confirmLabel",2),v([f()],$.prototype,"_confirmAction",2),$=v([z("wateringhub-config-editor")],$);var y=class extends w{constructor(){super(...arguments);this._activeTab="programs";this._editingZone=null;this._toast="";this._confirmMessage="";this._confirmLabel="";this._confirmAction=null;this._editingProgram=null;this._editingWaterSupply=null;this._editingValves=null;this._expandedZones=new Set;this._t=e=>e}static getConfigElement(){return document.createElement("wateringhub-config-editor")}setConfig(e){this._config=e}set hass(e){this._hass=e,this._t=P(e.language)}getCardSize(){return 5}_showToast(e){this._toast=e,setTimeout(()=>{this._toast=""},3e3)}_requestConfirm(e,i,n){this._confirmMessage=e,this._confirmLabel=i,this._confirmAction=n}_executeConfirm(){this._confirmAction?.(),this._confirmAction=null,this._confirmMessage="",this._confirmLabel=""}_cancelConfirm(){this._confirmAction=null,this._confirmMessage="",this._confirmLabel=""}_setTab(e){this._activeTab=e,this._editingZone=null,this._editingProgram=null,this._editingWaterSupply=null}_toggleZone(e){let i=new Set(this._expandedZones);i.has(e)?i.delete(e):i.add(e),this._expandedZones=i}_newZone(){this._editingZone={id:"",name:"",isNew:!0}}_editZone(e){this._editingZone={id:e.id,name:e.name,isNew:!1}}_cancelZone(){this._editingZone=null}_updateZoneForm(e){this._editingZone=e}async _saveZone(e){let i=e.isNew?ge(e.name):e.id,n=e.isNew?"create_zone":"update_zone";await this._hass.callService("wateringhub",n,{id:i,name:e.name}),this._editingZone=null,this._showToast(this._t("config.saved"))}_deleteZone(e){this._requestConfirm(this._t("config.confirm_delete_zone"),this._t("config.delete"),async()=>{try{await this._hass.callService("wateringhub","delete_zone",{id:e}),this._showToast(this._t("config.deleted"))}catch{this._showToast(this._t("config.error_water_supply_in_use"))}})}_newProgram(){this._editingProgram={id:"",name:"",schedule:{times:["06:00"]},zones:[],dry_run:!1,isNew:!0}}_editProgram(e){let i=this._hass.states[e];if(!i)return;let n=i.attributes,o=n.program_id??"",l={times:n.schedule?.times??["06:00"]},a=(n.zones??[]).map(d=>({zone_id:d.zone_id,valves:d.valves.map(u=>({valve_id:u.valve_id,duration:u.duration,frequency:u.frequency,times:u.times}))}));this._editingProgram={id:o,name:typeof n.friendly_name=="string"?n.friendly_name:o,schedule:l,zones:a,dry_run:n.dry_run===!0,isNew:!1}}_cancelProgram(){this._editingProgram=null}_updateProgramForm(e){this._editingProgram=e}async _saveProgram(e){if(e.zones.some(l=>l.valves.some(a=>a.times!==void 0&&a.times.length===0))){this._showToast(this._t("config.valve_times_required"));return}let n=e.isNew?ge(e.name):e.id,o=e.isNew?"create_program":"update_program",s=[...e.schedule.times].sort();await this._hass.callService("wateringhub",o,{id:n,name:e.name,schedule:{times:s},dry_run:e.dry_run,zones:e.zones.map(l=>({zone_id:l.zone_id,valves:l.valves.map(a=>({valve_id:a.valve_id,duration:a.duration,...a.frequency?{frequency:a.frequency}:{},...a.times&&a.times.length>0&&a.times.length<s.length?{times:[...a.times].sort()}:{}}))}))}),this._editingProgram=null,this._showToast(this._t("config.saved"))}_deleteProgram(e){this._requestConfirm(this._t("config.confirm_delete_program"),this._t("config.delete"),async()=>{let n=this._hass.states[e]?.attributes.program_id??"";await this._hass.callService("wateringhub","delete_program",{id:n}),this._showToast(this._t("config.deleted"))})}_newWaterSupply(){this._editingWaterSupply={id:"",name:"",isNew:!0}}_editWaterSupply(e){this._editingWaterSupply={...e,isNew:!1}}_cancelWaterSupply(){this._editingWaterSupply=null}_updateWaterSupplyForm(e){this._editingWaterSupply=e}async _saveWaterSupply(e){let i=e.isNew?ge(e.name):e.id,n=e.isNew?"create_water_supply":"update_water_supply";await this._hass.callService("wateringhub",n,{id:i,name:e.name}),this._editingWaterSupply=null,this._showToast(this._t("config.saved"))}_deleteWaterSupply(e){this._requestConfirm(this._t("config.confirm_delete_water_supply"),this._t("config.delete"),async()=>{try{await this._hass.callService("wateringhub","delete_water_supply",{id:e}),this._showToast(this._t("config.deleted"))}catch{this._showToast(this._t("config.error_water_supply_in_use"))}})}_startEditValves(){this._editingValves=ue(T(this._hass))}_updateValvesForm(e){this._editingValves=e}async _saveValves(){this._editingValves&&(await this._hass.callService("wateringhub","set_valves",{valves:this._editingValves.map(e=>({entity_id:e.entity_id,name:e.name,water_supply_id:e.water_supply_id,zone_id:e.zone_id}))}),this._editingValves=null,this._showToast(this._t("config.saved")))}_cancelEditValves(){this._editingValves=null}_deleteValveFromTab(e){this._requestConfirm(this._t("config.confirm_delete_valve"),this._t("config.delete"),async()=>{let i=T(this._hass).filter(n=>n.entity_id!==e).map(n=>({entity_id:n.entity_id,name:n.name,water_supply_id:n.water_supply_id,zone_id:n.zone_id}));await this._hass.callService("wateringhub","set_valves",{valves:i}),this._showToast(this._t("config.deleted"))})}_zonesTabCallbacks(){return{editingSupply:this._editingWaterSupply,onNewSupply:()=>this._newWaterSupply(),onEditSupply:e=>this._editWaterSupply(e),onSaveSupply:e=>this._saveWaterSupply(e),onCancelSupply:()=>this._cancelWaterSupply(),onUpdateSupplyForm:e=>this._updateWaterSupplyForm(e),onDeleteSupply:e=>this._deleteWaterSupply(e),editingZone:this._editingZone,onNewZone:()=>this._newZone(),onEditZone:e=>this._editZone(e),onSaveZone:e=>this._saveZone(e),onCancelZone:()=>this._cancelZone(),onUpdateZoneForm:e=>this._updateZoneForm(e),onDeleteZone:e=>this._deleteZone(e),editingValves:this._editingValves,onStartEditValves:()=>this._startEditValves(),onUpdateValves:e=>this._updateValvesForm(e),onSaveValves:()=>this._saveValves(),onCancelValves:()=>this._cancelEditValves(),onDeleteValve:e=>this._deleteValveFromTab(e),expandedZones:this._expandedZones,onToggleZone:e=>this._toggleZone(e)}}render(){return!this._hass||!this._config?c`<ha-card>${this._t("loading")}</ha-card>`:c`
      <ha-card>
        <div class="header"><span class="title">${this._t("config.title")}</span></div>
        ${ft(this._activeTab,e=>this._setTab(e),this._t)}
        ${this._activeTab==="programs"?Ze(this._hass,this._editingProgram,e=>this._editProgram(e),e=>this._deleteProgram(e),()=>this._newProgram(),e=>this._saveProgram(e),()=>this._cancelProgram(),e=>this._updateProgramForm(e),this._t):""}
        ${this._activeTab==="zones"?Ce(this._hass,this._zonesTabCallbacks(),this._t):""}
        ${this._toast?c`<div class="toast">${this._toast}</div>`:m}
        ${j(!!this._confirmAction,this._confirmMessage,this._confirmLabel,()=>this._executeConfirm(),()=>this._cancelConfirm(),this._t)}
      </ha-card>
    `}};y.styles=[V,gt],v([f()],y.prototype,"_config",2),v([f()],y.prototype,"_hass",2),v([f()],y.prototype,"_activeTab",2),v([f()],y.prototype,"_editingZone",2),v([f()],y.prototype,"_toast",2),v([f()],y.prototype,"_confirmMessage",2),v([f()],y.prototype,"_confirmLabel",2),v([f()],y.prototype,"_confirmAction",2),v([f()],y.prototype,"_editingProgram",2),v([f()],y.prototype,"_editingWaterSupply",2),v([f()],y.prototype,"_editingValves",2),v([f()],y.prototype,"_expandedZones",2),y=v([z("wateringhub-config-card")],y);globalThis.customCards=globalThis.customCards||[];globalThis.customCards.push({type:"wateringhub-config-card",name:"WateringHub Config Card",description:"Configuration card for WateringHub zones and programs"});
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
