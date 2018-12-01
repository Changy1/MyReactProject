import React, { Component } from 'react'
import { CarWrapper } from './CarStyle'
import CarHeader from './CarHeader'
import CarList from './CarList'
import CarBottom from './CarBottom'
import connect from '@connect'

class CarContainer extends Component {
    componentDidMount () {
        let info = this.props.car.info
        let price = 0 
        info.forEach(one => {
            let oneprice = parseFloat( one.newprice.substring(1) ) * one.num
            price += oneprice
        });   
        this.price = price 
    }
    render () {
        let info = this.props.car.info
        return (
            <CarWrapper>
                <CarHeader />
                <CarList info = {info} />
                <CarBottom price = {this.price} />
            </CarWrapper>
        )
    }
}

export default connect(CarContainer,[{ name: 'car', states: ['info']}])