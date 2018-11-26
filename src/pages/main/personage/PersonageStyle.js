import styled from 'styled-components'
import BackgroundImg from '@as/images/background.png'
import RightImg from '@as/images/right.png'

export const PersonageWrapper = styled.div`
    width: 100%;
    position: relative;
`

export const HeaderForPersonage = styled.div`
    height: 3.84rem;
    background: ${`url(${BackgroundImg})`};
    background-size: 100% auto;
`

export const TopForPersonage = styled.div`
    line-height: 1.173333rem;
    height: 1.173333rem;
    position: relative;
    display: flex;
    justify-content: space-around;
    color: #fff;
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
        background: ${`url(${RightImg}) no-repeat center center`};
        background-size: .333333rem;
        transform: rotate(180deg);
    }
`

export const MessageForPersonage = styled.div`
    margin: .666667rem 0;
    width: 100%;
    .person-img {
        height: 1.493333rem;
        width: 1.493333rem;
        margin-left: .48rem;
        border: .026667rem solid #fff;
        border-radius: 50%;
        overflow: hidden;
        float: left;
        img {
            width: 100%;
            height: 100%;
        }
    }
    .person-text {
        float: left;
        margin-left: .32rem;
        height: 1.4rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        p {
            font-family: PingFangSC-Regular;
            font-size: .426667rem;
            color: #fff;
        }
        span {
            height: .426667rem;
            line-height: .426667rem;
            background: #f3414a;
            font-size:.293333rem;
            color: #fff;
            width: 1.706667rem;
            border-radius: .133333rem;
            i {
                margin-left: .133333rem;
                display: inline-block;
                width: .133333rem;
                height: .426667rem;
                background: ${`url(${RightImg}) no-repeat center center`};
                background-size: .133333rem;
                vertical-align: middle;
            }
        }
    }
`

export const CenterForPersonage = styled.div`
    width: 100%;
    background: #fff;
`

export const CenterOneForPersonage = styled.div`
    position: relative;
    background: #fff;
    margin-top: ${ props => props.margin ? '.266667rem' : '0rem'};
    height: 1.28rem;
    line-height: 1.28rem;
    padding: 0 .48rem;
    display: flex;
    justify-content: space-between;
    &::after {
        content: "";
        position: absolute;
        left: .373333rem;
        right: .373333rem;
        bottom: 0;
        height: 2px;
        background-color: #ebebeb;
        transform: scaleY(.5);
    }
    p {
        font-size: .4rem;
    }
    a{
        font-size: .373333rem;
        color: #999;
    }
`

export const CenterTwoForPersonage = styled.div`
    padding: .4rem 0 ;
    height: 2.106667rem;
    display: flex;
    justify-content: space-around;
    align-items: center; 
`

export const AForCenterTwo = styled.a`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    width: 25%;
    align-items: center;
    i {
        font-size: .746667rem;
    }
    span {
        display: block;
        margin-top: .16rem;
        font-size: .32rem;
    }
`

export const BottomForPersonage = styled.div`
    margin-top: .266667rem;
`