import React, { Component } from 'react'
import { ListForHome } from './Styled'
import HomeItem from './HomeItem'

class HomeList extends Component {
    

    render() {
        return (
            <ListForHome>
                <HomeItem />
                <HomeItem />
                <HomeItem />
                <HomeItem />
            </ListForHome>
        )
    }
}


export default HomeList