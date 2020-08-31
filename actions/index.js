import { importDecks } from '../utils/api';

export const GET_DECKS = 'GET_DECKS';
export const NEW_CARD = 'NEW_CARD';

export function getDecks(decks) {
  return {
    type: GET_DECKS,
    decks,
  };
}

export function handleInitialData() {
  return (dispatch) => {
    return importDecks().then((decks) => {
      dispatch(getDecks({ decks }));
    });
  };
}

export function newCard(card, title) {
  return {
    type: NEW_CARD,
    card,
    title,
  };
}
