import React, { Component } from 'react'
import { HeaderForPersonage } from './PersonageStyle'
import PersonageTop from './PersonageTop'
import PersonageMessage from './PersonageMessage'

class PersonageHeader extends Component {
    render () {
        return (
            <HeaderForPersonage>
                <PersonageTop />
                <PersonageMessage />
            </HeaderForPersonage>
        )
    }
}

export default PersonageHeader