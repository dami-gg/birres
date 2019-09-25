const { Logging } = require("@google-cloud/logging");

const logging = new Logging();

const log = logging.log("functions-log");

const getMetadata = functionName => ({
  resource: {
    type: "cloud_function",
    labels: {
      function_name: functionName
    }
  }
});

const logger = {
  debug: (functionName, message = "") => {
    const entry = log.entry(getMetadata(functionName), `debug: ${message}`);
    log.write(entry);
  },
  error: (functionName, message = "") => {
    const entry = log.entry(getMetadata(functionName), `error: ${message}`);
    log.write(entry);
  }
};

module.exports = { logger };
