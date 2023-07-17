// add counter action creators imports here
import { DEACREASE_COUNT, INCREASE_COUNT, RESET_COUNT} from "../actions/counterActions";

const INITIAL_STATE = { count: 0 };

// define counter reducer function here
export const counterReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case DEACREASE_COUNT:
            return {
               ...state, count: --state.count
            }
        case INCREASE_COUNT:
            return {
                ...state, count: ++state.count
            }
        case RESET_COUNT:
            return {
               ...state, count: 0
            }
        default:
            return state;
    }
}
