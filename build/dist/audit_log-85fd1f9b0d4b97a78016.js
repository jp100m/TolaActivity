(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"5Xg7":function(e,t,n){"use strict";n.d(t,"a",function(){return m});var r=n("q1tI"),l=n.n(r),c=n("c7k8"),a=n("y2Vs");function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function n(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),(t=s(this,p(n).call(this,e))).cache=new c.c({fixedWidth:!0,defaultHeight:35}),t.filter_val="",t}var t,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(n,l.a.PureComponent),t=n,(r=[{key:"render",value:function(){var i=this,e=this.props,o=(e.options,e.children),t=e.maxHeight,n=(e.getValue,e.selectProps),r=o.length||0;return n.inputValue!==this.filter_val&&(this.filter_val=n.inputValue,this.cache.clearAll()),l.a.createElement("div",{style:{display:"flex",height:"100vh",maxHeight:t+"px"}},l.a.createElement("div",{style:{flex:"1 1 auto"}},l.a.createElement(c.a,null,function(e){var t=e.width,n=e.height;return l.a.createElement(c.e,{height:n,width:t,deferredMeasurementCache:i.cache,rowCount:r,rowHeight:i.cache.rowHeight,noRowsRenderer:function(){return l.a.createElement("div",null,"No selections available")},rowRenderer:function(e){var t=e.index,n=e.parent,r=e.key,a=e.style;return l.a.createElement(c.b,{key:r,cache:i.cache,parent:n,columnIndex:0,rowIndex:t},l.a.createElement("div",{style:a},o[t]))}})})))}}])&&u(t.prototype,r),a&&u(t,a),n}();t.b=function(e){return l.a.createElement(a.b,o({components:{VirtualizedMenuList:m}},e))}},"6bbB":function(e,t,n){"use strict";n.r(t);var r,a,i,o,l,c,u,s,p,f,m,g=n("q1tI"),d=n.n(g),h=n("i8i4"),b=n.n(h),y=n("2vnA"),v=n("XoI5"),_=function(e,t){return v.a.get("/tola_management/program/".concat(e,"/audit_log/"),{params:{page:t}}).then(function(e){var t=e.data,n=t.count,r=(t.results.length,t.page_count);return{logs:t.results,total_pages:r,total_entries:n,next_page:t.next,prev_page:t.previous}})};function E(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(n,r,e,t,a){var i={};return Object.keys(t).forEach(function(e){i[e]=t[e]}),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=e.slice().reverse().reduce(function(e,t){return t(n,r,e)||e},i),a&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(a):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(n,r,i),i=null),i}var O=(a=x((r=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),E(this,"program_id",a,this),E(this,"log_rows",i,this),E(this,"fetching",o,this),E(this,"current_page",l,this),E(this,"details_target",c,this),E(this,"entries_count",u,this),E(this,"total_pages",s,this),E(this,"next_page",p,this),E(this,"previous_page",f,this),E(this,"current_page",m,this),this.program_id=e,this.fetchProgramAuditLog()}var e,n,r;return e=t,(n=[{key:"fetchProgramAuditLog",value:function(){var t=this;this.fetching=!0,_(this.program_id,this.current_page+1).then(function(e){Object(y.m)(function(){t.fetching=!1,t.log_rows=e.logs,t.entries_count=e.total_entries,t.total_pages=e.total_pages,t.next_page=e.next_page,t.previous_page=e.previous_page})})}},{key:"toggleDetailsTarget",value:function(e){this.details_target==e?this.details_target=null:this.details_target=e}},{key:"changePage",value:function(e){e.selected!=this.current_page&&(this.current_page=e.selected,this.fetchProgramAuditLog())}}])&&w(e.prototype,n),r&&w(e,r),t}()).prototype,"program_id",[y.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),i=x(r.prototype,"log_rows",[y.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),o=x(r.prototype,"fetching",[y.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),l=x(r.prototype,"current_page",[y.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),c=x(r.prototype,"details_target",[y.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),u=x(r.prototype,"entries_count",[y.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),s=x(r.prototype,"total_pages",[y.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),p=x(r.prototype,"next_page",[y.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),f=x(r.prototype,"previous_page",[y.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),m=x(r.prototype,"current_page",[y.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),x(r.prototype,"fetchProgramAuditLog",[y.d],Object.getOwnPropertyDescriptor(r.prototype,"fetchProgramAuditLog"),r.prototype),x(r.prototype,"toggleDetailsTarget",[y.d],Object.getOwnPropertyDescriptor(r.prototype,"toggleDetailsTarget"),r.prototype),x(r.prototype,"changePage",[y.d],Object.getOwnPropertyDescriptor(r.prototype,"changePage"),r.prototype),r),j=n("okNM"),N=(n("TSYQ"),n("TGVD"),n("RCjz")),P=(n("Z2Y6"),n("H4hL")),k=n("DDFe");function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function z(e,t){return!t||"object"!==S(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function D(e,t){return(D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function R(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(r=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var I={indicator_changed:gettext("Indicator changed"),indicator_created:gettext("Indicator created"),indicator_deleted:gettext("Indicator deleted"),result_changed:gettext("Result changed"),result_created:gettext("Result created"),result_deleted:gettext("Result deleted"),program_dates_changed:gettext("Program Dates Changed")},L={1:gettext("Number"),2:gettext("Percentage")},A={1:gettext("N/A"),2:gettext("Increase (+)"),3:gettext("Decrease (-)")},M={evidence_url:gettext("Evidence Url"),evidence_name:gettext("Evidence Name"),date:gettext("Date"),target:gettext("Target"),value:gettext("Value")},H=function(e){var t=e.data,n=e.name;return"evidence_url"==n?d.a.createElement("p",null,M[n],": ","N/A"!=t?d.a.createElement("a",{href:t},"Link"):t):d.a.createElement("p",null,M[n],": ",t)},V={start_date:gettext("Start Date"),end_date:gettext("End Date")},q=function(e){var t=e.data,n=e.name;return d.a.createElement("p",null,V[n],": ",t)},F={name:gettext("Name"),unit_of_measure:gettext("Unit of Measure"),unit_of_measure_type:gettext("Unit of Measure Type"),is_cumulative:gettext("Is Cumulative"),lop_target:gettext("LOP Target"),direction_of_change:gettext("Direction of Change"),rationale_for_target:gettext("Rationale for Target"),baseline_value:gettext("Baseline Value"),baseline_na:gettext("Baseline N/A")},U=function(e){var t=e.data,n=e.name,r=function(){if("N/A"==t)return t;switch(n){case"unit_of_measure_type":return L[t];case"direction_of_change":return A[t];default:return t}}();return"targets"==n?d.a.createElement("div",null,d.a.createElement("p",null,"Targets"),Object.entries(t).map(function(e){var t=R(e,2),n=t[0],r=t[1];return d.a.createElement("p",{key:n},r.name,": ",r.value)})):d.a.createElement("p",null,F[n],": ",null!=r?r.toString():"N/A")},X=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),z(this,T(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&D(e,t)}(t,d.a.Component),n=t,(r=[{key:"renderType",value:function(e,t,n){switch(e){case"indicator_changed":case"indicator_created":case"indicator_deleted":return d.a.createElement(U,{data:t,name:n});case"result_changed":case"result_created":case"result_deleted":return d.a.createElement(H,{data:t,name:n});case"program_dates_changed":return d.a.createElement(q,{data:t,name:n})}}},{key:"render",value:function(){var e=this.props,t=e.data,n=e.type,r=e.name;return this.renderType(n,t,r)}}])&&C(n.prototype,r),a&&C(n,a),t}(),B=Object(j.a)(function(e){var t=e.store;return d.a.createElement("div",{id:"audit-log-index-view",className:"container-fluid row"},d.a.createElement("div",{className:"list-controls"},d.a.createElement("a",{className:"btn btn-link btn-secondary btn-sm",href:"/api/tola_management/program/".concat(t.program_id,"/export_audit_log")},gettext("Export to Excel"))),d.a.createElement("div",{className:"col col-sm-12 list-section"},d.a.createElement(k.a,{isLoading:t.fetching},d.a.createElement("table",{className:"list-table"},d.a.createElement("thead",null,d.a.createElement("tr",null,d.a.createElement("th",null,gettext("Date and Time")),d.a.createElement("th",null,gettext("No.")),d.a.createElement("th",{width:"25%"},gettext("Indicator")),d.a.createElement("th",null,gettext("User")),d.a.createElement("th",null,gettext("Organization")),d.a.createElement("th",null,gettext("Change Type")),d.a.createElement("th",null,gettext("Previous Entry")),d.a.createElement("th",null,gettext("New Entry")),d.a.createElement("th",null,gettext("Rationale")))),d.a.createElement("tbody",null,t.log_rows.map(function(t){return d.a.createElement("tr",{key:t.id},d.a.createElement("td",null,t.date),d.a.createElement("td",null,t.indicator?t.indicator.number:"N/A"),d.a.createElement("td",null,t.indicator?t.indicator.name:"N/A"),d.a.createElement("td",null,t.user),d.a.createElement("td",null,t.organization),d.a.createElement("td",null,(e=t.change_type,I[e])),d.a.createElement("td",{className:"expand-section"},d.a.createElement(P.a,null,t.diff_list.map(function(e){return d.a.createElement(X,{key:e.name,name:e.name,type:t.change_type,data:e.prev})}))),d.a.createElement("td",{className:"expand-section"},d.a.createElement(P.a,null,t.diff_list.map(function(e){return d.a.createElement(X,{key:e.name,name:e.name,type:t.change_type,data:e.new})}))),d.a.createElement("td",{className:"expand-section"},d.a.createElement(P.a,null,t.rationale)));var e})))),d.a.createElement("div",{className:"list-metadata"},d.a.createElement("div",{id:"entries-count"},t.entries_count?"".concat(t.entries_count," ").concat(gettext("entries")):"--"),d.a.createElement("div",{id:"pagination-controls"},t.total_pages&&d.a.createElement(N.a,{pageCount:t.total_pages,initialPage:t.current_page,onPageChange:function(e){return t.changePage(e)}})))))}),Y=new O(jsContext.program_id);b.a.render(d.a.createElement(B,{store:Y}),document.querySelector("#app_root"))},DDFe:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],0<=t.indexOf(n)||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],0<=t.indexOf(n)||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}t.a=function(e){var t=e.children,n=e.isLoading,r=e.className,a=c(e,["children","isLoading","className"]),i=n?"loading":"";return o.a.createElement("div",l({className:"loading-spinner__container "+i+" "+(r||"")},a),o.a.createElement("div",{className:"loading-spinner__overlay"},o.a.createElement("div",{className:"loading-spinner__spinner"})),t)}},H4hL:function(e,t,n){"use strict";var r=n("q1tI"),i=n.n(r);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var s=function(e){function n(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),(t=l(this,c(n).call(this,e))).state={expanded:!1,overflowing:!1},t.ref=i.a.createRef(),t}var t,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(n,i.a.Component),t=n,(r=[{key:"componentDidMount",value:function(){this.ref.current.scrollHeight>this.ref.current.clientHeight&&this.setState({overflowing:!0})}},{key:"toggleExpanded",value:function(e){e.preventDefault(),this.setState({expanded:!this.state.expanded})}},{key:"render",value:function(){var t=this;return i.a.createElement("div",null,i.a.createElement("div",{ref:this.ref,className:"expander",style:{height:!this.state.expanded&&(this.props.height||50)}},this.props.children),this.state.overflowing&&i.a.createElement("div",null,i.a.createElement("a",{href:"",onClick:function(e){return t.toggleExpanded(e)}},this.state.expanded?"Show Less":"Show More")))}}])&&o(t.prototype,r),a&&o(t,a),n}();t.a=s},RCjz:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),i=n("werx"),o=n.n(i);n("okNM");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}t.a=function(e){return a.a.createElement(o.a,l({previousLabel:a.a.createElement("i",{className:"fa fa-angle-left"}),nextLabel:a.a.createElement("i",{className:"fa fa-angle-right"}),breakLabel:"...",breakClassName:"break-me",marginPagesDisplayed:2,pageRangeDisplayed:5,containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"},e))}},TGVD:function(e,t,n){"use strict";var o=n("okNM"),r=n("q1tI"),l=n.n(r),a=n("TSYQ"),c=n.n(a);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],0<=t.indexOf(n)||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],0<=t.indexOf(n)||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=function(e){var t=e.className,n=(e.size,s(e,["className","size"]));return l.a.createElement("td",u({className:["mgmt-table__col",t].join(" ")},n),n.children)},p=function(e){var t=e.className,n=(e.size,s(e,["className","size"]));return l.a.createElement("th",u({className:["mgmt-table__col",t].join(" ")},n),n.children)},f=function(e){var t=e.className,n=s(e,["className"]);return l.a.createElement("tr",u({className:["mgmt-table__row",t].join(" ")},n),n.children)},m=function(e){var t=e.className,n=s(e,["className"]);return l.a.createElement("tr",u({className:["mgmt-table__row table-header",t].join(" ")},n),n.children)},g=Object(o.a)(function(e){var t=e.className,n=e.expanded,r=e.Expando,a=s(e,["className","expanded","Expando"]);if(r){var i=Object(o.a)(r);return l.a.createElement("tbody",u({className:c()(["mgmt-table__body",t].join(" "),{"is-expanded":n})},a),l.a.createElement(f,null,a.children),n&&l.a.createElement(i,{Wrapper:d}))}return l.a.createElement("tbody",u({className:["mgmt-table__body",t].join(" ")},a),l.a.createElement(f,null,a.children))}),d=function(e){var t=e.className,n=s(e,["className"]);return l.a.createElement("tr",u({className:["mgmt-table__row--expanded",t].join(" ")},n),l.a.createElement("td",{colSpan:"6"},n.children))},h=Object(o.a)(function(e){var t=e.data,n=e.Row,r=e.keyField,a=(s(e,["data","Row","keyField"]),Object(o.a)(n));return t.map(function(e){return l.a.createElement(a,{key:e[r],data:e,Col:i,Row:g})})}),b=Object(o.a)(function(e){var t=e.HeaderRow,n=e.className,r=s(e,["HeaderRow","className"]),a=Object(o.a)(t);return l.a.createElement("table",{className:["table bg-white",n].join(" ")},l.a.createElement("thead",null,l.a.createElement(a,{Col:p,Row:m})),l.a.createElement(h,r))});t.a=b},XoI5:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n("vDqi"),a=n.n(r).a.create({withCredentials:!0,baseURL:"/api/",headers:{"X-CSRFToken":document.cookie.replace(/(?:(?:^|.*;\s*)csrftoken\s*\=\s*([^;]*).*$)|^.*$/,"$1")}})},Z2Y6:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),i=n("y2Vs"),o=n("5Xg7"),l=n("okNM");function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var u=function(e){return i.a.Option&&a.a.createElement(i.a.Option,e,a.a.createElement("input",{className:"checkboxed-multi-select-checkbox",type:"checkbox",checked:e.isSelected,onChange:function(e){}})," ",e.data.label)},s=Object(l.a)(function(e){return a.a.createElement(i.b,c({isMulti:!0,closeMenuOnSelect:!1,hideSelectedOptions:!1,components:{MenuList:o.a,Option:u}},e))});t.a=s}},[["6bbB",0,1]]]);