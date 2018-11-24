import React, { Component } from 'react'
import { NavForResult, NavItemForResult } from './ResultStyled'

class ResultNav extends Component {
    state = {
        navitems: [
            { id: 1, title: '推荐', src: '' },
            { id: 2, title: '价格', src: '' },
            { id: 3, title: '销量', src: '' },
            { id: 4, title: '上新', src: '' },
            { id: 5, title: '筛选', src: '' }
        ]
    }
    renderItem () {
        return this.state.navitems.map( item => (
            <NavItemForResult>
                <span>{ item.title }</span>
                <img src = ''/>
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

export default ResultNav