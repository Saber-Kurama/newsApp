/* ************************************************************************** */
/*                                                                            */
/* 每位工程师都有保持代码优雅和整洁的义务                                             */
/*                                                                            */
/* ************************************************************************** */
/**
 * Created by saber on 16/1/1.
 */
import { combineReducers } from 'redux';
import auth from './auth/authReducer';

const rootReducer = combineReducers({
  auth
});
export default rootReducer;
