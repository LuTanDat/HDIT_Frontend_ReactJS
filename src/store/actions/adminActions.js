import actionTypes from "./actionTypes";
import { getAllCodeService, createNewUserService } from '../../services/userService';

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
        dispatch(saveUserSuccess());
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