let auth_modal = document.querySelectorAll('.auth_modal');
let register_modal = document.querySelector('.register_modal');
let log_in_modal = document.querySelector('.log_in_modal')
let modal_close = document.querySelectorAll('.auth_modal__close');
let register_modal_open = document.querySelectorAll('.register_modal__open');
let log_in_modal_open = document.querySelectorAll('.log_in_modal__open');

if (register_modal_open.length) {
    register_modal_open.forEach(btn => {
        btn.onclick = () => {
            if (register_modal) {
                register_modal.classList.add('active');
                let content = register_modal.querySelector('.auth_modal__content');
                content.classList.remove('animate__fadeOut');
                content.classList.add('animate__fadeIn');
            }
        }
    })
}

if (log_in_modal_open.length) {
    log_in_modal_open.forEach(btn => {
        btn.onclick = () => {
            if (log_in_modal) {
                log_in_modal.classList.add('active');
                let content = log_in_modal.querySelector('.auth_modal__content');
                content.classList.remove('animate__fadeOut');
                content.classList.add('animate__fadeIn');
            }
        }
    })
}

if (modal_close.length) {
    modal_close.forEach(btn => {
        btn.onclick = () => {
            if (auth_modal.length) {
                auth_modal.forEach(modal => {
                    let content = modal.querySelector('.auth_modal__content');
                    content.classList.remove('animate__fadeIn');
                    content.classList.add('animate__fadeOut');
                    setTimeout(() => {
                        modal.classList.remove('active');
                    }, 500);
                })
            }
        }
    })
}

let el = document.querySelector('.switch');
let cur = el.querySelector('.current');
let options = el.querySelectorAll('.options li');

let flags = {
    ru: './images/flag_ru.png',
    en: './images/flag_en.gif',
    sa: './images/flag_sa.gif',
};

// Open language dropdown panel
el.addEventListener('click', function (e) {
    el.classList.add('show-options');

    setTimeout(function () {
        el.classList.add('anim-options');
    }, 50);

    setTimeout(function () {
        el.classList.add('show-shadow');
    }, 200);
});

// Close language dropdown panel
options.forEach(option => {
    option.addEventListener('click', function (e) {
        e.stopPropagation();
        el.classList.remove('anim-options');
        el.classList.remove('show-shadow');

        let newLang = this.dataset.lang;
        cur.querySelector('img').src = flags[newLang];

        options.forEach(option => option.classList.remove('selected'));
        this.classList.add('selected');

        setTimeout(function () {
            el.classList.remove('show-options');
        }, 600);
    });
});

let use_slider = new Swiper('.ease_use__slider .swiper', {
    slidesPerView: 3.5,
    loop: true,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.6
    },
    spaceBetween: -60,
    navigation: {
        nextEl: '.ease_use__slider_next',
        prevEl: '.ease_use__slider_prev'
    }
})

let tarif_slider = new Swiper('.tarif__slider', {
    slidesPerView: 3,
    spaceBetween: 32
})

let quality_slider = new Swiper('.quality__list', {
    slidesPerView: 4,
    spaceBetween: 32,
})

const items = document.querySelectorAll('.faq__list_item');

items.forEach((item) => {
    const header = item.querySelector('.faq__list_item__head');
    const content = item.querySelector('.faq__list_item__body');

    header.addEventListener('click', () => {
        content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + 'px';
        header.classList.toggle('active')
        item.classList.toggle('active')
    });
});

let about_slider = new Swiper('.about__bottom', {
    slidesPerView: 3,
    spaceBetween: 32,
    
})