import React, { Component } from 'react'
import { ContainerForClassify } from './ClassifyStyled'
import ClassifySearch from './ClassifySearch'
import ClassifyMain from './ClassifyMain'

class ClassifyContainer extends Component {
    render () {
        return (
            <ContainerForClassify>
                <ClassifySearch />
                <ClassifyMain />
            </ContainerForClassify>
        )
    }
}

export default ClassifyContainer 