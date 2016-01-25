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
// 首页组件
import Home from '../containers/Home';
import Phone from '../containers/Phone';
import Profile from '../containers/Profile';

const { Component, StyleSheet, View, Text, Navigator } = React;
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
    console.log('>>>>>');
    let tabBarHeight = this.props.tabBarHeight;
    return (
        <TabNavigator tabBarStyle={{ height: tabBarHeight, overflow: 'hidden' }}
                      sceneStyle={{ paddingBottom: tabBarHeight }}>
          <TabNavigator.Item
              selected = {this.state.selectedTab === 'home'}
              title='首页'
              renderIcon={() => <Icon name="home" size={30} color="#FFB3B3" />}
              renderSelectedIcon={() => <Icon name="home" size={30} color="#FF3366" />}
              onPress = {() => this.setState({selectedTab: 'home'})} >
            <View style={styles.container}>
              <Home navigator={this.props.navigator}/>
            </View>
          </TabNavigator.Item>
          <TabNavigator.Item 
              selected = {this.state.selectedTab === 'customer'}
              title='客户'
              renderIcon={() => <Icon name="users" size={30} color="#ffb3b3" /> }
              renderSelectedIcon={() => <Icon name="users" size={30} color="#ff3366"/>}
              onPress={() => this.setState({selectedTab: 'customer'})}>
            <View style={styles.container}>
              <Phone />
            </View>
          </TabNavigator.Item>
          <TabNavigator.Item
              selected = {this.state.selectedTab === 'training'}
              title='培训'
              renderIcon={() => <Icon name="graduation-cap" size={30} color="#ffb3b3" /> }
              renderSelectedIcon={() => <Icon name="graduation-cap" size={30} color="#ff3366"/>}
              onPress={() => this.setState({selectedTab: 'training'})}>
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

