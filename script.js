gsap.registerPlugin(MotionPathPlugin);

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

function preloadImages(imagePaths) {
    imagePaths.forEach((path) => {
        const img = new Image();
        img.src = path;
    });
}

// Preload images to prevent flickering
const imagesToPreload = [
    "images/קופסאות ציורים 1.png",
    "images/קופסאות ציורים 2.png",
    "images/קופסאות ציורים 3.png",
    "images/קופסאות ציורים 4.png"
];

imagesToPreload.forEach((src) => {
    const img = new Image();
    img.src = src;
});


document.addEventListener("DOMContentLoaded", function () {


    var controller = new ScrollMagic.Controller();

    // Define the animations in a timeline with simultaneous tweens
    var treesAnimation = gsap.timeline();
    treesAnimation.staggerFromTo(
        ["#tree-1", "#tree-2", "#tree-3", "#tree-4"],
        2,
        { x: "0%" },
        { x: (i) => (i % 2 === 0 ? "10%" : "-10%"), scale: 0.6 },
        0.2
    );

    // Single ScrollMagic Scene
    new ScrollMagic.Scene({
        triggerElement: "#section2",  // Trigger animation when this element enters the viewport
        offset: 200,                 // Delay the animation until the images are fully visible
        duration: "150%",            // Make the animation duration longer for smoother effect
    })
        .setTween(treesAnimation)
        .addTo(controller);

    // Parallax effect for buildings in section 3
    var parallaxTimeline1 = gsap.timeline();
    parallaxTimeline1
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
        .setTween(parallaxTimeline1)
        .addTo(controller);

    // Scale Animation (Triggers when #section-4 is reached)
    var scaleTimeline = gsap.timeline();
    scaleTimeline.fromTo(
        ".boxes-1, .boxes-2, .boxes-3, .boxes-4",
        { scale: 0 },
        { scale: 1, ease: "power2.out", duration: 0.5 }
    );

    // ScrollMagic Scene for Scale Animation
    new ScrollMagic.Scene({
        triggerElement: "#section-4",
        triggerHook: 0.5, // Adjust to when you want the animation to start (0 = top, 1 = bottom)
    })
        .setTween(scaleTimeline)
        .addTo(controller);


    // Parallax effect for buildings in section 3
    var butterfliesTimeLine3 = gsap.timeline();
    butterfliesTimeLine3
        .fromTo("#butterfly-1", { x: "0%" }, { x: "160%", ease: "power2.out", duration: 1, scale: 0.6 }, 0)

    // ScrollMagic Scene
    new ScrollMagic.Scene({
        triggerElement: "#section-5",
        triggerHook: 0.5,
        duration: "150%"
    })
        .setTween(butterfliesTimeLine3)
        .addTo(controller);


    // Select the image and text elements
    var imageElement4 = document.getElementById('boxStack');
    var textElement4 = document.getElementById("section-6-text");

    // Second ScrollMagic Scene with an offset
    new ScrollMagic.Scene({
        triggerElement: "#section-6", // Element that triggers the scene
        offset: 150, // Offset to trigger after some scroll distance
    })
        .on("enter", function () {
            // Change the image source and class when the trigger is reached
            imageElement4.src = "images/קופסאות ציורים 2.png";
            imageElement4.className = "boxStack-2";
        })
        .on("leave", function () {
            // Reset the image to its previous state when scrolling up
            imageElement4.src = "images/קופסאות ציורים 1.png";
            imageElement4.className = "boxStack-1";
        })
        .addTo(controller);

    // Third ScrollMagic Scene with an offset
    new ScrollMagic.Scene({
        triggerElement: "#section-6", // Element that triggers the scene
        offset: 300, // Offset to trigger after some scroll distance
    })
        .on("enter", function () {
            // Change the image source and class when the trigger is reached
            imageElement4.src = "images/קופסאות ציורים 3.png";
            imageElement4.className = "boxStack-3";

        })
        .on("leave", function () {
            // Reset the image and text when scrolling up
            imageElement4.src = "images/קופסאות ציורים 2.png";
            imageElement4.className = "boxStack-2";
            textElement4.innerHTML = ""; // Clear the text or set it to its previous state
        })
        .addTo(controller);

    // Third ScrollMagic Scene with an offset
    new ScrollMagic.Scene({
        triggerElement: "#section-6", // Element that triggers the scene
        offset: 450, // Offset to trigger after some scroll distance
    })
        .on("enter", function () {
            // Change the image source and class when the trigger is reached
            imageElement4.src = "images/קופסאות ציורים 4.png";
            imageElement4.className = "boxStack-4";

            // Change the text when the trigger is reached
            textElement4.innerHTML = `
            She set up a picnic...<br />
            But the apple tree fell over,<br />
            and the daisies went missing.
        `;
        })
        .on("leave", function () {
            // Reset the image and text when scrolling up
            imageElement4.src = "images/קופסאות ציורים 3.png";
            imageElement4.className = "boxStack-3";
            textElement4.innerHTML = ""; // Clear the text or set it to its previous state
        })
        .addTo(controller);

    var ww = window.innerWidth;
    var sections = document.querySelectorAll(".horizontal-section");
    var noSlides = sections.length;
    var slideWidth = sections[0].offsetWidth;
    var slideContainerWidth = slideWidth * noSlides - ww;

    var actionHorizontal = new TimelineMax().to("#slideContainer-1", 1, {
        x: -slideContainerWidth,
    });

    var horizontal = createHorizontal();

    function createHorizontal() {
        return new ScrollMagic.Scene({
            triggerElement: "#js-wrapper-1",
            triggerHook: "onLeave",
            duration: slideContainerWidth,
        })
            .setPin("#js-wrapper-1")
            .setTween(actionHorizontal)
            .addTo(controller);
    }

    // Handle window resize
    window.addEventListener("resize", function () {
        ww = window.innerWidth;
        slideWidth = sections[0].offsetWidth; // Recalculate slide width
        slideContainerWidth = slideWidth * noSlides - ww;

        horizontal.destroy(true); // Destroy the previous ScrollMagic scene
        horizontal = createHorizontal(); // Recreate the horizontal scroll scene
    });

    // Create the first part of the animation
    var tweenPart1 = gsap.to("#bird", {
        motionPath: {
            path: [
                { x: 0, y: 0 },
                { x: "1000%", y: "400%" },
                { x: "2300%", y: "200%" },
                { x: "3800%", y: "100%" },
            ],
            autoRotate: true,
            curviness: 1,
        },
    });

    // Create the second part of the animation with a delay between the two parts
    var tweenPart2 = gsap.to("#bird", {
        motionPath: {
            path: [
                { x: "3700%", y: "150%" },
                { x: "4400%", y: "800%" },
                { x: "3500%", y: "1700%" },
                { x: "4200%", y: "2600%" },
                { x: "5200%", y: "4000%" },
            ],
            autoRotate: true,
            curviness: 0.5,
        },
        // delay: 0.1,
    });

    // Create a timeline to chain the two parts together
    var tween = new TimelineMax()
        .add(tweenPart1) // Add the first part
        .add(tweenPart2);

    // ScrollMagic Scene setup
    new ScrollMagic.Scene({
        triggerElement: "#js-wrapper-1", // Trigger point for the scroll animation
        triggerHook: "onStart", // Start the scene when the element reaches the top
        duration: "800%", // The duration of the scene (scroll distance for the animation)
        offset: "350%" // Offset the trigger point to delay the start
    })
        .setTween(tween) // Add the tween animation to the scene
        .addTo(controller);


    // 14 finishes
    const treeIds = ["finish1", "finish2", "finish3", "finish4", "finish5", "finish6"
        , "finish7", "finish8", "finish9", "finish10", "finish11", "finish12", "finish13", "finish14"];
    let currentIndex = -1; // Start with no text or tree changes

    // Pin the last section to enable controlled animations
    new ScrollMagic.Scene({
        triggerElement: "#last-section",
        triggerHook: 0, // Pin starts when the section is at the top of the viewport
        duration: "2000%" // Keep the section pinned for scrolling effects
    })
        .setPin("#last-section") // Pin the last section
        .addTo(controller); // Use the existing controller

    // Create a ScrollMagic scene to control animations
    new ScrollMagic.Scene({
        triggerElement: "#last-section", // Trigger animations in the last section
        triggerHook: 0, // Start as soon as the section reaches the viewport
        duration: "2000%" // Animate throughout the section
    })
        .on("progress", (event) => {
            // Determine the current index based on scroll progress
            const newIndex = Math.min(
                Math.floor(event.progress * treeIds.length),
                treeIds.length - 1
            );

            // If the index has changed, trigger animations
            if (newIndex !== currentIndex) {

                // Add color to the corresponding tree
                if (treeIds[newIndex]) {
                    const treeElement = document.getElementById(treeIds[newIndex]);
                    treeElement.src = `images/סיום ${newIndex + 1} צבע.png`; // Update to the new path
                    gsap.fromTo(treeElement, { opacity: 1 }, { opacity: 1, duration: 0.5 });
                }

                // Revert color to colorless for previous trees when scrolling up
                if (currentIndex >= 0 && newIndex < currentIndex) {
                    const previousTreeElement = document.getElementById(treeIds[currentIndex]);
                    if (previousTreeElement) {
                        previousTreeElement.src = `images/סיום ${currentIndex + 1}.png`; // Revert to colorless version
                        gsap.fromTo(previousTreeElement, { opacity: 1 }, { opacity: 1, duration: 0.5 });
                    }
                }

                // Update index
                currentIndex = newIndex;
            }
        })
        .addTo(controller); // Use the existing controller








});


// Show or hide the button based on scroll position
window.addEventListener("scroll", () => {
    const button = document.getElementById("back-to-top");
    if (window.scrollY > 200) { // Show button after scrolling down 200px
        button.style.display = "block";
        button.style.opacity = 1;
    } else {
        button.style.opacity = 0;
        button.style.display = "none";
    }
});

// Scroll smoothly to the top when the button is clicked
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
