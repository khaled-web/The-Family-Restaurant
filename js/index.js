// ********** set date ************

document.getElementById("date").innerHTML = new Date().getFullYear();

// ********** nav toggle ************
// select button and links
const navBtn = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links");
// add event listener
navBtn.addEventListener("click", () => {
 links.classList.toggle("show-links");
});

// ********** nav toggle ************
// const clearField = () => {
//  let field, fieldArr;
//  field = document.querySelectorAll('.form-control');
//  fieldArr = Array.from(field);
//  fieldArr.forEach((el) => el.value = '');
// }

// document.querySelector('.btn-submit').addEventListener('click', clearField);

// ********** proposals-part ***********

// document.getElementById('proposal-btn-1').addEventListener('click', (e) => {
//  e.preventDefault();
// });

// document.getElementById('proposal-btn-2').addEventListener('click', (e) => {
//  e.preventDefault();
// });

// document.getElementById('proposal-btn-3').addEventListener('click', (e) => {
//  e.preventDefault();
// });

// ********** cities-part ***********
// document.getElementById('city-btn-1').addEventListener('click', (e) => {
//  e.preventDefault();
// });

// document.getElementById('city-btn-2').addEventListener('click', (e) => {
//  e.preventDefault();
// });

// document.getElementById('city-btn-3').addEventListener('click', (e) => {
//  e.preventDefault();
// });
// ********** booking-part ***********
document.getElementById('booking-btn-1').addEventListener('click', (e) => {
 e.preventDefault();
})
// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach(link => {
 link.addEventListener("click", e => {
  // prevent default
  e.preventDefault();
  links.classList.remove("show-links");

  const id = e.target.getAttribute("href").slice(1);
  const element = document.getElementById(id);
  //
  let position = element.offsetTop - 62;

  window.scrollTo({
   left: 0,
   top: element.offsetTop,
   top: position,
   behavior: "smooth"
  });
 });
});