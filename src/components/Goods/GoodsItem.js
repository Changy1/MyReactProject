import React, { Component, Fragment } from 'react'
import { ItemForGoods } from '@c/Goods/GoodsStyled'

class GoodsItem extends Component {
    render () {
        let { item } = this.props
        return (
            <ItemForGoods>
                <div className = 'item-img'>
                    <img className = 'mainimg' alt='' src = { item.pic_url } />
                    { item.logo_url ? <div className = 'img-float_bottom'><img alt = '' src = { item.logo_url } /></div> : '' }
                    <img alt = '' className = 'img-float_top' src = { item.corner }/>
                </div>
                <div className = 'item-title'>
                    { item.priceList ? (
                        <Fragment>
                            <span className = 'newprice'>{ item.priceList[0].text }</span>
                            <span className = 'oldprice'>{ item.priceList[1].text }</span>
                        </Fragment>
                    ) : (
                        <span className = 'newprice'>{ item.coupon_tips }</span>
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

export default GoodsItem