type RespostaServidor = string | boolean;

function processarResposta(resposta: RespostaServidor) {
    if (typeof resposta == "string") {
        console.log(resposta)
    }
    else {
        console.log(resposta == true ? "Sucesso!" : "Erro!")
    }
}

processarResposta(true)
processarResposta(false)
processarResposta("Retornado com sucesso!")