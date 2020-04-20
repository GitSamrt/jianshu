import React, { PureComponent } from 'react'
import {WriterWrapper } from '../style'

class Writer extends PureComponent {
  render() {
    return (
      <div>
        <WriterWrapper>
          Hello, world!
        </WriterWrapper>
      </div>
    )
  }
}


export default Writer