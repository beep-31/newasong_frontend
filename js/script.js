let burger = document.querySelector('#burger'),
    navbar = document.querySelector('.mobile-navbar'),
    burger_item = document.querySelector('#burger-item'),
    opened = 'burger__item--opened',
    closed = 'burger__item--closed';
burger.addEventListener('click', function(){
    console.log('CLICKED!');
    if(navbar.style.right=='-320px'){ 
        navbar.style.right='0px';
        burger_item.classList.remove(closed);
        burger_item.classList.add(opened);
    } else {
        navbar.style.right = '-320px';
        burger_item.classList.remove(opened);
        burger_item.classList.add(closed);
    }
});
