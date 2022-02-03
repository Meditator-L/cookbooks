import React, { Component } from 'react';
import { connect } from 'react-redux';
import actionCreator from '../actionCreator';
import CookBookUi from '../ui/CookBookUi';


class CookBook extends Component {
  render() {
    return (
      <CookBookUi list={this.props.list}></CookBookUi>
    );
  }
  componentDidMount() {
    this.props.loadData()
  }
  componentDidUpdate() {
    // console.log(this.props.list);
  }
}
export default connect(
  state => {
    return {
      list: state.cookbook.list
    }
  },
  (dispatch) => ({
    loadData() {
      dispatch(actionCreator.loadDataAsync())
    }
  }))(CookBook)
