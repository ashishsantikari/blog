import Typography from "typography";
import wikipedia from "typography-theme-wikipedia";

wikipedia.baseFontSize = "16px";


const typography = new Typography(wikipedia);

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
