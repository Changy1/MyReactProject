import React, { Component } from 'react'
import { SwiperForHome } from './Styled'
import axios from 'axios'
import { Carousel } from 'antd-mobile';

class HomeSwiper extends Component {
    state = {
        data: [],
    }
    componentDidMount() {
        axios.get('https://webservice.juanpi.com/api/getIndexNavSkip?page=1&zy_ids=p8_c4_l4&app_name=zhe&catname=newest_zhe')
            .then( res => {
                this.setState({
                    data: res.data.adsRes.slide_ads.config.slide
                })
            })
    }
    renderSwiperItem () {
        // 注意： Ant走马灯里面ul初始高度是100px，所以第一个会显得很矮，然后使用!important强行更改了他的高度
        return this.state.data.map(val => (
            <img
                key = {val.id}
                src = {val.pic}
                alt = ""
                style = {{ width: '100%', verticalAlign: 'top', height: '3.866667rem' }}
            />
        ))
    }
    render () {
        return (
            <SwiperForHome>
                <Carousel
                // 是否自动切换
                autoplay = { true }
                // 是否循环播放
                infinite = { true }
                >
                { this.renderSwiperItem() }
                </Carousel>    
            </SwiperForHome>
        )
    }
}

export default HomeSwiper
