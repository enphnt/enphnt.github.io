"use strict";(self.webpackChunknathan_phennel_website=self.webpackChunknathan_phennel_website||[]).push([[9154],{7708:function(e,t,a){var n=a(1151),l=a(7294),r=a(5292);function i(e){const t=Object.assign({h1:"h1",a:"a",span:"span",p:"p",h2:"h2",h3:"h3"},(0,n.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.h1,{id:"can-this-be-done",style:{position:"relative"}},"Can this be done?!",l.createElement(t.a,{href:"#can-this-be-done","aria-label":"can this be done permalink",className:"anchor after"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",l.createElement(t.p,null,"Short answer: Yes, you can!"),"\n",l.createElement(t.h1,{id:"how-to-setup",style:{position:"relative"}},"How to setup",l.createElement(t.a,{href:"#how-to-setup","aria-label":"how to setup permalink",className:"anchor after"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",l.createElement(t.p,null,"There are some additional extensions that you must install and you must be using java version 11 or higher."),"\n",l.createElement(t.h2,{id:"java-extension-pack",style:{position:"relative"}},"Java Extension Pack",l.createElement(t.a,{href:"#java-extension-pack","aria-label":"java extension pack permalink",className:"anchor after"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",l.createElement(t.p,null,"Extensions required to use VSCode for Java projects are actually all bundled in an extension pack: ",l.createElement(t.a,{href:"https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack"},"Java Extension Pack"),"."),"\n",l.createElement(t.p,null,"Basically, install the extension and then open up a Java project. You're now able to operate like you would in IntelliJ or eclipse but without all your fans running at full blast (at least that's been my experience). Also, the setup is painfully simple compared to other IDEs I've attempted to setup in the past (Not to mention this is all free)."),"\n",l.createElement("div",{className:r.JP},l.createElement(t.p,null,l.createElement("strong",null,"Note:")," I kept hitting an annoying error:"),l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text">\njava import ... cannot be resolved\n\n</code></pre></div>'}}),l.createElement(t.p,null,"but I performed ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">java: clean</code>'}})," from the command pallette and everything was back in action again.")),"\n",l.createElement(t.h3,{id:"gradle",style:{position:"relative"}},"Gradle",l.createElement(t.a,{href:"#gradle","aria-label":"gradle permalink",className:"anchor after"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",l.createElement(t.p,null,"I work with gradle so that requires another extension: ",l.createElement(t.a,{href:"https://marketplace.visualstudio.com/items?itemName=richardwillis.vscode-gradle"},"Gradle Tasks"),". This extension will let you run all your gradle defined tasks"),"\n",l.createElement(t.h2,{id:"conclusion",style:{position:"relative"}},"Conclusion",l.createElement(t.a,{href:"#conclusion","aria-label":"conclusion permalink",className:"anchor after"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",l.createElement(t.p,null,"This is super straightforward. Note to self, try using vscode for java going forward."))}t.Z=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?l.createElement(t,e,l.createElement(i,e)):i(e)}},5912:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var n=a(7708),l=a(7294),r=a(8032),i=a(6050),o=a(9357),c=a(3306),s=a(5291),m=a(6077),d=a(5067);const h="40vh",g=e=>{let{data:t,children:a}=e;const n=(0,r.c)(t.mdx.frontmatter.hero_image);return l.createElement(i.Z,null,l.createElement("div",{style:{paddingTop:40}},l.createElement(d.Z,{title:t.mdx.frontmatter.title,path:"blog"}),n&&l.createElement(l.Fragment,null,l.createElement("div",{style:{position:"relative",maxHeight:h}},l.createElement(r.G,{image:n,alt:t.mdx.frontmatter.hero_image_alt,style:{maxHeight:h,borderRadius:5,boxSizing:"border-box"}}),l.createElement("span",{style:{position:"absolute",top:"4%",right:"4%",color:"white",fontSize:"3vh",textAlign:"right",fontWeight:600,textShadow:"2px 2px 6px black",transformOrigin:"bottom",maxWidth:"80%",whiteSpace:"pre-wrap",letterSpacing:".2rem"}},t.mdx.frontmatter.hero_image_alt)),l.createElement("p",{style:{margin:"2px 0",fontSize:12}},"Photo Credit:"," ",l.createElement("a",{"aria-label":t.mdx.frontmatter.hero_image_credit_link,href:t.mdx.frontmatter.hero_image_credit_link},t.mdx.frontmatter.hero_image_credit_text))),l.createElement("h1",null,t.mdx.frontmatter.title),l.createElement(c.Z,{tags:t.mdx.frontmatter.tags}),l.createElement("h5",null,t.mdx.frontmatter.date),l.createElement("br"),l.createElement(s.Z,{tocs:t.mdx.tableOfContents}),l.createElement("div",null,a),l.createElement("br"),l.createElement(m.Z)),l.createElement(o.Z,{title:""+t.mdx.frontmatter.title}))};function u(e){return l.createElement(g,e,l.createElement(n.Z,e))}},789:function(e,t,a){var n=a(7294),l=a(4854),r=a(8032);const i=["lightgray","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgreen","lightpink","lightsalmon","lightseagreen","lightskyblue"];let o=0;t.Z=e=>{let{node:{id:t,frontmatter:{thumbnail:a,slug:c,title:s,date:m,tags:d},excerpt:h},path:g}=e;const u=(0,r.c)(a),p={article:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(9em, 1fr))",gridGap:"1em",maxWidth:"99%",padding:"1em 1em"},tag:{padding:4,margin:"4px",backgroundColor:"#e0e0e0",borderRadius:"4px"},blogFooterTags:{display:"flex",flexWrap:"wrap"},heading:{marginTop:0,fontSize:"1.6em",fontWeight:600,textDecorationLine:"underline",textDecorationStyle:"solid",textDecorationColor:i[1+o++%i.length],textDecorationThickness:1},thumbnailWrapper:{margin:"0.5em 0 0 0",justifySelf:"center"},info:{gridColumnEnd:"span 3"},hr:{color:i[o++%i.length],margin:0}};return n.createElement("div",null,n.createElement("hr",{style:p.hr}),n.createElement("article",{style:p.article,key:t},n.createElement("div",{style:p.thumbnailWrapper},n.createElement(l.Link,{id:"nohighlight","aria-label":c,key:c,to:"/"+g+"/"+c},n.createElement(r.G,{image:u,alt:"Thumbnail for "+s}))),n.createElement("div",{style:p.info},n.createElement(l.Link,{"aria-label":c,key:c,to:"/"+g+"/"+c,style:p.heading},s),n.createElement("h5",null,m),n.createElement("p",null,h),n.createElement("div",{style:p.blogFooterTags},d.map((e=>n.createElement(l.Link,{key:e,to:"/tags/"+e.replace(/ /g,"-")+"/",style:p.tag},e)))))))}},5067:function(e,t,a){var n=a(4854),l=a(7294);const r={breadcrumbs:{display:"flex",width:"100%",alignItems:"start",fontFamily:"quicksand",margin:4},breadcrumbLink:{fontSize:"1em",paddingRight:2,whiteSpace:"nowrap"},breadcrumbLinkHighlight:{paddingRight:2,fontWeight:600},breadcrumbLinkSeparator:{fontSize:".75em",fontWeight:600,margin:3,paddingBottom:4,color:"rgb(46, 107, 77)"}};t.Z=e=>{let{title:t,path:a}=e;return l.createElement("div",{style:r.breadcrumbs},l.createElement(n.Link,{"aria-label":"Home",style:r.breadcrumbLink,to:"/"},"< ","Home"),l.createElement("div",{style:r.breadcrumbLinkSeparator},"/"),l.createElement(n.Link,{"aria-label":a,style:r.breadcrumbLink,to:"/"+a+"/"},a.charAt(0).toUpperCase()+a.slice(1)),l.createElement("div",{style:r.breadcrumbLinkSeparator},"/"),l.createElement(n.Link,{"aria-label":t,style:r.breadcrumbLinkHighlight,to:"./"},t))}},6077:function(e,t,a){var n=a(4854),l=a(7294),r=a(5049);t.Z=()=>{const e=(0,n.useStaticQuery)("448650272");return l.createElement(r.Z,{data:e,to:"/blog/"})}},5049:function(e,t,a){var n=a(7294),l=a(4854),r=a(789);t.Z=e=>{let{data:t,to:a}=e;const{0:i,1:o}=(0,n.useState)("");(0,n.useEffect)((()=>{const e=window.location.href.match(/([^/]+)\/?$/);o(""),o(e[e.length-1])}),[]);const c={blogFooter:{margin:"16px",padding:"16px",display:"flex",flexDirection:"column",alignItems:"start",boxShadow:"0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)",borderRadius:"10px"},blogFooterLink:{textDecoration:"none",padding:4},blogFooterImage:{height:"90%",paddingTop:10,marginRight:20},blogFooterImageWrap:{justifySelf:"center",height:"200px"},blogFooterInfo:{marginLeft:"16px"},blogFooterGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"16px"},blogFooterTags:{display:"flex",flexWrap:"wrap"},blogFooterTag:{margin:"4px",padding:"4px",backgroundColor:"#e0e0e0",borderRadius:"4px"}},{nodes:s}=t.allMdx,m=s.filter((e=>e.frontmatter.slug!==i)),d=m[Math.floor((new Date).getMinutes()/10)%m.length]||s[0];return n.createElement("div",{style:c.blogFooter},n.createElement("h3",null,n.createElement(l.Link,{to:a,style:c.blogFooterLink},"Check out other ","/blog/"===a?"articles":"projects",":")),n.createElement(r.Z,{node:d,path:a.replace(/\//g,"")}))}},9357:function(e,t,a){var n=a(7294),l=a(4854);t.Z=e=>{let{title:t}=e;const a=(0,l.useStaticQuery)("2731891648");return n.createElement(n.Fragment,null,n.createElement("html",{lang:"en"}),n.createElement("meta",{name:"description",content:a.site.siteMetadata.description}),n.createElement("meta",{name:"image",content:a.site.siteMetadata.image}),n.createElement("title",null,t," | ",a.site.siteMetadata.title))}},5291:function(e,t,a){var n=a(7294),l=a(4854),r=a(7814),i=a(9417);t.Z=e=>{let{tocs:t}=e;const{items:a}=t,{0:o,1:c}=(0,n.useState)(!1),{0:s,1:m}=(0,n.useState)(!1),d={padding:"0 1.6rem"},h={color:"#35435d",padding:3},g={backgroundColor:"rgb(46, 107, 77)",color:"#ffffff",fontWeight:400},u={backgroundColor:"#35435d",color:"#ffffff",fontWeight:400};return n.createElement(n.Fragment,null,n.createElement("button",{style:{fontSize:"1.1em",fontWeight:300,border:"none",borderLeft:"solid 5px lightgrey",borderRadius:"0 23px 23px 0",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0 1.5rem 0 1rem",margin:0,boxShadow:"5px 5px 95px rgba(183, 183, 183, 0.335) inset"},onClick:()=>{c(!o)}},"Table of Contents:",n.createElement(r.G,{style:{width:32,height:32},icon:o?i.mTx:i.ptq})),o&&n.createElement("div",{style:{margin:0,lineHeight:"1.4em"}},n.createElement("ol",{style:{padding:"4px 3rem 16px",borderLeft:"solid 5px lightgrey"}},a.map((e=>n.createElement("li",{key:e.title},n.createElement(l.Link,{key:e.title,style:{...h,...s===e.title?g:null},to:e.url,onMouseEnter:()=>{m(e.title)},onMouseLeave:()=>{m(!1)}},e.title),e.items?n.createElement("ul",{style:d},e.items.map((e=>n.createElement("li",{key:e.url},n.createElement(l.Link,{key:e.url,to:e.url,onMouseEnter:()=>{m(e.title)},onMouseLeave:()=>{m(!1)},style:{...h,...s===e.title?u:null}},e.title),e.items?n.createElement("ul",{style:d},e.items.map((e=>n.createElement("li",{key:e.url},n.createElement(l.Link,{key:e.url,to:e.url,onMouseEnter:()=>{m(e.title)},onMouseLeave:()=>{m(!1)},style:{...h,...s===e.title?g:null}},e.title))))):null)))):null))))))}},3306:function(e,t,a){var n=a(7294),l=a(4854);t.Z=e=>{let{tags:t}=e;const{0:a,1:r}=(0,n.useState)(!1),i={color:"#35435d",fontWeight:600},o={backgroundColor:"#35435d",color:"#ffffff"};return n.createElement("p",null,"Tags:"," ",t.map(((e,c)=>n.createElement("span",{key:e},n.createElement(l.Link,{key:e,to:"/tags/"+e.replace(/ /g,"-")+"/",style:{...i,...a===e?o:null},onMouseEnter:()=>{r(e)},onMouseLeave:()=>{r(!1)}},e),c===t.length-1?n.createElement(n.Fragment,null):n.createElement(n.Fragment,null,","," ")))))}},1151:function(e,t,a){a.d(t,{ah:function(){return r}});var n=a(7294);const l=n.createContext({});function r(e){const t=n.useContext(l);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}}}]);
//# sourceMappingURL=component---src-pages-blog-mdx-frontmatter-slug-js-content-file-path-users-nathanphennel-projects-enphnt-github-io-blog-vscode-java-index-mdx-bcf42ab8c83230079875.js.map