import React from "react"
import { Link } from "gatsby"
import { Row, Col, Container, Jumbotron, Button } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/index.scss"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Tatsushi Kakeya"
    const profileDescription = "Dance, Anime, Rap"
    const profileImage = <div class="profileImage"></div>
    return (
      <Layout siteTitle={siteTitle} profileImage={profileImage} profileDescription={profileDescription} pageInfo={{ pageName: "home" }}>
        <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
        <Container className="text-center">
          <Jumbotron className="aboutme">
            <div className="mypic"></div>
            <h1>Hi! I'm Kakeya Tatsushi</h1>
            <p>
              岡山県出身 大学4年生
            </p>
            <p>
              <Link to="/career"><Button className="careerButton" variant="light">Career</Button></Link>
            </p>
          </Jumbotron>
          <Jumbotron className="myworks">
            <h1>Works</h1>
            <Row className="portfolio">
              <Col lg={6} className="portfolio-item device tablet flex-order-tablet_0 video-design device-list">
              <h3>アニメのタイトル翻訳</h3>
                <div className="device-hardware">
                  <span className="device-screen image1">
                  </span>
                </div>
              </Col>
              <Col lg={6} className="portfolio-item device tablet flex-order-tablet_0 video-design device-list">
              <h3>英語のプレゼンスクリプト作成</h3>
                <div className="device-hardware">
                  <span className="device-screen image2">
                  </span>
                </div>
              </Col>
            </Row>
            <p>
              <Link to="/works"><Button className="worksButton" variant="light">Works</Button></Link>
            </p>
          </Jumbotron>
        </Container>
      </Layout>
    )
  }
}

export default IndexPage
