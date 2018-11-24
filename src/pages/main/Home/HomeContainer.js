import React, { Component } from 'react'
import { HomeWrapper } from './Styled'
import SearchInput from '@c/common/SearchInput'
import HomeSwiper from './HomeSwiper'
import HomeMiddle from './HomeMiddle'
import HomePic from './HomePic'
import HomeBottom from './HomeBottom'

class HomeContainer extends Component {
    render () {
        return (
            <HomeWrapper>
                <SearchInput home = {true} />
                <HomeSwiper />
                <HomeMiddle />
                <HomePic />
                <HomeBottom />
            </HomeWrapper>
        )
    }
}

export default HomeContainer