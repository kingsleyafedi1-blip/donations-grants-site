const amount = document.getElementById('amount');
const currency = document.getElementById('currency');
const currencySymbol = document.getElementById('currency-symbol');
const form = document.getElementById('donation-form');
const presetButtons = document.querySelectorAll('.preset-amount');
const symbols = { USD: '$', CAD: 'CA$', GBP: '£', EUR: '€', AUD: 'A$', NZD: 'NZ$', CHF: 'CHF ', SGD: 'S$', HKD: 'HK$', JPY: '¥' };

const slideshowSlides = document.querySelectorAll('.hero-slideshow .slide');

function clearSelectedPreset() {
  presetButtons.forEach((button) => button.setAttribute('aria-pressed', 'false'));
}

if (slideshowSlides.length > 1) {
  let activeIndex = 0;
  setInterval(() => {
    slideshowSlides[activeIndex].classList.remove('active');
    activeIndex = (activeIndex + 1) % slideshowSlides.length;
    slideshowSlides[activeIndex].classList.add('active');
  }, 5000);
}

presetButtons.forEach((button) => {
  button.addEventListener('click', () => {
    amount.value = button.dataset.amount;
    amount.setCustomValidity('');
    presetButtons.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
  });
});

currency.addEventListener('change', () => {
  currencySymbol.textContent = symbols[currency.value] || '';
  amount.step = currency.value === 'JPY' ? '1' : '0.01';
  amount.placeholder = currency.value === 'JPY' ? 'Enter any whole amount' : 'Enter any amount';
  clearSelectedPreset();
});

form.addEventListener('submit', (event) => {
  const value = Number(amount.value);
  if (!Number.isFinite(value) || value < 1 || (currency.value === 'JPY' && !Number.isInteger(value))) {
    event.preventDefault();
    amount.setCustomValidity(currency.value === 'JPY' && value >= 1 ? 'Enter a whole-number amount for JPY.' : 'Please enter a donation amount of at least 1.');
    amount.reportValidity();
    return;
  }
  amount.setCustomValidity('');
});

amount.addEventListener('input', () => {
  amount.setCustomValidity('');
  clearSelectedPreset();
});
document.getElementById('year').textContent = new Date().getFullYear();
