import React, { Component } from 'react'
import { TextForContent, TextTwoForContent, TitleForContent } from './ContentStyle'

class ContentText extends Component {
    render () {
        return (
            <TextForContent>
                <TextTwoForContent className = 'text'>
                    <div className = 'text-left'>
                    <div className = 'text-price'><span>￥</span>58</div>
                    <div className = 'text-old'>￥198</div>
                    <span className = 'text-postage'>包邮</span>
                    </div>
                    <div className = 'number'>1964人已购</div>
                </TextTwoForContent>
                <TitleForContent className = 'title'>
                    <div className = 'title-text'>羊羔毛棉衣外套女中长款2018冬季新款加厚加绒格子保暖棉袄棉服冬</div>
                    <div className = 'title-img'></div>
                </TitleForContent>
            </TextForContent>
        )
    }
}

export default ContentText