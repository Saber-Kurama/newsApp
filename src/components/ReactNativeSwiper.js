/* ************************************************************************** */
/*                                                                            */
/* 每位工程师都有保持代码优雅和整洁的义务                                             */
/*                                                                            */
/* ************************************************************************** */
/**
 * Created by saber on 16/1/21.
 */
/**
 * react-native-swiper
 * @author leecade<leecade@163.com>
 */
import React, {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  ViewPagerAndroid,
  Platform
} from 'react-native'

// Using bare setTimeout, setInterval, setImmediate
// and requestAnimationFrame calls is very dangerous
// because if you forget to cancel the request before
// the component is unmounted, you risk the callback
// throwing an exception.
import TimerMixin from 'react-timer-mixin'

let { width, height } = Dimensions.get('window')

/**
 * Default style
 * 默认样式
 * @type {StyleSheetPropType}
 */
let styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    position: 'relative',
  },

  wrapper: {
    backgroundColor: 'transparent',
  },

  slide: {
    backgroundColor: 'transparent',
  },

  pagination_x: {
    position: 'absolute',
    bottom: 25,
    left: 0,
    right: 0,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'transparent',
  },

  pagination_y: {
    position: 'absolute',
    right: 15,
    top: 0,
    bottom: 0,
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'transparent',
  },

  title: {
    height: 30,
    justifyContent: 'center',
    position: 'absolute',
    paddingLeft: 10,
    bottom: -30,
    left: 0,
    flexWrap: 'nowrap',
    width: 250,
    backgroundColor: 'transparent',
  },

  buttonWrapper: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    left: 0,
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  buttonText: {
    fontSize: 50,
    color: '#007aff',
    fontFamily: 'Arial',
  },
})

