import "https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.0.1/dist/cookieconsent.umd.js";

/**
 * All config. options available here:
 * https://cookieconsent.orestbida.com/reference/configuration-reference.html
 */
CookieConsent.run({
  guiOptions: {
    consentModal: {
      layout: "box",
      position: "bottom right",
      equalWeightButtons: true,
      flipButtons: false,
    },
    preferencesModal: {
      layout: "box",
      position: "right",
      equalWeightButtons: true,
      flipButtons: false,
    },
  },

  categories: {
    necessary: {
      enabled: true, // this category is enabled by default
      readOnly: true, // this category cannot be disabled
    },
    analytics: {},
  },
  
  autoDetect: "browser",
  language: {
    default: "en",
    autoDetect: "document",
    translations: {
      en: {
        consentModal: {
          title: "Welcome",
          description:
            "This site uses cookies. By continuing, you agree to our use of cookies.",
          acceptAllBtn: "OK",
        },
      },
      fi: {
        consentModal: {
          title: "Hei,",
          description:
            "Tämä sivusto käyttää evästeitä. Jatkamalla hyväksyt evästeiden käytön.",
          acceptAllBtn: "OK",
        },
      },
    },
  },
});
