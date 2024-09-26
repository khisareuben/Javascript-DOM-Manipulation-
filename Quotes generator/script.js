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
    quote: 'You miss 100% of the shots you don\’t take.',
    person: 'Wayne Gretzky',
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
  {
    quote: 'The only thing we have to fear is fear itself.',
    person: 'Franklin D. Roosevelt',
  },
  {
    quote: 'In the end, we will remember not the words of our enemies, but the silence of our friends.',
    person: 'Martin Luther King Jr.',
  },
  {
    quote: 'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.',
    person: 'Ralph Waldo Emerson',
  },
  {
    quote: 'The journey of a thousand miles begins with one step.',
    person: 'Lao Tzu',
  },
  {
    quote: 'That which does not kill us makes us stronger.',
    person: 'Friedrich Nietzsche',
  },
  {
    quote: 'Life is what happens when you\'re busy making other plans.',
    person: 'John Lennon',
  },

];

let currentIndex = 0;

btn.addEventListener('click', function() {
  // Set the quote and person text based on the current index
  quote.innerText = quotes[currentIndex].quote;
  person.innerText = quotes[currentIndex].person;

  // Increment the index, and reset to 0 if it exceeds the array length
  currentIndex = (currentIndex + 1) % quotes.length;
});

// btn.addEventListener('click', function() {
//   // Generate a random index between 0 and quotes.length - 1
//   let random = Math.floor(Math.random() * quotes.length);

//   // Set the quote and person text based on the random index
//   quote.innerText = quotes[random].quote;
//   person.innerText = quotes[random].person;
// });
