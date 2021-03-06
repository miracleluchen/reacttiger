/**
 * Created by luch on 10/28/16.
 */

import { Map } from 'immutable'

const INITIAL_STATE = Map({
    status: 0,
})

export default function loginReducer(login=INITIAL_STATE, action) {
    switch (action.type) {
        case "LOGIN_REQUEST":
            return {"status": 0}
        case "LOGIN_SUCCEEDED":
            return {"status": 1}
        case "LOGIN_FAILED":
            return {"status": 2}
        case "LOGOUT":
            return {"status": 3}
        default:
            return login
    }
}