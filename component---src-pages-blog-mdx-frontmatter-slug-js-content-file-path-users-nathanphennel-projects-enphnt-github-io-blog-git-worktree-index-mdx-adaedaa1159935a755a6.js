"use strict";(self.webpackChunknathan_phennel_website=self.webpackChunknathan_phennel_website||[]).push([[195],{8577:function(e,A,t){var n=t(1151),a=t(7294);function i(e){const A=Object.assign({p:"p",span:"span",code:"code",pre:"pre"},(0,n.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(A.p,null,"Git can sometimes make your head spin. I know I am safe in assuming that I'm not alone in this feeling because of the fact that sites like ",a.createElement("a",{target:"_blank",href:"https://ohshitgit.com"},"Oh Shit Git")," exist."),"\n",a.createElement(A.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 595px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/19864693e4158549222156fbc90731e4/c2f23/ohshitgit.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 101.33333333333334%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAMFBgEE/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAbnubiTWKVEEYe4H/8QAHBAAAgICAwAAAAAAAAAAAAAAAgMAAQQQERMU/9oACAEBAAEFApxpmQ2mel0xmsIDTVn0DELoQ//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EAB0QAAICAQUAAAAAAAAAAAAAAAABAjEQERIhM0H/2gAIAQEABj8CzJKbs7GPdJvkk9XZbPbP/8QAGxABAAICAwAAAAAAAAAAAAAAAQAhEVEQMYH/2gAIAQEAAT8hzMtQKuFZgg4dWUpc76aZsf2LAYf/2gAMAwEAAgADAAAAECQ3/v/EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8QH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8QH//EAB4QAQACAgMAAwAAAAAAAAAAAAEAESFRMWHRQeHw/9oACAEBAAE/EKDyYN/c4aVbz7KjTPcFDeCUAtfE/OeQAoYacUex6CoAlZb1F+C0jyViinKaOp//2Q==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="ohshitgit_com"\n        title=""\n        src="/static/19864693e4158549222156fbc90731e4/c2f23/ohshitgit.jpg"\n        srcset="/static/19864693e4158549222156fbc90731e4/863e1/ohshitgit.jpg 225w,\n/static/19864693e4158549222156fbc90731e4/20e5d/ohshitgit.jpg 450w,\n/static/19864693e4158549222156fbc90731e4/c2f23/ohshitgit.jpg 595w"\n        sizes="(max-width: 595px) 100vw, 595px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",a.createElement(A.p,null,"Git is fast, scalable, and distributed so its awesome for projects from tiny to quite large (note that its not super performant for repos >1gb or files >100mb)."),"\n",a.createElement(A.p,null,"Time travel is often a reference point for ",a.createElement(A.code,null,"git"),"'s complexity but I'd argue that its rich command options make it quite robust for handling all sorts of situations. But it is quite true that with ",a.createElement(A.code,null,"git"),", we are given the ability to time travel. We can checkout any point in time that was tracked by a ",a.createElement(A.code,null,"git")," commit. And since around 2015, we've had an often unnoticed additional ability: to checkout two points in time simultaneously."),"\n",a.createElement(A.p,null,"I am referring to:"),"\n",a.createElement(A.pre,null,a.createElement(A.code,null,"git worktree add [branchName] [targetDir]\n")),"\n",a.createElement(A.p,null,"This command lets us manage multiple working trees (think, multiple local clones) attached to the same repository."),"\n",a.createElement(A.p,null,'The utility of the command is in allowing you to locally check out more than one branch at a time. A new working tree is created in the directory specified in the command and associated it\'s with the repository. This new working tree is called a "linked working tree" as opposed to the "main working tree" resulting from "git init" or "git clone". every git repository has one "main" working tree association (assuming it\'s not a special case like a bare repository) and any number (0-whatever) associated "linked" working trees.'),"\n",a.createElement(A.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 400px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/e1ceebeabefb0f794627710e5c1431b0/066f9/brace.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 75.11111111111111%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQAE/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAXTUBY2wMf/EABsQAAMAAgMAAAAAAAAAAAAAAAABAgQREiIj/9oACAEBAAEFAnKZkvgRk9arRfoVWn//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAcEAACAgIDAAAAAAAAAAAAAAAAAQIREiExMnH/2gAIAQEABj8CNSo6SfhwZ5JOyj//xAAaEAEBAQEAAwAAAAAAAAAAAAABESEAMUGx/9oACAEBAAE/IUd+8bBLM97woFBinOrmiW8jTQWOcj0s8N7/2gAMAwEAAgADAAAAEC//AP/EABYRAQEBAAAAAAAAAAAAAAAAAAABIf/aAAgBAwEBPxCMf//EABYRAQEBAAAAAAAAAAAAAAAAAAABIf/aAAgBAgEBPxCtf//EAB0QAQEAAgIDAQAAAAAAAAAAAAERACExQVFhcYH/2gAIAQEAAT8QvCrJpGJRCI4DpPZMKgZUVN8txHoCVZqQlZEsga6JvJpGoIp5+vP7n//Z\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="brace-yourself"\n        title=""\n        src="/static/e1ceebeabefb0f794627710e5c1431b0/066f9/brace.jpg"\n        srcset="/static/e1ceebeabefb0f794627710e5c1431b0/863e1/brace.jpg 225w,\n/static/e1ceebeabefb0f794627710e5c1431b0/066f9/brace.jpg 400w"\n        sizes="(max-width: 400px) 100vw, 400px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",a.createElement(A.p,null,"So, when your testing some bug fix or new feature, you may find it useful to compare the software behaviour before and after the fix was applied. Similarly, this can be quite useful for developers to make tweaks and ensure no regression is introduced inadvertently."),"\n",a.createElement(A.p,null,"The basic workflow I find myself using is:"),"\n",a.createElement(A.pre,null,a.createElement(A.code,null,"    # Checkout new feature branch\n    $ git checkout origin/feature/thingy\n\n    # Build and start, and test new feature\n\n    $ git worktree add -b feature/thingy/old\n      ..thingy origin/master\n\n    $ cd ../thingy\n    # Switched to a new branch\n      'feature/thingy/old'\n\n    # Build and start, and test\n      using the new feature branch\n")),"\n",a.createElement(A.p,null,"I find that I typically spend most of my time comparing (step 6). However, sometimes urgent issues or 'hot-fixes' are sent my way. In those cases, I use git worktree for both the feature branch under test as well as the \"previous-behaviour\" branch. This is great because it allows me to context switch with less frustration, no stashing, temp commits, aborting merge conflicts, etc."),"\n",a.createElement(A.p,null,"Developers also can use ",a.createElement(A.code,null,"git worktree")," for quick reacting to production issues or other urgent matters requiring a hot-fix. This workflow illustrates how that is accomplished:"),"\n",a.createElement(A.pre,null,a.createElement(A.code,null,"    $ git worktree add -b hotfix\n      ../hotfix origin/master\n\n    # Enter ../hotfix, identifier hotfix\n    # Branch hotfix set up to track\n      remote branch master from origin.\n\n    $ cd ../hotfix\n    # Switched to a new branch 'hotfix'\n\n")),"\n",a.createElement(A.p,null,"In summary, multiple worktrees let us multitask across different versions of a project seamlessly. I hope you can find some benefits from this helpful command."))}A.Z=function(e){void 0===e&&(e={});const{wrapper:A}=Object.assign({},(0,n.ah)(),e.components);return A?a.createElement(A,e,a.createElement(i,e)):i(e)}},9486:function(e,A,t){t.r(A),t.d(A,{Head:function(){return l},default:function(){return c}});var n=t(8577),a=t(7294),i=t(8032),r=t(7144),o=t(9357);const s=e=>{let{data:A,children:t}=e;const n=(0,i.c)(A.mdx.frontmatter.hero_image);return a.createElement(r.Z,{pageTitle:A.mdx.frontmatter.title},a.createElement("a",{style:{margin:"2px 0 90px",fontSize:12,textAlign:"right"},href:"/blog"},"  ","<","Back"),a.createElement("p",null,A.mdx.frontmatter.date),n?a.createElement(a.Fragment,null,a.createElement(i.G,{image:n,alt:A.mdx.frontmatter.hero_image_alt,style:{maxHeight:"40vh"}}),a.createElement("p",{style:{margin:"2px 0 30px",fontSize:10,textAlign:"right"}},"Photo Credit:"," ",a.createElement("a",{href:A.mdx.frontmatter.hero_image_credit_link},A.mdx.frontmatter.hero_image_credit_text))):null,t)},l=()=>a.createElement(o.Z,{title:"Super Cool Blog Posts"});function c(e){return a.createElement(s,e,a.createElement(n.Z,e))}},1151:function(e,A,t){t.d(A,{ah:function(){return i}});var n=t(7294);const a=n.createContext({});function i(e){const A=n.useContext(a);return n.useMemo((()=>"function"==typeof e?e(A):{...A,...e}),[A,e])}}}]);
//# sourceMappingURL=component---src-pages-blog-mdx-frontmatter-slug-js-content-file-path-users-nathanphennel-projects-enphnt-github-io-blog-git-worktree-index-mdx-adaedaa1159935a755a6.js.map