import React, { Component } from 'react'
import { TopImgForContent } from './ContentStyle' 
import Swiper from 'swiper'

class ContentTopImg extends Component {
    componentDidMount () {  
        this.mySwiper = new Swiper ('.swiper-container')
    }
    render () {
        return (
            <TopImgForContent>
                <div className = 'swiper-container'>
                    <div className = 'swiper-wrapper'>
                        <div className="swiper-slide">
                            <img src = {this.props.imgurl} />
                        </div>
                        <div className="swiper-slide">
                            <img src = 'https://goods5.juancdn.com/goods/181122/8/2/5bf69a5833b089066039626f_800x800.jpg?iopcmd=convert&Q=88&dst=jpg'/>
                        </div>
                        <div className="swiper-slide">
                            <img src = 'https://goods5.juancdn.com/goods/181122/8/2/5bf69a5833b089066039626f_800x800.jpg?iopcmd=convert&Q=88&dst=jpg'/>
                        </div>
                    </div>
                </div>
            </TopImgForContent>
        )
    }
}

export default ContentTopImg