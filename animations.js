const foto = document.querySelector(".foto-container")
const textos_bem = document.querySelectorAll(".texto-bem")
const textos_quem = document.querySelectorAll(".texto-quem")
const icons = document.querySelectorAll(".skill-option")
const skillTitle = document.querySelector(".skills-title")
const linhas = document.querySelectorAll(".linha")

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

const animaSkills = () => {
    icons.forEach((icon, n) => {
        setTimeout(() => {
            icon.style.animationPlayState = "running"
        }, 250*n)
    })

    linhas.forEach((linha) => {
        linha.style.visibility = "visible"
        linha.style.animationPlayState = "running"
    })
}

animaTitle()
animaQuem()

setTimeout(() => {
    const windowTop = window.pageYOffset + window.innerHeight*3/4
    const skillsTop = skillTitle.offsetTop

    if (windowTop > skillsTop) {
        animaSkills()
    }
}, 2000);

window.addEventListener('scroll', () => {
    const windowTop = window.pageYOffset + window.innerHeight*3/4
    const skillsTop = skillTitle.offsetTop

    if (windowTop > skillsTop) {
        animaSkills()
    }
    
})