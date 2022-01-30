import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MenuList from '@c/menu/MenuList';
import { get } from '@u/http';


class Menu extends Component {
  static propTypes = {
    type: PropTypes.string
  }
  state = {
    cate: null,
    type: 'category',
    curCate: this.props.type === 'category' ? '热门' : '肉类'
  }

  async componentDidMount() {
    let result = await get({
      url: '/api/category'
    })
    this.setState({
      cate: result.data.data
    }
    )
  }
  handleAsideClick = (curCate) => {
    return () => {
      this.setState({
        curCate
      })
    }
  }

  render() {
    return (
      <MenuList
        onAsideClick={this.handleAsideClick}
        curCate={this.state.curCate}
        cate={this.state.cate && this.state.cate[this.props.type]}
      ></MenuList>
    );
  }
}

export default Menu;