const moment = require("moment/moment");
const analyticsHelper = require("./google-analytics-helper");

async function getSessionsByDevice() {
  let dateRange = [
    {
      startDate: "2020-03-31",
      endDate: "today",
    },
  ];
  let dimensions = [
    {
      name: "deviceCategory",
    },
  ];
  let metrics = [
    {
      name: "activeUsers",
    },
    {
      name: "sessions",
    },
  ];

  let response = await analyticsHelper.runReport(
    dateRange,
    dimensions,
    metrics
  );

  let res = [];

  response.rows.forEach((row, index) => {
    console.log(
      "row dimensions and metrics",
      row.dimensionValues,
      row.metricValues
    );
    let obj = {
      deviceType: row.dimensionValues[0].value,
      visitors: row.metricValues[0].value,
      sessions: row.metricValues[1].value,
    };

    res.push(obj);
  });

  console.log("reponse", res);

  return res;
}

async function getSessionsByLocation() {
  let dateRange = [
    {
      startDate: "2020-03-31",
      endDate: "today",
    },
  ];
  let dimensions = [
    {
      name: "region",
    },
    {
      name: "country",
    },
    {
      name: "city",
    },
  ];
  let metrics = [
    {
      name: "activeUsers",
    },
    {
      name: "sessions",
    },
  ];

  let response = await analyticsHelper.runReport(
    dateRange,
    dimensions,
    metrics
  );

  let res = [];

  response.rows.forEach((row, index) => {
    console.log(
      "row dimensions and metrics",
      row.dimensionValues,
      row.metricValues
    );
    let obj = {
      region: row.dimensionValues[0].value,
      country: row.dimensionValues[1].value,
      city: row.dimensionValues[2].value,
      visitors: row.metricValues[0].value,
      sessions: row.metricValues[1].value,
    };

    res.push(obj);
  });

  console.log("reponse", res);

  return res;
}

async function getCustomersByLocation() {
  let dateRange = [
    {
      startDate: "2020-03-31",
      endDate: "today",
    },
  ];
  let dimensions = [
    {
      name: "region",
    },
    {
      name: "country",
    },
    {
      name: "city",
    },
  ];
  let metrics = [
    {
      name: "totalUsers",
    },
    {
      name: "conversions",
    },
    {
      name: "purchaseRevenue",
    },
  ];

  let response = await analyticsHelper.runReport(
    dateRange,
    dimensions,
    metrics
  );

  let res = [];

  response.rows.forEach((row, index) => {
    console.log(
      "row dimensions and metrics",
      row.dimensionValues,
      row.metricValues
    );
    let obj = {
      region: row.dimensionValues[0].value,
      country: row.dimensionValues[1].value,
      city: row.dimensionValues[2].value,
      customers: row.metricValues[0].value,
      totalOrders: row.metricValues[1].value,
      totalAmountSpent: row.metricValues[2].value,
    };

    res.push(obj);
  });

  console.log("reponse", res);

  return res;
}

async function getSessionsByLandingPage() {
  let dateRange = [
    {
      startDate: "2020-03-31",
      endDate: "today",
    },
  ];
  let dimensions = [
    {
      name: "landingPagePlusQueryString",
    },
  ];
  let metrics = [
    {
      name: "activeUsers",
    },
    {
      name: "sessions",
    },
    {
      name: "addToCarts",
    },
    {
      name: "checkouts",
    },
  ];

  let response = await analyticsHelper.runReport(
    dateRange,
    dimensions,
    metrics
  );

  let res = [];

  response.rows.forEach((row, index) => {
    console.log(
      "row dimensions and metrics",
      row.dimensionValues,
      row.metricValues
    );
    let obj = {
      landingPage: String(row.dimensionValues[0].value).split("/")[1],
      landingPagePath: row.dimensionValues[0].value,
      visitors: row.metricValues[0].value,
      sessions: row.metricValues[1].value,
      addToCarts: row.metricValues[2].value,
      checkouts: row.metricValues[3].value,
    };

    res.push(obj);
  });

  console.log("reponse", res);

  return res;
}

async function getSessionsOvertime() {
  let dateRange = [
    {
      startDate: "2020-03-31",
      endDate: "today",
    },
  ];
  let dimensions = [
    {
      name: "date",
    },
  ];
  let metrics = [
    {
      name: "activeUsers",
    },
    {
      name: "sessions",
    },
  ];

  let response = await analyticsHelper.runReport(
    dateRange,
    dimensions,
    metrics
  );

  let res = [];

  response.rows.forEach((row, index) => {
    console.log(
      "row dimensions and metrics",
      row.dimensionValues,
      row.metricValues
    );
    // let someDate = new Date(row.dimensionValues[0].value);
    let epoch = moment(row.dimensionValues[0].value).unix() * 1000;
    let obj = {
      date: epoch,
      visitors: row.metricValues[0].value,
      sessions: row.metricValues[1].value,
    };

    res.push(obj);
  });

  console.log("reponse", res);

  return res;
}

async function getCustomersOvertime() {
  let dateRange = [
    {
      startDate: "2020-03-31",
      endDate: "today",
    },
  ];
  let dimensions = [
    {
      name: "date",
    },
  ];
  let metrics = [
    {
      name: "newUsers",
    },
    {
      name: "activeUsers",
    },
  ];

  let response = await analyticsHelper.runReport(
    dateRange,
    dimensions,
    metrics
  );

  let res = [];

  response.rows.forEach((row, index) => {
    console.log(
      "row dimensions and metrics",
      row.dimensionValues,
      row.metricValues
    );
    // let someDate = new Date(row.dimensionValues[0].value);
    let epoch = moment(row.dimensionValues[0].value).unix() * 1000;
    let obj = {
      date: epoch,
      customerType: row.metricValues[0].value,
      customers: row.metricValues[1].value,
    };

    res.push(obj);
  });

  console.log("reponse", res);

  return res;
}

module.exports = {
  getSessionsByDevice,
  getSessionsByLocation,
  getCustomersByLocation,
  getSessionsByLandingPage,
  getSessionsOvertime,
  getCustomersOvertime,
};
