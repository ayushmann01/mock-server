require('dotenv').config()

const { BetaAnalyticsDataClient } = require("@google-analytics/data");
// Imports the Google Analytics Data API client library.


propertyId = String(process.env.PROPERTY_ID);

// const GOOGLE_APPLICATION_CREDENTIALS = "./credentials.json";

// Using a default constructor instructs the client to use the credentials
// specified in GOOGLE_APPLICATION_CREDENTIALS environment variable.
const analyticsDataClient = new BetaAnalyticsDataClient();

// Runs a simple report.
async function runReport(dateRange, dimensions, metrics) {
  const [response] = await analyticsDataClient.runReport({
    property: `properties/${propertyId}`,
    dateRanges: dateRange,
    dimensions: dimensions,
    metrics: metrics,
  });
  return response;
}

module.exports = { runReport };
