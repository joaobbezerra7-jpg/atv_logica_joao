const formDados = document.querySelector('#calculadora')
const divResultado = document.querySelector('#div-resultado')

formDados.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const objformDados = new FormData(formDados);

  
    let codigo = objformDados.get('cod')
    let senha = parseFloat(objformDados.get('pass'))

    if ((codigo === "ABCD1234")&&(senha === 1234)) {
        divResultado.innerHTML = "Acesso Permitido"
    } else {
        divResultado.innerHTML = "Acesso Negado, ou o código ou  a senha está errada"
    }

    

})