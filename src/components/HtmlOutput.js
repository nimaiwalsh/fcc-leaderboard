import React from 'react';
import { css } from 'react-emotion';

const style = css({
  backgroundColor: 'hsla(0, 0%, 0%, 0.46)',
  padding: '10px',
  overflow: 'scroll',
  color: '#FFF'
})

const HtmlOutput = ({markUp}) => {
  return (
    <div className={style} dangerouslySetInnerHTML={{__html:markUp}} />
  )
}

export default HtmlOutput;