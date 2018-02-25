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
            bgImage={'http://res.cloudinary.com/dfunxotqn/image/upload/v1519556780/map1.png'}
            bgImageAlt="the cat"
            strength={400}
          >
            <div style={{ height: '800px' }} />
          </Parallax>
          <Parallax
            blur={{ min: -5, max: 5 }}
            
            bgImage={'http://healthybeesllc.com/wp-content/uploads/2017/09/WHOWEARE-1.jpg'}
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
