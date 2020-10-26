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

let email_input = document.querySelector('#input__email'),
    email_label = document.querySelector('#email__label');

email_input.addEventListener('focusout', function(){
    if(!email_input.checkValidity()){
        email_input.style.borderColor = 'red';
        email_label.style.color = 'red';
        email_label.style.top = '-10px';
        email_label.style.fontSize = '10px';
    } else {
        email_input.style.borderColor = '#f3f3f3';
        email_label.style.color = '#f3f3f3';
        email_label.style.top = '-10px';
        email_label.style.fontSize = '10px';
    }

    if(email_input.value == ''){
        email_input.style.borderColor = '#f3f3f3';
        email_label.style.color = '#f3f3f3';
        email_label.style.top = '0px';
        email_label.style.fontSize = '14px';
    }
});

email_input.addEventListener('focus', function(){
    email_input.style.borderColor = 'rgba(255, 123, 0, 0.9)';
    email_label.style.color = '#f3f3f3';
    email_label.style.fontSize = '10px';
    email_label.style.top = '-10px';

});
