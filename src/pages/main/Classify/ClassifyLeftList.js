import React, { Component } from 'react'
import { LeftForList, LeftForItem } from './ClassifyStyled'

class ClassifyLeftList extends Component {
    renderItem () {
        let { items, id, changeId } = this.props 
        return items.map( ( item, index ) => (
            <LeftForItem 
                key = { item.id } 
                active = { id === index ? true : false }
                onClick = { () => changeId( index ) }
            >
                { item.name }
            </LeftForItem>
        ))
    }
    render () {
        return (
            <LeftForList>
                { this.renderItem() }
            </LeftForList>
        )
    }
}

export default ClassifyLeftList