const formDados = document.querySelector('#calculadora')
            const divResultado = document.querySelector('#div-resultado')

            formDados.addEventListener('submit', (evt) => {
                evt.preventDefault()

                const objformDados = new FormData(formDados);

              
                let numero = parseFloat(objformDados.get('n'))
                

                if ((numero % 3 === 0) && (numero % 7 === 0)) {
                    divResultado.innerHTML = `${numero} é divisível por 3 e 7`


                } else {
                    divResultado.innerHTML = `${numero} não é divisível por 3 e 7`

                }


            })