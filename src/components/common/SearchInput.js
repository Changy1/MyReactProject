import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { InputForSearch } from './CommonStyled'
import SearchImg from '@as/images/search.png'
import JuanpiImg from '@as/images/juanpi.png'
import HomenavImg from '@as/images/homenav.png'

class SearchInput extends Component {
    render () {
        return (
            <InputForSearch>
                    {
                        this.props.home ? (
                            <Link to = '/search' className = 'left'>
                                <span className = 'search-icon'>
                                    <img src = { SearchImg } />
                                </span>
                                <span className = 'search-img'>
                                    <img src = { JuanpiImg } />
                                </span>
                                <span className = 'search-text'>搜索</span>
                            </Link> 
                        ) : (
                            <input className = 'left' type = 'text' style = {{paddingLeft: '10px'}} placeholder = '搜索'/>
                        )
                    }
                <div className = 'right'>
                    {
                        this.props.home ? (<img src = { HomenavImg } />) : (<Link to = '/main'>取消</Link>)
                    }
                </div>
            </InputForSearch>
        )
    }
}

export default SearchInput