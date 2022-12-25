const navbar = document.querySelector('#nav')
const logo =document.querySelectorAll('.LOGO')
window.addEventListener('scroll', function(e) {
  const lastPosition = window.scrollY
  if (lastPosition > 50 ) {
    navbar.classList.add('navActive')
    logo.forEach(item=>item.setAttribute("fill","black"))
    
  } else if (navbar.classList.contains('navActive')) {
    navbar.classList.remove('navActive')
    logo.forEach(item=>item.setAttribute("fill","white"))
  } else {
    navbar.classList.remove('navActive')
    logo.forEach(item=>item.setAttribute("fill","white"))
  }
})