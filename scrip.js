const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

var currenActive = 1
next.addEventListener('click', ()=> {
    currenActive++
    if(currenActive > circles.length){
        currenActive = circles.length
    }
    update();
})

prev.addEventListener('click', ()=> {
    currenActive--
    if(currenActive < 1){
        currenActive = 1
    }
    update();
})

function update() {
    //actualizar la clase Active en circle
    circles.forEach((circle, index) => {
        if(index < currenActive){
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    //Actualizar la barra de progreso
    var activeCircles = document.querySelectorAll('.active')
    progress.style.width = (activeCircles.length - 1) / (circles.length - 1) * 100 + '%'

    //Cambiar el boton enable y disable state
    if(currenActive === 1 ){
        prev.disabled = true
    } else if(currenActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }

}