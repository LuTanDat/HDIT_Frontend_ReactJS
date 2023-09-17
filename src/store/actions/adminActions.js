import actionTypes from "./actionTypes";
import { getAllCodeService, createNewUserService, getAllUsers, deleteUserService } from '../../services/userService';
import { toast } from "react-toastify";

// export const fetchGenderStart = () => ({
//   type: actionTypes.FETCH_GENDER_START,
// })

// GENDER
export const fetchGenderStart = () => {
  return async (dispatch, getState) => {
    try {

      dispatch({ type: actionTypes.FETCH_GENDER_START });

      let res = await getAllCodeService('GENDER');
      if (res && res.errCode === 0) {
        dispatch(fetchGenderSuccess(res.data));
      } else {
        dispatch(fetchGenderFail());
      }
    } catch (e) {
      dispatch(fetchGenderFail());
      console.log('fetch gender start error: ', e);
    }
  }
}

export const fetchGenderSuccess = (data) => ({
  type: actionTypes.FETCH_GENDER_SUCCESS,
  data: data,
})

export const fetchGenderFail = () => ({
  type: actionTypes.FETCH_GENDER_FAIL,
})

// POSITION
export const fetchPositionStart = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllCodeService('POSITION');
      if (res && res.errCode === 0) {
        dispatch(fetchPositionSuccess(res.data));
      } else {
        dispatch(fetchPositionFail());
      }
    } catch (e) {
      dispatch(fetchPositionFail());
      console.log('fetch position start error: ', e);
    }
  }
}

export const fetchPositionSuccess = (data) => ({
  type: actionTypes.FETCH_POSITION_SUCCESS,
  data: data,
})

export const fetchPositionFail = () => ({
  type: actionTypes.FETCH_POSITION_FAIL,
})

// ROLE
export const fetchRoleStart = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllCodeService('ROLE');
      if (res && res.errCode === 0) {
        dispatch(fetchRoleSuccess(res.data));
      } else {
        dispatch(fetchRoleFail());
      }
    } catch (e) {
      dispatch(fetchRoleFail());
      console.log('fetch role start error: ', e);
    }
  }
}

export const fetchRoleSuccess = (data) => ({
  type: actionTypes.FETCH_ROLE_SUCCESS,
  data: data,
})

export const fetchRoleFail = () => ({
  type: actionTypes.FETCH_ROLE_FAIL,
})



export const createNewUser = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await createNewUserService(data);
      console.log('check create new user: ', res);
      if (res && res.errCode === 0) {
        toast.success("Create a new user succeed");
        dispatch(saveUserSuccess());
        dispatch(fetchAllUserStart());
      } else {
        dispatch(saveUserFail());
      }
    } catch (e) {
      dispatch(saveUserFail());
      console.log('saveUserFail error: ', e);
    }
  }
}

export const saveUserSuccess = () => ({
  type: actionTypes.CREATE_USER_SUCCESS,
})

export const saveUserFail = () => ({
  type: actionTypes.CREATE_USER_FAIL,
})



export const fetchAllUserStart = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllUsers('ALL');
      if (res && res.errCode === 0) {
        dispatch(fetchAllUserSuccess(res.users.reverse()));
      } else {
        toast.error(`Fetch all user failed`);
        dispatch(fetchAllUserFail());
      }
    } catch (e) {
      toast.error(`Fetch all user failed`);
      dispatch(fetchAllUserFail());
      console.log('fetch role start error: ', e);
    }
  }
}

export const fetchAllUserSuccess = (data) => ({
  type: actionTypes.FETCH_ALL_USER_SUCCESS,
  users: data,
})

export const fetchAllUserFail = () => ({
  type: actionTypes.FETCH_ALL_USER_FAIL,
})



export const deleteUser = (userId) => {
  return async (dispatch, getState) => {
    try {
      let res = await deleteUserService(userId);
      if (res && res.errCode === 0) {
        toast.success("Delete the user succeed");
        dispatch(deleteUserSuccess());
        dispatch(fetchAllUserStart());
      } else {
        toast.error(`Delete the user failed`);
        dispatch(deleteUserFail());
      }
    } catch (e) {
      toast.error(`Delete the user failed`);
      dispatch(deleteUserFail());
      console.log('deleteUserFail error: ', e);
    }
  }
}

export const deleteUserSuccess = () => ({
  type: actionTypes.DELETE_USER_SUCCESS,
})

export const deleteUserFail = () => ({
  type: actionTypes.DELETE_USER_FAIL,
})