"use strict";(self.webpackChunknathan_phennel_website=self.webpackChunknathan_phennel_website||[]).push([[524],{789:function(e,t,l){var n=l(7294),a=l(4854),i=l(8032);const o=["lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgreen","lightpink","lightsalmon","lightseagreen","lightskyblue","lightgray"];t.Z=e=>{let{idx:t,node:{id:l,frontmatter:{thumbnail:r,slug:c,title:s,date:d,tags:m},excerpt:g}}=e;const u=(0,i.c)(r),h=o[t%o.length],{0:p,1:f}=(0,n.useState)();(0,n.useEffect)((()=>{window.addEventListener("resize",(()=>{f("span 1"),window.innerWidth<=768&&f("span 2")}))}),[]);const x={article:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gridGap:"1em",maxWidth:"99%",padding:"1em"},tag:{padding:4,margin:"4px",backgroundColor:"#e0e0e0",color:"inherit",borderRadius:"4px",textDecoration:"none"},blogFooterTags:{display:"flex",flexWrap:"wrap"},heading:{marginTop:0,fontSize:"1.3em",fontWeight:600,textDecorationLine:"underline",textDecorationStyle:"solid",textDecorationColor:h,textDecorationThickness:1,maxWidth:"max-content"},thumbnailWrapper:{margin:"0.35em 0 0 0",justifySelf:"center",gridColumn:p,maxWidth:230},info:{gridColumn:"span 2",justifyContent:"space-around",display:"flex",flexDirection:"column"},hr:{color:h,margin:0}};return n.createElement("div",null,n.createElement("hr",{style:x.hr}),n.createElement("article",{style:x.article},n.createElement("div",{style:x.thumbnailWrapper},n.createElement(a.Link,{id:"nohighlight","aria-label":"Read more about "+s,to:"/blog/"+c+"/"},n.createElement(i.G,{image:u,alt:"Thumbnail for "+s}))),n.createElement("div",{style:x.info},n.createElement(a.Link,{"aria-label":"Read more about "+s,to:"/blog/"+c+"/",style:x.heading},s),n.createElement("h5",null,d),n.createElement("p",null,g),n.createElement("div",{style:x.blogFooterTags},m.map((e=>n.createElement(a.Link,{key:e,to:"/tags/"+e.replace(/ /g,"-")+"/",style:x.tag},e)))))))}},1025:function(e,t,l){l.r(t),l.d(t,{Head:function(){return c}});var n=l(7294),a=l(4854),i=l(6050),o=l(9357),r=l(789);const c=e=>{let{location:t}=e;return n.createElement(o.Z,{title:"Blog",location:t})};t.default=e=>{let{data:t}=e;return n.createElement(i.Z,null,n.createElement("div",{style:{display:"flex",flexWrap:"wrap",flexDirection:"column",alignItems:"center"}},n.createElement("h1",null,"All Blog Posts"),n.createElement("p",null,"A collection of posts that I've written on various topics. Check em' out!"," I also have split these posts into topics like ",n.createElement(a.Link,{"aria-label":"Over to code",to:"/code/"},"code")," ","and ",n.createElement(a.Link,{"aria-label":"Over to Music",to:"/music/"},"music"),", too."),t.allMdx.nodes.map(((e,t)=>n.createElement(r.Z,{key:e.id,node:e,path:"blog",idx:t})))))}}}]);
//# sourceMappingURL=component---src-pages-blog-index-js-425d93749cbacb1e2188.js.map