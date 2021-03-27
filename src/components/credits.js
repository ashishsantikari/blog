import React from "react";
import { rhythm } from "../utils/typography";

function Credits(){
  return (
    <section style={{
      marginTop: rhythm(1.5),
    }}>
      © {new Date().getFullYear()}, Built using Gatsby with{" "}
      <span style={{ color: `var(--footer-emoji)` }}>♥</span>
    </section>
  );
}

export default Credits;
