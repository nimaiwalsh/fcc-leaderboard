import React from 'react';
import { css } from 'react-emotion';

export default ({rank, username, alltime, recent, img}) => {  
  return (
    <tr>
      <td>{rank}</td>
      <td><div className={styles}><img src={img} />{username}</div></td>
      <td>{alltime}</td>
      <td>{recent}</td>
    </tr>
  ) 
}

const styles = css({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  '& img': {
    paddingRight: '10px',
    width: '60px',
    height: '60px',
  }
})