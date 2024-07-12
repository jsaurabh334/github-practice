document.addEventListener('DOMContentLoaded', function () {
    const courseSearch = document.getElementById('course-search');
    const skillLevel = document.getElementById('skill-level');
    const courseGrid = document.getElementById('course-grid');

    courseSearch.addEventListener('input', filterCourses);
    skillLevel.addEventListener('change', filterCourses);

    function filterCourses() {
        const searchText = courseSearch.value.toLowerCase();
        const level = skillLevel.value;
        
        const courseCards = courseGrid.getElementsByClassName('course-card');
        Array.from(courseCards).forEach(card => {
            const courseTitle = card.getElementsByTagName('h3')[0].textContent.toLowerCase();
            const courseLevel = card.getAttribute('data-level');

            const matchesSearch = courseTitle.includes(searchText);
            const matchesLevel = level === '' || courseLevel === level;

            if (matchesSearch && matchesLevel) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200; // The lower the number, the faster the count

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;

            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 10);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const timelineItems = document.querySelectorAll('.timeline-item');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.5
    });

    timelineItems.forEach(item => {
        observer.observe(item);
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.testimonial-carousel');
    let isDown = false;
    let startX;
    let scrollLeft;

    carousel.addEventListener('mousedown', (e) => {
        isDown = true;
        carousel.classList.add('active');
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener('mouseleave', () => {
        isDown = false;
        carousel.classList.remove('active');
    });

    carousel.addEventListener('mouseup', () => {
        isDown = false;
        carousel.classList.remove('active');
    });

    carousel.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 3; //scroll-fast
        carousel.scrollLeft = scrollLeft - walk;
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        item.querySelector('.faq-question').addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = contactForm.name.value.trim();
        const email = contactForm.email.value.trim();
        const message = contactForm.message.value.trim();

        if (name && email && message) {
            // Here you can add your form submission logic (e.g., send data to server)
            alert('Thank you for your message!');
            contactForm.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const newsletterForm = document.getElementById('newsletter-form');

    newsletterForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = newsletterForm.email.value.trim();

        if (email) {
            // Here you can add your form submission logic (e.g., send data to server)
            alert('Thank you for subscribing to our newsletter!');
            newsletterForm.reset();
        } else {
            alert('Please enter a valid email address.');
        }
    });
});




