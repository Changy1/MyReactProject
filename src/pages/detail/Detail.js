import React, { Component } from 'react'
import { DetailWrapper } from './DetailStyle'
import PageTop from '@c/common/PageTop'
import CommonNav from '@c/common/CommonNav'
import DetailList from './DetailList'
import qs from 'querystring'

class Detail extends Component {
    render () {
        let _param = qs.parse(this.props.location.search.substring(1))
        let _detailkey = _param.key
        let _detailtitle = _param.title
        return (
            <DetailWrapper>
                <PageTop item = {{ center: _detailtitle , detail: true }} />
                <CommonNav />
                <DetailList detailkey = { _detailkey } />
            </DetailWrapper>
        )
    }
}

export default Detail