import React, { Component } from 'react'
import { ListForGoods } from '@c/Goods/GoodsStyled'
import GoodsItem from './GoodsItem'
import axios from 'axios'

class GoodsList extends Component {
    state = {
        items:[]
    }
    componentDidMount () {
        axios.get('https://webservice.juanpi.com/api/getIndexNavSkip?page=1&zy_ids=p8_c4_l4&app_name=zhe&catname=newest_zhe')
            .then( res => {
                this.setState({
                    items: res.data.GoodsRes.goods
                })
            })
    }
    renderGoods () {
        return this.state.items.map(item =>(
            <GoodsItem key = { item.goods_id } item = { item } />
        ))
    }
    render() {
        return (
            <ListForGoods>
                { this.renderGoods() }
            </ListForGoods>
        )
    }
}


export default GoodsList