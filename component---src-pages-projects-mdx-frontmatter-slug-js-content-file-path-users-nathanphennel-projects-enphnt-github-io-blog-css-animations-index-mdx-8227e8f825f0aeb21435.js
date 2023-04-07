"use strict";(self.webpackChunknathan_phennel_website=self.webpackChunknathan_phennel_website||[]).push([[9612],{287:function(e,n,t){t.d(n,{Z:function(){return o}});var a=t(1151),s=t(7294);function l(e){const n=Object.assign({h1:"h1",a:"a",span:"span",p:"p",h2:"h2",ul:"ul",li:"li"},(0,a.ah)(),e.components);return s.createElement(s.Fragment,null,s.createElement(n.h1,{id:"css-can-animate",style:{position:"relative"}},"CSS can animate?",s.createElement(n.a,{href:"#css-can-animate","aria-label":"css can animate permalink",className:"anchor after"},s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",s.createElement(n.p,null,"Maybe you already are somewhat aware, maybe not but CSS is one of the most powerful tools in a web developer's arsenal. It has the power to transform bland and uninteresting webpages into visually stunning works of art. With just a few lines of code, CSS can be used to create intricate animations, dynamic styling and sophisticated visuals that can truly wow your website visitors. Additionally, using CSS makes it easier to create consistent style across multiple pages and devices, ensuring a consistent user experience. Alas, CSS can be pretty amazing at producing interesting eye candy."),"\n",s.createElement(n.h1,{id:"hypnotic-example",style:{position:"relative"}},"Hypnotic Example",s.createElement(n.a,{href:"#hypnotic-example","aria-label":"hypnotic example permalink",className:"anchor after"},s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",s.createElement(n.p,null,"I wanted to demonstrate one example here:"),"\n",s.createElement("div",{class:"index-module--css-animation-container--33799"},s.createElement("div",{class:"index-module--css-animation--741f3"})),"\n",s.createElement(n.h2,{id:"how-it-works",style:{position:"relative"}},"How it works",s.createElement(n.a,{href:"#how-it-works","aria-label":"how it works permalink",className:"anchor after"},s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",s.createElement(n.p,null,'"What\'s going on here?", you ask. A few properties are to be noted:'),"\n",s.createElement(n.ul,null,"\n",s.createElement(n.li,null,"use a class on some element which has a fixed height and width","\n",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="css"><pre class="language-css"><code class="language-css">\n    <span class="token selector">.css-animation</span> <span class="token punctuation">{</span>\n      <span class="token property">height</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>\n      <span class="token property">width</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n</code></pre></div>'}}),"\n"),"\n",s.createElement(n.li,null,"define some ",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">@keyframes</code>'}})," to define the 'steps' of the animation","\n",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="css"><pre class="language-css"><code class="language-css">\n  <span class="token atrule"><span class="token rule">@keyframes</span> stretch</span> <span class="token punctuation">{</span>\n    <span class="token selector">0%</span> <span class="token punctuation">{</span>\n      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>.3<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token property">background-color</span><span class="token punctuation">:</span> purple<span class="token punctuation">;</span>\n      <span class="token property">border-radius</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token selector">50%</span> <span class="token punctuation">{</span>\n      <span class="token property">background-color</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token selector">100%</span> <span class="token punctuation">{</span>\n      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1.5<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token property">background-color</span><span class="token punctuation">:</span> aliceblue<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n\n</code></pre></div>'}}),"\n"),"\n",s.createElement(n.li,null,"note how the ",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">@keyframes</code>'}})," have specific colors and border radii that are associated with each frame"),"\n",s.createElement(n.li,null,"now finally, set the duration of the entire animation using ",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">animation-duration</code>'}})," css property","\n",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="css"><pre class="language-css"><code class="language-css">\n  <span class="token selector">.css-animation</span> <span class="token punctuation">{</span>\n    <span class="token property">height</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>\n    <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>\n    <span class="token property">background-color</span><span class="token punctuation">:</span> purple<span class="token punctuation">;</span>\n    <span class="token property">animation-name</span><span class="token punctuation">:</span> stretch<span class="token punctuation">;</span>\n    <span class="token property">animation-duration</span><span class="token punctuation">:</span> 1.5s<span class="token punctuation">;</span>\n    <span class="token property">animation-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>\n    <span class="token property">animation-delay</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n    <span class="token property">animation-direction</span><span class="token punctuation">:</span> alternate<span class="token punctuation">;</span>\n    <span class="token property">animation-iteration-count</span><span class="token punctuation">:</span> infinite<span class="token punctuation">;</span>\n    <span class="token property">animation-fill-mode</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n    <span class="token property">animation-play-state</span><span class="token punctuation">:</span> running<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n</code></pre></div>'}}),"\n"),"\n",s.createElement(n.li,null,"set the ",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">animation-iteration-count</code>'}})," to ",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">infinite</code>'}})," to make the mesmerizing effect last forever"),"\n"),"\n",s.createElement(n.h1,{id:"conclusion",style:{position:"relative"}},"Conclusion",s.createElement(n.a,{href:"#conclusion","aria-label":"conclusion permalink",className:"anchor after"},s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",s.createElement(n.p,null,"This is just a basic example, and things can get even weirder. I'll leave it here for now, but CSS can be applied to all sorts of things, such as animating notifications, button clicks (like in Material UI), or even using it when images are lazy-loaded when scrolled into view."),"\n",s.createElement("div",{style:{width:200,overflow:"hidden"}},s.createElement("p",{class:"index-module--slide-in-text--3e565"},s.createElement(n.p,null,"Until next time..."))))}var o=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?s.createElement(n,e,s.createElement(l,e)):l(e)}},4401:function(e,n,t){t.r(n),t.d(n,{default:function(){return d}});var a=t(287),s=t(7294),l=t(4854),o=t(8032),c=t(6050),r=t(9357),i=t(7268),p=t(7906),u=t(3846);const m=e=>{let{data:n,children:t}=e;const a=(0,o.c)(n.mdx.frontmatter.hero_image);return s.createElement("div",{style:{margin:12,paddingTop:40}},s.createElement(c.Z,null,s.createElement("div",{className:i.Kb},s.createElement(l.Link,{"aria-label":"Home",className:i.XG,to:"/"},"Home"),s.createElement("div",{className:i.I7},"»"),s.createElement(l.Link,{"aria-label":"Projects",className:i.XG,to:"/projects/"},"Projects"),s.createElement("div",{className:i.I7},"»"),s.createElement(l.Link,{"aria-label":n.mdx.frontmatter.title,className:i.XG,to:"./"},n.mdx.frontmatter.title)),a?s.createElement(s.Fragment,null,s.createElement(o.G,{image:a,alt:n.mdx.frontmatter.hero_image_alt,className:i.rP}),s.createElement("p",null,"Photo Credit:"," ",s.createElement("a",{href:n.mdx.frontmatter.hero_image_credit_link},n.mdx.frontmatter.hero_image_credit_text))):null,s.createElement("h1",null,n.mdx.frontmatter.title),s.createElement(p.Z,{tags:n.mdx.frontmatter.tags}),s.createElement("h5",null,n.mdx.frontmatter.date),s.createElement("br"),s.createElement(u.Z,{tocs:n.mdx.tableOfContents}),s.createElement("br"),s.createElement("div",{className:i.kQ},t),s.createElement("br"),s.createElement(l.Link,{"aria-label":"back to Projects",to:"/projects/"},"Go back to the projects homepage")),s.createElement(r.Z,{title:n.mdx.frontmatter.title+" | Projects"}))};function d(e){return s.createElement(m,e,s.createElement(a.Z,e))}},9357:function(e,n,t){var a=t(7294),s=t(4854);n.Z=e=>{let{title:n}=e;const t=(0,s.useStaticQuery)("2731891648");return a.createElement(a.Fragment,null,a.createElement("html",{lang:"en"}),a.createElement("meta",{name:"description",content:t.site.siteMetadata.description}),a.createElement("meta",{name:"image",content:t.site.siteMetadata.image}),a.createElement("title",null,n," | ",t.site.siteMetadata.title))}},3846:function(e,n,t){var a=t(7294),s=t(4854),l=t(7814),o=t(9417);n.Z=e=>{let{tocs:n}=e;const{items:t}=n,{0:c,1:r}=(0,a.useState)(!0),{0:i,1:p}=(0,a.useState)(!1),u={padding:"0 1.6rem"},m={color:"#35435d",padding:3},d={backgroundColor:"rgb(46, 107, 77)",color:"#ffffff",fontWeight:400},h={backgroundColor:"#35435d",color:"#ffffff",fontWeight:400};return a.createElement(a.Fragment,null,a.createElement("button",{style:{fontSize:"1.1em",fontWeight:300,border:"none",borderLeft:"solid 5px lightgrey",borderRadius:"0 23px 23px 0",color:"#222",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0 1.5rem 0 1rem",margin:"0 8px"},onClick:()=>{r(!c)}},"Table of Contents:",a.createElement(l.G,{style:{width:32,height:32},icon:c?o.mTx:o.ptq})),c&&a.createElement("div",{style:{margin:"0 8px",lineHeight:"1.4em"}},a.createElement("ol",{style:{padding:"4px 3rem 16px",borderLeft:"solid 5px lightgrey"}},t.map((e=>a.createElement("li",{key:e.title},a.createElement(s.Link,{style:{...m,...i===e.title?d:null},key:e.title,to:e.url,onMouseEnter:()=>{p(e.title)},onMouseLeave:()=>{p(!1)}},e.title),e.items?a.createElement("ul",{style:u},e.items.map((e=>a.createElement("li",null,a.createElement(s.Link,{to:e.url,onMouseEnter:()=>{p(e.title)},onMouseLeave:()=>{p(!1)},style:{...m,...i===e.title?h:null}},e.title),e.items?a.createElement("ul",{style:u},e.items.map((e=>a.createElement("li",null,a.createElement(s.Link,{to:e.url,onMouseEnter:()=>{p(e.title)},onMouseLeave:()=>{p(!1)},style:{...m,...i===e.title?d:null}},e.title))))):null)))):null))))))}},7906:function(e,n,t){var a=t(7294),s=t(4854);n.Z=e=>{let{tags:n}=e;const{0:t,1:l}=(0,a.useState)(!1),o={color:"#35435d",fontWeight:600},c={backgroundColor:"#35435d",color:"#ffffff"};return a.createElement("p",null,"Tags:"," ",n.map(((e,r)=>a.createElement(a.Fragment,null,a.createElement(s.Link,{key:e,to:"/tags/"+e.replace(/ /g,"-")+"/",style:{...o,...t===e?c:null},onMouseEnter:()=>{l(e)},onMouseLeave:()=>{l(!1)}},e),r===n.length-1?a.createElement(a.Fragment,null):a.createElement(a.Fragment,null,","," ")))))}},7268:function(e,n,t){t.d(n,{$z:function(){return m},I7:function(){return o},KM:function(){return p},Kb:function(){return c},Q1:function(){return d},XG:function(){return s},Y2:function(){return a},kQ:function(){return r},rP:function(){return i},sx:function(){return l},v_:function(){return u}});var a="index-module--article--45d42",s="index-module--breadcrumbLink--6e770",l="index-module--breadcrumbLinkHighlight--f6fd2",o="index-module--breadcrumbLink-separator--cbc54",c="index-module--breadcrumbs--411be",r="index-module--content--136c6",i="index-module--hero--ef469",p="index-module--highlightAnchor--811e2",u="index-module--post--e88a8",m="index-module--postList--15965",d="index-module--thumbnail--3cc31"},1151:function(e,n,t){t.d(n,{ah:function(){return l}});var a=t(7294);const s=a.createContext({});function l(e){const n=a.useContext(s);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}}}]);
//# sourceMappingURL=component---src-pages-projects-mdx-frontmatter-slug-js-content-file-path-users-nathanphennel-projects-enphnt-github-io-blog-css-animations-index-mdx-8227e8f825f0aeb21435.js.map