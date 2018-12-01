import React, { Component } from 'react'
import { ContentWrapper } from './ContentStyle'
import ContentTopImg from './ContentTopImg'
import ContentText from './ContentText'
import ContentBottom from './ContentBottom'
import qs from 'querystring'

class Content extends Component {
    render () {
        let _search = this.props.location.search.substring(1)
        let urlObj = qs.parse(_search)
        let imgurl = urlObj.img + `&type=${urlObj.type || ''}&height=${urlObj.height || ''}&width=${urlObj.width || ''}&Q=${urlObj.Q ||''}&dst=${urlObj.dst || ''}`
        let { title, newprice, oldprice, id } = urlObj
        return (
            <ContentWrapper>
                <ContentTopImg imgurl = {imgurl}/>
                <ContentText info = {{ title, newprice, oldprice } } />
                <ContentBottom info = {{title, newprice, oldprice, imgurl, id}}/>
            </ContentWrapper>
        )
    }
}


export default Content