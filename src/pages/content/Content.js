import React, { Component } from 'react'
import { ContentWrapper } from './ContentStyle'
import ContentTopImg from './ContentTopImg'
import ContentText from './ContentText'
import ContentBottom from './ContentBottom'

class Content extends Component {
    render () {
        console.log(this)
        return (
            <ContentWrapper>
                <ContentTopImg />
                <ContentText />
                <ContentBottom />
            </ContentWrapper>
        )
    }
}


export default Content