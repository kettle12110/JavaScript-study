const menu = document.querySelector('#menu');

const lists =[
    {
        name:'イチゴ',
        img:'strawberry.jpg',
        price:450,
    },
    {
        name:'ライム',
        img:'lime.jpg',
        price:400,
    },
    {
        name:'イチゴ',
        img:'mango.jpg',
        price:500,
    },
    {
        name:'イチゴ',
        img:'lemon.jpg',
        price:400,
    },
    {
        name:'イチゴ',
        img:'fig.jpg',
        price:500,
    },
    {
        name:'リンゴ',
        img:'apple.jpg',
        price:400,
    }
];
<<<<<<< HEAD

for(let i =0; i<lists.length; i++){
    const content = `<div><img src="images/${lists[i]}" alt=""></div>`;
    menu.insertAdjacentHTML('beforeend',content);
}



=======
for(let i =0; i<lists.length; i++){
    const {name,img,price}= lists[i];
    
const content =`<div><img src="images/${img}" alt =""><h2>${name}</h2><p>${price}</p></div>`;
menu.insertAdjacentHTML('beforeend',content);
}
>>>>>>> bfe3be8b2cce8cbdce02de88a78ee33ed7d27a32
