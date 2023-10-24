// You can add JavaScript code to make your website interactive here.

// Example: Smooth scrolling for anchor links
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);

        window.scrollTo({
            top: target.offsetTop - 50, // Adjust for the header height
            behavior: 'smooth',
        });
    });
});
