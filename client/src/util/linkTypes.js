import { FaLinkedin, FaYoutube, FaGithub, FaTwitter } from "react-icons/fa";

const linkTypes = [
  {
    name: "YouTube",
    icon: (props, classes = "") => (
      <FaYoutube {...props} className={`text-red-700 ${classes}`} />
    ),
  },
  {
    name: "GitHub",
    icon: (props, classes = "") => (
      <FaGithub {...props} className={`text-black-100' ${classes}`}/>
    ),
  },
  {
    name: "Linkedin",
    icon: (props, classes = "") => (
      <FaLinkedin {...props} className={`text-indigo-500' ${classes}`}/>
    ),
  },
  {
    name: "Twitter",
    icon: (props, classes = "") => (
      <FaTwitter {...props} className={`text-blue-400' ${classes}`}/>
    ),
  },
];

export default linkTypes;