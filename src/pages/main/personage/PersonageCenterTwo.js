import React, { Component } from 'react'
import { CenterTwoForPersonage, AForCenterTwo } from './PersonageStyle'

class PersonageCenterTwo extends Component {
    state = {
        aitems: [
            { id: 1, title: '待付款', icon: 'icon-daifukuan' },
            { id: 2, title: '待成团', icon: 'icon-daichengtuan' },
            { id: 3, title: '待收货', icon: 'icon-daishouhuo' },
            { id: 4, title: '退款/售后', icon: 'icon-tuikuan'}
        ]
    }
    renderItems () {
        return this.state.aitems.map(item => (
            <AForCenterTwo key = {item.id} >
                <i className = {`iconfont ${ item.icon }`}></i>
                <span>{ item.title }</span>
            </AForCenterTwo>
        ))
    }
    render () {
        return (
            <CenterTwoForPersonage>
                { this.renderItems() }
            </CenterTwoForPersonage>
        )
    }
}

export default PersonageCenterTwo
