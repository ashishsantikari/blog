import React from "react";
import PropTypes from "prop-types";

function ExternalLink({ children, href, target = "_new" }) {
  return (
    <a
      target="_new"
      href={href}
    >
      {children}
    </a>
  );
}

ExternalLink.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  target: PropTypes.string,
};

export default ExternalLink;
