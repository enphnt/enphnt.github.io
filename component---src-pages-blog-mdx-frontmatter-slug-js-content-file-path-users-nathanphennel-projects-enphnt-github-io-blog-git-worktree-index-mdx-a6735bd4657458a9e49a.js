"use strict";(self.webpackChunknathan_phennel_website=self.webpackChunknathan_phennel_website||[]).push([[195],{8577:function(e,t,n){var a=n(1151),A=n(7294);function s(e){const t=Object.assign({p:"p",a:"a",span:"span"},(0,a.ah)(),e.components);return A.createElement(A.Fragment,null,A.createElement(t.p,null,"Git can sometimes make your head spin. I know I am safe in assuming that I'm not alone in this feeling because of the fact that sites like ",A.createElement(t.a,{href:"https://ohshitgit.com"},"'Oh Shit Git'")," exist."),"\n",A.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 595px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/19864693e4158549222156fbc90731e4/c2f23/ohshitgit.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 101.33333333333334%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAMFBgEE/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAbnubiTWKVEEYe4H/8QAHBAAAgICAwAAAAAAAAAAAAAAAgMAAQQQERMU/9oACAEBAAEFApxpmQ2mel0xmsIDTVn0DELoQ//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EAB0QAAICAQUAAAAAAAAAAAAAAAABAjEQERIhM0H/2gAIAQEABj8CzJKbs7GPdJvkk9XZbPbP/8QAGxABAAICAwAAAAAAAAAAAAAAAQAhEVEQMYH/2gAIAQEAAT8hzMtQKuFZgg4dWUpc76aZsf2LAYf/2gAMAwEAAgADAAAAECQ3/v/EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8QH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8QH//EAB4QAQACAgMAAwAAAAAAAAAAAAEAESFRMWHRQeHw/9oACAEBAAE/EKDyYN/c4aVbz7KjTPcFDeCUAtfE/OeQAoYacUex6CoAlZb1F+C0jyViinKaOp//2Q==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="ohshitgit_com"\n        title=""\n        src="/static/19864693e4158549222156fbc90731e4/c2f23/ohshitgit.jpg"\n        srcset="/static/19864693e4158549222156fbc90731e4/863e1/ohshitgit.jpg 225w,\n/static/19864693e4158549222156fbc90731e4/20e5d/ohshitgit.jpg 450w,\n/static/19864693e4158549222156fbc90731e4/c2f23/ohshitgit.jpg 595w"\n        sizes="(max-width: 595px) 100vw, 595px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",A.createElement(t.p,null,"Git is fast, scalable, and distributed so its awesome for projects from tiny to quite large (note that its not super performant for repos >1gb or files >100mb)."),"\n",A.createElement(t.p,null,"Time travel is often a reference point for ",A.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">git</code>'}}),"'s complexity but I'd argue that its rich command options make it quite robust for handling all sorts of situations. But it is quite true that with ",A.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">git</code>'}}),", we are given the ability to time travel. We can checkout any point in time that was tracked by a ",A.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">git</code>'}})," commit. And since around 2015, we've had an often unnoticed additional ability: to checkout two points in time simultaneously."),"\n",A.createElement(t.p,null,"I am referring to:"),"\n",A.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="bash"><pre class="language-bash"><code class="language-bash">\n<span class="token function">git</span> worktree <span class="token function">add</span> <span class="token punctuation">[</span>branchName<span class="token punctuation">]</span> <span class="token punctuation">[</span>targetDir<span class="token punctuation">]</span>\n\n</code></pre></div>'}}),"\n",A.createElement(t.p,null,"This command lets us manage multiple working trees (think, multiple local clones) attached to the same repository."),"\n",A.createElement(t.p,null,'The utility of the command is in allowing you to locally check out more than one branch at a time. A new working tree is created in the directory specified in the command and associated it\'s with the repository. This new working tree is called a "linked working tree" as opposed to the "main working tree" resulting from "git init" or "git clone". every git repository has one "main" working tree association (assuming it\'s not a special case like a bare repository) and any number (0-whatever) associated "linked" working trees.'),"\n",A.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 400px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/e1ceebeabefb0f794627710e5c1431b0/066f9/brace.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 75.11111111111111%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQAE/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAXTUBY2wMf/EABsQAAMAAgMAAAAAAAAAAAAAAAABAgQREiIj/9oACAEBAAEFAnKZkvgRk9arRfoVWn//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAcEAACAgIDAAAAAAAAAAAAAAAAAQIREiExMnH/2gAIAQEABj8CNSo6SfhwZ5JOyj//xAAaEAEBAQEAAwAAAAAAAAAAAAABESEAMUGx/9oACAEBAAE/IUd+8bBLM97woFBinOrmiW8jTQWOcj0s8N7/2gAMAwEAAgADAAAAEC//AP/EABYRAQEBAAAAAAAAAAAAAAAAAAABIf/aAAgBAwEBPxCMf//EABYRAQEBAAAAAAAAAAAAAAAAAAABIf/aAAgBAgEBPxCtf//EAB0QAQEAAgIDAQAAAAAAAAAAAAERACExQVFhcYH/2gAIAQEAAT8QvCrJpGJRCI4DpPZMKgZUVN8txHoCVZqQlZEsga6JvJpGoIp5+vP7n//Z\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="brace-yourself"\n        title=""\n        src="/static/e1ceebeabefb0f794627710e5c1431b0/066f9/brace.jpg"\n        srcset="/static/e1ceebeabefb0f794627710e5c1431b0/863e1/brace.jpg 225w,\n/static/e1ceebeabefb0f794627710e5c1431b0/066f9/brace.jpg 400w"\n        sizes="(max-width: 400px) 100vw, 400px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",A.createElement(t.p,null,"So, when your testing some bug fix or new feature, you may find it useful to compare the software behaviour before and after the fix was applied. Similarly, this can be quite useful for developers to make tweaks and ensure no regression is introduced inadvertently."),"\n",A.createElement(t.p,null,"The basic workflow I find myself using is:"),"\n",A.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="bash"><pre class="language-bash"><code class="language-bash">\n    <span class="token comment"># Checkout new feature branch</span>\n    $ <span class="token function">git</span> checkout origin/feature/thingy\n\n    <span class="token comment"># Build and start, and test new feature</span>\n\n    $ <span class="token function">git</span> worktree <span class="token function">add</span> <span class="token parameter variable">-b</span> feature/thingy/old\n      <span class="token punctuation">..</span>thingy origin/master\n\n    $ <span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>/thingy\n    <span class="token comment"># Switched to a new branch</span>\n      <span class="token string">\'feature/thingy/old\'</span>\n\n    <span class="token comment"># Build and start, and test</span>\n      using the new feature branch\n</code></pre></div>'}}),"\n",A.createElement(t.p,null,"I find that I typically spend most of my time comparing (step 6). However, sometimes urgent issues or 'hot-fixes' are sent my way. In those cases, I use git worktree for both the feature branch under test as well as the \"previous-behaviour\" branch. This is great because it allows me to context switch with less frustration, no stashing, temp commits, aborting merge conflicts, etc."),"\n",A.createElement(t.p,null,"Developers also can use ",A.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">git worktree</code>'}})," for quick reacting to production issues or other urgent matters requiring a hot-fix. This workflow illustrates how that is accomplished:"),"\n",A.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="bash"><pre class="language-bash"><code class="language-bash">\n    $ <span class="token function">git</span> worktree <span class="token function">add</span> <span class="token parameter variable">-b</span> hotfix\n      <span class="token punctuation">..</span>/hotfix origin/master\n\n    <span class="token comment"># Enter ../hotfix, identifier hotfix</span>\n    <span class="token comment"># Branch hotfix set up to track</span>\n      remote branch master from origin.\n\n    $ <span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>/hotfix\n    <span class="token comment"># Switched to a new branch \'hotfix\'</span>\n\n</code></pre></div>'}}),"\n",A.createElement(t.p,null,"In summary, multiple worktrees let us multitask across different versions of a project seamlessly. I hope you can find some benefits from this helpful command."))}t.Z=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?A.createElement(t,e,A.createElement(s,e)):s(e)}},9486:function(e,t,n){n.r(t),n.d(t,{Head:function(){return m},default:function(){return g}});var a=n(8577),A=n(7294),s=n(4854),i=n(8032),o=n(6050),r=n(9357),l=n(7268);const c=e=>{let{data:t,children:n}=e;const a=(0,i.c)(t.mdx.frontmatter.hero_image);return A.createElement(o.Z,null,A.createElement("div",{style:{paddingTop:40}},A.createElement("div",{className:l.Kb},A.createElement(s.Link,{className:l.XG,to:"/"},"Home"),A.createElement("div",{className:l.I7},"»"),A.createElement(s.Link,{className:l.XG,to:"/blog"},"Blog"),A.createElement("div",{className:l.I7},"»"),A.createElement(s.Link,{className:l.sx,to:"./"},t.mdx.frontmatter.title)),a?A.createElement(A.Fragment,null,A.createElement(i.G,{image:a,alt:t.mdx.frontmatter.hero_image_alt,style:{maxHeight:"40vh"},className:l.rP}),A.createElement("p",{style:{margin:"2px 0 30px",fontSize:10,textAlign:"right"}},"Photo Credit:"," ",A.createElement("a",{href:t.mdx.frontmatter.hero_image_credit_link},t.mdx.frontmatter.hero_image_credit_text))):null,A.createElement("h1",null,t.mdx.frontmatter.title),A.createElement("h5",null,t.mdx.frontmatter.date),A.createElement("div",{className:l.kQ},n),A.createElement("br"),A.createElement(s.Link,{to:"/blog"},"Go back to the blog homepage")))},m=()=>A.createElement(r.Z,{title:"Super Cool Blog Posts"});function g(e){return A.createElement(c,e,A.createElement(a.Z,e))}},7268:function(e,t,n){n.d(t,{$z:function(){return g},I7:function(){return i},KM:function(){return c},Kb:function(){return o},Q1:function(){return u},XG:function(){return A},Y2:function(){return a},kQ:function(){return r},rP:function(){return l},sx:function(){return s},v_:function(){return m}});var a="index-module--article--45d42",A="index-module--breadcrumbLink--6e770",s="index-module--breadcrumbLinkHighlight--f6fd2",i="index-module--breadcrumbLink-separator--cbc54",o="index-module--breadcrumbs--411be",r="index-module--content--136c6",l="index-module--hero--ef469",c="index-module--highlight-anchor--28dd6",m="index-module--post--e88a8",g="index-module--postList--15965",u="index-module--thumbnail--3cc31"},1151:function(e,t,n){n.d(t,{ah:function(){return s}});var a=n(7294);const A=a.createContext({});function s(e){const t=a.useContext(A);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}}}]);
//# sourceMappingURL=component---src-pages-blog-mdx-frontmatter-slug-js-content-file-path-users-nathanphennel-projects-enphnt-github-io-blog-git-worktree-index-mdx-a6735bd4657458a9e49a.js.map