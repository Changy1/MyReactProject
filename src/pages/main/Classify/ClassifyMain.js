import React, { Component } from 'react'
import { MainForClassify } from './ClassifyStyled'
import ClassifyLeftList from './ClassifyLeftList'
import ClassifyRightList from './ClassifyRightList'

class ClassifyMain extends Component {
    render () {
        return (
            <MainForClassify>
                <ClassifyLeftList />
                <ClassifyRightList />
            </MainForClassify>
        )
    }
}

export default ClassifyMain