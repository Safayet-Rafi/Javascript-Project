const rgbDisplay = document.getElementById("rgbDisplay");
const colorChooser = document.querySelectorAll(".colorChooser");
const newColor = document.getElementById("newColor");
const playAgain = document.getElementById("playAgain");
let randomColor;
let randomIndex;

assignRandomColor();

function assignRandomColor(){
    randomColor = getRandomColor();
    rgbDisplay.textContent = randomColor;

    randomIndex = Math.floor(Math.random() * colorChooser.length);
    colorChooser[randomIndex].style.backgroundColor = randomColor;

    for(let i = 0 ; i < colorChooser.length ; i++){
        if(i != randomIndex){
            colorChooser[i].style.backgroundColor = getRandomColor();
        }
        colorChooser[i].disabled = false;
    }
}

function getRandomColor(){
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `RGB(${red},${green},${blue})`;
}

function guessTheColor(guessedIndex){
    if(guessedIndex === randomIndex){
        for(let i = 0 ;i < colorChooser.length ; i++){
            colorChooser[i].style.opacity = 1;
            colorChooser[i].style.backgroundColor = randomColor;
            colorChooser[i].disabled = true;
        }
        playAgain.style.display = "inline-block";
        newColor.style.display = "none";
    }
    else{
        const incorrectColor = colorChooser[guessedIndex];
        incorrectColor.style.opacity = 0;
    }
}

function playTheGameAgain(){
    playAgain.style.display = "none";
    newColor.style.display = "inline-block";
    assignRandomColor();
}