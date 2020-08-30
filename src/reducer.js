export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: 'BQCp97Frt5AX89KGzDWIlCB7uYc_-YPc9HKxo1moM7Zdgch9LJ…_neajwBdFLDD0tiDDWAHahwuoas3KX2GpM5F5wQLKQJDsWHG3',
}

const reducer = (state,action) => {
    console.log(action);

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            }

            case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            }

            case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            }
            case 'SET_DISCOVER_WEEKLY':
                return {
                    ...state,
                    discover_weekly: action.discover_weekly,
                }
        default:
            return state;
}
};

export default reducer;