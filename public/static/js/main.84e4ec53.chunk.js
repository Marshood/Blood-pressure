(this.webpackJsonpdemo=this.webpackJsonpdemo||[]).push([[0],{19:function(e,t,a){e.exports=a(36)},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},28:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(16),c=a.n(r),o=(a(24),a(6)),u=(a(25),a(26),a(11)),i=a.n(u),m=a(17),s=(a(28),a(1));function d(){var e=Object(s.f)();return l.a.createElement("div",{className:"RegisterForm"},l.a.createElement("div",{className:"divh1Register"},"Register ",l.a.createElement("br",null)),l.a.createElement("div",{className:"RegisterBox"},l.a.createElement("form",null,l.a.createElement("div",null,l.a.createElement("label",null,l.a.createElement("b",null,"Username:")),l.a.createElement("br",null),l.a.createElement("input",{type:"text",id:"UserName",placeholder:"Enter Username",name:"uname",required:!0})),l.a.createElement("div",null,l.a.createElement("label",null,l.a.createElement("b",null,"Email:")),l.a.createElement("br",null),l.a.createElement("input",{type:"text",id:"UserMail",placeholder:"Enter email",name:"umail",required:!0})),l.a.createElement("div",null,l.a.createElement("label",null,l.a.createElement("b",null,"Password:")),l.a.createElement("br",null),l.a.createElement("input",{type:"password",id:"Password",placeholder:"Enter Password",name:"psw",required:!0})),l.a.createElement("br",null),l.a.createElement("input",{className:"button",type:"submit",value:"Register",onClick:function(e){!function(e){t.apply(this,arguments)}(e)}}),l.a.createElement("button",{className:"button",type:"",value:"Login",onClick:function(){e.push("/Login")}},"Login"))));function t(){return(t=Object(m.a)(i.a.mark((function t(a){var n,l,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n=document.getElementById("UserName").value,l=document.getElementById("UserMail").value,r=document.getElementById("Password").value,t.next=6,fetch("/AddUser",{method:"PUT",body:JSON.stringify({UserName:n,UserMail:l,Password:r}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){console.log("SuccessRRRR:",t[0].success),t[0].success?e.push("/Login"):alert("User Exist in DB....")})).catch((function(e){console.error("Error:",e)}));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}a(34);function E(){var e=Object(s.f)(),t=Object(n.useState)(),a=Object(o.a)(t,2),r=a[0];a[1];return Object(n.useEffect)((function(){}),[r]),l.a.createElement("body",null,l.a.createElement("div",{className:"loginForm"},l.a.createElement("div",{className:"divh1"},"Blood pressure",l.a.createElement("br",null)),l.a.createElement("div",{className:"LoginBox"},l.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),console.log("SaveToDB");var t=e.target.systolic.value,a=e.target.diastolic.value,n=e.target.HeartRate.value,l=e.target.gender.value;console.log(t,a,n,"radio ",l),fetch("/addBloodPressure",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({systolic:t,diastolic:a,HeartRate:n,radio:l})}).then((function(e){return e.json()})).then((function(e){console.log("Success:",e[0].success),e[0].success?alert("hola"):alert("aa")})).catch((function(e){console.error("Error:",e)}))}(e)}},l.a.createElement("div",null,l.a.createElement("input",{type:"radio",id:"male",name:"gender",value:"Dad",required:!0}),l.a.createElement("label",{htmlFor:"male"},"Dad"),l.a.createElement("input",{type:"radio",id:"female",name:"gender",value:"Mom",required:!0}),l.a.createElement("label",{htmlFor:"female"},"Mom")),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"uname"},l.a.createElement("b",null,"systolic:")),l.a.createElement("br",null),l.a.createElement("input",{type:"number",id:"systolic",placeholder:"systolic",name:"systolic",required:!0})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"psw"},l.a.createElement("b",null,"diastolic:")),l.a.createElement("br",null),l.a.createElement("input",{type:"number",id:"diastolic",placeholder:"diastolic",name:"diastolic",required:!0})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"psw"},l.a.createElement("b",null,"Heart rate:")),l.a.createElement("br",null),l.a.createElement("input",{type:"number",id:"HeartRate",placeholder:"Heart rate",name:"HeartRate",required:!0})),l.a.createElement("br",null),l.a.createElement("input",{className:"button",type:"submit",value:"Send Result"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("button",{className:"button",type:"",value:"Results",onClick:function(){e.push("/Table")}}," Results")))))}a(35);function p(){var e=Object(s.f)(),t=Object(n.useState)([]),a=Object(o.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){fetch("/getAllData").then((function(e){return e.json()})).then((function(e){var t=e;console.log(t[0]),c(t[0])}))}),[]),l.a.createElement("div",null,l.a.createElement("div",{className:"TableForm"},l.a.createElement("body",null,l.a.createElement("div",{className:""},l.a.createElement("br",null),l.a.createElement("select",{name:"SelectDadMom",onChange:function(e){return function(e){e.preventDefault();var t=e.target.value;fetch("/getNewDataWithFillters",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:t})}).then((function(e){return e.json()})).then((function(e){c(e[0])})).catch((function(e){console.error("Error:",e)}))}(e)}},l.a.createElement("option",{value:"All"},"All"),l.a.createElement("option",{value:"Dad"},"Dad"),l.a.createElement("option",{value:"Mom"},"Mom")),l.a.createElement("button",{className:"button",type:"",value:"MainPage",onClick:function(){e.push("/MainPage")}}," Back")),l.a.createElement("div",{className:"TableToShow"},l.a.createElement("table",null,l.a.createElement("thead",{className:"header__table"},l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"}," Dad/Mom "),l.a.createElement("th",{scope:"col"}," systolic "),l.a.createElement("th",{scope:"col"}," diastolic "),l.a.createElement("th",{scope:"col"}," Heart rate "),l.a.createElement("th",{scope:"col"}," Date "),l.a.createElement("th",{scope:"col"}," Time "))),l.a.createElement("tbody",null,r.map((function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null," ",e.radio," "),l.a.createElement("td",null," ",e.systolic," "),l.a.createElement("td",null," ",e.diastolic," "),l.a.createElement("td",null," ",e.HeartRate," "),l.a.createElement("td",null," ",e.Date," "),l.a.createElement("td",null," ",e.Time," "))}))))))))}var b=a(7);function h(){var e=Object(s.f)();return l.a.createElement("div",{className:"page"},l.a.createElement("h2",null,"About"),l.a.createElement("div",{onClick:function(){e.push("/")}},"Go to home"))}var f=function(){var e=Object(n.useState)(0),t=Object(o.a)(e,2);return t[0],t[1],Object(s.f)(),l.a.createElement(b.a,null,l.a.createElement("div",{className:"app"},l.a.createElement(s.c,null,l.a.createElement(s.a,{path:"/MainPage"},l.a.createElement(E,null)),l.a.createElement(s.a,{path:"/about"},l.a.createElement(h,null)),l.a.createElement(s.a,{path:"/Register"},l.a.createElement(d,null)),l.a.createElement(s.a,{path:"/Table"},l.a.createElement(p,null)),l.a.createElement(s.a,{path:"/"},l.a.createElement(E,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.84e4ec53.chunk.js.map