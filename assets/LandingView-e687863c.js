import{_ as d,F as l,r as a,o as c,c as r,b as t,d as s,w as n,e as _,f as e}from"./index-b6c3cfd5.js";const h="/assets/landingPage-4ce1da9a.png";const u={name:"LandingView",components:{Footer:l}},p={class:"header-landing"},g={class:"header-component"},m=t("div",null,[t("i",{class:"fa-solid fa-bars"}),t("i",{class:"fa-solid fa-magnifying-glass"})],-1),f=t("div",{class:"store-name"}," Shampoo Store ",-1),v=t("button",{id:"login",type:"submit"},"Login",-1),b=t("button",{id:"signup",type:"submit"},"Signup",-1),y={class:"header-nav"},k={class:"header-nav-list"},w=t("li",{class:"nav-list"},"Shampoo",-1),x=t("li",{class:"nav-list"},"Conditioner",-1),V=t("li",{class:"nav-list"},"About us",-1),F=t("div",{class:"extend"},null,-1),S={id:"landing-page"},L=t("img",{id:"landing-page-image",src:h},null,-1),$={class:"landing-page-content"},B=t("div",{id:"quote"},[e("Healthy Hair? "),t("br"),e(" Starts here!")],-1),C=t("div",{id:"company-strength"},[e(" Purchase your daily hair product here! with affordable "),t("br"),e(" price, high quality product from around the world "),t("br"),e(" with multi brand ")],-1),N=t("button",{id:"get-start"},"Get start!",-1);function q(H,P,A,E,G,T){const o=a("router-link"),i=a("Footer");return c(),r(_,null,[t("header",p,[t("div",g,[m,f,t("div",null,[s(o,{class:"router-link",to:"/login"},{default:n(()=>[v]),_:1}),s(o,{class:"router-link",to:"/signup"},{default:n(()=>[b]),_:1})])]),t("div",y,[t("ul",k,[s(o,{class:"router-link",to:"/shampoo"},{default:n(()=>[w]),_:1}),x,V])]),F]),t("div",S,[L,t("div",$,[B,C,s(o,{class:"router-link",to:"/home"},{default:n(()=>[N]),_:1})])]),s(i)],64)}const z=d(u,[["render",q]]);export{z as default};
