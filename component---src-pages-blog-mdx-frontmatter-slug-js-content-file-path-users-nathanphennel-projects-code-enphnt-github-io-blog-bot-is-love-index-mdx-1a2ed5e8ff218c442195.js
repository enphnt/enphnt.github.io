"use strict";(self.webpackChunknathan_phennel_website=self.webpackChunknathan_phennel_website||[]).push([[880],{6868:function(e,t,a){a.r(t),a.d(t,{Head:function(){return _},default:function(){return T}});var n=a(1151),o=a(7294),r=a(5785),i=a(7326),l=a(4578);const s="Nathan",c="bot_is_love",m=[{author:"bot_is_love is typing",body:"...",timeout:0},{author:c,body:"Hey there, ",timeout:3e3},{author:c,body:"I'm bot_is_love. How are you feeling today?",timeout:4e3},{author:s,body:"lol. i'm kidding, it's me, Nathan. But srsly..",timeout:6500},{author:s,body:"how are you?",timeout:8500}],h=["I see. Is there anything more that you want to share?","Thanks for sharing what you have chosen to. Is there any specific advice you are seeking?",["Ok. Well, this may not directly apply to your situation, but I want to share some perspective that may help.","Some say, 'The grass is always greener on the other side; until you jump the fence and see the weeds up close.' But then others see it as 'The grass is greener where you water it.'"],"Does that seem to be helpful?",["Either way, I also think..","You know, quality is about the presence of value and not the absence of mistake."],"In the midst of our chaotic daily schedules, it is easy to forget to make time for ourselves and each other. Taking the time to connect or recharge is important to prevent burnout and maintain a healthy lifestyle.","You are capable of more than you think. Everything else is just temporary and will pass like the weather.",["How does this one make you feel?","Our power to control and influence the present moment is our greatest asset, as it's the only time we have."],["You seem brave; ","and I mean bravery as in the courage to be honest with yourself and accept the truth without hesitation."],"This may seem confronting but it's important to remember that coming face-to-face with the truth can invoke fear, as it is a regular response to unfamiliarity.","Appreciating the simple pleasures of life is not just a common saying. In fact, it takes courage to recognize and appreciate them.","All that you truly own are the choices and decisions you make.","That's all the wisdom I can share for now. Now, get back to doing You! 🥳"],u=e=>{const{author:t,body:a}=e.data;let n;return n=Array.isArray(a)?a.map(((e,t)=>o.createElement("a",{"aria-label":"chat"+t,href:e.url,className:"c-chat__action",key:t},e.text))):o.createElement("div",{className:"c-chat__message"},a),o.createElement("li",{className:"c-chat__item c-chat__item--"+t},o.createElement("div",{style:{color:"white"}},t),n)};var d=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={messages:[],responses:0},a.handleSubmit=a.handleSubmit.bind((0,i.Z)(a)),a.demo=a.demo.bind((0,i.Z)(a)),a.mockReply=a.mockReply.bind((0,i.Z)(a)),a}(0,l.Z)(t,e);var a=t.prototype;return a.componentDidMount=function(){this.demo()},a.demo=function(){this.setState({messages:[],responses:0}),m.map((e=>setTimeout((()=>this.addMessage(e)),e.timeout))),setTimeout((()=>{this.setState({messages:this.state.messages.slice(1,this.state.messages.length)})}),2e3)},a.scrollToLatestMessage=function(e){const t=document.querySelector(".c-chat__list");return t?t.scrollTop=e.offsetTop+e.style.height:null},a.addMessage=function(e){this.setState({messages:[].concat((0,r.Z)(this.state.messages),[e])}),setTimeout((()=>{const e=document.querySelectorAll("li"),t=e[e.length-1];this.scrollToLatestMessage(t)}),100)},a.handleSubmit=function(e){e.preventDefault(),this.addMessage({author:"You",body:e.target.querySelector("input").value}),this.mockReply(),e.target.reset()},a.mockReply=function(){let e;(0===this.state.responses||h[this.state.responses])&&(e=h[this.state.responses]),e&&(this.setState({responses:this.state.responses+1}),Array.isArray(e)?e.map(((e,t)=>setTimeout((()=>this.addMessage({author:c,body:e})),600+2500*(t+1)))):setTimeout((()=>this.addMessage({author:c,body:e})),3e3))},a.render=function(){return 4===this.state.messages.length&&document.querySelector("input").focus(),o.createElement("div",{className:"chat-window"},o.createElement("div",{className:"b-chat"},o.createElement("div",{className:"b-chat__container"},o.createElement("div",{className:["c-chat"].join(" ")},o.createElement("ul",{className:"c-chat__list"},this.state.messages.map(((e,t)=>o.createElement(u,{key:t,data:e})))),o.createElement("form",{className:"c-chat__form",onSubmit:this.handleSubmit},o.createElement("input",{type:"text",name:"input",placeholder:"Type your message here...",autoComplete:"off",required:!0}))))))},t}(o.Component);function p(e){const t=Object.assign({h1:"h1",a:"a",span:"span",p:"p",h2:"h2"},(0,n.ah)(),e.components);return o.createElement(o.Fragment,null,o.createElement(t.h1,{id:"a-chat-app-ui",style:{position:"relative"}},"A chat app UI",o.createElement(t.a,{href:"#a-chat-app-ui","aria-label":"a chat app ui permalink",className:"anchor after"},o.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",o.createElement(t.p,null,"This tiny project will live forever!"),"\n",o.createElement(t.p,null,'If the day, week, life, or the universe is getting too overwhelming, "bot is love" is here to help. You can interact by sending a message. It\'s not the most nuanced in replies but if you are willing to listen, you might just get some good advice.'),"\n",o.createElement(t.h2,{id:"have-a-play-with-the-app",style:{position:"relative"}},"Have a play with the app:",o.createElement(t.a,{href:"#have-a-play-with-the-app","aria-label":"have a play with the app permalink",className:"anchor after"},o.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",o.createElement(d),"\n",o.createElement(t.p,null,"This tiny chat simulation, built using only React and some styling, is a great demonstration of front-end design and it’s fun to interact with, despite its limitations."),"\n",o.createElement(t.p,null,"I found this via Codepen over ",o.createElement(t.a,{href:"https://codepen.io/Sgatapi/pen/oOmNRQ"},"here"),". After spending about an hour learning how it works, I repurposed it for my own entertainment."),"\n",o.createElement(t.h2,{id:"how-it-works",style:{position:"relative"}},"How it works",o.createElement(t.a,{href:"#how-it-works","aria-label":"how it works permalink",className:"anchor after"},o.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",o.createElement(t.p,null,"If you have prior knowledge of React, understanding how it works is relatively easy. It is worth noting that the implementation used here does not include hooks and instead uses a Class component."),"\n",o.createElement(t.p,null,'There are two types of data stored as an array of objects: "Messages" and "Responses". Messages are triggered automatically in sequence, whereas Responses occur sequentially only after a user input is received.'),"\n",o.createElement(t.p,null,'The component starts out running the \'demo\' “Messages” first via "ComponentDidMount" method from React. After those messages are completed, then upon user input, the "handleSubmit" method triggers a mock reply from the "responses" array. This continues until the "responses" are all used up.'),"\n",o.createElement(t.p,null,'React components can be powerful tools for creating interactive user interfaces. One of the handiest features, that I\'m a fan of, is the ability to use "ComponentDidMount" and "handleSubmit" methods to quickly and easily generate messages on demand. With the help of these methods, developers can save time and energy by creating messages that engage users and can provide valuable information. In this application, the "ComponentDidMount" method triggers a demo message sequence when first loading the component, while "handleSubmit" enables users to input their own text and receive a response, making it easier for them to interact with the application.'),"\n",o.createElement(t.h2,{id:"limitations",style:{position:"relative"}},"Limitations",o.createElement(t.a,{href:"#limitations","aria-label":"limitations permalink",className:"anchor after"},o.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",o.createElement(t.p,null,"In this implementation, user input is not factored into the algorithm and the bot just randomly roles through all its responses until they are all exhausted. This front-end component may be limited but it's still certainly capable of being used for a variety of applications, like an AI message service."),"\n",o.createElement(t.h1,{id:"conclusion",style:{position:"relative"}},"Conclusion",o.createElement(t.a,{href:"#conclusion","aria-label":"conclusion permalink",className:"anchor after"},o.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",o.createElement(t.p,null,'Altogether, this construction is speedy with some great capabilities. From a code quality point of view, it\'s essential to upgrade and modify to upgrade the implementation to use a "FunctionComponent" rather than now the unnecessarily verbose Class component.'))}var g=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?o.createElement(t,e,o.createElement(p,e)):p(e)},f=a(6050),y=a(9357),b=a(3306),v=a(5291),E=a(5919),w=a(5067),x=a(9838),k=a(1766);const S=e=>{let{data:t,children:a}=e;const{mdx:{frontmatter:{title:n,tags:r,date:i,hero_image:l,hero_image_alt:s,hero_image_credit_link:c,hero_image_credit_text:m},tableOfContents:h}}=t;return o.createElement(f.Z,null,o.createElement("div",{style:{paddingTop:20}},o.createElement(w.Z,{title:n,path:"blog"}),l&&o.createElement(k.Z,{image:l,alt:s,credit:m,link:c}),o.createElement("h1",null,n),o.createElement(b.Z,{tags:r}),o.createElement("h5",null,i),o.createElement("br"),o.createElement(v.Z,{tocs:h}),o.createElement(x.Z),o.createElement("div",null,a),o.createElement("br"),o.createElement(E.Z)))},_=e=>{let{location:t,data:a}=e;return o.createElement(y.Z,{location:t,title:a.mdx.frontmatter.title,hero_image:a.mdx.frontmatter.hero_image,excerpt:a.mdx.excerpt})};function T(e){return o.createElement(S,e,o.createElement(g,e))}},789:function(e,t,a){var n=a(7294),o=a(4854),r=a(8032);const i=["lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgreen","lightpink","lightsalmon","lightseagreen","lightskyblue","lightgray"];t.Z=e=>{let{idx:t,node:{id:a,frontmatter:{thumbnail:l,slug:s,title:c,date:m,tags:h},excerpt:u}}=e;const d=(0,r.c)(l),p=i[t%i.length],{0:g,1:f}=(0,n.useState)("span 1");(0,n.useEffect)((()=>{window.addEventListener("resize",(()=>{window.innerWidth<=768?f("span 2"):f("span 1")}))}),[]);const y={article:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gridGap:"1em",maxWidth:"99%",padding:"1em"},tag:{padding:4,margin:"4px",backgroundColor:"#e0e0e0",color:"inherit",borderRadius:"4px",textDecoration:"none"},blogFooterTags:{display:"flex",flexWrap:"wrap"},heading:{marginTop:0,fontSize:"1.3em",fontWeight:600,textDecorationLine:"underline",textDecorationStyle:"solid",textDecorationColor:p,textDecorationThickness:1,maxWidth:"max-content"},thumbnailWrapper:{margin:"0.35em 0 0 0",justifySelf:"center",gridColumn:g,maxWidth:350},info:{gridColumn:"span 2",justifyContent:"space-around",display:"flex",flexDirection:"column"},hr:{color:p,margin:0}};return n.createElement("div",null,n.createElement("hr",{style:y.hr}),n.createElement("article",{style:y.article},n.createElement("div",{style:y.thumbnailWrapper},n.createElement(o.Link,{id:"nohighlight","aria-label":"Read more about "+c,to:"/blog/"+s+"/"},n.createElement(r.G,{image:d,alt:"Thumbnail for "+c}))),n.createElement("div",{style:y.info},n.createElement(o.Link,{"aria-label":"Read more about "+c,to:"/blog/"+s+"/",style:y.heading},c),n.createElement("h5",null,m),n.createElement("p",null,u),n.createElement("div",{style:y.blogFooterTags},h.map((e=>n.createElement(o.Link,{key:e,to:"/tags/"+e.replace(/ /g,"-")+"/",style:y.tag},e)))))))}},9838:function(e,t,a){var n=a(7294);const o=a(2788).default.button.withConfig({displayName:"back-to-top__BackToTopButton",componentId:"sc-izz6d7-0"})(["position:fixed;bottom:calc(12% - 30px);right:0;z-index:2;font-size:18px;border:none;outline:none;background-color:white !important;color:black;cursor:pointer;padding:0;width:60px;height:60px;border-radius:4px;box-shadow:0px 2px 4px rgba(0,0,0,0.2);white-space:nowrap;"]);t.Z=()=>{const{0:e,1:t}=(0,n.useState)(!1);(0,n.useEffect)((()=>{const e=()=>{window.pageYOffset>1e3?t(!0):t(!1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)}),[]);return e?n.createElement(o,{onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})}},n.createElement("span",null,"↑")):null}},5067:function(e,t,a){var n=a(4854),o=a(7294);const r={breadcrumbs:{display:"flex",alignItems:"baseline",margin:4,fontSize:"max(.85vw, .9em)"},breadcrumbLink:{paddingRight:2,whiteSpace:"nowrap",textDecoration:"none"},breadcrumbLinkHighlight:{fontWeight:600,textDecoration:"none"},breadcrumbLinkSeparator:{fontSize:".75em",fontWeight:600,margin:3,paddingBottom:4,color:"rgb(46, 107, 77)"}};t.Z=e=>{let{title:t,path:a}=e;return o.createElement("div",{style:r.breadcrumbs},o.createElement(n.Link,{"aria-label":"Home",style:r.breadcrumbLink,to:"/"},"< ","Home"),o.createElement("div",{style:r.breadcrumbLinkSeparator},"/"),o.createElement(n.Link,{"aria-label":a,style:r.breadcrumbLink,to:"/"+a+"/"},a.charAt(0).toUpperCase()+a.slice(1)),o.createElement("div",{style:r.breadcrumbLinkSeparator},"/"),o.createElement(n.Link,{"aria-label":t,style:r.breadcrumbLinkHighlight,to:"./"},t))}},1766:function(e,t,a){var n=a(7294),o=a(8032);t.Z=e=>{let{image:t,alt:a,credit:r,link:i}=e;return n.createElement("div",{style:{textAlign:"right"}},n.createElement("div",{style:{position:"relative",maxHeight:"45vh",borderRadius:"5px",overflow:"hidden"}},n.createElement(o.G,{image:(0,o.c)(t),alt:a}),n.createElement("span",{style:{position:"absolute",top:"4%",right:"4%",color:"white",fontSize:"max(3vh, 2.3vw)",textAlign:"right",fontWeight:600,textShadow:"0px 1px 8px black",transformOrigin:"bottom",maxWidth:"80%",whiteSpace:"pre-wrap",wordBreak:"break-word",letterSpacing:".2rem"}},a)),n.createElement("p",{style:{margin:0,marginTop:2,fontSize:12}},"Image:"," ",n.createElement("a",{"aria-label":i,href:i},r)))}},5919:function(e,t,a){var n=a(7294),o=a(4854),r=a(789);const i={blogFooter:{margin:16,padding:16,display:"flex",flexDirection:"column",alignItems:"start",boxShadow:"0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)",borderRadius:10},blogFooterLink:{textDecoration:"none",padding:4},blogFooterImage:{height:"90%",paddingTop:10,marginRight:20},blogFooterImageWrap:{justifySelf:"center",height:200},blogFooterInfo:{marginLeft:16},blogFooterGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:16},blogFooterTags:{display:"flex",flexWrap:"wrap"},blogFooterTag:{margin:4,padding:4,backgroundColor:"#e0e0e0",borderRadius:4}};t.Z=()=>{const{0:e,1:t}=(0,n.useState)(""),{0:a,1:l}=(0,n.useState)(null),s=(0,o.useStaticQuery)("2486570436");(0,n.useEffect)((()=>{const e=window.location.href.split("/").filter((e=>e)).pop();t(e)}),[]),(0,n.useEffect)((()=>{const t=s.allMdx.nodes.find((t=>t.frontmatter.slug===e));l(t)}),[e,s.allMdx.nodes]);const{nodes:c}=s.allMdx;if(a&&a.frontmatter.tags){const t=c.filter((t=>t.frontmatter.slug!==e&&t.frontmatter.tags.some((e=>a.frontmatter.tags.includes(e))))),l=t[Math.floor((new Date).getMinutes()/10)%t.length]||c[0],s=a.frontmatter.tags.includes("music")?c.filter((t=>t.frontmatter.slug!==e&&t.frontmatter.slug!==l.frontmatter.slug&&!t.frontmatter.tags.includes("music"))):c.filter((t=>t.frontmatter.slug!==e&&t.frontmatter.slug!==l.frontmatter.slug&&t.frontmatter.tags.includes("music"))),m=s[Math.floor((new Date).getMinutes()/10)%s.length]||c[1];return n.createElement("div",{style:i.blogFooter},n.createElement("h3",null,n.createElement(o.Link,{to:"/blog/",style:i.blogFooterLink},"Check out other articles:")),n.createElement("h5",null,"Similar tags:"),n.createElement(r.Z,{node:l}),n.createElement("h5",null,"Maybe something else: "),n.createElement(r.Z,{node:m}))}return n.createElement("div",{style:i.blogFooter},n.createElement("h3",null,"Loading..."))}},5291:function(e,t,a){var n=a(7294),o=a(4854),r=a(7814),i=a(9417);t.Z=e=>{let{tocs:t}=e;const{items:a}=t||{items:[]},{0:l,1:s}=(0,n.useState)(!1),{0:c,1:m}=(0,n.useState)(!1),h={fontWeight:600},u={padding:"0 1.6rem"},d={color:"#35435d",textDecoration:"none"},p={backgroundColor:"rgb(46, 107, 77)",color:"#ffffff"},g={backgroundColor:"#35435d",color:"#ffffff"};return n.createElement(n.Fragment,null,n.createElement("button",{style:{fontSize:"1.1em",fontWeight:300,border:"none",borderLeft:"solid 5px lightgrey",borderRadius:"0 23px 23px 0",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0 1.5rem 0 1rem",margin:0,boxShadow:"5px 5px 95px rgba(183, 183, 183, 0.335) inset"},onClick:()=>{s(!l)}},"Table of Contents:",n.createElement(r.G,{style:{width:32,height:32},icon:l?i.mTx:i.ptq})),l&&n.createElement("div",{style:{margin:0,lineHeight:"1.75em"}},n.createElement("ol",{style:{padding:"8px 2.5rem 16px",borderLeft:"solid 5px lightgrey"}},null==a?void 0:a.map((e=>n.createElement("li",{key:e.title},n.createElement(o.Link,{key:e.title,style:{...d,...c===e.title?p:null},to:e.url,onMouseEnter:()=>{m(e.title)},onMouseLeave:()=>{m(!1)}},n.createElement("span",{style:h},e.title)),e.items?n.createElement("ul",{style:u},e.items.map((e=>n.createElement("li",{key:e.url},n.createElement(o.Link,{key:e.url,to:e.url,onMouseEnter:()=>{m(e.title)},onMouseLeave:()=>{m(!1)},style:{...d,...c===e.title?g:null}},e.title),e.items?n.createElement("ul",{style:u},e.items.map((e=>n.createElement("li",{key:e.url},n.createElement(o.Link,{key:e.url,to:e.url,onMouseEnter:()=>{m(e.title)},onMouseLeave:()=>{m(!1)},style:{...d,...c===e.title?p:null}},e.title))))):null)))):null))))))}},3306:function(e,t,a){var n=a(7294),o=a(4854);t.Z=e=>{let{tags:t}=e;const{0:a,1:r}=(0,n.useState)(!1),i={color:"#35435d",fontWeight:600,textDecoration:"none"},l={backgroundColor:"#35435d",color:"#ffffff"};return n.createElement("p",null,"Tags:"," ",t.map(((e,s)=>n.createElement("span",{key:e},n.createElement(o.Link,{key:e,to:"/tags/"+e.replace(/ /g,"-")+"/",style:{...i,...a===e?l:null},onMouseEnter:()=>{r(e)},onMouseLeave:()=>{r(!1)}},e),s===t.length-1?n.createElement(n.Fragment,null):n.createElement(n.Fragment,null,","," ")))))}},1151:function(e,t,a){a.d(t,{ah:function(){return r}});var n=a(7294);const o=n.createContext({});function r(e){const t=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}}}]);
//# sourceMappingURL=component---src-pages-blog-mdx-frontmatter-slug-js-content-file-path-users-nathanphennel-projects-code-enphnt-github-io-blog-bot-is-love-index-mdx-1a2ed5e8ff218c442195.js.map