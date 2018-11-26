import React, { Component } from 'react'
import { PersonageWrapper } from './PersonageStyle'
import PersonageHeader from './PersonageHeader'
import PersonageCenter from './PersonageCenter'
import PersonageBottom from './PersonageBottom'

class PersonageContainer extends Component {
    render () {
        return (
            <PersonageWrapper>
                <PersonageHeader />
                <PersonageCenter />
                <PersonageBottom />
            </PersonageWrapper>
        )
    }
}

export default PersonageContainer