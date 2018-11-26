import React, { Component } from 'react'
import { LoginWrapper } from './LoginStyle'
import PageTop from '@c/common/PageTop'

class Login extends Component {
    render () {
        return (
            <LoginWrapper>
                <PageTop  item = {{ center: '登录', right: '注册'}} />
            </LoginWrapper>
        )
    }
}

export default Login