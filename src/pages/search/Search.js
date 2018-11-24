import React, { Component } from 'react'
import SearchInput from '@c/common/SearchInput'
import SearchList from './SearchList'
import { SearchWrapper } from './SearchStyled'

class Search extends Component {
    render () {
        return (
            <SearchWrapper>
                <SearchInput home = {false}/>
                <SearchList />
            </SearchWrapper>
        )
    }
}

export default Search