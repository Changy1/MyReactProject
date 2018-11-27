import React, { Component, Fragment } from 'react'
import { ListForDetail, TopForResult } from './DetailStyle'
import GoodsItem from '@c/Goods/GoodsItem'
import axios from 'axios'
import jsonp from 'jsonp'
import BScroll from 'better-scroll'
import { Toast } from 'antd-mobile'

class DetailList extends Component {
    constructor () {
        super() 
        this.state = {
            goodItem: [],
            detailKey: '',
            page: 1,
            isShow: false,
        }
        this.backTop = this.backTop.bind(this)
    }
    loadingToast() {
        Toast.loading('正在加载...', 1);
    }
    componentDidMount () {
        axios.get(`api/cate/subcatelist?cate_id=${this.props.detailkey}&pf=8&area=4&bi=222&source=null&front_cid=null`)
            .then(res => {
                // 这里是异步，所以下面不能直接在state上面取
                this.setState({
                    detailkey: res.data.key
                })
                this.gitItemJsonp( res.data.key, this.state.page )
            })
        this.scroll = new BScroll(this.el,{
            probeType: 2,
            click: true,
            pullUpLoad: {
                threshold: 50
            }
        })
        this.scroll.on('pullingUp', async() => {
            this.loadingToast()
            this.state.page++
            await this.gitItemJsonp( this.state.detailKey, this.state.page )
            this.scroll.finishPullUp()
            this.scroll.refresh()
        })
        this.scroll.on('scrollEnd',() => {
            if( this.scroll.y < -200 ) {
                this.setState({ isShow: true })
            } else {
                this.setState({ isShow: false })
            }
        })
    }
    gitItemJsonp (key, page) {
        jsonp(`https://shop.juanpi.com/gsort?key=${key}&type=50&zhouyi_ids=p8_c4_l4_0&machining=danpin&page=${page}&rows=10&dtype=JSONP&price_range=&cat_threeids=&filter_id=&callback=gsort_callback`,(err, data) => {
            this.setState({
                goodItem: this.state.goodItem.concat(data.list)
            })
        })
    }
    backTop () {
        this.scroll.scrollTo( 0, 0, 500 )
    }
    renderItem () {
        return this.state.goodItem.map( item => (
            <GoodsItem key = { item.goods_id} item = {item} />
        ))
    }
    render () {
        return (
            <Fragment>
                <ListForDetail ref = {el => this.el = el}>
                    <div className = 'context'>
                        { this.renderItem() }
                    </div>
                </ListForDetail>
                { this.state.isShow ? <TopForResult onClick = {this.backTop} className = 'goTop'></TopForResult> : ''}
            </Fragment>
        )
    }
}

export default DetailList