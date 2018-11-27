import React, { Component } from 'react'
import { SearchForClassify } from './ClassifyStyled'
import { Link } from 'react-router-dom'
import SearchImg from '@as/images/search.png'

class ClassifySearch extends Component {
    render () {
        return (
            <SearchForClassify>
                <Link to = '/search' className = 'serchinput'>
                    <img alt = '' src = { SearchImg } />
                    <p>搜索商品</p>
                </Link>
            </SearchForClassify>
        )
    }
}

export default ClassifySearch