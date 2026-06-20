let botao = document.querySelector("#btn");
    let resultado = document.querySelector("#resultado")

    botao.addEventListener('click',function () {
        let contador = 0;

        for (let index = 1; index < 1001; index++) {
            
            if (index % 7 === 0) {
                contador += 1;
            } 

            
        }

        resultado.innerHTML = `Existem ${contador} números entre 1 e 1000 que são divisiveis por 7`;
        
    })