"use strict";(self.webpackChunknathan_phennel_website=self.webpackChunknathan_phennel_website||[]).push([[4524],{789:function(e,t,l){var a=l(7294),n=l(4854),r=l(8032);const i=["lightgray","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgreen","lightpink","lightsalmon","lightseagreen","lightskyblue"];let o=0;t.Z=e=>{let{node:{id:t,frontmatter:{thumbnail:l,slug:c,title:s,date:g,tags:m},excerpt:h},path:d}=e;const p=(0,r.c)(l),u={article:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(9em, 1fr))",gridGap:"1em",maxWidth:"99%",padding:"1em 1em"},tag:{padding:4,margin:"4px",backgroundColor:"#e0e0e0",borderRadius:"4px"},blogFooterTags:{display:"flex",flexWrap:"wrap"},heading:{marginTop:0,fontSize:"1.6em",fontWeight:600,textDecorationLine:"underline",textDecorationStyle:"solid",textDecorationColor:i[1+o++%i.length],textDecorationThickness:1},thumbnailWrapper:{margin:"0.5em 0 0 0",justifySelf:"center"},info:{gridColumnEnd:"span 3"},hr:{color:i[o++%i.length],margin:0}};return a.createElement("div",null,a.createElement("hr",{style:u.hr}),a.createElement("article",{style:u.article,key:t},a.createElement("div",{style:u.thumbnailWrapper},a.createElement(n.Link,{id:"nohighlight","aria-label":c,key:c,to:"/"+d+"/"+c},a.createElement(r.G,{image:p,alt:"Thumbnail for "+s}))),a.createElement("div",{style:u.info},a.createElement(n.Link,{"aria-label":c,key:c,to:"/"+d+"/"+c,style:u.heading},s),a.createElement("h5",null,g),a.createElement("p",null,h),a.createElement("div",{style:u.blogFooterTags},m.map((e=>a.createElement(n.Link,{key:e,to:"/tags/"+e.replace(/ /g,"-")+"/",style:u.tag},e)))))))}},1025:function(e,t,l){l.r(t),l.d(t,{Head:function(){return c}});var a=l(7294),n=l(4854),r=l(6050),i=l(9357),o=l(789);const c=()=>a.createElement(i.Z,{title:"Blog"});t.default=e=>{let{data:t}=e;return a.createElement(r.Z,null,a.createElement("div",{style:{display:"flex",flexWrap:"wrap",flexDirection:"column",alignItems:"center"}},a.createElement("h1",null,'"Blog Posts"'),a.createElement("p",null,"A collection of posts that I've written on various topics. I also have written about ",a.createElement(n.Link,{"aria-label":"Over to Projects",to:"/projects/"},"projects"),", too."),t.allMdx.nodes.map((e=>a.createElement(o.Z,{key:e.id,node:e,path:"blog"})))))}}}]);
//# sourceMappingURL=component---src-pages-blog-index-js-6e0c57bc97db48d2a671.js.map