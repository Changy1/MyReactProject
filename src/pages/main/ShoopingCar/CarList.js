import React, { Component } from 'react'
import { ListForCar } from './CarStyle'
import CarItem from './CarItem'

class CarList extends Component {
    renderItem () {
        return this.props.info.map( item => (
            <CarItem isShow = {this.props.isShow} key = {item.id} info = {item}/>
        ))
    }
    render () {
        return (
            <ListForCar>
              { this.renderItem() }
            </ListForCar>
        )
    }    
}

export default CarList