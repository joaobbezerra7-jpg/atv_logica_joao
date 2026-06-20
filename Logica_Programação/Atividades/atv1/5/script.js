const formDados = document.querySelector('#calculadora')
            const divResultado = document.querySelector('#div-resultado')

            formDados.addEventListener('submit', (evt) => {
                evt.preventDefault()

                const objformDados = new FormData(formDados);

                let lado1 = parseFloat(objformDados.get('l1'))
                let lado2 = parseFloat(objformDados.get('l2'))
                let lado3 = parseFloat(objformDados.get('l3'))

                if ((lado1 === lado2) && (lado1 === lado3) && (lado2 === lado3)) {
                    divResultado.innerHTML = "Os três lados são iguais, então é um triangulo Equilátero";
                } else if (((lado1 === lado2) && (lado1 !== lado3)) ||
                    ((lado1 === lado3) && (lado1 !== lado2))) {
                    divResultado.innerHTML = "Apenas dois lados são iguais, então é um triangulo Isóscele";
                } else {
                    divResultado.innerHTML = "Os três lados são diferentes, então é um triangulo Escaleno";
                }


               

            })