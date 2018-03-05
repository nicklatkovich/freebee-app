import React, { Component } from 'react'
import { Parallax, Background } from 'react-parallax'
import IndexHeader from '../headers/indexHeader'
import IndexFooter from '../footers/indexFooter'
import NextBtn from '../buttons/nextBtn'

import Logo from '../../../res/images/logos/freebee-logo.png';

export default class PreviewPage extends Component {
  constructor() {
    super();
    this.state={}
  }

  componentDidMount() {

  }


  render() {
    return (
      <div className="preview-page">
        <IndexHeader />
        <div className="preview-page__content" >
          <Parallax blur={ 8 }
                    bgImage={ 'https://pp.userapi.com/c543103/v543103443/193ca/nmsVfIkGtz8.jpg' }
                    bgImageAlt="Shopping center"
                    strength={ 500 }
          >
            <div className="preview-page__parallax">
              <div className="preview-page__logo-container">
                <div className="preview-page__title">
                    <h1>Freebee</h1>
                </div>  
                <img className="preview-page__logo" src={ Logo } alt="Freebee logo" /> 
                <div className="preview-page__title">
                    <small>Для тех, кто берет от жизни все.</small>
                </div>  
              </div>
            </div>
          </Parallax>
          <Parallax strength={ 200 }
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
        <IndexFooter />
      </div>
    )
  }
}
