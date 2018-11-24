import React, { Component } from 'react'
import { ResultContainer } from './ResultStyled'
import SearchInput from '@c/common/SearchInput'
import ResultNav from './ResultNav'

class Result extends Component {
    render () {
        return (
            <ResultContainer>
                <SearchInput result = { true } />
                <ResultNav />
            </ResultContainer>
        )
    }
}

export default Result