"use strict";(self.webpackChunknathan_phennel_website=self.webpackChunknathan_phennel_website||[]).push([[370],{2893:function(e,t,n){var a=n(1151),r=n(7294);function l(e){const t=Object.assign({p:"p",h2:"h2",a:"a",span:"span"},(0,a.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.p,null,"This will be quick! Well, I guess that depends on your connection."),"\n",r.createElement(t.h2,{id:"current-support",style:{position:"relative"}},"Current Support",r.createElement(t.a,{href:"#current-support","aria-label":"current support permalink",className:"anchor after"},r.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",r.createElement(t.p,null,"While its currently only an ",r.createElement(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation/downlink"},"experimental feature"),", there is actually a handy way to check your internet connection speed directly in the browser. No, you don't need to navigate to a 'speed-test' site."),"\n",r.createElement(t.p,null,"At the moment, both Chrome and Edge browsers have enabled this capability by default but, for now, Firefox only works if you manually enable (as of FF 90)."),"\n",r.createElement(t.h2,{id:"test-downlink-speed-via-the-browser",style:{position:"relative"}},"Test downlink speed via the browser",r.createElement(t.a,{href:"#test-downlink-speed-via-the-browser","aria-label":"test downlink speed via the browser permalink",className:"anchor after"},r.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}}))),"\n",r.createElement(t.p,null,"So if you are on Chrome or Edge, open the console and type the following:"),"\n",r.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text">\nnavigator.connection.downlink\n\n</code></pre></div>'}}),"\n",r.createElement("br"),"\n",r.createElement(t.p,null,"For example, in my current location, I was able to see that my internet downlink speed currently sits at 1.6Mbps:"),"\n",r.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 900px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/96998d453a5018102319249f49346040/142fb/downlink.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 16.444444444444446%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAADCAIAAAAcOLh5AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAmElEQVR42iXHSw6DIBQAQO8hLaAFBeQrVZQ8/MX0/jfqwmQ2U3VCd70u5QQ49v0+z1+BSxu3JH0Ut4HNi4Fsp8msyVy7g2zXZDZwjIvq06u2k3Fa45RzOeYFfExiMGFUIaowKudk/CrrtR/1nAbnpQ/SB0UZr5TxSgcpwNu7xk2NG0Tad8MQeXBEOSL8RRmirMbsKSIct/wP1Awglzfw3MgAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="downlink"\n        title=""\n        src="/static/96998d453a5018102319249f49346040/1cfc2/downlink.png"\n        srcset="/static/96998d453a5018102319249f49346040/3684f/downlink.png 225w,\n/static/96998d453a5018102319249f49346040/fc2a6/downlink.png 450w,\n/static/96998d453a5018102319249f49346040/1cfc2/downlink.png 900w,\n/static/96998d453a5018102319249f49346040/142fb/downlink.png 907w"\n        sizes="(max-width: 900px) 100vw, 900px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}))}t.Z=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?r.createElement(t,e,r.createElement(l,e)):l(e)}},1210:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var a=n(2893),r=n(7294),l=n(4854),o=n(8032),i=n(6050),c=n(9357),s=n(7268),m=n(7906),d=n(3846);const u=e=>{let{data:t,children:n}=e;const a=(0,o.c)(t.mdx.frontmatter.hero_image);return r.createElement("div",{style:{margin:12,paddingTop:40}},r.createElement(i.Z,null,r.createElement("div",{className:s.Kb},r.createElement(l.Link,{"aria-label":"Home",className:s.XG,to:"/"},"Home"),r.createElement("div",{className:s.I7},"»"),r.createElement(l.Link,{"aria-label":"Projects",className:s.XG,to:"/projects"},"Projects"),r.createElement("div",{className:s.I7},"»"),r.createElement(l.Link,{"aria-label":t.mdx.frontmatter.title,className:s.XG,to:"./"},t.mdx.frontmatter.title)),a?r.createElement(r.Fragment,null,r.createElement(o.G,{image:a,alt:t.mdx.frontmatter.hero_image_alt,className:s.rP}),r.createElement("p",null,"Photo Credit:"," ",r.createElement("a",{href:t.mdx.frontmatter.hero_image_credit_link},t.mdx.frontmatter.hero_image_credit_text))):null,r.createElement("h1",null,t.mdx.frontmatter.title),r.createElement(m.Z,{tags:t.mdx.frontmatter.tags}),r.createElement("h5",null,t.mdx.frontmatter.date),r.createElement(d.Z,{tocs:t.mdx.tableOfContents}),r.createElement("br"),r.createElement("div",{className:s.kQ},n),r.createElement("br"),r.createElement(l.Link,{"aria-label":"back to Projects",to:"/projects"},"Go back to the projects homepage")),r.createElement(c.Z,{title:t.mdx.frontmatter.title+" | Projects"}))};function g(e){return r.createElement(u,e,r.createElement(a.Z,e))}},9357:function(e,t,n){var a=n(7294),r=n(4854);t.Z=e=>{let{title:t}=e;const n=(0,r.useStaticQuery)("2731891648");return a.createElement(a.Fragment,null,a.createElement("html",{lang:"en"}),a.createElement("meta",{name:"description",content:n.site.siteMetadata.description}),a.createElement("meta",{name:"image",content:n.site.siteMetadata.image}),a.createElement("title",null,t," | ",n.site.siteMetadata.title))}},3846:function(e,t,n){var a=n(7294),r=n(4854),l=n(7814),o=n(9417);t.Z=e=>{let{tocs:t}=e;const{items:n}=t,{0:i,1:c}=(0,a.useState)(!0),{0:s,1:m}=(0,a.useState)(!1),d={padding:"0 1.6rem"},u={color:"#35435d",padding:3},g={backgroundColor:"#35435d",color:"#ffffff",fontWeight:400},p={backgroundColor:"rgb(46, 107, 77)",color:"#ffffff",fontWeight:400};return a.createElement(a.Fragment,null,a.createElement("button",{style:{fontSize:"1.1em",fontWeight:300,border:"none",borderBottom:"solid 1px lightgrey",borderRight:"solid 1px lightgrey",borderTop:"solid 1px lightgrey",borderLeft:"solid 5px lightgrey",color:"#222",backgroundColor:"transparent",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0 1.5rem",margin:0},onClick:()=>{c(!i)}},"Table of Contents:",a.createElement(l.G,{icon:i?o.mTx:o.ptq})),i&&a.createElement("div",{style:{marginTop:0,lineHeight:"1.4em"}},a.createElement("ol",{style:{padding:"16px 3rem",borderBottom:"solid 1px lightgrey",borderRight:"solid 1px lightgrey",borderLeft:"solid 5px lightgrey"}},n.map((e=>a.createElement("li",{key:e.title},a.createElement(r.Link,{style:{...u,...s===e.title?g:null},key:e.title,to:e.url,onMouseEnter:()=>{m(e.title)},onMouseLeave:()=>{m(!1)}},e.title),e.items?a.createElement("ul",{style:d},e.items.map((e=>a.createElement("li",null,a.createElement(r.Link,{to:e.url,onMouseEnter:()=>{m(e.title)},onMouseLeave:()=>{m(!1)},style:{...u,...s===e.title?p:null}},e.title))))):null))))))}},7906:function(e,t,n){var a=n(7294),r=n(4854);t.Z=e=>{let{tags:t}=e;const{0:n,1:l}=(0,a.useState)(!1),o={color:"#35435d",fontWeight:600},i={backgroundColor:"#35435d",color:"#ffffff"};return a.createElement("p",null,"Tags:"," ",t.map(((e,c)=>a.createElement(a.Fragment,null,a.createElement(r.Link,{key:e,to:"/tags/"+e.replace(/ /g,"-"),style:{...o,...n===e?i:null},onMouseEnter:()=>{l(e)},onMouseLeave:()=>{l(!1)}},e),c===t.length-1?a.createElement(a.Fragment,null):a.createElement(a.Fragment,null,","," ")))))}},7268:function(e,t,n){n.d(t,{$z:function(){return u},I7:function(){return o},KM:function(){return m},Kb:function(){return i},Q1:function(){return g},XG:function(){return r},Y2:function(){return a},kQ:function(){return c},rP:function(){return s},sx:function(){return l},v_:function(){return d}});var a="index-module--article--45d42",r="index-module--breadcrumbLink--6e770",l="index-module--breadcrumbLinkHighlight--f6fd2",o="index-module--breadcrumbLink-separator--cbc54",i="index-module--breadcrumbs--411be",c="index-module--content--136c6",s="index-module--hero--ef469",m="index-module--highlightAnchor--811e2",d="index-module--post--e88a8",u="index-module--postList--15965",g="index-module--thumbnail--3cc31"},1151:function(e,t,n){n.d(t,{ah:function(){return l}});var a=n(7294);const r=a.createContext({});function l(e){const t=a.useContext(r);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}}}]);
//# sourceMappingURL=component---src-pages-projects-mdx-frontmatter-slug-js-content-file-path-users-nathanphennel-projects-enphnt-github-io-blog-internet-speed-index-mdx-a89d6e064dd20ea02f0e.js.map