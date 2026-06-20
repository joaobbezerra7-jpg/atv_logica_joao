const formDados = document.querySelector('#calculadora')
            const divResultado = document.querySelector('#div-resultado')

            formDados.addEventListener('submit', (evt) => {
                evt.preventDefault()

                const objformDados = new FormData(formDados);

                let nome = objformDados.get('nome')
                let peso = parseFloat(objformDados.get('p'))
                let altura = parseFloat(objformDados.get('altu'))

                let alturaQuadrada = altura * altura;

                let imc = ((peso / alturaQuadrada) * 10000).toFixed(1);

                if (imc < 20) {
                    divResultado.innerHTML = `O paciente ${nome} está abaixo do peso`
                } else if (imc >= 20 && imc < 25) {
                    divResultado.innerHTML = `O paciente ${nome} está com o peso normal`;
                }else if (imc >=25 && imc < 30 ) {
                    divResultado.innerHTML = `O paciente ${nome} está com excesso de peso`
                } else if (imc >= 30 && imc < 35) {
                    divResultado.innerHTML = `O paciente ${nome} está com obesidade`;
                }else {
                    divResultado.innerHTML = ` O paciente ${nome} está com obesidade mórbida`;
                }




            })