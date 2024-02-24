"use script";
// First Dropdown
/*
let subMenu1 = document.querySelector(".sub-menu-wrap1");
function toggleMenu1() {
  subMenu1.classList.toggle("active1");
}
function showDropdown1() {
  subMenu1.classList.add("active1");
}
function hideDropdown1() {
  subMenu1.classList.remove("active1");
}
*/

// Second Dropdown
let subMenu2 = document.querySelector(".sub-menu-wrap2");
function toggleMenu2() {
  subMenu2.classList.toggle("active2");
}
function showDropdown2() {
  subMenu2.classList.add("active2");
}
function hideDropdown2() {
  subMenu2.classList.remove("active2");
}
// Third Dropdown
let subMenu3 = document.querySelector(".sub-menu-wrap3");
function toggleMenu3() {
  subMenu3.classList.toggle("active3");
}
function showDropdown3() {
  subMenu3.classList.add("active3");
}
function hideDropdown3() {
  subMenu3.classList.remove("active3");
}

// For About Scroll
let scrollM = document.querySelector(".mission-section");
function scrollToSectionM() {
  scrollM.scrollIntoView({ behavior: "smooth" });
}

let scrollG = document.querySelector(".our-goals");
function scrollToSectionG() {
  scrollG.scrollIntoView({ behavior: "smooth" });
}

let scrollS = document.querySelector(".sponsors");
function scrollToSectionS() {
  scrollS.scrollIntoView({ behavior: "smooth" });
}

// For Projects Scroll
let scrollO = document.querySelector(".out");
function scrollToSectionO() {
  scrollO.scrollIntoView({ behavior: "smooth" });
}

let scrollW = document.querySelector(".pictures");
function scrollToSectionW() {
  scrollW.scrollIntoView({ behavior: "smooth" });
}

let scrollA = document.querySelector(".three-buttons");
function scrollToSectionA() {
  scrollA.scrollIntoView({ behavior: "smooth" });
}

// For Contact Scroll
let scrollF = document.querySelector(".final-div");
function scrollToFooter() {
  scrollF.scrollIntoView({ behavior: "smooth" });
}

// Add this script to toggle the mobile menu
let menu = document.querySelector(".menu");
let menuu = document.querySelector("nav ul");
function menu1() {
  menuu.classList.toggle("show");
}
function menu2() {
  menuu.classList.add("show");
}
function menu3() {
  menuu.classList.remove("show");
}
