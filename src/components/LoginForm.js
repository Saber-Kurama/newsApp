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
import t from 'tcomb-form-native';
const { Component, View, Text } = React;
const Form = t.form.Form;
class LoginForm extends Component {
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
    let options = {
      auto: 'placeholders',
      fields: {

      }
    };
    let username = {
      label: 'Username',
      maxLength: 12,
      editable: true,
      hasError: false,
      error: 'Must have 6-12 characters and/or numbers'
    };
    let email = {
      label: 'Email',
      keyboardType: 'email-address',
      editable: true,
      hasError: false,
      error: 'Plase enter valid email'
    };
    let password = {
      label: 'Password',
      secureTextEntry: true,
      maxLength: 12,
      hasError: false,
      error: 'Must have 6-12 characters with at least 1 number and 1 special character'
    };
    let passwordAgain = {
      label:'Plase enter password again',
      secureTextEntry: true,
      maxLength: 12,
      hasError: false,
      error: 'Passwords must match'
    };
    let loginForm;
    loginForm = t.struct({
      username: t.String,
      email: t.String,
      password: t.String,
      passwordAgain: t.String
    });
    options.fields['username'] = username;
    options.fields['email'] = email;
    options.fields['password'] = password;
    options.fields['passwordAgain'] = passwordAgain;
    return (
       <Form ref="form"
             type={loginForm}
             options={options}>
       </Form>
    );
  }
}
export default LoginForm;
