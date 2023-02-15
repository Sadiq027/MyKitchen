const div = document.querySelector('.cont');
const btn = document.querySelector('button');

btn.addEventListener('click', ()=>{
    div.classList.toggle('hide');
})