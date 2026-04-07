var pt=Object.defineProperty;var ut=Object.getOwnPropertyDescriptor;var v=(r,e,t,n)=>{for(var i=n>1?void 0:n?ut(e,t):e,o=r.length-1,s;o>=0;o--)(s=r[o])&&(i=(n?s(e,t,i):s(i))||i);return n&&i&&pt(e,t,i),i};var L=globalThis,U=L.ShadowRoot&&(L.ShadyCSS===void 0||L.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,se=Symbol(),$e=new WeakMap,M=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==se)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(U&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=$e.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&$e.set(t,e))}return e}toString(){return this.cssText}},xe=r=>new M(typeof r=="string"?r:r+"",void 0,se),A=(r,...e)=>{let t=r.length===1?r[0]:e.reduce((n,i,o)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[o+1],r[0]);return new M(t,r,se)},we=(r,e)=>{if(U)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let n=document.createElement("style"),i=L.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=t.cssText,r.appendChild(n)}},ae=U?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return xe(t)})(r):r;var{is:mt,defineProperty:gt,getOwnPropertyDescriptor:ht,getOwnPropertyNames:vt,getOwnPropertySymbols:ft,getPrototypeOf:_t}=Object,j=globalThis,Se=j.trustedTypes,yt=Se?Se.emptyScript:"",bt=j.reactiveElementPolyfillSupport,H=(r,e)=>r,I={toAttribute(r,e){switch(e){case Boolean:r=r?yt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},F=(r,e)=>!mt(r,e),Ae={attribute:!0,type:String,converter:I,reflect:!1,useDefault:!1,hasChanged:F};Symbol.metadata??=Symbol("metadata"),j.litPropertyMetadata??=new WeakMap;var x=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Ae){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),i=this.getPropertyDescriptor(e,n,t);i!==void 0&&gt(this.prototype,e,i)}}static getPropertyDescriptor(e,t,n){let{get:i,set:o}=ht(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get:i,set(s){let l=i?.call(this);o?.call(this,s),this.requestUpdate(e,l,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ae}static _$Ei(){if(this.hasOwnProperty(H("elementProperties")))return;let e=_t(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(H("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(H("properties"))){let t=this.properties,n=[...vt(t),...ft(t)];for(let i of n)this.createProperty(i,t[i])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[n,i]of t)this.elementProperties.set(n,i)}this._$Eh=new Map;for(let[t,n]of this.elementProperties){let i=this._$Eu(t,n);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let i of n)t.unshift(ae(i))}else e!==void 0&&t.push(ae(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return we(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,n);if(i!==void 0&&n.reflect===!0){let o=(n.converter?.toAttribute!==void 0?n.converter:I).toAttribute(t,n.type);this._$Em=e,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(e,t){let n=this.constructor,i=n._$Eh.get(e);if(i!==void 0&&this._$Em!==i){let o=n.getPropertyOptions(i),s=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:I;this._$Em=i;let l=s.fromAttribute(t,o.type);this[i]=l??this._$Ej?.get(i)??l,this._$Em=null}}requestUpdate(e,t,n,i=!1,o){if(e!==void 0){let s=this.constructor;if(i===!1&&(o=this[e]),n??=s.getPropertyOptions(e),!((n.hasChanged??F)(o,t)||n.useDefault&&n.reflect&&o===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:i,wrapped:o},s){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),o!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[i,o]of n){let{wrapped:s}=o,l=this[i];s!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,o,l)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[H("elementProperties")]=new Map,x[H("finalized")]=new Map,bt?.({ReactiveElement:x}),(j.reactiveElementVersions??=[]).push("2.1.2");var ce=globalThis,Te=r=>r,B=ce.trustedTypes,Ee=B?B.createPolicy("lit-html",{createHTML:r=>r}):void 0,de="$lit$",w=`lit$${Math.random().toFixed(9).slice(2)}$`,pe="?"+w,$t=`<${pe}>`,P=document,Z=()=>P.createComment(""),q=r=>r===null||typeof r!="object"&&typeof r!="function",ue=Array.isArray,Ce=r=>ue(r)||typeof r?.[Symbol.iterator]=="function",le=`[ 	
\f\r]`,D=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Pe=/-->/g,ze=/>/g,T=RegExp(`>|${le}(?:([^\\s"'>=/]+)(${le}*=${le}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ke=/'/g,Ne=/"/g,Me=/^(?:script|style|textarea|title)$/i,me=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),c=me(1),qt=me(2),Ot=me(3),z=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),Re=new WeakMap,E=P.createTreeWalker(P,129);function He(r,e){if(!ue(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ee!==void 0?Ee.createHTML(e):e}var Ie=(r,e)=>{let t=r.length-1,n=[],i,o=e===2?"<svg>":e===3?"<math>":"",s=D;for(let l=0;l<t;l++){let a=r[l],d,m,p=-1,g=0;for(;g<a.length&&(s.lastIndex=g,m=s.exec(a),m!==null);)g=s.lastIndex,s===D?m[1]==="!--"?s=Pe:m[1]!==void 0?s=ze:m[2]!==void 0?(Me.test(m[2])&&(i=RegExp("</"+m[2],"g")),s=T):m[3]!==void 0&&(s=T):s===T?m[0]===">"?(s=i??D,p=-1):m[1]===void 0?p=-2:(p=s.lastIndex-m[2].length,d=m[1],s=m[3]===void 0?T:m[3]==='"'?Ne:ke):s===Ne||s===ke?s=T:s===Pe||s===ze?s=D:(s=T,i=void 0);let h=s===T&&r[l+1].startsWith("/>")?" ":"";o+=s===D?a+$t:p>=0?(n.push(d),a.slice(0,p)+de+a.slice(p)+w+h):a+w+(p===-2?l:h)}return[He(r,o+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]},O=class r{constructor({strings:e,_$litType$:t},n){let i;this.parts=[];let o=0,s=0,l=e.length-1,a=this.parts,[d,m]=Ie(e,t);if(this.el=r.createElement(d,n),E.currentNode=this.el.content,t===2||t===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(i=E.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(let p of i.getAttributeNames())if(p.endsWith(de)){let g=m[s++],h=i.getAttribute(p).split(w),_=/([.?@])?(.*)/.exec(g);a.push({type:1,index:o,name:_[2],strings:h,ctor:_[1]==="."?J:_[1]==="?"?G:_[1]==="@"?Y:N}),i.removeAttribute(p)}else p.startsWith(w)&&(a.push({type:6,index:o}),i.removeAttribute(p));if(Me.test(i.tagName)){let p=i.textContent.split(w),g=p.length-1;if(g>0){i.textContent=B?B.emptyScript:"";for(let h=0;h<g;h++)i.append(p[h],Z()),E.nextNode(),a.push({type:2,index:++o});i.append(p[g],Z())}}}else if(i.nodeType===8)if(i.data===pe)a.push({type:2,index:o});else{let p=-1;for(;(p=i.data.indexOf(w,p+1))!==-1;)a.push({type:7,index:o}),p+=w.length-1}o++}}static createElement(e,t){let n=P.createElement("template");return n.innerHTML=e,n}};function k(r,e,t=r,n){if(e===z)return e;let i=n!==void 0?t._$Co?.[n]:t._$Cl,o=q(e)?void 0:e._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),o===void 0?i=void 0:(i=new o(r),i._$AT(r,t,n)),n!==void 0?(t._$Co??=[])[n]=i:t._$Cl=i),i!==void 0&&(e=k(r,i._$AS(r,e.values),i,n)),e}var K=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,i=(e?.creationScope??P).importNode(t,!0);E.currentNode=i;let o=E.nextNode(),s=0,l=0,a=n[0];for(;a!==void 0;){if(s===a.index){let d;a.type===2?d=new R(o,o.nextSibling,this,e):a.type===1?d=new a.ctor(o,a.name,a.strings,this,e):a.type===6&&(d=new Q(o,this,e)),this._$AV.push(d),a=n[++l]}s!==a?.index&&(o=E.nextNode(),s++)}return E.currentNode=P,i}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},R=class r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,i){this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=k(this,e,t),q(e)?e===u||e==null||e===""?(this._$AH!==u&&this._$AR(),this._$AH=u):e!==this._$AH&&e!==z&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ce(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==u&&q(this._$AH)?this._$AA.nextSibling.data=e:this.T(P.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,i=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=O.createElement(He(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===i)this._$AH.p(t);else{let o=new K(i,this),s=o.u(this.options);o.p(t),this.T(s),this._$AH=o}}_$AC(e){let t=Re.get(e.strings);return t===void 0&&Re.set(e.strings,t=new O(e)),t}k(e){ue(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,i=0;for(let o of e)i===t.length?t.push(n=new r(this.O(Z()),this.O(Z()),this,this.options)):n=t[i],n._$AI(o),i++;i<t.length&&(this._$AR(n&&n._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let n=Te(e).nextSibling;Te(e).remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},N=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,i,o){this.type=1,this._$AH=u,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=u}_$AI(e,t=this,n,i){let o=this.strings,s=!1;if(o===void 0)e=k(this,e,t,0),s=!q(e)||e!==this._$AH&&e!==z,s&&(this._$AH=e);else{let l=e,a,d;for(e=o[0],a=0;a<o.length-1;a++)d=k(this,l[n+a],t,a),d===z&&(d=this._$AH[a]),s||=!q(d)||d!==this._$AH[a],d===u?e=u:e!==u&&(e+=(d??"")+o[a+1]),this._$AH[a]=d}s&&!i&&this.j(e)}j(e){e===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},J=class extends N{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===u?void 0:e}},G=class extends N{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==u)}},Y=class extends N{constructor(e,t,n,i,o){super(e,t,n,i,o),this.type=5}_$AI(e,t=this){if((e=k(this,e,t,0)??u)===z)return;let n=this._$AH,i=e===u&&n!==u||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,o=e!==u&&(n===u||i);i&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Q=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){k(this,e)}},De={M:de,P:w,A:pe,C:1,L:Ie,R:K,D:Ce,V:k,I:R,H:N,N:G,U:Y,B:J,F:Q},xt=ce.litHtmlPolyfillSupport;xt?.(O,R),(ce.litHtmlVersions??=[]).push("3.3.2");var Ze=(r,e,t)=>{let n=t?.renderBefore??e,i=n._$litPart$;if(i===void 0){let o=t?.renderBefore??null;n._$litPart$=i=new R(e.insertBefore(Z(),o),o,void 0,t??{})}return i._$AI(r),i};var ge=globalThis,b=class extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ze(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return z}};b._$litElement$=!0,b.finalized=!0,ge.litElementHydrateSupport?.({LitElement:b});var wt=ge.litElementPolyfillSupport;wt?.({LitElement:b});(ge.litElementVersions??=[]).push("4.2.2");var W=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};var St={attribute:!0,type:String,converter:I,reflect:!1,hasChanged:F},At=(r=St,e,t)=>{let{kind:n,metadata:i}=t,o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),n==="setter"&&((r=Object.create(r)).wrapped=!0),o.set(t.name,r),n==="accessor"){let{name:s}=t;return{set(l){let a=e.get.call(this);e.set.call(this,l),this.requestUpdate(s,a,r,!0,l)},init(l){return l!==void 0&&this.C(s,void 0,r,l),l}}}if(n==="setter"){let{name:s}=t;return function(l){let a=this[s];e.call(this,l),this.requestUpdate(s,a,r,!0,l)}}throw Error("Unsupported decorator location: "+n)};function qe(r){return(e,t)=>typeof t=="object"?At(r,e,t):((n,i,o)=>{let s=i.hasOwnProperty(o);return i.constructor.createProperty(o,n),s?Object.getOwnPropertyDescriptor(i,o):void 0})(r,e,t)}function f(r){return qe({...r,state:!0,attribute:!1})}var Oe={"status.idle":"Idle","status.running":"Running","status.error":"Error",stop_all:"Stop All",next:"Next",last:"Last",no_programs:"No programs found",loading:"Loading...","time.just_now":"just now","time.minutes_ago":"{count}m ago","time.hours_ago":"{count}h ago","time.days_ago":"{count}d ago","time.today_at":"today at {time}","time.tomorrow_at":"tomorrow at {time}","time.in_days":"in {count}d","time.never":"Never","time.no_schedule":"No active program","status.running_program":"Running: {name}",stop_confirm:"Stop all watering?","schedule.daily":"Every day at {time}","schedule.every_n_days":"Every {n} days at {time}","schedule.weekdays":"{days} at {time}","recap.total_duration":"Total duration: {duration} min","days.mon":"Mon","days.tue":"Tue","days.wed":"Wed","days.thu":"Thu","days.fri":"Fri","days.sat":"Sat","days.sun":"Sun","running.zone":"Zone: {name}","running.valve":"Valve: {name}","running.remaining":"{time} remaining","running.progress":"Valve {done} of {total}","running.global_progress":"Overall progress","error.program":"Error \u2014 {name}","error.auto_stopped":"All valves have been automatically closed.","config.tab_valves":"Valves","config.tab_zones":"Zones","config.tab_programs":"Programs","config.no_valves":"No valves configured","config.no_zones":"No zones created","config.no_programs":"No programs created","config.new_zone":"New zone","config.new_program":"New program","config.name":"Name","config.id":"ID","config.save":"Save","config.cancel":"Cancel","config.delete":"Delete","config.edit":"Edit","config.confirm_delete_zone":"Delete this zone?","config.confirm_delete_program":"Delete this program?","config.schedule_type":"Schedule type","config.schedule_time":"Time","config.schedule_every_n":"Every N days","config.schedule_days":"Days","config.select_valves":"Select valves","config.select_zones":"Select zones","config.duration_min":"Duration (min)","config.valve_entity":"Entity","config.total_duration":"Total: {duration} min","config.title":"WateringHub"};var Ve={"status.idle":"En attente","status.running":"Arrosage en cours","status.error":"Erreur",stop_all:"Tout arr\xEAter",next:"Prochain",last:"Dernier",no_programs:"Aucun programme trouv\xE9",loading:"Chargement...","time.just_now":"\xE0 l'instant","time.minutes_ago":"il y a {count} min","time.hours_ago":"il y a {count}h","time.days_ago":"il y a {count}j","time.today_at":"aujourd'hui \xE0 {time}","time.tomorrow_at":"demain \xE0 {time}","time.in_days":"dans {count}j","time.never":"Jamais","time.no_schedule":"Aucun programme actif","status.running_program":"En cours : {name}",stop_confirm:"Arr\xEAter tout l'arrosage ?","schedule.daily":"Tous les jours \xE0 {time}","schedule.every_n_days":"Tous les {n} jours \xE0 {time}","schedule.weekdays":"{days} \xE0 {time}","recap.total_duration":"Dur\xE9e totale : {duration} min","days.mon":"Lun","days.tue":"Mar","days.wed":"Mer","days.thu":"Jeu","days.fri":"Ven","days.sat":"Sam","days.sun":"Dim","running.zone":"Zone : {name}","running.valve":"Vanne : {name}","running.remaining":"{time} restant","running.progress":"Vanne {done} sur {total}","running.global_progress":"Progression globale","error.program":"Erreur \u2014 {name}","error.auto_stopped":"Toutes les vannes ont \xE9t\xE9 ferm\xE9es automatiquement.","config.tab_valves":"Vannes","config.tab_zones":"Zones","config.tab_programs":"Programmes","config.no_valves":"Aucune vanne configur\xE9e","config.no_zones":"Aucune zone cr\xE9\xE9e","config.no_programs":"Aucun programme cr\xE9\xE9","config.new_zone":"Nouvelle zone","config.new_program":"Nouveau programme","config.name":"Nom","config.id":"Identifiant","config.save":"Sauvegarder","config.cancel":"Annuler","config.delete":"Supprimer","config.edit":"Modifier","config.confirm_delete_zone":"Supprimer cette zone ?","config.confirm_delete_program":"Supprimer ce programme ?","config.schedule_type":"Type de planification","config.schedule_time":"Heure","config.schedule_every_n":"Tous les N jours","config.schedule_days":"Jours","config.select_valves":"S\xE9lectionner les vannes","config.select_zones":"S\xE9lectionner les zones","config.duration_min":"Dur\xE9e (min)","config.valve_entity":"Entit\xE9","config.total_duration":"Total : {duration} min","config.title":"WateringHub"};var he={en:Oe,fr:Ve};function ee(r){let e=r?.toLowerCase().startsWith("fr")?"fr":"en",t=he[e]??he.en;return(n,i)=>{let o=t[n]??he.en[n]??n;return i&&(o=o.replace(/\{(\w+)\}/g,(s,l)=>String(i[l]??s))),o}}var te=A`
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
`;var Le=A`
  /* Status badge */
  .status-row {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 20px;
    flex-wrap: wrap;
  }
  .badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 14px;
    border-radius: 12px;
    font-size: 13px;
    font-weight: 500;
    color: white;
  }
  .badge-idle {
    background: var(--success-color);
  }
  .badge-running {
    background: var(--warning-color);
    animation: pulse 2s ease-in-out infinite;
  }
  .badge-error {
    background: var(--error-color);
  }
  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.7;
    }
  }
  .info-item {
    font-size: 13px;
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

  /* Running view */
  .running-view {
    border: 1px solid var(--divider-color);
    border-radius: 12px;
    padding: 16px;
    margin-bottom: 20px;
  }
  .running-zone {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    font-weight: 500;
    color: var(--primary-text-color);
    margin-bottom: 12px;
  }
  .running-zone ha-icon {
    --mdc-icon-size: 18px;
    color: var(--secondary-text-color);
  }
  .running-valve-row {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    color: var(--primary-text-color);
    margin-bottom: 8px;
  }
  .running-valve-row ha-icon {
    --mdc-icon-size: 18px;
    color: var(--primary-color);
  }
  .running-valve-name {
    flex: 1;
  }
  .running-valve-time {
    font-size: 13px;
    font-weight: 600;
    color: var(--primary-color);
    white-space: nowrap;
  }
  .running-bar-section {
    margin-bottom: 16px;
  }
  .running-bar {
    height: 8px;
    border-radius: 4px;
    background: var(--divider-color);
    overflow: hidden;
  }
  .running-bar-fill {
    height: 100%;
    border-radius: 4px;
    background: var(--primary-color);
  }
  .running-bar-fill.global {
    background: var(--warning-color);
  }
  .running-global {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .running-global-label {
    font-size: 12px;
    color: var(--secondary-text-color);
  }

  /* Valve sequence */
  .valve-sequence {
    margin-bottom: 12px;
  }
  .seq-zone {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    font-weight: 500;
    color: var(--primary-text-color);
    padding: 8px 0 4px;
  }
  .seq-zone ha-icon {
    --mdc-icon-size: 16px;
    color: var(--secondary-text-color);
  }
  .seq-valve {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 0 6px 24px;
    font-size: 13px;
  }
  .seq-valve ha-icon {
    --mdc-icon-size: 18px;
    flex-shrink: 0;
  }
  .seq-valve-name {
    flex: 1;
  }
  .seq-valve-info {
    font-size: 12px;
    white-space: nowrap;
  }
  .seq-done {
    color: var(--secondary-text-color);
  }
  .seq-done ha-icon {
    color: var(--success-color);
  }
  .seq-running {
    color: var(--primary-text-color);
    font-weight: 500;
  }
  .seq-running ha-icon {
    color: var(--primary-color);
  }
  .seq-running .seq-valve-info {
    font-weight: 600;
    color: var(--primary-color);
  }
  .seq-pending {
    color: var(--secondary-text-color);
  }
  .seq-pending ha-icon {
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

  /* Stop button */
  .stop-btn {
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
  .stop-btn:hover {
    opacity: 0.85;
  }
  .stop-btn:active {
    opacity: 0.7;
  }
  .stop-btn:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;function re(r){return Object.keys(r.states).filter(e=>e.startsWith("switch.wateringhub_"))}function Ue(r,e){for(let t of e){let n=r.states[t];if(n?.state==="on")return C(n,t)}return null}function C(r,e){return typeof r?.attributes.friendly_name=="string"?r.attributes.friendly_name:e}function V(r){return r.states["sensor.wateringhub_status"]?.state??"idle"}function je(r,e,t){if(r==="running"&&t)return e("status.running_program",{name:t});let n=e(`status.${r}`);return n===`status.${r}`?e("status.idle"):n}function Fe(r){let e=r.states["sensor.wateringhub_status"];if(e?.state!=="error")return null;let t=e.attributes,n=t.current_program,i=n?r.states[`switch.wateringhub_${n}`]:void 0;return{programName:C(i,n??""),errorMessage:t.error_message??""}}function ne(r){let e=r.states["sensor.wateringhub_status"];if(e?.state!=="running")return null;let t=e.attributes,n=t.current_valve_start,i=t.current_valve_duration??0,o=t.valves_done??0,s=t.valves_total??1,l=n?Math.max(0,(Date.now()-new Date(n).getTime())/1e3):0,a=Math.max(0,i-l),d=i>0?Math.min(100,l/i*100):0,m=(o+d/100)/s*100,p=(o+1)/s*100,g=Array.isArray(t.valves_sequence)?t.valves_sequence:[];return{programName:t.current_program??"",zoneName:t.current_zone_name??"",valveName:t.current_valve_name??"",valveStart:n??"",valveDuration:i,valvesDone:o,valvesTotal:s,progressPercent:t.progress_percent??0,remaining:a,valvePercent:d,finePercent:m,globalEndPercent:p,valveSequence:g}}function ve(r){if(r<=0)return"0:00";let e=Math.floor(r/3600),t=Math.floor(r%3600/60),n=Math.floor(r%60);return e>0?`${e}:${t.toString().padStart(2,"0")}:${n.toString().padStart(2,"0")}`:`${t}:${n.toString().padStart(2,"0")}`}function Be(r,e){if(!r)return"";switch(r.type){case"daily":return e("schedule.daily",{time:r.time});case"every_n_days":return e("schedule.every_n_days",{n:r.n??2,time:r.time});case"weekdays":{let t=(r.days??[]).map(n=>e(`days.${n}`)).join(", ");return e("schedule.weekdays",{days:t,time:r.time})}default:return r.time}}function Ke(r){return!r||r.state==="None"||r.state==="unknown"||r.state==="unavailable"}function fe(r,e,t,n){let i=r.states[e];if(Ke(i))return t("time.never");let o=new Date(i.state);if(Number.isNaN(o.getTime()))return i.state;let s=new Date,l=s.getTime()-o.getTime();if(l<0){let p=new Date(s.getFullYear(),s.getMonth(),s.getDate()),g=new Date(o.getFullYear(),o.getMonth(),o.getDate()),h=Math.round((g.getTime()-p.getTime())/(1e3*60*60*24)),_=o.toLocaleTimeString(n??[],{hour:"2-digit",minute:"2-digit"});return h===0?t("time.today_at",{time:_}):h===1?t("time.tomorrow_at",{time:_}):t("time.in_days",{count:h})}let a=Math.floor(l/(1e3*60));if(a<1)return t("time.just_now");if(a<60)return t("time.minutes_ago",{count:a});let d=Math.floor(a/60);if(d<24)return t("time.hours_ago",{count:d});let m=Math.floor(d/24);return t("time.days_ago",{count:m})}function Je(r,e,t){let n=r.states["sensor.wateringhub_next_run"];return Ke(n)?e("time.no_schedule"):fe(r,"sensor.wateringhub_next_run",e,t)}var Ge=r=>(...e)=>({_$litDirective$:r,values:e}),ie=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var{I:Zr}=De;var Pt={},Ye=(r,e=Pt)=>r._$AH=e;var _e=Ge(class extends ie{constructor(){super(...arguments),this.key=u}render(r,e){return this.key=r,e}update(r,[e,t]){return e!==this.key&&(Ye(r),this.key=e),t}});function Qe(r,e,t,n){return c`
    <div class="header">
      <span class="title">${r}</span>
      ${e?c`<button class="stop-btn" @click=${t}>${n("stop_all")}</button>`:u}
    </div>
  `}function We(r,e,t){let n=V(r),i=Ue(r,e);return c`
    <div class="status-row">
      <span class="badge badge-${n}"> ${je(n,t,i)} </span>
      <span class="info-item"> ${t("next")}: ${Je(r,t,r.language)} </span>
      <span class="info-item">
        ${t("last")}: ${fe(r,"sensor.wateringhub_last_run",t,r.language)}
      </span>
    </div>
  `}function Xe(r,e){let t=Fe(r);return t?c`
    <div class="error-view">
      <div class="error-title">
        <ha-icon icon="mdi:alert-circle"></ha-icon>
        ${e("error.program",{name:t.programName})}
      </div>
      ${t.errorMessage?c`<div class="error-message">${t.errorMessage}</div>`:u}
      <div class="error-auto-stopped">${e("error.auto_stopped")}</div>
    </div>
  `:c``}function et(r,e,t){let n=ne(r);return n?c`
    <div class="running-view">
      ${n.valveSequence.length>0?kt(n.valveSequence,n.remaining,t):zt(n,t)}

      <div class="running-bar-section">
        <div class="running-bar">
          ${_e(e,c`<div
              class="running-bar-fill"
              style="width: 100%; transition: width ${n.remaining}s linear"
            ></div>`)}
        </div>
      </div>

      <div class="running-global">
        <span class="running-global-label">
          ${t("running.progress",{done:n.valvesDone+1,total:n.valvesTotal})}
        </span>
        <div class="running-bar">
          ${_e(e,c`<div
              class="running-bar-fill global"
              style="width: ${n.globalEndPercent}%; transition: width ${n.remaining}s linear"
            ></div>`)}
        </div>
      </div>
    </div>
  `:c``}function zt(r,e){return c`
    <div class="running-zone">
      <ha-icon icon="mdi:map-marker"></ha-icon>
      ${e("running.zone",{name:r.zoneName})}
    </div>
    <div class="running-valve-row">
      <ha-icon icon="mdi:water"></ha-icon>
      <span class="running-valve-name">${r.valveName}</span>
      <span class="running-valve-time">
        ${e("running.remaining",{time:ve(r.remaining)})}
      </span>
    </div>
  `}function kt(r,e,t){let n=[];for(let i of r){let o=n[n.length-1];o?.zoneName===i.zone_name?o.valves.push(i):n.push({zoneName:i.zone_name,valves:[i]})}return c`
    <div class="valve-sequence">
      ${n.map(i=>c`
          <div class="seq-zone">
            <ha-icon icon="mdi:map-marker"></ha-icon>
            <span>${i.zoneName}</span>
          </div>
          ${i.valves.map(o=>{let l={done:"mdi:check-circle",running:"mdi:water",pending:"mdi:clock-outline"}[o.status],a=Math.ceil(o.duration/60);return c`
              <div class="seq-valve seq-${o.status}">
                <ha-icon icon="${l}"></ha-icon>
                <span class="seq-valve-name">${o.valve_name}</span>
                <span class="seq-valve-info">
                  ${o.status==="running"?t("running.remaining",{time:ve(e)}):`${a} min`}
                </span>
              </div>
            `})}
        `)}
    </div>
  `}function tt(r,e,t,n,i,o){return e.length===0?c`<div class="empty-state">${o("no_programs")}</div>`:c`${e.map(s=>{let l=r.states[s];if(!l)return u;let a=l.state==="on",d=a||t===s,m=C(l,s);return c`
      <div class="program-wrapper">
        <div class="program">
          <div class="program-header" @click=${()=>n(s)}>
            <ha-icon class="chevron ${d?"open":""}" icon="mdi:chevron-down"></ha-icon>
            ${a?c`<div class="active-dot"></div>`:u}
            <span class="program-name ${a?"active":""}">${m}</span>
          </div>
          <ha-switch .checked=${a} @change=${()=>i(s)}></ha-switch>
        </div>
        ${Nt(l.attributes,d,o)}
      </div>
    `})}`}function Nt(r,e,t){let n=r.schedule,i=r.zones??[],o=r.total_duration;return c`
    <div class="program-recap ${e?"open":""}">
      ${n?c`<div class="recap-schedule">
            <ha-icon icon="mdi:calendar-clock"></ha-icon>
            ${Be(n,t)}
          </div>`:u}
      ${i.map(s=>c`
          <div class="recap-zone">
            <ha-icon icon="mdi:map-marker"></ha-icon>
            ${s.zone_name}
          </div>
          ${s.valves.map(l=>c`
              <div class="recap-valve">
                <ha-icon icon="mdi:water"></ha-icon>
                ${l.valve_name} — ${l.duration} min
              </div>
            `)}
        `)}
      ${o?c`<div class="recap-total">
            <ha-icon icon="mdi:timer-outline"></ha-icon>
            ${t("recap.total_duration",{duration:o})}
          </div>`:u}
    </div>
  `}var y=class extends b{constructor(){super(...arguments);this._programEntities=[];this._expandedProgram=null;this._tick=0;this._valveKey="";this._t=t=>t;this._timerInterval=null}setConfig(t){this._config=t}set hass(t){let n=this._hass;this._hass=t,this._t=ee(t.language),n?.states!==t.states&&(this._programEntities=re(t));let i=V(t);this._updateTimer(i);let o=i==="running"?ne(t):null,s=o?`${o.valveStart}`:"";s!==this._valveKey&&(this._valveKey=s)}disconnectedCallback(){super.disconnectedCallback(),this._clearTimer()}_updateTimer(t){t==="running"&&!this._timerInterval?this._timerInterval=setInterval(()=>{this._tick++},1e3):t!=="running"&&this._timerInterval&&this._clearTimer()}_clearTimer(){this._timerInterval&&(clearInterval(this._timerInterval),this._timerInterval=null)}getCardSize(){return 3}_toggleExpand(t){this._expandedProgram=this._expandedProgram===t?null:t}_toggleProgram(t){let n=this._hass.states[t];if(!n)return;let i=n.state==="on"?"turn_off":"turn_on";this._hass.callService("switch",i,{entity_id:t})}_stopAll(){confirm(this._t("stop_confirm"))&&this._hass.callService("wateringhub","stop_all",{})}render(){if(!this._hass||!this._config)return c`<ha-card>${this._t("loading")}</ha-card>`;let t=V(this._hass),n=this._config.title??"WateringHub";return c`
      <ha-card>
        ${Qe(n,t==="running",()=>this._stopAll(),this._t)}
        ${We(this._hass,this._programEntities,this._t)}
        ${Xe(this._hass,this._t)}
        ${et(this._hass,this._valveKey,this._t)}
        ${tt(this._hass,this._programEntities,this._expandedProgram,i=>this._toggleExpand(i),i=>this._toggleProgram(i),this._t)}
      </ha-card>
    `}};y.styles=[te,Le],v([f()],y.prototype,"_config",2),v([f()],y.prototype,"_hass",2),v([f()],y.prototype,"_programEntities",2),v([f()],y.prototype,"_expandedProgram",2),v([f()],y.prototype,"_tick",2),v([f()],y.prototype,"_valveKey",2),y=v([W("wateringhub-card")],y);globalThis.customCards=globalThis.customCards||[];globalThis.customCards.push({type:"wateringhub-card",name:"WateringHub Card",description:"Watering management card for WateringHub"});var rt=A`
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
`;function oe(r){return r.states["sensor.wateringhub_status"]?.attributes.available_valves??[]}function ye(r){return r.states["sensor.wateringhub_status"]?.attributes.zones??[]}function be(r){return r.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"_").replace(/^_|_$/g,"")}function ot(r,e,t){let n=[{id:"programs",label:t("config.tab_programs")},{id:"zones",label:t("config.tab_zones")},{id:"valves",label:t("config.tab_valves")}];return c`
    <div class="tabs">
      ${n.map(i=>c`
          <div
            class="tab ${r===i.id?"active":""}"
            @click=${()=>e(i.id)}
          >
            ${i.label}
          </div>
        `)}
    </div>
  `}function st(r,e){let t=oe(r);return t.length===0?c`<div class="empty-state">${e("config.no_valves")}</div>`:c`
    ${t.map(n=>c`
        <div class="list-item">
          <div class="list-item-header">
            <div>
              <div class="list-item-name">${n.name}</div>
              <div class="list-item-sub">${e("config.valve_entity")}: ${n.entity_id}</div>
            </div>
          </div>
        </div>
      `)}
  `}function at(r,e,t,n,i,o,s,l,a){let d=ye(r),m=oe(r);return c`
    ${d.map(p=>e&&e.id===p.id?nt(e,m,o,s,l,a):Rt(p,m,t,n,a))}
    ${e?.isNew?nt(e,m,o,s,l,a):u}
    ${e?u:c`<button class="add-btn" @click=${i}>+ ${a("config.new_zone")}</button>`}
    ${d.length===0&&!e?c`<div class="empty-state">${a("config.no_zones")}</div>`:u}
  `}function Rt(r,e,t,n,i){let o=r.valves.map(s=>e.find(l=>l.id===s)?.name??s).join(", ");return c`
    <div class="list-item">
      <div class="list-item-header">
        <div>
          <div class="list-item-name">${r.name}</div>
          <div class="list-item-sub">${o}</div>
        </div>
        <div class="list-item-actions">
          <button class="action-btn" @click=${()=>t(r)} title="${i("config.edit")}">
            <ha-icon icon="mdi:pencil"></ha-icon>
          </button>
          <button
            class="action-btn delete"
            @click=${()=>n(r.id)}
            title="${i("config.delete")}"
          >
            <ha-icon icon="mdi:delete"></ha-icon>
          </button>
        </div>
      </div>
    </div>
  `}function nt(r,e,t,n,i,o){return c`
    <div class="inline-form">
      <div class="form-row">
        <label class="form-label">${o("config.name")}</label>
        <input
          class="form-input"
          .value=${r.name}
          @input=${s=>i({...r,name:s.target.value})}
        />
      </div>
      <div class="form-row">
        <label class="form-label">${o("config.select_valves")}</label>
        <div class="checkbox-list">
          ${e.map(s=>{let l=r.valves.includes(s.id);return c`
              <label class="checkbox-item">
                <input
                  type="checkbox"
                  .checked=${l}
                  @change=${()=>{let a=l?r.valves.filter(d=>d!==s.id):[...r.valves,s.id];i({...r,valves:a})}}
                />
                ${s.name}
              </label>
            `})}
        </div>
      </div>
      <div class="form-actions">
        <button class="btn btn-cancel" @click=${n}>${o("config.cancel")}</button>
        <button class="btn btn-primary" @click=${()=>t(r)}>${o("config.save")}</button>
      </div>
    </div>
  `}function lt(r,e,t,n,i,o,s,l,a){let d=re(r),m=ye(r),p=oe(r);return c`
    ${d.map(g=>{let h=r.states[g];if(!h)return u;let _=h.attributes.program_id??"";return e&&e.id===_?it(e,m,p,o,s,l,a):Ct(h,g,t,n,a)})}
    ${e?.isNew?it(e,m,p,o,s,l,a):u}
    ${e?u:c`<button class="add-btn" @click=${i}>+ ${a("config.new_program")}</button>`}
    ${d.length===0&&!e?c`<div class="empty-state">${a("config.no_programs")}</div>`:u}
  `}function Ct(r,e,t,n,i){let o=C(r,e),s=r.attributes.schedule,l=r.attributes.total_duration,a=s?`${s.type} \u2014 ${s.time}`:"";return c`
    <div class="list-item">
      <div class="list-item-header">
        <div>
          <div class="list-item-name">${o}</div>
          <div class="list-item-sub">
            ${a}${l?` \u2014 ${l} min`:""}
          </div>
        </div>
        <div class="list-item-actions">
          <button class="action-btn" @click=${()=>t(e)} title="${i("config.edit")}">
            <ha-icon icon="mdi:pencil"></ha-icon>
          </button>
          <button
            class="action-btn delete"
            @click=${()=>n(e)}
            title="${i("config.delete")}"
          >
            <ha-icon icon="mdi:delete"></ha-icon>
          </button>
        </div>
      </div>
    </div>
  `}function it(r,e,t,n,i,o,s){let l=r.zones.reduce((a,d)=>a+d.valves.reduce((m,p)=>m+(p.duration||0),0),0);return c`
    <div class="inline-form">
      <!-- Name -->
      <div class="form-row">
        <label class="form-label">${s("config.name")}</label>
        <input
          class="form-input"
          .value=${r.name}
          @input=${a=>o({...r,name:a.target.value})}
        />
      </div>

      <!-- Schedule -->
      <div class="form-row-inline">
        <div>
          <label class="form-label">${s("config.schedule_type")}</label>
          <select
            class="form-select"
            .value=${r.schedule.type}
            @change=${a=>o({...r,schedule:{...r.schedule,type:a.target.value}})}
          >
            <option value="daily">Daily</option>
            <option value="every_n_days">Every N days</option>
            <option value="weekdays">Weekdays</option>
          </select>
        </div>
        <div>
          <label class="form-label">${s("config.schedule_time")}</label>
          <input
            class="form-input"
            type="time"
            .value=${r.schedule.time}
            @input=${a=>o({...r,schedule:{...r.schedule,time:a.target.value}})}
          />
        </div>
      </div>

      ${r.schedule.type==="every_n_days"?c`
            <div class="form-row">
              <label class="form-label">${s("config.schedule_every_n")}</label>
              <input
                class="form-input"
                type="number"
                min="2"
                .value=${String(r.schedule.n??2)}
                @input=${a=>o({...r,schedule:{...r.schedule,n:parseInt(a.target.value)||2}})}
              />
            </div>
          `:u}
      ${r.schedule.type==="weekdays"?c`
            <div class="form-row">
              <label class="form-label">${s("config.schedule_days")}</label>
              <div class="checkbox-list" style="flex-direction:row; flex-wrap:wrap;">
                ${["mon","tue","wed","thu","fri","sat","sun"].map(a=>{let d=r.schedule.days?.includes(a)??!1;return c`
                    <label class="checkbox-item">
                      <input
                        type="checkbox"
                        .checked=${d}
                        @change=${()=>{let m=r.schedule.days??[],p=d?m.filter(g=>g!==a):[...m,a];o({...r,schedule:{...r.schedule,days:p}})}}
                      />
                      ${s(`days.${a}`)}
                    </label>
                  `})}
              </div>
            </div>
          `:u}

      <!-- Zones + valves with durations -->
      <div class="form-row">
        <label class="form-label">${s("config.select_zones")}</label>
        ${e.map(a=>{let d=r.zones.find(p=>p.zone_id===a.id),m=!!d;return c`
            <div class="form-zone-section">
              <label class="checkbox-item">
                <input
                  type="checkbox"
                  .checked=${m}
                  @change=${()=>{let p=m?r.zones.filter(g=>g.zone_id!==a.id):[...r.zones,{zone_id:a.id,valves:a.valves.map(g=>({valve_id:g,duration:10}))}];o({...r,zones:p})}}
                />
                <span class="form-zone-name">${a.name}</span>
              </label>
              ${m&&d?c`
                    ${d.valves.map(p=>{let g=t.find(h=>h.id===p.valve_id)?.name??p.valve_id;return c`
                        <div class="valve-duration-row">
                          <label>${g}</label>
                          <input
                            class="valve-duration-input"
                            type="number"
                            min="1"
                            .value=${String(p.duration)}
                            @input=${h=>{let _=parseInt(h.target.value)||1,ct=d.valves.map(S=>S.valve_id===p.valve_id?{...S,duration:_}:S),dt=r.zones.map(S=>S.zone_id===a.id?{...S,valves:ct}:S);o({...r,zones:dt})}}
                          />
                          <span>min</span>
                        </div>
                      `})}
                  `:u}
            </div>
          `})}
      </div>

      ${l>0?c`<div class="total-duration">
            ${s("config.total_duration",{duration:l})}
          </div>`:u}

      <div class="form-actions">
        <button class="btn btn-cancel" @click=${i}>${s("config.cancel")}</button>
        <button class="btn btn-primary" @click=${()=>n(r)}>${s("config.save")}</button>
      </div>
    </div>
  `}var $=class extends b{constructor(){super(...arguments);this._activeTab="programs";this._editingZone=null;this._editingProgram=null;this._t=t=>t}setConfig(t){this._config=t}set hass(t){this._hass=t,this._t=ee(t.language)}getCardSize(){return 5}_setTab(t){this._activeTab=t,this._editingZone=null,this._editingProgram=null}_newZone(){this._editingZone={id:"",name:"",valves:[],isNew:!0}}_editZone(t){this._editingZone={id:t.id,name:t.name,valves:[...t.valves],isNew:!1}}_cancelZone(){this._editingZone=null}_updateZoneForm(t){this._editingZone=t}async _saveZone(t){let n=t.isNew?be(t.name):t.id,i=t.isNew?"create_zone":"update_zone";await this._hass.callService("wateringhub",i,{id:n,name:t.name,valves:t.valves}),this._editingZone=null}async _deleteZone(t){confirm(this._t("config.confirm_delete_zone"))&&await this._hass.callService("wateringhub","delete_zone",{id:t})}_newProgram(){this._editingProgram={id:"",name:"",schedule:{type:"daily",time:"22:00"},zones:[],isNew:!0}}_editProgram(t){let n=this._hass.states[t];if(!n)return;let i=n.attributes,o=i.program_id??"",s=i.schedule??{type:"daily",time:"22:00"},l=(i.zones??[]).map(a=>({zone_id:a.zone_id,valves:a.valves.map(d=>({valve_id:d.valve_id,duration:d.duration}))}));this._editingProgram={id:o,name:typeof i.friendly_name=="string"?i.friendly_name:o,schedule:s,zones:l,isNew:!1}}_cancelProgram(){this._editingProgram=null}_updateProgramForm(t){this._editingProgram=t}async _saveProgram(t){let n=t.isNew?be(t.name):t.id,i=t.isNew?"create_program":"update_program";await this._hass.callService("wateringhub",i,{id:n,name:t.name,schedule:t.schedule,zones:t.zones.map(o=>({zone_id:o.zone_id,valves:o.valves.map(s=>({valve_id:s.valve_id,duration:s.duration}))}))}),this._editingProgram=null}async _deleteProgram(t){if(confirm(this._t("config.confirm_delete_program"))){let i=this._hass.states[t]?.attributes.program_id??"";await this._hass.callService("wateringhub","delete_program",{id:i})}}render(){return!this._hass||!this._config?c`<ha-card>${this._t("loading")}</ha-card>`:c`
      <ha-card>
        <div class="header"><span class="title">${this._t("config.title")}</span></div>
        ${ot(this._activeTab,t=>this._setTab(t),this._t)}
        ${this._activeTab==="valves"?st(this._hass,this._t):""}
        ${this._activeTab==="zones"?at(this._hass,this._editingZone,t=>this._editZone(t),t=>this._deleteZone(t),()=>this._newZone(),t=>this._saveZone(t),()=>this._cancelZone(),t=>this._updateZoneForm(t),this._t):""}
        ${this._activeTab==="programs"?lt(this._hass,this._editingProgram,t=>this._editProgram(t),t=>this._deleteProgram(t),()=>this._newProgram(),t=>this._saveProgram(t),()=>this._cancelProgram(),t=>this._updateProgramForm(t),this._t):""}
      </ha-card>
    `}};$.styles=[te,rt],v([f()],$.prototype,"_config",2),v([f()],$.prototype,"_hass",2),v([f()],$.prototype,"_activeTab",2),v([f()],$.prototype,"_editingZone",2),v([f()],$.prototype,"_editingProgram",2),$=v([W("wateringhub-config-card")],$);globalThis.customCards=globalThis.customCards||[];globalThis.customCards.push({type:"wateringhub-config-card",name:"WateringHub Config Card",description:"Configuration card for WateringHub zones and programs"});
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
lit-html/directive.js:
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
lit-html/directives/keyed.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive-helpers.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
