import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTranslatorForLanguage } from '../translations';

const ProverbsPage = () => {
  const [proverbs, setProverbs] = useState([]);
  const [currentLanguage, setCurrentLanguage] = useState('en');

  useEffect(() => {
    console.log(`fetching "${currentLanguage}" proverbs`);
    fetch(`/pretend-api/results-${currentLanguage}.json`)
      .then((res) => res.json())
      .then((data) => {
        setProverbs(data.results);
        console.log('Hello');
        console.log(data.results);
      });
    setCurrentLanguage('en');
  }, []);

  // TODO: change that to take the current language from Context instead of hardcoding "en"
  const t = getTranslatorForLanguage('en');

  return (
    <>
      <Link to="/settings">{t('settings')}</Link>
      <h1>{t('proverbs')}</h1>
      <ul>
        {proverbs.map((res) => (
          <li key={res}>{res}</li>
        ))}
      </ul>
    </>
  );
};

export default ProverbsPage;
