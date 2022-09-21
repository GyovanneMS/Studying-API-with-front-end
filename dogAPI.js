'use strict'


const pesquisaCachorro = async (raca) => {
    const url = `https://dog.ceo/api/breed/${raca}/images`

    const response = await fetch(url)

    const listaDoguinhonhos = await response.json()

    return listaDoguinhonhos.message
}

export {
    pesquisaCachorro
}