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
      <div className="preview-page">
        <IndexHeader />
        <div className="preview-page__content" >
          <Parallax
            blur={1}
            bgImage={'https://res.cloudinary.com/dfunxotqn/image/upload/c_scale,w_2161/v1519510042/index.jpg'}
            bgImageAlt="the cat"
            strength={400}
          >
            Put some text content here
            or even an empty div with fixed dimensions
            to have a height for the parallax.
            <div style={{ height: '800px' }} />
          </Parallax>
          <Parallax
            blur={{ min: -5, max: 5 }}
            bgImage={'https://static.pexels.com/photos/531880/pexels-photo-531880.jpeg'}
            bgImageAlt="the dog"
            strength={200}
          >
              Blur transition from min to max
            <div style={{ height: '800px' }} />
          </Parallax>
          <Parallax strength={800}>
            <Background className="preview-page__parallax">
              <img src="https://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero-00e10b1f.jpg" alt="fill murray" />
            </Background>
          </Parallax>
        </div>
        <NextBtn />
      </div>
    )
  }
}
