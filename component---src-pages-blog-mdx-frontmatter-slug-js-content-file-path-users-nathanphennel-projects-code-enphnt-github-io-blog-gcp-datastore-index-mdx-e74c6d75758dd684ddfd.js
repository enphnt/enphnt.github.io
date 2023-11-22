"use strict";(self.webpackChunknathan_phennel_website=self.webpackChunknathan_phennel_website||[]).push([[33],{1763:function(e,t,a){a.r(t),a.d(t,{default:function(){return b}});var n=a(1151),l=a(7294),r=a(5292);function o(e){const t=Object.assign({p:"p",h2:"h2",a:"a",span:"span",h3:"h3",ul:"ul",li:"li"},(0,n.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.p,null,"Google Cloud Platform honestly has too many features for me to keep up with. This feature called Datastore is quite useful for storage in creating highly scalable apps."),"\n",l.createElement(t.h2,{id:"what-is-it",style:{position:"relative"}},"What is it?",l.createElement(t.a,{href:"#what-is-it","aria-label":"what is it permalink",className:"anchor after"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",l.createElement(t.p,null,"It's a NoSQL-style database. It automatically handles things like ",l.createElement(t.a,{href:"https://en.wikipedia.org/wiki/Shard_(database_architecture)"},"sharding")," and replication and so it's highly available, durable and will automatically scale to handle the real-time load of an app. It offers a few ways of doing business like SQL-like querying, ",l.createElement(t.a,{href:"https://en.wikipedia.org/wiki/ACID"},"ACID")," (atomic, consistent, isolated, durable) transactions and indexes."),"\n",l.createElement("div",{className:r.JP},l.createElement(t.p,null,l.createElement("strong",null,"Note:")," Datastore is already on the way out! Soon all data stores will be automatically upgraded to Firestore, a faster more consistent solution.")),"\n",l.createElement(t.h2,{id:"how-to-use-it-a-simple-nodejs-example",style:{position:"relative"}},"How to use it: A simple node.js example",l.createElement(t.a,{href:"#how-to-use-it-a-simple-nodejs-example","aria-label":"how to use it a simple nodejs example permalink",className:"anchor after"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",l.createElement(t.h3,{id:"clone-the-example-app-and-cd-into-it",style:{position:"relative"}},"Clone the example app and 'cd' into it",l.createElement(t.a,{href:"#clone-the-example-app-and-cd-into-it","aria-label":"clone the example app and cd into it permalink",className:"anchor after"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text">\ngit clone https://github.com/GoogleCloudPlatform/nodejs-docs-samples\n\n</code></pre></div>'}}),"\n",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text">\ncd nodejs-docs-samples/appengine/datastore\n\n</code></pre></div>'}}),"\n",l.createElement("br"),"\n",l.createElement(t.h3,{id:"add-the-google-clouddatastore-dependency-to-the-packagejson",style:{position:"relative"}},"Add the '@google-cloud/datastore' dependency to the 'package.json'",l.createElement(t.a,{href:"#add-the-google-clouddatastore-dependency-to-the-packagejson","aria-label":"add the google clouddatastore dependency to the packagejson permalink",className:"anchor after"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="json"><pre class="language-json"><code class="language-json">\n      <span class="token property">"dependencies"</span><span class="token operator">:</span> \n        <span class="token property">"@google-cloud/datastore"</span><span class="token operator">:</span> <span class="token string">"^6.0.0"</span><span class="token punctuation">,</span>\n        <span class="token property">"express"</span><span class="token operator">:</span> <span class="token string">"^4.16.4"</span>\n    \n</code></pre></div>'}}),"\n",l.createElement("br"),"\n",l.createElement(t.h3,{id:"get-a-grip-on-the-app-code",style:{position:"relative"}},"Get a grip on the App code",l.createElement(t.a,{href:"#get-a-grip-on-the-app-code","aria-label":"get a grip on the app code permalink",className:"anchor after"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"This ",l.createElement(t.a,{href:"https://github.com/GoogleCloudPlatform/nodejs-docs-samples/blob/f04f6c62ca54fe07d6eadde92902dc2bfdb0a9fa/appengine/datastore/app.js"},"sample app code")," will log, retrieve, and display visitor IP addresses."),"\n",l.createElement(t.li,null,"Each log entry is a 2-field class that's given the type ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">visit</code>'}}),"."),"\n",l.createElement(t.li,null,"Log entries are saved to Datastore using the ",l.createElement(t.a,{href:"https://googleapis.dev/nodejs/datastore/latest/Datastore.html#save"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">save</code>'}})," command"),"."),"\n",l.createElement(t.li,null,"The 10 most recent visits are retrieved in descending order using the Dataset ",l.createElement(t.a,{href:"https://googleapis.dev/nodejs/datastore/latest/Datastore.html#runQuery"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">runQuery</code>'}})," command"),"."),"\n"),"\n",l.createElement("br"),"\n",l.createElement(t.h3,{id:"deploy-the-app",style:{position:"relative"}},"Deploy the App",l.createElement(t.a,{href:"#deploy-the-app","aria-label":"deploy the app permalink",className:"anchor after"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"I needed to copy the ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">app.yaml</code>'}})," files from the ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">hello-world</code>'}})," standard example into this project first... 🤷‍♂️ (no idea why its not included here by default)"),"\n",l.createElement(t.li,null,"In GCP console, add a project to use."),"\n",l.createElement(t.li,null,"set the current active project to use the new project:\n",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">gcloud config set project [project_id]</code>'}})),"\n",l.createElement(t.li,null,"run ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">gcloud app deploy</code>'}})),"\n"),"\n",l.createElement("br"),"\n",l.createElement(t.h3,{id:"browse-your-new-app-gcloud-app-browse",style:{position:"relative"}},"Browse your new app: 'gcloud app browse'",l.createElement(t.a,{href:"#browse-your-new-app-gcloud-app-browse","aria-label":"browse your new app gcloud app browse permalink",className:"anchor after"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 783px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/97eee65d91071d1be45d2c3fbc96c107/e51a6/gcloud-app-browse-datastore.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 60.88888888888888%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAIAAADtbgqsAAAACXBIWXMAAAsTAAALEwEAmpwYAAABbklEQVR42p2PS27bMBRFuYg6IiVaX1IiJVISqaevxaQ2MircNE0X0ElRwPvfQKEELoJ2Uhc4uLjvAHfw0OC+G/soq+On84/nl8vT8+XL18v56ed8+FbIB144LhwvHCvWrW+55sKxfC7rz0g1J8FFrawq26YGsBPYybajafq2Aa2MNYMsFMH7DY9ij2apUFI35iNa1pdpdPN0tGZu6kEpUBX0sKqqUwq06rWCquykNKU0WvWq6tpmpH6SpoBgPEM31XqwZh5619nFtNO9e4RumcaHcbjvYX2T0C3LfOzscjicAj+OE4tSvni7gOAEe9GV2LsL350RwfG1h1cTJikgLpyPQxpkt8B8HCYZoFysxNsHQRb46T+TERym21j+5zhjgES5jelN4yAjXsg4oEqvBId7ym74mTIfR3kBqKymuw+UkITgmODoNX8T/WU26ZNkt6OMtWhZTmkiilznXOVM5/wdTP9pXmWR6yyR0K2/APgialrwUGOWAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="gcloud-app-browse-datastore.png"\n        title=""\n        src="/static/97eee65d91071d1be45d2c3fbc96c107/e51a6/gcloud-app-browse-datastore.png"\n        srcset="/static/97eee65d91071d1be45d2c3fbc96c107/3684f/gcloud-app-browse-datastore.png 225w,\n/static/97eee65d91071d1be45d2c3fbc96c107/fc2a6/gcloud-app-browse-datastore.png 450w,\n/static/97eee65d91071d1be45d2c3fbc96c107/e51a6/gcloud-app-browse-datastore.png 783w"\n        sizes="(max-width: 783px) 100vw, 783px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",l.createElement("br"),"\n",l.createElement(t.h3,{id:"inspect-the-datastore-via-the-console",style:{position:"relative"}},"Inspect the Datastore via the console",l.createElement(t.a,{href:"#inspect-the-datastore-via-the-console","aria-label":"inspect the datastore via the console permalink",className:"anchor after"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Navigate to your project in GCP."),"\n",l.createElement(t.li,null,"Note the latest build status by going to the Cloud Build section of GCP."),"\n",l.createElement(t.li,null,"Check out the latest Datastore entries added:"),"\n"),"\n",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 900px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/2d58874a1394440fac210ae5d8f4808e/0940f/datastore-entities.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 66.22222222222223%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB1UlEQVR42o2Q3WoTQRTH50mKSbAhtWkbrJjYXnhRQR/DUqnR+FLeCzFNLnwABVEopRpRK9RsN6mbzczOfszOx545shsTxJv443dxzpn5c+CQ7e2D6nqjeffB/t6j/XsPm82D9ZuNSnmzUt4q3dgslwrL9crSUn1trVYp3arW7pONx68bzwaNp72d4+7GUXenPWi0B9XD3p3nJ61Ov/Wi3+r0m53Bbru/2+7fbp9sHfdqh9360au9Jy/Jmw+TjxfskyMvGX714P03PhzDu4vs1LFfxmY41t+n9uynOL3MPXOyc9ecX+nh2Lz9zMlo5INRaAERMqNnLE6lAS2MjBGzQlgUf1prM0SczgT54UR+IOMUhMJUZUki8kcAAJuBjQSEIgOLFgttLgAiouenZPIrTGIuhEBEWGCtnReYByz8i82MdsaMjFymVGqtRcQ4jl3XdRzH931Kqed5YRhGUeT7fpIkxhhdoJQGMBMvJu41FyLWWiOi1jpJEs55GIbGGCmlEEJKqZQyxuCCYhH6TJEZk4gWisF8/0rmv2ZMERqoZW//YmWYBoowni5j81OtBCBPUy4J48JaMCbD/2a+mUeKXDkupZTOaMACxoIg4EEQrjK/6eR6+hsVKKIm2SbAIQAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="datastore-entities.png"\n        title=""\n        src="/static/2d58874a1394440fac210ae5d8f4808e/1cfc2/datastore-entities.png"\n        srcset="/static/2d58874a1394440fac210ae5d8f4808e/3684f/datastore-entities.png 225w,\n/static/2d58874a1394440fac210ae5d8f4808e/fc2a6/datastore-entities.png 450w,\n/static/2d58874a1394440fac210ae5d8f4808e/1cfc2/datastore-entities.png 900w,\n/static/2d58874a1394440fac210ae5d8f4808e/0940f/datastore-entities.png 1154w"\n        sizes="(max-width: 900px) 100vw, 900px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}))}var s=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?l.createElement(t,e,l.createElement(o,e)):o(e)},i=a(6050),c=a(9357),d=a(3306),p=a(5291),g=a(5919),m=a(5067),h=a(9838),u=a(1766);const f=e=>{let{data:t,children:a}=e;const{mdx:{frontmatter:{title:n,tags:r,date:o,slug:s,hero_image:f,hero_image_alt:b,hero_image_credit_link:E,hero_image_credit_text:y},excerpt:v,tableOfContents:x}}=t;return l.createElement(i.Z,null,l.createElement("div",{style:{paddingTop:20}},l.createElement(m.Z,{title:n,path:"blog"}),f&&l.createElement(u.Z,{image:f,alt:b,credit:y,link:E}),l.createElement("h1",null,n),l.createElement(d.Z,{tags:r}),l.createElement("h5",null,o),l.createElement("br"),l.createElement(p.Z,{tocs:x}),l.createElement(h.Z),l.createElement("div",null,a),l.createElement("br"),l.createElement(g.Z)),l.createElement(c.Z,{title:n,excerpt:v,slug:s,hero_image:f}))};function b(e){return l.createElement(f,e,l.createElement(s,e))}},789:function(e,t,a){var n=a(7294),l=a(4854),r=a(8032);const o=["lightgray","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgreen","lightpink","lightsalmon","lightseagreen","lightskyblue"];let s=0;t.Z=e=>{let{node:{id:t,frontmatter:{thumbnail:a,slug:i,title:c,date:d,tags:p},excerpt:g}}=e;const m=(0,r.c)(a),h={article:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(9em, 1fr))",gridGap:"1em",maxWidth:"99%",padding:"1em 1em"},tag:{padding:4,margin:"4px",backgroundColor:"#e0e0e0",color:"inherit",borderRadius:"4px",textDecoration:"none"},blogFooterTags:{display:"flex",flexWrap:"wrap"},heading:{marginTop:0,fontSize:"1.6em",fontWeight:600,textDecorationLine:"underline",textDecorationStyle:"solid",textDecorationColor:o[1+s++%o.length],textDecorationThickness:1},thumbnailWrapper:{margin:"0.5em 0 0 0",justifySelf:"center"},info:{gridColumnEnd:"span 3"},hr:{color:o[s++%o.length],margin:0}};return n.createElement("div",null,n.createElement("hr",{style:h.hr}),n.createElement("article",{style:h.article,key:t},n.createElement("div",{style:h.thumbnailWrapper},n.createElement(l.Link,{id:"nohighlight","aria-label":i,key:i,to:"/blog/"+i+"/"},n.createElement(r.G,{image:m,alt:"Thumbnail for "+c}))),n.createElement("div",{style:h.info},n.createElement(l.Link,{"aria-label":i,key:i,to:"/blog/"+i+"/",style:h.heading},c),n.createElement("h5",null,d),n.createElement("p",null,g),n.createElement("div",{style:h.blogFooterTags},p.map((e=>n.createElement(l.Link,{key:e,to:"/tags/"+e.replace(/ /g,"-")+"/",style:h.tag},e)))))))}},9838:function(e,t,a){var n=a(7294);const l=a(2788).default.button.withConfig({displayName:"back-to-top__BackToTopButton",componentId:"sc-izz6d7-0"})(["position:fixed;bottom:calc(12% - 30px);right:0;z-index:2;font-size:18px;border:none;outline:none;background-color:white !important;color:black;cursor:pointer;padding:0;width:60px;height:60px;border-radius:4px;box-shadow:0px 2px 4px rgba(0,0,0,0.2);white-space:nowrap;"]);t.Z=()=>{const{0:e,1:t}=(0,n.useState)(!1);(0,n.useEffect)((()=>{const e=()=>{window.pageYOffset>1e3?t(!0):t(!1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)}),[]);return e?n.createElement(l,{onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})}},n.createElement("span",null,"↑")):null}},5067:function(e,t,a){var n=a(4854),l=a(7294);const r={breadcrumbs:{display:"flex",alignItems:"baseline",margin:4,fontSize:"max(.85vw, .9em)"},breadcrumbLink:{paddingRight:2,whiteSpace:"nowrap",textDecoration:"none"},breadcrumbLinkHighlight:{fontWeight:600,textDecoration:"none"},breadcrumbLinkSeparator:{fontSize:".75em",fontWeight:600,margin:3,paddingBottom:4,color:"rgb(46, 107, 77)"}};t.Z=e=>{let{title:t,path:a}=e;return l.createElement("div",{style:r.breadcrumbs},l.createElement(n.Link,{"aria-label":"Home",style:r.breadcrumbLink,to:"/"},"< ","Home"),l.createElement("div",{style:r.breadcrumbLinkSeparator},"/"),l.createElement(n.Link,{"aria-label":a,style:r.breadcrumbLink,to:"/"+a+"/"},a.charAt(0).toUpperCase()+a.slice(1)),l.createElement("div",{style:r.breadcrumbLinkSeparator},"/"),l.createElement(n.Link,{"aria-label":t,style:r.breadcrumbLinkHighlight,to:"./"},t))}},1766:function(e,t,a){var n=a(7294),l=a(8032);t.Z=e=>{let{image:t,alt:a,credit:r,link:o}=e;return n.createElement("div",{style:{textAlign:"right"}},n.createElement("div",{style:{position:"relative",maxHeight:"45vh",borderRadius:"5px",overflow:"hidden"}},n.createElement(l.G,{image:(0,l.c)(t),alt:a}),n.createElement("span",{style:{position:"absolute",top:"4%",right:"4%",color:"white",fontSize:"max(3vh, 2.3vw)",textAlign:"right",fontWeight:600,textShadow:"0px 1px 8px black",transformOrigin:"bottom",maxWidth:"80%",whiteSpace:"pre-wrap",wordBreak:"break-word",letterSpacing:".2rem"}},a)),n.createElement("p",{style:{margin:0,marginTop:2,fontSize:12}},"Image:"," ",n.createElement("a",{"aria-label":o,href:o},r)))}},5919:function(e,t,a){var n=a(7294),l=a(4854),r=a(789);const o={blogFooter:{margin:16,padding:16,display:"flex",flexDirection:"column",alignItems:"start",boxShadow:"0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)",borderRadius:10},blogFooterLink:{textDecoration:"none",padding:4},blogFooterImage:{height:"90%",paddingTop:10,marginRight:20},blogFooterImageWrap:{justifySelf:"center",height:200},blogFooterInfo:{marginLeft:16},blogFooterGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:16},blogFooterTags:{display:"flex",flexWrap:"wrap"},blogFooterTag:{margin:4,padding:4,backgroundColor:"#e0e0e0",borderRadius:4}};t.Z=()=>{const{0:e,1:t}=(0,n.useState)(""),{0:a,1:s}=(0,n.useState)(null),i=(0,l.useStaticQuery)("2486570436");(0,n.useEffect)((()=>{const e=window.location.href.split("/").filter((e=>e)).pop();t(e)}),[]),(0,n.useEffect)((()=>{const t=i.allMdx.nodes.find((t=>t.frontmatter.slug===e));s(t)}),[e,i.allMdx.nodes]);const{nodes:c}=i.allMdx;if(a&&a.frontmatter.tags){const t=c.filter((t=>t.frontmatter.slug!==e&&t.frontmatter.tags.some((e=>a.frontmatter.tags.includes(e))))),s=t[Math.floor((new Date).getMinutes()/10)%t.length]||c[0],i=a.frontmatter.tags.includes("music")?c.filter((t=>t.frontmatter.slug!==e&&t.frontmatter.slug!==s.frontmatter.slug&&!t.frontmatter.tags.includes("music"))):c.filter((t=>t.frontmatter.slug!==e&&t.frontmatter.slug!==s.frontmatter.slug&&t.frontmatter.tags.includes("music"))),d=i[Math.floor((new Date).getMinutes()/10)%i.length]||c[1];return n.createElement("div",{style:o.blogFooter},n.createElement("h3",null,n.createElement(l.Link,{to:"/blog/",style:o.blogFooterLink},"Check out other articles:")),n.createElement("h5",null,"Similar tags:"),n.createElement(r.Z,{node:s}),n.createElement("h5",null,"Maybe something else: "),n.createElement(r.Z,{node:d}))}return n.createElement("div",{style:o.blogFooter},n.createElement("h3",null,"Loading..."))}},5291:function(e,t,a){var n=a(7294),l=a(4854),r=a(7814),o=a(9417);t.Z=e=>{let{tocs:t}=e;const{items:a}=t||{items:[]},{0:s,1:i}=(0,n.useState)(!1),{0:c,1:d}=(0,n.useState)(!1),p={fontWeight:600},g={padding:"0 1.6rem"},m={color:"#35435d",textDecoration:"none"},h={backgroundColor:"rgb(46, 107, 77)",color:"#ffffff"},u={backgroundColor:"#35435d",color:"#ffffff"};return n.createElement(n.Fragment,null,n.createElement("button",{style:{fontSize:"1.1em",fontWeight:300,border:"none",borderLeft:"solid 5px lightgrey",borderRadius:"0 23px 23px 0",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0 1.5rem 0 1rem",margin:0,boxShadow:"5px 5px 95px rgba(183, 183, 183, 0.335) inset"},onClick:()=>{i(!s)}},"Table of Contents:",n.createElement(r.G,{style:{width:32,height:32},icon:s?o.mTx:o.ptq})),s&&n.createElement("div",{style:{margin:0,lineHeight:"1.75em"}},n.createElement("ol",{style:{padding:"8px 2.5rem 16px",borderLeft:"solid 5px lightgrey"}},null==a?void 0:a.map((e=>n.createElement("li",{key:e.title},n.createElement(l.Link,{key:e.title,style:{...m,...c===e.title?h:null},to:e.url,onMouseEnter:()=>{d(e.title)},onMouseLeave:()=>{d(!1)}},n.createElement("span",{style:p},e.title)),e.items?n.createElement("ul",{style:g},e.items.map((e=>n.createElement("li",{key:e.url},n.createElement(l.Link,{key:e.url,to:e.url,onMouseEnter:()=>{d(e.title)},onMouseLeave:()=>{d(!1)},style:{...m,...c===e.title?u:null}},e.title),e.items?n.createElement("ul",{style:g},e.items.map((e=>n.createElement("li",{key:e.url},n.createElement(l.Link,{key:e.url,to:e.url,onMouseEnter:()=>{d(e.title)},onMouseLeave:()=>{d(!1)},style:{...m,...c===e.title?h:null}},e.title))))):null)))):null))))))}},3306:function(e,t,a){var n=a(7294),l=a(4854);t.Z=e=>{let{tags:t}=e;const{0:a,1:r}=(0,n.useState)(!1),o={color:"#35435d",fontWeight:600,textDecoration:"none"},s={backgroundColor:"#35435d",color:"#ffffff"};return n.createElement("p",null,"Tags:"," ",t.map(((e,i)=>n.createElement("span",{key:e},n.createElement(l.Link,{key:e,to:"/tags/"+e.replace(/ /g,"-")+"/",style:{...o,...a===e?s:null},onMouseEnter:()=>{r(e)},onMouseLeave:()=>{r(!1)}},e),i===t.length-1?n.createElement(n.Fragment,null):n.createElement(n.Fragment,null,","," ")))))}},1151:function(e,t,a){a.d(t,{ah:function(){return r}});var n=a(7294);const l=n.createContext({});function r(e){const t=n.useContext(l);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}}}]);
//# sourceMappingURL=component---src-pages-blog-mdx-frontmatter-slug-js-content-file-path-users-nathanphennel-projects-code-enphnt-github-io-blog-gcp-datastore-index-mdx-e74c6d75758dd684ddfd.js.map