import React, { Component, Fragment } from 'react'
import { ListForResult, TopForResult } from './ResultStyled'
import GoodsItem from '@c/Goods/GoodsItem'
import axios from 'axios'
import connect from '@connect'
import BetterScroll from 'better-scroll'
import { Toast } from 'antd-mobile'

class ResultList extends Component {
    constructor (props) {
        super(props)
        this.state = {
            items: [],
            page: 1,
            isShow: false
        }
        this.changeItems = this.changeItems.bind(this)
        this.backTop = this.backTop.bind(this)
        this.props.param_actions.changeSearchSort({ order: '', sort: ''})
    }
    changeItems(props) {
        // 这里是排序的时候拿到store里面的参数
        let { search } = props.param
        axios.get(`api/search?keyword=${props.keystr}&item=&user_groupids=p8_c4_l4_222&page=${this.state.page}&is_ajax=1&order=${ search.order }&sort=${ search.sort }&cat_threeids=&price_range=&filter_id=`)    
            .then(res => {
                // 当这里请求到的数据为空的时候，res.data.data.list为undefined，undefined和数组也可以合并，所以循环的时候拿不到undefined的属性，直接报错了
                if ( !res.data.data.list ){
                    this.loadingToasttwo()
                    return false
                }
                this.setState({
                    // 将更新的和之前的合并
                    items: this.state.items.concat(res.data.data.list)
                },() => {
                    // 每次更新完items重新计算一次高度
                    this.scroll.refresh()
                })
            })
    }
    loadingToasttwo() {
        Toast.loading('正在加载...', 1, () => {
            Toast.offline('没有更多了', 1);
        });
    }
    // 第一次加载组件的时候调用这个钩子，只调用一次
    componentDidMount () {
        this.changeItems( this.props )
        this.scroll = new BetterScroll('.wrapper',{
            probeType: 2,
            pullUpLoad: {
                threshold: -20
            },
            click: true
        })
        // 上拉加载的方法
        this.scroll.on('pullingUp', async () => {
            this.loadingToast()
            this.state.page++
            await this.changeItems( this.props )
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
    backTop () {
        this.scroll.scrollTo( 0, 0, 500)
    }
    loadingToast() {
        Toast.loading('正在加载...', 1);
    }
    // 在搜索页面直接进行搜索的时候需要调用这个钩子
    componentWillReceiveProps (props) {
        // 这个方法会莫名其妙的执行，所以需要判断如果不是重新搜索或者是改变排序方法的话就不更新数据
        if(this.props.keystr != props.keystr || this.props.param.search.order != props.param.search.order || this.props.param.search.sort != props.param.search.sort){
            this.setState({
                items: []
            })
            this.changeItems( props )
        }
    }
    renderItem () {
        return this.state.items.map( item => (
            <GoodsItem key = { item.id } item = { item } />
        ))    
    }
    render () {
        return (
            <Fragment>
                <ListForResult className = 'wrapper'>
                    <div className = 'context'>
                        { this.renderItem() }
                    </div>
                </ListForResult>
                { this.state.isShow ? <TopForResult onClick = {this.backTop} className = 'goTop'></TopForResult> : ''}
            </Fragment>
        )
    }
}

export default connect(ResultList,[{name: 'param', state: ['search']}])