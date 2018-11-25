import React, { Component } from 'react'
import { ListForResult } from './ResultStyled'
import GoodsItem from '@c/Goods/GoodsItem'
import axios from 'axios'

class ResultList extends Component {
    state = {
        items: []
    }
    componentDidMount () {
        axios.get('api/search?keyword=%E9%9E%8B%E5%AD%90&item=&user_groupids=p8_c4_l4_222&page=1&is_ajax=1&order=&sort=&cat_threeids=&price_range=&filter_id=')    
            .then(res => {
                console.log(res.data.data.list)
                this.setState({
                    items: res.data.data.list
                })
            })
    }
    renderItem () {
        return this.state.items.map( item => (
            <GoodsItem key = { item.id } item = { item } />
        ))    
    }
    render () {
        return (
            <ListForResult>
                { this.renderItem() }
            </ListForResult>
        )
    }
}

export default ResultList