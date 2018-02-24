import React, { Component } from 'react'
import IndexHeader from '../headers/indexHeader'

export default class PreviewPage extends Component {
  render() {
    return (
      <div className="preview-page">
        <IndexHeader />
        <div className="preview-page__content">
          PREVIEW PAGE
        </div>
      </div>
    )
  }
}
