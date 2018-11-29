import styled from 'styled-components'
import CollectImg from '@as/images/collect.png'

export const ContentWrapper = styled.div `
    width: 100%;
`

export const TopImgForContent = styled.section `
    width: 100%;
    height: 10rem;
    img {
        width: 10rem;
        height: 10rem;
    }
`

export const TextForContent = styled.section ` 
    box-sizing: border-box;
    width: 100%;
    padding: .32rem .373333rem .266667rem;
    background: #fff;
`

export const TextTwoForContent = styled.div `
    display: inline-block;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    .text-left {
        display: flex;
        align-items: flex-end;
        .text-price {
        color: #ff464e;
        font-size: .64rem;
        margin-right: .106667rem;
        span{
            font-size: .426667rem;
        }
        }
        .text-old {
            color: #bbb;
            font-size: .32rem;
            margin-right: .266667rem;
        }
        .text-postage {
            background-color: rgb(255, 70, 78);
            border-color: rgb(255, 70, 78);
            color: rgb(255, 255, 255);
            font-size: .133333rem;
            font-family: PingFang-SC-Regular,Helvetica Neue,Helvetica,Droid Sans Fallback,microsoft yahei,sans-serif;
        }
    }
    .number {
        color: #999;
        font-size: .32rem;
    }
`

export const TitleForContent = styled.div `
    margin-top: .266667rem;
    margin-bottom: .266667rem;
    display: flex;
    justify-content: space-between;
    .title-text {
        font-size: .426667rem;
        flex-grow: 1;
    }
    .title-img {
        height: .64rem;
        width: .64rem;
        background: ${`url(${CollectImg}) no-repeat`};
        background-size: 100% 100%;
        flex-shrink: 0;
    }
`

export const BottomForContent = styled.div `
    display: flex;
    height: 1.28rem;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    border-top: .026667rem solid #e7e7e7;
    .right {
        font-size: .32rem;
        flex-grow: 1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        span {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-grow: 1;
        }
        p {
            display: flex;
            justify-content: center;
            align-items: center;
            color: #ffffff;
            background: #ff464e;
            height: 100%;
            width: 3.666667rem;
        }
    }
`

export const BottomTwoForContent = styled.div `
    width: 1.92rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-right: .026667rem solid #e7e7e7;
    img {
        width: .64rem;
        height: .64rem;
    }
    span {
        color: #6b6b6b;
        font-size: .266667rem;
    }
`