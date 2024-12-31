// Initialize Locomotive Scroll v5
document.addEventListener('DOMContentLoaded', function () {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,         // Enable smooth scrolling
        multiplier: 1,        // Scroll speed multiplier
        class: 'is-scrolling',  // Class added to body when scrolling
        getSpeed: true,        // Capture speed during scrolling
        lerp: 0.1              // Smoothing factor
    });

    // If you want to listen to scroll events
    // scroll.on('scroll', (args) => {
    //     console.log(args);
    // });
});
