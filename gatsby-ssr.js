const React = require("react");

function MAScript({ id }) {
  return (
    <script
      data-host="https://microanalytics.io"
      data-dnt="false"
      src="https://microanalytics.io/js/script.js"
      id={id || ""}
      async
      defer
    />
  );
}

const HeadComponents = [
  React.createElement(MAScript, {
    id: process.env.MA_ID,
    key: "microanalytics",
  }),
];

exports.onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  setHeadComponents(HeadComponents);
};
