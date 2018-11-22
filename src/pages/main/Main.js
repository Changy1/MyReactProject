import { TabBar } from 'antd-mobile'
import React, { Component } from 'react'
import * as MainStyle from './MainStyle'

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
      selectedTab: 'redTab'
    };
  }


  render() {
    return (
      <MainStyle.MainWrapper>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          <TabBar.Item
            title="Life"
            key="Life"
            icon={ <MainStyle.MainIcon /> }
            selectedIcon={ <MainStyle.MainIcon /> }
            selected={this.state.selectedTab === 'blueTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
          >
            {123}
          </TabBar.Item>
        </TabBar>
      </MainStyle.MainWrapper>
    );
  }
}

export default Main