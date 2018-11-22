import styled from 'styled-components'


export const MainWrapper = styled.div`
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0 ;
`

export const MainIcon = styled.div`
    width: 22px;
    height: 22px;
    background:${props => `url(${props.url}) center center /  21px 21px no-repeat` } 
`