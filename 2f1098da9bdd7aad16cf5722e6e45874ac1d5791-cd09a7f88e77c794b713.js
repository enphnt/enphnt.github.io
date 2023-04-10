"use strict";(self.webpackChunknathan_phennel_website=self.webpackChunknathan_phennel_website||[]).push([[8869],{287:function(e,n,t){t.d(n,{Z:function(){return o}});var a=t(1151),s=t(7294);function l(e){const n=Object.assign({h1:"h1",a:"a",span:"span",p:"p",h2:"h2",ul:"ul",li:"li"},(0,a.ah)(),e.components);return s.createElement(s.Fragment,null,s.createElement(n.h1,{id:"css-can-animate",style:{position:"relative"}},"CSS can animate?",s.createElement(n.a,{href:"#css-can-animate","aria-label":"css can animate permalink",className:"anchor after"},s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",s.createElement(n.p,null,"Maybe you already are somewhat aware, maybe not but CSS is one of the most powerful tools in a web developer's arsenal. It has the power to transform bland and uninteresting web pages into visually stunning works of art. With just a few lines of code, CSS can be used to create intricate animations, dynamic styling and sophisticated visuals that can truly wow your website visitors. Additionally, using CSS makes it easier to create consistent styles across multiple pages and devices, ensuring a consistent user experience. Alas, CSS can be pretty amazing at producing interesting eye candy."),"\n",s.createElement(n.h1,{id:"hypnotic-example",style:{position:"relative"}},"Hypnotic Example",s.createElement(n.a,{href:"#hypnotic-example","aria-label":"hypnotic example permalink",className:"anchor after"},s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",s.createElement(n.p,null,"I wanted to demonstrate one example here:"),"\n",s.createElement("div",{class:"index-module--css-animation-container--33799"},s.createElement("div",{class:"index-module--css-animation--741f3"})),"\n",s.createElement(n.h2,{id:"how-it-works",style:{position:"relative"}},"How it works",s.createElement(n.a,{href:"#how-it-works","aria-label":"how it works permalink",className:"anchor after"},s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",s.createElement(n.p,null,'"What\'s going on here?", you ask. A few properties are to be noted:'),"\n",s.createElement(n.ul,null,"\n",s.createElement(n.li,null,"use a class on some element that has a fixed height and width","\n",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="css"><pre class="language-css"><code class="language-css">\n    <span class="token selector">.css-animation</span> <span class="token punctuation">{</span>\n      <span class="token property">height</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>\n      <span class="token property">width</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n</code></pre></div>'}}),"\n"),"\n",s.createElement(n.li,null,"define some ",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">@keyframes</code>'}})," to define the 'steps' of the animation","\n",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="css"><pre class="language-css"><code class="language-css">\n  <span class="token atrule"><span class="token rule">@keyframes</span> stretch</span> <span class="token punctuation">{</span>\n    <span class="token selector">0%</span> <span class="token punctuation">{</span>\n      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>.3<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token property">background-color</span><span class="token punctuation">:</span> purple<span class="token punctuation">;</span>\n      <span class="token property">border-radius</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token selector">50%</span> <span class="token punctuation">{</span>\n      <span class="token property">background-color</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token selector">100%</span> <span class="token punctuation">{</span>\n      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1.5<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token property">background-color</span><span class="token punctuation">:</span> aliceblue<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n\n</code></pre></div>'}}),"\n"),"\n",s.createElement(n.li,null,"note how the ",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">@keyframes</code>'}})," have specific colors and border radii that are associated with each frame"),"\n",s.createElement(n.li,null,"now finally, set the duration of the entire animation using ",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">animation-duration</code>'}})," CSS property","\n",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="css"><pre class="language-css"><code class="language-css">\n  <span class="token selector">.css-animation</span> <span class="token punctuation">{</span>\n    <span class="token property">height</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>\n    <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>\n    <span class="token property">background-color</span><span class="token punctuation">:</span> purple<span class="token punctuation">;</span>\n    <span class="token property">animation-name</span><span class="token punctuation">:</span> stretch<span class="token punctuation">;</span>\n    <span class="token property">animation-duration</span><span class="token punctuation">:</span> 1.5s<span class="token punctuation">;</span>\n    <span class="token property">animation-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>\n    <span class="token property">animation-delay</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n    <span class="token property">animation-direction</span><span class="token punctuation">:</span> alternate<span class="token punctuation">;</span>\n    <span class="token property">animation-iteration-count</span><span class="token punctuation">:</span> infinite<span class="token punctuation">;</span>\n    <span class="token property">animation-fill-mode</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n    <span class="token property">animation-play-state</span><span class="token punctuation">:</span> running<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n</code></pre></div>'}}),"\n"),"\n",s.createElement(n.li,null,"set the ",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">animation-iteration-count</code>'}})," to ",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">infinite</code>'}})," to make the mesmerizing effect last forever"),"\n"),"\n",s.createElement(n.h1,{id:"conclusion",style:{position:"relative"}},"Conclusion",s.createElement(n.a,{href:"#conclusion","aria-label":"conclusion permalink",className:"anchor after"},s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",s.createElement(n.p,null,"This is just a basic example, and things can get even weirder. I'll leave it here for now, but CSS can be applied to all sorts of things, such as animating notifications, button clicks (like in Material UI), or even using it when images are lazy-loaded when scrolled into view."),"\n",s.createElement("div",{style:{width:200,overflow:"hidden"}},s.createElement("p",{class:"index-module--slide-in-text--3e565"},s.createElement(n.p,null,"Until next time..."))))}var o=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?s.createElement(n,e,s.createElement(l,e)):l(e)}},789:function(e,n,t){var a=t(7294),s=t(4854),l=t(8032);const o=["lightgray","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgreen","lightpink","lightsalmon","lightseagreen","lightskyblue"];let i=0;n.Z=e=>{let{node:{id:n,frontmatter:{thumbnail:t,slug:r,title:c,date:p,tags:u},excerpt:m},path:d}=e;const g=(0,l.c)(t),h={article:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(9em, 1fr))",gridGap:"1em",maxWidth:"99%",padding:"1em 1em"},tag:{padding:4,margin:"4px",backgroundColor:"#e0e0e0",borderRadius:"4px"},blogFooterTags:{display:"flex",flexWrap:"wrap"},heading:{marginTop:0,fontSize:"1.6em",fontWeight:600,textDecorationLine:"underline",textDecorationStyle:"solid",textDecorationColor:o[1+i++%o.length],textDecorationThickness:1},thumbnailWrapper:{margin:"0.5em 0 0 0",justifySelf:"center"},info:{gridColumnEnd:"span 3"},hr:{color:o[i++%o.length],margin:0}};return a.createElement("div",null,a.createElement("hr",{style:h.hr}),a.createElement("article",{style:h.article,key:n},a.createElement("div",{style:h.thumbnailWrapper},a.createElement(s.Link,{id:"nohighlight","aria-label":r,key:r,to:"/"+d+"/"+r},a.createElement(l.G,{image:g,alt:"Thumbnail for "+c}))),a.createElement("div",{style:h.info},a.createElement(s.Link,{"aria-label":r,key:r,to:"/"+d+"/"+r,style:h.heading},c),a.createElement("h5",null,p),a.createElement("p",null,m),a.createElement("div",{style:h.blogFooterTags},u.map((e=>a.createElement(s.Link,{key:e,to:"/tags/"+e.replace(/ /g,"-")+"/",style:h.tag},e)))))))}},5067:function(e,n,t){var a=t(4854),s=t(7294);const l={breadcrumbs:{display:"flex",width:"100%",alignItems:"start",fontFamily:"quicksand",margin:4},breadcrumbLink:{fontSize:"1em",paddingRight:2,whiteSpace:"nowrap"},breadcrumbLinkHighlight:{paddingRight:2,fontWeight:600},breadcrumbLinkSeparator:{fontSize:".75em",fontWeight:600,margin:3,paddingBottom:4,color:"rgb(46, 107, 77)"}};n.Z=e=>{let{title:n,path:t}=e;return s.createElement("div",{style:l.breadcrumbs},s.createElement(a.Link,{"aria-label":"Home",style:l.breadcrumbLink,to:"/"},"< ","Home"),s.createElement("div",{style:l.breadcrumbLinkSeparator},"/"),s.createElement(a.Link,{"aria-label":t,style:l.breadcrumbLink,to:"/"+t+"/"},t.charAt(0).toUpperCase()+t.slice(1)),s.createElement("div",{style:l.breadcrumbLinkSeparator},"/"),s.createElement(a.Link,{"aria-label":n,style:l.breadcrumbLinkHighlight,to:"./"},n))}},5049:function(e,n,t){var a=t(7294),s=t(4854),l=t(789);n.Z=e=>{let{data:n,to:t}=e;const{0:o,1:i}=(0,a.useState)("");(0,a.useEffect)((()=>{const e=window.location.href.match(/([^/]+)\/?$/);i(""),i(e[e.length-1])}),[]);const r={blogFooter:{margin:16,padding:16,display:"flex",flexDirection:"column",alignItems:"start",boxShadow:"0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)",borderRadius:10},blogFooterLink:{textDecoration:"none",padding:4},blogFooterImage:{height:"90%",paddingTop:10,marginRight:20},blogFooterImageWrap:{justifySelf:"center",height:200},blogFooterInfo:{marginLeft:16},blogFooterGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:16},blogFooterTags:{display:"flex",flexWrap:"wrap"},blogFooterTag:{margin:4,padding:4,backgroundColor:"#e0e0e0",borderRadius:4}},{nodes:c}=n.allMdx,p=c.filter((e=>e.frontmatter.slug!==o)),u=p[Math.floor((new Date).getMinutes()/10)%p.length]||c[0];return a.createElement("div",{style:r.blogFooter},a.createElement("h3",null,a.createElement(s.Link,{to:t,style:r.blogFooterLink},"Check out other ","/blog/"===t?"articles":"projects",":")),a.createElement(l.Z,{node:u,path:t.replace(/\//g,"")}))}},9357:function(e,n,t){var a=t(7294),s=t(4854);n.Z=e=>{let{title:n}=e;const t=(0,s.useStaticQuery)("2731891648");return a.createElement(a.Fragment,null,a.createElement("html",{lang:"en"}),a.createElement("meta",{name:"description",content:t.site.siteMetadata.description}),a.createElement("meta",{name:"image",content:t.site.siteMetadata.image}),a.createElement("title",null,n.replace("/","∕")," | ",t.site.siteMetadata.title))}},5291:function(e,n,t){var a=t(7294),s=t(4854),l=t(7814),o=t(9417);n.Z=e=>{let{tocs:n}=e;const{items:t}=n,{0:i,1:r}=(0,a.useState)(!1),{0:c,1:p}=(0,a.useState)(!1),u={padding:"0 1.6rem"},m={color:"#35435d",padding:3},d={backgroundColor:"rgb(46, 107, 77)",color:"#ffffff",fontWeight:400},g={backgroundColor:"#35435d",color:"#ffffff",fontWeight:400};return a.createElement(a.Fragment,null,a.createElement("button",{style:{fontSize:"1.1em",fontWeight:300,border:"none",borderLeft:"solid 5px lightgrey",borderRadius:"0 23px 23px 0",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0 1.5rem 0 1rem",margin:0,boxShadow:"5px 5px 95px rgba(183, 183, 183, 0.335) inset"},onClick:()=>{r(!i)}},"Table of Contents:",a.createElement(l.G,{style:{width:32,height:32},icon:i?o.mTx:o.ptq})),i&&a.createElement("div",{style:{margin:0,lineHeight:"1.4em"}},a.createElement("ol",{style:{padding:"4px 3rem 16px",borderLeft:"solid 5px lightgrey"}},t.map((e=>a.createElement("li",{key:e.title},a.createElement(s.Link,{key:e.title,style:{...m,...c===e.title?d:null},to:e.url,onMouseEnter:()=>{p(e.title)},onMouseLeave:()=>{p(!1)}},e.title),e.items?a.createElement("ul",{style:u},e.items.map((e=>a.createElement("li",{key:e.url},a.createElement(s.Link,{key:e.url,to:e.url,onMouseEnter:()=>{p(e.title)},onMouseLeave:()=>{p(!1)},style:{...m,...c===e.title?g:null}},e.title),e.items?a.createElement("ul",{style:u},e.items.map((e=>a.createElement("li",{key:e.url},a.createElement(s.Link,{key:e.url,to:e.url,onMouseEnter:()=>{p(e.title)},onMouseLeave:()=>{p(!1)},style:{...m,...c===e.title?d:null}},e.title))))):null)))):null))))))}},3306:function(e,n,t){var a=t(7294),s=t(4854);n.Z=e=>{let{tags:n}=e;const{0:t,1:l}=(0,a.useState)(!1),o={color:"#35435d",fontWeight:600},i={backgroundColor:"#35435d",color:"#ffffff"};return a.createElement("p",null,"Tags:"," ",n.map(((e,r)=>a.createElement("span",{key:e},a.createElement(s.Link,{key:e,to:"/tags/"+e.replace(/ /g,"-")+"/",style:{...o,...t===e?i:null},onMouseEnter:()=>{l(e)},onMouseLeave:()=>{l(!1)}},e),r===n.length-1?a.createElement(a.Fragment,null):a.createElement(a.Fragment,null,","," ")))))}},1151:function(e,n,t){t.d(n,{ah:function(){return l}});var a=t(7294);const s=a.createContext({});function l(e){const n=a.useContext(s);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}}}]);
//# sourceMappingURL=2f1098da9bdd7aad16cf5722e6e45874ac1d5791-cd09a7f88e77c794b713.js.map