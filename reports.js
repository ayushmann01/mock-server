const casual = require("casual");

let reports = [
  {
    name: "Total sales",
    category: "Finance",
    author: "aeroqube",
    lastViewed: Date.now(),
    route: "total-sales",
  },
  {
    name: "Net sales",
    category: "Finance",
    author: "aeroqube",
    lastViewed: Date.now(),
    route: "net-sales",
  },
  {
    name: "Gross sales",
    category: "Finance",
    author: "aeroqube",
    lastViewed: Date.now(),
    route: "gross-sales",
  },
  {
    name: "Sales Over Time",
    category: "Finance",
    author: "aeroqube",
    lastViewed: Date.now(),
    route: "sales-over-time",
  },
  {
    name: "Sales By Product",
    category: "Sales",
    author: "aeroqube",
    lastViewed: Date.now(),
    route: "sales-by-product",
  },
  {
    name: "Sales By Discount",
    category: "Sales",
    author: "aeroqube",
    lastViewed: Date.now(),
    route: "sales-by-discount",
  },
  {
    name: "Sessions Over Time",
    category: "Acquisition",
    author: "aeroqube",
    lastViewed: Date.now(),
    route: "sessions-over-time",
  },
  {
    name: "Product Orders And Returns",
    category: "Orders",
    author: "aeroqube",
    lastViewed: Date.now(),
    route: "product-orders-returns",
  },
  {
    name: "Orders Over Time",
    category: "Orders",
    author: "aeroqube",
    lastViewed: Date.now(),
    route: "orders-over-time",
  },
  {
    name: "Top Online Store Searches",
    category: "Behaviour",
    author: "aeroqube",
    lastViewed: Date.now(),
    route: "top-online-store-searches",
  },
  {
    name: "Days Of Inventory Remaining",
    category: "Inventory",
    author: "aeroqube",
    lastViewed: Date.now(),
    route: "days-of-inventory-remaining",
  },
];

casual.define("totalSales", () => {
  return {
    date: casual.unix_time * 1000,
    orderId: "HP" + Math.round(casual.random * 1000000),
    productName: casual.sentence,
    grossSales: casual.random * 10,
    discounts: casual.random * 10,
    returns: casual.random * 10,
    netSales: casual.random * 10,
    taxes: casual.random * 10,
    shipping: casual.random * 10,
    totalSales: casual.random * 10,
  };
});

casual.define("salesByProduct", () => {
  return {
    productName: casual.sentence,
    productVendor: casual.company_name,
    productType: casual.sentence,
    netQuantity: casual.random * 10,
    grossSales: casual.random * 10,
    discounts: casual.random * 10,
    returns: casual.random * 10,
    netSales: casual.random * 10,
    taxes: casual.random * 10,
    totalSales: casual.random * 10,
  };
});

casual.define("salesOverTime", () => {
  return {
    date: casual.unix_time * 1000,
    orders: casual.random * 10,
    grossSales: casual.random * 10,
    discounts: casual.random * 10,
    returns: casual.random * 10,
    netSales: casual.random * 10,
    taxes: casual.random * 10,
    shipping: casual.random * 10,
    duties: casual.random * 10,
    additionalFee: casual.random * 10,
    totalSales: casual.random * 10,
  };
});

casual.define("sessionsOverTime", () => {
  return {
    date: casual.unix_time * 1000,
    visitors: casual.random * 100,
    sessions: casual.random * 100,
  };
});

casual.define("salesByDiscount", () => {
  return {
    discountName: casual.first_name,
    discountMethod: "CODE",
    discountType: casual.boolean ? "Value" : "Percentegage",
    discountClass: casual.boolean ? "Order" : "Product",
    orders: casual.random * 10,
    grossSales: casual.random * 100,
    discountAmount: casual.random * 100,
    returns: casual.random * 10,
    netSales: casual.random * 10,
    shipping: casual.random * 10,
    tax: casual.random * 10,
    totalSales: casual.random * 10,
  };
});

casual.define("ordersOverTime", () => {
  return {
    date: casual.unix_time * 1000,
    orders: casual.random * 100,
    averageUnitOrdered: casual.random * 10,
    averageOrderValue: casual.random * 10,
    returnedQuantity: casual.random * 10,
  };
});

casual.define("productOrdersAndReturns", () => {
  return {
    productTitle: casual.sentence,
    orderedQuantity: casual.random * 10,
    returnedQuantity: casual.random * 10,
    returnRate: casual.random * 100,
  };
});

casual.define("daysOfInventoryRemaining", () => {
  return {
    productTitle: casual.sentence,
    variantTitle: casual.first_name,
    variantSKU: casual.uuid,
    endingQuantity: casual.random * 100,
    quantitySoldPerDay: casual.random * 10,
    daysOfInventoryRemaining: casual.random * 10,
  };
});

function getDaysOfInventoryRemaining() {
  let data = [];
  let i = 1;
  while (i < 100) {
    data.push(casual.daysOfInventoryRemaining);
    i++;
  }
  return data;
}

function getTotalSales() {
  let totalSales = [];
  let i = 1;
  while (i <= 100) {
    totalSales.push(casual.totalSales);
    i++;
  }
  return totalSales;
}

function getSalesOverTime() {
  let data = [];
  let i = 1;
  while (i <= 100) {
    data.push(casual.salesOverTime);
    i++;
  }
  return data;
}

function getSessionsOverTime() {
  let data = [];
  let i = 1;
  while (i < 100) {
    data.push(casual.sessionsOverTime);
    i++;
  }

  return data;
}

function getOrdersOverTime() {
  let data = [];
  let i = 1;
  while (i < 100) {
    data.push(casual.ordersOverTime);
    i++;
  }

  return data;
}

function getSalesByProduct() {
  let data = [];
  let i = 1;
  while (i < 100) {
    data.push(casual.salesByProduct);
    i++;
  }
  return data;
}

function getSalesByDiscount() {
  let data = [];
  let i = 1;
  while (i < 100) {
    data.push(casual.salesByDiscount);
    i++;
  }
  return data;
}

function getProductOrdersAndReturns() {
  let data = [];
  let i = 1;
  while (i < 100) {
    data.push(casual.productOrdersAndReturns);
    i++;
  }
  return data;
}

module.exports = {
  reports,
  getTotalSales,
  getSalesOverTime,
  getSessionsOverTime,
  getOrdersOverTime,
  getSalesByProduct,
  getSalesByDiscount,
  getProductOrdersAndReturns,
  getDaysOfInventoryRemaining,
};
