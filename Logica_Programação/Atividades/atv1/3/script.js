const formDados = document.querySelector('#calculadora')
const divResultado = document.querySelector('#div-resultado')

formDados.addEventListener('submit', (evt) => {
evt.preventDefault()

const objformDados = new FormData(formDados);

let distancia = parseFloat(objformDados.get('dis'))
let consumo = parseFloat(objformDados.get('con'))
let preco = parseFloat(objformDados.get('pre'))


divResultado.innerHTML = `A quantidade ideal de combustivel para fazer a viagem é de: ${distancia * consumo} litros <br> O valor total a ser pago é de R$${distancia * preco} reais `

})
