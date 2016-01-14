/* ************************************************************************** */
/*                                                                            */
/* 每位工程师都有保持代码优雅和整洁的义务                                             */
/*                                                                            */
/* ************************************************************************** */
/**
 * Created by saber on 16/1/1.
 */
'use strict';
import InitialState from './authInitialState';

const {
    SESSION_TOKEN_REQUEST
    } = require('../../lib/constants').default;
const initialState = new InitialState;
//一个 用户的 reducer
export default function authReducer(state = initialState, action){
  if(!(state instanceof InitialState)){
    return initialState.mergeDeep(state);
  }
  switch (action.type){
    case SESSION_TOKEN_REQUEST:
        let nextState = state.setIn(['form', 'isFetching'], true)
          .setIn(['form', 'error'], null);
        return nextState;
  }
  return state;
}
