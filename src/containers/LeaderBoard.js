/* ************************************************************************** */
/*                                                                            */
/* 每位工程师都有保持代码优雅和整洁的义务                                             */
/*                                                                            */
/* ************************************************************************** */
/**
 * Created by saber on 16/1/25.
 */
import React from 'react-native';
import NaviBar from '../components/NaviBar';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import CustomTabBar from '../components/CustomTabBar';
import Marquee from '../components/Marquee';
const { Component, View, Text, StyleSheet, ScrollView, TouchableOpacity } = React;
class LeaderBoard extends Component {
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
      this.refs.mymarqueen.stopAnimation();
      setTimeout(() => {
        navigator.pop();
      },300);
      //navigator.pop();
    }
  }

  componentDidMount() {
    console.log('<<<<PARE');
  }
  
  componentWillUnMount() {
    console.log('>>>>>PARENT');
  }
  // 渲染
  render() {
    return (
      <View style={styles.container}>
        <NaviBar  barTintColor="#D32F2F" tintColor="#fff" 
                  titleTextColor="#fff" title="排行榜" 
                  backFunc={this.navBarBackFn.bind(this)} ></NaviBar>
        <View style={{height: 350}}>
        <ScrollableTabView initialPage={0} renderTabBar={() => <CustomTabBar />}>
          <ScrollView tabLabel="日排行" style={styles.tabView}>
            <View style={styles.sortListView}>
              <View style={styles.sortListHeader}>
                <Text style={[styles.listHeaderText,{width:50}]}>
                  排名
                </Text>
                <Text style={[styles.listHeaderText,{flex:1}]}>
                  姓名
                </Text>
                <Text style={[styles.listHeaderText,{flex:1}]}>
                  有效投资人数
                </Text>
                <Text style={[styles.listHeaderText,{flex:1}]}>
                  新增投资人数
                </Text>
                <Text style={[styles.listHeaderText,{flex:1}]}>
                  总年化额
                </Text>
              </View>
              <View style={styles.sortRow}>
                <View style={styles.sortInRow}>
                  <Text style={styles.sortInRowText}>saber</Text>
                  <Text style={styles.sortInRowText}>saber</Text>
                  <Text style={styles.sortInRowText}>saber</Text>
                  <Text style={styles.sortInRowText}>saber</Text>
                </View>
                <View style={styles.indexLabel} >
                  <Text style={[styles.indexText]}>
                    1
                  </Text>
                </View>
              </View>
              <View style={styles.sortRow}>
                <View style={styles.sortInRow}>
                  <Text style={styles.sortInRowText}>saber</Text>
                  <Text style={styles.sortInRowText}>saber</Text>
                  <Text style={styles.sortInRowText}>saber</Text>
                  <Text style={styles.sortInRowText}>saber</Text>
                </View>
                <View style={styles.indexLabel} >
                  <Text style={[styles.indexText]}>
                    2
                  </Text>
                </View>
              </View>
              <View style={styles.sortRow}>
                <View style={styles.sortInRow}>
                  <Text style={styles.sortInRowText}>saber</Text>
                  <Text style={styles.sortInRowText}>saber</Text>
                  <Text style={styles.sortInRowText}>saber</Text>
                  <Text style={styles.sortInRowText}>saber</Text>
                </View>
                <View style={styles.indexLabel} >
                  <Text style={[styles.indexText]}>
                    3
                  </Text>
                </View>
              </View>
              <View style={styles.sortRow}>
                <View style={styles.sortInRow}>
                  <Text style={styles.sortInRowText}>saber</Text>
                  <Text style={styles.sortInRowText}>saber</Text>
                  <Text style={styles.sortInRowText}>saber</Text>
                  <Text style={styles.sortInRowText}>saber</Text>
                </View>
                <View style={styles.indexLabel} >
                  <Text style={[styles.indexText]}>
                    3
                  </Text>
                </View>
              </View>
              <View style={styles.sortRow}>
                <View style={styles.sortInRow}>
                  <Text style={styles.sortInRowText}>saber</Text>
                  <Text style={styles.sortInRowText}>saber</Text>
                  <Text style={styles.sortInRowText}>saber</Text>
                  <Text style={styles.sortInRowText}>saber</Text>
                </View>
                <View style={styles.indexLabel} >
                  <Text style={[styles.indexText]}>
                    3
                  </Text>
                </View>
              </View>
              <View style={styles.sortRow}>
                <View style={styles.sortInRow}>
                  <Text style={styles.sortInRowText}>saber</Text>
                  <Text style={styles.sortInRowText}>saber</Text>
                  <Text style={styles.sortInRowText}>saber</Text>
                  <Text style={styles.sortInRowText}>saber</Text>
                </View>
                <View style={styles.indexLabel} >
                  <Text style={[styles.indexText]}>
                    3
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>
          <ScrollView tabLabel="月排行" style={styles.tabView}>
            <View style={styles.card}>
              <Text>Friends</Text>
            </View>
          </ScrollView>
          <ScrollView tabLabel="年排行" style={styles.tabView}>
            <View style={styles.card}>
              <Text>Messenger</Text>
            </View>
          </ScrollView>
        </ScrollableTabView>
        
          </View >
          <View style={{flex: 1}}>
            <View style={[styles.dayViewHeader, {marginTop: 10}]}>
              <View style={styles.dayVHL}/>
              <Text style={styles.dayVHTitle}>当日大单</Text>
            </View>
            <Marquee ref="mymarqueen">

            </Marquee>
          
        </View>
      </View>
    );
  }
};
let styles = StyleSheet.create({
  container: {
    flex: 1
  },
  dayViewHeader: {
    paddingLeft: 10,
    flexDirection: 'row',
    height: 20,
    //marginVertical: 10
  },
  dayVHL: {
    width: 3,
    backgroundColor: 'red',
    //marginRight: 10,
  },
  dayVHTitle: {
    fontSize: 16,
    marginLeft: 2,
    marginBottom: 2
  },
  sortListView: {
    backgroundColor: 'blue',
    height: 320
  },
  sortListHeader: {
    height: 30,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 7
  },
  listHeaderText: {
    fontSize: 12,
    textAlign: 'center'
  },
  sortRow: {
    //borderColor: 'rgba(238,238,238,1)',
    //backgroundColor: 'rgba(238,238,238,1)',
    backgroundColor: 'transparent',
    //borderRadius: 5,
    height: 40,
    flexDirection: 'row',
    margin: 3,
    marginLeft: 10,
    marginRight: 10
  },
  indexLabel: {
    position: 'absolute',
    width: 40,
    height: 40,
    borderRadius: 20,
    //marginLeft: -20,
    left: 0,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#DE3641',
    backgroundColor: '#DE3641'
  },
  sortInRow: {
    borderColor: 'rgba(238,238,238,1)',
    backgroundColor: 'rgba(238,238,238,1)',
    borderRadius: 5,
    height: 40,
    marginLeft: 20,
    flexDirection: 'row',
    flex: 1,
    paddingLeft:20,
    paddingRight:3,
    alignItems: 'center',
    justifyContent: 'center'
    //margin: 3,
    //marginLeft: 10,
    //marginRight: 10
  },
  sortInRowText: {
    flex:1,
    textAlign: 'center'
  }
});
export default LeaderBoard;
