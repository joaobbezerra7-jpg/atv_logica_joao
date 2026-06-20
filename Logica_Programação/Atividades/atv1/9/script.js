const formDados = document.querySelector('#calculadora')
            const divResultado = document.querySelector('#div-resultado')

            formDados.addEventListener('submit', (evt) => {
                evt.preventDefault()

                const objformDados = new FormData(formDados);

              
                let produto = objformDados.get('pro')
                let preco = parseFloat(objformDados.get('pre'))

                if (preco < 10) {
                    divResultado.innerHTML = `O ${produto} terá um lucro de 70%, o que equivale á ${(preco * 70) / 100} reais`
                } else if (preco >= 10 && preco < 30) {
                    divResultado.innerHTML = `O ${produto} terá um lucro de 50%, o que equivale á ${(preco * 50) / 100} reais`
                } else if (preco >= 30 && preco < 50) {
                    divResultado.innerHTML = `O ${produto} terá um lucro de 40%, o que equivale á ${(preco * 40) / 100} reais`
                } else if (preco > 50) {
                    divResultado.innerHTML = `O ${produto} terá um lucro de 30%, o que equivale á ${(preco * 30) / 100} reais`
                }
                

            })
