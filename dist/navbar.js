"use strict";(()=>{var e=document.querySelector('[bw-navbar="component"]'),i=document.querySelector('[bw-navbar="toggle-dropdown1"]'),t=document.querySelector('[bw-navbar="dropdown-icon"]'),s=document.querySelector('[bw-navbar="dropdown1"]'),c=document.querySelector('[bw-navbar="hamburger"]'),o=document.querySelector('[bw-navbar="menu"]'),l=window.scrollY;window.addEventListener("scroll",()=>{window.scrollY>300?e==null||e.classList.add("fixed-nav"):e==null||e.classList.remove("fixed-nav"),window.scrollY<l&&window.scrollY>400?e==null||e.classList.add("active-nav"):e==null||e.classList.remove("active-nav"),l=window.scrollY});var n=function(){window.innerWidth>=968?(s==null||s.classList.toggle("active-dropdown"),t==null||t.classList.toggle("is-active"),e==null||e.classList.toggle("white-nav"),document.body.classList.toggle("no-scroll")):window.innerWidth<968&&(s==null||s.classList.toggle("active-dropdown"),t==null||t.classList.toggle("is-active"))},d=function(){window.innerWidth>=968?(s==null||s.classList.remove("active-dropdown"),e==null||e.classList.remove("white-nav"),document.body.classList.remove("no-scroll")):window.innerWidth<968&&(s==null||s.classList.remove("active-dropdown"))},w=function(){o==null||o.classList.toggle("active-menu"),e==null||e.classList.toggle("white-nav"),document.body.classList.toggle("no-scroll"),c==null||c.classList.toggle("is-active")};i==null||i.addEventListener("click",n);s.addEventListener("click",d);c==null||c.addEventListener("click",w);})();
