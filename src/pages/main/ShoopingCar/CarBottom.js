import React, { Component, Fragment } from 'react'
import { BottomForCar } from './CarStyle'

class CarBottom extends Component {
    render () {
        return (
            <BottomForCar>
                <div className = 'bottom-left'>
                    <input type = 'checkbox' />
                    全选
                </div>
                <div className = 'bottom-center'>
                    <p>合计<span>￥395.00</span></p>
                    <p>总额<span>￥795.00</span> 立减<span> 400.00</span></p>
                </div>
                <div className = 'bottom-right'>去结算(5)</div>
            </BottomForCar>
        )
    }
}

export default CarBottom 