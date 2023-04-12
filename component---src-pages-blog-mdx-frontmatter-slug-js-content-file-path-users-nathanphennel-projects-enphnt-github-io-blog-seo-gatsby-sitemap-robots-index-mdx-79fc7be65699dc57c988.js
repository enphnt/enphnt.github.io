"use strict";(self.webpackChunknathan_phennel_website=self.webpackChunknathan_phennel_website||[]).push([[120],{8683:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var a=n(1151),s=n(7294);function o(e){const t=Object.assign({h2:"h2",a:"a",span:"span",p:"p",ul:"ul",li:"li",h3:"h3"},(0,a.ah)(),e.components);return s.createElement(s.Fragment,null,s.createElement(t.h2,{id:"assessing-your-current-situation",style:{position:"relative"}},"Assessing your current situation",s.createElement(t.a,{href:"#assessing-your-current-situation","aria-label":"assessing your current situation permalink",className:"anchor after"},s.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",s.createElement(t.p,null,"Before creating a sitemap and robots.txt for your Gatsby v5 blog, you may want to check if you already have them and how they look. You can do this by visiting your website's URL followed by ",s.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">/sitemap.xml</code>'}})," and ",s.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">/robots.txt</code>'}}),", respectively. For example, if your website is ",s.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">https://example.com</code>'}}),", you can check your sitemap at ",s.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">https://example.com/sitemap.xml</code>'}})," and your robots.txt at ",s.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">https://example.com/robots.txt</code>'}}),"."),"\n",s.createElement(t.p,null,"A sitemap is an XML file that lists all the pages on your website along with some metadata, such as when they were last modified and how often they change."),"\n",s.createElement(t.p,null,"The robots.txt is a plain text file that tells search engines which pages or directories they can or cannot crawl and index."),"\n",s.createElement(t.p,null,"If you don't have a sitemap or robots.txt, or if you want to improve them, you can use the following plugins to generate them automatically."),"\n",s.createElement(t.h2,{id:"gatsby-sitemap-plugin",style:{position:"relative"}},"Gatsby sitemap plugin",s.createElement(t.a,{href:"#gatsby-sitemap-plugin","aria-label":"gatsby sitemap plugin permalink",className:"anchor after"},s.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",s.createElement(t.p,null,"The ",s.createElement(t.a,{href:"https://www.gatsbyjs.com/docs/how-to/adding-common-features/creating-a-sitemap/"},"gatsby-plugin-sitemap")," plugin is the official plugin for creating sitemaps in Gatsby. To use it, start by installing it with the following command:"),"\n",s.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="sh"><pre class="language-sh"><code class="language-sh"><span class="token function">npm</span> <span class="token function">install</span> gatsby-plugin-sitemap</code></pre></div>'}}),"\n",s.createElement(t.p,null,"Then, you need to add it to your ",s.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">gatsby-config.js</code>'}})," file in the root folder of your project. You also need to specify the ",s.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">siteUrl</code>'}})," property in your ",s.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">siteMetadata</code>'}})," object, which is the base URL of your website. For example:"),"\n",s.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="js"><pre class="language-js"><code class="language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">siteMetadata</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">siteUrl</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://example.com</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">gatsby-plugin-sitemap</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span></code></pre></div>'}}),"\n",s.createElement(t.p,null,"The plugin will generate a sitemap file (or multiple files if your site has more than 50,000 URLs) in the ",s.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">public</code>'}})," folder when you run ",s.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">gatsby build</code>'}}),". By default, the sitemap URL is ",s.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">/sitemap/sitemap-index.xml</code>'}}),", but you can change it with the ",s.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">output</code>'}})," option. You can also customize other aspects of the sitemap, such as the priority, changefreq, and exclude properties. See the ",s.createElement(t.a,{href:"https://www.gatsbyjs.com/plugins/gatsby-plugin-sitemap/?=sitemap#options"},"plugin documentation")," for more details."),"\n",s.createElement(t.p,null,"Here's an example implementation:"),"\n",s.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="js"><pre class="language-js"><code class="language-js">\n  <span class="token keyword">const</span> <span class="token function-variable function">isCategory</span> <span class="token operator">=</span> <span class="token parameter">path</span> <span class="token operator">=></span> \n    path <span class="token operator">===</span> <span class="token string">"/tags/"</span> <span class="token operator">||</span> \n    path <span class="token operator">===</span> <span class="token string">"/blog/"</span> <span class="token operator">||</span> \n    path <span class="token operator">===</span> <span class="token string">"/code/"</span> <span class="token operator">||</span> \n    path <span class="token operator">===</span> <span class="token string">"/music/"</span><span class="token punctuation">;</span>\n\n  <span class="token punctuation">{</span>\n    <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token string">\'gatsby-plugin-sitemap\'</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token literal-property property">excludes</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">\'/tags/*\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token comment">// filterpages: true means the page is excluded</span>\n      <span class="token comment">//   only category and authentic project paths are canon</span>\n      <span class="token function-variable function">filterPages</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> path <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> \n        <span class="token operator">!</span><span class="token function">isCategory</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> \n        <span class="token operator">!</span>fs<span class="token punctuation">.</span><span class="token function">existsSync</span><span class="token punctuation">(</span>Path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> path<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      <span class="token function-variable function">serialize</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> path <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">{</span>\n          <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>path<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>\n          <span class="token literal-property property">changefreq</span><span class="token operator">:</span> <span class="token string">"daily"</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n        <span class="token comment">// mark homepage as higher priority</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>path <span class="token operator">===</span> <span class="token string">"/"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          <span class="token keyword">return</span> <span class="token punctuation">{</span>\n            <span class="token operator">...</span>result<span class="token punctuation">,</span>\n            <span class="token literal-property property">priority</span><span class="token operator">:</span> <span class="token number">0.8</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token comment">// rank higher if category path</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isCategory</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          <span class="token keyword">return</span> <span class="token punctuation">{</span>\n            <span class="token operator">...</span>result<span class="token punctuation">,</span>\n            <span class="token literal-property property">priority</span><span class="token operator">:</span> <span class="token number">0.7</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token comment">// uses filterPages to only include canonicals:</span>\n        <span class="token comment">//   path is considered canonical if real filepath exists in src</span>\n        <span class="token keyword">return</span> <span class="token punctuation">{</span>\n          <span class="token operator">...</span>result<span class="token punctuation">,</span>\n          <span class="token literal-property property">priority</span><span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n\n</code></pre></div>'}}),"\n",s.createElement(t.h2,{id:"gatsby-robotstxt-plugin",style:{position:"relative"}},"Gatsby robots.txt plugin",s.createElement(t.a,{href:"#gatsby-robotstxt-plugin","aria-label":"gatsby robotstxt plugin permalink",className:"anchor after"},s.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",s.createElement(t.p,null,"The ",s.createElement(t.a,{href:"https://www.gatsbyjs.com/plugins/gatsby-plugin-robots-txt/"},"gatsby-plugin-robots-txt")," plugin is a third-party plugin for creating robots.txt in Gatsby. To use it, you need to start by installing it:"),"\n",s.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="sh"><pre class="language-sh"><code class="language-sh"><span class="token function">npm</span> <span class="token function">install</span> gatsby-plugin-robots-txt</code></pre></div>'}}),"\n",s.createElement(t.p,null,"Then, you need to add it to your ",s.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">gatsby-config.js</code>'}})," file in the root folder of your project. You also need to provide some options to the plugin."),"\n",s.createElement(t.p,null,"The plugin will generate a robots.txt file in the ",s.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">public</code>'}})," folder when you run ",s.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">gatsby build</code>'}}),". By default, the robots.txt URL is ",s.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">/robots.txt</code>'}}),". You can also customize other aspects of the robots.txt, such as adding environment-specific rules or resolving conflicts. See the ",s.createElement(t.a,{href:"https://www.gatsbyjs.com/plugins/gatsby-plugin-robots-txt/?=robots#options"},"plugin documentation")," for more details."),"\n",s.createElement(t.h2,{id:"adding-to-your-site",style:{position:"relative"}},"Adding to your site",s.createElement(t.a,{href:"#adding-to-your-site","aria-label":"adding to your site permalink",className:"anchor after"},s.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",s.createElement(t.p,null,"After installing and configuring both plugins, you need to run the Gatsby ",s.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">build</code>'}})," script. This will create a production-ready version of your site in the ",s.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">public</code>'}})," folder, along with the sitemap and robots.txt files. You can then deploy your site using the ",s.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">deploy</code>'}})," script."),"\n",s.createElement(t.h2,{id:"verify-on-localhost",style:{position:"relative"}},"Verify on localhost",s.createElement(t.a,{href:"#verify-on-localhost","aria-label":"verify on localhost permalink",className:"anchor after"},s.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",s.createElement(t.p,null,"To verify that the gatsby plugins for sitemap and robots.txt are working as expected locally, you need to follow these steps:"),"\n",s.createElement(t.ul,null,"\n",s.createElement(t.li,null,"Run ",s.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">gatsby develop</code>'}})," in your terminal to start a local development server. You should see a message that says ",s.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">You can now view your site in the browser.</code>'}})," followed by a URL such as ",s.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">http://localhost:8000</code>'}}),"."),"\n",s.createElement(t.li,null,"Open a new tab in your browser and go to the URL of your local site followed by ",s.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">/sitemap.xml</code>'}}),". For example, if your local site is ",s.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">http://localhost:8000</code>'}}),", go to ",s.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">http://localhost:8000/sitemap.xml</code>'}}),". You should see an XML file that lists all the pages on your site along with some metadata."),"\n",s.createElement(t.li,null,"Open another tab in your browser and go to the URL of your local site followed by ",s.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">/robots.txt</code>'}}),". For example, if your local site is ",s.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">http://localhost:8000</code>'}}),", go to ",s.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">http://localhost:8000/robots.txt</code>'}}),". You should see a plain text file that tells web crawlers which pages or directories they can or cannot crawl and index. You should also see a line that points to your sitemap file, such as ",s.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">Sitemap: http://localhost:8000/sitemap.xml</code>'}}),"."),"\n"),"\n",s.createElement(t.h2,{id:"verify-live-site",style:{position:"relative"}},"Verify live site",s.createElement(t.a,{href:"#verify-live-site","aria-label":"verify live site permalink",className:"anchor after"},s.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",s.createElement(t.p,null,"In addition to checking the file now exists on your live site, as we did on ",s.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">localhost</code>'}}),", you can go further and look into how Google is handling things."),"\n",s.createElement(t.p,null,"Verify your site with ",s.createElement(t.a,{href:"https://search.google.com"},"Google Search Console")," by starting ",s.createElement(t.a,{href:"https://support.google.com/webmasters/topic/9455938?hl=en&ref_topic=4558844"},"here"),". After verifying your site, you can check the following things in Search Console related to robots.txt and sitemaps:"),"\n",s.createElement(t.ul,null,"\n",s.createElement(t.li,null,"Check if Google has discovered and indexed your sitemap in the Sitemaps report. You can also see the number of URLs submitted and indexed, and any errors or warnings that Google encountered when processing your sitemap."),"\n",s.createElement(t.li,null,"See if Google has encountered any issues when crawling or indexing your site in the Coverage report. You can also see the status of each URL on your site, such as whether it's valid, excluded, or has errors or warnings."),"\n",s.createElement(t.li,null,"Determine if Google has detected any manual actions or security issues on your site in the Manual Actions and Security Issues reports. These can affect how your site appears in search results and may require you to take action to fix them."),"\n",s.createElement(t.li,null,"Review how your site performs in Google Search in the Performance report. You can see metrics such as impressions, clicks, click-through rate, and average position for your site's pages and queries. You can also filter and compare data by various dimensions, such as device, country, page, or search appearance."),"\n"),"\n",s.createElement(t.p,null,"Next, let's look at each of the new files."),"\n",s.createElement(t.h3,{id:"verify-live-sitemap",style:{position:"relative"}},"Verify live sitemap",s.createElement(t.a,{href:"#verify-live-sitemap","aria-label":"verify live sitemap permalink",className:"anchor after"},s.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",s.createElement(t.p,null,"Submit your sitemap to Google using the Sitemaps report in Search Console. You can also use the Search Console API or the ping tool to submit your sitemap. See ",s.createElement(t.a,{href:"https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap"},"this guide")," for more details."),"\n",s.createElement(t.h3,{id:"verify-live-robotstxt",style:{position:"relative"}},"Verify live robots.txt",s.createElement(t.a,{href:"#verify-live-robotstxt","aria-label":"verify live robotstxt permalink",className:"anchor after"},s.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",s.createElement(t.p,null,"Test your robots.txt file with the robots.txt Tester tool in Search Console. You can also use the URL Inspection tool to see how Googlebot crawls a specific URL on your site. See ",s.createElement(t.a,{href:"https://support.google.com/webmasters/answer/6062598?hl=en"},"this help page")," for more information."))}var l=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?s.createElement(t,e,s.createElement(o,e)):o(e)},r=n(6050),i=n(9357),p=n(3306),c=n(5291),u=n(3247),g=n(5067),h=n(9838),m=n(1766);const d=e=>{let{data:t,children:n}=e;const{mdx:{frontmatter:{title:a,tags:o,date:l,slug:d,hero_image:y,hero_image_alt:f,hero_image_credit_link:k,hero_image_credit_text:b},excerpt:x,tableOfContents:E}}=t;return s.createElement(r.Z,null,s.createElement("div",{style:{paddingTop:20}},s.createElement(g.Z,{title:a,path:"blog"}),y&&s.createElement(m.Z,{image:y,alt:f,maxHeight:"40vh",credit:b,link:k}),s.createElement("h1",null,a),s.createElement(p.Z,{tags:o}),s.createElement("h5",null,l),s.createElement("br"),s.createElement(c.Z,{tocs:E}),s.createElement(h.Z),s.createElement("div",null,n),s.createElement("br"),s.createElement(u.Z)),s.createElement(i.Z,{title:a,excerpt:x,slug:d,hero_image:y}))};function y(e){return s.createElement(d,e,s.createElement(l,e))}},789:function(e,t,n){var a=n(7294),s=n(4854),o=n(8032);const l=["lightgray","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgreen","lightpink","lightsalmon","lightseagreen","lightskyblue"];let r=0;t.Z=e=>{let{node:{id:t,frontmatter:{thumbnail:n,slug:i,title:p,date:c,tags:u},excerpt:g},path:h}=e;const m=(0,o.c)(n),d={article:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(9em, 1fr))",gridGap:"1em",maxWidth:"99%",padding:"1em 1em"},tag:{padding:4,margin:"4px",backgroundColor:"#e0e0e0",borderRadius:"4px"},blogFooterTags:{display:"flex",flexWrap:"wrap"},heading:{marginTop:0,fontSize:"1.6em",fontWeight:600,textDecorationLine:"underline",textDecorationStyle:"solid",textDecorationColor:l[1+r++%l.length],textDecorationThickness:1},thumbnailWrapper:{margin:"0.5em 0 0 0",justifySelf:"center"},info:{gridColumnEnd:"span 3"},hr:{color:l[r++%l.length],margin:0}};return a.createElement("div",null,a.createElement("hr",{style:d.hr}),a.createElement("article",{style:d.article,key:t},a.createElement("div",{style:d.thumbnailWrapper},a.createElement(s.Link,{id:"nohighlight","aria-label":i,key:i,to:"/"+h+"/"+i},a.createElement(o.G,{image:m,alt:"Thumbnail for "+p}))),a.createElement("div",{style:d.info},a.createElement(s.Link,{"aria-label":i,key:i,to:"/"+h+"/"+i,style:d.heading},p),a.createElement("h5",null,c),a.createElement("p",null,g),a.createElement("div",{style:d.blogFooterTags},u.map((e=>a.createElement(s.Link,{key:e,to:"/tags/"+e.replace(/ /g,"-")+"/",style:d.tag},e)))))))}},9838:function(e,t,n){var a=n(7294);const s=n(2788).default.button.withConfig({displayName:"back-to-top__BackToTopButton",componentId:"sc-izz6d7-0"})(["position:fixed;bottom:calc(12% - 30px);right:0;z-index:2;font-size:18px;border:none;outline:none;background-color:white !important;color:black;cursor:pointer;padding:0;width:60px;height:60px;border-radius:4px;box-shadow:0px 2px 4px rgba(0,0,0,0.2);white-space:nowrap;"]);t.Z=()=>{const{0:e,1:t}=(0,a.useState)(!1);(0,a.useEffect)((()=>{const e=()=>{window.pageYOffset>1e3?t(!0):t(!1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)}),[]);return e?a.createElement(s,{onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})}},a.createElement("span",null,"↑")):null}},5067:function(e,t,n){var a=n(4854),s=n(7294);const o={breadcrumbs:{display:"flex",alignItems:"baseline",margin:4,fontSize:"max(.85vw, .9em)"},breadcrumbLink:{paddingRight:2,whiteSpace:"nowrap",textDecoration:"none"},breadcrumbLinkHighlight:{fontWeight:600,textDecoration:"none"},breadcrumbLinkSeparator:{fontSize:".75em",fontWeight:600,margin:3,paddingBottom:4,color:"rgb(46, 107, 77)"}};t.Z=e=>{let{title:t,path:n}=e;return s.createElement("div",{style:o.breadcrumbs},s.createElement(a.Link,{"aria-label":"Home",style:o.breadcrumbLink,to:"/"},"< ","Home"),s.createElement("div",{style:o.breadcrumbLinkSeparator},"/"),s.createElement(a.Link,{"aria-label":n,style:o.breadcrumbLink,to:"/"+n+"/"},n.charAt(0).toUpperCase()+n.slice(1)),s.createElement("div",{style:o.breadcrumbLinkSeparator},"/"),s.createElement(a.Link,{"aria-label":t,style:o.breadcrumbLinkHighlight,to:"./"},t))}},1766:function(e,t,n){var a=n(7294),s=n(8032);t.Z=e=>{let{image:t,alt:n,maxHeight:o,credit:l,link:r}=e;return a.createElement("div",{style:{textAlign:"right"}},a.createElement("div",{style:{position:"relative",maxHeight:o}},a.createElement(s.G,{image:(0,s.c)(t),alt:n,style:{maxHeight:o,borderRadius:5,boxSizing:"border-box"}}),a.createElement("span",{style:{position:"absolute",top:"4%",right:"4%",color:"white",fontSize:"max(3vh, 2.2vw)",textAlign:"right",fontWeight:600,textShadow:"2px 2px 6px black",transformOrigin:"bottom",maxWidth:"80%",whiteSpace:"pre-wrap",letterSpacing:".2rem"}},n)),a.createElement("p",{style:{margin:0,fontSize:12}},"Photo:"," ",a.createElement("a",{"aria-label":r,href:r},l)))}},3247:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(4854),s=n(7294),o=n(789);var l=e=>{let{data:t,to:n}=e;const{0:l,1:r}=(0,s.useState)("");(0,s.useEffect)((()=>{const e=window.location.href.match(/([^/]+)\/?$/);r(""),r(e[e.length-1])}),[]);const i={blogFooter:{margin:16,padding:16,display:"flex",flexDirection:"column",alignItems:"start",boxShadow:"0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)",borderRadius:10},blogFooterLink:{textDecoration:"none",padding:4},blogFooterImage:{height:"90%",paddingTop:10,marginRight:20},blogFooterImageWrap:{justifySelf:"center",height:200},blogFooterInfo:{marginLeft:16},blogFooterGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:16},blogFooterTags:{display:"flex",flexWrap:"wrap"},blogFooterTag:{margin:4,padding:4,backgroundColor:"#e0e0e0",borderRadius:4}},{nodes:p}=t.allMdx,c=p.filter((e=>e.frontmatter.slug!==l)),u=c[Math.floor((new Date).getMinutes()/10)%c.length]||p[0];return s.createElement("div",{style:i.blogFooter},s.createElement("h3",null,s.createElement(a.Link,{to:n,style:i.blogFooterLink},"Check out other ","/blog/"===n?"articles":"code",":")),s.createElement(o.Z,{node:u,path:n.replace(/\//g,"")}))};var r=()=>{const e=(0,a.useStaticQuery)("448650272");return s.createElement(l,{data:e,to:"/blog/"})}},5291:function(e,t,n){var a=n(7294),s=n(4854),o=n(7814),l=n(9417);t.Z=e=>{let{tocs:t}=e;const{items:n}=t,{0:r,1:i}=(0,a.useState)(!1),{0:p,1:c}=(0,a.useState)(!1),u={fontWeight:600},g={padding:"0 1.6rem"},h={color:"#35435d",textDecoration:"none"},m={backgroundColor:"rgb(46, 107, 77)",color:"#ffffff"},d={backgroundColor:"#35435d",color:"#ffffff"};return a.createElement(a.Fragment,null,a.createElement("button",{style:{fontSize:"1.1em",fontWeight:300,border:"none",borderLeft:"solid 5px lightgrey",borderRadius:"0 23px 23px 0",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0 1.5rem 0 1rem",margin:0,boxShadow:"5px 5px 95px rgba(183, 183, 183, 0.335) inset"},onClick:()=>{i(!r)}},"Table of Contents:",a.createElement(o.G,{style:{width:32,height:32},icon:r?l.mTx:l.ptq})),r&&a.createElement("div",{style:{margin:0,lineHeight:"1.75em"}},a.createElement("ol",{style:{padding:"8px 2.5rem 16px",borderLeft:"solid 5px lightgrey"}},n.map((e=>a.createElement("li",{key:e.title},a.createElement(s.Link,{key:e.title,style:{...h,...p===e.title?m:null},to:e.url,onMouseEnter:()=>{c(e.title)},onMouseLeave:()=>{c(!1)}},a.createElement("span",{style:u},e.title)),e.items?a.createElement("ul",{style:g},e.items.map((e=>a.createElement("li",{key:e.url},a.createElement(s.Link,{key:e.url,to:e.url,onMouseEnter:()=>{c(e.title)},onMouseLeave:()=>{c(!1)},style:{...h,...p===e.title?d:null}},e.title),e.items?a.createElement("ul",{style:g},e.items.map((e=>a.createElement("li",{key:e.url},a.createElement(s.Link,{key:e.url,to:e.url,onMouseEnter:()=>{c(e.title)},onMouseLeave:()=>{c(!1)},style:{...h,...p===e.title?m:null}},e.title))))):null)))):null))))))}},3306:function(e,t,n){var a=n(7294),s=n(4854);t.Z=e=>{let{tags:t}=e;const{0:n,1:o}=(0,a.useState)(!1),l={color:"#35435d",fontWeight:600},r={backgroundColor:"#35435d",color:"#ffffff"};return a.createElement("p",null,"Tags:"," ",t.map(((e,i)=>a.createElement("span",{key:e},a.createElement(s.Link,{key:e,to:"/tags/"+e.replace(/ /g,"-")+"/",style:{...l,...n===e?r:null},onMouseEnter:()=>{o(e)},onMouseLeave:()=>{o(!1)}},e),i===t.length-1?a.createElement(a.Fragment,null):a.createElement(a.Fragment,null,","," ")))))}},1151:function(e,t,n){n.d(t,{ah:function(){return o}});var a=n(7294);const s=a.createContext({});function o(e){const t=a.useContext(s);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}}}]);
//# sourceMappingURL=component---src-pages-blog-mdx-frontmatter-slug-js-content-file-path-users-nathanphennel-projects-enphnt-github-io-blog-seo-gatsby-sitemap-robots-index-mdx-79fc7be65699dc57c988.js.map