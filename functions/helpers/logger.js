const winston = require("winston");
const { isProduction } = require("./environment");

const logger = winston.createLogger({
  level: "debug",
  format: winston.format.simple(),
  transports: [new winston.transports.Console({ level: "debug" })]
});

if (!isProduction()) {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple()
    })
  );
}

module.exports = logger;
