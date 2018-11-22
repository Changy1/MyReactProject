import React, { Component } from 'react'
import { PicForHome } from './Styled'
import HomePicOneImg from '@as/images/homepicone.gif'
import HomePicTwoImg from '@as/images/homepictwo.png'
import HomePicThreeImg from '@as/images/homepicthree.png'
import HomePicFourImg from '@as/images/homepicfour.gif'
import HomePicFiveImg from '@as/images/homepicfive.png'

class HomePic extends Component {
    state = {
        imgUrl: {
            one: HomePicOneImg ,
            two: HomePicTwoImg,
            three:  HomePicThreeImg,
            four: HomePicFourImg,
            five: HomePicFiveImg
        }
    }
    render () {
        return (
            <PicForHome url = {this.state.imgUrl}>
                <div className = 'top'>
                    <div className = 'top-left'>
                        <a></a>
                    </div>
                    <div className = 'top-right'>
                        <a className = 'two'></a>
                        <a className = 'three'></a>
                    </div>
                </div>
                <div className = 'middle'>
                    <a></a>
                </div>
                <div className = 'bottom'>
                    <a></a>
                </div>
            </PicForHome>
        )
    }
}

export default HomePic