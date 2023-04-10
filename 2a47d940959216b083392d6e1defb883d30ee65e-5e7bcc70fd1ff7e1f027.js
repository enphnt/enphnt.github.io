"use strict";(self.webpackChunknathan_phennel_website=self.webpackChunknathan_phennel_website||[]).push([[6083],{2083:function(e,t,a){var n=a(1151),l=a(7294),r=a(3023);function i(e){const t=Object.assign({h1:"h1",a:"a",span:"span",p:"p",ul:"ul",li:"li",h2:"h2"},(0,n.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.h1,{id:"prerequisite-steps",style:{position:"relative"}},"Prerequisite Steps",l.createElement(t.a,{href:"#prerequisite-steps","aria-label":"prerequisite steps permalink",className:"anchor after"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",l.createElement(t.p,null,"Before attempting to use ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">gitlab.yml</code>'}}),", a few things must be in place:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"GitLab instance"),"\n",l.createElement(t.li,null,"GitLab runner registered to the instance"),"\n",l.createElement(t.li,null,"you are a 'maintainer' for the project you want to setup"),"\n"),"\n",l.createElement(t.p,null,"Before you start, I recommend watching this video or at least the beginning:"),"\n",l.createElement(r.Z,{src:"https://www.youtube.com/embed/1iXFbchozdY",title:"Demo: CI/CD with GitLab"}),"\n",l.createElement(t.h1,{id:"how-to-create-the-ci-script",style:{position:"relative"}},"How to create the CI script",l.createElement(t.a,{href:"#how-to-create-the-ci-script","aria-label":"how to create the ci script permalink",className:"anchor after"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",l.createElement(t.p,null,"You'll want to clone a simple project in a tech stack that you're already familiar with. I will use a node.js app to demonstrate."),"\n",l.createElement(t.p,null,"Because we build this app using the ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">npm build</code>'}})," command, which is used by the ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">gitlab.yml</code>'}})," script so that CI will build the same way. Essentially, if Gitlab CI can't build successfully (ie. if it hits any errors) then you will be notified and not be able to proceed with the MR until errors are rectified."),"\n",l.createElement(t.h2,{id:"gitlabyaml",style:{position:"relative"}},"gitlab.yaml",l.createElement(t.a,{href:"#gitlabyaml","aria-label":"gitlabyaml permalink",className:"anchor after"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",l.createElement(t.p,null,"This is a great way to get a simple automatic feedback mechanism you can use to speed up development. The most basic ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">gitlab.yml</code>'}})," file for a node.js project could be super simple:"),"\n",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="yaml"><pre class="language-yaml"><code class="language-yaml">\n    <span class="token key atrule">image</span><span class="token punctuation">:</span> node<span class="token punctuation">:</span>14.2.2\n\n    <span class="token key atrule">dependencies</span><span class="token punctuation">:</span>\n      <span class="token key atrule">script</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> npm install\n\n    <span class="token key atrule">build</span><span class="token punctuation">:</span>\n      script\n      <span class="token punctuation">-</span> npm run build\n</code></pre></div>'}}),"\n",l.createElement(t.h2,{id:"caching-node_modules",style:{position:"relative"}},"Caching node_modules",l.createElement(t.a,{href:"#caching-node_modules","aria-label":"caching node_modules permalink",className:"anchor after"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",l.createElement(t.p,null,"Optionally, speed things up by adding the cache paths to ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">node_modules</code>'}})," folder."),"\n",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="yaml"><pre class="language-yaml"><code class="language-yaml">\n    <span class="token key atrule">image</span><span class="token punctuation">:</span> node<span class="token punctuation">:</span>14.2.2\n    <span class="token key atrule">cache</span><span class="token punctuation">:</span>\n      <span class="token key atrule">paths</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> node_modules/\n\n    <span class="token key atrule">dependencies</span><span class="token punctuation">:</span>\n      <span class="token key atrule">script</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> npm install\n\n    <span class="token key atrule">build</span><span class="token punctuation">:</span>\n      script\n      <span class="token punctuation">-</span> npm run build\n\n      </code></pre></div>'}}),"\n",l.createElement(t.h1,{id:"how-to-use-the-automated-pipeline",style:{position:"relative"}},"How to use the automated pipeline",l.createElement(t.a,{href:"#how-to-use-the-automated-pipeline","aria-label":"how to use the automated pipeline permalink",className:"anchor after"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",l.createElement(t.p,null,"Great, now you have a pipeline in place. This code is essentially waiting for some trigger. Let's look at how we trigger and use the automation we've created."),"\n",l.createElement(t.h2,{id:"trigger-the-pipeline",style:{position:"relative"}},"Trigger the Pipeline",l.createElement(t.a,{href:"#trigger-the-pipeline","aria-label":"trigger the pipeline permalink",className:"anchor after"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",l.createElement(t.p,null,"All you need to do is add a commit that puts this new file, ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">gitlab.yml</code>'}}),", in the root directory of your project. GitLab will now create a pipeline and tell you the result."),"\n",l.createElement(t.p,null,"Hopefully, this helps you to leverage the power of automation."))}t.Z=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?l.createElement(t,e,l.createElement(i,e)):i(e)}},789:function(e,t,a){var n=a(7294),l=a(4854),r=a(8032);const i=["lightgray","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgreen","lightpink","lightsalmon","lightseagreen","lightskyblue"];let o=0;t.Z=e=>{let{node:{id:t,frontmatter:{thumbnail:a,slug:s,title:c,date:p,tags:u},excerpt:m},path:d}=e;const h=(0,r.c)(a),g={article:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(9em, 1fr))",gridGap:"1em",maxWidth:"99%",padding:"1em 1em"},tag:{padding:4,margin:"4px",backgroundColor:"#e0e0e0",borderRadius:"4px"},blogFooterTags:{display:"flex",flexWrap:"wrap"},heading:{marginTop:0,fontSize:"1.6em",fontWeight:600,textDecorationLine:"underline",textDecorationStyle:"solid",textDecorationColor:i[1+o++%i.length],textDecorationThickness:1},thumbnailWrapper:{margin:"0.5em 0 0 0",justifySelf:"center"},info:{gridColumnEnd:"span 3"},hr:{color:i[o++%i.length],margin:0}};return n.createElement("div",null,n.createElement("hr",{style:g.hr}),n.createElement("article",{style:g.article,key:t},n.createElement("div",{style:g.thumbnailWrapper},n.createElement(l.Link,{id:"nohighlight","aria-label":s,key:s,to:"/"+d+"/"+s},n.createElement(r.G,{image:h,alt:"Thumbnail for "+c}))),n.createElement("div",{style:g.info},n.createElement(l.Link,{"aria-label":s,key:s,to:"/"+d+"/"+s,style:g.heading},c),n.createElement("h5",null,p),n.createElement("p",null,m),n.createElement("div",{style:g.blogFooterTags},u.map((e=>n.createElement(l.Link,{key:e,to:"/tags/"+e.replace(/ /g,"-")+"/",style:g.tag},e)))))))}},5067:function(e,t,a){var n=a(4854),l=a(7294);const r={breadcrumbs:{display:"flex",width:"100%",alignItems:"baseline",fontFamily:"quicksand",margin:4},breadcrumbLink:{fontSize:"1em",paddingRight:2,whiteSpace:"nowrap"},breadcrumbLinkHighlight:{paddingRight:2,fontWeight:600},breadcrumbLinkSeparator:{fontSize:".75em",fontWeight:600,margin:3,paddingBottom:4,color:"rgb(46, 107, 77)"}};t.Z=e=>{let{title:t,path:a}=e;return l.createElement("div",{style:r.breadcrumbs},l.createElement(n.Link,{"aria-label":"Home",style:r.breadcrumbLink,to:"/"},"< ","Home"),l.createElement("div",{style:r.breadcrumbLinkSeparator},"/"),l.createElement(n.Link,{"aria-label":a,style:r.breadcrumbLink,to:"/"+a+"/"},a.charAt(0).toUpperCase()+a.slice(1)),l.createElement("div",{style:r.breadcrumbLinkSeparator},"/"),l.createElement(n.Link,{"aria-label":t,style:r.breadcrumbLinkHighlight,to:"./"},t))}},5049:function(e,t,a){var n=a(7294),l=a(4854),r=a(789);t.Z=e=>{let{data:t,to:a}=e;const{0:i,1:o}=(0,n.useState)("");(0,n.useEffect)((()=>{const e=window.location.href.match(/([^/]+)\/?$/);o(""),o(e[e.length-1])}),[]);const s={blogFooter:{margin:16,padding:16,display:"flex",flexDirection:"column",alignItems:"start",boxShadow:"0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)",borderRadius:10},blogFooterLink:{textDecoration:"none",padding:4},blogFooterImage:{height:"90%",paddingTop:10,marginRight:20},blogFooterImageWrap:{justifySelf:"center",height:200},blogFooterInfo:{marginLeft:16},blogFooterGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:16},blogFooterTags:{display:"flex",flexWrap:"wrap"},blogFooterTag:{margin:4,padding:4,backgroundColor:"#e0e0e0",borderRadius:4}},{nodes:c}=t.allMdx,p=c.filter((e=>e.frontmatter.slug!==i)),u=p[Math.floor((new Date).getMinutes()/10)%p.length]||c[0];return n.createElement("div",{style:s.blogFooter},n.createElement("h3",null,n.createElement(l.Link,{to:a,style:s.blogFooterLink},"Check out other ","/blog/"===a?"articles":"projects",":")),n.createElement(r.Z,{node:u,path:a.replace(/\//g,"")}))}},5291:function(e,t,a){var n=a(7294),l=a(4854),r=a(7814),i=a(9417);t.Z=e=>{let{tocs:t}=e;const{items:a}=t,{0:o,1:s}=(0,n.useState)(!1),{0:c,1:p}=(0,n.useState)(!1),u={padding:"0 1.6rem"},m={color:"#35435d",padding:3},d={backgroundColor:"rgb(46, 107, 77)",color:"#ffffff",fontWeight:400},h={backgroundColor:"#35435d",color:"#ffffff",fontWeight:400};return n.createElement(n.Fragment,null,n.createElement("button",{style:{fontSize:"1.1em",fontWeight:300,border:"none",borderLeft:"solid 5px lightgrey",borderRadius:"0 23px 23px 0",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0 1.5rem 0 1rem",margin:0,boxShadow:"5px 5px 95px rgba(183, 183, 183, 0.335) inset"},onClick:()=>{s(!o)}},"Table of Contents:",n.createElement(r.G,{style:{width:32,height:32},icon:o?i.mTx:i.ptq})),o&&n.createElement("div",{style:{margin:0,lineHeight:"1.4em"}},n.createElement("ol",{style:{padding:"4px 3rem 16px",borderLeft:"solid 5px lightgrey"}},a.map((e=>n.createElement("li",{key:e.title},n.createElement(l.Link,{key:e.title,style:{...m,...c===e.title?d:null},to:e.url,onMouseEnter:()=>{p(e.title)},onMouseLeave:()=>{p(!1)}},e.title),e.items?n.createElement("ul",{style:u},e.items.map((e=>n.createElement("li",{key:e.url},n.createElement(l.Link,{key:e.url,to:e.url,onMouseEnter:()=>{p(e.title)},onMouseLeave:()=>{p(!1)},style:{...m,...c===e.title?h:null}},e.title),e.items?n.createElement("ul",{style:u},e.items.map((e=>n.createElement("li",{key:e.url},n.createElement(l.Link,{key:e.url,to:e.url,onMouseEnter:()=>{p(e.title)},onMouseLeave:()=>{p(!1)},style:{...m,...c===e.title?d:null}},e.title))))):null)))):null))))))}},3306:function(e,t,a){var n=a(7294),l=a(4854);t.Z=e=>{let{tags:t}=e;const{0:a,1:r}=(0,n.useState)(!1),i={color:"#35435d",fontWeight:600},o={backgroundColor:"#35435d",color:"#ffffff"};return n.createElement("p",null,"Tags:"," ",t.map(((e,s)=>n.createElement("span",{key:e},n.createElement(l.Link,{key:e,to:"/tags/"+e.replace(/ /g,"-")+"/",style:{...i,...a===e?o:null},onMouseEnter:()=>{r(e)},onMouseLeave:()=>{r(!1)}},e),s===t.length-1?n.createElement(n.Fragment,null):n.createElement(n.Fragment,null,","," ")))))}},3023:function(e,t,a){var n=a(7294);t.Z=e=>{let{src:t,title:a,height:l,width:r,...i}=e;return n.createElement("div",{className:"video",style:{textAlign:"center",padding:"10px 0"}},n.createElement("iframe",{style:{borderRadius:8},src:t,title:a,id:t,allow:"accelerometer; encrypted-media; gyroscope; picture-in-picture",webkitallowfullscreen:"true",mozallowfullscreen:"true",allowFullScreen:!0,width:r||"600",height:l||"400",sandbox:"allow-top-navigation allow-same-origin allow-scripts allow-presentation"}))}},1151:function(e,t,a){a.d(t,{ah:function(){return r}});var n=a(7294);const l=n.createContext({});function r(e){const t=n.useContext(l);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}}}]);
//# sourceMappingURL=2a47d940959216b083392d6e1defb883d30ee65e-5e7bcc70fd1ff7e1f027.js.map