import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

export const LanguageSwitch = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    i18next.changeLanguage(i18n.language == 'en' ? 'tr' : 'en');
  };

  return (
    <div class="en-tr-navbar">
      <label class="toggle-label">
        <input
          id="lang"
          type="checkbox"
          onClick={toggleLanguage}
          checked={i18n.language == 'en'}
        />
        <span class="back">
          <span class="toggle"></span>
          <span class="label on">TR</span>
          <span class="label off">EN</span>
        </span>
      </label>
    </div>
  );
};
