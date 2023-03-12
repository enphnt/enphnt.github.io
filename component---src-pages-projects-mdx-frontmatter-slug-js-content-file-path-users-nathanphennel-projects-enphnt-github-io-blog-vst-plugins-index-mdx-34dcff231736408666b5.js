"use strict";(self.webpackChunknathan_phennel_website=self.webpackChunknathan_phennel_website||[]).push([[279],{5253:function(e,t,n){var a=n(1151),r=n(7294),A=n(3023);function o(e){const t=Object.assign({h1:"h1",p:"p",span:"span"},(0,a.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.h1,null,"What are VSTs?"),"\n",r.createElement(t.p,null,"A Virtual Studio Technology (VST) is just an application. These applications are typically capable of either producing a sound, sometimes called 'instrument' VSTs, or processing some sound source, which are typically called 'effects' VSTs. The lines are blurry and often a single VST will do both."),"\n",r.createElement(t.p,null,"While it may sometimes be useful to run a VST in standalone mode without a Digital Audio Workstation (DAW), it's not very useful on its own. Typically, VST software is opened inside of a DAW so that it can be combined with other VSTs, recorded, and otherwise integrated with features of the DAW."),"\n",r.createElement(t.p,null,"I use Logic for my own music/noise creations and have grown familiar with a range of VST instruments and plugins. Now, I'm curious about how these things are actually built."),"\n",r.createElement(t.p,null,"In my short research stint, I learned that most VSTs are built in C++. As mostly a js/frontend dev, this seemed like a major hurtle for me personally. But then I stumbled upon Faust and Juce."),"\n",r.createElement(t.h1,null,"Faust"),"\n",r.createElement(t.p,null,'According to the course available from Stanford, via Kadenze, Faust is a programming language that "provides a generic way to implement signal processing algorithms for sound synthesis and processing towards professional audio applications. Thanks to its architecture system, Faust can be used to generate a wide range of ready-to-use elements such as audio plug-ins (e.g., VST, AU, etc.), externals for other computer music environments (e.g., ChucK, Max/MSP, PD, CSOUND, SuperCollider, etc.), standalone applications, mobile apps, web apps, etc. Additionally, it is a great tool to make DSP engines embeddable in larger projects."'),"\n",r.createElement(t.p,null,"I think I will actually take the weekly instructor-led course. The course is hosted here currently:"),"\n",r.createElement("a",{target:"_blank",href:"https://www.kadenze.com/courses/real-time-audio-signal-processing-in-faust/info"},r.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 430px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/f5cdaacdfc1c185ccb3def0897b6afd4/40c27/stanford.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 112.44444444444446%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAWABQDASIAAhEBAxEB/8QAGQABAQEAAwAAAAAAAAAAAAAAAAUCAQME/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAa0yn4yqbBnPAPYE/8QAHRAAAgIBBQAAAAAAAAAAAAAAAQIAAxEEEhMhM//aAAgBAQABBQK7PDpvaOVZaq0SwMDGTM2GAdf/xAAWEQEBAQAAAAAAAAAAAAAAAAAQARH/2gAIAQMBAT8Bhp//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AR//xAAfEAAABgEFAAAAAAAAAAAAAAAAAQIQERKRISIxQnH/2gAIAQEABj8CVXmAW4/GUkzgWvMNpGB1w3//xAAdEAACAgIDAQAAAAAAAAAAAAABEQBBECExUWGR/9oACAEBAAE/Ib3UoaAWIj1gmWr6gERo1qNFUIT+uAiHAO0J/9oADAMBAAIAAwAAABDX2P3/xAAZEQADAAMAAAAAAAAAAAAAAAAAAREQcbH/2gAIAQMBAT8QpKb4RibH/8QAFxEBAAMAAAAAAAAAAAAAAAAAEAERMf/aAAgBAgEBPxCdKP/EACAQAQACAQQCAwAAAAAAAAAAAAERIQAxQVFhEIGRwfD/2gAIAQEAAT8Q7xOX1jhNTEpE34fE7IsKVNPziplZMRWnv8ZdqiiY1ofvICA3ib5x11reBUmroC7uf//Z\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="stanford-faust-course"\n        title=""\n        src="/static/f5cdaacdfc1c185ccb3def0897b6afd4/40c27/stanford.jpg"\n        srcset="/static/f5cdaacdfc1c185ccb3def0897b6afd4/863e1/stanford.jpg 225w,\n/static/f5cdaacdfc1c185ccb3def0897b6afd4/40c27/stanford.jpg 430w"\n        sizes="(max-width: 430px) 100vw, 430px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}})),"\n",r.createElement(t.h1,null,"JUCE"),"\n",r.createElement(t.p,null,"JUCE is another tool that's recently gained popularity. It's a somewhat open-source, cross-platform framework in C++, used to develop desktop and mobile applications. JUCE is used in particular for its GUI and plug-ins libraries."),"\n",r.createElement(t.p,null,"A course from freeCodeCamp (they sometimes produce quality content!) is available right now as a youtube video. It's actually an introduction to modern C++ programming more generally too."),"\n",r.createElement(A.Z,{videoSrcURL:"https://www.youtube.com/embed/i_Iq4_Kd7Rc",videoTitle:"youtube - JUCE / C++"}))}t.Z=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?r.createElement(t,e,r.createElement(o,e)):o(e)}},2137:function(e,t,n){n.r(t),n.d(t,{Head:function(){return u},default:function(){return d}});var a=n(5253),r=n(7294),A=n(4854),o=n(8032),i=n(6050),l=n(9357),s=n(7268);const c=e=>{let{data:t,children:n}=e;const a=(0,o.c)(t.mdx.frontmatter.hero_image);return r.createElement("div",{style:{margin:12}},r.createElement(i.Z,null,r.createElement("div",{className:s.Kb},r.createElement(A.Link,{className:s.XG,to:"/"},"Home"),r.createElement("div",{className:s.I7},">"),r.createElement(A.Link,{className:s.XG,to:"/projects"},"Projects"),r.createElement("div",{className:s.I7},">"),r.createElement(A.Link,{className:s.XG,to:"./"},t.mdx.frontmatter.title)),a?r.createElement(r.Fragment,null,r.createElement(o.G,{image:a,alt:t.mdx.frontmatter.hero_image_alt,className:s.rP}),r.createElement("p",null,"Photo Credit:"," ",r.createElement("a",{href:t.mdx.frontmatter.hero_image_credit_link},t.mdx.frontmatter.hero_image_credit_text))):null,r.createElement("h1",null,t.mdx.frontmatter.title),r.createElement("h5",null,t.mdx.frontmatter.date),r.createElement("div",{className:s.kQ},n),r.createElement("br"),r.createElement(A.Link,{to:"/projects"},"Go back to the projects homepage")))},u=()=>r.createElement(l.Z,{title:"Super Cool Projects"});function d(e){return r.createElement(c,e,r.createElement(a.Z,e))}},3023:function(e,t,n){var a=n(7294);t.Z=e=>{let{videoSrcURL:t,videoTitle:n,height:r,width:A,...o}=e;return a.createElement("div",{className:"video",style:{textAlign:"center"}},a.createElement("iframe",{src:t,title:n,id:t,allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",webkitallowfullscreen:"true",mozallowfullscreen:"true",allowFullScreen:!0,width:A||"600",height:r||"400",sandbox:"allow-top-navigation allow-same-origin allow-scripts allow-presentation"}))}},7268:function(e,t,n){n.d(t,{$z:function(){return d},I7:function(){return o},KM:function(){return c},Kb:function(){return i},Q1:function(){return m},XG:function(){return r},Y2:function(){return a},kQ:function(){return l},rP:function(){return s},sx:function(){return A},v_:function(){return u}});var a="index-module--article--45d42",r="index-module--breadcrumbLink--6e770",A="index-module--breadcrumbLinkHighlight--f6fd2",o="index-module--breadcrumbLink-separator--cbc54",i="index-module--breadcrumbs--411be",l="index-module--content--136c6",s="index-module--hero--ef469",c="index-module--highlight-anchor--28dd6",u="index-module--post--e88a8",d="index-module--postList--15965",m="index-module--thumbnail--3cc31"},1151:function(e,t,n){n.d(t,{ah:function(){return A}});var a=n(7294);const r=a.createContext({});function A(e){const t=a.useContext(r);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}}}]);
//# sourceMappingURL=component---src-pages-projects-mdx-frontmatter-slug-js-content-file-path-users-nathanphennel-projects-enphnt-github-io-blog-vst-plugins-index-mdx-34dcff231736408666b5.js.map