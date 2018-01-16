import React, { Component } from 'react';
import styled, { css, injectGlobal } from 'react-emotion';
import UserList from './components/UserList';

injectGlobal`
  html, body {
    box-sizing: border-box;
    background: linear-gradient(to right, #da4453, #89216b);
    margin: 0px;
    height: auto;
    font-family: 'Roboto', sans-serif;
  };
  body {
    padding: 30px;
  };
`
const Wrapper = styled('div')({
  display: 'grid',
  gridGap: '5px',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridTemplateRows: 'auto',
  [`@media (max-width: 576px)`]: {
    gridTemplateColumns: '1fr',
  }
})

const style = css({
  '.title': {
    fontSize: '2em',
    textShadow: '1px 2px 3px hsl(0, 0%, 92.9%)'
  }
})

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className={style}>
        <h1 className="title">FCC Leaderboard</h1>
        <Wrapper>
          <UserList />
        </Wrapper>
      </div>
    );
  }
}

export default App;
