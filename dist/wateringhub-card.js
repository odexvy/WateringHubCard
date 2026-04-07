var at=Object.defineProperty;var lt=Object.getOwnPropertyDescriptor;var h=(n,t,e,r)=>{for(var o=r>1?void 0:r?lt(t,e):t,i=n.length-1,s;i>=0;i--)(s=n[i])&&(o=(r?s(t,e,o):s(o))||o);return r&&o&&at(t,e,o),o};var Y=globalThis,Q=Y.ShadowRoot&&(Y.ShadyCSS===void 0||Y.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,se=Symbol(),we=new WeakMap,L=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==se)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(Q&&t===void 0){let r=e!==void 0&&e.length===1;r&&(t=we.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&we.set(e,t))}return t}toString(){return this.cssText}},Se=n=>new L(typeof n=="string"?n:n+"",void 0,se),T=(n,...t)=>{let e=n.length===1?n[0]:t.reduce((r,o,i)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+n[i+1],n[0]);return new L(e,n,se)},Ae=(n,t)=>{if(Q)n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let r=document.createElement("style"),o=Y.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=e.cssText,n.appendChild(r)}},ae=Q?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(let r of t.cssRules)e+=r.cssText;return Se(e)})(n):n;var{is:ct,defineProperty:dt,getOwnPropertyDescriptor:pt,getOwnPropertyNames:mt,getOwnPropertySymbols:ut,getPrototypeOf:gt}=Object,X=globalThis,Ee=X.trustedTypes,vt=Ee?Ee.emptyScript:"",ht=X.reactiveElementPolyfillSupport,O=(n,t)=>n,j={toAttribute(n,t){switch(t){case Boolean:n=n?vt:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},W=(n,t)=>!ct(n,t),Te={attribute:!0,type:String,converter:j,reflect:!1,useDefault:!1,hasChanged:W};Symbol.metadata??=Symbol("metadata"),X.litPropertyMetadata??=new WeakMap;var P=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Te){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let r=Symbol(),o=this.getPropertyDescriptor(t,r,e);o!==void 0&&dt(this.prototype,t,o)}}static getPropertyDescriptor(t,e,r){let{get:o,set:i}=pt(this.prototype,t)??{get(){return this[e]},set(s){this[e]=s}};return{get:o,set(s){let l=o?.call(this);i?.call(this,s),this.requestUpdate(t,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Te}static _$Ei(){if(this.hasOwnProperty(O("elementProperties")))return;let t=gt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(O("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(O("properties"))){let e=this.properties,r=[...mt(e),...ut(e)];for(let o of r)this.createProperty(o,e[o])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[r,o]of e)this.elementProperties.set(r,o)}this._$Eh=new Map;for(let[e,r]of this.elementProperties){let o=this._$Eu(e,r);o!==void 0&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let r=new Set(t.flat(1/0).reverse());for(let o of r)e.unshift(ae(o))}else t!==void 0&&e.push(ae(t));return e}static _$Eu(t,e){let r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ae(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ET(t,e){let r=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,r);if(o!==void 0&&r.reflect===!0){let i=(r.converter?.toAttribute!==void 0?r.converter:j).toAttribute(e,r.type);this._$Em=t,i==null?this.removeAttribute(o):this.setAttribute(o,i),this._$Em=null}}_$AK(t,e){let r=this.constructor,o=r._$Eh.get(t);if(o!==void 0&&this._$Em!==o){let i=r.getPropertyOptions(o),s=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:j;this._$Em=o;let l=s.fromAttribute(e,i.type);this[o]=l??this._$Ej?.get(o)??l,this._$Em=null}}requestUpdate(t,e,r,o=!1,i){if(t!==void 0){let s=this.constructor;if(o===!1&&(i=this[t]),r??=s.getPropertyOptions(t),!((r.hasChanged??W)(i,e)||r.useDefault&&r.reflect&&i===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,r))))return;this.C(t,e,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:r,reflect:o,wrapped:i},s){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??e??this[t]),i!==!0||s!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(e=void 0),this._$AL.set(t,e)),o===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[o,i]of this._$Ep)this[o]=i;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[o,i]of r){let{wrapped:s}=i,l=this[o];s!==!0||this._$AL.has(o)||l===void 0||this.C(o,void 0,i,l)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(e)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};P.elementStyles=[],P.shadowRootOptions={mode:"open"},P[O("elementProperties")]=new Map,P[O("finalized")]=new Map,ht?.({ReactiveElement:P}),(X.reactiveElementVersions??=[]).push("2.1.2");var ge=globalThis,Pe=n=>n,ee=ge.trustedTypes,ze=ee?ee.createPolicy("lit-html",{createHTML:n=>n}):void 0,qe="$lit$",z=`lit$${Math.random().toFixed(9).slice(2)}$`,Ie="?"+z,ft=`<${Ie}>`,q=document,B=()=>q.createComment(""),J=n=>n===null||typeof n!="object"&&typeof n!="function",ve=Array.isArray,_t=n=>ve(n)||typeof n?.[Symbol.iterator]=="function",le=`[ 	
\f\r]`,U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ke=/-->/g,Ne=/>/g,R=RegExp(`>|${le}(?:([^\\s"'>=/]+)(${le}*=${le}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ce=/'/g,Re=/"/g,Ve=/^(?:script|style|textarea|title)$/i,he=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),c=he(1),Vt=he(2),Dt=he(3),I=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),Me=new WeakMap,M=q.createTreeWalker(q,129);function De(n,t){if(!ve(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return ze!==void 0?ze.createHTML(t):t}var yt=(n,t)=>{let e=n.length-1,r=[],o,i=t===2?"<svg>":t===3?"<math>":"",s=U;for(let l=0;l<e;l++){let a=n[l],d,u,p=-1,g=0;for(;g<a.length&&(s.lastIndex=g,u=s.exec(a),u!==null);)g=s.lastIndex,s===U?u[1]==="!--"?s=ke:u[1]!==void 0?s=Ne:u[2]!==void 0?(Ve.test(u[2])&&(o=RegExp("</"+u[2],"g")),s=R):u[3]!==void 0&&(s=R):s===R?u[0]===">"?(s=o??U,p=-1):u[1]===void 0?p=-2:(p=s.lastIndex-u[2].length,d=u[1],s=u[3]===void 0?R:u[3]==='"'?Re:Ce):s===Re||s===Ce?s=R:s===ke||s===Ne?s=U:(s=R,o=void 0);let v=s===R&&n[l+1].startsWith("/>")?" ":"";i+=s===U?a+ft:p>=0?(r.push(d),a.slice(0,p)+qe+a.slice(p)+z+v):a+z+(p===-2?l:v)}return[De(n,i+(n[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]},G=class n{constructor({strings:t,_$litType$:e},r){let o;this.parts=[];let i=0,s=0,l=t.length-1,a=this.parts,[d,u]=yt(t,e);if(this.el=n.createElement(d,r),M.currentNode=this.el.content,e===2||e===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(o=M.nextNode())!==null&&a.length<l;){if(o.nodeType===1){if(o.hasAttributes())for(let p of o.getAttributeNames())if(p.endsWith(qe)){let g=u[s++],v=o.getAttribute(p).split(z),_=/([.?@])?(.*)/.exec(g);a.push({type:1,index:i,name:_[2],strings:v,ctor:_[1]==="."?de:_[1]==="?"?pe:_[1]==="@"?me:H}),o.removeAttribute(p)}else p.startsWith(z)&&(a.push({type:6,index:i}),o.removeAttribute(p));if(Ve.test(o.tagName)){let p=o.textContent.split(z),g=p.length-1;if(g>0){o.textContent=ee?ee.emptyScript:"";for(let v=0;v<g;v++)o.append(p[v],B()),M.nextNode(),a.push({type:2,index:++i});o.append(p[g],B())}}}else if(o.nodeType===8)if(o.data===Ie)a.push({type:2,index:i});else{let p=-1;for(;(p=o.data.indexOf(z,p+1))!==-1;)a.push({type:7,index:i}),p+=z.length-1}i++}}static createElement(t,e){let r=q.createElement("template");return r.innerHTML=t,r}};function D(n,t,e=n,r){if(t===I)return t;let o=r!==void 0?e._$Co?.[r]:e._$Cl,i=J(t)?void 0:t._$litDirective$;return o?.constructor!==i&&(o?._$AO?.(!1),i===void 0?o=void 0:(o=new i(n),o._$AT(n,e,r)),r!==void 0?(e._$Co??=[])[r]=o:e._$Cl=o),o!==void 0&&(t=D(n,o._$AS(n,t.values),o,r)),t}var ce=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:r}=this._$AD,o=(t?.creationScope??q).importNode(e,!0);M.currentNode=o;let i=M.nextNode(),s=0,l=0,a=r[0];for(;a!==void 0;){if(s===a.index){let d;a.type===2?d=new K(i,i.nextSibling,this,t):a.type===1?d=new a.ctor(i,a.name,a.strings,this,t):a.type===6&&(d=new ue(i,this,t)),this._$AV.push(d),a=r[++l]}s!==a?.index&&(i=M.nextNode(),s++)}return M.currentNode=q,o}p(t){let e=0;for(let r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}},K=class n{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,r,o){this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=D(this,t,e),J(t)?t===m||t==null||t===""?(this._$AH!==m&&this._$AR(),this._$AH=m):t!==this._$AH&&t!==I&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):_t(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==m&&J(this._$AH)?this._$AA.nextSibling.data=t:this.T(q.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:r}=t,o=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=G.createElement(De(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===o)this._$AH.p(e);else{let i=new ce(o,this),s=i.u(this.options);i.p(e),this.T(s),this._$AH=i}}_$AC(t){let e=Me.get(t.strings);return e===void 0&&Me.set(t.strings,e=new G(t)),e}k(t){ve(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,r,o=0;for(let i of t)o===e.length?e.push(r=new n(this.O(B()),this.O(B()),this,this.options)):r=e[o],r._$AI(i),o++;o<e.length&&(this._$AR(r&&r._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let r=Pe(t).nextSibling;Pe(t).remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},H=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,o,i){this.type=1,this._$AH=m,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=m}_$AI(t,e=this,r,o){let i=this.strings,s=!1;if(i===void 0)t=D(this,t,e,0),s=!J(t)||t!==this._$AH&&t!==I,s&&(this._$AH=t);else{let l=t,a,d;for(t=i[0],a=0;a<i.length-1;a++)d=D(this,l[r+a],e,a),d===I&&(d=this._$AH[a]),s||=!J(d)||d!==this._$AH[a],d===m?t=m:t!==m&&(t+=(d??"")+i[a+1]),this._$AH[a]=d}s&&!o&&this.j(t)}j(t){t===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},de=class extends H{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===m?void 0:t}},pe=class extends H{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==m)}},me=class extends H{constructor(t,e,r,o,i){super(t,e,r,o,i),this.type=5}_$AI(t,e=this){if((t=D(this,t,e,0)??m)===I)return;let r=this._$AH,o=t===m&&r!==m||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,i=t!==m&&(r===m||o);o&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},ue=class{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){D(this,t)}};var bt=ge.litHtmlPolyfillSupport;bt?.(G,K),(ge.litHtmlVersions??=[]).push("3.3.2");var He=(n,t,e)=>{let r=e?.renderBefore??t,o=r._$litPart$;if(o===void 0){let i=e?.renderBefore??null;r._$litPart$=o=new K(t.insertBefore(B(),i),i,void 0,e??{})}return o._$AI(n),o};var fe=globalThis,$=class extends P{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=He(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return I}};$._$litElement$=!0,$.finalized=!0,fe.litElementHydrateSupport?.({LitElement:$});var xt=fe.litElementPolyfillSupport;xt?.({LitElement:$});(fe.litElementVersions??=[]).push("4.2.2");var k=n=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(n,t)}):customElements.define(n,t)};var $t={attribute:!0,type:String,converter:j,reflect:!1,hasChanged:W},wt=(n=$t,t,e)=>{let{kind:r,metadata:o}=e,i=globalThis.litPropertyMetadata.get(o);if(i===void 0&&globalThis.litPropertyMetadata.set(o,i=new Map),r==="setter"&&((n=Object.create(n)).wrapped=!0),i.set(e.name,n),r==="accessor"){let{name:s}=e;return{set(l){let a=t.get.call(this);t.set.call(this,l),this.requestUpdate(s,a,n,!0,l)},init(l){return l!==void 0&&this.C(s,void 0,n,l),l}}}if(r==="setter"){let{name:s}=e;return function(l){let a=this[s];t.call(this,l),this.requestUpdate(s,a,n,!0,l)}}throw Error("Unsupported decorator location: "+r)};function Ze(n){return(t,e)=>typeof e=="object"?wt(n,t,e):((r,o,i)=>{let s=o.hasOwnProperty(i);return o.constructor.createProperty(i,r),s?Object.getOwnPropertyDescriptor(o,i):void 0})(n,t,e)}function f(n){return Ze({...n,state:!0,attribute:!1})}var Fe={"status.idle":"Idle","status.running":"Running","status.error":"Error","status.disabled":"Disabled",stop_all:"Stop All",next:"Next",last:"Last",no_programs:"No programs found",loading:"Loading...","time.just_now":"just now","time.minutes_ago":"{count}m ago","time.hours_ago":"{count}h ago","time.days_ago":"{count}d ago","time.today_at":"today at {time}","time.tomorrow_at":"tomorrow at {time}","time.in_days":"in {count}d","time.never":"Never","time.no_schedule":"No active program","status.running_program":"Running: {name}",stop_confirm:"Stop all watering?","recap.total_duration":"Total duration: {duration} min","days.mon":"Mon","days.tue":"Tue","days.wed":"Wed","days.thu":"Thu","days.fri":"Fri","days.sat":"Sat","days.sun":"Sun","running.progress":"Valve {done} of {total}","error.program":"Error \u2014 {name}","error.auto_stopped":"All valves have been automatically closed.","config.tab_valves":"Valves","config.tab_zones":"Zones","config.tab_programs":"Programs","config.no_valves":"No valves configured","config.no_zones":"No zones created","config.no_programs":"No programs created","config.new_zone":"New zone","config.new_program":"New program","config.name":"Name","config.save":"Save","config.cancel":"Cancel","config.delete":"Delete","config.edit":"Edit","config.confirm_delete_zone":"Delete this zone?","config.confirm_delete_program":"Delete this program?","config.trigger_time":"Trigger time","config.select_valves":"Select valves","config.select_zones":"Select zones","config.valve_entity":"Entity","config.total_duration":"Total: {duration} min","config.dry_run":"Test mode","config.dry_run_hint":"Runs the sequence without activating valves","running.dry_run":"Test mode","config.frequency":"Frequency","config.follows_program":"Every day","config.frequency_every_n":"Every {n} days","config.frequency_weekdays":"Specific days","recap.frequency_every_n":"every {n}d","config.title":"WateringHub Config","config.editor_valves":"Valves","config.add_valve":"Add valve","config.select_entity":"Switch entity","config.valve_name":"Valve name","config.confirm_delete_valve":"Delete this valve?"};var Le={"status.idle":"En attente","status.running":"Arrosage en cours","status.error":"Erreur","status.disabled":"D\xE9sactiv\xE9",stop_all:"Tout arr\xEAter",next:"Prochain",last:"Dernier",no_programs:"Aucun programme trouv\xE9",loading:"Chargement...","time.just_now":"\xE0 l'instant","time.minutes_ago":"il y a {count} min","time.hours_ago":"il y a {count}h","time.days_ago":"il y a {count}j","time.today_at":"aujourd'hui \xE0 {time}","time.tomorrow_at":"demain \xE0 {time}","time.in_days":"dans {count}j","time.never":"Jamais","time.no_schedule":"Aucun programme actif","status.running_program":"En cours : {name}",stop_confirm:"Arr\xEAter tout l'arrosage ?","recap.total_duration":"Dur\xE9e totale : {duration} min","days.mon":"Lun","days.tue":"Mar","days.wed":"Mer","days.thu":"Jeu","days.fri":"Ven","days.sat":"Sam","days.sun":"Dim","running.progress":"Vanne {done} sur {total}","error.program":"Erreur \u2014 {name}","error.auto_stopped":"Toutes les vannes ont \xE9t\xE9 ferm\xE9es automatiquement.","config.tab_valves":"Vannes","config.tab_zones":"Zones","config.tab_programs":"Programmes","config.no_valves":"Aucune vanne configur\xE9e","config.no_zones":"Aucune zone cr\xE9\xE9e","config.no_programs":"Aucun programme cr\xE9\xE9","config.new_zone":"Nouvelle zone","config.new_program":"Nouveau programme","config.name":"Nom","config.save":"Sauvegarder","config.cancel":"Annuler","config.delete":"Supprimer","config.edit":"Modifier","config.confirm_delete_zone":"Supprimer cette zone ?","config.confirm_delete_program":"Supprimer ce programme ?","config.trigger_time":"Heure de d\xE9clenchement","config.select_valves":"S\xE9lectionner les vannes","config.select_zones":"S\xE9lectionner les zones","config.valve_entity":"Entit\xE9","config.total_duration":"Total : {duration} min","config.dry_run":"Mode test","config.dry_run_hint":"Ex\xE9cute la s\xE9quence sans activer les vannes","running.dry_run":"Mode test","config.frequency":"Fr\xE9quence","config.follows_program":"Tous les jours","config.frequency_every_n":"Tous les {n} jours","config.frequency_weekdays":"Jours sp\xE9cifiques","recap.frequency_every_n":"tous les {n}j","config.title":"WateringHub Config","config.editor_valves":"Vannes","config.add_valve":"Ajouter une vanne","config.select_entity":"Entit\xE9 switch","config.valve_name":"Nom de la vanne","config.confirm_delete_valve":"Supprimer cette vanne ?"};var _e={en:Fe,fr:Le};function N(n){let t=n?.toLowerCase().startsWith("fr")?"fr":"en",e=_e[t]??_e.en;return(r,o)=>{let i=e[r]??_e.en[r]??r;return o&&(i=i.replace(/\{(\w+)\}/g,(s,l)=>String(o[l]??s))),i}}var C=T`
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
`;function re(n){return Object.keys(n.states).filter(t=>t.startsWith("switch.wateringhub_"))}function Z(n,t){return typeof n?.attributes.friendly_name=="string"?n.attributes.friendly_name:t}function ne(n){return n.states["sensor.wateringhub_status"]?.state??"idle"}function je(n){let t=n.states["sensor.wateringhub_status"];if(t?.state!=="error")return null;let e=t.attributes,r=e.current_program,o=r?n.states[`switch.wateringhub_${r}`]:void 0;return{programName:Z(o,r??""),errorMessage:e.error_message??""}}function Ue(n){let t=n.states["sensor.wateringhub_status"];if(t?.state!=="running")return null;let e=t.attributes,r=e.current_valve_start,o=e.current_valve_duration??0,i=e.valves_done??0,s=e.valves_total??1,l=r?Math.max(0,(Date.now()-new Date(r).getTime())/1e3):0,a=Math.max(0,o-l),d=o>0?Math.min(100,l/o*100):0,u=(i+d/100)/s*100,p=(i+1)/s*100,g=Array.isArray(e.valves_sequence)?e.valves_sequence:[],v=g.filter(x=>x.status==="pending").reduce((x,b)=>x+b.duration,0),_=a+v,ie=g.length>0?g.reduce((x,b)=>x+b.duration,0):o*s,E=g.filter(x=>x.status==="done").reduce((x,b)=>x+b.duration,0)+l;return{programName:e.current_program??"",zoneName:e.current_zone_name??"",valveName:e.current_valve_name??"",valveStart:r??"",valveDuration:o,valvesDone:i,valvesTotal:s,progressPercent:e.progress_percent??0,remaining:a,totalRemaining:_,totalDuration:ie,totalElapsed:E,valvePercent:d,finePercent:u,globalEndPercent:p,valveSequence:g,dryRun:e.dry_run===!0}}function ye(n){if(n<=0)return"0:00";let t=Math.floor(n/3600),e=Math.floor(n%3600/60),r=Math.floor(n%60);return t>0?`${t}:${e.toString().padStart(2,"0")}:${r.toString().padStart(2,"0")}`:`${e}:${r.toString().padStart(2,"0")}`}function oe(n,t){return n?n.time:""}function Be(n){return!n||n.state==="None"||n.state==="unknown"||n.state==="unavailable"}function be(n,t,e,r){let o=n.states[t];if(Be(o))return e("time.never");let i=new Date(o.state);if(Number.isNaN(i.getTime()))return o.state;let s=new Date,l=s.getTime()-i.getTime();if(l<0){let p=new Date(s.getFullYear(),s.getMonth(),s.getDate()),g=new Date(i.getFullYear(),i.getMonth(),i.getDate()),v=Math.round((g.getTime()-p.getTime())/(1e3*60*60*24)),_=i.toLocaleTimeString(r??[],{hour:"2-digit",minute:"2-digit"});return v===0?e("time.today_at",{time:_}):v===1?e("time.tomorrow_at",{time:_}):e("time.in_days",{count:v})}let a=Math.floor(l/(1e3*60));if(a<1)return e("time.just_now");if(a<60)return e("time.minutes_ago",{count:a});let d=Math.floor(a/60);if(d<24)return e("time.hours_ago",{count:d});let u=Math.floor(d/24);return e("time.days_ago",{count:u})}function Je(n,t,e){let r=n.states["sensor.wateringhub_next_run"];return Be(r)?t("time.no_schedule"):be(n,"sensor.wateringhub_next_run",t,e)}function Ge(n){return c`
    <div class="header">
      <span class="title">${n}</span>
    </div>
  `}function Et(n,t,e){return t?ne(n)==="running"?c``:c`
    <div class="program-status">
      <span class="badge-sm badge-idle">${e("status.idle")}</span>
      <span class="info-sm">${e("next")}: ${Je(n,e,n.language)}</span>
      <span class="info-sm">
        ${e("last")}: ${be(n,"sensor.wateringhub_last_run",e,n.language)}
      </span>
    </div>
  `:c`
      <div class="program-status">
        <span class="badge-sm badge-disabled">${e("status.disabled")}</span>
      </div>
    `}function Ke(n,t){let e=je(n);return e?c`
    <div class="error-view">
      <div class="error-title">
        <ha-icon icon="mdi:alert-circle"></ha-icon>
        ${t("error.program",{name:e.programName})}
      </div>
      ${e.errorMessage?c`<div class="error-message">${e.errorMessage}</div>`:m}
      <div class="error-auto-stopped">${t("error.auto_stopped")}</div>
    </div>
  `:c``}function Ye(n,t,e){let r=Ue(n);if(!r)return c``;let o=2*Math.PI*30,i=r.totalDuration>0?r.totalElapsed/r.totalDuration:0,s=o*(1-Math.min(1,i));return c`
    <div class="running-block">
      <button class="running-stop-btn" @click=${t}>${e("stop_all")}</button>
      ${r.dryRun?c`<span class="badge-dry-run">${e("running.dry_run")}</span>`:m}

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
            <span class="cp-time">${ye(r.totalRemaining)}</span>
          </div>
        </div>
        <div class="global-info">
          <div class="global-program-name">
            ${Z(n.states[`switch.wateringhub_${r.programName}`],r.programName)}
          </div>
          <div class="global-sub">
            ${e("running.progress",{done:r.valvesDone+1,total:r.valvesTotal})}
          </div>
        </div>
      </div>

      ${r.valveSequence.length>0?Tt(r.valveSequence,r.remaining,e):m}
    </div>
  `}function Tt(n,t,e){let r=[];for(let a of n){let d=r[r.length-1];d?.zoneName===a.zone_name?d.valves.push(a):r.push({zoneName:a.zone_name,valves:[a]})}let o=c`<svg viewBox="0 0 24 24">
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
          ${a.valves.map(d=>{let u=Math.ceil(d.duration/60);return c`
              <div class="tl-step tl-${d.status}">
                <span class="tl-dot">${l[d.status]}</span>
                <span class="tl-step-name">${d.valve_name}</span>
                <span class="tl-step-time">
                  ${d.status==="running"?ye(t):`${u} min`}
                </span>
              </div>
            `})}
        `)}
    </div>
  `}function Qe(n,t,e,r,o,i){return t.length===0?c`<div class="empty-state">${i("no_programs")}</div>`:c`${t.map(s=>{let l=n.states[s];if(!l)return m;let a=l.state==="on",d=e===s,u=Z(l,s);return c`
      <div class="program-wrapper">
        <div class="program">
          <div class="program-header" @click=${()=>r(s)}>
            <ha-icon class="chevron ${d?"open":""}" icon="mdi:chevron-down"></ha-icon>
            ${a?c`<div class="active-dot"></div>`:m}
            <span class="program-name ${a?"active":""}">${u}</span>
          </div>
          <ha-switch .checked=${a} @change=${()=>o(s)}></ha-switch>
        </div>
        ${Et(n,a,i)}
        ${Pt(l.attributes,d,i)}
      </div>
    `})}`}function Pt(n,t,e){let r=n.schedule,o=n.zones??[],i=n.total_duration;return c`
    <div class="program-recap ${t?"open":""}">
      ${r?c`<div class="recap-schedule">
            <ha-icon icon="mdi:calendar-clock"></ha-icon>
            ${oe(r,e)}
          </div>`:m}
      ${o.map(s=>c`
          <div class="recap-zone">
            <ha-icon icon="mdi:map-marker"></ha-icon>
            ${s.zone_name}
          </div>
          ${s.valves.map(l=>c`
              <div class="recap-valve">
                <ha-icon icon="mdi:water"></ha-icon>
                ${l.valve_name} — ${l.duration}
                min${zt(l.frequency,e)}
              </div>
            `)}
        `)}
      ${i?c`<div class="recap-total">
            <ha-icon icon="mdi:timer-outline"></ha-icon>
            ${e("recap.total_duration",{duration:i})}
          </div>`:m}
    </div>
  `}function zt(n,t){return n?n.type==="every_n_days"?` \xB7 ${t("recap.frequency_every_n",{n:n.n??2})}`:n.type==="weekdays"&&n.days?.length?` \xB7 ${n.days.map(r=>t(`days.${r}`)).join(", ")}`:"":""}var V=class extends ${constructor(){super(...arguments);this._t=e=>e}set hass(e){this._hass=e,this._t=N(e.language)}setConfig(e){this._config=e}_titleChanged(e){let r=e.target.value;this._config={...this._config,title:r},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config}}))}render(){return c`
      <div class="form-row">
        <label class="form-label">${this._t("config.name")}</label>
        <input
          class="form-input"
          .value=${this._config?.title??""}
          @input=${this._titleChanged}
        />
      </div>
    `}};V.styles=[C],h([f()],V.prototype,"_config",2),h([f()],V.prototype,"_hass",2),V=h([k("wateringhub-card-editor")],V);var w=class extends ${constructor(){super(...arguments);this._programEntities=[];this._expandedProgram=null;this._tick=0;this._t=e=>e;this._timerInterval=null}static getConfigElement(){return document.createElement("wateringhub-card-editor")}setConfig(e){this._config=e}set hass(e){let r=this._hass;this._hass=e,this._t=N(e.language),r?.states!==e.states&&(this._programEntities=re(e)),this._updateTimer(ne(e))}disconnectedCallback(){super.disconnectedCallback(),this._clearTimer()}_updateTimer(e){e==="running"&&!this._timerInterval?this._timerInterval=setInterval(()=>{this._tick++},1e3):e!=="running"&&this._timerInterval&&this._clearTimer()}_clearTimer(){this._timerInterval&&(clearInterval(this._timerInterval),this._timerInterval=null)}getCardSize(){return 3}_toggleExpand(e){this._expandedProgram=this._expandedProgram===e?null:e}_toggleProgram(e){let r=this._hass.states[e];if(!r)return;let o=r.state==="on"?"turn_off":"turn_on";this._hass.callService("switch",o,{entity_id:e})}_stopAll(){confirm(this._t("stop_confirm"))&&this._hass.callService("wateringhub","stop_all",{})}render(){if(!this._hass||!this._config)return c`<ha-card>${this._t("loading")}</ha-card>`;let e=this._config.title??"WateringHub";return c`
      <ha-card>
        ${Ge(e)} ${Ke(this._hass,this._t)}
        ${Ye(this._hass,()=>this._stopAll(),this._t)}
        ${Qe(this._hass,this._programEntities,this._expandedProgram,r=>this._toggleExpand(r),r=>this._toggleProgram(r),this._t)}
      </ha-card>
    `}};w.styles=[C,Oe],h([f()],w.prototype,"_config",2),h([f()],w.prototype,"_hass",2),h([f()],w.prototype,"_programEntities",2),h([f()],w.prototype,"_expandedProgram",2),h([f()],w.prototype,"_tick",2),w=h([k("wateringhub-card")],w);globalThis.customCards=globalThis.customCards||[];globalThis.customCards.push({type:"wateringhub-card",name:"WateringHub Card",description:"Watering management card for WateringHub"});var Xe=T`
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
`;function F(n){return n.states["sensor.wateringhub_status"]?.attributes.available_valves??[]}function xe(n){return n.states["sensor.wateringhub_status"]?.attributes.zones??[]}function $e(n){return n.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"_").replace(/^_|_$/g,"")}function tt(n,t,e){let r=[{id:"programs",label:e("config.tab_programs")},{id:"zones",label:e("config.tab_zones")},{id:"valves",label:e("config.tab_valves")}];return c`
    <div class="tabs">
      ${r.map(o=>c`
          <div
            class="tab ${n===o.id?"active":""}"
            @click=${()=>t(o.id)}
          >
            ${o.label}
          </div>
        `)}
    </div>
  `}function rt(n,t){let e=F(n);return e.length===0?c`<div class="empty-state">${t("config.no_valves")}</div>`:c`
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
  `}function nt(n,t,e,r,o,i,s,l,a){let d=xe(n),u=F(n);return c`
    ${d.map(p=>t&&t.id===p.id?We(t,u,i,s,l,a):kt(p,u,e,r,a))}
    ${t?.isNew?We(t,u,i,s,l,a):m}
    ${t?m:c`<button class="add-btn" @click=${o}>+ ${a("config.new_zone")}</button>`}
    ${d.length===0&&!t?c`<div class="empty-state">${a("config.no_zones")}</div>`:m}
  `}function kt(n,t,e,r,o){let i=n.valves.map(s=>t.find(l=>l.id===s)?.name??s).join(", ");return c`
    <div class="list-item">
      <div class="list-item-header">
        <div>
          <div class="list-item-name">${n.name}</div>
          <div class="list-item-sub">${i}</div>
        </div>
        <div class="list-item-actions">
          <button class="action-btn" @click=${()=>e(n)} title="${o("config.edit")}">
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
  `}function We(n,t,e,r,o,i){return c`
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
          ${t.map(s=>{let l=n.valves.includes(s.id);return c`
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
        <button class="btn btn-primary" @click=${()=>e(n)}>${i("config.save")}</button>
      </div>
    </div>
  `}function ot(n,t,e,r,o,i,s,l,a){let d=re(n),u=xe(n),p=F(n);return c`
    ${d.map(g=>{let v=n.states[g];if(!v)return m;let _=v.attributes.program_id??"";return t&&t.id===_?et(t,u,p,i,s,l,a):Nt(v,g,e,r,a)})}
    ${t?.isNew?et(t,u,p,i,s,l,a):m}
    ${t?m:c`<button class="add-btn" @click=${o}>+ ${a("config.new_program")}</button>`}
    ${d.length===0&&!t?c`<div class="empty-state">${a("config.no_programs")}</div>`:m}
  `}function Nt(n,t,e,r,o){let i=Z(n,t),s=n.attributes.schedule,l=n.attributes.total_duration,a=n.attributes.dry_run===!0,d=oe(s,o);return c`
    <div class="list-item">
      <div class="list-item-header">
        <div>
          <div class="list-item-name">
            ${i}
            ${a?c`<span class="dry-run-tag">${o("config.dry_run")}</span>`:m}
          </div>
          <div class="list-item-sub">
            ${d}${l?` \u2014 ${l} min`:""}
          </div>
        </div>
        <div class="list-item-actions">
          <button class="action-btn" @click=${()=>e(t)} title="${o("config.edit")}">
            <ha-icon icon="mdi:pencil"></ha-icon>
          </button>
          <button
            class="action-btn delete"
            @click=${()=>r(t)}
            title="${o("config.delete")}"
          >
            <ha-icon icon="mdi:delete"></ha-icon>
          </button>
        </div>
      </div>
    </div>
  `}function et(n,t,e,r,o,i,s){let l=n.zones.reduce((a,d)=>a+d.valves.reduce((u,p)=>u+(p.duration||0),0),0);return c`
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
        ${t.map(a=>{let d=n.zones.find(p=>p.zone_id===a.id),u=!!d;return c`
            <div class="form-zone-section">
              <label class="checkbox-item">
                <input
                  type="checkbox"
                  .checked=${u}
                  @change=${()=>{let p=u?n.zones.filter(g=>g.zone_id!==a.id):[...n.zones,{zone_id:a.id,valves:a.valves.map(g=>({valve_id:g,duration:10}))}];i({...n,zones:p})}}
                />
                <span class="form-zone-name">${a.name}</span>
              </label>
              ${u&&d?c`
                    ${d.valves.map(p=>{let g=e.find(y=>y.id===p.valve_id)?.name??p.valve_id,v=y=>{let E=d.valves.map(b=>b.valve_id===p.valve_id?{...b,...y}:b),x=n.zones.map(b=>b.zone_id===a.id?{...b,valves:E}:b);i({...n,zones:x})},_=p.frequency?.type??"",ie=new Date().toISOString().slice(0,10);return c`
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
                              @change=${y=>{let E=y.target.value;v(E?E==="every_n_days"?{frequency:{type:"every_n_days",n:2,start_date:ie}}:{frequency:{type:"weekdays",days:[]}}:{frequency:void 0})}}
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
                                `:m}
                            ${_==="weekdays"?c`
                                  <div class="valve-freq-days">
                                    ${["mon","tue","wed","thu","fri","sat","sun"].map(y=>{let E=p.frequency?.days?.includes(y)??!1;return c`
                                          <label class="valve-freq-day">
                                            <input
                                              type="checkbox"
                                              .checked=${E}
                                              @change=${()=>{let x=p.frequency?.days??[],b=E?x.filter(st=>st!==y):[...x,y];v({frequency:{...p.frequency,days:b}})}}
                                            />
                                            ${s(`days.${y}`)}
                                          </label>
                                        `})}
                                  </div>
                                `:m}
                          </div>
                        </div>
                      `})}
                  `:m}
            </div>
          `})}
      </div>

      ${l>0?c`<div class="total-duration">
            ${s("config.total_duration",{duration:l})}
          </div>`:m}

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
  `}var it=T`
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
`;var S=class extends ${constructor(){super(...arguments);this._adding=!1;this._newEntityId="";this._newName="";this._t=e=>e}set hass(e){this._hass=e,this._t=N(e.language)}setConfig(e){this._config=e}_getValves(){return this._hass?F(this._hass):[]}_getAvailableSwitches(){if(!this._hass)return[];let e=new Set(this._getValves().map(r=>r.entity_id));return Object.keys(this._hass.states).filter(r=>r.startsWith("switch.")&&!r.startsWith("switch.wateringhub_")&&!e.has(r)).map(r=>({entity_id:r,name:typeof this._hass.states[r].attributes.friendly_name=="string"?this._hass.states[r].attributes.friendly_name:r})).sort((r,o)=>r.name.localeCompare(o.name))}async _setValves(e){await this._hass.callService("wateringhub","set_valves",{valves:e})}async _deleteValve(e){if(!confirm(this._t("config.confirm_delete_valve")))return;let r=this._getValves().filter(o=>o.entity_id!==e).map(o=>({entity_id:o.entity_id,name:o.name}));await this._setValves(r)}_startAdd(){let e=this._getAvailableSwitches();this._adding=!0,this._newEntityId=e[0]?.entity_id??"",this._newName=e[0]?.name??""}async _confirmAdd(){if(!this._newEntityId||!this._newName)return;let e=[...this._getValves().map(r=>({entity_id:r.entity_id,name:r.name})),{entity_id:this._newEntityId,name:this._newName}];await this._setValves(e),this._adding=!1,this._newEntityId="",this._newName=""}_cancelAdd(){this._adding=!1}render(){let e=this._getValves(),r=this._getAvailableSwitches();return c`
      <div class="editor-section">
        <span class="editor-label">${this._t("config.editor_valves")}</span>

        ${e.length===0&&!this._adding?c`<div class="empty-state">${this._t("config.no_valves")}</div>`:m}
        ${e.map(o=>c`
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
    `}};S.styles=[C,it],h([f()],S.prototype,"_config",2),h([f()],S.prototype,"_hass",2),h([f()],S.prototype,"_adding",2),h([f()],S.prototype,"_newEntityId",2),h([f()],S.prototype,"_newName",2),S=h([k("wateringhub-config-editor")],S);var A=class extends ${constructor(){super(...arguments);this._activeTab="programs";this._editingZone=null;this._editingProgram=null;this._t=e=>e}static getConfigElement(){return document.createElement("wateringhub-config-editor")}setConfig(e){this._config=e}set hass(e){this._hass=e,this._t=N(e.language)}getCardSize(){return 5}_setTab(e){this._activeTab=e,this._editingZone=null,this._editingProgram=null}_newZone(){this._editingZone={id:"",name:"",valves:[],isNew:!0}}_editZone(e){this._editingZone={id:e.id,name:e.name,valves:[...e.valves],isNew:!1}}_cancelZone(){this._editingZone=null}_updateZoneForm(e){this._editingZone=e}async _saveZone(e){let r=e.isNew?$e(e.name):e.id,o=e.isNew?"create_zone":"update_zone";await this._hass.callService("wateringhub",o,{id:r,name:e.name,valves:e.valves}),this._editingZone=null}async _deleteZone(e){confirm(this._t("config.confirm_delete_zone"))&&await this._hass.callService("wateringhub","delete_zone",{id:e})}_newProgram(){this._editingProgram={id:"",name:"",schedule:{time:"06:00"},zones:[],dry_run:!1,isNew:!0}}_editProgram(e){let r=this._hass.states[e];if(!r)return;let o=r.attributes,i=o.program_id??"",s=o.schedule??{time:"06:00"},l=(o.zones??[]).map(a=>({zone_id:a.zone_id,valves:a.valves.map(d=>({valve_id:d.valve_id,duration:d.duration,frequency:d.frequency}))}));this._editingProgram={id:i,name:typeof o.friendly_name=="string"?o.friendly_name:i,schedule:s,zones:l,dry_run:o.dry_run===!0,isNew:!1}}_cancelProgram(){this._editingProgram=null}_updateProgramForm(e){this._editingProgram=e}async _saveProgram(e){let r=e.isNew?$e(e.name):e.id,o=e.isNew?"create_program":"update_program";await this._hass.callService("wateringhub",o,{id:r,name:e.name,schedule:e.schedule,dry_run:e.dry_run,zones:e.zones.map(i=>({zone_id:i.zone_id,valves:i.valves.map(s=>({valve_id:s.valve_id,duration:s.duration,...s.frequency?{frequency:s.frequency}:{}}))}))}),this._editingProgram=null}async _deleteProgram(e){if(confirm(this._t("config.confirm_delete_program"))){let o=this._hass.states[e]?.attributes.program_id??"";await this._hass.callService("wateringhub","delete_program",{id:o})}}render(){return!this._hass||!this._config?c`<ha-card>${this._t("loading")}</ha-card>`:c`
      <ha-card>
        <div class="header"><span class="title">${this._t("config.title")}</span></div>
        ${tt(this._activeTab,e=>this._setTab(e),this._t)}
        ${this._activeTab==="valves"?rt(this._hass,this._t):""}
        ${this._activeTab==="zones"?nt(this._hass,this._editingZone,e=>this._editZone(e),e=>this._deleteZone(e),()=>this._newZone(),e=>this._saveZone(e),()=>this._cancelZone(),e=>this._updateZoneForm(e),this._t):""}
        ${this._activeTab==="programs"?ot(this._hass,this._editingProgram,e=>this._editProgram(e),e=>this._deleteProgram(e),()=>this._newProgram(),e=>this._saveProgram(e),()=>this._cancelProgram(),e=>this._updateProgramForm(e),this._t):""}
      </ha-card>
    `}};A.styles=[C,Xe],h([f()],A.prototype,"_config",2),h([f()],A.prototype,"_hass",2),h([f()],A.prototype,"_activeTab",2),h([f()],A.prototype,"_editingZone",2),h([f()],A.prototype,"_editingProgram",2),A=h([k("wateringhub-config-card")],A);globalThis.customCards=globalThis.customCards||[];globalThis.customCards.push({type:"wateringhub-config-card",name:"WateringHub Config Card",description:"Configuration card for WateringHub zones and programs"});
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
