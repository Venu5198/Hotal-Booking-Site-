const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container .section__subheader", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__container .btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// room container
ScrollReveal().reveal(".room__card", {
  ...scrollRevealOption,
  interval: 500,
});

// feature container
ScrollReveal().reveal(".feature__card", {
  ...scrollRevealOption,
  interval: 500,
});

// news container
ScrollReveal().reveal(".news__card", {
  ...scrollRevealOption,
  interval: 500,
});
function openTour() {
  // Open a local file
  var url = "Take A Tour.html"; // Replace with your file name
  var win = window.open(url, '_blank');
  win.focus();
}
function log(){
  var url = "Login.html";
  var win = window.open(url,  '_blank');
  win.focus();
}
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        const tabId = tab.getAttribute('data-tab');
        const tabContent = document.querySelector(`#${tabId}`);

        tabs.forEach((tab) => tab.classList.remove('active'));
        tab.classList.add('active');

        tabContents.forEach((tabContent) => tabContent.classList.remove('active'));
        tabContent.classList.add('active');
    });
});
// Get the deluxe suite link element
const deluxeSuiteLink = document.querySelector('.room__card h4:contains("Deluxe Suite")').closest('.room__card');

// Add an event listener to the deluxe suite link
deluxeSuiteLink.addEventListener('click', () => {
  // Open the availability webpage
  window.open('availability.html', '_self');
});