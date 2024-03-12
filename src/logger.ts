import pino from "pino";

const logger = pino({
	// TODO: Add log level to the configuration
	// level: process.env.PINO_LOG_LEVEL || "info",
	formatters: {
		level: (label) => {
			return { level: label.toUpperCase() };
		},
	},
	timestamp: pino.stdTimeFunctions.isoTime,
});

export default logger;
