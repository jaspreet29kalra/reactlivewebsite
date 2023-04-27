import React, { Component } from 'react'

export default class Spinner extends Component {
  render() {
    return (
      <div className='mt-5 mb-5 text-center'>
        <div class="spinner-border" role="status">
            <span class="visually-hidden" style={{height:"500px", width:"500px"}}></span>
        </div>

      </div>
    )
  }
}
