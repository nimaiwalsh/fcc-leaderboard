import React from 'react';

export default ({username, alltime, recent, img}) => {
  return (
    <div>
      <ul>
        <li>{username}</li>
        <li>{alltime}</li>
        <li>{recent}</li>
      </ul>
    </div>
  )
}