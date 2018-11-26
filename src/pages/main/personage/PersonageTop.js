import React, { Component } from 'react'
import { TopForPersonage } from './PersonageStyle'

class PersonageTop extends Component { 
    render () {
        return (
            <TopForPersonage>
                <a className = 'img'></a>
                <span>个人中心</span>
                <a>退出</a>
            </TopForPersonage>
        )
    }
}

export default PersonageTop