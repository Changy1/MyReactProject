import styled from 'styled-components'

export const SearchWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    background: #fff;
`

export const ListForSearch = styled.div`
    padding: 0 .373333rem;
    color: #666;
`

export const ItemForSearch = styled.div`
    margin-top: .373333rem;
    p {
        font-size: .186667rem;
        color: #999;
    }
    div{
        display: flex;
        flex-wrap: wrap;
        a {
            color: ${ props =>  props.hot ? '#ff464e' : '#666' };
            border-radius: .106667rem;
            padding: .133333rem .266667rem;
            margin-top: .213333rem;
            margin-bottom: .08rem;
            margin-right: .266667rem;
            font-size: .16rem;
            background-color: #f4f4f4;
        }
    }
`