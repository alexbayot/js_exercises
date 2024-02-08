const hidden = document.querySelectorAll('.reveal');

function show(){
    hidden.forEach(function(element){
        curPos = window.scrollY;
        let scroll = (element.offsetTop + (element.offsetHeight / 2)) - window.innerHeight
        if (curPos > scroll) {
            element.classList.add("revealed")
          }
    })
}
show()

window.addEventListener('scroll', function(){
    show();
})