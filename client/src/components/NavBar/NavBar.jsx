import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import "./navBar.scss";

function NavBar({ links }) {
  const centralLinks = [];
  const rightLinks = [];

  links.forEach((link) =>
    ["/connexion", "/registration"].includes(link.to)
      ? rightLinks.push(link)
      : centralLinks.push(link)
  );

  return (
    <header className="NavBar">
      <nav role="navigation">
        <ul className="nav-links-center">
          {centralLinks.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} className={link.className}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <span className="nav-links-right">
          {rightLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={link.className}>
              {link.label}
            </NavLink>
          ))}
        </span>
      </nav>
    </header>
  );
}

NavBar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      className: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default NavBar;
