
// JavaScript for managing bets and stats

// DOM Elements
const betForm = document.querySelector('#bet-form');
const betsTableBody = document.querySelector('#bets-table tbody');
const resetButton = document.querySelector('#reset-data');

// Store data in memory
let bets = JSON.parse(localStorage.getItem('bets')) || [];

// Save data to localStorage
function saveBets() {
    localStorage.setItem('bets', JSON.stringify(bets));
}

// Add new bet
if (betForm) {
    betForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const sport = document.querySelector('#sport').value;
        const match = document.querySelector('#match').value;
        const amount = parseFloat(document.querySelector('#amount').value);
        const odds = parseFloat(document.querySelector('#odds').value);
        const result = document.querySelector('#result').value;
        
        bets.push({ sport, match, amount, odds, result });
        saveBets();
        renderBets();
        betForm.reset();
    });
}

// Render bets in table
function renderBets() {
    if (!betsTableBody) return;
    betsTableBody.innerHTML = '';
    bets.forEach((bet, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${bet.sport}</td>
            <td>${bet.match}</td>
            <td>${bet.amount}</td>
            <td>${bet.odds}</td>
            <td>${bet.result}</td>
        `;
        betsTableBody.appendChild(row);
    });
}

// Reset all data
if (resetButton) {
    resetButton.addEventListener('click', () => {
        bets = [];
        saveBets();
        renderBets();
        alert('All data has been reset.');
    });
}

// Initial rendering
renderBets();
