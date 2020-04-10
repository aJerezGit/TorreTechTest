import styled from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const ImgWrapper = styled.div`
    ${fadeIn({ time: '2s' })}
    border-radius: 10px;
    /* display: block; */
    float: left;
    overflow: hidden;
    padding: 40px 50px 50px 50px;
    position: relative;
    width: 10%;
    margin-left: -60px;
`

export const Img = styled.img`
    box-shadow: 0 10px 14px, rgba(0, 0, 0, .2);
    border: 2px solid rgba(96,112,144,0.48);
    /* height: 100%; */
    object-fit: cover;
    position: absolute;
    top: 0;
    border-radius:100%;
    margin-top:15px;
    width:70px;
    height:65px;
`
