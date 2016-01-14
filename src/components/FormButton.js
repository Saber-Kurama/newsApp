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
import Button from 'apsl-react-native-button';
const { Component, View, Text, StyleSheet } = React;
class FormButton extends Component {
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
        <View style={styles.signin}>
          <Button style={styles.button}
              isDisabled={this.props.isDisabled}
              onPress={this.props.onPress}>
            {this.props.buttonText}
          </Button>
        </View>
    );
  }
}

let styles = StyleSheet.create({
  signin: {
    marginLeft: 10,
    marginRight: 10
  },
  button: {
    backgroundColor: '#ff3366',
    borderColor: '#ff3366'
  }
});
export default FormButton;
