import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./Panel.css";

const Panel = () => {
  let panelMenu = [
    { id: 1, icon: <IoLogoWhatsapp style={{ color: "#25D366" }}/>, view: "https://wa.me/+1234567890" },
    { id: 2, icon: <RiInstagramFill style={{ color: "#E1306C" }}/>, view: "https://www.instagram.com/" },
    { id: 3, icon: <FaFacebook style={{ color: "#4267B2" }}/>, view: "https://www.facebook.com/" },
    { id: 4, icon: <FaFacebookMessenger style={{ color: "#006AFF" }}/>, view: "https://www.messenger.com/" },
    { id: 5, icon: <MdEmail style={{ color: "#808080" }}/>, view: "https://mail.google.com/" }
  ];
  
  let panel = panelMenu.map((item) => {
    return (
      <a key={item.id} href={item.view}>
        <div>
          {item.icon}
        </div>
      </a>
    );
  });

  return (
    <div className="panel">
      {panel}
    </div>
  );
};

export default Panel;
