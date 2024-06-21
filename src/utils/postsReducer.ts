import PostAction from "../types/PostsAction";
import { _Post } from "../types/_Post";


const reducer = (state: _Post[], action: PostAction): _Post[] => {
    switch (action.type) {
        case 'INSERT_POST':
            // if post already exists, return state
            if(state.find((prevPost:_Post) => prevPost.id === action.payload.id)) return state;
            // insert post sorted by date_started
            // find index by binary search
            let left = 0;
            let right = state.length - 1;
            let index;
            while (left <= right) {
                index = Math.floor((left + right) / 2);
                if (state[index].date_started === action.payload.date_started) break;
                if (state[index].date_started < action.payload.date_started) right = index - 1;
                else left = index + 1;
            }
            return [...state.slice(0, index), action.payload, ...state.slice(index)];

        default:
            return state;
    }
}

export default reducer;