import React, { Component } from 'react';
import styled, { css, injectGlobal } from 'react-emotion';

import UserList from './components/UserList';
import ListToggle from './components/ListToggle';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {listallCheck: false}
  }

  updateListallCheck(listall) {
    this.setState({ listallCheck: listall })
  }

  render() {
    //Highlight toggle text according to checked list
    const { listallCheck } = this.state;
    let classnameRecentpoints = (!listallCheck) ? 'ticked' : 'notick';
    let classnameAlltimepoints = (listallCheck) ? 'ticked' : 'notick';

    return (
      <div>
        <Header>
          <h1 className="title">FCC Leaderboard</h1>
        </Header>
        <Container className={togglepadding}>
          <span className={classnameRecentpoints}>Recent points</span>
            <ListToggle toggleTicked={this.updateListallCheck.bind(this)} />
          <span className={classnameAlltimepoints}>All time points</span>
        </Container>
        <Container>
          <UserList classnameATP={classnameAlltimepoints} classnameRP={classnameRecentpoints}/>
        </Container>
      </div>
    );
  }
}

export default App;

injectGlobal`
  html, body {
    box-sizing: border-box;
    margin: 0px;
    height: auto;
    font-family: 'Roboto', sans-serif;
  };
`
const Header = styled('div')({
  backgroundColor: 'black',
  height: '100px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '& .title': {
    fontSize: '2em',
    padding: '0',
    margin: '0',
    textAlign: 'center',
    color: '#00B75F',
  }
})

const Container = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px',
  backgroundColor: '#FFF'
})

const togglepadding = css({
  '& span': {
    padding: '5px',
    fontSize: '1.5rem',
    color: '#00B75F'
  },
  '& .ticked': {
    color: '#FF4D00',
  },
  '@media (max-width: 576px)': {
    '& span': {
      fontSize: '1rem', 
    }
  }
})


