//Toogle class active
const navbarNav=document.querySelector('.navbar-nav');

//ketika humberger menu di klik (DOM)
document.querySelector('#hamburger-menu').onclick = () =>{
navbarNav.classList.toggle('active');
};

//klik diluar sidebar untuk menghilangkan nav (EVENT LISTENER)
const  humberger=document.querySelector('#humberger-menu')
document.addEventListener('click', function(e){
    if(!humberger.contains(e.targer)&& !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
})
