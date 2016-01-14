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
const { Component, View, Text } = React;
class ItemCheckbox extends Component {
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
          <Text>
            ItemCheckbox
          </Text>
        </View>
    );
  }
}
export default ItemCheckbox;
