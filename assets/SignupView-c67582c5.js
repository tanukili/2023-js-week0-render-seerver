import{_ as l,o as d,c as p,a as s,d as n,v as a}from"./index-0fd1302a.js";const u={data(){return{user:{email:"",password:"",role:"user"}}},methods:{signup(){this.axios.post("https://two023-js-week0-server.onrender.com/signup",this.user).then(()=>{alert("註冊成功"),window.location.href="#/login"}).catch(r=>{alert(`註冊失敗：${r.response.data}`)})}}},c={class:"container mt-5"},m=s("h1",null,"註冊",-1),_={action:"#"},w={class:"mb-3"},h=s("label",{for:"email",class:"me-2"},"信箱",-1),f={class:"mb-3"},v=s("label",{for:"password",class:"me-2"},"密碼",-1);function b(r,e,g,x,o,i){return d(),p("div",c,[m,s("form",_,[s("div",w,[h,n(s("input",{type:"email",id:"email","onUpdate:modelValue":e[0]||(e[0]=t=>o.user.email=t)},null,512),[[a,o.user.email]])]),s("div",f,[v,n(s("input",{type:"password",id:"password","onUpdate:modelValue":e[1]||(e[1]=t=>o.user.password=t)},null,512),[[a,o.user.password]])]),s("input",{type:"sybmit",class:"btn btn-primary",value:"註冊",onClick:e[2]||(e[2]=(...t)=>i.signup&&i.signup(...t))})])])}const k=l(u,[["render",b]]);export{k as default};