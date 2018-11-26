import React, { Component } from 'react'
import { ItemForCar } from './CarStyle'

class CarItem extends Component {
    render () {
        return (
            <ItemForCar>
                <div className = 'item-left'>
                    <input type = 'checkbox' />
                </div>
                <div className = 'item-right'>
                    <div className = 'item-img'>
                        <img src = 'https://goods7.juancdn.com/goods/181122/d/b/5bf65c6533b0890e117496a8_800x800.jpg?iopcmd=thumbnail&type=11&height=310&width=310%7Ciopcmd=convert&Q=88&dst=jpg'/>
                    </div>
                    <div className = 'item-text'>
                        <div className = 'item-text_top'>
                            <p className = 'item-p_one'>真貉子毛领加厚棉衣</p>
                            <p className = 'item-p_two'>蓝色 M</p>
                        </div>
                        <div className = 'item-text_bottom'>
                            <p className = 'item-p_three'>
                                <span className = 'item-three_spanone'>¥159</span>
                                <span className = 'item-three_spantwo'>¥399</span>
                            </p>
                            <p className = 'item-p_four'>
                                <span>X5</span>
                            </p>
                        </div>
                    </div>
                </div>
            </ItemForCar>
        )
    }
}

export default CarItem