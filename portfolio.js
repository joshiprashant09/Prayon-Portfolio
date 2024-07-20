document.getElementById('scroll-to-about').addEventListener('click', function() {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('scroll-to-contact').addEventListener('click', function() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('scroll-to-contact2').addEventListener('click', function() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});

setTimeout(function() {
    document.querySelector('.profile-image').style.animation = 'none';
}, 6000);