import React, { Component } from 'react'
import { ItemForSearch } from './SearchStyled' 

class SearchItem extends Component {
    renderItem () {
        return this.props.items.map(( item, index ) => (
            <div
                key = { index }
            >
                <a>{ item.text }</a>
            </div>
        ))
    }
    render () {
        return (
            <ItemForSearch hot = {this.props.hot}>
                <p>{ this.props.children }</p>
                <div>
                    { this.renderItem() }
                </div>
            </ItemForSearch>
        )
    }
}

export default SearchItem
