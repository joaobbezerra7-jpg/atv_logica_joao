const botaoCadastro = document.querySelector('#btn-send')
        const divResultado = document.querySelector('#resultado')
        const divSituacao = document.querySelector("#div-situacao")
        const mostrar = document.querySelector("#btn-mostrar")
        const resultado = document.querySelector("#resultado")

            const doadores = [];
            const naoDoadores = [];

        botaoCadastro.addEventListener('click', (evt) => {
            evt.preventDefault()
            

            let idade = document.querySelector('#idade').value;
            let peso = document.querySelector('#peso').value;
            
           

            const pessoa = {
                idade: idade,
                peso: peso
            }

            if (((pessoa.idade >= 18) && (pessoa.idade <= 60) && pessoa.peso > 50)) {
                divSituacao.innerHTML = `Poderá doar sangue`;
                doadores.push(pessoa)
            } else {
                divSituacao.innerHTML = `Não poderá doar sangue`;
                naoDoadores.push(pessoa)
            }
            
            
        })

        mostrar.addEventListener('click', function () {
             resultado.innerHTML += `O número total de doadores é: ${doadores.length} <br>`
             resultado.innerHTML += `O número total de não doadores é: ${naoDoadores.length}`

          
        })




