const menuBar = document.querySelector(".menu-bar");
const navMenu = document.querySelector(".nav-menu");

menuBar.addEventListener('click', () => {
    navMenu.classList.toggle('menu-responsive');
});

const navBar = document.querySelector(".navbar");

window.addEventListener('scroll', () => {
    console.log(window.scrollY);
    const windowPosition = window.scrollY > 0;
    navBar.classList.toggle("scrolling-active", windowPosition);
});

// declare button
let mybutton = document.getElementById("btn-back-to-top");
// js windows scroll
window.onscroll = function(){
    // get button top
    scrollFunction();
    function scrollFunction() {
        if (
        document.body.scrollTop > 400 ||
        document.documentElement.scrollTop > 400
        ) {
        mybutton.style.display = "block";
        } else {
        mybutton.style.display = "none";
        }
    }
}
// end get button
// klik button akan kembali ke atas
mybutton.addEventListener("click", backToTop);
function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};
