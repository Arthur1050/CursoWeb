(function () {
    function navegarViaAjax(hash) {
        if (!hash) return

        const link = document.querySelector(`[wm-link='${hash}']`)
        if(!link) return

        const destino = document.querySelector('[wm-link-destino]')

        const url = hash.substring(1)
        fetch(url)
            .then(resp => resp.text())
            .then(html => {
                destino.innerHTML = html
                /* Scripts vindos de requisições ajax não são executadas. Solução abaixo */
                /* Pega todo o texto entre as tags "script" (html.match()) e é passado para ser invecado pela função eval() */
                /* Tá em índice 1 ([1]) pra retornar somente o texto e não os "<script></script>" */
                const result = html.match(/\<script\>([\s\S]*)\<\/script\>/)
                if (result && result.length >=2) {
                    eval(result[1])
                }
            })
    }

    function configurarLinks() {
        document.querySelectorAll('[wm-link]')
            .forEach(link => {
                link.href = link.attributes['wm-link'].value
            })
    }

    function navegacaoInicial() {
        if (location.hash) {
            navegarViaAjax(location.hash)
        } else {
            const primeiroLink = document.querySelector('[wm-link]')
            navegarViaAjax(primeiroLink.hash)
        }
    }

    window.onhashchange = e => navegarViaAjax(location.hash)
    
    configurarLinks()
    navegacaoInicial()
})()