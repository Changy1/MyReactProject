import styled from 'styled-components'

export const HomeWrapper = styled.div`
    width: 100%;
    height: 100%;
`

export const SwiperForHome = styled.div`
    width: 100%;
    height: 3.866667rem;
    background: black;
    ul {
        height: 3.866667rem !important; 
    }
`
export const MiddleForHome = styled.div`
    height: 2.226667rem;
    width: 100%;
    display: flex;
    justify-content: space-around;
`
export const ItemForMiddle = styled.div`
    width: 25%;
    height: 100%;
    background: #fff;
    a {
        height: 100%;
        width: 100%;
        display: block;
        background: ${props => `url(${ props.url }) no-repeat`};
        background-position: center center;
        background-size: 2.493333rem;
    }
`

export const PicForHome = styled.div`
    .top {
        background: #fff;
        height: 6.066667rem;
        width: 100%;    
        display: flex;
        justify-content: space-around;
        .top-left {
            height: 100%;
            width: 5rem;
            a {
                width: 100%;
                height: 100%;
                display: block;
                background: ${props => `url(${props.url.one})`};
                background-size: cover;
            }
        }  
        .top-right {
            width: 5rem;
            display: flex;
            flex-direction: column;
            .two {
                width: 100%;
                height: 50%;
                background: ${props => `url(${props.url.two})`};
                background-size: cover;
            }
            .three {
                width: 100%;
                height: 50%;
                background: ${props => `url(${props.url.three})`};
                background-size: cover;
            }
        }
    }
    .middle {
        width: 100%;
        height: 3.146667rem;
        a {
            display: block;
            width: 100%;
            height: 100%;
            background: ${props => `url(${props.url.four}) no-repeat`};
            background-position: center center;
            background-size: 10rem;
        }
    }
    .bottom {
        background: #fff;
        height: 1.28rem;
        margin-top: .266667rem;
        a{
            display: block;
            width: 100%;
            height: 100%;
            background: ${props => `url(${props.url.five}) no-repeat`};
            background-position: center center;
            background-size: 10rem;
        }
    }

`

export const BottomForHome = styled.div`
    width: 100%;
    margin-top: .266667rem;
    .bottom-nav {
        height: 1.173333rem;
        background: #fff;
    }
`

export const LiForBottom = styled.div`
    height: 1.173333rem;
    line-height: 1.173333rem;
    font-size: .426667rem;
    font-weight: bold;
    margin: 0 .266667rem;
    float: left;
    text-align: center;
    color: ${props => props.active ? '#ff464e' : '#333'};
    border-bottom: ${props => props.active ? '.053333rem solid #ff464e' : ''};

`