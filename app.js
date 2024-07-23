
const main = document.querySelector("#main")

// Locomotive-Scroll

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,

});

// Gsap - Navlinks 

gsap.from(".nav-link",{
    stagger: .3,
    y:20,
    duration: 1,
    ease: Power3,
    opacity: 0,
})

// Gsap - Homepage elements loading
gsap.from('.homepage-section',{
    stagger: .2,
    y:90,
    opacity:0,
    ease: Expo,
    duration:1,
  })

// Gsap - Homepage Image effect 
gsap.from('#hero #image-text img',{
    z:7,
    duration:2,
    ease: Expo,
})


// Shery Js effects 

// Homepage Heading effects  - Page section 1 

Shery.textAnimate("#hero-headings h1", {
    style: 2 ,
    y: 10,
    delay: 0.3,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: .1,
  });

  
// Homepage Images Effect - Page section 1 and 2

Shery.imageEffect('#hero #image-text img',{
    style: 3,
    config: {"uFrequencyX":{"value":11.45,"range":[0,100]},"uFrequencyY":{"value":6.11,"range":[0,100]},"uFrequencyZ":{"value":39.69,"range":[0,100]},"geoVertex":{"range":[1,64],"value":17.35},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.75},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.24,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},

})

Shery.imageEffect('.image-effect img',{
    style: 5,
    config:{"a":{"value":2,"range":[0,30]},"b":{"value":-0.8,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.714294018485148},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.46,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},

})

// Banner-Picture image Gooey Effect - Page section 3

Shery.imageEffect('#banner-picture ',{
    style:5,
    config:{"a":{"value":0.46,"range":[0,30]},"b":{"value":-0.97,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.2633681883873162},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.24,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.193692,"range":[0,2],"_gsap":{"id":31}},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.29,"range":[0,2]},"noise_scale":{"value":14.5,"range":[0,100]}},
    gooey:true,
})


// Future Effect of the video

document.querySelector('#future-text button')
.addEventListener('mouseover',function(){
    gsap.to('#future-section video',{
        opacity:1,
        duration:1,
        ease: Power4,
    })
})

document.querySelector('#future-text button')
.addEventListener('mouseleave',function(){
    gsap.to('#future-section video',{
        opacity:0,
        duration:1,
        ease: Power4,
    })
})