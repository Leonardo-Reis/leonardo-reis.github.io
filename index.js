const icons = document.querySelectorAll(".skill-option")
const skillTitle = document.querySelector(".skills-title")
const linhas = document.querySelectorAll(".linha")

window.addEventListener('scroll', () => {
    const windowTop = window.pageYOffset*3/4

    if (windowTop) {
        console.log('animou')

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
    
})
