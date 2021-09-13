import { useState } from "react";
import "./contact.scss";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';


export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/contactmail.jpg"/>
          <div className="links">
            <ul>
              <li><a href="https://www.linkedin.com/in/pratik-hopal/"><LinkedInIcon className="icon"/></a></li>
              <li><a href="https://github.com/pratikhopal"><GitHubIcon className="icon"/></a></li>
            </ul>
          </div>
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <ul>
            <li><a href="">Linkedin</a></li>
            <li><a href="">Github</a></li>
            <li>Email : hopalsnap@gmail.com</li>
            <li>Contact:8087337964</li>
          </ul>
      </div>
    </div>
  );
}
