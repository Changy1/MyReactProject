import React, { Component } from 'react'
import { ResultContainer } from './ResultStyled'
import SearchInput from '@c/common/SearchInput'
import CommonNav from '@c/common/CommonNav'
import ResultList from './ResultList'
import qs from 'querystring'

class Result extends Component {
    render () {
        let _search = this.props.location.search.substring(1)
        let _key = qs.parse(_search).key
        return (
            <ResultContainer>
                <SearchInput result = { true } />
                <CommonNav />
                <ResultList keystr = { _key } />
            </ResultContainer>
        )
    }
}

export default Result