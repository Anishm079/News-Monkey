import React, { Component } from 'react'
import loading from "../Assets/loading.gif";

export class Loading extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loading} alt="Loading" />
      </div>
    )
  }
}

export default Loading
