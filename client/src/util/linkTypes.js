import { FaYoutube } from "react-icons/fa";

const linkTypes = [
  {
    name: "YouTube",
    icon: (props, classes = "") => (
      <FaYoutube {...props} className={`text-red-700 ${classes}`} />
    ),
  },
  {
    name: "GitHub",
    icon: null,
  },
  {
    name: "Linkedin",
    icon: null,
  },
  {
    name: "Twitter",
    icon: null,
  },
];

export default linkTypes;
