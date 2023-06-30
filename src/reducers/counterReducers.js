
import { INCREMENT,DECREMENT,RESET } from "../actions/actionsType";

const initialState = {a: 0}

const counterReducer = (state=initialState, actions) =>{
    switch(actions.type){
        case INCREMENT:
            return {...state, a: state.a + actions.payload}
        case DECREMENT:
            return {...state, a: state.a - actions.payload}
        case RESET:
            return {...state, a: 0}
        default:
            return state
    }
}
export default counterReducer;
