import React, { Component } from 'react'
import { ListForCar } from './CarStyle'
import CarItem from './CarItem'

class CarList extends Component {
    render () {
        return (
            <ListForCar>
                <CarItem />
            </ListForCar>
        )
    }    
}

export default CarList