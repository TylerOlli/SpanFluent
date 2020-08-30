import { importDecks } from '../utils/api';

export const GET_DECKS = 'GET_DECKS';

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
