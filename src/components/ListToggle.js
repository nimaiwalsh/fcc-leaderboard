import React, { Component } from 'react';
import { connect } from 'react-redux';
import { css } from 'react-emotion';

import { fetchUsers } from '../actions/index';

class ListToggle extends Component {
  constructor(props) {
    super(props)
    this.state = {listall: false}
  }

  toggleSwitch = () => {
    this.setState(prevState => {
      return {
        listall: !prevState.listall
      }
    }, () => { this.fetchUserList() })
  }

  fetchUserList() {
    const { listall } = this.state
    listall ?  this.props.fetchUsers(true) : this.props.fetchUsers(false)
  }

  render() {
    return (
      <label className='switch'>
        <input type='checkbox' onClick={this.toggleSwitch}/>
        <span className='slider round'></span> 
      </label>
    )
  }

}

export default connect(null, { fetchUsers })(ListToggle);