"use strict";(self.webpackChunknathan_phennel_website=self.webpackChunknathan_phennel_website||[]).push([[612],{287:function(n,e,a){a.d(e,{Z:function(){return c}});var t=a(1151),s=a(7294);function o(n){const e=Object.assign({p:"p",ul:"ul",li:"li",span:"span"},(0,t.ah)(),n.components);return s.createElement(s.Fragment,null,s.createElement(e.p,null,"Maybe you already are somewhat aware, maybe not. Alas, CSS can be pretty amazing at producing interesting eye candy."),"\n",s.createElement("br"),"\n",s.createElement(e.p,null,"I wanted to demonstrate one example here:"),"\n",s.createElement("div",{class:"index-module--css-animation-container--33799"},s.createElement("div",{class:"index-module--css-animation--741f3"})),"\n",s.createElement(e.p,null,'"What\'s going on here?", you ask. A few properties are to be noted:'),"\n",s.createElement(e.ul,null,"\n",s.createElement(e.li,null,"use a class on some element which has a fixed height and width","\n",s.createElement(e.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="css"><pre class="language-css"><code class="language-css">\n    <span class="token selector">.css-animation</span> <span class="token punctuation">{</span>\n      <span class="token property">height</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>\n      <span class="token property">width</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n</code></pre></div>'}}),"\n"),"\n",s.createElement(e.li,null,"define some ",s.createElement(e.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">@keyframes</code>'}})," to define the 'steps' of the animation","\n",s.createElement(e.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="css"><pre class="language-css"><code class="language-css">\n  <span class="token atrule"><span class="token rule">@keyframes</span> stretch</span> <span class="token punctuation">{</span>\n    <span class="token selector">0%</span> <span class="token punctuation">{</span>\n      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>.3<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token property">background-color</span><span class="token punctuation">:</span> purple<span class="token punctuation">;</span>\n      <span class="token property">border-radius</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token selector">50%</span> <span class="token punctuation">{</span>\n      <span class="token property">background-color</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token selector">100%</span> <span class="token punctuation">{</span>\n      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1.5<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token property">background-color</span><span class="token punctuation">:</span> aliceblue<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n\n</code></pre></div>'}}),"\n"),"\n",s.createElement(e.li,null,"note how the ",s.createElement(e.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">@keyframes</code>'}})," have specific colors and border radii that are associated with each frame"),"\n",s.createElement(e.li,null,"now finally, set the duration of the entire animation using ",s.createElement(e.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">animation-duration</code>'}})," css property","\n",s.createElement(e.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="css"><pre class="language-css"><code class="language-css">\n  <span class="token selector">.css-animation</span> <span class="token punctuation">{</span>\n    <span class="token property">height</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>\n    <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>\n    <span class="token property">background-color</span><span class="token punctuation">:</span> purple<span class="token punctuation">;</span>\n    <span class="token property">animation-name</span><span class="token punctuation">:</span> stretch<span class="token punctuation">;</span>\n    <span class="token property">animation-duration</span><span class="token punctuation">:</span> 1.5s<span class="token punctuation">;</span>\n    <span class="token property">animation-timing-function</span><span class="token punctuation">:</span> ease-out<span class="token punctuation">;</span>\n    <span class="token property">animation-delay</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n    <span class="token property">animation-direction</span><span class="token punctuation">:</span> alternate<span class="token punctuation">;</span>\n    <span class="token property">animation-iteration-count</span><span class="token punctuation">:</span> infinite<span class="token punctuation">;</span>\n    <span class="token property">animation-fill-mode</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n    <span class="token property">animation-play-state</span><span class="token punctuation">:</span> running<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n</code></pre></div>'}}),"\n"),"\n",s.createElement(e.li,null,"set the ",s.createElement(e.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">animation-iteration-count</code>'}})," to ",s.createElement(e.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">infinite</code>'}})," to make the mesmerizing effect last forever"),"\n"),"\n",s.createElement(e.p,null,"This is just a super basic example and things can get even more weird. I'll leave it here for now but I think this can be applied to all sorts of things like animating notifications, button clicks (like in Material UI), or even use this when images are lazy loaded when scrolled into view."),"\n",s.createElement("div",{style:{width:200,overflow:"hidden"}},s.createElement("p",{class:"index-module--slide-in-text--3e565"},s.createElement(e.p,null,"Until next time..."))))}var c=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,t.ah)(),n.components);return e?s.createElement(e,n,s.createElement(o,n)):o(n)}},4401:function(n,e,a){a.r(e),a.d(e,{Head:function(){return u},default:function(){return m}});var t=a(287),s=a(7294),o=a(4854),c=a(8032),p=a(7144),l=a(9357),r=a(7268);const i=n=>{let{data:e,children:a}=n;const t=(0,c.c)(e.mdx.frontmatter.hero_image);return s.createElement("div",{style:{margin:12}},s.createElement(p.Z,null,s.createElement("div",{className:r.Kb},s.createElement(o.Link,{className:r.XG,to:"/"},"Home"),s.createElement("div",{className:r.I7},">"),s.createElement(o.Link,{className:r.XG,to:"/projects"},"Projects"),s.createElement("div",{className:r.I7},">"),s.createElement(o.Link,{className:r.XG,to:"./"},e.mdx.frontmatter.title)),t?s.createElement(s.Fragment,null,s.createElement(c.G,{image:t,alt:e.mdx.frontmatter.hero_image_alt}),s.createElement("p",null,"Photo Credit:"," ",s.createElement("a",{href:e.mdx.frontmatter.hero_image_credit_link},e.mdx.frontmatter.hero_image_credit_text))):null,s.createElement("h1",null,e.mdx.frontmatter.title),s.createElement("p",{style:{fontWeight:100,marginBottom:30}},e.mdx.frontmatter.date),s.createElement("div",{className:r.kQ},a),s.createElement("br"),s.createElement(o.Link,{to:"/projects"},"Go back to the projects homepage")))},u=()=>s.createElement(l.Z,{title:"Super Cool Projects"});function m(n){return s.createElement(i,n,s.createElement(t.Z,n))}},7268:function(n,e,a){a.d(e,{$z:function(){return i},I7:function(){return o},KM:function(){return l},Kb:function(){return c},Q1:function(){return u},XG:function(){return s},Y2:function(){return t},kQ:function(){return p},v_:function(){return r}});var t="index-module--article--45d42",s="index-module--breadcrumbLink--6e770",o="index-module--breadcrumbLink-separator--cbc54",c="index-module--breadcrumbs--411be",p="index-module--content--136c6",l="index-module--highlight-anchor--28dd6",r="index-module--post--e88a8",i="index-module--postList--15965",u="index-module--thumbnail--3cc31"},1151:function(n,e,a){a.d(e,{ah:function(){return o}});var t=a(7294);const s=t.createContext({});function o(n){const e=t.useContext(s);return t.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}}}]);
//# sourceMappingURL=component---src-pages-projects-mdx-frontmatter-slug-js-content-file-path-users-nathanphennel-projects-enphnt-github-io-blog-css-animations-index-mdx-dcc6164049528176cd6d.js.map