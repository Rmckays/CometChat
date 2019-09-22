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
        userId: 'd6775a1b-d7f9-419a-809c-e623b23a7565',
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