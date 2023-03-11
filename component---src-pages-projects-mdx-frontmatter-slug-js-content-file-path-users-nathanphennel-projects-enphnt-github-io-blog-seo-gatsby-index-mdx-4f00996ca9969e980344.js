"use strict";(self.webpackChunknathan_phennel_website=self.webpackChunknathan_phennel_website||[]).push([[163],{6255:function(e,t,n){var a=n(1151),s=n(7294);function l(e){const t=Object.assign({p:"p",ol:"ol",li:"li",h1:"h1",span:"span",h2:"h2"},(0,a.ah)(),e.components);return s.createElement(s.Fragment,null,s.createElement(t.p,null,"Today, I'll be following along the ",s.createElement("a",{href:"https://www.gatsbyjs.com/docs/how-to/adding-common-features/adding-seo-component/#seo-with-gatsby"},"Gatsby SEO guide"),". I'll be following these steps roughly:"),"\n",s.createElement(t.ol,null,"\n",s.createElement(t.li,null,"Gauging my current situation"),"\n",s.createElement(t.li,null,"Adding siteMetadata"),"\n",s.createElement(t.li,null,"Create a sitemap generation process"),"\n",s.createElement(t.li,null,"Create robots.txt generation process"),"\n"),"\n",s.createElement(t.h1,null,"Gauging my current situation"),"\n",s.createElement(t.p,null,"After these steps, I'll do some testing to see if my SEO has improved using google."),"\n",s.createElement(t.p,null,"Unfortunately, this blog is yet to be indexed. Instead of waiting i'll use the google search console to verify the site."),"\n",s.createElement(t.p,null,"To use search console, I've got to add a meta tag to the site for verification purposes."),"\n",s.createElement(t.p,null,"After deploying the blog which now contains the verification tag, I was successfully able to to verify ownership. Now, google will spend some time crawling the site here at /blog and indexing all the things."),"\n",s.createElement(t.p,null,"I'll check the results when I look at this again in the next few days."),"\n",s.createElement(t.p,null,"...next day, I'm noticing the same issues with Search Console, says more time is needed essentially. In the meantime I'll continue on my optimization journey."),"\n",s.createElement(t.h1,null,"Adding siteMetadata"),"\n",s.createElement(t.p,null,"This was simple. In the ",s.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">gatsby-config.js</code>'}}),", I just ensure the following properties were set:"),"\n",s.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="javascript"><pre class="language-javascript"><code class="language-javascript">\n  <span class="token literal-property property">siteMetadata</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"Nathan Phennel\'s Blog"</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">"Notes and memos on the things that cross my path."</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">siteUrl</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://enphnt.github.io/blog/</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>\n    <span class="token literal-property property">image</span><span class="token operator">:</span> <span class="token string">"/images/profile-pic.png"</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n</code></pre></div>'}}),"\n",s.createElement(t.p,null,"After this stage, I tested google and still no changes were detected. I continued to optimize in other ways."),"\n",s.createElement(t.h1,null,"Create a sitemap generation process"),"\n",s.createElement(t.p,null,"So one major issue I face is that googlebot doesn't seem to know how to crawl the site. I understand that if provided a sitemap.xml then the bot will have a much better chance of successfully crawling. In fact, sitemaps are also great to prevent crawling of certain areas that you wouldn't want indexed, like 404 pages, paths with hashes for individual user sessions, etc."),"\n",s.createElement(t.p,null,"So I grabbed the ",s.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">gatsby-plugin-sitemap</code>'}})," and was able to configure with minimal configuration. Essentially, I had to leverage the ",s.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">serialize</code>'}})," option so that I could append the /blog/ part of the path to all my pages. This is due to the way github pages hosts subproject. This blog is a subproject or subfolder of my main github-pages project. So by default the paths were defaulting to ",s.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">enphnt.github.io/post-name</code>'}})," whereas after using the ",s.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">serialize</code>'}})," option, I was able to set each entry to be ",s.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">enphnt.github.io/blog/post-name</code>'}}),"."),"\n",s.createElement(t.p,null,"I updated the build and deployed."),"\n",s.createElement(t.p,null,"Next, I went back to Search Console to see if anything had changed. Nothing. This time, I decided to do 2 things:"),"\n",s.createElement(t.ol,null,"\n",s.createElement(t.li,null,"request indexation - Its just a click to request it. Still pending of course..."),"\n",s.createElement(t.li,null,"explicitly tell google where to find the sitemap. This is done in the 'sitemap' section of Search Console."),"\n"),"\n",s.createElement(t.p,null,"After this, I was actually able to see that googlebot was assisted finally (note, currently 12 posts on this blog):"),"\n",s.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 900px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/9c64766e1224d04e9554e75db5da3d95/71b12/sitemap.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 32.44444444444445%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAwUlEQVR42n1Q7Q6DMAjs+7+miT9sXTVW+0lvOebMvjISUjjocWCOGDFNFpO1cG6Gcw7WOqSUIb1DRCDy+v6K5cJMzhne3+C9v9xai9Yq/lv/iZpSCo7juADmtGVZlJgDiW3bht67xvu+Pyh7Rwi71tZ1VZWm1IqUEmqtaK0hxni9/Eiczlxj1krSc5DwWedgJWTjMAwYx1ELVPUkm+dZFXEg4xACslTYuKJKe1uVfRRi8rkCSTjx61Kf2Jn3U+Gn3wF7nNYypxInzwAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="sitemap-seen-by-googlebot"\n        title=""\n        src="/static/9c64766e1224d04e9554e75db5da3d95/1cfc2/sitemap.png"\n        srcset="/static/9c64766e1224d04e9554e75db5da3d95/3684f/sitemap.png 225w,\n/static/9c64766e1224d04e9554e75db5da3d95/fc2a6/sitemap.png 450w,\n/static/9c64766e1224d04e9554e75db5da3d95/1cfc2/sitemap.png 900w,\n/static/9c64766e1224d04e9554e75db5da3d95/71b12/sitemap.png 1308w"\n        sizes="(max-width: 900px) 100vw, 900px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",s.createElement(t.p,null,"This is great. Now, when I run a new production build of the site, a new sitemap.xml is generated too so that all new content is included in the sitemap."),"\n",s.createElement(t.p,null,"I didn't tweak the sitemap attributes much. Just gave the homepage, or /blog/, path a slightly higher priority. I set the changefreq to be monthly because realistically that's what I've maintained at best so far."),"\n",s.createElement(t.p,null,"You can access the sitemap here by the way: https://enphnt.github.io/blog/sitemap/sitemap-0.xml"),"\n",s.createElement(t.p,null,"Next to the robots.txt file..."),"\n",s.createElement(t.h1,null,"Create robots.txt generation process"),"\n",s.createElement(t.p,null,"Very similar to the sitemap plugin, I found one got robots, ",s.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">gatsby-plugin-robots-txt</code>'}}),". I included the plugin middleware and proceed to review the generated robots.txt file."),"\n",s.createElement(t.p,null,"Unfortunately, I face the same issues as before with the github-pages subproject, aka /blob/ in the path."),"\n",s.createElement(t.p,null,"Original output point the bots to go here for the sitemap:"),"\n",s.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text">\nSitemap: https://enphnt.github.io/blog/sitemap/sitemap-0.xml\n\n</code></pre></div>'}}),"\n",s.createElement(t.p,null,"To ensure this was created correctly, I simply hardcoded the locations of things:"),"\n",s.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="javascript"><pre class="language-javascript"><code class="language-javascript">\n<span class="token literal-property property">options</span><span class="token operator">:</span>\n    <span class="token punctuation">{</span>\n        <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">\'https://enphnt.github.io/blog\'</span><span class="token punctuation">,</span> <span class="token comment">// truncated in the robots.txt result?</span>\n        <span class="token literal-property property">sitemap</span><span class="token operator">:</span> <span class="token string">\'https://enphnt.github.io/blog/sitemap/sitemap-0.xml\'</span><span class="token punctuation">,</span>\n        <span class="token literal-property property">policy</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">userAgent</span><span class="token operator">:</span> <span class="token string">\'*\'</span><span class="token punctuation">,</span> <span class="token literal-property property">allow</span><span class="token operator">:</span> <span class="token string">\'/\'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span>\n\n</code></pre></div>'}}),"\n",s.createElement(t.p,null,"After this, I was able to see that indeed, the file was in place, waiting for future bot visits:\nhttps://enphnt.github.io/blog/robots.txt"),"\n",s.createElement(t.p,null,"Now, in future production builds of the site, the robots.txt will be generated and made available for all those friendly crawlers."),"\n",s.createElement(t.h1,null,"Testing"),"\n",s.createElement(t.p,null,"It was great to get the feedback immediately from Search Console when I popped in the sitemap.xml. However, still I'm unable to see the site in google search itself."),"\n",s.createElement(t.p,null,"I'll continue waiting and check back soon...."),"\n",s.createElement(t.h2,null,"Update after a few days"),"\n",s.createElement(t.p,null,"I've noticed that still the child pages of the site are not being detected by google search. I've decided to address this by registing ownership of the main site at https://enphnt.github.io."),"\n",s.createElement(t.p,null,"I used the meta tag option to verify ownership successfully."),"\n",s.createElement(t.p,null,"I then actually requested indexing on the 3 most recent blog posts urls themselves."),"\n",s.createElement(t.p,null,"In a few days, hopefully I will start to see the bots crawl all the articles successfully."),"\n",s.createElement(t.h1,null,"Conclusion"),"\n",s.createElement(t.p,null,"...tbd"))}t.Z=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?s.createElement(t,e,s.createElement(l,e)):l(e)}},5398:function(e,t,n){n.r(t),n.d(t,{Head:function(){return u},default:function(){return m}});var a=n(6255),s=n(7294),l=n(4854),o=n(8032),r=n(7144),i=n(9357),p=n(7268);const c=e=>{let{data:t,children:n}=e;const a=(0,o.c)(t.mdx.frontmatter.hero_image);return s.createElement("div",{style:{margin:12}},s.createElement(r.Z,null,s.createElement("div",{className:p.Kb},s.createElement(l.Link,{className:p.XG,to:"/"},"Home"),s.createElement("div",{className:p.I7},">"),s.createElement(l.Link,{className:p.XG,to:"/projects"},"Projects"),s.createElement("div",{className:p.I7},">"),s.createElement(l.Link,{className:p.XG,to:"./"},t.mdx.frontmatter.title)),a?s.createElement(s.Fragment,null,s.createElement(o.G,{image:a,alt:t.mdx.frontmatter.hero_image_alt}),s.createElement("p",null,"Photo Credit:"," ",s.createElement("a",{href:t.mdx.frontmatter.hero_image_credit_link},t.mdx.frontmatter.hero_image_credit_text))):null,s.createElement("h1",null,t.mdx.frontmatter.title),s.createElement("p",{style:{fontWeight:100,marginBottom:30}},t.mdx.frontmatter.date),s.createElement("div",{className:p.kQ},n),s.createElement("br"),s.createElement(l.Link,{to:"/projects"},"Go back to the projects homepage")))},u=()=>s.createElement(i.Z,{title:"Super Cool Projects"});function m(e){return s.createElement(c,e,s.createElement(a.Z,e))}},7268:function(e,t,n){n.d(t,{$z:function(){return c},I7:function(){return l},KM:function(){return i},Kb:function(){return o},Q1:function(){return u},XG:function(){return s},Y2:function(){return a},kQ:function(){return r},v_:function(){return p}});var a="index-module--article--45d42",s="index-module--breadcrumbLink--6e770",l="index-module--breadcrumbLink-separator--cbc54",o="index-module--breadcrumbs--411be",r="index-module--content--136c6",i="index-module--highlight-anchor--28dd6",p="index-module--post--e88a8",c="index-module--postList--15965",u="index-module--thumbnail--3cc31"},1151:function(e,t,n){n.d(t,{ah:function(){return l}});var a=n(7294);const s=a.createContext({});function l(e){const t=a.useContext(s);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}}}]);
//# sourceMappingURL=component---src-pages-projects-mdx-frontmatter-slug-js-content-file-path-users-nathanphennel-projects-enphnt-github-io-blog-seo-gatsby-index-mdx-4f00996ca9969e980344.js.map