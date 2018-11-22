import React, { Component } from 'react'
import { HeaderForHome } from './Styled'
import SearchImg from '@as/images/search.png'
import JuanpiImg from '@as/images/juanpi.png'
import HomenavImg from '@as/images/homenav.png'

class HomeHeader extends Component {
    render () {
        return (
            <HeaderForHome>
                <a className = 'left'>
                    <span className = 'search-icon'>
                        <img src = { SearchImg } />
                    </span>
                    <span className = 'search-img'>
                        <img src = { JuanpiImg } />
                    </span>
                    <span className = 'search-text'>搜索</span>
                </a>
                <a className = 'right'>
                    <img src = { HomenavImg } />
                </a>
            </HeaderForHome>
        )
    }
}

export default HomeHeader