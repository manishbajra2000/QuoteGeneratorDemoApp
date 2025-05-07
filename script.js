const quotes = [
    {text: 'This is a inspirational quote', category: 'inspiration'},
    {text: 'This is a fitness quote', category: 'fitness'},
    {text: 'This is a motivational quote', category: 'inspiration'},
    {text: 'This is a workout quote', category: 'fitness'},
    {text: 'This is a scientific quote', category: 'science'},
    {text: 'This is a sciencey quote', category: 'science'}
];

let currentIndex = 0;
let currentCategory = 'all';
let fontSize = 16;

const categorySelect = document.getElementById('category-select');
const quoteText = document.getElementById('quote-text');

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

document.getElementById('next-quote').addEventListener('click', (e) => {
    currentIndex++;
    displayQuote();
});

document.getElementById('prev-quote').addEventListener('click', (e) => {
    currentIndex--;
    displayQuote();
});

document.getElementById('increase-font').addEventListener('click', () => {
    if (fontSize > 32) { return };
    fontSize += 2;
    quoteText.style.fontSize = fontSize + 'px';
});

document.getElementById('decrease-font').addEventListener('click', () => {
    if (fontSize < 14) { return };
    fontSize -= 2;
    quoteText.style.fontSize = fontSize + 'px';
});

displayQuote();





  