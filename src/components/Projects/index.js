import React from 'react'
import PropTypes from 'prop-types'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { 
  List,
  Description,
  Figure,
  Article,
} from './styles'

const Projects = () => {

  const { allImageSharp: { nodes } } = useStaticQuery(
    graphql`
      query ProjectImages {
        allImageSharp {
          nodes {
            fluid {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    `
  )

  return (
    <List id="projects">
      {nodes.map((item) => (
        <Article>
          <Link to="/">
            <Figure>
              <div>
                <Img fluid={item.fluid} />
              </div>
              <figcaption>
                <h2>Project Title</h2>
              </figcaption>
            </Figure>
            <Description>
              <p>Encouraging community engagement for a better college experience</p>
            </Description>
          </Link>
        </Article>
      ))}
    </List>
  )
}

// Projects.propTypes = {
//   data: PropTypes.arrayOf(PropTypes.object).isRequired
// }

export { Projects }