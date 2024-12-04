function relogio() {
    
    function getTimeFromSeconds(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        });
    }

    const relogio = document.querySelector('.relogio');
    let segundos = 0;
    let timer;

    function iniciarRelogios() {
        timer = setInterval(function () {
            segundos++;
            relogio.innerHTML = getTimeFromSeconds(segundos);
        }, 1000);
    }

    document.addEventListener('click', function (e) {
        const element = e.target;

        if (element.classList.contains('iniciar')) {
            clearInterval(timer);
            iniciarRelogios();
            relogio.classList.remove('pausado');
        }

        if (element.classList.contains('pausar')) {
            clearInterval(timer);
            relogio.classList.add('pausado');
        }

        if (element.classList.contains('zerar')) {
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            relogio.classList.remove('pausado');
            segundos = 0;
        }
    });
}

relogio()

