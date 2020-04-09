import styled from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const Article = styled.article`
    min-height: 200px;
    ${fadeIn({ time: '2s' })}
    background-color: #31394D;
    /* width: 375px; */
    margin-left: -35px;
    box-shadow: 0 12px 13px rgba(0,0,0,0.16), 0 12px 13px rgba(0,0,0,0.16);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    border-radius: 10px;
    border: 2px solid rgba(96,112,144,0.48);
    margin-bottom: 10px;
`
export const ImgWrapper = styled.div`
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
export const Item = styled.li`
    padding: 0 8px;
`

export const Skills = styled.li`
  display: inline;
  font-size: 12px;
  color: #FFF;
  font-family:  Arial, Helvetica, sans-serif;
`

export const JobTitle = styled.h3`
  color:#ffffff;
  font-family:  Arial, Helvetica, sans-serif;
`
