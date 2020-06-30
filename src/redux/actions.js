
import {ARTITLEMESSAGE} from './action-type'
import {reqArticleHeader} from "../api/ajax";
export  function reqArtitleMessage(){
    return async function (dispatch) {
        const result =   await reqArticleHeader()
         dispatch(reqArtitleMessages(result.data))

    }
}
export function reqArtitleMessages(data){
    return {
        type:ARTITLEMESSAGE,
        data
    }
}
