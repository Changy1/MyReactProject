import styled from 'styled-components'

export const CarWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`

export const HeaderForCar = styled.div`
    position: relative;
    text-align: center;
    height: 1.173333rem;
    line-height: 1.173333rem;
    background: #fff;
    border-bottom: .026667rem solid #ebebeb;
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
    border-bottom: .026667rem solid #ebebeb;
    img {
        vertical-align: middle;
        height: .533333rem;
        width: .533333rem;
        margin-left: .4rem;
        vertical-align: middle;
    }
    span {
        vertical-align: middle;
        color: #666;
        font-size: .373333rem;
        margin-left: .213333rem;
    }
`

export const ListForCar = styled.div`
    width: 100%;
`

export const ItemForCar = styled.div`
    padding-left: .373333rem;
    display: flex;
    align-items: center;
    background: #fff;
    .item-left {
        margin-right: .4rem;
    }
    .item-right {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: .426667rem .373333rem .426667rem 0;
        .item-img {
            margin-right: .32rem;
            width: 2.4rem;
            height: 2.4rem;
            img {
                height: 100%;
                width: 100%;
            }
        }
        .item-text {
            flex: 1;
            height: 2.4rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .item-text_top {
                .item-p_one {
                    width: 100%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    word-break: break-all;
                    font-size: .373333rem;
                }
                .item-p_two {
                    text-decoration: underline;
                    margin-top: .16rem;
                    color: red;
                    font-size: .373333rem;              
                }
            }
            .item-text_bottom {
                display: flex;
                justify-content: space-between;
                .item-p_three {
                    span {
                        display: inline-block;
                        margin-top: .266667rem;
                        margin-right: .2rem;
                        font-size: .32rem;
                    }
                    .item-three_spanone {
                        color: #FF464E;
                    }
                    .item-three_spantwo {
                        color: #999999;
                        text-decoration: line-through;
                    }
                }
            }
        }
    }
`

export const BottomForCar = styled.div`
    height: 1.306667rem;
    position: absolute;
    background: #fff;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: 5;
    border-top: .026667rem solid #ebebeb;
    display: flex;
    justify-content: space-around;
    .bottom-left {
        line-height: 1.306667rem;
        font-size: .426667rem;
        text-align: center;
        width: 25%;

        input {
            margin-right: .2rem;
        }
        
    }
    .bottom-center {
        padding-right: .133333rem;      
        text-align: right;
        width: 45%;
        height: 1.306667rem;
        p:first-child {
            margin-top: .24rem;
            font-size: .373333rem;
            span {
                color: #ff464e;
            }
        }
        p:last-child {
            padding-top: .106667rem;
            color: #999;
            font-size: .266667rem;
        }
    }
    .bottom-right {
        width: 30%;
        height: 1.306667rem;
        line-height: 1.306667rem;
        font-size: .48rem;
        background: #ff464e;
        text-align: center;
        color: #fff;
    }
`