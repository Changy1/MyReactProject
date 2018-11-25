import React, { Component } from 'react'
import { BottomForHome, LiForBottom } from './Styled'
import HomeList from './HomeList'

class HomeBottom extends Component {
    state = {
        id: 1,
        navlist: [
            { id: 1, title: '精选单场' },
            { id: 2, title: '精选单品' }
        ]
    }
    rendernav () {
        return this.state.navlist.map(item => (
            <LiForBottom 
                active = { item.id === this.state.id}  
                onClick = { () => {
                    this.setState({
                        id: item.id
                    })
                }} 
                key = {item.id}   
            >
                {item.title}
            </LiForBottom>
        ))    
    }
    render () {
        return (
            <BottomForHome>
                <div className = 'bottom-nav'>
                    { this.rendernav() }
                </div>
                <HomeList />
            </BottomForHome>
        )
    }
}

export default HomeBottom