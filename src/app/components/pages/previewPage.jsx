import React, { Component } from 'react'
import { Parallax, Background } from 'react-parallax'
import IndexHeader from '../headers/indexHeader'
import NextBtn from '../buttons/nextBtn'

export default class PreviewPage extends Component {
  constructor() {
    super();
    this.state = {}
  }

  componentDidMount() {

  }


  render() {
    return (
      <div className = "preview-page">
        <IndexHeader />
        <div className = "preview-page__content" >
          <Parallax blur = { 5 }
                    bgImage = { 'https://pp.userapi.com/c543103/v543103443/193ca/nmsVfIkGtz8.jpg' }
                    bgImageAlt = "Shopping center"
                    strength = { 500 }
          >
            <div className="preview-page__parallax">
              <div className="preview-page__logo-container">
                <div className="preview-page__title">
                    <h1>Freebee</h1>
                </div>  
                <img className="preview-page__logo" src = "https://lh5.googleusercontent.com/AHeqaB6TizRrhgqOhwo8pBaX7yOP0gNTev7lfnBTM5bIq_D6OHWcv1rqXgFMMdkr029j0T5sehJzZD8Fkd5t=w1366-h662-rw" alt = "Freebee logo" />   
              </div>
            </div>
          </Parallax>
          <Parallax strength = { 200 }
          >   
            <div className="preview-page__article-container">
              <div className="preview-page__article">
                <div className="preview-page__article-title">
                  <h2>Lorem ispum</h2>
                </div>
                <div className="preview-page__article-description">
                  <small>dolor sit amet, consectetur adipiscing elit</small>
                </div>
                <div className="preview-page__article-content">
                  <p>Aenean finibus, est vitae sodales auctor, lacus magna auctor neque, id vestibulum ante enim ut quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce condimentum, nisl quis imperdiet tempus, lacus purus eleifend neque, at lobortis leo ex eu felis. Maecenas laoreet rhoncus felis, sed auctor leo. Nam maximus vestibulum nunc, a posuere ipsum accumsan nec. Ut lobortis orci sit amet erat euismod commodo. Duis mattis vestibulum eros id eleifend. Etiam pharetra nibh ex, et eleifend nulla pellentesque quis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi interdum volutpat dignissim.</p>
                </div>  
              </div>
            </div>
          </Parallax>
        </div>
      </div>
    )
  }
}
