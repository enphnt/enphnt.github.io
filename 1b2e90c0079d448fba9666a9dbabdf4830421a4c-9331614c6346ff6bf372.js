"use strict";(self.webpackChunknathan_phennel_website=self.webpackChunknathan_phennel_website||[]).push([[2358],{2202:function(e,t,a){var n=a(1151),l=a(7294),r=a(5292);function o(e){const t=Object.assign({p:"p",h2:"h2",a:"a",span:"span",ol:"ol",li:"li",h3:"h3"},(0,n.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.p,null,"So, it's the first step in any new development environment: HELLO WORLD! 🙌"),"\n",l.createElement(t.p,null,"Deploying a node.js app on GCP standard environment is actually incredibly easy."),"\n",l.createElement(t.h2,{id:"prereq-steps",style:{position:"relative"}},"Prereq steps",l.createElement(t.a,{href:"#prereq-steps","aria-label":"prereq steps permalink",className:"anchor after"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"Installed and initialized ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">gcloud</code>'}})),"\n",l.createElement(t.li,null,"Successful login to gcloud"),"\n",l.createElement(t.li,null,"Billing is enabled on your gcloud account 🤑"),"\n",l.createElement(t.li,null,"Have a node.js app that runs :)"),"\n",l.createElement(t.li,null,"Enabled the ",l.createElement(t.a,{href:"https://console.cloud.google.com/flows/enableapi?apiid=cloudbuild.googleapis.com"},"Cloud Build API")),"\n"),"\n",l.createElement(t.h2,{id:"steps-to-deploy",style:{position:"relative"}},"Steps to Deploy:",l.createElement(t.a,{href:"#steps-to-deploy","aria-label":"steps to deploy permalink",className:"anchor after"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",l.createElement(t.h3,{id:"create-the-project---via-the-terminal-with",style:{position:"relative"}},"Create the Project - via the terminal with",l.createElement(t.a,{href:"#create-the-project---via-the-terminal-with","aria-label":"create the project   via the terminal with permalink",className:"anchor after"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text">\ngcloud app create --project=[PROJECT_ID]\n\n</code></pre></div>'}}),"\n",l.createElement(t.h3,{id:"go-to-the-nodejs-code-directory-or-clone-the-google-example",style:{position:"relative"}},"Go to the node.js code directory or clone the Google example",l.createElement(t.a,{href:"#go-to-the-nodejs-code-directory-or-clone-the-google-example","aria-label":"go to the nodejs code directory or clone the google example permalink",className:"anchor after"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text">\ngit clone https://github.com/GoogleCloudPlatform/nodejs-docs-samples\n\n</code></pre></div>'}}),"\n",l.createElement(t.h3,{id:"navigate-to-the-hello-world-app",style:{position:"relative"}},"Navigate to the Hello World app",l.createElement(t.a,{href:"#navigate-to-the-hello-world-app","aria-label":"navigate to the hello world app permalink",className:"anchor after"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text">\ncd nodejs-docs-samples/appengine/hello-world/standard\n\n</code></pre></div>'}}),"\n",l.createElement(t.h3,{id:"install-and-run-the-app-locally",style:{position:"relative"}},"Install and Run the app locally",l.createElement(t.a,{href:"#install-and-run-the-app-locally","aria-label":"install and run the app locally permalink",className:"anchor after"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text">\nnpm install &amp;&amp; npm start\n\n</code></pre></div>'}}),"\n",l.createElement(t.h3,{id:"deploy-the-app---from-the-same-root-directory-of-the-app-run",style:{position:"relative"}},"Deploy the app! - from the same root directory of the app, run",l.createElement(t.a,{href:"#deploy-the-app---from-the-same-root-directory-of-the-app-run","aria-label":"deploy the app   from the same root directory of the app run permalink",className:"anchor after"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text">\ngcloud app deploy\n\n</code></pre></div>'}}),"\n",l.createElement(t.p,null,"then follow the prompts to select region, etc.\n",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 848px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/9bf119e0d35708efb531f6a1ae7317cb/d52e5/gcloud-deploy.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 92%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAIAAADUsmlHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACJklEQVR42n1S74+iMBTky2XPRfyFAn3TlrbQAgoqusZd//8/7PI8N9kPx71MGiAZZvpmonqE6oETlcOu7Ldm2LlzbvrMHHJzzHWbS5dLl8k6g80K7AQjEyrL8l1UHolagUG4gcIFfkR9gj9Lt4cyDKkBBSkZRN8QABCJQIWjVAhphHZQjrQlXZGyJEtSJfGIH+ePidBCH6H2xMojhSv8Bf5C1RHugGqA1P+gvciiK+SpMLci3Kj9RPtA94XmTu0d4YbmE8qQmCJv3TZvU3HY+iuFGwKfL327J3eg0hPkFNlssjbNQ1odRXNDc0P4IH+Fv1J9ovr8X9tpuS76teg3/ibaL7RfbLW9o7nzc/fgmyszQV6rVVqvlliWXRE+2LYfyZ+pGjk2fyVdA5giy1XWrua7ZdmJ7iHbBys3d755fUI9Amp6YWu92PpFnCbKC45nINuhDGQa2JZs99zWVM6JWMR5vECigyhrkoak/obiV+1IGW6LMs8vmkT++lG00os4m8/WiaBCatg93MC3rU7keobt4Hpui+s5PNvCHmAaUhZRGhYLHf9exbttoUpebz1SNcB2nDBrWujqVdi/FrjFJQEULcskLmazTQwlpKZ6RHVGdSQTyO5ZSll2DkmiYLfiiZftt2X8K5m9Ld+lE8riVaafuxHTJVnbeSLfN9XcDuKZDYvbjvdsGuialacmSsN808Sbes71vCJcED6kP8PtUQ8wDWh6/gDv5nx+96JmaAAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="gcloud-deploy"\n        title=""\n        src="/static/9bf119e0d35708efb531f6a1ae7317cb/d52e5/gcloud-deploy.png"\n        srcset="/static/9bf119e0d35708efb531f6a1ae7317cb/3684f/gcloud-deploy.png 225w,\n/static/9bf119e0d35708efb531f6a1ae7317cb/fc2a6/gcloud-deploy.png 450w,\n/static/9bf119e0d35708efb531f6a1ae7317cb/d52e5/gcloud-deploy.png 848w"\n        sizes="(max-width: 848px) 100vw, 848px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}})),"\n",l.createElement(t.h3,{id:"view-the-app-once-it-finished-deploying",style:{position:"relative"}},"View the app once it finished deploying",l.createElement(t.a,{href:"#view-the-app-once-it-finished-deploying","aria-label":"view the app once it finished deploying permalink",className:"anchor after"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text">\n  gcloud app browse\n  </code></pre></div>'}}),"\n",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 661px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/5e422e58bb8e2fe29d468b65951e56d6/0012b/gcloud-app-browse.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 82.66666666666667%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAIAAABSJhvpAAAACXBIWXMAAAsTAAALEwEAmpwYAAABoklEQVR42mOwdK21cavQt8p18GoIiJroE9brG97rHznBJ6zHI6jTwqlC3ypf3zJPD4wMrPINrQsMrPL1LLJsw/YyKCmoK8nJSYlLaqioW5hamBgamxqZmBmbmhqa6OvoyUnLSIiKCgsKiQmLiAkLC/ELCPDyiYuKi4vwm3rMYUhJLUxPy87NLcnNLcnOLiorqykvr6uoqCstrS4rq6mqamhsaKuoqKura6mtbS4urkpPzysuri4tKfOK38hw/+Hzjx/fv379+t+/f////4eQeMC/f//+/gWpKWy7xvDx80+IEBzAjUDmwhl///79A9Zc3HGD4ePnH//////79y+pNpd13WH4BLP5P3EArrmi5z7Dpy9kaq7qf0C+5tpJjxk+f/lFnubGaU8YPn8l0+bWmY/J19w57wnDF3I1T1j0lCzNYMXTlj9h+PqNTM3z1z1h+PLlx/////78+fMXBv78/fsbTKIhqCAY/P//d8WWhwyr1p1cuvLw4pVHFq86snjV0cWrji1edXzJqhNLVp3EQCcWrzq+eNWxRSuPrlh/avmGGwA9wVqBsti1nAAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="gcloud-app-browse"\n        title=""\n        src="/static/5e422e58bb8e2fe29d468b65951e56d6/0012b/gcloud-app-browse.png"\n        srcset="/static/5e422e58bb8e2fe29d468b65951e56d6/3684f/gcloud-app-browse.png 225w,\n/static/5e422e58bb8e2fe29d468b65951e56d6/fc2a6/gcloud-app-browse.png 450w,\n/static/5e422e58bb8e2fe29d468b65951e56d6/0012b/gcloud-app-browse.png 661w"\n        sizes="(max-width: 661px) 100vw, 661px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",l.createElement("br"),"\n",l.createElement("div",{className:r.JP},l.createElement(t.p,null,l.createElement("strong",null,"Note:")," The default location for a deployment is:"),l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text">\nhttps://PROJECT_ID.REGION_ID.r.appspot.com\n\n</code></pre></div>'}}),l.createElement(t.p,null,"So you can either navigate there in your browser or you can use:"),l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text">\ngcloud app browse\n\n</code></pre></div>'}}),l.createElement(t.p,null,"The ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">app browse</code>'}})," arguments will prompt the shell to trigger the browser and open the page open for you.")),"\n",l.createElement(t.p,null,"And you are done! Yes, it was actually that easy. Now, let's look into some additional features/capabilities of GCP + Node.js, like ",l.createElement(t.a,{href:"../gcp-datastore/"},"GCP Datastore"),"."))}t.Z=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?l.createElement(t,e,l.createElement(o,e)):o(e)}},789:function(e,t,a){var n=a(7294),l=a(4854),r=a(8032);const o=["lightgray","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgreen","lightpink","lightsalmon","lightseagreen","lightskyblue"];let i=0;t.Z=e=>{let{node:{id:t,frontmatter:{thumbnail:a,slug:s,title:c,date:g,tags:d},excerpt:p},path:h}=e;const m=(0,r.c)(a),u={article:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(9em, 1fr))",gridGap:"1em",maxWidth:"99%",padding:"1em 1em"},tag:{padding:4,margin:"4px",backgroundColor:"#e0e0e0",borderRadius:"4px"},blogFooterTags:{display:"flex",flexWrap:"wrap"},heading:{marginTop:0,fontSize:"1.6em",fontWeight:600,textDecorationLine:"underline",textDecorationStyle:"solid",textDecorationColor:o[1+i++%o.length],textDecorationThickness:1},thumbnailWrapper:{margin:"0.5em 0 0 0",justifySelf:"center"},info:{gridColumnEnd:"span 3"},hr:{color:o[i++%o.length],margin:0}};return n.createElement("div",null,n.createElement("hr",{style:u.hr}),n.createElement("article",{style:u.article,key:t},n.createElement("div",{style:u.thumbnailWrapper},n.createElement(l.Link,{id:"nohighlight","aria-label":s,key:s,to:"/"+h+"/"+s},n.createElement(r.G,{image:m,alt:"Thumbnail for "+c}))),n.createElement("div",{style:u.info},n.createElement(l.Link,{"aria-label":s,key:s,to:"/"+h+"/"+s,style:u.heading},c),n.createElement("h5",null,g),n.createElement("p",null,p),n.createElement("div",{style:u.blogFooterTags},d.map((e=>n.createElement(l.Link,{key:e,to:"/tags/"+e.replace(/ /g,"-")+"/",style:u.tag},e)))))))}},5067:function(e,t,a){var n=a(4854),l=a(7294);const r={breadcrumbs:{display:"flex",width:"100%",alignItems:"start",fontFamily:"quicksand",margin:4},breadcrumbLink:{fontSize:"1em",paddingRight:2,whiteSpace:"nowrap"},breadcrumbLinkHighlight:{paddingRight:2,fontWeight:600},breadcrumbLinkSeparator:{fontSize:".75em",fontWeight:600,margin:3,paddingBottom:4,color:"rgb(46, 107, 77)"}};t.Z=e=>{let{title:t,path:a}=e;return l.createElement("div",{style:r.breadcrumbs},l.createElement(n.Link,{"aria-label":"Home",style:r.breadcrumbLink,to:"/"},"< ","Home"),l.createElement("div",{style:r.breadcrumbLinkSeparator},"/"),l.createElement(n.Link,{"aria-label":a,style:r.breadcrumbLink,to:"/"+a+"/"},a.charAt(0).toUpperCase()+a.slice(1)),l.createElement("div",{style:r.breadcrumbLinkSeparator},"/"),l.createElement(n.Link,{"aria-label":t,style:r.breadcrumbLinkHighlight,to:"./"},t))}},5049:function(e,t,a){var n=a(7294),l=a(4854),r=a(789);t.Z=e=>{let{data:t,to:a}=e;const{0:o,1:i}=(0,n.useState)("");(0,n.useEffect)((()=>{const e=window.location.href.match(/([^/]+)\/?$/);i(""),i(e[e.length-1])}),[]);const s={blogFooter:{margin:16,padding:16,display:"flex",flexDirection:"column",alignItems:"start",boxShadow:"0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)",borderRadius:10},blogFooterLink:{textDecoration:"none",padding:4},blogFooterImage:{height:"90%",paddingTop:10,marginRight:20},blogFooterImageWrap:{justifySelf:"center",height:200},blogFooterInfo:{marginLeft:16},blogFooterGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:16},blogFooterTags:{display:"flex",flexWrap:"wrap"},blogFooterTag:{margin:4,padding:4,backgroundColor:"#e0e0e0",borderRadius:4}},{nodes:c}=t.allMdx,g=c.filter((e=>e.frontmatter.slug!==o)),d=g[Math.floor((new Date).getMinutes()/10)%g.length]||c[0];return n.createElement("div",{style:s.blogFooter},n.createElement("h3",null,n.createElement(l.Link,{to:a,style:s.blogFooterLink},"Check out other ","/blog/"===a?"articles":"projects",":")),n.createElement(r.Z,{node:d,path:a.replace(/\//g,"")}))}},9357:function(e,t,a){var n=a(7294),l=a(4854),r=a(8032);t.Z=e=>{let{title:t}=e;const a=(0,l.useStaticQuery)("2124327010"),o=(0,r.c)(a.mdx.frontmatter.hero_image);return console.log("data...",a),n.createElement(n.Fragment,null,n.createElement("html",{lang:"en"}),n.createElement("meta",{name:"description",content:a.site.siteMetadata.description}),n.createElement("meta",{name:"image",content:a.site.siteMetadata.image}),n.createElement("meta",{property:"og:image",content:o}),n.createElement("title",null,t.replace("/","")," ⊛ ",a.site.siteMetadata.title))}},5291:function(e,t,a){var n=a(7294),l=a(4854),r=a(7814),o=a(9417);t.Z=e=>{let{tocs:t}=e;const{items:a}=t,{0:i,1:s}=(0,n.useState)(!1),{0:c,1:g}=(0,n.useState)(!1),d={padding:"0 1.6rem"},p={color:"#35435d",padding:3},h={backgroundColor:"rgb(46, 107, 77)",color:"#ffffff",fontWeight:400},m={backgroundColor:"#35435d",color:"#ffffff",fontWeight:400};return n.createElement(n.Fragment,null,n.createElement("button",{style:{fontSize:"1.1em",fontWeight:300,border:"none",borderLeft:"solid 5px lightgrey",borderRadius:"0 23px 23px 0",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0 1.5rem 0 1rem",margin:0,boxShadow:"5px 5px 95px rgba(183, 183, 183, 0.335) inset"},onClick:()=>{s(!i)}},"Table of Contents:",n.createElement(r.G,{style:{width:32,height:32},icon:i?o.mTx:o.ptq})),i&&n.createElement("div",{style:{margin:0,lineHeight:"1.4em"}},n.createElement("ol",{style:{padding:"4px 3rem 16px",borderLeft:"solid 5px lightgrey"}},a.map((e=>n.createElement("li",{key:e.title},n.createElement(l.Link,{key:e.title,style:{...p,...c===e.title?h:null},to:e.url,onMouseEnter:()=>{g(e.title)},onMouseLeave:()=>{g(!1)}},e.title),e.items?n.createElement("ul",{style:d},e.items.map((e=>n.createElement("li",{key:e.url},n.createElement(l.Link,{key:e.url,to:e.url,onMouseEnter:()=>{g(e.title)},onMouseLeave:()=>{g(!1)},style:{...p,...c===e.title?m:null}},e.title),e.items?n.createElement("ul",{style:d},e.items.map((e=>n.createElement("li",{key:e.url},n.createElement(l.Link,{key:e.url,to:e.url,onMouseEnter:()=>{g(e.title)},onMouseLeave:()=>{g(!1)},style:{...p,...c===e.title?h:null}},e.title))))):null)))):null))))))}},3306:function(e,t,a){var n=a(7294),l=a(4854);t.Z=e=>{let{tags:t}=e;const{0:a,1:r}=(0,n.useState)(!1),o={color:"#35435d",fontWeight:600},i={backgroundColor:"#35435d",color:"#ffffff"};return n.createElement("p",null,"Tags:"," ",t.map(((e,s)=>n.createElement("span",{key:e},n.createElement(l.Link,{key:e,to:"/tags/"+e.replace(/ /g,"-")+"/",style:{...o,...a===e?i:null},onMouseEnter:()=>{r(e)},onMouseLeave:()=>{r(!1)}},e),s===t.length-1?n.createElement(n.Fragment,null):n.createElement(n.Fragment,null,","," ")))))}},1151:function(e,t,a){a.d(t,{ah:function(){return r}});var n=a(7294);const l=n.createContext({});function r(e){const t=n.useContext(l);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}}}]);
//# sourceMappingURL=1b2e90c0079d448fba9666a9dbabdf4830421a4c-9331614c6346ff6bf372.js.map