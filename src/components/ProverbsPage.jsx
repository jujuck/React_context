import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { getTranslatorForLanguage } from '../translations';
import { LangagesContext } from '../contexts/LanguagesContext';

const ProverbsPage = () => {
  const [proverbs, setProverbs] = useState([]);
  const { langues } = useContext(LangagesContext);

  useEffect(() => {
    console.log(`fetching "${langues}" proverbs`);
    fetch(`/pretend-api/results-${langues}.json`)
      .then((res) => res.json())
      .then((data) => {
        setProverbs(data.results);
      });
  }, []);

  // TODO: change that to take the current language from Context instead of hardcoding "en"
  const t = getTranslatorForLanguage(langues);

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
