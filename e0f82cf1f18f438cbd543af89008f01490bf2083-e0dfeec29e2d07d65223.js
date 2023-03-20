"use strict";(self.webpackChunknathan_phennel_website=self.webpackChunknathan_phennel_website||[]).push([[9812],{7592:function(e,n,t){var a=t(1151),s=t(7294);function l(e){const n=Object.assign({p:"p",span:"span",h1:"h1",a:"a",ol:"ol",li:"li",h2:"h2"},(0,a.ah)(),e.components);return s.createElement(s.Fragment,null,s.createElement(n.p,null,"First of all, I'm running such an old version of Gatsby that I can't use any of its newest features. In order to use SEO tools, I need to upgrade to ",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">gatsby@4.19.0</code>'}}),"."),"\n",s.createElement(n.p,null,"My notes from performing the upgrade are included in this post."),"\n",s.createElement(n.h1,{id:"v1-to-v2-upgrade",style:{position:"relative"}},"v1 to v2 upgrade",s.createElement(n.a,{href:"#v1-to-v2-upgrade","aria-label":"v1 to v2 upgrade permalink",className:"anchor after"},s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",s.createElement(n.p,null,"I'll try just setting package.json version to 2.0.0:"),"\n",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="json"><pre class="language-json"><code class="language-json">  \n  <span class="token property">"dependencies"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">"gatsby"</span><span class="token operator">:</span> <span class="token string">"^2.0.0"</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n\n</code></pre></div>'}}),"\n",s.createElement(n.p,null,"After running ",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">npm i</code>'}}),", I needed to update all the peers of gatsby to a higher version too. After doing that, ",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">react</code>'}})," and ",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">react-dom</code>'}})," packages were added because in v1 these were bundled inside gatsby but no longer are."),"\n",s.createElement(n.p,null,"I was able to finish the install of new packages and render the site successfully using my package script: ",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">npm run develop</code>'}})),"\n",s.createElement(n.p,null,"However, now I see massive layout issues and I will move on to restructuring my react components so that they no longer use the ",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">layout.js</code>'}})," as a root component."),"\n",s.createElement(n.p,null,"After the following steps, which are thankfully documented in the ",s.createElement(n.a,{href:"https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v1-to-v2/"},"migration guide"),", I'm up and running again. Had to do the following steps."),"\n",s.createElement(n.ol,null,"\n",s.createElement(n.li,null,"Convert layout's children from render prop to normal prop (required)"),"\n",s.createElement(n.li,null,"Mv ",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">layouts/index.js</code>'}})," to ",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">src/components/layout.js</code>'}})," (optional, but recommended)"),"\n",s.createElement(n.li,null,"Import then wrap pages with layout component"),"\n",s.createElement(n.li,null,"Pass history, location, and match props to layout (didn't do this actually)"),"\n",s.createElement(n.li,null,"Change the query to use StaticQuery (now getting false pos warn about ",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<code class=\"language-text\">'maxWidth'</code>"}})," in query)"),"\n"),"\n",s.createElement(n.h2,{id:"v2-done",style:{position:"relative"}},"v2 Done",s.createElement(n.a,{href:"#v2-done","aria-label":"v2 done permalink",className:"anchor after"},s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",s.createElement(n.p,null,"We made it. Things so far have remained straightforward. Next I'll continue upgrading to v4 now from v2."),"\n",s.createElement(n.h1,{id:"v2-to-v4-upgrade",style:{position:"relative"}},"v2 to v4 upgrade",s.createElement(n.a,{href:"#v2-to-v4-upgrade","aria-label":"v2 to v4 upgrade permalink",className:"anchor after"},s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",s.createElement(n.p,null,"For this migration, I skipped 3 altogether as I saw few breaking changes that would affect me. In fact, it looks like none! Even further migrating to v4 shows no apparent breaking changes i'll need to address."),"\n",s.createElement(n.p,null,"I updated the package.json to the latest release for v4 according to npm:"),"\n",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="json"><pre class="language-json"><code class="language-json">\n    <span class="token property">"gatsby"</span><span class="token operator">:</span> <span class="token string">"4.25.2"</span><span class="token punctuation">,</span>\n\n</code></pre></div>'}}),"\n",s.createElement(n.p,null,"After that, I updated all the gatsby plugin and peers to their latest v4 versions (using npm versions page as my reference):"),"\n",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="json"><pre class="language-json"><code class="language-json">    \n    <span class="token property">"gatsby-plugin-catch-links"</span><span class="token operator">:</span> <span class="token string">"^4.25.0"</span><span class="token punctuation">,</span>\n    <span class="token property">"gatsby-plugin-react-helmet"</span><span class="token operator">:</span> <span class="token string">"5.25.0"</span><span class="token punctuation">,</span>\n    <span class="token property">"gatsby-source-filesystem"</span><span class="token operator">:</span> <span class="token string">"^4.25.0"</span><span class="token punctuation">,</span>\n    <span class="token property">"gatsby-transformer-remark"</span><span class="token operator">:</span> <span class="token string">"^5.25.1"</span><span class="token punctuation">,</span>\n\n</code></pre></div>'}}),"\n",s.createElement(n.p,null,"Luckily, not too many packages."),"\n",s.createElement(n.p,null,"On installing, I faced nothing major except a few warnings. I ended up facing more issues when I tried to run ",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">gatsby develop</code>'}}),". Errors looked like:"),"\n",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<div class=\"gatsby-highlight\" data-language=\"text\"><pre class=\"language-text\"><code class=\"language-text\">\nfailed Building production JavaScript and CSS bundles - 4.511s\n\nERROR #98124  WEBPACK\n\nGenerating JavaScript bundles failed\n\nCan't resolve '@gatsbyjs/reach-router/lib/utils' in '/Users/nathanphennel/Projects/blog/.cache'\n\nIf you're trying to use a package make sure that '@gatsbyjs/reach-router/lib/utils' is installed.\nIf you're trying to use a local file make sure that the path is correct.\n\nFile: .cache/find-path.js:1:0\n\n</code></pre></div>"}}),"\n",s.createElement(n.p,null,"To overcome these, I found that its necessary to add gatsby peer deps to the ",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">package.json</code>'}})," for some unknown reason. I saw there was a bit of chatter about deps issues on gatsby's github ",s.createElement(n.a,{href:"https://github.com/gatsbyjs/gatsby/discussions/35313"},"issues"),". ",s.createElement(n.a,{href:"https://github.com/gatsbyjs/gatsby/issues/25708"},"Here"),", I saw I could just bypass issues with the transient deps and just specify compatible versions myself in the ",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">package.json</code>'}})," like so:"),"\n",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="javascript"><pre class="language-javascript"><code class="language-javascript">\n  <span class="token string-property property">"gatsby-link"</span><span class="token operator">:</span> <span class="token string">"^4.25.0"</span><span class="token punctuation">,</span>\n  <span class="token string-property property">"gatsby-react-router-scroll"</span><span class="token operator">:</span> <span class="token string">"^5.25.0"</span><span class="token punctuation">,</span>\n  <span class="token string-property property">"@gatsbyjs/reach-router"</span><span class="token operator">:</span> <span class="token string">"1.3.9"</span><span class="token punctuation">,</span>\n  <span class="token string-property property">"gatsby-script"</span><span class="token operator">:</span> <span class="token string">"^1.10.0"</span><span class="token punctuation">,</span>\n\n</code></pre></div>'}}),"\n",s.createElement(n.p,null,"After this update, I ran the following:"),"\n",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="shell"><pre class="language-shell"><code class="language-shell">  \n  <span class="token function">rm</span> <span class="token parameter variable">-rf</span> node_modules/\n  <span class="token function">rm</span> package-lock.json\n  <span class="token function">rm</span> <span class="token parameter variable">-rf</span> .cache\n  <span class="token function">npm</span> i\n  <span class="token function">npm</span> run clean\n  <span class="token function">npm</span> i\n  <span class="token function">npm</span> run develop\n\n</code></pre></div>'}}),"\n",s.createElement(n.p,null,"Upon completely reseting all the deps for v4, things were back up and running. Only one small issue noticeable in the terminal remains when running ",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">gatsby develop</code>'}}),":"),"\n",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text">\nwarn Warning: there are unknown plugin options for "gatsby-source-filesystem": fastHash\nPlease open an issue at https://ghub.io/gatsby-source-filesystem if you believe this option is valid.\n\n</code></pre></div>'}}),"\n",s.createElement(n.p,null,"Turns out, this is now handled automatically by the plugin. I don't need to specify ",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">fastHash</code>'}})," for detecting changes to images any longer. Nice! Now I'm running with no noticeable issues and no major console warnings/errors."),"\n",s.createElement(n.h1,{id:"conclusion",style:{position:"relative"}},"Conclusion",s.createElement(n.a,{href:"#conclusion","aria-label":"conclusion permalink",className:"anchor after"},s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",s.createElement(n.p,null,"There are some growing pains for Gatsby, but nothing out of the ordinary. It was surprisingly smooth to upgrade to v4. My next step will be to implement some of the SEO tools that Gatsby has to offer and test that things are working when I Google myself."))}n.Z=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?s.createElement(n,e,s.createElement(l,e)):l(e)}},9357:function(e,n,t){var a=t(7294),s=t(4854);n.Z=e=>{let{title:n}=e;const t=(0,s.useStaticQuery)("2731891648");return a.createElement(a.Fragment,null,a.createElement("html",{lang:"en"}),a.createElement("meta",{name:"description",content:t.site.siteMetadata.description}),a.createElement("meta",{name:"image",content:t.site.siteMetadata.image}),a.createElement("title",null,n," | ",t.site.siteMetadata.title))}},3846:function(e,n,t){var a=t(7294),s=t(4854),l=t(7814),o=t(9417);n.Z=e=>{let{tocs:n}=e;const{items:t}=n,{0:r,1:c}=(0,a.useState)(!0),{0:i,1:p}=(0,a.useState)(!1),u={padding:"0 1.6rem"},g={color:"#35435d",padding:3},d={backgroundColor:"#35435d",color:"#ffffff",fontWeight:400},h={backgroundColor:"rgb(46, 107, 77)",color:"#ffffff",fontWeight:400};return a.createElement(a.Fragment,null,a.createElement("button",{style:{fontSize:"1.1em",fontWeight:300,border:"none",borderBottom:"solid 1px lightgrey",borderRight:"solid 1px lightgrey",borderTop:"solid 1px lightgrey",borderLeft:"solid 5px lightgrey",color:"#222",backgroundColor:"transparent",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0 1.5rem",margin:0},onClick:()=>{c(!r)}},"Table of Contents:",a.createElement(l.G,{icon:r?o.mTx:o.ptq})),r&&a.createElement("div",{style:{marginTop:0,lineHeight:"1.4em"}},a.createElement("ol",{style:{padding:"16px 3rem",borderBottom:"solid 1px lightgrey",borderRight:"solid 1px lightgrey",borderLeft:"solid 5px lightgrey"}},t.map((e=>a.createElement("li",{key:e.title},a.createElement(s.Link,{style:{...g,...i===e.title?d:null},key:e.title,to:e.url,onMouseEnter:()=>{p(e.title)},onMouseLeave:()=>{p(!1)}},e.title),e.items?a.createElement("ul",{style:u},e.items.map((e=>a.createElement("li",null,a.createElement(s.Link,{to:e.url,onMouseEnter:()=>{p(e.title)},onMouseLeave:()=>{p(!1)},style:{...g,...i===e.title?h:null}},e.title))))):null))))))}},7906:function(e,n,t){var a=t(7294),s=t(4854);n.Z=e=>{let{tags:n}=e;const{0:t,1:l}=(0,a.useState)(!1),o={color:"#35435d",fontWeight:600},r={backgroundColor:"#35435d",color:"#ffffff"};return a.createElement("p",null,"Tags:"," ",n.map(((e,c)=>a.createElement(a.Fragment,null,a.createElement(s.Link,{key:e,to:"/tags/"+e.replace(/ /g,"-"),style:{...o,...t===e?r:null},onMouseEnter:()=>{l(e)},onMouseLeave:()=>{l(!1)}},e),c===n.length-1?a.createElement(a.Fragment,null):a.createElement(a.Fragment,null,","," ")))))}},7268:function(e,n,t){t.d(n,{$z:function(){return g},I7:function(){return o},KM:function(){return p},Kb:function(){return r},Q1:function(){return d},XG:function(){return s},Y2:function(){return a},kQ:function(){return c},rP:function(){return i},sx:function(){return l},v_:function(){return u}});var a="index-module--article--45d42",s="index-module--breadcrumbLink--6e770",l="index-module--breadcrumbLinkHighlight--f6fd2",o="index-module--breadcrumbLink-separator--cbc54",r="index-module--breadcrumbs--411be",c="index-module--content--136c6",i="index-module--hero--ef469",p="index-module--highlightAnchor--811e2",u="index-module--post--e88a8",g="index-module--postList--15965",d="index-module--thumbnail--3cc31"},1151:function(e,n,t){t.d(n,{ah:function(){return l}});var a=t(7294);const s=a.createContext({});function l(e){const n=a.useContext(s);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}}}]);
//# sourceMappingURL=e0f82cf1f18f438cbd543af89008f01490bf2083-e0dfeec29e2d07d65223.js.map