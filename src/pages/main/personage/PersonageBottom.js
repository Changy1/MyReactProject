import React, { Component } from 'react'
import { BottomForPersonage } from './PersonageStyle'
import PersonageCenterOne from './PersonageCenterOne'

class PersonageBottom extends Component {
    state = {
        oneitems: [
            { id: 1, left: '我的优惠券', right: '', margin: ''},
            { id: 2, left: '我的收藏', right: '', margin: ''},
            { id: 3, left: '我的拼团', right: '', margin: ''},
            { id: 4, left: '我的免单券', right: '0张', margin: ''},
            { id: 5, left: '借钱', right: '新用户免费领1000元', margin: ''},
            { id: 6, left: '余额', right: '0.00元', margin: ''},
            { id: 7, left: '客服中心', right: '', margin: '20px'},
            { id: 8, left: '关于卷皮', right: '', margin: ''},
        ]
    }
    renderOne () {
        return this.state.oneitems.map( item => (
            <PersonageCenterOne key = {item.id} item = {item} />          
        ))
    }
    render () {
        return (
            <BottomForPersonage>
                { this.renderOne() }
            </BottomForPersonage>
        )
    }
}

export default PersonageBottom