import PostAction from "../types/PostsAction";
import { _Post } from "../types/_Post";


const reducer = (state: _Post[], action: PostAction): _Post[] => {
    switch (action.type) {
        case 'INSERT_POST':
            // if post already exists, return state
            if(state.find((prevPost:_Post) => prevPost.id === action.payload.id)) return state;
            // insert post sorted by date_started
            // find index
            let index = 0;
            for(let i=0; i<state.length; i++){
                if(state[i].date_started > action.payload.date_started) index = i;
                else break;
            }
            return [...state.slice(0, index), action.payload, ...state.slice(index)];

        default:
            return state;
    }
}

export default reducer;