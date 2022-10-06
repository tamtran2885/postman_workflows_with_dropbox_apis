# dropbox-api-postman collection

This repo is a placeholder to maintain Dropbox API Postman Collection.

## Keys used in APIs:

- Client ID: the client identifier issued to the client during the Application registration process.
- Client Secret: the client secret issued to the client during the Application registration process.
- Auth URL: the end point for authorization server. This is used to get the authorization code.
- Access Token URL: the end point for authorization server. This is used to exchange the authorization code for an access token.

## Run and test collection:

#### 1. Fork the collection

[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/16978833-108a4f17-d9aa-411a-851d-1ad106bc2da6?action=collection%2Ffork&collection-url=entityId%3D16978833-108a4f17-d9aa-411a-851d-1ad106bc2da6%26entityType%3Dcollection%26workspaceId%3Dfbdea7d7-a03d-4269-8090-270c57da2e0a)

#### 2. The collection uses local variables which are available throughout the requests in the collection and are independent of environments.

#### 3. Generate Access Token using OAuth 2

- After sharing the collection, the access token will not persist in the new workspace. Therefore, it is necessary to regenerate a new access token. In the Authorization tab of the collection, select Get New Access Token.

- By default, requests inside the collection will inherit auth from the parent, and they will use the same auth specified at the collection level.

#### 4. Modify upload file request

Because the file path would be invalid after sharing requests between different machines, Collection Runner would not support uploading file. Before running collection, it is essential to manually select file to be uploaded in the request body. In this collection, it is supposed that the request will upload a text file (.txt), so it is important to manually select a text file to run successfully the collection later.

#### 5. Use Collection Runner to run API requests in a specified sequence.

## Unsolved problems :

These are some issues that I haven't found the solutions. Could you please give me some advice on it ?

#### 1. Postman pre-request script to automatically get a bearer token from OAuth2 and save it for reuse

I am trying to create a pre-request script which gets the access token and sets it to the environment variable. The variable is used later for authentication for all requests inside the collection. However, this script did not work, could you please let me know whats wrong or missing and how it can be troubleshooted ? Thank you !

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

#### 2. Running collections on the command line with Newman

According to the materials, we can use Newman to run collection with file uploads. However, how can I keep updating the token which will be expired after a certain period of time ?

## Reference:

- Postman (https://www.postman.com/)
- Javascript (https://www.javascript.com/)
- Newman (https://www.npmjs.com/package/newman)

## Repository

- https://github.com/tamtran2885/postman_workflows_with_dropbox_apis
