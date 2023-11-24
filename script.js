gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

//gsap start
// animation for logo
var t2 = gsap.timeline({ repeat: -1, repeatDelay: 1 });
t2.to(".left", {
  duration: 2,
  delay: 3,
  // repeat:-1,
  rotateY: 360,
});
t2.to(".right", {
  duration: 5,
  delay: 1,
  // repeat:-1,
  rotateX: 360,
});

// animation for links
var t1 = gsap.timeline();

t1.from(".left", {
  x: -100,
  duration: 0.3,
  opacity: 0,
});
t1.from(".right", {
  x: 100,
  duration: 0.3,
  opacity: 0,
});
t1.from(".middle", {
  scale: 5,
  duration: 0.3,
  opacity: 0,
});

// t1.from(".link h2", {
//   y: -100,
//   stagger: 0.2,

//   opacity: 0,

//   // ease:'bounce.out',
// });

//animation for page1 ==============================
var t2 = gsap.timeline();
t2.from(".circle", {
  y: 100,
  opacity: 0,
});
t2.from(".content h1", {
  y: 100,
  opacity: 0,

  stagger: 0.3,
});

//animation for name
gsap.to(".content h1:nth-child(1)", {
  x: -800,
  duration: 5,

  scrollTrigger: {
    trigger: ".content h1:nth-child(1)",
    start: "bottom 30%",
    end: "bottom 2%",
    // markers:true ,
    scrub: 1,
  },
});

gsap.to(".content h1:nth-child(2)", {
  x: 800,
  duration: 5,

  scrollTrigger: {
    trigger: ".content h1:nth-child(2)",
    start: "top 30%",
    end: "top 2%",
    // markers:true ,
    scrub: 1,
  },
});
//animation for aboutus ==============================
gsap.from(".p2container h1", {
  y: 100,
  opacity: 0,
  duration: 2,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".p2container h1",
    start: "top 75%",
    // markers:true ,
    scrub: 1,
  },
});

//animation for skills ===============================
gsap.from(".p3title h1", {
  x: -100,
  opacity: 0,
  scrollTrigger: {
    trigger: ".p3title h1",
    start: "top 75%",
    end: "top 60%",
    // markers:true ,
    scrub: 1,
  },
});
gsap.from(".p3Container h1:nth-child(2)", {
  x: -50,
  opacity: 0,
  scrollTrigger: {
    trigger: ".p3Container h1:nth-child(2)",
    start: "top 59%",
    end: "top 40%",
    // markers:true ,
    scrub: 1,
  },
});
gsap.from(".p3Container h1:nth-child(4)", {
  x: -50,
  opacity: 0,
  scrollTrigger: {
    trigger: ".p3Container h1:nth-child(4)",
    start: "top 58%",
    end: "top 45%",
    // markers:true ,
    scrub: 1,
  },
});
gsap.from(".p3Container h1:nth-child(6)", {
  x: -50,
  opacity: 0,
  scrollTrigger: {
    trigger: ".p3Container h1:nth-child(6)",
    start: "top 80%",
    end: "top 50%",
    // markers:true ,
    scrub: 1,
  },
});
gsap.from(".skill", {
  x: 100,
  opacity: 0,
  stagger: 1,
  duration: 4,
  scrollTrigger: {
    trigger: ".skill",
    start: "top 55%",
    end: "top 25%",
    // markers:true ,
    scrub: 1,
  },
});
gsap.from(".wskill", {
  x: 100,
  opacity: 0,
  stagger: 1,
  duration: 4,
  scrollTrigger: {
    trigger: ".wskill",
    start: "top 90%",
    end: "top 70%",
    // markers:true ,
    scrub: 1,
  },
});

//animation for projects
gsap.from(".page4 h1:nth-child(1)", {
  x: -100,
  opacity: 0,
  stagger: 1,
  duration: 4,
  scrollTrigger: {
    trigger: ".page4 h1:nth-child(1)",
    start: "top 75%",
    end: "top 65%",
    // markers:true ,
    scrub: 1,
  },
});

gsap.from(".project:nth-child(1)", {
  x:500,
  opacity: 0,
 
  duration: 5,
  scrollTrigger: {
    trigger: ".project:nth-child(1)",
    start: "top 90%",
    end: "top 65%",
    // markers:true ,
    scrub: 1,
  },
});
gsap.from(".project:nth-child(2)", {
  x: 500,
  opacity: 0,
 
  duration: 5,
  scrollTrigger: {
    trigger: ".project:nth-child(2)",
    start: "top 70%",
    end: "top 55%",
    // markers:true ,
    scrub: 1,
  },
});

gsap.from(".project:nth-child(3)", {
  x: 500,
  opacity: 0,
 
  duration: 5,
  scrollTrigger: {
    trigger: ".project:nth-child(3)",
    start: "top 60%",
    end: "top 45%",
    // markers:true ,
    scrub: 1,
  },
});
gsap.from(".footer ", {
  y: 20,
  opacity: 0,

  duration: 2,
  scrollTrigger: {
    trigger: ".footer",
    start: "top 90%",
    end: "top 75%",
    // markers:true ,
    scrub: 1,
  },
});
