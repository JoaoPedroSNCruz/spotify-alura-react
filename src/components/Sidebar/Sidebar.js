import React from 'react';
import './Sidebar.css';
import logoSpotify from '../../assets/icons/logo-spotify.png';


const Sidebar = () => {
  return (
    <div class="sidebar">
    <nav class="sidebar_navigation">
      <div class="logo">
        <a href='/'>
          <img src={logoSpotify} alt="Logo Spotify" />
        </a>
      </div>
      <ul>
        <li>
          <a href='/'>
            <span class="fa fa-home"></span>
            <span>Início</span>
          </a>
        </li>
        <li>
          <a href='/'>
            <span class="fa fa-search"></span>
            <span>Buscar</span>
          </a>
        </li>
      </ul>
    </nav>
    <div class="library">
      <div class="library_content">
          <button class="library_button">
              <span class="fa fa-book"></span>
              <span>Sua biblioteca</span>
          </button>
          <span class="fa fa-plus"></span>
      </div>
      <section class="section-playlist">
          <div class="section-playlist_content">
              <span class="text title">Crie sua primeira playlist</span>
              <span class="text subtitle">É fácil, vamos te ajudar.</span>
              <button class="section-playlist_button">
                  <span>Criar playlist</span>
              </button>
          </div>
      </section>
      <div class="cookies">
          <a href='/'>Cookies</a>
      </div>
      <div class="languages">
          <button class="languages_button">
              <span class="fa fa-globe"></span>
              <span>Português do Brasil</span>
          </button>
      </div>
    </div>
    </div>
  )
}

export default Sidebar;