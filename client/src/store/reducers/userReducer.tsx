import { AnyAction } from "redux"

type userState = {
    users: {
        name: string,
        id: string
    }[],
    selectedUserId: string
}

const initialState = { users: [], selectedUserId: '' } as userState

export const userReducer = (state = initialState, action: AnyAction) => {
    switch(action.type) {
        case 'USER_DATA_SUCCESS':
            return {
                ...state,
                users: action.payload
            }
        case 'ADD_NEW_USER_SUCCESS':
            return {
                ...state,
                users: [...state.users, action.payload]
            }
        case 'SET_SELECTED_USER_ID':
            return {
                ...state,
                selectedUserId: action.payload
            }
        default:
            return state;
    }
}