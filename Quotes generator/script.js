let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
  {
    quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
    person: 'Nelson Mandela',
  },
  {
    quote: 'If you set your goals ridiculously high and it\'s a failure, you will fail above everyone else\'s success.',
    person: 'James Cameron',
  },
  {
    quote: 'The only way to do great work is to love what you do.',
    person: 'Steve Jobs',
  },
  {
    quote: 'The best way to predict the future is to create it.',
    person: 'Peter Drucker', 
  },
  {
    quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
    person: 'Nelson Mandela',
  },
  {
    quote: 'If you set your goals ridiculously high and it\'s a failure, you will fail above everyone else\'s success.',
    person: 'James Cameron',
  },
  {
    quote: 'The only way to do great work is to love what you do.',
    person: 'Steve Jobs',
  },
  {
    quote: 'The best way to predict the future is to create it.',
    person: 'Peter Drucker', 
  },
];

btn.addEventListener('click', function() {
  let random = Math.floor(Math.random() * quotes.length);
  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
})