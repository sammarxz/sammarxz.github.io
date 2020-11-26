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
              <Img fluid={item.fluid} />
            </Figure>
            <Description>
              <p>My side-project recently reached ten thousand stars on Github. To be honest, the stars don't really matter, but the lessons I learned do. In this post, I'm going to share four of the most important lessons I learned.</p>
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