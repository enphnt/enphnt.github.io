"use strict";(self.webpackChunknathan_phennel_website=self.webpackChunknathan_phennel_website||[]).push([[942],{789:function(e,t,n){var l=n(7294),a=n(4854),i=n(8032);const r=["lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgreen","lightpink","lightsalmon","lightseagreen","lightskyblue","lightgray"];t.Z=e=>{let{idx:t,node:{id:n,frontmatter:{thumbnail:o,slug:c,title:g,date:m,tags:d},excerpt:s}}=e;const u=(0,i.c)(o),h=r[t%r.length],{0:p,1:f}=(0,l.useState)();(0,l.useEffect)((()=>{window.addEventListener("resize",(()=>{f("span 1"),window.innerWidth<=768&&f("span 2")}))}),[]);const x={article:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gridGap:"1em",maxWidth:"99%",padding:"1em"},tag:{padding:4,margin:"4px",backgroundColor:"#e0e0e0",color:"inherit",borderRadius:"4px",textDecoration:"none"},blogFooterTags:{display:"flex",flexWrap:"wrap"},heading:{marginTop:0,fontSize:"1.3em",fontWeight:600,textDecorationLine:"underline",textDecorationStyle:"solid",textDecorationColor:h,textDecorationThickness:1,maxWidth:"max-content"},thumbnailWrapper:{margin:"0.35em 0 0 0",justifySelf:"center",gridColumn:p,maxWidth:230},info:{gridColumn:"span 2",justifyContent:"space-around",display:"flex",flexDirection:"column"},hr:{color:h,margin:0}};return l.createElement("div",null,l.createElement("hr",{style:x.hr}),l.createElement("article",{style:x.article},l.createElement("div",{style:x.thumbnailWrapper},l.createElement(a.Link,{id:"nohighlight","aria-label":"Read more about "+g,to:"/blog/"+c+"/"},l.createElement(i.G,{image:u,alt:"Thumbnail for "+g}))),l.createElement("div",{style:x.info},l.createElement(a.Link,{"aria-label":"Read more about "+g,to:"/blog/"+c+"/",style:x.heading},g),l.createElement("h5",null,m),l.createElement("p",null,s),l.createElement("div",{style:x.blogFooterTags},d.map((e=>l.createElement(a.Link,{key:e,to:"/tags/"+e.replace(/ /g,"-")+"/",style:x.tag},e)))))))}},6602:function(e,t,n){n.r(t),n.d(t,{Head:function(){return c}});var l=n(7294),a=n(4854),i=n(6050),r=n(9357),o=n(789);const c=e=>{let{location:t}=e;return l.createElement(r.Z,{title:"Tags",location:t})};t.default=e=>{let{pageContext:t,data:n}=e;const{tag:r}=t,{edges:c,totalCount:g}=n.allMdx,m="Found "+g+" post"+(1===g?"":"s")+' tagged with "'+r+'"',d=()=>l.createElement("div",{style:{textAlign:"center",margin:16}},l.createElement(a.Link,{to:"/tags/"},"Show all tags"));return l.createElement(i.Z,null,l.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},l.createElement("h1",null,'Tag: "',r,'"'),l.createElement("h2",null,m),l.createElement(d,null)),c.map(((e,t)=>{let{node:n}=e;return l.createElement(o.Z,{key:t,node:n,idx:t})})),l.createElement("br",null),l.createElement(d,null))}}}]);
//# sourceMappingURL=component---src-templates-tags-js-39b6b205bd1ace2be9ee.js.map