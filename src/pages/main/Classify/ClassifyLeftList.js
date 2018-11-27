import React, { Component } from 'react'
import { LeftForList, LeftForItem } from './ClassifyStyled'
import BScroll from 'better-scroll'

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
            <LeftForList ref = {el => this.el = el}>
                <div>
                    { this.renderItem() }
                </div>
            </LeftForList>
        )
    }
    componentDidMount () {
        new BScroll(this.el,{
            click: true
        })
    }
}

export default ClassifyLeftList