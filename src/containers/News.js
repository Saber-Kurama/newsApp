/* ************************************************************************** */
/*                                                                            */
/* 每位工程师都有保持代码优雅和整洁的义务                                             */
/*                                                                            */
/* ************************************************************************** */
/**
 * Created by saber on 16/1/15.
 */
import React from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux/native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import CustomTabBar from '../components/CustomTabBar';
import FacebookTabBar from '../components/FacebookTabBar';
import NaviBar from '../components/NaviBar';

import * as appActions from '../reducers/app/appActions';
import { Map } from 'immutable'; 

const { Component, View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } = React;

/**
 * ## Redux boilerplate
 */
const actions = [
  appActions
];

function mapStateToProps(state) {
  return {
      ...state
  };
}

function mapDispatchToProps(dispatch) {
  const creators = Map()
          .merge(...actions)
          .filter(value => typeof value === 'function')
          .toObject();

  return {
    actions: bindActionCreators(creators, dispatch),
    dispatch
  };
}

class News extends Component {
  // 默认属性
  static defaultProps = {};
  // 属性类型
  static propTypes = {};
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {};
  }

  // 自定义方法
  handle() {
  }
  navBarBackFn(){
    
    const { navigator, actions } = this.props;
    if(navigator){
      navigator.pop();
    }
  }

  // 渲染
  render() {
    console.log('newnewnewnewnewnewnew');
    return (
      <View style={styles.container}>
        <NaviBar  barTintColor="#D32F2F" tintColor="#fff" titleTextColor="#fff" title="行业资讯" backFunc={this.navBarBackFn.bind(this)} ></NaviBar>
        <ScrollableTabView initialPage={0} renderTabBar={() => <CustomTabBar />}>
          <ScrollView tabLabel="热点" style={styles.tabView}>
            <TouchableOpacity >
              <View style={myStyles.row}>
                <Image style={myStyles.newsPic} source={{uri: 'http://c.hiphotos.baidu.com/image/w%3D310/sign=0dff10a81c30e924cfa49a307c096e66/7acb0a46f21fbe096194ceb468600c338644ad43.jpg'}} />
                <View style={myStyles.textContainer}>
                  <Text style={myStyles.title}>Title</Text>
                  <Text style={myStyles.subtitle}>1111</Text>
                </View>
              </View>
            </TouchableOpacity>
          </ScrollView>
          <ScrollView tabLabel="娱乐" style={styles.tabView}>
            <View style={styles.card}>
              <Text>Friends</Text>
            </View>
          </ScrollView>
          <ScrollView tabLabel="播报" style={styles.tabView}>
            <View style={styles.card}>
              <Text>Messenger</Text>
            </View>
          </ScrollView>
          <ScrollView tabLabel="体育" style={styles.tabView}>
            <View style={styles.card}>
              <Text>Notifications</Text>
            </View>
          </ScrollView>
          <ScrollView tabLabel="财经" style={styles.tabView}>
            <View style={styles.card}>
              <Text>Other nav</Text>
            </View>
          </ScrollView>
        </ScrollableTabView>
      </View>
    );
  }
}
var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  topbar:{
    backgroundColor: '#D32F2F',
    height:20
  },
  headerBar:{
    backgroundColor: '#D32F2F',
    height:30
  },
  tabView: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.01)',
  },
  card: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'rgba(0,0,0,0.1)',
    margin: 5,
    height: 150,
    padding: 15,
    shadowColor: '#ccc',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
});
const myStyles = StyleSheet.create({
  row: {
    alignItems: 'center',
    height: 80,
    //backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(206,206,206,1)',
    padding: 10,
    flexDirection: 'row',
  },
  textContainer: {
    paddingLeft: 10,
    flex: 1,
  },
  newsPic: {
    width: 90,
    height: 60,
    margin: 10,
    marginLeft: 0,
  },
  title: {
    color: '#4f4f4f',
    fontSize: 14,
    textAlign: 'left',
    //marginBottom: 8,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#bababa',
    fontSize: 12,
    textAlign: 'left',

  }
});
export default connect(mapStateToProps, mapDispatchToProps)(News);
