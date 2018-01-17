import React, { Component } from 'react';
import { connect } from 'react-redux';
import { css } from 'react-emotion';

import User from './User'
import { fetchUsers } from '../actions/index';

class UserList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUser() {
    const { users } = this.props
    
    return users.map((user) => {
      return (
        <User
          username={user.username}
          alltime={user.alltime}
          recent={user.recent}
          img={user.img}
        />
      )
    })
  }

  render() {
    return (
      <div>
        {this.renderUser()}
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