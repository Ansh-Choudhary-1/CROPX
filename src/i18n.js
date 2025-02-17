import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Define translations
const resources = {
  en: {
    translation: {
      "help_center": "Help Center",
      "features": "Features",
      "about": "About",
      "marketplace": "Marketplace",
      "testimonials": "Testimonials",
      "assist": "Assist",
      "get_started": "Get Started",
      "learn_more": "Learn More",
      "trusted_farmers": "Trusted by Farmers Across India",
      "empower_farmers": "Empowering farmers with AI-driven solutions for better crop management, market access, and financial security."
    }
  },
  hi: {
    translation: {
      "help_center": "सहायता केंद्र",
      "features": "विशेषताएँ",
      "about": "के बारे में",
      "marketplace": "बाज़ार",
      "testimonials": "प्रशंसापत्र",
      "assist": "सहायता",
      "get_started": "शुरू करें",
      "learn_more": "और अधिक जानें",
      "trusted_farmers": "भारत भर के किसानों द्वारा विश्वसनीय",
      "empower_farmers": "किसानों को बेहतर फसल प्रबंधन, बाजार पहुंच और वित्तीय सुरक्षा के लिए एआई-संचालित समाधानों के साथ सशक्त बनाना।"
    }
  },
  es: {
    translation: {
      "help_center": "Centro de ayuda",
      "features": "Características",
      "about": "Acerca de",
      "marketplace": "Mercado",
      "testimonials": "Testimonios",
      "assist": "Asistencia",
      "get_started": "Comenzar",
      "learn_more": "Aprender más",
      "trusted_farmers": "Confiado por agricultores en toda la India",
      "empower_farmers": "Empoderando a los agricultores con soluciones impulsadas por IA para mejorar la gestión de cultivos, el acceso al mercado y la seguridad financiera."
    }
  },
  fr: {
    translation: {
      "help_center": "Centre d'aide",
      "features": "Fonctionnalités",
      "about": "À propos",
      "marketplace": "Marché",
      "testimonials": "Témoignages",
      "assist": "Assistance",
      "get_started": "Commencer",
      "learn_more": "En savoir plus",
      "trusted_farmers": "Fiable par les agriculteurs à travers l'Inde",
      "empower_farmers": "Autonomiser les agriculteurs avec des solutions basées sur l'IA pour une meilleure gestion des cultures, un accès au marché et une sécurité financière."
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // Default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
