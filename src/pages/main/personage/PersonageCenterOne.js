import React, { Component } from 'react'
import { CenterOneForPersonage } from './PersonageStyle'

class PersonageCenterOne extends Component {
    render () {
        return (
            <CenterOneForPersonage margin = {this.props.item.margin}>
                <p>{this.props.item.left}</p>
                <a>{this.props.item.right}</a>
            </CenterOneForPersonage>
        )
    }
}

export default PersonageCenterOne 