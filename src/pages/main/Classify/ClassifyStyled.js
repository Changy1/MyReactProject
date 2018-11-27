import styled from 'styled-components'

export const ContainerForClassify = styled.div`
    background: #fff;
    overflow: hidden;
    width: 100%;
    min-height: 100%;
`

export const SearchForClassify = styled.div`
    height: .8rem;
    padding: .08rem .16rem ;
    margin: .32rem ;
    border: .026667rem solid #bbb;
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
    .serchinput {
        display: flex;
        align-items: center;
        width: 100%;
        
    }
`

export const MainForClassify = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
`

export const LeftForList = styled.div`
    width: 25%;
    height: calc(100vh - 2.8rem);
    overflow: hidden;
    background: #f9f9f9;
`

export const LeftForItem = styled.div`
    height: 1.2rem;
    line-height:1.2rem;
    border-bottom: .013333rem solid #ebebeb;
    border-left: ${ props => `${ props.active ? '.053333rem solid #ff464e' : '.053333rem solid #f9f9f9'}`};
    padding-left: .266667rem;
    color: ${ props => `${ props.active ? '#ff464e' : '#333' }`};
`

// border-box会在宽度内再设定padding
export const RightForList = styled.div`
    width: 75%;
    height: calc(100vh - 2.8rem);
    overflow: scroll;
    padding-left: .4rem;
    padding-top: .266667rem;
    display: flex;
    align-content: flex-start;
    flex-wrap: wrap;
`

export const RightForItem = styled.div`
    position: relative;
    width: 2.266667rem;
    height: 2.493333rem;
    padding: 0 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    img {
        width: 100%;
    }
    span {
        font-size: .16rem;
    }
    div {
        position: absolute;
        width: .8rem;
        height: .8rem;
        line-height: .8rem;
        border-radius: 50%;
        right: 0;
        top: -0.213333rem;
        color: #fff;
        background: #ff464e;
        font-size: .133333rem;
        text-align: center;
    }
` 