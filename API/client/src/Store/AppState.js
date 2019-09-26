
const initialState = {

    username: '',
    userId: '',
    email: '',
    name: '',
    createdOn: '',
    password: '',
    avatar: '',
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
    users: [],
    maleAvatars:['https://react.semantic-ui.com/images/avatar/small/elliot.jpg',
                 'https://react.semantic-ui.com/images/avatar/small/joe.jpg',
                 'https://react.semantic-ui.com/images/avatar/small/justen.jpg'],
    femaleAvatars: ['https://react.semantic-ui.com/images/avatar/small/helen.jpg',
                    'https://react.semantic-ui.com/images/avatar/small/jenny.jpg',
                    'https://react.semantic-ui.com/images/avatar/small/laura.jpg'],
    currentChannelId: '8924afba-4fac-4fdc-9b0b-91f2d19b2a9d',
    currentChannelName: '',
    usernameRequest: '',
    passwordRequest: '',
    hubConnection: null


};


export default initialState;