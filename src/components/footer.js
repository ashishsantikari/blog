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
      <div
        style={{
          display: "flex",
        }}
      >
        <div
          style={{
            width: "50%",
          }}
        >
          <Link to="/privacy-policy">Privacy Policy</Link>
          {` | `}
          <Link to="/terms-of-use">Terms and Conditions</Link>
        </div>
        <div style={{ width: "50%", textAlign: 'end' }}>
          <Link to="/rss.xml">RSS</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
