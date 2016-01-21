/* ************************************************************************** */
/*                                                                            */
/* 每位工程师都有保持代码优雅和整洁的义务                                             */
/*                                                                            */
/* ************************************************************************** */
/**
 * Created by saber on 16/1/18.
 */
import React from 'react-native';
import Icon from 'react-native-vector-icons';
const { Component, View, Text, StyleSheet, TouchableOpacity, Animated } = React;
class FacebookTabBar extends Component {
  // 默认属性
  static defaultProps = {};
  // 属性类型
  static propTypes = {
    goToPage: React.PropTypes.func,
    activeTab: React.PropTypes.number,
    tabs: React.PropTypes.array
  };
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {};
  }
  selectedTabIcons = [];
  
  unselectedTabIcons = [];
  // 自定义方法
  renderTabOption(name, page) {
    let isTabActive = this.props.activeTab === page;
    console.log('iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii');
    return (
      <TouchableOpacity key={name} onPress={() => this.props.goToPage(page)} style={styles.tab}>
      </TouchableOpacity>
    );
  }

  componentDidMount() {
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
    this.setAnimationValue({value: this.props.activeTab});
    this._listener = this.props.scrollValue.addListener(this.setAnimationValue);
  }

  setAnimationValue({value}) {
    let currentPage = this.props.activeTab;

    this.unselectedTabIcons.forEach((icon, i) => {
      var iconRef = icon;

      if (!icon.setNativeProps && icon !== null) {
        iconRef = icon.refs.icon_image
      }

      if (value - i >= 0 && value - i <= 1) {
        iconRef.setNativeProps({opacity: value - i});
      }
      if (i - value >= 0 &&  i - value <= 1) {
        iconRef.setNativeProps({opacity: i - value});
      }
    });
  }

  // 渲染
  render() {
    let containerWidth = this.props.containerWidth;
    let numberOfTabs = this.props.tabs.length;
    let tabUnderlineStyle = {
      position: 'absolute',
      width: containerWidth / numberOfTabs,
      height: 3,
      backgroundColor: '#3b5998',
      bottom: 0,
    };

    let left = this.props.scrollValue.interpolate({
      inputRange: [0, 1], outputRange: [0, containerWidth / numberOfTabs]
    });
    return (
      <View>
        <View style={styles.tabs}>
          {this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}
        </View>
        <Animated.View style={[tabUnderlineStyle, {left}]} />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  tabs: {
    height: 45,
    flexDirection: 'row',
    paddingTop: 5,
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: 'rgba(0,0,0,0.05)',
  },
  icon: {
    width: 30,
    height: 30,
    position: 'absolute',
    top: 0,
    left: 20,
  },
});
export default FacebookTabBar;
