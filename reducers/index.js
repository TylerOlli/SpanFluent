import { GET_DECKS, NEW_CARD } from '../actions';

function decks(state = {}, action) {
  switch (action.type) {
    case GET_DECKS:
      return {
        ...state,
        ...action.decks,
      };
    case NEW_CARD:
      const { card, title } = action;
      return {
        ...state,
        decks: {
          ...state.decks,
          [title]: {
            title: title,
            questions: state.decks[title].questions.concat([card]),
          },
        },
      };
    default:
      return state;
  }
}

export default decks;
