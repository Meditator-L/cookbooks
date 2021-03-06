import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { NavBar, Icon } from 'antd-mobile';
import { ListWrap,SubTitle,ListContainer} from './StyledList';
import { actionCreator } from '@/Home/cookbook/';

class List extends Component {

  handleClickLeft = () => {
    let { history } = this.props
    history.goBack()
  }

  componentDidMount() {
    //解决刷新页面，redux数据丢失问题
    if (this.props.list.length === 0) {
      this.props.loadData()
    }
  }
  render() {
    return (
      <ListContainer>
        <NavBar
          mode="dark"
          icon={<Icon type="left" />}
          onLeftClick={this.handleClickLeft}
          style={{ backgroundColor: '#ee742f' }}
        >
          {/* 路由跳转后对应标题 */}
          {this.props.location.state.title}
        </NavBar>

        <ul>
          {
            this.props.list.map((li, i) => (
              <ListWrap
                width="0 0 1px 0"
                key={li.id + i}
              >
                <div>
                  <img src={li.img} width="115" height="75" alt="" />
                </div>
                <div>
                  <h1>{li.name}</h1>
                  <SubTitle>{li.burdens}</SubTitle>
                  <h3>{li.all_click}浏览  {li.favorites}收藏</h3>
                </div>
              </ListWrap>
            ))
          }
        </ul>
      </ListContainer >
    );
  }
}

export default connect(
  state => ({
    list: state.cookbook.list
  }),
  dispatch => (
    {
      loadData() {
        dispatch(actionCreator.loadDataAsync())
      }
    }
  ))(List);