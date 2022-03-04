import logo from './logo.svg';
import { Outlet, Link } from "react-router-dom";
import './fonts/Hangyaku-gxGG5.ttf';
import './fonts/Avontuurgardegoshikkutai-5Doa.ttf';
import './App.css';

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/


function App() {

  const divStyle = {
    border: "solid 1px",
    alignItems: "center",
  };
  const navStyle = {
    paddingBottom: "1rem",
    paddingRight: "2rem",


  }

  const navLinkStyle = {
    paddingRight: "2rem",


  }
  return (

    // const 
    <div >
      <div style={divStyle}>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Warriors v Aliens</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                  <Link className='nav-link active' to="/">Home</Link>
                </li>
                <li class="nav-item">
                  <Link className='nav-link active' to="/Manifesto">Manifesto</Link>
                </li>
                <li class="nav-item">
                  <Link className='nav-link active' to="/Marketplace">Marketplace</Link>
                </li>
                <li class="nav-item">
                  <Link className='nav-link active btn btn-dark enableEthereumButton' to="/Connect Wallet">Connect Wallet</Link>
                </li>
                <li className="icons">
                  <i class="fa-brands fa-discord"></i>
                  <i class="fa-brands fa-twitter"></i>
                  <i class="fa-brands fa-instagram"></i>
                  <i class="fa-brands fa-telegram"></i>
                </li>
              </ul>
            </div>
          </div>
        </nav>

      </div>
      <main id='main'>

        <div id='app'>

        </div>
      </main>

      <Outlet />
    </div>
  );

}

export default App;
