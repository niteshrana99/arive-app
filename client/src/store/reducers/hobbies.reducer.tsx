import { AnyAction } from "redux"

type hobbiesState = {
    hobbies: {
        id: string,
        passion: string,
        year: string,
        name: string
    }[]
}

const initialState: hobbiesState = {
    hobbies: []
}

export const hobbiesReducer = (state = initialState, action: AnyAction) => {
    switch(action.type) {
        case 'GET_USER_HOBBIES_SUCCESS':
        case 'DELETE_USER_HOBBY_SUCCESS':
        case  'ADD_NEW_HOBBIES_SUCCESS':
            return {
                ...state,
                hobbies: action.payload
            }
        default:
            return state;
    }
}