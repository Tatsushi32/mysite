import React from "react"
import { Row, Col, Container } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import  "../styles/career.scss"

class CareerPage extends React.Component {
  render() {
    const siteTitle = "Career"
    return (
      <Layout siteTitle={siteTitle} pageInfo={{ pageName: "career" }}>
      <SEO title="Career" />
      <Container>
        {/* <h1 className="text-center py-5">About</h1> */}
        <Row>
          <Col md={12}>
            <div className="main-timeline8">
              <div className="timeline">
                <span className="timeline-icon"></span>
                <span className="year">2020年 4月~</span>
                <div className="timeline-content">
                  <h3 className="title">大学に復学</h3>
                  <p className="description">
                    ゼミのメンバーと就活情報発信サイト「CHO connect」(cho-connect.com)を作成・運用中。コロナの影響で、春と秋の基本情報技術者検定の試験が中止になりモチベーションが少し下がったが、アニメや漫画で耐える。
                  </p>
                </div>
              </div>
              <div className="timeline">
                <span className="timeline-icon"></span>
                <span className="year">2020年 1月~3月</span>
                <div className="timeline-content">
                  <h3 className="title nexseed">日本に帰国</h3>
                  <p className="description nexseed">
                    帰国後は基礎から学びなおそうと思い、基本情報技術者検定を勉強。また、アニメで学ぶ日本語学習者向けのコンテンツを作りWebサイトや各種SNSで発信した。(現在は閉鎖)
                  </p>
                </div>
              </div>
              <div className="timeline">
                <span className="timeline-icon"></span>
                <span className="year">2019年 7月~12月</span>
                <div className="timeline-content">
                  <h3 className="title">Fullspeed Technologies Inc.</h3>
                  <p className="description">
                    NexSeed卒業後、セブのFullspeed Technologies Inc.で、エンジニアインターンとして働く。Webサイトの運営をしながら約1ヶ月の研修後、チームでコーポレートサイトを作成(Gatsby.js)。8月ごろからプロジェクトに参画し、様々な機能開発を経験(PHP)。分からないことが多すぎるため日々勉強。
                  </p>
                </div>
              </div>
              <div className="timeline">
                <span className="timeline-icon"></span>
                <span className="year">2019年 4月~6月</span>
                <div className="timeline-content">
                  <h3 className="title nexseed">NexSeedでIT留学</h3>
                  <p className="description nexseed">
                    TOEFLで及第点を取得しアメリカ留学の権利を手にしたが、英語だけの留学は面白くないと感じ辞退。1年間大学を休学し、フィリピンで英語とプログラミングの学習ができるNexSeedに留学。チーム開発を通してプログラミングの基礎を学習(html, css, javascript, php)。プログラミングにはまってしまい英語をあまり勉強しなくなる。
                  </p>
                </div>
              </div>
              <div className="timeline">
                <span className="timeline-icon"></span>
                <span className="year">2017年 4月 ~ 2019年 3月</span>
                <div className="timeline-content">
                  <h3 className="title">香川大学 経済学部 入学</h3>
                  <p className="description">
                    アメリカ留学を目指しTOEFL ibtの勉強をしながら、ダンスと筋トレに奮励し、アニメとラップバトルで癒されていた。
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      </Layout>
    )
  }
}
export default CareerPage
