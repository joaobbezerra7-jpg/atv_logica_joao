const formDados = document.querySelector('#calculadora')
        const divResultado = document.querySelector('#div-resultado')

        formDados.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const objformDados = new FormData(formDados);

    let valor1 = parseFloat(objformDados.get('num1'))
    let valor2 = parseFloat(objformDados.get('num2'))
    let valor3 = parseFloat(objformDados.get('num3'))
    

     let media = (valor1 + valor2 + valor3) / 3;
     

    divResultado.innerHTML = `A média é ${media.toFixed(1)}`
    
})