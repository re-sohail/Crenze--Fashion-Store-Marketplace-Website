let text = document.querySelector('.text p')
let categoryBtn = document.querySelectorAll('.category-btn button') 

text.innerHTML = text.innerText.split('').map((char, i) =>
    `<span style="transform:rotate(${i * 8.3}deg)">${char}</span>`
).join('');

// categoryBtn.forEach(categoryBtns =>{
//     categoryBtns.addEventListener('click', ()=>{

//         categoryBtn.forEach(btn => {
//             btn.style.backgroundColor = 'transparent';
//             btn.style.color = '#030303';
//         });
//         categoryBtns.style.backgroundColor = '#030303'
//         categoryBtns.style.color = '#fff'
//     })
// })