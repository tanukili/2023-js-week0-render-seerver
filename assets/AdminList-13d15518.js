import{_ as d,o as n,c as r,a as e,F as l,r as h,t as a,w as _}from"./index-0fd1302a.js";const p={data(){return{views:[]}},methods:{render(){this.axios.get("https://two023-js-week0-server.onrender.com/views").then(s=>{this.views=s.data,this.views.forEach(o=>{o.href=`#/admin/edit?id=${o.id}`})})},deleteView(s){console.log("刪除"),this.axios.delete(`https://two023-js-week0-server.onrender.com/views/${s}`).then(()=>{alert("刪除成功"),this.render()}).catch(()=>{alert("刪除失敗")})}},mounted(){this.render()}},u={class:"container mt-5"},m=e("h1",null,"後台介面",-1),f={class:"table table-hover"},w=e("thead",null,[e("tr",{class:"table-primary"},[e("th",{scope:"col"},"#"),e("th",{scope:"col"},"標題"),e("th",{scope:"col"},"內容"),e("th",{scope:"col"},"編輯")])],-1),b={scope:"row"},k={class:"text-nowrap"},v=["href"],$=["onClick"];function x(s,o,g,y,c,i){return n(),r("div",u,[m,e("table",f,[w,e("tbody",null,[(n(!0),r(l,null,h(c.views,t=>(n(),r("tr",{key:t.id},[e("th",b,a(t.id),1),e("td",k,a(t.name),1),e("td",null,a(t.description),1),e("td",null,[e("a",{href:t.href,class:"btn btn-outline-secondary mb-2"},"編輯",8,v),e("a",{onClick:_(B=>i.deleteView(t.id),["prevent"]),href:"#",class:"btn btn-outline-danger"},"刪除",8,$)])]))),128))])])])}const j=d(p,[["render",x]]);export{j as default};