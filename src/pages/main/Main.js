import { TabBar } from 'antd-mobile'
import React, { Component } from 'react'
import * as MainStyle from './MainStyle'
import uuid from 'uuid'
import HomeContainer from './Home/HomeContainer'
import ClassifyContainer from './Classify/ClassifyContainer'
import CarContainer from './ShoopingCar/CarContainer'
import PersonageContainer from './personage/PersonageContainer'

import HomeImg from '@as/images/home.png'
import HomeImgActive from '@as/images/homeactive.png'
import CarImg from '@as/images/car.png'
import CarImgActive from '@as/images/caractive.png'
import MyImg from '@as/images/my.png'
import MyImgActive from '@as/images/myactive.png'
import OthersImg from '@as/images/others.png'
import OthersImgActive from '@as/images/othersactive.png'
 
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home',
      mainitem: [
        { id: uuid(), title: '首页', selected: 'home', component: <HomeContainer />, icons: { default: HomeImg, active: HomeImgActive } },
        { id: uuid(), title: '分类', selected: 'others', component: <ClassifyContainer />, icons: { default: OthersImg, active: OthersImgActive } },
        { id: uuid(), title: '购物车', selected: 'car', component: <CarContainer />, icons: { default: CarImg, active: CarImgActive } },
        { id: uuid(), title: '我的卷皮', selected: 'my', component: <PersonageContainer />, icons: { default: MyImg, active: MyImgActive } },
      ]
    };
  }

  renderItem () {
    let { mainitem } = this.state
    return mainitem.map( item => (
      <TabBar.Item
        // 标题文字
          title = { item.title }
        // 标识
          key = { item.id }
        // 默认展示图片
          icon={ <MainStyle.MainIcon url = { item.icons.default } /> }
        // 选中后展示图片
          selectedIcon={ <MainStyle.MainIcon url = { item.icons.active } /> }
        // 是否选中
          selected={this.state.selectedTab ===  item.selected }
        // 点击bar触发，将selectedTab改为与selected内相同，即可确认点击
          onPress={() => {
            this.setState({ selectedTab: item.selected });
          }}
        >
          { item.component }
      </TabBar.Item>
    ))
  }

  render() {
    return (
      <MainStyle.MainWrapper>
        <TabBar
        // 未选中的字体颜色
          unselectedTintColor="#333"
        // 选中的字体颜色
          tintColor="#ff464e"
        // bar的北京颜色
          barTintColor="#fff"
        >
          { this.renderItem() }
        </TabBar>
      </MainStyle.MainWrapper>
    );
  }
}

export default Main