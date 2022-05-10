/* ABRE E FECHA O MENU QUANDO CLICAR NO ICONE */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* QUANDO CLICAR EM UM ITEM DO MENU, ESCONDER O MENU */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* MUDA O HEADER DA PAGINA QUANDO DER SCROLL*/
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    /* scroll é maior que a altura do header*/
    header.classList.add('scroll')
  } else {
    /* scroll é menor que a altura do header*/
    header.classList.remove('scroll')
  }
})

/* TESTIMONIALS SLIDER SWIPER */
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  Keyboard: true
})

/* SCROLLREVEAL*/
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services .header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links
  `,
  { interval: 100 }
)
