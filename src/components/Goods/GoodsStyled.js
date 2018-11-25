import styled from 'styled-components'


export const ItemForGoods = styled.div`
    width: 4.946667rem;
    margin-right: .053333rem;
    margin-top: .053333rem;
    background: #fff;
    .item-img {
        position: relative;
        width: 100%;
        height: 4.986667rem;
        background: #fff;
        .mainimg {
            width: 100%;
            height: 100%;
        }
        .img-float_bottom {
            z-index: 2;
            position: absolute;
            bottom: -.333333rem;
            right: .213333rem;
            border: .013333rem solid #ebebeb;
            background-color: #fff;
            width: 1.36rem;
            height: .693333rem;
            img {
                width: 100%;
                height: 100%;
                display: block;
            }
        }
        .img-float_top {
            position: absolute;
            left: 0;
            top: 0;
            width: 1.2rem;
            height: 1.2rem;
        }
    }
    .item-title {
        padding: 0 .213333rem;
        margin-top: .16rem;
        .newprice {
            font-size: .4rem;
            color: #ff464e;
            line-height: .586667rem;
            margin-right: .106667rem;
        }
        .oldprice {
            text-decoration: line-through;
            font-size: .293333rem;
            color: #bbbbbb;
        }
    }
    .item-small {
        padding-left: .213333rem;
        margin-bottom: .32rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .small-one {
            color: #3b3b3b;
            font-size: .32rem;
            width: 3.106667rem;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
        .small-two {
            color: #bbbbbb;
            font-size: .266667rem;
            margin-right: .213333rem;
        }
    }
`   