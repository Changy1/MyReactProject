import React, { Component } from 'react'
import { ListForResult } from './ResultStyled'
import GoodsItem from '@c/Goods/GoodsItem'
import axios from 'axios'

class ResultList extends Component {
    constructor (props) {
        super(props)
        this.state = {
            items: []
        }
        this.changeItems = this.changeItems.bind(this)
    }
    changeItems(keystr) {
        axios.get(`api/search?keyword=${keystr}&item=&user_groupids=p8_c4_l4_222&page=1&is_ajax=1&order=&sort=&cat_threeids=&price_range=&filter_id=`)    
            .then(res => {
                this.setState({
                    items: res.data.data.list
                })
            })
    }
    // 第一次加载组件的时候调用这个钩子
    componentDidMount () {
        this.changeItems( this.props.keystr )
    }
    // 在搜索页面直接进行搜索的时候需要调用这个钩子
    componentWillReceiveProps (props) {
        this.changeItems( props.keystr )
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