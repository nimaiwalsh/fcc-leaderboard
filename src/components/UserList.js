import React, { Component } from 'react';
import { connect } from 'react-redux';
import { css } from 'react-emotion';

import User from './User'
import { fetchUsers } from '../actions/index';

class UserList extends Component {

  componentDidMount() {
    this.props.fetchUsers(false);
  }

  renderUsers() {
    const { users } = this.props

    return users.map((user, ref) => {
      console.log(ref)
      return (
        <User
          key={ref}
          rank={ref+1}
          username={user.username}
          alltime={user.alltime}
          recent={user.recent}
          img={user.img}
        />
      )
    })
  }

  render() {
    if(!this.props.users) {
      return (<div>Loading...</div>)
    }
    return (
      <div>
        <table>
          <thead>
          <tr>
            <th>Rank</th>
            <th>FCC Name</th>
            <th>Points in last 30 Days</th>
            <th>All time points</th>
          </tr>
          </thead>
          <tbody>
          {this.renderUsers()}
          </tbody>
        </table>
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