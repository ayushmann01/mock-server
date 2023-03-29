const jsonServer = require("json-server");
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 4209;
const cors = require("cors");

var reports = require("./reports");
const analyticsController = require("./ga-controller");

server.use(jsonServer.bodyParser);
server.use(middlewares);

// server.use(cors());

// server.use(function (req, res, next) {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type");
//   res.setHeader("Access-Control-Allow-Credentials", true);
//   next();
// });

server.get("/users", (req, res) => {
  res.status(200).jsonp(users.getUsers());
});

server.get("/mock_api/reports", (req, res) => {
  res.status(200).jsonp(reports.reports);
});

server.get("/mock_api/reports/sales/totalSales", (req, res) => {
  res.status(200).jsonp(reports.getTotalSales());
});

server.get("/mock_api/reports/sales/sale-over-time", (req, res) => {
  res.status(200).jsonp(reports.getSalesOverTime());
});

server.get("/mock_api/reports/sales/sessions-over-time", async (req, res) => {
  console.log("params", req.params);
  let data = await analyticsController.getSessionsOvertime();
  res.status(200).jsonp({
    response: {
      data: data,
      totalCount: data.length,
    },
  });
});

server.get("/mock_api/reports/sales/customers-over-time", async (req, res) => {
  console.log("params", req.params);
  let data = await analyticsController.getCustomersOvertime();
  res.status(200).jsonp({
    response: {
      data: data,
      totalCount: data.length,
    },
  });
});

server.get("/mock_api/reports/sales/sales-by-product", (req, res) => {
  res.status(200).jsonp({
    response: {
      data: reports.getSalesByProduct(),
    },
  });
});

server.get("/mock_api/reports/sales/sales-by-discount", (req, res) => {
  res.status(200).jsonp(reports.getSalesByDiscount());
});

server.get("/mock_api/reports/orders/orders-over-time", async (req, res) => {
  let data = await analyticsController.getSessionsOvertime();
  res.status(200).jsonp({
    response: {
      data: data,
      totalCount: data.length,
    },
  });
});

server.get("/mock_api/reports/orders/product-orders-returns", (req, res) => {
  res.status(200).jsonp(reports.getProductOrdersAndReturns());
});

server.get(
  "/mock_api/reports/sales/days-of-inventory-remaining",
  (req, res) => {
    res.status(200).jsonp({
      response: {
        data: reports.getDaysOfInventoryRemaining(),
        totalCount: 100,
      },
    });
  }
);

server.get(
  "/mock_api/reports/ga-analytics/session-by-device",
  async (req, res) => {
    console.log("request params:", req.params);

    let data = await analyticsController.getSessionsByDevice();
    res.status(200).jsonp({
      response: {
        data: data,
        totalCount: data.length,
      },
    });
  }
);

server.get(
  "/mock_api/reports/ga-analytics/session-by-location",
  async (req, res) => {
    console.log("request params:", req.params);

    let data = await analyticsController.getSessionsByLocation();
    res.status(200).jsonp({
      response: {
        data: data,
        totalCount: data.length,
      },
    });
  }
);

server.get(
  "/mock_api/reports/ga-analytics/customer-by-location",
  async (req, res) => {
    console.log("request params:", req.params);

    let data = await analyticsController.getCustomersByLocation();
    res.status(200).jsonp({
      response: {
        data: data,
        totalCount: data.length,
      },
    });
  }
);

server.get(
  "/mock_api/reports/ga-analytics/sessions-by-landing-page",
  async (req, res) => {
    console.log("request params:", req.params);

    let data = await analyticsController.getSessionsByLandingPage();
    res.status(200).jsonp({
      response: {
        data: data,
        totalCount: data.length,
      },
    });
  }
);

server.listen(port, () => {
  console.log("JSON Server is running at port " + port);
});
