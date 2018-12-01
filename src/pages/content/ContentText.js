import React, { Component } from 'react'
import { TextForContent, TextTwoForContent, TitleForContent } from './ContentStyle'

class ContentText extends Component {
    render () {
        return (
            <TextForContent>
                <TextTwoForContent className = 'text'>
                    <div className = 'text-left'>
                    <div className = 'text-price'><span>￥</span>{this.props.info.newprice}</div>
                    <div className = 'text-old'>￥{this.props.info.oldprice}</div>
                    <span className = 'text-postage'>包邮</span>
                    </div>
                    <div className = 'number'>1964人已购</div>
                </TextTwoForContent>
                <TitleForContent className = 'title'>
                    <div className = 'title-text'>{this.props.info.title}</div>
                    <div className = 'title-img'></div>
                </TitleForContent>
            </TextForContent>
        )
    }
}

export default ContentText