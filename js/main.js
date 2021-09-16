console.log('js load');

const searchEl = document.querySelector('.search');
// const searchInputEl = document.querySelector('.search input')
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
    // .search 아이콘이 눌려도 search input 창에 focus가 가도록.
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus',function () {
    searchEl.classList.add('focused');
    // html class 추가.
    searchInputEl.setAttribute('placeholder', '통합검색');
    // html 속성 추가.
});
searchInputEl.addEventListener('blur',function() {
    searchEl.classList.remove('focused');

    searchInputEl.setAttribute('placeholder','');
    
})




const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(
    // _.throttle(function, function이 실행되는 시간의 단위 ms)
    function() {
        // console.log('scroll!');
        // console.log(window.scrollY);
        if(window.scrollY> 500){
            //badge hide
            // badgeEl.style.display = 'none'
            // gsap.to(animation 처리를 할 요소, 지속시간, 옵션);
            gsap.to(badgeEl, .4, {
                opacity: 0,
                display: 'none'
            });
        }else {
            //badge show
            // badgeEl.style.display = 'block'
            gsap.to(badgeEl, .4, {
                opacity: 1,
                display: 'block'
            });
        }
    }, 300));
// document는 html 그자체도 window는 보고잇는 화면 자체다.



const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index) {
    gsap.to(fadeEl, 1, {
        delay:(index+1) *.7,
        // gsap 이 제공하는 delay
        // index는 function이 돌때마다 0부터 1씩 올라간다.
        opacity: 1,
    });
});



// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical', // 수직 슬라이드
    autoplay: true, // 자동 재생 여부
    loop: true // 반복 재생 여부
  })


new Swiper('.promotion .swiper-container',{
    direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 10,//사이여백
    centeredSlides: true, //1번 슬라이드가 가운데에 보이기 
    loop: true,
    autoplay: {
        delay: 5000 //ms
    },
    pagination: {
        el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
        clickable:true,
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next',
    }
    


});


const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click',function() {
    isHidePromotion = !isHidePromotion
    // on off
    if(isHidePromotion){
        promotionEl.classList.add('hide');
    } else {
        promotionEl.classList.remove('hide');
    }
});
