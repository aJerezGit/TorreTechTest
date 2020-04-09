import styled, { css } from 'styled-components'

export const SearchContainer = styled.div`
  margin: 36px auto;
  width: 100%;
  max-width: 800px;
`

export const Title = styled.h2`
 font-size: 35px;
 padding: 16px 20px;
 color: #fff;
 text-align: left;
 font-family: Arial, Helvetica, sans-serif;
`

export const SearchInput = styled.input`
  padding: 16px;
  margin-left: 15px;
  width: 90%;
  font-size: 20px;
  font-style: inherit;
  box-sizing: border-box;
  outline: none;
  align-items: center;
  color: #909CB5;
  line-height: 16px;
  border: 2px solid rgba(96,112,144,0.48);
  border-radius: 4px;
  background: #191E2A;
  /* padding: 9px 12px; */
  cursor: pointer;
`
export const Label = styled.label`
  position: relative;
`

export const Icon = styled.i`
  position: absolute;
  top: -5px;
  font-size: 24px;
  color: #555;
  right: 18px;
`

export const List = styled.ul`
    /* display: flex; */
    overflow: scroll;
    width: 85%;
    /* ${props => props.fixed && css`
        background: #fff;
        border-radius: 60px;
        box-shadow: 0 0 20px, rgba(0, 0, 0, 0.3);
        left: 0;
        margin: 0 auto;
        max-width: 400px;
        padding: 5px;
        position: fixed;
        right: 0;
        top: -20px;
        transform: scale(.5);
        z-index: 1;
    `} */
`

export const Item = styled.li`
    padding: 0 8px;
`
