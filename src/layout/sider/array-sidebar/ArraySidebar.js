import { useTranslation } from "react-i18next";
import {
  FaFacebook,
  FaInstagram,
  FaSkype,
  FaLinkedin,
  FaGithub,
  FaHome,
  FaFile,
  FaUser,
} from "react-icons/fa";
import { SiAboutdotme } from "react-icons/si";
import { IoIosMail } from "react-icons/io";

export const socialMedia = [
  {
    icon: <FaFacebook />,
    link: "https://www.facebook.com/yongyao.wong/",
  },
  {
    icon: <FaInstagram />,
    link: "https://www.instagram.com/invites/contact/?i=1u1usr6qegsag&utm_content=1t6wonz",
  },
  {
    icon: <FaSkype />,
    link: "https://secure.skype.com/portal/profile?intsrc=client-_-windows-_-8.119.0.201-_-.userInfo.profile&tcg=758f74dc-ae92-48ec-9466-c6cf9496343c",
  },
  {
    icon: <FaLinkedin />,
    link: "",
  },
  {
    icon: <FaGithub />,
    link: "https://github.com/yao1113-yao",
  },
];

export const menu = [
  {
    title: "home",
    icon: <FaHome />,
  },
  {
    title: "about",
    icon: <FaUser />,
  },
  {
    title: "resume",
    icon: <FaFile />,
  },
];
