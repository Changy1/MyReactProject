import React, { Component } from 'react'
import { BottomForContent, BottomTwoForContent } from './ContentStyle'
import HomeImg from '@as/images/contenthome.png'
import CarImg from '@as/images/contentcar.png'
import connect from '@connect'
import { Toast } from 'antd-mobile';
import { Link } from 'react-router-dom'
 
class ContentBottom extends Component {
    addCar (info) {
        this.loadingToast()
        this.props.car_actions.changeGoodsForCar(info)
    }
    loadingToast () {
        Toast.loading('正在加入购物车...', 0.5, () => {
            this.successToast ()
        });
    }
    successToast () {
        Toast.success('加入成功 !!!', 0.5);
    }
    render () {
        return (
            <BottomForContent>
                <BottomTwoForContent className = 'left'>
                    <img alt = '' src = { HomeImg } />
                    <Link to = '/main'>首页</Link>
                </BottomTwoForContent>
                <BottomTwoForContent className = 'center'>
                    <img alt = '' src = { CarImg } />
                    <Link to = '/main'>购物车</Link>
                </BottomTwoForContent>
                <div className = 'right'>
                    <span>立即购买</span>
                    <p onClick = { () => { this.addCar(this.props.info) }}>加入购物车</p>
                </div>
            </BottomForContent>
        )
    }
}

export default connect(ContentBottom,[{ name: 'car', states: ['info']}])