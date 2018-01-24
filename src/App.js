import React, { Component } from 'react';
import styled, { css, injectGlobal } from 'react-emotion';

import UserList from './components/UserList';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <Header>
          <h1 className="title">FCC Leaderboard</h1>
        </Header>
        <Container>
          <UserList />
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
  '& .title': {
    fontSize: '2em',
    textShadow: '1px 2px 3px hsl(0, 0%, 92.9%)',
    textAlign: 'center',
  }
})

const Container = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})


