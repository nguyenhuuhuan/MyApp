import { alertConstants } from "../constants/alert";

export const alertAction = {
    success,
    error,
    clear
}

function success(){
    return { type: alertConstants.SUCCESS }
}

function error(){
    return { type: alertConstants.ERROR }
}

function clear(){
    return { type: alertConstants.CLEAR }
}