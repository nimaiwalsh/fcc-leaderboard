import React from 'react';
import { css } from 'react-emotion';

const style = css({
  boxSizing: 'border-box',
  width: '100%',
  height: '100%',
  resize: 'none',
  outline: 'none',
  [`@media (max-width: 576px)`]: {
    height: '400px'
  }
})

const MarkupInput = ({ code, markup }) => {
  return (
    <div className="markup-code">
      <textarea
        className={style} 
        name="markdown"
        value={code} 
        onChange={markup} />
    </div>
  )
}

export default MarkupInput;