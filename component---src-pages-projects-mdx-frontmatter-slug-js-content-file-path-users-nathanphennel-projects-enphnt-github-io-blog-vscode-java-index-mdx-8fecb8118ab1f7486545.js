"use strict";(self.webpackChunknathan_phennel_website=self.webpackChunknathan_phennel_website||[]).push([[5957],{7708:function(e,t,n){var a=n(1151),l=n(7294),r=n(5292);function o(e){const t=Object.assign({h1:"h1",a:"a",span:"span",p:"p",h2:"h2",h3:"h3"},(0,a.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.h1,{id:"can-this-be-done",style:{position:"relative"}},"Can this be done?!",l.createElement(t.a,{href:"#can-this-be-done","aria-label":"can this be done permalink",className:"anchor after"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",l.createElement(t.p,null,"Short answer: Yes, you can!"),"\n",l.createElement(t.h1,{id:"how-to-setup",style:{position:"relative"}},"How to setup",l.createElement(t.a,{href:"#how-to-setup","aria-label":"how to setup permalink",className:"anchor after"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",l.createElement(t.p,null,"There are some additional extensions that you must install and you must be using java version 11 or higher."),"\n",l.createElement(t.h2,{id:"java-extension-pack",style:{position:"relative"}},"Java Extension Pack",l.createElement(t.a,{href:"#java-extension-pack","aria-label":"java extension pack permalink",className:"anchor after"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",l.createElement(t.p,null,"Extensions required to use VSCode for Java projects are actually all bundled in an extension pack: ",l.createElement(t.a,{href:"https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack"},"Java Extension Pack"),"."),"\n",l.createElement(t.p,null,"Basically, install the extension and then open up a Java project. You're now able to operate like you would in IntelliJ or eclipse but without all your fans running at full blast (at least that's been my experience). Also, the setup is painfully simple compared to other IDEs I've attempted to setup in the past (Not to mention this is all free)."),"\n",l.createElement("div",{className:r.JP},l.createElement(t.p,null,l.createElement("strong",null,"Note:")," I kept hitting an annoying error:"),l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text">\njava import ... cannot be resolved\n\n</code></pre></div>'}}),l.createElement(t.p,null,"but I performed ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">java: clean</code>'}})," from the command pallette and everything was back in action again.")),"\n",l.createElement(t.h3,{id:"gradle",style:{position:"relative"}},"Gradle",l.createElement(t.a,{href:"#gradle","aria-label":"gradle permalink",className:"anchor after"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",l.createElement(t.p,null,"I work with gradle so that requires another extension: ",l.createElement(t.a,{href:"https://marketplace.visualstudio.com/items?itemName=richardwillis.vscode-gradle"},"Gradle Tasks"),". This extension will let you run all your gradle defined tasks"),"\n",l.createElement(t.h2,{id:"conclusion",style:{position:"relative"}},"Conclusion",l.createElement(t.a,{href:"#conclusion","aria-label":"conclusion permalink",className:"anchor after"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",l.createElement(t.p,null,"This is super straightforward. Note to self, try using vscode for java going forward."))}t.Z=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?l.createElement(t,e,l.createElement(o,e)):o(e)}},8757:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var a=n(7708),l=n(7294),r=n(4854),o=n(8032),i=n(6050),c=n(9357),s=n(7268),m=n(7906),u=n(3846);const d=e=>{let{data:t,children:n}=e;const a=(0,o.c)(t.mdx.frontmatter.hero_image);return l.createElement("div",{style:{margin:12,paddingTop:40}},l.createElement(i.Z,null,l.createElement("div",{className:s.Kb},l.createElement(r.Link,{"aria-label":"Home",className:s.XG,to:"/"},"Home"),l.createElement("div",{className:s.I7},"»"),l.createElement(r.Link,{"aria-label":"Projects",className:s.XG,to:"/projects/"},"Projects"),l.createElement("div",{className:s.I7},"»"),l.createElement(r.Link,{"aria-label":t.mdx.frontmatter.title,className:s.XG,to:"./"},t.mdx.frontmatter.title)),a?l.createElement(l.Fragment,null,l.createElement(o.G,{image:a,alt:t.mdx.frontmatter.hero_image_alt,className:s.rP}),l.createElement("p",null,"Photo Credit:"," ",l.createElement("a",{href:t.mdx.frontmatter.hero_image_credit_link},t.mdx.frontmatter.hero_image_credit_text))):null,l.createElement("h1",null,t.mdx.frontmatter.title),l.createElement(m.Z,{tags:t.mdx.frontmatter.tags}),l.createElement("h5",null,t.mdx.frontmatter.date),l.createElement("br"),l.createElement(u.Z,{tocs:t.mdx.tableOfContents}),l.createElement("br"),l.createElement("div",{className:s.kQ},n),l.createElement("br"),l.createElement(r.Link,{"aria-label":"back to Projects",to:"/projects/"},"Go back to the projects homepage")),l.createElement(c.Z,{title:t.mdx.frontmatter.title+" | Projects"}))};function h(e){return l.createElement(d,e,l.createElement(a.Z,e))}},9357:function(e,t,n){var a=n(7294),l=n(4854);t.Z=e=>{let{title:t}=e;const n=(0,l.useStaticQuery)("2731891648");return a.createElement(a.Fragment,null,a.createElement("html",{lang:"en"}),a.createElement("meta",{name:"description",content:n.site.siteMetadata.description}),a.createElement("meta",{name:"image",content:n.site.siteMetadata.image}),a.createElement("title",null,t," | ",n.site.siteMetadata.title))}},3846:function(e,t,n){var a=n(7294),l=n(4854),r=n(7814),o=n(9417);t.Z=e=>{let{tocs:t}=e;const{items:n}=t,{0:i,1:c}=(0,a.useState)(!0),{0:s,1:m}=(0,a.useState)(!1),u={padding:"0 1.6rem"},d={color:"#35435d",padding:3},h={backgroundColor:"#35435d",color:"#ffffff",fontWeight:400},p={backgroundColor:"rgb(46, 107, 77)",color:"#ffffff",fontWeight:400};return a.createElement(a.Fragment,null,a.createElement("button",{style:{fontSize:"1.1em",fontWeight:300,border:"none",borderBottom:"solid 1px lightgrey",borderRight:"solid 1px lightgrey",borderTop:"solid 1px lightgrey",borderLeft:"solid 5px lightgrey",color:"#222",backgroundColor:"transparent",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0 1.5rem",margin:0},onClick:()=>{c(!i)}},"Table of Contents:",a.createElement(r.G,{style:{width:32,height:32},icon:i?o.mTx:o.ptq})),i&&a.createElement("div",{style:{marginTop:0,lineHeight:"1.4em"}},a.createElement("ol",{style:{padding:"16px 3rem",borderBottom:"solid 1px lightgrey",borderRight:"solid 1px lightgrey",borderLeft:"solid 5px lightgrey"}},n.map((e=>a.createElement("li",{key:e.title},a.createElement(l.Link,{style:{...d,...s===e.title?h:null},key:e.title,to:e.url,onMouseEnter:()=>{m(e.title)},onMouseLeave:()=>{m(!1)}},e.title),e.items?a.createElement("ul",{style:u},e.items.map((e=>a.createElement("li",null,a.createElement(l.Link,{to:e.url,onMouseEnter:()=>{m(e.title)},onMouseLeave:()=>{m(!1)},style:{...d,...s===e.title?p:null}},e.title))))):null))))))}},7906:function(e,t,n){var a=n(7294),l=n(4854);t.Z=e=>{let{tags:t}=e;const{0:n,1:r}=(0,a.useState)(!1),o={color:"#35435d",fontWeight:600},i={backgroundColor:"#35435d",color:"#ffffff"};return a.createElement("p",null,"Tags:"," ",t.map(((e,c)=>a.createElement(a.Fragment,null,a.createElement(l.Link,{key:e,to:"/tags/"+e.replace(/ /g,"-")+"/",style:{...o,...n===e?i:null},onMouseEnter:()=>{r(e)},onMouseLeave:()=>{r(!1)}},e),c===t.length-1?a.createElement(a.Fragment,null):a.createElement(a.Fragment,null,","," ")))))}},7268:function(e,t,n){n.d(t,{$z:function(){return d},I7:function(){return o},KM:function(){return m},Kb:function(){return i},Q1:function(){return h},XG:function(){return l},Y2:function(){return a},kQ:function(){return c},rP:function(){return s},sx:function(){return r},v_:function(){return u}});var a="index-module--article--45d42",l="index-module--breadcrumbLink--6e770",r="index-module--breadcrumbLinkHighlight--f6fd2",o="index-module--breadcrumbLink-separator--cbc54",i="index-module--breadcrumbs--411be",c="index-module--content--136c6",s="index-module--hero--ef469",m="index-module--highlightAnchor--811e2",u="index-module--post--e88a8",d="index-module--postList--15965",h="index-module--thumbnail--3cc31"},1151:function(e,t,n){n.d(t,{ah:function(){return r}});var a=n(7294);const l=a.createContext({});function r(e){const t=a.useContext(l);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}}}]);
//# sourceMappingURL=component---src-pages-projects-mdx-frontmatter-slug-js-content-file-path-users-nathanphennel-projects-enphnt-github-io-blog-vscode-java-index-mdx-8fecb8118ab1f7486545.js.map