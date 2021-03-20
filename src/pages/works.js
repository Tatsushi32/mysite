import React from "react"
import { Row, Col, Container } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import  "../styles/works.scss"


class WorksPage extends React.Component {
  render() {
    const siteTitle = "Works"
    return (
      <Layout siteTitle={siteTitle} pageInfo={{ pageName: "works" }}>
        <SEO title="Works" />
        {/* <h1 className="text-center py-5"><span>P</span>ortfolio<span>.</span></h1>  */}
        <Container>
          <Row className="portfolio">
            <Col lg={5} className="portfolio-item device tablet flex-order-tablet_0 video-design device-list">
              <div className="device-hardware">
                <a className="hover-trigger" href="https://anihon.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                  <span className="device-screen image1">
                  <span className="hover-name">アニメのタイトル翻訳</span>
                  </span>
                </a>
              </div>
            </Col>
            <Col lg={7}>
              <h2>Anime Title Translate</h2>
              <p>アニメのタイトルを相互翻訳するアプリケーション。日本語⇆英語。フィリピンで現地の人とアニメの話をする際、通信制限の遅いなか英語のタイトルを検索したり画像を検索する作業が面倒だったため作成した。検索結果はタイトルと画像が表示される。また、続けて検索できるようにデザイン。予測変換機能あり。ひらがな、カタカナ、略称、英語タイトルで検索できる。検索結果がない場合はリクエストできる。言語はPHPでCakephpを使用。</p>
            </Col>
          </Row>
          <Row className="portfolio">
            <Col lg={5} className="portfolio-item device tablet flex-order-tablet_0 video-design device-list">
              <div className="device-hardware">
                <a className="hover-trigger" href="https://scriptmaker123.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                  <span className="device-screen image2">
                  <span className="hover-name">英語のプレゼンスクリプト作成</span>
                  </span>
                </a>
              </div>
            </Col>
            <Col lg={7}>
              <h2>Script Maker</h2>
              <p>NexSeedでのチーム作品。英語のプレゼンテーションのスクリプトの作成を楽にするアプリケーション。作成画面では、導入・本論・結論それぞれのシチュエーションごとの選択項目から好みの表現をクリックするだけ。修正が必要な場合は直接入力することができる。スクリプトの全体像が理解できない方のために、完成例を用意。いつでも編集できるようにタイトルをつけて保存可能。削除も簡単で効率的に管理ができる。言語はPHPでLaravelを使用。私は主に見た目の部分を担当。</p>
            </Col>
          </Row>
        </Container>
      </Layout>
    )
  }
}
export default WorksPage