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
    this.props.toggleTicked(this.state.listall)
    listall ?  this.props.fetchUsers(true) : this.props.fetchUsers(false)
  }

  render() {
    return (
      <label className={styles}>
        <input type='checkbox' onClick={this.toggleSwitch}/>
        <span className='slider'></span> 
      </label>
    )
  }

}

export default connect(null, { fetchUsers })(ListToggle);

//Styles
const styles = css({
  position: 'relative',
  display: 'inline-block',
  width: '60px',
  height: '34px',
  '& input': {
    display: 'none',
  },
  '& .slider': {
    position: 'absolute',
    cursor: 'pointer',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: '#CCC',
    borderRadius: '34px',
    transition: '.4s',
  },
  '& .slider:before': {
    position: 'absolute',
    content: "''",
    height: '26px',
    width: '26px',
    left: '4px',
    bottom: '4px',
    backgroundColor: '#FFF',
    borderRadius: '50%',
    transition: '.4s',
  },
  '& input:checked + .slider': {
    backgroundColor: '#2196F3',
  },  
  '& input:focus + .slider': {
    boxShadow: '0 0 1px #2196F3',
  },
  '& input:checked + .slider:before': {
    transform: 'translateX(26px)',
  },
})