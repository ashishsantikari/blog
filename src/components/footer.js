import React from "react";
import { rhythm } from "../utils/typography";
import Link from "./link";

function Footer() {
  return (
    <footer
      style={{
        marginTop: rhythm(2),
      }}
    >
      <div>
        <Link to="/privacy-policy">Privacy Policy</Link>
        {` | `}
        <Link to="/terms-of-use">Terms and Conditions</Link>
      </div>
    </footer>
  );
}

export default Footer;
