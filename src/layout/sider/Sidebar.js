import { Drawer, Layout } from "antd";
import React, { useEffect, useState } from "react";
import ProfilePicture from "../../assets/profile.jpg";
import "./sidebar.scss";
import { useTranslation } from "react-i18next";
import { menu, socialMedia } from "./array-sidebar/ArraySidebar";
import PDF from "../../assets/resume.pdf";

const { Sider } = Layout;

function Sidebar() {
  const { t } = useTranslation();

  const [windowWidth, setWindowWidth] = useState();
  const [sidebarMenu, setSidebarMenu] = useState("home");
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

  function showSiderBasedOnWindowWidth() {
    if (windowWidth > 1023) {
      return (
        <div className="sider-container">
          <div className="picture-container">
            <img src={ProfilePicture} alt="ProfilePicture" />
          </div>
          <div className="name">{t("name")}</div>
          <div className="title">{t("websiteDeveloper")}</div>
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
      );
    } else {
      return (
        <Drawer
          placement="left"
          closable={false}
          //   onClose={handleOnCollapse}
          //   visible={collapsed}
          bodyStyle={{ backgroundColor: "#001529", padding: "0" }}
          width={250}
        >
          Sidebar
        </Drawer>
      );
    }
  }

  return showSiderBasedOnWindowWidth();
}

export default Sidebar;
