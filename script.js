// Dropdown menu untuk mobile
document.getElementById('menu-toggle').addEventListener('click', function() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('show');
});

// Interaktivitas: Tombol CTA menggulir ke bagian services (Informasi Singkat)
document.getElementById('cta-button').addEventListener('click', function() {
    document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
});

// Validasi form kontak
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Semua field harus diisi!');
        return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
        alert('Email tidak valid!');
        return;
    }

    alert('Pesan berhasil dikirim! Kami akan segera menghubungi Anda.');
    this.reset();
});

// Modal functionality
const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');
const loginModal = document.getElementById('login-modal');
const signupModal = document.getElementById('signup-modal');
const loginClose = document.getElementById('login-close');
const signupClose = document.getElementById('signup-close');

// Open modals
loginBtn.addEventListener('click', () => {
    loginModal.style.display = 'flex';
});

signupBtn.addEventListener('click', () => {
    signupModal.style.display = 'flex';
});

// Close modals
loginClose.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

signupClose.addEventListener('click', () => {
    signupModal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (event) => {
    if (event.target === loginModal) {
        loginModal.style.display = 'none';
    }
    if (event.target === signupModal) {
        signupModal.style.display = 'none';
    }
});

// Login form validation
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value.trim();

    if (email === '' || password === '') {
        alert('Email dan password harus diisi!');
        return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
        alert('Email tidak valid!');
        return;
    }

    // Simulated login success
    alert('Login berhasil! Selamat datang kembali.');
    loginModal.style.display = 'none';
    this.reset();
});

// Sign up form validation
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('signup-name').value.trim();
    const email = document.getElementById('signup-email').value.trim();
    const password = document.getElementById('signup-password').value.trim();
    const confirmPassword = document.getElementById('signup-confirm-password').value.trim();

    if (name === '' || email === '' || password === '' || confirmPassword === '') {
        alert('Semua field harus diisi!');
        return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
        alert('Email tidak valid!');
        return;
    }

    if (password !== confirmPassword) {
        alert('Password dan konfirmasi password tidak cocok!');
        return;
    }

    if (password.length < 6) {
        alert('Password harus minimal 6 karakter!');
        return;
    }

    // Simulated sign up success
    alert('Sign up berhasil! Akun Anda telah dibuat.');
    signupModal.style.display = 'none';
    this.reset();
});

// Image Slider functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Auto slide every 5 seconds
setInterval(nextSlide, 5000);

// About Slider functionality
let aboutCurrentSlide = 0;
const aboutSlides = document.querySelectorAll('.about-slide');
const aboutPrevBtn = document.querySelector('.about-prev-btn');
const aboutNextBtn = document.querySelector('.about-next-btn');

function showAboutSlide(index) {
    aboutSlides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextAboutSlide() {
    aboutCurrentSlide = (aboutCurrentSlide + 1) % aboutSlides.length;
    showAboutSlide(aboutCurrentSlide);
}

function prevAboutSlide() {
    aboutCurrentSlide = (aboutCurrentSlide - 1 + aboutSlides.length) % aboutSlides.length;
    showAboutSlide(aboutCurrentSlide);
}

aboutNextBtn.addEventListener('click', nextAboutSlide);
aboutPrevBtn.addEventListener('click', prevAboutSlide);

// Auto slide for about section every 5 seconds
setInterval(nextAboutSlide, 5000);
