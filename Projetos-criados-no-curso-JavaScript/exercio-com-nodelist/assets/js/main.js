const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');
                     

const estiloBody = getComputedStyle(document.body);
const backgroudBody = estiloBody.backgroundColor;


for (p of ps ) {
    p.style.backgroundColor = backgroudBody;
    p.style.color = '#ffff'
    p.style.padding = '20px'
}