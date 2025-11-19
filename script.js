function changeText(Which) {
    const targetText = document.querySelector('.target')
    targetText.classList.add('fade-out')

    setTimeout(() => {
        switch(Which) {
            case 0:
                targetText.textContent = "Security: Staying safe online by using strong passwords and avoiding suspicious links."
                break
            case 1:
                targetText.textContent = "Respect: Treating others kindly and communicating with empathy across digital platforms."
                break
            case 2:
                targetText.textContent = "Critical Thinking: Evaluating information carefully before sharing or believing it."
                break
            case 3:
                targetText.textContent = "Privacy: Protecting personal information and understanding what data is being shared."
                break
            default:
                targetText.textContent = "A digital citizen is someone who uses technology responsibly, communicates respectfully, protects their privacy, and thinks critically online."
        }

        targetText.classList.remove('fade-out')
    }, 300)
}

// Ai in daily life
const titles = [
    "Social Media Feeds",
    "Voice Assistants",
    "Shopping Recommendations",
    "Navigation Apps"
]

const texts = [
    `
    <p><span>AI decides</span> what <span>posts, videos, and ads</span> appear on your feed. </p>
    📝 <strong>Key Points:</strong>
    <ul>
        <li>Personalized content based on your activity</li>
        <li>Learn your interests over time</li>
        <li>Can influence what you see first</li>
    </ul>
    💡 <strong>Examples:</strong> Facebook feed, Instagram reels, TikTok recommendations
    `,
    `
    <p><span>AI helps devices</span> like <span>Siri</span> and <span>Google Assistant</span> understand your <span>voice</span> and respond. </p>
    📝 <strong>Key Points:</strong>
    <ul>
        <li>Voice recognition and natural language understanding</li>
        <li>Can set reminders, send messages, play music</li>
        <li>Continuously learns your preferences</li>
    </ul>
    💡 <strong>Examples:</strong> Asking "Hey Siri, what's the weather?", Google Home answering questions
    `,
    `
    <p><span>AI suggests</span> <span>products</span> you might like by analyzing what you’ve <span>searched</span> and <span>bought</span>. </p>
    📝 <strong>Key Points:</strong>
    <ul>
        <li>Personalized recommendations</li>
        <li>Based on browsing history, purchases, ratings</li>
        <li>Helps discover new products efficiently</li>
    </ul>
    💡 <strong>Examples:</strong> Amazon "You might also like", Netflix suggestions
    `,
    `
    <p><span>AI analyzes</span> <span>traffic</span> and helps you find the <span>fastest</span> and <span>safest route</span> in real time. </p>
    📝 <strong>Key Points:</strong>
    <ul>
        <li>Predicts traffic congestion</li>
        <li>Suggests alternative routes</li>
        <li>Integrates live updates and maps</li>
    </ul>
    💡 <strong>Examples:</strong> Google Maps, Waze, Apple Maps
    `
]

for (let i = 0; i < titles.length; i++) {
    const card = document.createElement('div')
    const aiCards = document.querySelector('.aiCards')
    card.className = 'aiCard'
    card.innerHTML = `
        <h3>${titles[i]}</h3>
        <div class="aiCardText">${texts[i]}</div>
    `
    aiCards.appendChild(card)
}

// Quiz
var quizQuestions = [
    "Which actions show responsible digital citizenship?",
    "How can you protect your privacy online?",
    "Which behaviors are safe when interacting with AI tools?",
    "What should you do before sharing information online?"
]

var quizAnswers1 = ["Respect others online", "Share private information publicly", "Use strong passwords", "Cyberbully someone"]
var quizAnswers2 = ["Use two-factor authentication", "Reuse the same password everywhere", "Think before posting", "Ignore privacy settings"]
var quizAnswers3 = ["Double-check AI outputs", "Assume AI is always right", "Avoid sharing sensitive data with AI", "Use AI ethically"]
var quizAnswers4 = ["Verify the source", "Share immediately without checking", "Check date & credibility", "Rely on rumors or guesses"]

