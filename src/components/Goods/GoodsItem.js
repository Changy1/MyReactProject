import React, { Component, Fragment } from 'react'
import { ItemForGoods } from '@c/Goods/GoodsStyled'
import { withRouter } from 'react-router-dom'

class GoodsItem extends Component {
    goDetail = (item) => {
        let data = { title: '?1'}
        var path = {pathname:'/content' , query: data}
        this.props.history.push(path)
    }
    render () {
        console.log(this)
        let { item } = this.props
        return (
            <ItemForGoods onClick = { () => {
                console.log(1)
            this.goDetail(item) }}>
                <div className = 'item-img'>
                    <img className = 'mainimg' alt='' src = { item.pic_url || item.picurl } />
                    { item.logo_url ? <div className = 'img-float_bottom'><img alt = '' src = { item.logo_url } /></div> : '' }
                    { item.corner ? <img alt = '' className = 'img-float_top' src = { item.corner }/> : '' }
                </div>
                <div className = 'item-title'>
                    { item.priceList ? (
                        <Fragment>
                            <span className = 'newprice'>{ item.priceList[0].text }</span>
                            <span className = 'oldprice'>{ item.priceList[1].text }</span>
                        </Fragment>
                    ) : ( 
                        item.cprice ? (
                        <Fragment>
                            <span className = 'newprice'>{ item.cprice }</span>
                            <span className = 'oldprice'>{ item.oprice }</span>
                        </Fragment>
                        ) : ( <span className = 'newprice'>{ item.coupon_tips }</span> )
                    )}
                </div>
                <div className = 'item-small'>
                    <p className = 'small-one'>{ item.title }</p>
                    <p className = 'small-two'>{ item.time_left }</p>
                </div>
            </ItemForGoods>
        )
    }
}

export default withRouter(GoodsItem)