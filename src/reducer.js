export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: null
    //'BQDqjckWlr9S5sj-6mqvpki9ir2kLEbNNgMawQ-4jR0oCurSt1LJjQrUd7rHhb_YJUnwxOOXzQTOwzDhY7AtyUUfFxQd4JaYpRP4mwzDUb6F4c8qqtLiZP1RBO-NJ12xUu2rWIoFWryI_pwwGvoBTOHpV4_ci9MK'
};

const reducer = (state, action) => {
    console.log(action); 

    // Action has both a type and a [payload]

    switch(action.type) {
        case 'SET_USER':
            return{
                ...state,
                user: action.user
            };
        case 'SET_TOKEN':
            return{
                ...state,
                 token: action.token
            };
        case 'SET_PLAYLISTS':
            return{
                ...state,
                 playlists: action.playlists
            };
        default:
                return state;
    }
};

export default reducer 