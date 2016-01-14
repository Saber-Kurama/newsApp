/* ************************************************************************** */
/*                                                                            */
/* 每位工程师都有保持代码优雅和整洁的义务                                             */
/*                                                                            */
/* ************************************************************************** */
/**
 * Created by saber on 16/1/3.
 */
'use strict';
import React from 'react-native';
import GiftedSpinner from 'react-native-gifted-spinner';
import FormButton from './FormButton';
const { Component, View, Text, StyleSheet, TouchableHighlight, Image, TextInput } = React;
class Header extends Component {
  // 默认属性
  static defaultProps = {
    showState: true
  };
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
    let showState = <Text></Text>;
    if(this.props.showState){
      showState =
          <View style={styles.container}>
            <Text>
              Current state ( see console)
            </Text>
            <TextInput style={{height:100, borderColor: 'gray', borderWidth: 1}}>

            </TextInput>
            <View style={{marginTop:10}}>
              <FormButton
                buttonText={'Update State'}></FormButton>
            </View>
          </View>
    }
    let spinner = <Text></Text>;
    if(this.props.isFetching) {
      spinner = <GiftedSpinner />;
    }
    return (
        <View>
          <View style={styles.header}>
            <TouchableHighlight>
              <Image style={styles.mark} source={{uri:'http://i.imgur.com/da4G0Io.png'}}/>
            </TouchableHighlight>
            {spinner}
          </View>
          {showState}
        </View>
    );
  }
}

// 样式
let styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    margin: 20
  },
  header: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  mark: {
    width: 50,
    height: 50
  }
});
export default Header;
