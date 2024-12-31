document.addEventListener("DOMContentLoaded", () => {
    let currentStage = 0;
    const trees = document.querySelectorAll(".tree");
    const body = document.body;

    body.style.overflowY = "hidden";

    function handleScroll(event) {
        const deltaY = event.deltaY;

        if (currentStage === 0 && deltaY > 0) {
            animateToSection2();
            currentStage = 1;
            return;
        }

        if (currentStage === 1 && deltaY > 0) {
            animateTreesShrink();
            currentStage = 2;
            return;
        }

        if (currentStage === 2 && deltaY < 0) {
            animateToSection1();
            animateTreesRestore();
            currentStage = 0;
            return;
        }

        if (currentStage === 2) {
            body.style.overflowY = "auto";
            currentStage = 3;
        }

        if (currentStage === 3 && deltaY < 0) {
            body.style.overflowY = "hidden";
            animateToSection2();
            animateTreesRestore();
            currentStage = 1;
        }
    }

    function animateToSection2() {
        const section2 = document.getElementById("section2");
        const scrollToY = section2.offsetTop;

        window.scrollTo({
            top: scrollToY,
            behavior: "smooth",
        });
    }

    function animateToSection1() {
        const section1 = document.getElementById("section1");
        const scrollToY = section1.offsetTop;

        window.scrollTo({
            top: scrollToY,
            behavior: "smooth",
        });
    }

    function animateTreesShrink() {
        trees.forEach((tree) => {
            tree.style.transition = "width 1s ease, height 1s ease";
            tree.style.width = `${parseFloat(getComputedStyle(tree).width) * 0.5}px`;
            tree.style.height = `${parseFloat(getComputedStyle(tree).height) * 0.5}px`;
        });
    }

    function animateTreesRestore() {
        trees.forEach((tree) => {
            tree.style.transition = "width 1s ease, height 1s ease";
            tree.style.width = ""; 
            tree.style.height = ""; 
        });
    }

    document.addEventListener("wheel", handleScroll, { passive: false });
});
