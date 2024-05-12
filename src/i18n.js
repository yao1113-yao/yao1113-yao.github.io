import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector/cjs";
import { initReactI18next } from "react-i18next";
import i18n from "i18next";

const resources = {
  gb: {
    translation: {
      name: "Wong Yong Yao",
      resume: "Wong Yong Yao's Resume",
      iam: "I'm",
      websiteDeveloper: "Senior Website Developer",
      downloadCV: "Download CV",
      about: "About Me",
      about2: "About",
      me: "Me",
      aboutMeTitle:
        "I am an enthusiastic, self-motivated, reliable, responsible and hard working person. I am a mature team worker and adaptable to all challenging situations. I am able to work well both in a team environment as well as using own initiative. I am able to work well under pressure and adhere to strict deadlines.",
      age: "Age",
      residence: "Residence",
      email: "Email",
      phone: "Phone",
      skills: "Skills",
      language: "Language",
      chinese: "Chinese",
      english: "EngLish",
      bm: "Bahasa Malaysia",
      city: "City",
      descUniversity: "Bachelor of Information System Engineering (2018-2022)",
      descSecondary: "Secondary School Student (2013-2017)",
      descPrimary: "SJK(C) Wah Keow (2007-2012)",
      university: "Universiti Tunku Abdul Rahman (UTAR)",
      secondary: "SMK Dato Sagor",
      primary: "SJK(C) Wah Keow",
      education: "Education",
      seniorWebsiteDeveloper: "Senior Website Developer",
      descSenior: "Safe Software SDN.BHD - Kuala Lumpur (Jan 2024- Current)",
      juniorWebsiteDeveloper: "Junior Website Developer",
      descJunior: "Safe Software SDN.BHD - Kuala Lumpur (Jan 2022 - Jan 2024)",
      intern: "Intern",
      descIntern: "ITO Software SDN.BHD - Kuala Lumpur (Oct 2021 - Jan 2022)",
      experience: "Experience",
      systemDeveloped: "System Developed",
      contact: "Contact",
      home: "Home",
    },
  },
};

i18n.use(I18nextBrowserLanguageDetector).use(initReactI18next).init({
  resources,
  fallbackLng: "gb",
});

export default i18n;
