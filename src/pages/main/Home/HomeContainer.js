import React, { Component } from 'react'
import { HomeWrapper } from './Styled'
import HomeHeader from './HomeHeader'
import HomeSwiper from './HomeSwiper'
import HomeMiddle from './HomeMiddle'
import HomePic from './HomePic'
import HomeBottom from './HomeBottom'

class HomeContainer extends Component {
    render () {
        return (
            <HomeWrapper>
                <HomeHeader />
                <HomeSwiper />
                <HomeMiddle />
                <HomePic />
                <HomeBottom />
            </HomeWrapper>
        )
    }
}

export default HomeContainer