import { AsyncStorage } from 'react-native';

export const DECK_STORAGE = 'Flashcards:decks';

const decks = {
  Castilian: {
    title: 'Castilian',
    questions: [
      {
        question: 'Un zumo de naranja, por favor',
        answer: 'An orange juice, please',
        correctAns: 'true',
      },
      {
        question: 'Vosotros',
        answer: 'Used to address people you’re familiar with',
        correctAns: 'true',
      },
      {
        question: 'Usted / Ustedes',
        answer:
          'Addressing someone, or multiple people on more formal occasions',
        correctAns: 'true',
      },
      {
        question: 'Le',
        answer: 'Le instead of lo/la when referring to people',
        correctAns: 'true',
      },
      {
        question: 'Coche',
        answer: 'A car',
        correctAns: 'true',
      },
      {
        question: 'Conducir',
        answer: 'Verb used when referring to driving a vehicle',
        correctAns: 'true',
      },
      {
        question: 'Aparcar',
        answer: 'Verb meaning "To park your vehicle"',
        correctAns: 'true',
      },
      {
        question: 'Autobus',
        answer: 'Bus used for transportation',
        correctAns: 'true',
      },
      {
        question: 'Manejar',
        answer: 'Managing or administering something',
        correctAns: 'true',
      },
      {
        question: 'Ordernador',
        answer: 'Computer',
        correctAns: 'true',
      },
      {
        question: 'Pisos',
        answer: 'Apartments',
        correctAns: 'true',
      },
      {
        question: 'Móvil',
        answer: 'Cellular device',
        correctAns: 'true',
      },
      {
        question: 'Bolígrafo',
        answer: 'Pen used for writing',
        correctAns: 'true',
      },
      {
        question: 'Nevera',
        answer: 'Refrigerador',
        correctAns: 'true',
      },
      {
        question: 'Gaseosa',
        answer: 'Soda',
        correctAns: 'true',
      },
      {
        question: 'Melocotón',
        answer: 'Peach',
        correctAns: 'true',
      },
      {
        question: 'Chaqueta',
        answer: 'Jacket',
        correctAns: 'true',
      },
      {
        question: 'Gafas',
        answer: 'Sunglasses',
        correctAns: 'true',
      },
      {
        question: 'Coger',
        answer: 'Verb that means to catch, grab, or take',
        correctAns: 'true',
      },
    ],
  },
  Mexican: {
    title: 'Mexican',
    questions: [
      {
        question: '¡Qué padre!',
        answer: '“Cool!” or “Awesome!”',
        correctAns: 'true',
      },
      {
        question: 'Me vale madre',
        answer: '“I don’t care” or “It doesn’t matter to me at all.”',
        correctAns: 'true',
      },
      {
        question: '¡Aguas!',
        answer: '“Be careful!” or “Look out!”',
        correctAns: 'true',
      },
      {
        question: '¿Neta?',
        answer: '“Truth?” or “Really?”',
        correctAns: 'true',
      },
      {
        question: 'Eso que ni que',
        answer: 'You’re in agreement with whatever’s being discussed',
        correctAns: 'true',
      },
      {
        question: 'Buena onda',
        answer: 'Good vibes or energy',
        correctAns: 'true',
      },
      {
        question: 'Eso que ni que',
        answer: 'you’re in agreement with whatever’s being discussed',
        correctAns: 'true',
      },
      {
        question: 'Chela',
        answer: 'Beer',
        correctAns: 'true',
      },
      {
        question: '¡Órale!',
        answer: '“Right on!” or “Let’s do it,”',
        correctAns: 'true',
      },
      {
        question: '¡No manches! / ¡No mames!',
        answer:
          '“No way!” or in less friendly situations, “Don’t mess with me!”',
        correctAns: 'true',
      },
      {
        question: 'Güey',
        answer: 'A term of endearment similar to the English “dude.”',
        correctAns: 'true',
      },
      {
        question: '¿Mande?',
        answer: 'Used to respond when someone says your name',
        correctAns: 'true',
      },
    ],
  },
  Caribbean: {
    title: 'Caribbean',
    questions: [
      {
        question: 'Enamora’o',
        answer: 'In love',
        correctAns: 'true',
      },
      {
        question: 'Cansa’o / Cansá',
        answer: 'Tired',
        correctAns: 'true',
      },
      {
        question: '¿De dónde tú ere’?',
        answer: 'Where are you from?',
        correctAns: 'true',
      },
      {
        question: 'Jeva',
        answer: 'Woman or young lady',
        correctAns: 'true',
      },
      {
        question: 'Guagua',
        answer: 'Refers to a bus, van, or SUV',
        correctAns: 'true',
      },
      {
        question: 'Rebulú',
        answer: 'Trouble or a fight between people',
        correctAns: 'true',
      },
      {
        question: 'Socio / Socia',
        answer: 'Close friend',
        correctAns: 'true',
      },
      {
        question: 'Dale',
        answer:
          'Interjection demonstrating approval, meaning “OK,” “that’s fine,” or “go ahead”',
        correctAns: 'true',
      },
      {
        question: '¡Órale!',
        answer: '“Right on!” or “Let’s do it,”',
        correctAns: 'true',
      },
      {
        question: '¡No manches! / ¡No mames!',
        answer:
          '“No way!” or in less friendly situations, “Don’t mess with me!”',
        correctAns: 'true',
      },
      {
        question: 'Güey',
        answer: 'A term of endearment similar to the English “dude.”',
        correctAns: 'true',
      },
      {
        question: '¿Mande?',
        answer: 'Used to respond when someone says your name',
        correctAns: 'true',
      },
    ],
  },
  Cuban: {
    title: 'Cuban',
    questions: [
      {
        question: 'Absorbente',
        answer: 'Drinking straw',
        correctAns: 'true',
      },
      {
        question: 'Aguajirarse',
        answer: 'Timid',
        correctAns: 'true',
      },
      {
        question: 'Ambia',
        answer: 'Friend',
        correctAns: 'true',
      },
      {
        question: 'Jugar a los bomberos',
        answer: 'To take a bath',
        correctAns: 'true',
      },
      {
        question: 'Baracutey',
        answer: 'Person who live alone',
        correctAns: 'true',
      },
      {
        question: 'Caché',
        answer: 'Stylish or elegant',
        correctAns: 'true',
      },
      {
        question: 'Candela al jarro',
        answer: 'Persevere until you reach your goal',
        correctAns: 'true',
      },
      {
        question: 'Coger un aire',
        answer:
          'Going out at night without proper clothing and being pained by the cold',
        correctAns: 'true',
      },
      {
        question: 'Dar la punzada del guajiro',
        answer: 'Get a brain freeze',
        correctAns: 'true',
      },
      {
        question: 'De carretilla',
        answer: 'By memory',
        correctAns: 'true',
      },
      {
        question: 'Echar un tacón',
        answer: 'To dance',
        correctAns: 'true',
      },
      {
        question: 'Emperifollado',
        answer: 'Polished up',
        correctAns: 'true',
      },
      {
        question: 'Fachao',
        answer: 'Hungry',
        correctAns: 'true',
      },
      {
        question: 'Vacilón',
        answer: 'Something you enjoy alot',
        correctAns: 'true',
      },
      {
        question: 'Zurdo',
        answer: 'Really bad dancer',
        correctAns: 'true',
      },
    ],
  },
};

export function importDecks() {
  return AsyncStorage.getItem(DECK_STORAGE).then((results) => {
    if (results === null) {
      AsyncStorage.setItem(DECK_STORAGE, JSON.stringify(decks));
      return decks;
    } else {
      return JSON.parse(results);
    }
  });
}

export function addCard(card, title) {
  importDecks()
    .then((decks) => {
      return {
        ...decks,
        [title]: {
          questions: decks[title].questions.concat([card]),
        },
      };
    })
    .then((newDecks) => {
      AsyncStorage.setItem(DECK_STORAGE, JSON.stringify(newDecks));
    });
}
