import React, { Component } from 'react'
import { TopForPersonage } from './CommonStyled'

class PageTop extends Component { 
    render () {
        return (
            <TopForPersonage>
                <a className = 'img'></a>
                <span>{ this.props.item.center}</span>
                <a>{ this.props.item.right }</a>
            </TopForPersonage>
        )
    }
}

export default PageTop