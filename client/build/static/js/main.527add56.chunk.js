(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{115:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(9),c=a.n(r),i=a(22),s=a(155),o=a(156),l=a(150),u=a(159),d=a(154),j=a(144),p=Object(j.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),b=a(147),m=a(149),g=a(158),A=a(151),f=a(152),h=a(72),x=a.n(h),O=a(73),v=a.n(O),y=a(71),C=a.n(y),B=a(69),w=a.n(B),k=a(19),I=a.n(k),N=a(35),D=a(36),S=a.n(D),Q="https://merories-project.herokuapp.com/posts",T=function(e,t){return S.a.patch("".concat(Q,"/").concat(e),t)},F=function(e){return S.a.delete("".concat(Q,"/").concat(e))},E=function(e){return S.a.patch("".concat(Q,"/").concat(e,"/likePost"))},Y="CREATE",z="FETCH_ALL",H="UPDATE",L="DELETE",U="LIKE",Z=a(18),J=a(4),R=function(e){var t=e.post,a=e.setCurrentId,n=p(),r=Object(Z.b)();return Object(J.jsx)(J.Fragment,{children:Object(J.jsxs)(b.a,{className:n.card,children:[Object(J.jsx)(m.a,{className:n.media,image:t.selectedFile,title:t.title}),Object(J.jsxs)("div",{className:n.overlay,children:[Object(J.jsx)(l.a,{variant:"h6",children:t.creator}),Object(J.jsx)(l.a,{variant:"body2",children:w()(t.createdAt).fromNow()})]}),Object(J.jsx)("div",{className:n.overlay2,children:Object(J.jsx)(g.a,{style:{color:"white"},size:"small",onClick:function(){return a(t._id)},children:Object(J.jsx)(C.a,{fontSize:"default"})})}),Object(J.jsx)("div",{className:n.details,children:Object(J.jsx)(l.a,{variant:"body2",color:"textSecondary",children:t.tags.map((function(e){return"#".concat(e," ")}))})}),Object(J.jsxs)(A.a,{children:[Object(J.jsx)(l.a,{variant:"h5",gutterBottom:!0,className:n.title,children:t.title}),Object(J.jsx)(l.a,{variant:"p",color:"textSecondary",children:t.message})]}),Object(J.jsxs)(f.a,{className:n.cardActions,children:[Object(J.jsxs)(g.a,{color:"primary",size:"small",onClick:function(){return r((e=t._id,function(){var t=Object(N.a)(I.a.mark((function t(a){var n,r;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,E(e);case 3:n=t.sent,r=n.data,a({type:U,payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()));var e},children:[Object(J.jsx)(x.a,{fontSize:"small"}),"Like \xa0",t.likeCount]}),Object(J.jsxs)(g.a,{color:"textDanger",size:"small",onClick:function(){return r((e=t._id,function(){var t=Object(N.a)(I.a.mark((function t(a){return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,F(e);case 3:a({type:L,payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0.message);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()));var e},children:[Object(J.jsx)(v.a,{fontSize:"small"}),"Delete"]})]})]})})},P=Object(j.a)((function(e){return{mainContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}})),W=a(153),V=function(e){var t=e.setCurrentId,a=Object(Z.c)((function(e){return e.posts})),n=P();return console.log(a),a.length?Object(J.jsx)(d.a,{className:n.container,container:!0,alignItems:"stretch",spacing:3,children:a.map((function(e){return Object(J.jsx)(d.a,{item:!0,xs:12,sm:6,md:6,children:Object(J.jsx)(R,{post:e,setCurrentId:t})},e._id)}))}):Object(J.jsx)(W.a,{})},M=a(14),G=Object(j.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10}}})),K=a(77),X=a(157),q=a(74),_=a.n(q),$=function(e){var t=e.currentId,a=e.setCurrentId,r=G(),c=Object(n.useState)({creator:"",title:"",tags:"",message:"",selectedFile:""}),s=Object(i.a)(c,2),o=s[0],u=s[1],d=Object(Z.c)((function(e){return t?e.posts.find((function(e){return e._id===t})):null})),j=Object(Z.b)();Object(n.useEffect)((function(){d&&u(d)}),[d]);var p=function(){a(null),u({creator:"",title:"",tags:"",message:"",selectedFile:""})};return Object(J.jsx)(J.Fragment,{children:Object(J.jsx)(K.a,{className:r.paper,children:Object(J.jsxs)("form",{autoComplete:"off",className:"".concat(r.root," ").concat(r.form),noValidate:!0,onSubmit:function(e){e.preventDefault(),j(t?function(e,t){return function(){var a=Object(N.a)(I.a.mark((function a(n){var r,c;return I.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,T(e,t);case 3:r=a.sent,c=r.data,n({type:H,payload:c}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0.message);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()}(t,o):function(e){return function(){var t=Object(N.a)(I.a.mark((function t(a){var n,r;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c=e,S.a.post(Q,c);case 3:n=t.sent,r=n.data,a({type:Y,payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}var c}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}(o)),p()},children:[Object(J.jsxs)(l.a,{variant:"h6",children:[t?"Editing":"Creating"," a Memories"]}),Object(J.jsx)(X.a,{name:"creator",label:"Creator",variant:"outlined",fullWidth:!0,value:o.creator,onChange:function(e){return u(Object(M.a)(Object(M.a)({},o),{},{creator:e.target.value}))}}),Object(J.jsx)(X.a,{name:"title",label:"Title",variant:"outlined",fullWidth:!0,value:o.title,onChange:function(e){return u(Object(M.a)(Object(M.a)({},o),{},{title:e.target.value}))}}),Object(J.jsx)(X.a,{name:"message",label:"Message",variant:"outlined",fullWidth:!0,value:o.message,onChange:function(e){return u(Object(M.a)(Object(M.a)({},o),{},{message:e.target.value}))}}),Object(J.jsx)(X.a,{name:"tags",label:"Tags",variant:"outlined",fullWidth:!0,value:o.tags,onChange:function(e){return u(Object(M.a)(Object(M.a)({},o),{},{tags:e.target.value.split(",")}))}}),Object(J.jsx)("div",{className:r.fileInput,children:Object(J.jsx)(_.a,{type:"file",multiple:!1,onDone:function(e){var t=e.base64;return u(Object(M.a)(Object(M.a)({},o),{},{selectedFile:t}))}})}),Object(J.jsx)(g.a,{className:r.buttonSubmit,variant:"contained",color:"primary",type:"submit",size:"larger",fullWidth:!0,children:"Submit"}),Object(J.jsx)(g.a,{variant:"contained",color:"secondary",size:"small",onClick:p,fullWidth:!0,children:"Clear"})]})})})},ee=a(12),te=Object(j.a)((function(e){return Object(ee.a)({appBar:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},heading:{color:"rgba(0,183,255, 1)"},image:{marginLeft:"15px"}},e.breakpoints.down("sm"),{mainContainer:{flexDirection:"column-reverse"}})})),ae=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],r=t[1],c=te(),j=Object(Z.b)();return Object(n.useEffect)((function(){j(function(){var e=Object(N.a)(I.a.mark((function e(t){var a,n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.get(Q);case 3:a=e.sent,n=a.data,t({type:z,payload:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[a,j]),Object(J.jsx)(J.Fragment,{children:Object(J.jsxs)(s.a,{maxidth:"lg",children:[Object(J.jsxs)(o.a,{className:c.appBar,position:"static",color:"inherit",children:[Object(J.jsx)(l.a,{className:c.heading,variant:"h4",align:"center",children:"Memories"}),Object(J.jsx)("img",{className:c.image,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAPBAAADwQB6IymYgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAcKSURBVHja5ZtbTBRXGMetvWjaNKa12kvSmzUa28c++NK0Nq1JTZomCsutws4MsAvIwi6KVG30zHIrYooRrdemtbZW6gW1qbeqrIgoILaIWKQIIrLusju7s6x4l+l3KBAou8POzJlltQ//GISZc/6/+c4537mNEQRhzP9Zqr04MjZ7hoZGqeEUygVt0lCoVKNFJ+HfRlAL6ES4Fm3Dv4f/18HPn0Tr0AsPLQCKQuOxCTBT3GdQkKH7oKMamk2OTsh98aEAMG9+7ssRFFoHFe+WadqfHvRGCc3SCKGxIQdAE4+ej6BRAVTyJmHjvlQXrmU/CgkAGg16CsJ8OVTKEwTjQ0WjfZFxaNqoAYhi0CtQkdNBNz5Ud6FZLAk6AA2D3oPCr4+y+QHB6PE9jsagAIDCUjD5UDE/SBbcF6kKAMybybRf9nZUvLk9Ljm/PiYxpymCZjkNxfYQeHcTQJiqCgCopFZuxSIo9kb6F8UVB45X1bR1dLqdvEf4r2yc686FxtYrRet3WjAUBRCaY2LynyMKAL78LLlhn7l8ffk1u+OGL9NiOlpeey6KMVtlQjgoJ1/w0+FlT4cXuuQkLyV7yyqlGh+stg67S5uSXycr6rQoTzGAOYY143rblYwK5BdtL1Nivl+X26x2aH6d8iCwYYoAwARlscw27+p0ue+RAIBVvHmPRWZT8MyNy5soCwCejcELeDkFG7LWnCJlHgs6x1YFneJKWQD6JjWyCv159zGiALCi43PkQriJJ2mSAPTO37XonlwAtfVNTaQB6E1FZxRkimslAYCZ3VYlCUldQ/Nl0gCSTF9XKajTnXnxOa8HBKB3hiez7Q8AuHi5JcQABDQs/tvz0+hTpSlpKALA6wgBAVAa/iEMQIiic14VBdAX/u5HFUA4zerFAVDsbBKzvbq/yANIVjAKDNJ+cQA0SlVaCOTu5ztd/H3SAH49UllNAEC32CRpDM6alBbyy14L8SSoXzEJ2S3K1yLyJvkFACNAidICKqrr69UCkJBWeFZp/cK05nfEIuC0cgAXLoQygIg49kMxANZHHYCGZiPFANx+1JsAZIRpYgCuKi1gR+lxVTpBh5t/EEmzipfiIyg2SwyA4rGWSV1ZS3IxZGAYPFxZRWgPIUosD9hDohBz4Q9lJM2v2bTbAkkakb2IMNo80y8AJYsggxXJmG04ZEmYb77SYYMPc4/UBsrcWDTZfwRo2WWkCjpece5PEgBWFu8oI7h71C2aCuP9d1KFGZeuO6nUvJ1z341k2A6CABpEAYQxaArB7et7DU2tV5UAWL1h1wnC+4elI68IUegssShYsrZCrvmmlmt2vKVGEgDe3ht5RUjmXoA/HTh25oys6e/ComrCX7/7M6bg2ZEjIDb7TaLUGbMVDEmaHm8tOVxB/AyBFm0PeFVYo0U1JAsHU7elAMgr2u53JyiaWiGs1i8S9qUYhD/S9MJpQ7JQkpwuJDFf+i0/BX5Xl6bf6zTRFpeJOcuZ6I0gWtDpnvQNgGIzQxFAevwybESAyg+TzcgIG/QZw57ZkpQhdBqZHl/PYBiOdGb6cAC6rybAw7ZQAmAA89ikLyP9gi8sZCdmDTxToMsU/fs+eflM7VvDt8ZoNJ9gH9AjBcDmbb+VD8ks8W6TQR+IGaHdGC8kQ8hjYNYRgA3ISJ8UEBo7/GwAPnejEIBp6bpyqSPApdb2IcnPqsC+5IBw39CQppP0DJdBaYYDoNHbSg5EzdflXoRUnpO1Jf5tqaX/3NDBBanSzMgStcXP2aDeE6AS59zoFluw1XLN5vAqyQT3HzpVFZ2Y09yanhAEAHSrTwCxsYXPSMgOH+A5AA5hkgshnQsT7wcBgN1vgoBPWUBuUC9mHi9X1dQ1XlJjNYjLzlQ/AjLoevHToRR6ydd5oc91OY2HLDW1aq0D9gL4pjAYfcCukY/IxqHXwHRb36JHx4+7fq9wuKUNcbJUXak6AKeJ+TjQo/FToZ0faLc5ulQ33i83L3BmVZtBg6TD0te93klOj2d/0ABgWY6oBsBlpKNl3Rdw8nwy6GawIHAl36sQ+lS+ohsjTq93BvQDFUFrCptWEzRP/wS2HyNyZ8jhds+CSh5WE4CD9zgc9utmbrF+p2IARuo7v9NhRSB4/l0n37WTcNNogj4nzWq1Pt1fDuTuZpnme5wZ9BLV7w22CsJ4judng1YBjPMSDfPwzB6AmWTn+Sl+m5+RigVDdySYv4UnPUG/OIll83on4+hweTxznO4urYPvWgQmCziPZwXuTAFUWKfb+76jqwsvUDwe6HvdJvoDMMYFkuo60+mZo3JzVG05MuKmuUz032LjvNtIvTFqV2eDoa4FcRPxwoaPxY4jrizdhFG9Oxw0GQzj8NA2CMBGAaEnRv3ydLDFZTCIMzELQ+b2+MOifwDrdyDXNaVdBQAAAABJRU5ErkJggg==",alt:"memories",height:"60"})]}),Object(J.jsx)(u.a,{in:!0,children:Object(J.jsx)(s.a,{children:Object(J.jsxs)(d.a,{className:c.mainContainer,container:!0,justify:"space-between",alignItems:"stretch",spacing:3,children:[Object(J.jsx)(d.a,{item:!0,xs:12,sm:7,children:Object(J.jsx)(V,{setCurrentId:r})}),Object(J.jsx)(d.a,{item:!0,xs:12,sm:4,children:Object(J.jsx)($,{currentId:a,setCurrentId:r})})]})})})]})})},ne=a(34),re=a(75),ce=a(21),ie=Object(ne.b)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return e.filter((function(e){return e._id!==t.payload}));case H:case U:return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case z:return t.payload;case Y:return[].concat(Object(ce.a)(e),[t.payload]);default:return e}}}),se=Object(ne.d)(ie,Object(ne.c)(Object(ne.a)(re.a)));c.a.render(Object(J.jsx)(Z.a,{store:se,children:Object(J.jsx)(ae,{})}),document.getElementById("root"))}},[[115,1,2]]]);
//# sourceMappingURL=main.527add56.chunk.js.map