import React, { Component } from 'react'
import { RightForList, RightForItem } from './ClassifyStyled'
import { withRouter } from 'react-router-dom'

class ClassifyRightList extends Component {
    renderItem () {
        return this.props.items.map( item => (
            <RightForItem onClick = { () => { this.goDetail(item.id,item.name) }} key = { item.id }>
                <img alt= '' src = { `//s2.juancdn.com${ item.icon }` } />
                <span>{ item.name }</span>
                {
                    parseInt(item.icon_type) ? ( <div>HOT</div> ) : ''
                }
            </RightForItem>
        ))
    }
    goDetail (id,title) {
        this.props.history.push(`/detail?key=${id}&title=${title}`)
    }
    render () {
        return (
            <RightForList >
                { this.renderItem() }
            </RightForList>
        )
    }
}

export default withRouter(ClassifyRightList)