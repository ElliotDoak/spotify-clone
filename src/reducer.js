export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // remove after finishing development, change to null 
    token: 'BQDFGc130gnnL1QW_BQIVne_sMF05EpFuFyv1HH2nzuXqc_AWCCIRrDt_K_q2v7bB5-pj6mUovbVNCXoZ8Lg42lmyhzgNHnlOqibaekqQtEau-4aQHnm3TJ_D4CajTAGTTOP5qt_rIItWXcOrHy7RUlMlAAUgmwC',
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
                }
        default:
                return state;
    }
};

export default reducer 