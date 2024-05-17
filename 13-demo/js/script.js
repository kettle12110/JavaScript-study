const getScrollPercent=()=>{
    const scrolled = window.scrollY;

const pageHeight = document.documentElement.scrollHeight;

const viewHeight = document.documentElement.clientHeight;

const percentage = scrolled / (pageHeight - viewHeight) *100;

document.querySelector('#bar').style.width = `${percentage}%`;
}
window.addEventListener('scroll',getScrollPercent);