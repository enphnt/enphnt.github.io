"use strict";(self.webpackChunknathan_phennel_website=self.webpackChunknathan_phennel_website||[]).push([[879],{4484:function(e,t,n){n.r(t),n.d(t,{Head:function(){return b},default:function(){return y}});var a=n(1151),l=n(7294),r=n(3023);function i(e){const t=Object.assign({h1:"h1",a:"a",span:"span",p:"p",ul:"ul",li:"li",h2:"h2"},(0,a.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.h1,{id:"prerequisite-steps",style:{position:"relative"}},"Prerequisite Steps",l.createElement(t.a,{href:"#prerequisite-steps","aria-label":"prerequisite steps permalink",className:"anchor after"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",l.createElement(t.p,null,"Before attempting to use ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">gitlab.yml</code>'}}),", a few things must be in place:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"GitLab instance"),"\n",l.createElement(t.li,null,"GitLab runner registered to the instance"),"\n",l.createElement(t.li,null,"you are a 'maintainer' for the project you want to setup"),"\n"),"\n",l.createElement(t.p,null,"Before you start, I recommend watching this video or at least the beginning:"),"\n",l.createElement(r.Z,{src:"https://www.youtube.com/embed/1iXFbchozdY",title:"Demo: CI/CD with GitLab"}),"\n",l.createElement(t.h1,{id:"how-to-create-the-ci-script",style:{position:"relative"}},"How to create the CI script",l.createElement(t.a,{href:"#how-to-create-the-ci-script","aria-label":"how to create the ci script permalink",className:"anchor after"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",l.createElement(t.p,null,"You'll want to clone a simple project in a tech stack that you're already familiar with. I will use a node.js app to demonstrate."),"\n",l.createElement(t.p,null,"Because we build this app using the ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">npm build</code>'}})," command, which is used by the ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">gitlab.yml</code>'}})," script so that CI will build the same way. Essentially, if Gitlab CI can't build successfully (ie. if it hits any errors) then you will be notified and not be able to proceed with the MR until errors are rectified."),"\n",l.createElement(t.h2,{id:"gitlabyaml",style:{position:"relative"}},"gitlab.yaml",l.createElement(t.a,{href:"#gitlabyaml","aria-label":"gitlabyaml permalink",className:"anchor after"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",l.createElement(t.p,null,"This is a great way to get a simple automatic feedback mechanism you can use to speed up development. The most basic ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">gitlab.yml</code>'}})," file for a node.js project could be super simple:"),"\n",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="yaml"><pre class="language-yaml"><code class="language-yaml">\n    <span class="token key atrule">image</span><span class="token punctuation">:</span> node<span class="token punctuation">:</span>14.2.2\n\n    <span class="token key atrule">dependencies</span><span class="token punctuation">:</span>\n      <span class="token key atrule">script</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> npm install\n\n    <span class="token key atrule">build</span><span class="token punctuation">:</span>\n      script\n      <span class="token punctuation">-</span> npm run build\n\n</code></pre></div>'}}),"\n",l.createElement(t.h2,{id:"caching-node_modules",style:{position:"relative"}},"Caching node_modules",l.createElement(t.a,{href:"#caching-node_modules","aria-label":"caching node_modules permalink",className:"anchor after"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",l.createElement(t.p,null,"Optionally, speed things up by adding the cache paths to ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">node_modules</code>'}})," folder."),"\n",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="yaml"><pre class="language-yaml"><code class="language-yaml">\n    <span class="token key atrule">image</span><span class="token punctuation">:</span> node<span class="token punctuation">:</span>14.2.2\n    <span class="token key atrule">cache</span><span class="token punctuation">:</span>\n      <span class="token key atrule">paths</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> node_modules/\n\n    <span class="token key atrule">dependencies</span><span class="token punctuation">:</span>\n      <span class="token key atrule">script</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> npm install\n\n    <span class="token key atrule">build</span><span class="token punctuation">:</span>\n      script\n      <span class="token punctuation">-</span> npm run build\n\n</code></pre></div>'}}),"\n",l.createElement(t.h1,{id:"how-to-use-the-automated-pipeline",style:{position:"relative"}},"How to use the automated pipeline",l.createElement(t.a,{href:"#how-to-use-the-automated-pipeline","aria-label":"how to use the automated pipeline permalink",className:"anchor after"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",l.createElement(t.p,null,"Great, now you have a pipeline in place. This code is essentially waiting for some trigger. Let's look at how we trigger and use the automation we've created."),"\n",l.createElement(t.h2,{id:"trigger-the-pipeline",style:{position:"relative"}},"Trigger the Pipeline",l.createElement(t.a,{href:"#trigger-the-pipeline","aria-label":"trigger the pipeline permalink",className:"anchor after"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",l.createElement(t.p,null,"All you need to do is add a commit that puts this new file, ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">gitlab.yml</code>'}}),", in the root directory of your project. GitLab will now create a pipeline and tell you the result."),"\n",l.createElement(t.p,null,"Hopefully, this helps you to leverage the power of automation."),"\n",l.createElement(t.h2,{id:"references",style:{position:"relative"}},"References",l.createElement(t.a,{href:"#references","aria-label":"references permalink",className:"anchor after"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,l.createElement(t.a,{href:"https://docs.gitlab.com/ee/ci/"},"GitLab CI/CD")),"\n",l.createElement(t.li,null,l.createElement(t.a,{href:"https://docs.gitlab.com/ee/ci/yaml/README.html"},"GitLab CI/CD Pipeline Configuration Reference")),"\n"),"\n",l.createElement(t.h1,{id:"conclusion",style:{position:"relative"}},"Conclusion",l.createElement(t.a,{href:"#conclusion","aria-label":"conclusion permalink",className:"anchor after"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",l.createElement(t.p,null,"I hope this helps you to leverage the power of automation. Gitlab CI is a great capability to have in your toolbox. It's a great way to get a simple automatic feedback mechanism you can use to speed up development."))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?l.createElement(t,e,l.createElement(i,e)):i(e)},s=n(6050),c=n(9357),m=n(3306),u=n(5291),p=n(5919),d=n(5067),h=n(9838),g=n(1766);const f=e=>{let{data:t,children:n}=e;const{mdx:{frontmatter:{title:a,tags:r,date:i,hero_image:o,hero_image_alt:c,hero_image_credit_link:f,hero_image_credit_text:b},tableOfContents:y}}=t;return l.createElement(s.Z,null,l.createElement("div",{style:{paddingTop:20}},l.createElement(d.Z,{title:a,path:"blog"}),o&&l.createElement(g.Z,{image:o,alt:c,credit:b,link:f}),l.createElement("h1",null,a),l.createElement(m.Z,{tags:r}),l.createElement("h5",null,i),l.createElement("br"),l.createElement(u.Z,{tocs:y}),l.createElement(h.Z),l.createElement("div",null,n),l.createElement("br"),l.createElement(p.Z)))},b=e=>{let{location:t,data:n}=e;return l.createElement(c.Z,{location:t,title:n.mdx.frontmatter.title,hero_image:n.mdx.frontmatter.hero_image,excerpt:n.mdx.excerpt})};function y(e){return l.createElement(f,e,l.createElement(o,e))}},789:function(e,t,n){var a=n(7294),l=n(4854),r=n(8032);const i=["lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgreen","lightpink","lightsalmon","lightseagreen","lightskyblue","lightgray"];t.Z=e=>{let{idx:t,node:{id:n,frontmatter:{thumbnail:o,slug:s,title:c,date:m,tags:u},excerpt:p}}=e;const d=(0,r.c)(o),h=i[t%i.length],{0:g,1:f}=(0,a.useState)();(0,a.useEffect)((()=>{window.addEventListener("resize",(()=>{f("span 1"),window.innerWidth<=768&&f("span 2")}))}),[]);const b={article:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gridGap:"1em",maxWidth:"99%",padding:"1em"},tag:{padding:4,margin:"4px",backgroundColor:"#e0e0e0",color:"inherit",borderRadius:"4px",textDecoration:"none"},blogFooterTags:{display:"flex",flexWrap:"wrap"},heading:{marginTop:0,fontSize:"1.3em",fontWeight:600,textDecorationLine:"underline",textDecorationStyle:"solid",textDecorationColor:h,textDecorationThickness:1,maxWidth:"max-content"},thumbnailWrapper:{margin:"0.35em 0 0 0",justifySelf:"center",gridColumn:g,maxWidth:230},info:{gridColumn:"span 2",justifyContent:"space-around",display:"flex",flexDirection:"column"},hr:{color:h,margin:0}};return a.createElement("div",null,a.createElement("hr",{style:b.hr}),a.createElement("article",{style:b.article},a.createElement("div",{style:b.thumbnailWrapper},a.createElement(l.Link,{id:"nohighlight","aria-label":"Read more about "+c,to:"/blog/"+s+"/"},a.createElement(r.G,{image:d,alt:"Thumbnail for "+c}))),a.createElement("div",{style:b.info},a.createElement(l.Link,{"aria-label":"Read more about "+c,to:"/blog/"+s+"/",style:b.heading},c),a.createElement("h5",null,m),a.createElement("p",null,p),a.createElement("div",{style:b.blogFooterTags},u.map((e=>a.createElement(l.Link,{key:e,to:"/tags/"+e.replace(/ /g,"-")+"/",style:b.tag},e)))))))}},9838:function(e,t,n){var a=n(7294);const l=n(2788).default.button.withConfig({displayName:"back-to-top__BackToTopButton",componentId:"sc-izz6d7-0"})(["position:fixed;bottom:calc(12% - 30px);right:0;z-index:2;font-size:18px;border:none;outline:none;background-color:white !important;color:black;cursor:pointer;padding:0;width:60px;height:60px;border-radius:4px;box-shadow:0px 2px 4px rgba(0,0,0,0.2);white-space:nowrap;"]);t.Z=()=>{const{0:e,1:t}=(0,a.useState)(!1);(0,a.useEffect)((()=>{const e=()=>{window.pageYOffset>1e3?t(!0):t(!1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)}),[]);return e?a.createElement(l,{onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})}},a.createElement("span",null,"↑")):null}},5067:function(e,t,n){var a=n(4854),l=n(7294);const r={breadcrumbs:{display:"flex",alignItems:"baseline",margin:4,fontSize:"max(.85vw, .9em)"},breadcrumbLink:{paddingRight:2,whiteSpace:"nowrap",textDecoration:"none"},breadcrumbLinkHighlight:{fontWeight:600,textDecoration:"none"},breadcrumbLinkSeparator:{fontSize:".75em",fontWeight:600,margin:3,paddingBottom:4,color:"rgb(46, 107, 77)"}};t.Z=e=>{let{title:t,path:n}=e;return l.createElement("div",{style:r.breadcrumbs},l.createElement(a.Link,{"aria-label":"Home",style:r.breadcrumbLink,to:"/"},"< ","Home"),l.createElement("div",{style:r.breadcrumbLinkSeparator},"/"),l.createElement(a.Link,{"aria-label":n,style:r.breadcrumbLink,to:"/"+n+"/"},n.charAt(0).toUpperCase()+n.slice(1)),l.createElement("div",{style:r.breadcrumbLinkSeparator},"/"),l.createElement(a.Link,{"aria-label":t,style:r.breadcrumbLinkHighlight,to:"./"},t))}},1766:function(e,t,n){var a=n(7294),l=n(8032);t.Z=e=>{let{image:t,alt:n,credit:r,link:i}=e;return a.createElement("div",{style:{textAlign:"right"}},a.createElement("div",{style:{position:"relative",maxHeight:"45vh",borderRadius:"5px",overflow:"hidden"}},a.createElement(l.G,{image:(0,l.c)(t),alt:n}),a.createElement("span",{style:{position:"absolute",top:"4%",right:"4%",color:"white",fontSize:"max(3vh, 2.3vw)",textAlign:"right",fontWeight:600,textShadow:"0px 1px 8px black",transformOrigin:"bottom",maxWidth:"80%",whiteSpace:"pre-wrap",wordBreak:"break-word",letterSpacing:".2rem"}},n)),a.createElement("p",{style:{margin:0,marginTop:2,fontSize:12}},"Image:"," ",a.createElement("a",{"aria-label":i,href:i},r)))}},5919:function(e,t,n){var a=n(7294),l=n(4854),r=n(789);const i={blogFooter:{margin:16,padding:16,display:"flex",flexDirection:"column",alignItems:"start",boxShadow:"0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)",borderRadius:10},blogFooterLink:{textDecoration:"none",padding:4},blogFooterImage:{height:"90%",paddingTop:10,marginRight:20},blogFooterImageWrap:{justifySelf:"center",height:200},blogFooterInfo:{marginLeft:16},blogFooterGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:16},blogFooterTags:{display:"flex",flexWrap:"wrap"},blogFooterTag:{margin:4,padding:4,backgroundColor:"#e0e0e0",borderRadius:4}};t.Z=()=>{const{0:e,1:t}=(0,a.useState)(""),{0:n,1:o}=(0,a.useState)(null),s=(0,l.useStaticQuery)("2486570436");(0,a.useEffect)((()=>{const e=window.location.href.split("/").filter((e=>e)).pop();t(e)}),[]),(0,a.useEffect)((()=>{const t=s.allMdx.nodes.find((t=>t.frontmatter.slug===e));o(t)}),[e,s.allMdx.nodes]);const{nodes:c}=s.allMdx;if(n&&n.frontmatter.tags){const t=c.filter((t=>t.frontmatter.slug!==e&&t.frontmatter.tags.some((e=>n.frontmatter.tags.includes(e))))),o=t[Math.floor((new Date).getMinutes()/10)%t.length]||c[0],s=n.frontmatter.tags.includes("music")?c.filter((t=>t.frontmatter.slug!==e&&t.frontmatter.slug!==o.frontmatter.slug&&!t.frontmatter.tags.includes("music"))):c.filter((t=>t.frontmatter.slug!==e&&t.frontmatter.slug!==o.frontmatter.slug&&t.frontmatter.tags.includes("music"))),m=s[Math.floor((new Date).getMinutes()/10)%s.length]||c[1];return a.createElement("div",{style:i.blogFooter},a.createElement("h3",null,a.createElement(l.Link,{to:"/blog/",style:i.blogFooterLink},"Check out other articles:")),a.createElement("h5",null,"Similar tags:"),a.createElement(r.Z,{node:o}),a.createElement("h5",null,"Maybe something else: "),a.createElement(r.Z,{node:m}))}return a.createElement("div",{style:i.blogFooter},a.createElement("h3",null,"Loading..."))}},5291:function(e,t,n){var a=n(7294),l=n(4854),r=n(7814),i=n(9417);t.Z=e=>{let{tocs:t}=e;const{items:n}=t||{items:[]},{0:o,1:s}=(0,a.useState)(!1),{0:c,1:m}=(0,a.useState)(!1),u={fontWeight:600},p={padding:"0 1.6rem"},d={color:"#35435d",textDecoration:"none"},h={backgroundColor:"rgb(46, 107, 77)",color:"#ffffff"},g={backgroundColor:"#35435d",color:"#ffffff"};return a.createElement(a.Fragment,null,a.createElement("button",{style:{fontSize:"1.1em",fontWeight:300,border:"none",borderLeft:"solid 5px lightgrey",borderRadius:"0 23px 23px 0",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0 1.5rem 0 1rem",margin:0,boxShadow:"5px 5px 95px rgba(183, 183, 183, 0.335) inset"},onClick:()=>{s(!o)}},"Table of Contents:",a.createElement(r.G,{style:{width:32,height:32},icon:o?i.mTx:i.ptq})),o&&a.createElement("div",{style:{margin:0,lineHeight:"1.75em"}},a.createElement("ol",{style:{padding:"8px 2.5rem 16px",borderLeft:"solid 5px lightgrey"}},null==n?void 0:n.map((e=>a.createElement("li",{key:e.title},a.createElement(l.Link,{key:e.title,style:{...d,...c===e.title?h:null},to:e.url,onMouseEnter:()=>{m(e.title)},onMouseLeave:()=>{m(!1)}},a.createElement("span",{style:u},e.title)),e.items?a.createElement("ul",{style:p},e.items.map((e=>a.createElement("li",{key:e.url},a.createElement(l.Link,{key:e.url,to:e.url,onMouseEnter:()=>{m(e.title)},onMouseLeave:()=>{m(!1)},style:{...d,...c===e.title?g:null}},e.title),e.items?a.createElement("ul",{style:p},e.items.map((e=>a.createElement("li",{key:e.url},a.createElement(l.Link,{key:e.url,to:e.url,onMouseEnter:()=>{m(e.title)},onMouseLeave:()=>{m(!1)},style:{...d,...c===e.title?h:null}},e.title))))):null)))):null))))))}},3306:function(e,t,n){var a=n(7294),l=n(4854);t.Z=e=>{let{tags:t}=e;const{0:n,1:r}=(0,a.useState)(!1),i={color:"#35435d",fontWeight:600,textDecoration:"none"},o={backgroundColor:"#35435d",color:"#ffffff"};return a.createElement("p",null,"Tags:"," ",t.map(((e,s)=>a.createElement("span",{key:e},a.createElement(l.Link,{key:e,to:"/tags/"+e.replace(/ /g,"-")+"/",style:{...i,...n===e?o:null},onMouseEnter:()=>{r(e)},onMouseLeave:()=>{r(!1)}},e),s===t.length-1?a.createElement(a.Fragment,null):a.createElement(a.Fragment,null,","," ")))))}},3023:function(e,t,n){var a=n(7294);t.Z=e=>{let{src:t,title:n,height:l,width:r,...i}=e;return a.createElement("div",{className:"video",style:{textAlign:"center",padding:"10px 0"}},a.createElement("iframe",{style:{borderRadius:8},src:t,title:n,id:t,allow:"accelerometer; encrypted-media; gyroscope; picture-in-picture",webkitallowfullscreen:"true",mozallowfullscreen:"true",allowFullScreen:!0,width:r||"600",height:l||"400",sandbox:"allow-top-navigation allow-same-origin allow-scripts allow-presentation"}))}},1151:function(e,t,n){n.d(t,{ah:function(){return r}});var a=n(7294);const l=a.createContext({});function r(e){const t=a.useContext(l);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}}}]);
//# sourceMappingURL=component---src-pages-blog-mdx-frontmatter-slug-js-content-file-path-users-nathanphennel-projects-code-enphnt-github-io-blog-gitlab-ci-index-mdx-6f4b3bf93d3029c0646c.js.map