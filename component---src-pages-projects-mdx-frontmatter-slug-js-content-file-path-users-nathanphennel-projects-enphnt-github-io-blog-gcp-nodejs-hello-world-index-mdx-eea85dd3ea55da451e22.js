"use strict";(self.webpackChunknathan_phennel_website=self.webpackChunknathan_phennel_website||[]).push([[598],{2202:function(e,t,n){var a=n(1151),l=n(7294),r=n(5292);function o(e){const t=Object.assign({p:"p",h2:"h2",ol:"ol",li:"li",span:"span",a:"a"},(0,a.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.p,null,"So, it's the first step in any new development environment: HELLO WORLD! 🙌"),"\n",l.createElement(t.p,null,"Deploying a node.js app on GCP standard environment is actually incredibly easy."),"\n",l.createElement(t.h2,null,"Prereq steps:"),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"Installed and initiallized ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">gcloud</code>'}})),"\n",l.createElement(t.li,null,"Successful login to gcloud"),"\n",l.createElement(t.li,null,"Billing is enabled on your gcloud account 🤑"),"\n",l.createElement(t.li,null,"Have a node.js app that runs :)"),"\n",l.createElement(t.li,null,"Enabled the ",l.createElement(t.a,{href:"https://console.cloud.google.com/flows/enableapi?apiid=cloudbuild.googleapis.com"},"Cloud Build API")),"\n"),"\n",l.createElement(t.h2,null,"Steps to Deploy:"),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Create the Project - via the terminal with"),"\n",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text">\ngcloud app create --project=[PROJECT_ID]\n\n</code></pre></div>'}}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Go to the node.js code directory or clone the google example:"),"\n",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text">\ngit clone https://github.com/GoogleCloudPlatform/nodejs-docs-samples\n\n</code></pre></div>'}}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Navigate to the Hello World app:"),"\n",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text">\ncd nodejs-docs-samples/appengine/hello-world/standard\n\n</code></pre></div>'}}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Install and Run the app locally:"),"\n",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text">\nnpm install &amp;&amp; npm start\n\n</code></pre></div>'}}),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"Deploy the app! - from the same root directory of the app, run:"),"\n",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text">\ngcloud app deploy\n\n</code></pre></div>'}}),"\n",l.createElement(t.p,null,"then follow the prompts to select region, etc.\n",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 848px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/9bf119e0d35708efb531f6a1ae7317cb/d52e5/gcloud-deploy.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 92%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAIAAADUsmlHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACJklEQVR42n1S74+iMBTky2XPRfyFAn3TlrbQAgoqusZd//8/7PI8N9kPx71MGiAZZvpmonqE6oETlcOu7Ldm2LlzbvrMHHJzzHWbS5dLl8k6g80K7AQjEyrL8l1UHolagUG4gcIFfkR9gj9Lt4cyDKkBBSkZRN8QABCJQIWjVAhphHZQjrQlXZGyJEtSJfGIH+ePidBCH6H2xMojhSv8Bf5C1RHugGqA1P+gvciiK+SpMLci3Kj9RPtA94XmTu0d4YbmE8qQmCJv3TZvU3HY+iuFGwKfL327J3eg0hPkFNlssjbNQ1odRXNDc0P4IH+Fv1J9ovr8X9tpuS76teg3/ibaL7RfbLW9o7nzc/fgmyszQV6rVVqvlliWXRE+2LYfyZ+pGjk2fyVdA5giy1XWrua7ZdmJ7iHbBys3d755fUI9Amp6YWu92PpFnCbKC45nINuhDGQa2JZs99zWVM6JWMR5vECigyhrkoak/obiV+1IGW6LMs8vmkT++lG00os4m8/WiaBCatg93MC3rU7keobt4Hpui+s5PNvCHmAaUhZRGhYLHf9exbttoUpebz1SNcB2nDBrWujqVdi/FrjFJQEULcskLmazTQwlpKZ6RHVGdSQTyO5ZSll2DkmiYLfiiZftt2X8K5m9Ld+lE8riVaafuxHTJVnbeSLfN9XcDuKZDYvbjvdsGuialacmSsN808Sbes71vCJcED6kP8PtUQ8wDWh6/gDv5nx+96JmaAAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="gcloud-deploy"\n        title=""\n        src="/static/9bf119e0d35708efb531f6a1ae7317cb/d52e5/gcloud-deploy.png"\n        srcset="/static/9bf119e0d35708efb531f6a1ae7317cb/3684f/gcloud-deploy.png 225w,\n/static/9bf119e0d35708efb531f6a1ae7317cb/fc2a6/gcloud-deploy.png 450w,\n/static/9bf119e0d35708efb531f6a1ae7317cb/d52e5/gcloud-deploy.png 848w"\n        sizes="(max-width: 848px) 100vw, 848px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}})),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,"View the app once it finished deploying:"),"\n",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text">\n  gcloud app browse\n  </code></pre></div>'}}),"\n"),"\n"),"\n",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 661px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/5e422e58bb8e2fe29d468b65951e56d6/0012b/gcloud-app-browse.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 82.66666666666667%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAIAAABSJhvpAAAACXBIWXMAAAsTAAALEwEAmpwYAAABoklEQVR42mOwdK21cavQt8p18GoIiJroE9brG97rHznBJ6zHI6jTwqlC3ypf3zJPD4wMrPINrQsMrPL1LLJsw/YyKCmoK8nJSYlLaqioW5hamBgamxqZmBmbmhqa6OvoyUnLSIiKCgsKiQmLiAkLC/ELCPDyiYuKi4vwm3rMYUhJLUxPy87NLcnNLcnOLiorqykvr6uoqCstrS4rq6mqamhsaKuoqKura6mtbS4urkpPzysuri4tKfOK38hw/+Hzjx/fv379+t+/f////4eQeMC/f//+/gWpKWy7xvDx80+IEBzAjUDmwhl///79A9Zc3HGD4ePnH//////79y+pNpd13WH4BLP5P3EArrmi5z7Dpy9kaq7qf0C+5tpJjxk+f/lFnubGaU8YPn8l0+bWmY/J19w57wnDF3I1T1j0lCzNYMXTlj9h+PqNTM3z1z1h+PLlx/////78+fMXBv78/fsbTKIhqCAY/P//d8WWhwyr1p1cuvLw4pVHFq86snjV0cWrji1edXzJqhNLVp3EQCcWrzq+eNWxRSuPrlh/avmGGwA9wVqBsti1nAAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="gcloud-app-browse"\n        title=""\n        src="/static/5e422e58bb8e2fe29d468b65951e56d6/0012b/gcloud-app-browse.png"\n        srcset="/static/5e422e58bb8e2fe29d468b65951e56d6/3684f/gcloud-app-browse.png 225w,\n/static/5e422e58bb8e2fe29d468b65951e56d6/fc2a6/gcloud-app-browse.png 450w,\n/static/5e422e58bb8e2fe29d468b65951e56d6/0012b/gcloud-app-browse.png 661w"\n        sizes="(max-width: 661px) 100vw, 661px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",l.createElement("br"),"\n",l.createElement("div",{className:r.JP},l.createElement(t.p,null,l.createElement("strong",null,"Note:")," The default location for a deployment is:"),l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text">\nhttps://PROJECT_ID.REGION_ID.r.appspot.com\n\n</code></pre></div>'}}),l.createElement(t.p,null,"So you can either navigate there in your browser or, alternatively, you can use:"),l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text">\ngcloud app browse\n\n</code></pre></div>'}}),l.createElement(t.p,null,"The ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">app browse</code>'}})," arguments will prompt the shell to trigger the browser and open the page open for you.")),"\n",l.createElement(t.p,null,"And you are done! Yes, it was actually that easy. Now, lets look into some additional features/capabilities of GCP + Node.js, like ",l.createElement(t.a,{href:"../gcp-datastore/"},"GCP Datastore"),"."))}t.Z=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?l.createElement(t,e,l.createElement(o,e)):o(e)}},8963:function(e,t,n){n.r(t),n.d(t,{Head:function(){return g},default:function(){return p}});var a=n(2202),l=n(7294),r=n(4854),o=n(8032),s=n(6050),c=n(9357),i=n(7268);const d=e=>{let{data:t,children:n}=e;const a=(0,o.c)(t.mdx.frontmatter.hero_image);return l.createElement("div",{style:{margin:12,paddingTop:40}},l.createElement(s.Z,null,l.createElement("div",{className:i.Kb},l.createElement(r.Link,{className:i.XG,to:"/"},"Home"),l.createElement("div",{className:i.I7},"»"),l.createElement(r.Link,{className:i.XG,to:"/projects"},"Projects"),l.createElement("div",{className:i.I7},"»"),l.createElement(r.Link,{className:i.XG,to:"./"},t.mdx.frontmatter.title)),a?l.createElement(l.Fragment,null,l.createElement(o.G,{image:a,alt:t.mdx.frontmatter.hero_image_alt,className:i.rP}),l.createElement("p",null,"Photo Credit:"," ",l.createElement("a",{href:t.mdx.frontmatter.hero_image_credit_link},t.mdx.frontmatter.hero_image_credit_text))):null,l.createElement("h1",null,t.mdx.frontmatter.title),l.createElement("h5",null,t.mdx.frontmatter.date),l.createElement("div",{className:i.kQ},n),l.createElement("br"),l.createElement(r.Link,{to:"/projects"},"Go back to the projects homepage")))},g=()=>l.createElement(c.Z,{title:"Super Cool Projects"});function p(e){return l.createElement(d,e,l.createElement(a.Z,e))}},7268:function(e,t,n){n.d(t,{$z:function(){return p},I7:function(){return o},KM:function(){return d},Kb:function(){return s},Q1:function(){return m},XG:function(){return l},Y2:function(){return a},kQ:function(){return c},rP:function(){return i},sx:function(){return r},v_:function(){return g}});var a="index-module--article--45d42",l="index-module--breadcrumbLink--6e770",r="index-module--breadcrumbLinkHighlight--f6fd2",o="index-module--breadcrumbLink-separator--cbc54",s="index-module--breadcrumbs--411be",c="index-module--content--136c6",i="index-module--hero--ef469",d="index-module--highlight-anchor--28dd6",g="index-module--post--e88a8",p="index-module--postList--15965",m="index-module--thumbnail--3cc31"},1151:function(e,t,n){n.d(t,{ah:function(){return r}});var a=n(7294);const l=a.createContext({});function r(e){const t=a.useContext(l);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}}}]);
//# sourceMappingURL=component---src-pages-projects-mdx-frontmatter-slug-js-content-file-path-users-nathanphennel-projects-enphnt-github-io-blog-gcp-nodejs-hello-world-index-mdx-eea85dd3ea55da451e22.js.map