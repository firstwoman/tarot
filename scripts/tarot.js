

let deck = ['The Fool', 'The Magician', 'The High Priestess', 'The Empress', 'The Emperor', 'The Hierophant', 'The Lovers', 'The Chariot', 'Strength', 'The Hermit', 'Wheel of Fortune', 'Justice', 'The Hanged Man', 'Death', 'Temperance','The Devil', 'The Tower', 'The Star', 'The Moon', 'The Sun', 'Judgement', 'The World', 'Ace of Cups', 'Two of Cups', 'Three of Cups', 'Four of Cups', 'Five of Cups', 'Six of Cups', 'Seven of Cups', 'Eight of Cups', 'Nine of Cups', 'Ten of Cups', 'Page of Cups', 'Knight of Cups', 'Queen of Cups', 'King of Cups', 'Ace of Swords', 'Two of Swords', 'Three of Swords', 'Four of Swords', 'Five of Swords', 'Six of Swords', 'Seven of Swords', 'Eight of Swords', 'Nine of Swords', 'Ten of Swords', 'Page of Swords', 'Knight of Swords', 'Queen of Swords', 'King of Swords', 'Ace of Wands', 'Two of Wands', 'Three of Wands', 'Four of Wands', 'Five of Wands', 'Six of Wands', 'Seven of Wands', 'Eight of Wands', 'Nine of Wands', 'Ten of Wands', 'Page of Wands', 'Knight of Wands', 'Queen of Wands', 'King of Wands', 'Ace of Pentacles', 'Two of Pentacles', 'Three of Pentacles', 'Four of Pentacles', 'Five of Pentacles', 'Six of Pentacles', 'Seven of Pentacles', 'Eight of Pentacles', 'Nine of Pentacles', 'Ten of Pentacles', 'Page of Pentacles', 'Knight of Pentacles', 'Queen of Pentacles', 'King of Pentacles'];

let majorArcana = ['The Fool', 'The Magician', 'The High Priestess', 'The Empress', 'The Emperor', 'The Hierophant', 'The Lovers', 'The Chariot', 'Strength', 'The Hermit', 'Wheel of Fortune', 'Justice', 'The Hanged Man', 'Death', 'Temperance','The Devil', 'The Tower', 'The Star', 'The Moon', 'The Sun', 'Judgement', 'The World'];



function shuffle() {

  // Disable Shuffle button
  document.querySelector('.shuffle').disabled = true;

  let shuffled = deck
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
  console.log(shuffled);

  // Find the matching card objects in tarotData for each selected card
  let card1Data = tarotData.find(card => card.name === shuffled[0]);
  let card2Data = tarotData.find(card => card.name === shuffled[1]);
  let card3Data = tarotData.find(card => card.name === shuffled[2]);


  // Update the card elements with the card names and additional information
  let card1 = document.querySelector('#card1');
    card1.querySelector('.card__item').classList.add(`style__${getCardClass(shuffled[0])}-bg`);
    card1.querySelector('.card__item-bottom').classList.add(`style__${getCardClass(shuffled[0])}-pattern`);
    card1.querySelector('h3').innerHTML = `${styleTitle(shuffled[0])}`;
    card1.querySelector('.card__item-tagline').textContent = 'Where you are now';
    card1.querySelector('.card__item-body').textContent = `${card1Data.keywords}`;
    card1.querySelector('h4').innerHTML = `${styleTitle(shuffled[0])}`;

  let card2 = document.querySelector('#card2');
    card2.querySelector('.card__item').classList.add(`style__${getCardClass(shuffled[1])}-bg`);
    card2.querySelector('.card__item-bottom').classList.add(`style__${getCardClass(shuffled[1])}-pattern`);
    card2.querySelector('h3').innerHTML = `${styleTitle(shuffled[1])}`;
    card2.querySelector('.card__item-tagline').textContent = 'Where you want to go';
    card2.querySelector('.card__item-body').textContent = `${card2Data.keywords}`;
    card2.querySelector('h4').innerHTML = `${styleTitle(shuffled[1])}`;

  let card3 = document.querySelector('#card3');
    card3.querySelector('.card__item').classList.add(`style__${getCardClass(shuffled[2])}-bg`);
    card3.querySelector('.card__item-bottom').classList.add(`style__${getCardClass(shuffled[2])}-pattern`);
    card3.querySelector('h3').innerHTML = `${styleTitle(shuffled[2])}`;
    card3.querySelector('.card__item-tagline').textContent = 'How to get there';
    card3.querySelector('.card__item-body').textContent = `${card3Data.interpretation}`;
    card3.querySelector('h4').innerHTML = `${styleTitle(shuffled[2])}`;


  // Scroll to the next section (#step4)
  setTimeout(() => {
    const step4Section = document.querySelector('#step4');
    step4Section.scrollIntoView({ behavior: 'smooth'});
  }, 350);

  // Remove existing event listeners
  document.querySelectorAll('.card__item-container').forEach(card => {
  card.removeEventListener('click', toggleCard);
  });

// Add event listener to show reverse side of cards
  document.querySelectorAll('.card__item-container').forEach(card => {
  card.addEventListener('click', toggleCard);
});

}


