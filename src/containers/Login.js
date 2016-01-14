/* ************************************************************************** */
/*                                                                            */
/* 每位工程师都有保持代码优雅和整洁的义务                                             */
/*                                                                            */
/* ************************************************************************** */
/**
 * Created by saber on 16/1/2.
 */
import React from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux/native';
import Header from '../components/Header';
import LoginForm from '../components/LoginForm';
import FormButton from '../components/FormButton';
import * as authActions from '../reducers/auth/authActions';
import { Map } from 'immutable';

const { Component, View, Text, StyleSheet} = React;

const actions = [
    authActions
]
function mapStateToProps(state) {
  return {
      ...state
  };
}

function mapDispatchToProps(dispatch) {
  const creators = Map()
          .merge(...actions)
          .filter(value => typeof value === 'function')
          .toObject();

  return {
    actions: bindActionCreators(creators, dispatch),
    dispatch
  };
}
class Login extends Component {
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
    console.log(this.props.auth);
    return (
        <View style={styles.container}>
          <View>
            <Header />
            <View style={styles.inputs}>
              <LoginForm />
            </View>
            <FormButton buttonText={'register'}>

            </FormButton>
            <View>
              <View style={styles.forgotContainer}>
                <Text>
                  sss
                </Text>
              </View>
            </View>
          </View>
        </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex : 1,
    flexDirection: 'column'
  },
  inputs: {
    margin: 10
  },
  forgotContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
