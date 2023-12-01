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
        const frasesEng = document.querySelector('.fraseIngles')
        const frasesPortugues = document.querySelector('.frasePortugues')

        if (e.target.textContent == "Behavior") {
            frasesEng.innerHTML = 'The dogs <u>behavior</u> towards strangers is very friendly and welcoming.'
            frasesPortugues.innerHTML = 'Eram frios, sem emoções e não tinham um bom <u>comportamento</u>.'
            palavrasPortugues.textContent = "Comportamento"
            explicacaoIngles.textContent = "Government of a king, an emperor, a sovereign prince; a government exercised by any authority."
            explicacaoPortugues.textContent = "Governo de um rei, de um imperador, de um príncipe soberano; um governo exercido por uma autoridade qualquer."
        } 

        else if (e.target.textContent == "Happiness") {
            frasesEng.innerHTML = 'True <u>happiness</u> comes from within.'
            frasesPortugues.innerHTML = 'A verdadeira <u>felicidade</u> vem de dentro.'
            palavrasPortugues.textContent = "Felicidade"
            explicacaoIngles.textContent = "Quality or state of being happy; state of a fully satisfied conscience; satisfaction, contentment, well-being"
            explicacaoPortugues.textContent = "Qualidade ou estado de feliz; estado de uma consciência plenamente satisfeita; satisfação, contentamento, bem-estar"
        }

        else if(e.target.textContent == "Suddenly"){
            frasesEng.innerHTML = '<u>Suddenly</u>, the room fell silent as everyone turned to listen.'
            frasesPortugues.innerHTML = 'A guerra continuou por muito tempo até que <u>de repente</u>.'
            palavrasPortugues.textContent = "De repente"
            explicacaoIngles.textContent = "Suddenly, unexpectedly, suddenly, suddenly"
            explicacaoPortugues.textContent = "Repentinamente, inesperadamente, subitamente, de golpe"
        }

        else if(e.target.textContent == "Been"){
            frasesEng.innerHTML = 'Since she arrived, I have <u>been</u> considering a change in plans.'
            frasesPortugues.innerHTML = '<u>Estive</u> todo esse tempo te procurando e esperando por esse momento.'
            palavrasPortugues.textContent = "Estive"
            explicacaoIngles.textContent = "Past action of being, possessing or demonstrating a temporary state; act of remaining in a certain situation for some time"
            explicacaoPortugues.textContent = "Ação passada de estar, de possuir ou demonstrar um estado temporário; ato de se manter numa determinada situação por algum tempo"
        }

        else if(e.target.textContent == "Wind"){
            frasesEng.innerHTML = 'Feel the <u>wind</u> in your hair.'
            frasesPortugues.innerHTML = 'Um dia em que o <u>vento</u> chegou a mudar de direção.'
            palavrasPortugues.textContent = "Vento"
            explicacaoIngles.textContent = "Atmospheric air in natural movement."
            explicacaoPortugues.textContent = "O ar atmosférico em movimento natural."
        }

        else if(e.target.textContent == "Outside"){
            frasesEng.innerHTML = 'The children love playing <u>outside</u> in the park.'
            frasesPortugues.innerHTML = 'Luiz antes de começar a guerra passou um bom tempo <u>fora</u>.'
            palavrasPortugues.textContent = "Fora"
            explicacaoIngles.textContent = "On the outside; somewhere other than their usual residence."
            explicacaoPortugues.textContent = "Na parte exterior; em algum lugar diverso da residência habitual."
        }

        else if(e.target.textContent == "Reign"){
            frasesEng.innerHTML = 'Her <u>reign</u> brought prosperity.'
            frasesPortugues.innerHTML = 'Luiz Carvalho Almeida estava sofrendo ameaças de outro <u>reinado</u>.'
            palavrasPortugues.textContent = "Reinado"
            explicacaoIngles.textContent = "Government of a sovereign."
            explicacaoPortugues.textContent = "Governo de um soberano."
        }

        else if(e.target.textContent == "Had"){
            frasesEng.innerHTML = 'By the time I arrived, she <u>had</u> already completed her presentation.'
            frasesPortugues.innerHTML = '<u>Tive</u> tantos anos de paz, e você declarou guerra contra o meu reinado?'
            palavrasPortugues.textContent = "Tive"
            explicacaoIngles.textContent = "Possessed, obtained, acquired, enjoyed, held, maintained, kept, experienced, effected."
            explicacaoPortugues.textContent = "Possuí, obtive, adquiri, desfrutei, detive, mantive, guardei, experienciei, efetuei."
        }

        else if(e.target.textContent == "Portrait"){
            frasesEng.innerHTML = 'She hung a beautiful <u>portrait</u> of her family in the living room.'
            frasesPortugues.innerHTML = 'Era um <u>retrato</u> da primeira pessoa que tinha liderado.'
            palavrasPortugues.textContent = "Retrato"
            explicacaoIngles.textContent = "Image of a person (real or imaginary), reproduced by painting, drawing, photography, etc.; artistic work in which this image is reproduced."
            explicacaoPortugues.textContent = "Imagem de uma pessoa (real ou imaginária), reproduzida por pintura, desenho, fotografia etc; obra artística em que se reproduz essa imagem."
        }

        else if(e.target.textContent == "Property"){
            frasesEng.innerHTML = 'The mansion is an impressive <u>property</u> with vast gardens.'
            frasesPortugues.innerHTML = 'Queria tomar <u>propriedade</u> de seu território e acabar com a sua vida.'
            palavrasPortugues.textContent = "Propriedade"
            explicacaoIngles.textContent = "Special attribute; faculty, character, characteristic; inherent quality of beings."
            explicacaoPortugues.textContent = "Atributo especial; faculdade, caráter, característica; qualidade inerente aos seres."
        }

        palavrasIngles.textContent = e.target.textContent
        audioIngles = new Audio("Audios/" + e.target.textContent.toLowerCase() + ".ogg")
        audioPortugues = new Audio("Audios/" + palavrasPortugues.textContent.toLowerCase() + ".ogg")
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
botaoAudioIngles.addEventListener('click', (e) => {
    audioIngles.play()
})
