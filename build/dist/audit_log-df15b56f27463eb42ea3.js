(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"6bbB":function(e,t,a){"use strict";a.r(t);var n,r,o,l,i,c,s,u,m,p,g,d=a("q1tI"),f=a.n(d),_=a("i8i4"),h=a.n(_),b=a("2vnA"),y=a("XoI5"),v=function(e,t){return y.a.get("/tola_management/program/".concat(e,"/audit_log/"),{params:{page:t}}).then(function(e){var t=e.data,a=t.count,n=(t.results.length,t.page_count);return{logs:t.results,total_pages:n,total_entries:a,next_page:t.next,prev_page:t.previous}})};function E(e,t,a,n){a&&Object.defineProperty(e,t,{enumerable:a.enumerable,configurable:a.configurable,writable:a.writable,value:a.initializer?a.initializer.call(n):void 0})}function w(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function x(a,n,e,t,r){var o={};return Object.keys(t).forEach(function(e){o[e]=t[e]}),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=e.slice().reverse().reduce(function(e,t){return t(a,n,e)||e},o),r&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(r):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(a,n,o),o=null),o}var N=(r=x((n=function(){function a(e,t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),E(this,"program_id",r,this),E(this,"program_name",o,this),E(this,"log_rows",l,this),E(this,"fetching",i,this),E(this,"current_page",c,this),E(this,"entries_count",s,this),E(this,"total_pages",u,this),E(this,"next_page",m,this),E(this,"previous_page",p,this),E(this,"expando_rows",g,this),this.program_id=e,this.program_name=t,this.fetchProgramAuditLog()}var e,t,n;return e=a,(t=[{key:"fetchProgramAuditLog",value:function(){var t=this;this.fetching=!0,v(this.program_id,this.current_page+1).then(function(e){Object(b.n)(function(){t.fetching=!1,t.log_rows=e.logs,t.entries_count=e.total_entries,t.total_pages=e.total_pages,t.next_page=e.next_page,t.previous_page=e.previous_page})})}},{key:"changePage",value:function(e){e.selected!=this.current_page&&(this.current_page=e.selected,this.fetchProgramAuditLog())}},{key:"toggleRowExpando",value:function(e){this.expando_rows.has(e)?this.expando_rows.delete(e):this.expando_rows.add(e)}},{key:"expandAllExpandos",value:function(){var t=this;this.log_rows.forEach(function(e){return t.expando_rows.add(e.id)})}},{key:"collapsAllExpandos",value:function(){this.expando_rows.clear()}}])&&w(e.prototype,t),n&&w(e,n),a}()).prototype,"program_id",[b.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),o=x(n.prototype,"program_name",[b.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),l=x(n.prototype,"log_rows",[b.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),i=x(n.prototype,"fetching",[b.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),c=x(n.prototype,"current_page",[b.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),s=x(n.prototype,"entries_count",[b.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),u=x(n.prototype,"total_pages",[b.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),m=x(n.prototype,"next_page",[b.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),p=x(n.prototype,"previous_page",[b.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),g=x(n.prototype,"expando_rows",[b.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new Set}}),x(n.prototype,"fetchProgramAuditLog",[b.d],Object.getOwnPropertyDescriptor(n.prototype,"fetchProgramAuditLog"),n.prototype),x(n.prototype,"changePage",[b.d],Object.getOwnPropertyDescriptor(n.prototype,"changePage"),n.prototype),x(n.prototype,"toggleRowExpando",[b.d],Object.getOwnPropertyDescriptor(n.prototype,"toggleRowExpando"),n.prototype),x(n.prototype,"expandAllExpandos",[b.d],Object.getOwnPropertyDescriptor(n.prototype,"expandAllExpandos"),n.prototype),x(n.prototype,"collapsAllExpandos",[b.d],Object.getOwnPropertyDescriptor(n.prototype,"collapsAllExpandos"),n.prototype),n),O=a("okNM"),k=a("RCjz"),j=a("IP2g"),P=a("DDFe");function C(e){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function z(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function A(e,t){return!t||"object"!==C(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function L(e){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function D(e,t){return(D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=[],n=!0,r=!1,o=void 0;try{for(var l,i=e[Symbol.iterator]();!(n=(l=i.next()).done)&&(a.push(l.value),!t||a.length!==t);n=!0);}catch(e){r=!0,o=e}finally{try{n||null==i.return||i.return()}finally{if(r)throw o}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var R=function(e){var t=e.data,a=e.name,n=e.pretty_name;return"evidence_url"==a?f.a.createElement("div",{className:"change__field"},f.a.createElement("strong",null,n),": ","N/A"!=t&&""!==t?f.a.createElement("a",{href:t,target:"_blank"},"Link"):t):"disaggregation_values"===a?Object.entries(t).length?f.a.createElement("div",{className:"changelog__change__targets"},f.a.createElement("h4",{className:"text-small"},gettext("Disaggregated values changed")),Object.entries(t).map(function(e){var t=S(e,2),a=t[0],n=t[1];return f.a.createElement("div",{className:"change__field",key:a},f.a.createElement("strong",null,n.name,":")," ",n.value)})):null:f.a.createElement("div",{className:"change__field"},f.a.createElement("strong",null,n),": ",t)},I=function(e){var t=e.data,a=(e.name,e.pretty_name);return f.a.createElement("p",null,a,": ",t)},T=function(e){var t=e.data,a=e.name,n=e.pretty_name;return"targets"==a?f.a.createElement("div",{className:"changelog__change__targets"},f.a.createElement("h4",{className:"text-small"},gettext("Targets changed")),Object.entries(t).map(function(e){var t=S(e,2),a=t[0],n=t[1];return f.a.createElement("div",{className:"change__field",key:a},f.a.createElement("strong",null,n.name,":")," ",n.value)})):f.a.createElement("div",{className:"change__field"},f.a.createElement("strong",null,n,":")," ",null!=t?t.toString():gettext("N/A"))},q=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),A(this,L(t).apply(this,arguments))}var a,n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&D(e,t)}(t,f.a.Component),a=t,(n=[{key:"renderType",value:function(e,t,a,n){switch(e){case"indicator_changed":case"indicator_created":case"indicator_deleted":return f.a.createElement(T,{data:t,name:a,pretty_name:n});case"result_changed":case"result_created":case"result_deleted":return f.a.createElement(R,{data:t,name:a,pretty_name:n});case"program_dates_changed":return f.a.createElement(I,{data:t,name:a,pretty_name:n})}}},{key:"render",value:function(){var e=this.props,t=e.data,a=e.type,n=e.name,r=e.pretty_name;return this.renderType(a,t,n,r)}}])&&z(a.prototype,n),r&&z(a,r),t}(),F=Object(O.c)(function(e){var t=e.store;return f.a.createElement("button",{className:"btn btn-medium text-action btn-sm",onClick:function(){return t.expandAllExpandos()},disabled:t.log_rows.length===t.expando_rows.size},f.a.createElement("i",{className:"fas fa-plus-square"}),gettext("Expand all"))}),X=Object(O.c)(function(e){var t=e.store;return f.a.createElement("button",{className:"btn btn-medium text-action btn-sm",onClick:function(){return t.collapsAllExpandos()},disabled:0===t.expando_rows.size},f.a.createElement("i",{className:"fas fa-minus-square"}),gettext("Collapse all"))}),$=Object(O.c)(function(e){var a=e.store;return f.a.createElement("div",{id:"audit-log-index-view"},f.a.createElement("header",{className:"page-title"},f.a.createElement("h1",null,f.a.createElement("small",null,gettext("Indicator change log:"))," ",a.program_name)),f.a.createElement("div",{className:"admin-list__controls"},f.a.createElement("div",{className:"controls__bulk-actions"},f.a.createElement("div",{className:"btn-group"},f.a.createElement(F,{store:a}),f.a.createElement(X,{store:a}))),f.a.createElement("div",{className:"controls__buttons"},f.a.createElement("a",{className:"btn btn-secondary btn-sm",href:"/api/tola_management/program/".concat(a.program_id,"/export_audit_log")},f.a.createElement("i",{className:"fas fa-download"}),gettext("Excel")))),f.a.createElement("div",{className:"admin-list__table"},f.a.createElement(P.a,{isLoading:a.fetching},f.a.createElement("table",{className:"table table-sm table-bordered bg-white text-small changelog"},f.a.createElement("thead",null,f.a.createElement("tr",null,f.a.createElement("th",{className:"text-nowrap"},gettext("Date and time")),f.a.createElement("th",{className:"text-nowrap"},gettext("No.")),f.a.createElement("th",{className:"text-nowrap"},gettext("Indicator")),f.a.createElement("th",{className:"text-nowrap"},gettext("User")),f.a.createElement("th",{className:"text-nowrap"},gettext("Organization")),f.a.createElement("th",{className:"text-nowrap"},gettext("Change type")),f.a.createElement("th",{className:"text-nowrap"},gettext("Previous entry")),f.a.createElement("th",{className:"text-nowrap"},gettext("New entry")),f.a.createElement("th",{className:"text-nowrap"},gettext("Reason for change")))),a.log_rows.map(function(t){var e=a.expando_rows.has(t.id);return f.a.createElement("tbody",{key:t.id},f.a.createElement("tr",{className:e?"changelog__entry__header is-expanded":"changelog__entry__header",onClick:function(){return a.toggleRowExpando(t.id)}},f.a.createElement("td",{className:"text-action"},f.a.createElement(j.a,{icon:e?"caret-down":"caret-right"})," ",t.date),f.a.createElement("td",null,t.indicator?t.indicator.number:gettext("N/A")),f.a.createElement("td",null,t.indicator?t.indicator.name:gettext("N/A")),f.a.createElement("td",null,t.user),f.a.createElement("td",null,t.organization),f.a.createElement("td",{className:"text-nowrap"},t.pretty_change_type),f.a.createElement("td",null),f.a.createElement("td",null),f.a.createElement("td",null)),e&&f.a.createElement("tr",{className:"changelog__entry__row",key:t.id},f.a.createElement("td",null),f.a.createElement("td",null),f.a.createElement("td",null),f.a.createElement("td",null),f.a.createElement("td",null),f.a.createElement("td",null),f.a.createElement("td",{className:"changelog__change--prev"},t.diff_list.map(function(e){return f.a.createElement(q,{key:e.name,name:e.name,pretty_name:e.pretty_name,type:t.change_type,data:e.prev})})),f.a.createElement("td",{className:"changelog__change--new"},t.diff_list.map(function(e){return f.a.createElement(q,{key:e.name,name:e.name,pretty_name:e.pretty_name,type:t.change_type,data:e.new})})),f.a.createElement("td",{className:"changelog__change--rationale"},t.rationale)))}))),f.a.createElement("div",{className:"admin-list__metadata"},f.a.createElement("div",{className:"metadata__count text-muted text-small"},a.entries_count?"".concat(a.entries_count," ").concat(gettext("entries")):"--"),f.a.createElement("div",{className:"metadata__controls"},a.total_pages&&f.a.createElement(k.a,{pageCount:a.total_pages,initialPage:a.current_page,onPageChange:function(e){return a.changePage(e)}})))))}),B=new N(jsContext.program_id,jsContext.program_name);h.a.render(f.a.createElement($,{store:B}),document.querySelector("#app_root"))},DDFe:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],0<=t.indexOf(a)||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],0<=t.indexOf(a)||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}t.a=function(e){var t=e.children,a=e.isLoading,n=e.className,r=c(e,["children","isLoading","className"]),o=a?"loading":"";return l.a.createElement("div",i({className:"loading-spinner__container "+o+" "+(n||"")},r),l.a.createElement("div",{className:"loading-spinner__overlay"},l.a.createElement("div",{className:"loading-spinner__spinner"})),t)}},RCjz:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("werx"),l=a.n(o);a("okNM");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}t.a=function(e){return r.a.createElement(l.a,i({previousLabel:"‹",previousClassName:"page-item previous",previousLinkClassName:"page-link",nextLabel:"›",nextClassName:"page-item next",nextLinkClassName:"page-link",breakLabel:"...",disabledClassName:"disabled",breakClassName:"page-item disabled",breakLinkClassName:"page-link",pageClassName:"page-item",pageLinkClassName:"page-link",marginPagesDisplayed:2,pageRangeDisplayed:5,containerClassName:"pagination",activeClassName:"active"},e))}},XoI5:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var n=a("vDqi"),r=a.n(n).a.create({withCredentials:!0,baseURL:"/api/",headers:{"X-CSRFToken":document.cookie.replace(/(?:(?:^|.*;\s*)csrftoken\s*\=\s*([^;]*).*$)|^.*$/,"$1")}})}},[["6bbB",0,1]]]);