'use strict'

/**
 * navbar toggle
 */

const overlay = document.querySelector('[data-overlay]')
const navbar = document.querySelector('[data-navbar]')
const navToggleBtn = document.querySelector('[data-nav-toggle-btn]')
const navbarLinks = document.querySelectorAll('[data-nav-link]')

const navToggleFunc = function () {
  navToggleBtn.classList.toggle('active')
  navbar.classList.toggle('active')
  overlay.classList.toggle('active')
}

navToggleBtn.addEventListener('click', navToggleFunc)
overlay.addEventListener('click', navToggleFunc)

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener('click', navToggleFunc)
}

/**
 * header active on scroll
 */

const header = document.querySelector('[data-header]')

window.addEventListener('scroll', function () {
  window.scrollY >= 10
    ? header.classList.add('active')
    : header.classList.remove('active')
})

var modal = document.getElementById('myModal')

// Get the button that opens the modal
var btn = document.getElementById('lbtn')

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0]

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = 'block'
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none'
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == 'modal') {
    modal.style.display = 'none'
  }
}