function clearSpread() {

  // Scroll back to Shuffle section (#step3)
  setTimeout(() => {
    const shuffleSection = document.querySelector('#step3');
    shuffleSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 350);

  const cards = document.querySelectorAll('.card__item-container');
  cards.forEach((card) => {
    const frontItem = card.querySelector('.card__item');
    const bottomItem = card.querySelector('.card__item-bottom');
    const titleElement = card.querySelector('h3');
    const taglineElement = card.querySelector('.card__item-tagline');
    const descriptionElement = card.querySelector('.card__item-body');
    const titleRxElement = card.querySelector('h4');
    const frontSide = card.querySelector('.card__item-main');
    const reverseSide = card.querySelector('.card__item-main-rx');

    // Remove added classes
    frontItem.classList.remove('style__cups-bg', 'style__swords-bg', 'style__pentacles-bg', 'style__wands-bg', 'style__major-bg');
    bottomItem.classList.remove('style__cups-pattern', 'style__swords-pattern', 'style__pentacles-pattern', 'style__wands-pattern', 'style__major-pattern');

    // Clear content
    titleElement.textContent = '';
    titleRxElement.textContent = '';
    taglineElement.textContent = '';
    descriptionElement.textContent = '';

    // Show the front side and hide the reverse side
    frontSide.classList.remove('hidden');
    reverseSide.classList.add('hidden');
  });


    // Enable Shuffle button
    document.querySelector('.shuffle').disabled = false;

}



function getCardClass(cardName) {
  if (cardName.includes('Cups')) {
    return 'cups';
  } else if (cardName.includes('Swords')) {
    return 'swords';
  } else if (cardName.includes('Pentacles')) {
    return 'pentacles';
  } else if (cardName.includes('Wands')) {
    return 'wands';
  } else {
    return 'major';
  }
}


function styleTitle(cardName) {
  if (cardName.includes('The')) {
    return cardName.replace(/\s/, '<br>');
  } else if (cardName.includes('of')) {
    return cardName.replace(/\s/, '<br>').replace(/of/, '<span class="card__item-title-span">of</span>');
  }
  return cardName;
}


function toggleCard() {
  this.querySelector('.card__item-main').classList.toggle('hidden');
  this.querySelector('.card__item-main-rx').classList.toggle('hidden');
}


const footerLinks = document.querySelectorAll('footer a');

footerLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    window.open(link.href, '_blank');
  });
});











// const minorArcanaCups = ['Ace of Cups', 'Two of Cups', 'Three of Cups', 'Four of Cups', 'Five of Cups', 'Six of Cups', 'Seven of Cups', 'Eight of Cups', 'Nine of Cups', 'Ten of Cups', 'Page of Cups', 'Knight of Cups', 'Queen of Cups', 'King of Cups'];

// const minorArcanaSwords = ['Ace of Swords', 'Two of Swords', 'Three of Swords', 'Four of Swords', 'Five of Swords', 'Six of Swords', 'Seven of Swords', 'Eight of Swords', 'Nine of Swords', 'Ten of Swords', 'Page of Swords', 'Knight of Swords', 'Queen of Swords', 'King of Swords'];

// const minorArcanaPentacles = ['Ace of Pentacles', 'Two of Pentacles', 'Three of Pentacles', 'Four of Pentacles', 'Five of Pentacles', 'Six of Pentacles', 'Seven of Pentacles', 'Eight of Pentacles', 'Nine of Pentacles', 'Ten of Pentacles', 'Page of Pentacles', 'Knight of Pentacles', 'Queen of Pentacles', 'King of Pentacles'];

// const minorArcanaWands = ['Ace of Wands', 'Two of Wands', 'Three of Wands', 'Four of Wands', 'Five of Wands', 'Six of Wands', 'Seven of Wands', 'Eight of Wands', 'Nine of Wands', 'Ten of Wands', 'Page of Wands', 'Knight of Wands', 'Queen of Wands', 'King of Wands'];



// function createSuit() {
//   const suits = ['Cups', 'Swords', 'Wands', 'Pentacles'];
//   const numbers = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Page', 'Knight', 'Queen', 'King'];

//   const minors = [];

//   for (let i = 0; i < suits.length; i++) {
//     for (let j = 0; j < numbers.length; j++) {
//       minors.push(`'${numbers[j]} of ${suits[i]}'`);
//     }
//   }

//   let writeHere = document.querySelector('.write');
//   writeHere.innerHTML = minors.join(', ');
// };

// createSuit();


// function createInterpretations() {
//   const interpretations = deck.map(card => {
//     return {
//       name: card,
//       interpretation: 'EDIT HERE',
//       keywords: 'ADD KEYWORDS',
//       message: 'COPY MESSAGE'
//     };
//   });

//   let writeHere = document.querySelector('.write');
//   writeHere.innerHTML = interpretations
//     .map(card => `<p>{name: '${card.name}',<br>interpretation: '${card.interpretation}',<br>keywords: '${card.keywords}',<br>message: '${card.message}'},</p>`)
//     .join('');
// }

// createInterpretations();

