"use strict";(self.webpackChunknathan_phennel_website=self.webpackChunknathan_phennel_website||[]).push([[898],{7851:function(e,t,n){n.r(t),n.d(t,{Head:function(){return y},default:function(){return E}});var a=n(1151),l=n(7294),s=n(4854),o=n(5292);function r(e){const t=Object.assign({h1:"h1",a:"a",span:"span",p:"p",ol:"ol",li:"li",h2:"h2"},(0,a.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.h1,{id:"seo-and-gatsby",style:{position:"relative"}},"SEO and Gatsby",l.createElement(t.a,{href:"#seo-and-gatsby","aria-label":"seo and gatsby permalink",className:"anchor after"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",l.createElement(t.p,null,"SEO (Search Engine Optimization) is a complex and challenging task for any Gatsby project. You need to consider many factors to optimize your site. One of the key elements of SEO is sitemap and robots.txt files. These files help search engines to crawl your site and index your pages according to your preferences and instructions."),"\n",l.createElement("ul",{className:o.JP},l.createElement(t.p,null,"This article is outdated and no longer as relevant as it once was. It uses Gatsby v4, which has since been replaced with Gatsby v5. I have since documented my progress in newer articles:"),l.createElement(s.Link,{"aria-label":"seo-gatsby-component",to:"/blog/seo-gatsby-component/",children:"Setting up a SEO React component for your Gatsby site"}),l.createElement("br"),l.createElement(s.Link,{"aria-label":"seo-gatsby-sitemap-robots",to:"/blog/seo-gatsby-sitemap-robots/",children:"Sitemap and robots.txt for your Gatsby site"})),"\n",l.createElement(t.p,null,"Today, I'll be following along the ",l.createElement(t.a,{href:"https://www.gatsbyjs.com/docs/how-to/adding-common-features/adding-seo-component/#seo-with-gatsby"},"Gatsby SEO guide"),". I'll be following these steps:"),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"Gauging my current situation"),"\n",l.createElement(t.li,null,"Adding siteMetadata"),"\n",l.createElement(t.li,null,"Create a sitemap generation process"),"\n",l.createElement(t.li,null,"Create robots.txt generation process"),"\n"),"\n",l.createElement(t.p,null,"After these steps, I'll do some testing to see if my SEO has improved using Google."),"\n",l.createElement(t.h1,{id:"gauging-my-current-situation",style:{position:"relative"}},"Gauging my current situation",l.createElement(t.a,{href:"#gauging-my-current-situation","aria-label":"gauging my current situation permalink",className:"anchor after"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",l.createElement(t.p,null,"Unfortunately, this blog is yet to be indexed. Instead of waiting, I'll use the Google search console to verify the site."),"\n",l.createElement(t.p,null,"To use the search console, I've got to add a meta tag to the site for verification purposes."),"\n",l.createElement(t.p,null,"After deploying the blog which now contains the verification tag, I was successfully able to verify ownership. Now, Google will spend some time crawling the site here at /blog and indexing all the things."),"\n",l.createElement(t.p,null,"I'll check the results when I look at this again in the next few days."),"\n",l.createElement(t.p,null,"...next day, I'm noticing the same issues with Search Console, says more time is needed essentially. In the meantime, I'll continue on my optimization journey."),"\n",l.createElement(t.h1,{id:"adding-sitemetadata",style:{position:"relative"}},"Adding siteMetadata",l.createElement(t.a,{href:"#adding-sitemetadata","aria-label":"adding sitemetadata permalink",className:"anchor after"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",l.createElement(t.p,null,"This was simple. In the ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">gatsby-config.js</code>'}}),", I just ensure the following properties were set:"),"\n",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="javascript"><pre class="language-javascript"><code class="language-javascript">\n  <span class="token literal-property property">siteMetadata</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"Nathan Phennel\'s Blog"</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">"Notes and memos on the things that cross my path."</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">siteUrl</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://enphnt.github.io/blog/</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>\n    <span class="token literal-property property">image</span><span class="token operator">:</span> <span class="token string">"/images/profile-pic.png"</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n</code></pre></div>'}}),"\n",l.createElement(t.p,null,"After this stage, I tested google and still no changes were detected. I continued to optimize in other ways."),"\n",l.createElement(t.h1,{id:"create-a-sitemap-generation-process",style:{position:"relative"}},"Create a sitemap generation process",l.createElement(t.a,{href:"#create-a-sitemap-generation-process","aria-label":"create a sitemap generation process permalink",className:"anchor after"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",l.createElement(t.p,null,"So one major issue I face is that Googlebot doesn't seem to know how to crawl the site. I understand that if provided a sitemap.xml then the bot will have a much better chance of successfully crawling. Sitemaps are also great to prevent the crawling of certain areas that you wouldn't want to be indexed, like 404 pages, paths with hashes for individual user sessions, etc."),"\n",l.createElement(t.p,null,"So I grabbed the ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">gatsby-plugin-sitemap</code>'}})," and was able to configure it with minimal configuration. Essentially, I had to leverage the ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">serialize</code>'}})," option so that I could append the /blog/ part of the path to all my pages. This is due to the way github pages hosts subproject. This blog is a subproject or subfolder of my main github-pages project. So by default, the paths were defaulting to ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">enphnt.github.io/post-name</code>'}})," whereas after using the ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">serialize</code>'}})," option, I was able to set each entry to be ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">enphnt.github.io/blog/post-name</code>'}}),"."),"\n",l.createElement(t.p,null,"I updated the build and deployed it."),"\n",l.createElement(t.p,null,"Next, I went back to Search Console to see if anything had changed. Nothing. This time, I decided to do 2 things:"),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"request indexation - It's just a click to request it. Still pending of course..."),"\n",l.createElement(t.li,null,"explicitly tell Google where to find the sitemap. This is done in the 'sitemap' section of the Search Console."),"\n"),"\n",l.createElement(t.p,null,"After this, I was able to see that Googlebot was assisted finally (note, currently 12 posts on this blog):"),"\n",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 900px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/c9e8e760be8b09f221b6a1220be29ce3/71b12/sitemap.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 32.44444444444445%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAwUlEQVR42n1Q7Q6DMAjs+7+miT9sXTVW+0lvOebMvjISUjjocWCOGDFNFpO1cG6Gcw7WOqSUIb1DRCDy+v6K5cJMzhne3+C9v9xai9Yq/lv/iZpSCo7juADmtGVZlJgDiW3bht67xvu+Pyh7Rwi71tZ1VZWm1IqUEmqtaK0hxni9/Eiczlxj1krSc5DwWedgJWTjMAwYx1ELVPUkm+dZFXEg4xACslTYuKJKe1uVfRRi8rkCSTjx61Kf2Jn3U+Gn3wF7nNYypxInzwAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="sitemap-seen-by-googlebot"\n        title=""\n        src="/static/c9e8e760be8b09f221b6a1220be29ce3/1cfc2/sitemap.png"\n        srcset="/static/c9e8e760be8b09f221b6a1220be29ce3/3684f/sitemap.png 225w,\n/static/c9e8e760be8b09f221b6a1220be29ce3/fc2a6/sitemap.png 450w,\n/static/c9e8e760be8b09f221b6a1220be29ce3/1cfc2/sitemap.png 900w,\n/static/c9e8e760be8b09f221b6a1220be29ce3/71b12/sitemap.png 1308w"\n        sizes="(max-width: 900px) 100vw, 900px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",l.createElement(t.p,null,"This is great. Now, when I run a new production build of the site, a new sitemap.xml is generated too so that all new content is included in the sitemap."),"\n",l.createElement(t.p,null,"I didn't tweak the sitemap attributes much. Just gave the homepage, or /blog/, path a slightly higher priority. I set the changefreq to be monthly because realistically that's what I've maintained at best so far."),"\n",l.createElement(t.p,null,"You can access the sitemap here by the way: https://enphnt.github.io/blog/sitemap/sitemap-0.xml"),"\n",l.createElement(t.p,null,"Next to the robots.txt file..."),"\n",l.createElement(t.h1,{id:"create-robotstxt-generation-process",style:{position:"relative"}},"Create robots.txt generation process",l.createElement(t.a,{href:"#create-robotstxt-generation-process","aria-label":"create robotstxt generation process permalink",className:"anchor after"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",l.createElement(t.p,null,"Very similar to the sitemap plugin, I found one got robots, ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">gatsby-plugin-robots-txt</code>'}}),". I included the plugin middleware and proceed to review the generated robots.txt file."),"\n",l.createElement(t.p,null,"Unfortunately, I face the same issues as before with the github-pages subproject, aka /blob/ in the path."),"\n",l.createElement(t.p,null,"Original output point the bots to go here for the sitemap:"),"\n",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text">\nSitemap: https://enphnt.github.io/blog/sitemap/sitemap-0.xml\n\n</code></pre></div>'}}),"\n",l.createElement(t.p,null,"To ensure this was created correctly, I simply hardcoded the locations of things:"),"\n",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="javascript"><pre class="language-javascript"><code class="language-javascript">\n<span class="token literal-property property">options</span><span class="token operator">:</span>\n    <span class="token punctuation">{</span>\n        <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">\'https://enphnt.github.io/blog\'</span><span class="token punctuation">,</span> <span class="token comment">// truncated in the robots.txt result?</span>\n        <span class="token literal-property property">sitemap</span><span class="token operator">:</span> <span class="token string">\'https://enphnt.github.io/blog/sitemap/sitemap-0.xml\'</span><span class="token punctuation">,</span>\n        <span class="token literal-property property">policy</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">userAgent</span><span class="token operator">:</span> <span class="token string">\'*\'</span><span class="token punctuation">,</span> <span class="token literal-property property">allow</span><span class="token operator">:</span> <span class="token string">\'/\'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span>\n\n</code></pre></div>'}}),"\n",l.createElement(t.p,null,"After this, I was able to see that indeed, the file was in place, waiting for future bot visits:\nhttps://enphnt.github.io/blog/robots.txt"),"\n",l.createElement(t.p,null,"Now, in future production builds of the site, the robots.txt will be generated and made available for all those friendly crawlers."),"\n",l.createElement(t.h1,{id:"testing",style:{position:"relative"}},"Testing",l.createElement(t.a,{href:"#testing","aria-label":"testing permalink",className:"anchor after"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",l.createElement(t.p,null,"It was great to get the feedback immediately from Search Console when I popped in the sitemap.xml. However, still, I'm unable to see the site in Google search itself."),"\n",l.createElement(t.p,null,"I'll continue waiting and check back soon..."),"\n",l.createElement(t.h2,{id:"update-after-a-few-days",style:{position:"relative"}},"Update after a few days",l.createElement(t.a,{href:"#update-after-a-few-days","aria-label":"update after a few days permalink",className:"anchor after"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",l.createElement(t.p,null,"I've noticed that still the child pages of the site are not being detected by Google search. I've decided to address this by registering ownership of the main site at https://enphnt.github.io."),"\n",l.createElement(t.p,null,"I used the meta tag option to verify ownership successfully."),"\n",l.createElement(t.p,null,"I then actually requested indexing on the 3 most recent blog post urls themselves."),"\n",l.createElement(t.p,null,"In a few days, hopefully, I will start to see the bots crawl all the articles successfully."),"\n",l.createElement(t.h1,{id:"conclusion",style:{position:"relative"}},"Conclusion",l.createElement(t.a,{href:"#conclusion","aria-label":"conclusion permalink",className:"anchor after"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",l.createElement(t.p,null,"I was able to confirm the following:"),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"sitemap.xml is being generated and is being detected by Googlebot"),"\n",l.createElement(t.li,null,"robots.txt is being generated and is being detected by Googlebot"),"\n",l.createElement(t.li,null,"Google search console is able to verify ownership of the site"),"\n",l.createElement(t.li,null,"Google search console is able to verify ownership of the main site"),"\n"),"\n",l.createElement(t.p,null,"In summary, I've done all I can do to optimize the site for SEO. Now, I'll just have to wait and see if Googlebot is able to crawl the site and index the pages successfully in the coming days."))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?l.createElement(t,e,l.createElement(r,e)):r(e)},c=n(6050),p=n(9357),g=n(3306),m=n(5291),h=n(5919),d=n(5067),u=n(9838),b=n(1766);const f=e=>{let{data:t,children:n}=e;const{mdx:{frontmatter:{title:a,tags:s,date:o,hero_image:r,hero_image_alt:i,hero_image_credit_link:p,hero_image_credit_text:f},tableOfContents:y}}=t;return l.createElement(c.Z,null,l.createElement("div",{style:{paddingTop:20}},l.createElement(d.Z,{title:a,path:"blog"}),r&&l.createElement(b.Z,{image:r,alt:i,credit:f,link:p}),l.createElement("h1",null,a),l.createElement(g.Z,{tags:s}),l.createElement("h5",null,o),l.createElement("br"),l.createElement(m.Z,{tocs:y}),l.createElement(u.Z),l.createElement("div",null,n),l.createElement("br"),l.createElement(h.Z)))},y=e=>{let{location:t,data:n}=e;return l.createElement(p.Z,{location:t,title:n.mdx.frontmatter.title,hero_image:n.mdx.frontmatter.hero_image,excerpt:n.mdx.excerpt})};function E(e){return l.createElement(f,e,l.createElement(i,e))}},789:function(e,t,n){var a=n(7294),l=n(4854),s=n(8032);const o=["lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgreen","lightpink","lightsalmon","lightseagreen","lightskyblue","lightgray"];t.Z=e=>{let{idx:t,node:{id:n,frontmatter:{thumbnail:r,slug:i,title:c,date:p,tags:g},excerpt:m}}=e;const h=(0,s.c)(r),d=o[t%o.length],{0:u,1:b}=(0,a.useState)("span 1");(0,a.useEffect)((()=>{window.addEventListener("resize",(()=>{window.innerWidth<=768?b("span 2"):b("span 1")}))}),[]);const f={article:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gridGap:"1em",maxWidth:"99%",padding:"1em"},tag:{padding:4,margin:"4px",backgroundColor:"#e0e0e0",color:"inherit",borderRadius:"4px",textDecoration:"none"},blogFooterTags:{display:"flex",flexWrap:"wrap"},heading:{marginTop:0,fontSize:"1.3em",fontWeight:600,textDecorationLine:"underline",textDecorationStyle:"solid",textDecorationColor:d,textDecorationThickness:1,maxWidth:"max-content"},thumbnailWrapper:{margin:"0.35em 0 0 0",justifySelf:"center",gridColumn:u,maxWidth:300},info:{gridColumn:"span 2",justifyContent:"space-around",display:"flex",flexDirection:"column"},hr:{color:d,margin:0}};return a.createElement("div",null,a.createElement("hr",{style:f.hr}),a.createElement("article",{style:f.article},a.createElement("div",{style:f.thumbnailWrapper},a.createElement(l.Link,{id:"nohighlight","aria-label":"Read more about "+c,to:"/blog/"+i+"/"},a.createElement(s.G,{image:h,alt:"Thumbnail for "+c}))),a.createElement("div",{style:f.info},a.createElement(l.Link,{"aria-label":"Read more about "+c,to:"/blog/"+i+"/",style:f.heading},c),a.createElement("h5",null,p),a.createElement("p",null,m),a.createElement("div",{style:f.blogFooterTags},g.map((e=>a.createElement(l.Link,{key:e,to:"/tags/"+e.replace(/ /g,"-")+"/",style:f.tag},e)))))))}},9838:function(e,t,n){var a=n(7294);const l=n(2788).default.button.withConfig({displayName:"back-to-top__BackToTopButton",componentId:"sc-izz6d7-0"})(["position:fixed;bottom:calc(12% - 30px);right:0;z-index:2;font-size:18px;border:none;outline:none;background-color:white !important;color:black;cursor:pointer;padding:0;width:60px;height:60px;border-radius:4px;box-shadow:0px 2px 4px rgba(0,0,0,0.2);white-space:nowrap;"]);t.Z=()=>{const{0:e,1:t}=(0,a.useState)(!1);(0,a.useEffect)((()=>{const e=()=>{window.pageYOffset>1e3?t(!0):t(!1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)}),[]);return e?a.createElement(l,{onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})}},a.createElement("span",null,"↑")):null}},5067:function(e,t,n){var a=n(4854),l=n(7294);const s={breadcrumbs:{display:"flex",alignItems:"baseline",margin:4,fontSize:"max(.85vw, .9em)"},breadcrumbLink:{paddingRight:2,whiteSpace:"nowrap",textDecoration:"none"},breadcrumbLinkHighlight:{fontWeight:600,textDecoration:"none"},breadcrumbLinkSeparator:{fontSize:".75em",fontWeight:600,margin:3,paddingBottom:4,color:"rgb(46, 107, 77)"}};t.Z=e=>{let{title:t,path:n}=e;return l.createElement("div",{style:s.breadcrumbs},l.createElement(a.Link,{"aria-label":"Home",style:s.breadcrumbLink,to:"/"},"< ","Home"),l.createElement("div",{style:s.breadcrumbLinkSeparator},"/"),l.createElement(a.Link,{"aria-label":n,style:s.breadcrumbLink,to:"/"+n+"/"},n.charAt(0).toUpperCase()+n.slice(1)),l.createElement("div",{style:s.breadcrumbLinkSeparator},"/"),l.createElement(a.Link,{"aria-label":t,style:s.breadcrumbLinkHighlight,to:"./"},t))}},1766:function(e,t,n){var a=n(7294),l=n(8032);t.Z=e=>{let{image:t,alt:n,credit:s,link:o}=e;return a.createElement("div",{style:{textAlign:"right"}},a.createElement("div",{style:{position:"relative",maxHeight:"45vh",borderRadius:"5px",overflow:"hidden"}},a.createElement(l.G,{image:(0,l.c)(t),alt:n}),a.createElement("span",{style:{position:"absolute",top:"4%",right:"4%",color:"white",fontSize:"max(3vh, 2.3vw)",textAlign:"right",fontWeight:600,textShadow:"0px 1px 8px black",transformOrigin:"bottom",maxWidth:"80%",whiteSpace:"pre-wrap",wordBreak:"break-word",letterSpacing:".2rem"}},n)),a.createElement("p",{style:{margin:0,marginTop:2,fontSize:12}},"Image:"," ",a.createElement("a",{"aria-label":o,href:o},s)))}},5919:function(e,t,n){var a=n(7294),l=n(4854),s=n(789);const o={blogFooter:{margin:16,padding:16,display:"flex",flexDirection:"column",alignItems:"start",boxShadow:"0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)",borderRadius:10},blogFooterLink:{textDecoration:"none",padding:4},blogFooterImage:{height:"90%",paddingTop:10,marginRight:20},blogFooterImageWrap:{justifySelf:"center",height:200},blogFooterInfo:{marginLeft:16},blogFooterGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:16},blogFooterTags:{display:"flex",flexWrap:"wrap"},blogFooterTag:{margin:4,padding:4,backgroundColor:"#e0e0e0",borderRadius:4}};t.Z=()=>{const{0:e,1:t}=(0,a.useState)(""),{0:n,1:r}=(0,a.useState)(null),i=(0,l.useStaticQuery)("2486570436");(0,a.useEffect)((()=>{const e=window.location.href.split("/").filter((e=>e)).pop();t(e)}),[]),(0,a.useEffect)((()=>{const t=i.allMdx.nodes.find((t=>t.frontmatter.slug===e));r(t)}),[e,i.allMdx.nodes]);const{nodes:c}=i.allMdx;if(n&&n.frontmatter.tags){const t=c.filter((t=>t.frontmatter.slug!==e&&t.frontmatter.tags.some((e=>n.frontmatter.tags.includes(e))))),r=t[Math.floor((new Date).getMinutes()/10)%t.length]||c[0],i=n.frontmatter.tags.includes("music")?c.filter((t=>t.frontmatter.slug!==e&&t.frontmatter.slug!==r.frontmatter.slug&&!t.frontmatter.tags.includes("music"))):c.filter((t=>t.frontmatter.slug!==e&&t.frontmatter.slug!==r.frontmatter.slug&&t.frontmatter.tags.includes("music"))),p=i[Math.floor((new Date).getMinutes()/10)%i.length]||c[1];return a.createElement("div",{style:o.blogFooter},a.createElement("h3",null,a.createElement(l.Link,{to:"/blog/",style:o.blogFooterLink},"Check out other articles:")),a.createElement("h5",null,"Similar tags:"),a.createElement(s.Z,{node:r}),a.createElement("h5",null,"Maybe something else: "),a.createElement(s.Z,{node:p}))}return a.createElement("div",{style:o.blogFooter},a.createElement("h3",null,"Loading..."))}},5291:function(e,t,n){var a=n(7294),l=n(4854),s=n(7814),o=n(9417);t.Z=e=>{let{tocs:t}=e;const{items:n}=t||{items:[]},{0:r,1:i}=(0,a.useState)(!1),{0:c,1:p}=(0,a.useState)(!1),g={fontWeight:600},m={padding:"0 1.6rem"},h={color:"#35435d",textDecoration:"none"},d={backgroundColor:"rgb(46, 107, 77)",color:"#ffffff"},u={backgroundColor:"#35435d",color:"#ffffff"};return a.createElement(a.Fragment,null,a.createElement("button",{style:{fontSize:"1.1em",fontWeight:300,border:"none",borderLeft:"solid 5px lightgrey",borderRadius:"0 23px 23px 0",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0 1.5rem 0 1rem",margin:0,boxShadow:"5px 5px 95px rgba(183, 183, 183, 0.335) inset"},onClick:()=>{i(!r)}},"Table of Contents:",a.createElement(s.G,{style:{width:32,height:32},icon:r?o.mTx:o.ptq})),r&&a.createElement("div",{style:{margin:0,lineHeight:"1.75em"}},a.createElement("ol",{style:{padding:"8px 2.5rem 16px",borderLeft:"solid 5px lightgrey"}},null==n?void 0:n.map((e=>a.createElement("li",{key:e.title},a.createElement(l.Link,{key:e.title,style:{...h,...c===e.title?d:null},to:e.url,onMouseEnter:()=>{p(e.title)},onMouseLeave:()=>{p(!1)}},a.createElement("span",{style:g},e.title)),e.items?a.createElement("ul",{style:m},e.items.map((e=>a.createElement("li",{key:e.url},a.createElement(l.Link,{key:e.url,to:e.url,onMouseEnter:()=>{p(e.title)},onMouseLeave:()=>{p(!1)},style:{...h,...c===e.title?u:null}},e.title),e.items?a.createElement("ul",{style:m},e.items.map((e=>a.createElement("li",{key:e.url},a.createElement(l.Link,{key:e.url,to:e.url,onMouseEnter:()=>{p(e.title)},onMouseLeave:()=>{p(!1)},style:{...h,...c===e.title?d:null}},e.title))))):null)))):null))))))}},3306:function(e,t,n){var a=n(7294),l=n(4854);t.Z=e=>{let{tags:t}=e;const{0:n,1:s}=(0,a.useState)(!1),o={color:"#35435d",fontWeight:600,textDecoration:"none"},r={backgroundColor:"#35435d",color:"#ffffff"};return a.createElement("p",null,"Tags:"," ",t.map(((e,i)=>a.createElement("span",{key:e},a.createElement(l.Link,{key:e,to:"/tags/"+e.replace(/ /g,"-")+"/",style:{...o,...n===e?r:null},onMouseEnter:()=>{s(e)},onMouseLeave:()=>{s(!1)}},e),i===t.length-1?a.createElement(a.Fragment,null):a.createElement(a.Fragment,null,","," ")))))}},1151:function(e,t,n){n.d(t,{ah:function(){return s}});var a=n(7294);const l=a.createContext({});function s(e){const t=a.useContext(l);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}}}]);
//# sourceMappingURL=component---src-pages-blog-mdx-frontmatter-slug-js-content-file-path-users-nathanphennel-projects-code-enphnt-github-io-blog-seo-gatsby-index-mdx-a669af538f47f701ad49.js.map