import React, { Component } from 'react'
import { MiddleForHome, ItemForMiddle } from './Styled'
import uuid from 'uuid'
import MiddleoneImg from '@as/images/middleone.png'
import MiddletwoImg from '@as/images/middletwo.png'
import MiddlethreeImg from '@as/images/middlethree.png'
import MiddlefourImg from '@as/images/middlefour.png'


class HomeMiddle extends Component {
    state = {
        imgitem: [
            { id: uuid(), url: MiddleoneImg },
            { id: uuid(), url: MiddletwoImg },
            { id: uuid(), url: MiddlethreeImg },
            { id: uuid(), url: MiddlefourImg }
        ]
    }

    renderitem () {
        return this.state.imgitem.map( item => (
            <ItemForMiddle key = { item.id } url = {item.url}>
                <a></a>
            </ItemForMiddle>
        ))
    }

    render () {
        return (
            <MiddleForHome>
                { this.renderitem() }
            </MiddleForHome>
        )
    }
}

export default HomeMiddle