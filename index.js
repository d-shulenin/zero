let small_pictures = document.getElementsByClassName('menu__small-picture')
let activeImages = document.getElementsByClassName('active')

for (let i=0; i<small_pictures.length; i++) {
    small_pictures[i].addEventListener('mouseover', function(){
        if (activeImages.length > 0) {
            activeImages[0].classList.remove('active')
        }

        this.classList.add('active')
        document.getElementById('menu__big-picture').src = "static/images/slider/slider_picture-" + (i+1) + "-big.png"
    })
}

let menuButton = document.querySelector('#menu')
menuButton.addEventListener('click', function() {
    window.scroll({
        left: 0,
        top: document.querySelector('div.menu__logo').offsetTop,
        behavior: 'smooth'
    })
})

let deliveryButton = document.querySelector('#delivery')
deliveryButton.addEventListener('click', function() {
    window.scroll({
        left: 0,
        top: document.querySelector('section.delivery').offsetTop,
        behavior: 'smooth'
    })
})

let contactsButton = document.querySelector('#contacts')
contactsButton.addEventListener('click', function() {
    window.scroll({
        left: 0,
        top: document.querySelector('section.contacts').offsetTop,
        behavior: 'smooth'
    })
})



if (document.documentElement.clientWidth <= 1440) {
    document.querySelector('.menu__pics').classList.add('swiper')
    document.querySelector('.menu__pics-wrapper').classList.add('swiper-wrapper')
    document.querySelectorAll('.menu__picture').forEach(item => {
        item.classList.add('swiper-slide')
    })
}

let swiper = new Swiper('.swiper', {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },
    loop: true,
    initialSlide: 1, 
    centeredSlides: true,
    slidesPerView: 2,
})

if (document.documentElement.clientWidth <= 425) {
    swiper.params.slidesPerView = 1
}

if (document.documentElement.clientWidth <= 1220) {
    document.querySelector('.menu__smaller-slider').classList.add('swiper2')
    document.querySelector('#smaller-slider-wrapper').classList.add('swiper-wrapper')
    document.querySelectorAll('#smaller-slider-picture').forEach(item => {
        item.classList.add('swiper-slide')
    })
}

let swiper2 = new Swiper('.swiper2', {
    pagination: {
        el: ".swiper-pagination2",
        dynamicBullets: true,
    },
    loop: true, 
})

let video = document.getElementById("video")

function play() {
    video.play()
    document.getElementById('play-icon').style.opacity = '0'
    video.setAttribute('controls', 'controls')
    video.addEventListener('ended', function() {
        document.getElementById('play-icon').style.opacity = '1'
        video.removeAttribute('controls')
    })
}

function show_menu() {
    if (document.querySelector('.burger-menu').style.visibility == 'visible')
    {
        document.querySelector('.burger-menu').style.opacity = '0'
        document.querySelector('.burger-menu').style.visibility = 'hidden'
    }
    else 
    {
        document.querySelector('.burger-menu').style.opacity = '1'
        document.querySelector('.burger-menu').style.visibility = 'visible' 
    }
}

let menuInBurgerButton = document.getElementById('menu in burger')
menuInBurgerButton.addEventListener('click', function() {
    window.scroll({
        left: 0,
        top: document.querySelector('div.menu__logo').offsetTop,
        behavior: 'smooth'
    })
})

let deliveryInBurgerButton = document.getElementById('delivery in burger')
deliveryInBurgerButton.addEventListener('click', function() {
    window.scroll({
        left: 0,
        top: document.querySelector('section.delivery').offsetTop,
        behavior: 'smooth'
    })
})

let contactsInBurgerButton = document.getElementById('contacts in burger')
contactsInBurgerButton.addEventListener('click', function() {
    window.scroll({
        left: 0,
        top: document.querySelector('section.contacts').offsetTop,
        behavior: 'smooth'
    })
})