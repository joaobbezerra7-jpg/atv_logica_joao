        const form = document.querySelector("#form");
        const resultadoTotal = document.querySelector("#resultado-total");
        const resultadoHomem = document.querySelector("#resultado-media-homem")
        const resultadoMulheres = document.querySelector("#resultado-mulheres")
        const resultadoPercentualHomem =document.querySelector("#resultado-percentual-homem")
        const resultadoPercentualMulher =document.querySelector("#resultado-percentual-mulher")
        
        const botaoTotal = document.querySelector("#btn-total");
        const botaoMedia = document.querySelector("#mediaHomem");
        const botaoMulheres1000e3000 = document.querySelector("#btn-mulherRenda")
        const botaoPercentual = document.querySelector("#btn-percentual")


       
        const Totalpessoas = [];
        const Totalmulheres = [];
        const Totalhomens = [];
        const homem2000 = [];
        const mulher2000 = [];
        const mulheres1000E3000 = [];
     

        form.addEventListener('submit', (evt) =>{
            evt.preventDefault()

            const objFormdado = new FormData(form);
            const idade = objFormdado.get('idade');
            const renda = parseFloat(objFormdado.get('renda'));
            const genero = objFormdado.get('genero');

            const pessoa = {
                idade,
                renda,
                genero,
            };
            

            
            Totalpessoas.push(pessoa);

            if (pessoa.genero === "masculino") {
                Totalhomens.push(pessoa);
                if (pessoa.renda >= 2000) {
                    homem2000.push(pessoa)
                }
                if ((pessoa.renda >= 1000) && (pessoa.renda <= 3000)) {
                    homens1000E3000.push(pessoa)
                }

            } else if (pessoa.genero === "feminino") {
                Totalmulheres.push(pessoa);
                if (pessoa.renda >= 2000) {
                    mulher2000.push(pessoa)
                }
                if ((pessoa.renda >= 1000) && (pessoa.renda <= 3000)) {
                    mulheres1000E3000.push(pessoa)
                }
            } 
         

           
        });

        botaoTotal.addEventListener('click',(evt) => {
            resultadoTotal.innerHTML = Totalpessoas.length;
        });

        botaoMedia.addEventListener('click',(evt) =>{
            let acc = 0;
           
            for (const elemento of Totalhomens) {
                acc = acc + elemento.renda;  
            }
             
        resultadoHomem.innerHTML = acc / (Totalhomens.length);
    
        });

        botaoMulheres1000e3000.addEventListener('click', (evt) => {
            resultadoMulheres.innerHTML = mulheres1000E3000.length;
        })

       
        

        botaoPercentual.addEventListener('click', (evt) => {
            resultadoPercentualHomem.innerHTML = `${(homem2000.length / Totalpessoas.length) * 100}% dos homens ganham 2000 ou mais`;
            resultadoPercentualMulher.innerHTML = `${(mulher2000.length / Totalpessoas.length) * 100}% das mulheres ganham 2000 ou mais`;


        })