"use strict";(()=>{var d=window.scrollY,e=document.querySelector('[bw-navbar="component"]');window.addEventListener("scroll",()=>{window.scrollY>300?e.classList.add("fixed-nav"):e.classList.remove("fixed-nav"),window.scrollY<d&&window.scrollY>400?e.classList.add("active-nav"):e.classList.remove("active-nav"),d=window.scrollY});var s=document.querySelector('[bw-navbar="toggle-dropdown1"]'),t=document.querySelector('[bw-navbar="dropdown1"]');s.addEventListener("click",()=>{window.innerWidth>991?(t.classList.toggle("active-dropdown"),e==null||e.classList.toggle("white-nav")):t.classList.toggle("active-dropdown"),t.classList.contains("active-dropdown")?(document.body.style.overflow="hidden",document.body.style.paddingRight="15px"):window.innerWidth<991?document.body.style.overflow="hidden":(document.body.style.overflow="auto",document.body.style.paddingRight="0px")});var o=document.querySelector('[bw-navbar="mobile-toggle"]'),n=document.querySelector('[bw-navbar="menu"]');o.addEventListener("click",()=>{o==null||o.classList.toggle("is-active"),n.classList.toggle("active-menu"),e==null||e.classList.toggle("white-nav"),n.classList.contains("active-menu")&&window.innerWidth<991?(document.body.style.overflow="hidden",document.body.style.paddingRight="15px"):(document.body.style.overflow="auto",document.body.style.paddingRight="0px")});})();