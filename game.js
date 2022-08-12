const gameInfo = [
    {
        question: "What is Clark Kent's biggest weakness?",
        a:'Green Meteor Rocks',
        b:'Red Meteor Rocks',
        c:'Silver Meteor Rocks',
        d:'Blue Meteor Rocks',
        correctAns: "a",
    },
    {
        question: 'What are effects of blue meteor rocks?',
        a:'Complete Delusion',
        b:'No powers',
        c:'Controlling other metas',
        d:'All the above',
        correctAns: "b",
    },
    {
        question: "Who is Clark's greates enemy?",
        a:'Lana Lang',
        b:'Jason Teague',
        c:'Lex Luthor',
        d:'Green Arrow',
        correctAns: "c",
    },
    {
        question: 'Who else came with Clark in the meteor showers?',
        a:'Davis Bloome',
        b:'Jason Teague',
        c:'Jimmy Olsen',
        d:'Oliver Queen',
        correctAns: "a",
    },
    {
        question: 'What does the "S" stands for?',
        a:'Symbol Of Hope',
        b:'Symbol Of Death',
        c:'Symbol Of Greed',
        d:'Symbol Of Life',
        correctAns: "a",
    },


];

const game= document.getElementById('game')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const choice1 = document.getElementById('choice1')
const choice2 = document.getElementById('choice2')
const choice3 = document.getElementById('choice3')
const choice4 = document.getElementById('choice4')
const nextBtn = document.getElementById('next')


let currentGame = 0
let answeredCorrecty = 0

loadGame()

function loadGame() {

    deselectAnswers()

    const currentGameInfo = gameInfo[currentGame]

    questionEl.innerText = currentGameInfo.question
    choice1.innerText = currentGameInfo.a
    choice2.innerText = currentGameInfo.b
    choice3.innerText = currentGameInfo.c
    choice4.innerText = currentGameInfo.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


nextBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === gameInfo[currentGame].correctAns) {
           answeredCorrecty++
       }

       currentGame++

       if(currentGame < gameInfo.length) {
           loadGame()
       } else {
           game.innerHTML = `
           <h1>You answered ${answeredCorrecty}/${gameInfo.length} questions correctly</h1>

           <button onclick="location.reload()">Shall We Play Again?</button>
           `
       }
    }
})