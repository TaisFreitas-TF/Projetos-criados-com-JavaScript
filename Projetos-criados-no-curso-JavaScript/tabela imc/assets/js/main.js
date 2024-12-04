
const form = document.querySelector('#form');

form.addEventListener('submit', function (e){
    e.preventDefault()
    
    const inputPeso = e.target.querySelector('#peso'); 
    const inputAltura = e.target.querySelector('#altura'); 
    
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if(!peso){
        setResultado('Peso Inválido', false)
        return;
    }
    
    if (!altura){
        setResultado('Altura Iválida', false)
        return;
    }

    if(altura > 2.5){
        setResultado('Altura Iválida')
        return;
    }

    const imc = getImc(peso, altura);
    const classificacaoImc = getClassificacaoImc(imc)

    const msg = `Seu IMC é: ${imc}, (${classificacaoImc})`

    setResultado(msg, true)

});

function getClassificacaoImc(imc){
    const classificacao = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obsidade grau 1', 'Obsidade grau 2', 'Obsidade grau 3']

    if (imc >= 39.9) return classificacao[5]
    if (imc >= 34.9) return classificacao[4]
    if (imc >= 29.9) return classificacao[3]
    if (imc >= 24.9) return classificacao[2]
    if (imc >= 18.5) return classificacao[1]
    if (imc < 18.5) return classificacao[0]
}

function getImc(peso, altura){
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaP(){
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid){
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = ''
    
    const p = criaP();

    if (isValid) {
        p.classList.add('resultado-valido')
    } else {
        p.classList.add('bad')    
    }
            
    p.innerHTML = msg;
    resultado.appendChild(p)
}

// console.log(e('evento'))







// function calculaImc(){

//     const resultado = document.querySelector('.resultado'); 

//     function recebeEventoForm (evento) {
        
//         evento.preventDefault();
 
//         const peso = form.querySelector('.peso');
//         const altura = form.querySelector('.altura');
//         const imc = peso.value / (altura.value*altura.value); 

//         if(imc < 18.5){
//             resultado.innerHTML = `Seu IMC é: ${imc}, Abaixo do peso`
//         }
       
//     }

