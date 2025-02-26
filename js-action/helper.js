const core = require('@actions/core');

function setMyOutput() {
  const result = "hello-from-helper"; // Hardcoded value for testing
  core.setOutput("my-output", result);
  console.log(`Set my-output in helper.js: ${result}`); // Debug
}

module.exports = { setMyOutput };
