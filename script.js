window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    const images = document.querySelectorAll('.tree'); // Select images with specific classes
    const whenMay = document.querySelectorAll('.when-may'); // Select images with specific classes



    // Convert scroll position to "vh"
    const viewportHeight = window.innerHeight; // Height of the viewport in pixels
    const scrollPositionVH = (scrollPosition / viewportHeight) * 100;

    if (scrollPositionVH >= 70) {
        whenMay.forEach(when => {
            when.style.position = 'sticky';
            when.style.top = '60vh';
        });
    } else {
        whenMay.forEach(when => {
            when.style.position = 'absolute';
            when.style.top = '70vh';
        });
    }

    // Define scroll positions for scaling logic
    const minScrollToShrink = 150; // When to start shrinking (in pixels)
    const maxScrollToShrink = 250; // When to stop shrinking (in pixels)

    // Calculate scale factor based on scroll position
    let scale = 0;

    if (scrollPositionVH < minScrollToShrink) {
        scale = 1; // Keep original size before the shrink starts
    } else if (scrollPositionVH >= minScrollToShrink && scrollPositionVH < maxScrollToShrink) {
        // Shrink from scale 1 to 0.5 between minScrollToShrink and maxScrollToShrink
        scale = 1 - ((scrollPositionVH - minScrollToShrink) / (maxScrollToShrink - minScrollToShrink)) * 0.5;
    }

    // Ensure scale stays within bounds
    if (scale > 1 || scrollPositionVH < minScrollToShrink) {
        scale = 1;
        resetTreesLocation(images, scale); // Reset position if scale is back to 1
    } else {
        // Adjust the position and scale based on the current scroll position and scale
        images.forEach(image => {
            image.style.transform = `scale(${scale})`; // Apply scaling
            image.style.transformOrigin = "center center"; // Center scaling

            // Adjust X position dynamically to move elements to the opposite side
            const boundingRect = image.getBoundingClientRect(); // Get element's current position
            const imageWidth = boundingRect.width;

            if (image.classList.contains("tree-1")) {
                image.style.right = `${-10 - (imageWidth * (1 - scale) * movementPercentage)}%`;
            } else if (image.classList.contains("tree-2")) {
                image.style.left = `${-8 - (imageWidth * (1 - scale) * movementPercentage)}%`;
            } else if (image.classList.contains("tree-3")) {
                image.style.right = `${-7 - (imageWidth * (1 - scale) * movementPercentage)}%`;
            } else if (image.classList.contains("tree-4")) {
                image.style.left = `${-5 - (imageWidth * (1 - scale) * movementPercentage)}%`;
            }
        });
    }
});

function resetTreesLocation(images, scale) {
    // Reset all tree positions to their initial values when scaling is at 1 or 0.5
    images.forEach(image => {
        image.style.transform = `scale(${scale})`; // Apply scaling
        image.style.transformOrigin = "center center"; // Center scaling

        // Reset initial left/right positions
        if (image.classList.contains("tree-1")) {
            image.style.right = `${-15}%`;
        } else if (image.classList.contains("tree-2")) {
            image.style.left = `${-1}%`;
        } else if (image.classList.contains("tree-3")) {
            image.style.right = `${-10}%`;
        } else if (image.classList.contains("tree-4")) {
            image.style.left = `${-8}%`;
        }
    });
}
