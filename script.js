// document.addEventListener("DOMContentLoaded", function() {
//     const form = document.querySelector("form");
    
//     form.addEventListener("submit", function(e) {
//         e.preventDefault();
//         alert("Form submitted!");
//         form.reset();
//     });
// });

document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const animateElements = document.querySelectorAll('[data-animate]');
    animateElements.forEach(el => observer.observe(el));
});


// git init
// git add .
// git commit -m "Initial commit"
// gh auth login
// gh repo create <repository-name> --public --source=.
// git remote add origin https://github.com/your-username/<repository-name>.git
// git branch -M main
// git push -u origin main