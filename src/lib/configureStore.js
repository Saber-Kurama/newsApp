/* ************************************************************************** */
/*                                                                            */
/* 每位工程师都有保持代码优雅和整洁的义务                                             */
/*                                                                            */
/* ************************************************************************** */
/**
 * Created by saber on 15/12/31.
 */
/**
 *  创建 store ,配置中间件
 */

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

/**
 * 引入所有 reducer
 */
import reducer from  '../reducers';

const createStoreWithMiddleware = applyMiddleware(
    thunk
)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(reducer, initialState);
}
