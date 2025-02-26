const core = require('@actions/core');
const { setMyOutput } = require('./helper');

try {
  setMyOutput();
  console.log("Finished running helper.js"); // Debug
} catch (error) {
  core.setFailed(error.message);
}
