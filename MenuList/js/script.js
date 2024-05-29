const menu = document.querySelector('#menu');

const lists =[
    'strawberry.jpg',
    'lime.jpg',
    'mango.jpg',
    'lemon.jpg',
    'fig.jpg',
    'apple.jpg',
];
const content =`<div><img src="images/${lists[1]}" alt =""></div>`;
menu.insertAdjacentHTML('beforeend',content);