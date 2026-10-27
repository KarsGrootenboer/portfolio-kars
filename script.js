let count = 0;
const button = document.getElementById('knop');
const counterDisplay = document.getElementById('counter');

button.addEventListener('click', () => {
    count++;
    counterDisplay.textContent = `Totaal clicks: ${count}`;
});