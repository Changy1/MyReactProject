import React, { Component } from 'react'
import { RightForList, RightForItem } from './ClassifyStyled'

class ClassifyRightList extends Component {
    renderItem () {
        return this.props.items.map( item => (
            <RightForItem key = { item.id }>
                <img alt= '' src = { `//s2.juancdn.com${ item.icon }` } />
                <span>{ item.name }</span>
                {
                    parseInt(item.icon_type) ? ( <div>HOT</div> ) : ''
                }
            </RightForItem>
        ))
    }
    render () {
        return (
            <RightForList>
                { this.renderItem() }
            </RightForList>
        )
    }
}

export default ClassifyRightList