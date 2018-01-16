import React, { Component } from 'react';
import { connect } from 'react-redux';
import { css } from 'react-emotion';

import { fetchUsers } from '../actions/index';

class UserList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return (
      <div>
       My first peice of data
     </div>
   )
  }
}

function mapStateToProps(state) {
  return {
    users: state.users,
  }
}

export default connect(mapStateToProps, { fetchUsers })(UserList);