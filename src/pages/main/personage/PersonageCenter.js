import React, { Component } from 'react'
import { CenterForPersonage } from './PersonageStyle'
import PersonageCenterOne from './PersonageCenterOne'
import PersonageCenterTwo from './PersonageCenterTwo'

class PersonageCenter extends Component {
    state = {
        centerone: { left: '我的订单', right: '全部订单', margin: '' }
    }
    render () {
        return (
            <CenterForPersonage>
                <PersonageCenterOne item = {this.state.centerone} />
                <PersonageCenterTwo />
            </CenterForPersonage>
        )
    }
}

export default PersonageCenter