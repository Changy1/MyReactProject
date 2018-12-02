import React, { Component } from 'react'
import { CarWrapper } from './CarStyle'
import CarHeader from './CarHeader'
import CarList from './CarList'
import CarBottom from './CarBottom'
import connect from '@connect'

class CarContainer extends Component {
    constructor () {
        super()
        this.state = {
            isShow: false
        }
        this.changeShow = this.changeShow.bind(this)
    }
    changeShow () {
        this.setState({
            isShow: ! this.state.isShow
        })
    }
    componentDidMount () {
        let info = this.props.car.info
        let price = 0 
        info.forEach(one => {
            let oneprice = parseFloat( one.newprice.substring(1) ) * one.num
            price += oneprice
        });   
        this.price = price 
    }
    componentWillReceiveProps () {
        console.log(1)
        this.setState({})
    }
    render () {
        console.log(this)
        let info = this.props.car.info
        return (
            <CarWrapper>
                <CarHeader isShow = {this.state.isShow} changeShow = {this.changeShow} />
                <CarList isShow = {this.state.isShow} info = {info} />
                <CarBottom price = {this.price} />
            </CarWrapper>
        )
    }
}

export default connect(CarContainer,[{ name: 'car', states: ['info']}])