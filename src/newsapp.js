/* ************************************************************************** */
/*                                                                            */
/* 每位工程师都有保持代码优雅和整洁的义务                                             */
/*                                                                            */
/* ************************************************************************** */
/**
 * Created by saber on 15/12/31.
 */
'use strict';

import React, { AppRegistry } from 'react-native';
import { Provider } from 'react-redux/native';
import App from './containers/App';
import configureStore from './lib/configureStore';

import authInitialState from './reducers/auth/authInitialState';

let getInitialState = () => {
  const _initState = {
    auth: new authInitialState
  }
  return _initState;
};
export default function native(platform) {
  
  let NewsApp = React.createClass({
    render() {
      const store = configureStore(getInitialState());
      console.log('------------');
      console.log(store);
      return (
          <Provider store={store}>
            {() => <App store={store} />}
          </Provider>
      );
    }
  });
  
  AppRegistry.registerComponent('newsApp', () => NewsApp);
}
