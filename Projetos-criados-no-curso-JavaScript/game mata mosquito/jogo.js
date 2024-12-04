
function iniciarJogo(){
    let nivel = document.getElementById('nivel').value
    
    if(nivel === ''){
        alert('Selecione um nível para iniciar o jogo')
        return false
    }

    window.location.href = "app.html?" + nivel
}


let altura = 0
let largura = 0 
let vidas = 1
let tempo = 20
let criaMosquitoTempo = 1500

let nivel = window.location.search
nivel = nivel.replace('?' , '')

if(nivel === 'normalfacil'){
    criaMosquitoTempo = 2000
} else if(nivel === 'normal'){
    criaMosquitoTempo = 1500
} else if (nivel === 'dificil'){
    criaMosquitoTempo = 1000
} else if (nivel === 'hard'){
    criaMosquitoTempo = 750
}

function ajustaTamnhoPalcoJogo(){
    altura = window.innerHeight
    largura = window.innerWidth
}

let cronometro = setInterval(function(){
    tempo -= 1
    if (tempo < 0){
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = 'vitoria.html'
    }else {
            document.getElementById('cronometro').innerHTML = tempo
        }
    }, 1000)  
    
    

ajustaTamnhoPalcoJogo()

function posicaoRondomica(){

    //remover o mosquito anterior (caso exista)
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()

        if(vidas > 3){
            window.location.href = 'fim_de_jogo.html'
        }else{
            document.getElementById('v' + vidas).src= "imagens/coracao_vazio.png"
            
            vidas ++
        }
    }

    let posicaox = Math.floor(Math.random() * largura) -90
    let posicaoy = Math.floor(Math.random() * altura) -90

    posicaox = posicaox < 0 ? 0 : posicaox
    posicaoy = posicaoy < 0 ? 0 : posicaoy

    console.log(posicaox, posicaoy)

    //criar o elemento html

        let mosquito = document.createElement('img')
        mosquito.src = 'imagens/mosquito.png'
        mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
        mosquito.style.left= posicaox + 'px'
        mosquito.style.top= posicaoy + 'px'
        mosquito.style.position = 'absolute'
        mosquito.id = 'mosquito'
        mosquito.onclick = function(){
            this.remove()
        }

        document.body.appendChild(mosquito)
}

function tamanhoAleatorio() {
    let classe = Math.floor(Math.random() * 3)
    
    switch(classe){
        case 0:
            return 'mosquito1'

        case 1:
            return 'mosquito2'

        case 2:
            return 'mosquito3' 
    } 
}

function ladoAleatorio() {
    let classe = Math.floor(Math.random() * 2)
    
    switch(classe){
        case 0:
            return 'ladoA'

        case 1:
            return 'ladoB'
    } 
}
