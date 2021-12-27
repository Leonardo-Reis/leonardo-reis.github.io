const icons = document.querySelectorAll(".skill-option")
const skillTitle = document.querySelector(".skills-title")
const linhas = document.querySelectorAll(".linha")

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

const animaSkills = () => {
    console.log('a')
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
