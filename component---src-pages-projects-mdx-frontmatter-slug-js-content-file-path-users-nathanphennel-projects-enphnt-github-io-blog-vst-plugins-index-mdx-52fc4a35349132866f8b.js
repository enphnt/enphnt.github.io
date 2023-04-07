"use strict";(self.webpackChunknathan_phennel_website=self.webpackChunknathan_phennel_website||[]).push([[4279],{5253:function(e,t,a){var n=a(1151),r=a(7294),l=a(3023);function o(e){const t=Object.assign({h1:"h1",a:"a",span:"span",p:"p",h2:"h2"},(0,n.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.h1,{id:"what-are-vsts",style:{position:"relative"}},"What are VSTs?",r.createElement(t.a,{href:"#what-are-vsts","aria-label":"what are vsts permalink",className:"anchor after"},r.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",r.createElement(t.p,null,"A Virtual Studio Technology (VST) is just an application. These applications are typically capable of either producing a sound, sometimes called 'instrument' VSTs, or processing some sound source, which are typically called 'effects' VSTs. The lines are blurry and often a single VST will do both."),"\n",r.createElement(t.p,null,"While it may sometimes be useful to run a VST in standalone mode without a Digital Audio Workstation (DAW), it's not very useful on its own. Typically, VST software is opened inside of a DAW so that it can be combined with other VSTs, recorded, and otherwise integrated with features of the DAW."),"\n",r.createElement(t.p,null,"I use Logic for my own music/noise creations and have grown familiar with a range of VST instruments and plugins. Now, I'm curious about how these things are actually built."),"\n",r.createElement(t.p,null,"In my short research stint, I learned that most VSTs are built in C++. As mostly a js/frontend dev, this seemed like a major hurtle for me personally. But then I stumbled upon Faust and Juce."),"\n",r.createElement(t.h1,{id:"faust",style:{position:"relative"}},"Faust",r.createElement(t.a,{href:"#faust","aria-label":"faust permalink",className:"anchor after"},r.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",r.createElement(t.p,null,'According to the course available from Stanford, via Kadenze, Faust is a programming language that "provides a generic way to implement signal processing algorithms for sound synthesis and processing towards professional audio applications. Thanks to its architecture system, Faust can be used to generate a wide range of ready-to-use elements such as audio plug-ins (e.g., VST, AU, etc.), externals for other computer music environments (e.g., ChucK, Max/MSP, PD, CSOUND, SuperCollider, etc.), standalone applications, mobile apps, web apps, etc. Additionally, it is a great tool to make DSP engines embeddable in larger projects."'),"\n",r.createElement(t.h2,{id:"free-faust-course",style:{position:"relative"}},"Free Faust course",r.createElement(t.a,{href:"#free-faust-course","aria-label":"free faust course permalink",className:"anchor after"},r.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",r.createElement(t.p,null,"I think I will actually take the weekly instructor-led course. The course is hosted here currently:"),"\n",r.createElement("a",{"aria-label":"stanford faust free course",target:"_blank",href:"https://www.kadenze.com/courses/real-time-audio-signal-processing-in-faust/info"},r.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 430px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/f5cdaacdfc1c185ccb3def0897b6afd4/40c27/stanford.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 112.44444444444446%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAWABQDASIAAhEBAxEB/8QAGQABAQEAAwAAAAAAAAAAAAAAAAUCAQME/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAa0yn4yqbBnPAPYE/8QAHRAAAgIBBQAAAAAAAAAAAAAAAQIAAxEEEhMhM//aAAgBAQABBQK7PDpvaOVZaq0SwMDGTM2GAdf/xAAWEQEBAQAAAAAAAAAAAAAAAAAQARH/2gAIAQMBAT8Bhp//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AR//xAAfEAAABgEFAAAAAAAAAAAAAAAAAQIQERKRISIxQnH/2gAIAQEABj8CVXmAW4/GUkzgWvMNpGB1w3//xAAdEAACAgIDAQAAAAAAAAAAAAABEQBBECExUWGR/9oACAEBAAE/Ib3UoaAWIj1gmWr6gERo1qNFUIT+uAiHAO0J/9oADAMBAAIAAwAAABDX2P3/xAAZEQADAAMAAAAAAAAAAAAAAAAAAREQcbH/2gAIAQMBAT8QpKb4RibH/8QAFxEBAAMAAAAAAAAAAAAAAAAAEAERMf/aAAgBAgEBPxCdKP/EACAQAQACAQQCAwAAAAAAAAAAAAERIQAxQVFhEIGRwfD/2gAIAQEAAT8Q7xOX1jhNTEpE34fE7IsKVNPziplZMRWnv8ZdqiiY1ofvICA3ib5x11reBUmroC7uf//Z\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="stanford-faust-course"\n        title=""\n        src="/static/f5cdaacdfc1c185ccb3def0897b6afd4/40c27/stanford.jpg"\n        srcset="/static/f5cdaacdfc1c185ccb3def0897b6afd4/863e1/stanford.jpg 225w,\n/static/f5cdaacdfc1c185ccb3def0897b6afd4/40c27/stanford.jpg 430w"\n        sizes="(max-width: 430px) 100vw, 430px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}})),"\n",r.createElement(t.h1,{id:"juce",style:{position:"relative"}},"JUCE",r.createElement(t.a,{href:"#juce","aria-label":"juce permalink",className:"anchor after"},r.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",r.createElement(t.p,null,"JUCE is another tool that's recently gained popularity. It's a somewhat open-source, cross-platform framework in C++, used to develop desktop and mobile applications. JUCE is used in particular for its GUI and plug-ins libraries."),"\n",r.createElement(t.h2,{id:"free-juce-course",style:{position:"relative"}},"Free JUCE course",r.createElement(t.a,{href:"#free-juce-course","aria-label":"free juce course permalink",className:"anchor after"},r.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",r.createElement(t.p,null,"A course from freeCodeCamp (they sometimes produce quality content!) is available right now as a youtube video. It's actually an introduction to modern C++ programming more generally too."),"\n",r.createElement(l.Z,{videoSrcURL:"https://www.youtube.com/embed/i_Iq4_Kd7Rc",videoTitle:"youtube - JUCE / C++"}))}t.Z=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?r.createElement(t,e,r.createElement(o,e)):o(e)}},2137:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var n=a(5253),r=a(7294),l=a(4854),o=a(8032),i=a(6050),s=a(9357),c=a(7268),A=a(7906),m=a(3846);const u=e=>{let{data:t,children:a}=e;const n=(0,o.c)(t.mdx.frontmatter.hero_image);return r.createElement("div",{style:{margin:12,paddingTop:40}},r.createElement(i.Z,null,r.createElement("div",{className:c.Kb},r.createElement(l.Link,{"aria-label":"Home",className:c.XG,to:"/"},"Home"),r.createElement("div",{className:c.I7},"»"),r.createElement(l.Link,{"aria-label":"Projects",className:c.XG,to:"/projects/"},"Projects"),r.createElement("div",{className:c.I7},"»"),r.createElement(l.Link,{"aria-label":t.mdx.frontmatter.title,className:c.XG,to:"./"},t.mdx.frontmatter.title)),n?r.createElement(r.Fragment,null,r.createElement(o.G,{image:n,alt:t.mdx.frontmatter.hero_image_alt,className:c.rP}),r.createElement("p",null,"Photo Credit:"," ",r.createElement("a",{href:t.mdx.frontmatter.hero_image_credit_link},t.mdx.frontmatter.hero_image_credit_text))):null,r.createElement("h1",null,t.mdx.frontmatter.title),r.createElement(A.Z,{tags:t.mdx.frontmatter.tags}),r.createElement("h5",null,t.mdx.frontmatter.date),r.createElement("br"),r.createElement(m.Z,{tocs:t.mdx.tableOfContents}),r.createElement("br"),r.createElement("div",{className:c.kQ},a),r.createElement("br"),r.createElement(l.Link,{"aria-label":"back to Projects",to:"/projects/"},"Go back to the projects homepage")),r.createElement(s.Z,{title:t.mdx.frontmatter.title+" | Projects"}))};function d(e){return r.createElement(u,e,r.createElement(n.Z,e))}},9357:function(e,t,a){var n=a(7294),r=a(4854);t.Z=e=>{let{title:t}=e;const a=(0,r.useStaticQuery)("2731891648");return n.createElement(n.Fragment,null,n.createElement("html",{lang:"en"}),n.createElement("meta",{name:"description",content:a.site.siteMetadata.description}),n.createElement("meta",{name:"image",content:a.site.siteMetadata.image}),n.createElement("title",null,t," | ",a.site.siteMetadata.title))}},3846:function(e,t,a){var n=a(7294),r=a(4854),l=a(7814),o=a(9417);t.Z=e=>{let{tocs:t}=e;const{items:a}=t,{0:i,1:s}=(0,n.useState)(!0),{0:c,1:A}=(0,n.useState)(!1),m={padding:"0 1.6rem"},u={color:"#35435d",padding:3},d={backgroundColor:"rgb(46, 107, 77)",color:"#ffffff",fontWeight:400},h={backgroundColor:"#35435d",color:"#ffffff",fontWeight:400};return n.createElement(n.Fragment,null,n.createElement("button",{style:{fontSize:"1.1em",fontWeight:300,border:"none",borderBottom:"solid 1px lightgrey",borderRight:"solid 1px lightgrey",borderTop:"solid 1px lightgrey",borderLeft:"solid 5px lightgrey",color:"#222",backgroundColor:"transparent",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0 1.5rem",margin:0},onClick:()=>{s(!i)}},"Table of Contents:",n.createElement(l.G,{style:{width:32,height:32},icon:i?o.mTx:o.ptq})),i&&n.createElement("div",{style:{marginTop:0,lineHeight:"1.4em"}},n.createElement("ol",{style:{padding:"16px 3rem",borderBottom:"solid 1px lightgrey",borderRight:"solid 1px lightgrey",borderLeft:"solid 5px lightgrey"}},a.map((e=>n.createElement("li",{key:e.title},n.createElement(r.Link,{style:{...u,...c===e.title?d:null},key:e.title,to:e.url,onMouseEnter:()=>{A(e.title)},onMouseLeave:()=>{A(!1)}},e.title),e.items?n.createElement("ul",{style:m},e.items.map((e=>n.createElement("li",null,n.createElement(r.Link,{to:e.url,onMouseEnter:()=>{A(e.title)},onMouseLeave:()=>{A(!1)},style:{...u,...c===e.title?h:null}},e.title),e.items?n.createElement("ul",{style:m},e.items.map((e=>n.createElement("li",null,n.createElement(r.Link,{to:e.url,onMouseEnter:()=>{A(e.title)},onMouseLeave:()=>{A(!1)},style:{...u,...c===e.title?d:null}},e.title))))):null)))):null))))))}},7906:function(e,t,a){var n=a(7294),r=a(4854);t.Z=e=>{let{tags:t}=e;const{0:a,1:l}=(0,n.useState)(!1),o={color:"#35435d",fontWeight:600},i={backgroundColor:"#35435d",color:"#ffffff"};return n.createElement("p",null,"Tags:"," ",t.map(((e,s)=>n.createElement(n.Fragment,null,n.createElement(r.Link,{key:e,to:"/tags/"+e.replace(/ /g,"-")+"/",style:{...o,...a===e?i:null},onMouseEnter:()=>{l(e)},onMouseLeave:()=>{l(!1)}},e),s===t.length-1?n.createElement(n.Fragment,null):n.createElement(n.Fragment,null,","," ")))))}},3023:function(e,t,a){var n=a(7294);t.Z=e=>{let{videoSrcURL:t,videoTitle:a,height:r,width:l,...o}=e;return n.createElement("div",{className:"video",style:{textAlign:"center",padding:"10px 0"}},n.createElement("iframe",{src:t,title:a,id:t,allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",webkitallowfullscreen:"true",mozallowfullscreen:"true",allowFullScreen:!0,width:l||"600",height:r||"400",sandbox:"allow-top-navigation allow-same-origin allow-scripts allow-presentation"}))}},7268:function(e,t,a){a.d(t,{$z:function(){return u},I7:function(){return o},KM:function(){return A},Kb:function(){return i},Q1:function(){return d},XG:function(){return r},Y2:function(){return n},kQ:function(){return s},rP:function(){return c},sx:function(){return l},v_:function(){return m}});var n="index-module--article--45d42",r="index-module--breadcrumbLink--6e770",l="index-module--breadcrumbLinkHighlight--f6fd2",o="index-module--breadcrumbLink-separator--cbc54",i="index-module--breadcrumbs--411be",s="index-module--content--136c6",c="index-module--hero--ef469",A="index-module--highlightAnchor--811e2",m="index-module--post--e88a8",u="index-module--postList--15965",d="index-module--thumbnail--3cc31"},1151:function(e,t,a){a.d(t,{ah:function(){return l}});var n=a(7294);const r=n.createContext({});function l(e){const t=n.useContext(r);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}}}]);
//# sourceMappingURL=component---src-pages-projects-mdx-frontmatter-slug-js-content-file-path-users-nathanphennel-projects-enphnt-github-io-blog-vst-plugins-index-mdx-52fc4a35349132866f8b.js.map