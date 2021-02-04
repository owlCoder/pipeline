(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){e.exports=a(42)},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(18),c=a.n(o),l=a(8),i=a(10),s=(a(31),a(3)),u=a.n(s),d=a(7),m=a(1),f=a(25),p=a(9),g=a(15),b=a(13),v=a.n(b),E=r.a.createContext(),w=new g.a,h={language:"en",subtitles:"en",quality:480},y={configuration:h,dbIndex:[],isInit:!1,isSupported:!0,videos:[],player:null,storage:null},N=function(){var e=Object(p.a)(u.a.mark(function e(t){var a,n,r,o,c,l,i,s,p,g,b,E,N,x,O;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=fetch("data/videos.json").then(function(e){return e.json()}),v.a.polyfill.installAll(),n=v.a.Player.isBrowserSupported(),r=v.a.offline.Storage.support(),!n||!r){e.next=22;break}return o=new v.a.Player,c=new v.a.offline.Storage(o),l=c.list(),i=function(e){console.error("Error code",e.code,"object",e)},o.addEventListener("error",function(e){var t=e.detail;return i(t)}),s=w.get("userPreferredQuality"),p={language:w.get("userPreferredAudioLanguage")||h.language,subtitles:w.get("userPreferredTextLanguage")||h.subtitles,quality:s?parseInt(s):h.quality},g=function(e){var t=h.quality,a=h.language,n=h.subtitles;w.get("userPreferredQuality")&&(t=parseInt(w.get("userPreferredQuality"))),w.get("userPreferredAudioLanguage")&&(a=w.get("userPreferredAudioLanguage")),w.get("userPreferredTextLanguage")&&(n=w.get("userPreferredTextLanguage")),window.customConfig&&(t=window.customConfig.quality,a=window.customConfig.language,n=window.customConfig.subtitles,window.customConfig=null),o.configure({preferredAudioLanguage:a,preferredTextLanguage:n});var r=e.sort(function(e,t){return e.height-t.height}).filter(function(e){return"variant"===e.type&&e.height<=t}),c=r.filter(function(e){return e.language===a}),l=e.filter(function(e){return"text"===e.type}).filter(function(e){return e.language===n});return console.log(l),[].concat(Object(f.a)(l),[c.length>0?c.pop():r.pop()])},b=function(e,t){return window.dispatchEvent(new CustomEvent("storage-progress",{detail:{content:e,progress:t}}))},o.configure({offline:{progressCallback:b,trackSelectionCallback:g},preferredAudioLanguage:p.language,preferredTextLanguage:p.subtitles}),e.next=17,Promise.all([a,l]);case 17:return E=e.sent,N=Object(m.a)(E,2),x=N[0],O=N[1],e.abrupt("return",t({type:"INIT_DONE",payload:{configuration:p,dbIndex:O,isInit:!0,isSupported:n&&r,player:o,storage:c,videos:x}}));case 22:return e.abrupt("return",t({type:"INIT_DONE",payload:Object(d.a)({},y,{isInit:!0,isSupported:!1})}));case 23:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),x=function(e,t){var a=t.type,n=t.payload,r=t.dispatch;switch(a){case"INIT":return N(r),e;case"INIT_DONE":return Object(d.a)({},e,{isInit:n.isInit,isSupported:n.isSupported,videos:n.videos,dbIndex:n.dbIndex,configuration:n.configuration,player:n.player,storage:n.storage});case"UPDATE_DB_INDEX":return Object(d.a)({},e,{dbIndex:n.dbIndex});case"SET_CONFIG_LANGUAGE":return w.set("userPreferredAudioLanguage",n,{path:"/"}),e.player.configure({preferredAudioLanguage:n}),Object(d.a)({},e,{configuration:Object(d.a)({},e.configuration,{language:n})});case"SET_CONFIG_SUBTITLES":return w.set("userPreferredTextLanguage",n,{path:"/"}),e.player.configure({preferredTextLanguage:"none"===n?"":n}),Object(d.a)({},e,{configuration:Object(d.a)({},e.configuration,{subtitles:n})});case"SET_CONFIG_QUALITY":return w.set("userPreferredQuality",n,{path:"/"}),Object(d.a)({},e,{configuration:Object(d.a)({},e.configuration,{quality:n})});default:return e}},O=function(){return r.a.createElement("div",{className:"container",style:{height:"100vh"}},r.a.createElement("div",{className:"row h-100 justify-content-center align-items-center"},r.a.createElement("div",{className:"spinner-grow",role:"status"},r.a.createElement("span",{className:"sr-only"},"\u0423\u0447\u0438\u0442\u0430\u0432\u0430\u045a\u0435..."))))},j=function(e){var t=e.routes,a=Object(n.useState)(!1),o=Object(m.a)(a,2),c=o[0],i=o[1],s=Object(n.useState)(!1),u=Object(m.a)(s,2),d=u[0],f=u[1],p=Object(n.useRef)(),g=function(){return f(!0)},b=function(){return f(!1)};Object(n.useEffect)(function(){return f(window.navigator.onLine),window.addEventListener("online",g),window.addEventListener("offline",b),function(){window.removeEventListener("online",g),window.removeEventListener("offline",b)}},[]);var v=function(e){p.current.contains(e.target)||i(!1)};return Object(n.useEffect)(function(){return c?document.addEventListener("mousedown",v):document.removeEventListener("mousedown",v),function(){document.removeEventListener("mousedown",v)}},[c]),r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-light text-white fixed-top",style:{background:"#149383"}},r.a.createElement(l.b,{className:"navbar-brand text-white",exact:!0,to:"/"},"Pipeline\u2122"),r.a.createElement("button",{className:"navbar-toggler text-white",type:"button","aria-expanded":c,"aria-label":"Toggle navigation",onClick:function(){return i(!c)}},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse ".concat(c?"show":""),ref:p},r.a.createElement("div",{className:"navbar-nav"},t.map(function(e){var t=e.exact,a=e.key,n=e.label,o=e.path;return r.a.createElement(l.b,{activeClassName:"active",className:"nav-item nav-link text-white",exact:t,key:a,onClick:function(){return i(!1)},to:o},n,r.a.createElement("span",{className:"sr-only"},"(current)"))}))),d?r.a.createElement("button",{type:"button",className:"btn btn-light",disabled:!0},"\u041d\u0430 \u043c\u0440\u0435\u0436\u0438"):r.a.createElement("button",{type:"button",className:"btn btn-danger",disabled:!0},"\u0412\u0430\u043d \u043c\u0440\u0435\u0436\u0435"))},k=function(){var e=Object(p.a)(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",navigator.storage.estimate().then(function(e){var t=e.quota,a=e.usage;return{quota:Math.round(t/1e6),usage:Math.round(a/1e6)}}));case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(n.useState)({usage:0,quota:100}),t=Object(m.a)(e,2),a=t[0],o=t[1];return Object(n.useEffect)(function(){if("storage"in navigator&&"estimate"in navigator.storage){var e=setInterval(function(){k().then(o)},5e3);return k().then(o),function(){return clearInterval(e)}}},[]),r.a.createElement("div",{className:"card",style:{marginTop:"1rem"}},r.a.createElement("div",{className:"card-body"},"\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u043e \u0458\u0435 ",a.quota,"MB \u043c\u0435\u043c\u043e\u0440\u0438\u0458\u0441\u043a\u043e\u0433 \u043f\u0440\u043e\u0441\u0442\u043e\u0440\u0430. ",r.a.createElement("br",null),r.a.createElement("br",null)," \u0423 \u0443\u043f\u043e\u0442\u0440\u0435\u0431\u0438: ",a.usage,"MB. ",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"progress",style:{height:"2rem"}},r.a.createElement("div",{className:"progress-bar bg-info",role:"progressbar",style:{width:"".concat(a.usage/a.quota*100,"%")},"aria-valuenow":a.usage,"aria-valuemin":"0","aria-valuemax":a.quota}))))},C=function(e){var t=e.id,a=e.removeMedia,n=e.title,o=e.downloadedOn,c=e.quality;return r.a.createElement("li",{className:"list-group-item"},n,r.a.createElement("br",null),r.a.createElement("small",null,"\u0414\u0430\u0442\u0443\u043c \u043f\u0440\u0435\u0443\u0437\u0438\u043c\u0430\u045a\u0430: ",o),r.a.createElement("br",null),r.a.createElement("small",null,"\u041a\u0432\u0430\u043b\u0438\u0442\u0435\u0442: ",c,"p"),r.a.createElement("hr",null),r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement(l.b,{className:"btn btn-primary",to:"/offline/".concat(t)},"\u041f\u0440\u0435\u0433\u043b\u0435\u0434 \u0432\u0438\u0434\u0435\u0430"),r.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:a},"\u0411\u0440\u0438\u0441\u0430\u045a\u0435 \u0432\u0438\u0434\u0435\u0430")))},_=function(e){var t=e.title,a=e.dateStarted,n=e.progress;return r.a.createElement("li",{className:"list-group-item"},t,r.a.createElement("br",null),r.a.createElement("small",null,"\u0414\u0430\u0442\u0443\u043c \u043f\u0440\u0435\u0443\u0437\u0438\u043c\u0430\u045a\u0430: ",a),r.a.createElement("hr",null),r.a.createElement("div",{className:"progress",style:{marginBottom:"0.5rem"}},r.a.createElement("div",{className:"progress-bar progress-bar-striped progress-bar-animated",role:"progressbar","aria-valuenow":100*n,"aria-valuemin":"0","aria-valuemax":"100",style:{width:"".concat(100*n,"%")}})))},L=function(){var e=Object(n.useContext)(E),t=e.state,a=t.dbIndex,o=t.storage,c=e.dispatch,l=Object(n.useState)({content:null,progress:0}),i=Object(m.a)(l,2),s=i[0],d=s.content,f=s.progress,g=i[1];Object(n.useEffect)(function(){o&&function(){var e=Object(p.a)(u.a.mark(function e(){var t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.list();case 2:t=e.sent,c({type:"UPDATE_DB_INDEX",payload:{dbIndex:t}});case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[c,o]);var b=function(e){g(e.detail)};Object(n.useEffect)(function(){return window.addEventListener("storage-progress",b),function(){window.removeEventListener("storage-progress",b)}},[]);var v=function(){var e=Object(p.a)(u.a.mark(function e(t){var a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.remove(t);case 2:return e.next=4,o.list();case 4:a=e.sent,c({type:"UPDATE_DB_INDEX",payload:{dbIndex:a}});case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),w=Object(n.useRef)(function(e,t,a){var n;return function(){var r=this,o=arguments,c=a&&!n;clearTimeout(n),n=setTimeout(function(){n=null,a||e.apply(r,o)},t),c&&e.apply(r,o)}}(Object(p.a)(u.a.mark(function e(){var t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return g({content:null,progress:0}),e.next=3,o.list();case 3:t=e.sent,c({type:"UPDATE_DB_INDEX",payload:{dbIndex:t}});case 5:case"end":return e.stop()}},e)})),1e3));return Object(n.useEffect)(function(){d&&w.current()}),r.a.createElement(n.Fragment,null,r.a.createElement("ul",{className:"list-group"},d&&r.a.createElement(_,{title:d.appMetadata.title,progress:f,dateStarted:d.appMetadata.downloaded}),a.reverse().map(function(e,t){var a=e.appMetadata,n=e.offlineUri,o=e.tracks,c=o.find(function(e){return"variant"===e.type}),l=o.find(function(e){return"text"===e.type});return r.a.createElement(C,{title:a.title,key:"download_".concat(t,"_").concat(a.title),done:!0,id:a.id,removeMedia:function(){return v(n)},downloadedOn:a.downloaded,language:c.language,subtitles:l?l.language:"None",quality:c.height})})),r.a.createElement(I,{max:2e3,current:500}))},T=function(){return r.a.createElement("div",null," ",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{class:"jumbotron",style:{color:"white",backgroundImage:"url(https://github.com/owlCoder/pipeline/blob/www/static/Pozadina4.jpg?raw=true)",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",height:"200%",width:"100%",border:"1px solid white","border-radius":"25px"}},r.a.createElement("div",{class:"container"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h1",{class:"display-4"},"Pipeline \u0458\u0435 \u043e\u043d\u043b\u0430\u0458\u043d!"),r.a.createElement("p",null,"\u041a\u043e\u0440\u0438\u0441\u0442\u0438\u0442\u0435 \u043d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u043e\u043d\u0438 \u043c\u0435\u043d\u0438 \u043a\u0430\u043a\u043e \u0431\u0438 \u0441\u0442\u0435 \u043f\u0440\u0438\u0441\u0442\u0443\u043f\u0438\u043b\u0438 \u0434\u0440\u0443\u0433\u0438\u043c \u043c\u043e\u0433\u0443\u045b\u043d\u043e\u0441\u0442\u0438\u043c\u0430 \u0430\u043f\u043b\u0438\u043a\u0430\u0446\u0438\u0458\u0435.")," ",r.a.createElement("br",null),r.a.createElement("br",null))))},S=function(e){var t=e.id,a=e.onClickDownload,o=e.poster,c=e.tagline,i=e.title,s=e.languages,u=e.qualities,d=e.subtitles,f=Object(n.useRef)(),p=Object(n.useState)(!1),g=Object(m.a)(p,2),b=g[0],v=g[1],E=Object(n.useState)(s[0]),w=Object(m.a)(E,2),h=w[0],y=(w[1],Object(n.useState)(d.length?d[0]:"")),N=Object(m.a)(y,2),x=N[0],O=(N[1],Object(n.useState)(u[0])),j=Object(m.a)(O,2),k=j[0],I=j[1],C=function(e){f.current.contains(e.target)||v(!1)};return Object(n.useEffect)(function(){return b?document.addEventListener("mousedown",C):document.removeEventListener("mousedown",C),function(){document.removeEventListener("mousedown",C)}},[b]),r.a.createElement("div",{className:"col-md-6",style:{marginBottom:"1rem"}},r.a.createElement("div",{className:"card bg-dark text-white",style:{background:"black"}},r.a.createElement("img",{alt:"image_".concat(i),className:"card-img-top",src:o,style:{minHeight:"10rem",opacity:"0.4",borderRadius:".25rem"}}),r.a.createElement("div",{className:"card-img-overlay d-flex justify-content-between flex-column"},r.a.createElement("h5",{className:"card-title"},i),r.a.createElement("p",{className:"card-text"},c),r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement("div",{className:"btn-group",role:"group"},r.a.createElement("button",{className:"btn btn-secondary",onClick:a,type:"button",title:"\u041f\u043e\u0434\u0440\u0430\u0437\u0443\u043c\u0435\u0432\u0430\u043d\u043e \u043f\u0440\u0435\u0443\u0437\u0438\u043c\u0430\u045a\u0435"},"\u041f\u0440\u0435\u0443\u0437\u0438\u043c\u0430\u045a\u0435"),r.a.createElement("button",{"aria-expanded":"false","aria-haspopup":"true",className:"btn btn-secondary dropdown-toggle dropdown-toggle-split","data-toggle":"dropdown",id:"dropdown_download_options-".concat(t),onClick:function(){return v(!0)},type:"button",title:"\u041f\u0440\u0435\u0443\u0437\u0438\u043c\u0430\u045a\u0435 \u0441\u0430 \u043f\u043e\u0441\u0435\u0431\u043d\u043e\u043c \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0458\u043e\u043c"},r.a.createElement("span",{className:"sr-only"},"\u0421\u0430\u043a\u0440\u0438\u0432\u0430\u045a\u0435 \u043c\u0435\u043d\u0438\u0458\u0430")),r.a.createElement("div",{"aria-labelledby":"dropdown_download_options-".concat(t),className:'dropdown-menu dropdown-menu-right"'.concat(b?" show":""),ref:f},r.a.createElement("form",{className:"px-4"},r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-form-label col-form-label-sm",htmlFor:"dropdown_download_options-".concat(t,"-quality")},"\u041a\u0432\u0430\u043b\u0438\u0442\u0435\u0442"),r.a.createElement("select",{className:"custom-select custom-select-sm",defaultValue:k||"",id:"dropdown_download_options-".concat(t,"-quality"),onChange:function(e){return I(e.target.value)}},u.map(function(e,a){return r.a.createElement("option",{key:"dropdown_download_options-".concat(t,"-quality-").concat(a),value:e},e,"p")}))),r.a.createElement("button",{className:"btn btn-secondary btn-sm",onClick:function(){window.customConfig={language:h,subtitles:x,quality:k},a()},type:"button"},"\u041f\u0440\u0435\u0443\u0437\u0438\u043c\u0430\u045a\u0435")))),r.a.createElement(l.b,{className:"btn btn-primary",exact:!0,role:"button",to:"/stream/".concat(t)},"\u041f\u0440\u0435\u0433\u043b\u0435\u0434 \u0443\u0436\u0438\u0432\u043e")))))},P=function(e){var t=e.history,a=Object(n.useContext)(E).state,o=a.dbIndex,c=a.storage,l=a.videos,i=Object(n.useState)(""),s=Object(m.a)(i,2),u=s[0],d=s[1];return r.a.createElement(n.Fragment,null,r.a.createElement("form",{className:"input-group",style:{paddingBottom:"1rem"}},r.a.createElement("input",{className:"form-control",type:"text",placeholder:"\u041f\u0440\u0435\u0442\u0440\u0430\u0433\u0430",onChange:function(e){return d(e.target.value)},value:u}),u&&r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{className:"btn btn-outline-secondary",onClick:function(){return d("")}},"Clear"))),r.a.createElement("div",{className:"row"},l.filter(function(e){return e.title.includes(u)}).map(function(e,a){return r.a.createElement(S,Object.assign({},e,{key:"media_".concat(a,"_").concat(e.title),onClickDownload:function(){return function(e){if(c.getStoreInProgress())alert("\u041f\u0440\u0435\u0443\u0437\u0438\u043c\u0430\u045a\u0435 \u0458\u0435 \u0443 \u0442\u043e\u043a\u0443!");else{if(o.find(function(t){return t.appMetadata.id===e}))return void alert("\u0412\u0438\u0434\u0435\u043e \u0458\u0435 \u0432\u0435\u045b \u043f\u0440\u0435\u0443\u0437\u0435\u0442.");var a=l.find(function(t){return t.id===e});c.store(a.manifestUri,{downloaded:Date(),id:a.id,title:a.title}),t.push("/downloads")}}(e.id)}}))})))},q=a(24),A=(a(41),new g.a),D=function(e){var t=e.match,a=e.history,o=Object(n.useRef)(null),c=Object(n.useContext)(E).state,l=c.player,i=c.storage,s=c.videos.find(function(e){return e.id===t.params.id});return Object(n.useEffect)(function(){var e=o.current,a=function(){0!==e.currentTime&&A.set("videoPlaybackTime:"+s.id,e.currentTime)};e.addEventListener("pause",a),e.addEventListener("ended",a);var n=function(e){var t=A.get("videoPlaybackTime:".concat(s.id));t&&0!==parseInt(t)?Object(q.confirmAlert)({title:"\u041d\u0430\u0441\u0442\u0430\u0432\u0438 \u0433\u0434\u0435 \u0441\u0438 \u0441\u0442\u0430\u043e?",message:"\u0414\u0430 \u043b\u0438 \u0436\u0435\u043b\u0438\u0442\u0435 \u0434\u0430 \u043d\u0430\u0441\u0442\u0430\u0432\u0438\u0442\u0435 \u0441\u0430 \u0433\u043b\u0435\u0434\u0430\u045a\u0435\u043c \u0441\u043d\u0438\u043c\u043a\u0430 \u0433\u0434\u0435 \u0441\u0442\u0435 \u043f\u0440\u043e\u0448\u043b\u0438 \u043f\u0443\u0442 \u0441\u0442\u0430\u043b\u0438?",buttons:[{label:"\u041d\u0430\u0441\u0442\u0430\u0432\u0438",onClick:function(){return r(e,t)}},{label:"\u041e\u0442\u043f\u043e\u0447\u0435\u0442\u043a\u0430",onClick:function(){A.set("videoPlaybackTime:"+s.id,0),r(e,t=0)}}]}):r(e,t)},r=function(e,a){"stream"===e?l.load(s.manifestUri,a):i.list().then(function(e){var n=e.find(function(e){return e.appMetadata.id===t.params.id});l.load(n.offlineUri,a)})};return l.attach(e),"stream"===t.params.mode?n("stream"):n("offline"),function(){l.detach(e),a(),e.removeEventListener("pause",a),e.removeEventListener("ended",a)}},[t,s,l,i]),r.a.createElement("div",{className:"card bg-light"},r.a.createElement("div",{className:"card-header"},s?s.title:"404",r.a.createElement("button",{type:"button",className:"close","aria-label":"Close",onClick:a.goBack},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement("div",{className:"card-body"},s?r.a.createElement("video",{ref:o,style:{width:"100%",maxHeight:"80vh"},poster:s.poster,controls:!0,autoPlay:!0}):"Video not found."))},U=[{label:"\u0421\u0440\u043f\u0441\u043a\u0438",id:"en"},{label:"\u0415\u043d\u0433\u043b\u0435\u0441\u043a\u0438",id:"sr"}],B=function(){var e=Object(n.useContext)(E),t=e.state,a=e.dispatch,o=t.configuration;return r.a.createElement("div",{className:"form-check"},r.a.createElement("form",null,r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"row"},r.a.createElement("legend",{className:"col-form-label col-sm-2 pt-0"},"\u0408\u0435\u0437\u0438\u043a"),r.a.createElement("div",{className:"col"},U.map(function(e){var t=e.label,n=e.id;return r.a.createElement("div",{className:"form-check",key:"key_language_".concat(n)},r.a.createElement("input",{className:"form-check-input",type:"radio",name:"languageRadios",id:"language_".concat(n),value:n,checked:n===o.language,onChange:function(e){return a({type:"SET_CONFIG_LANGUAGE",payload:e.target.value})}}),r.a.createElement("label",{className:"form-check-label",htmlFor:"language_".concat(n)},t))})))," ",r.a.createElement("br",null),r.a.createElement("div",{className:"row"},r.a.createElement("legend",{className:"col-form-label col-sm-2 pt-0"},"\u041a\u0432\u0430\u043b\u0438\u0442\u0435\u0442 \u0432\u0438\u0434\u0435\u0430"),r.a.createElement("div",{className:"col"},[1080,720,480].map(function(e){return r.a.createElement("div",{className:"form-check",key:"key_quality_".concat(e)},r.a.createElement("input",{className:"form-check-input",type:"radio",name:"qualityRadios",id:"quality_".concat(e),value:e,checked:e===o.quality,onChange:function(e){return a({type:"SET_CONFIG_QUALITY",payload:parseInt(e.target.value)})}}),r.a.createElement("label",{className:"form-check-label",htmlFor:"quality_".concat(e)},e))})))))))},F=[{exact:!0,key:"media",label:"\u0421\u043d\u0438\u043c\u0446\u0438 \u0447\u0430\u0441\u043e\u0432\u0430",path:"/media"},{exact:!0,key:"downloads",label:"\u041f\u0440\u0435\u0443\u0437\u0435\u0442\u043e",path:"/downloads"},{exact:!0,key:"configuration",label:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0458\u0430 - Beta",path:"/configuration"}],R=function(){var e=Object(n.useContext)(E),t=e.state,a=t.isInit,o=t.isSupported,c=e.dispatch;return Object(n.useEffect)(function(){!a&&c({type:"INIT",dispatch:c})}),a?o?r.a.createElement(l.a,{onUpdate:function(){return window.scrollTo(0,0)}},r.a.createElement("div",{className:"App"},r.a.createElement(j,{routes:F}),r.a.createElement("main",{className:"container",style:{paddingTop:"4.5rem"}},r.a.createElement(n.Fragment,null,r.a.createElement(i.a,{component:T,exact:!0,path:"/"}),r.a.createElement(i.a,{component:P,exact:!0,path:"/media"}),r.a.createElement(i.a,{component:L,exact:!0,path:"/downloads"}),r.a.createElement(i.a,{component:D,exact:!0,path:"/:mode(stream|offline)/:id"}),r.a.createElement(i.a,{component:B,exact:!0,path:"/configuration"}))))):r.a.createElement("div",{className:"alert alert-danger",role:"alert"},r.a.createElement("h4",{className:"alert-heading"},"\u0422\u0440\u0435\u043d\u0443\u0442\u043d\u0438 \u043f\u0440\u0435\u0433\u043b\u0435\u0434\u0430\u0447 \u043d\u0438\u0458\u0435 \u043f\u043e\u0434\u0440\u0436\u0430\u043d!"),r.a.createElement("hr",null),"Unfortunately your browser does not support all required technologies. Please update your browser. Safari on iOS is not supported, but Chrome and Firefox on iOS are."):r.a.createElement(O,null)},M=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function G(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(r.a.createElement(function(e){var t=e.children,a=Object(n.useReducer)(x,y),o=Object(m.a)(a,2),c={state:o[0],dispatch:o[1]};return r.a.createElement(E.Provider,{value:c},t)},null,r.a.createElement(R,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/pipeline",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/pipeline","/custom-sw.js");M?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):G(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):G(t,e)})}}()}},[[26,1,2]]]);
//# sourceMappingURL=main.7f92f892.chunk.js.map
