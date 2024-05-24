var quoteLable = document.getElementById("quoteLable");
var author = document.getElementById("author");

const quotesArray = [
    {'author': 'Marilyn Monroe', 
    'quote': "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best."
    },
    {'author': 'Frank Zappa', 
    'quote': 'So many books, so little time.'
    },
    {'author': 'Marcus Tullius Cicero', 
    'quote': 'A room without books is like a body without a soul.'
    },
    {'author': 'Bernard M. Baruch', 
    'quote': "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind."
    },
    {'author': 'Dr. Seuss', 
    'quote': "You know you're in love when you can't fall asleep because reality is finally better than your dreams."
    },
    {'author': 'Jim Rohn', 
    'quote': 'Beware of what you become in pursuit of what you want.'
    },
    {'author': 'Epictetus', 
    'quote': "It's not what happens to you, but how you react to it that matters."
    },
    {'author': 'Frank Sinatra', 
    'quote': 'The best revenge is massive success.'
    },
    {'author': 'Wayne Gretzy', 
    'quote': 'You miss 100% of the shots you don\'t take.'
    },
    {'author': 'Nelson Mandela', 
    'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
    {'author': 'Elbert Hubbard', 
    'quote': 'Do not take life too seriously. You will not get out alive.'
    },
];

function generateQuote(){
    const random = Number.parseInt(Math.random()*quotesArray.length + 1);
    quoteLable.textContent = `"${quotesArray[random].quote}"`;
    author.textContent = `--${quotesArray[random].author}`;
}