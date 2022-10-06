# dropbox-api-postman collection

This repo is a placeholder to maintain Dropbox API Postman Collection.

Please follow this tutorial to import this [Postman Collection](https://www.getpostman.com/docs/collections).

![Postman](./apigee-edge-mgmt-api-postman-collection.png)

## Keys used in APIs:

- App_key -
- App_secret -
- Auth_url -
- Access_token_url -

## Technology and dependencies used:

- Postman
- Javascript (https://www.javascript.com/)
- Newman - optional

## Install and Set up repository:

- Clone this repository
- Install the dependencies of this project with "npm install"

## Running test suite:

To run our test suite:

1. Fork the collection from public workspace

[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/16978833-108a4f17-d9aa-411a-851d-1ad106bc2da6?action=collection%2Ffork&collection-url=entityId%3D16978833-108a4f17-d9aa-411a-851d-1ad106bc2da6%26entityType%3Dcollection%26workspaceId%3Dfbdea7d7-a03d-4269-8090-270c57da2e0a)

2. This collection uses Collection variables which are only appealed to all the requests within this collection.

3. Generate Access Token using OAuth 2

- Open the authorization tab

- Press "Request Token" and a new window will open up asking for your credentials

4. Inside every request, check Authorization tab to make sure option "Inherit from parent" is chosen

## Further development:

- The author of this application has tried to create a pre-request script to generate a OAuth2 token automatically when running test. However, the script didn't work well.

### Collection Pre-request script

```javascript
pm.sendRequest(
  {
    url: pm.variables.get("Access_token_url"),
    method: "POST",
    header: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: pm.variables.get("Auth_url"),
    },
    body: {
      mode: "urlencoded",
      urlencoded: [
        { key: "grant_type", value: "refresh_token", disabled: false },
        {
          key: "client_id",
          value: pm.variables.get("App_key"),
          disabled: false,
        },
        {
          key: "client_secret",
          value: pm.variables.get("App_secret"),
          disabled: false,
        },
        {
          key: "refresh_token",
          value: pm.variables.get("refresh_token"),
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

## Repository

- https://github.com/tamtran2885/postman_workflows_with_dropbox_apis
