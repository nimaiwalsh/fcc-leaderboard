import React from 'react';
import { css } from 'react-emotion';

const style = css({
  '.fade': {
    backgroundColor: 'red',
  }
})

export default ({rank, username, alltime, recent, img}) => {  
  return (
    <tr>
      <td>{rank}</td>
      <td><img src={img} style={{width: '60px'}}/>{username}</td>
      <td>{alltime}</td>
      <td>{recent}</td>
    </tr>
  ) 
}