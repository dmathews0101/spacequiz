const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const msgElement = document.getElementById('msg')

let shuffledQuestion, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide');
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
    msgElement.innerHTML = "Please select one of the answers above."
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
    if (correct){
        msgElement.innerHTML = "Correct answer was selected"
    } else {
        msgElement.innerHTML = "Incorrect answer was selected"
    }
}

function setStatusClass(element, correct){
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'How many planets are there in our solar system ?',
        answers: [
            { text: '9', correct: false },
            { text: '8', correct: true },
            { text: '10', correct: false },
            { text: '7', correct: false },      
        ]
    },
    {
        question: 'Which is not a moon of saturn ?',
        answers: [
            { text: 'Titan', correct: false },
            { text: 'Enceladus', correct: false },
            { text: 'Phobos', correct: true },
            { text: 'Mimas', correct: false },
        ]
    },
    {
        question: 'Which is the nearest solar system ?',
        answers: [
            { text: 'Lalande 21185 system', correct: false },
            { text: 'Proxima Centauri system', correct: true },
            { text: 'Lacaille 9352 system', correct: false },
            { text: 'YZ Ceti system', correct: false },
        ]
    },
    {
        question: 'Which is the name of the Constellation with star Tau Ceti ?',
        answers: [
            { text: 'Centaurus', correct: false },
            { text: 'Aries', correct: false },
            { text: 'Ursa Major', correct: false },
            { text: 'Cetus', correct: true },
        ]
    },
    {
        question: 'Which of the following Star is nearest to sun ?',
        answers: [
            { text: 'HD 142', correct: false },
            { text: '61 Virginis', correct: true },
            { text: 'Gliese 221', correct: false },
            { text: 'Kepler-42', correct: false },
        ]
    },
    {
        question: 'Which is not a moon of jupiter ?',
        answers: [
            { text: 'Lo', correct: false },
            { text: 'Ganymede', correct: false },
            { text: 'Europa', correct: false },
            { text: 'Deimos', correct: true },
        ]
    },
    {
        question: 'How far is moon from earth ?',
        answers: [
            { text: '284, 400 km', correct: false },
            { text: '384, 400 km', correct: true },
            { text: '584, 400 km', correct: false },
            { text: '484, 400 km', correct: false },
        ]
    },
    {
        question: 'How far is mars from earth ?',
        answers: [
            { text: '189.19 million km', correct: false },
            { text: '389.19 million km', correct: true },
            { text: '489.19 million km', correct: false },
            { text: '689.19 million km', correct: false },
        ]
    },
    {
        question: 'How far is sun from earth ?',
        answers: [
            { text: '251.56 million km', correct: false },
            { text: '551.56 million km', correct: false },
            { text: '151.56 million km', correct: true },
            { text: '451.56 million km', correct: false },
        ]
    },
    {
        question: 'How far is star proxima centauri from earth ?',
        answers: [
            { text: '6.246 light years', correct: false },
            { text: '1.246 light years', correct: false },
            { text: '3.246 light years', correct: false },
            { text: '4.246 light years', correct: true },
        ]
    },
    {
        question: 'How many constellations are there in the sky ?',
        answers: [
            { text: '66', correct: false },
            { text: '77', correct: false },
            { text: '88', correct: true },
            { text: '85', correct: false },
        ]
    },
    {
        question: 'Which constellation is not a constellation in zodiac ?',
        answers: [
            { text: 'Aries', correct: false },
            { text: 'Centaurus', correct: true },
            { text: 'Aquarius', correct: false },
            { text: 'Gemini', correct: false },
        ]
    },
    {
        question: 'Which of the following is the circumference of earth ?',
        answers: [
            { text: '30, 075 km', correct: false },
            { text: '20, 075 km', correct: false },
            { text: '40, 075 km', correct: true },
            { text: '50, 075 km', correct: false },
        ]
    },
    {
        question: 'Which of the following is the circumference of mars ?',
        answers: [
            { text: '11, 343 km', correct: false },
            { text: '31, 343 km', correct: false },
            { text: '21, 343 km', correct: true },
            { text: '41, 343 km', correct: false },
        ]
    },
    {
        question: 'Which of the following is the circumference of moon ?',
        answers: [
            { text: '40, 917 km', correct: false },
            { text: '20, 917 km', correct: false },
            { text: '30, 917 km', correct: false },
            { text: '10, 917 km', correct: true },
        ]
    },
    {
        question: 'How many hours is a day on moon ?',
        answers: [
            { text: '708.7 hours', correct: true },
            { text: '608.7 hours', correct: false },
            { text: '808.7 hours', correct: false },
            { text: '908.7 hours', correct: false },
        ]
    },
    {
        question: 'how many hours is a day on mars ?',
        answers: [
            { text: '14 hours 37 minutes', correct: false },
            { text: '44 hours 37 minutes', correct: false },
            { text: '24 hours 37 minutes', correct: true },
            { text: '34 hours 37 minutes', correct: false },
        ]
    },
    {
        question: 'How many hours is a day on jupiter ?',
        answers: [
            { text: '30 hours', correct: false },
            { text: '10 hours', correct: true },
            { text: '20 hours', correct: false },
            { text: '40 hours', correct: false },
        ]
    },
    {
        question: 'How many hours is a day on venus ?',
        answers: [
            { text: '1, 832 hours', correct: false },
            { text: '4, 832 hours', correct: false },
            { text: '3, 832 hours', correct: false },
            { text: '5, 832 hours', correct: true },
        ]
    },
    {
        question: 'How many asteroids are near earth ?',
        answers: [
            { text: '16, 115', correct: false },
            { text: '36, 115', correct: false },
            { text: '46, 115', correct: false },
            { text: '26, 115', correct: true },
        ]
    },
    {
        question: 'How many crators are there on earth ?',
        answers: [
            { text: '290', correct: false },
            { text: '190', correct: true },
            { text: '390', correct: false },
            { text: '490', correct: false },
        ]
    },
    {
        question: 'How many crators are there on moon ?',
        answers: [
            { text: '7, 137', correct: false },
            { text: '6, 137', correct: false },
            { text: '8, 137', correct: false },
            { text: '9, 137', correct: true },
        ]
    },
    {
        question: 'How many crators are there on mars ?',
        answers: [
            { text: '535, 000', correct: false },
            { text: '635, 000', correct: true },
            { text: '735, 000', correct: false },
            { text: '435, 000', correct: false },
        ]
    },
    {
        question: 'Which is the diameter of the biggest crater on earth ?',
        answers: [
            { text: '280 km', correct: false },
            { text: '180 km', correct: false },
            { text: '380 km', correct: true },
            { text: '480 km', correct: false },
        ]
    },
    {
        question: 'Which is the name of the biggest crator on earth ?',
        answers: [
            { text: 'Tenoumer', correct: false },
            { text: 'Vredefort crator', correct: true },
            { text: 'Chicxulub', correct: false },
            { text: 'Monturaqui', correct: false },
        ]
    },
    {
        question: 'Which is the diameter of the biggest crator on moon ?',
        answers: [
            { text: '3500 km', correct: false },
            { text: '4500 km', correct: false },
            { text: '1500 km', correct: false },
            { text: '2500 km', correct: true },
        ]
    },
    {
        question: 'Which is the name of the biggest crator on moon ?',
        answers: [
            { text: 'Albategnius', correct: false },
            { text: 'Tycho', correct: false },
            { text: 'South Pole - Atiken basin', correct: true },
            { text: 'Clavius', correct: false },
        ]
    },
    {
        question: 'Which is the diameter of the biggest crator on mars ?',
        answers: [
            { text: '1, 300 km', correct: false },
            { text: '2, 300 km', correct: true },
            { text: '4, 300 km', correct: false },
            { text: '3, 300 km', correct: false },
        ]
    },
    {
        question: 'Which is the name of the biggest crator on mars ?',
        answers: [
            { text: 'Cassini', correct: false },
            { text: 'Copernicus', correct: false },
            { text: 'Greeley', correct: false },
            { text: 'Hellas Planitia', correct: true },
        ]
    },
    {
        question: 'Which is the diameter of the Jupiters\' moon Europa ?',
        answers: [
            { text: '2, 100', correct: false },
            { text: '3, 100', correct: true },
            { text: '1, 100', correct: false },
            { text: '4, 100', correct: false },
        ]
    },
    {
        question: 'Which is the diameter of the Jupiters\' moon Ganymede ?',
        answers: [
            { text: '4, 268 km', correct: false },
            { text: '3, 268 km', correct: false },
            { text: '5, 268 km', correct: true },
            { text: '1, 268 km', correct: false },
        ]
    },
    {
        question: 'Which is the diameter of Saturns\' moon Titan ?',
        answers: [
            { text: '4, 149.5 km', correct: false },
            { text: '5, 149.5 km', correct: true },
            { text: '1, 149.5 km', correct: false },
            { text: '3, 149.5 km', correct: false },
        ]
    },
    {
        question: 'Which is the diameter of Saturns\' moon Enceladus ?',
        answers: [
            { text: '400 km', correct: false },
            { text: '300 km', correct: false },
            { text: '500 km', correct: true },
            { text: '100 km', correct: false },
        ]
    },
    {
        question: 'Which is the diameter of Jupiters\' moon Callisto ?',
        answers: [
            { text: '5, 821 km', correct: false },
            { text: '1, 821 km', correct: false },
            { text: '3, 821 km', correct: false },
            { text: '4, 821 km', correct: true },
        ]
    },
    {
        question: 'Which is the diameter of Jupiters\' moon Lo ?',
        answers: [
            { text: '1, 643.2 km', correct: false },
            { text: '3, 643.2 km', correct: true },
            { text: '2, 643.2 km', correct: false },
            { text: '4, 643.2 km', correct: false },
        ]
    },
]