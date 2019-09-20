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
    message: [],
    usernameRequest: '',
    passwordRequest: ''

};


export default initialState;