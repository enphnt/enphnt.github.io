"use strict";(self.webpackChunknathan_phennel_website=self.webpackChunknathan_phennel_website||[]).push([[942],{789:function(e,t,l){var n=l(7294),a=l(4854),r=l(8032);const i=["lightgray","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgreen","lightpink","lightsalmon","lightseagreen","lightskyblue"];let o=0;t.Z=e=>{let{node:{id:t,frontmatter:{thumbnail:l,slug:g,title:c,date:m,tags:s},excerpt:d}}=e;const h=(0,r.c)(l),u={article:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(9em, 1fr))",gridGap:"1em",maxWidth:"99%",padding:"1em 1em"},tag:{padding:4,margin:"4px",backgroundColor:"#e0e0e0",color:"inherit",borderRadius:"4px",textDecoration:"none"},blogFooterTags:{display:"flex",flexWrap:"wrap"},heading:{marginTop:0,fontSize:"1.6em",fontWeight:600,textDecorationLine:"underline",textDecorationStyle:"solid",textDecorationColor:i[1+o++%i.length],textDecorationThickness:1},thumbnailWrapper:{margin:"0.5em 0 0 0",justifySelf:"center"},info:{gridColumnEnd:"span 3"},hr:{color:i[o++%i.length],margin:0}};return n.createElement("div",null,n.createElement("hr",{style:u.hr}),n.createElement("article",{style:u.article,key:t},n.createElement("div",{style:u.thumbnailWrapper},n.createElement(a.Link,{id:"nohighlight","aria-label":g,key:g,to:"/blog/"+g+"/"},n.createElement(r.G,{image:h,alt:"Thumbnail for "+c}))),n.createElement("div",{style:u.info},n.createElement(a.Link,{"aria-label":g,key:g,to:"/blog/"+g+"/",style:u.heading},c),n.createElement("h5",null,m),n.createElement("p",null,d),n.createElement("div",{style:u.blogFooterTags},s.map((e=>n.createElement(a.Link,{key:e,to:"/tags/"+e.replace(/ /g,"-")+"/",style:u.tag},e)))))))}},6602:function(e,t,l){l.r(t);var n=l(7294),a=l(4854),r=l(6050),i=l(9357),o=l(789);t.default=e=>{let{pageContext:t,data:l}=e;const{tag:g}=t,{edges:c,totalCount:m}=l.allMdx,s="Found "+m+" post"+(1===m?"":"s")+' tagged with "'+g+'"',d=()=>n.createElement("div",{style:{textAlign:"center",margin:16}},n.createElement(a.Link,{to:"/tags/"},"Show all tags"));return n.createElement(r.Z,null,n.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},n.createElement("h1",null,'Tag: "',g,'"'),n.createElement("h2",null,s),n.createElement(d,null)),c.map((e=>{let{node:t}=e;return n.createElement(o.Z,{key:t.id,node:t})})),n.createElement("br",null),n.createElement(d,null),n.createElement(i.Z,{title:"Tagged with: '"+g+"'"}))}}}]);
//# sourceMappingURL=component---src-templates-tags-js-617c931cad4334164c50.js.map