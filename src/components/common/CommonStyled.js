import styled from 'styled-components'
import RightImg from '@as/images/right.png'
import BackgroundImg from '@as/images/background.png'
import LeftImg from '@as/images/left.png'
import IconImg from '@as/images/icon.png'

export const InputForSearch = styled.div`
    background: #fff;
    box-sizing: border-box;
    width: 100%;
    height: 1.173333rem;
    padding-left: .373333rem;
    border-bottom: .013333rem solid #f2f2f2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .leftimg {
        transform: rotate(180deg);
        height: .533333rem;
        padding-left: .32rem;
    }
    .left {
        border: none;
        flex-grow: 1;
        height: .746667rem;
        background: #f2f2f2;
        border-radius: .133333rem;
        display: flex;
        align-items: center;
        justify-content: start;
        .search-icon {
            width: .4rem;
            height: .4rem;
            margin: 0 .133333rem;
            img{
                width: .466667rem;
            }
        }
        .search-img {
            height: .4rem;
            margin: 0 .133333rem;
            img {
                height: 100%;
            }
        }
        .search-text {
            height: 100%;
            line-height: .746667rem;
            font-size: .16rem;
            color: rgb(153, 153, 153);
        }
    }
    .right {
        width: 1.173333rem;
        height: 1.173333rem;
        text-align: center;
        line-height: 1.173333rem; 
        img {
            height: 100%;
        }
    }
`

export const TopForPersonage = styled.div`
    background: ${props => props.detail ? '#fff' : `url(${BackgroundImg})`};
    background-size: 100% auto;
    line-height: 1.173333rem;
    height: 1.173333rem;
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: ${props => props.detail ? '#333' : `#fff`};
    a {
        height: 1.173333rem;
        line-height: 1.173333rem;
        flex-grow: 0;
        font-size: .373333rem;
        width: 1.333333rem;
        text-align: right;
        padding-right: .4rem; 
    }
    span {
        flex-grow: 1;
        font-size: .48rem;  
        text-align: center;
    }
    .img {
        background: ${ props => props.detail ?  `url(${LeftImg}) no-repeat center center` : `url(${RightImg}) no-repeat center center` };
        background-size: .333333rem;
        transform: rotate(180deg);
    }
    img {
        margin-right: .533333rem;
        height: .8rem;
        width: .8rem;
    }
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

export const NavForResult = styled.div`
    width: 100%;
    background: #fff;
    border-bottom: .013333rem solid #ebebeb;
    display: flex;
    justify-content: space-around;
    height: .8rem;
    padding: .133333rem 0;
`