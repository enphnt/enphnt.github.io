"use strict";(self.webpackChunknathan_phennel_website=self.webpackChunknathan_phennel_website||[]).push([[665],{8121:function(e,t,n){n.d(t,{Z:function(){return g}});var a=n(1151),o=n(7294),s=n(5785),i=n(7326),r=n(4578);const l="Nathan",c="bot_is_love",m=[{author:"bot_is_love is typing",body:"...",timeout:0},{author:c,body:"Hey there, ",timeout:3e3},{author:c,body:"I'm bot_is_love. How are you feeling today?",timeout:4e3},{author:l,body:"lol. i'm kidding, it's me, Nathan. But srsly..",timeout:6500},{author:l,body:"how are you?",timeout:8500}],u=["I see. Is there anything more that you want to share?","Thanks for sharing what you have chosen to. Is there any specific advice you are seeking?",["Ok. Well, this may not directly apply to your situation, but I want to share some perspective that may help.","Some say, 'The grass is always greener on the other side; until you jump the fence and see the weeds up close.' But then others see it as 'The grass is greener where you water it.'"],"Does that seem to be helpful?",["Either way, I also think..","You know, quality is about the presence of value and not the absence of mistake."],"In the midst of our chaotic daily schedules, it is easy to forget to make time for ourselves and each other. Taking the time to connect or recharge is important to prevent burnout and maintain a healthy lifestyle.","You are capable of more than you think. Everything else is just temporary and will pass like the weather.",["How does this one make you feel?","Our power to control and influence the present moment is our greatest asset, as it's the only time we have."],["You seem brave; ","and I mean bravery as in the courage to be honest with yourself and accept the truth without hesitation."],"This may seem confronting but it's important to remember that coming face-to-face with the truth can invoke fear, as it is a regular response to unfamiliarity.","Appreciating the simple pleasures of life is not just a common saying. In fact, it takes courage to recognize and appreciate them.","All that you truly own are the choices and decisions you make.","That's all the wisdom I can share for now. Now, get back to doing You! 🥳"],h=e=>{const{author:t,body:n}=e.data;let a;return a=Array.isArray(n)?n.map(((e,t)=>o.createElement("a",{href:e.url,className:"c-chat__action",key:t},e.text))):o.createElement("div",{className:"c-chat__message"},n),o.createElement("li",{className:"c-chat__item c-chat__item--"+t},o.createElement("div",{style:{color:"white"}},t),a)};var d=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={messages:[],responses:0},n.handleSubmit=n.handleSubmit.bind((0,i.Z)(n)),n.demo=n.demo.bind((0,i.Z)(n)),n.mockReply=n.mockReply.bind((0,i.Z)(n)),n}(0,r.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.demo()},n.demo=function(){this.setState({messages:[],responses:0}),m.map((e=>setTimeout((()=>this.addMessage(e)),e.timeout))),setTimeout((()=>{this.setState({messages:this.state.messages.slice(1,this.state.messages.length)})}),2e3)},n.scrollToLatestMessage=function(e){const t=document.querySelector(".c-chat__list");return t?t.scrollTop=e.offsetTop+e.style.height:null},n.addMessage=function(e){this.setState({messages:[].concat((0,s.Z)(this.state.messages),[e])}),setTimeout((()=>{const e=document.querySelectorAll("li"),t=e[e.length-1];this.scrollToLatestMessage(t)}),100)},n.handleSubmit=function(e){e.preventDefault(),this.addMessage({author:"You",body:e.target.querySelector("input").value}),this.mockReply(),e.target.reset()},n.mockReply=function(){let e;(0===this.state.responses||u[this.state.responses])&&(e=u[this.state.responses]),e&&(this.setState({responses:this.state.responses+1}),Array.isArray(e)?e.map(((e,t)=>setTimeout((()=>this.addMessage({author:c,body:e})),600+2500*(t+1)))):setTimeout((()=>this.addMessage({author:c,body:e})),3e3))},n.render=function(){return 4===this.state.messages.length&&document.querySelector("input").focus(),o.createElement("div",{className:"chat-window"},o.createElement("div",{className:"b-chat"},o.createElement("div",{className:"b-chat__container"},o.createElement("div",{className:["c-chat"].join(" ")},o.createElement("ul",{className:"c-chat__list"},this.state.messages.map(((e,t)=>o.createElement(h,{key:t,data:e})))),o.createElement("form",{className:"c-chat__form",onSubmit:this.handleSubmit},o.createElement("input",{type:"text",name:"input",placeholder:"Type your message here...",autoComplete:"off",required:!0}))))))},t}(o.Component);function p(e){const t=Object.assign({p:"p",a:"a"},(0,a.ah)(),e.components);return o.createElement(o.Fragment,null,o.createElement(t.p,null,"This tiny project will live forever!"),"\n",o.createElement(t.p,null,'If the day, week, life, or the universe is getting too overwhelming, "bot is love" is here to help. You can interact by sending a message. It\'s not the most nuanced in replies but if you are willing to listen, you might just get some good advice.'),"\n",o.createElement(d),"\n",o.createElement(t.p,null,"This tiny chat simulation, built using only React and some styling, is a great demonstration of front-end design and it’s fun to interact with, despite its limitations."),"\n",o.createElement(t.p,null,"I found this via Codepen over ",o.createElement(t.a,{href:"https://codepen.io/Sgatapi/pen/oOmNRQ"},"here"),". After spending about an hour learning how it works, I repurposed it for my own entertainment."),"\n",o.createElement(t.p,null,"If you have prior knowledge of React, understanding how it works is relatively easy. It is worth noting that the implementation used here does not include hooks and instead uses a Class component."),"\n",o.createElement(t.p,null,'There are two types of data stored as an array of objects: "Messages" and "Responses". Messages are triggered automatically in sequence, whereas Responses occur sequentially only after a user input is received.'),"\n",o.createElement(t.p,null,'The component starts out running the \'demo\' “Messages” first via "ComponentDidMount" method from React. After those messages are completed, then upon user input, the "handleSubmit" method triggers a mock reply from the "responses" array. This continues until the "responses" are all used up.'),"\n",o.createElement(t.p,null,'React components can be powerful tools for creating interactive user interfaces. One of the handiest features, that I\'m a fan of, is the ability to use "ComponentDidMount" and "handleSubmit" methods to quickly and easily generate messages on demand. With the help of these methods, developers can save time and energy by creating messages that engage users and can provide valuable information. In this application, the "ComponentDidMount" method triggers a demo message sequence when first loading the component, while "handleSubmit" enables users to input their own text and receive a response, making it easier for them to interact with the application.'),"\n",o.createElement(t.p,null,"Artificial intelligence has changed the way humans create and interact with technology. AI-based bots are increasingly being used to automate tasks such as responding to customer inquiries, providing product recommendations, and more. This bot contains nothing of the sort."),"\n",o.createElement(t.p,null,"In this implementation, user input is not factored into the algorithm and the bot just randomly roles through all its responses until they are all exhausted. This front-end component may be limited but it's still certainly capable of being used for a variety of applications, like an AI message service."),"\n",o.createElement(t.p,null,'Altogether, this construction is speedy with some great capabilities. From a code quality point of view, it\'s essential to upgrade and modify to upgrade the implementation to use a "FunctionComponent" rather than now the unnecessarily verbose Class component.'))}var g=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?o.createElement(t,e,o.createElement(p,e)):p(e)}},9724:function(e,t,n){n.r(t),n.d(t,{Head:function(){return u},default:function(){return h}});var a=n(8121),o=n(7294),s=n(4854),i=n(8032),r=n(7144),l=n(9357),c=n(7268);const m=e=>{let{data:t,children:n}=e;const a=(0,i.c)(t.mdx.frontmatter.hero_image);return o.createElement("div",{style:{margin:12}},o.createElement(r.Z,null,o.createElement("div",{className:c.Kb},o.createElement(s.Link,{className:c.XG,to:"/"},"Home"),o.createElement("div",{className:c.I7},">"),o.createElement(s.Link,{className:c.XG,to:"/projects"},"Projects"),o.createElement("div",{className:c.I7},">"),o.createElement(s.Link,{className:c.XG,to:"./"},t.mdx.frontmatter.title)),a?o.createElement(o.Fragment,null,o.createElement(i.G,{image:a,alt:t.mdx.frontmatter.hero_image_alt}),o.createElement("p",null,"Photo Credit:"," ",o.createElement("a",{href:t.mdx.frontmatter.hero_image_credit_link},t.mdx.frontmatter.hero_image_credit_text))):null,o.createElement("h1",null,t.mdx.frontmatter.title),o.createElement("p",{style:{fontWeight:100,marginBottom:30}},t.mdx.frontmatter.date),o.createElement("div",{className:c.kQ},n),o.createElement("br"),o.createElement(s.Link,{to:"/projects"},"Go back to the projects homepage")))},u=()=>o.createElement(l.Z,{title:"Super Cool Projects"});function h(e){return o.createElement(m,e,o.createElement(a.Z,e))}},7268:function(e,t,n){n.d(t,{$z:function(){return m},I7:function(){return s},KM:function(){return l},Kb:function(){return i},Q1:function(){return u},XG:function(){return o},Y2:function(){return a},kQ:function(){return r},v_:function(){return c}});var a="index-module--article--45d42",o="index-module--breadcrumbLink--6e770",s="index-module--breadcrumbLink-separator--cbc54",i="index-module--breadcrumbs--411be",r="index-module--content--136c6",l="index-module--highlight-anchor--28dd6",c="index-module--post--e88a8",m="index-module--postList--15965",u="index-module--thumbnail--3cc31"},1151:function(e,t,n){n.d(t,{ah:function(){return s}});var a=n(7294);const o=a.createContext({});function s(e){const t=a.useContext(o);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}}}]);
//# sourceMappingURL=component---src-pages-projects-mdx-frontmatter-slug-js-content-file-path-users-nathanphennel-projects-enphnt-github-io-projects-bot-is-love-index-mdx-ae9ae90f8756f3f8fa4b.js.map