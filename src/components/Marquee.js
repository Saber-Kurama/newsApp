/* ************************************************************************** */
/*                                                                            */
/* 每位工程师都有保持代码优雅和整洁的义务                                             */
/*                                                                            */
/* ************************************************************************** */
/**
 * Created by saber on 16/1/26.
 */
import React from 'react-native';
const { Component, View, Text, Animated, Easing, StyleSheet } = React;
const datasource = [
  {
    id: 1
  },
  {
    id: 2
  },
  {
    id: 3
  },
  {
    id: 4
  },
  {
    id: 5
  },
  {
    id: 6
  },
  {
    id: 7
  },
  {
    id: 8
  },
  {
    id: 9
  },
  {
    id: 10
  },
  {
    id: 11
    
  },
  {
    id: 12
  },
  {
    id: 13
  },
  {
    id: 14
  },
  {
    id: 15
  },
  {
    id: 16
  }
];
class Marquee extends Component {
  // 默认属性
  static defaultProps = {};
  // 属性类型
  static propTypes = {};
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      repeatItemNum: 0,
      marginAnim: new Animated.Value(0)
    };
    this.itemsLength = datasource.length;
  }
  
  // 是否循环运动
  isloop = false;
  
  // 分界点
  divideNum = 0;
  // 自定义方法
  layout(e) {
    console.log(e.nativeEvent.layout);
    let height = e.nativeEvent.layout.height - 20;
    // 获取需要重复的条数
    let repeatItemNum = Math.ceil((height / 20));
    // 获取是否滚动的界点
    this.divideNum = Math.floor((height / 20));
    // 如果重复数据发生改变,并且数据条数大于临界点条数
    if((this.state.repeatItemNum !== repeatItemNum) 
      && (this.divideNum < this.itemsLength)){
      this.isloop = true;
      // 重置条数
      this.setState({repeatItemNum: repeatItemNum});
      // 启动动画
      Animated.timing(          // Uses easing functions
        this.state.marginAnim,    // The value to drive
        {
          toValue: -(this.itemsLength * 20),
          duration: this.itemsLength * 600,
          easing: Easing.linear
        }          // Configuration
      ).start();
      
    }
  }
  
  componentDidMount() {
    console.log(this.repetItemNum);
    let self = this;
    this.state.marginAnim.addListener(event => {
      
      //console.log('-------' + event.value);
      if(event.value == -(self.itemsLength * 20)){
        // 当滚动到最后一条的时候,迅速滚动到初始位置
        Animated.timing(          // Uses easing functions
          self.state.marginAnim,    // The value to drive
          {
            toValue: 0,
            duration: 0,
            easing: Easing.linear
          }          // Configuration
        ).start(); 
      }
      if(event.value == 0 && self.isloop) {
        // 启动动画
        Animated.timing(          // Uses easing functions
          self.state.marginAnim,    // The value to drive
          {
            toValue: -(self.itemsLength * 20),
            duration: self.itemsLength * 600,
            easing: Easing.linear
          }          // Configuration
        ).start();
      }
    });
  }
  
  componentWillUnmount(){
    
  }
  
  stopAnimation() {
    this.state.marginAnim.removeAllListeners();
    this.isloop = false;
    this.state.marginAnim.stopAnimation((value) => {

    });
  }
  renderList() {
    let newdata = [];
    let rederdata = [];
    console.log(this.isloop + '----------' + this.state.repeatItemNum);
    if(this.isloop && this.state.repeatItemNum){
      var repeatdata= datasource.slice(0, this.state.repeatItemNum);
      newdata = datasource.concat(repeatdata);
    }else{
      newdata = datasource;
    }
    
    rederdata = newdata.map((value, index) => {
      return (
        <Text style={styles.text} key={index}>
          Marquee{value.id}
        </Text>
      );
    });
    return rederdata;
  }
  // 渲染
  render() {
    console.log('????sdsdfsfd');
    let listdom = this.renderList();
    return (
      <View style={{margin:10, flex: 1, overflow: 'hidden'}} onLayout={this.layout.bind(this)}>
        <Animated.View  style={{ marginTop: this.state.marginAnim}}>
          {listdom}
        </Animated.View>
      </View>
    );
  }
};
let styles = StyleSheet.create({
  text: {
    lineHeight: 20
  }
});
export default Marquee;
