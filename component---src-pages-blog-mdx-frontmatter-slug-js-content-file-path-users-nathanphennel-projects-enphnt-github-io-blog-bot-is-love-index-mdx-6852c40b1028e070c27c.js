"use strict";(self.webpackChunknathan_phennel_website=self.webpackChunknathan_phennel_website||[]).push([[173],{341:function(e,t,a){a.r(t),a.d(t,{default:function(){return T}});var n=a(1151),o=a(7294),r=a(5785),i=a(7326),l=a(4578);const s="Nathan",c="bot_is_love",h=[{author:"bot_is_love is typing",body:"...",timeout:0},{author:c,body:"Hey there, ",timeout:3e3},{author:c,body:"I'm bot_is_love. How are you feeling today?",timeout:4e3},{author:s,body:"lol. i'm kidding, it's me, Nathan. But srsly..",timeout:6500},{author:s,body:"how are you?",timeout:8500}],m=["I see. Is there anything more that you want to share?","Thanks for sharing what you have chosen to. Is there any specific advice you are seeking?",["Ok. Well, this may not directly apply to your situation, but I want to share some perspective that may help.","Some say, 'The grass is always greener on the other side; until you jump the fence and see the weeds up close.' But then others see it as 'The grass is greener where you water it.'"],"Does that seem to be helpful?",["Either way, I also think..","You know, quality is about the presence of value and not the absence of mistake."],"In the midst of our chaotic daily schedules, it is easy to forget to make time for ourselves and each other. Taking the time to connect or recharge is important to prevent burnout and maintain a healthy lifestyle.","You are capable of more than you think. Everything else is just temporary and will pass like the weather.",["How does this one make you feel?","Our power to control and influence the present moment is our greatest asset, as it's the only time we have."],["You seem brave; ","and I mean bravery as in the courage to be honest with yourself and accept the truth without hesitation."],"This may seem confronting but it's important to remember that coming face-to-face with the truth can invoke fear, as it is a regular response to unfamiliarity.","Appreciating the simple pleasures of life is not just a common saying. In fact, it takes courage to recognize and appreciate them.","All that you truly own are the choices and decisions you make.","That's all the wisdom I can share for now. Now, get back to doing You! 🥳"],u=e=>{const{author:t,body:a}=e.data;let n;return n=Array.isArray(a)?a.map(((e,t)=>o.createElement("a",{"aria-label":"chat"+t,href:e.url,className:"c-chat__action",key:t},e.text))):o.createElement("div",{className:"c-chat__message"},a),o.createElement("li",{className:"c-chat__item c-chat__item--"+t},o.createElement("div",{style:{color:"white"}},t),n)};var d=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={messages:[],responses:0},a.handleSubmit=a.handleSubmit.bind((0,i.Z)(a)),a.demo=a.demo.bind((0,i.Z)(a)),a.mockReply=a.mockReply.bind((0,i.Z)(a)),a}(0,l.Z)(t,e);var a=t.prototype;return a.componentDidMount=function(){this.demo()},a.demo=function(){this.setState({messages:[],responses:0}),h.map((e=>setTimeout((()=>this.addMessage(e)),e.timeout))),setTimeout((()=>{this.setState({messages:this.state.messages.slice(1,this.state.messages.length)})}),2e3)},a.scrollToLatestMessage=function(e){const t=document.querySelector(".c-chat__list");return t?t.scrollTop=e.offsetTop+e.style.height:null},a.addMessage=function(e){this.setState({messages:[].concat((0,r.Z)(this.state.messages),[e])}),setTimeout((()=>{const e=document.querySelectorAll("li"),t=e[e.length-1];this.scrollToLatestMessage(t)}),100)},a.handleSubmit=function(e){e.preventDefault(),this.addMessage({author:"You",body:e.target.querySelector("input").value}),this.mockReply(),e.target.reset()},a.mockReply=function(){let e;(0===this.state.responses||m[this.state.responses])&&(e=m[this.state.responses]),e&&(this.setState({responses:this.state.responses+1}),Array.isArray(e)?e.map(((e,t)=>setTimeout((()=>this.addMessage({author:c,body:e})),600+2500*(t+1)))):setTimeout((()=>this.addMessage({author:c,body:e})),3e3))},a.render=function(){return 4===this.state.messages.length&&document.querySelector("input").focus(),o.createElement("div",{className:"chat-window"},o.createElement("div",{className:"b-chat"},o.createElement("div",{className:"b-chat__container"},o.createElement("div",{className:["c-chat"].join(" ")},o.createElement("ul",{className:"c-chat__list"},this.state.messages.map(((e,t)=>o.createElement(u,{key:t,data:e})))),o.createElement("form",{className:"c-chat__form",onSubmit:this.handleSubmit},o.createElement("input",{type:"text",name:"input",placeholder:"Type your message here...",autoComplete:"off",required:!0}))))))},t}(o.Component);function p(e){const t=Object.assign({h1:"h1",a:"a",span:"span",p:"p",h2:"h2"},(0,n.ah)(),e.components);return o.createElement(o.Fragment,null,o.createElement(t.h1,{id:"a-chat-app-ui",style:{position:"relative"}},"A chat app UI",o.createElement(t.a,{href:"#a-chat-app-ui","aria-label":"a chat app ui permalink",className:"anchor after"},o.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",o.createElement(t.p,null,"This tiny project will live forever!"),"\n",o.createElement(t.p,null,'If the day, week, life, or the universe is getting too overwhelming, "bot is love" is here to help. You can interact by sending a message. It\'s not the most nuanced in replies but if you are willing to listen, you might just get some good advice.'),"\n",o.createElement(t.h2,{id:"have-a-play-with-the-app",style:{position:"relative"}},"Have a play with the app:",o.createElement(t.a,{href:"#have-a-play-with-the-app","aria-label":"have a play with the app permalink",className:"anchor after"},o.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",o.createElement(d),"\n",o.createElement(t.p,null,"This tiny chat simulation, built using only React and some styling, is a great demonstration of front-end design and it’s fun to interact with, despite its limitations."),"\n",o.createElement(t.p,null,"I found this via Codepen over ",o.createElement(t.a,{href:"https://codepen.io/Sgatapi/pen/oOmNRQ"},"here"),". After spending about an hour learning how it works, I repurposed it for my own entertainment."),"\n",o.createElement(t.h2,{id:"how-it-works",style:{position:"relative"}},"How it works",o.createElement(t.a,{href:"#how-it-works","aria-label":"how it works permalink",className:"anchor after"},o.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",o.createElement(t.p,null,"If you have prior knowledge of React, understanding how it works is relatively easy. It is worth noting that the implementation used here does not include hooks and instead uses a Class component."),"\n",o.createElement(t.p,null,'There are two types of data stored as an array of objects: "Messages" and "Responses". Messages are triggered automatically in sequence, whereas Responses occur sequentially only after a user input is received.'),"\n",o.createElement(t.p,null,'The component starts out running the \'demo\' “Messages” first via "ComponentDidMount" method from React. After those messages are completed, then upon user input, the "handleSubmit" method triggers a mock reply from the "responses" array. This continues until the "responses" are all used up.'),"\n",o.createElement(t.p,null,'React components can be powerful tools for creating interactive user interfaces. One of the handiest features, that I\'m a fan of, is the ability to use "ComponentDidMount" and "handleSubmit" methods to quickly and easily generate messages on demand. With the help of these methods, developers can save time and energy by creating messages that engage users and can provide valuable information. In this application, the "ComponentDidMount" method triggers a demo message sequence when first loading the component, while "handleSubmit" enables users to input their own text and receive a response, making it easier for them to interact with the application.'),"\n",o.createElement(t.h2,{id:"limitations",style:{position:"relative"}},"Limitations",o.createElement(t.a,{href:"#limitations","aria-label":"limitations permalink",className:"anchor after"},o.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",o.createElement(t.p,null,"In this implementation, user input is not factored into the algorithm and the bot just randomly roles through all its responses until they are all exhausted. This front-end component may be limited but it's still certainly capable of being used for a variety of applications, like an AI message service."),"\n",o.createElement(t.h1,{id:"conclusion",style:{position:"relative"}},"Conclusion",o.createElement(t.a,{href:"#conclusion","aria-label":"conclusion permalink",className:"anchor after"},o.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",o.createElement(t.p,null,'Altogether, this construction is speedy with some great capabilities. From a code quality point of view, it\'s essential to upgrade and modify to upgrade the implementation to use a "FunctionComponent" rather than now the unnecessarily verbose Class component.'))}var g=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?o.createElement(t,e,o.createElement(p,e)):p(e)},f=a(8032),y=a(6050),b=a(9357),v=a(3306),E=a(5291),w=a(3247),k=a(5067),x=a(9838);const S="40vh",_=e=>{let{data:t,children:a}=e;const{mdx:{frontmatter:{title:n,tags:r,date:i,slug:l,hero_image:s,hero_image_alt:c,hero_image_credit_link:h,hero_image_credit_text:m},excerpt:u,tableOfContents:d}}=t,p=(0,f.c)(s);return o.createElement(y.Z,null,o.createElement("div",{style:{paddingTop:20}},o.createElement(k.Z,{title:n,path:"blog"}),p&&o.createElement("div",{style:{textAlign:"right"}},o.createElement("div",{style:{position:"relative",maxHeight:S}},o.createElement(f.G,{image:p,alt:c,style:{maxHeight:S,borderRadius:5,boxSizing:"border-box"}}),o.createElement("span",{style:{position:"absolute",top:"4%",right:"4%",color:"white",fontSize:"3vh",textAlign:"right",fontWeight:600,textShadow:"2px 2px 6px black",transformOrigin:"bottom",maxWidth:"80%",whiteSpace:"pre-wrap",letterSpacing:".2rem"}},c)),o.createElement("p",{style:{margin:0,fontSize:12}},"Photo:"," ",o.createElement("a",{"aria-label":h,href:h},m))),o.createElement("h1",null,n),o.createElement(v.Z,{tags:r}),o.createElement("h5",null,i),o.createElement("br"),o.createElement(E.Z,{tocs:d}),o.createElement(x.Z),o.createElement("div",null,a),o.createElement("br"),o.createElement(w.Z)),o.createElement(b.Z,{title:n,excerpt:u,slug:l,hero_image:s}))};function T(e){return o.createElement(_,e,o.createElement(g,e))}},789:function(e,t,a){var n=a(7294),o=a(4854),r=a(8032);const i=["lightgray","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgreen","lightpink","lightsalmon","lightseagreen","lightskyblue"];let l=0;t.Z=e=>{let{node:{id:t,frontmatter:{thumbnail:a,slug:s,title:c,date:h,tags:m},excerpt:u},path:d}=e;const p=(0,r.c)(a),g={article:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(9em, 1fr))",gridGap:"1em",maxWidth:"99%",padding:"1em 1em"},tag:{padding:4,margin:"4px",backgroundColor:"#e0e0e0",borderRadius:"4px"},blogFooterTags:{display:"flex",flexWrap:"wrap"},heading:{marginTop:0,fontSize:"1.6em",fontWeight:600,textDecorationLine:"underline",textDecorationStyle:"solid",textDecorationColor:i[1+l++%i.length],textDecorationThickness:1},thumbnailWrapper:{margin:"0.5em 0 0 0",justifySelf:"center"},info:{gridColumnEnd:"span 3"},hr:{color:i[l++%i.length],margin:0}};return n.createElement("div",null,n.createElement("hr",{style:g.hr}),n.createElement("article",{style:g.article,key:t},n.createElement("div",{style:g.thumbnailWrapper},n.createElement(o.Link,{id:"nohighlight","aria-label":s,key:s,to:"/"+d+"/"+s},n.createElement(r.G,{image:p,alt:"Thumbnail for "+c}))),n.createElement("div",{style:g.info},n.createElement(o.Link,{"aria-label":s,key:s,to:"/"+d+"/"+s,style:g.heading},c),n.createElement("h5",null,h),n.createElement("p",null,u),n.createElement("div",{style:g.blogFooterTags},m.map((e=>n.createElement(o.Link,{key:e,to:"/tags/"+e.replace(/ /g,"-")+"/",style:g.tag},e)))))))}},9838:function(e,t,a){var n=a(7294);const o=a(2788).default.button.withConfig({displayName:"back-to-top__BackToTopButton",componentId:"sc-izz6d7-0"})(["position:fixed;bottom:calc(12% - 30px);right:0;z-index:2;font-size:18px;border:none;outline:none;background-color:white !important;color:black;cursor:pointer;padding:0;width:60px;height:60px;border-radius:4px;box-shadow:0px 2px 4px rgba(0,0,0,0.2);white-space:nowrap;"]);t.Z=()=>{const{0:e,1:t}=(0,n.useState)(!1);(0,n.useEffect)((()=>{const e=()=>{window.pageYOffset>1e3?t(!0):t(!1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)}),[]);return e?n.createElement(o,{onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})}},n.createElement("span",null,"↑")):null}},5067:function(e,t,a){var n=a(4854),o=a(7294);const r={breadcrumbs:{display:"flex",width:"100%",alignItems:"baseline",fontFamily:"quicksand",margin:4},breadcrumbLink:{fontSize:"1em",paddingRight:2,whiteSpace:"nowrap"},breadcrumbLinkHighlight:{paddingRight:2,fontWeight:600},breadcrumbLinkSeparator:{fontSize:".75em",fontWeight:600,margin:3,paddingBottom:4,color:"rgb(46, 107, 77)"}};t.Z=e=>{let{title:t,path:a}=e;return o.createElement("div",{style:r.breadcrumbs},o.createElement(n.Link,{"aria-label":"Home",style:r.breadcrumbLink,to:"/"},"< ","Home"),o.createElement("div",{style:r.breadcrumbLinkSeparator},"/"),o.createElement(n.Link,{"aria-label":a,style:r.breadcrumbLink,to:"/"+a+"/"},a.charAt(0).toUpperCase()+a.slice(1)),o.createElement("div",{style:r.breadcrumbLinkSeparator},"/"),o.createElement(n.Link,{"aria-label":t,style:r.breadcrumbLinkHighlight,to:"./"},t))}},3247:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(4854),o=a(7294),r=a(789);var i=e=>{let{data:t,to:a}=e;const{0:i,1:l}=(0,o.useState)("");(0,o.useEffect)((()=>{const e=window.location.href.match(/([^/]+)\/?$/);l(""),l(e[e.length-1])}),[]);const s={blogFooter:{margin:16,padding:16,display:"flex",flexDirection:"column",alignItems:"start",boxShadow:"0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)",borderRadius:10},blogFooterLink:{textDecoration:"none",padding:4},blogFooterImage:{height:"90%",paddingTop:10,marginRight:20},blogFooterImageWrap:{justifySelf:"center",height:200},blogFooterInfo:{marginLeft:16},blogFooterGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:16},blogFooterTags:{display:"flex",flexWrap:"wrap"},blogFooterTag:{margin:4,padding:4,backgroundColor:"#e0e0e0",borderRadius:4}},{nodes:c}=t.allMdx,h=c.filter((e=>e.frontmatter.slug!==i)),m=h[Math.floor((new Date).getMinutes()/10)%h.length]||c[0];return o.createElement("div",{style:s.blogFooter},o.createElement("h3",null,o.createElement(n.Link,{to:a,style:s.blogFooterLink},"Check out other ","/blog/"===a?"articles":"code",":")),o.createElement(r.Z,{node:m,path:a.replace(/\//g,"")}))};var l=()=>{const e=(0,n.useStaticQuery)("448650272");return o.createElement(i,{data:e,to:"/blog/"})}},5291:function(e,t,a){var n=a(7294),o=a(4854),r=a(7814),i=a(9417);t.Z=e=>{let{tocs:t}=e;const{items:a}=t,{0:l,1:s}=(0,n.useState)(!1),{0:c,1:h}=(0,n.useState)(!1),m={padding:"0 1.6rem"},u={color:"#35435d",padding:3},d={backgroundColor:"rgb(46, 107, 77)",color:"#ffffff",fontWeight:400},p={backgroundColor:"#35435d",color:"#ffffff",fontWeight:400};return n.createElement(n.Fragment,null,n.createElement("button",{style:{fontSize:"1.1em",fontWeight:300,border:"none",borderLeft:"solid 5px lightgrey",borderRadius:"0 23px 23px 0",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0 1.5rem 0 1rem",margin:0,boxShadow:"5px 5px 95px rgba(183, 183, 183, 0.335) inset"},onClick:()=>{s(!l)}},"Table of Contents:",n.createElement(r.G,{style:{width:32,height:32},icon:l?i.mTx:i.ptq})),l&&n.createElement("div",{style:{margin:0,lineHeight:"1.4em"}},n.createElement("ol",{style:{padding:"4px 3rem 16px",borderLeft:"solid 5px lightgrey"}},a.map((e=>n.createElement("li",{key:e.title},n.createElement(o.Link,{key:e.title,style:{...u,...c===e.title?d:null},to:e.url,onMouseEnter:()=>{h(e.title)},onMouseLeave:()=>{h(!1)}},e.title),e.items?n.createElement("ul",{style:m},e.items.map((e=>n.createElement("li",{key:e.url},n.createElement(o.Link,{key:e.url,to:e.url,onMouseEnter:()=>{h(e.title)},onMouseLeave:()=>{h(!1)},style:{...u,...c===e.title?p:null}},e.title),e.items?n.createElement("ul",{style:m},e.items.map((e=>n.createElement("li",{key:e.url},n.createElement(o.Link,{key:e.url,to:e.url,onMouseEnter:()=>{h(e.title)},onMouseLeave:()=>{h(!1)},style:{...u,...c===e.title?d:null}},e.title))))):null)))):null))))))}},3306:function(e,t,a){var n=a(7294),o=a(4854);t.Z=e=>{let{tags:t}=e;const{0:a,1:r}=(0,n.useState)(!1),i={color:"#35435d",fontWeight:600},l={backgroundColor:"#35435d",color:"#ffffff"};return n.createElement("p",null,"Tags:"," ",t.map(((e,s)=>n.createElement("span",{key:e},n.createElement(o.Link,{key:e,to:"/tags/"+e.replace(/ /g,"-")+"/",style:{...i,...a===e?l:null},onMouseEnter:()=>{r(e)},onMouseLeave:()=>{r(!1)}},e),s===t.length-1?n.createElement(n.Fragment,null):n.createElement(n.Fragment,null,","," ")))))}},1151:function(e,t,a){a.d(t,{ah:function(){return r}});var n=a(7294);const o=n.createContext({});function r(e){const t=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}}}]);
//# sourceMappingURL=component---src-pages-blog-mdx-frontmatter-slug-js-content-file-path-users-nathanphennel-projects-enphnt-github-io-blog-bot-is-love-index-mdx-6852c40b1028e070c27c.js.map