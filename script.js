document.addEventListener("DOMContentLoaded", function () {
    var controller = new ScrollMagic.Controller();

    // Define the animations in a timeline with simultaneous tweens
    var treesAnimation = gsap.timeline();
    treesAnimation
        .fromTo("#tree-1", { x: "0%", scale: 1 }, { x: "10%", scale: 0.6, duration: 0.5, ease: "power3.out" }, 0)
        .fromTo("#tree-2", { x: "0%", scale: 1 }, { x: "-10%", scale: 0.6, duration: 0.5, ease: "power3.out" }, 0)
        .fromTo("#tree-3", { x: "0%", scale: 1 }, { x: "10%", scale: 0.6, duration: 0.5, ease: "power3.out" }, 0)
        .fromTo("#tree-4", { x: "0%", scale: 1 }, { x: "0%", y: "-15%", scale: 0.6, duration: 0.5, ease: "power3.out" }, 0);

    // Single ScrollMagic Scene
    new ScrollMagic.Scene({
        triggerElement: "#section2",
        triggerHook: 0.5,
        duration: "100%",
        reverse: true
    })
        .setTween(treesAnimation)
        .addTo(controller);
});
