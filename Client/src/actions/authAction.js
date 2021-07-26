import { REGISTER_FAIL, REGISTER_USER, LOGIN_USER, LOGIN_FAIL, LOGOUT } from './types';
import axios from 'axios';

//Register
export const registerUser = (data, history) => async (dispatch) => {
  try {
    const res = await axios.post('/user/newUser',data);
    dispatch({ type: REGISTER_USER, payload: res.data });
    history.push('/Profile');
  } catch (error) {
    dispatch({ type: REGISTER_FAIL, payload: error });
    console.log(data)
  }
};

//login
export const loginUser = (data, history) => async (dispatch) => {
  try {
    const res = await axios.post('/user/login',data);
    dispatch({ type: LOGIN_USER, payload: res.data });
    if((res.data.User.role)==='admin')
    history.push('/Admin');
    else history.push('/Items');
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error?.response?.data?.message });
  }
};
//logout
export const logout = (history) => async (dispatch) => {
  try {
    dispatch({ type: LOGOUT });
    history.push('/login');
  } catch (error) {
    console.log(error);
  }
};

