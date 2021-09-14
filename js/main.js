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