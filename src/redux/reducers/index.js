import { GETUSERMESSAGE, GETUSERNAME, RESETCHAT, RESETCURRENTUSER } from "../constants";

const initialState = {
    messages: [
        { Priya: 'Hi guys.' },
        { Rahul: 'Hello.' },
        { Samantha: 'Heyy.' },
        { Priya: 'How are you?' },
        { Rahul: 'Good.' },
        { Samantha: 'I am fine.' },
        { Priya: 'Good to hear that.' },
        { Rahul: 'How are you Priya?' },
        { Priya: 'I am good too.' },
    ],
    currentUser: null
}

const rootReducer = (state = initialState, action) => {

    switch (action.type) {
        case GETUSERNAME: return { ...state, currentUser: action.payload }
        case GETUSERMESSAGE: return { ...state, messages: [...state.messages, action.payload] }
        case RESETCHAT: return { ...state, messages: [...initialState.messages], currentUser: null }
        case RESETCURRENTUSER: return { ...state, currentUser: null }
        default: return { ...state }
    }
}

export default rootReducer;