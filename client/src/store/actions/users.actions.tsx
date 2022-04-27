import { createAction } from "@reduxjs/toolkit";

export const requestUserData = createAction('REQUEST_USER_DATA');
export const userDataSuccess = createAction<any>('USER_DATA_SUCCESS');
export const userDataFailure = createAction('USER_DATA_FAILURE');

export const addNewUser = createAction<any>('ADD_NEW_USER');
export const addNewUserSuccess = createAction<any>('ADD_NEW_USER_SUCCESS');
export const setSelectedUserId = createAction<any>('SET_SELECTED_USER_ID');

// hobbies

export const getUserHobbies = createAction<any>('REQUEST_USER_HOBBIES');
export const getUserHobbiesSuccess = createAction<any>('GET_USER_HOBBIES_SUCCESS');
export const addNewHobby = createAction<any>('ADD_NEW_HOBBY');
export const addNewHobbySuccess = createAction<any>('ADD_NEW_HOBBY_SUCCESS');
export const deleteUserHobby = createAction<any>('DELETE_USER_HOBBY')
export const deleteUserHobbySuccess = createAction<any>('DELETE_USER_HOBBY_SUCCESS')