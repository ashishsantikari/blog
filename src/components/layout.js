import React from "react";
import { ThemeToggler } from "gatsby-plugin-dark-mode";
import { rhythm, scale } from "../utils/typography";
import Link from "./link";

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    let header;

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.3),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      );
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      );
    }
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <div
            style={{
              marginLeft: `auto`,
              marginRight: `auto`,
              maxWidth: rhythm(24),
              padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
            }}
          >
            <header>{header}</header>
            <main>{children}</main>
            <footer style={{
              marginTop: rhythm(2)
            }}>
              © {new Date().getFullYear()}, Built using Gatsby with {" "}
              <span style={{ color: "#800080" }}>♥</span>
              {` `}
            </footer>
          </div>
        )}
      </ThemeToggler>
    );
  }
}

export default Layout;
