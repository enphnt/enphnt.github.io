"use strict";(self.webpackChunknathan_phennel_website=self.webpackChunknathan_phennel_website||[]).push([[902],{789:function(e,t,n){var l=n(7294),a=n(4854),i=n(8032);const r=["lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgreen","lightpink","lightsalmon","lightseagreen","lightskyblue","lightgray"];t.Z=e=>{let{idx:t,node:{id:n,frontmatter:{thumbnail:o,slug:c,title:s,date:d,tags:m},excerpt:u}}=e;const g=(0,i.c)(o),h=r[t%r.length],{0:p,1:f}=(0,l.useState)();(0,l.useEffect)((()=>{window.addEventListener("resize",(()=>{f("span 1"),window.innerWidth<=768&&f("span 2")}))}),[]);const b={article:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gridGap:"1em",maxWidth:"99%",padding:"1em"},tag:{padding:4,margin:"4px",backgroundColor:"#e0e0e0",color:"inherit",borderRadius:"4px",textDecoration:"none"},blogFooterTags:{display:"flex",flexWrap:"wrap"},heading:{marginTop:0,fontSize:"1.3em",fontWeight:600,textDecorationLine:"underline",textDecorationStyle:"solid",textDecorationColor:h,textDecorationThickness:1,maxWidth:"max-content"},thumbnailWrapper:{margin:"0.35em 0 0 0",justifySelf:"center",gridColumn:p,maxWidth:230},info:{gridColumn:"span 2",justifyContent:"space-around",display:"flex",flexDirection:"column"},hr:{color:h,margin:0}};return l.createElement("div",null,l.createElement("hr",{style:b.hr}),l.createElement("article",{style:b.article},l.createElement("div",{style:b.thumbnailWrapper},l.createElement(a.Link,{id:"nohighlight","aria-label":"Read more about "+s,to:"/blog/"+c+"/"},l.createElement(i.G,{image:g,alt:"Thumbnail for "+s}))),l.createElement("div",{style:b.info},l.createElement(a.Link,{"aria-label":"Read more about "+s,to:"/blog/"+c+"/",style:b.heading},s),l.createElement("h5",null,d),l.createElement("p",null,u),l.createElement("div",{style:b.blogFooterTags},m.map((e=>l.createElement(a.Link,{key:e,to:"/tags/"+e.replace(/ /g,"-")+"/",style:b.tag},e)))))))}},6385:function(e,t,n){n.r(t),n.d(t,{Head:function(){return c}});var l=n(7294),a=n(4854),i=n(6050),r=n(9357),o=n(789);const c=e=>{let{location:t}=e;return l.createElement(r.Z,{title:"Music",location:t})};t.default=e=>{let{data:t}=e;return l.createElement(i.Z,null,l.createElement("div",{style:{display:"flex",flexWrap:"wrap",flexDirection:"column",alignItems:"center"}},l.createElement("h1",null,"Code Posts"),l.createElement("p",null,"A collection of posts with original music, playlists and music theory included. In addition to post about code I also write about ",l.createElement(a.Link,{"aria-label":"Over to Music",to:"/music/"},"music"),", too."),t.allMdx.nodes.map(((e,t)=>l.createElement(o.Z,{key:t,node:e,path:"blog",idx:t})))))}}}]);
//# sourceMappingURL=component---src-pages-code-index-js-222c9530a7a3e7f86c66.js.map