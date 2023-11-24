const palavrasEng = document.querySelectorAll('.palavrasEng h2')
const abaPalavras = document.querySelector('.modeloPalavra')
const fundoSite = document.querySelector('.fundoDicionario')
const abaDicionario = document.querySelector('.abrirAba')
const exemploDialogos = document.querySelector('.exemploDialogo')

let audioIngles
let audioPortugues

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
            explicacaoIngles.textContent = "Government of a king, an emperor, a sovereign prince; a government exercised by any authority."
            explicacaoPortugues.textContent = "Governo de um rei, de um imperador, de um príncipe soberano; um governo exercido por uma autoridade qualquer."
        } 
        else if (e.target.textContent == "Happiness") {
            palavrasPortugues.textContent = "Felicidade"
            explicacaoIngles.textContent = "Quality or state of being happy; state of a fully satisfied conscience; satisfaction, contentment, well-being"
            explicacaoPortugues.textContent = "Qualidade ou estado de feliz; estado de uma consciência plenamente satisfeita; satisfação, contentamento, bem-estar"
        }
        else if(e.target.textContent == "Suddenly"){
            palavrasPortugues.textContent = "De repente"
            explicacaoIngles.textContent = "Suddenly, unexpectedly, suddenly, suddenly"
            explicacaoPortugues.textContent = "Repentinamente, inesperadamente, subitamente, de golpe"
        }
        else if(e.target.textContent == "Been"){
            palavrasPortugues.textContent = "Estive"
            explicacaoIngles.textContent = "Past action of being, possessing or demonstrating a temporary state; act of remaining in a certain situation for some time"
            explicacaoPortugues.textContent = "Ação passada de estar, de possuir ou demonstrar um estado temporário; ato de se manter numa determinada situação por algum tempo"
        }
        else if(e.target.textContent == "Wind"){
            palavrasPortugues.textContent = "Vento"
            explicacaoIngles.textContent = "Atmospheric air in natural movement."
            explicacaoPortugues.textContent = "O ar atmosférico em movimento natural."
        }
        else if(e.target.textContent == "Outside"){
            palavrasPortugues.textContent = "Fora"
            explicacaoIngles.textContent = "On the outside; somewhere other than their usual residence."
            explicacaoPortugues.textContent = "Na parte exterior; em algum lugar diverso da residência habitual."
        }
        else if(e.target.textContent == "Reign"){
            palavrasPortugues.textContent = "Reinado"
            explicacaoIngles.textContent = "Government of a sovereign."
            explicacaoPortugues.textContent = "Governo de um soberano."
        }
        else if(e.target.textContent == "Had"){
            palavrasPortugues.textContent = "Tive"
            explicacaoIngles.textContent = "Possessed, obtained, acquired, enjoyed, held, maintained, kept, experienced, effected."
            explicacaoPortugues.textContent = "Possuí, obtive, adquiri, desfrutei, detive, mantive, guardei, experienciei, efetuei."
        }
        else if(e.target.textContent == "Portrait"){
            palavrasPortugues.textContent = "Retrato"
            explicacaoIngles.textContent = "Image of a person (real or imaginary), reproduced by painting, drawing, photography, etc.; artistic work in which this image is reproduced."
            explicacaoPortugues.textContent = "Imagem de uma pessoa (real ou imaginária), reproduzida por pintura, desenho, fotografia etc; obra artística em que se reproduz essa imagem."
        }
        else if(e.target.textContent == "Property"){
            palavrasPortugues.textContent = "Propriedade"
            explicacaoIngles.textContent = "Special attribute; faculty, character, characteristic; inherent quality of beings."
            explicacaoPortugues.textContent = "Atributo especial; faculdade, caráter, característica; qualidade inerente aos seres."
        }
        palavrasIngles.textContent = e.target.textContent
        audioIngles = new Audio("Audios/" + e.target.textContent.toLowerCase() + ".ogg")
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

const botaoAudioPortugues = document.querySelector('.botaoAudioPortugues')
const botaoAudioIngles = document.querySelector('.botaoAudioIngles')


botaoAudioPortugues.addEventListener('click', (e) => {
    audioPortugues.play()
})
botaoAudioIngles.addEventListener('click', (e) => {
    audioIngles.play()
})
