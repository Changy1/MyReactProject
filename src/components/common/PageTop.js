import React, { Component, Fragment } from 'react'
import { TopForPersonage } from './CommonStyled'
import { withRouter } from 'react-router-dom'
import SearchImg from '@as/images/search.png'

class PageTop extends Component { 
    render () {
        return (
            <TopForPersonage detail = {this.props.item.detail}>
                <a onClick = {this.goback} className = 'img'></a>
                <span>{ this.props.item.center}</span>
                { this.props.item.detail ? 
                    (
                        <Fragment>
                            <img alt = '' src = {SearchImg}/>
                        </Fragment>
                    ) : (
                        <a>{ this.props.item.right }</a>
                    )
                }
            </TopForPersonage>
        )
    }
    goback = () => {
        this.props.history.go(-1)
    }
}

export default withRouter(PageTop)