import React, { Component } from 'react'
import { ResultContainer } from './ResultStyled'
import SearchInput from '@c/common/SearchInput'
import ResultNav from './ResultNav'
import ResultList from './ResultList'
import qs from 'querystring'

class Result extends Component {
    render () {
        console.log(qs.parse(this))
        return (
            <ResultContainer>
                <SearchInput result = { true } />
                <ResultNav />
                <ResultList />
            </ResultContainer>
        )
    }
}

export default Result