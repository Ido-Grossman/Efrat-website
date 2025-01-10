document.addEventListener("DOMContentLoaded", function () {
    var controller = new ScrollMagic.Controller();

    // Define the animations in a timeline with simultaneous tweens
    var treesAnimation = gsap.timeline();
    treesAnimation
        .fromTo("#tree-1", 4, { x: "0%", scale: 1 }, { x: "10%", scale: 0.6, ease: "power3.out" }, 0)
        .fromTo("#tree-2", 3, { x: "0%", scale: 1 }, { x: "-10%", scale: 0.6, ease: "power3.out" }, 0)
        .fromTo("#tree-3", 2, { x: "0%", scale: 1 }, { x: "10%", scale: 0.6, ease: "power3.out" }, 0)
        .fromTo("#tree-4", 2, { x: "0%", scale: 1 }, { x: "0%", y: "-15%", scale: 0.6, ease: "power3.out" }, 0);

    // Single ScrollMagic Scene
    new ScrollMagic.Scene({
        triggerElement: "#section2",  // Trigger animation when this element enters the viewport
        triggerHook: 1,            // Start the animation when #section2 is 20% down the viewport
        offset: 200,                 // Delay the animation until the images are fully visible
        duration: "300%",            // Make the animation duration longer for smoother effect
        reverse: true
    })
        .setTween(treesAnimation)
        .addTo(controller);
});

// Select all elements with the 'clickable-box' class
const clickableBoxes = document.querySelectorAll('.clickable-box');

// Loop through each clickable box
clickableBoxes.forEach((box) => {

    box.addEventListener('click', () => {
        if (box.classList.contains('closed')) {
            box.classList.remove('closed');
            box.classList.add('open');
            box.src = 'images/קופסה לחיצה פתוחה.png'; // Open image
        } else {
            box.classList.remove('open');
            box.classList.add('closed');
            box.src = 'images/קופסה לחיצה סגורה.png'; // Closed image
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var controller = new ScrollMagic.Controller();

    // Parallax effect for buildings in section 3
    var parallaxTimeline = gsap.timeline();
    parallaxTimeline
        .fromTo("#building-1", { y: "0%" }, { y: "-100%", ease: "power2.out", duration: 1 }, 0)
        .fromTo("#building-2", { y: "0%" }, { y: "-50%", ease: "power2.out", duration: 1 }, 0)
        .fromTo("#building-3", { y: "0%" }, { y: "-80%", ease: "power2.out", duration: 1 }, 0)
        .fromTo("#building-4", { y: "0%" }, { y: "-30%", ease: "power2.out", duration: 1 }, 0)
        .fromTo("#building-5", { y: "0%" }, { y: "10%", ease: "power2.out", duration: 1 }, 0)
        .fromTo("#building-6", { y: "0%" }, { y: "-100%", ease: "power2.out", duration: 1 }, 0)
        .fromTo("#building-7", { y: "0%" }, { y: "-90%", ease: "power2.out", duration: 1 }, 0);

    // ScrollMagic Scene
    new ScrollMagic.Scene({
        triggerElement: "#section-3",
        triggerHook: 0.5,
        duration: "200%"
    })
        .setTween(parallaxTimeline)
        .addTo(controller);
});
