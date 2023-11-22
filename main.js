const palavrasEng = document.querySelectorAll('.palavrasEng h2')
const abaPalavras = document.querySelector('.modeloPalavra')
const fundoSite = document.querySelector('.fundoDicionario')
const abaDicionario = document.querySelector('.abrirAba')
const exemploDialogos = document.querySelector('.exemploDialogo')


for(let posicao = 0; posicao < palavrasEng.length; posicao++) {
    palavrasEng[posicao].addEventListener('click', (e) => {
        abaPalavras.style.display = "block"
        fundoSite.style.display = "flex"
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
