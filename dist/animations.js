"use strict";(()=>{window.addEventListener("DOMContentLoaded",o=>{let a=new SplitType("[text-split]",{types:"words, chars",tagName:"span"});function r(e,t){ScrollTrigger.create({trigger:e,start:"top bottom",onLeaveBack:()=>{t.progress(0),t.pause()}}),ScrollTrigger.create({trigger:e,start:"top 60%",onEnter:()=>t.play()})}$("[words-slide-from-right]").each(function(e){let t=gsap.timeline({paused:!0});t.from($(this).find(".word"),{opacity:0,x:"1em",duration:.6,ease:"power2.out",stagger:{amount:.2}}),r($(this),t)}),gsap.set("[text-split]",{opacity:1})});})();
