import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProverbsPage from './components/ProverbsPage';
import SettingsPage from './components/SettingsPage';

function App() {
  const [proverbs, setProverbs] = useState([]);
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const fetchProverbs = () => {
    console.log(`fetching "${currentLanguage}" proverbs`);
    fetch(`/pretend-api/results-${currentLanguage}.json`)
      .then((res) => res.json())
      .then((data) => setProverbs(data.results));
  };

  // TODO : instanciate the two contexts providers here
  // TODO : for exemple, you should pass proverbs, setProverbs and fetchProverbs to the ProverbsContext.Provider's value prop

  return (
    <Router>
      <Routes>
        <Route path="/" exact component={ProverbsPage} />
        <Route path="/settings" component={SettingsPage} />
      </Routes>
    </Router>
  );
}

export default App;
