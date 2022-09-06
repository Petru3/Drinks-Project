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