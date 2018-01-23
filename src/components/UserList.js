import React, { Component } from 'react';
import { connect } from 'react-redux';
import { css } from 'react-emotion';

import User from './User'
import { fetchUsers } from '../actions/index';

class UserList extends Component {

  componentDidMount() {
    //Pass true to return Top points all time
    //Pass false to return last 30 days
    this.props.fetchUsers(false);
  }

  renderUsers() {
    const { users } = this.props

    return users.map((user, ref) => {
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
        <table className={tableStyles}>
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
   )
  }
}

function mapStateToProps(state) {
  return {
    users: state.users,
  }
}

export default connect(mapStateToProps, { fetchUsers })(UserList);

const tableStyles = css({
  width: '90%',
  maxWidth: '1000px',
  color: '#EAEAEA',
  borderCollapse: 'collapse',
  borderSpacing: '0',
  '& thead > tr > th': {
    backgroundColor: '#222222',
    color: '#00B75F',
    textAlign: 'left',
    padding: '30px 0'
  },
  '& tbody > tr:nth-child(1n)': {
    backgroundColor: '#686868',
  },
  '& tbody > tr:nth-child(2n)': {
    backgroundColor: '#393939',
  },
  '& thead > tr:first-child > th:first-child': {
    borderRadius: '10px 0 0 0'
  },
  '& thead > tr:first-child > th:last-child': {
    borderRadius: '0 10px 0 0'
  },
  '& tbody > tr:last-child > td:last-child': {
    borderRadius: '0 0 10px 0'
  },
  '& tbody > tr:last-child > td:first-child': {
    borderRadius: '0 0 0 10px'
  }
})