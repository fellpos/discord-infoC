
import './index.scss';

export default function App() {


  return (
    <div className='pagina-app'>
      <header>

      </header>
      <div className='busca'>

        <input type="search" />
        <button><img src="/assets/images/lupaicon.svg" alt="" /></button>
      </div>

      <div className='secao2'>
          <div className='lista-nav'>
              <div className='lista-item'>
                  <h1>All</h1>
              </div>
              <div className='lista-item'>
                  <h1>Gamming</h1>
              </div>
              <div className='lista-item'>
                  <h1>Entertainment</h1>
              </div>
              <div className='lista-item'>
                  <h1>Education</h1>
              </div>
              <div className='lista-item'>
                  <h1>Science & Tech</h1>
              </div>
              <div className='lista-item'>
                  <h1>Music</h1>
              </div>
              
          </div>

          <div  className='jogos'>

              <div className='card'>

              </div>
          </div>
      </div>
      
    </div>

  );
}