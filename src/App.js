import React, { Component } from 'react'
import { ImageBox } from './components/ImageBox'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>城山</h2>
          <h3>(城山展望台・城山自然遊歩道)</h3>
        </div>
        <ImageBox />
        <h2>城山展望台</h2>
        <p className="App-intro">
          展望台からは桜島をはじめ錦江湾や鹿児島市街地を一望でき、天気の良い日には遠く霧島や指宿の開聞岳も見えます。また、夜景が美しいことでも有名です。
        </p>
        <h2>城山自然遊歩道</h2>
        <p className="App-intro">
          市街地の中心部に位置する標高107メートルの小高い山で、クスの大木やシダ・サンゴ樹など600種以上の温帯・亜熱帯性植物が自生する自然の宝庫です。遊歩道での散策も楽しめ、市民の憩いの場ともなっています。
        </p>
        <p className="App-intro">
          城山は西南戦争の最後の激戦地となったため、西郷洞窟や西郷終焉の地など、西南戦争にまつわる史跡が多く存在します。
          昭和６年に国の史跡・天然記念物の指定を受けました。 （県推奨森林浴の森70選：野鳥・植物観察コース）
        </p>
      </div>
    )
  }
}

export default App
