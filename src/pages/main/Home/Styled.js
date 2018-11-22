import styled from 'styled-components'

export const HomeWrapper = styled.div`
    width: 100%;
    height: 100%;
`

export const SwiperForHome = styled.div`
    position: relative;
    width: 100%;
    height: 3.866667rem;
    background: black;
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

export const HeaderForHome = styled.div`
    width: 100%;
    height: 1.173333rem;
    padding-left: .373333rem;
    background: #fff;
    border-bottom: .013333rem solid #f2f2f2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
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
        img {
            height: 100%;
        }
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