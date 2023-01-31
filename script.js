  function init(){
      gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();


  }

  init();

  gsap.from("#left",{
    scrollTrigger:{
      scroller:"#main",
      start:"top 60%",
      trigger:"#left",
    },
    x: -800,
    opacity:1,
    duration:2,
    ease:"back.inOut"
  })
  gsap.from("#right",{
    scrollTrigger:{
      scroller:"#main",
      start:"top 60%",
      trigger:"#right",
    },
    x: 800,
    opacity:1,
    duration:2,
    ease:"back.inOut"
  })


  var lit = gsap.timeline();

  lit.from("#nav",{
    scrollTrigger:{
      scroller:"#main",
      start:"top 60%",
      trigger:"#nav",
    },
    y: -100,
    opacity:0,
    duration:2,
    delay:1,
    ease:"expo.inOut"
  })

  lit.from("#nav img",{
    scrollTrigger:{
      scroller:"#main",
      start:"top 60%",
      trigger:"#nav img",
    },
    rotate: -260,
    opacity:0,
    duration:2,
    ease:"expo.inOut"
  })


  lit.from("#text",{
    scrollTrigger:{
      scroller:"#main",
      start:"top 60%",
      trigger:"#text",
      // markers:true
    },
    x: -100,
    opacity:0,
    delay:-2,
    duration:2,
    ease:"expo.inOut"
  })

  var temp = gsap.timeline();

  temp.to("#three",{
    scrollTrigger:{
      scroller: "#main",
      start:"top 30%",
      trigger: "#three",
    },
    y :"-110%",
    delay: 7,
    duration: 2,
    ease:Expo.inOut
  })



  temp.from("#one h1",{
    scrollTrigger:{
      scroller:"#main",
      start:"top 60%",
      trigger:"#one h1"
    },
    y: -200,
    opacity:0,
    duration:2,
    ease:"back.inOut"
  })

  temp.to("#two",{
    scrollTrigger:{
      scroller: "#main",
      start:"top 30%",
      trigger: "#three",
    },
    y :"-100%",
    height:"80%",
    delay:-1.5,
    duration:2,
    ease:"Elastic.easeInOut" 
  })

  temp.to("#two",{
    scrollTrigger:{
      scroller: "#main",
      start:"top 30%",
      trigger: "#three",
    },
    height:"50%",
    duration:2,
    ease:"Elastic.easeinOut" 
  })

  temp.to("#one",{
    scrollTrigger:{
      scroller: "#main",
      start:"top 30%",
      trigger: "#one",
    },
    // y :"0%",
    duration:2,
    ease:Expo.inOut
  })

  document.querySelector("#blocks")
  .addEventListener("mouseenter",function(){
    gsap.to("#cd1",{
      rotate: "-50deg", 
      
    })
  })

  document.querySelector("#blocks")
  .addEventListener("mouseenter",function(){
    gsap.to("#cd3",{
      rotate: "50deg",
      // skew: 30

    })
  })
  document.querySelector("#blocks")
  .addEventListener("mouseleave",function(){
    gsap.to("#cd1",{
      rotate: "0deg"
      
    })
  })

  document.querySelector("#blocks")
  .addEventListener("mouseleave",function(){
    gsap.to("#cd3",{
      rotate: "0deg"

    })
  })

  // var til = gsap.timeline();

  document.querySelector("#cd3")
  .addEventListener("mouseenter",function(){
    gsap.to("span",{
      marginTop: -250,
      opacity:1
    })
  })

  document.querySelector("#cd3")
  .addEventListener("mouseleave",function(){
    gsap.to("span",{
      marginTop: 0,
      opacity:0
    })
  })

  document.querySelector("#in2")
  .addEventListener("mouseenter",function(){
      gsap.to("#in2",{
        marginTop:-100,
        opacity:1
      })
  })

  document.querySelector("#in2")
  .addEventListener("mouseleave",function(){
      gsap.to("#in2",{
        marginTop:0,
        opacity:0
      })
  })


