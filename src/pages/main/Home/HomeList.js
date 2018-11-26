import React, { Component } from 'react'
import { ListForGoods } from './Styled'
import { Toast } from 'antd-mobile'
import GoodsItem from '@c/Goods/GoodsItem'
import axios from 'axios'

class HomeList extends Component {
    constructor () {
        super()
        this.state = {
            page: 1,
            items:[]
        }
        this.newItems = this.newItems.bind(this)
    }
    componentDidMount () {
        this.getItems ()
    }
    getItems () {
        axios.get(`https://webservice.juanpi.com/api/getIndexNavSkip?page=${this.state.page}&zy_ids=p8_c4_l4&app_name=zhe&catname=newest_zhe`)
            .then( res => {
                this.setState({
                    items: this.state.items.concat(res.data.GoodsRes.goods)
                })
            })
    }
    newItems () {
        this.loadingToast()
        // 这里有个异步问题还有就是不能把++写在后面，需要先提交一个set申请让他等于2，不然先提申请等于1 然后接着++等于2，接着又为1了
        this.setState({ page: ++this.state.page }, () => {
            this.getItems()
        })
    }
    renderGoods () {
        return this.state.items.map(item =>(
            <GoodsItem key = { item.goods_id } item = { item } />
        ))
    }
    loadingToast() {
        Toast.loading('正在加载...', 1);
    }
    render() {
        return (
            <ListForGoods>
                { this.renderGoods() }
                <div onClick = {this.newItems} className = 'many'>加载更多</div>
            </ListForGoods>
        )
    }
}


export default HomeList