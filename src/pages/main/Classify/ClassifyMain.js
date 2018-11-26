import React, { Component } from 'react'
import { MainForClassify } from './ClassifyStyled'
import ClassifyLeftList from './ClassifyLeftList'
import ClassifyRightList from './ClassifyRightList'
import jsonp from 'jsonp'

class ClassifyMain extends Component {
    constructor () {
        super()
        this.state = {
            id: 0,
            leftlist: [],
            rightlist: []
        }
        this.changeId = this.changeId.bind(this)
    }
    componentDidMount () {
        // jsonp的第一个参数写url，第二个参数可以写?后面参数，第三个参数是回调函数，err，data
        jsonp('https://m.juanpi.com/cate/catelist?pf=8&area=4&bi=222&dtype=jsonp&_=1543026080702&callback=jsonp2', (err, data) => {
            this.setState({
                leftlist: data,
                rightlist: data[this.state.id].secondCateList
            })
        })
    }
    changeId (index) {
        let { leftlist } = this.state
        this.setState({
            id: index,
            rightlist: leftlist[index].secondCateList
        })
    }
    render () {
        return (
            <MainForClassify>
                <ClassifyLeftList changeId = { this.changeId } id = { this.state.id } items = { this.state.leftlist } />
                <ClassifyRightList items = { this.state.rightlist }/>
            </MainForClassify>
        )
    }
}

export default ClassifyMain