"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[169],{7169:function(n,e,t){t.r(e),t.d(e,{default:function(){return _}});var i,a,r,c,o,s=t(168),p=t(1413),l=t(885),d=t(2791),h=t(7847),u=t(6676),x=t(6539),g=t(4165),f=t(7762),m=t(5861),v=t(2982),j=t(2193),b=t(4818),w=t(9434),k=t(4569),y=t.n(k),N=t(184);function Z(n){var e=n.imgs,t=n.inline,p=n.editImages,k=e&&e.map((function(n){return{img:n,checked:!1}})),Z=(0,d.useState)(!0),F=(0,l.Z)(Z,2),z=F[0],C=F[1],D=(0,d.useState)(k||[]),P=(0,l.Z)(D,2),_=P[0],I=P[1],$=(0,w.v9)((function(n){return n.spec.addImages}));(0,d.useEffect)((function(){if(p.length){var n=function(){var n=(0,m.Z)((0,g.Z)().mark((function n(){var e,t,i,a,r;return(0,g.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e=[],t=(0,f.Z)(p),n.prev=2,a=(0,g.Z)().mark((function n(){var t;return(0,g.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=i.value,n.next=3,y().get(t.replace("https://d2ffbnf2hpheay.cloudfront.net/","https://mohae-image.s3.ap-northeast-2.amazonaws.com/"),{responseType:"blob"}).then((function(n){var i=new File([n.data],t,{type:n.data.type});e.push(i)}));case 3:case"end":return n.stop()}}),n)})),t.s();case 5:if((i=t.n()).done){n.next=9;break}return n.delegateYield(a(),"t0",7);case 7:n.next=5;break;case 9:n.next=14;break;case 11:n.prev=11,n.t1=n.catch(2),t.e(n.t1);case 14:return n.prev=14,t.f(),n.finish(14);case 17:r=e.map((function(n,e){return{img:n.name,checked:!1,File:n}})),I(r),r.map((function(n,e){return $.append("image",n.File)})),A((0,b.zx)($));case 21:case"end":return n.stop()}}),n,null,[[2,11,14,17]])})));return function(){return n.apply(this,arguments)}}();n()}setTimeout((function(){C(!1)}),5e3)}),[]);var T=(0,j.Z)({inline:t}),S=(0,h.iv)(i||(i=(0,s.Z)(["\n    width: ",";\n    height: ",";\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: white;\n    border: 1px solid ",";\n    color: ",";\n    border-radius: 50%;\n    position: absolute;\n    bottom: ",";\n    right: ",";\n  "])),t?"15px":"20px",t?"15px":"20px",u.$_.main,u.$_.main,t?"".concat(20.5,"px"):"8px",t?"".concat(20.5,"px"):"8px"),L=(0,h.iv)(a||(a=(0,s.Z)(["\n    background-color: ",";\n    color: white;\n  "])),u.$_.main),A=(0,w.I0)(),E=function(n){n.preventDefault(),n.stopPropagation(),n.stopPropagation();var e=Number(n.currentTarget.name),t=_[e];if(t.checked){t.checked=!t.checked;var i=_.filter((function(n,t){return t!==e})),a=_.reduce((function(n,e){return e.checked?n:++n}),0);i.splice(i.length-(a-1),0,t),I(i);for(var r=new FormData,c=0;c<_.length;c++)r.append("image",i[c].File);A((0,b.zx)(r))}else{t.checked=!t.checked;var o=_.filter((function(n,t){return t!==e})),s=_.reduce((function(n,e){return e.checked?++n:n}),0);o.splice(s-1,0,t),I(o);for(var p=new FormData,l=0;l<_.length;l++)p.append("image",o[l].File);A((0,b.zx)(p))}},q=function(n){n.preventDefault(),n.stopPropagation();var e=Number(n.currentTarget.id),t=(0,v.Z)(_);t.splice(e,1),I(t);for(var i=n.currentTarget.name,a=$.entries(),r=Array.from($.keys()).length,c=new FormData,o=0;o<r;o++){var s=a.next().value[1];i!==s.name&&c.append("image",s)}A((0,b.zx)(c))},O=_&&_.map((function(n,e){var t=n.checked?L:"";return(0,N.jsxs)("button",{className:"item-box",name:"".concat(e),onClick:E,children:[(0,N.jsx)(x.Ei,{src:n.img}),(0,N.jsx)("div",{className:(0,h.cx)(S,t),children:e+1}),(0,N.jsx)("button",{name:n.File.name,onClick:q,id:"".concat(e),className:"delete"})]},e)})),R=_.length<10,U=(0,h.iv)(r||(r=(0,s.Z)(["\n    color: ",";\n    position: absolute;\n    bottom: 16px;\n    right: 16px;\n  "])),u.$_.dark1),Y=(0,h.iv)(c||(c=(0,s.Z)(["\n    color: ",";\n  "])),R?u.$_.dark1:u.$_.main);return(0,N.jsx)(N.Fragment,{children:(0,N.jsxs)("div",{className:(0,h.cx)(T),children:[z&&(0,N.jsx)("div",{className:"alarm",children:"\uc0ac\uc9c4\uc744 \ud074\ub9ad\ud558\uc5ec \uc21c\uc11c\uc124\uc815 \ubc0f \uc0ad\uc81c\ub97c \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4"}),!t&&(0,N.jsxs)("div",{className:(0,h.cx)(U),children:[(0,N.jsx)("span",{className:(0,h.cx)(Y),children:"".concat(_.length)})," / ".concat(10)]}),(0,N.jsx)("div",{className:"wrapper",children:(0,N.jsxs)("div",{className:"container",children:[O,(0,N.jsx)(N.Fragment,{children:_.length<10&&(0,N.jsxs)("form",{onSubmit:function(n){n.preventDefault();var e=new FormData;e.append("title","newTitle"),e.append("description","newDescript");for(var t=0;t<_.length;t++)e.append("image",_[t].File)},children:[(0,N.jsx)("input",{id:"input-file",type:"file",onChange:function(n){var e=n.currentTarget.files||[];if(t&&e.length+_.length>5)alert("\uc0ac\uc9c4\uc740 \ucd5c\ub300 5\uac1c\ub9cc \uc5c5\ub85c\ub4dc \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.");else if(!t&&e.length+_.length>10)alert("\uc0ac\uc9c4\uc740 \ucd5c\ub300 10\uac1c\ub9cc \uc5c5\ub85c\ub4dc \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.");else{for(var i=(0,v.Z)(_),a=0;a<e.length;a++){var r=URL.createObjectURL(e[a]);$.append("image",e[a]),e&&i.push({img:r,checked:!1,File:e[a]})}I(i),A((0,b.zx)($))}},multiple:!0,accept:".jpg,.jpeg,.png"}),(0,N.jsx)("label",{htmlFor:"input-file",children:(0,N.jsx)("div",{className:"item-box add",children:(0,N.jsx)("div",{className:(0,h.cx)((0,h.iv)(o||(o=(0,s.Z)(["\n                          width: 24px;\n                          height: 24px;\n                          background: url('/img/add-dark3.png') no-repeat\n                            center/contain;\n                        "]))))})})})]})})]})})]})})}var F,z=t(6844),C=t(8906),D=t(8639),P=t(1861);function _(){var n=(0,w.v9)((function(n){return n.specModal.openSpecVisit})),e=(0,w.v9)((function(n){return n.spec.addImages})),t=(0,w.v9)((function(n){return n.user.user})),i=(0,d.useState)(!1),a=(0,l.Z)(i,2),r=a[0],c=a[1],o=(0,w.v9)((function(n){return n.spec.specInfo})),s=(0,w.I0)(),u=(0,d.useState)({title:"",description:""}),g=(0,l.Z)(u,2),f=g[0],m=g[1],v=(0,d.useState)(0),j=(0,l.Z)(v,2),k=j[0],y=j[1],F=(null===o||void 0===o?void 0:o.specPhotos)&&o.specPhotos.map((function(n){return"https://d2ffbnf2hpheay.cloudfront.net/".concat(n.photo_url)}));(0,d.useEffect)((function(){n||y(0)}),[n]),(0,d.useEffect)((function(){r||s((0,b.rO)())}),[r]);var _=(0,N.jsx)(N.Fragment,{children:(0,N.jsxs)("div",{className:"box texts",children:[(0,N.jsx)("input",{maxLength:15,className:"title",value:f.title&&f.title,onChange:function(n){n.preventDefault(),n.stopPropagation();var e=n.currentTarget.value;m((0,p.Z)((0,p.Z)({},f),{},{title:e}))},spellCheck:!1}),(0,N.jsx)("div",{children:(0,N.jsx)(x.rN,{light:!0,thin:!0})}),(0,N.jsx)("textarea",{maxLength:300,className:"description",value:f.description&&f.description,onChange:function(n){n.preventDefault(),n.stopPropagation();var e=n.currentTarget.value;m((0,p.Z)((0,p.Z)({},f),{},{description:e}))},spellCheck:!1}),(0,N.jsxs)("div",{className:"footer",children:[(0,N.jsxs)("div",{className:"number",children:[(0,N.jsx)("span",{children:f.description&&f.description.length}),(0,N.jsx)("span",{children:"/"}),(0,N.jsx)("span",{children:300})]}),(0,N.jsx)("div",{className:"complete",onClick:function(n){if(n.preventDefault(),n.stopPropagation(),e.append("title",f.title),e.append("description",f.description),0===e.getAll("image").length){var t=new File(["logo.png"],"logo.png",{type:"image/jpg"});e.append("image",t)}(0,D.Z)(P.Y).patch("".concat(C.f,"specs/").concat(o.no&&o.no),e,{headers:{accept:"application/json","Content-Type":"application/json"}}).then((function(n){s((0,b.dX)(o.no)),c(!1)})).catch((function(n){console.log("err :>> ",n)}))},children:(0,N.jsx)(x.un,{main:!0,children:"\uc644\ub8cc"})})]})]})}),$=(0,N.jsx)(N.Fragment,{children:(0,N.jsxs)("div",{className:"box texts",children:[(0,N.jsx)("div",{className:"title",children:o&&o.title}),(0,N.jsx)("div",{children:(0,N.jsx)(x.rN,{light:!0,thin:!0})}),(0,N.jsx)("div",{className:"wrapper",children:(0,N.jsx)("div",{className:"description",children:o&&o.description})})]})});return(0,N.jsx)(x.PA,{big:!0,visible:n,reset:function(e){c(!1),m({title:o.title,description:o.description}),s((0,z.QI)(!n))},children:(0,N.jsxs)("div",{className:(0,h.cx)(I),children:[(0,N.jsxs)("div",{className:"title",children:[(0,N.jsxs)("div",{children:[(0,N.jsx)("span",{className:"user",children:o&&o.nickname}),(0,N.jsx)("span",{children:"\ub2d8"})]}),(null===o||void 0===o?void 0:o.userNo)===t.userNo&&(0,N.jsx)("div",{className:"report-btn",onClick:function(n){n.preventDefault(),n.stopPropagation(),c(!r),m({title:o.title,description:o.description})},children:(0,N.jsx)(x.un,{white:!0,children:r?"\uc218\uc815 \uc911...":"\uc218\uc815\ud558\uae30"})})]}),(0,N.jsxs)("div",{className:"wrapper",children:[r?(0,N.jsx)(x.xu,{size:[600,470],children:(0,N.jsx)("div",{className:"editbox",children:(0,N.jsx)(Z,{edit:!0,editImages:F})})}):(0,N.jsx)(x.PP,{size:"big",children:(0,N.jsx)("div",{className:"carousel",children:(0,N.jsx)(x.lr,{outsideBtn:!0,imgs:F&&F,imgIndex:k,setImgIndex:y})})}),(0,N.jsx)(x.xu,{size:[336,470],children:r?_:$})]})]})})}var I=(0,h.iv)(F||(F=(0,s.Z)(["\n  width: 100%;\n  height: 100%;\n  ",";\n  padding: 48px 84px 60px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  > .title {\n    height: 36px;\n    display: flex;\n    justify-content: space-between;\n    color: ",";\n    line-height: 130%;\n    font-size: 28px;\n    > .report-btn {\n      width: 100px;\n      height: 43px;\n    }\n    .user {\n      ",";\n      margin-right: 8px;\n    }\n  }\n  > .wrapper {\n    display: flex;\n    justify-content: space-between;\n    > .box {\n      width: 100%;\n      height: 100%;\n      padding: 8px;\n    }\n    .editbox {\n      width: 100%;\n      height: 100%;\n      padding: 8px;\n    }\n    .carousel {\n      width: 504px;\n      height: 438px;\n      margin: 0 auto;\n    }\n    > .postit {\n      width: 600px;\n      height: 470px;\n      /* background-color: lightblue; */\n    }\n    .texts {\n      position: relative;\n      padding: 8px;\n      height: 100%;\n      > * {\n        margin: 8px;\n        color: ",";\n      }\n\n      .title {\n        font-size: 18px;\n        display: flex;\n        align-items: center;\n        height: 23px;\n        margin-bottom: 16px;\n      }\n      .wrapper {\n        padding-right: 8px;\n        overflow: auto;\n      }\n      .description {\n        width: 304px;\n        height: 316px;\n        font-size: 14px;\n      }\n      > .footer {\n        position: absolute;\n        width: calc(336px - 16px);\n\n        bottom: 0;\n        margin: 0 inherit;\n        padding-right: 8px;\n        .complete {\n          width: 74px;\n          height: 43px;\n        }\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n      }\n    }\n  }\n"])),u.q0[24],u.$_.dark1,u.LZ.weight[700],u.$_.dark1)},2193:function(n,e,t){t.d(e,{Z:function(){return p}});var i,a,r,c=t(168),o=t(6676),s=t(7847);function p(n){var e=n.inline,t={true:(0,s.iv)(i||(i=(0,c.Z)(["\n      .container {\n        height: fit-content;\n        padding: 0 8px;\n        & > * {\n          margin: 0 6px;\n        }\n        & > :first-of-type {\n          margin: 0 6px 0 8px;\n        }\n        & > :nth-of-type(5) {\n          margin: 0 8px 0 6px;\n        }\n        .show {\n        }\n      }\n    "]))),undefined:(0,s.iv)(a||(a=(0,c.Z)(["\n      /* padding: 8px; */\n      .container {\n        flex-wrap: wrap;\n        .item-box {\n          width: 130px;\n          height: 130px;\n          margin: 8px;\n        }\n      }\n      .add {\n        ","\n        background-color: white;\n      }\n      .icon {\n        width: 24px;\n        height: 24px;\n        background: url('img/add-dark3.png') no-repeat center/contain;\n      }\n\n      .delete {\n        top: 8px;\n        right: 8px;\n      }\n    "])),o.AF.normal)};return function(){var n=t[e];return(0,s.iv)(r||(r=(0,c.Z)(["\n      width: 100%;\n      height: 100%;\n      position: relative;\n\n      .alarm {\n        @keyframes fadeout {\n          0% {\n            opacity: 1;\n          }\n          80% {\n            opacity: 1;\n          }\n          100% {\n            opacity: 0;\n          }\n        }\n\n        position: absolute;\n        z-index: 20;\n        width: 250px;\n        height: 50px;\n        font-size: 13px;\n        ","\n        top: -30px;\n        padding: 4px 16px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        ","\n        ","\n        background-color: white;\n        animation: fadeout 5s ease-in-out forwards;\n      }\n\n      .wrapper {\n        width: 100%;\n        height: 100%;\n        display: flex;\n        align-items: center;\n        overflow: auto;\n        &::-webkit-scrollbar {\n          display: none;\n        }\n      }\n      .container {\n        width: 100%;\n        height: 100%;\n        display: flex;\n        align-items: flex-start;\n        align-content: flex-start;\n        .show {\n          cursor: pointer;\n        }\n      }\n      .item-box {\n        width: 56px;\n        height: 56px;\n        position: relative;\n        :hover {\n          & > :nth-of-type(2) {\n            transition: 0.2s;\n            transform: scale(1.2);\n          }\n          & > button {\n            transition: 0.2s;\n            transform: scale(1.2);\n          }\n          /* background-color: #ffa1af11; */\n          box-shadow: 0px 0px 4px 2px rgba(255, 161, 175, 0.3);\n        }\n        background-color: white;\n      }\n\n      .add {\n        width: 56px;\n        height: 56px;\n        background: ",";\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        cursor: pointer;\n      }\n\n      .delete {\n        width: ",";\n        height: ",";\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        background: "," url('/img/delete.png') no-repeat\n          center/contain;\n        color: ",";\n        border-radius: 50%;\n        position: absolute;\n        top: -5px;\n        right: -8px;\n      }\n\n      .icon {\n        width: 30px;\n        height: 30px;\n        background: url('/img/add-white.png') no-repeat center/contain;\n      }\n\n      #input-file {\n        display: none;\n      }\n\n      ",";\n    "])),o.LZ.weight[400],o.q0[6],o.AF.normal,o.$_.light4,e?"15px":"20px",e?"15px":"20px",o.$_.dark4,o.$_.main,n)}()}}}]);
//# sourceMappingURL=169.111dbe37.chunk.js.map