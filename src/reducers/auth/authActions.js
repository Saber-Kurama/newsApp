/* ************************************************************************** */
/*                                                                            */
/* 每位工程师都有保持代码优雅和整洁的义务                                             */
/*                                                                            */
/* ************************************************************************** */
/**
 * Created by saber on 16/1/3.
 */
'use strict';

//import {
//    LOGIN_STATE_LOGIN
//} from '../../lib/constants';

const {
      SESSION_TOKEN_REQUEST,
      LOGIN_STATE_LOGIN
    } = require('../../lib/constants').default;

export function loginState() {
  return {
    type: LOGIN_STATE_LOGIN
  }
}

export function sessionTokenRequest() {
  return {
    type: SESSION_TOKEN_REQUEST
  }
}

export function getSessionToken() {
  return dispatch => {
    dispatch(sessionTokenRequest());
  }
}
