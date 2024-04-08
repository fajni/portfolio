function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// ===  //

let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');
let img4 = document.getElementById('img4');
let img5 = document.getElementById('img5');
let plant = document.getElementById('plant');
let tree = document.getElementById('tree');
let text = document.getElementById('animation');

window.addEventListener('scroll', function () {
    let value = window.scrollY;
    img1.style.top = value * 0.9 + 'px';
    img2.style.top = value * 0.75 + 'px';
    img3.style.top = value * 0.55 + 'px';
    img4.style.top = value * 0.95 + 'px';
    img5.style.top = value * 0.85 + 'px';
    tree.style.top = value * 0.75 + 'px';
    text.style.top = value * -0.5 + 'px';
});