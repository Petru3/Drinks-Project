var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
    loader.style.display = "none"
});

const account = document.querySelector('#loginAndSign');
const loginPage = document.getElementById('login')
account.addEventListener('click', function(){
    if(loginPage.style.display === 'none'){
        loginPage.style.display = 'block';
    }else{
        loginPage.style.display = 'none';
    }
});
const link = document.getElementById('1');
const link1 = document.getElementById('2');
const link3 = document.getElementById('3');

const item1 = document.getElementById('re');
const item2 = document.getElementById('re1');
const item3 = document.getElementById('re3');

link.addEventListener('click', function() {
    if(item1.style.display === 'none'){
        item1.style.display = 'block';
    }else{
        item1.style.display = 'none';
    }
})

link1.addEventListener('click', function() {
    if(item2.style.display === 'none'){
        item2.style.display = 'block';
    }else{
        item2.style.display = 'none';
    }
})

link3.addEventListener('click', function() {
    if(item3.style.display === 'none'){
        item3.style.display = 'block';
    }else{
        item3.style.display = 'none';
    }
})

const body = document.querySelector('.body')
const arr = document.getElementById('arrowR');
const bodyT = document.querySelector('.body2')

arr.addEventListener('click', function() {
    if(body.style.display === 'none'){
        body.style.display = 'block';
        bodyT.style.display = 'block';
    }else{
        body.style.display = 'none';
    }
})

const prg = document.querySelector(".p");
const imageB = document.querySelector(".imageBlock");

const action = function() {
    if(imageB.style.display === 'block') {
        prg.classList.add('dNone');
    }else if(imageB.style.display === 'none'){
        prg.classList.remove('dNone');
    }else{
        console.log('All Corect');
    }
}