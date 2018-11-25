import styled from 'styled-components'
import IconImg from '@as/images/icon.png'

export const ResultContainer = styled.div`
    width: 100%;
    height: 100%;
`

export const NavForResult = styled.div`
    width: 100%;
    background: #fff;
    border-bottom: 1px solid #ebebeb;
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
    width: 100%;
    display: flex;
    flex-wrap: wrap;
` 