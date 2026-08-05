// gsap.to(".quadrado", {
//     x: 200,
//     duration: 3,
//     backgroundColor: "red"
// })

// gsap.from(".quadrado", {
//     x: 200,
//     duration: 3,
//     backgroundColor: "red"
// })

gsap.fromTo(".quadrado", {
    x: -200,
    y:100
}, {
    x: 100,
    y: -200,
    backgroundColor: "green",
    duration: 3,
})