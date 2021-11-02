const foto = document.querySelector(".foto-container")
const textos_bem = document.querySelectorAll(".texto-bem")
const textos_quem = document.querySelectorAll(".texto-quem")

const elementos = [foto]
textos_bem.forEach((texto) => {
    elementos.push(texto)
})


const animaQuem = () => {
    setTimeout(() => {
        textos_quem.forEach((texto, n) => {
            setTimeout(() => {
                texto.style.animationPlayState = "running"
            }, n*500)
        })
    }, 1000)
}

const animaTitle = () => {
    elementos.forEach((elemento, n) => {
        setTimeout(() => {
            elemento.style.animationPlayState = "running"
        }, n*250)
    })
}

animaTitle()
animaQuem()
