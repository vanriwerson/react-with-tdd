import { useTranslation } from "react-i18next";

const LanguageSelector = (props) => {
  const { i18n } = useTranslation();

  return (
    <>
      <img
        src="https://icons.veryicon.com/png/Flag/All%20Country%20Flag/Turkey%20Flag.png"
        title="Türkçe"
        onClick={() => i18n.changeLanguage("tr")}
        alt="Turkish Flag"
      />
      <img
        src="https://icons.veryicon.com/png/Flag/Flag%203/United%20Kingdom%20flag.png"
        title="English"
        onClick={() => i18n.changeLanguage("en")}
        alt="Great Britain Flag"
      />
    </>
  );
};

export default LanguageSelector;
