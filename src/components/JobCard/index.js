import React from 'react'
import { useNearScreen } from '../../hooks/useNearScreen'
import { Article, ImgWrapper, Img, JobTitle, Skills } from './style'
import { Link } from '@reach/router'

const DEFAULT_IMAGE = 'https://www.loottis.com/wp-content/uploads/2014/10/default-img.gif'

export const JobCard = ({
  id,
  objective,
  type,
  status,
  deadline,
  organizations,
  skills
}) => {
  const [show, ref] = useNearScreen()

  return (
    <Article ref={ref}>
      {
        show &&
          <>
            <ImgWrapper>
              <Img src={organizations[0].picture || DEFAULT_IMAGE} />
            </ImgWrapper>
            <Link to={`/jobbio/${id}`}>
              <JobTitle>{objective}</JobTitle>
              <p>{type}</p>
              {skills.map((item) =>
                <Skills key={item.code}>
                  {item.name}:{item.experience},
                </Skills>
              )}
              <p>{status}</p>
              <p>{deadline}</p>
            </Link>
          </>
      }
    </Article>
  )
}
