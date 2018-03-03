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
              <div className="preview-page__container-logo">
                <div className="preview-page__title">
                    <h1>Freebee</h1>
                </div>  
                <img className="preview-page__logo" src = "https://lh5.googleusercontent.com/AHeqaB6TizRrhgqOhwo8pBaX7yOP0gNTev7lfnBTM5bIq_D6OHWcv1rqXgFMMdkr029j0T5sehJzZD8Fkd5t=w1366-h662-rw" alt = "Freebee logo" />   
              </div>
            </div>
          </Parallax>
          <Parallax strength = { 200 }
          >   
            <div style = {{ height: '800px' }} />
          </Parallax>
        </div>
      </div>
    )
  }
}
