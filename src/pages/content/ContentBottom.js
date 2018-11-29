import React, { Component } from 'react'
import { BottomForContent, BottomTwoForContent } from './ContentStyle'
import HomeImg from '@as/images/contenthome.png'
import CarImg from '@as/images/contentcar.png'
 
class ContentBottom extends Component {
    render () {
        return (
            <BottomForContent>
                <BottomTwoForContent className = 'left'>
                    <img alt = '' src = { HomeImg } />
                    <span>首页</span>
                </BottomTwoForContent>
                <BottomTwoForContent className = 'center'>
                    <img alt = '' src = { CarImg } />
                    <span>购物车</span>
                </BottomTwoForContent>
                <div className = 'right'>
                    <span>立即购买</span>
                    <p>加入购物车</p>
                </div>
            </BottomForContent>
        )
    }
}

export default ContentBottom