// Variables
const button = document.querySelector('#new-quote');
let quote = document.querySelector('.textarea__blockquote');
let person = document.querySelector('.main__person');

const quotes = [
    {quote: `"True terror is to wake up one morning and discover that your high school class is running the country"`,
     person: 'Kurt Vonnegut'},
    {quote: `"Always forgive your enemies; nothing annoys them so much."`,
     person: 'Oscar Wilde'},
    {quote: `"Sometimes the road less traveled is less traveled for a reason."`,
     person: 'Jerry Seinfeld'},
    {quote: `"Never go to bed mad. Stay up and fight."`,
     person: 'Phyllis Diller'},
    {quote: `"If you can’t be kind, at least be vague."`,
     person: 'Judith Martin'},
    {quote: `"If you want to know what God thinks of money, just look at the people he gave it to."`,
     person: 'Dorothy Parker'},
    {quote: `"Doing nothing is very hard to do. You never know when you're finished."`,
     person: 'Leslie Nielsen'},
    {quote: `"A perfect parent is a person with excellent child-rearing theories and no actual children."`,
     person: 'Dave Barry'},
    {quote: `"Behind every great man is a woman rolling her eyes."`,
     person: 'Jim Carrey'},
    {quote: `"The simplest toy, one which even the youngest child can operate, is called a grandparent."`,
     person: 'Sam Levenson'}
]

button.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quotes.length);
    quote.textContent = quotes[random].quote;
    person.textContent = quotes[random].person;
})