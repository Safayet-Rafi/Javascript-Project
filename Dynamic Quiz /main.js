
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const radioButtons = document.querySelectorAll('#answerBox input[type="radio"]');
const nextButton = document.getElementById("nextButton");
const stopButton = document.getElementById("stopButton");
const container = document.getElementById("container");
const playAgainButton = document.getElementById("playAgainButton");

let answer;
let randomIndex;
let count = 0;
let rightAnswer = 0;

display();
function display(){

    for(let i = 0 ; i < radioButtons.length ; i++){
        radioButtons[i].checked = false;
    }

    //Question count
    count++;
    quiz.textContent = "Question " + count + " :";

    //random number generation
    let randomNumber1 = Math.floor(Math.random() * 10);
    let randomNumber2 = Math.floor(Math.random() * 10);
    question.textContent = "What is " + randomNumber1 + "*" + randomNumber2 + "?";

    answer = randomNumber1 * randomNumber2;

    randomIndex = Math.floor(Math.random() * radioButtons.length);

    for(let i = 0 ; i < radioButtons.length ; i++){
        let label = document.querySelector(`label[for="option${i + 1}"]`);
        if(i != randomIndex){
            //the loop is for distinction of answer and random value
            while(true){
                let random = Math.floor(Math.random() * 10);
                if(random != answer){
                    label.textContent = random;
                    break;
                }
            }
        }
        else{
            label.textContent = answer;
        }
    }
}

nextButton.onclick = () => {
    for(let i = 0 ; i < radioButtons.length ; i++){
        if(radioButtons[i].checked && i === randomIndex){
            rightAnswer++;
        }
    }
    display();
}

stopButton.onclick = () => {
    count--;
    container.style.display = "none";

    const secondPage = document.getElementById("secondPage");
    secondPage.style.display = "block";

    const text = document.getElementById("text");
    text.textContent = "You have got " + rightAnswer + " right answer in " + count + " question";
}

playAgainButton.onclick = () => {
    container.style.display = "block";
    secondPage.style.display = "none";
    count = 0;
    rightAnswer = 0;
    display();
}