import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { getTranslatorForLanguage } from '../translations';
import { LangagesContext } from '../contexts/LanguagesContext';

const SettingsPage = () => {
  // TODO: change that to take the current language from Context instead of hardcoding "en"
  const { langues, setLangues } = useContext(LangagesContext);
  const t = getTranslatorForLanguage('en');

  return (
    <div>
      <Link to="/">{t('go_back')}</Link>
      <h1>{t('settings')}</h1>
      <label htmlFor="language">{t('app_lang')} : </label>
      <select
        id="language"
        name="language"
        defaultValue={langues} // TODO: get the default language from context
        onChange={(event) => {
          const newLang = event.target.value;
          setLangues(newLang);
          console.log(newLang);
          // TODO: set the (new) currentLanguage globally in the Context
        }}
      >
        <option value="en">en</option>
        <option value="pt">pt</option>
      </select>
    </div>
  );
};

export default SettingsPage;
