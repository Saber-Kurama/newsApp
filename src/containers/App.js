/* ************************************************************************** */
/*                                                                            */
/* 每位工程师都有保持代码优雅和整洁的义务                                             */
/*                                                                            */
/* ************************************************************************** */
/**
 * Created by saber on 15/12/31.
 */
import React from 'react-native';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux/native';
import { Map } from 'immutable';
import Tabbar from '../components/Tabbar';
import Login from './Login';
import * as authActions from '../reducers/auth/authActions'
//import styles from 'styles';
const { Component, View, Text, Navigator } = React;
const actions = [
  authActions
];
// 默认数据  (后面使用es7的装饰)
let mapStateToProps = (state) => {
  return {
    ...state
  }
};
let mapDispatchToProps = (dispatch) => {
  const creators = Map()
    .merge(...actions)
    .filter(value => typeof value === 'function')
    .toObject();
  return {
    actions: bindActionCreators(creators, dispatch),
    dispatch
  };
};
class App extends Component {
  // 默认属性
  static defaultProps = {};
  // 属性类型
  static propTypes = {};
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      loggedIn: false
    };
  }

  // 自定义方法
  handle() {
  }

  componentDidMount() {
    console.log(this.props.actions);
    //this.props.actions.getSessionToken();
  }

  // 渲染
  render() {
    let tabBarHeight = 49;
    //if (this.props.app.get('showTabBar')) {
    //  console.log('>>>>>SDDS>>SD>D>S');
    //  tabBarHeight = 49;
    //}
    let component = <Login />;
    //if(this.state.loggedIn){
    component = (<Navigator
      initialRoute={{name: '首页', component: Tabbar}}

      renderScene={(route, navigator) => {
                  let Component = route.component;
                  if(route.component) {
                    return <Component {...route.params} navigator={navigator} 
                    actions={this.props.actions} tabBarHeight={tabBarHeight} />
                  }
                }}>

    </Navigator>);
    //}
    return (
      component
    );
  }
}
;
export default connect(mapStateToProps, mapDispatchToProps)(App);

