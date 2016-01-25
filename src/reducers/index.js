/* ************************************************************************** */
/*                                                                            */
/* 每位工程师都有保持代码优雅和整洁的义务                                             */
/*                                                                            */
/* ************************************************************************** */
/**
 * Created by saber on 16/1/1.
 */
import { combineReducers } from 'redux';
import app from './app/appReducer';

const rootReducer = combineReducers({
  app
});
export default rootReducer;
