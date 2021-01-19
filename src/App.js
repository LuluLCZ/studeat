import { Switch, Route } from 'react-router';
import './App.css';
import FooterComponent from './Components/FooterComponent/FooterComponent';
import TopbarComponent from './Components/LandingComponents/TopbarComponent';
import AboutContainer from './Containers/AboutContainer/AboutContainer';

import LandingContainer from './Containers/LandingContainer/LandingContainer';

function App() {
  return (
    <div>
      <TopbarComponent />
      <Switch>
        <Route path="/" exact component={LandingContainer} />
        <Route path="/about" exact component={AboutContainer} />
      </Switch>
      <FooterComponent />
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
