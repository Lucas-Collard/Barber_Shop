// DOM Document Object Model // transforma tudo que e html em objeto
//document.body.style.background = 'red'
// ABRE E FECHA O MENU QUANDOCLICAR NO ITEM TOGGLE
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle') // pega todos os seletores que possuem toggle

// elemento recebendo os 2 toggle que const toggle recebe
for (const elemento of toggle) {
  // eventlister fica observando, quando e clicado executa uma funçao
  elemento.addEventListener('click', function () {
    nav.classList.toggle('show') //funçao toggle se tiver a class 'show' ele tira, se nao tiver ele acrescenta, assim mudando o menu
  })
}

/*QUANDO CLICAR EM UM ITEM DO MENU, FECHAR O MENU*/
const links = document.querySelectorAll('nav ul li a')
for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

// mudar header da pagina quando der scrool
const header = document.querySelector('#header')
const navHeigth = header.offsetHeight
//window signifca a tela inteira do dipositivo, ou seja captura o scroll da tela toda
window.addEventListener('scroll', function () {
  // se o scroll no eixo y
  if (window.scrollY >= navHeigth) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
})
// TESTIMONIALS SWIPER // SLIDER
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keybord: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})
// SCROOLLREVELL:
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '20px',
  duration: 600,
  reset: true
})
//
scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header , #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .Links,
  footer .brand, footer .social`,

  { interval: 100 }
)

// BOTAO VOLTAR PARA O TOPO

const backToTopButton = document.querySelector('.back-to-top')
window.addEventListener('scroll', function () {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
})

/**menu ativo na seçao visivel */
const sections = document.querySelectorAll('main section[id]') // pega todas as section que possuem id
function ativarMenuConformeSecao() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeigth = section.offsetHeight
    const sectionID = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEND = checkpoint <= sectionTop + sectionHeigth

    if (checkpointStart && checkpointEND) {
      document
        .querySelector('nav ul li a[href*=' + sectionID + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionID + ']')
        .classList.remove('active')
    }
  }
}
window.addEventListener('scroll', function () {
  ativarMenuConformeSecao()
})
