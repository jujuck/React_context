import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProverbsPage from './components/ProverbsPage';
import SettingsPage from './components/SettingsPage';

function App() {
  //To be instanciate in the languageContext that you should do
  const [currentLanguage, setCurrentLanguage] = useState('en');

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProverbsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
