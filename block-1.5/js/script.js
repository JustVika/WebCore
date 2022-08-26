
function sliderOn() {
    if (window.innerWidth < 768) {
        const swiper = new Swiper(".swiper", {
            slidesPerView: "auto",
            spaceBetween: 16,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },

        });
    }
}
sliderOn()

const h = document.querySelector('.swiper-wrapper')
const sw = document.querySelector('.show-more')

sw.addEventListener('click', function(){
    sw.classList.toggle('rotate')

    if(sw.innerHTML ==="Показать все"){
        sw.innerHTML = 'Скрыть'
        h.style.height = h.scrollHeight + 'px';
    }
    else{
        sw.innerHTML = 'Показать все'
        h.style.height = '160px'
    }
})


