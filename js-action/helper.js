const core = require('@actions/core');

function setMyOutput() {
  const result = "cccccccldfsdlafjosdjfhposadjf;as"; // Hardcoded value for testing
  core.setOutput("my-output", result);
  console.log(`Set my-output in helper.js: ${result}`); // Debug
}

module.exports = { setMyOutput };
