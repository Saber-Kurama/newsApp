/* ************************************************************************** */
/*                                                                            */
/* 每位工程师都有保持代码优雅和整洁的义务                                             */
/*                                                                            */
/* ************************************************************************** */
/**
 * Created by saber on 16/1/4.
 */
'use strict';

import { Record } from 'immutable';

const {
    LOGIN_STATE_REGISTER
    } = require('../../lib/constants').default;

const Form = Record({
  state: LOGIN_STATE_REGISTER,
  disabled: false,
  error: null,
  isValid: false,
  isFetching: false,
  fileds: new(Record({
    username: '',
    usernameHasError: false,
    email: '',
    emailHasError: false,
    password: '',
    passwordHasError: false,
    passwordAgain: '',
    passwordAgainHasError: false,
    showPassword: false
  }))
});


var InitialState = Record({
  form: new Form
});

export default InitialState;
