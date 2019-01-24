import types from '../actions/types';

const DEFAULT_STATE = {
    messages:  {} //you dont get an array back from firebase, YOU GET AN OBJECT
};

export default (state = DEFAULT_STATE, action) => {
    switch(action.type) {
        case types.GET_CHAT_MESSAGES :
            return {...state, messages:action.messages};
        default:
            return state;
    }
}