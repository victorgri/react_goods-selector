(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(3),o=c.n(n),s=c(4),a=c(5),r=c(8),l=c(7),i=c(6),d=c.n(i),u=c(1),p=c.n(u),j=(c(13),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]),b=c(0),h=function(e){Object(r.a)(c,e);var t=Object(l.a)(c);function c(){var e;Object(s.a)(this,c);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).state={selectedGood:"Jam"},e}return Object(a.a)(c,[{key:"render",value:function(){var e=this,t=this.state.selectedGood;return Object(b.jsxs)("main",{className:"App",children:[Object(b.jsxs)("header",{className:"App__header",children:[Object(b.jsx)("h1",{className:"App__title",children:t?"".concat(t," is selected"):"No goods selected"}),t&&Object(b.jsx)("button",{type:"button",className:"App__clear",onClick:function(){return e.setState({selectedGood:""})},children:"Clear"})]}),Object(b.jsx)("ul",{children:j.map((function(c){return Object(b.jsxs)("li",{className:d()("Good",{"Good--active":t===c}),children:[c,t===c?Object(b.jsx)("button",{type:"button",className:"Good__remove",onClick:function(){return e.setState({selectedGood:""})},children:"Remove"}):Object(b.jsx)("button",{type:"button",className:"Good__select",onClick:function(){return e.setState({selectedGood:c})},children:"Select"})]},c)}))})]})}}]),c}(p.a.Component);o.a.render(Object(b.jsx)(h,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.56859b17.chunk.js.map