(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"4L+s":function(e,t,r){"use strict";r.d(t,"b",function(){return m}),r.d(t,"a",function(){return v});var n=r("q1tI"),i=r.n(n),o=r("i8i4"),l=r.n(o);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function r(e){var t;return s(this,r),(t=u(this,p(r).call(this,e))).content=e.content,t.placement=e.placement||null,t}var t,n,o;return d(r,i.a.Component),t=r,(n=[{key:"render",value:function(){return i.a.createElement("a",{tabIndex:"0","data-toggle":"popover","data-trigger":"focus","data-html":"true","data-placement":this.placement,"data-content":this.content},i.a.createElement("i",{className:"far fa-question-circle"}))}}])&&c(t.prototype,n),o&&c(t,o),r}(),v=function(e){function a(){var e,r;s(this,a);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return(r=u(this,(e=p(a)).call.apply(e,[this].concat(n)))).popoverName="base",r.componentDidMount=function(){r.bodyClickHandler=function(e){0==$("#".concat(r.popoverName,"_popover_content")).parent().find($(e.target)).length&&$(r.refs.target).popover("hide")};var t=function(){$("body").on("click",r.bodyClickHandler),$(r.refs.target).popover("update").on("hide.bs.popover",function(){$("body").off("click",r.bodyClickHandler)})};$(r.refs.target).popover({content:'<div id="'.concat(r.popoverName,'_popover_content"></div>'),html:!0,placement:"bottom"}).on("shown.bs.popover",function(e){l.a.render(r.getPopoverContent(),document.querySelector("#".concat(r.popoverName,"_popover_content")),t)})},r.getPopoverContent=function(){throw new Error("not implemented")},r}return d(a,i.a.Component),a}()},Ez0T:function(e,t,r){"use strict";var n=r("q1tI"),o=r.n(n),a=r("y2Vs"),i=r("VCnP"),l=r.n(i),s=0;function c(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"id";return s++,"".concat(e).concat(s)}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(e){d(t,e,r[e])})}return t}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"c",function(){return f}),r.d(t,"a",function(){return m}),r.d(t,"d",function(){return v}),r.d(t,"b",function(){return b});var f=function(e){var t=c("react-select"),r=e.labelClasses||"col-form-label text-uppercase";return o.a.createElement("div",{className:"form-row mb-3"},o.a.createElement("label",{htmlFor:t,className:r},e.label),o.a.createElement(a.default,{onChange:e.update,value:e.value,id:t,className:"tola-react-select",disabled:e.disabled,options:e.options}))},m=function(e){var t=c("date-select"),r=e.options&&1==e.options.length&&void 0!==e.options[0].value?o.a.createElement("option",{value:e.options[0].value},e.options[0].label):e.options&&void 0!==e.options[0].options?e.options.map(function(e,t){return o.a.createElement("optgroup",{label:e.label,key:t},e.options.map(function(e){return o.a.createElement("option",{value:e.value,key:e.value},e.label)}))}):e.options.map(function(e,t){return o.a.createElement("option",{value:e.value,key:t},e.label)});return o.a.createElement("div",{className:"form-row mb-3"},o.a.createElement("label",{htmlFor:t,className:"col-form-label text-uppercase"},e.label),o.a.createElement("select",{className:"form-control",id:t,value:e.value,onChange:e.update,disabled:e.disabled},r))},v=function(e){var t=c("react-select");return o.a.createElement("div",{className:"form-row mb-3"},o.a.createElement("label",{htmlFor:t,className:"col-form-label text-uppercase"},e.label),o.a.createElement("select",{onChange:e.update,value:e.value,id:t,className:"form-control",disabled:e.disabled},e.options))},h=function(e){return""==e.children?o.a.createElement("div",null):o.a.createElement(o.a.Fragment,null,o.a.createElement("hr",{style:{margin:"3px 0px 0px 0px"}}),o.a.createElement("div",{style:{textTransform:"uppercase",paddingLeft:"4px",marginBottom:"2px"}},e.children))},b=function(t){var e=c("multiselect"),r=t.options&&0!=t.options.length?{isMulti:!0,options:t.options,getDropdownButtonLabel:function(e){return e.value?Array.isArray(e.value)?0==e.value.length?gettext("None selected"):1==e.value.length?e.value[0].label:"".concat(e.value.length,"  ").concat(gettext("selected")):e.value.label:gettext("None selected")}}:{getDropdownButtonLabel:function(){return gettext("None available")},isDisabled:!0,menuIsOpen:!1,options:[]},n={dropdownButton:function(e){return t.options&&0!=t.options.length?e:p({},e,{backgroundColor:"#E5E6E8",background:""})},option:function(e,t){return p({},e,{padding:"1px 12px",display:"inline-block"})},container:function(e,t){return p({},e,{backgroundColor:"#f5f5f5"})}};return o.a.createElement("div",{className:"form-row mb-2 tola-react-multiselect-row"},o.a.createElement("label",{htmlFor:e,className:"col-form-label text-uppercase"},t.label),o.a.createElement(l.a,u({id:e,styles:n,formatOptionLabel:function(e){return o.a.createElement("div",{style:{display:"inline-block",float:"right",width:"90%"}},e.label)},components:{GroupHeading:h},value:t.value,onChange:t.update},r)))}},QTZG:function(e,t,r){"use strict";r.r(t);var n,o,a,i=r("q1tI"),p=r.n(i),l=r("i8i4"),s=r.n(l),c=r("okNM"),d=(r("qtBC"),r("TSYQ"),r("2vnA")),u=r("7O5W"),f=r("IP2g"),m=r("wHSu"),v=r("Ez0T"),h=r("0zu5"),b=r("4L+s");function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function S(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function E(e,t,r){return t&&S(e.prototype,t),r&&S(e,r),e}function w(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?O(e):t}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function C(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}u.b.add(m.b,m.c,m.a);var N,k,x=function(e){function t(){return g(this,t),w(this,T(t).apply(this,arguments))}return C(t,p.a.Component),E(t,[{key:"render",value:function(){return p.a.createElement("h3",{className:"level-title "+this.props.classes},this.props.tierName,this.props.ontologyLabel?" "+this.props.ontologyLabel:null)}}]),t}(),P=Object(c.b)("rootStore")(n=Object(c.c)(n=function(e){function a(){var e,r;g(this,a);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return(r=w(this,(e=T(a)).call.apply(e,[this].concat(n)))).deleteLevel=function(){var e=r.props.levelProps.tierName+" "+r.props.levelProps.ontologyLabel;create_no_rationale_changeset_notice({message_text:"Are you sure you want to delete ".concat(e,"?"),on_submit:function(){return r.props.rootStore.levelStore.deleteLevelFromDB(r.props.level.id)}})},r.editLevel=function(){r.props.rootStore.uiStore.addExpandedCard(r.props.level.id)},r.buildIPTTUrl=function(e){var t="/indicators/iptt_report/".concat(r.props.rootStore.levelStore.program_id,"/timeperiods/?frequency=3&start=0&end=999");return e.forEach(function(e){return t+="&indicators="+e}),t},r}return C(a,p.a.Component),E(a,[{key:"componentDidMount",value:function(){$('*[data-toggle="popover"]').popover({html:!0})}},{key:"render",value:function(){var n=this;if(this.props.rootStore.uiStore.hasVisibleChildren.indexOf(this.props.level.parent)<0&&null!=this.props.level.parent)return null;var e=[],t=this.props.levelProps.indicators.map(function(e){return e.id});if(0<t.length){var r="All indicators linked to ".concat(this.props.levelProps.tierName," ").concat(this.props.levelProps.ontologyLabel);e.push("<a href=".concat(this.buildIPTTUrl(t),">").concat(r,"</a>"))}if(this.props.levelProps.tierName!=this.props.rootStore.levelStore.chosenTierSet.slice(-1)[0]){var o=this.props.levelProps.descendantIndicatorIds;if(0<(o=o.concat(t)).length){var a="All indicators linked to ".concat(this.props.levelProps.tierName," ").concat(this.props.levelProps.ontologyLabel," and sub-levels");e.unshift("<a href=".concat(this.buildIPTTUrl(o),">").concat(a,"</a>"))}}var i=this.props.levelProps.indicators.map(function(e,t){var r=n.props.levelProps.ontologyLabel+String.fromCharCode(97+t)+": ";return'<li class="nav-item"><a href='.concat(n.buildIPTTUrl([e.id]),">").concat(r).concat(e.name,"</a></li>")});e=e.concat(i);var l='<ul class="nav flex-column">'.concat(e.join("<br>"),"</ul>"),s=this.props.levelProps.indicators.length,c=interpolate(ngettext("%s indicator","%s indicators",s),[s]),u=null;return this.props.levelProps.tierName!=Object(d.q)(this.props.rootStore.levelStore.chosenTierSet.slice(-1)[0])&&0<this.props.rootStore.levelStore.levels.filter(function(e){return e.parent==n.props.level.id}).length&&(u=p.a.createElement(f.a,{className:"text-action",icon:0<=this.props.rootStore.uiStore.hasVisibleChildren.indexOf(this.props.level.id)?"caret-down":"caret-right"})),p.a.createElement("div",{className:"level-card level-card--collapsed",id:this.props.level.id},p.a.createElement("div",{className:u?"level-card__toggle":"",onClick:function(e){return n.props.rootStore.uiStore.updateVisibleChildren(n.props.level.id)}},u,p.a.createElement("span",{className:"level-card--collapsed__name"},p.a.createElement(x,{tierName:this.props.levelProps.tierName,ontologyLabel:this.props.levelProps.ontologyLabel,classes:"level-title--collapsed"})," ",this.props.level.name)),p.a.createElement("div",{className:"level-card--collapsed__actions"},p.a.createElement("div",{className:"actions__top btn-row"},this.props.levelProps.canDelete&&p.a.createElement("button",{className:"btn btn-sm btn-link btn-danger",onClick:this.deleteLevel},p.a.createElement("i",{className:"fas fa-trash-alt"}),gettext("Delete")),this.props.levelProps.canEdit&&p.a.createElement("button",{className:"btn btn-sm btn-link btn-text",onClick:this.editLevel},p.a.createElement("i",{className:"fas fa-edit"}),gettext("Edit"))),p.a.createElement("div",{className:"actions__bottom"},p.a.createElement("button",{className:"btn btn-sm btn-link no-bold","data-toggle":"popover","data-trigger":"focus","data-placement":"bottom","data-html":"true",title:"Track indicator performance","data-content":l,disabled:0==e.length},c))))}}]),a}())||n)||n,j=Object(c.b)("rootStore")(o=Object(c.c)(o=function(e){function t(e){var a;return g(this,t),(a=w(this,T(t).call(this,e))).onDragEnd=function(e){var t=e.oldIndex,r=e.newIndex,n=a.indicators[t].id,o={value:r+1,name:r+1};a.updateIndicatorOrder(o,n)},a.updateIndicatorOrder=function(e,t){a.indicatorWasReordered=!0;var r=a.indicators.find(function(e){return e.id==t}).level_order-1,n=e.value-1,o=a.indicators.slice();o.splice(n,0,o.splice(r,1)[0]),o.forEach(function(e,t){return e.level_order=t+1}),a.indicators.replace(o)},a.updateSubmitType=function(e){a.submitType=e},a.saveLevel=function(e){e.preventDefault(),a.props.rootStore.levelStore.saveLevelToDB(a.submitType,a.props.level.id,a.indicatorWasReordered,{name:a.name,assumptions:a.assumptions,indicators:Object(d.q)(a.indicators)})},a.cancelEdit=function(){a.dataHasChanged?create_no_rationale_changeset_notice({message_text:"Are you sure you want to continue?",preamble:"Changes to this ".concat(a.props.levelProps.tierName," will not be saved"),on_submit:function(){return a.props.rootStore.levelStore.cancelEdit(a.props.level.id)}}):a.props.rootStore.levelStore.cancelEdit(a.props.level.id)},a.onFormChange=function(e){e.preventDefault(),a[e.target.name]=e.target.value},a.submitType="saveOnly",a.indicatorWasReordered=!1,a.origData=JSON.stringify([e.level.name,e.level.assumptions,e.levelProps.indicators]),Object(d.h)(O(O(a)),{name:e.level.name,assumptions:e.level.assumptions,indicators:e.levelProps.indicators.sort(function(e,t){return e.level_order-t.level_order}),get dataHasChanged(){return JSON.stringify([this.name,this.assumptions,this.indicators])!=this.origData}}),a}return C(t,p.a.Component),E(t,[{key:"componentDidMount",value:function(){$('*[data-toggle="popover"]').popover({html:!0})}},{key:"render",value:function(){Object(d.q)(this.indicators);return p.a.createElement("div",{className:"level-card level-card--expanded",id:this.props.level.id},p.a.createElement("div",null,p.a.createElement(x,{tierName:this.props.levelProps.tierName,ontologyLabel:this.props.levelProps.ontologyLabel,classes:"level-title--expanded"})),p.a.createElement("form",{className:"level-card--expanded__form",onSubmit:this.saveLevel},p.a.createElement("div",{className:"form-group"},p.a.createElement("textarea",{className:"form-control",id:"level-name",name:"name",value:this.name||"",autoComplete:"off",onChange:this.onFormChange})),p.a.createElement("div",{className:"form-group"},p.a.createElement("label",{htmlFor:"assumptions"},"Assumptions"),p.a.createElement("textarea",{className:"form-control",id:"level-assumptions",disabled:this.name?"":"disabled",name:"assumptions",autoComplete:"off",value:this.assumptions||"",onChange:this.onFormChange})),p.a.createElement(D,{level:this.props.level,tierName:this.props.levelProps.tierName,indicators:this.indicators,changeFunc:this.updateIndicatorOrder,dragEndFunc:this.onDragEnd}),p.a.createElement(L,{level:this.props.level,levelProps:this.props.levelProps,isActive:this.props.rootStore.uiStore.expandedCards[0]==this.props.level.id,submitFunc:this.updateSubmitType,cancelFunc:this.cancelEdit,nameVal:this.name,tierCount:this.props.rootStore.levelStore.chosenTierSet.length})))}}]),t}())||o)||o,L=Object(c.b)("rootStore")(a=function(e){function t(){return g(this,t),w(this,T(t).apply(this,arguments))}return C(t,p.a.Component),E(t,[{key:"render",value:function(){var e=this.props.isActive&&this.props.nameVal?"":"disabled",t=null;if(null!=this.props.level.parent&&"root"!=this.props.level.parent){var r=interpolate(gettext("Save and add another %s"),[this.props.levelProps.tierName]);t=p.a.createElement(F,{disabledText:e,classes:"btn-primary",icon:"plus-circle",text:r,submitType:"saveAndAddSibling",submitFunc:this.props.submitFunc})}var n=null,o=this.props.rootStore.levelStore.chosenTierSet.length;if(this.props.level.level_depth<o){var a=interpolate(gettext("Save and link %s"),[this.props.levelProps.childTierName]);n=p.a.createElement(F,{disabledText:e,classes:"btn btn-primary",icon:"stream",text:a,submitType:"saveAndAddChild",submitFunc:this.props.submitFunc})}return p.a.createElement("div",{className:"button-bar btn-row"},p.a.createElement(F,{disabledText:e,classes:"btn-primary",text:gettext("Save and close"),icon:"save",submitType:"saveOnly",submitFunc:this.props.submitFunc}),t,n,p.a.createElement(F,{classes:"btn btn-reset",text:gettext("Cancel"),submitType:"cancel",submitFunc:this.props.cancelFunc}))}}]),t}())||a,F=function(e){function t(){return g(this,t),w(this,T(t).apply(this,arguments))}return C(t,p.a.Component),E(t,[{key:"render",value:function(){var e=this,t="cancel"==this.props.submitType?"button":"submit";return p.a.createElement("button",{disabled:this.props.disabledText,type:t,className:this.props.classes+" level-button btn btn-sm",onClick:function(){return e.props.submitFunc(e.props.submitType)}},this.props.text)}}]),t}(),D=function(e){function t(){return g(this,t),w(this,T(t).apply(this,arguments))}return C(t,p.a.Component),E(t,[{key:"componentDidMount",value:function(){$('*[data-toggle="popover"]').popover({html:!0})}},{key:"render",value:function(){var r=this,e=this.props.indicators.map(function(e,t){return{value:t+1,label:t+1}}),n=[];this.props.indicators.forEach(function(t){n.push(p.a.createElement(p.a.Fragment,null,p.a.createElement(v.c,{update:function(e){return r.props.changeFunc(e,t.id)},selectId:"ind"+t.id,labelClasses:"col-form-label",value:{value:t.level_order,label:t.level_order},label:t.name,options:e}),p.a.createElement("a",{href:"#",className:"indicator-link"},p.a.createElement("i",{className:"fas fa-cog"})," Settings")))});var t=null,o=null;return 0<this.props.indicators.length&&(t="Order",o=p.a.createElement(b.b,{content:"To remove an indicator: Click “Settings”, where you can reassign the indicator to a different level or delete it.",placement:"bottom"})),p.a.createElement("ul",{id:"level-card--indicator-links",style:{backgroundColor:"white",padding:"1em"}},p.a.createElement("div",null,"Indicators Linked to this ",this.props.tierName,t,o),p.a.createElement("div",null,p.a.createElement(A,{onSortEnd:this.props.dragEndFunc,useDragHandle:!0,lockAxis:"y",lockToContainerEdges:!0},n.map(function(e,t){return p.a.createElement(I,{key:"item-".concat(t),index:t,value:e})}))),p.a.createElement("div",null,p.a.createElement("a",{href:"#",role:"button",className:"btn btn-link btn-add"},p.a.createElement("img",{className:"fas fa-plus-circle"}),p.a.createElement("span",null,"Add Indicator"))))}}]),t}(),I=Object(h.sortableElement)(function(e){var t=e.value;return p.a.createElement("li",null,p.a.createElement(z,null),t)}),A=Object(h.sortableContainer)(function(e){var t=e.children;return p.a.createElement("ul",null,t)}),z=Object(h.sortableHandle)(function(){return p.a.createElement("span",null,p.a.createElement(f.a,{icon:m.a}))});function q(e){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function V(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function K(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function B(e,t,r){return t&&K(e.prototype,t),r&&K(e,r),e}function R(e,t){return!t||"object"!==q(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function H(e){return(H=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function J(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&M(e,t)}function M(e,t){return(M=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}u.b.add(m.b,m.c);var U,G,W=Object(c.b)("rootStore")(N=Object(c.c)(N=function(e){function a(){return V(this,a),R(this,H(a).apply(this,arguments))}return J(a,p.a.Component),B(a,[{key:"render",value:function(){var o=this;return("initial"==this.props.renderList?this.props.rootStore.levelStore.sortedLevels.filter(function(e){return-1!=["root",null].indexOf(e.parent)}):this.props.renderList.sort(function(e,t){return e.customsort-t.customsort})).map(function(t){var e="";e=-1!==o.props.rootStore.uiStore.expandedCards.indexOf(t.id)?p.a.createElement(j,{level:t,levelProps:o.props.rootStore.levelStore.levelProperties[t.id]}):p.a.createElement(P,{level:t,levelProps:o.props.rootStore.levelStore.levelProperties[t.id]});var r=o.props.rootStore.levelStore.sortedLevels.filter(function(e){return e.parent==t.id}),n=null;return 0<r.length&&(n=p.a.createElement(a,{rootStore:o.props.rootStore,renderList:r})),p.a.createElement("div",{key:t.id,className:"leveltier--new"},e,n)})}}]),a}())||N)||N,Q=Object(c.b)("rootStore")(k=Object(c.c)(k=function(e){function t(){return V(this,t),R(this,H(t).apply(this,arguments))}return J(t,p.a.Component),B(t,[{key:"render",value:function(){return 0==this.props.rootStore.levelStore.levels.length?p.a.createElement("div",{className:"level-list-panel"},p.a.createElement("div",{className:"level-list-panel__dingbat"},p.a.createElement("i",{className:"fas fa-sitemap"})),p.a.createElement("div",{className:"level-list-panel__text text-large"},p.a.createElement("strong",{className:"text-danger"},"Choose your results framework template carefully!")," Once you begin building your framework, it will not be possible to change templates without first deleting all saved levels.")):p.a.createElement("div",{id:"level-list",style:{flexGrow:"2"}},p.a.createElement(W,{renderList:"initial"}))}}]),t}())||k)||k,X=r("y2Vs");function Z(e){return(Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ee(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function te(e,t,r){return t&&ee(e.prototype,t),r&&ee(e,r),e}function re(e,t){return!t||"object"!==Z(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function ne(e){return(ne=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function oe(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ae(e,t)}function ae(e,t){return(ae=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var ie,le,se,ce,ue,pe,de,fe,me,ve,he,be,ye,ge,Se,Ee=Object(c.b)("rootStore")(U=Object(c.c)(U=function(e){function a(){var e,t;Y(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=re(this,(e=ne(a)).call.apply(e,[this].concat(n)))).handleChange=function(e){t.props.rootStore.levelStore.changeTierSet(e.value)},t}return oe(a,p.a.Component),te(a,[{key:"componentDidUpdate",value:function(){$('*[data-toggle="popover"]').popover({html:!0})}},{key:"render",value:function(){var e=null;"locked"==this.props.rootStore.uiStore.tierLockStatus?e=p.a.createElement("a",{href:"#",tabIndex:"0","data-toggle":"popover","data-trigger":"focus","data-html":"true","data-content":gettext('<span class="text-danger"><strong>The results framework template cannot be changed after levels are saved.</strong></span> To change templates, all saved levels first must be deleted.  A level can be deleted when it has no sub-levels and no linked indicators.')},p.a.createElement("i",{className:"far fa-question-circle"})):"primed"==this.props.rootStore.uiStore.tierLockStatus&&(e=p.a.createElement("a",{href:"#",tabIndex:"0","data-toggle":"popover","data-trigger":"focus","data-html":"true","data-content":gettext('<span class="text-danger"><strong>Choose your results framework template carefully!</strong></span> Once you begin building your framework, it will not be possible to change templates without first deleting all saved levels.')},p.a.createElement("i",{className:"far fa-question-circle"})));var t=this.props.rootStore.levelStore.tierTemplates,r=Object.keys(t).map(function(e){return{value:e,label:t[e].name}}),n={value:this.props.rootStore.levelStore.chosenTierSetKey,label:this.props.rootStore.levelStore.chosenTierSetName},o="leveltier-picker__selectbox ";return o+="locked"==this.props.rootStore.uiStore.tierLockStatus?"leveltier-picker__selectbox--disabled":"",p.a.createElement("div",{className:o},p.a.createElement("div",{className:"form-group"},p.a.createElement("label",null,gettext("Results framework template"))," ",p.a.createElement("small",null,e),p.a.createElement(X.default,{options:r,value:n,isDisabled:"locked"==this.props.rootStore.uiStore.tierLockStatus,onChange:this.handleChange})))}}]),a}())||U)||U,we=function(e){function t(){return Y(this,t),re(this,ne(t).apply(this,arguments))}return oe(t,p.a.Component),te(t,[{key:"render",value:function(){return p.a.createElement("div",{className:"leveltier leveltier--level-"+this.props.tierLevel},this.props.tierName," ")}}]),t}(),Oe=Object(c.b)("rootStore")(G=Object(c.c)(G=function(e){function t(){return Y(this,t),re(this,ne(t).apply(this,arguments))}return oe(t,p.a.Component),te(t,[{key:"render",value:function(){var e=null;return 0==this.props.rootStore.levelStore.levels.length&&(e=p.a.createElement("button",{className:"leveltier-button btn btn-primary btn-block",onClick:this.props.rootStore.levelStore.createFirstLevel},gettext("Apply"))),p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{id:"leveltier-list",className:"leveltier-list"},0<this.props.rootStore.levelStore.chosenTierSet.length?this.props.rootStore.levelStore.chosenTierSet.map(function(e,t){return p.a.createElement(we,{key:t,tierLevel:t,tierName:e})}):null),e?p.a.createElement("div",{className:"leveltier-list__actions"},e):null)}}]),t}())||G)||G,Te=Object(c.b)("rootStore")(Object(c.c)(function(e){return p.a.createElement("div",{id:"leveltier-picker",className:"leveltier-picker"},p.a.createElement(Ee,null),p.a.createElement(Oe,null))})),Ce=r("XoI5");function _e(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function Ne(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function ke(e,t,r){return t&&Ne(e.prototype,t),r&&Ne(e,r),e}function xe(r,n,e,t,o){var a={};return Object.keys(t).forEach(function(e){a[e]=t[e]}),a.enumerable=!!a.enumerable,a.configurable=!!a.configurable,("value"in a||a.initializer)&&(a.writable=!0),a=e.slice().reverse().reduce(function(e,t){return t(r,n,e)||e},a),o&&void 0!==a.initializer&&(a.value=a.initializer?a.initializer.call(o):void 0,a.initializer=void 0),void 0===a.initializer&&(Object.defineProperty(r,n,a),a=null),a}function Pe(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var je=(le=xe((ie=function(){function s(e,t,r,n,o,a,i){var l=this;Pe(this,s),_e(this,"levels",le,this),_e(this,"indicators",se,this),_e(this,"chosenTierSetKey",ce,this),_e(this,"chosenTierSet",ue,this),this.tierTemplates=void 0,this.defaultTemplateKey="",this.customTierSetKey="",this.program_id="",this.accessLevel=!1,_e(this,"cancelEdit",pe,this),_e(this,"createNewLevelFromSibling",de,this),_e(this,"createNewLevelFromParent",fe,this),_e(this,"createFirstLevel",me,this),this.saveLevelTiersToDB=function(){var e={program_id:l.program_id,tiers:l.chosenTierSet};Ce.a.post("/save_leveltiers/",e).then(function(e){}).catch(function(e){})},this.deleteLevelFromDB=function(t){var r="".concat(l.levelProperties[t].tierName," ").concat(l.levelProperties[t].ontologyLabel);Ce.a.delete("/level/".concat(t)).then(function(e){l.levels.replace(e.data),l.rootStore.uiStore.removeExpandedCard(t),0==l.levels.length&&l.createFirstLevel(),success_notice({message_text:gettext("".concat(r," was successfully deleted.")),addClass:"program-page__rationale-form",stack:{dir1:"up",dir2:"right",firstpos1:20,firstpos2:20}})}).catch(function(e){})},this.saveLevelToDB=function(r,n,e,t){e&&l.saveReorderedIndicatorsToDB(t.indicators),delete t.indicators;var o=l.levels.find(function(e){return e.id==n}),a=Object.assign(Object(d.q)(o),t);"new"==n?("root"==a.parent&&l.saveLevelTiersToDB(),delete a.id,Ce.a.post("/insert_new_level/",a).then(function(e){Object(d.o)(function(){l.levels.replace(e.data.all_data)});var t=e.data.new_level.id;l.rootStore.uiStore.removeExpandedCard(n),"saveAndAddSibling"==r?l.createNewLevelFromSibling(t):"saveAndAddChild"==r&&l.createNewLevelFromParent(t)}).catch(function(e){})):Ce.a.put("/level/".concat(n,"/"),a).then(function(e){Object(d.o)(function(){Object.assign(o,e.data)}),l.rootStore.uiStore.removeExpandedCard(n),"saveAndAddSibling"==r?l.createNewLevelFromSibling(n):"saveAndAddChild"==r&&l.createNewLevelFromParent(n)}).catch(function(e){})},this.saveReorderedIndicatorsToDB=function(e){Ce.a.post("/reorder_indicators/",e).then(function(e){}).catch(function(e){})},this.deriveTemplateKey=function(){var e=JSON.stringify(Object(d.q)(l.chosenTierSet));for(var t in l.tierTemplates){if(l.tierTemplates.hasOwnProperty(t)&&l.chosenTierSet.length==l.tierTemplates[t].tiers.length)if(e==JSON.stringify(l.tierTemplates[t].tiers))return t}return"custom"},this.buildOntology=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[],r=Object(d.q)(l.levels.find(function(e){return e.id==t}));return r.parent&&"root"!=r.parent?(e.unshift(r.customsort),l.buildOntology(r.parent,e)):e.join(".")},this.getChildLevels=function(t){return l.levels.filter(function(e){return e.parent==t})},this.getLevelIndicators=function(t){return l.indicators.filter(function(e){return e.level==t})},this.getDescendantIndicatorIds=function(t){var e=l.levels.filter(function(e){return t.includes(e.id)}),r=[];return e.forEach(function(t){r=r.concat(l.indicators.filter(function(e){return e.level==t.id}).map(function(e){return e.id}));var e=l.levels.filter(function(e){return e.parent==t.id}).map(function(e){return e.id});r=r.concat(l.getDescendantIndicatorIds(e,r))}),r},this.rootStore=i,this.levels=t,this.indicators=r,this.tierTemplates=o,this.defaultTemplateKey="mc_standard",this.customTierSetKey="custom",this.program_id=e,this.accessLevel=a,0<n.length?(this.chosenTierSet=n.map(function(e){return e.name}),this.chosenTierSetKey=this.deriveTemplateKey(n)):(this.chosenTierSetKey=this.defaultTemplateKey,this.chosenTierSet=this.tierTemplates[this.chosenTierSetKey].tiers)}return ke(s,[{key:"changeTierSet",value:function(e){this.chosenTierSetKey=e,this.chosenTierSet=this.tierTemplates[e].tiers}},{key:"sortedLevels",get:function(){return this.levels.slice().sort(function(e,t){e.level_depth-t.level_depth||(e.customsort,t.customsort)})}},{key:"levelProperties",get:function(){var o=this,a={},e=!0,t=!1,r=void 0;try{for(var i,n=function(){var t=i.value,e={},r=o.getChildLevels(t.id).map(function(e){return e.id}),n=o.indicators.filter(function(e){return e.level==t.id});e.indicators=o.getLevelIndicators(t.id),e.descendantIndicatorIds=o.getDescendantIndicatorIds(r),e.ontologyLabel=o.buildOntology(t.id),e.tierName=o.chosenTierSet[t.level_depth-1],e.childTierName=null,o.chosenTierSet.length>t.level_depth&&(e.childTierName=o.chosenTierSet[t.level_depth]),e.canDelete=0==r.length&&0==n&&"high"==o.accessLevel,e.canEdit="high"==o.accessLevel,a[t.id]=e},l=this.levels[Symbol.iterator]();!(e=(i=l.next()).done);e=!0)n()}catch(e){t=!0,r=e}finally{try{e||null==l.return||l.return()}finally{if(t)throw r}}return a}},{key:"chosenTierSetName",get:function(){return this.chosenTierSetKey==this.customTierSetKey?"Custom":this.tierTemplates[this.chosenTierSetKey].name}}]),s}()).prototype,"levels",[d.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),se=xe(ie.prototype,"indicators",[d.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),ce=xe(ie.prototype,"chosenTierSetKey",[d.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),ue=xe(ie.prototype,"chosenTierSet",[d.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),xe(ie.prototype,"sortedLevels",[d.e],Object.getOwnPropertyDescriptor(ie.prototype,"sortedLevels"),ie.prototype),xe(ie.prototype,"levelProperties",[d.e],Object.getOwnPropertyDescriptor(ie.prototype,"levelProperties"),ie.prototype),xe(ie.prototype,"chosenTierSetName",[d.e],Object.getOwnPropertyDescriptor(ie.prototype,"chosenTierSetName"),ie.prototype),xe(ie.prototype,"changeTierSet",[d.d],Object.getOwnPropertyDescriptor(ie.prototype,"changeTierSet"),ie.prototype),pe=xe(ie.prototype,"cancelEdit",[d.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){if("new"==t){var r=e.levels.find(function(e){return e.id==t});e.levels.filter(function(e){return e.customsort>r.customsort&&e.parent==r.parent}).forEach(function(e){return e.customsort-=1}),e.levels.replace(e.levels.filter(function(e){return"new"!=e.id}))}e.rootStore.uiStore.removeExpandedCard(t)}}}),de=xe(ie.prototype,"createNewLevelFromSibling",[d.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var n=this;return function(t){var r=Object(d.q)(n.levels.find(function(e){return e.id==t})),e=Object.assign({},r);e.customsort+=1,e.id="new",e.name="",e.assumptions="",n.levels.filter(function(e){return r&&e.customsort>r.customsort&&e.parent==r.parent}).forEach(function(e){return e.customsort+=1}),n.rootStore.uiStore.expandedCards.push("new"),n.rootStore.uiStore.activeCard="new",n.levels.push(e)}}}),fe=xe(ie.prototype,"createNewLevelFromParent",[d.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var n=this;return function(t){var e=Object(d.q)(n.levels.find(function(e){return e.id==t})),r={id:"new",customsort:1,name:"",assumptions:"",parent:t,level_depth:e.level_depth+1,program:n.program_id};n.levels.filter(function(e){return e.parent==t}).forEach(function(e){return e.customsort+=1}),n.rootStore.uiStore.expandedCards.push("new"),n.rootStore.uiStore.activeCard="new",n.levels.push(r),n.rootStore.uiStore.hasVisibleChildren.push(r.parent)}}}),me=xe(ie.prototype,"createFirstLevel",[d.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var t=this;return function(){var e={id:"new",program:t.program_id,name:"",assumptions:"",customsort:1,level_depth:1,parent:"root"};t.levels.push(e),t.rootStore.uiStore.expandedCards.push("new")}}}),ie),Le=(he=xe((ve=function(){function t(e){Pe(this,t),_e(this,"expandedCards",he,this),_e(this,"hasVisibleChildren",be,this),_e(this,"addExpandedCard",ye,this),_e(this,"removeExpandedCard",ge,this),_e(this,"updateVisibleChildren",Se,this),this.rootStore=e,this.hasVisibleChildren=this.rootStore.levelStore.levels.map(function(e){return e.id})}return ke(t,[{key:"tierLockStatus",get:function(){return 0<this.rootStore.levelStore.levels.filter(function(e){return"new"!=e.id}).length?"locked":1==this.rootStore.levelStore.levels.length?"primed":null}}]),t}()).prototype,"expandedCards",[d.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),be=xe(ve.prototype,"hasVisibleChildren",[d.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),xe(ve.prototype,"tierLockStatus",[d.e],Object.getOwnPropertyDescriptor(ve.prototype,"tierLockStatus"),ve.prototype),ye=xe(ve.prototype,"addExpandedCard",[d.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var t=this;return function(e){t.expandedCards.includes(e)||t.expandedCards.push(e)}}}),ge=xe(ve.prototype,"removeExpandedCard",[d.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.expandedCards=e.expandedCards.filter(function(e){return e!=t})}}}),Se=xe(ve.prototype,"updateVisibleChildren",[d.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var r=this;return function(t){var e=1<arguments.length&&void 0!==arguments[1]&&arguments[1];2<arguments.length&&void 0!==arguments[2]&&arguments[2];0<=r.hasVisibleChildren.indexOf(t)||e?(r.hasVisibleChildren=r.hasVisibleChildren.filter(function(e){return e!=t}),r.rootStore.levelStore.levels.filter(function(e){return e.parent==t}).forEach(function(e){return r.updateVisibleChildren(e.id,!0)})):r.hasVisibleChildren.push(t)}}}),ve),Fe=jsContext,De=new function e(t,r,n,o,a,i){Pe(this,e),this.levelStore=new je(t,r,n,o,a,i,this),this.uiStore=new Le(this)}(Fe.program_id,Fe.levels,Fe.indicators,Fe.levelTiers,Fe.tierTemplates,Fe.accessLevel);s.a.render(p.a.createElement(c.a,{rootStore:De},p.a.createElement(p.a.Fragment,null,p.a.createElement(Te,null),p.a.createElement(Q,null))),document.querySelector("#level-builder-react-component"))},XoI5:function(e,t,r){"use strict";r.d(t,"a",function(){return o});var n=r("vDqi"),o=r.n(n).a.create({withCredentials:!0,baseURL:"/api/",headers:{"X-CSRFToken":document.cookie.replace(/(?:(?:^|.*;\s*)csrftoken\s*\=\s*([^;]*).*$)|^.*$/,"$1")}})},qtBC:function(e,t,r){"use strict";var n=r("7+Rn"),o=r.n(n)()();t.a=o}},[["QTZG",0,1]]]);