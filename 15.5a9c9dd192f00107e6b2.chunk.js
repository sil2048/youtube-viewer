(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"11bae9097b9699fbe29a":function(e,t,r){"use strict";r.r(t);var n,a=r("331f86f8774175b2781f"),o=r.n(a),i=r("8af190b70a6bc55c6f1b"),c=r.n(i),l=r("e95a63b25fb92ed15721"),s=(r("8a2d1b95e05b6a321e74"),r("ab4cb61bcb2dc161defb")),d=r("7c89c8b4e03b8409a36d"),u=r.n(d),f=r("a28fc3c963a1d4d1a2e5"),p=r("2395919ec0a1b7d6f548"),m=r.n(p),g=r("17a826745d7905c7f263"),b={root:{padding:20},loading:{minHeight:"500px",display:"flex",justifyContent:"center",alignItems:"center"}};function v(e,t,r,a){n||(n="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=a;else if(i>1){for(var c=new Array(i),l=0;l<i;l++)c[l]=arguments[l+3];t.children=c}if(t&&o)for(var s in o)void 0===t[s]&&(t[s]=o[s]);else t||(t=o||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}var y=m()(b)(function(e){var t=e.classes;return v("div",{className:"".concat(t.root," ").concat(t.loading)},void 0,v(g.a,{size:"medium",colors:["#828DF1",null,"#9ECDEF"]}))}),j=r("0bdb7627327c0233d1f9"),h=r("d7dd51e1bf6bfc2c9c3d"),x=(r("5ef9de3df8d92ea0e41c"),r("f2873ecf7390fe7d7c89")),O=r.n(x),w=r("5fa3f8487e09c6182715"),S=r.n(w),k=r("f3b0ff1628e56352bcbf"),P=r.n(k),R=r("a1cf5d6fa4ed65a6ddd5"),E=r.n(R),N=r("6a4f9c383785f9168266"),T=r.n(N),C=r("d3a850c4000d77bccc89"),B=r.n(C);function I(e){var t={dispatch:P.a,subscribe:P.a,getState:P.a,replaceReducer:P.a,runSaga:P.a,injectedReducers:B.a,injectedSagas:B.a};T()(O()(e,t),"(app/utils...) injectors: Expected a valid redux store")}var A="@@saga-injector/restart-on-remount",D="@@saga-injector/daemon",L="@@saga-injector/once-till-unmount";function W(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?W(Object(r),!0).forEach(function(t){F(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):W(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function F(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var $=[A,D,L],_=function(e){return T()(S()(e)&&!E()(e),"(app/utils...) injectSaga: Expected `key` to be a non empty string")},z=function(e){var t={saga:P.a,mode:function(e){return S()(e)&&$.includes(e)}};T()(O()(e,t),"(app/utils...) injectSaga: Expected a valid saga descriptor")};function G(e,t){return function(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2?arguments[2]:void 0;t||I(e);var o=q(q({},n),{},{mode:n.mode||D}),i=o.saga,c=o.mode;_(r),z(o);var l=Reflect.has(e.injectedSagas,r);(!l||l&&c!==D&&c!==L)&&(e.injectedSagas[r]=q(q({},o),{},{task:e.runSaga(i,a)}))}}function H(e,t){return function(r){if(t||I(e),_(r),Reflect.has(e.injectedSagas,r)){var n=e.injectedSagas[r];n.mode&&n.mode!==D&&(n.task.cancel(),e.injectedSagas[r]="done")}}}function J(e){return I(e),{injectSaga:G(e,!0),ejectSaga:H(e,!0)}}var U=function(e){var t=e.key,r=e.saga,n=e.mode,a=c.a.useContext(h.ReactReduxContext);c.a.useEffect(function(){var e=J(a.store);return e.injectSaga(t,{saga:r,mode:n}),function(){e.ejectSaga(t)}},[])},M=r("491cc2e27aa2b4221847");function K(e,t){return function(r,n){t||I(e),T()(S()(r)&&!E()(r)&&P()(n),"(app/utils...) injectReducer: Expected `reducer` to be a reducer function"),Reflect.has(e.injectedReducers,r)&&e.injectedReducers[r]===n||(e.injectedReducers[r]=n,e.replaceReducer(Object(M.a)(e.injectedReducers)))}}function Q(e){return I(e),{injectReducer:K(e,!0)}}var V,X=function(e){var t=e.key,r=e.reducer,n=c.a.useContext(h.ReactReduxContext);c.a.useEffect(function(){Q(n.store).injectReducer(t,r)},[])},Y=r("351d8cb1a27d4c0b797e"),Z=r("a38e5ba5884d2826ceaf"),ee={root:{backgroundColor:"#f9f9f9",height:"100vh"},grid:{height:"100%"},quoteWrapper:{"& @media only screen and (maxWidth: 1024px)":{display:"none"}},quote:{backgroundColor:Z.a.colors.blue,height:"100%",display:"flex",justifyContent:"center",alignItems:"center",backgroundImage:"url(/images/sign_up_1.jpg)",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},quoteInner:{textAlign:"center",flexBasis:"600px"},quoteText:{color:"#fff",fontWeight:300},name:{marginTop:15,color:"#fff"},bio:{color:"#fff"},contentWrapper:{},content:{height:"100%",display:"flex",flexDirection:"column"},contentHeader:{display:"flex",alignItems:"center",paddingTop:25,paddingBototm:10,paddingLeft:10,paddingRight:10},backButton:{},logoImage:{marginLeft:20},contentBody:{flexGrow:1,display:"flex",alignItems:"center",justifyContent:"center","& @media only screen and (maxWidth: 1024px)":{justifyContent:"center"}},form:{paddingLeft:"100px",paddingRight:"100px",paddingBottom:"125px",flexBasis:"700px","& @media only screen and (maxWidth: 728px)":{paddingLeft:10,paddingRight:10}},title:{marginTop:15,textAlign:"center",marginBottom:"25px",textTransform:"uppercase",color:Z.a.colors.darkGray},avatar:{textAlign:"center"},subtitle:{color:Z.a.colors.red,marginTop:4},sugestion:{color:Z.a.colors.red,marginTop:10,textAlign:"center"},fields:{marginTop:10},textField:{width:"100%","& + & ":{marginTop:10}},policy:{display:"flex",alignItems:"center"},policyCheckbox:{marginLeft:"-14px"},policyText:{display:"inline",color:Z.a.colors.red},policyUrl:{color:Z.a.colors.blue,"&:hover":{cursor:"pointer",color:Z.a.colors.darkBlue}},progress:{display:"block",marginTop:10,marginLeft:"auto",marginRight:"auto"},signInButton:{marginTop:10,width:"100%"},fieldError:{color:Z.a.colors.red,marginBottom:10,marginTop:10},submitError:{color:Z.a.colors.red,alignText:"center",marginBottom:5,marginTop:10}},te={email:{presence:{allowEmpty:!1,message:"is required"},email:!0,length:{maximum:64}},password:{presence:{allowEmpty:!1,message:"is required"},length:{maximum:128}}};function re(e,t,r,n){V||(V="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),1===o)t.children=n;else if(o>1){for(var i=new Array(o),c=0;c<o;c++)i[c]=arguments[c+3];t.children=i}if(t&&a)for(var l in a)void 0===t[l]&&(t[l]=a[l]);else t||(t=a||{});return{$$typeof:V,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function ne(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function ae(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ne(Object(r),!0).forEach(function(t){oe(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ne(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function oe(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ie(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=e&&("undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==r)return;var n,a,o=[],i=!0,c=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);i=!0);}catch(e){c=!0,a=e}finally{try{i||null==r.return||r.return()}finally{if(c)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return ce(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ce(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ce(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var le=re(y,{}),se=re(j.a,{});function de(e){var t=e.loginStatus,r=e.history,n=e.location,a=e.onLogin,c=e.classes;X({key:Y.a,reducer:Y.d}),U({key:Y.a,saga:Y.f,mode:A});var l=ie(Object(i.useState)({email:"",password:""}),2),s=l[0],d=l[1],f=ie(Object(i.useState)({email:!1,password:!1}),2),p=f[0],m=f[1],g=ie(Object(i.useState)({email:null,password:null}),2),b=g[0],v=g[1],y=ie(Object(i.useState)(!1),2),j=y[0],h=y[1],x=ie(Object(i.useState)(!1),1)[0],O=ie(Object(i.useState)(null),2),w=O[0],S=O[1];Object(i.useEffect)(function(){if(t&&t.data){var e=(n.state||{from:{pathname:"/"}}).from;r.push(e)}},[t]);var k=o()(function(){var e=u()(s,te);v(e||{}),h(!e)},300);function P(e){var t=e.target,r=t.name,n=t.value;S(null),m(ae(ae({},p),{},oe({},r,!0))),d(ae(ae({},s),{},oe({},r,n))),k()}var R=p.email&&b.email,E=p.password&&b.password;return t&&t.waiting?le:re("div",{className:c.root},void 0,re("div",{className:c.grid},void 0,re("div",{className:c.content},void 0,re("div",{className:c.content},void 0,re("div",{className:c.contentBody},void 0,re("form",{className:c.form,onSubmit:function(e){e.preventDefault(),a({values:s})}},void 0,re("div",{className:c.avatar},void 0,se),re("h2",{className:c.title},void 0,"Sign in"),re("div",{className:c.fields},void 0,re("input",{className:c.textField,placeholder:"Email address",name:"email",onChange:P,type:"text",value:s.email}),R&&re("p",{className:c.fieldError},void 0,b.email[0]),re("input",{className:c.textField,placeholder:"Password",name:"password",onChange:P,type:"password",value:s.password}),E&&re("p",{className:c.fieldError},void 0,b.password[0])),w&&re("p",{className:c.submitError},void 0,w),x?re("div",{className:c.progress},void 0,"Waiting..."):re("button",{className:c.signInButton,disabled:!j,type:"submit"},void 0,"Sign in")))))))}de.defaultProps={};var ue=Object(f.b)({loginStatus:Object(Y.c)()}),fe={onLogin:Y.b},pe=Object(h.connect)(ue,fe),me=m()(ee);t.default=Object(s.compose)(pe,l.withRouter,i.memo,me)(de)}}]);