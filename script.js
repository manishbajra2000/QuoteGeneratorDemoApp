const quotes = [
    // Science Quotes
    { text: "Science is magic that works.", category: "science" },
    { text: "The important thing is to never stop questioning.", category: "science" },
    { text: "Somewhere, something incredible is waiting to be known.", category: "science" },
    { text: "The good thing about science is that it’s true whether or not you believe in it.", category: "science" },
    { text: "Equipped with his five senses, man explores the universe around him.", category: "science" },
    { text: "The universe is under no obligation to make sense to you.", category: "science" },
    { text: "Science knows no country, because knowledge belongs to humanity.", category: "science" },
  
    // Inspiration Quotes
    { text: "Believe you can and you're halfway there.", category: "inspiration" },
    { text: "Your time is limited, don't waste it living someone else's life.", category: "inspiration" },
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", category: "inspiration" },
    { text: "Do what you can, with what you have, where you are.", category: "inspiration" },
    { text: "The best way to predict your future is to create it.", category: "inspiration" },
    { text: "Happiness is not something ready made. It comes from your own actions.", category: "inspiration" },
    { text: "Start where you are. Use what you have. Do what you can.", category: "inspiration" },
  
    // Fitness Quotes
    { text: "Push yourself because no one else is going to do it for you.", category: "fitness" },
    { text: "The body achieves what the mind believes.", category: "fitness" },
    { text: "No pain, no gain. Shut up and train.", category: "fitness" },
    { text: "Take care of your body. It's the only place you have to live.", category: "fitness" },
    { text: "Discipline is the bridge between goals and accomplishment.", category: "fitness" },
    { text: "Fitness is like a relationship. You can’t cheat and expect it to work.", category: "fitness" },
    { text: "The only bad workout is the one that didn’t happen.", category: "fitness" }
  ];
  

let currentIndex = 0;
let currentCategory = 'all';
let fontSize = 16;

const categorySelect = document.getElementById('category-select');
const quoteText = document.getElementById('quote-text');
const themeSwitch = document.getElementById('theme-switch');

// const getFilteredQuotes = () => {
//     if (currentCategory === 'all') {
//         return quotes;
//     }
//     else {
//         return quotes.filter(q => q.category === currentCategory);
//     }
// }
//
// which is same as using ternary operator one-code below:

const getFilteredQuotes = () => currentCategory === 'all' ? quotes : quotes.filter(q => q.category === currentCategory);

const displayQuote = () => {
    const filteredQuotes = getFilteredQuotes();
    if (filteredQuotes.length === 0) {
        quoteText.textContent = 'No quotes available for this category.';
        return;
    }
    currentIndex = (currentIndex + filteredQuotes.length) % filteredQuotes.length;
    quoteText.textContent = filteredQuotes[currentIndex].text;
}

categorySelect.addEventListener('change', (e) => {
    currentCategory = e.target.value;
    currentIndex = 0;
    displayQuote();
});

// document.getElementById('next-quote').addEventListener('click', (e) => {
//     currentIndex++;
//     displayQuote();
// });
function nextQuote() {
    currentIndex++;
    displayQuote();
}

// document.getElementById('prev-quote').addEventListener('click', (e) => {
//     currentIndex--;
//     displayQuote();
// });
function prevQuote() {
    currentIndex--;
    displayQuote();
}

// document.getElementById('random-quote').addEventListener('click', (e) => {
//     const filteredQuotes= getFilteredQuotes();
//     currentIndex = Math.floor(Math.random() * filteredQuotes.length);
//     displayQuote();
// });
function randomQuote() {
    const filteredQuotes= getFilteredQuotes();
    currentIndex = Math.floor(Math.random() * filteredQuotes.length);
    displayQuote();
}

document.getElementById('increase-font').addEventListener('click', () => {
    if (fontSize > 40) { return };
    fontSize += 2;
    quoteText.style.fontSize = fontSize + 'px';
});

document.getElementById('decrease-font').addEventListener('click', () => {
    if (fontSize < 14) { return };
    fontSize -= 2;
    quoteText.style.fontSize = fontSize + 'px';
});

themeSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode', themeSwitch.checked);
});


//initial display
displayQuote();





  