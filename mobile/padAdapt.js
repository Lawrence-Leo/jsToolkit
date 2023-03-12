const REG = /(iPhone|iPad|iPhone OS|Phone|iPod|iOS)/i

const isTest = str => REG.test(str)

function padAdapt() {
    if (isTest(navigator.userAgent)) {
        const head = document.getElementsByTagName('head')
        const viewport = document.createElement('meta')
        viewport.name = 'viewport'
        viewport.content = 'target-densitydpi=device-dpi, width=480px, user-scalable=no'
        head.length > 0 && head[head.length - 1].appendChild(viewport)
    }
}