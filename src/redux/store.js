import profileReduser from './profileReduser';
import dialogsReduser from './dialogsReduser';
import sidebarReduser from './sidebarReduser';

let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, message: 'hi, whats up', likes: 15 },
        { id: 2, message: 'second post', likes: 12 },
      ],
      newPostText: '',
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
      newMessageText: '',
    },
    sidebar: {},
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  _callSubscriber() {
    console.log('state');
  },

  dispatch(action) {
    this._state.profilePage = profileReduser(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReduser(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReduser(this._state.sidebar, action);
    this._callSubscriber(this._state);
  },
};

export default store;
window.store = store;
