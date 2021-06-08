export const initialState = {
    user: null,
    playlists: [],
    spotify: null,
    discover_weekly: null,
    top_artists: null,
    playing: false,
    item: null,//'BQDqjckWlr9S5sj-6mqvpki9ir2kLEbNNgMawQ-4jR0oCurSt1LJjQrUd7rHhb_YJUnwxOOXzQTOwzDhY7AtyUUfFxQd4JaYpRP4mwzDUb6F4c8qqtLiZP1RBO-NJ12xUu2rWIoFWryI_pwwGvoBTOHpV4_ci9MK'
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

        case "SET_PLAYING":
            return {
                 ...state,
                  playing: action.playing,
            };

        case "SET_ITEM":
            return {
                 ...state, 
                 item: action.item,
            };  

        case 'SET_PLAYLISTS':
            return{
                ...state,
                 playlists: action.playlists
            };

        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
                discover_weekly: action.discover_weekly,
            };

        case "SET_TOP_ARTISTS":
           return {
                ...state,
                top_artists: action.top_artists,
            };

        case "SET_SPOTIFY":
             return {
                ...state,
                spotify: action.spotify,
            }; 
        default:
                return state;
    }
};

export default reducer 