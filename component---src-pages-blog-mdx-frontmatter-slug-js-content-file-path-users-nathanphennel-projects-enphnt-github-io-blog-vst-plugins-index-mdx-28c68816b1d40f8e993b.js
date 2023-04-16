"use strict";(self.webpackChunknathan_phennel_website=self.webpackChunknathan_phennel_website||[]).push([[247],{652:function(e,t,a){a.r(t),a.d(t,{default:function(){return b}});var n=a(1151),r=a(7294),l=a(3023);function o(e){const t=Object.assign({h1:"h1",a:"a",span:"span",p:"p",h2:"h2"},(0,n.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.h1,{id:"what-are-vsts",style:{position:"relative"}},"What are VSTs?",r.createElement(t.a,{href:"#what-are-vsts","aria-label":"what are vsts permalink",className:"anchor after"},r.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",r.createElement(t.p,null,"A Virtual Studio Technology (VST) is just an application. These applications are typically capable of either producing a sound, sometimes called 'instrument' VSTs, or processing some sound source, which is typically called 'effects' VSTs. The lines are blurry and often a single VST will do both."),"\n",r.createElement(t.p,null,"While it may sometimes be useful to run a VST in standalone mode without a Digital Audio Workstation (DAW), it's not very useful on its own. Typically, VST software is opened inside of a DAW so that it can be combined with other VSTs, recorded, and otherwise integrated with features of the DAW."),"\n",r.createElement(t.p,null,"I use Logic for my own music/noise creations and have grown familiar with a range of VST instruments and plugins. Now, I'm curious about how these things are actually built."),"\n",r.createElement(t.p,null,"In my short research stint, I learned that most VSTs are built in C++. As mostly a js/frontend dev, this seemed like a major hurtle for me personally. But then I stumbled upon Faust and Juce."),"\n",r.createElement(t.h1,{id:"faust",style:{position:"relative"}},"Faust",r.createElement(t.a,{href:"#faust","aria-label":"faust permalink",className:"anchor after"},r.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",r.createElement(t.p,null,'According to the course available from Stanford, via Kadenze, Faust is a programming language that "provides a generic way to implement signal processing algorithms for sound synthesis and processing towards professional audio applications. Thanks to its architecture system, Faust can be used to generate a wide range of ready-to-use elements such as audio plug-ins (e.g., VST, AU, etc.), externals for other computer music environments (e.g., ChucK, Max/MSP, PD, CSOUND, SuperCollider, etc.), standalone applications, mobile apps, web apps, etc. Additionally, it is a great tool to make DSP engines embeddable in larger projects."'),"\n",r.createElement(t.h2,{id:"free-faust-course",style:{position:"relative"}},"Free Faust course",r.createElement(t.a,{href:"#free-faust-course","aria-label":"free faust course permalink",className:"anchor after"},r.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",r.createElement(t.p,null,"The course weekly instructor-led is hosted here currently:"),"\n",r.createElement("a",{"aria-label":"stanford faust free course",target:"_blank",href:"https://www.kadenze.com/courses/real-time-audio-signal-processing-in-faust/info"},r.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 430px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/f5cdaacdfc1c185ccb3def0897b6afd4/40c27/stanford.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 112.44444444444446%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAWABQDASIAAhEBAxEB/8QAGQABAQEAAwAAAAAAAAAAAAAAAAUCAQME/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAa0yn4yqbBnPAPYE/8QAHRAAAgIBBQAAAAAAAAAAAAAAAQIAAxEEEhMhM//aAAgBAQABBQK7PDpvaOVZaq0SwMDGTM2GAdf/xAAWEQEBAQAAAAAAAAAAAAAAAAAQARH/2gAIAQMBAT8Bhp//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AR//xAAfEAAABgEFAAAAAAAAAAAAAAAAAQIQERKRISIxQnH/2gAIAQEABj8CVXmAW4/GUkzgWvMNpGB1w3//xAAdEAACAgIDAQAAAAAAAAAAAAABEQBBECExUWGR/9oACAEBAAE/Ib3UoaAWIj1gmWr6gERo1qNFUIT+uAiHAO0J/9oADAMBAAIAAwAAABDX2P3/xAAZEQADAAMAAAAAAAAAAAAAAAAAAREQcbH/2gAIAQMBAT8QpKb4RibH/8QAFxEBAAMAAAAAAAAAAAAAAAAAEAERMf/aAAgBAgEBPxCdKP/EACAQAQACAQQCAwAAAAAAAAAAAAERIQAxQVFhEIGRwfD/2gAIAQEAAT8Q7xOX1jhNTEpE34fE7IsKVNPziplZMRWnv8ZdqiiY1ofvICA3ib5x11reBUmroC7uf//Z\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="stanford-faust-course"\n        title=""\n        src="/static/f5cdaacdfc1c185ccb3def0897b6afd4/40c27/stanford.jpg"\n        srcset="/static/f5cdaacdfc1c185ccb3def0897b6afd4/863e1/stanford.jpg 225w,\n/static/f5cdaacdfc1c185ccb3def0897b6afd4/40c27/stanford.jpg 430w"\n        sizes="(max-width: 430px) 100vw, 430px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}})),"\n",r.createElement(t.h1,{id:"juce",style:{position:"relative"}},"JUCE",r.createElement(t.a,{href:"#juce","aria-label":"juce permalink",className:"anchor after"},r.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",r.createElement(t.p,null,"JUCE is another tool that's recently gained popularity. It's a somewhat open-source, cross-platform framework in C++, used to develop desktop and mobile applications. JUCE is used in particular for its GUI and plug-ins libraries."),"\n",r.createElement(t.h2,{id:"free-juce-course",style:{position:"relative"}},"Free JUCE course",r.createElement(t.a,{href:"#free-juce-course","aria-label":"free juce course permalink",className:"anchor after"},r.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",r.createElement(t.p,null,"A course from freeCodeCamp (they sometimes produce quality content!) is available right now as a youtube video. It's an introduction to modern C++ programming more generally too."),"\n",r.createElement(l.Z,{src:"https://www.youtube.com/embed/i_Iq4_Kd7Rc",title:"youtube - JUCE / C++"}),"\n",r.createElement(t.h1,{id:"conclusion",style:{position:"relative"}},"Conclusion",r.createElement(t.a,{href:"#conclusion","aria-label":"conclusion permalink",className:"anchor after"},r.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",r.createElement(t.p,null,"These courses are dense and require some serious dedication but honestly, both would help make a great week-long deep dive very fruitful. I'll update once I find the time for this one!"))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?r.createElement(t,e,r.createElement(o,e)):o(e)},s=a(8032),c=a(6050),d=a(9357),m=a(3306),u=a(5291),A=a(3247),h=a(5067),g=a(9838);const p="40vh",f=e=>{let{data:t,children:a}=e;const{mdx:{frontmatter:{title:n,tags:l,date:o,slug:i,hero_image:f,hero_image_alt:b,hero_image_credit_link:E,hero_image_credit_text:y},excerpt:v,tableOfContents:w}}=t,x=(0,s.c)(f);return r.createElement(c.Z,null,r.createElement("div",{style:{paddingTop:20}},r.createElement(h.Z,{title:n,path:"blog"}),x&&r.createElement("div",{style:{textAlign:"right"}},r.createElement("div",{style:{position:"relative",maxHeight:p}},r.createElement(s.G,{image:x,alt:b,style:{maxHeight:p,borderRadius:5,boxSizing:"border-box"}}),r.createElement("span",{style:{position:"absolute",top:"4%",right:"4%",color:"white",fontSize:"3vh",textAlign:"right",fontWeight:600,textShadow:"2px 2px 6px black",transformOrigin:"bottom",maxWidth:"80%",whiteSpace:"pre-wrap",letterSpacing:".2rem"}},b)),r.createElement("p",{style:{margin:0,fontSize:12}},"Photo:"," ",r.createElement("a",{"aria-label":E,href:E},y))),r.createElement("h1",null,n),r.createElement(m.Z,{tags:l}),r.createElement("h5",null,o),r.createElement("br"),r.createElement(u.Z,{tocs:w}),r.createElement(g.Z),r.createElement("div",null,a),r.createElement("br"),r.createElement(A.Z)),r.createElement(d.Z,{title:n,excerpt:v,slug:i,hero_image:f}))};function b(e){return r.createElement(f,e,r.createElement(i,e))}},789:function(e,t,a){var n=a(7294),r=a(4854),l=a(8032);const o=["lightgray","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgreen","lightpink","lightsalmon","lightseagreen","lightskyblue"];let i=0;t.Z=e=>{let{node:{id:t,frontmatter:{thumbnail:a,slug:s,title:c,date:d,tags:m},excerpt:u},path:A}=e;const h=(0,l.c)(a),g={article:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(9em, 1fr))",gridGap:"1em",maxWidth:"99%",padding:"1em 1em"},tag:{padding:4,margin:"4px",backgroundColor:"#e0e0e0",borderRadius:"4px"},blogFooterTags:{display:"flex",flexWrap:"wrap"},heading:{marginTop:0,fontSize:"1.6em",fontWeight:600,textDecorationLine:"underline",textDecorationStyle:"solid",textDecorationColor:o[1+i++%o.length],textDecorationThickness:1},thumbnailWrapper:{margin:"0.5em 0 0 0",justifySelf:"center"},info:{gridColumnEnd:"span 3"},hr:{color:o[i++%o.length],margin:0}};return n.createElement("div",null,n.createElement("hr",{style:g.hr}),n.createElement("article",{style:g.article,key:t},n.createElement("div",{style:g.thumbnailWrapper},n.createElement(r.Link,{id:"nohighlight","aria-label":s,key:s,to:"/"+A+"/"+s},n.createElement(l.G,{image:h,alt:"Thumbnail for "+c}))),n.createElement("div",{style:g.info},n.createElement(r.Link,{"aria-label":s,key:s,to:"/"+A+"/"+s,style:g.heading},c),n.createElement("h5",null,d),n.createElement("p",null,u),n.createElement("div",{style:g.blogFooterTags},m.map((e=>n.createElement(r.Link,{key:e,to:"/tags/"+e.replace(/ /g,"-")+"/",style:g.tag},e)))))))}},9838:function(e,t,a){var n=a(7294);const r=a(2788).default.button.withConfig({displayName:"back-to-top__BackToTopButton",componentId:"sc-izz6d7-0"})(["position:fixed;bottom:calc(12% - 30px);right:0;z-index:2;font-size:18px;border:none;outline:none;background-color:white !important;color:black;cursor:pointer;padding:0;width:60px;height:60px;border-radius:4px;box-shadow:0px 2px 4px rgba(0,0,0,0.2);white-space:nowrap;"]);t.Z=()=>{const{0:e,1:t}=(0,n.useState)(!1);(0,n.useEffect)((()=>{const e=()=>{window.pageYOffset>1e3?t(!0):t(!1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)}),[]);return e?n.createElement(r,{onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})}},n.createElement("span",null,"↑")):null}},5067:function(e,t,a){var n=a(4854),r=a(7294);const l={breadcrumbs:{display:"flex",width:"100%",alignItems:"baseline",fontFamily:"quicksand",margin:4},breadcrumbLink:{fontSize:"1em",paddingRight:2,whiteSpace:"nowrap"},breadcrumbLinkHighlight:{paddingRight:2,fontWeight:600},breadcrumbLinkSeparator:{fontSize:".75em",fontWeight:600,margin:3,paddingBottom:4,color:"rgb(46, 107, 77)"}};t.Z=e=>{let{title:t,path:a}=e;return r.createElement("div",{style:l.breadcrumbs},r.createElement(n.Link,{"aria-label":"Home",style:l.breadcrumbLink,to:"/"},"< ","Home"),r.createElement("div",{style:l.breadcrumbLinkSeparator},"/"),r.createElement(n.Link,{"aria-label":a,style:l.breadcrumbLink,to:"/"+a+"/"},a.charAt(0).toUpperCase()+a.slice(1)),r.createElement("div",{style:l.breadcrumbLinkSeparator},"/"),r.createElement(n.Link,{"aria-label":t,style:l.breadcrumbLinkHighlight,to:"./"},t))}},3247:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(4854),r=a(7294),l=a(789);var o=e=>{let{data:t,to:a}=e;const{0:o,1:i}=(0,r.useState)("");(0,r.useEffect)((()=>{const e=window.location.href.match(/([^/]+)\/?$/);i(""),i(e[e.length-1])}),[]);const s={blogFooter:{margin:16,padding:16,display:"flex",flexDirection:"column",alignItems:"start",boxShadow:"0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)",borderRadius:10},blogFooterLink:{textDecoration:"none",padding:4},blogFooterImage:{height:"90%",paddingTop:10,marginRight:20},blogFooterImageWrap:{justifySelf:"center",height:200},blogFooterInfo:{marginLeft:16},blogFooterGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:16},blogFooterTags:{display:"flex",flexWrap:"wrap"},blogFooterTag:{margin:4,padding:4,backgroundColor:"#e0e0e0",borderRadius:4}},{nodes:c}=t.allMdx,d=c.filter((e=>e.frontmatter.slug!==o)),m=d[Math.floor((new Date).getMinutes()/10)%d.length]||c[0];return r.createElement("div",{style:s.blogFooter},r.createElement("h3",null,r.createElement(n.Link,{to:a,style:s.blogFooterLink},"Check out other ","/blog/"===a?"articles":"code",":")),r.createElement(l.Z,{node:m,path:a.replace(/\//g,"")}))};var i=()=>{const e=(0,n.useStaticQuery)("448650272");return r.createElement(o,{data:e,to:"/blog/"})}},5291:function(e,t,a){var n=a(7294),r=a(4854),l=a(7814),o=a(9417);t.Z=e=>{let{tocs:t}=e;const{items:a}=t,{0:i,1:s}=(0,n.useState)(!1),{0:c,1:d}=(0,n.useState)(!1),m={padding:"0 1.6rem"},u={color:"#35435d",padding:3},A={backgroundColor:"rgb(46, 107, 77)",color:"#ffffff",fontWeight:400},h={backgroundColor:"#35435d",color:"#ffffff",fontWeight:400};return n.createElement(n.Fragment,null,n.createElement("button",{style:{fontSize:"1.1em",fontWeight:300,border:"none",borderLeft:"solid 5px lightgrey",borderRadius:"0 23px 23px 0",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0 1.5rem 0 1rem",margin:0,boxShadow:"5px 5px 95px rgba(183, 183, 183, 0.335) inset"},onClick:()=>{s(!i)}},"Table of Contents:",n.createElement(l.G,{style:{width:32,height:32},icon:i?o.mTx:o.ptq})),i&&n.createElement("div",{style:{margin:0,lineHeight:"1.4em"}},n.createElement("ol",{style:{padding:"4px 3rem 16px",borderLeft:"solid 5px lightgrey"}},a.map((e=>n.createElement("li",{key:e.title},n.createElement(r.Link,{key:e.title,style:{...u,...c===e.title?A:null},to:e.url,onMouseEnter:()=>{d(e.title)},onMouseLeave:()=>{d(!1)}},e.title),e.items?n.createElement("ul",{style:m},e.items.map((e=>n.createElement("li",{key:e.url},n.createElement(r.Link,{key:e.url,to:e.url,onMouseEnter:()=>{d(e.title)},onMouseLeave:()=>{d(!1)},style:{...u,...c===e.title?h:null}},e.title),e.items?n.createElement("ul",{style:m},e.items.map((e=>n.createElement("li",{key:e.url},n.createElement(r.Link,{key:e.url,to:e.url,onMouseEnter:()=>{d(e.title)},onMouseLeave:()=>{d(!1)},style:{...u,...c===e.title?A:null}},e.title))))):null)))):null))))))}},3306:function(e,t,a){var n=a(7294),r=a(4854);t.Z=e=>{let{tags:t}=e;const{0:a,1:l}=(0,n.useState)(!1),o={color:"#35435d",fontWeight:600},i={backgroundColor:"#35435d",color:"#ffffff"};return n.createElement("p",null,"Tags:"," ",t.map(((e,s)=>n.createElement("span",{key:e},n.createElement(r.Link,{key:e,to:"/tags/"+e.replace(/ /g,"-")+"/",style:{...o,...a===e?i:null},onMouseEnter:()=>{l(e)},onMouseLeave:()=>{l(!1)}},e),s===t.length-1?n.createElement(n.Fragment,null):n.createElement(n.Fragment,null,","," ")))))}},3023:function(e,t,a){var n=a(7294);t.Z=e=>{let{src:t,title:a,height:r,width:l,...o}=e;return n.createElement("div",{className:"video",style:{textAlign:"center",padding:"10px 0"}},n.createElement("iframe",{style:{borderRadius:8},src:t,title:a,id:t,allow:"accelerometer; encrypted-media; gyroscope; picture-in-picture",webkitallowfullscreen:"true",mozallowfullscreen:"true",allowFullScreen:!0,width:l||"600",height:r||"400",sandbox:"allow-top-navigation allow-same-origin allow-scripts allow-presentation"}))}},1151:function(e,t,a){a.d(t,{ah:function(){return l}});var n=a(7294);const r=n.createContext({});function l(e){const t=n.useContext(r);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}}}]);
//# sourceMappingURL=component---src-pages-blog-mdx-frontmatter-slug-js-content-file-path-users-nathanphennel-projects-enphnt-github-io-blog-vst-plugins-index-mdx-28c68816b1d40f8e993b.js.map