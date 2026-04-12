import en from './en.json';
import fr from './fr.json';

const translations: Record<string, Record<string, string>> = { en, fr };

export function getTranslator(
  hassLanguage: string,
): (key: string, params?: Record<string, string | number>) => string {
  const lang = hassLanguage?.toLowerCase().startsWith('fr') ? 'fr' : 'en';
  const dict = translations[lang] ?? translations['en'];

  return (key: string, params?: Record<string, string | number>): string => {
    let value = dict[key] ?? translations['en'][key] ?? key;
    if (params) {
      value = value.replace(/\{(\w+)\}/g, (_, k) => String(params[k] ?? _));
    }
    return value;
  };
}
