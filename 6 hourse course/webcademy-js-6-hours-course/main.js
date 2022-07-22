const headingRed = document.querySelectorAll('h2');

headingRed.forEach(function(value) {
value.classList.add('red-text')
value.classList.remove('green')
})


const paraps = document.querySelectorAll('p')
for (let p of paraps){
    p.classList.add('green-text')
}