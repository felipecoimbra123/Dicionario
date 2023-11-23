const palavrasEng = document.querySelectorAll('.palavrasEng h2')
const abaPalavras = document.querySelector('.modeloPalavra')
const fundoSite = document.querySelector('.fundoDicionario')
const abaDicionario = document.querySelector('.abrirAba')
const exemploDialogos = document.querySelector('.exemploDialogo')


for(let posicao = 0; posicao < palavrasEng.length; posicao++) {
    palavrasEng[posicao].addEventListener('click', (e) => {
        abaPalavras.style.display = "block"
        fundoSite.style.display = "flex"

        const palavrasIngles = document.querySelector('.palavraIngles')
        const palavrasPortugues = document.querySelector('.palavraPortugues')
        const explicacaoIngles = document.querySelector('.explicacaoIngles')
        const explicacaoPortugues = document.querySelector('.explicacaoPortugues')

        if (e.target.textContent == "Behavior") {
            palavrasPortugues.textContent = "Comportamento"
            explicacaoIngles.textContent = "Government of a king, an emperor, a sovereign prince. Or a government exercised by any authority."
            explicacaoPortugues.textContent = "Governo de um rei, de um imperador, de um príncipe soberano. Ou um governo exercido por uma autoridade qualquer."
        } 
        else if (e.target.textContent == "Happiness") {
            palavrasPortugues.textContent = "Felicidade"
        }
        else if(e.target.textContent == "Suddenly"){
            palavrasPortugues.textContent = "De repente"
        }
        else if(e.target.textContent == "Been"){
            palavrasPortugues.textContent = "Estive"
        }
        else if(e.target.textContent == "Wind"){
            palavrasPortugues.textContent = "Vento"
        }
        else if(e.target.textContent == "Outside"){
            palavrasPortugues.textContent = "Fora"
        }
        else if(e.target.textContent == "Reign"){
            palavrasPortugues.textContent = "Reinado"
        }
        else if(e.target.textContent == "Had"){
            palavrasPortugues.textContent = "Tive"
        }
        else if(e.target.textContent == "Portrait"){
            palavrasPortugues.textContent = "Retrato"
        }
        else if(e.target.textContent == "Proprety"){
            palavrasPortugues.textContent = "Propriedade"
        }
        palavrasIngles.textContent = e.target.textContent
    })
}

fundoSite.addEventListener('click', (e) => {
    abaPalavras.style.display = "none"
    fundoSite.style.display = "none"
}
)

let abertoDicionario = true
    
abaDicionario.addEventListener('click', (e) => {
    if (abertoDicionario) {
        exemploDialogos.style.display = "none"
        abertoDicionario = false
    } else {
        exemploDialogos.style.display = "flex"
        abertoDicionario = true
    }
})
