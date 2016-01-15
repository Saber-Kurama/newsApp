/* ************************************************************************** */
/*                                                                            */
/* 每位工程师都有保持代码优雅和整洁的义务                                             */
/*                                                                            */
/* ************************************************************************** */
/**
 * Created by saber on 16/1/14.
 */
import React from 'react-native';
import Swiper from 'react-native-swiper';
const { Component, View, Text, StyleSheet, Image } = React;
class Phone extends Component {
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
        <Image source={{uri: 'http://i.imgur.com/rVekwfn.jpg'}}>
          <Swiper style={styles.wrapper}
                  dot={<View style={{backgroundColor:'rgba(255,255,255,.3)', width: 13, height: 13,borderRadius: 7, marginLeft: 7, marginRight: 7,}} />}
                  activeDot={<View style={{backgroundColor: '#fff', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
                  paginationStyle={{
              bottom: 70,
            }}
                  loop={true} autoplay={true} >
            <View style={styles.slide}>
              <Image style={styles.image} source={{uri: 'http://i.imgur.com/u3kXqo7.png'}} />
            </View>
            <View style={styles.slide}>
              <Image style={styles.image} source={{uri: 'http://i.imgur.com/3Z4nQyb.png'}} />
            </View>
            <View style={styles.slide}>
              <Image style={styles.image} source={{uri: 'http://i.imgur.com/5Wa3Iyb.png'}} />
            </View>
          </Swiper>
        </Image>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  wrapper: {
    // backgroundColor: '#f00',
  },
  slide: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  image: {
    flex: 1,
  }
})

export default Phone;
