let navbarOpen = document.querySelector('#open'),
    navbarClose = document.querySelector('#close'),
    navbar = document.querySelector('.mobile-navbar');
console.log(navbar);
navbarOpen.addEventListener('click', function(){
    if(navbar.style.right =='-320px'){ 
        navbar.style.right='0px';
    }
});

navbarClose.addEventListener('click', function() {
    if(navbar.style.right =='0px'){
        navbar.style.right = '-320px';
    } 
});

