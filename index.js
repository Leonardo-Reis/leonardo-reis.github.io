const icons = document.querySelectorAll(".skill-option")
const skillTitle = document.querySelector(".skills-title")
const linhas = document.querySelectorAll(".linha")

window.addEventListener('scroll', () => {
    const windowTop = window.pageYOffset + window.innerHeight*3/4
    const skillsTop = skillTitle.offsetTop

    console.log(windowTop + " e " + skillsTop)

    if (windowTop > skillsTop) {
        animaSkills()
    }
    
})

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
