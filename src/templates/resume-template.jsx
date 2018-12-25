import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'
import { Resume } from '../components/Resume'

class PageTemplate extends React.Component {
  render() {
    // const { title, subtitle } = this.props.data.site.siteMetadata
    // const page = this.props.data.markdownRemark
    // const { title: pageTitle, description: pageDescription } = page.frontmatter
    // const description = pageDescription !== null ? pageDescription : subtitle

    const {
      data: { allResumeJson },
    } = this.props
    const [edge] = allResumeJson.edges
    const { node } = edge
    return (
      <Layout>
        <div>
          <Helmet>
            <title>Zan's Resume</title>
            <meta name="description" content="resume" />
          </Helmet>
          <Sidebar {...this.props} />
          <div className="content">
            <div className="content__inner">
              <Resume data={node} />
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
  query ResumeQuery {
    site {
      siteMetadata {
        title
        subtitle
        copyright
        menu {
          label
          path
        }
        author {
          name
          email
          telegram
          twitter
          github
          rss
          vk
        }
      }
    }
    allResumeJson {
      edges {
        node {
          basics {
            name
            label
            summary
            email
            phone
            location {
              city
              countryCode
              state
            }
            profiles {
              network
              url
              username
            }
          }
          education {
            institution
            startDate
            endDate
            area
            studyType
          }
          work {
            position
            website
            company
            summary
            highlights
            startDate
            endDate
          }
          skills {
            name
            keywords
          }
        }
      }
    }
  }
`
