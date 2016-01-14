/* ************************************************************************** */
/*                                                                            */
/* 每位工程师都有保持代码优雅和整洁的义务                                             */
/*                                                                            */
/* ************************************************************************** */
/**
 * Created by saber on 16/1/1.
 */
'use strict';
import React from 'react-native';
// 导航
import TabNavigator from 'react-native-tab-navigator';

// 字体图标
import Icon from 'react-native-vector-icons/FontAwesome';

// login 组件
import Login from '../containers/Login';
import Profile from '../containers/Profile';

const { Component, StyleSheet, View, Text } = React;
class Tabbar extends Component {
  // 默认属性
  static defaultProps = {};
  // 属性类型
  static propTypes = {};
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      selectedTab: 'home'
    };
  }

  // 自定义方法
  handle() {
  }

  // 渲染
  render() {
    return (
        <TabNavigator>
          <TabNavigator.Item
              selected = {this.state.selectedTab === 'home'}
              title='首页'
              renderIcon={() => <Icon name="home" size={30} color="#FFB3B3" />}
              renderSelectedIcon={() => <Icon name="home" size={30} color="#FF3366" />}
              onPress = {() => this.setState({selectedTab: 'home'})} >
            <View style={styles.container}>
              <Login />
            </View>
          </TabNavigator.Item>
          <TabNavigator.Item
              selected = {this.state.selectedTab === 'profile'}
              title='profile'
              renderIcon={() => <Icon name="gear" size={30} color="#FFB3B3" />}
              renderSelectedIcon={() => <Icon name="gear" size={30} color="#FF3366" />}
              onPress = { () => this.setState({selectedTab: 'profile'}) }>
            <View style={styles.container}>
              <Profile />
            </View>
          </TabNavigator.Item>
        </TabNavigator>
    );
  }
}
let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent'
  }
});
export default Tabbar;

