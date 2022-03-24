import { userConstants } from "../constants/userConstant";
import { alertConstants } from "../constants/alert";
import { history } from '../common/history'
import { alertAction } from "./alertAction";
export const userAction = {
    login,
    logout,
    register,
    getAll,
    delete: _delete
}

function login(username, password){
    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                user => {
                    dispatch(success(user))
                },
                error => {
                    dispatch(failure(error.toString()))
                    dispatch(alertAction.error(error.toString()))
                }
            )
    }
    function request(user){ return { type: userConstants.LOGIN_REQUEST, user }}
    function success(user){ return { type: userConstants.LOGIN_SUCCESS, user }}
    function failure(user){ return { type: userConstants.LOGIN_FAILURE, user }}

}

function logout(){
    userService.logout()
    return { type: userConstants.LOGOUT }
}

function register(user){
    return dispatch => {
        dispatch(request(user))
        userService.register(user)
            .then(
                user => {
                    dispatch(success())
                    history.push("/login")
                    dispatch.alertAction.success("Register successfully")
                },
                error => {
                    dispatch(failure(error.toString()))
                    dispatch(alertAction.error(error.toString()))
                }
            )
    }
    function request(user){ return { type: userConstants.REGISTER_REQUEST }}
    function success(user){ return { type: userConstants.REGISTER_SUCCESS }}
    function failure(error){ return { type: userConstants.REGISTER_FAILURE }}
}