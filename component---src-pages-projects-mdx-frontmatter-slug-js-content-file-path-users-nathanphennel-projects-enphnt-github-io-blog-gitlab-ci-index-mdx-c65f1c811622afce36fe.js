"use strict";(self.webpackChunknathan_phennel_website=self.webpackChunknathan_phennel_website||[]).push([[29],{2083:function(e,t,n){var l=n(1151),a=n(7294);function r(e){const t=Object.assign({p:"p",code:"code",ul:"ul",li:"li",a:"a",img:"img",h1:"h1"},(0,l.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.p,null,"Before attempting to use ",a.createElement(t.code,null,"gitlab.yml"),", a few things must be in place:"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"gitlab instance"),"\n",a.createElement(t.li,null,"gitlab runner registered to the instance"),"\n",a.createElement(t.li,null,"you are a 'maintainer' for the project you want to setup"),"\n"),"\n",a.createElement(t.p,null,"Before you start, I recommend watching this video:"),"\n",a.createElement(t.a,{href:"https://www.youtube.com/watch?v=kTNfi5z6Uvk&t=553s"},a.createElement(t.img,{src:"https://img.youtube.com/vi/kTNfi5z6Uvk/0.jpg",alt:"youtube - gitlab CI intro"})),"\n",a.createElement(t.p,null,"Basically, you'll want to clone a simple project in a tech stack that you're already familiar with. I will use a node.js app to demonstrate."),"\n",a.createElement(t.p,null,"Because we build this app using the ",a.createElement(t.code,null,"npm build")," command, that is used by the ",a.createElement(t.code,null,"gitlab.yml")," script so that CI will build the same way. Essentially, if Gitlab CI can't build successfully (ie. if it hits any errors) then you will be notified and no be able to proceed with the MR until errors are rectified."),"\n",a.createElement(t.p,null,"This is a great way to get simple automatic feedback mechanism you can use to speed up development. The most basic ",a.createElement(t.code,null,"gitlab.yml")," file for a node.js project could be super simple:"),"\n",a.createElement("pre",null,a.createElement(t.p,null,"image: node:14.2.2"),a.createElement(t.p,null,"dependencies:\nscript:"),a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"npm install"),"\n"),a.createElement(t.p,null,"build:\nscript"),a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"npm run build"),"\n")),"\n",a.createElement(t.p,null,"Optionally, speed things up by adding the cache paths to ",a.createElement(t.code,null,"node_modules")," folder."),"\n",a.createElement("pre",null,a.createElement(t.p,null,"image: node:14.2.2\ncache:\npaths:"),a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"node_modules/"),"\n"),a.createElement(t.p,null,"dependencies:\nscript:"),a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"npm install"),"\n"),a.createElement(t.p,null,"build:\nscript"),a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"npm run build"),"\n")),"\n",a.createElement(t.h1,null,"Trigger the Pipeline on opening a Merge Request"),"\n",a.createElement(t.p,null,"All you need to do is add a commit which puts this new file, ",a.createElement(t.code,null,"gitlab.yml"),", in the root directory of your project. Gitlab will now create a pipeline and tell you the result."),"\n",a.createElement(t.p,null,"Hopefully, this helps you to leverage the power of automation."))}t.Z=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(r,e)):r(e)}},8217:function(e,t,n){n.r(t),n.d(t,{Head:function(){return u},default:function(){return m}});var l=n(2083),a=n(7294),r=n(8032),i=n(7144),c=n(9357);const o=e=>{let{data:t,children:n}=e;const l=(0,r.c)(t.mdx.frontmatter.hero_image);return a.createElement("div",{style:{margin:12}},a.createElement(i.Z,{pageTitle:t.mdx.frontmatter.title},a.createElement("a",{href:"/projects"}," ../Back to Projects"),a.createElement("p",null,t.mdx.frontmatter.date),l?a.createElement(a.Fragment,null,a.createElement(r.G,{image:l,alt:t.mdx.frontmatter.hero_image_alt}),a.createElement("p",null,"Photo Credit:"," ",a.createElement("a",{href:t.mdx.frontmatter.hero_image_credit_link},t.mdx.frontmatter.hero_image_credit_text))):null,n))},u=()=>a.createElement(c.Z,{title:"Super Cool Blog Posts"});function m(e){return a.createElement(o,e,a.createElement(l.Z,e))}},1151:function(e,t,n){n.d(t,{ah:function(){return r}});var l=n(7294);const a=l.createContext({});function r(e){const t=l.useContext(a);return l.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}}}]);
//# sourceMappingURL=component---src-pages-projects-mdx-frontmatter-slug-js-content-file-path-users-nathanphennel-projects-enphnt-github-io-blog-gitlab-ci-index-mdx-c65f1c811622afce36fe.js.map