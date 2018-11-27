import React, { Component, Fragment } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { InputForSearch } from './CommonStyled'
import SearchImg from '@as/images/search.png'
import JuanpiImg from '@as/images/juanpi.png'
import HomenavImg from '@as/images/homenav.png'
import LeftImg from '@as/images/left.png'

class SearchInput extends Component {
    render () {
        return (
            <InputForSearch>
                {
                    this.props.result ? <img onClick = { this.goback } className = 'leftimg' src = {LeftImg} alt = '' /> : ''
                }
                {
                    this.props.home ? (
                        <Link to = '/search' className = 'left'>
                            <span className = 'search-icon'>
                                <img alt = '' src = { SearchImg } />
                            </span>
                            <span className = 'search-img'>
                                <img alt = '' src = { JuanpiImg } />
                            </span>
                            <span className = 'search-text'>搜索</span>
                        </Link> 
                    ) : (
                        <input onKeyUp = { this.searchWhat } className = 'left' type = 'text' style = {{paddingLeft: '10px'}} placeholder = '搜索'/>
                    )
                }
                <div className = 'right'>
                    {
                        this.props.home ? (<img alt = '' src = { HomenavImg } />) : (<Link to = '/main'>取消</Link>)
                    }
                </div>
            </InputForSearch>
        )
    }
    goback = () => {
        this.props.history.go(-1)
    }
    searchWhat = (e) => {
        if ( e.keyCode === 13) {
            let text = e.target.value
            this.props.history.push(`/result?key=${text}`)
        } 
    }
}

export default withRouter(SearchInput)