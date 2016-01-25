/* ************************************************************************** */
/*                                                                            */
/* 每位工程师都有保持代码优雅和整洁的义务                                             */
/*                                                                            */
/* ************************************************************************** */
/**
 * Created by saber on 16/1/19.
 */
'use strict';

import  InitialState from './appInitialState';

const {
  SHOW_TABBAR,
  HIDE_TABBAR
  } = require('../../lib/constants').default;

 const initialState = new InitialState;

//修改 app的数据
export default function appReducer(state = initialState, action){ 
  switch (action.type) {
  case SHOW_TABBAR:
  {
    let nextState = state.set('showTabBar', true);
    return nextState;
  }
  case HIDE_TABBAR:
  {
    console.log('???>>>>>>>');
    let nextState = state.set('showTabBar', false);
    return nextState;
  }
  }
  return state;
}
