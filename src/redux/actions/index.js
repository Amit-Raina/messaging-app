import { GETUSERMESSAGE, GETUSERNAME, RESETCHAT, RESETCURRENTUSER } from "../constants"

export const getUserName = (name) => {
    return{
        type:GETUSERNAME,
        payload:name
    }
}

export const getUserMessage = (message) => {
    return{
        type:GETUSERMESSAGE,
        payload:message
    }
}

export const resetChatData = () => {
    return{
        type:RESETCHAT
    }
}

export const resetCurrentUser = () => {
    return{
        type:RESETCURRENTUSER
    }
}