import { FC } from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

export const Footer: FC = () => {
  return (
    <div className="Footer">
      <div className="Footer__wrapper">
        <div className="Footer__logo"></div>
        <div className="Footer__links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Services</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
          </ul>
        </div>
        <div className="Footer__smedia"></div>
      </div>
    </div>
  );
};
