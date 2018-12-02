import React, { Component, Fragment } from 'react'
import { HeaderForCar, NextHeaderForCar } from './CarStyle'
import SellImg from '@as/images/sell.png'
import { Toast } from 'antd-mobile'

class CarHeader extends Component {
    render () {
        return (
            <Fragment>
            <HeaderForCar>   
                <span className = 'text-center'>购物车</span>
                <span onClick = { this.change } className = 'text-right'>{this.props.isShow ? '完成' : '编辑' }</span>
            </HeaderForCar>
            <NextHeaderForCar>   
                <img alt='' src = { SellImg }/>
                <span>跨店促销</span>
            </NextHeaderForCar>
            </Fragment>
        )
    }
    loadingToast () {
        Toast.loading('Loading...', 0.5)
    }
    change = () => {
        this.loadingToast()
        this.props.changeShow()
    }
}

export default CarHeader