import React, { Component } from 'react'
import { CarWrapper } from './CarStyle'
import CarHeader from './CarHeader'

class CarContainer extends Component {
    render () {
        return (
            <CarWrapper>
                <CarHeader />
            </CarWrapper>
        )
    }
}

export default CarContainer