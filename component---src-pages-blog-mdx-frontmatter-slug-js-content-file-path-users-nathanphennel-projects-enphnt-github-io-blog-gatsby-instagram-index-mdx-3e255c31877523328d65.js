"use strict";(self.webpackChunknathan_phennel_website=self.webpackChunknathan_phennel_website||[]).push([[10],{4306:function(e,n,a){a.r(n),a.d(n,{default:function(){return y}});var t=a(1151),s=a(7294);function o(e){const n=Object.assign({h1:"h1",a:"a",span:"span",p:"p",h2:"h2",ul:"ul",li:"li",h3:"h3",ol:"ol"},(0,t.ah)(),e.components);return s.createElement(s.Fragment,null,s.createElement(n.h1,{id:"gatsby--instagram",style:{position:"relative"}},"Gatsby & instagram",s.createElement(n.a,{href:"#gatsby--instagram","aria-label":"gatsby  instagram permalink",className:"anchor after"},s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",s.createElement(n.p,null,"Do you want your Gatsby site to display your Instagram posts with images, captions, likes, comments and hashtags?"),"\n",s.createElement(n.p,null,"In this blog post, I will show you how to add an Instagram feed to your Gatsby site using ",s.createElement(n.a,{href:"https://www.gatsbyjs.com/plugins/gatsby-source-instagram/"},"gatsby-source-instagram")," plugin."),"\n",s.createElement(n.h2,{id:"limitations-and-fyi",style:{position:"relative"}},"Limitations and FYI",s.createElement(n.a,{href:"#limitations-and-fyi","aria-label":"limitations and fyi permalink",className:"anchor after"},s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",s.createElement(n.p,null,"This plugin allows you to source data from Instagram using either built-in scraping for user posts, hashtag pages and user profile scraping or ",s.createElement(n.a,{href:"https://developers.facebook.com/docs/instagram-api/"},"Graph API"),"."),"\n",s.createElement(n.ul,null,"\n",s.createElement(n.li,null,"The plugin will refetch for nodes every time the develop server is restarted, which means lots of requests repeat unnecessarily. This may cause performance issues or rate limits by Instagram. ",s.createElement(n.a,{href:"https://www.npmjs.com/package/gatsby-source-instagram"},"Source")),"\n",s.createElement(n.li,null,"The ",s.createElement(n.a,{href:"https://www.gatsbyjs.com/plugins/gatsby-source-instagram/"},"public scraping")," method can only get the last 12 photos from an Instagram account or a hashtag page. It does not require an access token, but it may be blocked by Instagram if it detects too many requests from the same IP address."),"\n",s.createElement(n.li,null,"The ",s.createElement(n.a,{href:"https://www.gatsbyjs.com/plugins/@theowenyoung/gatsby-source-instagram/"},"Graph API")," method requires an access token and an instagram id. It can get more data than public scraping, such as likes, comments, hashtags, media type, etc. It also has a paginate parameter to control the limit of the api call and a maxPosts parameter to limit the maximum number of posts to store."),"\n",s.createElement(n.li,null,"The plugin will use public scraping as a fallback if the Graph API throws any exception and the username is provided."),"\n",s.createElement(n.li,null,"If many sites that are served from the same domain are using the Instagram APIs, it may trigger Instagram to enforce rate limits for the domain. This may affect the availability of the plugin for those sites."),"\n"),"\n",s.createElement(n.p,null,"So, this is not a super reliable plugin but we shall let's see how it performs."),"\n",s.createElement(n.h1,{id:"install-and-configure-the-plugin",style:{position:"relative"}},"Install and configure the plugin",s.createElement(n.a,{href:"#install-and-configure-the-plugin","aria-label":"install and configure the plugin permalink",className:"anchor after"},s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",s.createElement(n.p,null,"To install the plugin, run the following command in your terminal:"),"\n",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="sh"><pre class="language-sh"><code class="language-sh">  <span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">--save</span> gatsby-source-instagram</code></pre></div>'}}),"\n",s.createElement(n.p,null,"To configure the plugin, you need to provide your username, access token and instagram id as options in your gatsby-config.js file. You can also enable hashtags and pagination if you want. Here is an example of how to use the Graph API method:"),"\n",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="js"><pre class="language-js"><code class="language-js">\n  <span class="token comment">// In your gatsby-config.js</span>\n  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">gatsby-source-instagram</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>\n      <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">username</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>\n        <span class="token literal-property property">access_token</span><span class="token operator">:</span> <span class="token string">"a valid access token"</span><span class="token punctuation">,</span>\n        <span class="token literal-property property">instagram_id</span><span class="token operator">:</span> <span class="token string">"your instagram_business_account id"</span><span class="token punctuation">,</span>\n        <span class="token literal-property property">paginate</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>\n        <span class="token literal-property property">maxPosts</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>\n        <span class="token literal-property property">hashtags</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span>\n\n</code></pre></div>'}}),"\n",s.createElement(n.h2,{id:"getting-your-config-details",style:{position:"relative"}},"Getting your config details",s.createElement(n.a,{href:"#getting-your-config-details","aria-label":"getting your config details permalink",className:"anchor after"},s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",s.createElement(n.p,null,"I followed the current processes documented in the plugin's github. For reference, I followed these steps:"),"\n",s.createElement(n.h3,{id:"for-public-content-scraping",style:{position:"relative"}},"For public content scraping",s.createElement(n.a,{href:"#for-public-content-scraping","aria-label":"for public content scraping permalink",className:"anchor after"},s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",s.createElement(n.p,null,"If you intend to use the public scraping method then you need to pass the concerning username id.\nYou can determine it by taking the following steps:"),"\n",s.createElement(n.ol,null,"\n",s.createElement(n.li,null,"Open a browser and go to the Instagram page of the user – e.g. https://www.instagram.com/oasome.blog/"),"\n",s.createElement(n.li,null,"Right-click on the web page to open the right-click context menu and select Page Source / View page source / Show Page Source. Safari users, please make sure that the developer tools are enabled – see ",s.createElement(n.a,{href:"https://developer.apple.com/library/archive/documentation/NetworkingInternetWeb/Conceptual/Web_Inspector_Tutorial/EnableWebInspector/EnableWebInspector.html"},"Enabling Web Inspector - Apple Developer")),"\n",s.createElement(n.li,null,"Search for ",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">profilePage_</code>'}}),". The number that follows is the username id. If you view the page source of https://www.instagram.com/oasome.blog/, you will find ",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">profilePage_8556131572</code>'}}),". So, ",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">8556131572</code>'}})," is the username id of the username ",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">oasome.blog</code>'}}),"."),"\n"),"\n",s.createElement("br"),"\n",s.createElement(n.h3,{id:"for-graph-api",style:{position:"relative"}},"For Graph API",s.createElement(n.a,{href:"#for-graph-api","aria-label":"for graph api permalink",className:"anchor after"},s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",s.createElement(n.p,null,"If you intend to use Graph API for more reliability (note the plugin will fallback to public scrape if unsuccessful), there is some pain involved:"),"\n",s.createElement(n.ol,null,"\n",s.createElement(n.li,null,"Created a Facebook page (I know... :/)"),"\n",s.createElement(n.li,null,"Create an ",s.createElement(n.a,{href:"https://developers.facebook.com/apps/"},"app")," (",s.createElement(n.a,{href:"https://developers.facebook.com/docs/development/register"},"register as a Meta dev")," to do this)"),"\n",s.createElement(n.li,null,"Go to the ",s.createElement(n.a,{href:"https://developers.facebook.com/tools/explorer/"},"Graph API Explorer"),"\n",s.createElement(n.ol,null,"\n",s.createElement(n.li,null,"Select your Facebook app"),"\n",s.createElement(n.li,null,"Add the following permissions:","\n",s.createElement(n.ul,null,"\n",s.createElement(n.li,null,"pages_manage_ads,"),"\n",s.createElement(n.li,null,"pages_manage_metadata,"),"\n",s.createElement(n.li,null,"pages_read_engagement,"),"\n",s.createElement(n.li,null,"pages_read_user_content,"),"\n",s.createElement(n.li,null,"pages_show_list,"),"\n",s.createElement(n.li,null,"instagram_basic"),"\n"),"\n"),"\n",s.createElement(n.li,null,"Generate the token so you are prompted to associate the Page target."),"\n",s.createElement(n.li,null,"Select the Facebook page you created and allow access."),"\n",s.createElement(n.li,null,"Use the Graph API Explorer to make a GET request to ",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">me/accounts</code>'}})),"\n",s.createElement(n.li,null,"Copy the access_token in the response (we call this ",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">temporary_token</code>'}}),")"),"\n",s.createElement(n.li,null,"Click on the ",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">id</code>'}})," next to ",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">name</code>'}})," to change the explorer URL"),"\n",s.createElement(n.li,null,"Then append ",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">?fields=instagram_business_account&amp;access_token={access-token}</code>'}})," and do another GET request"),"\n",s.createElement(n.li,null,"Save your ",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">instagram_business_account.id</code>'}}),", this is your ",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">instagram_id</code>'}})),"\n"),"\n"),"\n",s.createElement(n.li,null,"Lastly, go to the ",s.createElement(n.a,{href:"https://developers.facebook.com/tools/debug/accesstoken/"},"Access Token Debugger"),":","\n",s.createElement(n.ol,null,"\n",s.createElement(n.li,null,'Paste your temporary_token and press "Debug"'),"\n",s.createElement(n.li,null,"You should see this token now expires in 3 months"),"\n",s.createElement(n.li,null,'Press "Extend Access Token" and press the new debug that appears next to the token'),"\n",s.createElement(n.li,null,"You should see this token now never expires but sometimes 3 months is the maximum and the cause is not clear"),"\n",s.createElement(n.li,null,"Copy this new token (we will call this ",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">access_token</code>'}}),")"),"\n"),"\n"),"\n"),"\n",s.createElement(n.h1,{id:"query-the-instagram-data",style:{position:"relative"}},"Query the Instagram data",s.createElement(n.a,{href:"#query-the-instagram-data","aria-label":"query the instagram data permalink",className:"anchor after"},s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",s.createElement(n.p,null,"Query the Instagram data using GraphQL. You can use the allInstaNode query to get all the posts from your Instagram account. You can access fields such as id, caption, likes, comments, localFile (for image processing) and hashtags. Here is an example of how to query the data:"),"\n",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="graphql"><pre class="language-graphql"><code class="language-graphql">\n<span class="token keyword">query</span> <span class="token punctuation">{</span>\n  <span class="token object">allInstaNode</span> <span class="token punctuation">{</span>\n    <span class="token object">edges</span> <span class="token punctuation">{</span>\n      <span class="token object">node</span> <span class="token punctuation">{</span>\n        <span class="token property">id</span>\n        <span class="token property">caption</span>\n        <span class="token property">likes</span>\n        <span class="token property">comments</span>\n        <span class="token object">localFile</span> <span class="token punctuation">{</span>\n          <span class="token object">childImageSharp</span> <span class="token punctuation">{</span>\n            <span class="token property-query">gatsbyImageData</span><span class="token punctuation">(</span>\n              <span class="token attr-name">layout</span><span class="token punctuation">:</span> <span class="token constant">CONSTRAINED</span><span class="token punctuation">,</span> \n              <span class="token attr-name">placeholder</span><span class="token punctuation">:</span> <span class="token constant">BLURRED</span>\n            <span class="token punctuation">)</span>\n          <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n        <span class="token property">hashtags</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n</code></pre></div>'}}),"\n",s.createElement(n.h1,{id:"create-a-page-component",style:{position:"relative"}},"Create a page component",s.createElement(n.a,{href:"#create-a-page-component","aria-label":"create a page component permalink",className:"anchor after"},s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",s.createElement(n.p,null,"Create a page component called instagram-feed.js that displays the Instagram data. You can use Gatsby Image to render the images with optimal performance and quality. You can also style the component with CSS or a UI framework of your choice. Here is an example of how to create the component:"),"\n",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="js"><pre class="language-js"><code class="language-js">\n<span class="token comment">// In src/pages/instagram-feed.js</span>\n<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> graphql <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"gatsby"</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> GatsbyImage <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"gatsby-plugin-image"</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">InstagramFeed</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> data <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"instagram-feed"</span><span class="token operator">></span>\n      <span class="token punctuation">{</span>data<span class="token punctuation">.</span>allInstaNode<span class="token punctuation">.</span>edges<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">edge</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n        <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"instagram-post"</span> key<span class="token operator">=</span><span class="token punctuation">{</span>edge<span class="token punctuation">.</span>node<span class="token punctuation">.</span>id<span class="token punctuation">}</span><span class="token operator">></span>\n          <span class="token operator">&lt;</span>GatsbyImage\n            image<span class="token operator">=</span><span class="token punctuation">{</span>edge<span class="token punctuation">.</span>node<span class="token punctuation">.</span>localFile<span class="token punctuation">.</span>childImageSharp<span class="token punctuation">.</span>gatsbyImageData<span class="token punctuation">}</span>\n            alt<span class="token operator">=</span><span class="token punctuation">{</span>edge<span class="token punctuation">.</span>node<span class="token punctuation">.</span>caption<span class="token punctuation">}</span>\n          <span class="token operator">/</span><span class="token operator">></span>\n          <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"instagram-info"</span><span class="token operator">></span>\n            <span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token punctuation">{</span>edge<span class="token punctuation">.</span>node<span class="token punctuation">.</span>caption<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>\n            <span class="token operator">&lt;</span>p<span class="token operator">></span>Likes<span class="token operator">:</span> <span class="token punctuation">{</span>edge<span class="token punctuation">.</span>node<span class="token punctuation">.</span>likes<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>\n            <span class="token operator">&lt;</span>p<span class="token operator">></span>Comments<span class="token operator">:</span> <span class="token punctuation">{</span>edge<span class="token punctuation">.</span>node<span class="token punctuation">.</span>comments<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>\n            <span class="token operator">&lt;</span>p<span class="token operator">></span>Hashtags<span class="token operator">:</span> <span class="token punctuation">{</span>edge<span class="token punctuation">.</span>node<span class="token punctuation">.</span>hashtags<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">" "</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>\n          <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n      <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">const</span> query <span class="token operator">=</span> graphql<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">\n  query {\n    allInstaNode {\n      edges {\n        node {\n          id\n          caption\n          likes\n          comments\n          localFile {\n            childImageSharp {\n              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)\n            }\n          }\n          hashtags\n        }\n      }\n    }\n  }\n</span><span class="token template-punctuation string">`</span></span>\n</code></pre></div>'}}),"\n",s.createElement(n.h1,{id:"add-the-component-to-your-site",style:{position:"relative"}},"Add the component to your site",s.createElement(n.a,{href:"#add-the-component-to-your-site","aria-label":"add the component to your site permalink",className:"anchor after"},s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",s.createElement(n.p,null,"Use the createPage API in gatsby-node.js to programmatically create a page for your Instagram feed. You can also pass the Instagram data as context to the component. Here is an example of how to do that:"),"\n",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="js"><pre class="language-js"><code class="language-js">\n<span class="token comment">// In gatsby-node.js</span>\nexports<span class="token punctuation">.</span><span class="token function-variable function">createPages</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> graphql<span class="token punctuation">,</span> actions <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">{</span> createPage <span class="token punctuation">}</span> <span class="token operator">=</span> actions\n\n  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">graphql</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">\n    query {\n      allInstaNode {\n        edges {\n          node {\n            id\n            caption\n            likes\n            comments\n            localFile {\n              childImageSharp {\n                gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)\n              }\n            }\n            hashtags\n          }\n        }\n      }\n    }\n  </span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>\n\n  <span class="token function">createPage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">"/instagram-feed"</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">component</span><span class="token operator">:</span> require<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">"./src/pages/instagram-feed.js"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">context</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">instagramData</span><span class="token operator">:</span> result<span class="token punctuation">.</span>data<span class="token punctuation">.</span>allInstaNode <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n</code></pre></div>'}}))}var l=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?s.createElement(n,e,s.createElement(o,e)):o(e)},p=a(8032),r=a(6050),c=a(9357),i=a(3306),u=a(5291),m=a(3247),g=a(5067),h=a(9838);const d="40vh",k=e=>{let{data:n,children:a}=e;const{mdx:{frontmatter:{title:t,tags:o,date:l,slug:k,hero_image:y,hero_image_alt:f,hero_image_credit_link:b,hero_image_credit_text:E},excerpt:v,tableOfContents:w}}=n,x=(0,p.c)(y);return s.createElement(r.Z,null,s.createElement("div",{style:{paddingTop:20}},s.createElement(g.Z,{title:t,path:"blog"}),x&&s.createElement("div",{style:{textAlign:"right"}},s.createElement("div",{style:{position:"relative",maxHeight:d}},s.createElement(p.G,{image:x,alt:f,style:{maxHeight:d,borderRadius:5,boxSizing:"border-box"}}),s.createElement("span",{style:{position:"absolute",top:"4%",right:"4%",color:"white",fontSize:"3vh",textAlign:"right",fontWeight:600,textShadow:"2px 2px 6px black",transformOrigin:"bottom",maxWidth:"80%",whiteSpace:"pre-wrap",letterSpacing:".2rem"}},f)),s.createElement("p",{style:{margin:0,fontSize:12}},"Photo:"," ",s.createElement("a",{"aria-label":b,href:b},E))),s.createElement("h1",null,t),s.createElement(i.Z,{tags:o}),s.createElement("h5",null,l),s.createElement("br"),s.createElement(u.Z,{tocs:w}),s.createElement(h.Z),s.createElement("div",null,a),s.createElement("br"),s.createElement(m.Z)),s.createElement(c.Z,{title:t,excerpt:v,slug:k,hero_image:y}))};function y(e){return s.createElement(k,e,s.createElement(l,e))}},789:function(e,n,a){var t=a(7294),s=a(4854),o=a(8032);const l=["lightgray","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgreen","lightpink","lightsalmon","lightseagreen","lightskyblue"];let p=0;n.Z=e=>{let{node:{id:n,frontmatter:{thumbnail:a,slug:r,title:c,date:i,tags:u},excerpt:m},path:g}=e;const h=(0,o.c)(a),d={article:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(9em, 1fr))",gridGap:"1em",maxWidth:"99%",padding:"1em 1em"},tag:{padding:4,margin:"4px",backgroundColor:"#e0e0e0",borderRadius:"4px"},blogFooterTags:{display:"flex",flexWrap:"wrap"},heading:{marginTop:0,fontSize:"1.6em",fontWeight:600,textDecorationLine:"underline",textDecorationStyle:"solid",textDecorationColor:l[1+p++%l.length],textDecorationThickness:1},thumbnailWrapper:{margin:"0.5em 0 0 0",justifySelf:"center"},info:{gridColumnEnd:"span 3"},hr:{color:l[p++%l.length],margin:0}};return t.createElement("div",null,t.createElement("hr",{style:d.hr}),t.createElement("article",{style:d.article,key:n},t.createElement("div",{style:d.thumbnailWrapper},t.createElement(s.Link,{id:"nohighlight","aria-label":r,key:r,to:"/"+g+"/"+r},t.createElement(o.G,{image:h,alt:"Thumbnail for "+c}))),t.createElement("div",{style:d.info},t.createElement(s.Link,{"aria-label":r,key:r,to:"/"+g+"/"+r,style:d.heading},c),t.createElement("h5",null,i),t.createElement("p",null,m),t.createElement("div",{style:d.blogFooterTags},u.map((e=>t.createElement(s.Link,{key:e,to:"/tags/"+e.replace(/ /g,"-")+"/",style:d.tag},e)))))))}},9838:function(e,n,a){var t=a(7294);const s=a(2788).default.button.withConfig({displayName:"back-to-top__BackToTopButton",componentId:"sc-izz6d7-0"})(["position:fixed;bottom:calc(12% - 30px);right:0;z-index:2;font-size:18px;border:none;outline:none;background-color:white !important;color:black;cursor:pointer;padding:0;width:60px;height:60px;border-radius:4px;box-shadow:0px 2px 4px rgba(0,0,0,0.2);white-space:nowrap;"]);n.Z=()=>{const{0:e,1:n}=(0,t.useState)(!1);(0,t.useEffect)((()=>{const e=()=>{window.pageYOffset>1e3?n(!0):n(!1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)}),[]);return e?t.createElement(s,{onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})}},t.createElement("span",null,"↑")):null}},5067:function(e,n,a){var t=a(4854),s=a(7294);const o={breadcrumbs:{display:"flex",width:"100%",alignItems:"baseline",fontFamily:"quicksand",margin:4},breadcrumbLink:{fontSize:"1em",paddingRight:2,whiteSpace:"nowrap"},breadcrumbLinkHighlight:{paddingRight:2,fontWeight:600},breadcrumbLinkSeparator:{fontSize:".75em",fontWeight:600,margin:3,paddingBottom:4,color:"rgb(46, 107, 77)"}};n.Z=e=>{let{title:n,path:a}=e;return s.createElement("div",{style:o.breadcrumbs},s.createElement(t.Link,{"aria-label":"Home",style:o.breadcrumbLink,to:"/"},"< ","Home"),s.createElement("div",{style:o.breadcrumbLinkSeparator},"/"),s.createElement(t.Link,{"aria-label":a,style:o.breadcrumbLink,to:"/"+a+"/"},a.charAt(0).toUpperCase()+a.slice(1)),s.createElement("div",{style:o.breadcrumbLinkSeparator},"/"),s.createElement(t.Link,{"aria-label":n,style:o.breadcrumbLinkHighlight,to:"./"},n))}},3247:function(e,n,a){a.d(n,{Z:function(){return p}});var t=a(4854),s=a(7294),o=a(789);var l=e=>{let{data:n,to:a}=e;const{0:l,1:p}=(0,s.useState)("");(0,s.useEffect)((()=>{const e=window.location.href.match(/([^/]+)\/?$/);p(""),p(e[e.length-1])}),[]);const r={blogFooter:{margin:16,padding:16,display:"flex",flexDirection:"column",alignItems:"start",boxShadow:"0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)",borderRadius:10},blogFooterLink:{textDecoration:"none",padding:4},blogFooterImage:{height:"90%",paddingTop:10,marginRight:20},blogFooterImageWrap:{justifySelf:"center",height:200},blogFooterInfo:{marginLeft:16},blogFooterGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:16},blogFooterTags:{display:"flex",flexWrap:"wrap"},blogFooterTag:{margin:4,padding:4,backgroundColor:"#e0e0e0",borderRadius:4}},{nodes:c}=n.allMdx,i=c.filter((e=>e.frontmatter.slug!==l)),u=i[Math.floor((new Date).getMinutes()/10)%i.length]||c[0];return s.createElement("div",{style:r.blogFooter},s.createElement("h3",null,s.createElement(t.Link,{to:a,style:r.blogFooterLink},"Check out other ","/blog/"===a?"articles":"code",":")),s.createElement(o.Z,{node:u,path:a.replace(/\//g,"")}))};var p=()=>{const e=(0,t.useStaticQuery)("448650272");return s.createElement(l,{data:e,to:"/blog/"})}},5291:function(e,n,a){var t=a(7294),s=a(4854),o=a(7814),l=a(9417);n.Z=e=>{let{tocs:n}=e;const{items:a}=n,{0:p,1:r}=(0,t.useState)(!1),{0:c,1:i}=(0,t.useState)(!1),u={padding:"0 1.6rem"},m={color:"#35435d",padding:3},g={backgroundColor:"rgb(46, 107, 77)",color:"#ffffff",fontWeight:400},h={backgroundColor:"#35435d",color:"#ffffff",fontWeight:400};return t.createElement(t.Fragment,null,t.createElement("button",{style:{fontSize:"1.1em",fontWeight:300,border:"none",borderLeft:"solid 5px lightgrey",borderRadius:"0 23px 23px 0",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0 1.5rem 0 1rem",margin:0,boxShadow:"5px 5px 95px rgba(183, 183, 183, 0.335) inset"},onClick:()=>{r(!p)}},"Table of Contents:",t.createElement(o.G,{style:{width:32,height:32},icon:p?l.mTx:l.ptq})),p&&t.createElement("div",{style:{margin:0,lineHeight:"1.4em"}},t.createElement("ol",{style:{padding:"4px 3rem 16px",borderLeft:"solid 5px lightgrey"}},a.map((e=>t.createElement("li",{key:e.title},t.createElement(s.Link,{key:e.title,style:{...m,...c===e.title?g:null},to:e.url,onMouseEnter:()=>{i(e.title)},onMouseLeave:()=>{i(!1)}},e.title),e.items?t.createElement("ul",{style:u},e.items.map((e=>t.createElement("li",{key:e.url},t.createElement(s.Link,{key:e.url,to:e.url,onMouseEnter:()=>{i(e.title)},onMouseLeave:()=>{i(!1)},style:{...m,...c===e.title?h:null}},e.title),e.items?t.createElement("ul",{style:u},e.items.map((e=>t.createElement("li",{key:e.url},t.createElement(s.Link,{key:e.url,to:e.url,onMouseEnter:()=>{i(e.title)},onMouseLeave:()=>{i(!1)},style:{...m,...c===e.title?g:null}},e.title))))):null)))):null))))))}},3306:function(e,n,a){var t=a(7294),s=a(4854);n.Z=e=>{let{tags:n}=e;const{0:a,1:o}=(0,t.useState)(!1),l={color:"#35435d",fontWeight:600},p={backgroundColor:"#35435d",color:"#ffffff"};return t.createElement("p",null,"Tags:"," ",n.map(((e,r)=>t.createElement("span",{key:e},t.createElement(s.Link,{key:e,to:"/tags/"+e.replace(/ /g,"-")+"/",style:{...l,...a===e?p:null},onMouseEnter:()=>{o(e)},onMouseLeave:()=>{o(!1)}},e),r===n.length-1?t.createElement(t.Fragment,null):t.createElement(t.Fragment,null,","," ")))))}},1151:function(e,n,a){a.d(n,{ah:function(){return o}});var t=a(7294);const s=t.createContext({});function o(e){const n=t.useContext(s);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}}}]);
//# sourceMappingURL=component---src-pages-blog-mdx-frontmatter-slug-js-content-file-path-users-nathanphennel-projects-enphnt-github-io-blog-gatsby-instagram-index-mdx-3e255c31877523328d65.js.map