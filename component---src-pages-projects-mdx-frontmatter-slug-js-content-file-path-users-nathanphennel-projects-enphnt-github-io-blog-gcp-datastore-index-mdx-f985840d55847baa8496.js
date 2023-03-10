"use strict";(self.webpackChunknathan_phennel_website=self.webpackChunknathan_phennel_website||[]).push([[82],{5601:function(e,t,n){var a=n(1151),l=n(7294);function o(e){const t=Object.assign({p:"p",h4:"h4",a:"a",ol:"ol",li:"li",code:"code",ul:"ul",pre:"pre",span:"span"},(0,a.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.p,null,"Google Cloud Platform honestly has too many features for me to keep up with. This feature called Datastore is quite useful for storage in creating highly scalable apps."),"\n",l.createElement(t.h4,null,"What is it?"),"\n",l.createElement(t.p,null,"It's a NoSQL style database. It automatically handles things like ",l.createElement(t.a,{href:"https://en.wikipedia.org/wiki/Shard_(database_architecture)"},"sharding")," and replication and so its highly available, durable and will automatically scale to handle the realtime load of an app. It offers a few ways of doing business like SQL-like querying, ",l.createElement(t.a,{href:"https://en.wikipedia.org/wiki/ACID"},"ACID")," (atomic, consistent, isolated, durable) transactions, and indexes."),"\n",l.createElement("div",{class:"note"},l.createElement(t.p,null,l.createElement("strong",null,"Note:")," Datastore is already on the way out! Soon all datastores will be automatically upgraded to Firestore, a faster more consistent solution.")),"\n",l.createElement(t.h4,null,"How to use it: A simple node.js example"),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"Clone the example app and ",l.createElement(t.code,null,"cd")," into it:","\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,l.createElement(t.code,null,"git clone https://github.com/GoogleCloudPlatform/nodejs-docs-samples")),"\n",l.createElement(t.li,null,l.createElement(t.code,null,"cd nodejs-docs-samples/appengine/datastore")),"\n"),"\n"),"\n",l.createElement(t.li,null,"Add the ",l.createElement(t.code,null,"@google-cloud/datastore")," dependency to the ",l.createElement(t.code,null,"package.json")),"\n"),"\n",l.createElement(t.pre,null,l.createElement(t.code,null,'\n      "dependencies": \n        "@google-cloud/datastore": "^6.0.0",\n        "express": "^4.16.4"\n    \n')),"\n",l.createElement(t.ol,{start:"3"},"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Get a grip on the App code:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"This ",l.createElement(t.a,{href:"https://github.com/GoogleCloudPlatform/nodejs-docs-samples/blob/f04f6c62ca54fe07d6eadde92902dc2bfdb0a9fa/appengine/datastore/app.js"},"sample app code")," will log, retrieve, and display visitor IP addresses."),"\n",l.createElement(t.li,null,"Each log entry is a 2-field class that's given the type ",l.createElement(t.code,null,"visit"),"."),"\n",l.createElement(t.li,null,"Log entries are saved to Datastore using the ",l.createElement(t.a,{href:"https://googleapis.dev/nodejs/datastore/latest/Datastore.html#save"},l.createElement(t.code,null,"save")," command"),"."),"\n",l.createElement(t.li,null,"The 10 most recent visits are retrieved in descending order using the Dataset ",l.createElement(t.a,{href:"https://googleapis.dev/nodejs/datastore/latest/Datastore.html#runQuery"},l.createElement(t.code,null,"runQuery")," command"),"."),"\n"),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Deploy the App:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"I needed to copy the ",l.createElement(t.code,null,"app.yaml")," files from the ",l.createElement(t.code,null,"hello-world")," standard example into this project first... 🤷‍♂️ (no idea why its not included here by default)"),"\n",l.createElement(t.li,null,"In GCP console, add a project to use."),"\n",l.createElement(t.li,null,"set the current active project to use the new project:\n",l.createElement(t.code,null,"gcloud config set project [project_id]")),"\n",l.createElement(t.li,null,"run ",l.createElement(t.code,null,"gcloud app deploy")),"\n"),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Browse your new app: ",l.createElement(t.code,null,"gcloud app browse")),"\n",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 783px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/97eee65d91071d1be45d2c3fbc96c107/e51a6/gcloud-app-browse-datastore.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 60.88888888888888%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAIAAADtbgqsAAAACXBIWXMAAAsTAAALEwEAmpwYAAABbklEQVR42p2PS27bMBRFuYg6IiVaX1IiJVISqaevxaQ2MircNE0X0ElRwPvfQKEELoJ2Uhc4uLjvAHfw0OC+G/soq+On84/nl8vT8+XL18v56ed8+FbIB144LhwvHCvWrW+55sKxfC7rz0g1J8FFrawq26YGsBPYybajafq2Aa2MNYMsFMH7DY9ij2apUFI35iNa1pdpdPN0tGZu6kEpUBX0sKqqUwq06rWCquykNKU0WvWq6tpmpH6SpoBgPEM31XqwZh5619nFtNO9e4RumcaHcbjvYX2T0C3LfOzscjicAj+OE4tSvni7gOAEe9GV2LsL350RwfG1h1cTJikgLpyPQxpkt8B8HCYZoFysxNsHQRb46T+TERym21j+5zhjgES5jelN4yAjXsg4oEqvBId7ym74mTIfR3kBqKymuw+UkITgmODoNX8T/WU26ZNkt6OMtWhZTmkiilznXOVM5/wdTP9pXmWR6yyR0K2/APgialrwUGOWAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="gcloud-app-browse-datastore.png"\n        title=""\n        src="/static/97eee65d91071d1be45d2c3fbc96c107/e51a6/gcloud-app-browse-datastore.png"\n        srcset="/static/97eee65d91071d1be45d2c3fbc96c107/3684f/gcloud-app-browse-datastore.png 225w,\n/static/97eee65d91071d1be45d2c3fbc96c107/fc2a6/gcloud-app-browse-datastore.png 450w,\n/static/97eee65d91071d1be45d2c3fbc96c107/e51a6/gcloud-app-browse-datastore.png 783w"\n        sizes="(max-width: 783px) 100vw, 783px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Inspect the Datastore via the console:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Navigate to your project in GCP."),"\n",l.createElement(t.li,null,"Note the latest build status by going to the Cloud Build section of GCP."),"\n",l.createElement(t.li,null,"Check out the latest Datastore entries added:"),"\n"),"\n",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 900px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/2d58874a1394440fac210ae5d8f4808e/0940f/datastore-entities.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 66.22222222222223%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB1UlEQVR42o2Q3WoTQRTH50mKSbAhtWkbrJjYXnhRQR/DUqnR+FLeCzFNLnwABVEopRpRK9RsN6mbzczOfszOx545shsTxJv443dxzpn5c+CQ7e2D6nqjeffB/t6j/XsPm82D9ZuNSnmzUt4q3dgslwrL9crSUn1trVYp3arW7pONx68bzwaNp72d4+7GUXenPWi0B9XD3p3nJ61Ov/Wi3+r0m53Bbru/2+7fbp9sHfdqh9360au9Jy/Jmw+TjxfskyMvGX714P03PhzDu4vs1LFfxmY41t+n9uynOL3MPXOyc9ecX+nh2Lz9zMlo5INRaAERMqNnLE6lAS2MjBGzQlgUf1prM0SczgT54UR+IOMUhMJUZUki8kcAAJuBjQSEIgOLFgttLgAiouenZPIrTGIuhEBEWGCtnReYByz8i82MdsaMjFymVGqtRcQ4jl3XdRzH931Kqed5YRhGUeT7fpIkxhhdoJQGMBMvJu41FyLWWiOi1jpJEs55GIbGGCmlEEJKqZQyxuCCYhH6TJEZk4gWisF8/0rmv2ZMERqoZW//YmWYBoowni5j81OtBCBPUy4J48JaMCbD/2a+mUeKXDkupZTOaMACxoIg4EEQrjK/6eR6+hsVKKIm2SbAIQAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="datastore-entities.png"\n        title=""\n        src="/static/2d58874a1394440fac210ae5d8f4808e/1cfc2/datastore-entities.png"\n        srcset="/static/2d58874a1394440fac210ae5d8f4808e/3684f/datastore-entities.png 225w,\n/static/2d58874a1394440fac210ae5d8f4808e/fc2a6/datastore-entities.png 450w,\n/static/2d58874a1394440fac210ae5d8f4808e/1cfc2/datastore-entities.png 900w,\n/static/2d58874a1394440fac210ae5d8f4808e/0940f/datastore-entities.png 1154w"\n        sizes="(max-width: 900px) 100vw, 900px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n"),"\n"))}t.Z=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?l.createElement(t,e,l.createElement(o,e)):o(e)}},7543:function(e,t,n){n.r(t),n.d(t,{Head:function(){return c},default:function(){return d}});var a=n(5601),l=n(7294),o=n(8032),r=n(7144),s=n(9357);const i=e=>{let{data:t,children:n}=e;const a=(0,o.c)(t.mdx.frontmatter.hero_image);return l.createElement("div",{style:{margin:12}},l.createElement(r.Z,{pageTitle:t.mdx.frontmatter.title},l.createElement("a",{href:"/projects"}," ../Back to Projects"),l.createElement("p",null,t.mdx.frontmatter.date),a?l.createElement(l.Fragment,null,l.createElement(o.G,{image:a,alt:t.mdx.frontmatter.hero_image_alt}),l.createElement("p",null,"Photo Credit:"," ",l.createElement("a",{href:t.mdx.frontmatter.hero_image_credit_link},t.mdx.frontmatter.hero_image_credit_text))):null,n))},c=()=>l.createElement(s.Z,{title:"Super Cool Blog Posts"});function d(e){return l.createElement(i,e,l.createElement(a.Z,e))}},1151:function(e,t,n){n.d(t,{ah:function(){return o}});var a=n(7294);const l=a.createContext({});function o(e){const t=a.useContext(l);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}}}]);
//# sourceMappingURL=component---src-pages-projects-mdx-frontmatter-slug-js-content-file-path-users-nathanphennel-projects-enphnt-github-io-blog-gcp-datastore-index-mdx-f985840d55847baa8496.js.map