import React from 'react'
import { ImgWrapper, Img } from './styles'
import { Link } from '@reach/router'

export const PersonMiniCard = ({
  id,
  username,
  name,
  picture,
  professionalHeadline
}) => {
  return (
    <>
      <Link to={`/userbio/${username}`}>
        <ImgWrapper>
          <Img src={picture} alt={name} />
        </ImgWrapper>
        <p>{name}</p>
        <p>{professionalHeadline}</p>
      </Link>
    </>
  )
}
