import React, { Component } from 'react'
import { ListForSearch } from './SearchStyled'
import SearchItem from './SearchItem'
import axios from 'axios'

class SearchList extends Component {
    state = {
        hotSearchItem : [],
        oldSearchItem : []
    }
    componentDidMount () {
        axios.get('/api/keywords/search?plateform=m&zy_ids=c4_l4&item=')
            .then( res => {
                this.setState({
                    hotSearchItem: res.data.jump_keywords
                })
            })
    }
    render () {
        return (
            <ListForSearch>
                <SearchItem items = {this.state.hotSearchItem}  hot = {true} >热搜</SearchItem>
            </ListForSearch>
        )
    }
}

export default SearchList