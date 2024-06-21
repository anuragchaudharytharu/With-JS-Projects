const menuBar = document.querySelector('.fa-bars');
const closeBar = document.querySelector('fa-times');
const navLinks = document.querySelector('.navLinks');

menuBar.addEventListener('click', () => {
  navLinks.style.display = 'flex';
});

function closeMEnuBar() {
  document.querySelector('.navLinks').style.display = 'none';
}

// const dropDown = document.getElementById('.dropDown');
// const resourceBtn = document.getElementById('navLinkMenu');

function showDropDown() {
  document.querySelector('.drop-down').style.display = 'flex';
}

function closeDrop() {
  document.querySelector('.drop-down').style.display = 'none';
}
