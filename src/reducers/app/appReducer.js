/* ************************************************************************** */
/*                                                                            */
/* 每位工程师都有保持代码优雅和整洁的义务                                             */
/*                                                                            */
/* ************************************************************************** */
/**
 * Created by saber on 16/1/19.
 */
'use strict';

const {
  HAS_TABBAR
  } = require('../../lib/constants').default;
//一个 用户的 reducer
export default function appReducer(state = {}, action){ 
  switch (action.type){
  case HAS_TABBAR:
    let nextState = state.setIn(['form', 'isFetching'], true)
      .setIn(['form', 'error'], null);
    return nextState;
  }
  return state;
}
