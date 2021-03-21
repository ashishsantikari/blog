import Typography from "typography";
import wikipedia from "typography-theme-wikipedia";

wikipedia.baseFontSize = "16px";
wikipedia.headerColor = "var(--header-color)";

wikipedia.overrideThemeStyles = () => ({
  a: {
    color: "var(--textLink)",
  },
  "a:visited": {
    color: "var(--textLinkVisited)"
  },
  // gatsby-remark-autolink-headers - don't underline when hidden
  "a.anchor": {
    boxShadow: "none",
  },
  // gatsby-remark-autolink-headers - use theme colours for the link icon
  'a.anchor svg[aria-hidden="true"]': {
    stroke: "var(--textLink)",
  },
  hr: {
    background: "var(--hr)",
  },
});

const typography = new Typography(wikipedia);

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
