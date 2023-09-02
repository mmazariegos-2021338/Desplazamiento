const animation  = document.querySelectorAll('.animation')

window.addEventListener('scroll', checkAnimation)

checkAnimation()

function checkAnimation() {
    const triggerBottom = window.innerHeight / 5 * 4

    animation.forEach(animation => {
        const animationTop = animation.getBoundingClientRect().top

        if(animationTop < triggerBottom) {
            animation.classList.add('Mostrar')
        } else {
            animation.classList.remove('Mostrar')
        }
    })
}

