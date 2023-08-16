var cursor = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")

var h4 = document.querySelectorAll("#nav h4")

var h4set = document.querySelectorAll(".set1 h4")
var h4set2 = document.querySelectorAll(".set2 h4")


h4set.forEach(function(ele){
    ele.addEventListener("mouseenter",function(){
        cursor.style.scale = 3
        cursor.style.border = "0.5px solid #fff"
        cursor.style.backgroundColor = "transparent"
    })
    ele.addEventListener("mouseleave",function(){
        cursor.style.scale = 1
        cursor.style.border = "0px solid #fff"
        cursor.style.backgroundColor = "#95C11E"
    })

})

h4.forEach(function(ele){
    ele.addEventListener("mouseenter",function(){
        cursor.style.scale = 3
        cursor.style.border = "0.5px solid #fff"
        cursor.style.backgroundColor = "transparent"
    })
    ele.addEventListener("mouseleave",function(){
        cursor.style.scale = 1
        cursor.style.border = "0px solid #fff"
        cursor.style.backgroundColor = "#95C11E"
    })

})

document.addEventListener("mousemove",function(e){
    cursor.style.left = e.x  -10+ "px"
    cursor.style.top = e.y -10 + "px"
    blur.style.left = e.x - 200 +"px"
    blur.style.top = e.y - 200 + "px"
})




gsap.to('#nav',{
    backgroundColor:"#000",
    height:"110px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scoller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1

    }
})

gsap.to('#main',{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -26%",
        end:"top -70%",
        scrub:1,

    }
})


gsap.from("#about-us img,#about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"end 55%",
        scrub:2
    }

})


gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"end 65%",
        scrub:2
    }

})

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scoller:"body",
        markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:4

    }
})


gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scoller:"body",
        markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:4

    }
})

gsap.from("#page4 h1" ,{
    y:40,
    scrollTrigger:{
        trigger:"#page4 h1",
        scoller:"body",
        markers:true,
        start:"top 75%",
        end:"top 70%",
        scrub:4
    }
})