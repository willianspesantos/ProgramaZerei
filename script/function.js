const valorCaixa = document.querySelector('[data-valor]')            
const tarifaSimples = 6.35
const tarifaEspecial = 10.55

export function respostaSimples() {
    if (valorCaixa.value < tarifaSimples) {
        alert('valor inválido!')
    } else {
        const valorCaixaConvertido = Number(valorCaixa.value)
        const conta1 = (valorCaixaConvertido / tarifaSimples)
        const sobra = valorCaixaConvertido - (Number.parseInt(conta1) * tarifaSimples)
        const falta = sobra - tarifaSimples
        
        adicionaResposta(sobra, falta)                                    
    }
}

export function respostaEspecial() {
    if (valorCaixa.value < tarifaEspecial) {
        alert('valor inválido!')
    } else {
        const valorCaixaConvertido = Number(valorCaixa.value)
        const conta1 = (valorCaixaConvertido / tarifaEspecial)
        const sobra = valorCaixaConvertido - (Number.parseInt(conta1) * tarifaEspecial)
        const falta = sobra - tarifaEspecial
    
        adicionaResposta(sobra, falta)        
    }
}

const campoResposta = document.querySelector('[data-resposta]')

function adicionaResposta(sobra, falta) {
    const conteudo = `
        <h2>Irá:</h2>
            <div class="resposta__resultado">
                <div class="sobrar">
                    <p>Sobrar</p>
                    <p>${sobra.toFixed(2)}</p>
                </div>
                <span>ou</span>
                <div class="faltar">
                    <p>Faltar</p>
                    <p>${falta.toFixed(2)}</p>
                </div>
            </div>
            <a href="programaZerei.html" class="botao-refazer">refazer</a>      
    `

    campoResposta.innerHTML = conteudo
}