            import { respostaSimples, respostaEspecial } from "./function.js"
            const botaoSimples = document.querySelector('[data-botao-simples]')
            const botaoEspecial = document.querySelector('[data-botao-especial]')

            botaoSimples.addEventListener('click', respostaSimples)

            botaoEspecial.addEventListener('click', respostaEspecial)
