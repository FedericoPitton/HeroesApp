import { types } from "../types/types";



export const authReducer = (state = {}, action:any) => {
    switch (action.type) {
        case types.logout:
            return {
                logged: false,
                user: null
            };
        case types.login:
            return {
                ...state,
                logged: true,
                user: action.payload
            };
        default:
            return state;
    }
}