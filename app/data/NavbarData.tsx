import {
  FaBriefcase,
  FaFolderOpen,
  FaHome,
  FaPhone,
  FaSun,
  FaUserFriends,
} from "react-icons/fa";

export const navItems = [
  {
    name: "Home",
    link: "#hero",
    icon: <FaHome />,
  },
  {
    name: "Projects",
    link: "#projects",
    icon: <FaFolderOpen />,
  },
  {
    name: "Testimonials",
    link: "#testimonials",
    icon: <FaUserFriends />,
  },
  {
    name: "Experience",
    link: "#experience",
    icon: <FaBriefcase />,
  },

  {
    name: "Contact",
    link: "#contact",
    icon: <FaPhone />,
  },
  {
    icon: <FaSun />,
    isIcon: true,
  },
];
