const formDado = document.querySelector("#formulario");
    const resultado = document.querySelector("#div-resultado");

    formDado.addEventListener('submit', (evt) => {
        evt.preventDefault()

        const objFormDado = new FormData(formDado);

        let numero = parseFloat(objFormDado.get('num'));
        let divisores = [];

        for (let i = 0; i < numero; i++) {
            
           if (numero % i === 0) {
           divisores.push(i)
           }

           resultado.innerHTML = `Os divisores de ${numero} são: <br> ${divisores}`
        }

    })