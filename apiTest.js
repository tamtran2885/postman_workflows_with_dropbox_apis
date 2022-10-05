const newman = require("newman");

newman.run(
  {
    collection: require(COLLECTION_JSON_FILE),
    environment: require(ENVIRONMENT_JSON_FILE),
    reporters: "cli",
  },
  function (err) {
    if (err) {
      throw err;
    }
    console.log("collection run complete!");
  }
);
