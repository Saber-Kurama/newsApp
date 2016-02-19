/* ************************************************************************** */
/*                                                                            */
/* 每位工程师都有保持代码优雅和整洁的义务                                             */
/*                                                                            */
/* ************************************************************************** */
/**
 * Created by saber on 16/1/29.
 */
import React from 'react-native';
import NaviBar from '../components/NaviBar';
const { Component, View, Text, StyleSheet, Image } = React;
class Performance extends Component {
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
  navBarBackFn() {
    const { navigator, actions } = this.props;
    if (navigator) {
      navigator.pop();
    }
  }

  // 渲染
  render() {
    return (
      <View style={styles.container}>
        <NaviBar barTintColor="#D32F2F" tintColor="#fff" titleTextColor="#fff"
                 title="我的业绩"
                 backFunc={this.navBarBackFn.bind(this)}>

        </NaviBar>
        <View style={[styles.vertical]}>
          <View style={styles.headerTextView}>
            <Text style={styles.textHeader}>我的收益</Text>
          </View>
          <View style={styles.horizontal}>
            <View style={[styles.horizontal, styles.card ,{flex: 1}]}>
              <Image source={require('../../assets/Commission.png')} >
              </Image>
              <View style={{flex: 1, padding: 10}}>
                <Text style={{fontSize: 20}}>
                  当天收益
                </Text>
                <Text style={{fontSize: 16gi}}>
                  500.00
                </Text>
              </View>
              
            </View>
            <View style={[styles.horizontal, styles.card, {flex: 1}]}>
              <Text>
                sadeasdasd
              </Text>
            </View>
          </View>
        </View>
        <Text >
          Performance
        </Text>
      </View>
    );
  }
}
;
let styles = StyleSheet.create({
  container: {
    flex: 1
  },
  vertical: {
    flexDirection: 'column'
  },
  horizontal: {
    flexDirection: 'row'
  },
  headerTextView: {
    backgroundColor: 'red',
    //alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    paddingLeft: 10,
    paddingRight: 10
  },
  textHeader: {},
  card: {
    backgroundColor: '#efefef',
    borderColor: '#efefef',
    borderWidth: 1,
    height: 60,
    margin: 10,
    padding: 10,
    alignItems:'center',
    justifyContent:'flex-start'
  }
});
export default Performance;
