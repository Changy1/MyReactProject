import styled from 'styled-components'

export const CarWrapper = styled.div`
    width: 100%;
`

export const HeaderForCar = styled.div`
    position: relative;
    text-align: center;
    height: 1.173333rem;
    line-height: 1.173333rem;
    background: #fff;
    border-bottom: 1px solid #ebebeb;
    .text-center {
        font-size: .48rem;
    }
    .text-right {
        font-size: .4rem;
        padding-right: .373333rem;
        position: absolute;
        top: 0;
        right: 0;
    }
`

export const NextHeaderForCar = styled.div`
    position: relative;
    height: 1.173333rem;
    line-height: 1.173333rem;
    background: #fff;
    border-bottom: 1px solid #ebebeb;
    img {
        vertical-align: middle;
        height: .533333rem;
        width: .533333rem;
        margin-left: .4rem;
    }
    span {
        color: #666;
        font-size: .373333rem;
        margin-left: .213333rem;
    }
`