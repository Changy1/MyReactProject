import React, { Component, Fragment } from 'react'
import { HeaderForCar, NextHeaderForCar } from './CarStyle'
import SellImg from '@as/images/sell.png'

class CarHeader extends Component {
    render () {
        return (
            <Fragment>
            <HeaderForCar>   
                <span className = 'text-center'>购物车</span>
                <span className = 'text-right'>编辑</span>
            </HeaderForCar>
            <NextHeaderForCar>   
                <img alt='' src = { SellImg }/>
                <span>跨店促销</span>
            </NextHeaderForCar>
            </Fragment>
        )
    }
}

export default CarHeader