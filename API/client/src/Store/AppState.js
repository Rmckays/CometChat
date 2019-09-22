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
        userId: '19f04deb-b3ed-4e69-bef8-895f6c671c05',
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
    currentChannelId: '2790a38f-87b2-41ab-b893-d945188b32fa',
    currentChannelName: '',
    usernameRequest: '',
    passwordRequest: ''

};


export default initialState;