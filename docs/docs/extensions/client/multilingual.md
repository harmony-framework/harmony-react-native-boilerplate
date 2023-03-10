
# Multilingual

i18n give you easy way to support with languages and Encapsulate all you titles and static strings in your application<br/>
to one place and easily to rename or change it.
<br/>
i18next documentation. The configuration options and translation functionalities like plurals, formatting, interpolation

```typescript

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export default i18n
  .use(initReactI18next)
  .init({
	// we init with resources
	compatibilityJSON: 'v3',
    resources: {
      en: {
        translations: {
		  "Welcome to React": "Welcome to Harmony",
		  "Language description": "Supported languages located in translations folder, we are using i18next-react"
        }
      },
      de: {
        translations: {
		  "Welcome to React": "Willkommen bei Harmonie",
		  "Language description": "Unterstützte Sprachen befinden sich im Übersetzungsordner, wir verwenden i18next-react"

        }
      }
    },
    fallbackLng: "en",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false
    }
  });
```