// missing `module.exports = exports['default'];` with babel6
// export default React.createClass({
module.exports = React.createClass({

  /**
   * Props Validation
   * @type {Object}
   */
  propTypes: {
    horizontal                       : React.PropTypes.bool,
    children                         : React.PropTypes.node.isRequired,
    style                            : View.propTypes.style,
    pagingEnabled                    : React.PropTypes.bool,
    showsHorizontalScrollIndicator   : React.PropTypes.bool,
    showsVerticalScrollIndicator     : React.PropTypes.bool,
    bounces                          : React.PropTypes.bool,
    scrollsToTop                     : React.PropTypes.bool,
    removeClippedSubviews            : React.PropTypes.bool,
    automaticallyAdjustContentInsets : React.PropTypes.bool,
    showsPagination                  : React.PropTypes.bool,
    showsButtons                     : React.PropTypes.bool,
    loop                             : React.PropTypes.bool,
    autoplay                         : React.PropTypes.bool,
    autoplayTimeout                  : React.PropTypes.number,
    autoplayDirection                : React.PropTypes.bool,
    index                            : React.PropTypes.number,
    renderPagination                 : React.PropTypes.func,
  },

  mixins: [TimerMixin],

  /**
   * Default props
   * @return {object} props
   * @see http://facebook.github.io/react-native/docs/scrollview.html
   */
  getDefaultProps() {
    return {
      horizontal                       : true, // 是否水平
      pagingEnabled                    : true, // 滚动条的位置 是否整数(ios)
      showsHorizontalScrollIndicator   : false,// 显示水平滚动条
      showsVerticalScrollIndicator     : false,//显示垂直滚动条
      bounces                          : false, //(ios)当值为true时，如果内容范围比滚动视图本身大，在到达内容末尾的时候，可以弹性地拉动一截(ios) 
      scrollsToTop                     : false, //点击状态栏的时候视图会滚动到顶部(ios)
      removeClippedSubviews            : true, //当此属性为true时，屏幕之外的子视图（子视图的overflow样式需要设为hidden）会被移除。这个可以提升大列表的滚动性能。
      automaticallyAdjustContentInsets : false, //(ios) 自动调整
      showsPagination                  : true, //显示分页
      showsButtons                     : false,// 显示按钮
      loop                             : true, //循环
      autoplay                         : false,//自动播放
      autoplayTimeout                  : 2.5, //自动播放时间
      autoplayDirection                : true,
      index                            : 0,
    }
  },

  /**
   * Init states
   * @return {object} states
   */
  getInitialState() {
    return this.initState(this.props)
  },

  /**
   * autoplay timer
   * @type {null}
   */
  autoplayTimer: null,
   
  //
  componentWillMount() {
    this.props = this.injectState(this.props)
  },

  componentWillReceiveProps(props) {
    this.setState(this.initState(props))
  },

  componentDidMount() {
    this.autoplay()
  },
  
  // 初始化state
  initState(props) {
    let initState = {
      isScrolling: false, // 是否正在滚动
      autoplayEnd: false, // 自动播放结束
    };
    // 总数
    initState.total = props.children ? props.children.length || 1 : 0;
    // 当前的index
    initState.index = initState.total > 1 ? Math.min(props.index, initState.total - 1) : 0;

    // Default: horizontal
    //  滚动的方向
    initState.dir = props.horizontal == false ? 'y' : 'x';
    initState.width = props.width || width;
    initState.height = props.height || height;
    // 偏移量
    initState.offset = {};
    // 当children > 1 的时候
    if (initState.total > 1) {
      // ??? 这句话 不太明白
      var setup = props.loop ? 1 : initState.index;
      initState.offset[initState.dir] = initState.dir == 'y'
        ? initState.height * setup
        : initState.width * setup
    }
    return initState
  },

  /**
   * Automatic rolling
   */
  autoplay() {
    if(!Array.isArray(this.props.children)
      || !this.props.autoplay
      || this.state.isScrolling
      || this.state.autoplayEnd) return;

    clearTimeout(this.autoplayTimer);

    this.autoplayTimer = this.setTimeout(() => {
      if(!this.props.loop && (this.props.autoplayDirection
          ? this.state.index == this.state.total - 1
          : this.state.index == 0)) return this.setState({
        autoplayEnd: true
      });
      this.scrollTo(this.props.autoplayDirection ? 1 : -1)
    }, this.props.autoplayTimeout * 1000)
  },

  /**
   * Scroll begin handle
   * @param  {object} e native event
   */
  onScrollBegin(e) {
    // update scroll state
    this.setState({
      isScrolling: true
    });

    this.setTimeout(() => {
      this.props.onScrollBeginDrag && this.props.onScrollBeginDrag(e, this.state, this)
    })
  },

  /**
   * Scroll end handle
   * @param  {object} e native event
   */
  onScrollEnd(e) {

    // update scroll state
    this.setState({
      isScrolling: false
    });
    this.updateIndex(e.nativeEvent.contentOffset, this.state.dir);

    // Note: `this.setState` is async, so I call the `onMomentumScrollEnd`
    // in setTimeout to ensure synchronous update `index`
    this.setTimeout(() => {
      this.autoplay();

      // if `onMomentumScrollEnd` registered will be called here
      this.props.onMomentumScrollEnd && this.props.onMomentumScrollEnd(e, this.state, this)
    })
  },
  num: 0,
  onPageScrollFn(e){
    
    if(e.nativeEvent.offset > 0){
      this.setState({
        isScrolling: true
      });
    }else{
      this.setState({
        isScrolling: false
      });
      if(this.num > 0 ){
        this.updateAndroidIndex(e.nativeEvent.position);
        this.setTimeout(() => {
          this.autoplay();
        });
      }
      this.num  ++;
    }
    
  },
  onPageSelectedFn(e) {
    this.setState({
      isScrolling: false
    });
    
    this.setTimeout(() => {
        //this.updateAndroidIndex(e.nativeEvent.position);
        //this.autoplay();
    });
  },
  updateAndroidIndex(position) {
    let index = position;
    if(this.props.loop) {
      index = position -1;
      if(index <= -1) {
        index = this.state.total - 1;
      }
      else if(index >= this.state.total ) {
        //if(diff > this.state.total) {
          this.refs.scrollView.setPageWithoutAnimation(1);
        //}
        index = 0;
      }
    }

    this.setState({
      index: index
    })
  },
    /**
   * Update index after scroll
   * @param  {object} offset content offset
   * @param  {string} dir    'x' || 'y'
   */
  updateIndex(offset, dir) {
    let state = this.state
    let index = state.index
    let diff = offset[dir] - state.offset[dir]
    let step = dir == 'x' ? state.width : state.height

    // Do nothing if offset no change.
    if(!diff) return

    // Note: if touch very very quickly and continuous,
    // the variation of `index` more than 1.
    index = index + diff / step

    if(this.props.loop) {
      if(index <= -1) {
        index = state.total - 1
        offset[dir] = step * state.total
      }
      else if(index >= state.total) {
        index = 0
        offset[dir] = step
      }
    }

    this.setState({
      index: index,
      offset: offset,
    })
  },

  /**
   * Scroll by index
   * @param  {number} index offset index
   */
  scrollTo(index) {
    if (this.state.isScrolling || this.state.total < 2) return;
    let state = this.state;
    let diff = (this.props.loop ? 1 : 0) + index + this.state.index;
    let x = 0;
    let y = 0;
    if(state.dir == 'x') x = diff * state.width;
    if(state.dir == 'y') y = diff * state.height;
    
    this.refs.scrollView && this.refs.scrollView.scrollTo && this.refs.scrollView.scrollTo(y, x);
    this.refs.scrollView.setPage && this.refs.scrollView.setPage &&
    this.refs.scrollView.setPage(diff);
    // update scroll state
    this.setState({
      isScrolling: true,
      autoplayEnd: false,
    })
  },

  /**
   * Render pagination
   * 渲染分页
   * @return {object} react-dom
   */
  renderPagination() {

    // By default, dots only show when `total` > 2
    if(this.state.total <= 1) return null;

    let dots = [];
    let ActiveDot = this.props.activeDot || <View style={{
            backgroundColor: '#007aff',
            width: 8,
            height: 8,
            borderRadius: 4,
            marginLeft: 3,
            marginRight: 3,
            marginTop: 3,
            marginBottom: 3,
          }} />;
    let Dot = this.props.dot || <View style={{
            backgroundColor:'rgba(0,0,0,.2)',
            width: 8,
            height: 8,
            borderRadius: 4,
            marginLeft: 3,
            marginRight: 3,
            marginTop: 3,
            marginBottom: 3,
          }} />;
    for(let i = 0; i < this.state.total; i++) {
      dots.push(i === this.state.index
        ?
        React.cloneElement(ActiveDot, {key: i})
        :
        React.cloneElement(Dot, {key: i})
      )
    }

    return (
      <View pointerEvents='none' style={[styles['pagination_' + this.state.dir], this.props.paginationStyle]}>
        {dots}
      </View>
    )
  },
  /**
   * 渲染标题
   * @returns {*}
   */
  renderTitle() {
    let child = this.props.children[this.state.index]
    let title = child && child.props.title
    return title
      ? (
      <View style={styles.title}>
        {this.props.children[this.state.index].props.title}
      </View>
    )
      : null
  },

  renderNextButton() {
    let button;

    if (this.props.loop || this.state.index != this.state.total - 1) {
      button = this.props.nextButton || <Text style={styles.buttonText}>›</Text>
    }

    return (
      <TouchableOpacity onPress={() => button !== null && this.scrollTo.call(this, 1)}>
        <View>
          {button}
        </View>
      </TouchableOpacity>
    )
  },

  renderPrevButton() {
    let button = null

    if (this.props.loop || this.state.index != 0) {
      button = this.props.prevButton || <Text style={styles.buttonText}>‹</Text>
    }

    return (
      <TouchableOpacity onPress={() => button !== null && this.scrollTo.call(this, -1)}>
        <View>
          {button}
        </View>
      </TouchableOpacity>
    )
  },

  renderButtons() {
    return (
      <View pointerEvents='box-none' style={[styles.buttonWrapper, {width: this.state.width, height: this.state.height}, this.props.buttonWrapperStyle]}>
        {this.renderPrevButton()}
        {this.renderNextButton()}
      </View>
    )
  },
  
  // 渲染 ScrollView
  renderScrollView(pages) {
    // ios 下
    // contentContainerStyle  这些样式会应用到一个内层的内容容器上，所有的子视图都会包裹在内容容器内
    // contentOffset 手动初始化滚动坐标 (ios)
    
    if (Platform.OS === 'ios') {
      return (
        <ScrollView ref="scrollView"
          {...this.props}
                    contentContainerStyle={[styles.wrapper, this.props.style]}
                    contentOffset={this.state.offset}
                    onScrollBeginDrag={this.onScrollBegin}
                    onMomentumScrollEnd={this.onScrollEnd}>
          {pages}
        </ScrollView>
      );
    }
    // android 
    return (
      <ViewPagerAndroid ref="scrollView"
                        style={{flex: 1}}
                        initialPage = {this.state.index + 1}
                        onPageSelected = {this.onPageSelectedFn}
                        onPageScroll = {this.onPageScrollFn}
        >
        {pages}
      </ViewPagerAndroid>
    );
  },
  /**
   * Inject state to ScrollResponder
   *  注入 state  和 this
   * @param  {object} props origin props
   * @return {object} props injected props
   */
  injectState(props) {
    /*    const scrollResponders = [
     'onMomentumScrollBegin',
     'onTouchStartCapture',
     'onTouchStart',
     'onTouchEnd',
     'onResponderRelease',
     ]*/

    for(let prop in props) {
      // if(~scrollResponders.indexOf(prop)
      if(typeof props[prop] === 'function'
        && prop !== 'onMomentumScrollEnd'
        && prop !== 'renderPagination'
        && prop !== 'onScrollBeginDrag'
      ) {
        let originResponder = props[prop];
        props[prop] = (e) => originResponder(e, this.state, this);
      }
    }

    return props
  },

  /**
   * Default render 
   *  
   * @return {object} react-dom
   */
  render() {
    let state = this.state;
    let props = this.props;
    let children = props.children;
    let index = state.index;
    let total = state.total;
    let loop = props.loop;
    let dir = state.dir;
    let key = 0;

    let pages = [];
    // 每页的样式
    let pageStyle = [{width: state.width, height: state.height}, styles.slide];

    // For make infinite at least total > 1
    if(total > 1) {

      // Re-design a loop model for avoid img flickering
      // 为避免图像闪烁循环模式
      pages = Object.keys(children);
      // 循环模式下头部添加一个结尾,尾部添加一个头
      if(loop) {
        pages.unshift(total - 1);
        pages.push(0);
      }

      pages = pages.map((page, i) =>
        <View style={pageStyle} key={i}>{children[page]}</View>
      )
    }
    else pages = <View style={pageStyle}>{children}</View>
    return (
      <View style={[styles.container, {
        width: state.width,
        height: state.height
      }]}>
        {this.renderScrollView(pages)}
        {props.showsPagination && (props.renderPagination
          ? this.props.renderPagination(state.index, state.total, this)
          : this.renderPagination())}
        {this.renderTitle()}
        {this.props.showsButtons && this.renderButtons()}
      </View>
    )
  }
})
