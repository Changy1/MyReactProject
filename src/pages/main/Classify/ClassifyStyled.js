import styled from 'styled-components'

export const ContainerForClassify = styled.div`
    background: #fff;
    overflow: hidden;
    width: 100%;
`

export const SearchForClassify = styled.div`
    height: .8rem;
    padding: .08rem .16rem ;
    margin: .32rem ;
    border: 1px solid #bbb;
    border-radius: .066667rem;
    background: #fff;
    display: flex;
    align-items: center;
    img {
        height: .64rem;
    }
    p {
        font-size: .32rem;
        color: #999;
        margin-left: .2rem;
    }
`

export const MainForClassify = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
`

export const LeftForList = styled.div`
    width: 25%;
    background: #f9f9f9;
`
// border-box会在宽度内再设定padding
export const RightForList = styled.div`
    width: 75%;
    padding-left: .4rem;
`

export const LeftForItem = styled.div`
    height: 1.2rem;
    line-height:1.2rem;
    border-bottom: 1px solid #ebebeb;
    border-left: ${ props => `${ props.active ? '4px solid #ff464e' : '4px solid #f9f9f9'}`};
    padding-left: .266667rem;
    color: ${ props => `${ props.active ? '#ff464e' : '#333' }`};
`