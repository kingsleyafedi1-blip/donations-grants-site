const amount = document.getElementById('amount');
const currency = document.getElementById('currency');
const currencySymbol = document.getElementById('currency-symbol');
const form = document.getElementById('donation-form');
const symbols = { USD: '$', CAD: 'CA$', GBP: '£', EUR: '€', AUD: 'A$', NZD: 'NZ$', CHF: 'CHF ', SGD: 'S$', HKD: 'HK$', JPY: '¥' };

currency.addEventListener('change', () => {
  currencySymbol.textContent = symbols[currency.value] || '';
  amount.step = currency.value === 'JPY' ? '1' : '0.01';
  amount.placeholder = currency.value === 'JPY' ? 'Enter any whole amount' : 'Enter any amount';
});

form.addEventListener('submit', (event) => {
  const value = Number(amount.value);
  if (!Number.isFinite(value) || value < 1) {
    event.preventDefault();
    amount.setCustomValidity('Please enter a donation amount of at least 1.');
    amount.reportValidity();
    return;
  }
  amount.setCustomValidity('');
});

amount.addEventListener('input', () => amount.setCustomValidity(''));
document.getElementById('year').textContent = new Date().getFullYear();
