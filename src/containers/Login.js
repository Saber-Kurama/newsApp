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
import t from 'tcomb-form-native';
import Header from '../components/Header';
import LoginForm from '../components/LoginForm';
import FormButton from '../components/FormButton';
import * as authActions from '../reducers/auth/authActions';
import { Map } from 'immutable';

let Form = t.form.Form;
const { Component, View, Text, StyleSheet, Image} = React;

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
  login() {
    let value = this.refs.form.getValue();
  }

  // 渲染
  render() {
    let username = {
      label: '用户名',
      maxLength: 12,
      //hasError: true,
      //help: '用户名必须是中文',
      error: '用户名格式准确'
    };
    let password = {
      label: '用户密码',
      maxLength: 12,
      secureTextEntry: true,
      //hasError:
      error: '密码必须是1——12位'
    }
    let options = {
      auto: 'placeholders',
      fields: {
        username: username,
        password: password
      }
    };
    let loginForm = t.struct({
      username: t.String,
      password: t.String
    });
    return (
        <View style={styles.container}>
          <View>
            <Image
              style={{alignSelf: 'center'}}
              source={require('../../assets/logo.png')}
            />
            <View style={styles.inputs}>
              <Form ref="form"
                    type={loginForm}
                    options={options}/>
            </View>
            <FormButton buttonText={'登录'} onPress={this.login.bind(this)}>

            </FormButton>
            
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
    margin: 20
  },
  forgotContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);

