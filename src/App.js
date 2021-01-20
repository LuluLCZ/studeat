import { Switch, Route } from 'react-router';
import './App.css';
import FooterComponent from './Components/FooterComponent/FooterComponent';
import TopbarComponent from './Components/LandingComponents/TopbarComponent';
import AboutContainer from './Containers/AboutContainer/AboutContainer';

import LandingContainer from './Containers/LandingContainer/LandingContainer';
import RecetteContainer from './Containers/RecetteContainer/RecetteContainer';

function App() {
  return (
    <div>
      <TopbarComponent />
      <Switch>
        <Route path="/" exact component={LandingContainer} />
        <Route path="/about" exact component={AboutContainer} />
        <Route path="/recette" exact component={RecetteContainer} />
      </Switch>
      <FooterComponent />
    </div>
  );
}

export default App;
