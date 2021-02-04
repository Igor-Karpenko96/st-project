const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_POST_MESSAGE = 'UPDATE-NEW-POST-MESSAGE';

let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, message: 'hi, whats up', likes: 15 },
        { id: 2, message: 'second post', likes: 12 },
      ],
      newPostText: 'new text',
    },
    dialogsPage: {
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
      newMessageText: 'helloo',
    },
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._rerenderEntireTree = observer;
  },
  _rerenderEntireTree() {
    console.log('state');
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likes: 0,
      };
      this._state.profilePage.postsData.push(newPost);
      this._state.profilePage.newPostText = '';
      this._rerenderEntireTree(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._rerenderEntireTree(this._state);
    } else if (action.type === ADD_MESSAGE) {
      let newMessage = {
        id: 5,
        message: this._state.dialogsPage.newMessageText,
      };
      this._state.dialogsPage.messagesData.push(newMessage);
      this._state.dialogsPage.newMessageText = '';
      this._rerenderEntireTree(this._state);
    } else if (action.type === UPDATE_NEW_POST_MESSAGE) {
      this._state.dialogsPage.newMessageText = action.newText;
      this._rerenderEntireTree(this._state);
    }
  },
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
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

export default store;
window.store = store;
