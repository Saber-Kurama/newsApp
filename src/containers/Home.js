/* ************************************************************************** */
/*                                                                            */
/* 每位工程师都有保持代码优雅和整洁的义务                                             */
/*                                                                            */
/* ************************************************************************** */
/**
 * Created by saber on 16/1/14.
 */
import React from 'react-native';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux/native';
import { Map } from 'immutable';
import Swiper from '../components/ReactNativeSwiper';
import Grid from '../components/Grid';
import News from './News';
import Login from './Login';
import * as authActions from '../reducers/auth/authActions';
const { Component, View, Text, StyleSheet, Image, TouchableOpacity } = React;
const actions = [
  authActions
];
// 默认数据  (后面使用es7的装饰)
let mapStateToProps = (state) => {
  return {
    ...state
  }
};

let mapDispatchToProps = (dispatch) => {
  const creators = Map()
    .merge(...actions)
    .filter(value => typeof value === 'function')
    .toObject();
  return {
    actions: bindActionCreators(creators, dispatch),
    dispatch
  };
};
const mockData = [
  {
    name: '行业快讯',
    icon: require('../../assets/icons/IndustryNews.png'),
    route: 'news'
  },
  {
    name: '排行榜',
    icon: require('../../assets/icons/RankingList.png'),
    route: 'leaderBoard'
  },
  {
    name: '我的业绩',
    icon: require('../../assets/icons/MyPerformance.png'),
    route: 'performance'
  },
  {
    name: '财富消息',
    icon: require('../../assets/icons/WealthNews.png'),
    route: 'message',
    badge: true
  },
  {
    name: '信息反馈',
    icon: require('../../assets/icons/Feedback.png'),
    route: 'feedback'
  },
  {
    name: '个人信息',
    icon: require('../../assets/icons/Profile.png'),
    route: 'profile'
  },
];
class Home extends Component {
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

  gridData() {
    const { actions } = this.props;
    return mockData.map(item => {
      return (
        <View>
          <TouchableOpacity onPress={this.gonews.bind(this)}>
          <Image source={item.icon}>
            { item.badge && (<View style={styles.badge}/>) }
          </Image>
          <Text style={{marginTop: 10}}>
            {item.name}
          </Text>
          </TouchableOpacity>
        </View>
      );
    });
  }

  gonews() {
    
    const { navigator, actions } = this.props;
    //或者写成 const navigator = this.props.navigator;
    //为什么这里可以取得 props.navigator?请看上文:
    //<Component {...route.params} navigator={navigator} />
    //这里传递了navigator作为props
    if(navigator) {
      actions.getSessionToken();
      navigator.push({
        name: 'SecondPageComponent',
        component: News
      });
    }
  }
  // 渲染
  render() {
    return (
      <View style={{flex: 1}}>
        <Swiper style={styles.wrapper} height={240}

                dot={<View style={{backgroundColor:'rgba(255,255,255,.3)', width: 13, height: 13,borderRadius: 7, marginLeft: 7, marginRight: 7,}} />}
                activeDot={<View style={{backgroundColor: '#fff', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
                paginationStyle={{
              bottom: 10,
            }}
                loop={true} autoplay={true}>
          <View style={styles.slide}  >
            
            <Image style={styles.image}
                   source={{uri: 'http://c.hiphotos.baidu.com/image/w%3D310/sign=0dff10a81c30e924cfa49a307c096e66/7acb0a46f21fbe096194ceb468600c338644ad43.jpg'}}/>
            
          </View>
          <View style={styles.slide}>
            <Image style={styles.image}
                   source={{uri: 'http://a.hiphotos.baidu.com/image/w%3D310/sign=4459912736a85edffa8cf822795509d8/bba1cd11728b4710417a05bbc1cec3fdfc032374.jpg'}}/>
          </View>
          <View style={styles.slide}>
            <Image style={styles.image}
                   source={{uri: 'http://e.hiphotos.baidu.com/image/w%3D310/sign=9a8b4d497ed98d1076d40a30113eb807/0823dd54564e9258655f5d5b9e82d158ccbf4e18.jpg'}}/>
          </View>
          <View style={styles.slide}>
            <Image style={styles.image}
                   source={{uri: 'http://e.hiphotos.baidu.com/image/w%3D310/sign=2da0245f79ec54e741ec1c1f89399bfd/9d82d158ccbf6c818c958589be3eb13533fa4034.jpg'}}/>
          </View>
        </Swiper>
        <Grid column={2} gridLine={true} gridData={this.gridData()}
              scroll={false}/>
      </View>
    );
  }
}
var styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  image: {
    flex: 1,
  },
  badge: {
    borderRadius: 5,
    borderWidth: 0,
    width: 10,
    height: 10,
    backgroundColor: '#dd2b37',
    position: 'absolute',
    top: 0,
    right: 0
  },
  button: {flex: 1, marginBottom: 0, borderWidth: 0}
})
//export default Home;
export default connect(mapStateToProps, mapDispatchToProps)(Home);
