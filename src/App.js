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
      <div className={style}>
        <h1 className="title">FCC Leaderboard</h1>
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
  body {
    padding: 30px;
  };
`
const style = css({
  '& .title': {
    fontSize: '2em',
    textShadow: '1px 2px 3px hsl(0, 0%, 92.9%)'
  }
})

const Container = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})
