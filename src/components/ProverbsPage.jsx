import React from 'react';
import { Link } from 'react-router-dom';
import { getTranslatorForLanguage } from '../translations';

const ProverbsPage = () => {
  // TODO: change this to something else, coming from the context
  const proverbs = [];
  // TODO: fetch the proverbs

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
