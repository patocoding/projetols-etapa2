import React,{ useState } from "react";
import './global.css'
import './App.css'
import './Sidebar.css'
import './main.css'
//componente --> bloco isolado de html css e js que não interfere no restante da aplicação
//propriedade --> informaçoes que um çomponente PAI passa para o componente FILHO
//estado --> informações mantidas pelo componente




function App() {
  return(
    <div id='app'>
      <aside>
        <strong>cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name='github_username' id='github_username' required />
          </div>

          <div className="input-block">
            <label htmlFor="games">Games e techs</label>
            <input name='games' id='games' required />
          </div>
          
          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name='longitude' id='longitude' required />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>

      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>

              <img src="https://avatars.githubusercontent.com/u/96270182?v=4" alt="pato feio"/>
              <div className="user-info">

              <strong>cayo bruno</strong>
              <span>Zelda, Mario, Lua</span>

              </div>

            </header>
            <p>Manager in @Github, 20 anos, atualmente querendo um mundo melhor</p>
            <a href="https://github.com/patocoding">Acessar perfil no GitHub</a>
          </li>

          <li className="dev-item">
            <header>

              <img src="https://avatars.githubusercontent.com/u/96270182?v=4" alt="pato feio"/>
              <div className="user-info">

              <strong>cayo bruno</strong>
              <span>Zelda, Mario, Lua</span>

              </div>

            </header>
            <p>Manager in @Github, 20 anos, atualmente querendo um mundo melhor</p>
            <a href="https://github.com/patocoding">Acessar perfil no GitHub</a>
          </li>

          <li className="dev-item">
            <header>

              <img src="https://avatars.githubusercontent.com/u/96270182?v=4" alt="pato feio"/>
              <div className="user-info">

              <strong>cayo bruno</strong>
              <span>ReactJS, React Native, JavaScript</span>

              </div>

            </header>
            <p>Manager in @Github, 20 anos, atualmente querendo um mundo melhor</p>
            <a href="https://github.com/patocoding">Acessar perfil no GitHub</a>
          </li>

          <li className="dev-item">
            <header>

              <img src="https://avatars.githubusercontent.com/u/96270182?v=4" alt="pato feio"/>
              <div className="user-info">

              <strong>cayo bruno</strong>
              <span>ReactJS, React Native, JavaScript</span>

              </div>

            </header>
            <p>Manager in @Github, 20 anos, atualmente querendo um mundo melhor</p>
            <a href="https://github.com/patocoding">Acessar perfil no GitHub</a>
            </li>
        </ul>
      </main>
    </div>
  )
 
}

export default App;
