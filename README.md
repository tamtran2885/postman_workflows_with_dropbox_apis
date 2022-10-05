# dropbox-api-postman collection

This repo is a placeholder to maintain Dropbox API Postman Collection. See uploaded file.

This repository is created to perform API test automation of [dropbox api postman collection](https://opensource-demo.orangehrmlive.coms).

[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/16978833-108a4f17-d9aa-411a-851d-1ad106bc2da6?action=collection%2Ffork&collection-url=entityId%3D16978833-108a4f17-d9aa-411a-851d-1ad106bc2da6%26entityType%3Dcollection%26workspaceId%3Dfbdea7d7-a03d-4269-8090-270c57da2e0a)

Please follow this tutorial to import this [Postman Collection](https://www.getpostman.com/docs/collections).

![Postman](./apigee-edge-mgmt-api-postman-collection.png)

##Keys used in APIs:

- ORG - organization
- ENV - environment
- API - API name
- BASICAUTH - Basic Auth header consisting of base64(admin id:admin pwd)
- PROTO - protocol
- HOST - hostname

## Technology and dependencies used:

- Postman
- Javascript (https://www.javascript.com/)
- Newman

## Install and Set up repository:

- Clone this repository
- Install the dependencies of this project with "npm install"

## Running test suite:

To run our test suite:

- Open terminal
- Navigate to the folder where the project is located.
- Run "npm run test"

## Generate report with allure:

- Run "allure generate allure-results/ && allure open"

## Further development:

Due to time constraint, there are some aspects need further inspection and development to improve the project's quality including:

- Most of tests are performed using Implicit Wait which will add time to the test script execution time. In other to troubleshoot this issue, an Explicit Wait should be applied.
- Using regular expression to validate password.

## Repository

- https://github.com/tamtran2885/postman_workflows_with_dropbox_apis

```javascript
pm.environment.set("App_key", "7l2oaclsvnop3hz");
pm.environment.set("App_secret", "88r0zo6aqgxkxbj");
pm.environment.set("Auth_url", "https://www.dropbox.com/oauth2/authorize");
pm.environment.set(
  "Access_token_url",
  "https://api.dropboxapi.com/oauth2/token"
);

pm.sendRequest(
  {
    url: pm.environment.get("Access_token_url"),
    method: "POST",
    header: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: pm.environment.get("Auth_url"),
    },
    body: {
      mode: "urlencoded",
      urlencoded: [
        { key: "grant_type", value: "refresh_token", disabled: false },
        {
          key: "client_id",
          value: pm.environment.get("App_key"),
          disabled: false,
        },
        {
          key: "client_secret",
          value: pm.environment.get("App_secret"),
          disabled: false,
        },
        {
          key: "refresh_token",
          value: pm.environment.get("refresh_token"),
          disabled: false,
        },
      ],
    },
  },
  (err, res) => {
    pm.environment.set("access_token", res.json().access_token);
    pm.environment.set("refresh_token", res.json().refresh_token);
    pm.environment.set("token_created_at", res.json().created_at);
    console.log(res.json());
  }
);
```
