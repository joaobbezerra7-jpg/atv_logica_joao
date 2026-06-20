const formDados = document.querySelector('#calculadora')
const divResultado = document.querySelector('#div-resultado')

formDados.addEventListener('submit', (evt) => {
evt.preventDefault()

const objformDados = new FormData(formDados);

let altura = parseFloat(objformDados.get('altura'))
let largura = parseFloat(objformDados.get('largura'))

divResultado.innerHTML = `A área total é de ${largura * altura}m² <br> A quantidade de tinta que deve ser usada é ${(largura * altura) * 2}L`;

})
