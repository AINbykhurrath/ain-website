// Cart functionality
let cart = [];

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    alert(`${productName} added to cart! (Total items: ${cart.length})`);
    console.log('Current cart:', cart);
}

// Contact form handler
function handleContactForm(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    
    alert('Thank you for reaching out! We will get back to you soon.');
    event.target.reset();
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

console.log('Welcome to ع AIN by Khurrath - Timeless Modest Elegance');
