//Criando tag no Dom
const container = document.querySelector('.container');

const elementos = [
    {tag: 'h2', texto: 'Fit House Estúdio de Treinamento'},
    {tag: 'p', texto: 'Atendimento Personalizado.'},
    {tag: 'ul', texto: ''},
    {tag: 'footer', texto: 'Rua Dário Vilela Bitencourt, 278 - Centro'}
];

const elementosLista = [
    {tag: 'li', texto: 'Musculação'},
    {tag: 'li', texto: 'Funcional'},
    {tag: 'li', texto: 'Treinamento para Idoso'},
    {tag: 'li', texto: 'Prevenção de Lesões'},
    {tag: 'li', texto: 'Avaliação Física'},
]

const div = document.createElement('div');

for ( let i = 0; i < elementos.length; i++ ){
    let { tag, texto } = elementos[i];
    let tagCriada = document.createElement(tag);
    tagCriada.innerHTML = texto;
    div.appendChild(tagCriada);
}

container.appendChild(div);

const lista = container.querySelector('ul');
const li = document.createElement('li');

for ( let i = 0; i < elementosLista.length; i++) {
    let { tag, texto } = elementosLista[i]; 
    let tagCriada = document.createElement(tag);
    let textoCriado = document.createTextNode(texto);

    tagCriada.appendChild(textoCriado);
    li.appendChild(tagCriada);
}

lista.appendChild(li);



