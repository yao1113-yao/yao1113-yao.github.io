import { Col, Drawer, Layout, Row, Tooltip } from "antd";
import React, { useEffect, useState } from "react";
import Home from "../../pages/home/Home";
import Sidebar from "../sider/Sidebar";
import { Outlet, useNavigate } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";

import "./mainlayout.scss";
import { menu, socialMedia } from "../sider/array-sidebar/ArraySidebar";
import { useTranslation } from "react-i18next";
import About from "../../pages/about/About";
import Resume from "../../pages/resume/Resume";
import ProfilePicture from "../../assets/profile.jpg";

import PDF from "../../assets/resume.pdf";

const { Header, Content } = Layout;

function MainLayout() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const pathName = window.location.pathname?.split("/")[1];
  console.log(pathName);
  const [windowWidth, setWindowWidth] = useState();
  const [sidebarMenu, setSidebarMenu] = useState(pathName);
  const [drawer, setDrawer] = useState(false);

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

  function handleNavigate(values) {
    navigate(`/${values}`);
    setSidebarMenu(values);
    setDrawer(false);
  }

  return (
    <div className="main-layout-container">
      {windowWidth > 1023 ? (
        <>
          <div className="main-container">
            <Sidebar />
            <div className="content">
              <section
                className={`section-class ${
                  sidebarMenu === "home" && "active"
                }`}
              >
                <Home />
              </section>
              <section
                className={`section-class ${
                  sidebarMenu === "about" && "active"
                }`}
              >
                <About />
              </section>
              <section
                className={`section-class ${
                  sidebarMenu === "resume" && "active"
                }`}
              >
                <Resume />
              </section>
            </div>
          </div>
          <div className="menu">
            {menu?.map((items, index) => (
              <Tooltip title={t(items?.title)} placement="left">
                <div
                  className={`icon ${sidebarMenu === items.title && "active"}`}
                  key={index}
                  onClick={() => handleNavigate(items?.title)}
                >
                  {items?.icon}
                </div>
              </Tooltip>
            ))}
          </div>
        </>
      ) : (
        <div className="small-size-main-container">
          <div className="icon">
            <MenuOutlined onClick={() => setDrawer(!drawer)} />
          </div>
          <Outlet />

          {drawer && (
            <Drawer
              placement="right"
              onClose={() => setDrawer(false)}
              closable={false}
              open={drawer}
              width={350}
              style={{ background: "#444" }}
            >
              <div className="drawer-container">
                <div className="picture-container">
                  <img src={ProfilePicture} alt="ProfilePicture" />
                </div>
                <div className="name">{t("name")}</div>
                <div className="title">{t("websiteDeveloper")}</div>
                <div className="menu">
                  {menu?.map((items) => (
                    <div
                      className={`icon ${
                        sidebarMenu === items?.title && "active"
                      }`}
                      key={items.icon}
                      onClick={() => handleNavigate(items.title)}
                    >
                      {items.icon} <span>{t(items.title)}</span>
                    </div>
                  ))}
                </div>
                <div className="social-media-container">
                  {socialMedia?.map((items) => (
                    <div
                      className="icon"
                      key={items.icon}
                      onClick={() => window.open(items.link)}
                    >
                      {items.icon}
                    </div>
                  ))}
                </div>

                <div className="button-download">
                  <a href={PDF} download="Wong Yong Yao-Resume">
                    {t("downloadCV")}
                  </a>
                </div>
              </div>
            </Drawer>
          )}
        </div>
      )}
    </div>
  );
}

export default MainLayout;
