'use strict'

import { pesquisaCachorro } from './dogAPI.js'

const criarImg = (endImagem) => {
    const img =document.createElement('img')
    img.src = endImagem
    return img
}

const carregarImagem = async () => {
    const raca = document.getElementById('raca').value
    const imagens = await pesquisaCachorro(raca)
    const tagImagens = imagens.map(criarImg)
    galeria.replaceChildren(...tagImagens)
}
const carregarImagem2 = async () => {
    const raca = document.getElementById('racas').value
    const outrasimagens = await pesquisaCachorro(raca)
    const tagImagens = outrasimagens.map(criarImg)
    galeria2.replaceChildren(...tagImagens)
}

const handleKeypress = (event) => {
    if (event.key == 'Enter'){
        carregarImagem()
        carregarImagem2()
    }
}

document.getElementById('raca').addEventListener('keypress', handleKeypress)

