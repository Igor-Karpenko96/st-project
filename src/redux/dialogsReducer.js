const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_POST_MESSAGE = 'UPDATE-NEW-POST-MESSAGE';

let initialState = {
  messagesData: [
    { id: 1, message: 'hi' },
    { id: 2, message: 'how are you' },
    { id: 3, message: 'yo' },
    { id: 4, message: 'yo' },
    { id: 5, message: 'yo' },
    { id: 6, message: 'yo' },
  ],
  dialogsData: [
    { id: 1, name: 'Tom', src: 'https://www.seoclerk.com/pics/319222-1IvI0s1421931178.png' },
    { id: 2, name: 'Justin', src: 'https://www.seoclerk.com/pics/319222-1IvI0s1421931178.png' },
    { id: 3, name: 'Anton', src: 'https://www.seoclerk.com/pics/319222-1IvI0s1421931178.png' },
    { id: 4, name: 'Miha', src: 'https://www.seoclerk.com/pics/319222-1IvI0s1421931178.png' },
    { id: 5, name: 'Rocky', src: 'https://www.seoclerk.com/pics/319222-1IvI0s1421931178.png' },
    { id: 6, name: 'Harry', src: 'https://www.seoclerk.com/pics/319222-1IvI0s1421931178.png' },
  ],
  newMessageText: '',
};

const dialogsReducer = (state = initialState, action) => {
  // let stateCopy;
  switch (action.type) {
    case ADD_MESSAGE: {
      let text = state.newMessageText;
      return {
        ...state,
        messagesData: [...state.messagesData, { id: 5, message: text }],
        newMessageText: '',
      };
    }
    case UPDATE_NEW_POST_MESSAGE: {
      return {
        ...state,
        newMessageText: action.newText,
      };
    }
    default:
      return state;
  }
};

export const addMessageActionCreator = () => {
  return {
    type: ADD_MESSAGE,
  };
};

export const updateNewPostMessageActionCreator = (text) => ({
  type: UPDATE_NEW_POST_MESSAGE,
  newText: text,
});

export default dialogsReducer;
