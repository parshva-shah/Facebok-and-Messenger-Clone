(this["webpackJsonpfb-clone"]=this["webpackJsonpfb-clone"]||[]).push([[0],{100:function(e,a,t){},101:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(19),r=t.n(l),o=(t(74),t(11)),i=(t(75),t(76),t(117)),s=(t(77),t(41)),m=t.n(s),u=t(42),d=t.n(u),p=t(43),E=t.n(p),f=Object(n.createContext)(),h=function(e){var a=e.reducer,t=e.initialState,l=e.children;return c.a.createElement(f.Provider,{value:Object(n.useReducer)(a,t)},l)},g=function(){return Object(n.useContext)(f)},v=t(22),_=t.n(v),b=(t(87),_.a.initializeApp({apiKey:"AIzaSyA_6xGl_Lsy8JKEKqqzDd8UC2bDK55bQ70",authDomain:"fb-clone-bb235.firebaseapp.com",databaseURL:"https://fb-clone-bb235.firebaseio.com",projectId:"fb-clone-bb235",storageBucket:"fb-clone-bb235.appspot.com",messagingSenderId:"641932837892",appId:"1:641932837892:web:f3787f0e8a72457dc5a151",measurementId:"G-MJ9Y00H8LQ"}).firestore()),w=_.a.auth(),N=new _.a.auth.GoogleAuthProvider,y=b;var k=function(){var e=g(),a=Object(o.a)(e,2),t=a[0].user,l=(a[1],Object(n.useState)("")),r=Object(o.a)(l,2),s=r[0],u=r[1],p=Object(n.useState)(""),f=Object(o.a)(p,2),h=f[0],v=f[1];return c.a.createElement("div",{className:"messageSender"},c.a.createElement("div",{className:"messageSender__top"},c.a.createElement(i.a,{src:t.photoURL}),c.a.createElement("form",null,c.a.createElement("input",{value:s,onChange:function(e){return u(e.target.value)},className:"messageSender__input",type:"text",placeholder:"Whats on your mind ".concat(t.displayName," ?")}),c.a.createElement("input",{value:h,onChange:function(e){return v(e.target.value)},placeholder:"image URL (optional)"}),c.a.createElement("button",{onClick:function(e){e.preventDefault(),y.collection("posts").add({message:s,timestamp:_.a.firestore.FieldValue.serverTimestamp(),profilePic:t.photoURL,username:t.displayName,image:h}),u(""),v("")},type:"submit"},"Hidden Submit"))),c.a.createElement("div",{className:"messageSender__bottom"},c.a.createElement("div",{className:"messageSender__option"},c.a.createElement(m.a,{style:{color:"red"}}),c.a.createElement("h3",null,"Live Video")),c.a.createElement("div",{className:"messageSender__option"},c.a.createElement(d.a,{style:{color:"green"}}),c.a.createElement("h3",null,"Photo/Video")),c.a.createElement("div",{className:"messageSender__option"},c.a.createElement(E.a,{style:{color:"orange"}}),c.a.createElement("h3",null,"Feeling/Activity"))))},S=(t(93),t(44)),j=t.n(S),I=t(45),C=t.n(I),F=t(47),O=t.n(F),A=t(46),P=t.n(A),L=t(118);var M=function(e){var a=e.profilePic,t=e.image,n=e.username,l=e.timestamp,r=e.message;return c.a.createElement("div",{className:"post"},c.a.createElement("div",{className:"post__top"},c.a.createElement(i.a,{src:a,className:"post__avatar"}),c.a.createElement("div",{className:"post__topicinfo"},c.a.createElement("h3",null,n),c.a.createElement("p",null,new Date(null===l||void 0===l?void 0:l.toDate()).toString()))),c.a.createElement("div",{className:"post__bottom"},c.a.createElement("p",null,r)),c.a.createElement("div",{className:"post__image"},c.a.createElement("img",{src:t,alt:""})),c.a.createElement("div",{className:"post__options"},c.a.createElement("div",{className:"post__option"},c.a.createElement(j.a,null),c.a.createElement("p",null,"Like")),c.a.createElement("div",{className:"post__option"},c.a.createElement(C.a,null),c.a.createElement("p",null,"Comment")),c.a.createElement("div",{className:"post__option"},c.a.createElement(P.a,null),c.a.createElement("p",null,"Share")),c.a.createElement("div",{className:"post__option"},c.a.createElement(O.a,null),c.a.createElement(L.a,null))))};t(94);var x=function(e){var a=e.image,t=e.profileSrc,n=e.title;return c.a.createElement("div",{style:{backgroundImage:"url(".concat(a,")")},className:"story"},c.a.createElement(i.a,{src:t,className:"story__avatar"}),c.a.createElement("h4",null,n))};t(95);var z=function(){return c.a.createElement("div",{className:"storyReel"},c.a.createElement(x,{image:"https://scontent.fbom15-1.fna.fbcdn.net/v/t1.0-9/102556938_1557129501119374_2756462065852874752_n.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=8jhTLK9i9M4AX-JsHt4&_nc_oc=AQnz4MElvdURHF9HzRlWu4YDnMnsQEVC_gUH_-XetmQI_54GhD3SVT2snwpxp4Y-Qus&_nc_ht=scontent.fbom15-1.fna&oh=e40c7c4dd141db2ec1225a4d509cc6ec&oe=5F870876",profileSrc:"https://avatars0.githubusercontent.com/u/53506172?s=400&u=8d57067e2b71e5e9516331f17c8499096bc8e11d&v=4",title:"Parshva Shah"}),c.a.createElement(x,{image:"https://www.thesun.co.uk/wp-content/uploads/2020/01/NINTCHDBPICT000552254446.jpg",profileSrc:"https://m.media-amazon.com/images/M/MV5BMTkyNDQ3NzAxM15BMl5BanBnXkFtZTgwODIwMTQ0NTE@._V1_UX214_CR0,0,214,317_AL_.jpg",title:"Dwayne Johnson"}),c.a.createElement(x,{image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQJwII9cZK7TXvuKgQ96nHmxkMcfjrLFurgUqbJ7x0GkrHHif3oIg3jPAoqB9rkSqHNSwJC7XnXwnoTdwL7it80q95cA4PjFQrQyQ&usqp=CAU&ec=45702845",profileSrc:"https://static.toiimg.com/photo/msid-75462436/75462436.jpg?737968",title:"Priyanka Chopra"}),c.a.createElement(x,{image:"https://i.pinimg.com/736x/32/87/1d/32871d564ac89cf2fe1a791effee9ca3.jpg",profileSrc:"https://i2.wp.com/www.afrinik.com/wp-content/uploads/chef-kobe.jpg?resize=700%2C459&ssl=1",title:"Kobe Yn"}))};var Q=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],l=a[1];return Object(n.useEffect)((function(){y.collection("posts").orderBy("timestamp","desc").onSnapshot((function(e){return l(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}))}),[]),c.a.createElement("div",{className:"feed"},c.a.createElement(z,null),c.a.createElement(k,null),t.map((function(e){return c.a.createElement(M,{key:e.id,profilePic:e.data.profilePic,message:e.data.message,timestamp:e.data.timestamp,username:e.data.username,image:e.data.image})})))},R=(t(96),t(48)),T=t.n(R),U=t(49),D=t.n(U),B=t(50),H=t.n(B),J=t(51),q=t.n(J),K=t(52),V=t.n(K),X=t(53),G=t.n(X),W=t(116),Y=t(54),Z=t.n(Y),$=t(55),ee=t.n($),ae=t(56),te=t.n(ae),ne=t(57),ce=t.n(ne),le=t(115),re=(t(97),t(32)),oe="SET_USER",ie=function(e,a){switch(console.log(a),a.type){case oe:return Object(re.a)(Object(re.a)({},e),{},{user:a.user});default:return e}};var se=function(){var e=g(),a=Object(o.a)(e,2),t=(a[0],a[1]);return c.a.createElement("div",{className:"login"},c.a.createElement("div",{className:"login__logo"},c.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",alt:""}),c.a.createElement("img",{src:"https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg",alt:""}),c.a.createElement("text",null,"By Parshva Shah")),c.a.createElement(le.a,{type:"submit",onClick:function(){w.signInWithPopup(N).then((function(e){t({type:oe,user:e.user})})).catch((function(e){return alert(e.message)}))}},"SignIn"))};var me=function(){var e=g(),a=Object(o.a)(e,2),t=a[0].user;return a[1],c.a.createElement("div",{className:"header"},c.a.createElement("div",{className:"header__left"},c.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",alt:""}),c.a.createElement("div",{className:"header__input"},c.a.createElement(T.a,null),c.a.createElement("input",{placeholder:"Search Facebook",type:"text"}))),c.a.createElement("div",{className:"header__middle"},c.a.createElement("div",{className:"header__option header__option--active"},c.a.createElement(D.a,{fontsize:"large"})),c.a.createElement("div",{className:"header__option"},c.a.createElement(H.a,{fontsize:"large"})),c.a.createElement("div",{className:"header__option"},c.a.createElement(q.a,{fontsize:"large"})),c.a.createElement("div",{className:"header__option"},c.a.createElement(V.a,{fontsize:"large"})),c.a.createElement("div",{className:"header__option"},c.a.createElement(G.a,{fontsize:"large"}))),c.a.createElement("div",{className:"header__right"},c.a.createElement("div",{className:"header__info"},c.a.createElement(i.a,{src:t.photoURL}),c.a.createElement("h4",null,t.displayName)),c.a.createElement(W.a,null,c.a.createElement(Z.a,null)),c.a.createElement(W.a,null,c.a.createElement(ee.a,null)),c.a.createElement(W.a,null,c.a.createElement(te.a,null)),c.a.createElement(W.a,{onClick:se()},c.a.createElement(ce.a,null))))};t(98),t(99);var ue=function(e){var a=e.src,t=e.Icon,n=e.title;return c.a.createElement("div",{className:"sidebarRow"},a&&c.a.createElement(i.a,{src:a}),t&&c.a.createElement(t,null),c.a.createElement("h4",null,n))},de=t(58),pe=t.n(de),Ee=t(59),fe=t.n(Ee),he=t(60),ge=t.n(he),ve=t(61),_e=t.n(ve),be=t(62),we=t.n(be),Ne=t(63),ye=t.n(Ne);var ke=function(){var e=g(),a=Object(o.a)(e,2),t=a[0].user;return a[1],c.a.createElement("div",{className:"sidebar"},c.a.createElement(ue,{src:t.photoURL,title:t.displayName}),c.a.createElement(ue,{Icon:pe.a,title:"Covid Info Center"}),c.a.createElement(ue,{Icon:fe.a,title:"Pages"}),c.a.createElement(ue,{Icon:ge.a,title:"Friends"}),c.a.createElement(ue,{Icon:_e.a,title:"Messenger"}),c.a.createElement(ue,{Icon:we.a,title:"MarketPlace"}),c.a.createElement(ue,{Icon:ye.a,title:"Videos"}),c.a.createElement(ue,{Icon:L.a,title:"MarketPlace"}))};t(100);var Se=function(){return c.a.createElement("div",{className:"widgets"},c.a.createElement("div",{className:"widgets__name"},c.a.createElement("h3",null,"About the developer")),c.a.createElement("iframe",{src:"https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fparshva.shah.05%2Fposts%2F1557129531119371%3A0&show_text=true&width=552&appId=851347851962462&height=530",width:"400",height:"100%",style:{border:"none",overflow:"hidden"},scrolling:"yes",frameborder:"0",allowTransparency:"true",allow:"encrypted-media"}))};var je=function(){var e=g(),a=Object(o.a)(e,2),t=a[0].user;return a[1],c.a.createElement("div",{className:"app"},t?c.a.createElement(c.a.Fragment,null,c.a.createElement(me,null),c.a.createElement("div",{className:"app__body"},c.a.createElement(ke,null),c.a.createElement(Q,null),c.a.createElement(Se,null))):c.a.createElement(se,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(h,{initialState:{user:null},reducer:ie},c.a.createElement(je,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},69:function(e,a,t){e.exports=t(101)},74:function(e,a,t){},75:function(e,a,t){},76:function(e,a,t){},77:function(e,a,t){},93:function(e,a,t){},94:function(e,a,t){},95:function(e,a,t){},96:function(e,a,t){},97:function(e,a,t){},98:function(e,a,t){},99:function(e,a,t){}},[[69,1,2]]]);
//# sourceMappingURL=main.f5a702e9.chunk.js.map