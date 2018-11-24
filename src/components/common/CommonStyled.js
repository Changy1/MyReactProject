import styled from 'styled-components'

export const InputForSearch = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 1.173333rem;
    padding-left: .373333rem;
    background: #fff;
    border-bottom: 1px solid #f2f2f2;
    display: flex;
    justify-content: space-between;
    align-items: center;
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