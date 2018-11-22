import React, { Component } from 'react'
import { HomeWrapper } from './Styled'
import HomeHeader from './HomeHeader'
import HomeSwiper from './HomeSwiper'
import HomeMiddle from './HomeMiddle'
import HomePic from './HomePic'

class HomeContainer extends Component {
    render () {
        return (
            <HomeWrapper>
                <HomeHeader />
                <HomeSwiper />
                <HomeMiddle />
                <HomePic />
            </HomeWrapper>
        )
    }
}

export default HomeContainer