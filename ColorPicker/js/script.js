const text = document.querySelector('#colorText');
const color = document.querySelector('#colorPicker');

color.addEventListener('input',() => {
    text.textContent = `カラーコード:${color.value}`;
});