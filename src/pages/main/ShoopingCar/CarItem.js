import React, { Component } from 'react'
import { ItemForCar } from './CarStyle'

class CarItem extends Component {
    render () {
        let { info } = this.props
        return (
            <ItemForCar>
                <div className = 'item-left'>
                    <input type = 'checkbox' />
                </div>
                <div className = 'item-right'>
                    <div className = 'item-img'>
                        <img src = { info.imgurl }/>
                    </div>
                    <div className = 'item-text'>
                        <div className = 'item-text_top'>
                            <p className = 'item-p_one'>{ info.title }</p>
                            <p className = 'item-p_two'>蓝色 M</p>
                        </div>
                        <div className = 'item-text_bottom'>
                            <p className = 'item-p_three'>
                                <span className = 'item-three_spanone'>{ info.newprice }</span>
                                <span className = 'item-three_spantwo'>{ info.oldprice }</span>
                            </p>
                            <p className = 'item-p_four'>
                                <span>X{ info.num }</span>
                            </p>
                        </div>
                    </div>
                </div>
            </ItemForCar>
        )
    }
}

export default CarItem