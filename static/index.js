async function initGame() {

    const res = await fetch("/get-text");
    const data = await res.json();

    currentText = data.text;

    textToTypeElement.innerHTML = '';

    currentText.split('').forEach(char => {
        const charSpan = document.createElement('span');
        charSpan.innerText = char;
        textToTypeElement.appendChild(charSpan);
    });

    typingInputElement.value = '';
    typingInputElement.disabled = false;
    typingInputElement.focus();

    resetStats();
    updateStats();
}

// DOM Elements
const textToTypeElement = document.getElementById('textToType');
const typingInputElement = document.getElementById('typingInput');
const wpmElement = document.getElementById('wpm');
const accuracyElement = document.getElementById('accuracy');
const timerElement = document.getElementById('timer');
const restartBtn = document.getElementById('restartBtn');
const settingsBtn = document.getElementById('settingsBtn');
const newTextBtn = document.getElementById('newTextBtn');
const restartTestBtn = document.getElementById('restartTestBtn');

// Game state variables
let currentText = '';
let startTime = null;
let timerInterval = null;
let timeLeft = 60;
let totalTyped = 0;
let correctTyped = 0;



// Reset statistics
function resetStats() {
    startTime = null;
    timeLeft = 60;
    totalTyped = 0;
    correctTyped = 0;
    
    // Clear any existing timer
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    
    // Update timer display
    timerElement.textContent = `${timeLeft}s`;
}

// Update statistics display
function updateStats() {
    wpmElement.textContent = calculateWPM();
    accuracyElement.textContent = `${calculateAccuracy()}%`;
    timerElement.textContent = `${timeLeft}s`;
}

// Calculate Words Per Minute
function calculateWPM() {
    if (!startTime) return 0;
    
    const timeElapsed = (new Date() - startTime) / 60000; // in minutes
    const wordsTyped = totalTyped / 5; // standard word is 5 characters
    return Math.round(wordsTyped / timeElapsed);
}

// Calculate accuracy percentage
function calculateAccuracy() {
    if (totalTyped === 0) return 100;
    return Math.round((correctTyped / totalTyped) * 100);
}

// Start the timer
function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        updateStats();
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            typingInputElement.disabled = true;
        }
    }, 1000);
}

// Process typing input
function processInput() {
    const typedText = typingInputElement.value;
    
    // Start timer on first keystroke
    if (!startTime) {
        startTime = new Date();
        startTimer();
    }
    
    // Update character highlighting
    const textArray = currentText.split('');
    const typedArray = typedText.split('');
    
    // Reset all classes
    const charSpans = textToTypeElement.querySelectorAll('span');
    charSpans.forEach(span => {
        span.className = '';
    });
    
    // Update character states
    totalTyped = typedArray.length;
    correctTyped = 0;
    
    typedArray.forEach((char, index) => {
        const span = charSpans[index];
        if (!span) return;
        
        if (char === textArray[index]) {
            span.classList.add('correct-char');
            correctTyped++;
        } else {
            span.classList.add('incorrect-char');
        }
    });
    
    // Highlight current character
    if (typedArray.length < charSpans.length) {
        charSpans[typedArray.length].classList.add('current-char');
    }
    
    // Update stats
    updateStats();
    
    // Check if test is completed
    if (typedText === currentText || timeLeft <= 0) {
        typingInputElement.disabled = true;
        clearInterval(timerInterval);
    }
}

// Event Listeners
typingInputElement.addEventListener('input', processInput);

// Restart button (top right)
restartBtn.addEventListener('click', () => {
    initGame();
});

// Settings button (top right)
settingsBtn.addEventListener('click', () => {
    alert('Settings feature would be implemented here.');
});

// New Text button
newTextBtn.addEventListener('click', () => {
    initGame();
});

// Restart Test button
restartTestBtn.addEventListener('click', () => {
    initGame();
});

// Initialize the game when page loads
window.addEventListener('DOMContentLoaded', () => {
    initGame();
});