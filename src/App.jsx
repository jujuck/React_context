import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProverbsPage from './components/ProverbsPage';
import SettingsPage from './components/SettingsPage';
import { LangagesContextProvider } from './contexts/LanguagesContext';

function App() {
  return (
    <LangagesContextProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={ProverbsPage} />
          <Route path="/settings" component={SettingsPage} />
        </Switch>
      </Router>
    </LangagesContextProvider>
  );
}

export default App;
