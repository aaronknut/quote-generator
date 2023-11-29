const yogiQuotes = [
    'When you come to a fork in the road, take it.',
    'You can observe a lot by just watching.',
    'It ain\'t over till it\'s over.',
    'It\'s like déjà vu all over again.',
    'No one goes there nowadays, it\'s too crowded.',
    'Baseball is 90% mental and the other half is physical.',
    'A nickel ain\'t worth a dime anymore.',
    'Always go to other people\'s funerals, otherwise they won\'t come to yours.',
    'We made too many wrong mistakes.',
    'Congratulations. I knew the record would stand until it was broken.',
    'You better cut the pizza in four pieces because I\'m not hungry enough to eat six.',
    'You wouldn\'t have won if we\'d beaten you.',
    'I usually take a two-hour nap from one to four.',
    'Never answer an anonymous letter.',
    'Slump? I ain\'t in no slump… I just ain\'t hitting.',
    'How can you think and hit at the same time?',
    'The future ain\'t what it used to be.',
    'I tell the kids, somebody\'s gotta win, somebody\'s gotta lose. Just don\'t fight about it. Just try to get better.',
    'It gets late early out here.',
    'If the people don\'t want to come out to the ballpark, nobody\'s going to stop them.',
    'We have deep depth.',
    'Pair up in threes.',
    'Why buy good luggage, you only use it when you travel.',
    'You\'ve got to be very careful if you don\'t know where you are going, because you might not get there.',
    'All pitchers are liars or crybabies.',
    'Even Napoleon had his Watergate.',
    'Bill Dickey is learning me his experience.',
    'He hits from both sides of the plate. He\'s amphibious.',
    'It was impossible to get a conversation going, everybody was talking too much.',
    'I never blame myself when I\'m not hitting. I just blame the bat and if it keeps up, I change bats. After all, if I know it isn\'t my fault that I\'m not hitting, how can I get mad at myself?',
    'I never said most of the things I said.',
    'So I\'m ugly. I never saw anyone hit with his face.',
    'A lot of guys go, \'Hey, Yog, say a Yogi-ism.\' I tell \'em, \'I don\'t know any.\' They want me to make one up. I don\'t make \'em up. I don\'t even know when I say it. They\'re the truth. And it is the truth. I don\'t know.',
    'If the world were perfect, it wouldn\'t be.'
]

const buttonClick = document.getElementById('new-quote-button')
const quoteParagraph = document.getElementById('quote-p')

/* function newQuote (arr) {
    return arr[Math.floor((Math.random() * arr.length))];
} */

function newQuote() {
    const randomIndex = Math.floor(Math.random() * yogiQuotes.length);
    const quoteDisplay = document.getElementById("quote-display");
    quoteDisplay.textContent = `"${yogiQuotes[randomIndex]}"`;
  }

/* buttonClick.addEventListener('click', function() {
    quoteParagraph.textContent = newQuote(yogiQuotes);
}); */