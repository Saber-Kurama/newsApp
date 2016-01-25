/* ************************************************************************** */
/*                                                                            */
/* 每位工程师都有保持代码优雅和整洁的义务                                             */
/*                                                                            */
/* ************************************************************************** */
/**
 * Created by saber on 16/1/19.
 */
const {
  SHOW_TABBAR,
  HIDE_TABBAR
  } = require('../../lib/constants').default;


export function showTabBar(){
  return {
    type: SHOW_TABBAR
  }
}

export function hideTabBar(){
  console.log('hidehidehidehide');
  return {
    type: HIDE_TABBAR
  }
}
