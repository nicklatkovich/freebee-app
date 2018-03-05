import React from 'react'
import FontAwesome from 'react-fontawesome';

export default () => {
  return (
    <div className="index-footer">
      <div className="index-footer__section">
        <div className="index-footer__section-text">
          <p>Freebee в социальных сетях:</p>
        </div>
        <div className="index-footer__section-social">
          <a className="index-footer__section-social-link" href="#">
            <FontAwesome  name='vk' 
                          size='2x'
              />
          </a> 
          <a className="index-footer__section-social-link" href="#">
            <FontAwesome  name='facebook' 
                          size='2x'
            />
          </a> 
          <a className="index-footer__section-social-link" href="#">
            <FontAwesome  name='instagram' 
                          size='2x'
            />
          </a> 
        </div>
      </div>
      <div className="index-footer__section">
        
      </div>
    </div>
  )
}
