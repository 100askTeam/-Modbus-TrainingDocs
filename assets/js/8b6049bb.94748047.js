"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6963],{7744:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var s=n(5893),r=n(1151);const o={sidebar_position:11},i="\u7b2c10\u7ae0 \u8c03\u8bd5\u5fc3\u5f97",c={id:"Modbus-projectOne/chapter11",title:"\u7b2c10\u7ae0 \u8c03\u8bd5\u5fc3\u5f97",description:"1. USB\u4e32\u53e3\u91cd\u590d\u6253\u5f00\u3001\u5173\u95ed",source:"@site/docs/Modbus-projectOne/chapter11.md",sourceDirName:"Modbus-projectOne",slug:"/Modbus-projectOne/chapter11",permalink:"/Modbus-projectOne/chapter11",draft:!1,unlisted:!1,editUrl:"https://github.com/100askTeam/Modbus-TrainingDocs/tree/main/docs/Modbus-projectOne/chapter11.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"modbustrainoneSidebar",previous:{title:"\u7b2c9\u7ae0 \u7efc\u5408\u5b9e\u73b0",permalink:"/Modbus-projectOne/chapter10"}},d={},a=[{value:"<strong>1. USB\u4e32\u53e3\u91cd\u590d\u6253\u5f00\u3001\u5173\u95ed</strong>",id:"1-usb\u4e32\u53e3\u91cd\u590d\u6253\u5f00\u5173\u95ed",level:4},{value:"<strong>2. USB\u4e32\u53e3\u6570\u636e\u4e22\u5931</strong>",id:"2-usb\u4e32\u53e3\u6570\u636e\u4e22\u5931",level:4},{value:"<strong>3. STM32 DMA\u63a5\u6536\u56de\u8c03\u51fd\u6570</strong>",id:"3-stm32-dma\u63a5\u6536\u56de\u8c03\u51fd\u6570",level:4},{value:"<strong>4. c++\u521b\u5efa\u7ebf\u7a0b\u4f7f\u7528\u5c40\u90e8\u53d8\u91cf</strong>",id:"4-c\u521b\u5efa\u7ebf\u7a0b\u4f7f\u7528\u5c40\u90e8\u53d8\u91cf",level:4},{value:"<strong>5. libmodbus\u4f7f\u7528DMA\u4e32\u53e3\u65f6\u8d85\u65f6\u65f6\u95f4\u7684\u8bbe\u7f6e</strong>",id:"5-libmodbus\u4f7f\u7528dma\u4e32\u53e3\u65f6\u8d85\u65f6\u65f6\u95f4\u7684\u8bbe\u7f6e",level:4},{value:"<strong>6. F030\u6539\u7528DMA\u540e\u6808\u6ea2\u51fa\u5bfc\u81f4\u5207\u6362\u5230timer\u4efb\u52a1\u65f6\u5d29\u6e83</strong>",id:"6-f030\u6539\u7528dma\u540e\u6808\u6ea2\u51fa\u5bfc\u81f4\u5207\u6362\u5230timer\u4efb\u52a1\u65f6\u5d29\u6e83",level:4}];function l(e){const t={h1:"h1",h4:"h4",img:"img",p:"p",strong:"strong",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"\u7b2c10\u7ae0-\u8c03\u8bd5\u5fc3\u5f97",children:"\u7b2c10\u7ae0 \u8c03\u8bd5\u5fc3\u5f97"}),"\n",(0,s.jsx)(t.h4,{id:"1-usb\u4e32\u53e3\u91cd\u590d\u6253\u5f00\u5173\u95ed",children:(0,s.jsx)(t.strong,{children:"1. USB\u4e32\u53e3\u91cd\u590d\u6253\u5f00\u3001\u5173\u95ed"})}),"\n",(0,s.jsx)(t.p,{children:"\u4f7f\u7528USB\u4e32\u53e3\u65f6\uff0cPC\u4e0a\u5982\u679c\u4e2d\u9014\u5173\u95ed\u518d\u6253\u5f00\u4e32\u53e3\uff0c\u5219\u5f00\u53d1\u677f\u65e0\u6cd5\u7ee7\u7eed\u4e0a\u62a5\u6570\u636e\u3002\u89e3\u51b3\u65b9\u6cd5\u4e3a\uff1a"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"http://photos.100ask.net/modbus-docs/project_one/chapter11/image1.png",alt:"img"})}),"\n",(0,s.jsx)(t.h4,{id:"2-usb\u4e32\u53e3\u6570\u636e\u4e22\u5931",children:(0,s.jsx)(t.strong,{children:"2. USB\u4e32\u53e3\u6570\u636e\u4e22\u5931"})}),"\n",(0,s.jsx)(t.p,{children:"buffer\u4e0d\u591f\u5927"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"http://photos.100ask.net/modbus-docs/project_one/chapter11/image2.png",alt:"img"})}),"\n",(0,s.jsx)(t.h4,{id:"3-stm32-dma\u63a5\u6536\u56de\u8c03\u51fd\u6570",children:(0,s.jsx)(t.strong,{children:"3. STM32 DMA\u63a5\u6536\u56de\u8c03\u51fd\u6570"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"http://photos.100ask.net/modbus-docs/project_one/chapter11/image3.png",alt:"img"})}),"\n",(0,s.jsx)(t.h4,{id:"4-c\u521b\u5efa\u7ebf\u7a0b\u4f7f\u7528\u5c40\u90e8\u53d8\u91cf",children:(0,s.jsx)(t.strong,{children:"4. c++\u521b\u5efa\u7ebf\u7a0b\u4f7f\u7528\u5c40\u90e8\u53d8\u91cf"})}),"\n",(0,s.jsx)(t.p,{children:"\u540e\u53f0\u7a0b\u5e8f\u91cc\u521b\u5efa\u7ebf\u7a0b\u65f6\uff0c\u4f7f\u7528\u5c40\u90e8\u53d8\u91cf\u3002\u5f53\u521b\u5efa\u51fd\u6570\u9000\u51fa\u540e\uff0c\u5c40\u90e8\u53d8\u91cf\u88ab\u91ca\u653e\uff0c\u7ebf\u7a0b\u6709\u65f6\u5019\u80fd\u8fd0\u884c\uff0c\u6709\u65f6\u5019\u5d29\u6e83\u3002"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"http://photos.100ask.net/modbus-docs/project_one/chapter11/image4.png",alt:"img"})}),"\n",(0,s.jsx)(t.h4,{id:"5-libmodbus\u4f7f\u7528dma\u4e32\u53e3\u65f6\u8d85\u65f6\u65f6\u95f4\u7684\u8bbe\u7f6e",children:(0,s.jsx)(t.strong,{children:"5. libmodbus\u4f7f\u7528DMA\u4e32\u53e3\u65f6\u8d85\u65f6\u65f6\u95f4\u7684\u8bbe\u7f6e"})}),"\n",(0,s.jsx)(t.p,{children:"\u53c2\u8003\u300a9.2.3 UART\u9a71\u52a8\u4e25\u91cdBug\u300b\u3002"}),"\n",(0,s.jsx)(t.h4,{id:"6-f030\u6539\u7528dma\u540e\u6808\u6ea2\u51fa\u5bfc\u81f4\u5207\u6362\u5230timer\u4efb\u52a1\u65f6\u5d29\u6e83",children:(0,s.jsx)(t.strong,{children:"6. F030\u6539\u7528DMA\u540e\u6808\u6ea2\u51fa\u5bfc\u81f4\u5207\u6362\u5230timer\u4efb\u52a1\u65f6\u5d29\u6e83"})}),"\n",(0,s.jsx)(t.p,{children:"\u5728PendSV\u91cc\u5207\u6362\u4efb\u52a1\u65f6\uff1a\u4fdd\u5b58StartDefaultTask\u7684\u73b0\u573a\u65f6\uff0c\u4f1a\u7834\u574ftimer\u4efb\u52a1\u7684\u73b0\u573a\uff0c\u5f53\u5207\u6362\u5230timer\u4efb\u52a1\u65f6\u5c31\u5d29\u6e83\u4e86\u3002"})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>i});var s=n(7294);const r={},o=s.createContext(r);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);