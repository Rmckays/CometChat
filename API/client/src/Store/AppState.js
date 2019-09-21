const initialState = {

    username: '',
    userId: '',
    email: '',
    name: '',
    createdOn: '',
    password: '',
    createdUser: false,
    userLoggedIn: false,
    height: window.innerHeight,
    width: window.innerWidth,
    loggedInUser: {
        userId: '',
        name: '',
        username: ''
    },
    userAuthenticated: false,
    messages: [],
    channels: [],
    currentChannelId: '',
    currentChannelName: '',
    usernameRequest: '',
    passwordRequest: ''

};


export default initialState;