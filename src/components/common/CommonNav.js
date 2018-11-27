import React, { Component } from 'react'
import { NavForResult, NavItemForResult } from './CommonStyled'
import connect from '@connect'

class CommonNav extends Component {
    state = {
        navitems: [
            { id: 1, title: '推荐', has: false },
            { id: 2, title: '价格', has: true, price: 1 },
            { id: 3, title: '销量', has: false },
            { id: 4, title: '上新', has: false },
            { id: 5, title: '筛选', has: true, select: true }
        ],
        id: 1
    }
    renderItem () {
        return this.state.navitems.map( item => (
            <NavItemForResult 
                key = {item.id}
                active = { this.state.id === item.id } 
                price = {item.price} 
                select = {item.select} 
                onClick = {() => {
                    if ( !item.price ) {
                        this.state.navitems[1].price = 1
                        if( item.id === 1) {
                            this.props.param_actions.changeSearchSort({ order: '', sort: ''})
                        } else if ( item.id === 3 ) {
                            this.props.param_actions.changeSearchSort({ order: 'sales', sort: ''})
                        } else if ( item.id === 4 ) {
                            this.props.param_actions.changeSearchSort({ order: 'addtime', sort: ''})
                        }
                    }
                    else if ( item.price === 1 ) {
                        this.state.navitems[1].price = 2
                        this.props.param_actions.changeSearchSort({ order: 'cprice', sort: 'asc'})
                    } 
                    else if ( item.price === 2 ) {
                        this.state.navitems[1].price = 3
                        this.props.param_actions.changeSearchSort({ order: 'cprice', sort: 'desc'})
                    }
                    else if ( item.price === 3 ) {
                        this.state.navitems[1].price = 2
                        this.props.param_actions.changeSearchSort({ order: 'cprice', sort: 'asc'})
                    }
                    // 上边虽然改变但是不通知render，但每次都执行id变换所以有serState每次都去通知render就够了
                    this.setState({ id: item.id })
                }}
            >
                <span>{ item.title }</span>
                {
                    item.has ? <span className = 'img' /> : ''
                }
            </NavItemForResult>
        ))
    }
    render () {
        return (
            <NavForResult>
                { this.renderItem() }
            </NavForResult>
        )
    }
}

export default connect(CommonNav,[{name: 'param', state: ['search']}])