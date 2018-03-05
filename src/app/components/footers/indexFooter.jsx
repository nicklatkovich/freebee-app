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
          <a className="index-footer__link" href="#">
            <FontAwesome  name='vk' 
                          size='2x'
              />
          </a> 
          <a className="index-footer__link" href="#">
            <FontAwesome  name='facebook' 
                          size='2x'
            />
          </a> 
          <a className="index-footer__link" href="#">
            <FontAwesome  name='instagram' 
                          size='2x'
            />
          </a> 
        </div>
      </div>
      <div className="index-footer__section">
        <div className="index-footer__section-text">
          <p>Полезные ссылки:</p>
        </div>
        <div className="index-footer__section-list">
          <a className="index-footer__link" href="https://trello.com/b/G4wBsmj9/freebee">
            <small>Доска Trello</small>
          </a>
          <a className="index-footer__link" href="https://github.com/GitStearis/freebee-app">
            <small>Репозиторий на GitHub</small>
          </a>
          <a className="index-footer__link" href="http://telegra.ph/Social-Weekend-Hackathon--kak-ehto-bylo-02-26">
            <small>Статья на Телеграфе</small>
          </a>
        </div>
          
      </div>
    </div>
  )
}
