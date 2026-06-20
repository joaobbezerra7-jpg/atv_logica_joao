const formDados = document.querySelector('#calculadora')
        const divResultado = document.querySelector('#div-resultado')

        formDados.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const objformDados = new FormData(formDados);

    let nome = objformDados.get('name')
    let nota1 = parseFloat(objformDados.get('n1'))
    let nota2 = parseFloat(objformDados.get('n2'))
    let nota3 = parseFloat(objformDados.get('n3'))
    

let media = (nota1 + nota2 + nota3) / 3;


if (media >= 6) {
    divResultado.innerHTML = `${nome}, sua média é  ${Math.round(media)}, voçê foi aprovado!`


} else {
    divResultado.innerHTML = `${nome}, sua média é ${Math.round(media)}, voçê foi reprovado!`

}

  
})
