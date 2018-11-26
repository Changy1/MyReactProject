import React, { Component } from 'react'
import { HeaderForPersonage } from './PersonageStyle'
import PageTop from '@c/common/PageTop'
import PersonageMessage from './PersonageMessage'

class PersonageHeader extends Component {
    render () {
        return (
            <HeaderForPersonage>
                <PageTop item = {{ center: '个人中心', right: '退出'}}/>
                <PersonageMessage />
            </HeaderForPersonage>
        )
    }
}

export default PersonageHeader