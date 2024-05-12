import React from "react";

import "./about.scss";
import { useTranslation } from "react-i18next";
import { Divider } from "antd";

function About() {
  const { t } = useTranslation();

  const arrDetails = [
    {
      title: "age",
      answer: "25",
    },
    {
      title: "residence",
      answer: "Malaysian",
    },
    {
      title: "city",
      answer: "Teluk Intan",
    },
    {
      title: "email",
      answer: "wyy11131999@gmail.com",
    },
    {
      title: "phone",
      answer: "+60-162111317",
    },
  ];

  return (
    <div className="about-container">
      <div className="title">
        {t("about2")} <span>{t("me")}</span>
      </div>

      <div className="desc-me-container">
        <div className="desc-me">{t("aboutMeTitle")}</div>
        <div className="details-container">
          {arrDetails?.map((items, index) => (
            <div className="details" key={index}>
              <div className="details-title">{t(items?.title)}</div>
              <div className="details-answer">{items?.answer}</div>
            </div>
          ))}
        </div>
      </div>

      {/* <Divider style={{ backgroundColor: "#bbb" }} /> */}

      <div className="skills-container">
        <div className="sub-title">{t("skills")}</div>

        <div className="skill-details-container">
          <div className="skill-details">
            <div className="skill-title">
              {t("React.Js")}
              <div className="percentage">95%</div>
            </div>
            <div className="skill-progress">
              <div className="skill-percentage" style={{ width: "95%" }}></div>
            </div>
          </div>
          <div className="skill-details">
            <div className="skill-title">
              {t("HTML")}
              <div className="percentage">85%</div>
            </div>
            <div className="skill-progress">
              <div className="skill-percentage" style={{ width: "85%" }}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="skills-container">
        <div className="skill-details-container">
          <div className="skill-details">
            <div className="skill-title">
              {t("CSS")}
              <div className="percentage">80%</div>
            </div>
            <div className="skill-progress">
              <div className="skill-percentage" style={{ width: "80%" }}></div>
            </div>
          </div>

          <div className="skill-details">
            <div className="skill-title">
              {t("C#(.net)")}
              <div className="percentage">80%</div>
            </div>
            <div className="skill-progress">
              <div className="skill-percentage" style={{ width: "80%" }}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="skills-container">
        <div className="skill-details-container">
          <div className="skill-details">
            <div className="skill-title">
              {t("MSSQL")}
              <div className="percentage">70%</div>
            </div>
            <div className="skill-progress">
              <div className="skill-percentage" style={{ width: "70%" }}></div>
            </div>
          </div>

          <div className="skill-details">
            <div className="skill-title">
              {t("MVC")}
              <div className="percentage">70%</div>
            </div>
            <div className="skill-progress">
              <div className="skill-percentage" style={{ width: "70%" }}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="skills-container">
        <div className="skill-details-container">
          <div className="skill-details">
            <div className="skill-title">
              {t("SignalR")}
              <div className="percentage">50%</div>
            </div>
            <div className="skill-progress">
              <div className="skill-percentage" style={{ width: "70%" }}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="language-container" style={{ marginTop: "40px" }}>
        <div className="sub-title">{t("language")}</div>
        <div className="language-details-container">
          <div className="language-details">
            <div className="language-title">
              {t("Chinese")}
              <div className="percentage">100%</div>
            </div>
            <div className="language-progress">
              <div
                className="language-percentage"
                style={{ width: "100%" }}
              ></div>
            </div>
          </div>

          <div className="language-details">
            <div className="language-title">
              {t("English")}
              <div className="percentage">100%</div>
            </div>
            <div className="language-progress">
              <div
                className="language-percentage"
                style={{ width: "100%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="language-container">
        <div className="language-details-container">
          <div className="language-details">
            <div className="language-title">
              {t("bm")}
              <div className="percentage">100%</div>
            </div>
            <div className="language-progress">
              <div
                className="language-percentage"
                style={{ width: "100%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
