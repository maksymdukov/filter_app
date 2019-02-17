(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a(36)},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(16),r=a.n(i),c=a(4),s=a(5),u=a(8),o=a(6),p=a(7),m=a(2),d=(a(31),a(32),a(33),function(e){var t=e.listDB,a=e.handleSelectFilter;return"success"===t.status?t.payload.results.reduce(function(e,t){return t.tags.forEach(function(t){e.includes(t)||e.push(t)}),e},[]).map(function(e){var t=e.charAt(0).toUpperCase()+e.slice(1);return l.a.createElement("li",{key:e,className:"filterItem"},l.a.createElement("label",{className:"radio"},l.a.createElement("input",{name:"filter",type:"radio",value:e,onChange:a}),l.a.createElement("div",{className:"radio__text"},t)))}):null}),h=function(e){var t=e.inputFilter,a=e.handleOnChange,n=e.handleSelectFilter;return l.a.createElement("li",{className:"filterItem"},l.a.createElement("label",{className:"radio"},l.a.createElement("input",{name:"filter",type:"radio",checked:!!t,disabled:!t,value:"",onChange:n}),l.a.createElement("div",{className:"radio__text"},l.a.createElement("div",{className:"searchWrapper"},l.a.createElement("input",{type:"text",onChange:a,value:t,placeholder:"Search"}),l.a.createElement("img",{src:"./images/search_icon.2b573fbc.png"})))))},f=(a(34),function(){return l.a.createElement("div",{className:"loading"},l.a.createElement("span",{className:"dot1"}),l.a.createElement("span",{className:"dot2"}),l.a.createElement("span",{className:"dot3"}))}),E=function(e){var t=e.activeFilter,a=e.inputFilter,n=e.handleSelectFilter;return l.a.createElement("li",{className:"filterItem"},l.a.createElement("label",{className:"radio"},l.a.createElement("input",{name:"filter",type:"radio",value:"",onChange:n,checked:!t&&!a}),l.a.createElement("div",{className:"radio__text"},"All")))},v=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(o.a)(t).call(this,e))).handleOnChange=function(e){var t=e.target.value.replace(/\s{2,}/," ");t=t.replace(/^\s+(.*)/,"$1"),a.props.setInputFilter(t),t&&a.props.activeFilter&&a.props.selectFilter("")},a.handleSelectFilter=function(e){a.props.selectFilter(e.target.value),a.props.inputFilter&&a.props.setInputFilter("")},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.listDB,a=e.activeFilter,n=e.inputFilter;return l.a.createElement("div",{className:"filter"},l.a.createElement("ul",null,l.a.createElement(h,Object.assign({inputFilter:n},{handleOnChange:this.handleOnChange,handleSelectFilter:this.handleSelectFilter})),l.a.createElement(E,Object.assign({activeFilter:a},{inputFilter:n},{handleSelectFilter:this.handleSelectFilter})),t.loading?l.a.createElement("li",{className:"filterLoading"},l.a.createElement(f,null)):l.a.createElement(d,{listDB:t,handleSelectFilter:this.handleSelectFilter})))}}]),t}(l.a.Component),F=Object(m.b)(function(e){return{inputFilter:e.inputFilter,listDB:e.fetchList,activeFilter:e.activeFilter}},function(e){return{setInputFilter:function(t){e({type:"SET_INPUT_FILTER",payload:t})},selectFilter:function(t){e({type:"SET_ACTIVE_FILTER",filter:t})}}})(v),b=(a(35),function(e){var t=e.item,a=t.tags.map(function(e){return e.charAt(0).toUpperCase()+e.slice(1)});return l.a.createElement("li",{className:"showList__item"},l.a.createElement("div",{className:"showList__item-title"},t.title),l.a.createElement("div",{className:"showList__item-tag"},a.join(", ")))}),g=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e,t=this.props,a=t.listDB,n=t.activeFilter,i=t.inputFilter;return"success"===a.status&&(e=(i?a.payload.results.filter(function(e){return e.title.toLowerCase().startsWith(i.toLowerCase())}):a.payload.results.filter(function(e){return!n||e.tags.includes(n)})).map(function(e){return l.a.createElement(b,{key:e.title,item:e})})),"success"!==a.status?l.a.createElement("div",{className:"listLoading"},l.a.createElement(f,null)):l.a.createElement("div",{className:"showList"},l.a.createElement("ul",null,e))}}]),t}(l.a.Component),y=Object(m.b)(function(e){return{inputFilter:e.inputFilter,listDB:e.fetchList,activeFilter:e.activeFilter}},null)(g),O=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchList("sdks.json")}},{key:"render",value:function(){return l.a.createElement("div",{className:"app"},l.a.createElement(F,null),l.a.createElement(y,null))}}]),t}(n.Component),_=Object(m.b)(function(e){return{itemList:e.itemList,listDB:e.fetchList}},function(e){return{fetchList:function(t){e({type:"REQUEST_ITEMS"}),setTimeout(function(){fetch(t).then(function(e){return e.json()}).then(function(t){e({type:"RECEIVED_ITEMS",payload:t})})},1e3)}}})(O),j=a(1),I=a(18),N=a(20),T=a(21),S=Object(j.combineReducers)({itemList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"CHANGE_ITEM_LIST":return n;case"ADD_ITEM_TO_LIST":return[].concat(Object(N.a)(e),[n]);default:return e}},fetchList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!1},t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"REQUEST_ITEMS":return Object(T.a)({},e,{loading:!0});case"RECEIVED_ITEMS":return{loading:!1,payload:n,status:"success"};default:return e}},inputFilter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"SET_INPUT_FILTER":return n;default:return e}},activeFilter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.filter;switch(a){case"SET_ACTIVE_FILTER":return n;default:return e}}}),L=a(19),C=Object(j.createStore)(S,Object(L.composeWithDevTools)(Object(j.applyMiddleware)(I.a)));r.a.render(l.a.createElement(m.a,{store:C},l.a.createElement(_,null)),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.eee62b66.chunk.js.map