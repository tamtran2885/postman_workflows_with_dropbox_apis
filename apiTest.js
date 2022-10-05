const newman = require("newman");

newman.run(
  {
    collection: require("./Workflow_With_Dropbox_APIs.postman_collection.json"),
    environment: require("./Dropbox_env.postman_environment.json"),
    reporters: "cli",
  },
  function (err) {
    if (err) {
      throw err;
    }
    console.log("collection run complete!");
  }
);
