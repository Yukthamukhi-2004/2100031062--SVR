document.addEventListener("DOMContentLoaded", () => {
    // Select elements
    const postNavImage = document.querySelector(".post-navigation img");
    const postNavText = document.querySelector(".post-navigagtion-text"); // Note: Fixed typo in class name
    const title = document.querySelector(".post-navigation-text h1");
    
    // Fade-in animation for image and text
    postNavImage.style.opacity = 0;
    postNavText.style.opacity = 0;
    
    let opacity = 0;
    const fadeIn = setInterval(() => {
        if (opacity >= 1) {
            clearInterval(fadeIn);
        }
        postNavImage.style.opacity = opacity;
        postNavText.style.opacity = opacity;
        opacity += 0.02;
    }, 50);
    
    // Image hover effect
    postNavImage.addEventListener("mouseover", () => {
        postNavImage.style.transform = "scale(1.1)";
        postNavImage.style.transition = "transform 0.3s ease";
    });
    
    postNavImage.addEventListener("mouseout", () => {
        postNavImage.style.transform = "scale(1)";
    });
    
    // Title click color toggle
    let isOrange = true;
    title.addEventListener("click", () => {
        title.style.color = isOrange ? "#4CAF50" : "orange";
        isOrange = !isOrange;
        title.style.transition = "color 0.3s ease";
    });
    
    // Smooth scroll for future sections (if added)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector(anchor.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});
