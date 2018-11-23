import React, { Component } from 'react'
import { BottomForHome } from './Styled'

class HomeBottom extends Component {
    state = {
        navlist: [
            { id: 1, title: '精选单场' },
            { id: 2, title: '精选单品' }
        ]
    }
    render () {
        return (
            <BottomForHome>
                <div className = 'bottom-nav'>
                    
                </div>
            </BottomForHome>
        )
    }
}

export default HomeBottom