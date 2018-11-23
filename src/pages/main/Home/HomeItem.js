import React, { Component } from 'react'
import { ItemForHome } from './Styled'

class HomeItem extends Component {
    render () {
        return (
            <ItemForHome>
                <div className = 'item-img'>
                    <div className = 'img-float_bottom' >
                        <img src = 'https://s2.juancdn.com/seller/180927/b/7/5bac574a33b089778556afdf_180x90.png?iopcmd=convert&Q=100&dst=png'/>
                    </div>
                    <img className = 'img-float_top' src = 'https://goods3.juancdn.com/jas/181123/4/a/5bf75645b6f8ea2af74dc7b6_99x85.png?iopcmd=convert&Q=88&dst=png'/>
                </div>
                <div className = 'item-title'>
                    <span>28元2件任选</span>
                </div>
                <div className = 'item-small'>
                    <p className = 'small-one'>早山糖果专场</p>
                    <p className = 'small-two'>上新</p>
                </div>
            </ItemForHome>
        )
    }
}

export default HomeItem