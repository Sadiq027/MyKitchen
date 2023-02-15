console.log('Envents!!!')
const b1 = document.querySelector('button');
b1.onclick = () =>{
    const h1 = document.querySelector('h1');
    h1.innerText = GenrateRandNo();
    const newColor = GenrateRandNo();
    document.body.style.backgroundColor = newColor;
}
const GenrateRandNo = ()=>{
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);
    return `rgb(${r} ,${g} , ${b} )`
}

const btns = document.querySelectorAll('button');
const h3s = document.querySelectorAll('h3')

for(let btn of btns){
    btn.addEventListener('click' ,colorize)
}
for(let h3 of h3s){
    h3.addEventListener('click' , colorize)
}

function colorize(){
    this.style.backgroundColor = GenrateRandNo();
    this.style.color = GenrateRandNo();
}

const inp = document.querySelector('input');
inp.addEventListener('keydown' , (f)=>{
    // console.log(f)
    // console.log(f.key)
    // console.log(f.code)
})
inp.addEventListener('keyup',()=>{
    // console.log('keyUp')
})

// const form = document.querySelector('#Subform');
// const eInp = document.querySelector('#evtInp');
// const list = document.querySelector('#pockets')
// form.addEventListener('submit' , (e)=>{
//     e.preventDefault();
//     const SrchPoc = eInp.value;
//     const newLi = document.createElement('li');
//     newLi.innerText = SrchPoc;
//     list.append(newLi); 
//     // eInp.value = '';
// })

const form = document.querySelector('#Subform');
const UserInput = document.querySelector('#evtInp')
const list = document.querySelector('#lists')


form.addEventListener('submit' , (e)=>{
    e.preventDefault();
    const UserValue = UserInput.value;
    const newListObj = document.createElement('li');
    newListObj.innerText = UserValue;
    list.append(newListObj);
})

const h1 = document.querySelector('h2');
UserInput.addEventListener('input' , (e)=>{
    const UserVal = UserInput.value;
    h1.innerText = UserVal;
})


// Practice set !!
const h1In = document.querySelector('#h1Inp');
const InpTxt = document.querySelector('#InpUser')

InpTxt.addEventListener('input' , ()=>{
    // const InpVal = InpTxt.value; 
    h1In.innerText = 'Welcome, '+InpTxt.value;
    if(InpTxt.value ===''){
        h1In.innerText = 'Enter your Name!'
    }
})
