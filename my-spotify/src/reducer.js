export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,
    token: 'BQAr-y-5bEYecucddYmD11IcOQ_23tkYJtFwpA3t8JKEqI6UdU5r48xR-Rfkjt_vFAxJfmXgUKgo6wlGSxjwgX6pwoEbX3CJ29F9pKnLXzPI-BxVEVSfEcy4ntJQ808Op3_YR6G4HkhEs2fGdqKvSYYeeKtPHY03vPxj5vQthWNgnkkv'
};

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
        
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            };

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            };
        
        default: 
            return state;
    }
};

export default reducer;