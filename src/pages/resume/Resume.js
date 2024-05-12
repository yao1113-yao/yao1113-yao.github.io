import React from "react";
import { useTranslation } from "react-i18next";
import "./resume.scss";
import { Col, Row, Steps } from "antd";

function Resume() {
  const { t } = useTranslation();

  const items = [
    {
      title: t("university"),
      description: t("descUniversity"),
    },
    {
      title: t("secondary"),
      description: t("descSecondary"),
    },
    {
      title: t("primary"),
      description: t("descPrimary"),
    },
  ];

  const Expirienceitems = [
    {
      title: t("seniorWebsiteDeveloper"),
      description: t("descSenior"),
    },
    {
      title: t("juniorWebsiteDeveloper"),
      description: t("descJunior"),
    },
    {
      title: t("intern"),
      description: t("descIntern"),
    },
  ];

  return (
    <div className="resume-container">
      <div className="title">{t("resume")}</div>

      <Row>
        <Col sm={12} xs={24} className="step-container">
          <div className="step-title">{t("education")}</div>
          <Steps progressDot direction="vertical" items={items} />
        </Col>
        <Col sm={12} xs={24} className="step-container">
          <div className="step-title">{t("experience")}</div>
          <Steps progressDot direction="vertical" items={Expirienceitems} />
        </Col>
      </Row>

      <Row>
        <Col xs={24} className="system-container">
          <div className="system-title">{t("systemDeveloped")}</div>
          <ul className="system">
            <li>
              Receive SMS System<span> (Back Office and Service)</span>
            </li>
            <li>
              Blasting SMS System<span> (Back Office and Service)</span>
            </li>
            <li>
              Website Development<span> (User Interface and Back Office)</span>
            </li>
            <li>
              Payment Gateway<span> (Back Office and Service)</span>
            </li>
            <li>Others</li>
          </ul>
        </Col>
      </Row>
    </div>
  );
}

export default Resume;
