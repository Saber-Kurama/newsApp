/* ************************************************************************** */
/*                                                                            */
/* 每位工程师都有保持代码优雅和整洁的义务                                             */
/*                                                                            */
/* ************************************************************************** */
/**
 * Created by saber on 16/1/3.
 */
import React from 'react-native';
import Header from '../components/Header';
const { Component, View, Text, StyleSheet } = React;
class Profile extends Component {
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

  // 渲染
  render() {
    return (
        <View>
          <Header />
          <View style={styles.inputs}>

          </View>
        </View>
    );
  }
};
let styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'transparent'
  },
  inputs: {
    margin: 10
  }
});
export default Profile;
