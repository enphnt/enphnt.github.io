"use strict";(self.webpackChunknathan_phennel_website=self.webpackChunknathan_phennel_website||[]).push([[847],{7592:function(e,n,t){var a=t(1151),s=t(7294);function l(e){const n=Object.assign({p:"p",span:"span",h1:"h1",ol:"ol",li:"li",h2:"h2"},(0,a.ah)(),e.components);return s.createElement(s.Fragment,null,s.createElement(n.p,null,"First off, I'm using such an old of a version of ",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">gatsy</code>'}})," that I can't currently leverage gatsby's newest features. I'll need to upgrade to minimum version of ",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">gatsby@4.19.0</code>'}})," in order to use SEO tooling."),"\n",s.createElement(n.p,null,"This post is just my notes from performing the upgrade. I'm dog sitting this weekend so will be doing this with my partner, Pickle, today. Pickle is an extremely needy dachshund. She needs pats and stimulation constantly much like this blog needs posts and upgrades today."),"\n",s.createElement(n.h1,null,"v1 to v2 upgrade"),"\n",s.createElement(n.p,null,"I'll try just setting package.json version to 2.0.0:"),"\n",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="json"><pre class="language-json"><code class="language-json">  \n  <span class="token property">"dependencies"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">"gatsby"</span><span class="token operator">:</span> <span class="token string">"^2.0.0"</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n\n</code></pre></div>'}}),"\n",s.createElement(n.p,null,"After running ",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">npm i</code>'}}),", I needed to update all the peers of gatsby to a higher version too. After doing that, ",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">react</code>'}})," and ",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">react-dom</code>'}})," packages were added because in v1 these were bundled inside gatsby but no longer are."),"\n",s.createElement(n.p,null,"I was able to finish the install of new packages and render the site successfully using my package script: ",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">npm run develop</code>'}})),"\n",s.createElement(n.p,null,"However, now I see massive layout issues and I will move on to restructuring my react components so that they no longer use the ",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">layout.js</code>'}})," as a root component."),"\n",s.createElement(n.p,null,"After the following steps, which are thankfully documented in the  ",s.createElement("a",{target:"_blank",href:"https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v1-to-v2/"},"migration guide"),", I'm up and running again. Had to do the following steps."),"\n",s.createElement(n.ol,null,"\n",s.createElement(n.li,null,"Convert layout's children from render prop to normal prop (required)"),"\n",s.createElement(n.li,null,"Mv ",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">layouts/index.js</code>'}})," to ",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">src/components/layout.js</code>'}})," (optional, but recommended)"),"\n",s.createElement(n.li,null,"Import then wrap pages with layout component"),"\n",s.createElement(n.li,null,"Pass history, location, and match props to layout (didn't do this actually)"),"\n",s.createElement(n.li,null,"Change the query to use StaticQuery (now getting false pos warn about ",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<code class=\"language-text\">'maxWidth'</code>"}})," in query)"),"\n"),"\n",s.createElement(n.h2,null,"v2 Done"),"\n",s.createElement(n.p,null,"We made it. Things so far have remained straightforward. Next I'll continue upgrading to v4 now from v2."),"\n",s.createElement(n.h1,null,"v2 to v4 upgrade"),"\n",s.createElement(n.p,null,"For this migration, I skipped 3 altogether as I saw few breaking changes that would affect me. In fact, it looks like none! Even further migrating to v4 shows no apparent breaking changes i'll need to address."),"\n",s.createElement(n.p,null,"I updated the package.json to the latest release for v4 according to npm:"),"\n",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="json"><pre class="language-json"><code class="language-json">\n    <span class="token property">"gatsby"</span><span class="token operator">:</span> <span class="token string">"4.25.2"</span><span class="token punctuation">,</span>\n\n</code></pre></div>'}}),"\n",s.createElement(n.p,null,"After that, I updated all the gatsby plugin and peers to their latest v4 versions (using npm versions page as my reference):"),"\n",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="json"><pre class="language-json"><code class="language-json">    \n    <span class="token property">"gatsby-plugin-catch-links"</span><span class="token operator">:</span> <span class="token string">"^4.25.0"</span><span class="token punctuation">,</span>\n    <span class="token property">"gatsby-plugin-react-helmet"</span><span class="token operator">:</span> <span class="token string">"5.25.0"</span><span class="token punctuation">,</span>\n    <span class="token property">"gatsby-source-filesystem"</span><span class="token operator">:</span> <span class="token string">"^4.25.0"</span><span class="token punctuation">,</span>\n    <span class="token property">"gatsby-transformer-remark"</span><span class="token operator">:</span> <span class="token string">"^5.25.1"</span><span class="token punctuation">,</span>\n\n</code></pre></div>'}}),"\n",s.createElement(n.p,null,"Luckily, not too many packages."),"\n",s.createElement(n.p,null,"On installing, I faced nothing major except a few warnings. I ended up facing more issues when I tried to run ",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">gatsby develop</code>'}}),". Errors looked like:"),"\n",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:"<div class=\"gatsby-highlight\" data-language=\"text\"><pre class=\"language-text\"><code class=\"language-text\">\nfailed Building production JavaScript and CSS bundles - 4.511s\n\nERROR #98124  WEBPACK\n\nGenerating JavaScript bundles failed\n\nCan't resolve '@gatsbyjs/reach-router/lib/utils' in '/Users/nathanphennel/Projects/blog/.cache'\n\nIf you're trying to use a package make sure that '@gatsbyjs/reach-router/lib/utils' is installed.\nIf you're trying to use a local file make sure that the path is correct.\n\nFile: .cache/find-path.js:1:0\n\n</code></pre></div>"}}),"\n",s.createElement(n.p,null,"To overcome these, I found that its necessary to add gatsby peer deps to the ",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">package.json</code>'}})," for some unknown reason. I saw there was a bit of chatter about deps issues on gatsby's github ",s.createElement("a",{target:"_blank",href:"https://github.com/gatsbyjs/gatsby/discussions/35313"},"issues"),". ",s.createElement("a",{target:"_blank",href:"https://github.com/gatsbyjs/gatsby/issues/25708"},"Here")," I saw I could just bypass issues with the transient deps and just specify compatible versions myself in the ",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">package.json</code>'}})," like so:"),"\n",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="javascript"><pre class="language-javascript"><code class="language-javascript">\n  <span class="token string-property property">"gatsby-link"</span><span class="token operator">:</span> <span class="token string">"^4.25.0"</span><span class="token punctuation">,</span>\n  <span class="token string-property property">"gatsby-react-router-scroll"</span><span class="token operator">:</span> <span class="token string">"^5.25.0"</span><span class="token punctuation">,</span>\n  <span class="token string-property property">"@gatsbyjs/reach-router"</span><span class="token operator">:</span> <span class="token string">"1.3.9"</span><span class="token punctuation">,</span>\n  <span class="token string-property property">"gatsby-script"</span><span class="token operator">:</span> <span class="token string">"^1.10.0"</span><span class="token punctuation">,</span>\n\n</code></pre></div>'}}),"\n",s.createElement(n.p,null,"After this update, I ran the following:"),"\n",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="shell"><pre class="language-shell"><code class="language-shell">  \n  <span class="token function">rm</span> <span class="token parameter variable">-rf</span> node_modules/\n  <span class="token function">rm</span> package-lock.json\n  <span class="token function">rm</span> <span class="token parameter variable">-rf</span> .cache\n  <span class="token function">npm</span> i\n  <span class="token function">npm</span> run clean\n  <span class="token function">npm</span> i\n  <span class="token function">npm</span> run develop\n\n</code></pre></div>'}}),"\n",s.createElement(n.p,null,"Upon completely reseting all the deps for v4, things were back up and running. Only one small issue noticeable in the terminal remains when running ",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">gatsby develop</code>'}}),":"),"\n",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text">\nwarn Warning: there are unknown plugin options for "gatsby-source-filesystem": fastHash\nPlease open an issue at https://ghub.io/gatsby-source-filesystem if you believe this option is valid.\n\n</code></pre></div>'}}),"\n",s.createElement(n.p,null,"Turns out, this is now handled automatically by the plugin. I don't need to specify ",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">fastHash</code>'}})," for detecting changes to images any longer. Nice! Now I'm running with no noticeable issues and no major console warnings/errors."),"\n",s.createElement(n.h1,null,"Conclusion"),"\n",s.createElement(n.p,null,"Gatsby seems to have some growing pains but nothing out of the ordinary. In fact, the upgrade to v4 was surprisingly smooth. Next, i'll actually move on to implementing some of the SEO tools that gatsby has to offer and testing that things are working when I google myself."),"\n",s.createElement(n.p,null,"I'm now off to play with Pickle. Until next time."))}n.Z=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?s.createElement(n,e,s.createElement(l,e)):l(e)}},1598:function(e,n,t){t.r(n),t.d(n,{Head:function(){return p},default:function(){return i}});var a=t(7592),s=t(7294),l=t(8032),o=t(7144),r=t(9357);const c=e=>{let{data:n,children:t}=e;const a=(0,l.c)(n.mdx.frontmatter.hero_image);return s.createElement(o.Z,{pageTitle:n.mdx.frontmatter.title},s.createElement("a",{style:{margin:"2px 0 90px",fontSize:12,textAlign:"right"},href:"/blog"},"  ","<","Back"),s.createElement("p",null,n.mdx.frontmatter.date),a?s.createElement(s.Fragment,null,s.createElement(l.G,{image:a,alt:n.mdx.frontmatter.hero_image_alt,style:{maxHeight:"40vh"}}),s.createElement("p",{style:{margin:"2px 0 30px",fontSize:10,textAlign:"right"}},"Photo Credit:"," ",s.createElement("a",{href:n.mdx.frontmatter.hero_image_credit_link},n.mdx.frontmatter.hero_image_credit_text))):null,t)},p=()=>s.createElement(r.Z,{title:"Super Cool Blog Posts"});function i(e){return s.createElement(c,e,s.createElement(a.Z,e))}},1151:function(e,n,t){t.d(n,{ah:function(){return l}});var a=t(7294);const s=a.createContext({});function l(e){const n=a.useContext(s);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}}}]);
//# sourceMappingURL=component---src-pages-blog-mdx-frontmatter-slug-js-content-file-path-users-nathanphennel-projects-enphnt-github-io-blog-gatsby-upgrades-index-mdx-357700bb172cfb0607cf.js.map