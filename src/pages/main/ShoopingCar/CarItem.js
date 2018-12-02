import React, { Component } from 'react'
import { ItemForCar } from './CarStyle'
import connect from '@connect'
import { Toast } from 'antd-mobile'

class CarItem extends Component {
    render () {
        let { info } = this.props
        return (
            <ItemForCar>
                <div className = 'item-left'>
                    <input type = 'checkbox' />
                </div>
                <div className = 'item-right'>
                    <div className = 'item-img'>
                        <img src = { info.imgurl }/>
                    </div>
                    <div className = 'item-text'>
                        <div className = 'item-text_top'>
                            <p className = 'item-p_one'>{ info.title }</p>
                            {this.props.isShow ? (
                                <p onClick = { () => { this.removeOne(info) }} className = 'item-p_two'>删除</p>
                            ) : ( '' )}
                        </div>
                        <div className = 'item-text_bottom'>
                            <p className = 'item-p_three'>
                                <span className = 'item-three_spanone'>{ info.newprice }</span>
                                <span className = 'item-three_spantwo'>{ info.oldprice }</span>
                            </p>
                            <p className = 'item-p_four'>
                                <span>X{ info.num }</span>
                            </p>
                        </div>
                    </div>
                </div>
            </ItemForCar>
        )
    }
    loadingToast() {
        Toast.loading('正在加载...', 0.5, () => {
            this.successToast()
        });
    }
    successToast () {
        Toast.success('删除成功!!!', 0.5);
      }
    removeOne = (info) => {
        this.loadingToast()
        this.props.car_actions.removeGoodsForCar(info)
    }
}

export default connect(CarItem, [{ name: 'car'}])