const startQuiz = document.getElementById("startQuizBtn")
const nextQuiz = document.getElementById("nextQuiz")
const fullModel = document.getElementById("quizModel")
const model = document.querySelector(".modelContact")
const questionSection = document.getElementById("questionSection")
const resultSection = document.getElementById("resultSection")
const finalScoreText = document.getElementById("finalScoreText")
const finalMessage = document.getElementById("finalMessage")

const quizTextH1 = document.querySelector(".quizText")
const checkboxLabels = [
    document.querySelector(".answer1"),
    document.querySelector(".answer2"),
    document.querySelector(".answer3"),
    document.querySelector(".answer4")
]

const checks = [document.getElementById("first"), document.getElementById("second"), document.getElementById("third"), document.getElementById("forth")]

const message = {
    4: "Perfect! You're a top-tier digital citizen. Your online instincts are elite.",
    3: "Great job! You understand digital safety well, just refine a bit more.",
    2: "Not bad, but you need some improvement to stay safe and responsible online.",
    1: "You know a little, but you should learn more to protect yourself online.",
    0: "Looks like you're new to digital safety. No worries — every expert starts somewhere!"
}

var QuizIndex = 0
var Score = 0

function toggle(Which) { 
    switch(Which) {
        case "open": 
            fullModel.classList.remove("close")
            fullModel.classList.add("open") 

            model.style.animation = 'popUp-open 0.35s ease forwards';

            questionSection.style.display = "block"
            resultSection.style.display = "none"

            resetQuiz()
            break
        case "close":
            model.style.animation = 'popUp-close 0.35s ease forwards';
            setTimeout(() => {
                fullModel.classList.remove("open") 
                fullModel.classList.add("close")
            }, 350);
            break
        case "tips":
            alert("First you shoud take small quiz and then you can see the tips.")
            toggle("open")
            break
    }
}

function resetQuiz() {
    QuizIndex = 0
    Score = 0

    nextQuiz.textContent = "Next"

    cancelSelection()
    next()
}

function checkAnswers() {
    if (checkTheAnswar(QuizIndex + 1)) {
        Score++
    }

    if (QuizIndex === quizQuestions.length - 1) {
        showResult()
        return
    }

    QuizIndex++

    if (QuizIndex === quizQuestions.length - 1) {
        nextQuiz.textContent = "Finish"
    }

    next()
}

function showResult() {
    questionSection.style.display = "none"
    resultSection.style.display = "block"
    finalScoreText.textContent = `Your Score: ${Score} / ${quizQuestions.length}`
    finalMessage.textContent = message[Score] || message[0]
}

function next() {
    cancelSelection()
    
    quizTextH1.textContent = quizQuestions[QuizIndex]
    checkboxLabels[0].textContent = quizAnswers1[QuizIndex]
    checkboxLabels[1].textContent = quizAnswers2[QuizIndex]
    checkboxLabels[2].textContent = quizAnswers3[QuizIndex]
    checkboxLabels[3].textContent = quizAnswers4[QuizIndex]
}

function checkTheAnswar(Which) {
    switch (Which) {
        case 1:
            // [0, 2]
            return checks[0].checked && checks[2].checked &&
                   !checks[1].checked && !checks[3].checked

        case 2:
            // [0, 2]
            return checks[0].checked && checks[2].checked &&
                   !checks[1].checked && !checks[3].checked

        case 3:
            // [0, 2, 3]
            return checks[0].checked && checks[2].checked && checks[3].checked &&
                   !checks[1].checked

        case 4:
            // [0, 2]
            return checks[0].checked && checks[2].checked &&
                   !checks[1].checked && !checks[3].checked

        default:
            return false
    }
}

function cancelSelection() {
    for (let i = 0; i < checks.length; i++) {
        checks[i].checked = false
    }
}

function closeTips() {
    toggle("close")
    resetQuiz()
}

function playVideo() {
    window.open("https://youtu.be/X3D0EncME5s", "_blank")
}