function toggleMenu() {
    const menu = document.querySelector('.navbar .menu');
    menu.classList.toggle('active');
}

const helpElement = document.querySelector('.help:is(:not(:hover))');
helpElement.addEventListener('mouseleave', function() {
    // Temporarily disable transition
    helpElement.style.animation = 'none';
});


document.addEventListener('mousemove', function(e){
    const hoverEffect = document.querySelector('.hover-effect');
    hoverEffect.style.left = '${e.pageX}px';
    hoverEffect.style.top = '${e.pageY}px';
});
document.addEventListener('mousemove', function(e) {
    const gradient = document.querySelector('.cursor-gradient');
    gradient.style.left = `${e.clientX - 750}px`; // Offset by half width
    gradient.style.top = `${e.clientY - 750}px`; // Offset by half height
});

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}