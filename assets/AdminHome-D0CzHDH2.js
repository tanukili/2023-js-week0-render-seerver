import{_ as t,R as s,e as n,f as r,o as c}from"./index--ZDjzUCv.js";const a={components:{RouterView:s},methods:{blockNotAdmin(){document.cookie.replace(/(?:(?:^|.*;\s*)role\s*=\s*([^;]*).*$)|^.*$/,"$1")!=="admin"&&(alert("您沒有權限進入"),this.$router.push("/"))}},mounted(){this.blockNotAdmin()}};function i(o,m,p,d,l,u){const e=n("RouterView");return c(),r(e)}const f=t(a,[["render",i]]);export{f as default};