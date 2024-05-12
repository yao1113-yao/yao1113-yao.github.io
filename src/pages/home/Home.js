import React, { useEffect, useState } from "react";
import "./home.scss";
import { useTranslation } from "react-i18next";
function Home() {
  const { t } = useTranslation();

  const [windowWidth, setWindowWidth] = useState();

  useEffect(() => {
    function handleWindowWidth() {
      setWindowWidth(window.innerWidth);
    }

    handleWindowWidth();
    window.addEventListener("resize", handleWindowWidth);

    return () => {
      window.removeEventListener("resize", handleWindowWidth);
    };
  }, [windowWidth]);

  return (
    <div className="home-page-background">
      <div className="name">{t("resume")}</div>
      <div className="title">
        {t("iam")} <span className="desc">{t("websiteDeveloper")}</span>
      </div>
    </div>
  );
}

export default Home;
