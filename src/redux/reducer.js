import {ARTITLEMESSAGE} from './action-type'
import {combineReducers} from "redux";
 function articleMessage(state={}, action) {
    switch (action.type) {
        case ARTITLEMESSAGE:
            return action.data
        default:
            return state
    }
}
function userInfo(state={},action) {
        return state
}
export default combineReducers({
    articleMessage,
    userInfo
})
