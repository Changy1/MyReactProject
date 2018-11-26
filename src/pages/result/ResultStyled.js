import styled from 'styled-components'
import IconImg from '@as/images/icon.png'
import TopImg from '@as/images/top.png'

export const ResultContainer = styled.div`
    width: 100%;
    height: 100%;
`

export const NavForResult = styled.div`
    width: 100%;
    background: #fff;
    border-bottom: .013333rem solid #ebebeb;
    display: flex;
    justify-content: space-around;
    height: .8rem;
    padding: .133333rem 0;
`

export const NavItemForResult = styled.div`
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${ props => props.active ? '#ff464e' : '#333'};
    .img {
        background: ${ `url(${IconImg})` };
        background-size: 1.306667rem;
        ${props =>{
            if ( props.price ) return 'width: .2rem ; height: .4rem ; margin-left: .133333rem;'
            if ( props.select ) return 'width: .293333rem ; height: .346667rem; margin-left: .133333rem; background-position-x: -0.613333rem;'
        }}
        ${props => {
            if ( props.price === 2) return 'background-position-x: -0.373333rem;'
            if ( props.price === 3) return 'background-position-x: -0.186667rem;' 
        }}
    }
`

export const ListForResult = styled.div`
    height: calc(100vh - 2.266667rem);
    width: 100%;
    overflow: hidden;
    .context { 
        display: flex;
        flex-wrap: wrap;
    }
` 

export const TopForResult = styled.div`
    background-color: #fff;
    border-radius: 50%;
    width: 1.333333rem;
    height: 1.333333rem;
    background-image: ${ `url(${TopImg})` };
    position: fixed;
    bottom: 1.333333rem;
    right: .266667rem;
`