(this.webpackJsonpdeneir=this.webpackJsonpdeneir||[]).push([[0],{19:function(e,t,n){e.exports={closed:"RawDetails_closed__3DXF-",detailsBlockTitle:"RawDetails_detailsBlockTitle__3e5CU",rawDetailsBlock:"RawDetails_rawDetailsBlock__ELKKZ",HtmlBlock:"RawDetails_HtmlBlock__1-_Yr"}},20:function(e,t,n){e.exports={legendWrapper:"Legend_legendWrapper__1cK5s",legend:"Legend_legend__3uF_c",statusColorMarker:"Legend_statusColorMarker__3o3VS"}},21:function(e,t,n){e.exports={wrapper:"LegendOverlay_wrapper__uZ88H",content:"LegendOverlay_content__2Qfaw",closed:"LegendOverlay_closed__2X_h2",pullTab:"LegendOverlay_pullTab__UjXHK"}},28:function(e,t,n){e.exports={LegendBlock:"FilterBlock_LegendBlock__2Ayzb",title:"FilterBlock_title__2bRdE",contentPanel:"FilterBlock_contentPanel__1i3GK",open:"FilterBlock_open__D7-S3"}},29:function(e,t,n){e.exports={searchContainer:"Search_searchContainer__1luTd",searchBox:"Search_searchBox__eGQqE",suggestionsList:"Search_suggestionsList__2Z4Pf",activeSuggestion:"Search_activeSuggestion__258ia"}},30:function(e,t,n){e.exports={panel:"RightPanel_panel__fCHzi",togglePanelContainer:"RightPanel_togglePanelContainer__2da4q",closeButton:"RightPanel_closeButton__yQd4B",closed:"RightPanel_closed__2hzfK"}},31:function(e,t,n){e.exports={nodeList:"StatusList_nodeList__2gIHp",title:"StatusList_title__2jBkH",emptyListMessage:"StatusList_emptyListMessage__mU2X_",closed:"StatusList_closed__24YU8"}},32:function(e,t,n){e.exports={panelControls:"NodePanel_panelControls__3nvNh",detailsBlockTitle:"NodePanel_detailsBlockTitle__1i3HS",closed:"NodePanel_closed__2v-Lg",tagsBlock:"NodePanel_tagsBlock__1Uv6n",tagName:"NodePanel_tagName__zgpjh",tagButton:"NodePanel_tagButton__1DdT-"}},33:function(e,t,n){e.exports={closed:"AdvancedDetails_closed__XRCCL",instanceDetails:"AdvancedDetails_instanceDetails__33lI1",instanceDetailsContent:"AdvancedDetails_instanceDetailsContent__2aXIM",instanceTitle:"AdvancedDetails_instanceTitle__33kjW"}},38:function(e,t,n){e.exports={filterList:"Filter_filterList__2f3_3",filterOption:"Filter_filterOption__1AZpS",checkbox:"Filter_checkbox__1DgDK"}},39:function(e,t,n){e.exports={LeftPanelContainer:"LeftPanel_LeftPanelContainer__2zG2M",logo:"LeftPanel_logo__3LDXV",clearFilterWrapper:"LeftPanel_clearFilterWrapper__22dN3"}},40:function(e,t,n){e.exports={neighbourLevelControl:"NeighbourLevelControl_neighbourLevelControl__1YmfB",numberInput:"NeighbourLevelControl_numberInput__25c2h",ordinalMarker:"NeighbourLevelControl_ordinalMarker__3FS_D"}},45:function(e,t,n){e.exports={button:"Button_button__LwMAv"}},49:function(e,t,n){e.exports={GraphContainer:"GraphWrapper_GraphContainer__1ATvQ",warningMessageFilters:"GraphWrapper_warningMessageFilters__o5yc9"}},54:function(e,t,n){e.exports={nodeLink:"NodeList_nodeLink__3Q5qu"}},55:function(e,t,n){e.exports={GeneralInfoPanel:"GeneralInfoPanel_GeneralInfoPanel__20PDS"}},56:function(e,t,n){e.exports={app:"App_app__1v308"}},57:function(e,t,n){},92:function(e,t,n){},98:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),r=n(36),i=n.n(r),s=n(12),o=n(17),l=n(18),u=(n(91),n(53)),d="GET_GRAPH_SUCCESS",j="GET_DETAILS_REQUEST",f="GET_DETAILS_SUCCESS",b="SET_FILTER",h="RESET_FILTERS",v="ADD_FILTER",p="SET_GROUP_LEVEL",O="SELECT_GROUP",g="SET_NEIGHBOUR_LEVEL";var x=n(15),m=n(2),y=n(3);function _(e,t){var n=Object(y.a)({},e),a=e[t.filter]||[];if(!a.includes(t.value))return n[t.filter]=[].concat(Object(m.a)(a),[t.value]),n;var c=a.indexOf(t.value),r=[].concat(Object(m.a)(a.slice(0,c)),Object(m.a)(a.slice(c+1)));return n[t.filter]=r,r.length||delete n[t.filter],n}var k=null;var L=Object(l.c)({nodes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return t.nodes;default:return e}},filters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:case b:return _(e,t);case h:return{};case v:return e[t.filter]&&e[t.filter].includes(t.value)?e:Object(y.a)(Object(y.a)({},e),{},Object(x.a)({},t.filter,[].concat(Object(m.a)(e[t.filter]||[]),[t.value])));default:return e}},groupLevel:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"node",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:case p:return t.groupLevel;default:return e}},details:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return k;case f:return t.details;default:return e}},neighbourLevel:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return t.neighbourLevel;default:return e}}}),N=[u.a];n(92);var C=n(8),S=n(7),w=n(10),E=n(6),P=n(28),T=n.n(P);function M(e){var t=e.initialOpen,n=void 0===t||t,r=e.title,i=e.children,s=Object(c.useState)(n),o=Object(C.a)(s,2),l=o[0],u=o[1],d=l&&E.b||E.d;return Object(a.jsxs)("div",{className:T.a.LegendBlock,children:[r&&Object(a.jsxs)("button",{className:T.a.title,onClick:function(){return u(!l)},children:[Object(a.jsx)("span",{children:r}),Object(a.jsx)(w.a,{icon:d})]}),Object(a.jsx)("div",{className:"".concat(T.a.contentPanel," ").concat(l&&T.a.open),children:i})]})}var B=n(38),I=n.n(B);function A(e){var t=e.filters,n=void 0===t?[]:t,c=e.values,r=e.filterId,i=e.onChange;return Object(a.jsx)(M,{title:r,initialOpen:!1,children:Object(a.jsx)("ul",{className:I.a.filterList,children:c.map((function(e){return Object(a.jsxs)("li",{className:I.a.filterOption,children:[Object(a.jsx)("input",{className:I.a.checkbox,checked:n.includes(e),id:"".concat(r,"-").concat(e),type:"checkbox",value:e,onChange:function(){return i(r,e)}}),Object(a.jsx)("label",{htmlFor:"".concat(r,"-").concat(e),children:e})]},e)}))})})}var R=n(45),F=n.n(R);function D(e){return Object(a.jsx)("button",Object(y.a)(Object(y.a)({className:F.a.button},e),{},{children:e.children}))}function G(e){return Object(a.jsx)(o.b,Object(y.a)(Object(y.a)({className:F.a.button},e),{},{children:e.children}))}var z=n(29),W=n.n(z);function U(e){var t=e.nodes,n=Object(c.useState)(""),r=Object(C.a)(n,2),i=r[0],s=r[1],o=Object(c.useState)(0),l=Object(C.a)(o,2),u=l[0],d=l[1],j=Object(c.useState)(!1),f=Object(C.a)(j,2),b=f[0],h=f[1],v=Object(S.f)(),p=i&&function(e,t){var n=t.toLowerCase().trim();return Object.keys(e).filter((function(e){return e.includes(n)}))}(t,i)||[],O=function(e){t[e]&&(s(e),h(!1),v.push("/node/".concat(e)))};return Object(a.jsxs)("div",{className:W.a.searchContainer,children:[Object(a.jsxs)("div",{className:W.a.searchBox,children:[Object(a.jsx)("input",{type:"text",placeholder:"Search",value:i,onChange:function(e){d(0),s(e.target.value),h(!0)},onKeyDown:function(e){13===e.keyCode&&O(p[u]),38===e.keyCode&&d(Math.max(u-1,0)),40===e.keyCode&&d(Math.min(u+1,p.length-1))},onBlur:function(){h(!1)},onFocus:function(){h(!0)}}),Object(a.jsx)(D,{onClick:function(){return O(i)},type:"button",children:"Locate"})]}),b&&p.length>0&&Object(a.jsx)("ul",{className:W.a.suggestionsList,children:p.slice(0,10).map((function(e,t){return Object(a.jsx)("li",{className:t===u&&W.a.activeSuggestion||null,onMouseDown:function(){return d(e=t),void O(p[e]);var e},children:e},e)}))})]})}function X(e){var t=e.hierarchy,n=e.setGroupLevel,c=e.groupLevel,r=[].concat(Object(m.a)(t),["node"]);return Object(a.jsx)(M,{title:"hierarchy",children:Object(a.jsx)("ul",{children:r.map((function(e){return Object(a.jsxs)("li",{children:[Object(a.jsx)("input",{id:"hierarchy-".concat(e),type:"radio",name:"hierarchy",value:e,checked:c===e,onChange:function(){return n(e)}}),Object(a.jsx)("label",{htmlFor:"hierarchy-".concat(e),children:e})]},e)}))})})}var H=n(39),Y=n.n(H),K=n.p+"static/media/deneir-logo.2b6a0327.svg",q={canvasSettings:{zoom:{scale:1,duration:750},backgroundColor:"#131212",minimumScale:.05,maximumScale:1,nodes:{lineWidth:10,radius:50,label:{fontSize:24,fillStyle:"#fff",textAlign:"center",fontType:"bold",fontName:"Lucida Grande, Lucida Sans Unicode, Arial, Helvetica, sans-serif"}},defaultStatus:"unknown",statusColors:{ok:"#6fcc47",warning:"#F5C21B",critical:"#FF5D55",emergency:"#F03",unknown:"#aaaaaa"},statusStrokes:{ok:"#4e992e",warning:"#c2970a",critical:"#d93a32",emergency:"#C00",unknown:"#888888"},links:{bend:.1,arrowheadLength:30,arrowWidth:5,arrowheadWidth:40,startArrow:!1,endArrow:!0,vectorColor:"#ddd"}},hierarchy:!1,meta:{subtitle:"Details",processName:"processes"},entityTypes:{default:{name:"default",shape:"circle"}},detailsUrl:!1,pollingInterval:3e5,enablePolling:!1},Q={};function V(e){if(!Q[e]&&!1!==Q[e]&&!q[e]&&!1!==q[e])throw new Error('Could not find config key "'.concat(e,'", maybe you forgot to set it in your config file?'));return Q[e]||q[e]}function Z(){for(var e=function(e){return e&&"object"===typeof e},t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return n.reduce((function(t,n){return Object.keys(n).forEach((function(a){var c=t[a],r=n[a];Array.isArray(c)&&Array.isArray(r)?t[a]=c.concat.apply(c,Object(m.a)(r)):e(c)&&e(r)?t[a]=Z(c,r):t[a]=r})),t}),{})}function J(e){var t=V("hierarchy"),n=e.actions,c=e.groupedNodes,r=e.groupLevel,i=e.availableFilters,s=e.filters;return Object(a.jsxs)("div",{className:Y.a.LeftPanelContainer,children:[Object(a.jsx)("h1",{className:Y.a.logo,children:Object(a.jsx)("img",{src:K,alt:"DENEIR"})}),Object(a.jsx)(U,{nodes:c}),t&&Object(a.jsx)(X,{hierarchy:t,groupLevel:r,setGroupLevel:n.setGroupLevel}),Object.keys(i).map((function(e){return Object(a.jsx)(A,{filters:s[e],filterId:e,values:i[e],onChange:n.handleFilterChange},e)})),Object.keys(s).length>0&&Object(a.jsx)("div",{className:Y.a.clearFilterWrapper,children:Object(a.jsx)(D,{type:"button",onClick:n.handleResetFilters,children:"Clear filters"})})]})}var $=n(30),ee=n.n($);function te(e){var t=e.children,n=e.handleOpenPanel,c=e.isPanelOpen,r=c&&E.f||E.a,i=function(){return Object(a.jsx)("button",{className:ee.a.closeButton,onClick:function(){return n(!c)},children:Object(a.jsx)(w.a,{icon:r})})},s=!c&&ee.a.closed||"";return Object(a.jsxs)("section",{className:"".concat(ee.a.panel," ").concat(s),children:[Object(a.jsx)("div",{className:ee.a.togglePanelContainer,children:Object(a.jsx)(i,{})}),t]})}var ne={0:"ok",1:"warning",2:"critical",3:"emergency",4:"unknown"},ae=n(31),ce=n.n(ae);function re(e){var t=e.title,n=e.items,r=e.defaultOpen,i=void 0===r||r,s=V("canvasSettings").statusColors,o=Object(c.useState)(i),l=Object(C.a)(o,2),u=l[0],d=l[1],j=u&&E.b||E.d,f=Math.max.apply(Math,Object(m.a)(n.map((function(e){return e.status})))),b=s[ne[f]];return Object(a.jsxs)("div",{className:ce.a.nodeList,children:[Object(a.jsxs)("button",{className:ce.a.title,style:{borderColor:b},onClick:function(){return d(!u)},children:[t," (",n.length,") ",Object(a.jsx)(w.a,{icon:j})]}),Object(a.jsx)("div",{children:Object(a.jsxs)("ul",{className:!u&&ce.a.closed||"",children:[n.length>0&&n.map((function(e){var t=ne[e.status],n=s[t];return Object(a.jsx)("li",{style:{borderColor:n},children:e.content},e.id)})),0===n.length&&Object(a.jsx)("li",{className:ce.a.emptyListMessage,children:"there are no items in this list"})]})})]})}var ie=n(54),se=n.n(ie);function oe(e){var t=e.title,n=e.nodes,c=e.defaultOpen,r=void 0===c||c;return Object(a.jsx)(re,{title:t,items:n.map((function(e){return Object(y.a)(Object(y.a)({},e),{},{content:Object(a.jsx)(o.b,{className:se.a.nodeLink,to:"/node/".concat(e.id),children:e.id})})})),defaultOpen:r})}var le=n(32),ue=n.n(le),de=n(19),je=n.n(de);function fe(e){var t=e.details;return Object(a.jsx)("div",{children:Object.keys(t).map((function(e){return"object"===typeof t[e]?Object(a.jsx)(be,{title:e,data:t[e]},e):t[e].length>300?Object(a.jsx)(he,{title:e,data:t[e]},e):Object(a.jsxs)("div",{children:[Object(a.jsxs)("b",{children:[e,":"]})," ",t[e]]},e)}))})}function be(e){var t=e.title,n=e.data,r=Object(c.useState)(!1),i=Object(C.a)(r,2),s=i[0],o=i[1],l=s&&E.b||E.d;return Object(a.jsxs)("div",{children:[Object(a.jsxs)("button",{className:je.a.detailsBlockTitle,onClick:function(){return o(!s)},children:[Object(a.jsx)("span",{children:t})," ",Object(a.jsx)(w.a,{icon:l})]}),Object(a.jsx)("div",{className:!s&&je.a.closed||"",children:Object(a.jsx)("pre",{className:je.a.rawDetailsBlock,children:JSON.stringify(n,null,2)})})]})}function he(e){var t=e.title,n=e.data,r=Object(c.useState)(!1),i=Object(C.a)(r,2),s=i[0],o=i[1],l=s&&E.b||E.d;return Object(a.jsxs)("div",{children:[Object(a.jsxs)("button",{className:je.a.detailsBlockTitle,onClick:function(){return o(!s)},children:[Object(a.jsx)("span",{children:t})," ",Object(a.jsx)(w.a,{icon:l})]}),Object(a.jsx)("div",{className:!s&&je.a.closed||"",children:Object(a.jsx)("div",{className:je.a.HtmlBlock,dangerouslySetInnerHTML:{__html:n}})})]})}var ve=n(33),pe=n.n(ve);function Oe(e){var t=e.details;return Array.isArray(t)?Object(a.jsx)(re,{title:"Instances",items:t.map((function(e){var t=e.dependencies;return Object(y.a)(Object(y.a)({},e),{},{status:t&&Math.max.apply(Math,Object(m.a)(t.map((function(e){return e.status.code})))),content:Object(a.jsx)(ge,Object(y.a)({},e),e.id)})})),defaultOpen:!0}):"Node details should be an array of objects"}function ge(e){var t=e.url,n=e.id,r=e.details,i=Object(c.useState)(!1),s=Object(C.a)(i,2),o=s[0],l=s[1],u=o&&E.b||E.d;return Object(a.jsxs)("div",{className:pe.a.instanceDetails,children:[Object(a.jsxs)("button",{className:pe.a.instanceTitle,onClick:function(){return l(!o)},children:[Object(a.jsx)("span",{title:n,children:n})," ",t&&Object(a.jsx)("a",{href:t,children:"(url)"}),Object(a.jsx)(w.a,{icon:u})]}),Object(a.jsx)("div",{className:"".concat(pe.a.instanceDetailsContent," ").concat(!o&&pe.a.closed||""),children:Object(a.jsx)("div",{children:r&&Object(a.jsx)(fe,{details:r})},n)})]})}function xe(e,t,n){var a=V("apiBaseUrl"),c=V("authToken");return fetch("".concat(a,"/").concat(t),{method:e,body:n,withCredentials:!0,credentials:"include",headers:{Authorization:"Bearer ".concat(c),"Content-Type":"application/json"}}).then((function(e){var t=e.json();return t.body&&!1===t.body.acknowledged?new Error(t.body.data.error):t}))}function me(e){var t=Object(s.b)(),n=Object(S.f)(),r=e.nodes,i=e.details,o=Object(S.g)().selectedNodeId,l=r[o];return Object(c.useEffect)((function(){V("detailsUrl")&&t(function(e){var t=V("detailsUrl");return function(n){return n({type:j}),xe("GET","".concat(t,"?instance=").concat(e)).then((function(t){var a=t.data;return n({type:f,details:void 0===a?[]:a,nodeId:e})})).catch((function(e){n({type:"GET_DETAILS_FAILURE",error:e})}))}}(o))}),[t,o]),Object(a.jsxs)(c.Fragment,{children:[Object(a.jsxs)("div",{className:ue.a.panelControls,children:[Object(a.jsxs)(D,{type:"button",onClick:n.goBack,title:"go back to previously selected node",children:[Object(a.jsx)(w.a,{icon:E.c})," Back"]}),Object(a.jsx)(G,{type:"button",to:"/",title:"deselect ".concat(l.id),children:"Clear"})]}),Object(a.jsx)("h2",{children:l.id}),Boolean(Object.keys(l.tags).length)&&Object(a.jsx)("div",{className:ue.a.tagsBlock,children:Object.keys(l.tags).map((function(e){return Object(a.jsxs)("p",{children:[Object(a.jsx)("span",{className:ue.a.tagName,children:e})," ",l.tags[e].map((function(n){return Object(a.jsx)("button",{className:ue.a.tagButton,onClick:function(){return t({type:v,filter:e,value:n})},title:'add "'.concat(n,'" to the "').concat(e,'" filter '),children:n},n)}))]},e)}))}),i&&Object(a.jsx)(Oe,{details:i}),Object(a.jsxs)("div",{children:[Object(a.jsx)(oe,{title:"Dependencies",nodes:l.dependencies.map((function(e){return Object(y.a)(Object(y.a)({},e),{},{status:r[e.id].status})}))}),Object(a.jsx)(oe,{title:"Dependents",nodes:l.dependents.map((function(e){return Object(y.a)(Object(y.a)({},e),{},{status:r[e.id].status})}))})]})]})}var ye=n(55),_e=n.n(ye);function ke(e){var t=e.nodes,n=Object.keys(ne).map((function(e){return Object.values(t).filter((function(t){return Number(t.status)===Number(e)}))}));return Object(a.jsxs)("div",{className:_e.a.GeneralInfoPanel,children:[Object(a.jsx)("h2",{children:"Overview"}),Object.keys(ne).reverse().map((function(e){var t=ne[e];return 0===n[e].length?null:Object(a.jsx)(oe,{defaultOpen:Number(e)>0,title:t,nodes:n[e]},t)}))]})}function Le(e){var t=e.nodes,n=e.filters,a=e.neighbourLevel,c=void 0===a?0:a;if(!Object.keys(n).length)return t;var r=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a={};function c(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(n<=0)return t;var r=t.reduce((function(t,r){if(a[r]&&a[r]>n)return t;a[r]=n;var i=[].concat(Object(m.a)(e[r].dependencies.map((function(e){return e.id}))),Object(m.a)(e[r].dependents.map((function(e){return e.id}))));return[].concat(Object(m.a)(t),[r],Object(m.a)(c(i,n-1)))}),[]);return Object(m.a)(new Set(r))}return c(t,n)}(t,Object.values(t).reduce((function(e,t){return Object.keys(n).every((function(e){return!!t.tags[e]&&!!n[e].some((function(n){return t.tags[e].includes(n)}))}))?[].concat(Object(m.a)(e),[t.id]):e}),[]),c);return Object.values(t).filter((function(e){return r.includes(e.id)})).reduce((function(e,t){return Object(y.a)(Object(y.a)({},e),{},Object(x.a)({},t.id,t))}),{})}function Ne(e){return{nodes:Object.values(e).map((function(e){return{id:e.id,type:e.type,status:e.status,tags:e.tags}})),links:Object.values(e).map((function(t){return t.dependents.reduce((function(n,a){return e[a.id]?[].concat(Object(m.a)(n),[{source:t.id,target:a.id,type:a.type}]):n}),[])})).flat()}}function Ce(){return function(e){return e({type:"GET_GRAPH_REQUEST"}),xe("GET",V("graphUrl")).then((function(t){var n=t.data;return e({type:d,nodes:void 0===n?{}:n})})).catch((function(t){return e({type:"GET_GRAPH_FAILURE",error:t})})),V("enablePolling")&&setTimeout((function(){e(Ce())}),V("pollingInterval"))}}var Se=n(56),we=n.n(Se),Ee=n(57),Pe=n.n(Ee),Te=n(9);function Me(e,t,n,a,c){var r=c.radius,i=c.arcX,s=c.arcY;e.moveTo(Math.cos(t)*r+i,Math.sin(t)*r+s),e.lineTo(Math.cos(n)*(r-a/2)+i,Math.sin(n)*(r-a/2)+s),e.lineTo(Math.cos(n)*(r+a/2)+i,Math.sin(n)*(r+a/2)+s),e.closePath()}function Be(e,t){var n,a,c,r=V("canvasSettings"),i=t.source,s=i.x,o=i.y,l=t.target,u=l.x,d=l.y,j=(s+u)/2,f=(o+d)/2;n=u-s,a=d-o;var b=Math.sqrt(n*n+a*a);n/=b,a/=b;var h=r.links.bend*b,v=j+a*h,p=f-n*h,O=v-a*(c=.5*((s-v)*(s-v)+(o-p)*(o-p))/h),g=p+n*c;!function(e,t){var n=V("canvasSettings").links,a=n.bend,c=n.startArrow,r=n.endArrow,i=n.vectorColor,s=n.arrowWidth,o=n.arrowheadWidth,l=t.firstAngle,u=t.secondAngle,d=t.finalFirstAngle,j=t.finalSecondAngle,f=t.radius,b=t.arcX,h=t.arcY;e.beginPath(),e.arc(b,h,f,d,j,a<0),e.fillStyle=i,e.lineWidth=s,e.strokeStyle=i,e.stroke(),e.beginPath(),c&&Me(e,l,d,o,t),r&&Me(e,u,j,o,t),e.fill()}(e,function(e,t,n,a){var c,r,i,s,o=e.source,l=o.x,u=o.y,d=e.target,j=d.x,f=d.y,b=V("canvasSettings"),h=b.nodes,v=b.links,p=v.bend,O=v.arrowheadLength,g=v.startArrow,x=v.endArrow,m=2*Math.PI,y=g,_=x;r=((r=Math.atan2(u-a,l-n))+m)%m,c=((c=Math.atan2(f-a,j-n))+m)%m,p<0?r<c&&(r+=m):c<r&&(c+=m);var k=O/t*Math.sign(p),L=h.radius/t*Math.sign(p);if(i=r+=L,s=c-=L,!(p<0&&r<c||p>0&&c<r))return y&&(i+=k),_&&(s-=k),(p<0&&i<s||p>0&&s<i)&&(y=!1,_=!1,i=r,s=c),{firstAngle:r,secondAngle:c,finalFirstAngle:i,finalSecondAngle:s,radius:t,arcX:n,arcY:a}}(t,c=Math.abs(c),O,g)||{})}function Ie(e,t){var n=t.x,a=t.y,c=t.type,r=t.status,i=V("entityTypes"),s=V("canvasSettings"),o=s.defaultStatus,l=s.statusColors,u=s.statusStrokes,d=s.nodes,j=d.lineWidth,f=d.radius,b=i[c]||i.default,h=b.shape,v=b.strokeColor,p=ne[r]||o,O=l[p],g=u[p];e.fillStyle=O,e.strokeStyle=v||g,e.lineWidth=j,function(e,t,n){var a={circle:Fe,database:De,hexagon:ze,pentagon:Ge,heptagon:We,octogon:Ue,rectangle:Re,square:Ae,triangle:Xe},c=a[e]&&e||"circle";a[c](t,n)}(h,e,{x:n,y:a,radius:f})}function Ae(e,t){var n=t.x,a=t.y,c=2*t.radius;e.beginPath(),e.rect(n-c/2,a-c/2,c,c),e.stroke(),e.fill()}function Re(e,t){var n=t.x,a=t.y,c=t.radius,r=1.5*c,i=3*c;e.beginPath(),e.rect(n-i/2,a-r/2,i,r),e.stroke(),e.fill()}function Fe(e,t){var n=t.x,a=t.y,c=t.radius;e.beginPath(),e.arc(n,a,c,0,2*Math.PI),e.stroke(),e.fill()}function De(e,t){var n=t.x,a=t.y,c=t.radius,r=c/1.2,i=c/2;e.lineWidth/=2;var s=c/2.5;e.beginPath(),e.ellipse(n,a+s,r,i,Math.PI,0,2*Math.PI),e.fill(),e.stroke(),e.beginPath(),e.ellipse(n,a+0,r,i,Math.PI,0,2*Math.PI),e.fill(),e.stroke(),e.beginPath(),e.ellipse(n,a-s,r,i,Math.PI,0,2*Math.PI),e.fill(),e.stroke()}function Ge(e,t){var n=t.x,a=t.y,c=t.radius;He(e,{x:n,y:a,radius:c,sides:5,size:1.1*c})}function ze(e,t){var n=t.x,a=t.y,c=t.radius;He(e,{x:n,y:a,radius:c,sides:6,size:1.1*c})}function We(e,t){var n=t.x,a=t.y,c=t.radius;He(e,{x:n,y:a,radius:c,sides:7,size:1.1*c})}function Ue(e,t){var n=t.x,a=t.y,c=t.radius;He(e,{x:n,y:a,radius:c,sides:8,size:1.1*c})}function Xe(e,t){var n=t.x,a=t.y,c=t.radius;He(e,{x:n,y:a,radius:c,sides:3,size:1.3*c})}function He(e,t){var n=t.x,a=t.y,c=t.sides,r=t.size;e.lineWidth/=2,e.beginPath(),e.moveTo(n+r*Math.cos(0),a+r*Math.sin(0));for(var i=0;i<=c+1;i+=1)e.lineTo(n+r*Math.cos(2*i*(Math.PI/c)),a+r*Math.sin(2*i*(Math.PI/c)));e.fill(),e.stroke()}function Ye(e,t,n){var a=n.nodes,c=n.links;if(t){var r=e.getContext("2d"),i=V("canvasSettings"),s=e.parentElement.getBoundingClientRect(),o=s.width,l=s.height;e.width=o,e.height=l,r.save(),r.fillStyle=i.backgroundColor,r.fillRect(0,0,o,l),r.translate(t.x,t.y),r.scale(t.k,t.k),c.forEach((function(e){return Be(r,e)})),a.forEach((function(e){return Ie(r,e)}));var u=i.nodes.label;r.fillStyle=u.fillStyle,r.textAlign=u.textAlign,r.font="".concat(u.fontType," ").concat(u.fontSize,"px ").concat(u.fontName),a.forEach((function(e){return function(e,t){var n=t.x,a=t.y,c=t.id;e.fillText(c,n,a)}(r,e)})),r.restore()}}function Ke(e,t,n){for(var a,c,r=e.sourceEvent&&e.sourceEvent.layerX||e.layerX,i=e.sourceEvent&&e.sourceEvent.layerY||e.layerY,s=e?t.invertX(r):null,o=e?t.invertY(i):null,l=V("canvasSettings").nodes.radius,u=0;u<n.length;u+=1){var d=n[u];if((a=s-d.x)*a+(c=o-d.y)*c<l*l)return d}}var qe={},Qe=qe;function Ve(e){var t=Object(c.useRef)(null),n=Object(c.useRef)(1200),r=e.nodes,i=e.groupLevel,o=e.filters,l=e.forceRenderId,u=Object(s.b)(),d=Object(S.f)(),j=Object(S.g)().selectedNodeId;return Object(c.useEffect)((function(){var e={clickNode:function(e){return r[e].group?u(function(e,t){var n=[].concat(Object(m.a)(V("hierarchy")),["node"]),a=e,c=t,r=n[n.indexOf(e)+1];return{type:O,groupLevel:r,filter:a,value:c}}(i,e)):d.push("/node/".concat(e))}},n=t.current;Qe.initGraph(n,{data:Ne(r),actions:e})}),[r,u,i,d]),Object(c.useEffect)((function(){var e=Ne(r);Qe.resizeCanvas(e)}),[r,l]),Object(c.useEffect)((function(){j&&setTimeout((function(){Qe.setCameraToNode(j),n.current=500}),n.current)}),[j,r]),Object(c.useEffect)((function(){setTimeout((function(){Qe.zoomFit()}),600)}),[o,i]),Object(a.jsx)("canvas",{id:"graph",ref:t,className:Pe.a.canvas})}qe.initGraph=function(e,t){var n=t.data,a=n.nodes,c=n.links,r=t.actions,i=V("canvasSettings"),s=e.parentElement.getBoundingClientRect(),o=s.width,l=s.height,u=Te.j.translate(o/2,l/2).scale(i.minimumScale),d=Te.e().force("x",Te.f(o/2).strength(.1)).force("y",Te.g(l/2).strength(.1)).force("charge",Te.d().strength(-15e3)).force("link",Te.c().distance(2e3).strength(1).id((function(e){return e.id}))).force("center",Te.b(o/2,l/2));d.nodes(a).force("link").links(c),d.on("tick",(function(){Ye(e,u,{nodes:a,links:c})})),Te.h(e).on("click",(function(e){var t=Ke(e,u,a);t&&t.id&&r.clickNode(t.id)}));var j=Te.i().scaleExtent([i.minimumScale,i.maximumScale]).on("zoom",(function(e){u=e.transform,h({nodes:a,links:c})})),f=j.transform,b=Te.a().subject((function(e){var t=Ke(e,u,a);if(t)return t.x=u.applyX(t.x),t.y=u.applyY(t.y),t})).on("start",(function(e){return function(e,t,n){e.active||t.alphaTarget(.3).restart(),e.subject.fx=n.invertX(e.x),e.subject.fy=n.invertY(e.y)}(e,d,u)})).on("drag",(function(e){return function(e,t){e.subject.fx=t.invertX(e.x),e.subject.fy=t.invertY(e.y)}(e,u)})).on("end",(function(e){return function(e,t){e.active||t.alphaTarget(0),e.subject.fx=null,e.subject.fy=null}(e,d)}));function h(t){Ye(e,u,t)}Te.h(e).call(b).call(j).call(f,u),qe.updateGraph=h,qe.resizeCanvas=function(){var t=u,n=t.x,a=t.y,c=t.k,r=Te.j.translate(n,a).scale(c);Te.h(e).call(f,r)},qe.zoomFit=function(){var t=function(){var e=a.map((function(e){return e.x})),t=a.map((function(e){return e.y})),n={x:Math.min.apply(Math,Object(m.a)(e)),y:Math.max.apply(Math,Object(m.a)(t))},c={x:Math.max.apply(Math,Object(m.a)(e)),y:Math.min.apply(Math,Object(m.a)(t))};return{topLeft:n,bottomRight:c,center:{x:n.x+(c.x-n.x)/2,y:n.y-(n.y-c.y)/2}}}(),n=t.topLeft,c=t.bottomRight,r=t.center,i=(c.x-n.x)/o,s=(n.y-c.y)/l,u=.85/Math.max(i,s,1);Te.h(e).transition().duration(200).call(f,Te.j.translate(o/2,l/2).scale(u).translate(-r.x,-r.y))},qe.setCameraToNode=function(t){var n=i.zoom,c=n.scale,r=n.duration,s=a.find((function(e){return e.id===t}));s&&Te.h(e).transition().duration(r).call(f,Te.j.translate(o/2,l/2).scale(c).translate(-s.x,-s.y))}},Ve.defaultProps={selectedNode:null};var Ze=n(40),Je=n.n(Ze);function $e(e){var t=Object(c.useRef)(),n=e.neighbourLevel,r=e.setNeighbourLevel;var i=["th","st","nd","rd"][n]||"th";return Object(a.jsxs)("div",{className:Je.a.neighbourLevelControl,children:["Show filtered nodes and their"," ",Object(a.jsx)("input",{className:Je.a.numberInput,onChange:function(e){return n=e.target.value,clearTimeout(t.current),void(t.current=setTimeout((function(){r(n)}),0));var n},value:n,type:"number",min:"0",max:"10"}),Object(a.jsx)("span",{className:Je.a.ordinalMarker,children:i})," level neighbours"]})}var et={circle:n.p+"static/media/circle.2527e24e.svg",database:n.p+"static/media/database.76ba0568.svg",hexagon:n.p+"static/media/hexagon.62124f4d.svg",pentagon:n.p+"static/media/pentagon.278e132a.svg",heptagon:n.p+"static/media/heptagon.b751daf9.svg",octogon:n.p+"static/media/octogon.f10b87a5.svg",rectangle:n.p+"static/media/rectangle.b4b9d755.svg",square:n.p+"static/media/square.f2b1fe08.svg",triangle:n.p+"static/media/triangle.ee2a511f.svg"};function tt(e){var t=e.name,n=e.shape,c=et[n];return Object(a.jsx)("img",{src:c,alt:"type ".concat(t," is shown as ").concat(n,"s on the graph")})}var nt=n(20),at=n.n(nt);function ct(){var e=V("entityTypes"),t=V("canvasSettings").statusColors;return Object(a.jsxs)("div",{className:at.a.legendWrapper,title:"status",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"Status"}),Object(a.jsx)("ul",{className:at.a.legend,children:Object.keys(t).map((function(e){return Object(a.jsxs)("li",{children:[Object(a.jsx)("span",{className:at.a.statusColorMarker,style:{backgroundColor:t[e]}}),Object(a.jsx)("span",{className:at.a.label,children:e})]},e)}))})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"Type"}),Object(a.jsx)("ul",{className:at.a.legend,children:Object.keys(e).map((function(t){var n=e[t],c=n.name,r=n.shape;return Object(a.jsxs)("li",{children:[Object(a.jsx)(tt,{name:c,shape:r}),Object(a.jsxs)("span",{className:at.a.label,children:[t," "]})]},t)}))})]})]})}var rt=n(21),it=n.n(rt);function st(e){var t=e.actions,n=e.neighbourLevel,r=Object(c.useState)(!0),i=Object(C.a)(r,2),s=i[0],o=i[1],l=s&&E.b||E.e;return Object(a.jsxs)("div",{className:"".concat(it.a.wrapper," ").concat(!s&&it.a.closed),children:[Object(a.jsx)("div",{className:it.a.pullTab,children:Object(a.jsxs)("button",{className:it.a.title,onClick:function(){return o(!s)},children:[Object(a.jsx)("span",{children:"Legend"}),Object(a.jsx)(w.a,{icon:l})]})}),Object(a.jsxs)("div",{className:it.a.content,children:[Object(a.jsx)($e,{className:it.a.neighbourLevelControl,setNeighbourLevel:t.setNeighbourLevel,neighbourLevel:n}),Object(a.jsx)(ct,{})]})]})}var ot=n(49),lt=n.n(ot);function ut(e){var t=e.nodes,n=e.groupLevel,c=e.filters,r=e.forceRenderId,i=e.actions,s=e.neighbourLevel;return Object(a.jsxs)("div",{className:lt.a.GraphContainer,children:[Object(a.jsx)(Ve,{nodes:t,groupLevel:n,filters:c,forceRenderId:r}),0===Object.keys(t).length&&Object(a.jsx)("div",{className:lt.a.warningMessageFilters,children:Object(a.jsx)("p",{children:"No results, too many filters applied"})}),Object(a.jsx)(st,{actions:i,neighbourLevel:Number(s)})]})}function dt(){var e=Object(s.b)(),t=Object(c.useState)(!0),n=Object(C.a)(t,2),r=n[0],i=n[1],o=Object(c.useState)(null),l=Object(C.a)(o,2),u=l[0],d=l[1],j=Object(s.c)((function(e){return e.groupLevel})),f=Object(s.c)((function(e){return e.neighbourLevel})),v=Object(s.c)((function(e){return e.filters})),O=Object(s.c)((function(e){return e.nodes})),_=Object(s.c)((function(e){return e.details})),k=function(e,t){if("node"===t)return e;var n=Object.values(e).reduce((function(e,n){return e.concat.apply(e,Object(m.a)(n.tags[t]))}),[]);return Object(m.a)(new Set(n)).reduce((function(n,a){var c=Object.values(e).filter((function(e){return e.tags[t].includes(a)})),r=Math.max.apply(Math,Object(m.a)(c.map((function(e){return e.status})))),i=new Set,s=new Set;return c.forEach((function(n){n.dependents.forEach((function(n){e[n.id]&&e[n.id].tags[t].forEach((function(e){i.add(e)}))})),n.dependencies.forEach((function(n){e[n.id]&&e[n.id].tags[t].forEach((function(e){s.add(e)}))}))})),Object(y.a)(Object(y.a)({},n),{},Object(x.a)({},a,{id:a,group:!0,status:r,type:"group",dependents:Object(m.a)(i).map((function(e){return{id:e}})),dependencies:Object(m.a)(s).map((function(e){return{id:e}}))}))}),{})}(Object(s.c)((function(e){return Le(e)})),j),L=function(e){var t={};return Object.values(e.nodes).forEach((function(e){Object.keys(e.tags).forEach((function(n){var a;t[n]||(t[n]=[]),(a=t[n]).push.apply(a,Object(m.a)(e.tags[n]))}))}),{}),Object.keys(t).reduce((function(e,n){return Object(y.a)(Object(y.a)({},e),{},Object(x.a)({},n,Object(m.a)(new Set(t[n]))))}),{})}({nodes:O});Object(c.useEffect)((function(){e(Ce())}),[e]);var N={handleFilterChange:function(t,n){e(function(e,t){return{type:b,filter:e,value:t}}(t,n))},handleResetFilters:function(){e({type:h})},setGroupLevel:function(t){return e(function(e){return{type:p,groupLevel:e}}(t))},setNeighbourLevel:function(t){return e(function(e){return{type:g,neighbourLevel:e}}(t))}};if(!Object.keys(O).length)return Object(a.jsx)("p",{children:"Loading ..."});var w=function(e){i(e),setTimeout((function(){d(Date.now())}),300)};return Object(a.jsxs)("div",{className:we.a.app,children:[Object(a.jsx)(J,{actions:N,availableFilters:L,groupedNodes:k,groupLevel:j,filters:v}),Object(a.jsxs)(S.c,{children:[Object(a.jsxs)(S.a,{path:"/node/:selectedNodeId",children:[Object(a.jsx)(ut,{nodes:k,groupLevel:j,filters:v,forceRenderId:u,actions:N,neighbourLevel:f}),Object(a.jsx)(te,{handleOpenPanel:w,isPanelOpen:r,children:Object(a.jsx)(me,{nodes:O,details:_,actions:N})})]}),Object(a.jsxs)(S.a,{path:"/",children:[Object(a.jsx)(ut,{nodes:k,groupLevel:j,filters:v,forceRenderId:u,actions:N,neighbourLevel:f}),Object(a.jsx)(te,{handleOpenPanel:w,isPanelOpen:r,children:Object(a.jsx)(ke,{nodes:O,details:_,actions:N})})]})]})]})}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));fetch("config.json").then((function(e){return e.json()})).then((function(e){Q=Z(q,e)})).catch((function(e){throw new Error("Could not parse config file, are you sure it is correctly formatted?",e)})).then((function(){var e=Object(l.d)(L,l.a.apply(void 0,N));i.a.render(Object(a.jsx)(s.a,{store:e,children:Object(a.jsx)(o.a,{children:Object(a.jsx)(dt,{})})}),document.getElementById("root"))})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[98,1,2]]]);
//# sourceMappingURL=main.643ff8ba.chunk.js.map