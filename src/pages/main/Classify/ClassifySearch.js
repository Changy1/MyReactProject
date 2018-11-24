import React, { Component } from 'react'
import { SearchForClassify } from './ClassifyStyled'
import SearchImg from '@as/images/search.png'

class ClassifySearch extends Component {
    render () {
        return (
            <SearchForClassify>
                <img alt = '' src = { SearchImg } />
                <p>搜索商品</p>
            </SearchForClassify>
        )
    }
}

export default ClassifySearch