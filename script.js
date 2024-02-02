function randomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`
}

// const h1 = document.querySelector('h1');

// setInterval(function() {
//     h1.style.color = randomRGB(); 
// }, 500)


//selecting the span class and saving it into a variable

const letters = document.querySelectorAll('.letter');

//looping over each letter in letters and giving it a random color, repeating every 500ms.

const intervalId = setInterval(function(){
    for(let letter of letters) {
        letter.style.color = randomRGB();
    }
}, 1000)

//to make this transition smoother - use CSS/transition property
