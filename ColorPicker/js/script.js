<<<<<<< HEAD
<<<<<<< HEAD
document.querySelector('#colorText').textContent = `カラーコード:${document.querySelector('#colorPicker').value}`;
=======
=======
>>>>>>> 7a9eccdd02db30434b93129afbc1d7c7065c3160
const text = document.querySelector('#colorText');
const color = document.querySelector('#colorPicker');

const colorBg =() => {
    document.body.style.backgroundColor = color.value;

    if(color.value === '#ffffff'){
    text.textContent=`カラーコード:${color.value}(white)`;
    }else if (color.value=== '#000000'){
        text.textContent =`カラーコード:${color.value}(black)`;
    }
    else{
        text.textContent = `カラーコード:${color.value}`;
}
}
<<<<<<< HEAD
color.addEventListener('input',colorBg);
>>>>>>> 7a9eccdd02db30434b93129afbc1d7c7065c3160
=======
color.addEventListener('input',colorBg);
>>>>>>> 7a9eccdd02db30434b93129afbc1d7c7065c3160
