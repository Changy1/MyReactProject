import React, { Component } from 'react'
import { CarWrapper } from './CarStyle'
import CarHeader from './CarHeader'
import CarList from './CarList'
import CarBottom from './CarBottom'

class CarContainer extends Component {
    render () {
        return (
            <CarWrapper>
                <CarHeader />
                <CarList />
                <CarBottom />
            </CarWrapper>
        )
    }
}

export default CarContainer