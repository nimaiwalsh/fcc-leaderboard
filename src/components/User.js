import React from 'react';
import { css } from 'react-emotion';

export default ({rank, username, alltime, recent, img}) => {  
  return (
    <tr>
      <td>{rank}</td>
      <td><div className={styles}><img src={img} />{username}</div></td>
      <td>{recent}</td>
      <td>{alltime}</td>
    </tr>
  ) 
}

const styles = css({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  '& img': {
    margin: '10px 10px 10px 0px',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
  },
  '@media (max-width: 576px)': {
    '& img': {
      height: '30px',
      width: '30px',
    }
  }
})