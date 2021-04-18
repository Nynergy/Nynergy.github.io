const quotes = [
    'The smell of rain on the wind',
    'Two moons for the price of one',
    'Hymns and other ritual fragments',
    'In a land of brambles and black towers',
    'Vibrant soul consumes Ancient Flesh',
];

let num = Math.floor(Math.random() * (quotes.length));
let quote = quotes[num];
let display = document.getElementById('ps-header-quote');
display.innerHTML = quote;
